"use client"
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { Model } from './people';

export function Scene3D() {
  return (
    <div className="w-full h-screen relative bg-neutral-900 pointer-events-auto">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-10" />
      
      <Canvas 
        shadows 
        className="relative z-0"
        style={{ pointerEvents: 'all' }}
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

          {/* Camera position and controls */}
          <PerspectiveCamera makeDefault position={[0, 3, 15]} fov={45} />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={100}
            target={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
