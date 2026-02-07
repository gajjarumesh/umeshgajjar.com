import { Section } from '@/components/ui/Section';
import { generatePageMetadata, injectStructuredData, generateBreadcrumbSchema } from '@/lib/seo';
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiCloud,
  FiTool,
  FiGitBranch,
} from 'react-icons/fi';

export const metadata = generatePageMetadata({
  title: 'Technical Skills & Expertise',
  description:
    'Comprehensive overview of Umesh Gajjar technical skills including React.js, Next.js, Vue.js, Node.js, Laravel, WordPress, PostgreSQL, MongoDB, AWS, Docker, and more. 7+ years of full stack development experience.',
  keywords: [
    'React.js',
    'Next.js',
    'Vue.js',
    'Nuxt.js',
    'Node.js',
    'Laravel',
    'WordPress',
    'TypeScript',
    'JavaScript',
    'PHP',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Docker',
    'DevOps',
    'Full Stack Skills',
  ],
  path: '/skills',
});

const skillCategories = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    description:
      'Building modern, performant, and accessible user interfaces with cutting-edge frameworks and libraries.',
    skills: [
      {
        name: 'React.js',
        description:
          'Expert in building interactive UIs with hooks, context, custom hooks, and modern patterns. Experience with React 18+ features.',
      },
      {
        name: 'Next.js',
        description:
          'Advanced knowledge of App Router, server components, server actions, SSR, SSG, ISR, and performance optimization techniques.',
      },
      {
        name: 'Vue.js & Nuxt.js',
        description:
          'Progressive framework experience including Composition API, Vuex, Pinia state management, and Nuxt 3 server-side rendering.',
      },
      {
        name: 'Redux & State Management',
        description:
          'Complex state handling with Redux Toolkit, Context API, Zustand, and Recoil for enterprise applications.',
      },
      {
        name: 'Tailwind CSS',
        description:
          'Utility-first styling for rapid, responsive development. Custom configurations, dark mode, and component patterns.',
      },
      {
        name: 'TypeScript',
        description:
          'Strong typing for safer, more maintainable code. Type definitions, generics, and advanced TypeScript patterns.',
      },
    ],
  },
  {
    icon: FiServer,
    title: 'Backend Development',
    description:
      'Designing and implementing robust, scalable server-side applications and APIs.',
    skills: [
      {
        name: 'Node.js',
        description:
          'Building RESTful APIs with Express.js, Fastify, and NestJS. Experience with real-time applications using Socket.io.',
      },
      {
        name: 'Laravel',
        description:
          'PHP framework for robust web applications. Eloquent ORM, authentication, API development, and Laravel ecosystem tools.',
      },
      {
        name: 'Symfony',
        description:
          'Enterprise-grade PHP development with Symfony components. Building scalable, maintainable applications.',
      },
      {
        name: 'Python',
        description:
          'Backend development with Django and Flask. Scripting, automation, and data processing tasks.',
      },
      {
        name: 'GraphQL',
        description:
          'Implementing GraphQL APIs with Apollo Server, type-safe queries, and efficient data fetching patterns.',
      },
      {
        name: 'RESTful APIs',
        description:
          'Designing and documenting REST APIs following best practices. Authentication, rate limiting, and versioning.',
      },
    ],
  },
  {
    icon: FiGitBranch,
    title: 'CMS & WordPress Expertise',
    description:
      'Custom content management solutions and WordPress development.',
    skills: [
      {
        name: 'Custom WordPress Themes',
        description:
          'Building responsive, SEO-optimized custom themes from scratch. Gutenberg blocks and Advanced Custom Fields.',
      },
      {
        name: 'WordPress Plugins',
        description:
          'Developing custom plugins for specific functionality. WordPress hooks, filters, and plugin architecture.',
      },
      {
        name: 'WooCommerce',
        description:
          'E-commerce customizations, payment gateway integrations, and custom product types.',
      },
      {
        name: 'Headless WordPress',
        description:
          'Integrating WordPress with modern frontends using WP REST API and WPGraphQL for decoupled architectures.',
      },
    ],
  },
  {
    icon: FiDatabase,
    title: 'Databases & Data',
    description:
      'Designing efficient data models and optimizing database performance.',
    skills: [
      {
        name: 'PostgreSQL',
        description:
          'Advanced SQL queries, indexing, query optimization, and database design. JSONB support and full-text search.',
      },
      {
        name: 'MySQL',
        description:
          'Relational database design, stored procedures, triggers, and performance tuning for high-traffic applications.',
      },
      {
        name: 'MongoDB',
        description:
          'NoSQL document database for flexible schemas. Aggregation pipelines, indexing, and replication.',
      },
      {
        name: 'Redis',
        description:
          'In-memory data structure store for caching, session management, and real-time features.',
      },
      {
        name: 'Prisma ORM',
        description:
          'Type-safe database access with Prisma Client. Schema migrations and database introspection.',
      },
    ],
  },
  {
    icon: FiCloud,
    title: 'Cloud & DevOps',
    description:
      'Infrastructure setup, deployment automation, and cloud services management.',
    skills: [
      {
        name: 'AWS Services',
        description:
          'EC2, S3, RDS, Lambda, CloudFront, Route 53, and IAM. Building scalable cloud architectures.',
      },
      {
        name: 'Docker',
        description:
          'Containerization of applications, Docker Compose for local development, and container orchestration.',
      },
      {
        name: 'CI/CD Pipelines',
        description:
          'Automated testing and deployment with GitHub Actions, GitLab CI, and Jenkins.',
      },
      {
        name: 'Vercel & Netlify',
        description:
          'Serverless deployment platforms for Next.js and static sites. Edge functions and instant deployments.',
      },
      {
        name: 'Monitoring & Logging',
        description:
          'Application monitoring with tools like Sentry, LogRocket, and CloudWatch for production systems.',
      },
    ],
  },
  {
    icon: FiTool,
    title: 'Tools & Collaboration',
    description:
      'Development tools, version control, and project management systems.',
    skills: [
      {
        name: 'Git & GitHub',
        description:
          'Version control workflows, branching strategies, pull requests, and code review processes.',
      },
      {
        name: 'GitLab',
        description:
          'GitLab repositories, CI/CD pipelines, and issue tracking for team collaboration.',
      },
      {
        name: 'Figma',
        description:
          'UI/UX collaboration with designers. Implementing designs with pixel-perfect accuracy.',
      },
      {
        name: 'Agile/Scrum',
        description:
          'Agile development methodologies, sprint planning, daily standups, and iterative development.',
      },
      {
        name: 'VS Code',
        description:
          'Advanced IDE usage with extensions, debugging, and productivity workflows.',
      },
    ],
  },
];

export default function SkillsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={injectStructuredData(breadcrumbSchema)}
      />

      {/* Hero Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Technical Skills & Expertise
          </h1>
          <p className="text-xl text-secondary/80">
            Comprehensive full-stack development capabilities built over 7+
            years of hands-on experience
          </p>
        </div>
      </Section>

      {/* Skills Categories */}
      {skillCategories.map((category, categoryIndex) => {
        const Icon = category.icon;
        return (
          <Section
            key={categoryIndex}
            className={
              categoryIndex % 2 === 0
                ? 'bg-gray-50'
                : 'bg-white'
            }
          >
            <div className="max-w-6xl mx-auto">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-secondary">
                    {category.title}
                  </h2>
                  <p className="text-secondary/80 mt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="p-6 bg-white border border-gray-200 rounded-lg hover:border-secondary transition-all"
                  >
                    <h3 className="text-xl font-bold text-secondary mb-3">
                      {skill.name}
                    </h3>
                    <p className="text-secondary/80">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Put These Skills to Work?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how my technical expertise can help bring your project
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 bg-white text-primary hover:bg-gray-100"
            >
              Get in Touch
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              View Projects
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
