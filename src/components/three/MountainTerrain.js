import * as THREE from 'three';

export const createMountainTerrain = () => {
  // Low-poly plane for performance
  const geometry = new THREE.PlaneGeometry(200, 400, 50, 100);
  
  // Displace vertices to create mountains
  const vertices = geometry.attributes.position.array;
  for (let i = 0; i < vertices.length; i += 3) {
    const x = vertices[i];
    const y = vertices[i + 1];
    
    // Procedural height using noise-like function
    vertices[i + 2] = Math.sin(x * 0.1) * Math.cos(y * 0.05) * 15 + Math.random() * 3;
  }
  
  geometry.computeVertexNormals();
  
  const material = new THREE.MeshStandardMaterial({
    color: 0x4a5568,
    flatShading: true,
    side: THREE.DoubleSide
  });
  
  const terrain = new THREE.Mesh(geometry, material);
  terrain.rotation.x = -Math.PI / 2;
  
  return terrain;
};
