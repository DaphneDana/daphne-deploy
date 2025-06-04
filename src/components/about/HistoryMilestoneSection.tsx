
// src/components/about/HistorySection.tsx - IMPROVED
import React from 'react';
import { motion } from 'framer-motion';
import {  Clock } from 'lucide-react';
import HistoryMilestoneItem from './HistroyMilestoneItem';
import type { AboutUsPageData } from '../../types/aboutUs';

interface HistorySectionProps {
  history: AboutUsPageData['history'];
}

const HistorySection: React.FC<HistorySectionProps> = ({ history }) => {
  const IconComponent = history.iconName === 'History' ? Clock : Clock; // Using Clock as History might not exist

  return (
    <section 
      className="py-16 md:py-24 relative"
      style={{
        background: 'linear-gradient(135deg, #0f1a2e 0%, #1a2332 50%, #0a0f1c 100%)'
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
              {history.title}
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {history.subtitle}
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {history.milestones.map((milestone, index) => (
              <HistoryMilestoneItem 
                key={index} 
                milestone={milestone} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
