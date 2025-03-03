"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  isHomePage?: boolean;
}

const Button = ({ text, onClick, color = 'primary', isHomePage }: ButtonProps) => {
  // Use pathname to determine if we're on the homepage
  const pathname = usePathname();
  const isHome = isHomePage !== undefined ? isHomePage : pathname === '/';

  // Define color schemes
  const colorSchemes = {
    primary: {
      border: '#3B82F6',
      text: 'black',
      hoverBg: '#3B82F6',
      shadow: 'rgba(59, 130, 246, 0.3)',
    },
    secondary: {
      border: '#6B7280',
      text: '#6B7280',
      hoverBg: '#6B7280',
      shadow: 'rgba(107, 114, 128, 0.3)',
    },
    success: {
      border: '#10B981',
      text: '#10B981',
      hoverBg: '#10B981',
      shadow: 'rgba(16, 185, 129, 0.3)',
    },
    danger: {
      border: '#EF4444',
      text: '#EF4444',
      hoverBg: '#EF4444',
      shadow: 'rgba(239, 68, 68, 0.3)',
    },
  };

  const selectedColor = colorSchemes[color];
  
  return (
    <motion.button
      onClick={onClick}
      className="px-4 md:px-6 py-1 md:py-3 rounded-md md:rounded-lg bg-white/10 font-medium relative overflow-hidden"
      style={{ 
        border: `1px solid #40FD8C`,
        color: isHome ? '#fff' : '#000',
        boxShadow: `0 2px 8px transparent` 
      }}
      whileHover={{ 
        scale: 1.05,
        color: isHome ? '#FFFFFF' : '#000000',
        boxShadow: `0 4px 12px ${selectedColor.shadow}`,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.3,
          ease: "easeOut"
        }
      }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.2 }}
        className={`relative z-10 text-sm md:text-xl font-[600] ${isHome ? 'text-white' : 'text-black'}`}
      >
        {text}
      </motion.span>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ 
          scale: 1, 
          opacity: 1,
          transition: { duration: 0.2 }
        }}
        style={{ 
          background: selectedColor.hoverBg,
          transformOrigin: 'center'
        }}
      />
    </motion.button>
  );
};

export { Button };