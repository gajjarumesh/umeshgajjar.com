import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/CTASection';
import {
  FiCode,
  FiShoppingCart,
  FiLayout,
  FiServer,
  FiExternalLink,
  FiGithub,
} from 'react-icons/fi';

export const metadata = {
  title: 'Portfolio Projects & Web Development Work | Umesh Gajjar',
  description:
    'Showcase of web development projects by Umesh Gajjar including Enterprise Applications, SaaS Platforms, E-commerce Solutions, CMS Development, and API Integrations. Built with React.js, Next.js, Vue.js, Node.js, Laravel, and WordPress.',
  keywords: 'Web Development Projects, Next.js Projects, React Projects, WordPress Development, SaaS Development, Enterprise Applications, E-commerce Development, Full Stack Portfolio, Developer Portfolio',
};

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
  // Flatten all projects from all categories for the grid view
  const allProjects = projectCategories.flatMap(category => 
    category.projects.map(project => ({ ...project, category: category.title, categoryIcon: category.icon }))
  );

  return (
    <>
      {/* MODERN HERO SECTION */}
      <section className="relative min-h-[70vh] bg-primary py-20 md:py-32 overflow-hidden">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pattern/10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
            <FiCode className="w-4 h-4 text-pattern" />
            <span>Portfolio Showcase</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Projects & Portfolio
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
            8+ years of full-stack development excellence across diverse industries
            and cutting-edge technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <FiServer className="w-4 h-4 text-green-400" />
              <span className="text-sm">Enterprise Apps</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <FiCode className="w-4 h-4 text-green-400" />
              <span className="text-sm">SaaS Platforms</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <FiShoppingCart className="w-4 h-4 text-green-400" />
              <span className="text-sm">E-commerce Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN PROJECTS GRID */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <FiLayout className="w-4 h-4 text-pattern" />
              <span>Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Portfolio Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real projects, real impact, real results - built with modern technologies and best practices
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {allProjects.slice(0, 6).map((project, index) => {
              const CategoryIcon = project.categoryIcon;
              return (
                <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/30 hover:-translate-y-2">
                  {/* Modern Header with gradient */}
                  <div className="bg-gradient-to-r from-primary to-primary-400 text-white p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                          <CategoryIcon className="w-6 h-6 text-pattern" />
                        </div>
                        <span className="font-bold text-lg">{project.category}</span>
                      </div>
                      <div className="text-3xl font-black text-primary">#{String(index + 1).padStart(2, '0')}</div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-secondary/20 text-fontColor rounded-full text-sm font-semibold hover:bg-secondary/30 transition-all duration-300 border border-secondary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Features */}
                    {project.features && (
                      <div className="mb-8">
                        <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Key Features</h4>
                        <div className="space-y-3">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                              <div className="w-2 h-2 bg-pattern rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Impact */}
                    {project.impact && (
                      <div className="bg-background p-6 rounded-2xl border border-secondary/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 via-primary-100/10 to-secondary-100/10"></div>
                        <div className="relative z-10 flex items-start gap-4">
                          <div className="w-8 h-8 bg-pattern rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">Project Impact</h4>
                            <p className="text-gray-700 font-medium text-lg">{project.impact}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENHANCED STATS SECTION */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        {/* Simple Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-8 py-4 rounded-full text-sm font-bold mb-8 border border-white/30 shadow-xl">
              <FiExternalLink className="w-5 h-5 text-pattern" />
              <span>Success Metrics</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Project Impact</h2>
            <p className="text-2xl text-white/95 max-w-4xl mx-auto font-light">Numbers that speak for the quality and success of delivered solutions</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Delivered", icon: FiCode },
              { number: "30+", label: "Happy Clients", icon: FiLayout },
              { number: "100K+", label: "Users Served", icon: FiServer },
              { number: "8+", label: "Years Experience", icon: FiExternalLink }
            ].map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 backdrop-blur-sm border border-white/40 shadow-2xl group-hover:bg-white/30">
                      <StatIcon className="w-12 h-12 text-pattern group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 w-24 h-24 bg-white/20 rounded-3xl mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                  <div className="text-6xl md:text-7xl font-black mb-4 group-hover:scale-110 transition-all duration-300 text-white drop-shadow-lg">
                    {stat.number}
                  </div>
                  <div className="text-white/95 text-xl font-semibold tracking-wide">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Start Your Next Project?"
        subtitle="Let's collaborate to create something amazing together. From concept to deployment, I'll help bring your vision to life with cutting-edge web technologies."
        secondaryButtonText="View Skills"
        secondaryButtonHref="/skills"
      />
    </>
  );
}
