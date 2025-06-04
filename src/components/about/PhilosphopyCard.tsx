// src/components/about/PhilosophyCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { PhilosophyPoint } from '../../types/aboutUs'; // Adjust path

// Specific Lucide icons needed for this component + fallback
import { Lightbulb, Users, ShieldCheck, BarChartHorizontalBig, CheckCircle } from 'lucide-react'; // Added ShieldCheck from Lucide

const iconMap: { [key: string]: React.ElementType } = {
  Lightbulb: Lightbulb,
  Users: Users,
  ShieldCheck: ShieldCheck, // Assuming this is the one you want
  BarChartHorizontalBig: BarChartHorizontalBig,
  Default: CheckCircle, // Fallback icon
};

interface PhilosophyCardProps {
  point: PhilosophyPoint;
  index: number; 
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ point, index }) => {
  const IconComponent = iconMap[point.iconName] || iconMap.Default;

  return (
    <motion.div
      className="bg-card-dark-bg p-6 rounded-xl shadow-lg text-center h-full flex flex-col items-center hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1.5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <IconComponent size={36} className="text-primary mb-4" />
      <h3 className="text-xl font-semibold text-text-main-dark mb-2">{point.title}</h3>
      <p className="text-sm text-text-muted-dark leading-relaxed flex-grow">{point.description}</p>
    </motion.div>
  );
};

export default PhilosophyCard;