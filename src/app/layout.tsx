import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import { generatePageMetadata, generatePersonSchema, generateWebsiteSchema, injectStructuredData } from '@/lib/seo';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap'
});

export const metadata = {
  ...generatePageMetadata(),
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" className={outfit.variable}>
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
