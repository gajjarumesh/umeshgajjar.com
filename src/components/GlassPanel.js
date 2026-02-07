'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLASS_MATERIAL_PRESETS, COLOR_PALETTE, ANIMATION_CONSTANTS } from '@/lib/three/materials';

/**
 * Reusable glass panel component with Apple-style materials
 * 
 * @param {Object} props
 * @param {Array<number>} props.position - [x, y, z] position in 3D space
 * @param {Array<number>} props.scale - [width, height, depth] scale
 * @param {string} props.color - Hex color for glass tint
 * @param {string} props.preset - Material preset name (hero, skills, experience, projects, contact)
 * @param {boolean} props.animate - Enable pulsing animation
 * @param {number} props.opacity - Override opacity
 */
export default function GlassPanel({ 
  position = [0, 0, 0], 
  scale = [1, 1, 1],
  color = COLOR_PALETTE.glassTint,
  preset = 'default',
  animate = false,
  opacity = null,
}) {
  const meshRef = useRef();
  
  // Get material properties from preset
  const materialProps = GLASS_MATERIAL_PRESETS[preset] || GLASS_MATERIAL_PRESETS.default;
  const finalOpacity = opacity !== null ? opacity : materialProps.opacity;

  // Animate with subtle pulsing if enabled
  useFrame(({ clock }) => {
    if (animate && meshRef.current) {
      const pulse = Math.sin(clock.getElapsedTime() * ANIMATION_CONSTANTS.pulseSpeed) * 0.05 + 1;
      meshRef.current.scale.set(scale[0] * pulse, scale[1] * pulse, scale[2]);
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <planeGeometry />
      <meshPhysicalMaterial
        transmission={materialProps.transmission}
        thickness={materialProps.thickness}
        roughness={materialProps.roughness}
        clearcoat={materialProps.clearcoat}
        clearcoatRoughness={materialProps.clearcoatRoughness}
        ior={materialProps.ior}
        color={color}
        transparent={materialProps.transparent}
        opacity={finalOpacity}
      />
    </mesh>
  );
}
