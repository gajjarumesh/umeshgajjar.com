import Link from 'next/link';
import { FiCode, FiServer, FiLayout, FiCloud, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { HoloPanel } from '@/components/dimension/HoloPanel';
import { HeroStage } from '@/components/gl/HeroStage';
import { Prompt, Glitch, StatLine, AsciiArt } from '@/components/terminal/Terminal';
import {
  SpatialSection, Stagger, StaggerItem, ParallaxLayer, TiltPanel, Reveal,
} from '@/components/dimension/Spatial';

export const metadata = {
  title: 'Umesh Gajjar – Full-Stack Lead Building Scalable Web Applications',
  description:
    'Umesh Gajjar – Full-Stack Lead with 7+ years of experience in Next.js, React, Vue.js, Node.js, Laravel, and WordPress. Building fast, secure, scalable web applications for startups, agencies, and SaaS companies.',
  keywords: 'Full Stack Developer, React Developer, Next.js Expert, Vue.js Developer, Node.js Developer, Laravel Developer, WordPress Developer, Pune Developer, Senior Developer, Freelance Developer',
};

const services = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    slug: 'frontend',
    description: 'Modern, performant applications built with Next.js, React, Vue.js, Nuxt.js, TypeScript, and Tailwind CSS.',
    features: ['Next.js / React', 'Vue.js / Nuxt.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: FiServer,
    title: 'Backend Architecture',
    slug: 'backend',
    description: 'Scalable Node.js, Laravel, and PHP solutions with RESTful APIs for enterprise and SaaS needs.',
    features: ['Node.js', 'Laravel / PHP', 'RESTful APIs', 'Prisma'],
  },
  {
    icon: FiLayout,
    title: 'WordPress & CMS',
    slug: 'cms',
    description: 'Custom WordPress development, plugin creation, and CMS implementations for content publishing.',
    features: ['Custom Themes', 'Plugin Development', 'WordPress'],
  },
  {
    icon: FiCloud,
    title: 'DevOps & Tools',
    slug: 'devops',
    description: 'Docker containerization, CI/CD pipelines, and deployments on Vercel and Netlify.',
    features: ['Git', 'Docker', 'CI/CD', 'Vercel / Netlify'],
  },
];

const stats = [
  { value: '7+',  label: 'Years Experience' },
  { value: '6',   label: 'Companies' },
  { value: '40%', label: 'Faster Load Times' },
  { value: '25%', label: 'Fewer Checkout Errors' },
];

