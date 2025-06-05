// src/components/Footer.tsx
import React from 'react';
import Logo from './Logo';
import { Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'AI/ML Solutions', href: '#' },
    { name: 'Our Services', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
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

  return (
    <footer className="bg-slate-900 text-neutral-light">
      <div className="container-mx section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & About */}
          <div className="space-y-6">
            <Logo className="h-12 w-auto" textColor="text-white" accentColor="text-secondary-light" />
            <p className="text-sm text-neutral-medium leading-relaxed">
              LLP pioneers transformative AI & ML solutions, empowering businesses
              to innovate and lead in the digital age.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-neutral-medium hover:text-secondary transition-colors duration-200"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-neutral-medium hover:text-secondary transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-neutral-medium hover:text-secondary transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-secondary-light flex-shrink-0" />
                <span className="text-sm text-neutral-medium">
                  123 AI Avenue, Innovation Park, Tech City, TX 75001, USA
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-secondary-light flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-neutral-medium hover:text-secondary transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-secondary-light flex-shrink-0" />
                <a href="mailto:info@llp.ai" className="text-sm text-neutral-medium hover:text-secondary transition-colors duration-200">
                  info@llp.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-dark text-center">
          <p className="text-sm text-neutral-medium">
            © {currentYear} LLP Technologies Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;