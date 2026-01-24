import { NextResponse } from 'next/server';
import { getCollection, COLLECTIONS } from '@/lib/db';
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
    
    const messages = await getCollection(COLLECTIONS.CONTACT_MESSAGES);
    
    const contactMessage = {
      name: sanitizedName,
      email,
      subject: sanitizedSubject,
      message: sanitizedMessage,
      createdAt: new Date(),
      read: false,
    };
    
    const result = await messages.insertOne(contactMessage);
    
    return NextResponse.json({
      success: true,
      id: result.insertedId.toString(),
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
