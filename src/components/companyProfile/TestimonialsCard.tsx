// src/components/companyProfile/TestimonialCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { Testimonial } from '../../types/companyProfile';
import { Quote, User } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div 
      className="group relative h-full w-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="relative h-full p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20 min-h-[280px] sm:min-h-[320px]"
        style={{
          background: 'linear-gradient(135deg, #1a2332 0%, #242f42 50%, #1e2a3d 100%)'
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern 
                id="testimonialPattern" 
                patternUnits="userSpaceOnUse" 
                width="40" 
                height="40"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="transparent"/>
                <circle cx="20" cy="20" r="1" fill="rgba(59, 130, 246, 0.3)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#testimonialPattern)"/>
          </svg>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Border */}
        <div className="absolute inset-0 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-colors duration-500" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Quote Icon */}
          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300 w-12 h-12 sm:w-16 sm:h-16"></div>
            <div className="relative p-3 sm:p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-full border border-blue-500/30 backdrop-blur-sm w-fit">
              <Quote size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 sm:w-6 sm:h-6" />
            </div>
          </div>
          
          {/* Quote Text */}
          <blockquote className="text-sm sm:text-base lg:text-lg italic text-gray-300 leading-relaxed mb-6 sm:mb-8 flex-grow group-hover:text-gray-200 transition-colors duration-300">
            "{testimonial.quote}"
          </blockquote>
          
          {/* Client Info */}
          <div className="mt-auto pt-4 sm:pt-6 border-t border-gray-700/50 group-hover:border-blue-500/30 transition-colors duration-300">
            <div className="flex items-center">
              {testimonial.clientLogoUrl ? (
                <div className="relative mr-3 sm:mr-4">
                  <img 
                    src="/images/blog.png"
                    alt={`${testimonial.clientCompany} logo`}
                    className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full object-contain bg-white/10 p-1 border border-gray-600/50 group-hover:border-blue-500/30 transition-colors duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ) : (
                <div className="relative mr-3 sm:mr-4">
                  <div 
                    className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full flex items-center justify-center border border-gray-600/50 group-hover:border-blue-500/30 transition-colors duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)'
                    }}
                  >
                    <User size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 sm:w-6 sm:h-6" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <div className="flex-1">
                <p className="font-semibold text-white text-sm sm:text-base group-hover:text-blue-100 transition-colors duration-300">
                  {testimonial.clientName}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {testimonial.clientTitle}
                </p>
                <p className="text-xs sm:text-sm text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
                  {testimonial.clientCompany}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;