const stack = [
  'Next.js', 'React', 'Vue.js', 'Node.js', 'Laravel', 'TypeScript', 'PostgreSQL', 'Docker',
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <SpatialSection as="header" className="dim-section" depth={200}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
          gap: '3rem',
          alignItems: 'center',
        }}>

          <div>
            <Prompt path="~" command="init --profile" />

            <h1 className="dim-h1" style={{ marginTop: '1rem' }}>
              Umesh{' '}
              <Glitch className="dim-beam-text">Gajjar</Glitch>
            </h1>

            <div className="dim-tagline" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
              <span style={{
                width: 34, height: 2, borderRadius: 2, flexShrink: 0,
                background: 'linear-gradient(90deg, var(--pulse), var(--beam))',
                boxShadow: '0 0 12px var(--pulse-40)',
              }} />
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.8125rem',
                color: 'var(--lum-55)', letterSpacing: '0.04em', margin: 0,
              }}>
                Full-Stack Lead · Infosys · Pune, India
              </p>
            </div>

            <p className="dim-lede" style={{ marginBottom: '2rem' }}>
              7+ years building fast, secure, and scalable web applications for startups,
              agencies, and enterprise clients. Specialising in Next.js, React, Node.js,
              and Laravel.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link href="/contact" className="dim-btn dim-btn--pulse">
                Hire Me <FiArrowRight size={14} />
              </Link>
              <Link href="/projects" className="dim-btn dim-btn--ghost">
                View Work <FiArrowRight size={14} />
              </Link>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {stack.map((s) => (
                <span key={s} className="dim-chip">{s}</span>
              ))}
            </div>
          </div>

          {/* WebGL core — lazy-loaded, Canvas 2D fallback */}
          <ParallaxLayer depth={0.4}>
            <TiltPanel max={6}>
              <HoloPanel variant="bracket" style={{ padding: '1rem' }}>
                <HeroStage height={300} />
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', marginTop: '0.875rem',
                  fontFamily: 'var(--font-mono)', fontSize: '0.6875rem',
                  color: 'var(--lum-38)', letterSpacing: '0.1em',
                }}>
                  <span>CORE / RENDERING</span>
                  <span className="dim-glow">7Y · 6 ORGS</span>
                </div>
              </HoloPanel>
            </TiltPanel>
          </ParallaxLayer>
        </div>
      </SpatialSection>

      {/* ═══ STATS ═══ */}
      <Stagger className="dim-grid-4 dim-section" gap={0.07}>
        {stats.map((s) => (
          <StaggerItem key={s.label}>
            <HoloPanel variant="flat" className="term-ticks" style={{ textAlign: 'center', position: 'relative' }}>
              <div className="dim-beam-text" style={{
                fontSize: '2rem', fontWeight: 700, lineHeight: 1, marginBottom: '0.4rem',
              }}>
                {s.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.6875rem',
                color: 'var(--lum-38)', textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>
                {s.label}
              </div>
              <div className="dim-meter" style={{ marginTop: '0.875rem' }}>
                <div className="dim-meter__fill" style={{ width: '100%' }} />
              </div>
            </HoloPanel>
          </StaggerItem>
        ))}
      </Stagger>

      {/* ═══ SERVICES ═══ */}
      <SpatialSection className="dim-section">
        <Prompt path="~/services" command="ls --capabilities" />
        <h2 className="dim-h2" style={{ marginTop: '0.875rem' }}>What I Build</h2>
        <div className="dim-rule" />

        <Stagger className="dim-grid-2" gap={0.09}>
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <StaggerItem key={svc.title}>
                <TiltPanel max={5} style={{ height: '100%' }}>
                  <HoloPanel style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{
                      display: 'flex', alignItems: 'flex-start',
                      justifyContent: 'space-between', marginBottom: '1.125rem',
                    }}>
                      <div className="dim-glyph"><Icon size={20} /></div>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.625rem',
                        color: 'var(--lum-38)', letterSpacing: '0.1em',
                      }}>
                        /{svc.slug}
                      </span>
                    </div>

                    <h3 className="dim-h3" style={{ marginBottom: '0.5rem' }}>{svc.title}</h3>

                    <p className="dim-body" style={{ marginBottom: '1.125rem', flex: 1 }}>
                      {svc.description}
                    </p>

                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                      {svc.features.map((f) => (
                        <li key={f} style={{
                          display: 'flex', alignItems: 'center', gap: '0.5rem',
                          fontSize: '0.8125rem', color: 'var(--lum-55)',
                        }}>
                          <FiCheckCircle size={12} style={{ color: 'var(--pulse)', flexShrink: 0 }} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div style={{ borderTop: '1px solid var(--lum-08)', paddingTop: '1rem' }}>
                      <Link href="/contact" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        fontSize: '0.8125rem', fontWeight: 600, color: 'var(--pulse)',
                      }}>
                        Get Started <FiArrowRight size={12} />
                      </Link>
                    </div>
                  </HoloPanel>
                </TiltPanel>
              </StaggerItem>
            );
          })}
        </Stagger>
      </SpatialSection>

      {/* ═══ CTA ═══ */}
      <SpatialSection>
        <Reveal>
          <HoloPanel variant="pulse" className="term-scan" style={{ padding: '3rem 2rem', textAlign: 'center', position: 'relative' }}>
            <AsciiArt
              motif="wave"
              pulse
              style={{ position: 'absolute', top: 14, left: 18, opacity: 0.5 }}
            />
            <Prompt path="~" command="connect --start" caret={false} />
            <h2 className="dim-h2" style={{ margin: '1rem 0 0.75rem' }}>
              Let&apos;s make your project <span className="dim-glow">brilliant</span>
            </h2>
            <p className="dim-body" style={{ maxWidth: 440, margin: '0 auto 1.75rem' }}>
              Ready to bring your ideas to life? Let&apos;s collaborate and build
              something worth shipping.
            </p>
            <Link href="/contact" className="dim-btn dim-btn--pulse">
              Start a Project <FiArrowRight size={14} />
            </Link>
          </HoloPanel>
        </Reveal>
      </SpatialSection>
    </>
  );
}
