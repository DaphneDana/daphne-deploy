// src/components/technology/TechStackItem.tsx - SMALLER ICONS & BETTER LAYOUT
import React from 'react';
import { motion } from 'framer-motion';
import type { TechStackItem } from '../../types/technology';
import { 
  // Core AI/ML Icons
  Brain, Code, Database, Activity, Layers, GitBranch,
  // Data Processing Icons
  Zap, Server, HardDrive, BarChart3, Workflow,
  // DevOps & Cloud Icons
  Cloud, Container, Settings, GitMerge,
  // Frontend & Visualization Icons
  Monitor, PieChart, TrendingUp,
  // Fallback Icon
  Cpu
} from 'lucide-react';

// Icon mapping for technologies
const technologyIconMap: { [key: string]: React.ElementType } = {
  // Core AI/ML
  'Python': Code,
  'TensorFlow': Brain,
  'PyTorch': Brain,
  'Scikit-learn': Activity,
  'Keras': Layers,
  'Pandas & NumPy': BarChart3,
  'NumPy': BarChart3,
  'Pandas': Database,
  
  // Data Processing & Engineering
  'Apache Spark': Zap,
  'Apache Kafka': Workflow,
  'SQL Databases (PostgreSQL, MySQL)': Database,
  'PostgreSQL': Database,
  'MySQL': Database,
  'NoSQL Databases (MongoDB, Cassandra)': HardDrive,
  'MongoDB': HardDrive,
  'Cassandra': Server,
  'Airflow': Workflow,
  
  // DevOps & Cloud Infrastructure
  'Docker': Container,
  'Kubernetes': Container,
  'AWS': Cloud,
  'Azure': Cloud,
  'Google Cloud': Cloud,
  'GCP': Cloud,
  'Terraform': Settings,
  'Jenkins / GitLab CI': GitMerge,
  'Jenkins': GitMerge,
  'GitLab CI': GitBranch,
  'GitLab': GitBranch,
  
  // Frontend & Visualization
  'React': Monitor,
  'Vue.js': Monitor,
  'D3.js': PieChart,
  'Tableau / PowerBI (Integration)': TrendingUp,
  'Tableau': TrendingUp,
  'PowerBI': BarChart3,
  'Chart.js': PieChart,
  
  // Default
  'Default': Cpu
};

interface TechStackIconProps {
  tech: TechStackItem;
  index: number;
}

const TechStackIcon: React.FC<TechStackIconProps> = ({ tech, index }) => {
  const IconComponent = technologyIconMap[tech.name] || technologyIconMap.Default;

  return (
    <motion.div
      className="group flex flex-col items-center text-center p-2 sm:p-3 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 border border-transparent hover:border-blue-500/30"
      style={{
        background: 'rgba(26, 35, 50, 0.4)',
      }}
      title={tech.description || tech.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.05,
        background: 'rgba(64, 150, 255, 0.1)'
      }}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 mb-2 relative">
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
          <IconComponent size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors sm:w-5 sm:h-5" />
        </div>
      </div>
      <p className="text-xs text-gray-400 group-hover:text-blue-300 transition-colors duration-300 font-medium leading-tight text-center">
        {tech.name}
      </p>
    </motion.div>
  );
};

export default TechStackIcon;