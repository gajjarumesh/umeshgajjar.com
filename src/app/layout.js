import App from "./app";
import "./globals.css";
export const metadata = {
  title: "Umesh Gajjar | Full Stack Developer | React, Node.js, Laravel Expert",
  description:
    "Explore Umesh Gajjar's full stack development portfolio. Expert in React.js, Laravel, Node.js, Vue.js, and scalable SaaS architecture. 6+ years of experience in building high-performance applications, remote team leadership, and DevOps delivery.",
  icons: {
    icon: "/favicon.png",
  },
  keywords:
    "Umesh Gajjar, Full Stack Developer, React Developer, Laravel Developer, Node.js, Vue.js, SaaS Developer, Web App Development, Remote Developer, Freelance Developer India, DevOps, PostgreSQL, AWS",
  authors: [{ name: "Umesh Gajjar" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://umeshgajjar.com/",
    title: "Umesh Gajjar | Full Stack Developer Portfolio",
    description:
      "Experienced Full Stack Developer with expertise in React.js, Laravel, Node.js, and scalable SaaS applications. View Umesh Gajjar's portfolio and projects.",
    images: [
      {
        url: "https://umeshgajjar.com/banner.png",
        width: 1200,
        height: 630,
        alt: "Umesh Gajjar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umesh Gajjar | Full Stack Developer Portfolio",
    description:
      "Experienced Full Stack Developer | React.js, Laravel, Node.js, Vue.js | Explore my projects and services",
    images: ["https://umeshgajjar.com/banner.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <App>{children}</App>
    </html>
  );
}
