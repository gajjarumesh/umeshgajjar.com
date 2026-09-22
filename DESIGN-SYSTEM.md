# DIMENSION — 4D Design System

A spatial, terminal-inflected design language for **umeshgajjar.com**.

Built on three layers:

| Layer | Tech | Cost |
|---|---|---|
| **Field** — procedural backdrop, project art | Canvas 2D | 0 KB |
| **Terminal** — prompts, glitch, code streams, ASCII | CSS + Canvas 2D | 0 KB |
| **Core** — the one real 3D scene | React Three Fiber + Three.js | ~600 KB, lazy |

The Core is deliberately *one* scene, dynamically imported and gated behind five hardware checks. Everything else is dependency-free. That is why the home page is **151 KB** first load despite shipping Three.js — see §8.

Four axes govern every decision:

| Axis | Name | What it controls |
|---|---|---|
| X / Y | Layout | Grid, rhythm, alignment |
| Z | Depth | Which plane an element occupies, what blurs, what lifts |
| T | Time | How elements arrive, evolve, and respond |

The rule that keeps it coherent: **an element's behaviour is derived from its depth.** Far things move slowly, render dim and small, and never accept input. Near things move fast, render bright and large, and are interactive. Nothing is decorated arbitrarily.

---

## 1. Foundations

### 1.1 Colour

Two hues carry the entire system. Everything else is the void or light on it.

| Token | Value | Role |
|---|---|---|
| `--beam` | `#2f4fce` | Primary. Structure, focus, trust, links, key surfaces. |
| `--beam-bright` | `#4f6ce8` | Beam at higher luminance — hover, body links. |
| `--beam-deep` | `#1d3494` | Beam in shadow — gradient ends, pressed states. |
| `--pulse` | `#d6ed52` | Glow. Energy, the present moment, the single most important thing on screen. |
| `--pulse-soft` | `#e8f58f` | Pulse at higher luminance — borders on pulse buttons. |

**Alpha ramps.** Never hand-write `rgba()` for these two hues; use the ramp so opacity stays consistent across components.

```
--beam-04  --beam-08  --beam-14  --beam-24  --beam-40  --beam-60
--pulse-06 --pulse-12 --pulse-22 --pulse-40 --pulse-70
```

**The void** — the background is depth-graded, not one flat colour. Deeper index = nearer the viewer.

| Token | Value | Use |
|---|---|---|
| `--void-0` | `#05060d` | Page ground, behind everything |
| `--void-1` | `#080a14` | Field plane |
| `--void-2` | `#0b0e1b` | Panel at rest |
| `--void-3` | `#111527` | Panel raised |
| `--void-4` | `#161b33` | Panel hovered, input filled |

**Light on void** — text is expressed as luminance, not colour.

All ratios below are measured, and quoted against the **worst case** surface the token appears on (`--void-4`, a hovered panel) rather than the page ground — so they hold everywhere.

| Token | Use | Worst-case contrast | Verdict |
|---|---|---|---|
| `--lum-100` | Headings | 18.4:1 | AA / AAA |
| `--lum-80` | Body copy | 9.8:1 | AA / AAA |
| `--lum-55` | Secondary copy | 5.0:1 | AA |
| `--lum-38` | Labels, metadata | 3.4:1 | **large / mono ≥11px only** |
| `--lum-16` | Hairlines | — | non-text |
| `--lum-08` | Faint dividers | — | non-text |

| Accent | On `--void-0` | Verdict |
|---|---|---|
| `--pulse` | 15.5:1 | safe anywhere, incl. body text |
| `--beam-bright` | 4.5:1 | large text, links, borders |
| `--beam` | **3.0:1** | **never text** — fills, borders, glows only |
| `--void-0` on a `--pulse` button | 15.5:1 | AA |
| `#fff` on a `--beam` button | 6.7:1 | AA |

> **Accessibility rules.**
> 1. `--lum-38` is below 4.5:1 by design. It is reserved for uppercase mono labels at ≥11px, where it clears the 3:1 large-text threshold. If a label must be read to complete a task, step up to `--lum-55`.
> 2. `--beam` must **never** be a text colour — it is 3.0:1 even on the darkest ground. This is why links resolve to `--beam-bright` and emphasis resolves to `--pulse`.
> 3. `--lum-55` and `--lum-38` were tuned to these alphas specifically to clear AA on `--void-4`. Lowering either re-breaks contrast on hovered panels — the surface most people read on.

### 1.2 Depth scale

Five discrete planes. Elements snap to a plane; they never take an arbitrary Z.

