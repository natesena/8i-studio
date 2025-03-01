import React, { useRef, StrictMode } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { HologramR3F, MESH_SCALE } from "../components/HologramR3F";
import { createRoot } from "react-dom/client";
import { delay } from "../lib/helpers";

const cameraConfig = {
  fov: 35,
  position: [0, MESH_SCALE * 2.14, MESH_SCALE * 4.5] as const,
};

const MANIFEST_URL =
  "https://dash-cdn.8i.com/1/shows/61/takes/387/manifest.mpd";

export const App = () => {
  const canvasRef = useRef(null);
  const playerRef = useRef(null);
  const cameraControlsRef = useRef(null);

  const onReady = async (player: any) => {
    await delay(1e3);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas ref={canvasRef} shadows camera={cameraConfig}>
        <ambientLight />
        <HologramR3F
          onReady={onReady}
          playerRef={playerRef}
          autoplay
          manifestURL={MANIFEST_URL}
          opacity={1}
          contrast={1}
        />
        <CameraControls ref={cameraControlsRef} />
      </Canvas>
    </div>
  );
};

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
