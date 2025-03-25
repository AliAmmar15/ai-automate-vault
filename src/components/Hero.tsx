
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import TextTransition from './ui/TextTransition';
import { ScrollArea } from "./ui/scroll-area";

const Hero = () => {
  const textWrapperRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
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
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden gradient-bg grid-pattern">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
          <div className="reveal mb-2">
            <span className="inline-block py-1 px-3 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full mb-5">
              AI-POWERED BUSINESS AUTOMATION
            </span>
          </div>
          
          <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            AI-Powered Business Automation: <span className="highlight">Save Time, Scale Faster.</span>
          </h1>
          
          <p className="reveal text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
            Eliminate repetitive tasks, optimize workflows, and boost efficiency with custom AI automation for{' '}
            <span className="text-foreground font-medium">
              <TextTransition 
                texts={[
                  "Law Firms",
                  "E-Commerce",
                  "Real Estate",
                  "Marketing Agencies",
                  "Healthcare",
                  "Consulting"
                ]} 
                delay={2000}
              />
            </span>
          </p>
          
          <div className="reveal flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="btn-shine relative overflow-hidden" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get a Free AI Audit
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></span>
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-primary/10 transition-colors duration-300" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              See How It Works
            </Button>
          </div>
          
          <div ref={textWrapperRef} className="reveal w-full md:w-3/4 lg:w-2/3 bg-black/50 rounded-2xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-md">
            <ScrollArea className="h-64 w-full p-4">
              <div className="space-y-4 p-2">
                {[
                  {
                    title: "Automated Client Onboarding",
                    description: "Streamline your client intake process with AI-powered automation. Collect information, generate documents, and set up workflows automatically."
                  },
                  {
                    title: "Smart Document Generation",
                    description: "Generate legally-sound contracts, proposals, and agreements with AI precision based on your specific requirements."
                  },
                  {
                    title: "Intelligent Invoice Processing",
                    description: "Automatically extract data from invoices, route for approvals, and reconcile with accounting systems without manual input."
                  },
                  {
                    title: "Seamless Workflow Integration",
                    description: "Connect your existing tools and platforms with custom API integrations for a unified business ecosystem."
                  },
                  {
                    title: "Automated Appointment Scheduling",
                    description: "Let AI handle your calendar, automatically schedule meetings, and send reminders to minimize no-shows."
                  },
                  {
                    title: "Cross-Platform Data Synchronization",
                    description: "Keep your data consistent across all platforms with real-time syncing and validation."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-black/30 rounded-lg p-4 border border-primary/20 transition-all duration-300 hover:border-primary/50 hover:bg-black/40">
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-lg font-semibold min-w-[24px] mt-0.5">→</span>
                      <div>
                        <h3 className="text-lg font-medium mb-1 text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          
          <div className="mt-8 reveal animate-bounce">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full border border-primary/20 hover:bg-primary/10"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
