import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface Frame305Props {
  onNavigate: (section: string) => void;
}

const items = [
  "Black Box Theatre",
  "Comfy UI Workflows",
  "Pre-vis Storyboarding",
  "Proprietary LoRA Models",
  "AI Agents & Avatars",
  "Localization & Versioning",
];


const Frame305: React.FC<Frame305Props> = ({ onNavigate }) => {
  // Stagger animation for items
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center relative w-full min-h-screen py-12">
      <motion.div 
        className="flex flex-col lg:flex-row text-white items-start justify-between gap-8 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-12 right-12">
        <Button text="back" onClick={() => onNavigate("hero")} />
        </div>
        <motion.div 
          className="w-full lg:w-7/12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <motion.p 
            className="mt-6 font-[600] text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Big Picture
          </motion.p>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-[200] mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            8i Studios is positioned to reshape creative production by merging
            human talent with AI-driven tools, offering a scalable,
            cost-effective, and innovative alternative to traditional production
            and post-production houses. With proprietary workflows, strategic
            partnerships, and a strong commitment to actor-driven content
            creation, 8i Studios is set to lead the next evolution of filmmaking
            and commercial production.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col items-start lg:items-end justify-end gap-6 w-full lg:w-auto mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Button 
            text="Generative Production" 
            onClick={() => onNavigate('generative-production')}
          />
          
          <motion.div 
            className="text-left lg:text-right flex flex-col gap-3 text-xl sm:text-2xl md:text-3xl mt-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {items.map((item, i) => (
              <motion.p 
                key={i} 
                // variants={item}
                className="hover:text-[#40FD8C] cursor-pointer transition-colors duration-300"
                // onClick={() => onNavigate(item.toLowerCase().replace(/\s+/g, '-'))}
              >
                {item}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Frame305;