| Token | Z | Scale | Parallax | Interactive? |
|---|---|---|---|---|
| `--z-far` | `-600px` | 1.52 | 0.06 | no |
| `--z-mid` | `-280px` | 1.24 | 0.16 | no |
| `--z-near` | `-100px` | 1.08 | 0.34 | no |
| `--z-surface` | `0` | 1.00 | — | **yes** |
| `--z-fore` | `+80px` | 0.945 | — | **yes** |

Perspective is set once on the viewport: `--perspective: 1400px` for the page camera, `--perspective-tight: 900px` for a single tilting panel.

### 1.3 Time

| Token | Value | Use |
|---|---|---|
| `--t-instant` | 120ms | Colour-only changes |
| `--t-quick` | 240ms | Hover, focus, chips |
| `--t-base` | 400ms | Panel lift, glyph rotation |
| `--t-slow` | 700ms | Light sweeps, section entrance |
| `--t-drift` | 1200ms | Long ambient moves |
| `--t-orbit` | 24s | Background light-source loop |

| Easing | Curve | Use |
|---|---|---|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default. Everything entering. |
| `--ease-spatial` | `cubic-bezier(0.34, 1.16, 0.44, 1)` | Slight overshoot — things moving toward the viewer. |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Ambient loops that must not feel "arrived". |

### 1.4 Type

Poppins for voice, a mono stack for data. The mono is doing real work: it marks anything machine-like — coordinates, durations, counts, tech names — so the reader can tell prose from data at a glance.

| Class | Size | Use |
|---|---|---|
| `.dim-h1` | `clamp(2.25rem, 5.5vw, 3.5rem)` | One per page |
| `.dim-h2` | `clamp(1.5rem, 3vw, 2rem)` | Section head |
| `.dim-h3` | `1.0625rem` | Panel head |
| `.dim-lede` | `1.0625rem` / 1.75, max 58ch | Opening paragraph |
| `.dim-body` | `0.9rem` / 1.78 | Body copy |
| `.dim-coord` | `0.6875rem` mono, 0.2em tracking | The label above every section |

Two text effects: `.dim-glow` (pulse with a soft halo) for a single emphasised word, and `.dim-beam-text` (animated beam→pulse gradient) for one hero word per page. **Never more than one `.dim-beam-text` in a viewport** — competing gradients cancel the effect.

### 1.5 Geometry

Radii `--r-sm: 8px` · `--r-md: 14px` · `--r-lg: 20px` · `--r-xl: 28px`.
Nav rail is a fixed `--rail-w: 272px`, collapsing to an overlay drawer below 1024px.

---

## 2. Components

### `.dim-field` — the procedural backdrop
Fixed, full-viewport, `pointer-events: none`, sits at `z-index: 0` behind all content. Six stacked layers:

1. `<canvas>` — depth motes on three planes, a link web, and light trails (see §3)
2. `.dim-field__grid` — a drifting lattice, radially masked so it fades at the edges
3. Three `.dim-field__lume` volumetric light sources on independent `--t-orbit` loops
4. `.dim-field__scan` — holographic interference lines, `mix-blend-mode: screen`
5. `.dim-field__vignette` — deepens the void at the edges, pulls focus centre

### `.holo` — the content surface
A translucent, backdrop-blurred plane. Lit top edge via `::before`; a light sweep crosses it on hover via `::after`. On hover it lifts to `translateZ(26px)`.

| Variant | Use |
|---|---|
| *(default)* | Standard content. Lifts on hover. |
| `.holo--pulse` | The "now" state — current role, primary CTA, availability. |
| `.holo--bracket` | Machined corner marks, no lift. Data readouts. Requires four `.holo-bracket-mark` spans. |
| `.holo--flat` | No lift, tighter padding. Nested surfaces, stat tiles. |

Use `HoloPanel` (React) rather than the raw class — it emits the bracket marks for you.

### `.dim-btn` — controls
A light streak crosses every button on hover. Three variants:

- `.dim-btn--pulse` — **the** primary action. Maximum one per view.
- `.dim-btn--primary` — beam-filled. Secondary weight, used for utility (Download CV).
- `.dim-btn--ghost` — translucent, beam-bordered. Tertiary.

### `.dim-chip` — tokenised tags
Mono, small, beam-tinted. Lifts and shifts to pulse on hover. Purely decorative hover — chips are not interactive, and the cursor stays `default` to say so.

