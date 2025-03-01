"use client"
import React from "react";
import { motion } from "framer-motion";

const Frame310 = () => {
  return (
    <div className="w-full bg-neutral-100 min-h-screen px-4 py-8 md:px-8 lg:px-12 flex flex-col lg:flex-row justify-center lg:items-center gap-8 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-5/12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-[600] leading-tight">
          STUDIOS NETWORK
        </h1>
        <div className="mt-4 md:mt-6 overflow-x-auto pb-2">
          <h2 className="text-base sm:text-lg md:text-xl font-[600] whitespace-nowrap">
            New York <span className="mx-2 md:mx-3">|</span> 
            Los Angeles <span className="mx-2 md:mx-3">|</span> 
            Berlin <span className="mx-2 md:mx-3">|</span> 
            Tokyo
          </h2>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-6/12"
      >
        <h1 className="mb-3 md:mb-4 font-[600] text-base sm:text-lg md:text-xl">
          Global Network of Virtual Production Studios
        </h1>
        <p className="text-base sm:text-lg leading-relaxed">
          8i Studios represents a new frontier in film and commercial production
          by merging virtual production technologies with proprietary AI-driven
          workflows. This new model, called Generative Production, transforms
          how talent, directors, and studios collaborate by introducing
          groundbreaking innovations in video LoRA models, volumetric capture,
          and vid2vid workflows
        </p>
      </motion.div>
    </div>
  );
};

export default Frame310;