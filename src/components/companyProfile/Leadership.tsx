// src/components/companyProfile/LeadershipSnapshotSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { CompanyProfileData, KeyExecutive } from '../../types/companyProfile';
import { Users, ArrowRight } from 'lucide-react';

interface LeadershipSnapshotSectionProps {
  snapshot: CompanyProfileData['leadershipSnapshot'];
}

const LeadershipSnapshotSection: React.FC<LeadershipSnapshotSectionProps> = ({ snapshot }) => {
  if (!snapshot || !snapshot.keyExecutives || snapshot.keyExecutives.length === 0) return null;

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{
        background: 'linear-gradient(135deg, #0f1a2e 0%, #1e2a3d 50%, #0a0f1c 100%)'
      }}
    >
      {/* Clear Section Separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
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
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
            <div className="relative p-3 sm:p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
              <Users size={28} className="text-blue-400 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Meet Our Leadership
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto px-4">
            Experienced visionaries guiding our mission and innovation.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12">
          {snapshot.keyExecutives.map((exec: KeyExecutive, index: number) => (
            <motion.div 
              key={index} 
              className="group relative"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div 
                className="relative p-6 sm:p-8 rounded-2xl shadow-xl text-center flex flex-col items-center transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/20 min-h-[320px] sm:min-h-[360px]"
                style={{
                  background: 'linear-gradient(135deg, #1a2332 0%, #242f42 50%, #1e2a3d 100%)'
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern 
                        id={`leaderPattern${index}`} 
                        patternUnits="userSpaceOnUse" 
                        width="40" 
                        height="40"
                      >
                        <rect x="0" y="0" width="100%" height="100%" fill="transparent"/>
                        <circle cx="20" cy="20" r="1" fill="rgba(59, 130, 246, 0.3)"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#leaderPattern${index})`}/>
                  </svg>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Border */}
                <div className="absolute inset-0 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-colors duration-500" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center h-full">
                  {/* Profile Image/Icon */}
                  {exec.imageUrl ? (
                    <div className="relative mb-4 sm:mb-6">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                      <img 
                        src="/images/blog.png"
                        alt={exec.name} 
                        className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 rounded-full object-cover border-4 border-blue-500/30 shadow-lg group-hover:border-blue-400/50 transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <div className="relative mb-4 sm:mb-6">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                      <div className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/30 border-4 border-blue-500/30 flex items-center justify-center group-hover:border-blue-400/50 transition-all duration-300">
                        <Users size={32} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                      </div>
                    </div>
                  )}
                  
                  {/* Name */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300 text-center">
                    {exec.name}
                  </h3>
                  
                  {/* Title */}
                  <p className="text-sm sm:text-base text-blue-400 font-medium mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors duration-300 text-center">
                    {exec.title}
                  </p>
                  
                  {/* Blurb */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-center flex-grow">
                    {exec.blurb}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Team CTA */}
        {snapshot.fullTeamPageLink && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              to={snapshot.fullTeamPageLink} 
              className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-400 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
            >
              <span className="text-sm sm:text-base">Meet The Full Team</span>
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        )}
      </div>
      
      {/* Bottom Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </section>
  );
};

export default LeadershipSnapshotSection;