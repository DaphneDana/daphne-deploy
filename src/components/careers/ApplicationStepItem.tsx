// src/components/careers/ApplicationStepItem.tsx
import React from 'react';
import type { ApplicationStep } from '../../types/careers';
import * as LucideIcons from 'lucide-react';

interface ApplicationStepItemProps {
  step: ApplicationStep;
}

const ApplicationStepItem: React.FC<ApplicationStepItemProps> = ({ step }) => {
  // @ts-ignore Dynamically access icon component
  const IconComponent = LucideIcons[step.iconName] || LucideIcons.HelpCircle;

  return (
    <div 
      className="relative w-full animate-fade-in-up"
      style={{ animationDelay: `${step.stepNumber * 0.2}s` }}
    >
      {/* Mobile & Tablet Layout */}
      <div className="flex items-start gap-4 lg:hidden">
        <div className="flex-shrink-0">
          <div 
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
              border: '2px solid rgba(59, 130, 246, 0.3)'
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <IconComponent size={24} strokeWidth={1.5} className="text-blue-400 relative z-10" />
            
            {/* Step number badge */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {step.stepNumber}
            </div>
          </div>
        </div>
        
        <div className="flex-1 min-w-0 pt-1">
          <h4 className="text-lg font-semibold text-blue-300 mb-2 leading-tight">
            {step.title}
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:text-center">
        <div className="mb-4">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden group mx-auto"
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
        
        <div className="max-w-xs">
          <h4 className="text-lg font-semibold text-blue-300 mb-2 leading-tight">
            {step.title}
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStepItem;

