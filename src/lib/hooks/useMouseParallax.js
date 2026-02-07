'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to track mouse position for gentle parallax effects
 * @returns {{ x: number, y: number }} Normalized mouse position (-0.5 to 0.5)
 */
export function useMouseParallax() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position to -0.5 to 0.5 range for gentle parallax
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);
      
      setMousePos({ x, y });
    };

    // Add mouse move listener with throttling
    let ticking = false;
    const onMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleMouseMove(e);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return mousePos;
}
