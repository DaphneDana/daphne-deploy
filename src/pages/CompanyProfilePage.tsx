// src/pages/CompanyProfilePage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { llpCompanyProfile } from '../assets/data/companyProfileData';
import type { CompanyProfileData } from '../types/companyProfile';
import CompanyProfileHeader from '../components/companyProfile/CompanyProfileHeader';
import AboutCompanySection from '../components/companyProfile/AboutCompanySection';
import AchievementsSection from '../components/companyProfile/AchievementsSection';
import ServiceCapabilitiesSection from '../components/companyProfile/CapabilitiesSection';
import TrustAndCredibilitySection from '../components/companyProfile/TrustAndCredibilitySection';
import DetailedInsightsSection from '../components/companyProfile/DetailedInsights';
import LeadershipSnapshotSection from '../components/companyProfile/Leadership';
import { ArrowLeft } from 'lucide-react';

const CompanyProfilePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [companyData, setCompanyData] = useState<CompanyProfileData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (slug === llpCompanyProfile.slug || !slug) {
      setCompanyData(llpCompanyProfile);
    } else {
      setCompanyData(undefined);
    }
    
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (companyData) {
      document.title = companyData.seo.title;
    }
  }, [companyData]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}>
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 border-4 border-blue-300 border-b-transparent rounded-full animate-spin opacity-30" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 text-center px-4">Loading Company Profile...</p>
        </div>
      </div>
    );
  }

  if (!companyData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4" style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}>
        <div className="container-mx max-w-2xl">
          <div className="text-6xl sm:text-8xl font-bold text-blue-500 mb-6">404</div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Company Profile Not Found</h1>
          <p className="text-gray-300 text-lg mb-8">The company profile you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft size={20} className="mr-2" />
            Go to Homepage
          </Link>
        </div>
      </div>
    );
  }

  // Enhanced animation variants for sections
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.25, 0.25, 0.75],
        staggerChildren: 0.1
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="text-white mobile-text-adjust"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)',
        minHeight: '100vh'
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div variants={sectionVariants}>
        <CompanyProfileHeader 
          companyName={companyData.companyName}
          tagline={companyData.tagline}
          snapshot={companyData.snapshot}
          primaryCTAs={companyData.primaryCTAs}
        />
      </motion.div>

      {/* Back Navigation */}
      {slug && (
        <motion.div 
          className="container-mx py-4 sm:py-6"
          variants={sectionVariants}
        >
          <Link 
            to="/our-companies"
            className="inline-flex items-center text-sm sm:text-base text-blue-400 hover:text-blue-300 group transition-all duration-300"
          >
            <ArrowLeft size={18} className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="hidden sm:inline">View All Company Profiles</span>
            <span className="sm:hidden">All Profiles</span>
          </Link>
        </motion.div>
      )}

      {/* About Section */}
      <motion.div 
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.1 }}
        initial="hidden"
        whileInView="visible"
      >
        <AboutCompanySection overview={companyData.overview} />
      </motion.div>
      
      {/* Achievements Section */}
      <motion.div 
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.1 }}
        initial="hidden"
        whileInView="visible"
      >
        <AchievementsSection achievements={companyData.achievements} />
      </motion.div>

      {/* Service Capabilities Section */}
      <motion.div 
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.1 }}
        initial="hidden"
        whileInView="visible"
      >
        <ServiceCapabilitiesSection services={companyData.serviceCapabilities} />
      </motion.div>
      
      {/* Trust and Credibility Section */}
      <motion.div 
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.1 }}
        initial="hidden"
        whileInView="visible"
      >
        <TrustAndCredibilitySection trustInfo={companyData.trustAndCredibility} />
      </motion.div>

      {/* Detailed Insights Section */}
      {companyData.detailedInsights && (
        <motion.div 
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.1 }}
          initial="hidden"
          whileInView="visible"
        >
          <DetailedInsightsSection insights={companyData.detailedInsights} />
        </motion.div>
      )}

      {/* Leadership Section */}
      {companyData.leadershipSnapshot && (
        <motion.div 
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.1 }}
          initial="hidden"
          whileInView="visible"
        >
          <LeadershipSnapshotSection snapshot={companyData.leadershipSnapshot} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default CompanyProfilePage;