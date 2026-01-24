import { NextResponse } from 'next/server';
import { getCollection, COLLECTIONS } from '@/lib/db';
import { ObjectId } from 'mongodb';
import { requireAuth } from '@/lib/auth';

// GET - List all blogs or filter
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get('tag');
    const published = searchParams.get('published');
    
    const blogs = await getCollection(COLLECTIONS.BLOGS);
    
    let query = {};
    if (tag) {
      query.tags = tag;
    }
    if (published !== null && published !== undefined) {
      query.published = published === 'true';
    }
    
    const blogList = await blogs
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();
    
    return NextResponse.json({ blogs: blogList });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST - Create new blog (admin only)
export async function POST(request) {
  try {
    await requireAuth();
    
    const data = await request.json();
    const blogs = await getCollection(COLLECTIONS.BLOGS);
    
    const blog = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
      viewCount: 0,
    };
    
    const result = await blogs.insertOne(blog);
    
    return NextResponse.json({
      success: true,
      id: result.insertedId.toString(),
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}

// PUT - Update blog (admin only)
export async function PUT(request) {
  try {
    await requireAuth();
    
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json(
        { error: 'Blog ID is required' },
        { status: 400 }
      );
    }
    
    const blogs = await getCollection(COLLECTIONS.BLOGS);
    
    const result = await blogs.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...updateData,
          updatedAt: new Date(),
        },
      }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating blog:', error);
    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

// DELETE - Delete blog (admin only)
export async function DELETE(request) {
  try {
    await requireAuth();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Blog ID is required' },
        { status: 400 }
      );
    }
    
    const blogs = await getCollection(COLLECTIONS.BLOGS);
    
    const result = await blogs.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog:', error);
    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}
