// src/pages/HomePage.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import HomeHeroSection from '../components/home/HomeHeroSection';
import MemberCompanyTeaserCard from '../components/home/MemeberCompanyCard'; 
import TransformationHighlightCard from '../components/home/TransformationCard';
import type { TransformationHighlight } from '../components/home/TransformationCard'; 
import InsightSnippetCard from '../components/home/InsightCard';
import TrustPillarCard from '../components/home/TrustPillarCard';
import { Target, Users, Zap, Rss, Shield, ArrowRight, Sparkles } from 'lucide-react';

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

// Enhanced Section Title Component
const SectionTitle: React.FC<{ 
  title: string; 
  subtitle?: string; 
  Icon?: React.ElementType; 
  textAlignment?: 'text-center' | 'text-left';
  badge?: string;
}> = ({ title, subtitle, Icon, textAlignment = 'text-center', badge }) => (
  <div className={`mb-12 lg:mb-16 ${textAlignment}`}>
    {/* Badge */}
    {badge && (
      <div className={`inline-flex items-center px-4 py-2 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm ${textAlignment === 'text-center' ? 'mx-auto' : ''}`}>
        <Sparkles size={16} className="text-blue-400 mr-2" />
        <span className="text-sm text-blue-300 font-medium">{badge}</span>
      </div>
    )}
    
    {/* Icon */}
    {Icon && (
      <div className={`relative inline-block mb-6 ${textAlignment === 'text-center' ? 'mx-auto' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
        <div className="relative p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
          <Icon size={36} className="text-blue-400" />
        </div>
      </div>
    )}
    
    {/* Title */}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
      {title}
    </h2>
    
    {/* Subtitle */}
    {subtitle && (
      <p className={`text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl ${textAlignment === 'text-center' ? 'mx-auto' : ''}`}>
        {subtitle}
      </p>
    )}
  </div>
);

// Section Wrapper Component for consistent styling
const SectionWrapper: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}> = ({ children, className = '', variant = 'primary' }) => {
  const getBackgroundStyle = () => {
    switch (variant) {
      case 'primary':
        return 'linear-gradient(135deg, #0f1a2e 0%, #1e2a3d 50%, #0a0f1c 100%)';
      case 'secondary':
        return 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)';
      case 'accent':
        return 'linear-gradient(135deg, #1a2332 0%, #2a3441 50%, #1e2a3d 100%)';
      default:
        return 'linear-gradient(135deg, #0f1a2e 0%, #1e2a3d 50%, #0a0f1c 100%)';
    }
  };

  return (
    <section 
      className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden ${className}`}
      style={{ background: getBackgroundStyle() }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="container-mx relative z-10">
        {children}
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "LLP | Leading AI & ML Innovation in Africa";
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1 
      } 
    }
  };

  return (
    <div className="text-white overflow-x-hidden" style={{
      background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <HomeHeroSection />

      {/* Who We Are Section */}
      <SectionWrapper variant="primary">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
              {/* Left Side - Content */}
              <motion.div
                className="max-w-2xl mx-auto lg:mx-0 space-y-6 lg:space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
                  <Target size={16} className="text-blue-400 mr-2" />
                  <span className="text-sm text-blue-300 font-medium">Who We Are</span>
                </div>
                
                {/* Main Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1]">
                  The Heart of AI Advancement in{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                    Africa
                  </span>
                </h2>
                
                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-blue-200 leading-relaxed">
                  LLP is a dynamic consortium orchestrating a collaborative ecosystem to accelerate AI development, foster innovation, and cultivate world-class talent across the continent.
                </p>
                
                {/* Description */}
                <p className="text-base text-gray-300 leading-relaxed">
                  We bridge the gap between groundbreaking research and real-world application, empowering our member companies and partners to leverage the transformative power of Artificial Intelligence and Machine Learning. Our focus is on building sustainable, ethical, and impactful AI solutions that drive progress and create opportunities.
                </p>
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 py-4">
                  {[
                    { number: "50+", label: "AI Projects" },
                    { number: "200+", label: "Professionals" },
                    { number: "5M+", label: "Lives Impacted" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-xl sm:text-2xl font-bold text-blue-300 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <div className="pt-2">
                  <Link
                    to="/company-profile/llp-innovations" 
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group"
                  >
                    Learn More About LLP 
                    <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                className="relative max-w-2xl mx-auto lg:mx-0 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative">
                  {/* Background decorative elements */}
                  <div className="absolute -top-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 bg-blue-500/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/20 rounded-full blur-2xl" />
                  
                  {/* Main image container */}
                  <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 group shadow-2xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src="/images/LLP.jpeg"
                        alt="LLP - Leading AI Innovation in Africa"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                      Innovation Hub
                    </div>
                  </div>
                  
                  {/* Decorative border glow */}
                  <div className="absolute inset-0 rounded-2xl border border-blue-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Our Ecosystem Section */}
      <SectionWrapper variant="secondary">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionTitle 
            Icon={Users}
            badge="Our Network"
            title="Our Vibrant Ecosystem"
            subtitle="A collaborative network of innovative companies driving the AI frontier."
          />
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {mockMemberTeasers.map((company, index) => (
                <motion.div
                  key={company.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <MemberCompanyTeaserCard company={company} index={index} />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <Link
                to="/member-companies"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                Explore All Member Companies 
                <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Digital Transformation Section */}
      <SectionWrapper variant="accent">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionTitle 
            Icon={Zap}
            badge="Digital Innovation"
            title="Driving Africa's Digital Transformation"
            subtitle="LLP empowers businesses and societies by unlocking the potential of AI across key sectors."
          />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {mockTransformationHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <TransformationHighlightCard highlight={highlight} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Latest Insights Section */}
      <SectionWrapper variant="primary">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionTitle 
            Icon={Rss}
            badge="Stay Updated"
            title="Latest Insights & Updates"
            subtitle="Stay informed with our latest news, research breakthroughs, and thought leadership."
          />
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {mockInsightSnippets.map((insight, index) => (
                <motion.div
                  key={insight.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <InsightSnippetCard insight={insight} index={index} />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <Link
                to="/latest-news"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                View All News & Articles 
                <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Trust in AI Section */}
      <SectionWrapper variant="secondary">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionTitle 
            Icon={Shield}
            badge="Our Commitment"
            title="Building Trust in Artificial Intelligence"
            subtitle="Our commitment to ethical, responsible, and transparent AI development is unwavering."
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {mockTrustPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <TrustPillarCard pillar={pillar} index={index} />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <Link
                to="/company-profile/llp-innovations#ethics"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group"
              >
                Learn About Our Ethical Framework 
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Final CTA Section */}
      <SectionWrapper 
        variant="accent" 
        className="border-t border-blue-500/20"
      >
        <motion.div
          className="text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Future with AI?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
              Whether you're looking to innovate, partner, or build your career in AI, LLP is your gateway to excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Get in Touch
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border-2 border-white/30 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Explore Careers
              </Link>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default HomePage;