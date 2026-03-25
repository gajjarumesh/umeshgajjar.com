'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ROLES = [
  'Full Stack Developer',
  'React & Next.js Expert',
  'Node.js Engineer',
  'Solution Architect',
];

export function TypewriterHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-10 border border-white/25 shadow-lg min-w-[260px] justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="text-white font-semibold"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
