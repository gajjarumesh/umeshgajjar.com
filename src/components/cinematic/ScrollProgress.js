'use client';

import { motion } from 'framer-motion';

export default function ScrollProgress({ scrollProgress }) {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/20 backdrop-blur-sm rounded-full h-2 w-48 overflow-hidden">
        <motion.div
          className="h-full bg-indigo-500"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </div>
  );
}
