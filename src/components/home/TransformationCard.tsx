// src/components/home/TransformationHighlightCard.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

export interface TransformationHighlight {
  iconName: string;
  title: string;
  description: string;
}

interface TransformationHighlightCardProps {
  highlight: TransformationHighlight;
  index: number;
}

const iconMap: { [key: string]: React.ElementType } = {
    BrainCircuit: LucideIcons.BrainCircuit,
    Zap: LucideIcons.Zap,
    Globe: LucideIcons.Globe,
    TrendingUp: LucideIcons.TrendingUp,
    Share2: LucideIcons.Share2,
    Users: LucideIcons.Users,
    Default: LucideIcons.Lightbulb,
};

const TransformationHighlightCard: React.FC<TransformationHighlightCardProps> = ({ highlight, index }) => {
  const IconComponent = iconMap[highlight.iconName] || iconMap.Default;
  const [isFlipped, setIsFlipped] = useState(false);

  const cardEntryVariants = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.15, ease: "easeOut" }
    }
  };

  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 }
  };

  return (
    <motion.div
      variants={cardEntryVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="perspective-1000 w-full h-[280px] sm:h-[260px] md:h-[240px] cursor-pointer"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transform-style-3d"
        animate={isFlipped ? "back" : "front"}
        variants={flipVariants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of the Card (Icon and Title) */}
        <div 
            className="absolute w-full h-full backface-hidden bg-card-dark-bg p-6 rounded-xl shadow-xl flex flex-col items-center justify-center text-center border border-slate-700/50"
            // No explicit transform needed here for the front face
        >
          <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
            <IconComponent size={36} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-text-main-dark">{highlight.title}</h3>
        </div>

        {/* Back of the Card (Description) */}
        <div 
            className="absolute w-full h-full backface-hidden bg-slate-700 p-6 rounded-xl shadow-xl flex flex-col items-center justify-center text-center border border-slate-600"
            style={{ transform: 'rotateY(180deg)' }} // This pre-rotates the back face
        >
          <h4 className="text-base font-semibold text-primary mb-2 px-2">{highlight.title}</h4> {/* Title for context */}
          <p className="text-sm text-text-muted-dark leading-relaxed px-2">
            {highlight.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TransformationHighlightCard;