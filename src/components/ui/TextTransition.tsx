
import React, { useState, useEffect } from 'react';

interface TextTransitionProps {
  texts: string[];
  delay?: number;
  className?: string;
}

const TextTransition: React.FC<TextTransitionProps> = ({ texts, delay = 3000, className = "" }) => {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFadeIn(true);
      }, 500); // Half a second for fade out
    }, delay);

    return () => clearInterval(interval);
  }, [texts, delay]);

  return (
    <span className={`inline-block transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'} ${className}`}>
      {texts[index]}
    </span>
  );
};

export default TextTransition;
