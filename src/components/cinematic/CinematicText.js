'use client';

import { motion } from 'framer-motion';

export default function CinematicText({ scrollProgress, section, children }) {
  // Calculate opacity based on scroll position and section
  const sectionStart = section * 0.2;
  const sectionEnd = (section + 1) * 0.2;
  
  const opacity = scrollProgress >= sectionStart && scrollProgress <= sectionEnd
    ? 1 - Math.abs((scrollProgress - (sectionStart + sectionEnd) / 2) / 0.1)
    : 0;
  
  return (
    <motion.div
      style={{ opacity }}
      className="text-center text-white text-4xl md:text-6xl font-bold pointer-events-none"
    >
      {children}
    </motion.div>
  );
}
