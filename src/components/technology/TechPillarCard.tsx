// src/components/technology/TechPillarCard.tsx - MODERN REDESIGN
import React from 'react';
import { motion } from 'framer-motion';
import type { TechPillar } from '../../types/technology';
import * as LucideIcons from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Cpu: LucideIcons.Cpu,
  ShieldCheck: LucideIcons.ShieldCheck,
  TrendingUp: LucideIcons.TrendingUp,
  Layers: LucideIcons.Layers,
  Zap: LucideIcons.Zap,
  Eye: LucideIcons.Eye,
  Default: LucideIcons.Settings,
};

interface TechPillarCardProps {
  pillar: TechPillar;
  index: number;
}

const TechPillarCard: React.FC<TechPillarCardProps> = ({ pillar, index }) => {
  const IconComponent = iconMap[pillar.iconName] || iconMap.Default;

  return (
    <motion.div 
      className="rounded-2xl p-6 border transition-all duration-300 hover:transform hover:-translate-y-1 relative overflow-hidden group h-full flex flex-col text-center"
      style={{
        background: 'rgba(26, 35, 50, 0.7)',
        borderColor: 'rgba(64, 150, 255, 0.25)',
        backdropFilter: 'blur(10px)'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(64, 150, 255, 0.2)';
        e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.25)';
      }}
    >
      {/* Animated top border */}
      <div 
        className="absolute top-0 left-0 w-full h-0.5 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"
        style={{ background: 'linear-gradient(90deg, transparent, #4096ff, transparent)' }}
      ></div>

      <motion.div
        className="mb-6"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
          <IconComponent size={32} className="text-blue-400" />
        </div>
      </motion.div>
      
      <h3 className="text-xl font-semibold mb-3 text-blue-300 group-hover:text-blue-200 transition-colors">
        {pillar.title}
      </h3>
      <p className="text-gray-300 leading-relaxed flex-1">
        {pillar.description}
      </p>
    </motion.div>
  );
};

export default TechPillarCard;
