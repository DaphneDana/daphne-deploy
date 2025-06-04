// src/pages/HomePage.tsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import { motion} from 'framer-motion';
import HomeHeroSection from '../components/home/HomeHeroSection';
import MemberCompanyTeaserCard from '../components/home/MemeberCompanyCard'; 
import TransformationHighlightCard from '../components/home/TransformationCard';
import type  { TransformationHighlight } from '../components/home/TransformationCard'; 
import InsightSnippetCard from '../components/home/InsightCard';
import TrustPillarCard from '../components/home/TrustPillarCard';
import { Target, Users, Zap, Rss, Shield, ArrowRight } from 'lucide-react';

const mockMemberTeasers = [
  { slug: 'innovate-ai-solutions', name: 'InnovateAI Solutions', logoUrl: 'https://via.placeholder.com/180x70/FFFFFF/111827?text=InnovateAI', shortDescription: 'Pioneering advanced AI for enterprise automation and efficiency.' },
  { slug: 'synergy-ml', name: 'SynergyML Dynamics', logoUrl: 'https://via.placeholder.com/180x70/FFFFFF/111827?text=SynergyML', shortDescription: 'Developing collaborative ML frameworks for secure data sharing and model training.' },
  { slug: 'afro-robotics-initiative', name: 'AfroRobotics Initiative', logoUrl: 'https://via.placeholder.com/180x70/FFFFFF/111827?text=AfroRobotics', shortDescription: 'Advancing robotics and autonomous systems tailored for African contexts.' },
];

const mockTransformationHighlights: TransformationHighlight[] = [
  { iconName: 'BrainCircuit', title: 'AI-Powered Insights', description: 'Unlock deep data insights and predictive analytics to drive strategic decision-making.' },
  { iconName: 'Zap', title: 'Intelligent Automation', description: 'Streamline complex processes and boost operational efficiency with our automation solutions.' },
  { iconName: 'Share2', title: 'Ecosystem Collaboration', description: 'Leverage the collective intelligence of our member network for unparalleled innovation.' },
  { iconName: 'Users', title: 'Talent Development', description: 'Nurturing the next generation of AI leaders and practitioners across Africa.' },
];

