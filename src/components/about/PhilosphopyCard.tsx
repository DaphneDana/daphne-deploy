

// src/components/about/PhilosophyCard.tsx - IMPROVED
import { motion } from 'framer-motion';
import type { PhilosophyPoint } from '../../types/aboutUs';

// Specific Lucide icons needed for this component + fallback
import { Lightbulb, Users, ShieldCheck, BarChartHorizontalBig, CheckCircle } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Lightbulb: Lightbulb,
  Users: Users,
  ShieldCheck: ShieldCheck,
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
      className="rounded-2xl p-6 border cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden group h-full flex flex-col"
      style={{
        background: 'rgba(26, 35, 50, 0.7)',
        borderColor: 'rgba(64, 150, 255, 0.25)',
        backdropFilter: 'blur(10px)'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
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

      <div className="text-center flex-1 flex flex-col">
        <motion.div
          className="mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <IconComponent size={40} className="text-blue-400 mx-auto" />
        </motion.div>
        
        <h3 className="text-xl md:text-2xl font-semibold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors">
          {point.title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed flex-1 text-sm md:text-base">
          {point.description}
        </p>
      </div>
    </motion.div>
  );
};

export default PhilosophyCard;
