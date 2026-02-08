'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Skip rendering header on admin pages
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <header className="bg-background/95 backdrop-blur-lg border-b border-secondary/20 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-4 transition-transform duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <div>
              <div className="text-xl font-bold text-fontColor group-hover:text-primary transition-colors duration-300">
                Umesh Gajjar
              </div>
              <div className="text-sm text-pattern/60 font-medium">Full Stack Developer</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-all duration-300 px-5 py-3 rounded-xl ${
                  pathname === link.href
                    ? 'text-pattern bg-pattern/10 shadow-sm font-semibold'
                    : 'text-fontColor hover:text-pattern hover:bg-secondary/10'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-3 rounded-xl hover:bg-secondary/20 transition-all duration-300 group"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-fontColor group-hover:text-pattern transition-colors"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 animate-in slide-in-from-top-2 duration-300">
            <div className="bg-white/95 backdrop-blur-lg border border-secondary/30 rounded-2xl p-6 shadow-lg">
              {NAV_LINKS.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center py-4 px-4 rounded-xl text-base font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-primary bg-primary/10 font-semibold'
                      : 'text-fontColor hover:text-pattern hover:bg-secondary/10'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="mt-4 pt-4 border-t border-gray-200/50">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-white text-white hover:text-primary px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border-2 border-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Get in Touch</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
