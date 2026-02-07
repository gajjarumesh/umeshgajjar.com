import Link from "next/link";
import { getCollection, COLLECTIONS } from "@/lib/db";

export const metadata = {
  title: "Paravix | Engineering Systems That Scale",
  description: "Paravix builds scalable, maintainable web applications and backend systems, led by senior engineer Umesh Gajjar.",
};

async function getLatestBlogs() {
  try {
    const blogs = await getCollection(COLLECTIONS.BLOGS);
    return await blogs
      .find({ published: true })
      .sort({ createdAt: -1 })
      .limit(2)
      .toArray();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function Home() {
  const latestBlogs = await getLatestBlogs();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Engineering Systems That Survive Real Usage
            </h1>
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-4 mb-10">
              <p>
                Paravix is an engineering-focused brand led by Umesh Gajjar.
                It exists to design and build software systems that remain reliable,
                understandable, and maintainable long after they are launched.
              </p>
              <p>
                This work is shaped by real constraints: growing user bases,
                changing requirements, deadlines, and long-term ownership.
                The goal is not speed alone, but durability.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Engineering blog
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Paravix Does */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              What Paravix Focuses On
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                Paravix works on systems where correctness, clarity,
                and long-term stability matter.
              </p>
              <p className="font-medium">Areas include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Full-stack web applications</li>
                <li>Backend APIs and architecture</li>
                <li>Authentication and authorization</li>
                <li>Performance-focused frontends</li>
                <li>Engineering reviews and audits</li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Link
                href="/services"
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                View services →
              </Link>
              <Link
                href="/paravix"
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                Learn about Paravix →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Paravix Thinks */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Engineering Is About Decisions, Not Just Code
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                Most software problems are not caused by missing tools.
                They are caused by early decisions made without long-term context.
              </p>
              <p>
                Paravix introduces complexity only when it earns its place.
                Systems are designed to be readable years later,
                not just functional today.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
            >
              Read engineering insights →
            </Link>
          </div>
        </div>
      </section>

      {/* Content Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Thoughts From Real Projects
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              The Paravix Engineering Blog documents real production decisions,
              tradeoffs, and lessons learned over time.
            </p>

            {/* Latest Blog Posts */}
            {latestBlogs.length > 0 && (
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {latestBlogs.map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blog/${blog.slug}`}
                    className="border border-gray-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {blog.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <span className="text-indigo-600 text-sm font-medium">
                      Read article →
                    </span>
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/blog"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              View all blog posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
