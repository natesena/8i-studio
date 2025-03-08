"use client"
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  PerspectiveCamera,
  Environment,
} from '@react-three/drei';
import { Model } from './people';
import { Vector3 } from 'three';

// Define interface for component props
interface CameraAnimatorProps {
  activeSection: string;
}

// Camera animation component
const CameraAnimator = ({ activeSection }: CameraAnimatorProps) => {
  const { camera } = useThree();
  const targetPosition = useRef(new Vector3(0, 15, 15)); // Start from top
  const targetLookAt = useRef(new Vector3(0, 0, 0));
  const cameraLookAt = useRef(new Vector3(0, 0, 0));
  const animationPhase = useRef(0);
  const timer = useRef(0);
  const lastPhaseChange = useRef(0);

  // Define camera paths based on animation phase
  const cameraPositions = [
    { position: new Vector3(0, 15, 15), lookAt: new Vector3(0, 0, 0), duration: 5 }, // Top view
    { position: new Vector3(8, 5, 8), lookAt: new Vector3(0, 1, 0), duration: 8 }, // Side angle 1
    { position: new Vector3(-5, 3, 10), lookAt: new Vector3(0, 1, 0), duration: 7 }, // Side angle 2
    { position: new Vector3(0, 2, 5), lookAt: new Vector3(0, 1, 0), duration: 6 }, // Close-up front
    { position: new Vector3(-8, 4, -8), lookAt: new Vector3(0, 1, 0), duration: 8 }, // Back view
    { position: new Vector3(10, 2, -5), lookAt: new Vector3(0, 1, 0), duration: 7 }, // Side angle 3
    { position: new Vector3(0, 10, 15), lookAt: new Vector3(0, 0, 0), duration: 6 }, // Return to higher view
  ];

  useEffect(() => {
    // Reset animation when section changes
    animationPhase.current = 0;
    timer.current = 0;
    lastPhaseChange.current = 0;
    
    // Set initial camera position
    const initialPos = cameraPositions[0].position;
    const initialLookAt = cameraPositions[0].lookAt;
    camera.position.set(initialPos.x, initialPos.y, initialPos.z);
    cameraLookAt.current.copy(initialLookAt);
    targetPosition.current.copy(initialPos);
    targetLookAt.current.copy(initialLookAt);
  }, [activeSection, camera]);

  useFrame((_, delta) => {
    // Update timer
    timer.current += delta;
    
    // Check if we need to move to the next phase
    const currentPhase = animationPhase.current;
    const currentPath = cameraPositions[currentPhase];
    
    if (timer.current - lastPhaseChange.current > currentPath.duration) {
      // Move to next phase
      lastPhaseChange.current = timer.current;
      animationPhase.current = (animationPhase.current + 1) % cameraPositions.length;
      
      // Set new target
      const newPhase = animationPhase.current;
      targetPosition.current.copy(cameraPositions[newPhase].position);
      targetLookAt.current.copy(cameraPositions[newPhase].lookAt);
    }
    
    // Smoothly interpolate camera position
    camera.position.lerp(targetPosition.current, delta * 0.5);
    
    // Smoothly interpolate camera lookAt
    cameraLookAt.current.lerp(targetLookAt.current, delta * 0.5);
    camera.lookAt(cameraLookAt.current);
  });

  return null;
};

export function Scene3D() {
  const [activeSection, setActiveSection] = useState("default");

  // Update active section based on URL hash
  useEffect(() => {
    const updateSection = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveSection(hash || "default");
    };

    updateSection();
    window.addEventListener("hashchange", updateSection);
    return () => window.removeEventListener("hashchange", updateSection);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, height: '100%' }} className="bg-neutral-900 pointer-events-auto">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-10" />
      
      <Canvas 
        shadows 
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', touchAction: 'none' }}
      >
        <Suspense fallback={null}>
          {/* Model */}
          <Model 
            position={[0, -1, 0]} 
            rotation={[0, Math.PI, 0]} 
            scale={0.5}
          />
          
          {/* Add ambient light */}
          <ambientLight intensity={0.7} />
          
          {/* Add key light */}
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          {/* Add fill light */}
          <directionalLight
            position={[-10, 5, -5]}
            intensity={0.5}
          />

          {/* Add rim light */}
          <spotLight
            position={[0, 10, -10]}
            intensity={0.8}
            angle={0.6}
            penumbra={0.5}
          />

          {/* Camera */}
          <PerspectiveCamera makeDefault position={[0, 15, 15]} fov={45} />
          
          {/* Camera animator */}
          <CameraAnimator activeSection={activeSection} />
          
          {/* Environment */}
          {/* <Environment preset="city" /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
