// src/components/companyProfile/DetailedInsightsSection.tsx
import React from 'react';
import type { CompanyProfileData } from '../../types/companyProfile'; // Adjust path
import CaseStudyTeaserCard from './CaseStudyCard';
import { FileText } from 'lucide-react'; // Example icon
import { Link } from 'react-router-dom';

interface DetailedInsightsSectionProps {
  insights: CompanyProfileData['detailedInsights'];
}

const DetailedInsightsSection: React.FC<DetailedInsightsSectionProps> = ({ insights }) => {
  if (!insights || !insights.caseStudyTeasers || insights.caseStudyTeasers.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-dark-bg">
      <div className="container-mx">
        <div className="text-center mb-12 md:mb-16">
          <FileText size={40} className="text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-text-main-dark">Detailed Insights & Case Studies</h2>
          <p className="text-lg text-text-muted-dark mt-2 max-w-xl mx-auto">
            Explore real-world examples of our impact and expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {insights.caseStudyTeasers.map((teaser) => (
            <CaseStudyTeaserCard key={teaser.id} teaser={teaser} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/case-studies" className="btn btn-secondary px-8 py-3 text-base">
                View All Case Studies
            </Link>
        </div>
      </div>
    </section>
  );
};

export default DetailedInsightsSection;