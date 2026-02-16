import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Blog } from '@/models/Blog';

// GET /api/blogs/[slug] - Get single blog by slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await dbConnect();
    const { slug } = await params;

    const blog = await Blog.findOne({ slug, status: 'published' }).lean();

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    // Increment view count
    await Blog.findByIdAndUpdate(blog._id, { $inc: { views: 1 } });

    return NextResponse.json({ blog: { ...blog, views: blog.views + 1 } });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

// POST /api/blogs/[slug]/like - Like a blog
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await dbConnect();
    const { slug } = await params;

    const blog = await Blog.findOneAndUpdate(
      { slug, status: 'published' },
      { $inc: { likes: 1 } },
      { new: true }
    ).select('likes').lean();

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ likes: blog.likes });
  } catch (error) {
    console.error('Error liking blog:', error);
    return NextResponse.json(
      { error: 'Failed to like blog' },
      { status: 500 }
    );
  }
}