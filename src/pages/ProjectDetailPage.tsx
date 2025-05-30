// src/pages/ProjectDetailPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Users, ExternalLink, Github, Target, CheckCircle, AlertTriangle, Lightbulb, TrendingUp, Award, Globe } from 'lucide-react';
import type { Project } from '../types/project';
import { projectData, projectTags } from '../assets/data/projectData';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<'problem' | 'proposal' | 'result'>('problem');

  useEffect(() => {
    const foundProject = id ? projectData.find(p => p.id === id) : null;
    setProject(foundProject || null);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-300 mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">Sorry, this project doesn't exist or has been removed.</p>
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const getStatusInfo = () => {
    switch (project.status) {
      case 'old':
        return { 
          label: 'Completed Project', 
          icon: CheckCircle, 
          color: 'text-green-400', 
          bgColor: 'bg-green-500/10',
          borderColor: 'border-green-500/20'
        };
      case 'ongoing':
        return { 
          label: 'Project In Progress', 
          icon: Clock, 
          color: 'text-blue-400', 
          bgColor: 'bg-blue-500/10',
          borderColor: 'border-blue-500/20'
        };
      case 'upcoming':
        return { 
          label: 'Upcoming Project', 
          icon: Target, 
          color: 'text-purple-400', 
          bgColor: 'bg-purple-500/10',
          borderColor: 'border-purple-500/20'
        };
    }
  };

  const statusInfo = getStatusInfo();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
    }}>
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div 
          className="rounded-2xl overflow-hidden border"
          style={{
            background: 'rgba(26, 35, 50, 0.8)',
            borderColor: 'rgba(64, 150, 255, 0.3)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Hero Image */}
          <div className="relative h-80 overflow-hidden">
            {project.featuredImage ? (
              <img
                src={project.featuredImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div 
                className="w-full h-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(64, 150, 255, 0.1), rgba(82, 196, 255, 0.05))' }}
              >
                <div className="text-center">
                  <div className="text-8xl mb-4">🚀</div>
                  <p className="text-xl text-gray-300 font-semibold">Innovation in Progress</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* Status Badge */}
            <div className="absolute bottom-6 left-6">
              <div className={`px-4 py-2 rounded-full text-white font-semibold backdrop-blur-sm flex items-center gap-2 ${statusInfo.bgColor} border ${statusInfo.borderColor}`}>
                <statusInfo.icon className={`w-4 h-4 ${statusInfo.color}`} />
                {statusInfo.label}
              </div>
            </div>
          </div>

          {/* Project Header */}
          <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              {/* Left Content */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-blue-300 mb-4 leading-tight">
                  {project.title}
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map(tagId => {
                    const tag = projectTags.find(t => t.id === tagId);
                    return tag ? (
                      <span 
                        key={tagId}
                        className={`px-3 py-2 rounded-lg text-sm font-medium ${tag.color} flex items-center gap-2 border border-current/20`}
                      >
                        <span>{tag.icon}</span>
                        {tag.name}
                      </span>
                    ) : null;
                  })}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="lg:w-80">
                <div 
                  className="rounded-xl p-6 border space-y-6"
                  style={{
                    background: 'rgba(51, 65, 85, 0.4)',
                    borderColor: 'rgba(64, 150, 255, 0.15)'
                  }}
                >
                  {/* Project Meta */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Duration
                        </span>
                        <span className="text-gray-300">{project.duration}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Started
                        </span>
                        <span className="text-gray-300">{formatDate(project.startDate)}</span>
                      </div>
                      
                      {project.completedDate && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Completed
                          </span>
                          <span className="text-gray-300">{formatDate(project.completedDate)}</span>
                        </div>
                      )}
                      
                      {project.expectedDate && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            Expected
                          </span>
                          <span className="text-gray-300">{formatDate(project.expectedDate)}</span>
                        </div>
                      )}
                      
                      {project.client && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            Client
                          </span>
                          <span className="text-gray-300">{project.client}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Team Members */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Team ({project.team.length})
                    </h3>
                    <div className="space-y-3">
                      {project.team.map((member, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm"
                          >
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="text-white font-medium text-sm">{member.name}</div>
                            <div className="text-gray-400 text-xs">{member.role}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Story Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex justify-center">
          <div className="flex bg-slate-800/50 rounded-xl p-1 border border-slate-700/50">
            {[
              { key: 'problem', label: 'Problem', icon: AlertTriangle },
              { key: 'proposal', label: 'Proposal', icon: Lightbulb },
              { key: 'result', label: 'Result', icon: TrendingUp }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveSection(key as any)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeSection === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Story Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {activeSection === 'problem' && <ProblemSection project={project} />}
        {activeSection === 'proposal' && <ProposalSection project={project} />}
        {activeSection === 'result' && <ResultSection project={project} />}
      </div>
    </div>
  );
};

// Problem Section Component
const ProblemSection: React.FC<{ project: Project }> = ({ project }) => (
  <div 
    className="rounded-2xl p-8 border animate-fade-in-up"
    style={{
      background: 'rgba(26, 35, 50, 0.8)',
      borderColor: 'rgba(239, 68, 68, 0.3)',
      backdropFilter: 'blur(10px)'
    }}
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
        <AlertTriangle className="w-8 h-8 text-red-400" />
      </div>
      <h2 className="text-3xl font-bold text-red-300">{project.problem.title}</h2>
    </div>
    
    <p className="text-gray-300 text-lg leading-relaxed mb-8">
      {project.problem.description}
    </p>
    
    <h3 className="text-xl font-semibold text-white mb-4">Key Challenges</h3>
    <div className="grid md:grid-cols-2 gap-4">
      {project.problem.challenges.map((challenge, index) => (
        <div 
          key={index}
          className="flex items-start gap-3 p-4 rounded-lg bg-red-500/5 border border-red-500/10"
        >
          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
          <span className="text-gray-300">{challenge}</span>
        </div>
      ))}
    </div>
  </div>
);

// Proposal Section Component
const ProposalSection: React.FC<{ project: Project }> = ({ project }) => (
  <div 
    className="rounded-2xl p-8 border animate-fade-in-up"
    style={{
      background: 'rgba(26, 35, 50, 0.8)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
      backdropFilter: 'blur(10px)'
    }}
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
        <Lightbulb className="w-8 h-8 text-blue-400" />
      </div>
      <h2 className="text-3xl font-bold text-blue-300">{project.proposal.title}</h2>
    </div>
    
    <p className="text-gray-300 text-lg leading-relaxed mb-8">
      {project.proposal.description}
    </p>
    
    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Our Approach</h3>
        <div className="space-y-3">
          {project.proposal.approach.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-sm font-semibold flex-shrink-0 mt-1">
                {index + 1}
              </div>
              <span className="text-gray-300">{step}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
        <div className="flex flex-wrap gap-2">
          {project.proposal.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-2 bg-blue-500/10 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Result Section Component
const ResultSection: React.FC<{ project: Project }> = ({ project }) => (
  <div 
    className="rounded-2xl p-8 border animate-fade-in-up"
    style={{
      background: 'rgba(26, 35, 50, 0.8)',
      borderColor: 'rgba(34, 197, 94, 0.3)',
      backdropFilter: 'blur(10px)'
    }}
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
        <TrendingUp className="w-8 h-8 text-green-400" />
      </div>
      <h2 className="text-3xl font-bold text-green-300">{project.result.title}</h2>
    </div>
    
    <p className="text-gray-300 text-lg leading-relaxed mb-8">
      {project.result.description}
    </p>
    
    {/* Metrics */}
    {project.result.metrics && (
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-6">Key Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {project.result.metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center p-4 rounded-lg bg-green-500/5 border border-green-500/10"
            >
              <div className="text-3xl mb-2">{metric.icon}</div>
              <div className="text-2xl font-bold text-green-400 mb-1">{metric.value}</div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    )}
    
    {/* Achievements */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {project.result.achievements.map((achievement, index) => (
          <div 
            key={index}
            className="flex items-start gap-3 p-4 rounded-lg bg-green-500/5 border border-green-500/10"
          >
            <Award className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">{achievement}</span>
          </div>
        ))}
      </div>
    </div>
    
    {/* Impact */}
    <div 
      className="p-6 rounded-xl border"
      style={{
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.05))',
        borderColor: 'rgba(34, 197, 94, 0.2)'
      }}
    >
      <h3 className="text-xl font-semibold text-green-300 mb-3 flex items-center gap-2">
        <Target className="w-5 h-5" />
        Impact & Legacy
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {project.result.impact}
      </p>
    </div>
  </div>
);

export default ProjectDetailPage;