import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { CTASection } from '@/components/CTASection';
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiCloud,
  FiTool,
  FiGitBranch,
} from 'react-icons/fi';

export const metadata = {
  title: 'Technical Skills & Expertise | Umesh Gajjar',
  description:
    'Comprehensive overview of Umesh Gajjar technical skills including React.js, Next.js, Vue.js, Node.js, Laravel, WordPress, PostgreSQL, MongoDB, AWS, Docker, and more. 8+ years of full stack development experience.',
  keywords: 'React.js, Next.js, Vue.js, Nuxt.js, Node.js, Laravel, WordPress, TypeScript, JavaScript, PHP, Python, PostgreSQL, MongoDB, AWS, Docker, DevOps, Full Stack Skills',
};

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
  return (
    <>
      {/* MODERN HERO SECTION */}
      <section className="relative min-h-[70vh] bg-primary py-20 md:py-32 overflow-hidden">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pattern/10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full"></div>
        </div>
        

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
            <FiCode className="w-4 h-4 text-pattern" />
            <span>Technical Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Technical Skills & Expertise
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
            8+ years of full-stack development expertise with modern technologies,
            best practices, and scalable architecture patterns.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <FiCode className="w-4 h-4 text-green-400" />
              <span className="text-sm">Frontend Expert</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <FiServer className="w-4 h-4 text-green-400" />
              <span className="text-sm">Backend Architect</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <FiCloud className="w-4 h-4 text-green-400" />
              <span className="text-sm">DevOps Integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN SKILLS SECTION */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <FiTool className="w-4 h-4 text-pattern" />
              <span>Technical Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A comprehensive overview of my technical expertise across the full development stack
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="group">
                  {/* Modern Category Header with New Attractive Gradient */}
                  <div className="relative bg-gradient-to-r from-primary to-primary-400 p-8 rounded-2xl text-white mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    {/* Enhanced background pattern */}
                    {/* Simple decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-4">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                          <Icon className="w-8 h-8 text-pattern" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
                      </div>
                      
                      <p className="text-white/90 text-lg leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                  
                  {/* Modern Skills Grid */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="group/skill bg-white rounded-xl border border-gray-100 hover:border-primary/30 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                      >
                        {/* Subtle hover gradient */}
                        <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10 flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-3 h-3 bg-pattern/80 rounded-full group-hover/skill:scale-125 transition-transform duration-300"></div>
                              <h3 className="font-bold text-xl text-gray-900 group-hover/skill:text-primary transition-colors duration-300">
                                {skill.name}
                              </h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed group-hover/skill:text-gray-700 transition-colors duration-300">
                              {skill.description}
                            </p>
                          </div>
                          
                          {/* Skill level indicator */}
                          <div className="ml-6 flex-shrink-0">
                            <div className="w-12 h-1 bg-primary-200 rounded-full overflow-hidden">
                              <div className="w-full h-full bg-pattern/60 transform origin-left scale-x-90 group-hover/skill:scale-x-100 transition-transform duration-500"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Put These Skills to Work?"
        subtitle="Let's discuss how my technical expertise can help bring your vision to life and drive your business forward."
      />
    </>
  );
}
