
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import TextTransition from './ui/TextTransition';

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden gradient-bg grid-pattern">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
          <div className="reveal mb-2">
            <span className="inline-block py-1 px-3 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full mb-5">
              AI-POWERED BUSINESS AUTOMATION
            </span>
          </div>
          
          <h1 className="reveal text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
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
            <Button size="lg" className="btn-shine" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              Get a Free AI Audit
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView()}>
              See How It Works
            </Button>
          </div>
          
          <div ref={textWrapperRef} className="reveal w-full md:w-3/4 aspect-video bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-white/10 glass">
            <div className="relative w-full h-full overflow-hidden">
              <div className="animate-text-slide">
                <div className="h-[16.66%] w-full flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <span className="text-md md:text-lg opacity-70">{">"}</span>
                    <span className="text-sm md:text-md">Automating client onboarding for law firms...</span>
                  </div>
                </div>
                <div className="h-[16.66%] w-full flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <span className="text-md md:text-lg opacity-70">{">"}</span>
                    <span className="text-sm md:text-md">Generating documents with AI precision...</span>
                  </div>
                </div>
                <div className="h-[16.66%] w-full flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <span className="text-md md:text-lg opacity-70">{">"}</span>
                    <span className="text-sm md:text-md">Processing invoices automatically...</span>
                  </div>
                </div>
                <div className="h-[16.66%] w-full flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <span className="text-md md:text-lg opacity-70">{">"}</span>
                    <span className="text-sm md:text-md">Connecting with your existing workflows...</span>
                  </div>
                </div>
                <div className="h-[16.66%] w-full flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <span className="text-md md:text-lg opacity-70">{">"}</span>
                    <span className="text-sm md:text-md">Scheduling appointments without manual input...</span>
                  </div>
                </div>
                <div className="h-[16.66%] w-full flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <span className="text-md md:text-lg opacity-70">{">"}</span>
                    <span className="text-sm md:text-md">Syncing data across all your platforms...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-muted-foreground"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
