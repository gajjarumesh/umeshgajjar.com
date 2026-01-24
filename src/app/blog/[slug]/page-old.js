import { notFound } from "next/navigation";
import { getBlogPostBySlug, blogPosts, getBlogPostsByCategory } from "@/data/blog";
import { generateMetadata as generateSEOMetadata, generateArticleSchema, injectStructuredData } from "@/lib/seo";
import BlogPostClient from "./BlogPostClient";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {};
  }

  return generateSEOMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    canonicalUrl: `https://umeshgajjar.com/blog/${post.slug}`,
    ogType: "article",
    ogImage: `https://umeshgajjar.com${post.image}`,
    publishedTime: new Date(post.date).toISOString(),
    modifiedTime: new Date(post.date).toISOString(),
    author: post.author,
  });
}

export default function BlogPostPage({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts from the same category
  const relatedPosts = getBlogPostsByCategory(post.category)
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  // Generate structured data
  const articleSchema = generateArticleSchema(post);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={injectStructuredData(articleSchema)}
      />

      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
