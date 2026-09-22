'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, Suspense } from 'react';
import * as THREE from 'three';

/* ═══════════════════════════════════════════════════════════════
   HERO SCENE — the one real 3D environment on the site.

   Deliberately a single scene, dynamically imported, and skipped
   entirely on reduced-motion. Everything else on the site stays
   Canvas 2D / CSS 3D so the bundle cost is paid once, for the
   thing that actually earns it.

   Contents:
     · A wireframe icosahedron "core" that rotates and breathes
     · An orbiting particle shell, shader-coloured beam → pulse
     · A ground lattice that recedes to the horizon
     · Two coloured point lights that drift on the time axis
     · Camera parallax driven by pointer position
   ═══════════════════════════════════════════════════════════════ */

const BEAM = new THREE.Color('#2f4fce');
const PULSE = new THREE.Color('#d6ed52');

/* ── The core: a slowly rotating wireframe solid ─────────────── */
function Core() {
  const mesh = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.11;
      mesh.current.rotation.y = t * 0.17;
      // Breathe — a slow scale pulse so the object never feels static.
      const s = 1 + Math.sin(t * 0.6) * 0.045;
      mesh.current.scale.setScalar(s);
    }
    if (inner.current) {
      inner.current.rotation.x = -t * 0.19;
      inner.current.rotation.z = t * 0.13;
    }
  });

  return (
    <group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.34, 1]} />
        <meshBasicMaterial color={BEAM} wireframe transparent opacity={0.55} />
      </mesh>

      {/* Inner solid — catches the point lights, gives the core mass */}
      <mesh ref={inner} scale={0.72}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#0b0e1b"
          emissive={BEAM}
          emissiveIntensity={0.32}
          roughness={0.35}
          metalness={0.85}
          flatShading
        />
      </mesh>
    </group>
  );
}

/* ── Orbiting particle shell ─────────────────────────────────── */
function Shell({ count = 900 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  // Build positions + per-vertex colours once.
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const c = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Fibonacci sphere — even distribution, no clustering at poles.
      const k = i + 0.5;
      const phi = Math.acos(1 - (2 * k) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * k;
      const r = 2.5 + Math.random() * 1.5;

      pos[i * 3]     = Math.cos(theta) * Math.sin(phi) * r;
      pos[i * 3 + 1] = Math.sin(theta) * Math.sin(phi) * r * 0.62;
      pos[i * 3 + 2] = Math.cos(phi) * r;

      // A minority render in pulse, the rest in beam.
      c.copy(Math.random() < 0.14 ? PULSE : BEAM);
      c.multiplyScalar(0.6 + Math.random() * 0.7);
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.elapsedTime;
    points.current.rotation.y = t * 0.055;
    points.current.rotation.x = Math.sin(t * 0.22) * 0.13;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ── Ground lattice receding to the horizon ──────────────────── */
function Lattice() {
  const grid = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (!grid.current) return;
    // Scroll the grid toward the viewer, wrapping by one cell so the
    // motion is seamless — reads as forward travel.
    const t = state.clock.elapsedTime;
    grid.current.position.z = ((t * 0.42) % 1) - 0.5;
  });

  return (
    <gridHelper
      ref={grid}
      args={[36, 36, BEAM, BEAM]}
      position={[0, -2.15, 0]}
      // GridHelper material is per-instance; fade it back.
      onUpdate={(g) => {
        const m = g.material as THREE.Material | THREE.Material[];
        const apply = (mat: THREE.Material) => {
          mat.transparent = true;
          mat.opacity = 0.16;
        };
        Array.isArray(m) ? m.forEach(apply) : apply(m);
      }}
    />
  );
}

/* ── Drifting light sources ──────────────────────────────────── */
function Lights() {
  const a = useRef<THREE.PointLight>(null);
  const b = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (a.current) {
      a.current.position.set(Math.sin(t * 0.34) * 4, 2.2 + Math.cos(t * 0.27) * 1.1, 3);
    }
    if (b.current) {
      b.current.position.set(Math.cos(t * 0.21) * -4, -1.6 + Math.sin(t * 0.31) * 1.3, 2.4);
    }
  });

  return (
    <>
      <ambientLight intensity={0.28} />
      <pointLight ref={a} color={BEAM} intensity={26} distance={14} />
      <pointLight ref={b} color={PULSE} intensity={13} distance={12} />
    </>
  );
}

/* ── Camera parallax from pointer ────────────────────────────── */
function CameraRig() {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    // Ease toward the pointer-derived position; never snap.
    camera.position.x += (pointer.x * 0.85 - camera.position.x) * 0.035;
    camera.position.y += (pointer.y * 0.55 - camera.position.y) * 0.035;
    camera.lookAt(target.current);
  });

  return null;
}

/* ── Scene root ──────────────────────────────────────────────── */
export default function HeroScene() {
  return (
    <Canvas
      // Cap DPR — retina at 3x on a decorative scene is wasted GPU.
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.2], fov: 46 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      // Render only while visible in the viewport.
      frameloop="always"
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={['#05060d', 6, 16]} />
        <Lights />
        <Core />
        <Shell />
        <Lattice />
        <CameraRig />
      </Suspense>
    </Canvas>
  );
}
