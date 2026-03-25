'use client';

import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const FOOTER_LINKS = {
  main: [
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ],
  social: [
    {
      href: 'https://github.com/gajjarumesh',
      label: 'GitHub',
      icon: FiGithub,
    },
    {
      href: 'https://www.linkedin.com/in/umesh-gajjar-6a8817108/',
      label: 'LinkedIn',
      icon: FiLinkedin,
    },
    {
      href: 'https://x.com/_umesh_gajjar',
      label: 'X (Twitter)',
      icon: FaXTwitter,
    },
    {
      href: 'mailto:hello@umeshgajjar.com',
      label: 'Email',
      icon: FiMail,
    },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-pattern/10 rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-pattern rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold">Umesh Gajjar</h3>
                <p className="text-pattern font-medium text-sm">Senior Full Stack Developer</p>
              </div>
            </div>
            <p className="text-white/85 mb-8 leading-relaxed max-w-md text-lg">
              Crafting exceptional web experiences with modern technologies. 
              Specialized in React, Next.js, Node.js, and enterprise solutions 
              that drive business growth.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/75">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pattern rounded-full"></div>
                <span>Available for projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span> 
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              Quick Links
            </h4>
            <StaggerContainer>
              <ul className="space-y-4">
                {FOOTER_LINKS.main.map((link) => (
                  <StaggerItem key={link.href}>
                  <li>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-3 text-white/75 hover:text-pattern/90 transition-all duration-300 transform hover:translate-x-1"
                    >
                      <div className="w-1.5 h-1.5 bg-pattern/50 group-hover:bg-pattern rounded-full transition-colors"></div>
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  </li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>
          </div>

          {/* Enhanced Connect Section */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              Let's Connect
            </h4>
            <p className="text-white/80 mb-6 leading-relaxed">
              Ready to discuss your next project? Let's collaborate!
            </p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {FOOTER_LINKS.social.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-3 text-white/75 hover:text-white/90 transition-all duration-300 p-2 rounded-xl hover:bg-white/5 transform hover:scale-105"
                    aria-label={social.label}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="min-w-10 min-h-10 bg-white/10 group-hover:bg-white/50 rounded-xl flex items-center justify-center transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-sm">{social.label}</span>
                  </a>
                );
              })}
            </div>
            
            {/* Quick Contact */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <p className="text-white/90 text-sm font-semibold mb-2">Quick Contact</p>
              <a 
                href="mailto:hello@umeshgajjar.com" 
                className="text-white/80 font-semibold hover:text-primary-400 transition-colors"
              >
                hello@umeshgajjar.com
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
              <p className="text-white/60 text-sm">
                © {currentYear} Umesh Gajjar. All rights reserved.
              </p>
              <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
              <p className="text-white/60 text-sm">
                Crafted with ❤️ using Next.js & Tailwind CSS
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-pattern-400 rounded-full animate-pulse"></div>
                  <span>Currently available</span>
                </div>
              </div>
              
              {/* Back to top button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center gap-2 text-white/60 hover:text-primary text-sm font-semibold transition-all duration-300 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl"
              >
                <span>Back to Top</span>
                <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
