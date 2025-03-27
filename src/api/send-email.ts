
// Get API key from environment variables with the VITE_ prefix
const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY;

interface EmailData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<void> {
  try {
    if (!RESEND_API_KEY) {
      throw new Error("Resend API key is missing");
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev', // Use your verified domain in production
        to: 'your-email@example.com', // Replace with your email
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to send email: ${errorData.message}`);
    }

    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
}
