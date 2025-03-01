import React from "react";
import StudioFrame from "./StudioFrame";
import ProductionString from "./ProductionFrame";

const talents = [
    {
      name: "Content Localization",
      description:
        "With a single text prompt you can create unlimited images of yourself. Customized AI model trained using your proprietary LoRA data set.",
    },
    {
      name: "Voice & Language Dubbing",
      description:
        "Voice and chat avatars | 3D Rigged Avatar (i.e. web, native) | Game Avatar (i.e. GTA 5, FIFA) | Meta-Human or AvatarOS (i.e. Unity, Unreal)",
    },
    {
      name: "Versioning",
      description:
        "Voice and chat avatars | 3D Rigged Avatar (i.e. web, native) | Game Avatar (i.e. GTA 5, FIFA) | Meta-Human or AvatarOS (i.e. Unity, Unreal)",
    },
  ];
  

const Frame327 = () => {
  return (
    <ProductionString title="Production Services" subtitle="Post-Production AI Automation" services={talents} />
  );
};

export default Frame327;
