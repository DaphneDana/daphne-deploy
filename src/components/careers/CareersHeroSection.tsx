// src/components/careers/CareersHeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion'; // Ensure framer-motion is imported

interface CareersHeroSectionProps {
  onSeeOpenPositionsClick: () => void;
}

const CareersHeroSection: React.FC<CareersHeroSectionProps> = ({ onSeeOpenPositionsClick }) => {
  const headlineText = "Build the Future With Us";
  // Split into words. The "With Us" part will be styled differently later.
  // For simplicity, we'll animate "Build", "the", "Future", "With", "Us"
  const words = headlineText.split(" ");

  const headlineContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Time between each word animating in
        delayChildren: 0.2,    // Initial delay before the first word starts
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 25, rotateX: -30, transformOrigin: "bottom" },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.7,
      },
    },
  };

  // Variants for the paragraph and button for a cohesive entrance
  const otherElementsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center py-20 md:py-28 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(/images/LLP.jpeg)` }} // Assuming LLP.jpeg is in public/images/
      initial={{ opacity: 0 }} // Section fade-in
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dark overlay to ensure text readability over the image */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-dark-bg/85 to-slate-800/75"></div> 
      {/* Slightly increased opacity for better text pop */}
      
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-main-dark mb-3 sm:mb-4 [text-shadow:0_1px_5px_rgba(0,0,0,0.5)]"
          variants={headlineContainerVariants}
          initial="hidden"
          whileInView="visible" // Trigger animation when section is in view
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% is visible, once
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className={`inline-block mr-1.5 sm:mr-2 md:mr-3 ${
                (word === "With" || word === "Us") ? 'text-primary' : ''
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-text-muted-dark max-w-2xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0 [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]"
          variants={otherElementsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: words.length * 0.15 + 0.3 }} // Delay after headline
        >
          Innovative. Inclusive. Impact-Driven. Join LLP and shape the future of AI.
        </motion.p>
        <motion.button
          onClick={onSeeOpenPositionsClick}
          className="btn btn-primary px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold rounded-lg shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 w-auto" // Removed w-full sm:w-auto for better centering control by parent
          variants={otherElementsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: words.length * 0.15 + 0.5 }} // Delay after paragraph
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          See Open Positions
        </motion.button>
      </div>
    </motion.section>
  );
};

export default CareersHeroSection;