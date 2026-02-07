/**
 * Email Service using Nodemailer
 * Handles sending emails via SMTP for contact form submissions
 */

import nodemailer from 'nodemailer';

// Validate SMTP configuration
const validateSMTPConfig = () => {
  const requiredEnvVars = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USER',
    'SMTP_PASSWORD',
    'CONTACT_EMAIL_TO',
    'CONTACT_EMAIL_FROM',
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
};

// Create reusable transporter
const createTransporter = () => {
  validateSMTPConfig();

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

/**
 * Send contact form email
 * @param {Object} contactData - Contact form data
 * @param {string} contactData.name - Sender's name
 * @param {string} contactData.email - Sender's email
 * @param {string} contactData.phone - Sender's phone (optional)
 * @param {string} contactData.projectType - Project type (optional)
 * @param {string} contactData.budgetRange - Budget range (optional)
 * @param {string} contactData.message - Message content
 * @returns {Promise<Object>} - Email send result
 */
export const sendContactEmail = async (contactData) => {
  try {
    const transporter = createTransporter();

    const { name, email, phone, projectType, budgetRange, message } = contactData;

    // Email HTML content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              padding: 30px;
            }
            .field {
              margin-bottom: 20px;
              padding-bottom: 20px;
              border-bottom: 1px solid #e5e7eb;
            }
            .field:last-child {
              border-bottom: none;
            }
            .field-label {
              font-weight: bold;
              color: #4b5563;
              margin-bottom: 5px;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .field-value {
              color: #1f2937;
              font-size: 16px;
            }
            .message-box {
              background: #f9fafb;
              border-left: 4px solid #3b82f6;
              padding: 15px;
              margin-top: 10px;
              border-radius: 4px;
            }
            .footer {
              background: #f9fafb;
              padding: 20px;
              text-align: center;
              color: #6b7280;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="field-label">Phone</div>
                <div class="field-value">${phone}</div>
              </div>
              ` : ''}
              
              ${projectType ? `
              <div class="field">
                <div class="field-label">Project Type</div>
                <div class="field-value">${projectType}</div>
              </div>
              ` : ''}
              
              ${budgetRange ? `
              <div class="field">
                <div class="field-label">Budget Range</div>
                <div class="field-value">${budgetRange}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from your portfolio contact form at ${process.env.NEXT_PUBLIC_SITE_URL || 'https://umeshgajjar.com'}</p>
              <p>Received on ${new Date().toLocaleString('en-US', { 
                dateStyle: 'full', 
                timeStyle: 'long',
                timeZone: 'Asia/Kolkata'
              })}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Plain text version
    const textContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}${projectType ? `Project Type: ${projectType}\n` : ''}${budgetRange ? `Budget Range: ${budgetRange}\n` : ''}
Message:
${message}

---
This email was sent from your portfolio contact form.
Received on ${new Date().toLocaleString('en-US', { 
  dateStyle: 'full', 
  timeStyle: 'long',
  timeZone: 'Asia/Kolkata'
})}
    `;

    // Email options
    const mailOptions = {
      from: {
        name: process.env.CONTACT_EMAIL_FROM_NAME || 'Umesh Gajjar Portfolio',
        address: process.env.CONTACT_EMAIL_FROM || process.env.SMTP_USER,
      },
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email, // Allow easy reply to the sender
      subject: `New Contact Form Submission from ${name}`,
      text: textContent,
      html: htmlContent,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', {
      messageId: info.messageId,
      from: name,
      to: process.env.CONTACT_EMAIL_TO,
    });

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

/**
 * Verify SMTP connection
 * @returns {Promise<boolean>} - Connection status
 */
export const verifyEmailConnection = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('SMTP server is ready to send emails');
    return true;
  } catch (error) {
    console.error('SMTP connection error:', error);
    return false;
  }
};
