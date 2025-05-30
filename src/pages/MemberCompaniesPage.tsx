// src/pages/MemberCompaniesPage.tsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search,  Building2,  Award, Mail, Phone, Globe, ArrowRight, Sparkles,  TrendingUp } from 'lucide-react';
import { mockMemberCompaniesData } from '../assets/data/memberCompaniesData';
import type { MemberCompany } from '../types/company';

const MemberCompaniesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, ] = useState<string>('all');

  // Filter companies based on search and industry
  const filteredCompanies = useMemo(() => {
    return mockMemberCompaniesData.filter(company => {
      const matchesSearch = searchQuery === '' || 
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.tagline?.toLowerCase().includes(searchQuery.toLowerCase());
      
      // For now, we'll show all industries since we don't have industry categorization
      // You can add industry field to your company type later
      return matchesSearch;
    });
  }, [searchQuery, selectedIndustry]);

  const stats = {
    totalCompanies: mockMemberCompaniesData.length,
    totalAwards: mockMemberCompaniesData.reduce((sum, company) => sum + company.awardsAndRecognition.length, 0),
    foundedRange: '2018-2024',
    globalPresence: '15+ Countries'
  };

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
    }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`,
          }} />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                <Building2 className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Member Companies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover the innovative companies driving the future of AI & ML technology. 
              Our consortium brings together industry leaders, emerging startups, and visionary organizations.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { label: 'Member Companies', value: stats.totalCompanies.toString(), icon: Building2, color: 'text-blue-400' },
                { label: 'Combined Awards', value: stats.totalAwards.toString(), icon: Award, color: 'text-yellow-400' },
                { label: 'Years Active', value: stats.foundedRange, icon: TrendingUp, color: 'text-green-400' },
                { label: 'Global Reach', value: stats.globalPresence, icon: Globe, color: 'text-purple-400' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div 
          className="rounded-2xl p-6 border backdrop-blur-sm animate-fade-in-up"
          style={{
            background: 'rgba(26, 35, 50, 0.8)',
            borderColor: 'rgba(64, 150, 255, 0.3)',
            animationDelay: '400ms'
          }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search companies, technologies, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                style={{
                  background: 'rgba(51, 65, 85, 0.8)',
                  borderColor: 'rgba(64, 150, 255, 0.3)'
                }}
              />
            </div>
            
            {/* Results Counter */}
            <div className="text-center lg:text-right">
              <div className="text-2xl font-bold text-blue-400">{filteredCompanies.length}</div>
              <div className="text-gray-400 text-sm">Companies Found</div>
            </div>
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompanies.map((company, index) => (
            <CompanyCard 
              key={company.id} 
              company={company} 
              animationDelay={index * 100}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-16 animate-fade-in-up">
            <div 
              className="rounded-2xl p-12 border max-w-md mx-auto"
              style={{
                background: 'rgba(26, 35, 50, 0.7)',
                borderColor: 'rgba(64, 150, 255, 0.25)'
              }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-blue-300 mb-2">No Companies Found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search terms to find relevant companies.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Clear Search
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div 
          className="rounded-2xl p-12 border text-center relative overflow-hidden animate-fade-in-up"
          style={{
            background: 'linear-gradient(135deg, rgba(26, 35, 50, 0.9), rgba(15, 26, 46, 0.8))',
            borderColor: 'rgba(64, 150, 255, 0.3)'
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-yellow-400" />
            </div>
            <h2 className="text-3xl font-bold text-blue-300 mb-4">Join Our Consortium</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Ready to be part of the future? Join leading companies in shaping the AI & ML landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Apply for Membership
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-600 transition-all duration-300 hover:scale-105"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Company Card Component
const CompanyCard: React.FC<{ company: MemberCompany; animationDelay?: number }> = ({ 
  company, 
  animationDelay = 0 
}) => {
  return (
    <Link 
      to={`/member-companies/${company.slug}`}
      className="block group animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div 
        className="rounded-2xl border overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm relative"
        style={{
          borderColor: 'rgba(64, 150, 255, 0.25)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 25px 50px rgba(64, 150, 255, 0.25)';
          e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.25)';
        }}
      >
        {/* Top accent line */}
        <div 
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: 'linear-gradient(90deg, #4096ff, #52c4ff)' }}
        />
        
        {/* Company Logo Section */}
        <div className="p-8 text-center border-b border-slate-700/50">
          <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
            <img 
              src={company.logoUrl} 
              alt={`${company.name} Logo`}
              className="w-20 h-20 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextElementSibling) {
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                }
              }}
            />
            <div className="hidden items-center justify-center w-20 h-20 text-slate-600 font-bold text-sm">
              {company.name.substring(0, 2).toUpperCase()}
            </div>
          </div>
          <h3 className="text-xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors mb-2">
            {company.name}
          </h3>
          {company.tagline && (
            <p className="text-sm text-gray-400 italic">"{company.tagline}"</p>
          )}
        </div>

        {/* Company Content */}
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
            {company.description}
          </p>

          {/* Company Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-3 bg-slate-700/30 rounded-lg">
              <div className="text-lg font-bold text-blue-400">{company.history.length}</div>
              <div className="text-xs text-gray-400">Milestones</div>
            </div>
            <div className="text-center p-3 bg-slate-700/30 rounded-lg">
              <div className="text-lg font-bold text-green-400">{company.awardsAndRecognition.length}</div>
              <div className="text-xs text-gray-400">Awards</div>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
            <div className="flex items-center space-x-3">
              {company.contact.email && (
                <div className="p-2 bg-slate-700/50 rounded-lg">
                  <Mail className="w-4 h-4 text-gray-400" />
                </div>
              )}
              {company.contact.website && (
                <div className="p-2 bg-slate-700/50 rounded-lg">
                  <Globe className="w-4 h-4 text-gray-400" />
                </div>
              )}
              {company.contact.phone && (
                <div className="p-2 bg-slate-700/50 rounded-lg">
                  <Phone className="w-4 h-4 text-gray-400" />
                </div>
              )}
            </div>
            
            <div className="flex items-center text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
              Learn More
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MemberCompaniesPage;