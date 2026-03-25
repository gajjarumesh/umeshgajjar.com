'use client';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

function parseValue(str: string): { num: number; suffix: string } {
  const match = str.match(/^([\d,]+)(\D*)$/);
  if (!match) return { num: 0, suffix: str };
  return { num: parseInt(match[1].replace(/,/g, ''), 10), suffix: match[2] };
}

export function CountUp({
  value,
  className = '',
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { num, suffix } = parseValue(value);
  const [current, setCurrent] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    const duration = 1500;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, num]);

  return (
    <span ref={ref} className={className}>
      {current}
      {suffix}
    </span>
  );
}
