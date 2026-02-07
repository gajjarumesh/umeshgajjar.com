import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThreeBackground from '@/components/ThreeBackground';
import { Analytics } from '@vercel/analytics/next';
import { generatePageMetadata, generatePersonSchema, generateWebsiteSchema, injectStructuredData } from '@/lib/seo';

export const metadata = generatePageMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" suppressHydrationWarning>
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
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider>
          <ThreeBackground />
          <div className="relative z-10">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
