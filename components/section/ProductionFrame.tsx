"use client"
import React from "react";
import { motion } from "framer-motion";

interface TalentService {
  name: string;
  description: string;
}

interface ProductionStringProps {
  title?: string;
  subtitle?: string;
  services?: TalentService[];
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

const defaultTalentServices: TalentService[] = [
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

const ProductionString: React.FC<ProductionStringProps> = ({
  title = "Production Services",
  subtitle = "Talent Capture / Product",
  services = defaultTalentServices,
  backgroundColor = "bg-neutral-100",
  textColor = "text-black",
  className = "",
}) => {
  return (
    <div 
      className={`w-full min-h-screen py-8 flex flex-col lg:flex-row justify-center lg:items-center ${backgroundColor} ${textColor} lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 ${className}`}
    >
      <motion.div 
        className="w-full lg:w-4/12 mb-8 lg:mb-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-[600] mb-2">{title}</h1>
        <p className="text-lg sm:text-xl font-[600] lg:text-right">
          {subtitle}
        </p>
      </motion.div>

      <motion.div 
        className="w-full lg:w-8/12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {services.map((service, i) => (
          <motion.div 
            key={i} 
            className="mb-6 md:mb-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
          >
            <h3 className="text-xl sm:text-2xl font-[600] border-l-4 border-gray-800 pl-3 mb-2">
              {service.name}
            </h3>
            <p className="ml-4 sm:ml-8 text-base sm:text-lg font-medium">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductionString;