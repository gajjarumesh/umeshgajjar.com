import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { generatePageMetadata, injectStructuredData, generateBreadcrumbSchema } from '@/lib/seo';
import {
  FiCode,
  FiShoppingCart,
  FiLayout,
  FiServer,
  FiExternalLink,
  FiGithub,
} from 'react-icons/fi';

export const metadata = generatePageMetadata({
  title: 'Portfolio Projects & Web Development Work',
  description:
    'Showcase of web development projects by Umesh Gajjar including Enterprise Applications, SaaS Platforms, E-commerce Solutions, CMS Development, and API Integrations. Built with React.js, Next.js, Vue.js, Node.js, Laravel, and WordPress.',
  keywords: [
    'Web Development Projects',
    'Next.js Projects',
    'React Projects',
    'WordPress Development',
    'SaaS Development',
    'Enterprise Applications',
    'E-commerce Development',
    'Full Stack Portfolio',
    'Developer Portfolio',
  ],
  path: '/projects',
});

const projectCategories = [
  {
    id: 'enterprise',
    icon: FiServer,
    title: 'Enterprise Applications',
    description:
      'Large-scale applications for enterprise clients with complex requirements, high traffic, and robust architecture.',
    projects: [
      {
        name: 'Multi-Tenant SaaS Platform',
        description:
          'Enterprise SaaS application with role-based access control, subscription management, real-time analytics, and automated billing. Supports 10,000+ active users across 500+ organizations.',
        technologies: [
          'Next.js',
          'Node.js',
          'PostgreSQL',
          'Redis',
          'AWS',
          'Stripe',
        ],
        features: [
          'Multi-tenant architecture with data isolation',
          'Role-based access control (RBAC) with custom permissions',
          'Real-time analytics dashboard with Chart.js',
          'Automated subscription billing and invoice generation',
          'SSO integration with OAuth 2.0',
          'Comprehensive audit logging for compliance',
        ],
        impact:
          'Reduced operational costs by 60% through automation and improved user productivity by 40%.',
      },
      {
        name: 'Financial Management System',
        description:
          'Complete financial management solution for mid-sized businesses including accounting, invoicing, expense tracking, and financial reporting.',
        technologies: [
          'React.js',
          'Laravel',
          'MySQL',
          'Docker',
          'AWS EC2',
        ],
        features: [
          'Double-entry accounting system',
          'Automated invoice generation and payment tracking',
          'Expense management with receipt scanning (OCR)',
          'Financial reports (P&L, Balance Sheet, Cash Flow)',
          'Multi-currency support with real-time exchange rates',
          'Bank account reconciliation',
        ],
        impact:
          'Processes $10M+ in transactions monthly, serving 200+ businesses.',
      },
      {
        name: 'Custom ERP Solution',
        description:
          'Tailored ERP system for manufacturing company integrating inventory management, production planning, sales, and HR modules.',
        technologies: [
          'Vue.js',
          'Nuxt.js',
          'Node.js',
          'MongoDB',
          'Socket.io',
        ],
        features: [
          'Real-time inventory tracking with barcode scanning',
          'Production planning and scheduling',
          'Sales order management with CRM integration',
          'HR module with attendance and payroll',
          'Warehouse management system',
          'Mobile-responsive dashboard for on-the-go access',
        ],
        impact:
          'Improved operational efficiency by 50%, reduced inventory costs by 30%.',
      },
    ],
  },
  {
    id: 'saas',
    icon: FiCode,
    title: 'SaaS Platforms',
    description:
      'Software-as-a-Service platforms with subscription models, multi-tenancy, and scalable architecture.',
    projects: [
      {
        name: 'Project Management Tool',
        description:
          'Collaborative project management platform with task tracking, team communication, time tracking, and reporting. Designed for remote teams and agencies.',
        technologies: [
          'Next.js',
          'TypeScript',
          'PostgreSQL',
          'Prisma',
          'Vercel',
        ],
        features: [
          'Kanban boards with drag-and-drop task management',
          'Real-time collaboration with WebSocket',
          'Time tracking with automatic reporting',
          'Team communication with threaded discussions',
          'File sharing and document management',
          'Gantt charts for project timeline visualization',
          'Custom fields and workflow automation',
        ],
        impact:
          '1,000+ teams using the platform, average 35% increase in productivity.',
      },
      {
        name: 'Marketing Automation Platform',
        description:
          'All-in-one marketing automation solution for email campaigns, landing pages, lead management, and analytics.',
        technologies: [
          'React.js',
          'Node.js',
          'MongoDB',
          'Redis',
          'AWS SES',
        ],
        features: [
          'Drag-and-drop email campaign builder',
          'Landing page builder with A/B testing',
          'Lead scoring and segmentation',
          'Marketing automation workflows',
          'Email deliverability optimization',
          'Comprehensive analytics and reporting',
        ],
        impact:
          'Powers 500+ marketing campaigns monthly with 95%+ email deliverability.',
      },
      {
        name: 'Learning Management System',
        description:
          'Online learning platform for course creation, student management, assessments, and certification.',
        technologies: [
          'Next.js',
          'Node.js',
          'PostgreSQL',
          'AWS S3',
          'Stripe',
        ],
        features: [
          'Course builder with video, quizzes, and assignments',
          'Student progress tracking and analytics',
          'Live classes with video conferencing integration',
          'Automated grading and feedback',
          'Certificate generation upon course completion',
          'Discussion forums and Q&A sections',
        ],
        impact:
          '50+ instructors, 5,000+ students, 200+ courses with 4.8/5 average rating.',
      },
    ],
  },
  {
    id: 'ecommerce',
    icon: FiShoppingCart,
    title: 'E-commerce Solutions',
    description:
      'Feature-rich online stores with payment integrations, inventory management, and marketing tools.',
    projects: [
      {
        name: 'Multi-Vendor Marketplace',
        description:
          'Amazon-style marketplace platform where multiple vendors can sell their products with commission-based revenue model.',
        technologies: [
          'React.js',
          'Laravel',
          'MySQL',
          'Redis',
          'Stripe Connect',
        ],
        features: [
          'Vendor dashboard for product and order management',
          'Commission management and automated payouts',
          'Advanced product search with filters',
          'Rating and review system',
          'Wishlist and comparison features',
          'Multi-currency and multi-language support',
        ],
        impact:
          '200+ active vendors, 50,000+ products, processing $2M+ monthly GMV.',
      },
      {
        name: 'Subscription Box E-commerce',
        description:
          'Subscription-based e-commerce platform for curated product boxes with recurring billing.',
        technologies: [
          'Next.js',
          'Node.js',
          'PostgreSQL',
          'Stripe Subscriptions',
        ],
        features: [
          'Subscription management with flexible plans',
          'Product curation and box customization',
          'Automated recurring billing and shipment scheduling',
          'Customer portal for subscription management',
          'Referral program with rewards',
          'Analytics dashboard for subscription metrics',
        ],
        impact:
          '10,000+ active subscribers, 95% retention rate, $500K+ monthly recurring revenue.',
      },
    ],
  },
  {
    id: 'cms-wordpress',
    icon: FiLayout,
    title: 'CMS & WordPress Solutions',
    description:
      'Custom content management systems, WordPress themes, and headless CMS implementations.',
    projects: [
      {
        name: 'News & Media Portal',
        description:
          'High-traffic news website with custom WordPress theme, advanced caching, and editorial workflow.',
        technologies: [
          'WordPress',
          'PHP',
          'MySQL',
          'Redis',
          'CloudFlare',
        ],
        features: [
          'Custom Gutenberg blocks for rich content',
          'Multi-level editorial workflow with approval system',
          'Advanced caching for high traffic (1M+ monthly pageviews)',
          'Responsive design optimized for Core Web Vitals',
          'Advertising management system',
          'Newsletter integration with Mailchimp',
        ],
        impact:
          'Handles 1M+ monthly visitors with 99.9% uptime, PageSpeed score 95+.',
      },
      {
        name: 'Headless WordPress with Next.js',
        description:
          'Modern content-driven website using WordPress as headless CMS with Next.js frontend for optimal performance and SEO.',
        technologies: [
          'Next.js',
          'WordPress',
          'WPGraphQL',
          'Vercel',
          'AWS',
        ],
        features: [
          'WordPress backend for content management',
          'Next.js frontend with static generation (SSG)',
          'WPGraphQL for efficient data fetching',
          'Incremental Static Regeneration (ISR)',
          'Image optimization with Next.js Image component',
          'Preview mode for content editors',
        ],
        impact:
          'Achieved 98+ PageSpeed score, 50% faster load times compared to traditional WordPress.',
      },
      {
        name: 'Corporate Website with Custom CMS',
        description:
          'Enterprise corporate website with custom-built CMS tailored to specific content management needs.',
        technologies: [
          'Next.js',
          'Node.js',
          'PostgreSQL',
          'AWS S3',
        ],
        features: [
          'Custom content blocks and page builder',
          'Multi-language content management',
          'Media library with advanced organization',
          'User roles and permissions',
          'Content scheduling and publishing workflow',
          'SEO management tools built-in',
        ],
        impact:
          'Reduced content publishing time by 70%, improved SEO rankings by 150%.',
      },
    ],
  },
  {
    id: 'apis-integrations',
    icon: FiServer,
    title: 'APIs & Integrations',
    description:
      'Backend APIs, third-party integrations, and microservices architecture.',
    projects: [
      {
        name: 'RESTful API Platform',
        description:
          'Comprehensive REST API for mobile and web applications with authentication, rate limiting, and documentation.',
        technologies: [
          'Node.js',
          'Express.js',
          'PostgreSQL',
          'Redis',
          'Docker',
        ],
        features: [
          'JWT-based authentication and refresh tokens',
          'Role-based access control (RBAC)',
          'Rate limiting and API throttling',
          'Comprehensive API documentation with Swagger',
          'Versioning for backward compatibility',
          'Monitoring and logging with ELK stack',
        ],
        impact:
          'Handles 10M+ API requests monthly with 99.99% uptime.',
      },
      {
        name: 'Payment Gateway Integration Hub',
        description:
          'Unified payment processing system integrating multiple payment gateways (Stripe, PayPal, Razorpay) with fallback mechanisms.',
        technologies: [
          'Node.js',
          'TypeScript',
          'PostgreSQL',
          'Redis',
        ],
        features: [
          'Multi-gateway support with automatic fallback',
          'Webhook handling and retry logic',
          'PCI DSS compliant payment processing',
          'Refund and chargeback management',
          'Payment analytics and reporting',
          'Currency conversion and multi-currency support',
        ],
        impact:
          'Processed $5M+ in transactions with 99.9% success rate.',
      },
      {
        name: 'Microservices Architecture',
        description:
          'Scalable microservices-based backend for e-commerce platform with separate services for users, products, orders, and payments.',
        technologies: [
          'Node.js',
          'Docker',
          'Kubernetes',
          'MongoDB',
          'RabbitMQ',
        ],
        features: [
          'Independent microservices for modularity',
          'Message queue for inter-service communication',
          'API Gateway for routing and authentication',
          'Service discovery and load balancing',
          'Containerized deployment with Kubernetes',
          'Centralized logging and monitoring',
        ],
        impact:
          'Improved scalability by 300%, reduced deployment time by 80%.',
      },
    ],
  },
];

