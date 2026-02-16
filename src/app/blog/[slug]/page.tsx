import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dbConnect from '@/lib/mongodb';
import { Blog } from '@/models/Blog';
import { generatePageMetadata, generateBlogPostSchema } from '@/lib/seo';
import BlogDetailClient from './BlogDetailClient';
import { CTASection } from '@/components/CTASection';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate dynamic metadata for blog posts
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    await dbConnect();
    const blog = await Blog.findOne({ 
      slug: slug, 
      status: 'published' 
    }).lean();

    if (!blog) {
      return generatePageMetadata({
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found.',
      });
    }

    const publishedDate = blog.publishedAt || blog.createdAt;
    const modifiedDate = blog.updatedAt;

    return generatePageMetadata({
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.excerpt,
      keywords: [
        ...(blog.seoKeywords ? blog.seoKeywords.split(',').map(k => k.trim()) : []),
        ...blog.tags,
        ...blog.categories,
        'web development',
        'programming',
        'tech blog',
      ],
      path: `/blog/${blog.slug}`,
      ogImage: blog.featuredImage || '/banner.png',
      type: 'article',
      publishedTime: publishedDate?.toISOString(),
      modifiedTime: modifiedDate?.toISOString(),
    });
  } catch (error) {
    console.error('Error generating metadata:', error);
    return generatePageMetadata({
      title: 'Blog Post',
      description: 'Read our latest blog post.',
    });
  }
}

// Generate static params for dynamic routes (optional for ISR)
export async function generateStaticParams() {
  try {
    await dbConnect();
    const blogs = await Blog.find({ status: 'published' })
      .select('slug')
      .lean();

    return blogs.map((blog) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

async function getBlogBySlug(slug: string) {
  try {
    await dbConnect();
    
    const blog = await Blog.findOneAndUpdate(
      { slug, status: 'published' },
      { $inc: { views: 1 } }, // Increment view count
      { new: true }
    ).lean();

    if (!blog) {
      return null;
    }

    // Serialize the blog data
    return {
      ...blog,
      _id: blog._id.toString(),
      createdAt: blog.createdAt.toISOString(),
      updatedAt: blog.updatedAt.toISOString(),
      publishedAt: blog.publishedAt ? blog.publishedAt.toISOString() : null,
      comments: blog.comments.map(comment => ({
        ...comment,
        _id: comment._id.toString(),
        createdAt: comment.createdAt.toISOString(),
      })),
    };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Generate enhanced JSON-LD structured data for SEO
  const blogPostSchema = generateBlogPostSchema({
    title: blog.title,
    description: blog.excerpt,
    content: blog.content,
    slug: blog.slug,
    image: blog.featuredImage,
    publishedTime: blog.publishedAt || blog.createdAt,
    modifiedTime: blog.updatedAt,
    author: blog.author,
    tags: blog.tags,
    categories: blog.categories,
    likes: blog.likes,
    views: blog.views,
    comments: blog.comments.filter(comment => comment.isApproved),
  });

  return (
    <>
      {/* Enhanced JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      
      <BlogDetailClient initialBlog={blog} slug={slug} />
      <CTASection />
    </>
  );
}
  