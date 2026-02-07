import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';
import { Analytics } from '@vercel/analytics/next';
import { generatePageMetadata, generatePersonSchema, generateWebsiteSchema, injectStructuredData } from '@/lib/seo';

export const metadata = generatePageMetadata({
  icons: {
    icon: '/favicon.png',
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={injectStructuredData(personSchema)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={injectStructuredData(websiteSchema)}
        />
      </head>
      <body className="bg-gradient-to-br from-white via-blue-50 to-sky-100 text-gray-900 min-h-screen">
        {/* Background depth elements for glass visibility */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/15 rounded-full blur-3xl"></div>
        </div>
        
        <ThreeBackground />
        <div className="relative z-10">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
