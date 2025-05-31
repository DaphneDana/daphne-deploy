// src/components/careers/CareersHeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface CareersHeroSectionProps {
  onSeeOpenPositionsClick: () => void;
}

const CareersHeroSection: React.FC<CareersHeroSectionProps> = ({ onSeeOpenPositionsClick }) => {
  return (
    <motion.section 
      className="min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center py-20 md:py-28 relative overflow-hidden bg-cover bg-center"
      // Apply the background image directly here
      style={{ backgroundImage: `url(/images/LLP.jpeg)` }} // Assuming LLP.jpeg is in your `public/images/` folder
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dark overlay to ensure text readability over the image */}
      <div className="absolute inset-0 bg-slate-900/70 via-dark-bg/80 to-slate-800/70"></div>
      
      <div className="container-mx relative z-10">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-main-dark mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Build the Future <span className="text-primary">With Us</span>
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl text-text-muted-dark max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Innovative. Inclusive. Impact-Driven. Join LLP and shape the future of AI.
        </motion.p>
        <motion.button
          onClick={onSeeOpenPositionsClick}
          className="btn btn-primary px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-primary/40 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See Open Positions
        </motion.button>
      </div>
    </motion.section>
  );
};

export default CareersHeroSection;