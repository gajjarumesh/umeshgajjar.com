import { NextResponse } from 'next/server';

// GET - Return empty case studies list (no database)
export async function GET() {
  try {
    // Return empty array since we removed MongoDB
    return NextResponse.json({ caseStudies: [] });
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch case studies' },
      { status: 500 }
    );
  }
}
