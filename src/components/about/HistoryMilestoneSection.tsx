// src/components/about/HistoryMilestoneItem.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { HistoryMilestone } from '../../types/aboutUs'; // Adjust path

interface HistoryMilestoneItemProps {
  milestone: HistoryMilestone;
  index: number; // For alternating layout and animation delay
}

const HistoryMilestoneItem: React.FC<HistoryMilestoneItemProps> = ({ milestone, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`mb-8 md:mb-0 flex md:items-center w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Spacer for desktop timeline alignment */}
      <div className="hidden md:block md:w-5/12"></div>
      {/* Timeline Dot for desktop */}
      <div className="hidden md:block relative md:w-2/12">
        <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-primary rounded-full border-4 border-dark-bg transform -translate-x-1/2 -translate-y-1/2 shadow-md z-10">
          <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      {/* Content Card */}
      <div 
        className={`bg-card-dark-bg p-5 md:p-6 rounded-xl shadow-xl md:w-5/12 w-full relative 
                    border-l-4 md:border-l-0 md:border-transparent border-primary 
                    md:after:hidden 
                    ${isEven ? 'md:text-left' : 'md:text-left'} 
                    after:content-[''] after:absolute after:top-1/2 after:-left-[calc(1.25rem+2px)] md:after:-left-[calc(0.625rem+2px)] 
                    after:w-0 after:h-0 
                    after:border-t-[10px] after:border-t-transparent 
                    after:border-r-[10px] after:border-r-primary 
                    after:border-b-[10px] after:border-b-transparent
                    after:-translate-y-1/2`}
        // The arrow pointer logic for mobile needs to be on the left.
        // For desktop, it might need adjustment based on isEven if you want arrows pointing to the central line.
        // For simplicity, the arrow is always on the left for mobile and hidden for desktop where the dot is central.
      >
        {/* Mobile specific marker (dot and line) */}
        <div className="md:hidden absolute -left-[calc(1.25rem+2px)] top-0 h-full"> {/* p-5 is 1.25rem */}
            <div className="absolute left-0 top-7 w-6 h-6 bg-primary rounded-full border-4 border-dark-bg flex items-center justify-center shadow-md z-10">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
            {/* Line below dot on mobile, only if not the last item */}
            {/* This vertical line connecting is better handled by the parent if it's a continuous line */}
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-primary mb-1">
          {milestone.year} - {milestone.event}
        </h3>
        {milestone.description && (
          <p className="text-sm text-text-muted-dark leading-relaxed">{milestone.description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default HistoryMilestoneItem;