'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * CodeStream
 * ──────────
 * A vertical rain of glyphs, rendered on Canvas 2D (zero dependency).
 *
 * Deliberately restrained so it reads as professional rather than
 * Matrix-cosplay:
 *   · Low alpha, beam-coloured, with only the lead glyph in pulse
 *   · Sparse columns (every ~18px, not every character cell)
 *   · Slow fall speed, and a long trail fade
 *   · Glyphs biased toward code punctuation, not katakana
 *
 * Used as a background texture inside the nav rail and section
 * dividers — never behind body copy.
 */

const GLYPHS = '01{}[]()<>/\\|=+-*&^%$#@!?;:.,_~`abcdef0123456789';

export function CodeStream({
  className = '',
  style,
  density = 18,
  speed = 0.45,
}: {
  className?: string;
  style?: React.CSSProperties;
  /** Pixels between columns. Higher = sparser. */
  density?: number;
  speed?: number;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let cols: { y: number; speed: number; len: number }[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width || 1;
      h = rect.height || 1;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const n = Math.max(1, Math.floor(w / density));
      cols = Array.from({ length: n }, () => ({
        y: Math.random() * -h,
        speed: (0.4 + Math.random() * 0.9) * speed,
        len: 6 + Math.floor(Math.random() * 12),
      }));
    };

    const glyph = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];

    const draw = () => {
      // Trail fade rather than a hard clear.
      ctx.fillStyle = 'rgba(5, 6, 13, 0.14)';
      ctx.fillRect(0, 0, w, h);
      ctx.font = '11px ui-monospace, monospace';
      ctx.textBaseline = 'top';

      cols.forEach((c, i) => {
        const x = i * density + 2;

        for (let j = 0; j < c.len; j++) {
          const y = c.y - j * 13;
          if (y < -13 || y > h) continue;

          if (j === 0) {
            // Lead glyph carries the accent.
            ctx.fillStyle = 'rgba(214, 237, 82, 0.72)';
          } else {
            const a = (1 - j / c.len) * 0.3;
            ctx.fillStyle = `rgba(79, 108, 232, ${a})`;
          }
          ctx.fillText(glyph(), x, y);
        }

        c.y += c.speed * 13;
        if (c.y - c.len * 13 > h) {
          c.y = Math.random() * -60;
          c.speed = (0.4 + Math.random() * 0.9) * speed;
        }
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);

    if (reduce) {
      // One still frame — the texture reads, nothing moves.
      ctx.fillStyle = 'rgba(5, 6, 13, 1)';
      ctx.fillRect(0, 0, w, h);
      ctx.font = '11px ui-monospace, monospace';
      ctx.textBaseline = 'top';
      cols.forEach((c, i) => {
        for (let j = 0; j < 5; j++) {
          ctx.fillStyle = `rgba(79, 108, 232, ${0.22 - j * 0.04})`;
          ctx.fillText(glyph(), i * density + 2, 20 + j * 13 + (i % 4) * 9);
        }
      });
    } else {
      raf = requestAnimationFrame(draw);
    }

    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf && !reduce) {
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [density, speed, reduce]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={className}
      style={{ display: 'block', width: '100%', height: '100%', ...style }}
    />
  );
}
