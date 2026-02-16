'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/Button';
import {
  FiEdit,
  FiTrash2,
  FiEye,
  FiHeart,
  FiMessageCircle,
  FiPlus,
  FiSearch,
  FiFilter,
FiMoreVertical, 
FiFileText
} from 'react-icons/fi';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  status: 'draft' | 'published' | 'archived';
  views: number;
  likes: number;
  comments: any[];
  author: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  categories: string[];
  tags: string[];
}

interface BlogsResponse {
  blogs: Blog[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalBlogs: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  stats: any[];
}

export default function AdminBlogsPage() {
  const [blogsData, setBlogsData] = useState<BlogsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, [currentPage, statusFilter]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '10',
      });

      if (statusFilter !== 'all') {
        params.append('status', statusFilter);
      }

      const response = await fetch(`/api/admin/blogs?${params}`);
      if (response.ok) {
        const data = await response.json();
        setBlogsData(data);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (blogId: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
      return;
    }

    setDeleteLoading(blogId);
    try {
      const response = await fetch(`/api/admin/blogs/${blogId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchBlogs();
      } else {
        alert('Failed to delete blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog');
    } finally {
      setDeleteLoading(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'draft':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'archived':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  if (loading && !blogsData) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-fontColor/70">Loading blogs...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-fontColor">All Blog Posts</h1>
            <p className="text-fontColor/70 mt-1">
              Manage your blog posts and track their performance
            </p>
          </div>
          <Link href="/admin/blogs/new">
            <Button className="inline-flex items-center gap-2">
              <FiPlus className="w-4 h-4" />
              New Blog Post
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 border border-secondary/20">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <FiFilter className="w-4 h-4 text-fontColor/60" />
              <span className="text-sm font-medium text-fontColor">Filter by status:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['all', 'published', 'draft', 'archived'].map((status) => (
                <button
                  key={status}
                  onClick={() => {
                    setStatusFilter(status);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    statusFilter === status
                      ? 'bg-primary text-white'
                      : 'bg-background text-fontColor/70 hover:text-fontColor hover:bg-secondary/10'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                  {blogsData && status !== 'all' && (
                    <span className="ml-1">
                      ({blogsData.stats.find(s => s._id === status)?.count || 0})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blogs Table */}
        <div className="bg-white rounded-3xl border border-secondary/20 overflow-hidden">
          {blogsData && blogsData.blogs.length > 0 ? (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-secondary/20 bg-background/50">
                      <th className="text-left p-6 font-semibold text-fontColor">Title</th>
                      <th className="text-left p-6 font-semibold text-fontColor">Status</th>
                      <th className="text-left p-6 font-semibold text-fontColor">Stats</th>
                      <th className="text-left p-6 font-semibold text-fontColor">Date</th>
                      <th className="text-right p-6 font-semibold text-fontColor">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogsData.blogs.map((blog) => (
                      <tr
                        key={blog._id}
                        className="border-b border-secondary/10 hover:bg-background/30 transition-colors"
                      >
                        <td className="p-6">
                          <div>
                            <h3 className="font-semibold text-fontColor mb-1 line-clamp-2">
                              {blog.title}
                            </h3>
                            <p className="text-sm text-fontColor/60 line-clamp-2">
                              {blog.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {blog.categories.slice(0, 2).map((category) => (
                                <span
                                  key={category}
                                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                                >
                                  {category}
                                </span>
                              ))}
                              {blog.categories.length > 2 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  +{blog.categories.length - 2}
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="p-6">
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                              blog.status
                            )}`}
                          >
                            {blog.status}
                          </span>
                        </td>
                        <td className="p-6">
                          <div className="flex items-center gap-4 text-sm text-fontColor/60">
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
                        </td>
                        <td className="p-6">
                          <div className="text-sm">
                            <p className="text-fontColor">
                              {blog.status === 'published' && blog.publishedAt
                                ? `Published ${formatDate(blog.publishedAt)}`
                                : `Updated ${formatDate(blog.updatedAt)}`}
                            </p>
                            <p className="text-fontColor/60">
                              Created {formatDate(blog.createdAt)}
                            </p>
                          </div>
                        </td>
                        <td className="p-6">
                          <div className="flex items-center justify-end gap-2">
                            {blog.status === 'published' && (
                              <Link
                                href={`/blog/${blog.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button variant="outline" size="sm">
                                  <FiEye className="w-4 h-4" />
                                </Button>
                              </Link>
                            )}
                            <Link href={`/admin/blogs/edit/${blog._id}`}>
                              <Button variant="outline" size="sm">
                                <FiEdit className="w-4 h-4" />
                              </Button>
                            </Link>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(blog._id, blog.title)}
                              disabled={deleteLoading === blog._id}
                              className="text-red-600 border-red-200 hover:bg-red-50"
                            >
                              {deleteLoading === blog._id ? (
                                <div className="w-4 h-4 border-2 border-red-600/30 border-t-red-600 rounded-full animate-spin" />
                              ) : (
                                <FiTrash2 className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {blogsData.pagination.totalPages > 1 && (
                <div className="p-6 border-t border-secondary/20">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-fontColor/60">
                      Showing {(currentPage - 1) * 10 + 1} to{' '}
                      {Math.min(currentPage * 10, blogsData.pagination.totalBlogs)} of{' '}
                      {blogsData.pagination.totalBlogs} results
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={!blogsData.pagination.hasPrev}
                      >
                        Previous
                      </Button>
                      <span className="px-4 py-2 text-sm text-fontColor">
                        Page {blogsData.pagination.currentPage} of {blogsData.pagination.totalPages}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        disabled={!blogsData.pagination.hasNext}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <FiFileText className="w-16 h-16 text-fontColor/30 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-fontColor mb-4">
                {statusFilter === 'all' ? 'No blog posts yet' : `No ${statusFilter} posts`}
              </h3>
              <p className="text-fontColor/70 mb-8">
                {statusFilter === 'all' 
                  ? 'Get started by creating your first blog post.'
                  : `You don't have any ${statusFilter} posts at the moment.`
                }
              </p>
              <Link href="/admin/blogs/new">
                <Button>Create New Blog Post</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}