import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
  FaCloud,
  FaTools,
  FaChartLine,
  FaCode,
} from "react-icons/fa";

export const services = [
  {
    id: 1,
    slug: "custom-web-application-development",
    icon: FaLaptopCode,
    title: "Custom Web Application Development",
    shortDescription:
      "Tailored web applications built from scratch to meet your unique business needs with cutting-edge technologies.",
    description:
      "Transform your business vision into reality with custom web applications designed specifically for your requirements. I specialize in building scalable, secure, and high-performance web applications using modern frameworks like React.js, Next.js, Vue.js, and Laravel. Whether you need a complex enterprise solution or a streamlined business tool, I deliver applications that drive efficiency and growth. My development approach focuses on clean code architecture, intuitive user experiences, and seamless integrations with your existing systems. From initial planning through deployment and maintenance, I ensure your application exceeds expectations and adapts to your evolving business needs.",
    benefits: [
      "Fully customized to your business processes and workflows",
      "Scalable architecture that grows with your business",
      "Modern, intuitive user interfaces that enhance productivity",
      "Secure, robust backend systems with comprehensive testing",
      "Seamless third-party integrations (payment gateways, APIs, CRMs)",
      "Responsive design optimized for all devices",
      "Comprehensive documentation and ongoing support",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Laravel",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
      "Docker",
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Planning",
        description:
          "Understanding your requirements, goals, and target audience to create a comprehensive project roadmap.",
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description:
          "Creating wireframes and interactive prototypes to visualize the application flow and user experience.",
      },
      {
        step: 3,
        title: "Development & Testing",
        description:
          "Building the application with clean code, followed by rigorous testing to ensure quality and performance.",
      },
      {
        step: 4,
        title: "Deployment & Support",
        description:
          "Launching your application on reliable infrastructure with ongoing maintenance and updates.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to build a custom web application?",
        answer:
          "Timeline varies based on complexity, but typically ranges from 6-16 weeks for a complete application. I provide detailed timelines after understanding your requirements.",
      },
      {
        question: "Will I own the source code?",
        answer:
          "Absolutely! You receive full ownership of the source code and all assets upon project completion.",
      },
      {
        question: "Do you provide post-launch support?",
        answer:
          "Yes, I offer comprehensive maintenance packages including bug fixes, updates, and feature enhancements to ensure your application continues to perform optimally.",
      },
      {
        question: "Can you integrate with existing systems?",
        answer:
          "Yes, I have extensive experience integrating with various third-party services, APIs, and legacy systems to create seamless workflows.",
      },
    ],
    cta: "Start Your Custom Project",
    featured: true,
  },
  {
    id: 2,
    slug: "saas-development-mvp-building",
    icon: FaChartLine,
    title: "SaaS Development & MVP Building",
    shortDescription:
      "Launch your SaaS product with a robust, scalable MVP that validates your idea and attracts early adopters.",
    description:
      "Bring your SaaS idea to life with a Minimum Viable Product that's ready for market validation. I specialize in building scalable multi-tenant architectures with subscription management, user authentication, and comprehensive admin dashboards. My SaaS development approach focuses on rapid deployment while maintaining code quality and scalability for future growth. From concept to launch, I help you navigate technical decisions, prioritize features, and build a product that resonates with your target market. With experience in various SaaS models, I ensure your platform can handle user growth, feature expansion, and market demands efficiently.",
    benefits: [
      "Fast time-to-market with MVP approach (6-12 weeks)",
      "Multi-tenant architecture for efficient resource utilization",
      "Built-in subscription and billing management (Stripe integration)",
      "User authentication with role-based access control",
      "Comprehensive admin dashboard with analytics",
      "API-first design for future mobile app integration",
      "Automated email notifications and user onboarding",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Stripe API",
      "AWS/Vercel",
      "Docker",
    ],
    process: [
      {
        step: 1,
        title: "Idea Validation",
        description:
          "Analyzing your concept, identifying core features, and defining your MVP scope to maximize market fit.",
      },
      {
        step: 2,
        title: "Architecture Design",
        description:
          "Planning scalable architecture, database schema, and technology stack for long-term growth.",
      },
      {
        step: 3,
        title: "Rapid Development",
        description:
          "Building your MVP with agile methodology, delivering working features in 2-week sprints.",
      },
      {
        step: 4,
        title: "Launch & Iterate",
        description:
          "Deploying to production, gathering user feedback, and iterating based on real-world usage.",
      },
    ],
    faqs: [
      {
        question: "What's included in a typical SaaS MVP?",
        answer:
          "A typical MVP includes user authentication, subscription management, core features, admin dashboard, email notifications, and payment integration - all ready for production use.",
      },
      {
        question: "How much does SaaS development cost?",
        answer:
          "MVP development typically ranges from $8,000-$25,000 depending on complexity and features. I provide detailed quotes after understanding your requirements.",
      },
      {
        question: "Can the MVP scale as my user base grows?",
        answer:
          "Absolutely! I build MVPs with scalability in mind, using proven architectures and technologies that can handle growth from 100 to 100,000+ users.",
      },
    ],
    cta: "Build Your SaaS MVP",
    featured: true,
  },
  {
    id: 3,
    slug: "ecommerce-solutions",
    icon: FaShoppingCart,
    title: "E-commerce Solutions",
    shortDescription:
      "Complete e-commerce platforms with secure payments, inventory management, and seamless user experiences.",
    description:
      "Launch or upgrade your online store with a custom e-commerce solution designed to maximize conversions and streamline operations. I build feature-rich e-commerce platforms with secure payment processing, inventory management, order tracking, and customer account management. Whether you need a simple online store or a complex multi-vendor marketplace, I deliver solutions that enhance user experience and drive sales. My e-commerce development includes mobile-responsive design, fast loading times, SEO optimization, and integration with popular payment gateways and shipping providers. From product catalogs to checkout optimization, every aspect is crafted to boost your bottom line.",
    benefits: [
      "Secure payment gateway integration (Stripe, PayPal, Razorpay)",
      "Real-time inventory and order management",
      "Advanced search and filtering capabilities",
      "Customer accounts with order history and wishlists",
      "Automated email notifications for orders and shipments",
      "Mobile-first responsive design",
      "SEO-optimized product pages for better visibility",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Laravel",
      "Node.js",
      "MongoDB/PostgreSQL",
      "Stripe/PayPal API",
      "Shippo/EasyPost",
    ],
    process: [
      {
        step: 1,
        title: "Store Planning",
        description:
          "Defining your product catalog, payment methods, shipping options, and user flows.",
      },
      {
        step: 2,
        title: "Design & UX",
        description:
          "Creating conversion-optimized designs with seamless checkout experiences.",
      },
      {
        step: 3,
        title: "Development",
        description:
          "Building your store with secure payment processing and inventory management.",
      },
      {
        step: 4,
        title: "Testing & Launch",
        description:
          "Thorough testing of all features, payment flows, and mobile responsiveness before going live.",
      },
    ],
    faqs: [
      {
        question: "Which e-commerce platform is best for my business?",
        answer:
          "I recommend custom solutions for unique requirements, headless commerce for flexibility, or platforms like Shopify/WooCommerce for standard needs. I'll help you choose based on your goals.",
      },
      {
        question: "How do you ensure payment security?",
        answer:
          "I implement industry-standard PCI compliance, SSL encryption, secure payment gateways, and follow best practices to protect customer payment information.",
      },
      {
        question: "Can you integrate with my existing inventory system?",
        answer:
          "Yes, I have experience integrating with various inventory management systems, ERPs, and third-party fulfillment services.",
      },
    ],
    cta: "Launch Your Online Store",
    featured: true,
  },
  {
    id: 4,
    slug: "mobile-first-web-applications",
    icon: FaMobileAlt,
    title: "Mobile-First Web Applications",
    shortDescription:
      "Progressive Web Apps that deliver native-like experiences on any device with offline capabilities.",
    description:
      "Reach your users wherever they are with mobile-first web applications that combine the best of web and mobile technologies. I specialize in building Progressive Web Apps (PWAs) that work seamlessly across all devices, offer offline functionality, and can be installed like native apps. My mobile-first approach ensures optimal performance on smartphones while maintaining full functionality on tablets and desktops. These applications load instantly, work offline, receive push notifications, and provide smooth, app-like interactions that users love. Perfect for businesses looking to reach mobile users without the complexity and cost of separate native mobile apps.",
    benefits: [
      "Works seamlessly on iOS, Android, and desktop browsers",
      "Installable on home screen without app store approval",
      "Offline functionality for uninterrupted user experience",
      "Push notification support for user engagement",
      "Fast loading times with optimized performance",
      "Single codebase reduces development and maintenance costs",
      "Automatic updates without requiring app store submissions",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Service Workers",
      "IndexedDB",
      "Web Push API",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    process: [
      {
        step: 1,
        title: "Mobile Strategy",
        description:
          "Analyzing your mobile user needs and defining PWA features for maximum impact.",
      },
      {
        step: 2,
        title: "Mobile-First Design",
        description:
          "Creating touch-optimized interfaces that work perfectly on small screens.",
      },
      {
        step: 3,
        title: "PWA Development",
        description:
          "Building with progressive enhancement, offline support, and native-like features.",
      },
      {
        step: 4,
        title: "Testing & Optimization",
        description:
          "Testing across devices and optimizing performance for various network conditions.",
      },
    ],
    faqs: [
      {
        question: "What's the difference between a PWA and a native mobile app?",
        answer:
          "PWAs work through browsers, require no app store approval, and use a single codebase for all platforms. They're faster to develop and easier to maintain while offering most native app features.",
      },
      {
        question: "Can PWAs work offline?",
        answer:
          "Yes! PWAs can cache data and functionality, allowing users to access core features even without an internet connection.",
      },
      {
        question: "Do PWAs have access to device features?",
        answer:
          "Modern PWAs can access camera, geolocation, push notifications, and more through web APIs, covering most common use cases.",
      },
    ],
    cta: "Build Your Mobile App",
    featured: false,
  },
  {
    id: 5,
    slug: "api-development-integration",
    icon: FaServer,
    title: "API Development & Integration",
    shortDescription:
      "Robust RESTful and GraphQL APIs with comprehensive documentation and seamless third-party integrations.",
    description:
      "Power your applications with well-architected APIs that ensure reliable data exchange and seamless integrations. I design and develop RESTful and GraphQL APIs that are scalable, secure, and thoroughly documented. Whether you need to build a new API from scratch, integrate with third-party services, or modernize existing endpoints, I deliver solutions that meet industry standards and best practices. My API development includes authentication, rate limiting, versioning, comprehensive error handling, and detailed documentation. From microservices architecture to webhook implementations, I ensure your systems communicate efficiently and securely.",
    benefits: [
      "RESTful and GraphQL API development",
      "Secure authentication (JWT, OAuth 2.0, API keys)",
      "Comprehensive API documentation (Swagger/OpenAPI)",
      "Rate limiting and request throttling",
      "Versioning for backward compatibility",
      "Integration with popular services (Stripe, Twilio, SendGrid)",
      "Real-time APIs with WebSockets for live updates",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Laravel",
      "GraphQL",
      "REST",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    process: [
      {
        step: 1,
        title: "API Planning",
        description:
          "Defining endpoints, data structures, authentication methods, and integration requirements.",
      },
      {
        step: 2,
        title: "Development",
        description:
          "Building secure, scalable APIs with proper error handling and validation.",
      },
      {
        step: 3,
        title: "Documentation",
        description:
          "Creating comprehensive documentation with examples and testing tools.",
      },
      {
        step: 4,
        title: "Testing & Deployment",
        description:
          "Thorough testing of all endpoints and deployment with monitoring tools.",
      },
    ],
    faqs: [
      {
        question: "Should I use REST or GraphQL for my API?",
        answer:
          "REST is great for simple, resource-based APIs. GraphQL excels when you need flexible queries and want to minimize over-fetching. I'll help you choose based on your use case.",
      },
      {
        question: "How do you ensure API security?",
        answer:
          "I implement multiple security layers including authentication, authorization, input validation, rate limiting, and HTTPS encryption to protect your API from common vulnerabilities.",
      },
      {
        question: "Do you provide API documentation?",
        answer:
          "Yes, I create comprehensive documentation using Swagger/OpenAPI or Postman, including examples, authentication guides, and interactive testing tools.",
      },
    ],
    cta: "Discuss Your API Needs",
    featured: false,
  },
  {
    id: 6,
    slug: "legacy-system-modernization",
    icon: FaTools,
    title: "Legacy System Modernization",
    shortDescription:
      "Transform outdated systems into modern, maintainable applications without disrupting your business.",
    description:
      "Breathe new life into outdated systems with careful modernization that preserves business logic while embracing modern technologies. I specialize in migrating legacy applications to contemporary frameworks and architectures, ensuring minimal disruption to your operations. Whether you're dealing with monolithic applications, outdated codebases, or systems that can't scale, I provide strategic migration paths that improve performance, reduce maintenance costs, and enable future growth. My approach includes thorough analysis of existing systems, incremental migration strategies, comprehensive testing, and knowledge transfer to your team.",
    benefits: [
      "Gradual migration strategy minimizes business disruption",
      "Improved performance and scalability",
      "Modern, maintainable codebase reduces technical debt",
      "Enhanced security with up-to-date frameworks",
      "Better user experience with modern interfaces",
      "Reduced hosting costs with optimized architecture",
      "Comprehensive documentation and knowledge transfer",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Laravel",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "MongoDB",
      "Microservices",
    ],
    process: [
      {
        step: 1,
        title: "System Analysis",
        description:
          "Auditing existing system, identifying pain points, and mapping business logic.",
      },
      {
        step: 2,
        title: "Migration Strategy",
        description:
          "Creating a phased migration plan that minimizes risk and business interruption.",
      },
      {
        step: 3,
        title: "Incremental Migration",
        description:
          "Modernizing in stages, testing thoroughly, and maintaining parallel systems when needed.",
      },
      {
        step: 4,
        title: "Cutover & Support",
        description:
          "Final migration, data verification, and ongoing support during transition period.",
      },
    ],
    faqs: [
      {
        question: "How long does legacy system modernization take?",
        answer:
          "Timeline depends on system complexity, but typically ranges from 3-12 months. I break work into phases so you can realize benefits incrementally.",
      },
      {
        question: "Will my data be safe during migration?",
        answer:
          "Absolutely. I implement comprehensive backup strategies, use staging environments, and perform extensive testing before any production changes.",
      },
      {
        question: "Can we modernize without disrupting business operations?",
        answer:
          "Yes, I use strategies like parallel running, feature flags, and gradual rollouts to ensure your business continues operating smoothly throughout the migration.",
      },
    ],
    cta: "Modernize Your System",
    featured: false,
  },
  {
    id: 7,
    slug: "devops-cloud-deployment",
    icon: FaCloud,
    title: "DevOps & Cloud Deployment",
    shortDescription:
      "Automated deployment pipelines, cloud infrastructure, and monitoring for reliable, scalable applications.",
    description:
      "Optimize your development workflow and infrastructure with modern DevOps practices and cloud solutions. I set up automated CI/CD pipelines, containerized deployments, and scalable cloud infrastructure that reduces deployment time and improves reliability. Whether you're deploying on AWS, Google Cloud, Azure, or Vercel, I ensure your applications run efficiently with proper monitoring, logging, and automated scaling. My DevOps services include infrastructure as code, automated testing, zero-downtime deployments, and comprehensive monitoring solutions that give you visibility into your application's health and performance.",
    benefits: [
      "Automated CI/CD pipelines for faster deployments",
      "Containerization with Docker for consistency",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Auto-scaling to handle traffic spikes",
      "Comprehensive monitoring and alerting",
      "Automated backups and disaster recovery",
      "Cost optimization and security best practices",
    ],
    technologies: [
      "Docker",
      "Kubernetes",
      "AWS/GCP/Azure",
      "GitHub Actions",
      "Terraform",
      "Nginx",
      "Prometheus",
      "Grafana",
      "Redis",
    ],
    process: [
      {
        step: 1,
        title: "Infrastructure Assessment",
        description:
          "Analyzing current setup, identifying bottlenecks, and planning optimal architecture.",
      },
      {
        step: 2,
        title: "Pipeline Setup",
        description:
          "Creating automated CI/CD workflows for building, testing, and deploying code.",
      },
      {
        step: 3,
        title: "Cloud Configuration",
        description:
          "Setting up cloud infrastructure with proper security, scaling, and monitoring.",
      },
      {
        step: 4,
        title: "Monitoring & Optimization",
        description:
          "Implementing logging, monitoring, and continuous optimization for performance.",
      },
    ],
    faqs: [
      {
        question: "Which cloud provider should I choose?",
        answer:
          "AWS is most comprehensive, GCP excels in machine learning, Azure integrates well with Microsoft products, and Vercel is perfect for Next.js apps. I'll help you choose based on your needs and budget.",
      },
      {
        question: "How does CI/CD improve my development process?",
        answer:
          "CI/CD automates testing and deployment, reducing manual errors, speeding up releases, and giving you confidence to deploy frequently.",
      },
      {
        question: "What's included in monitoring services?",
        answer:
          "I set up application performance monitoring, error tracking, uptime monitoring, and custom alerts so you're always aware of your system's health.",
      },
    ],
    cta: "Optimize Your Infrastructure",
    featured: false,
  },
  {
    id: 8,
    slug: "technical-consulting-code-review",
    icon: FaCode,
    title: "Technical Consulting & Code Review",
    shortDescription:
      "Expert guidance on architecture decisions, code quality, and best practices for your development team.",
    description:
      "Get expert insights and actionable recommendations to improve your codebase, architecture, and development practices. I provide comprehensive technical consulting services including code reviews, architecture assessments, technology stack recommendations, and development team mentoring. Whether you need a second opinion on technical decisions, want to improve code quality, or need guidance on scaling challenges, I bring 6+ years of experience to help you make informed decisions. My consulting services include detailed reports with prioritized recommendations, best practice guidelines, and ongoing advisory support to ensure your technical foundation is solid.",
    benefits: [
      "Comprehensive code review with actionable feedback",
      "Architecture assessment and recommendations",
      "Technology stack evaluation and optimization",
      "Security audit and vulnerability assessment",
      "Performance optimization strategies",
      "Best practices documentation for your team",
      "Ongoing technical advisory and mentoring",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Laravel",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
    ],
    process: [
      {
        step: 1,
        title: "Discovery Session",
        description:
          "Understanding your challenges, goals, and current technical landscape.",
      },
      {
        step: 2,
        title: "Technical Assessment",
        description:
          "Reviewing code, architecture, and processes to identify improvement areas.",
      },
      {
        step: 3,
        title: "Recommendations",
        description:
          "Providing detailed report with prioritized improvements and implementation guidance.",
      },
      {
        step: 4,
        title: "Implementation Support",
        description:
          "Ongoing support during implementation with regular check-ins and adjustments.",
      },
    ],
    faqs: [
      {
        question: "How long does a typical code review take?",
        answer:
          "Depending on codebase size, a thorough review takes 1-3 days. You receive a detailed report with findings and recommendations.",
      },
      {
        question: "Do you work with development teams?",
        answer:
          "Yes, I work closely with your team to understand context, provide mentoring, and ensure recommendations are practical and actionable.",
      },
      {
        question: "What's included in an architecture assessment?",
        answer:
          "I review your system design, identify scalability issues, security concerns, and provide recommendations for improvement with implementation roadmap.",
      },
    ],
    cta: "Get Expert Consultation",
    featured: false,
  },
];

export const getServiceBySlug = (slug) => {
  return services.find((service) => service.slug === slug);
};

export const getFeaturedServices = () => {
  return services.filter((service) => service.featured);
};
