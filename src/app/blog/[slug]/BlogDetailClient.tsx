'use client';

import { useState, useEffect } from 'react';
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

interface BlogDetailClientProps {
  initialBlog: Blog | null;
  slug: string;
}

export default function BlogDetailClient({ initialBlog, slug }: BlogDetailClientProps) {
  const [blog, setBlog] = useState<Blog | null>(initialBlog);
  const [comments, setComments] = useState<Comment[]>(initialBlog?.comments || []);
  const [loading, setLoading] = useState(!initialBlog);
  const [error, setError] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialBlog?.likes || 0);
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    content: '',
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!initialBlog) {
      fetchBlog();
    }
  }, [slug, initialBlog]);

  useEffect(() => {
    // Check if user has liked this blog (using localStorage)
    const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '[]');
    setIsLiked(likedBlogs.includes(blog?._id));
  }, [blog?._id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/blogs/${slug}`);
      
      if (!response.ok) {
        throw new Error('Blog not found');
      }
      
      const data = await response.json();
      setBlog(data.blog);
      setComments(data.blog.comments || []);
      setLikes(data.blog.likes || 0);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async () => {
    if (!blog) return;

    try {
      const response = await fetch(`/api/blogs/${slug}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'like' }),
      });

      if (response.ok) {
        const data = await response.json();
        setLikes(data.likes);
        setIsLiked(!isLiked);

        // Update localStorage
        const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '[]');
        if (isLiked) {
          const updatedLikes = likedBlogs.filter((id: string) => id !== blog._id);
          localStorage.setItem('likedBlogs', JSON.stringify(updatedLikes));
        } else {
          likedBlogs.push(blog._id);
          localStorage.setItem('likedBlogs', JSON.stringify(likedBlogs));
        }
      }
    } catch (error) {
      console.error('Error liking blog:', error);
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blog || !commentForm.name || !commentForm.email || !commentForm.content) return;

    setSubmitting(true);
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
        setComments([...comments, data.comment]);
        setCommentForm({ name: '', email: '', content: '' });
        alert('Comment submitted! It will be visible after approval.');
      } else {
        throw new Error('Failed to submit comment');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('Failed to submit comment. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  const approvedComments = comments.filter(comment => comment.isApproved);

  if (loading) {
    return (
      <Section className="py-12">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 mt-4">Loading article...</p>
        </div>
      </Section>
    );
  }

  if (error || !blog) {
    return (
      <Section className="py-12">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">
            The article you're looking for doesn't exist or may have been removed.
          </p>
          <Button variant="outline">
            <Link href="/blog" className="flex items-center">
              <FiArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </Section>
    );
  }

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <Section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
            <Button variant="secondary" className="mb-6">
            <Link href="/blog" className='flex items-center'>
              <FiArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          {/* Categories */}
          {blog.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <FiUser className="w-5 h-5" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="w-5 h-5" />
              <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="w-5 h-5" />
              <span>{calculateReadTime(blog.content)}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiEye className="w-5 h-5" />
              <span>{blog.views} views</span>
            </div>
          </div>

          {/* Featured Image */}
          {blog.featuredImage && (
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
              <img
                src={blog.featuredImage}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Excerpt */}
          <div className="text-lg text-gray-700 bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
            {blog.excerpt}
          </div>
        </div>
      </Section>

      {/* Article Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 prose-strong:text-gray-900 blog-content"
              dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }}
            />
          </div>

          {/* Tags and Social Actions */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Tags */}
              {blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <FiTag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Social Actions */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isLiked 
                      ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FiHeart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{likes}</span>
                </button>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">
                  <FiMessageCircle className="w-5 h-5" />
                  <span>{approvedComments.length} comments</span>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Comments ({approvedComments.length})
            </h3>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={commentForm.name}
                    onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    value={commentForm.email}
                    onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Comment *
                </label>
                <textarea
                  id="content"
                  required
                  rows={4}
                  value={commentForm.content}
                  onChange={(e) => setCommentForm({ ...commentForm, content: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Share your thoughts..."
                />
              </div>
              <Button type="submit" disabled={submitting}>
                <FiSend className="w-4 h-4 mr-2" />
                {submitting ? 'Submitting...' : 'Submit Comment'}
              </Button>
            </form>

            {/* Comments List */}
            {approvedComments.length > 0 ? (
              <div className="space-y-6">
                {approvedComments.map((comment) => (
                  <div key={comment._id} className="border-b border-gray-100 pb-6 last:border-b-0">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <FiUser className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                        <p className="text-sm text-gray-500">{formatDate(comment.createdAt)}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 ml-12">{comment.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">
                No comments yet. Be the first to share your thoughts!
              </p>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}