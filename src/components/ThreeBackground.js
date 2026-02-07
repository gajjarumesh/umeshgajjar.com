'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useScrollParallax } from '@/lib/hooks/useScrollParallax';
import { useMouseParallax } from '@/lib/hooks/useMouseParallax';
import { GLASS_MATERIAL_PRESETS, COLOR_PALETTE } from '@/lib/three/materials';

/**
 * Main ThreeBackground component
 * Renders the complete 3D scene behind all content using vanilla Three.js
 */
export default function ThreeBackground() {
  const containerRef = useRef(null);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
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
  
  useEffect(() => {
    if (!isMounted || !isWebGLSupported || prefersReducedMotion || !containerRef.current) {
      return;
    }
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(COLOR_PALETTE.accent, 5, 25);
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: containerRef.current,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(COLOR_PALETTE.accent, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Create glass panels
    const glassPanels = [];
    
    // Hero section - Large floating glass panel
    const heroPanel = createGlassPanel(8, 6, 'hero');
    heroPanel.position.set(0, 0, 0);
    scene.add(heroPanel);
    glassPanels.push({ mesh: heroPanel, animate: true, baseScale: { x: 8, y: 6 } });
    
    // Skills section - Layered cards
    const skillsPanel1 = createGlassPanel(4, 3, 'skills', COLOR_PALETTE.base);
    skillsPanel1.position.set(-3, 2, -2);
    scene.add(skillsPanel1);
    
    const skillsPanel2 = createGlassPanel(4, 3, 'skills', COLOR_PALETTE.highlight);
    skillsPanel2.position.set(3, -1, -3);
    scene.add(skillsPanel2);
    
    // Experience section - Deeper panels
    const experiencePanel = createGlassPanel(6, 4, 'experience', COLOR_PALETTE.base);
    experiencePanel.position.set(0, 1, -4);
    scene.add(experiencePanel);
    
    // Projects section - Stronger blur panels
    const projectsPanel1 = createGlassPanel(5, 4, 'projects', COLOR_PALETTE.accent);
    projectsPanel1.position.set(-2, -2, -5);
    scene.add(projectsPanel1);
    
    const projectsPanel2 = createGlassPanel(4, 3, 'projects', COLOR_PALETTE.highlight);
    projectsPanel2.position.set(2, 2, -6);
    scene.add(projectsPanel2);
    
    // Contact section - Light panels
    const contactPanel = createGlassPanel(7, 5, 'contact');
    contactPanel.position.set(0, 0, -7);
    scene.add(contactPanel);
    
    // Create floating elements
    const floatingElements = [];
    for (let i = 0; i < 8; i++) {
      const geometry = Math.random() > 0.5 
        ? new THREE.SphereGeometry(1, 32, 32)
        : new THREE.BoxGeometry(1, 1, 1);
      
      const material = new THREE.MeshPhysicalMaterial({
        transmission: 0.8,
        thickness: 0.5,
        roughness: 0.3,
        clearcoat: 0.3,
        clearcoatRoughness: 0.2,
        ior: 1.5,
        color: COLOR_PALETTE.base,
        transparent: true,
        opacity: 0.3,
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        -5 + Math.random() * -10
      );
      mesh.scale.setScalar(0.5 + Math.random() * 1.5);
      
      scene.add(mesh);
      floatingElements.push({
        mesh,
        speed: 0.5 + Math.random() * 0.5,
        baseY: mesh.position.y,
        baseZ: mesh.position.z,
      });
    }
    
    // Animation loop
    let targetCameraPos = { x: 0, y: 0, z: 10 };
    let animationId;
    
    const animate = (time) => {
      animationId = requestAnimationFrame(animate);
      
      // Calculate target camera Z position based on scroll
      let targetZ = 10;
      if (scrollY < 0.25) {
        targetZ = 10;
      } else if (scrollY < 0.5) {
        targetZ = 10 - ((scrollY - 0.25) / 0.25) * 1;
      } else if (scrollY < 0.7) {
        targetZ = 9 - ((scrollY - 0.5) / 0.2) * 1;
      } else if (scrollY < 0.85) {
        targetZ = 8 + ((scrollY - 0.7) / 0.15) * 1;
      } else {
        targetZ = 9 + ((scrollY - 0.85) / 0.15) * 1;
      }
      
      targetCameraPos.x = mouseX * 0.5;
      targetCameraPos.y = -mouseY * 0.5;
      targetCameraPos.z = targetZ;
      
      // Smooth camera movement
      const damping = 0.05;
      camera.position.x += (targetCameraPos.x - camera.position.x) * damping;
      camera.position.y += (targetCameraPos.y - camera.position.y) * damping;
      camera.position.z += (targetCameraPos.z - camera.position.z) * damping;
      
      // Animate glass panels
      glassPanels.forEach(panel => {
        if (panel.animate) {
          const pulse = Math.sin(time * 0.002) * 0.05 + 1;
          panel.mesh.scale.set(
            panel.baseScale.x * pulse,
            panel.baseScale.y * pulse,
            1
          );
        }
      });
      
      // Animate floating elements
      floatingElements.forEach(element => {
        element.mesh.rotation.x = time * 0.001 * element.speed;
        element.mesh.rotation.y = time * 0.001 * element.speed * 1.3;
        
        const floatOffset = Math.sin(time * 0.0005 * element.speed) * 2;
        element.mesh.position.y = element.baseY + floatOffset;
        element.mesh.position.z = element.baseZ + scrollY * 3;
      });
      
      renderer.render(scene, camera);
    };
    
    animate(0);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, [isMounted, isWebGLSupported, prefersReducedMotion, scrollY, mouseX, mouseY]);
  
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
    <canvas
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}

/**
 * Helper function to create glass panels
 */
function createGlassPanel(width, height, preset = 'default', color = COLOR_PALETTE.glassTint) {
  const geometry = new THREE.PlaneGeometry(width, height);
  const materialProps = GLASS_MATERIAL_PRESETS[preset] || GLASS_MATERIAL_PRESETS.default;
  
  const material = new THREE.MeshPhysicalMaterial({
    transmission: materialProps.transmission,
    thickness: materialProps.thickness,
    roughness: materialProps.roughness,
    clearcoat: materialProps.clearcoat,
    clearcoatRoughness: materialProps.clearcoatRoughness,
    ior: materialProps.ior,
    color: new THREE.Color(color),
    transparent: materialProps.transparent,
    opacity: materialProps.opacity,
  });
  
  return new THREE.Mesh(geometry, material);
}

