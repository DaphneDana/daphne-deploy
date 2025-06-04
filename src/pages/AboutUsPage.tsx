// src/pages/AboutUsPage.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { aboutUsContent } from '../assets/data/abousUsData'; // Import the structured data
import type { ExternalLinkItem } from '../types/aboutUs'; // For typing external links
import AboutHeroSection from '../components/about/AboutHeroSection';
import PhilosophyCard from '../components/about/PhilosphopyCard';
import HistoryMilestoneItem from '../components/about/HistoryMilestoneSection';
import StructureItemCard from '../components/about/StructureItemCard';

// Import Lucide icons needed for SectionHeader and potentially fallback
import { 
    Lightbulb, 
    History, 
    Users as StructureIconUsers, // Renamed to avoid conflict with Users in iconMap
    ExternalLink as ExternalLinkIconLucide, // Renamed
    Info, // General fallback for SectionHeader
    Building, // For hero section, but good to have in a shared map if needed
    ShieldCheck, // For philosophy
    BarChartHorizontalBig, // For philosophy
    Network, // For structure
    FlaskConical, // For structure
    Scale, // For structure
    GraduationCap // For structure
} from 'lucide-react';

// Centralized icon map for icons used in SectionHeader
const sectionHeaderIconMap: { [key: string]: React.ElementType } = {
    Lightbulb: Lightbulb,
    History: History,
    Users: StructureIconUsers, // 'Users' string from data maps to StructureIconUsers (Lucide's Users)
    ExternalLink: ExternalLinkIconLucide,
    Building: Building, // Though AboutHeroSection handles its own icon
    ShieldCheck: ShieldCheck,
    BarChartHorizontalBig: BarChartHorizontalBig,
    Network: Network,
    Building2: Building, // Maps to Lucide's Building icon
    FlaskConical: FlaskConical,
    Scale: Scale,
    GraduationCap: GraduationCap,
    Default: Info, // Fallback for SectionHeader
};


const AboutUsPage: React.FC = () => {
  const { hero, introduction, philosophy, history, structure, externalLinksSection, seo } = aboutUsContent;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = seo.title;
  }, [seo.title]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const SectionHeader: React.FC<{title: string, subtitle: string, iconName?: string}> = ({title, subtitle, iconName}) => {
    const IconComponent = iconName && sectionHeaderIconMap[iconName] 
        ? sectionHeaderIconMap[iconName] 
        : null; // No icon if not specified or not in map (or sectionHeaderIconMap.Default for a fallback)

    return (
        <div className="text-center mb-12 md:mb-16">
            {IconComponent && <IconComponent size={40} className="text-primary mx-auto mb-3" />}
            <h2 className="text-3xl md:text-4xl font-bold text-text-main-dark">{title}</h2>
            {subtitle && <p className="text-lg text-text-muted-dark mt-2 max-w-xl mx-auto">{subtitle}</p>}
        </div>
    );
  };


  return (
    <div className="bg-dark-bg text-text-main-dark">
      <AboutHeroSection heroData={hero} /> {/* heroData.iconName handled by AboutHeroSection's own map */}

      <motion.section 
        className="py-12 md:py-16"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}
      >
        <div className="container-mx">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-text-muted-dark leading-relaxed hyphens-auto">
              {introduction}
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-12 md:py-16 bg-slate-800"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}
      >
        <div className="container-mx">
          <SectionHeader title={philosophy.title} subtitle={philosophy.subtitle} iconName={philosophy.iconName} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {philosophy.points.map((point, index) => (
              <PhilosophyCard key={point.title} point={point} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-12 md:py-16"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants}
      >
        <div className="container-mx">
          <SectionHeader title={history.title} subtitle={history.subtitle} iconName={history.iconName} />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 transform -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
            {history.milestones.map((milestone, index) => (
              <HistoryMilestoneItem key={index} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-12 md:py-16 bg-slate-800"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}
      >
        <div className="container-mx bg-dark-bg">
          <SectionHeader title={structure.title} subtitle={structure.subtitle} iconName={structure.iconName} />
          <div className="max-w-3xl mx-auto text-text-muted-dark leading-relaxed space-y-4 text-center md:text-left">
            <p className="mb-8 text-center hyphens-auto">{structure.introductoryText}</p>
            <div className="space-y-6">
                {structure.items.map(item => (
                    <StructureItemCard key={item.title} item={item} />
                ))}
            </div>
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        className="py-12 md:py-16"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}
      >
        <div className="container-mx">
          <SectionHeader title={externalLinksSection.title} subtitle={externalLinksSection.subtitle} iconName={externalLinksSection.iconName} />
          <div className="max-w-xl mx-auto bg-card-dark-bg p-6 md:p-8 rounded-xl shadow-xl">
            <p className="text-text-muted-dark mb-6 leading-relaxed hyphens-auto">
              {externalLinksSection.introductoryText}
            </p>
            <ul className="space-y-3">
              {externalLinksSection.links.map((linkItem: ExternalLinkItem, index: number) => (
                <li key={index}>
                  <a 
                    href={linkItem.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-primary hover:text-primary-light transition-colors group text-base"
                  >
                    <ExternalLinkIconLucide size={18} className="mr-2.5 flex-shrink-0" />
                    {linkItem.text} 
                    <span className="text-xs opacity-70 ml-1.5 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUsPage;