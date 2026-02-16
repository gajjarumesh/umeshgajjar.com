import { Metadata } from 'next';
import dbConnect from '@/lib/mongodb';
import { Blog } from '@/models/Blog';
import { generatePageMetadata, generateBlogSchema } from '@/lib/seo';
import BlogClient from './BlogClient';
import { CTASection } from '@/components/CTASection';

// Generate metadata for the blog page
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: 'Blog & Insights',
    description: 'Technical insights, tutorials, and thoughts on web development, React, Next.js, Node.js, and building scalable applications.',
    keywords: [
      'web development blog',
      'react tutorials',
      'next.js guides',
      'javascript blog',
      'typescript blog',
      'node.js articles',
      'full stack development',
      'programming insights',
      'tech blog',
    ],
    path: '/blog',
    type: 'website',
  });
}

// Fetch initial blog data on server
async function getInitialBlogData() {
  try {
    await dbConnect();
    
    const page = 1;
    const limit = 9;
    const skip = (page - 1) * limit;
    
    // Get blogs with pagination
    const blogs = await Blog.find({ status: 'published' })
      .select('-content -comments') // Exclude full content and comments from list
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await Blog.countDocuments({ status: 'published' });

    // Get categories and tags for filters
    const allBlogs = await Blog.find({ status: 'published' }).select('categories tags').lean();
    const categories = [...new Set(allBlogs.flatMap(blog => blog.categories))];
    const tags = [...new Set(allBlogs.flatMap(blog => blog.tags))];

    // Serialize the data
    const serializedBlogs = blogs.map(blog => ({
      ...blog,
      _id: blog._id.toString(),
      createdAt: blog.createdAt.toISOString(),
      updatedAt: blog.updatedAt.toISOString(),
      publishedAt: blog.publishedAt ? blog.publishedAt.toISOString() : null,
    }));

    return {
      blogs: serializedBlogs,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalBlogs: total,
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1,
      },
      filters: {
        categories,
        tags,
      },
    };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {
      blogs: [],
      pagination: {
        currentPage: 1,
        totalPages: 0,
        totalBlogs: 0,
        hasNext: false,
        hasPrev: false,
      },
      filters: {
        categories: [],
        tags: [],
      },
    };
  }
}

export default async function BlogPage() {
  const initialData = await getInitialBlogData();

  // Generate JSON-LD structured data for the blog section
  const blogSchema = generateBlogSchema(
    initialData.blogs.map(blog => ({
      title: blog.title,
      description: blog.excerpt,
      slug: blog.slug,
      publishedTime: blog.publishedAt || blog.createdAt,
      author: blog.author,
    }))
  );

  return (
    <>
      {/* JSON-LD Structured Data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      
      <BlogClient initialData={initialData} />
      <CTASection />
    </>
  );
}