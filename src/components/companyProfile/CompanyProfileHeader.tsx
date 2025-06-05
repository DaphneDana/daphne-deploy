// src/components/companyProfile/CompanyProfileHeader.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { CompanyProfileData } from '../../types/companyProfile';
import { Download, Send } from 'lucide-react';

interface CompanyProfileHeaderProps {
  companyName: string;
  tagline: string;
  snapshot: string;
  primaryCTAs: CompanyProfileData['primaryCTAs'];
}

const CompanyProfileHeader: React.FC<CompanyProfileHeaderProps> = ({
  companyName,
  tagline,
  snapshot,
  primaryCTAs,
}) => {
  const backgroundImageStyle = {
    backgroundImage: `url(/images/blog.png)`, 
  };

  return (
    <motion.section 
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-cover bg-center"
      style={backgroundImageStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Dark overlay with gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-900/85 to-slate-800/80"></div>

      {/* Background pattern overlay for texture */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="headerPattern" patternUnits="userSpaceOnUse" width="60" height="60">
              <rect x="0" y="0" width="100%" height="100%" fill="transparent"/>
              <circle cx="30" cy="30" r="1.5" fill="rgba(59, 130, 246, 0.5)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#headerPattern)"/>
        </svg>
      </div>

      {/* Content container */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Company Name */}
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {companyName}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-blue-400 font-medium mb-6 sm:mb-8 leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          {tagline}
        </motion.p>

        {/* Snapshot description */}
        <motion.p
          className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {snapshot}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
        >
          {primaryCTAs.map((cta, index) => (
            <motion.a
              key={index}
              href={cta.link}
              target={cta.link.startsWith('/') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl w-full sm:w-auto justify-center
                ${cta.type === 'primary' 
                  ? 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-blue-500/25 border border-blue-500/30' 
                  : 'bg-gray-700/80 text-white hover:bg-gray-600/90 border border-gray-600/50 hover:border-gray-500/70 backdrop-blur-sm'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {cta.text === 'Download Company Profile' && (
                <Download size={18} className="mr-2 group-hover:scale-110 transition-transform duration-200 sm:w-5 sm:h-5" />
              )}
              {cta.text === 'Contact Us' && (
                <Send size={18} className="mr-2 group-hover:scale-110 transition-transform duration-200 sm:w-5 sm:h-5" />
              )}
              <span>{cta.text}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
    </motion.section>
  );
};

export default CompanyProfileHeader;