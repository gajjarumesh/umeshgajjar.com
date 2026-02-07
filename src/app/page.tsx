import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { generatePageMetadata, injectStructuredData, generateProfilePageSchema } from '@/lib/seo';
import { FiCode, FiServer, FiLayout, FiCloud } from 'react-icons/fi';

export const metadata = generatePageMetadata({
  title: 'Senior Full Stack Developer Building Scalable Web Applications',
  description:
    'Umesh Gajjar - Senior Full Stack Developer with 7+ years of experience in React.js, Next.js, Vue.js, Node.js, Laravel, and WordPress. Specializing in building high-performance, scalable web applications for startups, agencies, and SaaS companies.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Expert',
    'Vue.js Developer',
    'Node.js Developer',
    'Laravel Developer',
    'WordPress Developer',
    'Pune Developer',
    'Senior Developer',
    'Freelance Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'PHP Developer',
  ],
  path: '/',
});

const expertiseAreas = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    description:
      'Building modern, performant React/Next.js and Vue.js/Nuxt.js applications with focus on user experience, accessibility, and Core Web Vitals. Expertise in state management with Redux, component architecture, and responsive design.',
  },
  {
    icon: FiServer,
    title: 'Backend Architecture',
    description:
      'Designing and implementing scalable Node.js and PHP (Laravel, Symfony) solutions for enterprise needs. Experience with RESTful APIs, GraphQL, microservices architecture, and real-time applications.',
  },
  {
    icon: FiLayout,
    title: 'WordPress & CMS Solutions',
    description:
      'Custom WordPress theme development, plugin creation, WooCommerce customizations, and headless CMS implementations. Building content management solutions that empower non-technical users.',
  },
  {
    icon: FiCloud,
    title: 'Cloud & DevOps',
    description:
      'AWS infrastructure setup and management (EC2, S3, RDS, Lambda), Docker containerization, CI/CD pipelines with GitHub Actions and GitLab CI. Ensuring reliable deployments and system monitoring.',
  },
];

const featuredProjects = [
  {
    title: 'Enterprise SaaS Platform',
    description:
      'Multi-tenant SaaS application with role-based access control, subscription management, and real-time analytics. Built with Next.js, Node.js, and PostgreSQL.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'E-Commerce Solution',
    description:
      'High-performance e-commerce platform with advanced filtering, payment gateway integration, and inventory management. Serving 10,000+ daily users.',
    tech: ['React', 'Laravel', 'MySQL', 'Redis'],
  },
  {
    title: 'Custom Admin Dashboard',
    description:
      'Data visualization and analytics dashboard for enterprise clients with real-time updates, custom reporting, and export capabilities.',
    tech: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
  },
  {
    title: 'Headless WordPress CMS',
    description:
      'Modern content management system combining WordPress backend with Next.js frontend for optimal performance and SEO.',
    tech: ['Next.js', 'WordPress', 'GraphQL', 'Vercel'],
  },
];

