import { NextResponse } from 'next/server';
import { getCollection, COLLECTIONS } from '@/lib/db';
import { ObjectId } from 'mongodb';
import { requireAuth } from '@/lib/auth';

// GET - List all case studies
export async function GET() {
  try {
    const caseStudies = await getCollection(COLLECTIONS.CASE_STUDIES);
    
    const studies = await caseStudies
      .find({ published: true })
      .sort({ createdAt: -1 })
      .toArray();
    
    return NextResponse.json({ caseStudies: studies });
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch case studies' },
      { status: 500 }
    );
  }
}

// POST - Create case study (admin only)
export async function POST(request) {
  try {
    await requireAuth();
    
    const data = await request.json();
    const caseStudies = await getCollection(COLLECTIONS.CASE_STUDIES);
    
    const study = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    const result = await caseStudies.insertOne(study);
    
    return NextResponse.json({
      success: true,
      id: result.insertedId.toString(),
    });
  } catch (error) {
    console.error('Error creating case study:', error);
    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to create case study' },
      { status: 500 }
    );
  }
}

// PUT - Update case study (admin only)
export async function PUT(request) {
  try {
    await requireAuth();
    
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json(
        { error: 'Case study ID is required' },
        { status: 400 }
      );
    }
    
    const caseStudies = await getCollection(COLLECTIONS.CASE_STUDIES);
    
    const result = await caseStudies.updateOne(
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
        { error: 'Case study not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating case study:', error);
    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to update case study' },
      { status: 500 }
    );
  }
}

// DELETE - Delete case study (admin only)
export async function DELETE(request) {
  try {
    await requireAuth();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Case study ID is required' },
        { status: 400 }
      );
    }
    
    const caseStudies = await getCollection(COLLECTIONS.CASE_STUDIES);
    
    const result = await caseStudies.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Case study not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting case study:', error);
    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to delete case study' },
      { status: 500 }
    );
  }
}
