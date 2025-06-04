// src/components/technology/TechPageHero.tsx - MODERN REDESIGN
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Cpu } from 'lucide-react';
import type { TechnologyPageData } from '../../types/technology';

interface TechPageHeroProps {
  heroData: TechnologyPageData['hero'];
}

const TechPageHero: React.FC<TechPageHeroProps> = ({ heroData }) => {
  return (
    <motion.section
      className="py-20 md:py-32 text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
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
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <Cpu size={64} className="text-blue-400 mx-auto mb-4" />
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span 
              className="block mb-2"
              style={{
                background: 'linear-gradient(135deg, #4096ff, #52c4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {heroData.titlePrimary}
            </span>
            <span className="block text-gray-300 text-4xl sm:text-5xl lg:text-6xl">
              {heroData.titleSecondary}
            </span>
          </h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {heroData.subtitle}
          </motion.p>
          
          <motion.a
            href={heroData.cta.link}
            className="inline-flex items-center gap-2 px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg group"
            style={{
              background: 'linear-gradient(135deg, #4096ff, #52c4ff)',
              boxShadow: '0 4px 15px rgba(64, 150, 255, 0.3)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(64, 150, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(64, 150, 255, 0.3)';
            }}
          >
            {heroData.cta.text}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechPageHero;