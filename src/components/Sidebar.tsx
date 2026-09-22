'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  FiGithub, FiLinkedin, FiMail,
  FiHome, FiUser, FiCode, FiBriefcase, FiFolder, FiPhone,
  FiMenu, FiX, FiDownload,
} from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { CodeStream } from '@/components/terminal/CodeStream';

const NAV_LINKS = [
  { href: '/',           label: 'Home',       cmd: 'init',    icon: FiHome,      idx: '00' },
  { href: '/about',      label: 'About',      cmd: 'whoami',  icon: FiUser,      idx: '01' },
  { href: '/skills',     label: 'Skills',     cmd: 'stack',   icon: FiCode,      idx: '02' },
  { href: '/experience', label: 'Experience', cmd: 'history', icon: FiBriefcase, idx: '03' },
  { href: '/projects',   label: 'Work',       cmd: 'ls -la',  icon: FiFolder,    idx: '04' },
  { href: '/contact',    label: 'Contact',    cmd: 'connect', icon: FiPhone,     idx: '05' },
];

const SOCIAL_LINKS = [
  { href: 'https://github.com/gajjarumesh',            icon: FiGithub,   label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/umesh-gajjar/', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'https://x.com/_umesh_gajjar',               icon: FaXTwitter, label: 'X (Twitter)' },
  { href: 'mailto:urvishgajjar6@gmail.com',            icon: FiMail,     label: 'Email' },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the rail whenever the route changes — a spatial move should
  // never leave the navigation panel hanging over the new section.
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll while the mobile rail is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Escape closes the rail.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* ── Mobile bar ── */}
      <div className="dim-mobilebar">
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', textDecoration: 'none' }}>
          <span style={{
            width: 34, height: 34, borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: '0.9rem', color: '#fff',
            background: 'linear-gradient(140deg, var(--beam) 0%, var(--beam-deep) 100%)',
            boxShadow: '0 0 0 1px var(--beam-40), 0 6px 18px -8px rgba(47,79,206,0.9)',
          }}>U</span>
          <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--lum-100)' }}>
            Umesh Gajjar
          </span>
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          style={{
            width: 38, height: 38, borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--beam-08)', border: '1px solid var(--beam-24)',
            color: 'var(--lum-80)', cursor: 'pointer',
          }}
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>

      {/* ── Scrim ── */}
      <div
        className={`dim-scrim${open ? ' dim-scrim--on' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ── Rail ── */}
      <aside className={`dim-rail${open ? ' dim-rail--open' : ''}`}>
        {/* ── Code stream band: ambient texture at the top of the rail ── */}
        <div className="dim-rail__stream" aria-hidden="true">
          <CodeStream density={16} speed={0.38} />
          <div className="dim-rail__stream-fade" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '1.25rem 1.125rem 1.5rem' }}>

          {/* ── Identity ── */}
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.125rem' }}>
              <div className="dim-avatar">
                <span style={{ position: 'relative', zIndex: 1 }}>U</span>
              </div>
              <span className="dim-avatar__ring" aria-hidden="true" />
              <span className="dim-beacon" aria-hidden="true" />
            </div>

            <h2 style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--lum-100)', marginBottom: '0.25rem' }}>
              Umesh Gajjar
            </h2>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6875rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--lum-38)', marginBottom: '0.5rem',
            }}>
              Full-Stack Lead
            </p>
            <p className="dim-glow" style={{ fontSize: '0.75rem', fontWeight: 500 }}>
              Available for projects
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', marginTop: '1rem' }}>
              {SOCIAL_LINKS.map((s) => {
                const Icon = s.icon;
                const external = s.href.startsWith('http');
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="dim-node"
                    aria-label={s.label}
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Divider ── */}
          <div style={{
            height: 1, marginBottom: '1.25rem',
            background: 'linear-gradient(90deg, transparent, var(--lum-16), transparent)',
          }} />

          {/* ── Navigation ── */}
          <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.1875rem' }}>
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`dim-navlink${active ? ' dim-navlink--active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  <Icon size={15} style={{ flexShrink: 0 }} />
                  <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
                    <span>{link.label}</span>
                    <span className="dim-navlink__cmd">{link.cmd}</span>
                  </span>
                  <span className="dim-navlink__idx">{link.idx}</span>
                </Link>
              );
            })}
          </nav>

          {/* ── Divider ── */}
          <div style={{
            height: 1, margin: '1.25rem 0',
            background: 'linear-gradient(90deg, transparent, var(--lum-16), transparent)',
          }} />

          <a
            href="/assets/umesh-gajjar-cv.pdf"
            download
            className="dim-btn dim-btn--primary"
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.8125rem', padding: '0.65rem 1rem' }}
          >
            <FiDownload size={13} />
            Download CV
          </a>

          {/* ── Status readout ── */}
          <div style={{ marginTop: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.06em' }}>
            <div className="term-stat" style={{ padding: '0.15rem 0' }}>
              <span style={{ color: 'var(--lum-38)' }}>uptime</span>
              <span className="term-stat__rule" />
              <span style={{ color: 'var(--pulse)' }}>7y+</span>
            </div>
            <div className="term-stat" style={{ padding: '0.15rem 0' }}>
              <span style={{ color: 'var(--lum-38)' }}>status</span>
              <span className="term-stat__rule" />
              <span style={{ color: 'var(--term-green)' }}>online</span>
            </div>
          </div>

          <p style={{
            textAlign: 'center', fontSize: '0.625rem',
            fontFamily: 'var(--font-mono)', color: 'var(--lum-38)',
            marginTop: '0.875rem', letterSpacing: '0.04em',
          }}>
            © {new Date().getFullYear()} · Pune, IN
          </p>
        </div>
      </aside>
    </>
  );
}
