import './globals.css';
import { Sidebar } from '@/components/Sidebar';
import { DimensionField } from '@/components/dimension/DimensionField';
import { SpatialShell } from '@/components/dimension/SpatialShell';
import { BootSequence } from '@/components/terminal/Terminal';
import { Analytics } from '@vercel/analytics/next';
import { generatePageMetadata, generatePersonSchema, generateWebsiteSchema, injectStructuredData } from '@/lib/seo';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
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
    <html lang="en" className={poppins.variable}>
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
      <body className="antialiased">
        {/* Boot log — once per session, skipped on reduced-motion */}
        <BootSequence />

        {/* The field: procedural, fixed, behind everything */}
        <DimensionField />

        {/* The stage: rail + camera viewport */}
        <div className="dim-stage">
          <Sidebar />
          <main className="dim-viewport">
            <SpatialShell>{children}</SpatialShell>
          </main>
        </div>

        <Analytics />
      </body>
    </html>
  );
}
