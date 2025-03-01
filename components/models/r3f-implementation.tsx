"use client"

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

function Model() {
  const { scene } = useGLTF('/models/Just People 3D Model.glb')
  return <primitive object={scene} />
}

export default function R3FScene() {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 45 }}
        style={{ background: '#101010' }}
      >
        <Suspense fallback={null}>
          {/* Model */}
          <Model />

          {/* Add ambient light */}
          <ambientLight intensity={0.5} />
          
          {/* Add directional light */}
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
          />

          {/* Controls */}
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.5}
            enableZoom={true}
            enablePan={true}
            minDistance={3}
            maxDistance={10}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
