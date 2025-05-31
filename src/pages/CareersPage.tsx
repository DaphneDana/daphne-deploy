// src/pages/CareersPage.tsx
import React, { useRef, useState } from 'react';;
import CareersHeroSection from '../components/careers/CareersHeroSection';
import OpenRolesSection from '../components/careers/OpenRolesSection';
import LeadershipMessageSection from '../components/careers/LeadershipMessageSection';
import ApplicationProcedureSection from '../components/careers/ApplicationProcedureSection';
import JobApplicationFormSection from '../components/careers/JobApplicationFormSection';
import CareersCTASection from '../components/careers/CareersCTASection';
import { mockJobRoles, mockLeadershipMessage, mockApplicationSteps } from '../assets/data/careersData';
import type { JobRole } from '../types/careers';

const CareersPage: React.FC = () => {
  const openRolesRef = useRef<HTMLDivElement>(null);
  const applicationFormRef = useRef<HTMLDivElement>(null);
  const [selectedRoleForForm, setSelectedRoleForForm] = useState<string | undefined>(undefined);

  const handleSeeOpenPositions = () => {
    openRolesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplyNowClick = (role: JobRole) => {
    setSelectedRoleForForm(role.title);
    applicationFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Careers | Join Our Team at LLP";
  }, []);

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
    >
      {/* Hero Section */}
      <CareersHeroSection onSeeOpenPositionsClick={handleSeeOpenPositions} />
      
      {/* Open Roles Section */}
      <div ref={openRolesRef}>
        <OpenRolesSection id="open-roles" roles={mockJobRoles} onApplyClick={handleApplyNowClick} />
      </div>
      
      {/* Leadership Message Section */}
      <LeadershipMessageSection id="leadership-message" message={mockLeadershipMessage} />
      
      {/* Application Procedure Section */}
      <ApplicationProcedureSection id="application-procedure" steps={mockApplicationSteps} />
      
      {/* Application Form Section */}
      <div ref={applicationFormRef}>
        <JobApplicationFormSection 
            id="application-form" 
            roles={mockJobRoles} 
            selectedRoleTitle={selectedRoleForForm}
        />
      </div>
      
      {/* CTA Section */}
      <CareersCTASection id="careers-contact" />
      
     
    </div>
  );
};

export default CareersPage;