"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls past the hero section (typically around viewport height)
      const heroHeight = window.innerHeight * 0.8; // Adjust this value based on your hero section
      
      if (window.scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check on scroll
    window.addEventListener("scroll", toggleVisibility);
    
    // Check initial scroll position
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25
          }}
          className="fixed bottom-8 right-8 z-50"
        >
          {/* Main button - Clean and Modern */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 20px 40px -8px rgba(61, 90, 128, 0.4)"
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            onClick={scrollToTop}
            className="relative w-14 h-14 bg-gradient-to-tr from-primary to-secondary text-white rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm hover:border-white/40 transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
            style={{ pointerEvents: 'auto' }}
          >
            <FiArrowUp className="w-5 h-5 text-white" strokeWidth={2.5} />
          </motion.button>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}
