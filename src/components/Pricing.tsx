
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

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

  const plans = [
    {
      name: "Starter",
      setupFee: 1000,
      price: billingPeriod === 'monthly' ? 500 : 5000,
      description: "Get started with AI automation for your core business workflow",
      features: [
        "1 AI Workflow",
        "Email Support",
        "Monthly Updates",
        "Standard Integrations",
        "5 Users"
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Growth",
      setupFee: 2500,
      price: billingPeriod === 'monthly' ? 1500 : 15000,
      description: "Advanced automation for growing businesses with multiple needs",
      features: [
        "3 AI Workflows",
        "Priority Email & Chat Support",
        "Bi-weekly Updates",
        "Advanced Integrations",
        "10 Users",
        "Workflow Analytics Dashboard",
        "White-labeled Solutions"
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Enterprise",
      setupFee: 5000,
      price: billingPeriod === 'monthly' ? 5000 : 50000,
      description: "Comprehensive automation solutions for complex organizations",
      features: [
        "Unlimited AI Workflows",
        "24/7 Dedicated Support",
        "Weekly Updates",
        "Custom Integrations",
        "Unlimited Users",
        "Advanced Security",
        "Dedicated Account Manager",
        "AI Workflow Optimization"
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-black/50 to-background relative">
      <div className="absolute inset-0 opacity-20 overflow-hidden mask-image">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-6">
            Flexible Plans for <span className="highlight">Every Business</span>
          </h2>
          <p className="reveal text-muted-foreground text-lg">
            Choose the perfect plan for your business needs. All plans include implementation support and ongoing maintenance.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="reveal flex items-center p-1 bg-secondary/50 backdrop-blur-sm rounded-full">
              <button
                className={`px-6 py-2 rounded-full text-sm ${
                  billingPeriod === 'monthly' ? 'bg-primary text-background' : 'text-muted-foreground'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm ${
                  billingPeriod === 'annual' ? 'bg-primary text-background' : 'text-muted-foreground'
                }`}
                onClick={() => setBillingPeriod('annual')}
              >
                Annual <span className="text-xs opacity-80">(20% off)</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`reveal relative rounded-2xl p-1 transition-all duration-500 ${
                plan.highlighted ? 'bg-gradient-to-b from-primary/50 via-primary/20 to-transparent' : 'glass'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-full bg-background/90 backdrop-blur-sm rounded-xl p-6 md:p-8 flex flex-col">
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex flex-col mb-2">
                    <div className="flex items-baseline mb-1">
                      <span className="text-sm text-muted-foreground">One-time setup fee: </span>
                      <span className="text-md font-semibold ml-1">${plan.setupFee}</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground ml-2">
                        /{billingPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
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
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className={`w-full btn-shine ${plan.highlighted ? '' : 'bg-white/10 hover:bg-white/20 text-foreground'}`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                  onClick={() => document.getElementById('contact')?.scrollIntoView()}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 reveal glass p-8 md:p-10 rounded-2xl border border-white/5 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer tailored AI automation packages for businesses with unique requirements.
            Contact our team for a personalized assessment and quote.
          </p>
          <Button 
            size="lg" 
            className="btn-shine"
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            Get a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
