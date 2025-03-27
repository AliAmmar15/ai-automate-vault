
# Email Functionality Setup Guide

This application uses EmailJS to send emails directly from the client-side without needing a backend server. Follow these steps to set up your email functionality:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for an account
2. Confirm your email address

## Step 2: Set Up an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose an email provider (Gmail, Outlook, etc.) and connect your account
4. Give your service a name (e.g., "contact-form")
5. Note down the Service ID for later use

## Step 3: Create an Email Template

1. In your EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{from_name}}` - Name of the person contacting you
   - `{{from_email}}` - Email of the person contacting you
   - `{{company}}` - Company name
   - `{{industry}}` - Industry
   - `{{business_size}}` - Business size
   - `{{pain_point}}` - Pain point
   - `{{budget}}` - Budget
   - `{{message}}` - Message content
4. Save the template and note down the Template ID

## Step 4: Update Your Application Configuration

1. Open `src/components/Contact.tsx`
2. Find the following lines:
   ```typescript
   const EMAILJS_USER_ID = 'YOUR_USER_ID';
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   ```
3. Replace with your own values:
   - `YOUR_USER_ID`: Found in your EmailJS dashboard under "Account" > "API Keys"
   - `YOUR_SERVICE_ID`: The Service ID you noted from Step 2
   - `YOUR_TEMPLATE_ID`: The Template ID you noted from Step 3

## Step 5: Test Your Email Functionality

1. Fill out the contact form on your website
2. Submit the form
3. Check your email to see if you received the message
4. Verify in your EmailJS dashboard under "Email History" that the email was sent

## Troubleshooting

- If emails are not being sent, check your browser console for error messages
- Verify that your EmailJS account is active and has not reached its limit for the free tier
- Ensure your service is properly connected and authenticated with your email provider

## Additional Configuration

For more advanced configuration, such as rate limiting, spam protection, or using environment variables to store your API keys, refer to the [EmailJS documentation](https://www.emailjs.com/docs/).
