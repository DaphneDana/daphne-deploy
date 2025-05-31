// src/components/careers/OpenRolesSection.tsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { JobRole } from '../../types/careers';
import RoleCard from './RoleCard';
import { Filter, ChevronDown } from 'lucide-react';
import { mockJobRoles } from '../../assets/data/careersData';

interface OpenRolesSectionProps {
  roles: JobRole[];
  onApplyClick: (role: JobRole) => void;
  id: string;
}

const DEPARTMENTS: string[] = Array.from(new Set(mockJobRoles.map(role => role.department)));
const LOCATIONS: string[] = Array.from(new Set(mockJobRoles.map(role => role.location)));
const EXPERIENCE_LEVELS: string[] = Array.from(
  new Set(
    mockJobRoles
      .map(role => role.experienceLevel)
      .filter((level): level is Exclude<JobRole['experienceLevel'], undefined> => Boolean(level))
  )
);

const OpenRolesSection: React.FC<OpenRolesSectionProps> = ({ roles, onApplyClick, id }) => {
  const [filterDepartment, setFilterDepartment] = useState<string>('All');
  const [filterLocation, setFilterLocation] = useState<string>('All');
  const [filterExperience, setFilterExperience] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredRoles = useMemo(() => {
    return roles.filter(role => 
      (filterDepartment === 'All' || role.department === filterDepartment) &&
      (filterLocation === 'All' || role.location === filterLocation) &&
      (filterExperience === 'All' || role.experienceLevel === filterExperience)
    );
  }, [roles, filterDepartment, filterLocation, filterExperience]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };
  
  const FilterDropdown: React.FC<{
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
  }> = ({ label, options, value, onChange }) => (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
      <div className="relative">
        <select 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none pl-3 pr-10 py-2.5 rounded-lg border text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
          style={{
            background: 'rgba(51, 65, 85, 0.8)',
            borderColor: 'rgba(64, 150, 255, 0.3)'
          }}
        >
          <option value="All">All {label.replace("Filter by ","")}</option>
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );

  return (
    <section 
      id={id} 
      className="py-16 md:py-24"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4">Open Roles</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We're hiring across multiple teams—find the role that matches your expertise and passion.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 max-w-4xl mx-auto">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-blue-400 hover:text-blue-300 font-medium mb-4 py-3 px-6 rounded-lg transition-all duration-300 group"
            style={{
              background: 'rgba(26, 35, 50, 0.7)',
              borderColor: 'rgba(64, 150, 255, 0.2)'
            }}
          >
            <Filter size={18} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
            <ChevronDown size={20} className={`ml-2 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden rounded-xl p-6 shadow-xl"
                style={{
                  background: 'rgba(26, 35, 50, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(64, 150, 255, 0.3)'
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <FilterDropdown label="Department" options={DEPARTMENTS} value={filterDepartment} onChange={setFilterDepartment} />
                  <FilterDropdown label="Location" options={LOCATIONS} value={filterLocation} onChange={setFilterLocation} />
                  <FilterDropdown label="Experience Level" options={EXPERIENCE_LEVELS} value={filterExperience} onChange={setFilterExperience} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Roles Grid */}
        <div className="w-full max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredRoles.length > 0 ? (
              <motion.div 
                key="roles-grid"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 justify-items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredRoles.map((role, index) => (
                  <motion.div 
                    key={role.id}
                    custom={index} 
                    variants={cardVariants} 
                    initial="hidden" 
                    animate="visible" 
                    exit="hidden"
                    layout
                    className="w-full max-w-sm"
                  >
                    <RoleCard role={role} onApplyClick={onApplyClick} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-roles"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="text-center py-16 max-w-md mx-auto"
              >
                <div 
                  className="rounded-2xl p-8 border"
                  style={{
                    background: 'rgba(26, 35, 50, 0.7)',
                    borderColor: 'rgba(64, 150, 255, 0.25)'
                  }}
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">No Matching Roles</h3>
                  <p className="text-gray-400">
                    No open positions match your current filters. Please check back later or adjust your criteria.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default OpenRolesSection;