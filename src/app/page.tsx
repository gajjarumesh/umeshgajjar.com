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

      {/* Hero Section */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold text-secondary leading-tight tracking-tight">
                Senior Full Stack Developer Building{' '}
                <span className="text-primary">
                  Scalable Web Applications
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary/80 leading-relaxed">
                7+ years of experience leading development teams and delivering
                high-performance web solutions
              </p>
              <p className="text-lg text-secondary/70 leading-relaxed">
                Specializing in React.js, Next.js, Vue.js, Node.js, Laravel, and
                WordPress. I help startups, agencies, and SaaS companies build
                robust, maintainable applications that scale with their business
                needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button href="/projects" size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300">
                  View Projects
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  Hire Me
                </Button>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-gray-200 rounded-xl p-8 md:p-12 shadow-sm">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                      <FiCode className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">50+</div>
                      <div className="text-sm text-secondary/70">Projects Delivered</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                      <FiServer className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">7+</div>
                      <div className="text-sm text-secondary/70">Years Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                      <FiLayout className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">30+</div>
                      <div className="text-sm text-secondary/70">Happy Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Expertise Overview */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto">
              Full-stack development services focused on building scalable,
              maintainable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-3">
                        {area.title}
                      </h3>
                      <p className="text-base text-secondary/80 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto">
              Recent projects showcasing expertise in modern web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8"
              >
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  {project.title}
                </h3>
                <p className="text-base text-secondary/80 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/projects" variant="primary" className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300">
              View All Projects
            </Button>
          </div>
        </div>
      </Section>

      {/* Experience Snapshot */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Professional Journey
            </h2>
            <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto">
              Building scalable solutions and leading teams at top organizations
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    Senior Associate Consultant
                  </h3>
                  <p className="text-lg text-primary font-medium">
                    Infosys
                  </p>
                </div>
                <span className="text-sm text-secondary/60 mt-2 md:mt-0 font-normal">
                  Sep 2025 – Present
                </span>
              </div>
              <p className="text-base text-secondary/80 leading-relaxed">
                Leading enterprise application development, architecting
                scalable solutions for global clients, and driving technical
                excellence across development teams.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    Freelance Full Stack Developer
                  </h3>
                  <p className="text-lg text-primary font-medium">
                    Self-Employed
                  </p>
                </div>
                <span className="text-sm text-secondary/60 mt-2 md:mt-0 font-normal">
                  Oct 2024 – Present
                </span>
              </div>
              <p className="text-base text-secondary/80 leading-relaxed">
                Delivering custom web applications for diverse clients.
                Specializing in Next.js, React, and WordPress solutions with
                end-to-end project ownership.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    Team Lead
                  </h3>
                  <p className="text-lg text-primary font-medium">
                    Acespritech Solutions
                  </p>
                </div>
                <span className="text-sm text-secondary/60 mt-2 md:mt-0 font-normal">
                  6+ Years Leadership
                </span>
              </div>
              <p className="text-base text-secondary/80 leading-relaxed">
                Led development teams on multiple projects, managed client
                relationships, conducted code reviews, and made technical
                architecture decisions.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button href="/experience" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              View Full Experience
            </Button>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-gray-200 rounded-xl shadow-sm p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-secondary/80 leading-relaxed">
              Looking for a reliable, experienced developer to bring your project
              to life? I'm available for freelance projects and full-time
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300"
              >
                Get in Touch
              </Button>
              <Button
                href="/projects"
                variant="outline"
                size="lg"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
