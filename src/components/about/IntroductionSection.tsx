
// src/components/about/IntroductionSection.tsx - NEW COMPONENT
import React from 'react';
import { motion } from 'framer-motion';

interface IntroductionSectionProps {
  introduction: string;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({ introduction }) => {
  return (
    <section 
      className="py-16 md:py-24 relative"
      style={{
        background: 'linear-gradient(135deg, #0f1a2e 0%, #1a2332 50%, #0a0f1c 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className="rounded-2xl p-8 md:p-12 border relative overflow-hidden"
            style={{
              background: 'rgba(26, 35, 50, 0.8)',
              borderColor: 'rgba(64, 150, 255, 0.3)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Decorative gradient line */}
            <div 
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: 'linear-gradient(90deg, #4096ff, #52c4ff)' }}
            ></div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {introduction}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroductionSection;