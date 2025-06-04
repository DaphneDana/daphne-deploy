// src/components/about/AboutHeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { HeroData } from '../../types/aboutUs'; // Adjust path

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
      className="py-20 md:py-28 text-center bg-gradient-to-br from-slate-900 via-dark-bg to-slate-800 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container-mx relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {IconComponent && <IconComponent size={48} className="text-primary mx-auto mb-4" />}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-main-dark mb-4">
            {heroData.title}
          </h1>
          {heroData.subtitle && (
            <p className="text-xl sm:text-2xl text-primary font-medium">
              {heroData.subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutHeroSection;