
import React, { useEffect, useState } from 'react';
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const faqs = [
    {
      question: "How long does it take to implement automation?",
      answer: "Implementation timeline varies based on the complexity of your workflow, but most solutions are operational within 2-6 weeks. Small, focused automation projects can be completed in as little as 2 weeks, while comprehensive enterprise solutions may take 8-12 weeks to fully deploy."
    },
    {
      question: "Do I need to pay the setup fee before the subscription starts?",
      answer: "Yes, the one-time setup fee is charged at the beginning of the project to cover initial analysis, custom development, and integration work. The monthly subscription begins once your automation solution is deployed and operational."
    },
    {
      question: "Can I customize my automation workflow?",
      answer: "Absolutely! All of our automation solutions are custom-built for your specific business needs. We start with a thorough analysis of your current workflows, identify automation opportunities, and design a solution that integrates with your existing tools and processes."
    },
    {
      question: "What's the difference between Zapier and your service?",
      answer: "While Zapier connects apps through pre-built integrations, our service provides comprehensive, custom-built automation solutions with AI capabilities. We handle complex business logic, custom integrations not available on Zapier, and provide ongoing maintenance, optimization, and support tailored to your business needs."
    },
    {
      question: "Can your automation solutions handle sensitive data?",
      answer: "Yes, we implement enterprise-grade security measures for all automation solutions. This includes encryption at rest and in transit, secure authentication protocols, and role-based access controls. We can also comply with industry-specific regulations like GDPR, HIPAA, and SOC2."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes, comprehensive training is included in the setup fee. We provide documentation, video tutorials, and live training sessions to ensure your team is comfortable with the new automation. Advanced training packages are also available for larger organizations."
    }
  ];

  const toggleQuestion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-black/50 to-background relative">
      <div className="absolute inset-0 opacity-20 overflow-hidden mask-image">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p className="reveal text-muted-foreground text-lg">
            Find answers to common questions about our AI automation services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="reveal glass p-5 rounded-xl border border-white/5"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button 
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <ChevronDown className={`h-5 w-5 text-primary transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              
              {openIndex === index && (
                <div className="mt-4 text-muted-foreground pt-2 border-t border-white/10 animate-accordion-down">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
