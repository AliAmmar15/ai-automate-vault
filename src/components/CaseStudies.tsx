
import React, { useEffect, useState } from 'react';

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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      name: "Davidson & Partners Law Firm",
      industry: "Legal",
      results: "20 hours saved monthly",
      description:
        "We automated the entire contract review and signing process for this mid-sized law firm, reducing their document processing time by 75% and eliminating manual errors in client paperwork.",
      quote:
        "Velonus transformed our contract workflow from a time-consuming bottleneck to a streamlined process. Our attorneys now focus on high-value client work instead of administrative tasks.",
      person: "Jennifer Davidson",
      title: "Managing Partner",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      name: "Urban Threads Apparel",
      industry: "E-Commerce",
      results: "35% increase in recovered carts",
      description:
        "Our AI-driven email automation system helped this clothing retailer recover abandoned carts and provide personalized product recommendations, resulting in significant revenue growth.",
      quote:
        "The automated follow-up sequences feel genuinely personalized to our customers. We've seen not just more recovered carts but higher average order values from returning customers.",
      person: "Michael Chen",
      title: "E-commerce Director",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      ),
      name: "Pulse Digital Agency",
      industry: "Marketing",
      results: "60% reduction in reporting time",
      description:
        "We implemented an automated data collection and reporting system that pulls information from multiple platforms into comprehensive client dashboards, saving their team hours of manual work each week.",
      quote:
        "Our team used to spend Fridays creating reports. Now the data flows automatically, and we can focus on strategy and creative work that actually moves the needle for our clients.",
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
              <p className="text-muted-foreground">{caseStudies[activeIndex].description}</p>
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
