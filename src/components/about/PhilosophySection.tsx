// src/components/about/PhilosophySection.tsx - IMPROVED
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import PhilosophyCard from './PhilosphopyCard';
import type { AboutUsPageData } from '../../types/aboutUs';

interface PhilosophySectionProps {
  philosophy: AboutUsPageData['philosophy'];
}

const PhilosophySection: React.FC<PhilosophySectionProps> = ({ philosophy }) => {
  const IconComponent = philosophy.iconName === 'Lightbulb' ? Lightbulb : Lightbulb;

  return (
    <section 
      className="py-16 md:py-24 relative"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <IconComponent size={48} className="text-blue-400 mr-4" />
            <h2 
              className="text-4xl md:text-5xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #4096ff, #52c4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {philosophy.title}
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {philosophy.subtitle}
          </p>
        </motion.div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {philosophy.points.map((point, index) => (
            <PhilosophyCard 
              key={index} 
              point={point} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;