const mockInsightSnippets = [
  { slug: '/latest-news/llp-q3-update', title: 'LLP Reports Record Growth in Q3 and Expands Research Initiatives', imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWklMjBuZXdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', excerpt: 'A look into LLP\'s strong quarterly performance and the launch of new programs aimed at fostering AI innovation.', date: '2024-10-28T09:00:00Z', category: 'News Update' },
  { slug: '/blog/ethical-ai-framework', title: 'The Imperative of Ethical Frameworks in AI Development', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGV0aGljc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', excerpt: 'Exploring LLP\'s commitment to responsible AI and the guiding principles behind our development practices.', date: '2024-10-20T11:00:00Z', category: 'Blog Post' },
  { slug: '/latest-news/ai-summit-africa-2024', title: 'Highlights from the AI Summit Africa 2024 Co-hosted by LLP', imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZmVyZW5jZSUyMHN1bW1pdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', excerpt: 'Key takeaways and impactful discussions from the leading AI conference on the continent.', date: '2024-09-15T15:00:00Z', category: 'Event Recap' },
];

const mockTrustPillars = [
  { iconName: 'ShieldCheck', title: 'Ethical Governance', description: 'Adhering to the highest standards of responsible AI, guided by our independent Ethics Board.' },
  { iconName: 'LockKeyhole', title: 'Data Privacy & Security', description: 'Implementing robust security measures and championing data privacy in all our solutions.' },
  { iconName: 'GitFork', title: 'Transparency & Openness', description: 'Promoting clarity in AI decision-making processes and fostering open collaboration where appropriate.' },
  { iconName: 'Scale', title: 'Accountability & Fairness', description: 'Ensuring our AI systems are fair, unbiased, and accountable for their impact.' },
];

const SectionTitle: React.FC<{ title: string, subtitle?: string, Icon?: React.ElementType, textAlignment?: 'text-center' | 'text-left' }> = 
  ({ title, subtitle, Icon, textAlignment = 'text-center' }) => (
  <div className={`mb-10 md:mb-12 ${textAlignment}`}>
    {Icon && <Icon size={36} className={`text-primary ${textAlignment === 'text-center' ? 'mx-auto' : ''} mb-4`} />}
    <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-text-heading-dark leading-tight">{title}</h2>
    {subtitle && <p className={`text-lg text-text-muted-dark mt-3 max-w-2xl ${textAlignment === 'text-center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
  </div>
);

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "LLP | Leading AI & ML Innovation in Africa";
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } 
    }
  };

  const transformationSectionRef = useRef(null);

  return (
    <div className="bg-section-deep-blue text-text-main-dark overflow-x-hidden"> {/* Main page background */}
      <HomeHeroSection />

      {/* Who We Are (LLP Overview) */}
      <motion.section 
        className="section-padding bg-slate-900" // Using defined padding
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container-mx">
          <SectionTitle 
            Icon={Target}
            title="The Heart of AI Advancement in Africa"
            subtitle="LLP is a dynamic consortium orchestrating a collaborative ecosystem to accelerate AI development, foster innovation, and cultivate world-class talent across the continent."
          />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg text-text-muted-dark leading-relaxed mb-10 hyphens-auto">
              We bridge the gap between groundbreaking research and real-world application, empowering our member companies and partners to leverage the transformative power of Artificial Intelligence and Machine Learning. Our focus is on building sustainable, ethical, and impactful AI solutions that drive progress and create opportunities.
            </p>
            <Link
              to="/company-profile/llp-innovations" 
              className="btn btn-secondary px-8 py-3 text-base rounded-lg inline-flex items-center group"
            >
              Learn More About LLP <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.section>
      <div className="container-mx section-separator"></div>


      {/* Our Ecosystem (Member Companies) */}
      <motion.section 
        className="section-padding bg-slate-900" // Same background, separation handled by separator
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container-mx">
          <SectionTitle 
            Icon={Users}
            title="Our Vibrant Ecosystem"
            subtitle="A collaborative network of innovative companies driving the AI frontier."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mockMemberTeasers.map((company, index) => (
              <MemberCompanyTeaserCard key={company.slug} company={company} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/member-companies"
              className="btn btn-primary px-8 py-3 text-base rounded-lg inline-flex items-center group"
            >
              Explore All Member Companies <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.section>
      <div className="container-mx section-separator"></div>


      {/* Driving Digital Transformation */}
      <motion.section 
        ref={transformationSectionRef}
        className="section-padding bg-slate-900"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container-mx">
          <SectionTitle 
            Icon={Zap}
            title="Driving Africa's Digital Transformation"
            subtitle="LLP empowers businesses and societies by unlocking the potential of AI across key sectors."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {mockTransformationHighlights.map((highlight, index) => (
              <TransformationHighlightCard 
                key={index} 
                highlight={highlight} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </motion.section>
      <div className="container-mx section-separator"></div>


      {/* Latest Insights & Updates */}
      <motion.section 
        className="section-padding bg-slate-900"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
         <div className="container-mx">
          <SectionTitle 
            Icon={Rss}
            title="Latest Insights & Updates"
            subtitle="Stay informed with our latest news, research breakthroughs, and thought leadership."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mockInsightSnippets.map((insight, index) => (
              <InsightSnippetCard key={insight.slug} insight={insight} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/latest-news"
              className="btn btn-secondary px-8 py-3 text-base rounded-lg inline-flex items-center group"
            >
              View All News & Articles <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.section>
      <div className="container-mx section-separator"></div>


       {/* Building Trust in AI */}
       <motion.section 
        className="section-padding bg-slate-900"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
         <div className="container-mx">
          <SectionTitle 
            Icon={Shield}
            title="Building Trust in Artificial Intelligence"
            subtitle="Our commitment to ethical, responsible, and transparent AI development is unwavering."
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {mockTrustPillars.map((pillar, index) => (
                <TrustPillarCard key={index} pillar={pillar} index={index} />
                ))}
            </div>
            <div className="text-center mt-12">
                <Link
                to="/company-profile/llp-innovations#ethics" 
                className="font-medium inline-flex items-center group text-primary hover:text-primary-light"
                >
                Learn About Our Ethical Framework <ArrowRight size={16} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
          </div>
        </div>
      </motion.section>
      <div className="container-mx section-separator"></div>


      {/* Final Call to Action Section */}
      <motion.section 
        className="py-20 md:py-28 bg-gradient-to-r from-primary via-primary-dark to-blue-700 text-white" /* Distinct background */
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container-mx text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Ready to Transform Your Future with AI?
          </h2>
          <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10">
            Whether you're looking to innovate, partner, or build your career in AI, LLP is your gateway to excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Link
              to="/contact"
              className="btn bg-white text-primary hover:bg-slate-100 px-10 py-3.5 text-lg rounded-lg shadow-xl"
            >
              Get in Touch
            </Link>
            <Link
              to="/careers"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-3.5 text-lg rounded-lg shadow-xl"
            >
              Explore Careers
            </Link>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default HomePage;