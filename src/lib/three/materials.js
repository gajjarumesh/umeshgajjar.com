/**
 * Material presets for Three.js glass panels
 */

// Apple-inspired glass material properties
export const GLASS_MATERIAL_PRESETS = {
  // Default glass panel
  default: {
    transmission: 0.95,
    thickness: 0.8,
    roughness: 0.2,
    clearcoat: 0.5,
    clearcoatRoughness: 0.1,
    ior: 1.5,
    transparent: true,
    opacity: 0.6,
  },
  
  // Hero section - lighter, more ethereal
  hero: {
    transmission: 0.98,
    thickness: 0.6,
    roughness: 0.15,
    clearcoat: 0.6,
    clearcoatRoughness: 0.1,
    ior: 1.5,
    transparent: true,
    opacity: 0.5,
  },
  
  // Skills section - medium weight
  skills: {
    transmission: 0.95,
    thickness: 0.8,
    roughness: 0.2,
    clearcoat: 0.5,
    clearcoatRoughness: 0.1,
    ior: 1.5,
    transparent: true,
    opacity: 0.6,
  },
  
  // Experience section - heavier, more solid
  experience: {
    transmission: 0.9,
    thickness: 1.2,
    roughness: 0.25,
    clearcoat: 0.5,
    clearcoatRoughness: 0.15,
    ior: 1.5,
    transparent: true,
    opacity: 0.7,
  },
  
  // Projects section - stronger blur
  projects: {
    transmission: 0.92,
    thickness: 1.0,
    roughness: 0.3,
    clearcoat: 0.6,
    clearcoatRoughness: 0.1,
    ior: 1.5,
    transparent: true,
    opacity: 0.65,
  },
  
  // Contact section - lightest, most breathable
  contact: {
    transmission: 0.97,
    thickness: 0.5,
    roughness: 0.15,
    clearcoat: 0.5,
    clearcoatRoughness: 0.1,
    ior: 1.5,
    transparent: true,
    opacity: 0.4,
  },
};

// Color palette
export const COLOR_PALETTE = {
  base: '#1e3a8a',        // Light navy blue
  accent: '#e6e6fa',      // Lavender
  highlight: '#add8e6',   // Pale blue
  glassTint: '#4a5568',   // Glass tint color
};

// Animation constants
export const ANIMATION_CONSTANTS = {
  rotationSpeed: 0.001,
  floatSpeed: 0.0005,
  pulseSpeed: 0.002,
  dampingFactor: 0.1,
};
