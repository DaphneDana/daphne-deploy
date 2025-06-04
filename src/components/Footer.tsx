// src/components/Footer.tsx - MODERN REDESIGN
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Company Profile', href: '/company-profile' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const solutionsLinks = [
    { name: 'Technology', href: '/technology' },
    { name: 'Projects', href: '/projects' },
    { name: 'Member Companies', href: '/member-companies' },
  ];

  const resourcesLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Latest News', href: '/latest-news' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'GitHub', href: '#', icon: Github },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Handle anchor links or external links
      window.location.href = href;
    } else {
      navigate(href);
    }
  };

  return (
    <footer 
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0f1a2e 100%)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <Logo className="h-12 w-auto" textColor="text-blue-400" accentColor="text-cyan-400" />
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              LLP pioneers transformative AI & ML solutions, empowering businesses to innovate and lead in the digital age. Join our ecosystem of innovation.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-3 rounded-xl border transition-all duration-300 hover:transform hover:-translate-y-1 group"
                  style={{
                    background: 'rgba(26, 35, 50, 0.6)',
                    borderColor: 'rgba(64, 150, 255, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.6)';
                    e.currentTarget.style.background = 'rgba(64, 150, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(64, 150, 255, 0.3)';
                    e.currentTarget.style.background = 'rgba(26, 35, 50, 0.6)';
                  }}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-lg font-semibold text-blue-300 mb-6 flex items-center gap-2">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-blue-300 mb-6">
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutionsLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>

            {/* Resources subsection */}
            <h4 className="text-md font-medium text-cyan-300 mt-8 mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-blue-300 mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-gray-300 leading-relaxed">
                  123 AI Avenue, Innovation Park<br />
                  Tech City, TX 75001, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <a 
                  href="mailto:info@llp.ai" 
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
                >
                  info@llp.ai
                </a>
              </li>
            </ul>

            {/* Legal Links */}
            <div className="mt-8">
              <h4 className="text-md font-medium text-cyan-300 mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-gray-300 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="mt-16 py-8 border-t border-gray-600/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-300 mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI innovations, industry trends, and company updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  background: 'rgba(51, 65, 85, 0.8)',
                  borderColor: 'rgba(64, 150, 255, 0.3)'
                }}
              />
              <button
                className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105"
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
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gray-600/30 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} LLP Technologies Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>Made with ❤️ by LLP Team</span>
              <span>•</span>
              <span>Powered by AI Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;