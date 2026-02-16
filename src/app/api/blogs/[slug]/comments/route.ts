import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Blog } from '@/models/Blog';

// POST /api/blogs/[slug]/comments - Add comment to blog
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await dbConnect();
    const { slug } = await params;
    const { name, email, content } = await request.json();

    // Validate input
    if (!name || !email || !content) {
      return NextResponse.json(
        { error: 'Name, email, and content are required' },
        { status: 400 }
      );
    }

    if (content.length > 1000) {
      return NextResponse.json(
        { error: 'Comment too long (max 1000 characters)' },
        { status: 400 }
      );
    }

    // Find blog and add comment
    const blog = await Blog.findOneAndUpdate(
      { slug, status: 'published' },
      {
        $push: {
          comments: {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            content: content.trim(),
            createdAt: new Date(),
            isApproved: false, // Comments need approval
          },
        },
      },
      { new: true }
    ).select('comments').lean();

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Comment submitted successfully. It will appear after approval.',
      commentsCount: blog.comments.filter(c => c.isApproved).length,
    });
  } catch (error) {
    console.error('Error adding comment:', error);
    return NextResponse.json(
      { error: 'Failed to add comment' },
      { status: 500 }
    );
  }
}

// GET /api/blogs/[slug]/comments - Get approved comments for blog
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await dbConnect();
    const { slug } = await params;

    const blog = await Blog.findOne({ slug, status: 'published' })
      .select('comments')
      .lean();

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    // Return only approved comments
    const approvedComments = blog.comments
      .filter(comment => comment.isApproved)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({
      comments: approvedComments,
      total: approvedComments.length,
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}