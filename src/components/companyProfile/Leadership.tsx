// src/components/companyProfile/LeadershipSnapshotSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { CompanyProfileData, KeyExecutive } from '../../types/companyProfile'; // Adjust path
import { Users, ArrowRight } from 'lucide-react'; // Example icons

interface LeadershipSnapshotSectionProps {
  snapshot: CompanyProfileData['leadershipSnapshot'];
}

const LeadershipSnapshotSection: React.FC<LeadershipSnapshotSectionProps> = ({ snapshot }) => {
  if (!snapshot || !snapshot.keyExecutives || snapshot.keyExecutives.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-slate-800"> {/* Alternate dark shade */}
      <div className="container-mx">
        <div className="text-center mb-12 md:mb-16">
          <Users size={40} className="text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-text-main-dark">Meet Our Leadership</h2>
          <p className="text-lg text-text-muted-dark mt-2 max-w-xl mx-auto">
            Experienced visionaries guiding our mission and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {snapshot.keyExecutives.map((exec: KeyExecutive, index: number) => (
            <div key={index} className="bg-card-dark-bg p-6 rounded-xl shadow-xl text-center flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-primary/20">
              {exec.imageUrl ? (
                <img 
                  src={exec.imageUrl} 
                  alt={exec.name} 
                  className="h-28 w-28 rounded-full object-cover mb-4 border-4 border-slate-700 shadow-md"
                />
              ) : (
                <div className="h-28 w-28 rounded-full bg-slate-700 flex items-center justify-center mb-4 text-primary">
                  <Users size={48} />
                </div>
              )}
              <h3 className="text-xl font-semibold text-text-main-dark mb-1">{exec.name}</h3>
              <p className="text-sm text-primary font-medium mb-2">{exec.title}</p>
              <p className="text-xs text-text-muted-dark leading-relaxed">{exec.blurb}</p>
            </div>
          ))}
        </div>
        {snapshot.fullTeamPageLink && (
          <div className="text-center mt-12">
            <Link 
              to={snapshot.fullTeamPageLink} 
              className="btn btn-primary inline-flex items-center px-8 py-3 text-base"
            >
              Meet The Full Team <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadershipSnapshotSection;