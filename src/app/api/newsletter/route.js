import { NextResponse } from "next/server";
import { isValidEmail } from "@/lib/utils";

/**
 * POST /api/newsletter
 * 
 * Handle newsletter subscription requests with email validation.
 * 
 * @param {Request} request - The incoming request object
 * @returns {Promise<NextResponse>} JSON response with success/error message
 * 
 * @example
 * // Request body
 * {
 *   email: "john@example.com"
 * }
 * 
 * @example
 * // Success response (200)
 * { success: true, message: "Successfully subscribed to newsletter!" }
 * 
 * @example
 * // Error response (400)
 * { success: false, error: "Invalid email format" }
 */
export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    const { email } = body;

    // Validate email is provided
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          error: "Email address is required",
        },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email format. Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Sanitize email
    const sanitizedEmail = email.trim().toLowerCase();

    // Block disposable/temporary email domains (optional but recommended)
    const disposableEmailDomains = [
      "tempmail.com",
      "throwaway.email",
      "guerrillamail.com",
      "10minutemail.com",
      "mailinator.com",
    ];
    const emailDomain = sanitizedEmail.split("@")[1];
    if (disposableEmailDomains.includes(emailDomain)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please use a permanent email address",
        },
        { status: 400 }
      );
    }

    // Prepare subscription data
    const subscriptionData = {
      email: sanitizedEmail,
      timestamp: new Date().toISOString(),
      source: "website_footer", // or get from request parameter
      userAgent: request.headers.get("user-agent") || "Unknown",
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "Unknown",
    };

    // TODO: Rate limiting
    // Implement rate limiting to prevent spam subscriptions
    // Example: Limit to 3 subscription attempts per IP per hour
    // 
    // const rateLimitKey = `newsletter_${subscriptionData.ip}`;
    // const isRateLimited = await checkRateLimit(rateLimitKey, {
    //   points: 3,
    //   duration: 3600,
    // });
    // if (isRateLimited) {
    //   return NextResponse.json(
    //     { success: false, error: "Too many requests. Please try again later." },
    //     { status: 429 }
    //   );
    // }

    // Log the newsletter subscription (for now)
    console.log("📰 Newsletter Subscription:", {
      email: subscriptionData.email,
      timestamp: subscriptionData.timestamp,
      source: subscriptionData.source,
    });

    // TODO: Add to email service / mailing list
    // Integrate with your email marketing service
    // 
    // Option 1: Resend (with Resend Audiences)
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.contacts.create({
    //   email: subscriptionData.email,
    //   audienceId: process.env.RESEND_AUDIENCE_ID,
    // });
    // 
    // Option 2: Mailchimp
    // import mailchimp from '@mailchimp/mailchimp_marketing';
    // mailchimp.setConfig({
    //   apiKey: process.env.MAILCHIMP_API_KEY,
    //   server: process.env.MAILCHIMP_SERVER_PREFIX,
    // });
    // await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
    //   email_address: subscriptionData.email,
    //   status: 'subscribed',
    // });
    // 
    // Option 3: ConvertKit
    // const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     api_key: process.env.CONVERTKIT_API_KEY,
    //     email: subscriptionData.email,
    //   }),
    // });
    // 
    // Option 4: SendGrid Marketing
    // import client from '@sendgrid/client';
    // client.setApiKey(process.env.SENDGRID_API_KEY);
    // await client.request({
    //   url: '/v3/marketing/contacts',
    //   method: 'PUT',
    //   body: {
    //     contacts: [{ email: subscriptionData.email }],
    //   },
    // });

    // TODO: Send welcome email
    // Send a welcome/confirmation email to new subscriber
    // 
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Umesh Gajjar <newsletter@umeshgajjar.com>',
    //   to: subscriptionData.email,
    //   subject: 'Welcome to my newsletter! 🎉',
    //   html: `
    //     <h2>Thanks for subscribing!</h2>
    //     <p>You'll receive updates about web development, design, and my latest projects.</p>
    //     <p>You can unsubscribe at any time by clicking the link in any email.</p>
    //     <p>Best regards,<br>Umesh Gajjar</p>
    //   `,
    // });

    // TODO: Store in database (optional)
    // Keep a record of all subscribers for analytics
    // await db.newsletterSubscribers.upsert({
    //   where: { email: subscriptionData.email },
    //   update: { updatedAt: new Date() },
    //   create: subscriptionData,
    // });

    // TODO: Check for duplicate subscriptions
    // Before adding to mailing list, check if email already exists
    // const existingSubscriber = await db.newsletterSubscribers.findUnique({
    //   where: { email: subscriptionData.email }
    // });
    // if (existingSubscriber) {
    //   return NextResponse.json(
    //     {
    //       success: true,
    //       message: "You're already subscribed to the newsletter!",
    //     },
    //     { status: 200 }
    //   );
    // }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to newsletter!",
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
    console.error("❌ Newsletter subscription error:", error);

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
        error: "An error occurred while processing your subscription. Please try again later.",
      },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS /api/newsletter
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