export default function ProjectsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={injectStructuredData(breadcrumbSchema)}
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Projects & Portfolio
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
            Showcasing 7+ years of full-stack development work across diverse
            industries
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            From enterprise SaaS platforms to e-commerce solutions and custom CMS
            implementations
          </p>
        </div>
      </Section>

      {/* Project Categories */}
      {projectCategories.map((category, categoryIndex) => {
        const Icon = category.icon;
        return (
          <Section
            key={category.id}
            className={
              categoryIndex % 2 === 0
                ? 'bg-white dark:bg-gray-900'
                : 'bg-gray-50 dark:bg-gray-800'
            }
          >
            <div className="max-w-6xl mx-auto">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-12">
                <div className="p-4 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-8">
                {category.projects.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-300 dark:hover:border-indigo-700 transition-all"
                  >
                    {/* Project Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                        {project.name}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0">
                              •
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h4 className="text-sm font-semibold text-green-900 dark:text-green-400 mb-2 uppercase tracking-wide">
                        Business Impact
                      </h4>
                      <p className="text-green-800 dark:text-green-300">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      {/* Project Stats */}
      <Section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Portfolio Highlights
            </h2>
            <p className="text-xl text-indigo-100">
              Proven track record of delivering successful projects
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-indigo-100">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">30+</div>
              <div className="text-indigo-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100K+</div>
              <div className="text-indigo-100">Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">7+</div>
              <div className="text-indigo-100">Years Experience</div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Let's discuss how I can help bring your ideas to life with modern
            web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
            <Button href="/skills" variant="outline" size="lg">
              View Skills
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
