"use client";
import { useState, useEffect } from "react";
import AdminLayout from "@/components/AdminLayout";
import Link from "next/link";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs");
      const data = await response.json();
      setBlogs(data.blogs || []);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog post?")) {
      return;
    }

    try {
      const response = await fetch(`/api/blogs?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setBlogs(blogs.filter((blog) => blog._id !== id));
        alert("Blog deleted successfully");
      } else {
        alert("Failed to delete blog");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting blog");
    }
  };

  const togglePublish = async (blog) => {
    try {
      const response = await fetch("/api/blogs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: blog._id,
          published: !blog.published,
        }),
      });

      if (response.ok) {
        setBlogs(
          blogs.map((b) =>
            b._id === blog._id ? { ...b, published: !b.published } : b
          )
        );
      } else {
        alert("Failed to update blog");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Error updating blog");
    }
  };

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
          <div className="text-sm text-gray-600">
            Note: Create/Edit functionality requires a rich text editor implementation
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : blogs.length === 0 ? (
          <div className="bg-white rounded-lg p-12 border border-gray-200 text-center">
            <p className="text-gray-600 mb-4">No blog posts yet.</p>
            <p className="text-sm text-gray-500">
              Use MongoDB directly to add initial blog posts.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td className="px-6 py-4">
                      <Link
                        href={`/blog/${blog.slug}`}
                        target="_blank"
                        className="text-indigo-600 hover:text-indigo-700 font-medium"
                      >
                        {blog.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          blog.published
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {blog.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {blog.viewCount || 0}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {blog.createdAt
                        ? new Date(blog.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium space-x-2">
                      <button
                        onClick={() => togglePublish(blog)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        {blog.published ? "Unpublish" : "Publish"}
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
