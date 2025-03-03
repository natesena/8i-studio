import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface Frame304Props {
  onNavigate: (section: string) => void;
}

const items = [
  "Talent Likeness Capture & Licensing",
  "LED Volume",
  "4D Volumetric & Gaussian Splat",
  "Motion Capture",
  "Photogrammetry",
];


const Frame304: React.FC<Frame304Props> = ({ onNavigate }) => {
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
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center relative w-full min-h-screen py-12">
       <div className="absolute top-12 right-12">
        <Button text="back" onClick={() => onNavigate("hero")}  />
        </div>
      <motion.div 
        className="flex flex-col lg:flex-row text-white items-start justify-between gap-8 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="flex flex-col items-start justify-end gap-6 w-full lg:w-auto order-2 lg:order-1 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Button 
            text="VIRTUAL PRODUCTION" 
            onClick={() => onNavigate('virtual-production')}
            // isHomePage={false}
          />
          
          <motion.div 
            className="text-left flex flex-col gap-3 text-xl sm:text-2xl md:text-3xl mt-6"
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
        
        <motion.div 
          className="w-full lg:w-7/12 order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <motion.p 
            className="mt-6 font-[600] text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A New Era of Production Begins
          </motion.p>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-[200] mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            The 8i Generative Production Model marks a transformative moment in
            the media industry. By integrating video LoRA models, volumetric
            capture, and AI workflows, it bridges the gap between human talent
            and AI efficiency, creating an innovative and actor-driven
            production pipeline. Rather than replacing creativity, this approach
            enhances it, making it the most significant advancement in
            production since the advent of digital filmmaking.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Frame304;