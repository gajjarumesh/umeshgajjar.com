import { NextResponse } from 'next/server';
import { getCollection, COLLECTIONS } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export async function GET() {
  try {
    await requireAuth();
    
    const blogs = await getCollection(COLLECTIONS.BLOGS);
    const comments = await getCollection(COLLECTIONS.COMMENTS);
    const blogViews = await getCollection(COLLECTIONS.BLOG_VIEWS);
    const contactMessages = await getCollection(COLLECTIONS.CONTACT_MESSAGES);
    const caseStudies = await getCollection(COLLECTIONS.CASE_STUDIES);
    
    // Get counts
    const totalBlogs = await blogs.countDocuments();
    const publishedBlogs = await blogs.countDocuments({ published: true });
    const totalComments = await comments.countDocuments();
    const pendingComments = await comments.countDocuments({ approved: false });
    const totalViews = await blogViews.countDocuments();
    const unreadMessages = await contactMessages.countDocuments({ read: false });
    const totalCaseStudies = await caseStudies.countDocuments();
    
    // Get recent activity
    const recentComments = await comments
      .find()
      .sort({ createdAt: -1 })
      .limit(5)
      .toArray();
    
    const recentMessages = await contactMessages
      .find()
      .sort({ createdAt: -1 })
      .limit(5)
      .toArray();
    
    // Get top blogs by views
    const topBlogs = await blogs
      .find({ published: true })
      .sort({ viewCount: -1 })
      .limit(5)
      .project({ title: 1, slug: 1, viewCount: 1 })
      .toArray();
    
    return NextResponse.json({
      stats: {
        totalBlogs,
        publishedBlogs,
        totalComments,
        pendingComments,
        totalViews,
        unreadMessages,
        totalCaseStudies,
      },
      recentActivity: {
        comments: recentComments,
        messages: recentMessages,
      },
      topBlogs,
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}
