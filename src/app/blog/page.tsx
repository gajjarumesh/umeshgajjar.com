import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import {
  generatePageMetadata,
  injectStructuredData,
  generateBreadcrumbSchema,
  generateArticleSchema,
} from '@/lib/seo';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

export const metadata = generatePageMetadata({
  title: 'Engineering Blog - Web Development Insights & Best Practices',
  description:
    'Technical blog by Umesh Gajjar covering Next.js, React, Node.js, WordPress, and full-stack development. Learn best practices, performance optimization, architecture patterns, and modern development trends.',
  keywords: [
    'Web Development Blog',
    'Next.js Tutorial',
    'React Best Practices',
    'Node.js Performance',
    'WordPress Headless CMS',
    'Full Stack Development',
    'Frontend Architecture',
    'Backend Development',
    'JavaScript',
    'TypeScript',
  ],
  path: '/blog',
});

// Placeholder blog articles
const articles = [
  {
    slug: 'building-scalable-nextjs-applications-2026',
    title: 'Building Scalable Next.js Applications: Best Practices for 2026',
    excerpt:
      'Learn how to architect and build production-ready Next.js applications that scale. Covers App Router patterns, server components, caching strategies, database optimization, and deployment best practices for high-traffic applications.',
    publishedTime: '2026-01-15T10:00:00Z',
    readTime: '12 min read',
    category: 'Next.js',
    tags: ['Next.js', 'React', 'Scalability', 'Performance', 'Best Practices'],
    author: 'Umesh Gajjar',
    featured: true,
  },
  {
    slug: 'wordpress-headless-cms-complete-guide-react',
    title: 'WordPress Headless CMS: Complete Guide for React Developers',
    excerpt:
      'Comprehensive guide to building modern web applications using WordPress as a headless CMS with React/Next.js frontend. Covers WPGraphQL setup, authentication, preview mode, image optimization, and deployment strategies.',
    publishedTime: '2026-01-10T09:00:00Z',
    readTime: '15 min read',
    category: 'WordPress',
    tags: ['WordPress', 'Headless CMS', 'React', 'Next.js', 'WPGraphQL'],
    author: 'Umesh Gajjar',
    featured: true,
  },
  {
    slug: 'nodejs-performance-optimization-production',
    title: 'Node.js Performance Optimization: Techniques for Production Apps',
    excerpt:
      'Deep dive into Node.js performance optimization covering event loop, clustering, caching strategies, database query optimization, memory management, and monitoring. Real-world examples from production applications.',
    publishedTime: '2026-01-05T11:00:00Z',
    readTime: '18 min read',
    category: 'Node.js',
    tags: ['Node.js', 'Performance', 'Backend', 'Optimization', 'Production'],
    author: 'Umesh Gajjar',
    featured: true,
  },
  {
    slug: 'modern-frontend-architecture-react-nextjs',
    title: 'Modern Frontend Architecture: From React to Next.js App Router',
    excerpt:
      'Evolution of frontend architecture patterns from traditional React SPAs to Next.js App Router. Discusses component architecture, state management, data fetching, routing, and choosing the right approach for your project.',
    publishedTime: '2025-12-28T08:00:00Z',
    readTime: '14 min read',
    category: 'Frontend',
    tags: [
      'React',
      'Next.js',
      'Architecture',
      'Frontend',
      'App Router',
    ],
    author: 'Umesh Gajjar',
    featured: false,
  },
  {
    slug: 'full-stack-development-trends-2026',
    title: 'Full Stack Development Trends: What to Learn in 2026',
    excerpt:
      'Comprehensive overview of emerging technologies and trends in full-stack development for 2026. Covers AI integration, edge computing, serverless architecture, modern frameworks, and essential skills for staying competitive.',
    publishedTime: '2025-12-20T07:00:00Z',
    readTime: '10 min read',
    category: 'Career',
    tags: [
      'Full Stack',
      'Trends',
      'Career',
      'Learning',
      'Technology',
    ],
    author: 'Umesh Gajjar',
    featured: false,
  },
];

// Get unique categories
const categories = Array.from(new Set(articles.map((a) => a.category)));

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
  ]);

  const featuredArticles = articles.filter((a) => a.featured);
  const regularArticles = articles.filter((a) => !a.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={injectStructuredData(breadcrumbSchema)}
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Engineering Blog
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
            Insights on modern web development, best practices, and lessons
            learned from real-world projects
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Covering Next.js, React, Node.js, WordPress, and full-stack
            development
          </p>
        </div>
      </Section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <Section className="bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Featured Articles
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Most popular and in-depth technical content
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => {
                const articleSchema = generateArticleSchema({
                  title: article.title,
                  description: article.excerpt,
                  slug: article.slug,
                  publishedTime: article.publishedTime,
                  author: article.author,
                  keywords: article.tags,
                });

                return (
                  <article
                    key={article.slug}
                    className="group bg-white dark:bg-gray-800 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg overflow-hidden hover:border-indigo-400 dark:hover:border-indigo-600 transition-all hover:shadow-lg"
                  >
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={injectStructuredData(
                        articleSchema
                      )}
                    />

                    {/* Category Badge */}
                    <div className="p-6 pb-4">
                      <span className="inline-block px-3 py-1 text-sm font-semibold bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
                        {article.category}
                      </span>
                    </div>

                    <div className="px-6 pb-6">
                      <Link href={`/blog/${article.slug}`}>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {article.title}
                        </h3>
                      </Link>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <FiCalendar className="w-4 h-4" />
                          {new Date(article.publishedTime).toLocaleDateString(
                            'en-US',
                            { month: 'short', day: 'numeric', year: 'numeric' }
                          )}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiClock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>

                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:gap-3 transition-all"
                      >
                        Read Article
                        <FiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Section>
      )}

      {/* All Articles */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              All Articles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Browse all technical articles and tutorials
            </p>
          </div>

          {/* Category Filter - for future implementation */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium">
                All Posts
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles List */}
          <div className="space-y-6">
            {articles.map((article) => {
              const articleSchema = generateArticleSchema({
                title: article.title,
                description: article.excerpt,
                slug: article.slug,
                publishedTime: article.publishedTime,
                author: article.author,
                keywords: article.tags,
              });

              return (
                <article
                  key={article.slug}
                  className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:shadow-lg"
                >
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={injectStructuredData(
                      articleSchema
                    )}
                  />

                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
                          {article.category}
                        </span>
                      </div>

                      <Link href={`/blog/${article.slug}`}>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                          {article.title}
                        </h3>
                      </Link>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <FiCalendar className="w-4 h-4" />
                          {new Date(article.publishedTime).toLocaleDateString(
                            'en-US',
                            {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            }
                          )}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiClock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:gap-3 transition-all"
                      >
                        Read Full Article
                        <FiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Latest Articles
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Get notified when I publish new articles on web development, best
            practices, and technical insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100"
            >
              Get in Touch
            </Button>
            <Button
              href="/projects"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              View Projects
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
