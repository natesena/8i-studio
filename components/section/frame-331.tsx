import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface Frame331Props {
  onNavigate: (section: string) => void;
}

const names = [
  "Dor Brothers",
  "King Mkr",
  "Midjourney Man",
  "Nem Perez",
  "Lovis Oden",
  "Luka Tsler",
  "Shane3D",
  "Blair Vermette",
];

const Frame331: React.FC<Frame331Props> = ({ onNavigate }) => {
  // Stagger animation for director names
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Text reveal animation
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full min-h-screen flex flex-col lg:flex-row text-white items-center justify-between gap-8 py-12">
      <div className="absolute top-12 right-12">
        <Button text="back" onClick={() => onNavigate("hero")} isHomePage={false} />
      </div>
      {/* Main content area */}
      <motion.div
        className="w-full lg:w-7/12"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button text="DIRECTORS" onClick={() => onNavigate("directors")} isHomePage={false} />
        </motion.div>

        <motion.p
          className="mt-6 font-[600] text-xl md:text-2xl"
          variants={textReveal}
          initial="hidden"
          animate="show"
        >
          Big Picture
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl mt-4 font-[300]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
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

      {/* Director names column */}
      <motion.div
        className="text-center flex flex-col gap-4 text-xl sm:text-2xl md:text-3xl mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        variants={container}
        // initial="hidden"
        // animate="show"
      >
        {names.map((name, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{
              scale: 1.05,
              color: "#40FD8C",
              x: 5,
            }}
            className="cursor-pointer transition-all duration-300"
            onClick={() => onNavigate(name.toLowerCase().replace(/\s+/g, "-"))}
          >
            <p>{name}</p>
            <motion.div
              className="h-px bg-[#40FD8C]/30 w-0 mx-auto mt-1"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Frame331;
