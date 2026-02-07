import * as THREE from 'three';

export const setupScene = (container) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  
  // Configure renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // Add fog for depth
  scene.fog = new THREE.Fog(0xccddff, 10, 100);
  
  // Lighting setup
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(10, 50, 10);
  
  scene.add(ambientLight, directionalLight);
  
  return { scene, camera, renderer };
};
