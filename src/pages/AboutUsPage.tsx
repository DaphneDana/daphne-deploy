// src/pages/AboutUsPage.tsx - WITHOUT react-helmet-async
import React, { useEffect } from 'react';
import { aboutUsContent } from '../assets/data/abousUsData';
import AboutHeroSection from '../components/about/AboutHeroSection';
import IntroductionSection from '../components/about/IntroductionSection';
import PhilosophySection from '../components/about/PhilosophySection';
import HistorySection from '../components/about/HistoryMilestoneSection';
import StructureSection from '../components/about/StructureSectionItem';
import ExternalLinksSection from '../components/about/ExternalLinkSection';

const AboutUsPage: React.FC = () => {
  // Set document title and meta description using vanilla JavaScript
  useEffect(() => {
    // Set document title
    document.title = aboutUsContent.seo.title;
    
    // Set meta description
    if (aboutUsContent.seo.description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', aboutUsContent.seo.description);
      } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = aboutUsContent.seo.description;
        document.head.appendChild(newMetaDescription);
      }
    }

    // Cleanup function to restore original title when component unmounts
    return () => {
      document.title = 'LLP - AI Innovation Platform'; // Your default title
    };
  }, []);

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
    >
      {/* Hero Section */}
      <AboutHeroSection heroData={aboutUsContent.hero} />

      {/* Introduction Section */}
      <IntroductionSection introduction={aboutUsContent.introduction} />

      {/* Philosophy Section */}
      <PhilosophySection philosophy={aboutUsContent.philosophy} />

      {/* History Section - Maintaining all animations and data */}
      <HistorySection history={aboutUsContent.history} />

      {/* Structure Section */}
      <StructureSection structure={aboutUsContent.structure} />

      {/* External Links Section */}
      <ExternalLinksSection externalLinksSection={aboutUsContent.externalLinksSection} />
    </div>
  );
};

export default AboutUsPage;
