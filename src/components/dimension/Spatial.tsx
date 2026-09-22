'use client';

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion';
import { useRef, type ReactNode, type CSSProperties } from 'react';

/* ═══════════════════════════════════════════════════════════════
   Motion primitives for the Dimension system.

   Every component here degrades to a plain, static, fully legible
   element under prefers-reduced-motion — the space survives, the
   motion does not.
   ═══════════════════════════════════════════════════════════════ */

/** Shared spring — used for anything that tracks scroll, so all
 *  parallax layers share one physical feel. */
const SPRING = { stiffness: 90, damping: 26, mass: 0.4 } as const;

/* ───────────────────────────────────────────────────────────────
   SpatialSection
   A section that arrives from depth as it enters the viewport:
   translates forward on Z, lifts on Y, and resolves from a slight
   blur — like a panel settling into focus in a 3D space.
   ─────────────────────────────────────────────────────────────── */

export function SpatialSection({
  children,
  delay = 0,
  depth = 120,
  className = '',
  style,
  as = 'section',
}: {
  children: ReactNode;
  delay?: number;
  /** How far back on Z the section starts, in px. */
  depth?: number;
  className?: string;
  style?: CSSProperties;
  as?: 'section' | 'div' | 'article' | 'header';
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.section;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      style={{ transformStyle: 'preserve-3d', ...style }}
      initial={{ opacity: 0, y: 46, z: -depth, rotateX: 5, filter: 'blur(7px)' }}
      whileInView={{ opacity: 1, y: 0, z: 0, rotateX: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-12% 0px -8% 0px' }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

/* ───────────────────────────────────────────────────────────────
   Stagger / StaggerItem
   A container whose children arrive in sequence from depth.
   ─────────────────────────────────────────────────────────────── */

export function Stagger({
  children,
  className = '',
  gap = 0.08,
  style,
}: {
  children: ReactNode;
  className?: string;
  /** Seconds between each child's arrival. */
  gap?: number;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={{ transformStyle: 'preserve-3d', ...style }}
      initial="rest"
      whileInView="live"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={{
        rest: {},
        live: { transition: { staggerChildren: gap, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={{ transformStyle: 'preserve-3d', ...style }}
      variants={{
        rest: { opacity: 0, y: 30, z: -70, filter: 'blur(5px)' },
        live: {
          opacity: 1,
          y: 0,
          z: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────────────────
   ParallaxLayer
   Moves content against the scroll at a depth-derived rate.
   `depth` is a multiplier: 0 = locked to page, 1 = strong parallax.
   Negative values move the layer with the scroll instead.
   ─────────────────────────────────────────────────────────────── */

export function ParallaxLayer({
  children,
  depth = 0.3,
  className = '',
  style,
}: {
  children: ReactNode;
  depth?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const raw = useTransform(scrollYProgress, [0, 1], [depth * 90, depth * -90]);
  const y = useSpring(raw, SPRING);

  if (reduce) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className} style={style}>
      <motion.div style={{ y, willChange: 'transform' }}>{children}</motion.div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────
   TiltPanel
   Pointer-reactive 3D tilt. The panel rotates toward the cursor and
   a specular highlight tracks the pointer across its surface.
   ─────────────────────────────────────────────────────────────── */

export function TiltPanel({
  children,
  className = '',
  max = 7,
  style,
}: {
  children: ReactNode;
  className?: string;
  /** Maximum rotation in degrees on each axis. */
  max?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;  // 0..1
    const ny = (e.clientY - rect.top) / rect.height;

    el.style.transform =
      `perspective(900px) rotateY(${(nx - 0.5) * max * 2}deg) ` +
      `rotateX(${(0.5 - ny) * max * 2}deg) translateZ(18px)`;

    // Feed the pointer position to CSS so a highlight can track it.
    el.style.setProperty('--mx', `${nx * 100}%`);
    el.style.setProperty('--my', `${ny * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      'perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
  };

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────
   ScrollBeam
   A fixed progress beam at the top edge — the site's clock. Shows
   position along the current page's time axis.
   ─────────────────────────────────────────────────────────────── */

export function ScrollBeam() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: 80,
        background:
          'linear-gradient(90deg, var(--beam) 0%, var(--beam-bright) 45%, var(--pulse) 100%)',
        boxShadow: '0 0 14px rgba(214,237,82,0.55)',
      }}
    />
  );
}

/* ───────────────────────────────────────────────────────────────
   Reveal
   Simple opacity/lift for text runs that shouldn't tilt or scale.
   ─────────────────────────────────────────────────────────────── */

export function Reveal({
  children,
  delay = 0,
  className = '',
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export type { MotionValue };
