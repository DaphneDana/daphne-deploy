// src/components/companyProfile/AboutCompanySection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { CompanyProfileData } from '../../types/companyProfile';
import { Target, BookOpen, Zap } from 'lucide-react';

interface AboutCompanySectionProps {
  overview: CompanyProfileData['overview'];
}

const SectionCard: React.FC<{
  title: string; 
  icon: React.ElementType; 
  children: React.ReactNode;
  index: number;
}> = ({title, icon: Icon, children, index}) => (
  <motion.div 
    className="group h-full w-full"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <div 
      className="relative h-full w-full p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a2332 0%, #242f42 50%, #1e2a3d 100%)'
      }}
    >
      {/* Card Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern 
              id={`cardPattern${index}`} 
              patternUnits="userSpaceOnUse" 
              width="40" 
              height="40"
            >
              <rect x="0" y="0" width="100%" height="100%" fill="transparent"/>
              <circle cx="20" cy="20" r="1" fill="rgba(59, 130, 246, 0.3)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#cardPattern${index})`}/>
        </svg>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center mb-4 sm:mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
            <div className="relative p-2 sm:p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <Icon size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 sm:w-6 sm:h-6" />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white ml-3 sm:ml-4 group-hover:text-blue-100 transition-colors duration-300">
            {title}
          </h3>
        </div>
        <div className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 flex-grow text-sm sm:text-base">
          {children}
        </div>
      </div>

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-colors duration-500" />
    </div>
  </motion.div>
);

const AboutCompanySection: React.FC<AboutCompanySectionProps> = ({ overview }) => {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background: 'linear-gradient(135deg, #0f1a2e 0%, #1e2a3d 50%, #0a0f1c 100%)'
      }}
    >
      {/* Clear Section Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-2 mb-4 sm:mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
            <Target size={14} className="text-blue-400 mr-2 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm text-blue-300 font-medium">About Our Company</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Empowering Innovation Through AI
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto px-4">
            Discover our mission, journey, and what sets us apart in the AI landscape
          </p>
        </motion.div>

        {/* Cards Grid - Centered and Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          <SectionCard title="Our Mission" icon={Target} index={0}>
            <p className="leading-relaxed">
              {overview.missionStatement}
            </p>
          </SectionCard>
          
          <SectionCard title="Brief History" icon={BookOpen} index={1}>
            <p className="leading-relaxed">
              {overview.history}
            </p>
          </SectionCard>
          
          <SectionCard title="Core Differentiators" icon={Zap} index={2}>
            <ul className="space-y-2 sm:space-y-3">
              {overview.coreDifferentiators.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start group/item"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-2 sm:mt-2.5 mr-2 sm:mr-3 group-hover/item:bg-blue-300 transition-colors duration-200" />
                  <span className="leading-relaxed group-hover/item:text-white transition-colors duration-200">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>
      
      {/* Bottom Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </section>
  );
};

export default AboutCompanySection;