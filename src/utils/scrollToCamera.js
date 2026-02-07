export const updateCameraFromScroll = (camera, scrollProgress) => {
  // Define camera path keyframes (5 sections)
  const sections = [
    { z: 0, y: 50, rotationX: -0.2 },      // Hero: High above mountains
    { z: -80, y: 30, rotationX: -0.1 },    // Skills: Enter valley
    { z: -160, y: 45, rotationX: -0.15 },  // Experience: Climb ridge
    { z: -240, y: 25, rotationX: -0.05 },  // Projects: Through canyon
    { z: -320, y: 60, rotationX: -0.3 }    // Contact: Mountain peak
  ];
  
  // Calculate current section and interpolation
  const sectionIndex = Math.min(Math.floor(scrollProgress * sections.length), sections.length - 2);
  const sectionProgress = (scrollProgress * sections.length) % 1;
  
  const current = sections[sectionIndex];
  const next = sections[sectionIndex + 1];
  
  // Smooth interpolation
  camera.position.z = current.z + (next.z - current.z) * sectionProgress;
  camera.position.y = current.y + (next.y - current.y) * sectionProgress;
  camera.rotation.x = current.rotationX + (next.rotationX - current.rotationX) * sectionProgress;
};
