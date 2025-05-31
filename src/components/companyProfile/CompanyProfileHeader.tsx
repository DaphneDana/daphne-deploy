// src/components/companyProfile/CompanyProfileHeader.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { CompanyProfileData } from '../../types/companyProfile'; // Adjust path
import { Download, Send } from 'lucide-react'; // Example icons

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
  // Define the path to your image
  // This assumes 'profile.jpeg' is in your 'public/images/' folder
  const backgroundImageStyle = {
    backgroundImage: `url(/images/profile.jpeg)`, 
  };

  // If your image is in 'src/assets/images/', you would import it:
  // import profileImage from '../../../assets/images/profile.jpeg'; // Adjust path
  // const backgroundImageStyle = {
  //   backgroundImage: `url(${profileImage})`,
  // };

  return (
    <motion.section 
      className="py-20 md:py-28 text-center relative overflow-hidden bg-cover bg-center" // Added bg-cover bg-center
      style={backgroundImageStyle} // Apply the background image via style
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Dark overlay to ensure text readability over the image */}
      {/* Adjust opacity (e.g., /60, /70, /80) as needed */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-dark-bg/80 to-slate-800/70"></div>

      {/* Optional: Subtle SVG pattern ON TOP of the image and overlay if desired, though might be too busy */}
      {/* 
      <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="profileHeaderPattern" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="scale(1) rotate(30)"><rect x="0" y="0" width="100%" height="100%" fill="transparent"/><path d="M0 30 L15 0 L30 30 L15 60 Z M30 30 L45 0 L60 30 L45 60 Z"  strokeWidth="1" stroke="rgba(200,200,255,0.5)" fill="transparent"/></pattern></defs><rect width="100%" height="100%" fill="url(#profileHeaderPattern)"/></svg>
      </div>
      */}
      
      <div className="container-mx relative z-10"> {/* Content needs to be above overlay */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-main-dark mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {companyName}
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-primary font-medium mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          {tagline}
        </motion.p>
        <motion.p
          className="text-base md:text-lg text-text-muted-dark max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {snapshot}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
        >
          {primaryCTAs.map((cta, index) => (
            <a
              key={index}
              href={cta.link}
              target={cta.link.startsWith('/') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`btn rounded-lg px-8 py-3 text-base font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105
                ${cta.type === 'primary' 
                  ? 'bg-primary text-white hover:bg-primary-dark' 
                  : 'bg-slate-700 text-text-main-dark hover:bg-slate-600' // Ensure these text colors are readable on the overlay
                }
              `}
            >
              {cta.text === 'Download Company Profile' && <Download size={18} className="mr-2 inline-block" />}
              {cta.text === 'Contact Us' && <Send size={18} className="mr-2 inline-block" />}
              {cta.text}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CompanyProfileHeader;