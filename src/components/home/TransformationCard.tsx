// src/components/home/TransformationCard.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

export interface TransformationHighlight {
  iconName: string;
  title: string;
  description: string;
}

interface TransformationHighlightCardProps {
  highlight: TransformationHighlight;
  index: number;
}

const iconMap: { [key: string]: React.ElementType } = {
  BrainCircuit: LucideIcons.BrainCircuit,
  Zap: LucideIcons.Zap,
  Globe: LucideIcons.Globe,
  TrendingUp: LucideIcons.TrendingUp,
  Share2: LucideIcons.Share2,
  Users: LucideIcons.Users,
  Default: LucideIcons.Lightbulb,
};

const TransformationHighlightCard: React.FC<TransformationHighlightCardProps> = ({ highlight, index }) => {
  const IconComponent = iconMap[highlight.iconName] || iconMap.Default;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      <div 
        className="relative h-full min-h-[280px] p-6 sm:p-8 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-all duration-500 overflow-hidden cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, #1a2332 0%, #242f42 50%, #1e2a3d 100%)'
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern 
                id={`transformPattern${index}`} 
                patternUnits="userSpaceOnUse" 
                width="60" 
                height="60"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="transparent"/>
                <path 
                  d="M30 10 L50 30 L30 50 L10 30 Z" 
                  stroke="rgba(59, 130, 246, 0.2)" 
                  strokeWidth="1" 
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#transformPattern${index})`}/>
          </svg>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Icon Section */}
          <div className="flex justify-center mb-6">
            <motion.div 
              className="relative"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0 
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative p-4 sm:p-5 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-full border border-blue-500/30 backdrop-blur-sm">
                <IconComponent size={32} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
            </motion.div>
          </div>
          
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-4 group-hover:text-blue-100 transition-colors duration-300">
            {highlight.title}
          </h3>
          
          {/* Description */}
          <motion.div
            className="flex-grow flex items-center"
            initial={{ opacity: isHovered ? 0 : 1 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isHovered && (
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">
                {highlight.description}
              </p>
            )}
          </motion.div>
          
          {/* Hover Indicator */}
          <div className="flex justify-center mt-auto pt-4">
            <motion.div
              className="w-8 h-1 bg-blue-500/30 rounded-full group-hover:bg-blue-400/60 transition-colors duration-300"
              animate={{ width: isHovered ? 32 : 16 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-colors duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default TransformationHighlightCard;