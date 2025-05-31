// src/components/careers/RoleCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { JobRole } from '../../types/careers';
import { MapPin, Briefcase, ArrowRight, ExternalLink } from 'lucide-react';

interface RoleCardProps {
  role: JobRole;
  onApplyClick: (role: JobRole) => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ role, onApplyClick }) => {
  return (
    <motion.div
      className="w-full rounded-2xl shadow-lg border transition-all duration-300 overflow-hidden group hover:-translate-y-2"
      style={{
        background: 'rgba(26, 35, 50, 0.7)',
        borderColor: 'rgba(64, 150, 255, 0.25)',
        backdropFilter: 'blur(10px)'
      }}
      whileHover={{ 
        borderColor: 'rgba(64, 150, 255, 0.4)',
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <h3 className="text-xl font-semibold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors leading-snug">
          {role.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-400">
            <MapPin size={14} className="mr-2 text-blue-400 flex-shrink-0" />
            {role.location}
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <Briefcase size={14} className="mr-2 text-blue-400 flex-shrink-0" />
            {role.department} {role.category && `• ${role.category}`}
          </div>
          {role.experienceLevel && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
              {role.experienceLevel}
            </div>
          )}
        </div>
        
        <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 mb-6">
          {role.summary}
        </p>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 pt-4 border-t border-gray-700/30 mt-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {role.jobDescriptionUrl && (
            <a
              href={role.jobDescriptionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors group/link"
            >
              Learn More
              <ExternalLink size={14} className="ml-1 transition-transform duration-300 group-hover/link:translate-x-0.5" />
            </a>
          )}
          <button
            onClick={() => onApplyClick(role)}
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center group/btn hover:scale-105 hover:shadow-lg"
          >
            Apply Now 
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default RoleCard;