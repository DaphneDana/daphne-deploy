// src/pages/TechnologyPage.tsx - ENHANCED RESPONSIVENESS
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { technologyPageContent } from '../assets/data/technologyPageData';
import TechPageHero from '../components/technology/TechPageHero';
import AiSolutionCard from '../components/technology/AiSoultionCard';
import TechPillarCard from '../components/technology/TechPillarCard';
import TechStackIcon from '../components/technology/TechStackItem';
import DXCaseCard from '../components/technology/DXCard';
import DTAchievementCard from '../components/technology/DTAChievementCard';

// Import Lucide Icons for Section Titles
import { 
  Bot, ShieldCheck, Layers as LayersIcon, GitMerge, Activity, 
  Users2, ClipboardCheck, FileCode, Zap, Settings2, Palette, 
  ArrowRight, BrainCircuit, Database, CloudCog, MonitorSmartphone 
} from 'lucide-react';

// Reusable Section Title Component - ENHANCED RESPONSIVENESS
const SectionTitle: React.FC<{ 
  title: string, 
  subtitle?: string, 
  Icon?: React.ElementType, 
  textAlignment?: 'text-center' | 'text-left' 
}> = ({ title, subtitle, Icon, textAlignment = 'text-center' }) => (
  <div className={`mb-12 sm:mb-14 md:mb-16 ${textAlignment}`}>
    {Icon && (
      <motion.div
        className={`mb-4 sm:mb-5 md:mb-6 ${textAlignment === 'text-center' ? 'flex justify-center' : ''}`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
          <Icon size={24} className="text-blue-400 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </div>
      </motion.div>
    )}
    <h2 
      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
      style={{
        background: 'linear-gradient(135deg, #4096ff, #52c4ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg sm:text-xl max-w-3xl leading-relaxed text-gray-300 ${textAlignment === 'text-center' ? 'mx-auto' : ''}`}>
        {subtitle}
      </p>
    )}
  </div>
);

// Icon map for Tech Stack Categories and DevOps Aspects
const pageIconMap: { [key: string]: React.ElementType } = {
  BrainCircuit: BrainCircuit,
  Database: Database,
  CloudCog: CloudCog,
  MonitorSmartphone: MonitorSmartphone,
  GitMerge: GitMerge,
  FileCode: FileCode,
  Activity: Activity,
  Users2: Users2,
  ClipboardCheck: ClipboardCheck,
  DefaultSectionIcon: Zap,
};

const TechnologyPage: React.FC = () => {
  const { 
    hero, 
    aiSolutions, 
    technicalTrust, 
    techStack, 
    devOpsCulture,
    dxShowcase,
    digitalTransformationAchievements
  } = technologyPageContent;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Technology & DX | LLP";
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99], staggerChildren: 0.1 }
    }
  };
  
  const staggeredListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
    >
      <TechPageHero heroData={hero} />

      {/* AI Solutions Section */}
      <motion.section 
        id="ai-solutions-section"
        className="py-12 sm:py-16 md:py-20 lg:py-24 relative"
        style={{
          background: 'linear-gradient(135deg, #0f1a2e 0%, #1a2332 50%, #0a0f1c 100%)'
        }}
        variants={sectionVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle Icon={Bot} title={aiSolutions.title} subtitle={aiSolutions.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {aiSolutions.items.map((solution, index) => (
              <AiSolutionCard key={solution.id} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technical Trust Section */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 lg:py-24 relative"
        style={{
          background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
        }}
        variants={sectionVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle Icon={ShieldCheck} title={technicalTrust.title} subtitle={technicalTrust.subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {technicalTrust.pillars.map((pillar, index) => (
              <TechPillarCard key={index} pillar={pillar} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 lg:py-24 relative"
        style={{
          background: 'linear-gradient(135deg, #0f1a2e 0%, #1a2332 50%, #0a0f1c 100%)'
        }}
        variants={sectionVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle Icon={LayersIcon} title={techStack.title} subtitle={techStack.subtitle} />
          {techStack.introduction && (
            <motion.div
              className="max-w-4xl mx-auto mb-12 sm:mb-14 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="rounded-xl p-4 sm:p-6 md:p-8 border text-center"
                style={{
                  background: 'rgba(26, 35, 50, 0.6)',
                  borderColor: 'rgba(64, 150, 255, 0.2)'
                }}
              >
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {techStack.introduction}
                </p>
              </div>
            </motion.div>
          )}
          
          <div className="space-y-12 sm:space-y-14 md:space-y-16">
            {techStack.categories.map((category, categoryIndex) => {
              const CategoryIcon = category.iconName ? (pageIconMap[category.iconName] || pageIconMap.DefaultSectionIcon) : null;
              return (
                <motion.div 
                  key={category.name}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8 text-center sm:text-left">
                    {CategoryIcon && (
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                        <CategoryIcon size={20} className="text-blue-400 sm:w-6 sm:h-6"/>
                      </div>
                    )}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-300">{category.name}</h3>
                  </div>
                  
                  {/* Centered container for tech stack items */}
                  <div className="flex justify-center">
                    <motion.div 
                      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 max-w-6xl"
                      variants={staggeredListVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      {category.technologies.map((tech, techIndex) => (
                        <TechStackIcon key={tech.name} tech={tech} index={techIndex} />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* DevOps & MLOps Culture Section */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 lg:py-24 relative"
        style={{
          background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
        }}
        variants={sectionVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle Icon={Settings2} title={devOpsCulture.title} subtitle={devOpsCulture.subtitle} />
          
          <motion.div 
            className="max-w-4xl mx-auto mb-12 sm:mb-14 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="rounded-xl p-4 sm:p-6 md:p-8 border"
              style={{
                background: 'rgba(26, 35, 50, 0.6)',
                borderColor: 'rgba(64, 150, 255, 0.2)'
              }}
            >
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed text-center">
                {devOpsCulture.descriptionParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {devOpsCulture.keyAspects.map((aspect) => {
              const AspectIcon = pageIconMap[aspect.iconName] || pageIconMap.DefaultSectionIcon;
              return (
                <motion.div 
                  key={aspect.title} 
                  className="rounded-2xl p-4 sm:p-5 md:p-6 border transition-all duration-300 hover:transform hover:-translate-y-1 relative overflow-hidden group"
                  style={{
                    background: 'rgba(26, 35, 50, 0.7)',
                    borderColor: 'rgba(64, 150, 255, 0.25)',
                    backdropFilter: 'blur(10px)'
                  }}
                  variants={itemVariants}
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

                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                        <AspectIcon size={20} className="text-blue-400 sm:w-6 sm:h-6"/>
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-blue-300 mb-1 sm:mb-2 group-hover:text-blue-200 transition-colors">
                        {aspect.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {aspect.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
      
      {/* Digital Transformation Achievements Section */}
      {digitalTransformationAchievements && digitalTransformationAchievements.items.length > 0 && (
        <motion.section
          className="py-12 sm:py-16 md:py-20 lg:py-24 relative"
          style={{
            background: 'linear-gradient(135deg, #0f1a2e 0%, #1a2332 50%, #0a0f1c 100%)'
          }}
          variants={sectionVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle Icon={Zap} title={digitalTransformationAchievements.title} subtitle={digitalTransformationAchievements.subtitle} />
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {digitalTransformationAchievements.items.map((achievement, index) => (
                <DTAchievementCard 
                  key={achievement.id} 
                  achievement={achievement} 
                  index={index} 
                  layout={index % 2 === 0 ? 'image-left' : 'image-right'} 
                />
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* DX Showcase Section */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 lg:py-24 relative"
        style={{
          background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
        }}
        variants={sectionVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle Icon={Palette} title={dxShowcase.title} subtitle={dxShowcase.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-14 md:mb-16">
            {dxShowcase.items.map((caseItem, index) => (
              <DXCaseCard key={caseItem.id} caseItem={caseItem} index={index} />
            ))}
          </div>
          
          {dxShowcase.cta && (
            <div className="text-center">
              <Link
                to={dxShowcase.cta.link}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg group text-sm sm:text-base border-2"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #34d399)',
                  borderColor: 'rgba(96, 165, 250, 0.5)',
                  boxShadow: '0 4px 15px rgba(96, 165, 250, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(96, 165, 250, 0.4)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(96, 165, 250, 0.3)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {dxShowcase.cta.text}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default TechnologyPage;