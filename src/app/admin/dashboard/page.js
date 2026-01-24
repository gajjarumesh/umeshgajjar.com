"use client";
import { useState, useEffect } from "react";
import AdminLayout from "@/components/AdminLayout";
import Link from "next/link";

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch("/api/admin/analytics");
      const data = await response.json();
      setAnalytics(data);
    } catch (error) {
      console.error("Failed to fetch analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-12">Loading...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

        {/* Stats Grid */}
        {analytics?.stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Total Blogs</div>
              <div className="text-3xl font-bold text-gray-900">
                {analytics.stats.totalBlogs}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {analytics.stats.publishedBlogs} published
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Total Comments</div>
              <div className="text-3xl font-bold text-gray-900">
                {analytics.stats.totalComments}
              </div>
              <div className="text-sm text-orange-600 mt-1">
                {analytics.stats.pendingComments} pending
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Total Views</div>
              <div className="text-3xl font-bold text-gray-900">
                {analytics.stats.totalViews}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Messages</div>
              <div className="text-3xl font-bold text-gray-900">
                {analytics.stats.unreadMessages}
              </div>
              <div className="text-sm text-gray-500 mt-1">unread</div>
            </div>
          </div>
        )}

        {/* Top Blogs */}
        {analytics?.topBlogs && analytics.topBlogs.length > 0 && (
          <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Top Blog Posts
            </h2>
            <div className="space-y-3">
              {analytics.topBlogs.map((blog) => (
                <div
                  key={blog._id}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-gray-900 hover:text-indigo-600 flex-1"
                    target="_blank"
                  >
                    {blog.title}
                  </Link>
                  <span className="text-sm text-gray-500 ml-4">
                    {blog.viewCount} views
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/admin/blogs"
            className="bg-indigo-600 text-white rounded-lg p-6 hover:bg-indigo-700 transition-colors text-center"
          >
            <div className="text-2xl font-bold mb-2">Manage Blogs</div>
            <div className="text-indigo-100">Create, edit, or delete blog posts</div>
          </Link>

          <Link
            href="/admin/comments"
            className="bg-green-600 text-white rounded-lg p-6 hover:bg-green-700 transition-colors text-center"
          >
            <div className="text-2xl font-bold mb-2">Moderate Comments</div>
            <div className="text-green-100">
              Approve or reject user comments
            </div>
          </Link>

          <Link
            href="/"
            className="bg-gray-600 text-white rounded-lg p-6 hover:bg-gray-700 transition-colors text-center"
            target="_blank"
          >
            <div className="text-2xl font-bold mb-2">View Site</div>
            <div className="text-gray-100">See the public website</div>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
}
