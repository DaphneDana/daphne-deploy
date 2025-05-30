// src/pages/MemberCompanyDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockMemberCompaniesData } from '../assets/data/memberCompaniesData'; // Adjust path
import type { MemberCompany, Milestone, Achievement, Award } from '../types/company'; // Fixed import path
import { ArrowLeft, Briefcase, Target, TrendingUp, Award as AwardIcon, Calendar, CheckCircle, Users, ExternalLink, Mail, Phone, Globe } from 'lucide-react';

// Helper component for sections (optional, but good for consistency)
const Section: React.FC<{ title: string; icon?: React.ElementType; children: React.ReactNode; className?: string; titleClassName?: string }> = 
    ({ title, icon: Icon, children, className = '', titleClassName = '' }) => (
    <section className={`py-8 md:py-12 border-b border-slate-700 last:border-b-0 ${className}`}>
        <div className="flex items-center mb-6">
            {Icon && <Icon size={28} className="mr-3 text-blue-400" />}
            <h2 className={`text-2xl md:text-3xl font-bold text-white ${titleClassName}`}>{title}</h2>
        </div>
        {children}
    </section>
);

const MemberCompanyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [company, setCompany] = useState<MemberCompany | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const foundCompany = mockMemberCompaniesData.find(c => c.slug === slug);
    const timer = setTimeout(() => {
      setCompany(foundCompany);
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="bg-slate-900 text-white min-h-[calc(100vh-160px)] flex items-center justify-center">
        <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mb-4"></div>
            <p className="text-xl text-gray-300">Loading company details...</p>
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="bg-slate-900 text-white min-h-[calc(100vh-160px)] flex flex-col items-center justify-center text-center px-4">
         <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-blue-400 mb-4">404</h1>
            <p className="text-2xl text-white mb-2">Company Not Found</p>
            <Link to="/" className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Go to Homepage
            </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-white animate-fade-in-up">
      {/* Company Header / Hero Section */}
      <div className="pt-12 pb-10 md:pt-16 md:pb-14 bg-slate-800/30 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
              <Link to="/member-companies" className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 group">
                  <ArrowLeft size={18} className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                  Back to Member Companies
              </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 mb-4">
            <img 
              src={company.logoUrl} 
              alt={`${company.name} Logo`} 
              className="h-16 md:h-20 w-auto max-w-[200px] md:max-w-[250px] object-contain bg-white p-2 rounded-md shadow-lg" 
            />
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{company.name}</h1>
              {company.tagline && <p className="text-lg text-gray-300 mt-1">{company.tagline}</p>}
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">{company.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="py-8 md:py-12">
          {/* Mission Section */}
          <Section title="Our Mission" icon={Target}>
            <p className="text-lg text-gray-300 leading-relaxed">{company.mission}</p>
          </Section>

          {/* History Section - Timeline */}
          <Section title="Company History" icon={Calendar}>
            <div className="relative pl-6 border-l-2 border-slate-700 space-y-10">
              {company.history.map((milestone: Milestone, index: number) => (
                <div key={index} className="relative animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="absolute -left-[1.1rem] top-1.5 w-6 h-6 bg-blue-400 rounded-full border-4 border-slate-900 flex items-center justify-center">
                     <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-1">{milestone.year} - {milestone.event}</h3>
                  {milestone.description && <p className="text-gray-300 text-sm leading-relaxed">{milestone.description}</p>}
                </div>
              ))}
            </div>
          </Section>

          {/* Vision Section */}
          <Section title="Our Vision" icon={Briefcase}>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">{company.vision.statement}</p>
            <h4 className="text-xl font-semibold text-white mb-3">Key Objectives (Next 5-10 Years):</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
              {company.vision.objectives.map((obj, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={18} className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Key Achievements Section */}
          <Section title="Key Achievements" icon={TrendingUp}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {company.keyAchievements.map((ach: Achievement, index: number) => (
                <div 
                  key={index} 
                  className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-slate-700"
                >
                  <div className="flex items-center mb-3">
                    <AwardIcon size={24} className="text-blue-400 mr-3" />
                    <h4 className="text-lg font-semibold text-white">{ach.title}</h4>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">{ach.details}</p>
                  {ach.statistic && <p className="text-sm font-bold text-blue-400">{ach.statistic}</p>}
                </div>
              ))}
            </div>
          </Section>

          {/* Awards & Recognition Section */}
          <Section title="Awards & Recognition" icon={AwardIcon}>
            <div className="space-y-6">
              {company.awardsAndRecognition.map((award: Award, index: number) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-slate-800 rounded-md shadow-sm border border-slate-700">
                  {award.imageUrl ? (
                    <img src={award.imageUrl} alt={`${award.name} badge`} className="h-16 w-16 object-contain rounded bg-white p-1" />
                  ) : (
                    <div className="flex-shrink-0 w-16 h-16 bg-slate-700 rounded flex items-center justify-center">
                      <AwardIcon size={32} className="text-blue-400" />
                    </div>
                  )}
                  <div>
                    <h4 className="text-md font-semibold text-white">{award.name}</h4>
                    <p className="text-sm text-gray-300">{award.issuer} - {award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
          
          {/* Contact Information */}
          <Section title="Contact Information" icon={Mail}>
              <div className="bg-slate-800 p-6 rounded-lg shadow-md border border-slate-700">
                  <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center">
                          <Mail size={18} className="mr-3 text-blue-400"/>
                          <a href={`mailto:${company.contact.email}`} className="hover:text-blue-400 transition-colors">
                            {company.contact.email}
                          </a>
                      </li>
                      {company.contact.phone && (
                          <li className="flex items-center">
                              <Phone size={18} className="mr-3 text-blue-400"/>
                              <a href={`tel:${company.contact.phone.replace(/\s/g, '')}`} className="hover:text-blue-400 transition-colors">
                                {company.contact.phone}
                              </a>
                          </li>
                      )}
                      {company.contact.website && (
                          <li className="flex items-center">
                              <Globe size={18} className="mr-3 text-blue-400"/>
                              <a 
                                href={company.contact.website} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-blue-400 transition-colors flex items-center"
                              >
                                  Visit Website <ExternalLink size={14} className="ml-1.5"/>
                              </a>
                          </li>
                      )}
                  </ul>
              </div>
          </Section>

          {/* Related Companies Section */}
          {company.relatedCompanies && company.relatedCompanies.length > 0 && (
            <Section title="Related Companies & Partners" icon={Users}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {company.relatedCompanies.map(related => (
                  <Link 
                      key={related.id} 
                      to={`/member-companies/${related.slug}`} 
                      className="group bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-blue-500/20 transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1 border border-slate-700"
                  >
                    <img 
                      src={related.logoUrl} 
                      alt={`${related.name} Logo`} 
                      className="h-12 max-h-12 w-auto max-w-[100px] object-contain mb-3 bg-white p-1 rounded" 
                    />
                    <p className="text-xs font-medium text-white group-hover:text-blue-400 transition-colors">
                      {related.name}
                    </p>
                  </Link>
                ))}
              </div>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCompanyDetailPage;