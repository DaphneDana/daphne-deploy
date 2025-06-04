// src/components/about/StructureItemCard.tsx - IMPROVED
import React from 'react';
import { motion } from 'framer-motion';
import type { StructureItem } from '../../types/aboutUs';

// Specific Lucide icons needed for this component + fallback
import { BarChartHorizontalBig, Building, FlaskConical, Scale, GraduationCap, Network } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  BarChartHorizontalBig: BarChartHorizontalBig,
  Building: Building, 
  Building2: Building,
  FlaskConical: FlaskConical,
  Scale: Scale,
  GraduationCap: GraduationCap,
  Default: Network,
};

interface StructureItemCardProps {
  item: StructureItem;
}

const StructureItemCard: React.FC<StructureItemCardProps> = ({ item }) => {
  const IconComponent = iconMap[item.iconName] || iconMap.Default;

  return (
    <motion.div 
      className="rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:transform hover:-translate-y-1 relative overflow-hidden group h-full"
      style={{
        background: 'rgba(26, 35, 50, 0.7)',
        borderColor: 'rgba(64, 150, 255, 0.25)',
        backdropFilter: 'blur(10px)'
      }}
      whileHover={{ scale: 1.02 }}
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

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6">
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
            <IconComponent size={32} className="text-blue-400" />
          </div>
        </motion.div>
        
        <div className="text-center sm:text-left flex-1">
          <h4 className="font-semibold text-blue-300 text-xl md:text-2xl mb-3 group-hover:text-blue-200 transition-colors">
            {item.title}
          </h4>
          <p className="text-gray-300 leading-relaxed">
            {item.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default StructureItemCard;