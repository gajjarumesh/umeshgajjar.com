'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { ANIMATION_CONSTANTS, COLOR_PALETTE } from '@/lib/three/materials';

/**
 * Abstract floating 3D shapes for background depth
 * 
 * @param {Object} props
 * @param {number} props.scrollY - Normalized scroll position (0-1)
 */
export default function FloatingElements({ scrollY = 0 }) {
  // Create multiple floating elements with random positions
  const elements = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        -5 + Math.random() * -10,
      ],
      scale: 0.5 + Math.random() * 1.5,
      speed: 0.5 + Math.random() * 0.5,
      type: Math.random() > 0.5 ? 'sphere' : 'box',
    }));
  }, []);

  return (
    <group>
      {elements.map((element) => (
        <FloatingShape
          key={element.id}
          position={element.position}
          scale={element.scale}
          speed={element.speed}
          type={element.type}
          scrollY={scrollY}
        />
      ))}
    </group>
  );
}

/**
 * Individual floating shape component
 */
function FloatingShape({ position, scale, speed, type, scrollY }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      
      // Gentle rotation
      meshRef.current.rotation.x = time * ANIMATION_CONSTANTS.rotationSpeed * speed;
      meshRef.current.rotation.y = time * ANIMATION_CONSTANTS.rotationSpeed * speed * 1.3;
      
      // Floating motion (up and down)
      const floatOffset = Math.sin(time * ANIMATION_CONSTANTS.floatSpeed * speed) * 2;
      meshRef.current.position.y = position[1] + floatOffset;
      
      // Parallax effect based on scroll
      meshRef.current.position.z = position[2] + scrollY * 3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {type === 'sphere' ? (
        <sphereGeometry args={[1, 32, 32]} />
      ) : (
        <boxGeometry args={[1, 1, 1]} />
      )}
      <meshPhysicalMaterial
        transmission={0.8}
        thickness={0.5}
        roughness={0.3}
        clearcoat={0.3}
        clearcoatRoughness={0.2}
        ior={1.5}
        color={COLOR_PALETTE.base}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}
