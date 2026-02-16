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

// GET /api/admin/comments - Get all comments for moderation
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
    let statusFilter = {};
    if (status !== 'all') {
      statusFilter = { 'comments.status': status };
    }

    // Aggregate to get all comments from all blogs
    const pipeline: any[] = [
      { $unwind: '$comments' },
      ...(status !== 'all' ? [{ $match: { 'comments.status': status } }] : []),
      {
        $project: {
          _id: '$comments._id',
          author: '$comments.author',
          email: '$comments.email',
          content: '$comments.content',
          status: '$comments.status',
          createdAt: '$comments.createdAt',
          blogId: {
            _id: '$_id',
            title: '$title',
            slug: '$slug'
          }
        }
      },
      { $sort: { createdAt: -1 } },
      { $skip: skip },
      { $limit: limit }
    ];

    const comments = await Blog.aggregate(pipeline);

    // Get total count
    const countPipeline: any[] = [
      { $unwind: '$comments' },
      ...(status !== 'all' ? [{ $match: { 'comments.status': status } }] : []),
      { $count: 'total' }
    ];

    const totalResult = await Blog.aggregate(countPipeline);
    const total = totalResult[0]?.total || 0;

    return NextResponse.json({
      success: true,
      comments,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}