'use client';

import { useEffect, useRef } from 'react';

/**
 * ProceduralTexture
 * ─────────────────
 * Generates a project's visual identity at runtime from a seed string.
 * No image assets — every project panel gets a distinct, deterministic
 * artwork derived from its own title.
 *
 * Three generators, chosen per project:
 *   lattice — a connected node graph (for platform / SaaS work)
 *   flow    — layered sine ribbons (for data / integration work)
 *   strata  — stacked isolines over a noise field (for CMS / content work)
 *
 * All three animate on the time axis: nodes breathe, ribbons phase-shift,
 * strata drift. Under prefers-reduced-motion a single frame is drawn.
 */

export type TextureKind = 'lattice' | 'flow' | 'strata';

const BEAM = '47,79,206';
const BEAM_BRIGHT = '79,108,232';
const PULSE = '214,237,82';

/** Deterministic 32-bit hash → seeded PRNG, so a given title always
 *  produces the same artwork across reloads and between server/client. */
function makeRandom(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13; h >>>= 0;
    h ^= h >> 17;
    h ^= h << 5;  h >>>= 0;
    return h / 4294967296;
  };
}

export function ProceduralTexture({
  seed,
  kind = 'lattice',
  height = 128,
  className = '',
}: {
  seed: string;
  kind?: TextureKind;
  height?: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const rand = makeRandom(seed);
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let t = 0;

    // ── Pre-generate the geometry once, so animation only moves it.
    const nodes = Array.from({ length: 16 }, () => ({
      x: rand(),
      y: rand(),
      r: 1 + rand() * 2,
      ph: rand() * Math.PI * 2,
      accent: rand() < 0.22,
    }));

    const ribbons = Array.from({ length: 5 }, (_, i) => ({
      amp: 0.08 + rand() * 0.16,
      freq: 1.4 + rand() * 2.6,
      off: rand() * Math.PI * 2,
      y: 0.2 + (i / 5) * 0.62,
      accent: i === Math.floor(rand() * 5),
    }));

    const strataSeeds = Array.from({ length: 7 }, (_, i) => ({
      y: 0.14 + (i / 7) * 0.78,
      amp: 0.03 + rand() * 0.07,
      freq: 2 + rand() * 4,
      off: rand() * Math.PI * 2,
      accent: rand() < 0.3,
    }));

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width || 300;
      h = rect.height || height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const backdrop = () => {
      // Depth gradient — the texture sits in the same void as everything else.
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, 'rgba(17,21,39,0.95)');
      g.addColorStop(1, 'rgba(5,6,13,0.98)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // A drifting light source inside the panel.
      const lx = w * (0.5 + 0.34 * Math.sin(t * 0.0005));
      const ly = h * (0.42 + 0.28 * Math.cos(t * 0.0007));
      const lg = ctx.createRadialGradient(lx, ly, 0, lx, ly, w * 0.55);
      lg.addColorStop(0, `rgba(${BEAM_BRIGHT},0.20)`);
      lg.addColorStop(1, `rgba(${BEAM},0)`);
      ctx.fillStyle = lg;
      ctx.fillRect(0, 0, w, h);
    };

    const drawLattice = () => {
      const pts = nodes.map((n) => ({
        x: n.x * w + Math.sin(t * 0.0006 + n.ph) * 7,
        y: n.y * h + Math.cos(t * 0.0008 + n.ph) * 7,
        r: n.r,
        accent: n.accent,
      }));

      ctx.lineWidth = 0.7;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > w * 0.3) continue;
          ctx.strokeStyle = `rgba(${BEAM_BRIGHT},${(1 - d / (w * 0.3)) * 0.42})`;
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }

      for (const p of pts) {
        const c = p.accent ? PULSE : BEAM_BRIGHT;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        g.addColorStop(0, `rgba(${c},0.55)`);
        g.addColorStop(1, `rgba(${c},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${c},0.95)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawFlow = () => {
      for (const rb of ribbons) {
        const c = rb.accent ? PULSE : BEAM_BRIGHT;
        ctx.beginPath();
        for (let px = 0; px <= w; px += 3) {
          const n = px / w;
          const y =
            rb.y * h +
            Math.sin(n * rb.freq * Math.PI * 2 + rb.off + t * 0.0011) * rb.amp * h;
          if (px === 0) ctx.moveTo(px, y);
          else ctx.lineTo(px, y);
        }
        ctx.strokeStyle = `rgba(${c},${rb.accent ? 0.72 : 0.34})`;
        ctx.lineWidth = rb.accent ? 1.6 : 1;
        ctx.stroke();

        // Glow pass for the accent ribbon.
        if (rb.accent) {
          ctx.strokeStyle = `rgba(${c},0.16)`;
          ctx.lineWidth = 5;
          ctx.stroke();
        }
      }
    };

    const drawStrata = () => {
      for (const s of strataSeeds) {
        const c = s.accent ? PULSE : BEAM;
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let px = 0; px <= w; px += 4) {
          const n = px / w;
          const y =
            s.y * h +
            Math.sin(n * s.freq * Math.PI * 2 + s.off + t * 0.0006) * s.amp * h +
            Math.sin(n * s.freq * 2.7 * Math.PI + t * 0.0004) * s.amp * h * 0.4;
          ctx.lineTo(px, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();

        ctx.fillStyle = `rgba(${c},0.07)`;
        ctx.fill();

        ctx.strokeStyle = `rgba(${c},${s.accent ? 0.6 : 0.26})`;
        ctx.lineWidth = s.accent ? 1.3 : 0.8;
        ctx.stroke();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      backdrop();
      if (kind === 'lattice') drawLattice();
      else if (kind === 'flow') drawFlow();
      else drawStrata();

      // Shared scanline overlay ties all three generators together.
      ctx.fillStyle = 'rgba(47,79,206,0.05)';
      for (let y = 0; y < h; y += 3) ctx.fillRect(0, y, w, 1);
    };

    const loop = () => {
      t += 16;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf && !reduced) {
        raf = requestAnimationFrame(loop);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    if (reduced) {
      draw();
    } else {
      document.addEventListener('visibilitychange', onVisibility);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [seed, kind, height]);

  return (
    <div className={`dim-texture ${className}`} style={{ height }} aria-hidden="true">
      <canvas ref={ref} />
    </div>
  );
}
