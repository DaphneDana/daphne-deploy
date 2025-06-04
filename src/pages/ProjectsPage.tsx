// src/pages/ProjectsPage.tsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Users, ExternalLink, Github, Target, Clock, CheckCircle } from 'lucide-react';
import type { Project, ProjectStatus } from '../types/project';
import { projectData, projectTags } from '../assets/data/projectData';

const ProjectsPage: React.FC = () => {
  const [activeStatus, setActiveStatus] = useState<ProjectStatus | 'all'>('all');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects based on status, tags, and search
  const filteredProjects = useMemo(() => {
    return projectData.filter(project => {
      // Status filter
      if (activeStatus !== 'all' && project.status !== activeStatus) return false;
      
      // Tags filter
      if (activeTags.length > 0 && !activeTags.some(tag => project.tags.includes(tag))) return false;
      
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          project.title.toLowerCase().includes(query) ||
          project.shortDescription.toLowerCase().includes(query) ||
          project.tags.some(tag => {
            const tagData = projectTags.find(t => t.id === tag);
            return tagData?.name.toLowerCase().includes(query);
          })
        );
      }
      
      return true;
    });
  }, [activeStatus, activeTags, searchQuery]);

  // Group projects by status
  const projectsByStatus = useMemo(() => {
    const grouped = {
      old: filteredProjects.filter(p => p.status === 'old'),
      ongoing: filteredProjects.filter(p => p.status === 'ongoing'),
      upcoming: filteredProjects.filter(p => p.status === 'upcoming')
    };
    return grouped;
  }, [filteredProjects]);

  const getStatusInfo = (status: ProjectStatus) => {
    switch (status) {
      case 'old':
        return { 
          label: 'Completed Projects', 
          icon: CheckCircle, 
          color: 'text-green-400', 
          bgColor: 'bg-green-500/10',
          borderColor: 'border-green-500/20'
        };
      case 'ongoing':
        return { 
          label: 'Ongoing Projects', 
          icon: Clock, 
          color: 'text-blue-400', 
          bgColor: 'bg-blue-500/10',
          borderColor: 'border-blue-500/20'
        };
      case 'upcoming':
        return { 
          label: 'Upcoming Projects', 
          icon: Target, 
          color: 'text-purple-400', 
          bgColor: 'bg-purple-500/10',
          borderColor: 'border-purple-500/20'
        };
    }
  };

  const handleTagToggle = (tagId: string) => {
    setActiveTags(prev => 
      prev.includes(tagId) 
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  const clearFilters = () => {
    setActiveStatus('all');
    setActiveTags([]);
    setSearchQuery('');
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        staggerChildren: 0.1 
      } 
    }
  };

  return (
    <div 
      className="min-h-screen text-white"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
    >
      {/* Main Container with Proper Centering */}
      <div className="container-mx py-12 sm:py-16 lg:py-20">
        
        {/* Page Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Explore our portfolio of AI & ML innovations. From completed solutions to exciting upcoming ventures, 
            discover how we're transforming industries through cutting-edge technology.
          </p>
        </motion.div>

        {/* Filters Section */}
        <motion.div 
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div 
            className="rounded-2xl p-6 sm:p-8 border max-w-6xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, #1a2332 0%, #242f42 50%, #1e2a3d 100%)',
              borderColor: 'rgba(59, 130, 246, 0.3)'
            }}
          >
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects, technologies, or domains..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 rounded-xl border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  style={{
                    background: 'rgba(15, 26, 46, 0.8)',
                    borderColor: 'rgba(59, 130, 246, 0.3)'
                  }}
                />
              </div>
            </div>

            {/* Status Filters */}
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center justify-center">
                <Filter className="w-5 h-5 mr-2 text-blue-400" />
                Project Status
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => setActiveStatus('all')}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
                    activeStatus === 'all'
                      ? 'bg-blue-500 text-white shadow-lg scale-105'
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:scale-105'
                  }`}
                >
                  All Projects ({projectData.length})
                </button>
                {(['ongoing', 'upcoming', 'old'] as ProjectStatus[]).map(status => {
                  const statusInfo = getStatusInfo(status);
                  const count = projectData.filter(p => p.status === status).length;
                  const Icon = statusInfo.icon;
                  return (
                    <button
                      key={status}
                      onClick={() => setActiveStatus(status)}
                      className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                        activeStatus === status
                          ? 'bg-blue-500 text-white shadow-lg scale-105'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:scale-105'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{statusInfo.label}</span>
                      <span className="sm:hidden">{status === 'old' ? 'Done' : status === 'ongoing' ? 'Active' : 'Soon'}</span>
                      ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tag Filters */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 text-center">Technology Tags</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-5xl mx-auto">
                {projectTags.map(tag => (
                  <button
                    key={tag.id}
                    onClick={() => handleTagToggle(tag.id)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeTags.includes(tag.id)
                        ? 'bg-blue-500 text-white shadow-lg scale-105'
                        : `${tag.color} hover:scale-105`
                    }`}
                  >
                    <span>{tag.icon}</span>
                    <span className="hidden sm:inline">{tag.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(activeStatus !== 'all' || activeTags.length > 0 || searchQuery) && (
              <div className="mt-8 text-center">
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 text-sm text-gray-400 hover:text-white border border-gray-600 hover:border-blue-400 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Results Summary */}
        {(searchQuery || activeStatus !== 'all' || activeTags.length > 0) && (
          <motion.div 
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div 
              className="rounded-xl p-4 sm:p-6 border max-w-3xl mx-auto text-center"
              style={{
                background: 'linear-gradient(135deg, #1a2332/60 0%, #242f42/60 100%)',
                borderColor: 'rgba(59, 130, 246, 0.2)'
              }}
            >
              <p className="text-gray-300">
                Found <span className="text-blue-400 font-semibold text-lg">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
                {searchQuery && <span> matching "<span className="text-blue-400 font-medium">{searchQuery}</span>"</span>}
                {activeStatus !== 'all' && <span> in <span className="text-blue-400 font-medium">{getStatusInfo(activeStatus).label}</span></span>}
                {activeTags.length > 0 && <span> with selected tags</span>}
              </p>
            </div>
          </motion.div>
        )}

        {/* Projects Content */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {activeStatus === 'all' ? (
            // Show all projects grouped by status
            <div className="space-y-16 sm:space-y-20">
              {(['ongoing', 'upcoming', 'old'] as ProjectStatus[]).map((status, statusIndex) => {
                const projects = projectsByStatus[status];
                if (projects.length === 0) return null;
                
                const statusInfo = getStatusInfo(status);
                const Icon = statusInfo.icon;
                
                return (
                  <motion.section 
                    key={status}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: statusIndex * 0.1 }}
                  >
                    <div className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-12 gap-4">
                      <div className={`p-3 sm:p-4 rounded-xl ${statusInfo.bgColor} border ${statusInfo.borderColor}`}>
                        <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${statusInfo.color}`} />
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center sm:text-left">
                        {statusInfo.label}
                      </h2>
                      <div className="px-4 py-2 bg-gray-700/50 rounded-full">
                        <span className="text-gray-300 text-sm sm:text-base">
                          {projects.length} project{projects.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                    
                    <ProjectGrid projects={projects} />
                  </motion.section>
                );
              })}
            </div>
          ) : (
            // Show filtered projects
            <div>
              <ProjectGrid projects={filteredProjects} />
            </div>
          )}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div 
              className="rounded-2xl p-8 sm:p-12 border max-w-lg mx-auto"
              style={{
                background: 'linear-gradient(135deg, #1a2332 0%, #242f42 100%)',
                borderColor: 'rgba(59, 130, 246, 0.25)'
              }}
            >
              <div className="text-6xl sm:text-8xl mb-6">🔍</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-4">No Projects Found</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Try adjusting your filters or search terms to find relevant projects.
              </p>
              <button
                onClick={clearFilters}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 hover:scale-105 font-medium"
              >
                Clear Filters
              </button>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div 
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div 
            className="rounded-2xl p-8 sm:p-12 border max-w-4xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, #1a2332/80 0%, #242f42/80 100%)',
              borderColor: 'rgba(59, 130, 246, 0.2)'
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-6">Have a Project in Mind?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our AI & ML expertise can bring your vision to life. From concept to deployment, 
              we're here to help you innovate.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Start Your Project
              <ExternalLink className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Enhanced Project Grid Component with Perfect Centering
const ProjectGrid: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div className="w-full flex justify-center">
      {/* Responsive Grid with Perfect Centering and Proper Spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-10 justify-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="w-full max-w-sm"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Enhanced Project Card Component with Better Responsiveness
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const getStatusInfo = (status: ProjectStatus) => {
    switch (status) {
      case 'old':
        return { label: 'Completed', color: 'bg-green-500/20 text-green-300', icon: '✅' };
      case 'ongoing':
        return { label: 'In Progress', color: 'bg-blue-500/20 text-blue-300', icon: '🔄' };
      case 'upcoming':
        return { label: 'Coming Soon', color: 'bg-purple-500/20 text-purple-300', icon: '🚀' };
    }
  };

  const statusInfo = getStatusInfo(project.status);

  return (
    <Link 
      to={`/projects/${project.id}`}
      className="block w-full h-full rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden group"
      style={{
        background: 'linear-gradient(135deg, #1a2332 0%, #242f42 50%, #1e2a3d 100%)',
        borderColor: 'rgba(59, 130, 246, 0.25)'
      }}
    >
      {/* Project Image */}
      <div className="h-48 sm:h-52 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center relative overflow-hidden">
        {project.featuredImage ? (
          <img 
            src={project.featuredImage} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="text-center">
            <div className="text-5xl sm:text-6xl mb-2">🚀</div>
            <p className="text-gray-400 text-sm">Project Preview</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusInfo.color} flex items-center gap-1 backdrop-blur-sm`}>
            <span>{statusInfo.icon}</span>
            {statusInfo.label}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-xl font-semibold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors">
          {project.shortDescription}
        </p>

        {/* Project Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map(tagId => {
            const tag = projectTags.find(t => t.id === tagId);
            return tag ? (
              <span 
                key={tagId}
                className={`px-2 py-1 rounded-md text-xs font-medium ${tag.color} flex items-center gap-1`}
              >
                <span className="text-xs">{tag.icon}</span>
                <span className="hidden sm:inline">{tag.name}</span>
              </span>
            ) : null;
          })}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 rounded-md text-xs text-gray-400 bg-gray-700/50">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Project Meta */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 border-t border-gray-600/50 pt-4">
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">{project.team.length} members</span>
            <span className="sm:hidden">{project.team.length}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
            )}
            {project.githubUrl && (
              <Github className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsPage;