// SEO utility functions for generating meta tags and structured data

export const generateMetadata = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = "website",
  canonicalUrl,
  publishedTime,
  modifiedTime,
  author = "Umesh Gajjar",
}) => {
  const baseUrl = "https://umeshgajjar.com";
  const fullTitle = title
    ? `${title} | Umesh Gajjar`
    : "Umesh Gajjar | Full Stack Developer | React, Node.js, Laravel Expert";
  const fullDescription =
    description ||
    "Expert Full Stack Developer specializing in React.js, Laravel, Node.js, and scalable SaaS applications. 6+ years of experience building high-performance web solutions.";
  const fullCanonicalUrl = canonicalUrl || baseUrl;
  const fullOgImage = ogImage || `${baseUrl}/og-image.jpg`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords || [
      "Umesh Gajjar",
      "Full Stack Developer",
      "React Developer",
      "Laravel Developer",
      "Node.js Developer",
      "Web Development",
      "SaaS Development",
      "Remote Developer India",
    ].join(", "),
    authors: [{ name: author }],
    creator: author,
    publisher: author,
    robots: "index, follow",
    alternates: {
      canonical: fullCanonicalUrl,
    },
    openGraph: {
      type: ogType,
      locale: "en_US",
      url: fullCanonicalUrl,
      title: fullTitle,
      description: fullDescription,
      siteName: "Umesh Gajjar Portfolio",
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [fullOgImage],
      creator: "@umeshgajjar",
    },
  };
};

// Generate JSON-LD structured data for Person
export const generatePersonSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Umesh Gajjar",
    url: "https://umeshgajjar.com",
    image: "https://umeshgajjar.com/profile.jpg",
    jobTitle: "Full Stack Developer",
    description:
      "Expert Full Stack Developer with 6+ years of experience in React.js, Laravel, Node.js, and scalable SaaS applications.",
    email: "hello@umeshgajjar.com",
    sameAs: [
      "https://github.com/gajjarumesh",
      "https://linkedin.com/in/umeshgajjar",
      "https://twitter.com/umeshgajjar",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "Laravel",
      "Node.js",
      "Vue.js",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
      "DevOps",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Gujarat Technical University",
    },
  };
};

// Generate JSON-LD structured data for Organization
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Umesh Gajjar",
    url: "https://umeshgajjar.com",
    logo: "https://umeshgajjar.com/logo.png",
    description:
      "Professional Full Stack Development Services specializing in React, Laravel, Node.js, and SaaS applications.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@umeshgajjar.com",
      contactType: "Customer Service",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    sameAs: [
      "https://github.com/gajjarumesh",
      "https://linkedin.com/in/umeshgajjar",
      "https://twitter.com/umeshgajjar",
    ],
  };
};

// Generate JSON-LD structured data for Service
export const generateServiceSchema = (service) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Person",
      name: "Umesh Gajjar",
      url: "https://umeshgajjar.com",
    },
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://umeshgajjar.com/services/${service.slug}`,
    },
  };
};

// Generate JSON-LD structured data for Article/BlogPost
export const generateArticleSchema = (article) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: `https://umeshgajjar.com${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
      url: "https://umeshgajjar.com",
    },
    publisher: {
      "@type": "Person",
      name: "Umesh Gajjar",
      logo: {
        "@type": "ImageObject",
        url: "https://umeshgajjar.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://umeshgajjar.com/blog/${article.slug}`,
    },
    keywords: article.tags.join(", "),
  };
};

// Generate JSON-LD structured data for Project
export const generateProjectSchema = (project) => {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Person",
      name: "Umesh Gajjar",
      url: "https://umeshgajjar.com",
    },
    image: `https://umeshgajjar.com${project.image}`,
    keywords: project.tech.join(", "),
    ...(project.liveUrl && { url: project.liveUrl }),
  };
};

// Generate breadcrumb schema
export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `https://umeshgajjar.com${crumb.path}`,
    })),
  };
};

// Generate FAQ schema
export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

// Function to inject JSON-LD script
export const injectStructuredData = (data) => {
  return {
    __html: JSON.stringify(data),
  };
};
