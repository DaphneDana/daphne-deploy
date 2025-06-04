// src/components/about/StructureSection.tsx - IMPROVED
import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import StructureItemCard from './StructureItemCard';
import type { AboutUsPageData } from '../../types/aboutUs';

interface StructureSectionProps {
  structure: AboutUsPageData['structure'];
}

const StructureSection: React.FC<StructureSectionProps> = ({ structure }) => {
  const IconComponent = structure.iconName === 'Users' ? Users : Users;

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
              {structure.title}
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {structure.subtitle}
          </p>
          
          {/* Introductory Text */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div 
              className="rounded-xl p-6 md:p-8 border"
              style={{
                background: 'rgba(26, 35, 50, 0.6)',
                borderColor: 'rgba(64, 150, 255, 0.2)'
              }}
            >
              <p className="text-gray-300 leading-relaxed">
                {structure.introductoryText}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Structure Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {structure.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <StructureItemCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
