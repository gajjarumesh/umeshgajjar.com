'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/Button';
import { FiMessageCircle, FiUser, FiClock, FiCheck, FiX, FiEye, FiTrash2, FiFilter } from 'react-icons/fi';

interface Comment {
  _id: string;
  author: string;
  email: string;
  content: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  blogId: {
    _id: string;
    title: string;
    slug: string;
  };
}

export default function CommentsPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [processingIds, setProcessingIds] = useState<Set<string>>(new Set());

  const commentsPerPage = 10;

  useEffect(() => {
    fetchComments();
  }, [currentPage, filter]);

  const fetchComments = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/comments?page=${currentPage}&limit=${commentsPerPage}&status=${filter}`);
      if (response.ok) {
        const data = await response.json();
        setComments(data.comments || []);
        setTotalPages(Math.ceil(data.total / commentsPerPage));
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateCommentStatus = async (commentId: string, status: 'approved' | 'rejected') => {
    setProcessingIds(prev => new Set(prev).add(commentId));
    try {
      const response = await fetch(`/api/admin/comments/${commentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setComments(prev => 
          prev.map(comment => 
            comment._id === commentId 
              ? { ...comment, status }
              : comment
          )
        );
      } else {
        alert('Failed to update comment status');
      }
    } catch (error) {
      console.error('Error updating comment:', error);
      alert('Failed to update comment status');
    } finally {
      setProcessingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(commentId);
        return newSet;
      });
    }
  };

  const deleteComment = async (commentId: string) => {
    if (!confirm('Are you sure you want to delete this comment? This action cannot be undone.')) {
      return;
    }

    setProcessingIds(prev => new Set(prev).add(commentId));
    try {
      const response = await fetch(`/api/admin/comments/${commentId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setComments(prev => prev.filter(comment => comment._id !== commentId));
      } else {
        alert('Failed to delete comment');
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
      alert('Failed to delete comment');
    } finally {
      setProcessingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(commentId);
        return newSet;
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-green-700 bg-pattern border-green-200';
      case 'rejected':
        return 'text-red-700 bg-red-100 border-red-200';
      default:
        return 'text-yellow-700 bg-yellow-100 border-yellow-200';
    }
  };

  const getStatusCounts = () => {
    const counts = { all: comments.length, pending: 0, approved: 0, rejected: 0 };
    comments.forEach(comment => {
      counts[comment.status]++;
    });
    return counts;
  };

  const statusCounts = getStatusCounts();

  if (loading && comments.length === 0) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-fontColor/70">Loading comments...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-fontColor mb-2">Comments Moderation</h1>
          <p className="text-fontColor/70">Manage and moderate user comments on your blog posts</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-secondary/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <FiMessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-fontColor">{statusCounts.all}</p>
                <p className="text-sm text-fontColor/60">Total Comments</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-secondary/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <FiClock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-fontColor">{statusCounts.pending}</p>
                <p className="text-sm text-fontColor/60">Pending Review</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-secondary/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pattern rounded-xl flex items-center justify-center">
                <FiCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-fontColor">{statusCounts.approved}</p>
                <p className="text-sm text-fontColor/60">Approved</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-secondary/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <FiX className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-fontColor">{statusCounts.rejected}</p>
                <p className="text-sm text-fontColor/60">Rejected</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 border border-secondary/20">
          <div className="flex items-center gap-4">
            <FiFilter className="w-5 h-5 text-fontColor/60" />
            <div className="flex gap-2">
              {(['all', 'pending', 'approved', 'rejected'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => {
                    setFilter(status);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === status
                      ? 'bg-primary text-white'
                      : 'bg-background text-fontColor/70 hover:bg-primary/10'
                  }`}
                >
                  {status === 'all' ? 'All Comments' : status.charAt(0).toUpperCase() + status.slice(1)}
                  {status !== 'all' && (
                    <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                      {statusCounts[status]}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className="bg-white rounded-2xl border border-secondary/20 overflow-hidden">
          {comments.length === 0 ? (
            <div className="p-12 text-center">
              <FiMessageCircle className="w-16 h-16 text-fontColor/20 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-fontColor mb-2">No Comments Found</h3>
              <p className="text-fontColor/60">
                {filter === 'all' 
                  ? "No comments have been submitted yet."
                  : `No ${filter} comments found.`
                }
              </p>
            </div>
          ) : (
            <div className="divide-y divide-secondary/20">
              {comments.map((comment) => (
                <div key={comment._id} className="p-6 hover:bg-background/50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Comment Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <FiUser className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-fontColor">{comment.author}</p>
                          <p className="text-sm text-fontColor/60">{comment.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(comment.status)}`}>
                            {comment.status}
                          </span>
                          <span className="text-sm text-fontColor/50">
                            {formatDate(comment.createdAt)}
                          </span>
                        </div>
                      </div>

                      {/* Comment Content */}
                      <div className="mb-3">
                        <p className="text-fontColor leading-relaxed">{comment.content}</p>
                      </div>

                      {/* Blog Info */}
                      <div className="flex items-center gap-2 text-sm text-fontColor/60 mb-4">
                        <span>On:</span>
                        <a
                          href={`/blog/${comment.blogId.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 underline"
                        >
                          {comment.blogId.title}
                        </a>
                        <FiEye className="w-4 h-4 ml-1" />
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3">
                        {comment.status === 'pending' && (
                          <>
                            <Button
                              size="sm"
                              onClick={() => updateCommentStatus(comment._id, 'approved')}
                              disabled={processingIds.has(comment._id)}
                              className="bg-pattern hover:bg-pattern-700 text-white inline-flex items-center gap-2"
                            >
                              {processingIds.has(comment._id) ? (
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              ) : (
                                <FiCheck className="w-4 h-4" />
                              )}
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateCommentStatus(comment._id, 'rejected')}
                              disabled={processingIds.has(comment._id)}
                              className="border-red-200 text-red-600 hover:bg-red-50 inline-flex items-center gap-2"
                            >
                              {processingIds.has(comment._id) ? (
                                <div className="w-4 h-4 border-2 border-red-600/30 border-t-red-600 rounded-full animate-spin" />
                              ) : (
                                <FiX className="w-4 h-4" />
                              )}
                              Reject
                            </Button>
                          </>
                        )}
                        
                        {comment.status === 'approved' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateCommentStatus(comment._id, 'rejected')}
                            disabled={processingIds.has(comment._id)}
                            className="border-red-200 text-red-600 hover:bg-red-50 inline-flex items-center gap-2"
                          >
                            <FiX className="w-4 h-4" />
                            Reject
                          </Button>
                        )}
                        
                        {comment.status === 'rejected' && (
                          <Button
                            size="sm"
                            onClick={() => updateCommentStatus(comment._id, 'approved')}
                            disabled={processingIds.has(comment._id)}
                            className="bg-pattern hover:bg-pattern-700 text-white inline-flex items-center gap-2"
                          >
                            <FiCheck className="w-4 h-4" />
                            Approve
                          </Button>
                        )}
                        
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => deleteComment(comment._id)}
                          disabled={processingIds.has(comment._id)}
                          className="border-red-200 text-red-600 hover:bg-red-50 inline-flex items-center gap-2"
                        >
                          <FiTrash2 className="w-4 h-4" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between">
            <p className="text-sm text-fontColor/60">
              Page {currentPage} of {totalPages}
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1 || loading}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages || loading}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}