
import emailjs from 'emailjs-com';

interface EmailFormData {
  name: string;
  email: string;
  company?: string;
  industry?: string;
  businessSize?: string;
  painPoint?: string;
  budget?: string;
  message: string;
}

export const initializeEmailJS = (userId: string) => {
  emailjs.init(userId);
};

export const sendEmail = async (
  serviceId: string,
  templateId: string,
  formData: EmailFormData
): Promise<{ status: number }> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not provided',
      industry: formData.industry || 'Not provided',
      business_size: formData.businessSize || 'Not provided',
      pain_point: formData.painPoint || 'Not provided',
      budget: formData.budget || 'Not provided',
      message: formData.message,
    };

    console.log('Sending email with params:', templateParams);
    const response = await emailjs.send(serviceId, templateId, templateParams);
    console.log('Email successfully sent!', response);
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
