import React from "react";
import ProductionString from "./production-frame";

const talents = [
  {
    name: "CINEMA GRADE DIGITAL LIKENESS CAPTURE",
    description:
      "Includes personalized voice + (2D 3D 4D) motion and emotion capture",
  },
  {
    name: "PERSONAL LoRA MODELS  (PVT AI IMAGE & VIDEO GENERATOR)",
    description:
      "With a single text prompt you can create unlimited images of yourself Customized AI model trained using your proprietary LoRA data set",
  },
  {
    name: "PERSONALIZED 3D & GAME AVATARS",
    description:
      "Voice and chat avatars  |  3D Rigged Avatar (i.e. web, native)  |  Game Avatar (i.e. GTA 5, FIFA)  |   Meta-Human or AvatarOS (i.e. Unity, Unreal)",
  },
  {
    name: "Licensing",
    description:
      "Voice and chat avatars  |  3D Rigged Avatar (i.e. web, native)  |  Game Avatar (i.e. GTA 5, FIFA)  |   Meta-Human or AvatarOS (i.e. Unity, Unreal",
  },
];

const TalentCapture = () => {
  return (
    <ProductionString title="Production Services" subtitle="Talent Capture / Product" services={talents} />
  );
};

export default TalentCapture;