export default function HomePage() {
  const profileSchema = generateProfilePageSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={injectStructuredData(profileSchema)}
      />

      {/* COMPLETELY NEW HERO - Full width with integrated stats */}
      <section className="relative bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main content wrapper */}
          <div className="flex flex-col gap-12">
            {/* Top: Headline and intro */}
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary leading-[1.1] mb-6">
                Senior Full Stack Developer Building{' '}
                <span className="text-primary">Scalable Web Applications</span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary/70 mb-6 leading-relaxed">
                7+ years of experience leading development teams and delivering
                high-performance web solutions
              </p>
              <p className="text-lg text-secondary/60 mb-8 leading-relaxed max-w-3xl">
                Specializing in React.js, Next.js, Vue.js, Node.js, Laravel, and
                WordPress. I help startups, agencies, and SaaS companies build
                robust, maintainable applications that scale with their business
                needs.
              </p>
              {/* CTA buttons inline with text */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-block bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Hire Me
                </Link>
              </div>
            </div>

            {/* Bottom: Stats in horizontal layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
                <FiCode className="w-10 h-10 text-primary mb-3" />
                <div className="text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-secondary/60 text-center">Projects Delivered</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
                <FiServer className="w-10 h-10 text-primary mb-3" />
                <div className="text-4xl font-bold text-primary mb-1">7+</div>
                <div className="text-sm text-secondary/60 text-center">Years Experience</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
                <FiLayout className="w-10 h-10 text-primary mb-3" />
                <div className="text-4xl font-bold text-primary mb-1">30+</div>
                <div className="text-sm text-secondary/60 text-center">Happy Clients</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
                <FiCloud className="w-10 h-10 text-primary mb-3" />
                <div className="text-4xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-secondary/60 text-center">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW EXPERTISE - 3 Column Layout with alternating design */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-secondary/60">
              Full-stack development services focused on building scalable, maintainable applications
            </p>
          </div>

          {/* Different grid pattern - first 2 on top, then 2 on bottom */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {expertiseAreas.slice(0, 2).map((area, index) => {
                const Icon = area.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-lg border-l-4 border-primary">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                      <h3 className="text-2xl font-bold text-secondary">{area.title}</h3>
                    </div>
                    <p className="text-secondary/70 leading-relaxed">{area.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {expertiseAreas.slice(2, 4).map((area, index) => {
                const Icon = area.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-lg border-l-4 border-primary">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                      <h3 className="text-2xl font-bold text-secondary">{area.title}</h3>
                    </div>
                    <p className="text-secondary/70 leading-relaxed">{area.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* NEW PROJECTS - Horizontal cards with image placeholders */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-secondary/60">
              Recent projects showcasing expertise in modern web development
            </p>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {/* Left side - Project number and icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-secondary mb-3">{project.title}</h3>
                  <p className="text-secondary/70 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1 text-sm font-medium bg-white text-secondary rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-block bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* NEW JOURNEY - Timeline style on the side */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-secondary/60">
              Building scalable solutions and leading teams at top organizations
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {/* Item 1 */}
              <div className="relative pl-12 md:pl-20">
                <div className="absolute left-0 md:left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-secondary">Senior Associate Consultant</h3>
                    <span className="text-sm text-secondary/50">Sep 2025 – Present</span>
                  </div>
                  <p className="text-lg text-primary font-semibold mb-2">Infosys</p>
                  <p className="text-secondary/70 leading-relaxed">
                    Leading enterprise application development, architecting scalable solutions for global clients, and driving technical excellence across development teams.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative pl-12 md:pl-20">
                <div className="absolute left-0 md:left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-secondary">Freelance Full Stack Developer</h3>
                    <span className="text-sm text-secondary/50">Oct 2024 – Present</span>
                  </div>
                  <p className="text-lg text-primary font-semibold mb-2">Self-Employed</p>
                  <p className="text-secondary/70 leading-relaxed">
                    Delivering custom web applications for diverse clients. Specializing in Next.js, React, and WordPress solutions with end-to-end project ownership.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative pl-12 md:pl-20">
                <div className="absolute left-0 md:left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-secondary">Team Lead</h3>
                    <span className="text-sm text-secondary/50">6+ Years Leadership</span>
                  </div>
                  <p className="text-lg text-primary font-semibold mb-2">Acespritech Solutions</p>
                  <p className="text-secondary/70 leading-relaxed">
                    Led development teams on multiple projects, managed client relationships, conducted code reviews, and made technical architecture decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/experience"
              className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View Full Experience
            </Link>
          </div>
        </div>
      </section>

      {/* NEW CTA - Split layout with background */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Looking for a reliable, experienced developer to bring your project to life? I'm available for freelance projects and full-time opportunities.
              </p>
            </div>

            {/* Right side - CTAs */}
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="block text-center bg-primary hover:bg-primary-600 text-white px-8 py-5 rounded-lg font-semibold text-lg transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="block text-center border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-5 rounded-lg font-semibold text-lg transition-colors"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
