
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Message = {
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    text: "Hi there! 👋 I'm your AI assistant. How can I help you with your business automation needs today?",
    isUser: false,
    timestamp: new Date(),
  },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      text: input,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I'd be happy to help you automate your business workflows!",
        "Great question! Our automation solutions can help reduce manual tasks by up to 80%.",
        "We offer custom integrations with over 100+ popular business tools and platforms.",
        "Typically, we can implement a basic automation solution within 2-4 weeks.",
        "The pricing depends on your specific needs. Would you like to discuss this with our sales team?",
        "I can connect you with one of our automation specialists to discuss your requirements in detail."
      ];
      
      const aiMessage: Message = {
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
      
      toast({
        title: "New message",
        description: "You have a new response in the chat"
      });
    }, 1500);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className={`fixed z-50 bottom-6 right-6 rounded-full p-4 shadow-lg transition-all duration-300 ${
          isOpen ? "bg-primary/90 rotate-90" : "bg-primary hover:bg-primary/90"
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="h-6 w-6 text-primary-foreground" />
        )}
      </button>

      {/* Chat window */}
      <div
        className={`fixed z-40 bottom-24 right-6 w-80 sm:w-96 max-h-[600px] rounded-xl overflow-hidden shadow-xl transition-all duration-300 transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-[500px] bg-black/80 backdrop-blur-lg border border-white/10">
          {/* Chat header */}
          <div className="p-4 bg-primary text-primary-foreground">
            <h3 className="font-semibold">AI Assistant</h3>
            <p className="text-xs opacity-80">Ask about our automation services</p>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-xl ${
                    message.isUser
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-white/10 border border-white/10 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block text-right">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/10 px-4 py-3 rounded-xl rounded-bl-none max-w-[80%]">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 bg-white/60 rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-white/60 rounded-full animate-pulse delay-100"></div>
                    <div className="h-2 w-2 bg-white/60 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-black/60">
            <div className="flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-white/10 border border-white/10 text-foreground rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button 
                type="submit" 
                className="rounded-l-none"
                disabled={isTyping || !input.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
