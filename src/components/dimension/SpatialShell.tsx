'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollBeam } from './Spatial';

/**
 * SpatialShell
 * ────────────
 * The camera move between routes, plus a GSAP-driven "jump" overlay.
 *
 * Framer Motion handles the page's own Z translation (it owns the
 * element's transform via AnimatePresence). GSAP handles the overlay
 * timeline on top — a horizontal scan wipe and a brief chromatic
 * flash — because it sequences several independent elements far more
 * cleanly than nested variants would.
 *
 * The two never animate the same property on the same node, which is
 * the usual way a GSAP + Framer setup goes wrong.
 */
export function SpatialShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const wipe = useRef<HTMLDivElement>(null);
  const flash = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useEffect(() => {
    // Don't fire the jump effect on first paint — only on navigation.
    if (first.current) {
      first.current = false;
      return;
    }
    if (reduce) return;

    const tl = gsap.timeline();

    if (wipe.current) {
      tl.fromTo(
        wipe.current,
        { xPercent: -100, opacity: 1 },
        { xPercent: 100, duration: 0.72, ease: 'power3.inOut' },
        0
      ).set(wipe.current, { opacity: 0 });
    }

    if (flash.current) {
      tl.fromTo(
        flash.current,
        { opacity: 0.5 },
        { opacity: 0, duration: 0.42, ease: 'power2.out' },
        0.06
      );
    }

    return () => { tl.kill(); };
  }, [pathname, reduce]);

  return (
    <>
      <ScrollBeam />

      {/* GSAP jump overlay — a scan bar crossing the viewport */}
      {!reduce && (
        <>
          <div
            ref={wipe}
            aria-hidden="true"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 70,
              pointerEvents: 'none',
              opacity: 0,
              background:
                'linear-gradient(90deg, transparent 0%, rgba(47,79,206,0.10) 38%, rgba(214,237,82,0.20) 50%, rgba(47,79,206,0.10) 62%, transparent 100%)',
            }}
          />
          <div
            ref={flash}
            aria-hidden="true"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 69,
              pointerEvents: 'none',
              opacity: 0,
              background:
                'radial-gradient(ellipse at 50% 45%, rgba(47,79,206,0.22) 0%, transparent 70%)',
            }}
          />
        </>
      )}

      {reduce ? (
        <div className="dim-page">{children}</div>
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            className="dim-page"
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, z: -340, y: 40, rotateX: 7, filter: 'blur(11px)' }}
            animate={{ opacity: 1, z: 0, y: 0, rotateX: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, z: 200, y: -26, rotateX: -4, filter: 'blur(9px)' }}
            transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
            onAnimationStart={() => {
              if (typeof window !== 'undefined') window.scrollTo(0, 0);
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
