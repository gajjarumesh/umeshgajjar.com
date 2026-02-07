import { NextResponse } from 'next/server';
import { sanitizeText, isValidEmail } from '@/lib/utils';
import { sendContactEmail } from '@/lib/email';

export async function POST(request) {
  try {
    const { name, email, phone, projectType, budgetRange, message } = await request.json();
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeText(name),
      email: email.trim().toLowerCase(),
      phone: phone ? sanitizeText(phone) : '',
      projectType: projectType ? sanitizeText(projectType) : '',
      budgetRange: budgetRange ? sanitizeText(budgetRange) : '',
      message: sanitizeText(message),
    };
    
    // Check if SMTP is configured
    const smtpConfigured = process.env.SMTP_HOST && 
                           process.env.SMTP_USER && 
                           process.env.SMTP_PASSWORD &&
                           process.env.CONTACT_EMAIL_TO;
    
    if (!smtpConfigured) {
      // Log to console if SMTP is not configured
      console.warn('⚠️  SMTP not configured. Contact form submission logged but not emailed.');
      console.log('Contact message received:', {
        ...sanitizedData,
        createdAt: new Date().toISOString(),
      });
      
      return NextResponse.json({
        success: true,
        message: 'Message received successfully',
        warning: 'Email notification not sent (SMTP not configured)',
      });
    }
    
    // Send email via SMTP
    try {
      const emailResult = await sendContactEmail(sanitizedData);
      
      console.log('✅ Contact form submission sent via email:', {
        from: sanitizedData.name,
        email: sanitizedData.email,
        messageId: emailResult.messageId,
      });
      
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully! I will get back to you soon.',
      });
    } catch (emailError) {
      console.error('❌ Error sending email:', emailError);
      
      // Still log the submission even if email fails
      console.log('Contact message received (email failed):', {
        ...sanitizedData,
        createdAt: new Date().toISOString(),
      });
      
      return NextResponse.json(
        { 
          error: 'Failed to send email notification. Please try again or contact me directly.',
          details: process.env.NODE_ENV === 'development' ? emailError.message : undefined,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process your message. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
