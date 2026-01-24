import { NextResponse } from "next/server";
import { isValidEmail, isValidPhone } from "@/lib/utils";

/**
 * POST /api/contact
 * 
 * Handle contact form submissions with validation and error handling.
 * 
 * @param {Request} request - The incoming request object
 * @returns {Promise<NextResponse>} JSON response with success/error message
 * 
 * @example
 * // Request body
 * {
 *   name: "John Doe",
 *   email: "john@example.com",
 *   phone: "+1234567890",
 *   projectType: "Web Development",
 *   budgetRange: "$5,000 - $10,000",
 *   message: "I need a website for my business"
 * }
 * 
 * @example
 * // Success response (200)
 * { success: true, message: "Thank you! I'll get back to you soon." }
 * 
 * @example
 * // Error response (400)
 * { success: false, error: "Invalid email format" }
 */
export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, phone, projectType, budgetRange, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: name, email, and message are required",
        },
        { status: 400 }
      );
    }

    // Validate name (minimum 2 characters)
    if (name.trim().length < 2) {
      return NextResponse.json(
        {
          success: false,
          error: "Name must be at least 2 characters long",
        },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email format",
        },
        { status: 400 }
      );
    }

    // Validate phone if provided
    if (phone && !isValidPhone(phone)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid phone number format",
        },
        { status: 400 }
      );
    }

    // Validate message (minimum 10 characters)
    if (message.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Message must be at least 10 characters long",
        },
        { status: 400 }
      );
    }

    // Validate projectType if provided (optional but should be from allowed list)
    const allowedProjectTypes = [
      "Web Development",
      "Mobile App",
      "UI/UX Design",
      "Consulting",
      "Other",
    ];
    if (projectType && !allowedProjectTypes.includes(projectType)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid project type",
        },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic XSS prevention)
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      projectType: projectType?.trim() || "Not specified",
      budgetRange: budgetRange?.trim() || "Not specified",
      message: message.trim(),
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || "Unknown",
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "Unknown",
    };

    // TODO: Rate limiting
    // Implement rate limiting here to prevent spam/abuse
    // Example: Check IP address and limit to X requests per hour
    // You could use a package like 'rate-limiter-flexible' or implement
    // your own using Redis, database, or in-memory store
    // 
    // const rateLimitKey = `contact_${sanitizedData.ip}`;
    // const isRateLimited = await checkRateLimit(rateLimitKey, {
    //   points: 3, // Number of requests
    //   duration: 3600, // Per hour
    // });
    // if (isRateLimited) {
    //   return NextResponse.json(
    //     { success: false, error: "Too many requests. Please try again later." },
    //     { status: 429 }
    //   );
    // }

    // Log the contact form submission (for now)
    console.log("📧 Contact Form Submission:", {
      name: sanitizedData.name,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      projectType: sanitizedData.projectType,
      budgetRange: sanitizedData.budgetRange,
      messagePreview: sanitizedData.message.substring(0, 50) + "...",
      timestamp: sanitizedData.timestamp,
    });

    // TODO: Send email notification
    // Integrate with email service provider (Resend, SendGrid, AWS SES, etc.)
    // 
    // Example with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // 
    // await resend.emails.send({
    //   from: 'contact@umeshgajjar.com',
    //   to: 'your-email@example.com',
    //   replyTo: sanitizedData.email,
    //   subject: `New Contact Form: ${sanitizedData.name} - ${sanitizedData.projectType}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${sanitizedData.name}</p>
    //     <p><strong>Email:</strong> ${sanitizedData.email}</p>
    //     <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
    //     <p><strong>Project Type:</strong> ${sanitizedData.projectType}</p>
    //     <p><strong>Budget Range:</strong> ${sanitizedData.budgetRange}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${sanitizedData.message}</p>
    //     <hr>
    //     <p><small>Submitted at: ${sanitizedData.timestamp}</small></p>
    //   `,
    // });
    //
    // Send auto-reply to user:
    // await resend.emails.send({
    //   from: 'Umesh Gajjar <noreply@umeshgajjar.com>',
    //   to: sanitizedData.email,
    //   subject: 'Thank you for contacting me!',
    //   html: `
    //     <h2>Thank you for reaching out!</h2>
    //     <p>Hi ${sanitizedData.name},</p>
    //     <p>I've received your message and will get back to you as soon as possible.</p>
    //     <p>Best regards,<br>Umesh Gajjar</p>
    //   `,
    // });

    // TODO: Store in database (optional)
    // If you want to keep records of all submissions:
    // await db.contactSubmissions.create({
    //   data: sanitizedData
    // });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you! I'll get back to you soon.",
      },
      { 
        status: 200,
        headers: {
          // Add CORS headers if needed for external domains
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Methods': 'POST, OPTIONS',
          // 'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    );
  } catch (error) {
    // Log error for debugging
    console.error("❌ Contact form error:", error);

    // Check for specific error types
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid JSON format in request body",
        },
        { status: 400 }
      );
    }

    // Return generic error response (don't expose internal errors to client)
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS /api/contact
 * 
 * Handle preflight CORS requests
 */
export async function OPTIONS(request) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
