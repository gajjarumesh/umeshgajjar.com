import Link from 'next/link';
import { FiArrowRight, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';
import { HoloPanel } from '@/components/dimension/HoloPanel';
import { Prompt, Glitch } from '@/components/terminal/Terminal';
import { ProceduralTexture, type TextureKind } from '@/components/dimension/ProceduralTexture';
import {
  SpatialSection, Stagger, StaggerItem, TiltPanel, Reveal,
} from '@/components/dimension/Spatial';

export const metadata = {
  title: 'Selected Projects & Impact | Umesh Gajjar',
  description:
    'Selected projects and impact from Umesh Gajjar, a Full-Stack Lead with 7+ years of experience: multi-tenant SaaS dashboards, ecommerce platform integrations, and custom CMS & plugins.',
  keywords: 'Umesh Gajjar Projects, SaaS Dashboard, Ecommerce Integration, WordPress Plugins, Full Stack Projects',
};

type Project = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  impact: string;
  metric: string;
  /** Which procedural generator renders this project's artwork. */
  texture: TextureKind;
  stack: string[];
};

const projects: Project[] = [
  {
    title: 'Multi-tenant SaaS Dashboard',
    category: 'SaaS',
    description: 'Architected role-based access and analytics for a multi-tenant SaaS dashboard.',
    highlights: [
      'Role-based access control',
      'Analytics dashboard',
      'Query optimization and caching',
    ],
    impact: 'Improved load times by 40% through query optimization and caching.',
    metric: '40% faster',
    texture: 'lattice',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
  },
  {
    title: 'Ecommerce Platform Integration',
    category: 'eCommerce',
    description: 'Built product APIs and payment flows for an ecommerce platform integration.',
    highlights: [
      'Product APIs',
      'Payment flow integration',
    ],
    impact: 'Reduced checkout errors by 25% after refactor.',
    metric: '25% fewer errors',
    texture: 'flow',
    stack: ['Laravel', 'React', 'MySQL', 'REST APIs'],
  },
  {
    title: 'Custom CMS & Plugins',
    category: 'WordPress',
    description: 'Delivered multiple WordPress plugins and theme integrations for clients.',
    highlights: [
      'Custom WordPress plugins',
      'Theme integrations',
    ],
    impact: 'Improved content publishing speed for clients.',
    metric: 'Faster publishing',
    texture: 'strata',
    stack: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* ═══ HEADER ═══ */}
      <SpatialSection as="header" className="dim-section" depth={180}>
        <Prompt path="~/work" command="ls -la --artifacts" />
        <h1 className="dim-h1" style={{ marginTop: '1rem' }}>
          Featured <Glitch className="dim-beam-text">Work</Glitch>
        </h1>
        <div className="dim-rule" />
        <p className="dim-lede">
          A selection of projects and their measured impact. Every panel&apos;s
          artwork is generated at runtime from the project itself — no stock imagery.
        </p>
      </SpatialSection>

      {/* ═══ PROJECT PANELS ═══ */}
      <SpatialSection className="dim-section">
        <Stagger style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }} gap={0.11}>
          {projects.map((project, i) => (
            <StaggerItem key={project.title}>
              <TiltPanel max={4}>
                <HoloPanel style={{ padding: '1.75rem' }}>
                  <div
                    className="dim-split-wide"
                    style={{
                      // Alternate which side the artwork sits on, so scrolling
                      // the list feels like moving through a space, not a table.
                      direction: i % 2 === 1 ? 'rtl' : 'ltr',
                    }}
                  >
                    {/* Procedural artwork */}
                    <div style={{ direction: 'ltr' }}>
                      <ProceduralTexture
                        seed={project.title}
                        kind={project.texture}
                        height={230}
                      />
                      <div style={{
                        display: 'flex', justifyContent: 'space-between',
                        marginTop: '0.75rem',
                        fontFamily: 'var(--font-mono)', fontSize: '0.625rem',
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: 'var(--lum-38)',
                      }}>
                        <span>GEN / {project.texture}</span>
                        <span className="dim-glow">{project.metric}</span>
                      </div>
                    </div>

                    {/* Detail */}
                    <div style={{ direction: 'ltr', display: 'flex', flexDirection: 'column' }}>
                      <Prompt
                        path={`~/work/${project.texture}`}
                        command={project.category.toLowerCase()}
                        caret={false}
                      />

                      <h2 className="dim-h2" style={{ fontSize: '1.375rem', marginBottom: '0.75rem' }}>
                        {project.title}
                      </h2>

                      <p className="dim-body" style={{ marginBottom: '1.125rem' }}>
                        {project.description}
                      </p>

                      <ul style={{
                        display: 'flex', flexDirection: 'column',
                        gap: '0.5rem', marginBottom: '1.125rem', flex: 1,
                      }}>
                        {project.highlights.map((h) => (
                          <li key={h} style={{
                            display: 'flex', alignItems: 'flex-start', gap: '0.55rem',
                            fontSize: '0.8125rem', color: 'var(--lum-55)',
                          }}>
                            <FiCheckCircle size={12} style={{ color: 'var(--pulse)', flexShrink: 0, marginTop: 3 }} />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Impact readout */}
                      <div style={{
                        display: 'flex', alignItems: 'flex-start', gap: '0.625rem',
                        background: 'var(--pulse-06)',
                        border: '1px solid var(--pulse-22)',
                        borderRadius: 'var(--r-sm)',
                        padding: '0.75rem 0.875rem',
                        marginBottom: '1.125rem',
                      }}>
                        <FiTrendingUp size={14} style={{ color: 'var(--pulse)', flexShrink: 0, marginTop: 2 }} />
                        <p style={{ fontSize: '0.8125rem', color: 'var(--lum-80)', margin: 0, lineHeight: 1.6 }}>
                          {project.impact}
                        </p>
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {project.stack.map((s) => (
                          <span key={s} className="dim-chip">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </HoloPanel>
              </TiltPanel>
            </StaggerItem>
          ))}
        </Stagger>
      </SpatialSection>

      {/* ═══ CTA ═══ */}
      <SpatialSection>
        <Reveal>
          <HoloPanel variant="pulse" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
            <Prompt path="~" command="connect" caret={false} />
            <h2 className="dim-h2" style={{ marginBottom: '0.75rem' }}>
              Have a project in <span className="dim-glow">mind?</span>
            </h2>
            <p className="dim-body" style={{ maxWidth: 420, margin: '0 auto 1.75rem' }}>
              Let&apos;s turn your vision into something running in production.
            </p>
            <Link href="/contact" className="dim-btn dim-btn--pulse">
              Let&apos;s Talk <FiArrowRight size={14} />
            </Link>
          </HoloPanel>
        </Reveal>
      </SpatialSection>
    </>
  );
}
