
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Users, MessageSquare, CreditCard, FileText, 
  Calendar, Workflow, ChevronRight 
} from "lucide-react";

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  useEffect(() => {
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

  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Lead Generation Automation",
      description:
        "Automate prospecting, lead qualification, and follow-up sequences integrated with your CRM.",
      features: ["AI-driven outreach", "Automatic follow-ups", "CRM integration", "Performance analytics"],
      expanded: "Our lead generation automation uses AI to identify potential clients, qualify leads based on your criteria, and execute personalized follow-up sequences. The system integrates with your existing CRM to ensure all data is synchronized and actionable, while providing comprehensive analytics on campaign performance."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "AI-Powered Customer Support",
      description:
        "Deploy intelligent chatbots and automated email responses to provide 24/7 customer service.",
      features: ["Smart chatbots", "Automated email responses", "Ticket prioritization", "Customer data analysis"],
      expanded: "Our AI customer support system handles routine inquiries through intelligent chatbots, automatically responds to common email requests, and prioritizes tickets that need human attention. The system learns from each interaction, continuously improving its responses while collecting valuable customer insights."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Invoice & Payment Automation",
      description:
        "Streamline the entire billing process from invoice generation to payment collection and reconciliation.",
      features: ["Automated billing", "Payment reminders", "Stripe integration", "Financial reporting"],
      expanded: "Our invoice automation system generates and sends invoices based on your business rules, sends strategic payment reminders to maximize collections, integrates seamlessly with Stripe for payment processing, and provides comprehensive financial reporting to track your revenue streams."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "E-Signature & Document Automation",
      description:
        "Automate document generation, delivery, and e-signature collection for contracts and legal paperwork.",
      features: ["Template creation", "Dynamic document generation", "DocuSign integration", "Secure storage"],
      expanded: "Our document automation system creates custom templates for your contracts and legal documents, dynamically generates personalized documents based on client data, integrates with DocuSign for legally binding e-signatures, and securely stores all documents with appropriate access controls."
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Real Estate & Appointment Scheduling",
      description:
        "Automate property listing management, lead tracking, and appointment scheduling for real estate operations.",
      features: ["Property listing syncing", "Lead assignment", "Calendar integration", "Automated follow-ups"],
      expanded: "Our real estate automation system synchronizes property listings across multiple platforms, automatically assigns leads to the appropriate agents based on expertise and availability, integrates with your calendar systems to avoid scheduling conflicts, and executes personalized follow-up sequences to nurture leads."
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Workflow & Integration Solutions",
      description:
        "Connect your existing tools and platforms to create seamless automated workflows across your business.",
      features: ["API integrations", "Zapier connections", "Custom webhooks", "Data synchronization"],
      expanded: "Our workflow automation connects all your business tools through custom API integrations, Zapier connections for no-code automation, webhook triggers for real-time data flow, and comprehensive data synchronization to ensure consistent information across all platforms."
    },
  ];

  const toggleExpandService = (index: number) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black/50 to-background relative">
      <div className="absolute inset-0 opacity-20 overflow-hidden mask-image">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-6">
            Custom <span className="highlight">AI Automation</span> for Any Business Workflow
          </h2>
          <p className="reveal text-muted-foreground text-lg">
            Leverage the power of artificial intelligence to transform your business operations.
            Our solutions connect to your existing tools and enhance your team's capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal glass p-6 rounded-xl border border-white/5 card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary mr-2 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {expandedService === index && (
                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10 mb-4 transition-all duration-300 animate-fade-in">
                  <p className="text-sm text-muted-foreground">{service.expanded}</p>
                </div>
              )}

              <Button 
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => toggleExpandService(index)}
              >
                {expandedService === index ? "Show Less" : "See More Details"}
                <ChevronRight className={`h-4 w-4 transition-transform ${expandedService === index ? 'rotate-90' : ''}`} />
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button 
            size="lg" 
            className="reveal btn-shine"
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
