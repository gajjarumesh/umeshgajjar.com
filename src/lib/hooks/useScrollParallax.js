'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to track scroll position for parallax effects
 * @returns {number} Normalized scroll value (0-1 based on page height)
 */
export function useScrollParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position as a normalized value (0-1)
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const normalized = documentHeight > 0 ? scrolled / documentHeight : 0;
      
      setScrollY(normalized);
    };

    // Initial call
    handleScroll();

    // Add scroll listener with throttling
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return scrollY;
}
