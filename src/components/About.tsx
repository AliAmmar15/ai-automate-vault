
import React, { useEffect } from 'react';

const About = () => {
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

  const benefits = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "AI-Powered Efficiency",
      description:
        "Leverage the latest AI technologies to automate repetitive tasks, saving you valuable time and resources.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Custom-Tailored Solutions",
      description:
        "We design automation workflows that fit your specific business needs, not generic one-size-fits-all solutions.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Scalable & Secure",
      description:
        "Our solutions grow with your business, while maintaining enterprise-grade security for your data and operations.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "24/7 Automation",
      description:
        "Your digital workflows run around the clock, handling inquiries, processing data, and generating insights even when you're offline.",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-background to-black/50">
      <div className="absolute inset-0 opacity-20 overflow-hidden mask-image">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-6">
            Streamline Your Business with <span className="highlight">AI Automation</span>
          </h2>
          <p className="reveal text-muted-foreground text-lg">
            At Velonus, we specialize in AI-driven business automation solutions tailored to your unique workflows. Whether you're looking to optimize client onboarding, automate customer support, or streamline your payment processes, we design, build, and maintain AI-powered automation that saves you time and money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="reveal glass p-6 rounded-xl card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{benefit.title}</h3>
              <p className="text-muted-foreground text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 reveal glass p-8 md:p-10 rounded-2xl border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Choose <span className="highlight">Velonus</span>?</h3>
              <p className="text-muted-foreground mb-6">
                We don't just implement tools – we craft comprehensive automation strategies that transform your business operations. Our team combines expertise in AI, process engineering, and your industry's specific workflows.
              </p>
              <ul className="space-y-3">
                {[
                  "Deep integration with your existing tools",
                  "Continuous improvement and optimization",
                  "Dedicated support and training",
                  "ROI-focused implementation"
                ].map((item, i) => (
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-30 blur"></div>
              <div className="w-full aspect-square bg-black/30 backdrop-blur-sm rounded-lg p-6 relative">
                <div className="h-full w-full flex items-center justify-center">
                  <div className="space-y-6 w-full">
                    <div className="h-3 bg-white/10 rounded-full w-2/3"></div>
                    <div className="h-3 bg-white/10 rounded-full w-3/4"></div>
                    <div className="h-3 bg-white/10 rounded-full w-1/2"></div>
                    <div className="h-3 bg-white/10 rounded-full w-3/5"></div>
                    <div className="h-8 bg-primary/20 rounded-md w-2/3 mt-8"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
