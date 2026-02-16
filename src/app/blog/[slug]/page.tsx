'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import {
  FiCalendar,
  FiTag,
  FiEye,
  FiHeart,
  FiMessageCircle,
  FiArrowLeft,
  FiUser,
  FiSend,
  FiClock,
} from 'react-icons/fi';

interface Comment {
  _id: string;
  name: string;
  email: string;
  content: string;
  createdAt: string;
  isApproved: boolean;
}

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  tags: string[];
  categories: string[];
  author: string;
  views: number;
  likes: number;
  comments: Comment[];
  createdAt: string;
  publishedAt: string;
  seoTitle?: string;
  seoDescription?: string;
}

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const [blog, setBlog] = useState<Blog | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [likesCount, setLikesCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    content: '',
  });
  const [commentLoading, setCommentLoading] = useState(false);
  const [commentSuccess, setCommentSuccess] = useState('');

  useEffect(() => {
    if (slug) {
      fetchBlog();
      fetchComments();
    }
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`/api/blogs/${slug}`);
      if (response.ok) {
        const data = await response.json();
        setBlog(data.blog);
        setLikesCount(data.blog.likes);
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/blogs/${slug}/comments`);
      if (response.ok) {
        const data = await response.json();
        setComments(data.comments);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleLike = async () => {
    if (hasLiked) return;
    
    try {
      const response = await fetch(`/api/blogs/${slug}`, {
        method: 'POST',
      });
      
      if (response.ok) {
        const data = await response.json();
        setLikesCount(data.likes);
        setHasLiked(true);
        localStorage.setItem(`liked-${slug}`, 'true');
      }
    } catch (error) {
      console.error('Error liking blog:', error);
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCommentLoading(true);
    
    try {
      const response = await fetch(`/api/blogs/${slug}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentForm),
      });

      if (response.ok) {
        const data = await response.json();
        setCommentSuccess(data.message);
        setCommentForm({ name: '', email: '', content: '' });
        setShowCommentForm(false);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setCommentLoading(false);
    }
  };

  useEffect(() => {
    // Check if user has already liked this blog
    setHasLiked(localStorage.getItem(`liked-${slug}`) === 'true');
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getReadingTime = (content: string) => {
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  // Render markdown content as HTML
  const renderMarkdown = (content: string) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/_(.*?)_/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">$1</code>')
      .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold mb-6 mt-8 text-fontColor">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-bold mb-4 mt-6 text-fontColor">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-bold mb-3 mt-5 text-fontColor">$1</h3>')
      .replace(/^#### (.*$)/gm, '<h4 class="text-xl font-bold mb-2 mt-4 text-fontColor">$1</h4>')
      .replace(/^- (.*$)/gm, '<li class="mb-2 ml-4 list-disc text-fontColor/80">$1</li>')
      .replace(/^\d+\. (.*$)/gm, '<li class="mb-2 ml-4 list-decimal text-fontColor/80">$1</li>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:text-primary/80 underline" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/^\> (.*$)/gm, '<blockquote class="border-l-4 border-primary pl-6 my-4 italic text-fontColor/70 bg-primary/5 py-2">$1</blockquote>')
      .replace(/\n\n/g, '</p><p class="mb-4 text-fontColor/80 leading-relaxed">')
      .replace(/\n/g, '<br>');
  };

  // Wrap content in paragraph tags
  const formatContent = (content: string) => {
    const rendered = renderMarkdown(content);
    return `<p class="mb-4 text-fontColor/80 leading-relaxed">${rendered}</p>`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-fontColor/70">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-fontColor mb-4">Article Not Found</h1>
          <p className="text-fontColor/70 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <Section className="py-8 lg:py-12 md:py-10">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </Section>

      {/* Article Header */}
      <Section className="pb-6 lg:py-6">
        <div className="max-w-6xl mx-auto px-6">
          {/* Categories */}
          {blog.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.categories.map((category) => (
                <span
                  key={category}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full"
                >
                  <FiTag className="w-3 h-3" />
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-fontColor mb-8 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-fontColor/60">
            <div className="flex items-center gap-2">
              <FiUser className="w-4 h-4" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4" />
              <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="w-4 h-4" />
              <span>{getReadingTime(blog.content)}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiEye className="w-4 h-4" />
              <span>{blog.views} views</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-fontColor/80 leading-relaxed mb-12">
            {blog.excerpt}
          </p>
        </div>
      </Section>

      {/* Featured Image */}
      {blog.featuredImage && (
        <Section className="pb-12">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
              <img
                src={blog.featuredImage}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>
      )}

      {/* Article Content */}
      <Section className="py-6 lg:py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="prose prose-lg max-w-none blog-content"
            dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }}
          />
        </div>
      </Section>

      {/* Tags */}
      {blog.tags.length > 0 && (
        <Section className="py-8 lg:py-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="border-t border-secondary/20 pt-8">
              <h3 className="text-lg font-semibold text-fontColor mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary/10 text-fontColor/70 text-sm rounded-full hover:bg-secondary/20 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Like and Share */}
      <Section className="pt-6 lg:py-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-t border-secondary/20 pt-8">
            <div className="flex items-center justify-between">
              <Button
                onClick={handleLike}
                disabled={hasLiked}
                variant={hasLiked ? 'custom' : 'custom'}
                className="inline-flex items-center gap-2"
              >
                <FiHeart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
                {hasLiked ? 'Liked' : 'Like'} ({likesCount})
              </Button>

              <div className="flex items-center gap-4 text-fontColor/60">
                <div className="flex items-center gap-1">
                  <FiMessageCircle className="w-4 h-4" />
                  <span>{comments.length} comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Comments Section */}
      <Section className="pt-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-secondary/20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-fontColor">
                Comments ({comments.length})
              </h3>
              <Button
                onClick={() => setShowCommentForm(!showCommentForm)}
                variant="secondary"
              >
                Add Comment
              </Button>
            </div>

            {/* Comment Form */}
            {showCommentForm && (
              <div className="mb-8 p-6 bg-background rounded-2xl border border-secondary/20">
                <h4 className="text-lg font-semibold text-fontColor mb-4">Leave a Comment</h4>
                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={commentForm.name}
                      onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                      placeholder="Your Name"
                      required
                      className="px-4 py-3 bg-white border border-secondary/30 rounded-xl text-fontColor placeholder-fontColor/50 focus:outline-none focus:border-primary"
                    />
                    <input
                      type="email"
                      value={commentForm.email}
                      onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                      placeholder="Your Email"
                      required
                      className="px-4 py-3 bg-white border border-secondary/30 rounded-xl text-fontColor placeholder-fontColor/50 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <textarea
                    value={commentForm.content}
                    onChange={(e) => setCommentForm({ ...commentForm, content: e.target.value })}
                    placeholder="Your comment..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white border border-secondary/30 rounded-xl text-fontColor placeholder-fontColor/50 focus:outline-none focus:border-primary resize-none"
                  />
                  <div className="flex items-center gap-4">
                    <Button
                      type="submit"
                      disabled={commentLoading}
                      className="inline-flex items-center gap-2"
                    >
                      {commentLoading ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <FiSend className="w-4 h-4" />
                      )}
                      Submit Comment
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowCommentForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
                
                {commentSuccess && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                    {commentSuccess}
                  </div>
                )}
              </div>
            )}

            {/* Comments List */}
            <div className="space-y-6">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div
                    key={comment._id}
                    className="p-6 bg-background rounded-2xl border border-secondary/20"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <FiUser className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-fontColor">{comment.name}</h5>
                          <p className="text-sm text-fontColor/60">
                            {formatDate(comment.createdAt)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-fontColor/80 leading-relaxed">{comment.content}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-fontColor/60">
                  <FiMessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No comments yet. Be the first to share your thoughts!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}