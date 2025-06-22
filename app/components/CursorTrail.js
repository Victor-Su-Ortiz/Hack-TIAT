'use client';

import { useEffect } from 'react';

export default function CursorTrail() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const trail = document.createElement('div');
      trail.style.position = 'fixed';
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
      trail.style.width = '10px';
      trail.style.height = '10px';
      trail.style.backgroundColor = '#00ff00';
      trail.style.pointerEvents = 'none';
      trail.style.borderRadius = '50%';
      trail.style.opacity = '0.5';
      trail.style.transition = 'all 0.5s';
      trail.style.zIndex = '999';
      
      document.body.appendChild(trail);
      
      setTimeout(() => {
        trail.style.transform = 'scale(0) rotate(180deg)';
        trail.style.opacity = '0';
      }, 50);
      
      setTimeout(() => {
        trail.remove();
      }, 550);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
}