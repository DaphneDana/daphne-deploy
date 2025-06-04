// src/components/technology/TechStackItem.tsx - MODERN REDESIGN
import React from 'react';
import { motion } from 'framer-motion';
import type { TechStackItem } from '../../types/technology';

interface TechStackIconProps {
  tech: TechStackItem;
  index: number;
}

const TechStackIcon: React.FC<TechStackIconProps> = ({ tech, index }) => {
  return (
    <motion.div
      className="group flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1 border border-transparent hover:border-blue-500/30"
      style={{
        background: 'rgba(26, 35, 50, 0.4)',
      }}
      title={tech.description || tech.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.05,
        background: 'rgba(64, 150, 255, 0.1)'
      }}
    >
      {tech.logoUrl ? (
        <div className="w-12 h-12 md:w-14 md:h-14 mb-3 relative">
          <img 
            src={tech.logoUrl} 
            alt={`${tech.name} logo`} 
            className="w-full h-full object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
          />
        </div>
      ) : (
        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 text-lg font-bold mb-3 group-hover:scale-110 transition-transform duration-300">
          {tech.name.substring(0, 2)}
        </div>
      )}
      <p className="text-xs text-gray-400 group-hover:text-blue-300 transition-colors duration-300 font-medium">
        {tech.name}
      </p>
    </motion.div>
  );
};

export default TechStackIcon;