// src/components/Header.tsx - CLEAN LAYOUT WITHOUT CONTAINERS
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import Logo from './Logo';

// Navigation structure with dropdowns
const navigationItems = [
  { 
    name: 'Home', 
    href: '/', 
    type: 'link' 
  },
  {
    name: 'Company',
    type: 'dropdown',
    items: [
      { name: 'About Us', href: '/about', description: 'Our mission, vision, and team' },
      { name: 'Company Profile', href: '/company-profile', description: 'Detailed company information' },
      { name: 'Careers', href: '/careers', description: 'Join our amazing team' },
    ]
  },
  {
    name: 'Solutions',
    type: 'dropdown',
    items: [
      { name: 'Technology', href: '/technology', description: 'Our tech stack and innovations' },
      { name: 'Projects', href: '/projects', description: 'Showcase of our work' },
      { name: 'Member Companies', href: '/member-companies', description: 'Our ecosystem partners' },
    ]
  },
  {
    name: 'Resources',
    type: 'dropdown',
    items: [
      { name: 'Blog', href: '/blog', description: 'Insights and technical articles' },
      { name: 'Latest News', href: '/latest-news', description: 'Company updates and announcements' },
    ]
  },
  { 
    name: 'Contact', 
    href: '/contact', 
    type: 'link' 
  },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleNavigation = (href: string) => {
    navigate(href);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const isActivePage = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-lg shadow-xl' 
          : 'bg-transparent'
      }`}
      style={{
        background: isScrolled 
          ? 'rgba(26, 35, 50, 0.95)' 
          : 'linear-gradient(135deg, rgba(26, 35, 50, 0.9), rgba(15, 26, 46, 0.8))',
        borderBottom: isScrolled ? '1px solid rgba(64, 150, 255, 0.2)' : 'none'
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Far Left */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavigation('/')}
              className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105"
            >
              <Logo className="h-10 w-auto" textColor="text-blue-400" accentColor="text-cyan-400" />
            </button>
          </div>

          {/* Spacer to push navigation to the right */}
          <div className="flex-1"></div>

          {/* Desktop Navigation - Far Right */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.type === 'link' ? (
                  <button
                    onClick={() => handleNavigation(item.href!)}
                    className={`text-sm font-medium transition-colors duration-300 bg-transparent border-none outline-none ${
                      isActivePage(item.href!)
                        ? 'text-blue-300'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    style={{ background: 'none', boxShadow: 'none' }}
                  >
                    {item.name}
                  </button>
                ) : (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`text-sm font-medium transition-colors duration-300 flex items-center gap-1 bg-transparent border-none outline-none ${
                        item.items?.some(subItem => isActivePage(subItem.href))
                          ? 'text-blue-300'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      style={{ background: 'none', boxShadow: 'none' }}
                    >
                      {item.name}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div 
                        className="absolute top-full right-0 mt-2 w-80 rounded-xl border shadow-2xl overflow-hidden animate-fade-in-up"
                        style={{
                          background: 'rgba(26, 35, 50, 0.98)',
                          borderColor: 'rgba(64, 150, 255, 0.3)',
                          backdropFilter: 'blur(20px)'
                        }}
                      >
                        {/* Decorative gradient line */}
                        <div 
                          className="h-1"
                          style={{ background: 'linear-gradient(90deg, #4096ff, #52c4ff)' }}
                        ></div>
                        
                        <div className="p-2">
                          {item.items?.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={() => handleNavigation(subItem.href)}
                              className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-start gap-3 group ${
                                isActivePage(subItem.href)
                                  ? 'bg-blue-500/20 text-blue-300'
                                  : 'hover:bg-blue-500/10 text-gray-300 hover:text-white'
                              }`}
                            >
                              <div className="flex-1">
                                <div className="font-medium mb-1 group-hover:text-blue-300 transition-colors">
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-gray-400 leading-relaxed">
                                  {subItem.description}
                                </div>
                              </div>
                              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <button
              onClick={() => handleNavigation('/contact')}
              className="ml-8 px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #4096ff, #52c4ff)',
                boxShadow: '0 4px 15px rgba(64, 150, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(64, 150, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(64, 150, 255, 0.3)';
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white transition-all duration-300"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden animate-fade-in-up">
          <div 
            className="mx-4 mt-2 mb-4 rounded-2xl border shadow-2xl overflow-hidden"
            style={{
              background: 'rgba(26, 35, 50, 0.98)',
              borderColor: 'rgba(64, 150, 255, 0.3)',
              backdropFilter: 'blur(20px)'
            }}
          >
            {/* Decorative gradient line */}
            <div 
              className="h-1"
              style={{ background: 'linear-gradient(90deg, #4096ff, #52c4ff)' }}
            ></div>
            
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.type === 'link' ? (
                    <button
                      onClick={() => handleNavigation(item.href!)}
                      className={`w-full text-left p-4 transition-all duration-300 font-medium ${
                        isActivePage(item.href!)
                          ? 'text-blue-300'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )}
                        className={`w-full text-left p-4 transition-all duration-300 font-medium flex items-center justify-between ${
                          item.items?.some(subItem => isActivePage(subItem.href))
                            ? 'text-blue-300'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {item.name}
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.items?.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={() => handleNavigation(subItem.href)}
                              className={`w-full text-left p-3 transition-all duration-300 ${
                                isActivePage(subItem.href)
                                  ? 'text-blue-300'
                                  : 'text-gray-400 hover:text-white'
                              }`}
                            >
                              <div className="font-medium mb-1">{subItem.name}</div>
                              <div className="text-xs text-gray-500">{subItem.description}</div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4">
                <button
                  onClick={() => handleNavigation('/contact')}
                  className="w-full px-6 py-4 rounded-xl font-medium text-white transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #4096ff, #52c4ff)',
                    boxShadow: '0 4px 15px rgba(64, 150, 255, 0.3)'
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;