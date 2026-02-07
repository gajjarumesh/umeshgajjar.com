'use client';

import { motion } from 'framer-motion';

export default function CinematicText({ scrollProgress, section, children }) {
  // Calculate opacity based on scroll position and section
  const sectionStart = section * 0.2;
  const sectionEnd = (section + 1) * 0.2;
  const sectionMid = (sectionStart + sectionEnd) / 2;
  
  // Show text when in the section range with fade in/out
  let opacity = 0;
  if (scrollProgress >= sectionStart && scrollProgress <= sectionEnd) {
    // Distance from section midpoint
    const distanceFromMid = Math.abs(scrollProgress - sectionMid);
    const fadeRange = 0.08; // Fade over 8% of scroll
    opacity = Math.max(0, 1 - (distanceFromMid / fadeRange));
  }
  
  return (
    <motion.div
      className="text-center text-white text-4xl md:text-6xl font-bold pointer-events-none px-4"
      style={{ 
        opacity,
        textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.5)',
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '2rem',
        borderRadius: '1rem',
        backdropFilter: 'blur(10px)'
      }}
    >
      {children}
    </motion.div>
  );
}
