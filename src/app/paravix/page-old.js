import ParavixClient from "./ParavixClient";

// SEO Metadata
export const metadata = {
  title: "Paravix - Engineering Systems That Scale | Umesh Gajjar",
  description:
    "Paravix represents a philosophy of building web applications that are simple, maintainable, and scalable. Learn about our engineering principles and approach to system design.",
  keywords:
    "Paravix, software engineering, system design, scalable architecture, maintainability, engineering principles",
  alternates: {
    canonical: "https://umeshgajjar.com/paravix",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umeshgajjar.com/paravix",
    title: "Paravix - Engineering Systems That Scale | Umesh Gajjar",
    description:
      "Paravix represents a philosophy of building web applications that are simple, maintainable, and scalable. Learn about our engineering principles and approach to system design.",
    siteName: "Umesh Gajjar Portfolio",
  },
};

export default function ParavixPage() {
  return <ParavixClient />;
}
