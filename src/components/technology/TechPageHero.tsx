// src/components/technology/TechPageHero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Cpu } from 'lucide-react'; // Example icons
import type { TechnologyPageData } from '../../types/technology'; // Adjust path

interface TechPageHeroProps {
  heroData: TechnologyPageData['hero'];
}

const TechPageHero: React.FC<TechPageHeroProps> = ({ heroData }) => {
  return (
    <motion.section
      className="relative py-24 md:py-36 bg-gradient-to-br from-slate-900 via-blue-950 to-dark-bg text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-primary/${i === 0 ? '20' : i === 1 ? '10' : '5'}`}
            style={{
              width: `${200 + i * 150}px`,
              height: `${200 + i * 150}px`,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.05, 1],
              x: [`${i * 5}%`, `${i * 5 + (i % 2 === 0 ? 2 : -2)}%`, `${i * 5}%`],
              y: [`${i * 2}%`, `${i * 2 + (i % 2 === 0 ? -2 : 2)}%`, `${i * 2}%`],
            }}
            transition={{ duration: 10 + i * 5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          />
        ))}
      </div>
      
      <div className="container-mx relative z-10 text-center">
        <motion.div
            initial={{ opacity:0, y:20}}
            animate={{ opacity:1, y:0}}
            transition={{duration: 0.6, delay: 0.2}}
        >
            <Cpu size={48} className="text-primary mx-auto mb-6" />
        </motion.div>
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
            {heroData.titlePrimary}
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl text-slate-300 mt-1">
            {heroData.titleSecondary} at LLP
          </span>
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-text-muted-dark max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {heroData.subtitle}
        </motion.p>
        <motion.a
          href={heroData.cta.link}
          className="btn btn-primary px-8 py-3.5 text-base md:text-lg font-semibold rounded-lg shadow-xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7, type: 'spring', stiffness: 100 }}
        >
          {heroData.cta.text} <ChevronRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
      </div>
    </motion.section>
  );
};

export default TechPageHero;