import React from "react";
import StudioFrame from "./studio-frame";
import ProductionString from "./production-frame";

const talents = [
    {
      name: "ICMX Volume Capture",
      description:
        "Includes personalized voice + (2D 3D 4D) motion and emotion capture",
    },
    {
      name: "4D Volumetric Capture (5’, 12’, 40’)",
      description:
        "With a single text prompt you can create unlimited images of",
    },
    {
      name: "Gaussian Splat Volumetric Capture (5’)",
      description:
        "With a single text prompt you can create unlimited images of",
    },
    {
      name: "Motion Capture (Vicon + Markerless)",
      description:
        "Voice and chat avatars | 3D Rigged Avatar (i.e. web, native) | Game Avatar (i.e. GTA 5, FIFA) | Meta-Human or AvatarOS (i.e. Unity, Unreal)",
    },
    {
      name: "Black Box Theatre",
      description:
        "Voice and chat avatars | 3D Rigged Avatar (i.e. web, native) | Game Avatar (i.e. GTA 5, FIFA) | Meta-Human or AvatarOS (i.e. Unity, Unreal)",
    },
  ];
  

const ICMXVolumeCapture = () => {
  return (
    <ProductionString title="Production Services" subtitle="Virtual Production" services={talents} />
  );
};

export default ICMXVolumeCapture;
