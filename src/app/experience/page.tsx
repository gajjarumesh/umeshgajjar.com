import Link from 'next/link';
import { FiCalendar, FiMapPin, FiCheckCircle, FiArrowRight, FiAward, FiBookOpen, FiDownload } from 'react-icons/fi';
import { HoloPanel } from '@/components/dimension/HoloPanel';
import { Prompt, Glitch } from '@/components/terminal/Terminal';
import {
  SpatialSection, Stagger, StaggerItem, Reveal,
} from '@/components/dimension/Spatial';

export const metadata = {
  title: 'Professional Experience & Career Timeline | Umesh Gajjar',
  description:
    'Detailed career journey of Umesh Gajjar - from PHP developer to Senior Associate Consultant at Infosys. 7+ years of full-stack development experience leading teams at Acespritech, KNP Technologies, and more.',
  keywords: 'Umesh Gajjar Experience, Career Timeline, Infosys Developer, Team Lead, Full Stack Career, Software Engineer Experience, Acespritech, Freelance Developer',
};

const experiences = [
  {
    company: 'Infosys',
    position: 'Senior Associate Consultant',
    duration: 'September 2025 – Present',
    location: 'Pune, India',
    type: 'Full-time',
    current: true,
    description: 'Leading development of enterprise web applications, driving API design and performance improvements.',
    responsibilities: [
      'Leading development of enterprise web applications',
      'Driving API design and performance improvements',
      'Collaborating with product and QA to ship scalable features',
      'Working to reduce release cycle time',
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'RESTful APIs'],
  },
  {
    company: 'Freelancer',
    position: 'Full-Stack Developer',
    duration: 'October 2024 – September 2025',
    location: 'Remote',
    type: 'Self-Employed',
    current: false,
    description: 'Delivered end-to-end SaaS features and custom web apps for startups, focused on security, performance tuning, and maintainable codebases.',
    responsibilities: [
      'Delivered end-to-end SaaS features and custom web apps using Next.js, Node.js, Laravel, and PostgreSQL',
      'Focused on security and performance tuning',
      'Built maintainable codebases for startup clients',
    ],
    technologies: ['Next.js', 'Node.js', 'Laravel', 'PostgreSQL'],
  },
  {
    company: 'Acespritech Solutions Pvt Ltd',
    position: 'Team Lead',
    duration: 'August 2022 – October 2024',
    location: 'Gandhinagar, India',
    type: 'Full-time',
    current: false,
    description: 'Managed a development team, owning architecture, code quality, and deployment pipelines.',
    responsibilities: [
      'Managed a development team; owned architecture, code quality, and deployment pipelines',
      'Mentored engineers and introduced best practices for testing and CI/CD',
    ],
    technologies: ['React.js', 'Vue.js', 'Laravel', 'Node.js', 'MySQL', 'Docker'],
  },
  {
    company: 'NewsReach India',
    position: 'Software Developer',
    duration: 'April 2022 – August 2022',
    location: 'India',
    type: 'Full-time',
    current: false,
    description: 'Implemented frontend components and backend integrations for content delivery systems.',
    responsibilities: [
      'Implemented frontend components for content delivery systems',
      'Built backend integrations for content delivery systems',
    ],
    technologies: ['JavaScript', 'PHP', 'HTML5', 'CSS3'],
  },
  {
    company: 'KNP Technologies Pvt Ltd',
    position: 'PHP Developer',
    duration: 'July 2019 – April 2022',
    location: 'Ahmedabad, India',
    type: 'Full-time',
    current: false,
    description: 'Built Laravel and CodeIgniter applications, developed REST APIs, and maintained legacy systems.',
    responsibilities: [
      'Built Laravel and CodeIgniter applications',
      'Developed REST APIs',
      'Maintained legacy systems',
    ],
    technologies: ['Laravel', 'CodeIgniter', 'PHP', 'MySQL'],
  },
  {
    company: 'Green Cube Solutions',
    position: 'PHP Developer',
    duration: 'January 2019 – June 2019',
    location: 'Ahmedabad, India',
    type: 'Full-time',
    current: false,
    description: 'Converted PSD to responsive HTML and developed WordPress themes and plugins.',
    responsibilities: [
      'Converted PSD designs to responsive HTML',
      'Developed WordPress themes and plugins',
    ],
    technologies: ['WordPress', 'PHP', 'HTML5', 'CSS3'],
  },
];

const education = [
  {
    degree: 'BCA (Bachelor of Computer Applications)',
    institution: 'Kadi Sarva Vishwavidyalaya',
    year: '2012 – 2015',
    location: 'Gandhinagar, India',
    description: 'Graduated with a strong foundation in computer applications, programming, and software development principles.',
  },
];

const selectedProjects = [
  { name: 'Multi-tenant SaaS Dashboard', impact: 'Architected role-based access and analytics; improved load times by 40% through query optimization and caching.' },
  { name: 'Ecommerce Platform Integration', impact: 'Built product APIs and payment flows; reduced checkout errors by 25% after refactor.' },
  { name: 'Custom CMS & Plugins', impact: 'Delivered multiple WordPress plugins and theme integrations for clients, improving content publishing speed.' },
];

