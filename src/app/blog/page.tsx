'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { CTASection } from '@/components/CTASection';
import {
  FiCalendar,
  FiTag,
  FiEye,
  FiHeart,
  FiMessageCircle,
  FiSearch,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
  FiBookOpen,
  FiClock,
} from 'react-icons/fi';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: string;
  tags: string[];
  categories: string[];
  author: string;
  views: number;
  likes: number;
  comments: any[];
  createdAt: string;
  publishedAt: string;
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
  filters: {
    categories: string[];
    tags: string[];
  };
}

export default function BlogPage() {
  const [blogsData, setBlogsData] = useState<BlogsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, [currentPage, searchTerm, selectedCategory, selectedTag]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '9',
      });

      if (searchTerm) params.append('search', searchTerm);
      if (selectedCategory) params.append('category', selectedCategory);
      if (selectedTag) params.append('tag', selectedTag);

      const response = await fetch(`/api/blogs?${params}`);
      const data = await response.json();
      setBlogsData(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchBlogs();
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTag('');
    setCurrentPage(1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getReadingTime = (excerpt: string) => {
    const words = excerpt.split(' ').length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  if (loading && !blogsData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-fontColor/70">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="py-20 lg:py-10 lg:pt-28 md:py-10 md:pt-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-3 bg-secondary/15 text-primary px-8 py-4 rounded-full text-sm font-semibold mb-8 border border-secondary/30">
            <FiBookOpen className="w-5 h-5" />
            <span>Knowledge Sharing</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-fontColor mb-8 leading-tight">
            Tech Blog
          </h1>
          
          <p className="text-xl md:text-2xl text-fontColor/70 max-w-3xl mx-auto leading-relaxed mb-12">
            Insights, tutorials, and thoughts on web development, technology trends, and software engineering best practices.
          </p>

          {/* Search and Filters */}
          <div className="max-w-2xl mx-auto mb-16">
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full px-6 py-4 pr-14 bg-white border border-secondary/30 rounded-2xl text-fontColor placeholder-fontColor/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                >
                  <FiSearch className="w-5 h-5" />
                </button>
              </div>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant={showFilters ? 'custom' : 'secondary'}
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 text-primary"
              >
                <FiFilter className="w-4 h-4" />
                Filters
              </Button>
              
              {(selectedCategory || selectedTag || searchTerm) && (
                <Button onClick={clearFilters}>
                  Clear All
                </Button>
              )}
            </div>

            {/* Filter Options */}
            {showFilters && blogsData && (
              <div className="mt-6 p-6 bg-white rounded-2xl border border-secondary/30">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-fontColor mb-2">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-secondary/30 rounded-xl text-fontColor focus:outline-none focus:border-primary"
                    >
                      <option value="">All Categories</option>
                      {blogsData.filters.categories.map((category) => (
                        <option key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fontColor mb-2">
                      Tag
                    </label>
                    <select
                      value={selectedTag}
                      onChange={(e) => setSelectedTag(e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-secondary/30 rounded-xl text-fontColor focus:outline-none focus:border-primary"
                    >
                      <option value="">All Tags</option>
                      {blogsData.filters.tags.map((tag) => (
                        <option key={tag} value={tag}>
                          {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Blog Posts */}
      <Section className="lg:py-10 md:py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {blogsData && blogsData.blogs.length > 0 ? (
            <>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
                {blogsData.blogs.map((blog, index) => (
                  <article
                    key={blog._id}
                    className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-secondary/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  >
                    {/* Featured Image */}
                    {blog.featuredImage ? (
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                        <img
                          src={blog.featuredImage}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    <div className="p-8">
                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-fontColor/60">
                          <FiCalendar className="w-4 h-4" />
                          <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-fontColor/60">
                          <FiClock className="w-4 h-4" />
                          <span>{getReadingTime(blog.excerpt)}</span>
                        </div>
                      </div>

                      {/* Categories */}
                      {blog.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {blog.categories.slice(0, 2).map((category) => (
                            <span
                              key={category}
                              className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                            >
                              <FiTag className="w-3 h-3" />
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Title and Excerpt */}
                      <h2 className="text-xl font-bold text-fontColor mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h2>
                      <p className="text-fontColor/70 mb-6 line-clamp-3 leading-relaxed">
                        {blog.excerpt}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-6">
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
                                        <span>{blog.comments ? blog.comments.filter(c => c.isApproved).length : 0}</span>
                          </div>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <Link href={`/blog/${blog.slug}`}>
                        <Button  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {blogsData.pagination.totalPages > 1 && (
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={!blogsData.pagination.hasPrev}
                    className="inline-flex items-center gap-2"
                  >
                    <FiChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: blogsData.pagination.totalPages }, (_, i) => i + 1)
                      .filter(page => 
                        page === 1 || 
                        page === blogsData.pagination.totalPages || 
                        Math.abs(page - blogsData.pagination.currentPage) <= 1
                      )
                      .map((page, index, array) => (
                        <div key={page}>
                          {index > 0 && array[index - 1] !== page - 1 && (
                            <span className="px-2 text-fontColor/60">...</span>
                          )}
                          <Button
                            variant={page === blogsData.pagination.currentPage ? 'primary' : 'outline'}
                            onClick={() => setCurrentPage(page)}
                            className="min-w-[44px]"
                          >
                            {page}
                          </Button>
                        </div>
                      ))}
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    disabled={!blogsData.pagination.hasNext}
                    className="inline-flex items-center gap-2"
                  >
                    Next
                    <FiChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <FiBookOpen className="w-16 h-16 text-fontColor/30 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-fontColor mb-4">
                {searchTerm || selectedCategory || selectedTag ? 'No blogs found' : 'No blogs published yet'}
              </h3>
              <p className="text-fontColor/70 mb-8">
                {searchTerm || selectedCategory || selectedTag 
                  ? 'Try adjusting your search or filters to find what you\'re looking for.'
                  : 'Check back soon for new content!'
                }
              </p>
              {(searchTerm || selectedCategory || selectedTag) && (
                <Button onClick={clearFilters}>Clear Filters</Button>
              )}
            </div>
          )}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}