### `.dim-glyph` — icon vessel
48px rounded square. On hover (its own, **or its parent panel's**) it rotates −4°, lifts on Z, shifts to pulse, and a conic-gradient ring orbits its border. The parent-triggered variant is what makes a card feel like one object rather than a box of parts.

### `.dim-timeline` / `.dim-tnode` — the time axis, literal
A vertical beam whose gradient runs pulse → beam → transparent from present to past. Each node is a dot on the line. `.dim-tnode--now` renders the present moment in pulse with a pinging halo.

### `.dim-meter` — capability bars
3px, beam→pulse gradient, with a highlight that sweeps every 2.6s. The sweep is the point: the meter is never fully at rest, reinforcing the time axis.

### `.dim-input` / `.dim-label` — forms
Inputs sit *into* the void (darker than their panel) so they read as recessed. Focus lifts the background, borders in `--beam-bright`, and adds both a 3px ring and an outer glow.

### `.dim-rail` — navigation
Fixed 272px. A flowing gradient edge marks it as lit from within. Active item gets a pulse bar, pulse text, and a pulse index number. Below 1024px it becomes an overlay drawer starting below the 60px top bar, with scrim, body-scroll lock, Escape-to-close, and auto-close on route change.

---

## 3. The procedural layer

**No raster images anywhere in the design.** Two canvas generators cover every visual need.

### `DimensionField` — the site backdrop
Particle count scales with viewport area (`w*h/9000`, clamped 70–260). Every mote belongs to one of three depth planes and inherits that plane's parallax factor, alpha, and scale. Near-plane motes additionally get a radial bloom and connect to each other with hairlines when within ~160px — the lattice reads as structure, not noise.

Two inputs drive it, both smoothed by lerp so nothing snaps: **scroll** shifts planes at different rates (true parallax), and **pointer position** leans the field a few pixels (a subtle head-tracking parallax).

Light trails spawn at roughly one every four seconds, cross the field, and fade — they give the space scale and make it feel inhabited rather than looping.

### `ProceduralTexture` — project artwork
Each project's artwork is generated from its **title** via an FNV-1a hash seeding an xorshift PRNG. The same title always yields the same artwork, so the visuals are stable across reloads and deploys, but no two projects look alike.

| Generator | Form | Assign to |
|---|---|---|
| `lattice` | Connected node graph | Platform / SaaS / architecture work |
| `flow` | Layered sine ribbons | Data, APIs, integrations |
| `strata` | Stacked isolines over noise | Content, CMS, publishing |

All three share a drifting internal light source and a scanline pass, which is what makes three different algorithms read as one family.

### Performance contract
Both canvases: DPR capped at 2, single RAF loop, `cancelAnimationFrame` on `visibilitychange` (a backgrounded tab costs nothing), full teardown on unmount, and a **single static frame** under `prefers-reduced-motion` — the space still reads as dimensional, it just holds still.

---

## 4. Motion

All motion primitives live in `components/dimension/Spatial.tsx` and every one of them returns a plain, static, fully-legible element when `useReducedMotion()` is true.

| Component | Behaviour |
|---|---|
| `SpatialSection` | Section arrives from depth: `z: -120 → 0`, lift, un-blur, 850ms. Fires once on scroll-in. |
| `Stagger` / `StaggerItem` | Children arrive in sequence from depth. Default 80ms apart. |
| `ParallaxLayer` | Moves content against scroll at a depth-derived rate, spring-smoothed. |
| `TiltPanel` | Pointer-reactive 3D tilt with a CSS-variable highlight (`--mx`/`--my`) tracking the cursor. |
| `SpatialShell` | The camera move between routes: outgoing page recedes and blurs, incoming arrives from `z: -340`. `mode="wait"` keeps them sequential. |
| `ScrollBeam` | Fixed 2px progress beam — the page's clock. |
| `Reveal` | Plain opacity + lift, for text runs that shouldn't tilt or scale. |

**Timing budget.** Content must be readable within **400ms** of entering the viewport. Entrance animations run longer than that, but they start from ~40% opacity and finish the legibility-critical part early — a recruiter skimming the page never waits on an animation.

---

## 5. Layout rules

Grid utilities `.dim-grid-2` / `-3` / `-4` and splits `.dim-split` (1.15:1) / `.dim-split-wide` (2:3) collapse to one column at 980px / 900px / 600px.

Two containment rules prevent the classic dark-mode overflow bug and must not be removed:

```css
.dim-viewport { min-width: 0; overflow-x: clip; }        /* flex child must shrink */
.dim-grid-2 > *, .dim-split > *, … { min-width: 0; }     /* grid items must shrink */
```

Without these, a long unbroken string forces a track wider than the screen and the whole page scrolls sideways on mobile.

---

## 6. Rules of use

1. **One pulse focus per view.** `--pulse` marks the single most important thing. A second one halves the value of both.
2. **Never set `--beam` as a text colour.** 2.6:1. Fills, borders, glows only.
3. **Depth implies interactivity.** If it lifts on Z, it must do something when clicked. If it does nothing, it must not lift.
4. **Mono means machine.** Coordinates, dates, counts, tech names, metrics. Never prose.
5. **Every animation needs a reduced-motion answer** — and it is always "show the final state immediately", never "hide the content".
6. **No images.** If something needs a visual, generate it. Add a fourth generator before you add a PNG.
7. **Section labels are coordinates.** `Node NN · Name` — they tell the reader where they are in the space.

---

## 7. Terminal layer

Hacker chrome that **frames** content and never renders it. Bio copy, roles and metrics stay in clean prose so the page is skimmable in 30 seconds — a recruiter should never have to decode a terminal to read your CV.

| Component | Role |
|---|---|
| `<Prompt>` | Section label as a command line: `❯ ~/work ls -la`. Replaced the old `Node NN ·` coordinate marker. |
| `<Glitch>` | RGB-split glitch on a heading. Fires **once** on scroll-in, then only on hover — a permanently glitching heading reads as broken, not designed. |
| `<TerminalWindow>` | Framed panel with a title bar and traffic-light dots. For data readouts: `profile.json`, `channels.cfg`. |
| `<StatLine>` | `key ····· value` row with leader dots. |
| `<BootSequence>` | Six-line boot log on first load. Runs **once per session** via `sessionStorage`, so navigating home again never replays it. |
| `<AsciiArt>` | Decorative ASCII motifs, `aria-hidden`. |
| `<CodeStream>` | Canvas 2D glyph rain. Sparse columns, low alpha, lead glyph in pulse. Used as rail texture at 55% opacity, double-faded so it has no hard edges. |

**Restraint rules.** The terminal aesthetic fails when it becomes noise:
1. Glitch fires once, then on hover. Never looping.
2. The code stream is texture at ≤55% opacity — never behind body copy.
3. Command prompts label sections; they never replace headings. Every `<Prompt>` is followed by a real `<h1>`/`<h2>`.
4. `--term-red` is reserved for genuine error states (the 404, form failures). Never decoration.

---

## 8. The WebGL core

`components/gl/HeroScene.tsx` — one R3F scene: a wireframe icosahedron core that breathes, a 900-point Fibonacci-distributed particle shell with additive blending, a ground lattice scrolling toward the viewer, two drifting coloured point lights, and pointer-driven camera parallax.

### The load gate

`HeroStage.tsx` loads the scene only when **all five** hold:

1. Not `prefers-reduced-motion`
2. Viewport ≥ 900px
3. `navigator.hardwareConcurrency > 4`
4. Stage has scrolled into view (IntersectionObserver, 120px margin)
5. WebGL context is actually obtainable

Fail any one and the Canvas 2D `ProceduralTexture` renders instead — the same art used across the rest of the site, so failing the check costs a visitor nothing in polish.

**Measured result:** home page first load is 151 KB. Three.js sits in a separate chunk that mobile never downloads. Verified: at a 390px viewport `heroGl` does not mount and the 2D fallback canvas does.

### GSAP vs Framer Motion — the division

Both libraries are present, and they must never animate the same property on the same node. That is the usual way this pairing breaks.

- **Framer Motion** owns element transforms: page Z-translation via `AnimatePresence`, scroll reveals, stagger, parallax, tilt.
- **GSAP** owns the route-change overlay timeline only: a scan bar wiping across the viewport plus a chromatic flash, sequenced on independent fixed-position nodes.

---

## 7. File map

```
src/app/globals.css                      tokens, components, terminal layer
src/components/dimension/
  DimensionField.tsx                     fixed procedural backdrop (Canvas 2D)
  ProceduralTexture.tsx                  seeded per-project artwork (Canvas 2D)
  HoloPanel.tsx                          content surface
  Spatial.tsx                            motion primitives (Framer Motion)
  SpatialShell.tsx                       route transitions (Framer + GSAP)
src/components/terminal/
  Terminal.tsx                           Prompt, Glitch, TerminalWindow,
                                         StatLine, BootSequence, AsciiArt
  CodeStream.tsx                         glyph rain (Canvas 2D)
src/components/gl/
  HeroScene.tsx                          the R3F/Three.js scene
  HeroStage.tsx                          load gate + 2D fallback
src/components/Sidebar.tsx               hacker dashboard rail
```

Adding a page: wrap sections in `SpatialSection`, open with `.dim-coord` + `.dim-h1`/`.dim-h2` + `.dim-rule`, put content in `HoloPanel`, and close with a `.holo--pulse` CTA. The shell and field are already applied by `app/layout.tsx`.
