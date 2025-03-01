import React from "react";
import StudioFrame from "./StudioFrame";
import ProductionString from "./ProductionFrame";

const talents = [
    {
      name: "ComfyUI Workflows",
      description:
        "Includes personalized voice + (2D 3D 4D) motion and emotion capture",
    },
    {
      name: "Pre-Vis Storyboarding",
      description:
        "With a single text prompt you can create unlimited images of yourself. Customized AI model trained using your proprietary LoRA data set.",
    },
    {
      name: "LoRA Model Training",
      description:
        "Voice and chat avatars | 3D Rigged Avatar (i.e. web, native) | Game Avatar (i.e. GTA 5, FIFA) | Meta-Human or AvatarOS (i.e. Unity, Unreal)",
    },
    {
      name: "AI Agents & Avatars",
      description:
        "Voice and chat avatars | 3D Rigged Avatar (i.e. web, native) | Game Avatar (i.e. GTA 5, FIFA) | Meta-Human or AvatarOS (i.e. Unity, Unreal)",
    },
  ];
  

const Frame326 = () => {
  return (
    <ProductionString title="Production Services" subtitle="Generative Production" services={talents} />
  );
};

export default Frame326;
