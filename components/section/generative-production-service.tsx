"use client";
import React from "react";
import { Slide } from "../ui/slide";
import { motion } from "framer-motion";
type TalentProps = {
  name: string;
  description: string;
  src: string;
  type: "image" | "video";
};
const talents: TalentProps[] = [
  {
    name: "ComfyUI Workflows",
    description:
      "Includes personalized voice + (2D 3D 4D) motion and emotion capture",
    src: "/images/ComfyUI 00003 AI Content.png",
    type: "image",
  },
  {
    name: "Pre-Vis Storyboarding",
    description:
      "With a single text prompt you can create unlimited images of yourself. Customized AI model trained using your proprietary LoRA data set.",
    src: "/images/volumetric-production/ComfyUI 05007.png",
    type: "image",
  },
  {
    name: "LoRA Model Training",
    description:
      "Voice and chat avatars | 3D Rigged Avatar (i.e. web, native) | Game Avatar (i.e. GTA 5, FIFA) | Meta-Human or AvatarOS (i.e. Unity, Unreal)",
    src: "/videos/volumetric-production/AI Generated Upscaled.mp4",
    type: "video",
  },
  {
    name: "AI Agents & Avatars",
    description:
      "Voice and chat avatars | 3D Rigged Avatar (i.e. web, native) | Game Avatar (i.e. GTA 5, FIFA) | Meta-Human or AvatarOS (i.e. Unity, Unreal)",
    src: "/videos/volumetric-production/AI Generated Upscaled.mp4",
    type: "video",
  },
];

const GenerativeProductionService = () => {
  return (
    <div
      className={`w-full min-h-screen py-8 flex flex-col lg:flex-row justify-between lg:items-center bg-neutral-100 text-black lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-12`}
    >
      <motion.div
        className="w-full lg:w-4/12 mb-8 lg:mb-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-[600] mb-2">
          Production Services
        </h1>
        <p className="text-lg sm:text-2xl font-[600] lg:text-right">
          Generative Production
        </p>
      </motion.div>
      <div className="max-w-4xl h-full">
        {/* <Tabs projects={projects} /> */}
        <div className="wrapper">
          <div className="slider-container">
            {talents.map((talent, index) => (
              <Slide
                key={index}
                src={talent.src}
                title={talent.name}
                description={talent.description}
                type={talent.type}
                bg="bg-neutral-200"
                textColor="text-black"
              />
            ))}
          </div>
        </div>
      </div>

      {/* <ProductionString title="Production Services" subtitle="Generative Production" services={talents} /> */}
    </div>
  );
};

export default GenerativeProductionService;
