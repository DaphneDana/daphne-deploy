// src/components/careers/ApplicationStepItem.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { ApplicationStep } from '../../types/careers';
import * as LucideIcons from 'lucide-react';

interface ApplicationStepItemProps {
  step: ApplicationStep;
  isLast: boolean;
}

const ApplicationStepItem: React.FC<ApplicationStepItemProps> = ({ step, isLast }) => {
  // @ts-ignore Dynamically access icon component
  const IconComponent = LucideIcons[step.iconName] || LucideIcons.HelpCircle;

  return (
    <motion.div 
      className="relative flex flex-col items-center text-center lg:flex-1 lg:items-start lg:text-left"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center lg:flex-row lg:items-start w-full">
        <div className="relative mb-4 lg:mb-0 lg:mr-6">
          <div 
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
              border: '2px solid rgba(59, 130, 246, 0.3)'
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <IconComponent size={32} strokeWidth={1.5} className="text-blue-400 relative z-10" />
            
            {/* Step number badge */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {step.stepNumber}
            </div>
          </div>
        </div>
        
        <div className="lg:mt-1 flex-1">
          <h4 className="text-lg font-semibold text-blue-300 mb-2">
            {step.title}
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ApplicationStepItem;