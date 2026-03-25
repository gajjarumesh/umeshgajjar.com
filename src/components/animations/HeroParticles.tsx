'use client';
import { useMemo } from 'react';

// Fixed seed positions to avoid hydration mismatch
const SEED_POSITIONS = [
  { left: 8, top: 12 },
  { left: 23, top: 67 },
  { left: 45, top: 23 },
  { left: 67, top: 88 },
  { left: 12, top: 45 },
  { left: 89, top: 34 },
  { left: 34, top: 78 },
  { left: 56, top: 10 },
  { left: 78, top: 56 },
  { left: 90, top: 75 },
  { left: 5, top: 90 },
  { left: 40, top: 50 },
  { left: 60, top: 30 },
  { left: 75, top: 15 },
  { left: 20, top: 60 },
  { left: 50, top: 85 },
  { left: 85, top: 50 },
  { left: 30, top: 20 },
  { left: 70, top: 70 },
  { left: 15, top: 35 },
];

const DELAYS = [0, 0.5, 1, 1.5, 2, 2.5, 0.3, 0.8, 1.2, 1.8, 2.2, 0.1, 0.7, 1.3, 1.9, 2.3, 0.4, 0.9, 1.6, 2.1];
const DURATIONS = [4, 5, 6, 4.5, 5.5, 6.5, 4.2, 5.2, 6.2, 4.8, 5.8, 4.3, 5.3, 6.3, 4.6, 5.6, 4.1, 5.1, 6.1, 4.9];

export function HeroParticles() {
  const particles = useMemo(() =>
    SEED_POSITIONS.map((pos, i) => ({
      ...pos,
      delay: DELAYS[i],
      duration: DURATIONS[i],
    })),
  []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/15 rounded-full animate-float"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
