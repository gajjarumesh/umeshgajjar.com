import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/mongodb';
import { Blog } from '@/models/Blog';

// Middleware to check admin authentication
async function checkAuth(request: NextRequest) {
  const token = request.cookies.get('admin-token')?.value;

  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    return decoded;
  } catch (error) {
    return null;
  }
}

// GET /api/admin/blogs - Get all blogs for admin
export async function GET(request: NextRequest) {
  try {
    const auth = await checkAuth(request);
    if (!auth) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await dbConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status') || 'all';

    const skip = (page - 1) * limit;

    // Build query
    let query: any = {};
    if (status !== 'all') {
      query.status = status;
    }

    // Get blogs with pagination
    const blogs = await Blog.find(query)
      .select('-content') // Exclude full content from list
      .sort({ updatedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count
    const total = await Blog.countDocuments(query);

    // Get blog stats
    const stats = await Blog.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          totalViews: { $sum: '$views' },
          totalLikes: { $sum: '$likes' },
        },
      },
    ]);

    return NextResponse.json({
      blogs,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalBlogs: total,
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1,
      },
      stats,
    });
  } catch (error) {
    console.error('Error fetching admin blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST /api/admin/blogs - Create new blog
export async function POST(request: NextRequest) {
  try {
    const auth = await checkAuth(request);
    if (!auth) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await dbConnect();

    const blogData = await request.json();

    // Validate required fields
    if (!blogData.title || !blogData.content || !blogData.excerpt) {
      return NextResponse.json(
        { error: 'Title, content, and excerpt are required' },
        { status: 400 }
      );
    }

    // Create slug if not provided
    if (!blogData.slug) {
      blogData.slug = blogData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
    }

    // Check if slug already exists
    const existingBlog = await Blog.findOne({ slug: blogData.slug });
    if (existingBlog) {
      return NextResponse.json(
        { error: 'A blog with this slug already exists' },
        { status: 400 }
      );
    }

    // Prepare blog data with timestamps
    const blogToCreate = {
      ...blogData,
      author: blogData.author || 'Umesh Gajjar',
      updatedAt: new Date(),
      createdAt: new Date(),
    };

    // Set publishedAt if status is published
    if (blogToCreate.status === 'published') {
      blogToCreate.publishedAt = new Date();
    }

    // Create blog
    const blog = await Blog.create(blogToCreate);

    return NextResponse.json({
      success: true,
      message: 'Blog created successfully',
      blog,
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}