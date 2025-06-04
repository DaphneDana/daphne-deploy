// src/pages/TechnologyPage.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // For CTAs if needed outside components
import { technologyPageContent } from '../assets/data/technologyPageData'; // Adjust path
import TechPageHero from '../components/technology/TechPageHero';
import AiSolutionCard from '../components/technology/AiSoultionCard';
import TechPillarCard from '../components/technology/TechPillarCard';
import TechStackIcon from '../components/technology/TechStackItem';
import DXCaseCard from '../components/technology/DXCard';
import DTAchievementCard from '../components/technology/DTAChievementCard';

// Import Lucide Icons for Section Titles (ensure these match data or maps)
import { Bot, ShieldCheck, Layers as LayersIcon, GitMerge, Activity, Users2, ClipboardCheck, FileCode, Zap, Settings2, Palette, ArrowRight } from 'lucide-react';
// Settings2 for DevOps general, Palette for DX


// Reusable Section Title Component (can be moved to a shared components folder)
const SectionTitle: React.FC<{ title: string, subtitle?: string, Icon?: React.ElementType, textAlignment?: 'text-center' | 'text-left' }> = 
  ({ title, subtitle, Icon, textAlignment = 'text-center' }) => (
  <div className={`mb-12 md:mb-16 ${textAlignment}`}>
    {Icon && <Icon size={40} className={`text-primary ${textAlignment === 'text-center' ? 'mx-auto' : ''} mb-4`} />}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main-dark leading-tight">{title}</h2>
    {subtitle && <p className={`text-lg text-text-muted-dark mt-3 max-w-2xl ${textAlignment === 'text-center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
  </div>
);

// Icon map for Tech Stack Categories and DevOps Aspects (centralized for this page)
import { BrainCircuit, Database, CloudCog, MonitorSmartphone } from 'lucide-react';

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
    DefaultSectionIcon: Zap, // Fallback for section titles
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
    document.title = "Our Technology & DX | LLP"; // Update with SEO data if available
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
    visible: { opacity: 1, y: 0, transition:{ duration:0.4, ease:'easeOut' } },
  };


  return (
    <div className="bg-dark-bg text-text-main-dark overflow-x-hidden">
      <TechPageHero heroData={hero} />

      {/* AI Solutions Section */}
      <motion.section 
        id="ai-solutions-section" // For hero CTA link
        className="py-16 md:py-24 bg-dark-bg"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container-mx">
          <SectionTitle Icon={Bot} title={aiSolutions.title} subtitle={aiSolutions.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {aiSolutions.items.map((solution, index) => (
              <AiSolutionCard key={solution.id} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technical Trust Section */}
      <motion.section 
        className="py-16 md:py-24 bg-slate-800" // Alternate background
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container-mx">
          <SectionTitle Icon={ShieldCheck} title={technicalTrust.title} subtitle={technicalTrust.subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {technicalTrust.pillars.map((pillar, index) => (
              <TechPillarCard key={index} pillar={pillar} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section 
        className="py-16 md:py-24 bg-dark-bg"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container-mx">
          <SectionTitle Icon={LayersIcon} title={techStack.title} subtitle={techStack.subtitle} />
          {techStack.introduction && (
            <p className="max-w-3xl mx-auto text-center text-text-muted-dark mb-12 leading-relaxed">
              {techStack.introduction}
            </p>
          )}
          <div className="space-y-12">
            {techStack.categories.map((category) => {
              const CategoryIcon = category.iconName ? (pageIconMap[category.iconName] || pageIconMap.DefaultSectionIcon) : null;
              return (
                <motion.div 
                    key={category.name}
                    variants={itemVariants} // Use itemVariants for each category block
                >
                  <div className="flex items-center mb-6">
                    {CategoryIcon && <CategoryIcon size={28} className="text-primary mr-3"/>}
                    <h3 className="text-2xl font-semibold text-text-main-dark">{category.name}</h3>
                  </div>
                  <motion.div 
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8"
                    variants={staggeredListVariants} // Stagger icons within this category
                    initial="hidden"
                    whileInView="visible" // Animate when this grid is in view
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    {category.technologies.map((tech, techIndex) => (
                      <TechStackIcon key={tech.name} tech={tech} index={techIndex} />
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* DevOps & MLOps Culture Section */}
      <motion.section 
        className="py-16 md:py-24 bg-slate-800"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container-mx">
            <SectionTitle Icon={Settings2} title={devOpsCulture.title} subtitle={devOpsCulture.subtitle} />
            <div className="max-w-3xl mx-auto space-y-4 text-text-muted-dark leading-relaxed mb-12 text-center md:text-left">
                {devOpsCulture.descriptionParagraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {devOpsCulture.keyAspects.map((aspect) => {
                    const AspectIcon = pageIconMap[aspect.iconName] || pageIconMap.DefaultSectionIcon;
                    return (
                        <motion.div 
                            key={aspect.title} 
                            className="bg-card-dark-bg p-6 rounded-xl shadow-lg flex items-start gap-4 hover:shadow-primary/10"
                            variants={itemVariants} // Staggered by parent section's staggerChildren
                        >
                            <AspectIcon size={28} className="text-primary mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="text-lg font-semibold text-text-main-dark mb-1">{aspect.title}</h4>
                                <p className="text-sm text-text-muted-dark leading-relaxed">{aspect.description}</p>
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
          className="py-16 md:py-24 bg-dark-bg"
          variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        >
          <div className="container-mx">
            <SectionTitle Icon={Zap} title={digitalTransformationAchievements.title} subtitle={digitalTransformationAchievements.subtitle} />
            <div className="space-y-10 md:space-y-12">
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
        className="py-16 md:py-24 bg-slate-800"
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container-mx">
          <SectionTitle Icon={Palette} title={dxShowcase.title} subtitle={dxShowcase.subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {dxShowcase.items.map((caseItem, index) => (
              <DXCaseCard key={caseItem.id} caseItem={caseItem} index={index} />
            ))}
          </div>
          {dxShowcase.cta && (
            <div className="text-center mt-16">
              <Link
                to={dxShowcase.cta.link}
                className="btn btn-secondary px-8 py-3 text-base font-semibold rounded-lg inline-flex items-center group"
              >
                {dxShowcase.cta.text} <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </div>
      </motion.section>

    </div>
  );
};

export default TechnologyPage;