import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Paravix | Engineering Systems That Scale",
  description:
    "Paravix builds scalable, maintainable web applications and backend systems, led by senior engineer Umesh Gajjar.",
  icons: {
    icon: "/favicon.png",
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
      <body className="bg-white text-secondary min-h-screen antialiased">
        <div className="relative">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
