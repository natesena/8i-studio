import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Slide } from "../ui/slide";
import { generativeProduction } from "@/data/generative-production";
interface GenerativeProductionProps {
  onNavigate: (section: string) => void;
}

const GenerativeProduction: React.FC<GenerativeProductionProps> = ({
  onNavigate,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center relative w-full min-h-screen py-12">
      <motion.div
        className="flex flex-col text-white items-start justify-between gap-8 w-full mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-8 md:top-12 right-8 md:right-12">
          <Button text="back" onClick={() => onNavigate("hero")} />
        </div>
        <div className="flex flex-col lg:flex-row text-white items-start justify-between gap-8 w-full mt-12">
          <motion.div
            className="flex flex-col items-start lg:items-start justify-start gap-6 w-full lg:w-auto mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Button
              text="Generative Production"
              onClick={() => onNavigate("generative-production")}
            />
            <div className="max-w-3xl h-fit w-screen md:h-full">
              {/* <Tabs projects={projects} /> */}
              <div className="wrapper">
                <div className="slider-container">
                  {generativeProduction.map((project, index) => (
                    <Slide
                      key={index}
                      src={project.src}
                      title={project.title}
                      // description={project.description}
                      type={project.type as "image" | "video"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-7/12 text-end"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <motion.p
              className="mt-6 font-[600] text-xl md:text-6xl"
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
              cost-effective, and innovative alternative to traditional
              production and post-production houses. With proprietary workflows,
              strategic partnerships, and a strong commitment to actor-driven
              content creation, 8i Studios is set to lead the next evolution of
              filmmaking and commercial production.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default GenerativeProduction;
