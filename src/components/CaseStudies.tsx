
import React, { useEffect, useState } from 'react';
import { Briefcase, ShoppingBag, BarChart } from "lucide-react";

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const caseStudies = [
    {
      icon: <Briefcase className="h-10 w-10" />,
      name: "Davidson & Partners Law Firm",
      industry: "Legal",
      results: "20 hours saved monthly",
      challenge: "The firm was drowning in paperwork with attorneys spending 5+ hours weekly on contract reviews and manual document handling, delaying client work and limiting growth.",
      solution: "We implemented a custom AI document automation system that extracts key information, generates draft contracts, and manages the signature workflow.",
      outcome: "Davidson reduced contract processing time by 75%, eliminated manual errors, and freed up 20+ hours per month for their attorneys to focus on billable client work.",
      quote: "Velonus transformed our contract workflow from a time-consuming bottleneck to a streamlined process. Our attorneys now focus on high-value client work instead of administrative tasks.",
      person: "Jennifer Davidson",
      title: "Managing Partner",
    },
    {
      icon: <ShoppingBag className="h-10 w-10" />,
      name: "Urban Threads Apparel",
      industry: "E-Commerce",
      results: "35% increase in recovered carts",
      challenge: "The clothing retailer struggled with high cart abandonment rates and had a manual, generic email follow-up process that yielded poor results.",
      solution: "We built an AI-driven email automation system that analyzes customer behavior, sends personalized follow-ups, and provides targeted product recommendations.",
      outcome: "Urban Threads saw a 35% increase in recovered abandoned carts and a 28% higher average order value from returning customers.",
      quote: "The automated follow-up sequences feel genuinely personalized to our customers. We've seen not just more recovered carts but higher average order values from returning customers.",
      person: "Michael Chen",
      title: "E-commerce Director",
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      name: "Pulse Digital Agency",
      industry: "Marketing",
      results: "60% reduction in reporting time",
      challenge: "The agency's team spent entire Fridays creating client reports manually, pulling data from multiple platforms and formatting reports individually.",
      solution: "We implemented an automated data collection and visualization system that pulls from Google Analytics, social platforms, and ad accounts into unified dashboards.",
      outcome: "Pulse reduced reporting time by 60%, eliminated human error in data collection, and provided clients with real-time access to performance metrics.",
      quote: "Our team used to spend Fridays creating reports. Now the data flows automatically, and we can focus on strategy and creative work that actually moves the needle for our clients.",
      person: "Sarah Williams",
      title: "Operations Manager",
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-background to-black/50 relative">
      <div className="absolute inset-0 opacity-20 overflow-hidden mask-image">
        <div className="grid-pattern absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-6">
            Real Businesses, <span className="highlight">Real Results</span>
          </h2>
          <p className="reveal text-muted-foreground text-lg">
            See how our AI automation solutions have transformed operations for companies across industries.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="lg:w-1/3 reveal">
            <div className="sticky top-24 space-y-4">
              {caseStudies.map((study, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-primary/20 border border-primary/30"
                      : "glass hover:bg-white/10"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-12 w-12 rounded-full flex items-center justify-center ${
                        activeIndex === index ? "text-primary bg-primary/10" : "text-muted-foreground bg-white/5"
                      }`}
                    >
                      {study.icon}
                    </div>
                    <div>
                      <h3 className={`font-medium ${activeIndex === index ? "text-foreground" : "text-muted-foreground"}`}>
                        {study.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{study.industry}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 reveal glass p-8 md:p-12 rounded-2xl border border-white/5 relative">
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
              {caseStudies[activeIndex].results}
            </div>
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4">{caseStudies[activeIndex].name}</h3>
              
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                  <h4 className="text-lg font-semibold mb-2 text-primary">Challenge:</h4>
                  <p className="text-muted-foreground">{caseStudies[activeIndex].challenge}</p>
                </div>
                
                <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                  <h4 className="text-lg font-semibold mb-2 text-primary">Solution:</h4>
                  <p className="text-muted-foreground">{caseStudies[activeIndex].solution}</p>
                </div>
                
                <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                  <h4 className="text-lg font-semibold mb-2 text-primary">Result:</h4>
                  <p className="text-muted-foreground">{caseStudies[activeIndex].outcome}</p>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-primary pl-6 mb-8">
              <p className="italic text-lg mb-4">{caseStudies[activeIndex].quote}</p>
              <div>
                <p className="font-semibold">{caseStudies[activeIndex].person}</p>
                <p className="text-sm text-muted-foreground">{caseStudies[activeIndex].title}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Implementation Time", value: "4 weeks" },
                { label: "ROI Timeline", value: "3 months" },
                { label: "Automation Coverage", value: "85% of workflow" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-lg font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
