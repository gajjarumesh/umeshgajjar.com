'use client';

import { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, PerformanceMonitor } from '@react-three/drei';
import { useScrollParallax } from '@/lib/hooks/useScrollParallax';
import { useMouseParallax } from '@/lib/hooks/useMouseParallax';
import GlassPanel from './GlassPanel';
import FloatingElements from './FloatingElements';
import { COLOR_PALETTE } from '@/lib/three/materials';

/**
 * Camera controller component that responds to scroll and mouse
 */
function CameraController({ scrollY, mouseX, mouseY }) {
  const { camera } = useThree();
  const targetPos = useRef({ x: 0, y: 0, z: 10 });
  
  useFrame(() => {
    // Calculate target camera Z position based on scroll
    // Hero: z=10, Skills: z=9, Experience: z=8, Projects: z=9, Contact: z=10
    let targetZ = 10;
    if (scrollY < 0.25) {
      // Hero section
      targetZ = 10;
    } else if (scrollY < 0.5) {
      // Skills section - move closer
      targetZ = 10 - ((scrollY - 0.25) / 0.25) * 1; // 10 -> 9
    } else if (scrollY < 0.7) {
      // Experience section - closest
      targetZ = 9 - ((scrollY - 0.5) / 0.2) * 1; // 9 -> 8
    } else if (scrollY < 0.85) {
      // Projects section - breathing room
      targetZ = 8 + ((scrollY - 0.7) / 0.15) * 1; // 8 -> 9
    } else {
      // Contact section - back to open
      targetZ = 9 + ((scrollY - 0.85) / 0.15) * 1; // 9 -> 10
    }
    
    // Add gentle mouse parallax
    targetPos.current.x = mouseX * 0.5;
    targetPos.current.y = -mouseY * 0.5;
    targetPos.current.z = targetZ;
    
    // Smooth camera movement with exponential ease-out
    const damping = 0.05;
    camera.position.x += (targetPos.current.x - camera.position.x) * damping;
    camera.position.y += (targetPos.current.y - camera.position.y) * damping;
    camera.position.z += (targetPos.current.z - camera.position.z) * damping;
  });
  
  return null;
}

/**
 * Scene content component
 */
function SceneContent({ scrollY, mouseX, mouseY }) {
  return (
    <>
      {/* Fog for gradient background effect */}
      <fog attach="fog" args={[COLOR_PALETTE.accent, 5, 25]} />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} color={COLOR_PALETTE.accent} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      
      {/* Environment for realistic reflections */}
      <Environment preset="city" />
      
      {/* Hero section - Large floating glass panel */}
      <GlassPanel 
        position={[0, 0, 0]} 
        scale={[8, 6, 1]} 
        preset="hero"
        animate={true}
      />
      
      {/* Skills section - Layered cards */}
      <GlassPanel 
        position={[-3, 2, -2]} 
        scale={[4, 3, 1]} 
        preset="skills"
        color={COLOR_PALETTE.base}
      />
      <GlassPanel 
        position={[3, -1, -3]} 
        scale={[4, 3, 1]} 
        preset="skills"
        color={COLOR_PALETTE.highlight}
      />
      
      {/* Experience section - Deeper panels */}
      <GlassPanel 
        position={[0, 1, -4]} 
        scale={[6, 4, 1]} 
        preset="experience"
        color={COLOR_PALETTE.base}
      />
      
      {/* Projects section - Stronger blur panels */}
      <GlassPanel 
        position={[-2, -2, -5]} 
        scale={[5, 4, 1]} 
        preset="projects"
        color={COLOR_PALETTE.accent}
      />
      <GlassPanel 
        position={[2, 2, -6]} 
        scale={[4, 3, 1]} 
        preset="projects"
        color={COLOR_PALETTE.highlight}
      />
      
      {/* Contact section - Light panels */}
      <GlassPanel 
        position={[0, 0, -7]} 
        scale={[7, 5, 1]} 
        preset="contact"
      />
      
      {/* Floating background elements */}
      <FloatingElements scrollY={scrollY} />
      
      {/* Camera controller */}
      <CameraController scrollY={scrollY} mouseX={mouseX} mouseY={mouseY} />
    </>
  );
}

/**
 * Main ThreeBackground component
 * Renders the complete 3D scene behind all content
 */
export default function ThreeBackground() {
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [dpr, setDpr] = useState(1);
  
  const scrollY = useScrollParallax();
  const { x: mouseX, y: mouseY } = useMouseParallax();
  
  useEffect(() => {
    setIsMounted(true);
    
    // Check for WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setIsWebGLSupported(false);
      console.log('WebGL not supported - 3D background disabled');
      return;
    }
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Don't render on server or if WebGL is not supported
  if (!isMounted || !isWebGLSupported) {
    return null;
  }
  
  // Render static version for reduced motion
  if (prefersReducedMotion) {
    return (
      <div 
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom right, ${COLOR_PALETTE.accent}, ${COLOR_PALETTE.highlight})`,
        }}
        aria-hidden="true"
      />
    );
  }
  
  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none" 
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 55 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: 'high-performance',
        }}
        dpr={dpr}
      >
        <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        >
          <SceneContent 
            scrollY={scrollY} 
            mouseX={mouseX} 
            mouseY={mouseY} 
          />
        </PerformanceMonitor>
      </Canvas>
    </div>
  );
}
