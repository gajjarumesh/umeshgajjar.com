"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogPostClient({ blog, relatedBlogs, initialComments }) {
  const [comments, setComments] = useState(initialComments);
  const [formData, setFormData] = useState({ name: "", email: "", content: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Record view
    fetch("/api/blogs/views", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: blog.slug }),
    }).catch(console.error);
  }, [blog.slug]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blogSlug: blog.slug,
          ...formData,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Comment submitted for moderation. It will appear after approval.",
        });
        setFormData({ name: "", email: "", content: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to submit comment.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-gray-600">
            <Link href="/blog" className="hover:text-indigo-600">
              Blog
            </Link>
            <span className="mx-2">→</span>
            <span>{blog.title}</span>
          </div>

          {/* Article Header */}
          <article className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
              {blog.createdAt && (
                <span>
                  {new Date(blog.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              )}
              {blog.viewCount !== undefined && (
                <span>{blog.viewCount} views</span>
              )}
            </div>

            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {blog.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              {blog.content ? (
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              ) : (
                <p>Content not available.</p>
              )}
            </div>

            {/* Internal Links Section */}
            <div className="border-t border-gray-200 pt-8 space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Continue Reading
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="text-indigo-600 font-medium hover:text-indigo-700"
                >
                  Explore engineering services →
                </Link>
                <Link
                  href="/paravix"
                  className="text-indigo-600 font-medium hover:text-indigo-700"
                >
                  Learn about Paravix →
                </Link>
              </div>
            </div>
          </article>

          {/* Related Blogs */}
          {relatedBlogs.length > 0 && (
            <section className="mb-12 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Related Articles
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedBlogs.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="border border-gray-200 bg-white rounded-lg p-4 hover:border-indigo-300 hover:shadow-md transition-all"
                  >
                    <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {related.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Comments Section */}
          <section className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Comments ({comments.length})
            </h3>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-12 bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Leave a Comment</h4>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                    Comment *
                  </label>
                  <textarea
                    id="content"
                    required
                    rows="4"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  />
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Comment"}
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.length === 0 ? (
                <p className="text-gray-600">No comments yet. Be the first to comment!</p>
              ) : (
                comments.map((comment) => (
                  <div key={comment._id} className="border-l-4 border-indigo-200 pl-6 py-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-gray-900">{comment.name}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
