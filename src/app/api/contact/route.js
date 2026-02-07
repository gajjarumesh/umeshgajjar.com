import { NextResponse } from 'next/server';
import { sanitizeText, isValidEmail } from '@/lib/utils';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
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
    const sanitizedSubject = subject ? sanitizeText(subject) : '';
    const sanitizedMessage = sanitizeText(message);
    
    // Log the contact message (since we removed MongoDB)
    console.log('Contact message received:', {
      name: sanitizedName,
      email,
      subject: sanitizedSubject,
      message: sanitizedMessage,
      createdAt: new Date(),
    });
    
    // TODO: Integrate with email service or other storage solution
    
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Error creating contact message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
