'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════════
   TERMINAL — hacker chrome primitives

   These frame content; they never render the content itself.
   Bio copy, roles and metrics stay in clean prose type so the page
   is still skimmable in 30 seconds.
   ═══════════════════════════════════════════════════════════════ */

/* ───────────────────────────────────────────────────────────────
   Prompt — a command-line line used as a section label.
   Replaces the old .dim-coord marker.
   ─────────────────────────────────────────────────────────────── */
export function Prompt({
  path = '~',
  command,
  caret = true,
  className = '',
}: {
  path?: string;
  command: string;
  caret?: boolean;
  className?: string;
}) {
  return (
    <span className={`term-prompt ${className}`}>
      <span className="term-prompt__sigil">❯</span>
      <span className="term-prompt__path">{path}</span>
      <span>{command}</span>
      {caret && <span className="term-caret" aria-hidden="true" />}
    </span>
  );
}

/* ───────────────────────────────────────────────────────────────
   Glitch — fires once when scrolled into view, then on hover.
   A permanently glitching heading reads as broken, not designed.
   ─────────────────────────────────────────────────────────────── */
export function Glitch({
  children,
  className = '',
  as: Tag = 'span',
}: {
  children: string;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3';
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('term-glitch--fire');
          // Strip the one-shot class so the hover animation can re-fire.
          window.setTimeout(() => el.classList.remove('term-glitch--fire'), 700);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <Tag
      ref={ref as never}
      className={`term-glitch ${className}`}
      data-text={children}
    >
      {children}
    </Tag>
  );
}

/* ───────────────────────────────────────────────────────────────
   TerminalWindow — a framed panel with a title bar.
   Used for data readouts: personal record, contact channels, stats.
   ─────────────────────────────────────────────────────────────── */
export function TerminalWindow({
  title,
  meta,
  children,
  scan = false,
  className = '',
}: {
  title: string;
  meta?: string;
  children: ReactNode;
  /** Adds a slow scanline sweep across the surface. */
  scan?: boolean;
  className?: string;
}) {
  return (
    <div className={`term-window ${scan ? 'term-scan' : ''} ${className}`}>
      <div className="term-window__bar">
        <span className="term-window__dot term-window__dot--a" />
        <span className="term-window__dot term-window__dot--b" />
        <span className="term-window__dot term-window__dot--c" />
        <span style={{ marginLeft: '0.5rem' }}>{title}</span>
        {meta && <span style={{ marginLeft: 'auto', opacity: 0.7 }}>{meta}</span>}
      </div>
      <div className="term-window__body">{children}</div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────
   StatLine — key · leader dots · value
   ─────────────────────────────────────────────────────────────── */
export function StatLine({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="term-stat">
      <span className="term-stat__key">{label}</span>
      <span className="term-stat__rule" aria-hidden="true" />
      <span className="term-stat__val">{value}</span>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────
   BootSequence — a short boot log that types out on first load,
   then hands over to the page. Runs once per session (sessionStorage),
   so navigating back to the home page doesn't replay it.
   ─────────────────────────────────────────────────────────────── */
const BOOT_LINES = [
  'initialising dimension runtime…',
  'loading profile: umesh_gajjar',
  'mounting 7 years of build history',
  'stack: next · react · node · laravel',
  'status: available for projects',
  'ready.',
];

export function BootSequence() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(true);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (reduce) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem('dim:booted') === '1';
    } catch {
      // Private mode / blocked storage — just skip the sequence.
      seen = true;
    }
    if (seen) return;

    setDone(false);
    let i = 0;
    const tick = window.setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= BOOT_LINES.length) {
        window.clearInterval(tick);
        window.setTimeout(() => {
          setDone(true);
          try { sessionStorage.setItem('dim:booted', '1'); } catch { /* ignore */ }
        }, 420);
      }
    }, 190);

    return () => window.clearInterval(tick);
  }, [reduce]);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        background: 'var(--void-0)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'bootFade 400ms var(--ease-out-expo) forwards',
        animationDelay: `${BOOT_LINES.length * 190 + 300}ms`,
      }}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', lineHeight: 2 }}>
        {BOOT_LINES.slice(0, shown).map((line, i) => (
          <div key={line} style={{ color: i === BOOT_LINES.length - 1 ? 'var(--pulse)' : 'var(--lum-55)' }}>
            <span style={{ color: 'var(--beam-bright)' }}>[{String(i).padStart(2, '0')}]</span>{' '}
            {line}
          </div>
        ))}
        <span className="term-caret" />
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────
   AsciiArt — decorative ASCII motif. Purely ornamental, hidden
   from assistive tech.
   ─────────────────────────────────────────────────────────────── */
export const ASCII_MOTIFS = {
  cube: `    ╱|、
   (˚ˎ 。7
    |、˜〵
    じしˍ,)ノ`,
  grid: `┌─┬─┬─┐
├─┼─┼─┤
├─┼─┼─┤
└─┴─┴─┘`,
  wave: `∿∿∿∿∿∿∿∿∿∿
 ∿∿∿∿∿∿∿∿∿
∿∿∿∿∿∿∿∿∿∿`,
  block: `▓▓▒▒░░  ░░▒▒▓▓
▓▒░      ░▒▓
▓▓▒▒░░  ░░▒▒▓▓`,
} as const;

export function AsciiArt({
  motif,
  pulse = false,
  className = '',
  style,
}: {
  motif: keyof typeof ASCII_MOTIFS;
  pulse?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <pre
      aria-hidden="true"
      className={`term-ascii${pulse ? ' term-ascii--pulse' : ''} ${className}`}
      style={style}
    >
      {ASCII_MOTIFS[motif]}
    </pre>
  );
}
