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
      <Section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Senior Full Stack Developer Building{' '}
            <span className="text-indigo-600">
              Scalable Web Applications
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            7+ years of experience leading development teams and delivering
            high-performance web solutions
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Specializing in React.js, Next.js, Vue.js, Node.js, Laravel, and
            WordPress. I help startups, agencies, and SaaS companies build
            robust, maintainable applications that scale with their business
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/projects" size="lg">
              View Projects
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Hire Me
            </Button>
          </div>
        </div>
      </Section>

      {/* Expertise Overview */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                  className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 rounded-lg">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {area.title}
                      </h3>
                      <p className="text-gray-600">
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
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recent projects showcasing expertise in modern web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/projects" variant="primary">
              View All Projects
            </Button>
          </div>
        </div>
      </Section>

      {/* Experience Snapshot */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building scalable solutions and leading teams at top organizations
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Senior Associate Consultant
                  </h3>
                  <p className="text-indigo-600">
                    Infosys
                  </p>
                </div>
                <span className="text-gray-600 mt-2 md:mt-0">
                  Sep 2025 – Present
                </span>
              </div>
              <p className="text-gray-600">
                Leading enterprise application development, architecting
                scalable solutions for global clients, and driving technical
                excellence across development teams.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Freelance Full Stack Developer
                  </h3>
                  <p className="text-indigo-600">
                    Self-Employed
                  </p>
                </div>
                <span className="text-gray-600 mt-2 md:mt-0">
                  Oct 2024 – Present
                </span>
              </div>
              <p className="text-gray-600">
                Delivering custom web applications for diverse clients.
                Specializing in Next.js, React, and WordPress solutions with
                end-to-end project ownership.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Team Lead
                  </h3>
                  <p className="text-indigo-600">
                    Acespritech Solutions
                  </p>
                </div>
                <span className="text-gray-600 mt-2 md:mt-0">
                  6+ Years Leadership
                </span>
              </div>
              <p className="text-gray-600">
                Led development teams on multiple projects, managed client
                relationships, conducted code reviews, and made technical
                architecture decisions.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button href="/experience" variant="outline">
              View Full Experience
            </Button>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Looking for a reliable, experienced developer to bring your project
            to life? I'm available for freelance projects and full-time
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100"
            >
              Get in Touch
            </Button>
            <Button
              href="/projects"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              View My Work
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
