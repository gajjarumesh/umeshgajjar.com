import Link from 'next/link';
import { FiCode, FiServer, FiDatabase, FiCloud, FiArrowRight, FiUsers, FiBox } from 'react-icons/fi';
import { HoloPanel } from '@/components/dimension/HoloPanel';
import { Prompt, Glitch } from '@/components/terminal/Terminal';
import {
  SpatialSection, Stagger, StaggerItem, TiltPanel, Reveal,
} from '@/components/dimension/Spatial';

export const metadata = {
  title: 'Technical Skills & Expertise | Umesh Gajjar',
  description:
    'Comprehensive overview of Umesh Gajjar technical skills including Next.js, React, Vue.js, Node.js, Laravel, WordPress, PostgreSQL, MySQL, Prisma, and Docker. 7+ years of full stack development experience.',
  keywords: 'React, Next.js, Vue.js, Nuxt.js, Node.js, Laravel, WordPress, TypeScript, PHP, PostgreSQL, MySQL, Prisma, Docker, Full Stack Skills',
};

const skillGroups = [
  {
    icon: FiCode,
    title: 'Frontend',
    depth: 'Primary',
    skills: ['Next.js', 'React', 'Redux', 'Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: FiServer,
    title: 'Backend',
    depth: 'Primary',
    skills: ['Node.js', 'Laravel', 'Prisma', 'PHP', 'WordPress', 'RESTful APIs'],
  },
  {
    icon: FiDatabase,
    title: 'Data & Performance',
    depth: 'Core',
    skills: ['PostgreSQL', 'MySQL', 'Prisma', 'Query Optimization', 'Caching'],
  },
  {
    icon: FiCloud,
    title: 'DevOps & Tools',
    depth: 'Supporting',
    skills: ['Git', 'Docker', 'CI/CD', 'Vercel', 'Netlify', 'Basic AWS', 'Postman', 'Jira'],
  },
];

const productSkills = ['SaaS Platforms', 'Multi-Tenant Design', 'API Integrations', 'eCommerce', 'CMS'];
const leadershipSkills = ['Team Mentoring', 'Code Reviews', 'Architecture Decisions', 'Sprint Planning'];

export default function SkillsPage() {
  return (
    <>
      {/* ═══ HEADER ═══ */}
      <SpatialSection as="header" className="dim-section" depth={180}>
        <Prompt path="~" command="stack --list-all" />
        <h1 className="dim-h1" style={{ marginTop: '1rem' }}>
          Technical <Glitch className="dim-beam-text">Skills</Glitch>
        </h1>
        <div className="dim-rule" />
        <p className="dim-lede">
          7+ years of hands-on experience across the full stack. Here&apos;s a
          breakdown of my technical proficiency.
        </p>
      </SpatialSection>

      {/* ═══ SKILL GROUPS ═══ */}
      <SpatialSection className="dim-section">
        <Stagger className="dim-grid-2" gap={0.09}>
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <StaggerItem key={group.title}>
                <TiltPanel max={5} style={{ height: '100%' }}>
                  <HoloPanel style={{ height: '100%' }}>
                    <div style={{
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between', marginBottom: '1.25rem',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                        <div className="dim-glyph" style={{ width: 42, height: 42 }}>
                          <Icon size={18} />
                        </div>
                        <h3 className="dim-h3">{group.title}</h3>
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.625rem',
                        color: 'var(--lum-38)', textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                      }}>
                        {group.depth}
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {group.skills.map((skill) => (
                        <span key={skill} className="dim-chip">{skill}</span>
                      ))}
                    </div>

                    <div className="dim-meter" style={{ marginTop: '1.25rem' }}>
                      <div className="dim-meter__fill" style={{ width: '100%' }} />
                    </div>
                  </HoloPanel>
                </TiltPanel>
              </StaggerItem>
            );
          })}
        </Stagger>
      </SpatialSection>

      {/* ═══ LEADERSHIP + PRODUCT ═══ */}
      <SpatialSection className="dim-section">
        <Prompt path="~/meta" command="cat leadership.md" />
        <h2 className="dim-h2" style={{ marginTop: '0.875rem' }}>Leadership &amp; Product</h2>
        <div className="dim-rule" />

        <Stagger className="dim-grid-2" gap={0.1}>
          <StaggerItem>
            <HoloPanel style={{ height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                <div className="dim-glyph" style={{ width: 42, height: 42 }}>
                  <FiUsers size={18} />
                </div>
                <h3 className="dim-h3">Leadership</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {leadershipSkills.map((s) => (
                  <span key={s} className="dim-chip">{s}</span>
                ))}
              </div>
            </HoloPanel>
          </StaggerItem>

          <StaggerItem>
            <HoloPanel style={{ height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                <div className="dim-glyph" style={{ width: 42, height: 42 }}>
                  <FiBox size={18} />
                </div>
                <h3 className="dim-h3">Product Skills</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {productSkills.map((s) => (
                  <span key={s} className="dim-chip">{s}</span>
                ))}
              </div>
            </HoloPanel>
          </StaggerItem>
        </Stagger>
      </SpatialSection>

      {/* ═══ CTA ═══ */}
      <SpatialSection>
        <Reveal>
          <HoloPanel variant="pulse" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
            <Prompt path="~" command="connect" caret={false} />
            <h2 className="dim-h2" style={{ marginBottom: '0.75rem' }}>
              Ready to put these skills <span className="dim-glow">to work?</span>
            </h2>
            <p className="dim-body" style={{ maxWidth: 420, margin: '0 auto 1.75rem' }}>
              Let&apos;s build something exceptional together.
            </p>
            <Link href="/contact" className="dim-btn dim-btn--pulse">
              Start a Conversation <FiArrowRight size={14} />
            </Link>
          </HoloPanel>
        </Reveal>
      </SpatialSection>
    </>
  );
}
