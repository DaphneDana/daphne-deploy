// src/components/careers/ApplicationProcedureSection.tsx
import React from 'react';
import type { ApplicationStep } from '../../types/careers';
import ApplicationStepItem from './ApplicationStepItem';

interface ApplicationProcedureSectionProps {
  steps: ApplicationStep[];
  id: string;
}

const ApplicationProcedureSection: React.FC<ApplicationProcedureSectionProps> = ({ steps, id }) => {
  return (
    <section 
      id={id} 
      className="py-16 md:py-24"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4">Application Process</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Follow these simple steps to join our innovative team at LLP.
          </p>
        </div>
        
        {/* Steps layout - Responsive Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Mobile & Tablet: Vertical Layout */}
          <div className="flex flex-col gap-6 lg:hidden">
            {steps.map((step, index) => (
              <React.Fragment key={step.stepNumber}>
                <div className="w-full">
                  <ApplicationStepItem step={step} />
                </div>
                {/* Vertical connector for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center">
                    <div className="h-8 w-0.5 bg-gradient-to-b from-blue-500/50 to-cyan-500/50"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Desktop: Horizontal Layout */}
          <div className="hidden lg:flex lg:justify-between lg:items-start gap-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.stepNumber}>
                <div className="flex-1 min-w-0">
                  <ApplicationStepItem step={step} />
                </div>
                {/* Horizontal connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="flex items-center justify-center flex-shrink-0 pt-8">
                    <div className="w-12 xl:w-16 h-px bg-gradient-to-r from-blue-500/50 to-cyan-500/50"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Tip Section */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <div 
            className="rounded-xl p-4 sm:p-6"
            style={{
              background: 'rgba(26, 35, 50, 0.6)',
              borderColor: 'rgba(64, 150, 255, 0.2)'
            }}
          >
            <p className="text-sm text-gray-400 italic">
              💡 <strong>Tip:</strong> Tailor your CV and cover letter to highlight projects and experiences relevant to the role you're applying for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcedureSection;