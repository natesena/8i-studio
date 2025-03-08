import React from "react";
import { motion } from "framer-motion";
const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full"
      />
    </div>
  );
};

export { Loader };
