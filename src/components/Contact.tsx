
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/api/send-email";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Send the email using our API
      await sendEmail(formData);
      
      toast({ 
        title: "Message Sent", 
        description: "We've received your message and will get back to you soon." 
      });

      // Reset form with only necessary fields
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-black/80">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's <span className="highlight">Automate</span> Your Business Today!
        </h2>
        <p className="text-muted-foreground mb-8">Fill out the form below to get started with a free consultation.</p>

        {/* Contact Form */}
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name, Email, Company */}
            {["name", "email", "company"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field === "name" ? "Your Name" : field === "email" ? "Your Email" : "Your Company"}
                required
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground outline-none focus:ring-2 focus:ring-primary transition"
              />
            ))}

            {/* Message Box */}
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about the business process you'd like to automate..."
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-foreground outline-none focus:ring-2 focus:ring-primary transition resize-none"
            ></textarea>

            {/* Submit Button */}
            <Button type="submit" className="w-full btn-shine" disabled={submitting}>
              {submitting ? "Sending..." : "Get Your Free Consultation"}
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              By submitting this form, you agree to our <a href="#" className="underline hover:text-foreground transition">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
