import Link from 'next/link';
import { FiUsers, FiArrowRight, FiCheckCircle, FiCompass } from 'react-icons/fi';
import { HoloPanel } from '@/components/dimension/HoloPanel';
import { Prompt, Glitch, TerminalWindow, StatLine } from '@/components/terminal/Terminal';
import { ProceduralTexture } from '@/components/dimension/ProceduralTexture';
import {
  SpatialSection, Stagger, StaggerItem, ParallaxLayer, TiltPanel, Reveal,
} from '@/components/dimension/Spatial';

export const metadata = {
  title: 'About Umesh Gajjar - Full-Stack Lead | Umesh Gajjar',
  description:
    'Learn about Umesh Gajjar, a Full-Stack Lead with 7+ years of experience in building fast, secure, and scalable web applications. From PHP development to leading enterprise teams at Infosys.',
  keywords: 'Umesh Gajjar, Full Stack Developer, About, Experience, Team Lead, Software Engineer, Pune, India',
};

const bio = [
  "I'm a Full-Stack Developer with over 7 years of experience building fast, secure, and scalable web applications that help businesses grow. I specialize in leading engineering teams to deliver product-focused, maintainable systems across frontend and backend stacks.",
  "Currently serving as a Senior Associate Consultant at Infosys, I lead development of enterprise web applications, driving API design and performance improvements while collaborating with product and QA to ship scalable features.",
  "My expertise spans the full stack — from Next.js, React, Vue.js, and Nuxt.js frontends to Node.js, Laravel, and PHP backends, with PostgreSQL and MySQL on the data side. I'm passionate about writing clean, maintainable code and creating applications that deliver a seamless user experience.",
];

const leadership = ['Team mentoring', 'Code reviews', 'Architecture decisions', 'Sprint planning'];
const interests = ['Performance optimization', 'Mentoring', 'Product design', 'Startup engineering'];

const personalInfo = [
  { label: 'Name',         value: 'Umesh Gajjar' },
  { label: 'Location',     value: 'Pune, Maharashtra, India' },
  { label: 'Email',        value: 'urvishgajjar6@gmail.com', href: 'mailto:urvishgajjar6@gmail.com' },
  { label: 'Experience',   value: '7+ Years' },
  { label: 'Current Role', value: 'Senior Associate Consultant, Infosys' },
  { label: 'Availability', value: 'Open to freelance projects' },
];

const technologies = [
  'Next.js', 'React', 'Redux', 'Vue.js',
  'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Node.js',
  'Laravel', 'Prisma', 'PHP', 'WordPress',
  'PostgreSQL', 'MySQL', 'Docker',
];

export default function AboutPage() {
  return (
    <>
      {/* ═══ HEADER ═══ */}
      <SpatialSection as="header" className="dim-section" depth={180}>
        <Prompt path="~" command="whoami --verbose" />
        <h1 className="dim-h1" style={{ marginTop: '1rem' }}>
          About <Glitch className="dim-beam-text">Me</Glitch>
        </h1>
        <div className="dim-rule" />
        <p className="dim-lede">
          Full-Stack Lead and product-first engineer. Seven years of shipping
          systems that stay maintainable after the launch week.
        </p>
      </SpatialSection>

      {/* ═══ BIO + INFO ═══ */}
      <SpatialSection className="dim-section">
        <div className="dim-split">

          <div>
            <h2 className="dim-h2" style={{ marginBottom: '1.25rem' }}>
              Full-Stack Lead &amp; Product-First Engineer
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
              {bio.map((text, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="dim-body">{text}</p>
                </Reveal>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="dim-btn dim-btn--pulse">
                Hire Me <FiArrowRight size={14} />
              </Link>
              <Link href="/experience" className="dim-btn dim-btn--ghost">
                My Experience <FiArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Personal info — terminal readout */}
          <ParallaxLayer depth={0.3}>
            <TiltPanel max={6}>
              <TerminalWindow title="profile.json" meta="read-only" scan>
                <ProceduralTexture
                  seed="umesh-identity-profile"
                  kind="flow"
                  height={104}
                />
                <div style={{ marginTop: '1.125rem' }}>
                  {personalInfo.map((info) => (
                    <StatLine
                      key={info.label}
                      label={info.label.toLowerCase()}
                      value={
                        info.href
                          ? <a href={info.href} style={{ color: 'var(--pulse)' }}>{info.value}</a>
                          : info.value
                      }
                    />
                  ))}
                </div>
              </TerminalWindow>
            </TiltPanel>
          </ParallaxLayer>
        </div>
      </SpatialSection>

      {/* ═══ LEADERSHIP + INTERESTS ═══ */}
      <SpatialSection className="dim-section">
        <Prompt path="~/traits" command="cat disposition" />
        <h2 className="dim-h2" style={{ marginTop: '0.875rem' }}>How I Work</h2>
        <div className="dim-rule" />

        <Stagger className="dim-grid-2" gap={0.1}>
          <StaggerItem>
            <HoloPanel style={{ height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                <div className="dim-glyph"><FiUsers size={19} /></div>
                <h3 className="dim-h3">Leadership</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {leadership.map((item) => (
                  <span key={item} className="dim-chip">{item}</span>
                ))}
              </div>
            </HoloPanel>
          </StaggerItem>

          <StaggerItem>
            <HoloPanel style={{ height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                <div className="dim-glyph"><FiCompass size={19} /></div>
                <h3 className="dim-h3">Interests</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {interests.map((item) => (
                  <span key={item} className="dim-chip">{item}</span>
                ))}
              </div>
            </HoloPanel>
          </StaggerItem>
        </Stagger>
      </SpatialSection>

      {/* ═══ TECH STACK ═══ */}
      <SpatialSection className="dim-section">
        <Prompt path="~/stack" command="ls -1 toolset" />
        <h2 className="dim-h2" style={{ marginTop: '0.875rem' }}>Technologies I Work With</h2>
        <div className="dim-rule" />

        <HoloPanel variant="bracket">
          <Stagger className="dim-grid-4" gap={0.035} style={{ gap: '0.875rem' }}>
            {technologies.map((tech) => (
              <StaggerItem key={tech}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  fontSize: '0.8375rem', color: 'var(--lum-80)',
                }}>
                  <FiCheckCircle size={13} style={{ color: 'var(--pulse)', flexShrink: 0 }} />
                  {tech}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </HoloPanel>
      </SpatialSection>

      {/* ═══ CTA ═══ */}
      <SpatialSection>
        <Reveal>
          <HoloPanel variant="pulse" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
            <Prompt path="~" command="connect" caret={false} />
            <h2 className="dim-h2" style={{ marginBottom: '0.75rem' }}>
              Interested in working <span className="dim-glow">together?</span>
            </h2>
            <p className="dim-body" style={{ maxWidth: 440, margin: '0 auto 1.75rem' }}>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities.
            </p>
            <Link href="/contact" className="dim-btn dim-btn--pulse">
              Get in Touch <FiArrowRight size={14} />
            </Link>
          </HoloPanel>
        </Reveal>
      </SpatialSection>
    </>
  );
}
