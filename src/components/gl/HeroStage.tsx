'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { ProceduralTexture } from '@/components/dimension/ProceduralTexture';

/**
 * HeroStage
 * ─────────
 * Gatekeeper for the WebGL scene. Three.js is ~600KB, so it must not
 * be in the initial bundle and must not load for people who won't
 * benefit. The scene loads only when ALL of these hold:
 *
 *   1. Not prefers-reduced-motion
 *   2. Viewport is wide enough to be a real machine (≥ 900px)
 *   3. The device reports > 4 logical cores (skips weak hardware)
 *   4. The stage has actually scrolled into view
 *   5. WebGL is available at all
 *
 * Until then — and permanently, for anyone who fails a check — the
 * Canvas 2D procedural texture renders instead. That fallback is the
 * same one used across the rest of the site, so failing this check
 * costs a visitor nothing in polish.
 */

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => null,
});

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (c.getContext('webgl') || c.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export function HeroStage({ height = 300 }: { height?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [gl, setGl] = useState(false);

  useEffect(() => {
    if (reduce) return;
    if (typeof window === 'undefined') return;

    const wideEnough = window.matchMedia('(min-width: 900px)').matches;
    const cores = navigator.hardwareConcurrency ?? 4;
    if (!wideEnough || cores <= 4 || !webglAvailable()) return;

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setGl(true);
          io.disconnect();
        }
      },
      { rootMargin: '120px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <div
      ref={ref}
      style={{ position: 'relative', height, borderRadius: 'var(--r-md)', overflow: 'hidden' }}
    >
      {gl ? (
        <div className="hero-gl">
          <HeroScene />
        </div>
      ) : (
        /* Canvas 2D fallback — identical to the rest of the site's art */
        <ProceduralTexture seed="umesh-gajjar-origin" kind="lattice" height={height} />
      )}
    </div>
  );
}
