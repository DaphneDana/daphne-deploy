// src/pages/ProjectsPage.tsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, Users, ExternalLink, Github, Target, Clock, CheckCircle } from 'lucide-react';
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

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of AI & ML innovations. From completed solutions to exciting upcoming ventures, 
            discover how we're transforming industries through cutting-edge technology.
          </p>
        </div>

        {/* Filters Section */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div 
            className="rounded-2xl p-6 border"
            style={{
              background: 'rgba(26, 35, 50, 0.8)',
              backdropFilter: 'blur(10px)',
              borderColor: 'rgba(64, 150, 255, 0.3)'
            }}
          >
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-lg mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects, technologies, or domains..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    background: 'rgba(51, 65, 85, 0.8)',
                    borderColor: 'rgba(64, 150, 255, 0.3)'
                  }}
                />
              </div>
            </div>

            {/* Status Filters */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2 text-blue-400" />
                Project Status
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveStatus('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeStatus === 'all'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  All Projects ({projectData.length})
                </button>
                {(['old', 'ongoing', 'upcoming'] as ProjectStatus[]).map(status => {
                  const statusInfo = getStatusInfo(status);
                  const count = projectData.filter(p => p.status === status).length;
                  return (
                    <button
                      key={status}
                      onClick={() => setActiveStatus(status)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        activeStatus === status
                          ? 'bg-blue-500 text-white shadow-lg'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      }`}
                    >
                      <statusInfo.icon className="w-4 h-4" />
                      {statusInfo.label} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tag Filters */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Technology Tags</h3>
              <div className="flex flex-wrap gap-2">
                {projectTags.map(tag => (
                  <button
                    key={tag.id}
                    onClick={() => handleTagToggle(tag.id)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeTags.includes(tag.id)
                        ? 'bg-blue-500 text-white shadow-lg scale-105'
                        : `${tag.color} hover:scale-105`
                    }`}
                  >
                    <span>{tag.icon}</span>
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(activeStatus !== 'all' || activeTags.length > 0 || searchQuery) && (
              <div className="mt-6 text-center">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-600 hover:border-blue-400 rounded-lg transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Results Summary */}
        {(searchQuery || activeStatus !== 'all' || activeTags.length > 0) && (
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div 
              className="rounded-xl p-4 border"
              style={{
                background: 'rgba(26, 35, 50, 0.6)',
                borderColor: 'rgba(64, 150, 255, 0.2)'
              }}
            >
              <p className="text-gray-300 text-center">
                Found <span className="text-blue-400 font-semibold">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
                {searchQuery && <span> matching "<span className="text-blue-400">{searchQuery}</span>"</span>}
                {activeStatus !== 'all' && <span> in <span className="text-blue-400">{getStatusInfo(activeStatus).label}</span></span>}
                {activeTags.length > 0 && <span> with selected tags</span>}
              </p>
            </div>
          </div>
        )}

        {/* Projects by Status */}
        {activeStatus === 'all' ? (
          // Show all projects grouped by status
          <div className="space-y-16">
            {(['ongoing', 'upcoming', 'old'] as ProjectStatus[]).map((status, statusIndex) => {
              const projects = projectsByStatus[status];
              if (projects.length === 0) return null;
              
              const statusInfo = getStatusInfo(status);
              
              return (
                <section 
                  key={status}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${600 + statusIndex * 200}ms` }}
                >
                  <div className="flex items-center mb-8">
                    <div className={`p-3 rounded-xl ${statusInfo.bgColor} border ${statusInfo.borderColor} mr-4`}>
                      <statusInfo.icon className={`w-6 h-6 ${statusInfo.color}`} />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{statusInfo.label}</h2>
                    <div className="ml-4 px-3 py-1 bg-slate-700 rounded-full">
                      <span className="text-gray-300 text-sm">{projects.length} project{projects.length !== 1 ? 's' : ''}</span>
                    </div>
                  </div>
                  
                  <ProjectGrid projects={projects} />
                </section>
              );
            })}
          </div>
        ) : (
          // Show filtered projects
          <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <ProjectGrid projects={filteredProjects} />
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div 
              className="rounded-2xl p-12 border max-w-md mx-auto"
              style={{
                background: 'rgba(26, 35, 50, 0.7)',
                borderColor: 'rgba(64, 150, 255, 0.25)'
              }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-blue-300 mb-2">No Projects Found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your filters or search terms to find relevant projects.</p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div 
            className="rounded-2xl p-8 border"
            style={{
              background: 'rgba(26, 35, 50, 0.6)',
              borderColor: 'rgba(64, 150, 255, 0.2)'
            }}
          >
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Have a Project in Mind?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI & ML expertise can bring your vision to life. From concept to deployment, 
              we're here to help you innovate.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Grid Component
const ProjectGrid: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          animationDelay={index * 100}
        />
      ))}
    </div>
  );
};

// Project Card Component
const ProjectCard: React.FC<{ project: Project; animationDelay?: number }> = ({ 
  project, 
  animationDelay = 0 
}) => {
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
      className="block rounded-2xl border hover:border-blue-400/40 transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden group animate-fade-in-up"
      style={{
        background: 'rgba(26, 35, 50, 0.7)',
        borderColor: 'rgba(64, 150, 255, 0.25)',
        backdropFilter: 'blur(10px)',
        animationDelay: `${animationDelay}ms`
      }}
    >
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center relative overflow-hidden">
        {project.featuredImage ? (
          <img 
            src={project.featuredImage} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-center">
            <div className="text-6xl mb-2">🚀</div>
            <p className="text-gray-400 text-sm">Project Preview</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Status and Tags */}
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusInfo.color} flex items-center gap-1`}>
            <span>{statusInfo.icon}</span>
            {statusInfo.label}
          </span>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            {project.status === 'old' ? project.completedDate : 
             project.status === 'ongoing' ? `Started ${project.startDate}` : 
             `Starts ${project.startDate}`}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-semibold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Project Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map(tagId => {
            const tag = projectTags.find(t => t.id === tagId);
            return tag ? (
              <span 
                key={tagId}
                className={`px-2 py-1 rounded text-xs font-medium ${tag.color} flex items-center gap-1`}
              >
                <span className="text-xs">{tag.icon}</span>
                {tag.name}
              </span>
            ) : null;
          })}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 rounded text-xs text-gray-500 bg-slate-700">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Project Meta */}
        <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-600/50 pt-4">
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {project.team.length} team member{project.team.length !== 1 ? 's' : ''}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {project.duration}
          </div>
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <ExternalLink className="w-3 h-3 text-blue-400" />
            )}
            {project.githubUrl && (
              <Github className="w-3 h-3 text-gray-400" />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsPage;