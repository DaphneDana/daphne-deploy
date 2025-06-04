// src/components/about/AboutHeroSection.tsx - IMPROVED
import React from 'react';
import { motion } from 'framer-motion';
import type { HeroData } from '../../types/aboutUs';

// Specific Lucide icons needed for this component + fallback
import { Building, Info } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Building: Building,
  Info: Info, // Fallback
};

interface AboutHeroSectionProps {
  heroData: HeroData;
}

const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({ heroData }) => {
  const IconComponent = heroData.iconName && iconMap[heroData.iconName] 
    ? iconMap[heroData.iconName] 
    : iconMap.Info; 

  return (
    <motion.section
      className="py-20 md:py-32 text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {IconComponent && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mb-6"
            >
              <IconComponent size={64} className="text-blue-400 mx-auto mb-4" />
            </motion.div>
          )}
          
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #4096ff, #52c4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {heroData.title}
          </h1>
          
          {heroData.subtitle && (
            <motion.p 
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {heroData.subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutHeroSection;