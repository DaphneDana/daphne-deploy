
// src/components/Header.tsx
import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react'; 

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'AI/ML Solutions', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact', href: '/contact', current: true },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-lightest shadow-md sticky top-0 z-50">
      <nav className="container-mx flex items-center justify-between py-4">
        <div className="flex items-center">
          <a href="/" aria-label="LLP Home">
            <Logo className="h-10 md:h-12 w-auto" textColor="text-primary" accentColor="text-secondary" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 transition-colors duration-200
                ${item.current
                  ? 'text-primary'
                  : 'text-neutral-dark hover:text-primary-dark'
                }`}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex">
          <a href="#quote" className="btn btn-secondary text-sm">
            Get a Quote
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-dark hover:text-primary"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 animate-slide-in-left">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" onClick={() => setMobileMenuOpen(false)}/>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-lightest px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-dark/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <Logo className="h-10 w-auto" textColor="text-primary" accentColor="text-secondary" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-neutral-dark hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-neutral-medium/10">
                <div className="space-y-2 py-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200
                        ${item.current
                          ? 'text-primary bg-primary/10'
                          : 'text-neutral-darkest hover:bg-neutral-light hover:text-primary-dark'
                        }`}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#quote"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-neutral-darkest hover:bg-neutral-light hover:text-primary-dark"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
