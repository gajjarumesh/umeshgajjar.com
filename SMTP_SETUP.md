# SMTP Configuration Guide for Contact Form

This guide will help you configure SMTP email sending for the contact form.

## Quick Setup

1. **Copy the environment template:**
   ```bash
   cp .env.example .env.local
   ```

2. **Configure your SMTP settings in `.env.local`**

3. **Restart the development server:**
   ```bash
   npm run dev
   ```

## Supported SMTP Providers

### Gmail (Recommended for Testing)

1. Enable 2-factor authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use these settings:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-digit-app-password
SMTP_SECURE=false
CONTACT_EMAIL_TO=your-email@gmail.com
CONTACT_EMAIL_FROM=your-email@gmail.com
CONTACT_EMAIL_FROM_NAME=Your Name Portfolio
```

### SendGrid

1. Create a SendGrid account: https://sendgrid.com/
2. Generate an API key
3. Use these settings:

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
SMTP_SECURE=false
CONTACT_EMAIL_TO=your-email@example.com
CONTACT_EMAIL_FROM=noreply@yourdomain.com
CONTACT_EMAIL_FROM_NAME=Your Name Portfolio
```

### AWS SES (Simple Email Service)

1. Verify your domain/email in AWS SES
2. Create SMTP credentials
3. Use these settings:

```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-aws-smtp-username
SMTP_PASSWORD=your-aws-smtp-password
SMTP_SECURE=false
CONTACT_EMAIL_TO=your-email@example.com
CONTACT_EMAIL_FROM=noreply@yourdomain.com
CONTACT_EMAIL_FROM_NAME=Your Name Portfolio
```

### Mailgun

1. Create a Mailgun account: https://www.mailgun.com/
2. Get your SMTP credentials
3. Use these settings:

```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-smtp-username
SMTP_PASSWORD=your-mailgun-smtp-password
SMTP_SECURE=false
CONTACT_EMAIL_TO=your-email@example.com
CONTACT_EMAIL_FROM=noreply@yourdomain.com
CONTACT_EMAIL_FROM_NAME=Your Name Portfolio
```

## Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port (587 for TLS, 465 for SSL) | `587` |
| `SMTP_USER` | SMTP username (usually your email) | `your-email@gmail.com` |
| `SMTP_PASSWORD` | SMTP password or app password | `your-app-password` |
| `SMTP_SECURE` | Use SSL (true for port 465, false for 587) | `false` |
| `CONTACT_EMAIL_TO` | Email that receives form submissions | `hello@umeshgajjar.com` |
| `CONTACT_EMAIL_FROM` | Email that appears as sender | `noreply@umeshgajjar.com` |
| `CONTACT_EMAIL_FROM_NAME` | Name that appears as sender | `Umesh Gajjar Portfolio` |

## Testing Email Configuration

### Test Locally

1. Create `.env.local` with your SMTP settings
2. Start the dev server: `npm run dev`
3. Visit http://localhost:3000/contact
4. Fill out and submit the contact form
5. Check the server console for success/error messages
6. Check your inbox for the email

### Production Deployment

#### Vercel

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add each SMTP variable from `.env.example`
4. Redeploy your application

#### Other Platforms

Add the environment variables in your platform's settings:
- Netlify: Site Settings → Environment Variables
- Railway: Variables tab
- AWS Amplify: Environment Variables
- Heroku: Config Vars

## Troubleshooting

### "SMTP connection error"

- Check your username and password
- Ensure your email provider allows SMTP access
- For Gmail, use App Passwords instead of your regular password
- Check if your firewall is blocking the SMTP port

### "Authentication failed"

- Verify your SMTP_USER and SMTP_PASSWORD are correct
- For Gmail, ensure 2FA is enabled and you're using an App Password
- Check if your email provider requires specific authentication methods

### "Connection timeout"

- Verify SMTP_HOST and SMTP_PORT are correct
- Try using port 465 with SMTP_SECURE=true
- Check if your hosting provider blocks outgoing SMTP connections

### Emails not received

- Check spam/junk folder
- Verify CONTACT_EMAIL_TO is correct
- For Gmail, check if the email was filtered
- Ensure your domain is verified (for custom domains)

## Security Best Practices

1. **Never commit `.env.local` to git** - it contains sensitive credentials
2. **Use App Passwords** instead of your main email password
3. **Rotate credentials** regularly
4. **Use environment-specific configs** for development, staging, and production
5. **Monitor email sending** for unusual activity
6. **Set up SPF, DKIM, and DMARC** records for custom domains

## Local Development Without SMTP

If you don't want to configure SMTP for local development:

1. The contact form will still work
2. Form submissions will be logged to the console
3. A warning message will indicate SMTP is not configured
4. Configure SMTP only when deploying to production

## Support

If you encounter issues:
1. Check the server console for detailed error messages
2. Verify all environment variables are set correctly
3. Test with Gmail first (easiest to set up)
4. Check your email provider's SMTP documentation
