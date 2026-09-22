// Centralized SEO configuration for the portfolio site

import { Metadata } from 'next';

// Site Configuration
export const siteConfig = {
  name: 'Umesh Gajjar',
  title: 'Umesh Gajjar | Full-Stack Lead',
  description: 'Full-Stack Lead with 7+ years of experience specializing in Next.js, React, Vue.js, Node.js, Laravel, and WordPress. Building fast, secure, and scalable web applications for startups, agencies, and SaaS companies.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://umeshgajjar.com',
  author: 'Umesh Gajjar',
  location: 'Pune, Maharashtra, India',
  email: 'urvishgajjar6@gmail.com',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Expert',
    'WordPress Developer',
    'Node.js Developer',
    'Vue.js Developer',
    'Pune Developer',
    'Freelance Developer',
    'Senior Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Laravel Developer',
    'PHP Developer',
    'Frontend Developer',
    'Backend Developer',
  ],
  social: {
    github: 'https://github.com/gajjarumesh',
    linkedin: 'https://www.linkedin.com/in/umesh-gajjar/',
    x: 'https://x.com/_umesh_gajjar',
  },
  banner: '/banner.png',
};

// Generate page metadata
interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
}

export function generatePageMetadata({
  title,
  description = siteConfig.description,
  keywords = siteConfig.keywords,
  path = '',
  ogImage = siteConfig.banner,
  type = 'website',
  publishedTime,
  modifiedTime,
}: GenerateMetadataProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const canonicalUrl = `${siteConfig.url}${path}`;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`;

  return {
    title: pageTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type,
      locale: 'en_US',
      url: canonicalUrl,
      title: pageTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [ogImageUrl],
      creator: '@umeshgajjar',
    },
  };
}

// JSON-LD Structured Data Schemas

// Person Schema
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/profile.jpg`,
    jobTitle: 'Full-Stack Lead',
    description: siteConfig.description,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.x,
    ],
    knowsAbout: [
      'React.js',
      'Next.js',
      'Vue.js',
      'Nuxt.js',
      'Node.js',
      'Laravel',
      'Symfony',
      'WordPress',
      'TypeScript',
      'JavaScript',
      'PHP',
      'Python',
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'AWS',
      'Docker',
      'DevOps',
      'Full Stack Development',
      'Frontend Development',
      'Backend Development',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Kadi Sarva Vishwavidyalaya',
    },
  };
}

// Website Schema
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// ProfilePage Schema
export function generateProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
      jobTitle: 'Full-Stack Lead',
      description: siteConfig.description,
      sameAs: [
        siteConfig.social.github,
        siteConfig.social.linkedin,
        siteConfig.social.x,
      ],
    },
  };
}

// Organization Schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.email,
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Hindi', 'Gujarati'],
    },
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.x,
    ],
  };
}

// Breadcrumb Schema
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.url}${crumb.path}`,
    })),
  };
}

// Helper function to inject JSON-LD
export function injectStructuredData(data: object) {
  return {
    __html: JSON.stringify(data),
  };
}
