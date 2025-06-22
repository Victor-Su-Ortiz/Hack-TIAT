'use client';

import { useRef } from 'react';

export default function GlitchText({ children, tag = 'span', className = '' }) {
  const textRef = useRef(null);
  const Tag = tag;
  
  const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  const matrixArray = matrix.split("");

  const handleMouseEnter = () => {
    const element = textRef.current;
    const originalText = element.textContent;
    
    let glitchInterval = setInterval(() => {
      element.textContent = originalText
        .split('')
        .map(char => Math.random() > 0.8 ? matrixArray[Math.floor(Math.random() * matrixArray.length)] : char)
        .join('');
    }, 50);
    
    setTimeout(() => {
      clearInterval(glitchInterval);
      element.textContent = originalText;
    }, 300);
  };

  return (
    <Tag 
      ref={textRef}
      className={className}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </Tag>
  );
}