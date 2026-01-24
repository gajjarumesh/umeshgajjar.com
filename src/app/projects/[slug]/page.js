import { notFound } from "next/navigation";
import { getProjectBySlug, allProjects } from "@/data/projects";
import { generateMetadata as generateSEOMetadata, generateProjectSchema, injectStructuredData } from "@/lib/seo";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {};
  }

  return generateSEOMetadata({
    title: project.title,
    description: project.description,
    keywords: [project.title, project.category, ...project.tech, "web development", "portfolio"].join(", "),
    canonicalUrl: `https://umeshgajjar.com/projects/${project.slug}`,
    ogType: "article",
    ogImage: `https://umeshgajjar.com${project.image}`,
  });
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Get next project for navigation
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  // Generate structured data
  const projectSchema = generateProjectSchema(project);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={injectStructuredData(projectSchema)}
      />

      <ProjectDetailClient project={project} nextProject={nextProject} />
    </>
  );
}
