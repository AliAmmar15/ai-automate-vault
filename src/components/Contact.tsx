import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { initializeEmailJS, sendEmail } from '@/utils/EmailService';

const EMAILJS_USER_ID = 'znd0sXMqnDHGUmi_q';
const EMAILJS_SERVICE_ID = 'service_wxk15qv';
const EMAILJS_TEMPLATE_ID = 'template_3a18ru8';

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    businessSize: '',
    painPoint: '',
    budget: '',
    message: ''
  });

  const industryOptions = [
    "Legal",
    "E-commerce",
    "Real Estate",
    "Marketing",
    "Healthcare",
    "Finance",
    "Education",
    "Manufacturing",
    "Consulting",
    "Technology",
    "Other"
  ];

  const businessSizeOptions = [
    "Solo/Freelancer",
    "Small (2-10 employees)",
    "Medium (11-50 employees)",
    "Large (51-200 employees)",
    "Enterprise (201+ employees)"
  ];

  const painPointOptions = [
    "Lead Generation",
    "Customer Support",
    "Billing & Payments",
    "Document Processing",
    "Appointment Scheduling",
    "Data Entry & Management",
    "Reporting & Analytics",
    "Multiple Areas"
  ];

  const budgetOptions = [
    "Under $500/month",
    "$500-$2,000/month",
    "$2,000-$5,000/month",
    "$5,000+/month",
    "Not sure yet"
  ];

  useEffect(() => {
    initializeEmailJS(EMAILJS_USER_ID);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      await sendEmail(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData);
      
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        industry: '',
        businessSize: '',
        painPoint: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-black/80 relative">
      <div className="absolute inset-0 opacity-20 overflow-hidden mask-image">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's <span className="highlight">Automate</span> Your Business Today!
              </h2>
              <p className="text-muted-foreground mb-10">
                Ready to transform your business with AI automation? Fill out the form to get started with a free consultation.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">info@velonus.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Schedule a Call</h3>
                    <p className="text-muted-foreground">Book a 30-minute discovery call to discuss your needs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">AI Automation FAQ</h3>
                    <p className="text-muted-foreground">Visit our knowledge base for answers to common questions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal glass p-8 rounded-2xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Business Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="you@yourcompany.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="Your company"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium mb-2">Industry</label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      required
                    >
                      <option value="" disabled>Select your industry</option>
                      {industryOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="businessSize" className="block text-sm font-medium mb-2">Business Size</label>
                    <select
                      id="businessSize"
                      name="businessSize"
                      value={formData.businessSize}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      required
                    >
                      <option value="" disabled>Select team size</option>
                      {businessSizeOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="painPoint" className="block text-sm font-medium mb-2">Biggest Pain Point</label>
                    <select
                      id="painPoint"
                      name="painPoint"
                      value={formData.painPoint}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      required
                    >
                      <option value="" disabled>Select biggest challenge</option>
                      {painPointOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    required
                  >
                    <option value="" disabled>Select your budget range</option>
                    {budgetOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">What do you need automated?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us about the business process you'd like to automate..."
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full btn-shine" 
                  disabled={submitting}
                >
                  {submitting ? 'Sending...' : 'Get Your Free Consultation'}
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By submitting this form, you agree to our <a href="#" className="underline hover:text-foreground transition-colors">Privacy Policy</a> and consent to being contacted about our services.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
