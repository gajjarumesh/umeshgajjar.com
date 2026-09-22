'use client';

import type { ReactNode, CSSProperties } from 'react';

/**
 * HoloPanel
 * ─────────
 * The system's content surface. A translucent, backdrop-blurred plane
 * with a lit top edge and a light sweep that crosses it on hover.
 *
 * Variants:
 *   default  — beam-lit, lifts on Z when hovered
 *   pulse    — accent-lit, for "current" / highlighted state
 *   bracket  — machined corner marks, no lift; for data panels
 *   flat     — no lift, tighter padding; for nested surfaces
 */
export function HoloPanel({
  children,
  variant = 'default',
  className = '',
  style,
}: {
  children: ReactNode;
  variant?: 'default' | 'pulse' | 'bracket' | 'flat';
  className?: string;
  style?: CSSProperties;
}) {
  const variantClass =
    variant === 'pulse'   ? ' holo--pulse'
    : variant === 'bracket' ? ' holo--bracket'
    : variant === 'flat'    ? ' holo--flat'
    : '';

  return (
    <div className={`holo${variantClass} ${className}`} style={style}>
      {variant === 'bracket' && (
        <>
          <span className="holo-bracket-mark holo-bracket-mark--tl" />
          <span className="holo-bracket-mark holo-bracket-mark--tr" />
          <span className="holo-bracket-mark holo-bracket-mark--bl" />
          <span className="holo-bracket-mark holo-bracket-mark--br" />
        </>
      )}
      {children}
    </div>
  );
}
