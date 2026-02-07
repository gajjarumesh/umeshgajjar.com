import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

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
      href: 'https://linkedin.com/in/umeshgajjar',
      label: 'LinkedIn',
      icon: FiLinkedin,
    },
    {
      href: 'https://twitter.com/umeshgajjar',
      label: 'Twitter',
      icon: FiTwitter,
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
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Umesh Gajjar</h3>
            <p className="text-sm text-gray-400 mb-4">
              Senior Full Stack Developer with 7+ years of experience building
              scalable web applications with modern technologies.
            </p>
            <p className="text-sm text-gray-400">
              📍 Pune, Maharashtra, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Let's collaborate on your next project
            </p>
            <div className="flex gap-4">
              {FOOTER_LINKS.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-sm text-gray-500">
              © {currentYear} Umesh Gajjar. All rights reserved.
            </p>
            <p className="text-center text-sm text-gray-500">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
