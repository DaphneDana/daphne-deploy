// src/components/about/StructureItemCard.tsx
import React from 'react';
import type { StructureItem } from '../../types/aboutUs'; // Adjust path

// Specific Lucide icons needed for this component + fallback
import { BarChartHorizontalBig, Building, FlaskConical, Scale, GraduationCap, Network, Users, Lightbulb } from 'lucide-react';
// Note: 'Building2' from data will be mapped to 'Building'

const iconMap: { [key: string]: React.ElementType } = {
  BarChartHorizontalBig: BarChartHorizontalBig,
  Building: Building, 
  Building2: Building, // Mapping "Building2" to the Lucide "Building" icon
  FlaskConical: FlaskConical,
  Scale: Scale,
  GraduationCap: GraduationCap,
  Users: Users, // For structure.iconName if used
  Lightbulb: Lightbulb, // For Research & Development Wings if FlaskConical is not preferred
  Default: Network, // Fallback icon
};

interface StructureItemCardProps {
  item: StructureItem;
}

const StructureItemCard: React.FC<StructureItemCardProps> = ({ item }) => {
  const IconComponent = iconMap[item.iconName] || iconMap.Default;

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 md:p-6 bg-card-dark-bg rounded-xl shadow-lg gap-4 md:gap-5 hover:bg-slate-700/50 transition-colors duration-300">
      <IconComponent size={32} className="text-primary flex-shrink-0 sm:mt-1" />
      <div className="text-center sm:text-left">
        <h4 className="font-semibold text-text-main-dark text-lg md:text-xl mb-1">{item.title}</h4>
        <p className="text-sm text-text-muted-dark leading-relaxed">{item.text}</p>
      </div>
    </div>
  );
};

export default StructureItemCard;