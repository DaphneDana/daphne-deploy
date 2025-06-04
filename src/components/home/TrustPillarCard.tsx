// src/components/home/TrustPillarCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

interface TrustPillar {
  iconName: string;
  title: string;
  description: string;
}

interface TrustPillarCardProps {
  pillar: TrustPillar;
  index: number;
}

const iconMapTrust: { [key: string]: React.ElementType } = {
  ShieldCheck: LucideIcons.ShieldCheck,
  LockKeyhole: LucideIcons.LockKeyhole,
  Users: LucideIcons.Users,
  GitFork: LucideIcons.GitFork,
  Scale: LucideIcons.Scale,
  Default: LucideIcons.CheckCircle,
};

const TrustPillarCard: React.FC<TrustPillarCardProps> = ({ pillar, index }) => {
  const IconComponent = iconMapTrust[pillar.iconName] || iconMapTrust.Default;

  const getIconColor = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return 'text-green-400';
      case 'LockKeyhole':
        return 'text-blue-400';
      case 'GitFork':
        return 'text-purple-400';
      case 'Scale':
        return 'text-yellow-400';
      default:
        return 'text-blue-400';
    }
  };

  const getGlowColor = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return 'from-green-500/20 to-green-600/30 border-green-500/30';
      case 'LockKeyhole':
        return 'from-blue-500/20 to-blue-600/30 border-blue-500/30';
      case 'GitFork':
        return 'from-purple-500/20 to-purple-600/30 border-purple-500/30';
      case 'Scale':
        return 'from-yellow-500/20 to-yellow-600/30 border-yellow-500/30';
      default:
        return 'from-blue-500/20 to-blue-600/30 border-blue-500/30';
    }
  };

  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <div 
        className="relative h-full p-6 sm:p-8 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-all duration-500 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a2332 0%, #242f42 50%, #1e2a3d 100%)'
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern 
                id={`trustPattern${index}`} 
                patternUnits="userSpaceOnUse" 
                width="30" 
                height="30"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="transparent"/>
                <circle cx="15" cy="15" r="1.5" fill="rgba(59, 130, 246, 0.2)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#trustPattern${index})`}/>
          </svg>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start">
          {/* Icon Section */}
          <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
              <div className={`relative p-4 sm:p-5 bg-gradient-to-br ${getGlowColor(pillar.iconName)} rounded-full border backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent size={28} className={`${getIconColor(pillar.iconName)} group-hover:scale-110 transition-transform duration-300`} />
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-grow">
            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
              {pillar.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              {pillar.description}
            </p>
          </div>
        </div>

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition-colors duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default TrustPillarCard;