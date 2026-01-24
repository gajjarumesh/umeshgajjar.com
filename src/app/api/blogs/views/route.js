import { NextResponse } from 'next/server';
import { getCollection, COLLECTIONS } from '@/lib/db';
import { getClientIP, hashIP } from '@/lib/utils';
import { getAuthUser } from '@/lib/auth';

const HOURS_24_IN_MS = 24 * 60 * 60 * 1000;

export async function POST(request) {
  try {
    const { slug } = await request.json();
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug is required' },
        { status: 400 }
      );
    }
    
    // Check if user is admin (don't count admin views)
    const user = await getAuthUser();
    if (user && user.role === 'admin') {
      return NextResponse.json({ success: true, counted: false });
    }
    
    // Get IP and hash it
    const ip = getClientIP(request);
    const ipHash = hashIP(ip);
    
    // Check if this IP has viewed this blog in the last 24 hours
    const views = await getCollection(COLLECTIONS.BLOG_VIEWS);
    const oneDayAgo = new Date(Date.now() - HOURS_24_IN_MS);
    
    const existingView = await views.findOne({
      slug,
      ipHash,
      timestamp: { $gte: oneDayAgo },
    });
    
    if (existingView) {
      return NextResponse.json({ success: true, counted: false });
    }
    
    // Record the view
    await views.insertOne({
      slug,
      ipHash,
      timestamp: new Date(),
    });
    
    // Increment view count on blog
    const blogs = await getCollection(COLLECTIONS.BLOGS);
    await blogs.updateOne(
      { slug },
      { $inc: { viewCount: 1 } }
    );
    
    return NextResponse.json({ success: true, counted: true });
  } catch (error) {
    console.error('Error recording view:', error);
    return NextResponse.json(
      { error: 'Failed to record view' },
      { status: 500 }
    );
  }
}
