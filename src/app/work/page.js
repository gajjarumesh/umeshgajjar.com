import WorkClient from "./WorkClient";

// SEO Metadata
export const metadata = {
  title: "Case Studies - Real Projects, Real Decisions | Umesh Gajjar",
  description:
    "Explore detailed case studies showcasing real challenges, solutions, and results from web development projects. Learn how we've built scalable systems for clients across various industries.",
  keywords:
    "case studies, web development projects, software development, system design, project portfolio, client success stories",
  alternates: {
    canonical: "https://umeshgajjar.com/work",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umeshgajjar.com/work",
    title: "Case Studies - Real Projects, Real Decisions | Umesh Gajjar",
    description:
      "Explore detailed case studies showcasing real challenges, solutions, and results from web development projects. Learn how we've built scalable systems for clients across various industries.",
    siteName: "Umesh Gajjar Portfolio",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
