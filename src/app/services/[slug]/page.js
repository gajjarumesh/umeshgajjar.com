import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/services";
import { generateMetadata as generateSEOMetadata, generateServiceSchema, generateFAQSchema, injectStructuredData } from "@/lib/seo";
import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {};
  }

  return generateSEOMetadata({
    title: service.title,
    description: service.description,
    keywords: [service.title, ...service.technologies, "web development", "software development"].join(", "),
    canonicalUrl: `https://umeshgajjar.com/services/${service.slug}`,
    ogType: "website",
  });
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Get related services (exclude current service) and prepare them for client
  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3)
    .map(({ icon, ...rest }) => rest); // Remove icon function

  // Prepare service data for client (remove icon function)
  const { icon, ...serviceData } = service;

  // Generate structured data
  const serviceSchema = generateServiceSchema(service);
  const faqSchema = generateFAQSchema(service.faqs);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={injectStructuredData(serviceSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={injectStructuredData(faqSchema)}
      />

      <ServiceDetailClient 
        service={serviceData} 
        relatedServices={relatedServices}
        iconName={icon.name}
      />
    </>
  );
}
