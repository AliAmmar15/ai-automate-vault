
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-black/80 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tighter text-gradient">Velonus</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming businesses through AI-powered automation. We help companies eliminate manual tasks, streamline operations, and boost efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/velonus" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-muted-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="https://twitter.com/velonus" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-muted-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="mailto:info@velonus.com" className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Lead Generation</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Customer Support</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Payment Automation</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Document Automation</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Integration Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4 text-center">Technology Partners</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="OpenAI" className="h-full w-auto" />
            </div>
            <div className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity">
              <img src="https://cdn.zapier.com/zapier/images/logos/zapier-logo.svg" alt="Zapier" className="h-full w-auto" />
            </div>
            <div className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-full w-auto" />
            </div>
            <div className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/DocuSign_logo.svg" alt="DocuSign" className="h-full w-auto" />
            </div>
            <div className="h-9 w-auto opacity-60 hover:opacity-100 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Microsoft Azure" className="h-full w-auto" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Velonus. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
