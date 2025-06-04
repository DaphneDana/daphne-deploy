// src/components/technology/TechPillarCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { TechPillar } from '../../types/technology'; // Adjust path
import * as LucideIcons from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Cpu: LucideIcons.Cpu,
  ShieldCheck: LucideIcons.ShieldCheck, // Using ShieldCheck from Lucide
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
      className="bg-card-dark-bg p-6 rounded-xl shadow-xl hover:shadow-primary/30 transition-shadow duration-300 flex flex-col items-center text-center h-full transform hover:scale-105"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-3 bg-primary/10 rounded-full mb-5 inline-flex">
        <IconComponent size={32} className="text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-text-main-dark">{pillar.title}</h3>
      <p className="text-text-muted-dark text-sm leading-relaxed">{pillar.description}</p>
    </motion.div>
  );
};

export default TechPillarCard;