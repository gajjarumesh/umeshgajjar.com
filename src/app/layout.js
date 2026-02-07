import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import ThreeBackground from "@/components/ThreeBackground";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Paravix | Engineering Systems That Scale",
  description:
    "Paravix builds scalable, maintainable web applications and backend systems, led by senior engineer Umesh Gajjar.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "Paravix, Umesh Gajjar, Engineering, Full Stack Developer, React, Node.js, MongoDB, System Design, Backend Architecture",
  authors: [{ name: "Umesh Gajjar" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://umeshgajjar.com/",
    title: "Paravix | Engineering Systems That Scale",
    description:
      "Paravix builds scalable, maintainable web applications and backend systems, led by senior engineer Umesh Gajjar.",
    images: [
      {
        url: "https://umeshgajjar.com/banner.png",
        width: 1200,
        height: 630,
        alt: "Paravix Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paravix | Engineering Systems That Scale",
    description:
      "Engineering-focused brand dedicated to building maintainable software systems",
    images: ["https://umeshgajjar.com/banner.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThreeBackground />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
