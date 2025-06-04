// src/components/technology/TechStackIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { TechStackItem } from '../../types/technology'; // Adjust path

interface TechStackIconProps {
  tech: TechStackItem;
  index: number;
}

const TechStackIcon: React.FC<TechStackIconProps> = ({ tech, index }) => {
  return (
    <motion.div
      className="group flex flex-col items-center text-center p-3 transition-all duration-300 hover:bg-slate-700/50 rounded-lg"
      title={tech.description || tech.name} // Show description on hover
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }} // Staggering handled by parent
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {tech.logoUrl ? (
        <img 
          src={tech.logoUrl} 
          alt={`${tech.name} logo`} 
          className="h-12 w-12 md:h-14 md:w-14 object-contain mb-2 transition-transform duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0 brightness-150 group-hover:brightness-100"
          // Example: starts grayscale, colorizes and brightens on hover
        />
      ) : (
        <div className="h-12 w-12 md:h-14 md:w-14 bg-slate-600 rounded-md flex items-center justify-center text-primary text-2xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
          {tech.name.substring(0, 2)}
        </div>
      )}
      <p className="text-xs text-text-muted-dark group-hover:text-text-main-dark transition-colors duration-300">{tech.name}</p>
    </motion.div>
  );
};

export default TechStackIcon;