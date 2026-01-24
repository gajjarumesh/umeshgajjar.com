import Link from "next/link";
import { getCollection, COLLECTIONS } from "@/lib/db";

export const metadata = {
  title: "Engineering Blog | Paravix",
  description: "Practical engineering insights and real-world system design lessons.",
};

async function getBlogs(tag = null) {
  try {
    const blogs = await getCollection(COLLECTIONS.BLOGS);
    let query = { published: true };
    
    if (tag) {
      query.tags = tag;
    }
    
    return await blogs
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function BlogListing({ searchParams }) {
  const { tag } = await searchParams || {};
  const blogs = await getBlogs(tag);
  
  // Get unique tags from all blogs
  const allTags = blogs.reduce((tags, blog) => {
    if (blog.tags) {
      blog.tags.forEach(t => {
        if (!tags.includes(t)) tags.push(t);
      });
    }
    return tags;
  }, []);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Engineering Blog
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              This blog documents engineering thinking from real projects,
              focusing on decisions, tradeoffs, and lessons learned.
            </p>
          </div>

          {/* Tag Filter */}
          {allTags.length > 0 && (
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/blog"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    !tag
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All Posts
                </Link>
                {allTags.map((t) => (
                  <Link
                    key={t}
                    href={`/blog?tag=${encodeURIComponent(t)}`}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      tag === t
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Blog Grid */}
          {blogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                {tag ? `No blog posts found with tag "${tag}".` : "No blog posts available yet."}
              </p>
              {tag && (
                <Link
                  href="/blog"
                  className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-700"
                >
                  View all posts →
                </Link>
              )}
            </div>
          ) : (
            <div className="grid gap-8">
              {blogs.map((blog) => (
                <article
                  key={blog.slug}
                  className="border border-gray-200 rounded-lg p-8 hover:border-indigo-300 hover:shadow-lg transition-all"
                >
                  <Link href={`/blog/${blog.slug}`}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors">
                      {blog.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    {blog.viewCount !== undefined && (
                      <span>{blog.viewCount} views</span>
                    )}
                    {blog.createdAt && (
                      <span>
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    )}
                  </div>
                  
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {blog.tags.map((t) => (
                        <Link
                          key={t}
                          href={`/blog?tag=${encodeURIComponent(t)}`}
                          className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-200 transition-colors"
                        >
                          {t}
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-700"
                  >
                    Read article →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
