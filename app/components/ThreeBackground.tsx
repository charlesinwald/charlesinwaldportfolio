"use client";

import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ThreeBackground() {
  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "-1";
    document.body.appendChild(renderer.domElement);

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(
      "/need_some_space/scene.gltf",
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        model.position.set(-50, -20, -30);
        model.scale.set(25, 25, 25);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the GLTF model:", error);
      }
    );

    camera.position.z = 5;

    // Handle window resize
    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onWindowResize);

    // Handle scroll event
    const onScroll = () => {
      const scrollY = window.scrollY;
      camera.rotation.x = scrollY * 0.0005;
      camera.rotation.y = scrollY * 0.0005;
    };
    window.addEventListener("scroll", onScroll);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("scroll", onScroll);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // This component only manages the background, so it renders nothing
}
