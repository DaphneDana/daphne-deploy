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
  LockKeyhole: LucideIcons.LockKeyhole, // For Security/Privacy
  Users: LucideIcons.Users, // For Inclusivity/Fairness
  GitFork: LucideIcons.GitFork, // For Transparency/Openness
  Scale: LucideIcons.Scale, // For Governance
  Default: LucideIcons.CheckCircle,
};

const TrustPillarCard: React.FC<TrustPillarCardProps> = ({ pillar, index }) => {
  const IconComponent = iconMapTrust[pillar.iconName] || iconMapTrust.Default;

  return (
    <motion.div
      className="bg-transparent p-6 rounded-xl flex flex-col items-center text-center md:items-start md:text-left md:flex-row md:gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="flex-shrink-0 mb-4 md:mb-0 p-4 bg-primary/10 rounded-full inline-flex items-center justify-center">
        <IconComponent size={32} className="text-primary" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-text-main-dark mb-2">{pillar.title}</h3>
        <p className="text-sm text-text-muted-dark leading-relaxed">{pillar.description}</p>
      </div>
    </motion.div>
  );
};

export default TrustPillarCard;