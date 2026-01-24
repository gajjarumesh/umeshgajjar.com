import { NextResponse } from 'next/server';
import { getCollection, COLLECTIONS } from '@/lib/db';
import { ObjectId } from 'mongodb';
import { sanitizeText, isValidEmail } from '@/lib/utils';
import { requireAuth } from '@/lib/auth';

// GET - List comments for a blog
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const approved = searchParams.get('approved');
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug is required' },
        { status: 400 }
      );
    }
    
    const comments = await getCollection(COLLECTIONS.COMMENTS);
    
    let query = { blogSlug: slug };
    
    // For public access, only show approved comments
    try {
      await requireAuth();
      // Admin can see all comments if approved param is not set
      if (approved !== null && approved !== undefined) {
        query.approved = approved === 'true';
      }
    } catch {
      // Not admin, only show approved
      query.approved = true;
    }
    
    const commentList = await comments
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();
    
    return NextResponse.json({ comments: commentList });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

// POST - Create new comment
export async function POST(request) {
  try {
    const { blogSlug, name, email, content } = await request.json();
    
    if (!blogSlug || !name || !email || !content) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Sanitize inputs
    const sanitizedName = sanitizeText(name);
    const sanitizedContent = sanitizeText(content);
    
    const comments = await getCollection(COLLECTIONS.COMMENTS);
    
    const comment = {
      blogSlug,
      name: sanitizedName,
      email,
      content: sanitizedContent,
      approved: false,
      createdAt: new Date(),
    };
    
    const result = await comments.insertOne(comment);
    
    return NextResponse.json({
      success: true,
      id: result.insertedId.toString(),
      message: 'Comment submitted for moderation',
    });
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}

// PUT - Approve/Update comment (admin only)
export async function PUT(request) {
  try {
    await requireAuth();
    
    const { id, approved } = await request.json();
    
    if (!id) {
      return NextResponse.json(
        { error: 'Comment ID is required' },
        { status: 400 }
      );
    }
    
    const comments = await getCollection(COLLECTIONS.COMMENTS);
    
    const result = await comments.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          approved: approved === true,
          updatedAt: new Date(),
        },
      }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating comment:', error);
    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to update comment' },
      { status: 500 }
    );
  }
}

// DELETE - Delete comment (admin only)
export async function DELETE(request) {
  try {
    await requireAuth();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Comment ID is required' },
        { status: 400 }
      );
    }
    
    const comments = await getCollection(COLLECTIONS.COMMENTS);
    
    const result = await comments.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting comment:', error);
    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to delete comment' },
      { status: 500 }
    );
  }
}
