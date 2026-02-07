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
    <footer className="bg-secondary text-white mt-24 border-t-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">Umesh Gajjar</h3>
            <p className="text-sm text-white/75 mb-4 leading-relaxed">
              Senior Full Stack Developer with 7+ years of experience building
              scalable web applications with modern technologies.
            </p>
            <p className="text-sm text-white/75 flex items-center gap-2">
              <span>📍</span> Pune, Maharashtra, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-200"
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
            <p className="text-sm text-white/75 mb-5 leading-relaxed">
              Let's collaborate on your next project
            </p>
            <div className="flex gap-3">
              {FOOTER_LINKS.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/75 hover:text-primary transition-all duration-300 p-2.5 rounded-lg hover:bg-white/10 transform hover:scale-110"
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
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-sm text-white/60">
              © {currentYear} Umesh Gajjar. All rights reserved.
            </p>
            <p className="text-center text-sm text-white/60">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
