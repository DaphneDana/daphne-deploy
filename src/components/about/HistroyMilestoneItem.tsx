// src/components/about/HistoryMilestoneItem.tsx - IMPROVED
import React from 'react';
import { motion } from 'framer-motion';
import type { HistoryMilestone } from '../../types/aboutUs';

interface HistoryMilestoneItemProps {
  milestone: HistoryMilestone;
  index: number;
}

const HistoryMilestoneItem: React.FC<HistoryMilestoneItemProps> = ({ milestone, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-center w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Desktop Layout */}
      <div className="hidden md:block md:w-5/12"></div>
      
      {/* Timeline Dot for Desktop */}
      <div className="hidden md:flex relative md:w-2/12 justify-center">
        <motion.div 
          className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-slate-900 shadow-lg z-10 flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div 
        className={`bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg p-6 md:p-8 rounded-2xl border shadow-xl md:w-5/12 w-full relative ml-12 md:ml-0
                    border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-blue-500/20`}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Mobile Timeline Dot */}
        <div className="md:hidden absolute -left-[calc(3rem+2px)] top-8">
          <motion.div 
            className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-slate-900 shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </motion.div>
        </div>

        {/* Decorative gradient line */}
        <div 
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{ background: 'linear-gradient(90deg, #4096ff, #52c4ff)' }}
        ></div>

        <div className="text-center md:text-left">
          <motion.h3 
            className="text-xl md:text-2xl font-bold text-blue-300 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {milestone.year}
          </motion.h3>
          
          <motion.h4 
            className="text-lg md:text-xl font-semibold text-white mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {milestone.event}
          </motion.h4>
          
          {milestone.description && (
            <motion.p 
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {milestone.description}
            </motion.p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HistoryMilestoneItem;
