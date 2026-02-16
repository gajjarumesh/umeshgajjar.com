import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Blog } from '@/models/Blog';

// GET /api/blogs - Get all published blogs with pagination
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const search = searchParams.get('search');

    const skip = (page - 1) * limit;

    // Build query
    let query: any = { status: 'published' };

    if (category) {
      query.categories = { $in: [category.toLowerCase()] };
    }

    if (tag) {
      query.tags = { $in: [tag.toLowerCase()] };
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } },
        { categories: { $in: [new RegExp(search, 'i')] } },
      ];
    }

    // Get blogs with pagination
    const blogs = await Blog.find(query)
      .select('-content -comments') // Exclude full content and comments from list
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await Blog.countDocuments(query);

    // Get categories and tags for filters
    const allBlogs = await Blog.find({ status: 'published' }).select('categories tags').lean();
    const categories = [...new Set(allBlogs.flatMap(blog => blog.categories))];
    const tags = [...new Set(allBlogs.flatMap(blog => blog.tags))];

    return NextResponse.json({
      blogs,
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
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}