export default function ExperiencePage() {
  return (
    <>
      {/* ═══ HEADER ═══ */}
      <SpatialSection as="header" className="dim-section" depth={180}>
        <Prompt path="~" command="history --full" />
        <h1 className="dim-h1" style={{ marginTop: '1rem' }}>
          Work <Glitch className="dim-beam-text">Experience</Glitch>
        </h1>
        <div className="dim-rule" />
        <p className="dim-lede">
          Seven years along the timeline — from PSD-to-HTML to leading
          enterprise delivery. Read it top-down: present first.
        </p>
      </SpatialSection>

      {/* ═══ TIMELINE ═══ */}
      <SpatialSection className="dim-section">
        <Prompt path="~/history" command="git log --reverse" caret={false} />
        <div className="dim-rule" />

        <Stagger className="dim-timeline" gap={0.07}>
          {experiences.map((exp) => (
            <StaggerItem
              key={exp.company + exp.position}
              className={`dim-tnode${exp.current ? ' dim-tnode--now' : ''}`}
            >
              <HoloPanel variant={exp.current ? 'pulse' : 'default'}>
                <div style={{
                  display: 'flex', flexWrap: 'wrap',
                  justifyContent: 'space-between', gap: '0.75rem',
                  marginBottom: '0.75rem',
                }}>
                  <div>
                    <h3 className="dim-h3" style={{ marginBottom: '0.3rem' }}>
                      {exp.position}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: '0.875rem', fontWeight: 600,
                        color: exp.current ? 'var(--pulse)' : 'var(--beam-bright)',
                      }}>
                        {exp.company}
                      </span>
                      <span className="dim-chip" style={{ fontSize: '0.625rem', padding: '0.15rem 0.5rem' }}>
                        {exp.type}
                      </span>
                      {exp.current && (
                        <span className="dim-chip dim-chip--pulse" style={{ fontSize: '0.625rem', padding: '0.15rem 0.5rem' }}>
                          Present
                        </span>
                      )}
                    </div>
                  </div>

                  <div style={{
                    display: 'flex', flexDirection: 'column',
                    gap: '0.3rem', alignItems: 'flex-end',
                    fontFamily: 'var(--font-mono)', fontSize: '0.6875rem',
                    color: 'var(--lum-38)',
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <FiCalendar size={11} /> {exp.duration}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <FiMapPin size={11} /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="dim-body" style={{ marginBottom: '1rem' }}>
                  {exp.description}
                </p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.125rem' }}>
                  {exp.responsibilities.map((r) => (
                    <li key={r} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.55rem',
                      fontSize: '0.8125rem', color: 'var(--lum-55)', lineHeight: 1.65,
                    }}>
                      <FiCheckCircle size={12} style={{ color: 'var(--pulse)', flexShrink: 0, marginTop: 3 }} />
                      {r}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {exp.technologies.map((t) => (
                    <span key={t} className="dim-chip">{t}</span>
                  ))}
                </div>
              </HoloPanel>
            </StaggerItem>
          ))}
        </Stagger>
      </SpatialSection>

      {/* ═══ SELECTED PROJECTS ═══ */}
      <SpatialSection className="dim-section">
        <Prompt path="~/impact" command="cat metrics.log" />
        <h2 className="dim-h2" style={{ marginTop: '0.875rem' }}>Selected Projects &amp; Impact</h2>
        <div className="dim-rule" />

        <Stagger style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} gap={0.09}>
          {selectedProjects.map((proj) => (
            <StaggerItem key={proj.name}>
              <HoloPanel style={{ display: 'flex', alignItems: 'flex-start', gap: '1.125rem' }}>
                <div className="dim-glyph" style={{ width: 44, height: 44 }}>
                  <FiAward size={19} />
                </div>
                <div>
                  <h3 className="dim-h3" style={{ fontSize: '0.9375rem', marginBottom: '0.3rem' }}>
                    {proj.name}
                  </h3>
                  <p className="dim-body" style={{ fontSize: '0.8375rem', margin: 0 }}>
                    {proj.impact}
                  </p>
                </div>
              </HoloPanel>
            </StaggerItem>
          ))}
        </Stagger>
      </SpatialSection>

      {/* ═══ EDUCATION ═══ */}
      <SpatialSection className="dim-section">
        <Prompt path="~/edu" command="cat foundation" />
        <h2 className="dim-h2" style={{ marginTop: '0.875rem' }}>Education</h2>
        <div className="dim-rule" />

        {education.map((edu) => (
          <Reveal key={edu.degree}>
            <HoloPanel variant="bracket">
              <div style={{
                display: 'flex', flexWrap: 'wrap',
                justifyContent: 'space-between', gap: '0.75rem',
                marginBottom: '0.75rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div className="dim-glyph" style={{ width: 42, height: 42 }}>
                    <FiBookOpen size={18} />
                  </div>
                  <div>
                    <h3 className="dim-h3">{edu.degree}</h3>
                    <p style={{
                      fontSize: '0.875rem', color: 'var(--beam-bright)',
                      fontWeight: 600, margin: '0.2rem 0 0',
                    }}>
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div style={{
                  display: 'flex', flexDirection: 'column',
                  gap: '0.3rem', alignItems: 'flex-end',
                  fontFamily: 'var(--font-mono)', fontSize: '0.6875rem',
                  color: 'var(--lum-38)',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <FiCalendar size={11} /> {edu.year}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <FiMapPin size={11} /> {edu.location}
                  </span>
                </div>
              </div>
              <p className="dim-body">{edu.description}</p>
            </HoloPanel>
          </Reveal>
        ))}
      </SpatialSection>

      {/* ═══ CTA ═══ */}
      <SpatialSection>
        <Reveal>
          <HoloPanel variant="pulse" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
            <Prompt path="~" command="connect" caret={false} />
            <h2 className="dim-h2" style={{ marginBottom: '1.5rem' }}>
              Want to see my <span className="dim-glow">full resume?</span>
            </h2>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/assets/umesh-gajjar-cv.pdf" download className="dim-btn dim-btn--pulse">
                <FiDownload size={14} /> Download CV
              </a>
              <Link href="/contact" className="dim-btn dim-btn--ghost">
                Contact Me <FiArrowRight size={14} />
              </Link>
            </div>
          </HoloPanel>
        </Reveal>
      </SpatialSection>
    </>
  );
}
