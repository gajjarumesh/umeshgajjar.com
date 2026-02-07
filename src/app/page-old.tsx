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
      <Section className="bg-gradient-to-b from-white via-gray-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                Senior Full Stack Developer Building{' '}
                <span className="text-primary">
                  Scalable Web Applications
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary/75 leading-relaxed">
                7+ years of experience leading development teams and delivering
                high-performance web solutions
              </p>
              <p className="text-base md:text-lg text-secondary/60 leading-relaxed">
                Specializing in React.js, Next.js, Vue.js, Node.js, Laravel, and
                WordPress. I help startups, agencies, and SaaS companies build
                robust, maintainable applications that scale with their business
                needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button href="/projects" size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  View Projects
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5">
                  Hire Me
                </Button>
              </div>
            </div>

            {/* Right: Stats Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border-2 border-gray-100 rounded-2xl p-8 lg:p-10 shadow-lg backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-secondary mb-8 text-center">
                  By the Numbers
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center space-y-2">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FiCode className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-primary">50+</div>
                    <div className="text-xs md:text-sm text-secondary/60 font-medium">Projects Delivered</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FiServer className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-primary">7+</div>
                    <div className="text-xs md:text-sm text-secondary/60 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FiLayout className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-primary">30+</div>
                    <div className="text-xs md:text-sm text-secondary/60 font-medium">Happy Clients</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FiCloud className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-primary">10+</div>
                    <div className="text-xs md:text-sm text-secondary/60 font-medium">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Expertise Overview */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
              Technical Expertise
            </h2>
            <p className="text-lg md:text-xl text-secondary/60 max-w-3xl mx-auto">
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
                  className="group bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-primary/5 rounded-xl flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl md:text-2xl font-semibold text-secondary">
                        {area.title}
                      </h3>
                      <p className="text-base text-secondary/70 leading-relaxed">
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
      <Section className="bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-secondary/60 max-w-3xl mx-auto">
              Recent projects showcasing expertise in modern web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-1 space-y-5"
              >
                <h3 className="text-xl md:text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-base text-secondary/70 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-semibold bg-secondary/5 text-secondary rounded-lg border border-secondary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/projects" variant="primary" className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
              View All Projects
            </Button>
          </div>
        </div>
      </Section>

      {/* Experience Snapshot */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
              Professional Journey
            </h2>
            <p className="text-lg md:text-xl text-secondary/60 max-w-3xl mx-auto">
              Building scalable solutions and leading teams at top organizations
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="group bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                    Senior Associate Consultant
                  </h3>
                  <p className="text-base md:text-lg text-primary font-semibold">
                    Infosys
                  </p>
                </div>
                <span className="text-sm text-secondary/50 mt-3 md:mt-0 font-medium">
                  Sep 2025 – Present
                </span>
              </div>
              <p className="text-base text-secondary/70 leading-relaxed">
                Leading enterprise application development, architecting
                scalable solutions for global clients, and driving technical
                excellence across development teams.
              </p>
            </div>

            <div className="group bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                    Freelance Full Stack Developer
                  </h3>
                  <p className="text-base md:text-lg text-primary font-semibold">
                    Self-Employed
                  </p>
                </div>
                <span className="text-sm text-secondary/50 mt-3 md:mt-0 font-medium">
                  Oct 2024 – Present
                </span>
              </div>
              <p className="text-base text-secondary/70 leading-relaxed">
                Delivering custom web applications for diverse clients.
                Specializing in Next.js, React, and WordPress solutions with
                end-to-end project ownership.
              </p>
            </div>

            <div className="group bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                    Team Lead
                  </h3>
                  <p className="text-base md:text-lg text-primary font-semibold">
                    Acespritech Solutions
                  </p>
                </div>
                <span className="text-sm text-secondary/50 mt-3 md:mt-0 font-medium">
                  6+ Years Leadership
                </span>
              </div>
              <p className="text-base text-secondary/70 leading-relaxed">
                Led development teams on multiple projects, managed client
                relationships, conducted code reviews, and made technical
                architecture decisions.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button href="/experience" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5">
              View Full Experience
            </Button>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-gradient-to-br from-gray-50 via-primary/5 to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white border-2 border-gray-100 rounded-3xl shadow-xl p-12 md:p-16 space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg md:text-xl text-secondary/70 leading-relaxed max-w-2xl mx-auto">
              Looking for a reliable, experienced developer to bring your project
              to life? I'm available for freelance projects and full-time
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get in Touch
              </Button>
              <Button
                href="/projects"
                variant="outline"
                size="lg"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
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
