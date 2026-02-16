'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/Button';
import {
  FiSave,
  FiEye,
  FiArrowLeft,
  FiImage,
  FiTag,
  FiFolder,
  FiUser,
  FiBold,
  FiItalic,
  FiLink,
  FiList,
  FiCode,
} from 'react-icons/fi';

interface BlogForm {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  categories: string[];
  tags: string[];
  status: 'draft' | 'published';
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
}

export default function NewBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<BlogForm>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    featuredImage: '',
    categories: [],
    tags: [],
    status: 'draft',
    seoTitle: '',
    seoDescription: '',
    seoKeywords: '',
  });
  const [categoryInput, setCategoryInput] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [showSeoFields, setShowSeoFields] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);

  // Markdown formatting helpers
  const insertMarkdown = (prefix: string, suffix: string = '') => {
    const textarea = contentTextareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.content.substring(start, end);
    const newText = `${prefix}${selectedText}${suffix}`;
    
    const newContent = 
      formData.content.substring(0, start) + 
      newText + 
      formData.content.substring(end);
    
    setFormData(prev => ({ ...prev, content: newContent }));
    
    // Restore cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + selectedText.length
      );
    }, 0);
  };

  // Format buttons for the editor
  const formatButtons = [
    { icon: FiBold, action: () => insertMarkdown('**', '**'), title: 'Bold' },
    { icon: FiItalic, action: () => insertMarkdown('_', '_'), title: 'Italic' },
    { icon: FiCode, action: () => insertMarkdown('`', '`'), title: 'Code' },
    { icon: FiLink, action: () => insertMarkdown('[', '](url)'), title: 'Link' },
    { icon: FiList, action: () => insertMarkdown('- '), title: 'List' },
  ];

  // Render markdown preview
  const renderMarkdown = (content: string) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/_(.*?)_/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>')
      .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold mb-2">$1</h3>')
      .replace(/^- (.*$)/gm, '<li class="list-disc ml-4">$1</li>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary underline">$1</a>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
      seoTitle: prev.seoTitle || title,
    }));
  };

  const addCategory = () => {
    if (categoryInput.trim() && !formData.categories.includes(categoryInput.trim().toLowerCase())) {
      setFormData(prev => ({
        ...prev,
        categories: [...prev.categories, categoryInput.trim().toLowerCase()],
      }));
      setCategoryInput('');
    }
  };

  const removeCategory = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.filter(c => c !== category),
    }));
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim().toLowerCase())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim().toLowerCase()],
      }));
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag),
    }));
  };

  const handleSubmit = async (status: 'draft' | 'published') => {
    if (!formData.title.trim() || !formData.content.trim() || !formData.excerpt.trim()) {
      alert('Please fill in all required fields (title, content, excerpt)');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          status,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/admin/blogs');
      } else {
        alert(data.error || 'Failed to create blog');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('Failed to create blog');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="p-2 text-fontColor/60 hover:text-fontColor hover:bg-background rounded-lg transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-fontColor">Create New Blog Post</h1>
              <p className="text-fontColor/70 mt-1">Write and publish your blog content</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => handleSubmit('draft')}
              disabled={loading}
              className="inline-flex items-center gap-2"
            >
              <FiSave className="w-4 h-4" />
              Save as Draft
            </Button>
            <Button
              onClick={() => handleSubmit('published')}
              disabled={loading}
              className="inline-flex items-center gap-2"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <FiEye className="w-4 h-4" />
              )}
              Publish
            </Button>
          </div>
        </div>

        {/* Form */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-secondary/20">
              {/* Title */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-fontColor mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter blog title..."
                  className="w-full px-4 py-3 bg-background border border-secondary/30 rounded-xl text-fontColor placeholder-fontColor/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              {/* Slug */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-fontColor mb-2">
                  URL Slug
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="blog-url-slug"
                  className="w-full px-4 py-3 bg-background border border-secondary/30 rounded-xl text-fontColor placeholder-fontColor/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <p className="text-xs text-fontColor/60 mt-1">
                  URL: /blog/{formData.slug || 'blog-url-slug'}
                </p>
              </div>

              {/* Content Editor */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-fontColor">
                    Content * (Markdown supported)
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-background rounded-lg p-1">
                      {formatButtons.map((button, index) => {
                        const Icon = button.icon;
                        return (
                          <button
                            key={index}
                            type="button"
                            onClick={button.action}
                            title={button.title}
                            className="p-2 text-fontColor/60 hover:text-fontColor hover:bg-white rounded transition-colors"
                          >
                            <Icon className="w-4 h-4" />
                          </button>
                        );
                      })}
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPreview(!showPreview)}
                      className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                        showPreview
                          ? 'bg-primary text-white'
                          : 'bg-background text-fontColor hover:bg-secondary/20'
                      }`}
                    >
                      {showPreview ? 'Edit' : 'Preview'}
                    </button>
                  </div>
                </div>
                
                <div className="border border-secondary/30 rounded-xl overflow-hidden">
                  {!showPreview ? (
                    <textarea
                      ref={contentTextareaRef}
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="Write your blog content using Markdown...\n\n**Bold text**\n*Italic text*\n# Heading 1\n## Heading 2\n- List item\n[Link text](URL)\n`Code`"
                      rows={20}
                      className="w-full px-4 py-3 text-fontColor placeholder-fontColor/50 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none font-mono text-sm leading-relaxed"
                      required
                    />
                  ) : (
                    <div 
                      className="p-4 min-h-[400px] prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ 
                        __html: renderMarkdown(formData.content || 'No content to preview...') 
                      }}
                    />
                  )}
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-fontColor/60">
                    {formData.content.length} characters | Supports Markdown formatting
                  </p>
                  <div className="text-xs text-fontColor/60">
                    <span className="font-medium">Quick tips:</span> **bold**, *italic*, `code`, # heading
                  </div>
                </div>
              </div>

              {/* Excerpt */}
              <div className="mb-6 mt-16">
                <label className="block text-sm font-semibold text-fontColor mb-2">
                  Excerpt *
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Brief description of your blog post..."
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-secondary/30 rounded-xl text-fontColor placeholder-fontColor/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  required
                />
                <p className="text-xs text-fontColor/60 mt-1">
                  {formData.excerpt.length}/500 characters
                </p>
              </div>
            </div>

            {/* SEO Settings */}
            <div className="bg-white rounded-3xl border border-secondary/20">
              <button
                type="button"
                onClick={() => setShowSeoFields(!showSeoFields)}
                className="w-full p-8 text-left flex items-center justify-between hover:bg-background/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-fontColor">SEO Settings</h3>
                <div className={`transform transition-transform ${showSeoFields ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-fontColor/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {showSeoFields && (
                <div className="px-8 pb-8 space-y-6 border-t border-secondary/20">
                  <div>
                    <label className="block text-sm font-semibold text-fontColor mb-2">
                      SEO Title
                    </label>
                    <input
                      type="text"
                      value={formData.seoTitle}
                      onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                      placeholder="SEO optimized title..."
                      className="w-full px-4 py-3 bg-background border border-secondary/30 rounded-xl text-fontColor placeholder-fontColor/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    <p className="text-xs text-fontColor/60 mt-1">
                      {formData.seoTitle.length}/60 characters (recommended)
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-fontColor mb-2">
                      Meta Description
                    </label>
                    <textarea
                      value={formData.seoDescription}
                      onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                      placeholder="Brief description for search engines..."
                      rows={3}
                      className="w-full px-4 py-3 bg-background border border-secondary/30 rounded-xl text-fontColor placeholder-fontColor/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                    <p className="text-xs text-fontColor/60 mt-1">
                      {formData.seoDescription.length}/160 characters (recommended)
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-fontColor mb-2">
                      Keywords
                    </label>
                    <input
                      type="text"
                      value={formData.seoKeywords}
                      onChange={(e) => setFormData({ ...formData, seoKeywords: e.target.value })}
                      placeholder="keyword1, keyword2, keyword3..."
                      className="w-full px-4 py-3 bg-background border border-secondary/30 rounded-xl text-fontColor placeholder-fontColor/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Featured Image */}
            <div className="bg-white rounded-3xl p-6 border border-secondary/20">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-fontColor mb-4">
                <FiImage className="w-5 h-5" />
                Featured Image
              </h3>
              <input
                type="url"
                value={formData.featuredImage}
                onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 bg-background border border-secondary/30 rounded-xl text-fontColor placeholder-fontColor/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              {formData.featuredImage && (
                <div className="mt-4">
                  <img
                    src={formData.featuredImage}
                    alt="Featured"
                    className="w-full h-32 object-cover rounded-xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            {/* Categories */}
            <div className="bg-white rounded-3xl p-6 border border-secondary/20">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-fontColor mb-4">
                <FiFolder className="w-5 h-5" />
                Categories
              </h3>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCategory())}
                  placeholder="Add category..."
                  className="flex-1 px-3 py-2 bg-background border border-secondary/30 rounded-lg text-fontColor placeholder-fontColor/50 focus:outline-none focus:border-primary text-sm"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addCategory}
                >
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.categories.map((category) => (
                  <span
                    key={category}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {category}
                    <button
                      type="button"
                      onClick={() => removeCategory(category)}
                      className="text-primary/70 hover:text-primary"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-3xl p-6 border border-secondary/20">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-fontColor mb-4">
                <FiTag className="w-5 h-5" />
                Tags
              </h3>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  placeholder="Add tag..."
                  className="flex-1 px-3 py-2 bg-background border border-secondary/30 rounded-lg text-fontColor placeholder-fontColor/50 focus:outline-none focus:border-primary text-sm"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addTag}
                >
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-fontColor/70 text-sm rounded-full"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="text-fontColor/50 hover:text-fontColor/70"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="bg-white rounded-3xl p-6 border border-secondary/20">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-fontColor mb-4">
                <FiUser className="w-5 h-5" />
                Author
              </h3>
              <input
                type="text"
                value={formData.author || 'Umesh Gajjar'}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-secondary/30 rounded-xl text-fontColor focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>
      </div>

    </AdminLayout>
  );
}