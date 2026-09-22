'use client';

import { useEffect, useRef } from 'react';

/**
 * DimensionField
 * ──────────────
 * The fixed procedural backdrop for the whole site. Everything here is
 * generated at runtime — no images.
 *
 * Three simultaneous systems, all driven by a single time value `t`:
 *   1. Depth motes   — particles distributed across 3 z-planes. Near planes
 *                      move faster and render larger/brighter (parallax).
 *   2. Light trails  — occasional streaks that cross the field and fade,
 *                      giving the space a sense of scale and event.
 *   3. Link web      — near-plane motes connect with hairlines when close,
 *                      reading as a structural lattice.
 *
 * Scroll shifts the whole field along Y by a per-plane factor, so the
 * background parallaxes against page content. Pointer position nudges the
 * field on X/Y for a subtle head-tracking effect.
 *
 * Performance: DPR capped at 2, particle count scales with viewport area,
 * the loop pauses when the tab is hidden, and the whole thing renders a
 * static single frame under prefers-reduced-motion.
 */

const BEAM = { r: 47, g: 79, b: 206 };
const PULSE = { r: 214, g: 237, b: 82 };

type Mote = {
  x: number;       // 0..1 normalised
  y: number;       // 0..1 normalised
  plane: number;   // 0 = far, 1 = mid, 2 = near
  r: number;       // base radius in px
  vx: number;
  vy: number;
  phase: number;   // desync the twinkle
  pulse: boolean;  // accent-coloured?
};

type Trail = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;    // 1 → 0
  decay: number;
  len: number;
};

const PLANE_PARALLAX = [0.06, 0.16, 0.34]; // scroll response per plane
const PLANE_ALPHA = [0.26, 0.45, 0.78];
const PLANE_SCALE = [0.6, 1.0, 1.5];

