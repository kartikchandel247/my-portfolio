import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Futuristic Concentric Orbital Rings (Cyber Halo)
    // Ring 1 (Inner Cyan Ring)
    const ring1Geo = new THREE.TorusGeometry(2.1, 0.022, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    // Ring 2 (Middle Neon Violet Ring)
    const ring2Geo = new THREE.TorusGeometry(2.4, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6, // Violet
      transparent: true,
      opacity: 0.6,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // Ring 3 (Outer Emerald / Indigo Ring)
    const ring3Geo = new THREE.TorusGeometry(2.7, 0.018, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x10b981, // Emerald
      transparent: true,
      opacity: 0.5,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 5;
    mainGroup.add(ring3);

    // 2. Glowing Orbital Satellite Nodes (Beads traversing the rings)
    const sphereGeo = new THREE.SphereGeometry(0.08, 16, 16);
    
    const node1Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const node1 = new THREE.Mesh(sphereGeo, node1Mat);
    mainGroup.add(node1);

    const node2Mat = new THREE.MeshBasicMaterial({ color: 0xc084fc });
    const node2 = new THREE.Mesh(sphereGeo, node2Mat);
    mainGroup.add(node2);

    const node3Mat = new THREE.MeshBasicMaterial({ color: 0x34d399 });
    const node3 = new THREE.Mesh(sphereGeo, node3Mat);
    mainGroup.add(node3);

    // 3. Stardust Particle Nebula
    const particlesCount = 200;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 2.0 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      positions[i] = radius * Math.cos(theta) * Math.cos(phi);
      positions[i + 1] = radius * Math.sin(theta) * Math.cos(phi);
      positions[i + 2] = radius * Math.sin(phi);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x818cf8,
      size: 0.035,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Subtle Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.2;
      targetY = y * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate orbital rings
      ring1.rotation.z = elapsedTime * 0.4;
      ring1.rotation.y = elapsedTime * 0.2 + mouseX * 0.5;

      ring2.rotation.z = -elapsedTime * 0.3;
      ring2.rotation.x = elapsedTime * 0.25 + mouseY * 0.5;

      ring3.rotation.y = elapsedTime * 0.35;
      ring3.rotation.x = -elapsedTime * 0.15;

      // Orbit satellite beads around paths
      const speed1 = elapsedTime * 1.2;
      node1.position.set(Math.cos(speed1) * 2.1, Math.sin(speed1) * 2.1 * Math.cos(Math.PI / 3), Math.sin(speed1) * 2.1 * Math.sin(Math.PI / 3));

      const speed2 = -elapsedTime * 0.9;
      node2.position.set(Math.cos(speed2) * 2.4 * Math.cos(Math.PI / 4), Math.sin(speed2) * 2.4, Math.cos(speed2) * 2.4 * Math.sin(Math.PI / 4));

      const speed3 = elapsedTime * 0.8;
      node3.position.set(Math.cos(speed3) * 2.7, Math.sin(speed3) * 2.7 * Math.sin(Math.PI / 5), Math.sin(speed3) * 2.7 * Math.cos(Math.PI / 5));

      // Gentle floating of entire orbital system
      mainGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.08;
      particles.rotation.y = elapsedTime * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      sphereGeo.dispose();
      node1Mat.dispose();
      node2Mat.dispose();
      node3Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none select-none z-0"
    />
  );
}
