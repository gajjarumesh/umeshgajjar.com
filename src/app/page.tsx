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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight max-w-3xl">
              Senior Full Stack Developer Building <span className="text-primary">Scalable Web Applications</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary/80 mb-6">
              7+ years of experience leading development teams and delivering
              high-performance web solutions
            </p>
            <p className="text-lg text-secondary/70 mb-8 max-w-2xl mx-auto lg:mx-0">
              Specializing in React.js, Next.js, Vue.js, Node.js, Laravel, and
              WordPress. I help startups, agencies, and SaaS companies build
              robust, maintainable applications that scale with their business
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/projects" size="lg" className="bg-primary hover:bg-primary-600">
                View Projects
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="bg-white border border-gray-200 shadow-sm hover:shadow-xl">
                Hire Me
              </Button>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8">
              <h3 className="text-lg font-semibold text-secondary mb-6 text-center">
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">7+</div>
                  <div className="text-sm text-secondary/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-secondary/70">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">30+</div>
                  <div className="text-sm text-secondary/70">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-secondary/70">Technologies Mastered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Expertise Overview */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
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
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary mb-2">
                        {area.title}
                      </h3>
                      <p className="text-secondary/80">
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
              Recent projects showcasing expertise in modern web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {project.title}
                </h3>
                <p className="text-secondary/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-secondary/10 text-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/projects" variant="primary" className="bg-primary hover:bg-primary-600">
              View All Projects
            </Button>
          </div>
        </div>
      </Section>

      {/* Experience Snapshot */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Professional Journey
            </h2>
            <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
              Building scalable solutions and leading teams at top organizations
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary">
                    Senior Associate Consultant
                  </h3>
                  <p className="text-primary">
                    Infosys
                  </p>
                </div>
                <span className="text-secondary/80 mt-2 md:mt-0">
                  Sep 2025 – Present
                </span>
              </div>
              <p className="text-secondary/80">
                Leading enterprise application development, architecting
                scalable solutions for global clients, and driving technical
                excellence across development teams.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary">
                    Freelance Full Stack Developer
                  </h3>
                  <p className="text-primary">
                    Self-Employed
                  </p>
                </div>
                <span className="text-secondary/80 mt-2 md:mt-0">
                  Oct 2024 – Present
                </span>
              </div>
              <p className="text-secondary/80">
                Delivering custom web applications for diverse clients.
                Specializing in Next.js, React, and WordPress solutions with
                end-to-end project ownership.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary">
                    Team Lead
                  </h3>
                  <p className="text-primary">
                    Acespritech Solutions
                  </p>
                </div>
                <span className="text-secondary/80 mt-2 md:mt-0">
                  6+ Years Leadership
                </span>
              </div>
              <p className="text-secondary/80">
                Led development teams on multiple projects, managed client
                relationships, conducted code reviews, and made technical
                architecture decisions.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button href="/experience" variant="outline" className="bg-white border border-gray-200 shadow-sm hover:shadow-xl">
              View Full Experience
            </Button>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center bg-white border border-gray-200 rounded-2xl shadow-sm p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl mb-8 text-secondary/80">
            Looking for a reliable, experienced developer to bring your project
            to life? I'm available for freelance projects and full-time
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-primary hover:bg-primary-600"
            >
              Get in Touch
            </Button>
            <Button
              href="/projects"
              variant="outline"
              size="lg"
              className="bg-white border border-gray-200 shadow-sm hover:shadow-xl"
            >
              View My Work
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
