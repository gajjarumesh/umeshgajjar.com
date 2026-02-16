import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dbConnect from '@/lib/mongodb';
import { Blog } from '@/models/Blog';
import { generatePageMetadata } from '@/lib/seo';
import BlogClient from '@/blog/BlogClient';

interface PageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = decodeURIComponent(params.category);
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
  return generatePageMetadata({
    title: `${formattedCategory} Articles`,
    description: `Browse all articles in the ${formattedCategory} category. Technical insights and tutorials.`,
    keywords: [category, 'articles', 'tutorials', 'web development', 'programming'],
    path: `/blog/category/${category}`,
  });
}

export async function generateStaticParams() {
  try {
    await dbConnect();
    const blogs = await Blog.find({ status: 'published' }).select('categories').lean();
    const categories = [...new Set(blogs.flatMap(blog => blog.categories))];
    
    return categories.map((category) => ({
      category: encodeURIComponent(category),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

async function getBlogsByCategory(category: string) {
  try {
    await dbConnect();
    
    const blogs = await Blog.find({ 
      status: 'published',
      categories: { $in: [category.toLowerCase()] }
    })
      .select('-content -comments')
      .sort({ publishedAt: -1 })
      .lean();

    // Get total count
    const total = await Blog.countDocuments({ 
      status: 'published',
      categories: { $in: [category.toLowerCase()] }
    });

    // Get all categories and tags for filters
    const allBlogs = await Blog.find({ status: 'published' }).select('categories tags').lean();
    const categories = [...new Set(allBlogs.flatMap(blog => blog.categories))];
    const tags = [...new Set(allBlogs.flatMap(blog => blog.tags))];

    return {
      blogs: blogs.map(blog => ({
        ...blog,
        _id: blog._id.toString(),
        createdAt: blog.createdAt.toISOString(),
        updatedAt: blog.updatedAt.toISOString(),
        publishedAt: blog.publishedAt ? blog.publishedAt.toISOString() : null,
      })),
      pagination: {
        currentPage: 1,
        totalPages: Math.ceil(total / 9),
        totalBlogs: total,
        hasNext: total > 9,
        hasPrev: false,
      },
      filters: {
        categories,
        tags,
      },
    };
  } catch (error) {
    console.error('Error fetching blogs by category:', error);
    return null;
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const category = decodeURIComponent(params.category);
  const data = await getBlogsByCategory(category);
  
  if (!data || data.blogs.length === 0) {
    notFound();
  }
  
  return <BlogClient initialData={data} />;
}