export function DimensionField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let motes: Mote[] = [];
    let trails: Trail[] = [];
    let raf = 0;
    let t = 0;

    // Smoothed inputs — we lerp toward the target so nothing snaps.
    let scrollY = 0;
    let scrollTarget = 0;
    let pointerX = 0.5;
    let pointerY = 0.5;
    let pointerTX = 0.5;
    let pointerTY = 0.5;

    const seedMotes = () => {
      // ~1 mote per 9000 css px², clamped so phones stay light and
      // ultrawides don't get sparse.
      const count = Math.round(
        Math.min(260, Math.max(70, (w * h) / 9000))
      );
      motes = Array.from({ length: count }, () => {
        const plane = Math.random() < 0.45 ? 0 : Math.random() < 0.7 ? 1 : 2;
        return {
          x: Math.random(),
          y: Math.random(),
          plane,
          r: 0.5 + Math.random() * 1.4,
          vx: (Math.random() - 0.5) * 0.000055,
          vy: (Math.random() - 0.5) * 0.000055 - 0.00002, // faint upward drift
          phase: Math.random() * Math.PI * 2,
          pulse: Math.random() < 0.12,
        };
      });
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedMotes();
    };

    const spawnTrail = () => {
      // Trails enter from a random edge and cross the field.
      const fromLeft = Math.random() < 0.5;
      const angle = (fromLeft ? 0.18 : Math.PI - 0.18) + (Math.random() - 0.5) * 0.5;
      const speed = 2.4 + Math.random() * 3.6;
      trails.push({
        x: fromLeft ? -60 : w + 60,
        y: Math.random() * h * 0.85,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed * 0.55,
        life: 1,
        decay: 0.004 + Math.random() * 0.005,
        len: 70 + Math.random() * 150,
      });
    };

    const rgba = (c: typeof BEAM, a: number) =>
      `rgba(${c.r},${c.g},${c.b},${a})`;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Ease inputs toward their targets.
      scrollY += (scrollTarget - scrollY) * 0.075;
      pointerX += (pointerTX - pointerX) * 0.045;
      pointerY += (pointerTY - pointerY) * 0.045;

      const px = (pointerX - 0.5) * 2; // -1..1
      const py = (pointerY - 0.5) * 2;

      // Resolve every mote to screen space once, so the link web can
      // reuse the positions without recomputing.
      const pts: { x: number; y: number; r: number; a: number; plane: number; pulse: boolean }[] = [];

      for (const m of motes) {
        const par = PLANE_PARALLAX[m.plane];

        // Drift on the time axis.
        let nx = m.x + m.vx * t;
        let ny = m.y + m.vy * t;

        // Wrap in normalised space so motes never run out.
        nx = ((nx % 1) + 1) % 1;
        ny = ((ny % 1) + 1) % 1;

        // Project: parallax against scroll + pointer lean.
        const sx = nx * w + px * par * 46;
        const sy = ny * h - scrollY * par + py * par * 30;

        // Wrap vertically in screen space after the scroll offset.
        const wy = ((sy % h) + h) % h;

        // Twinkle — each mote breathes on its own phase.
        const tw = 0.62 + 0.38 * Math.sin(t * 0.0013 + m.phase);

        pts.push({
          x: sx,
          y: wy,
          r: m.r * PLANE_SCALE[m.plane],
          a: PLANE_ALPHA[m.plane] * tw,
          plane: m.plane,
          pulse: m.pulse,
        });
      }

      // ── Link web: near-plane motes only, so the lattice stays readable.
      ctx.lineWidth = 0.5;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        if (a.plane !== 2) continue;
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          if (b.plane !== 2) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > 26000) continue;
          const alpha = (1 - d2 / 26000) * 0.16;
          ctx.strokeStyle = rgba(BEAM, alpha);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // ── Motes, far planes first so near ones sit on top.
      for (let plane = 0; plane <= 2; plane++) {
        for (const p of pts) {
          if (p.plane !== plane) continue;
          const c = p.pulse ? PULSE : BEAM;

          // Near-plane motes get a soft halo — depth cue via bloom.
          if (plane === 2) {
            const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
            g.addColorStop(0, rgba(c, p.a * 0.5));
            g.addColorStop(1, rgba(c, 0));
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.fillStyle = rgba(c, Math.min(1, p.a + (p.pulse ? 0.2 : 0)));
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ── Light trails.
      for (let i = trails.length - 1; i >= 0; i--) {
        const tr = trails[i];
        tr.x += tr.vx;
        tr.y += tr.vy;
        tr.life -= tr.decay;

        if (tr.life <= 0 || tr.x < -240 || tr.x > w + 240) {
          trails.splice(i, 1);
          continue;
        }

        const tailX = tr.x - tr.vx * (tr.len / 6);
        const tailY = tr.y - tr.vy * (tr.len / 6);
        const g = ctx.createLinearGradient(tailX, tailY, tr.x, tr.y);
        g.addColorStop(0, rgba(PULSE, 0));
        g.addColorStop(0.75, rgba(PULSE, tr.life * 0.30));
        g.addColorStop(1, rgba(PULSE, tr.life * 0.75));

        ctx.strokeStyle = g;
        ctx.lineWidth = 1.4;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(tr.x, tr.y);
        ctx.stroke();

        // Head glow.
        const hg = ctx.createRadialGradient(tr.x, tr.y, 0, tr.x, tr.y, 9);
        hg.addColorStop(0, rgba(PULSE, tr.life * 0.55));
        hg.addColorStop(1, rgba(PULSE, 0));
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(tr.x, tr.y, 9, 0, Math.PI * 2);
        ctx.fill();
      }

      // Roughly one trail every ~4s.
      if (trails.length < 3 && Math.random() < 0.004) spawnTrail();
    };

    const loop = () => {
      t += 16;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onScroll = () => {
      scrollTarget = window.scrollY;
    };

    const onPointer = (e: PointerEvent) => {
      pointerTX = e.clientX / window.innerWidth;
      pointerTY = e.clientY / window.innerHeight;
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
      // One static frame: the space still reads as dimensional, nothing moves.
      draw();
    } else {
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('pointermove', onPointer, { passive: true });
      document.addEventListener('visibilitychange', onVisibility);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointer);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <div className="dim-field" aria-hidden="true">
      <canvas ref={canvasRef} className="dim-field__canvas" />
      <div className="dim-field__grid" />
      <div className="dim-field__lume dim-field__lume--a" />
      <div className="dim-field__lume dim-field__lume--b" />
      <div className="dim-field__lume dim-field__lume--c" />
      <div className="dim-field__scan" />
      <div className="dim-field__vignette" />
    </div>
  );
}
