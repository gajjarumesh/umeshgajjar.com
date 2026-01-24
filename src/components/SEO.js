import Head from "next/head";
import { SITE_CONFIG } from "@/lib/constants";
import { generatePageMetadata, generateStructuredData } from "@/lib/seo";

export default function SEO({
  title,
  description,
  image,
  url,
  type = "website",
  author,
  publishedTime,
  modifiedTime,
  tags,
  noindex = false,
  structuredDataType,
  structuredDataProps,
}) {
  const metadata = generatePageMetadata({
    title,
    description,
    image,
    url,
  });

  let structuredData = null;
  if (structuredDataType && structuredDataProps) {
    structuredData = generateStructuredData(
      structuredDataType,
      structuredDataProps
    );
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:url" content={metadata.url} />

      {/* Article specific */}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" &&
        tags &&
        tags.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.image} />

      {/* Canonical URL */}
      <link rel="canonical" href={metadata.url} />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}
