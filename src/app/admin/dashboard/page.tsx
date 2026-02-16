'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/Button';
import {
  FiFileText,
  FiEye,
  FiHeart,
  FiMessageCircle,
  FiTrendingUp,
  FiPlus,
  FiEdit,
} from 'react-icons/fi';

interface BlogStats {
  _id: string;
  count: number;
  totalViews: number;
  totalLikes: number;
}

interface RecentBlog {
  _id: string;
  title: string;
  slug: string;
  status: string;
  views: number;
  likes: number;
  comments: any[];
  createdAt: string;
  updatedAt: string;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<BlogStats[]>([]);
  const [recentBlogs, setRecentBlogs] = useState<RecentBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/admin/blogs?limit=5');
      if (response.ok) {
        const data = await response.json();
        setStats(data.stats);
        setRecentBlogs(data.blogs);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTotalsByStatus = (status: string) => {
    const stat = stats.find(s => s._id === status);
    return {
      count: stat?.count || 0,
      views: stat?.totalViews || 0,
      likes: stat?.totalLikes || 0,
    };
  };

  const getTotals = () => {
    return stats.reduce(
      (acc, stat) => ({
        count: acc.count + stat.count,
        views: acc.views + stat.totalViews,
        likes: acc.likes + stat.totalLikes,
      }),
      { count: 0, views: 0, likes: 0 }
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-fontColor/70">Loading dashboard...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  const published = getTotalsByStatus('published');
  const draft = getTotalsByStatus('draft');
  const totals = getTotals();

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Quick Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-fontColor mb-2">
              Welcome back! 👋
            </h2>
            <p className="text-fontColor/70">
              Here's what's happening with your blog today.
            </p>
          </div>
          <Link href="/admin/blogs/new">
            <Button className="inline-flex items-center gap-2">
              <FiPlus className="w-4 h-4" />
              New Blog Post
            </Button>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-secondary/20">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <FiFileText className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-bold text-fontColor">
                {totals.count}
              </span>
            </div>
            <h3 className="font-semibold text-fontColor mb-1">Total Posts</h3>
            <p className="text-sm text-fontColor/60">
              {published.count} published, {draft.count} drafts
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-secondary/20">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <FiEye className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-2xl font-bold text-fontColor">
                {totals.views.toLocaleString()}
              </span>
            </div>
            <h3 className="font-semibold text-fontColor mb-1">Total Views</h3>
            <p className="text-sm text-fontColor/60">
              Across all published posts
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-secondary/20">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-pattern/10 rounded-xl">
                <FiHeart className="w-6 h-6 text-pattern" />
              </div>
              <span className="text-2xl font-bold text-fontColor">
                {totals.likes.toLocaleString()}
              </span>
            </div>
            <h3 className="font-semibold text-fontColor mb-1">Total Likes</h3>
            <p className="text-sm text-fontColor/60">
              From all readers
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-secondary/20">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <FiMessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-fontColor">
                {recentBlogs.reduce((acc, blog) => acc + blog.comments.length, 0)}
              </span>
            </div>
            <h3 className="font-semibold text-fontColor mb-1">Comments</h3>
            <p className="text-sm text-fontColor/60">
              Awaiting moderation
            </p>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-white rounded-3xl border border-secondary/20">
          <div className="p-8 border-b border-secondary/20">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-fontColor">Recent Posts</h3>
              <Link href="/admin/blogs">
                <Button variant="outline">View All</Button>
              </Link>
            </div>
          </div>

          <div className="p-8">
            {recentBlogs.length > 0 ? (
              <div className="space-y-6">
                {recentBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="flex items-center justify-between p-6 bg-background rounded-2xl border border-secondary/20 hover:shadow-sm transition-shadow"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-fontColor hover:text-primary transition-colors">
                          <Link href={`/admin/blogs/edit/${blog._id}`}>
                            {blog.title}
                          </Link>
                        </h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          blog.status === 'published' 
                            ? 'bg-green-100 text-green-700' 
                            : blog.status === 'draft'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {blog.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-fontColor/60">
                        <span>Updated {formatDate(blog.updatedAt)}</span>
                        <div className="flex items-center gap-1">
                          <FiEye className="w-4 h-4" />
                          <span>{blog.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiHeart className="w-4 h-4" />
                          <span>{blog.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiMessageCircle className="w-4 h-4" />
                          <span>{blog.comments.length}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link href={`/blog/${blog.slug}`} target="_blank">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </Link>
                      <Link href={`/admin/blogs/edit/${blog._id}`}>
                        <Button variant="outline" size="sm">
                          <FiEdit className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FiFileText className="w-16 h-16 text-fontColor/30 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-fontColor mb-2">
                  No blog posts yet
                </h4>
                <p className="text-fontColor/60 mb-6">
                  Get started by creating your first blog post.
                </p>
                <Link href="/admin/blogs/new">
                  <Button>Create Your First Post</Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/admin/blogs">
            <div className="bg-white rounded-2xl p-6 border border-secondary/20 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <FiFileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-fontColor group-hover:text-primary transition-colors">
                    Manage Posts
                  </h3>
                  <p className="text-sm text-fontColor/60">
                    Edit, delete, or organize your blog posts
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/admin/comments">
            <div className="bg-white rounded-2xl p-6 border border-secondary/20 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                  <FiMessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-fontColor group-hover:text-secondary transition-colors">
                    Moderate Comments
                  </h3>
                  <p className="text-sm text-fontColor/60">
                    Approve or reject reader comments
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog" target="_blank">
            <div className="bg-white rounded-2xl p-6 border border-secondary/20 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-pattern/10 rounded-xl group-hover:bg-pattern/20 transition-colors">
                  <FiTrendingUp className="w-6 h-6 text-pattern" />
                </div>
                <div>
                  <h3 className="font-semibold text-fontColor group-hover:text-pattern transition-colors">
                    View Live Blog
                  </h3>
                  <p className="text-sm text-fontColor/60">
                    See how your blog looks to visitors
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
}