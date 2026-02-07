'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { setupScene } from './SceneSetup';
import { createMountainTerrain } from './MountainTerrain';
import { updateCameraFromScroll } from '@/utils/scrollToCamera';

export default function MountainScene() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    // Initialize
    const { scene, camera, renderer } = setupScene(container);
    sceneRef.current = { scene, camera, renderer };
    
    // Add terrain
    const terrain = createMountainTerrain();
    scene.add(terrain);
    
    // Append canvas
    container.appendChild(renderer.domElement);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
    
    // Scroll handler
    const handleScroll = () => {
      const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      updateCameraFromScroll(camera, scrollProgress);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
}
