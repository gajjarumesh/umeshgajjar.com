// Case Studies - Detailed project stories focusing on challenges, solutions, and results

export const caseStudies = [
  {
    id: 1,
    slug: "hrms-scalable-architecture",
    title: "Building an HRMS That Scales to 500+ Users",
    subtitle: "How we designed a flexible payroll engine without hardcoding business rules",
    category: "Enterprise",
    client: "Mid-sized Technology Company",
    industry: "Technology Services",
    duration: "6 months",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Redis"],
    image: "/projects/hrms.jpg",
    featured: true,
    challenge:
      "The organization was managing HR processes through spreadsheets and email chains. They needed a system that could handle complex payroll calculations with various deduction rules, multi-tier approval workflows, and synchronization between attendance, leave, and holiday calendars. The biggest challenge was that payroll rules varied by department and employee type, requiring a flexible formula engine rather than hardcoded logic.",
    approach: [
      "Designed a dynamic formula engine that allows HR admins to define payroll calculation rules through a UI",
      "Implemented role-based access control with hierarchical approval workflows",
      "Built an integrated calendar system that syncs attendance with leave requests and company holidays",
      "Developed real-time notification system for approval requests and payroll updates",
      "Created comprehensive reporting dashboard with drill-down analytics",
    ],
    solution:
      "We built a comprehensive HRMS with a dynamic formula engine for payroll calculations that HR administrators could configure without code changes. The system features multi-level approval workflows, integrated attendance tracking with biometric device support, performance management with goal tracking, and a self-service portal for employees. The architecture uses PostgreSQL for transactional data, Redis for caching frequently accessed data like attendance records, and Docker for consistent deployments.",
    keyFeatures: [
      "Dynamic payroll calculation engine with customizable rules and formulas",
      "Multi-level approval workflows for leave, expenses, and reimbursements",
      "Integrated attendance tracking with biometric device API support",
      "Performance management module with goal tracking and review cycles",
      "Comprehensive reporting and analytics dashboard with export capabilities",
      "Employee self-service portal for leave management and profile updates",
      "Automated email notifications for all approval workflows",
    ],
    results: [
      {
        metric: "Manual HR work reduced",
        value: "70%",
        description: "Automated workflows eliminated repetitive tasks",
      },
      {
        metric: "Payroll accuracy",
        value: "99.9%",
        description: "Formula engine eliminated calculation errors",
      },
      {
        metric: "System uptime",
        value: "99.95%",
        description: "Zero downtime during business hours",
      },
      {
        metric: "Leave processing time",
        value: "From days to minutes",
        description: "Instant approval workflow vs. email chains",
      },
    ],
    testimonial: {
      text: "The HRMS system transformed our HR department. What used to take days now happens in minutes. The dynamic payroll engine was exactly what we needed—we can adjust rules without calling the developer.",
      author: "Sarah Chen",
      role: "HR Director",
      company: "Technology Services Inc.",
    },
    relatedBlogSlugs: [
      "best-practices-scalable-saas-applications",
      "building-secure-apis-developers-guide",
    ],
  },
  {
    id: 2,
    slug: "healthcare-microservices-migration",
    title: "Migrating a Healthcare Platform to Microservices",
    subtitle: "From monolith to scalable microservices with zero downtime",
    category: "Healthcare",
    client: "Medical Interpretation Service",
    industry: "Healthcare",
    duration: "8 months",
    tech: ["Next.js", "Laravel", "Node.js", "Docker", "PostgreSQL", "Redis", "Socket.IO"],
    image: "/projects/healthcare-portal.jpg",
    featured: true,
    challenge:
      "The existing legacy monolithic system couldn't scale to meet growing demand. Medical interpreters needed instant notifications for urgent requests, but the system had no real-time communication capabilities. Deployment was risky and time-consuming, taking hours and requiring maintenance windows. The monolithic architecture made it difficult to add new features without risking the entire application. Most critically, during peak hours, the system would slow down, delaying critical medical interpretation requests.",
    approach: [
      "Analyzed the monolith to identify service boundaries and data dependencies",
      "Designed microservices architecture with clear separation of concerns",
      "Implemented event-driven communication between services",
      "Built real-time communication layer using Socket.IO",
      "Created containerized deployment pipeline with Docker and Kubernetes",
      "Migrated incrementally with feature flags to minimize risk",
    ],
    solution:
      "We decomposed the monolith into four core microservices: Authentication & User Management, Request Management, Real-time Communications, and Analytics & Reporting. Each service has its own database following the database-per-service pattern. Services communicate through REST APIs for synchronous operations and message queues for asynchronous events. Socket.IO provides real-time chat between patients, interpreters, and medical staff, with instant push notifications for urgent requests. All services are containerized with Docker and deployed on Kubernetes for automatic scaling.",
    keyFeatures: [
      "Real-time chat between patients, interpreters, and medical staff",
      "Instant push notifications for urgent interpretation requests",
      "Microservices architecture with independent scaling of each service",
      "Comprehensive admin dashboard with real-time analytics",
      "Automated interpreter matching based on language, specialization, and availability",
      "Integration with hospital scheduling systems via REST APIs",
      "Message queue system for reliable event processing",
    ],
    results: [
      {
        metric: "Request response time",
        value: "60% faster",
        description: "Real-time notifications vs. polling",
      },
      {
        metric: "System uptime",
        value: "99.9%",
        description: "Improved from 95% with the monolith",
      },
      {
        metric: "Deployment time",
        value: "Hours to minutes",
        description: "Independent service deployments",
      },
      {
        metric: "Interpreter satisfaction",
        value: "45% increase",
        description: "Faster response times and better UX",
      },
    ],
    testimonial: {
      text: "The new system has completely transformed how we manage interpretation requests. Real-time communication is a game-changer for urgent medical situations. We can now deploy updates without scheduling downtime.",
      author: "Dr. Michael Rodriguez",
      role: "Hospital Administrator",
      company: "Regional Medical Center",
    },
    relatedBlogSlugs: [
      "best-practices-scalable-saas-applications",
      "devops-essentials-modern-web-development",
    ],
  },
  {
    id: 3,
    slug: "realtime-chat-socket-architecture",
    title: "Building a Slack Alternative That Scales",
    subtitle: "Real-time messaging for 5,000+ concurrent users",
    category: "Communication",
    client: "Remote Team Collaboration Startup",
    industry: "SaaS",
    duration: "5 months",
    tech: ["Next.js", "Socket.IO", "GraphQL", "PostgreSQL", "Redis", "TailwindCSS"],
    image: "/projects/sparring-chat.jpg",
    featured: true,
    challenge:
      "The team needed a custom collaboration tool that could replace multiple communication tools they were using. Requirements included real-time messaging with typing indicators, file sharing with previews, threaded conversations, and the ability to scale to thousands of concurrent users. The system needed sub-second message latency and 99.95% message delivery reliability. Previous attempts at building this in-house had failed due to performance issues at scale.",
    approach: [
      "Designed event-driven architecture with Socket.IO for real-time features",
      "Implemented GraphQL for efficient data fetching and subscriptions",
      "Used Redis for pub/sub messaging between server instances",
      "Built message queue system for reliable asynchronous processing",
      "Implemented horizontal scaling with load balancer and sticky sessions",
      "Created comprehensive testing strategy for real-time features",
    ],
    solution:
      "We built a real-time chat application using Socket.IO for instant messaging, GraphQL for efficient data queries and real-time subscriptions, and Redis for session management, caching, and pub/sub between server instances. The architecture supports horizontal scaling with multiple Node.js server instances behind a load balancer. Messages are delivered in real-time to all connected clients via WebSocket connections, with automatic fallback to long-polling for restrictive networks. File uploads are handled by a separate service with chunked uploads for reliability.",
    keyFeatures: [
      "Real-time messaging with typing indicators and read receipts",
      "Public and private channels with granular role-based permissions",
      "Direct messaging and group conversations with up to 50 participants",
      "File sharing with preview support for images, PDFs, and documents",
      "Message threading and emoji reactions for organized conversations",
      "User presence indicators (online/offline/away/in a meeting)",
      "Full-text message search with advanced filters across all channels",
      "Integration with external tools via webhooks and REST API",
    ],
    results: [
      {
        metric: "Concurrent users",
        value: "5,000+",
        description: "Scales horizontally across multiple servers",
      },
      {
        metric: "Message latency",
        value: "<100ms",
        description: "Average message delivery time",
      },
      {
        metric: "Message delivery rate",
        value: "99.95%",
        description: "Reliable message queue ensures delivery",
      },
      {
        metric: "Email reduction",
        value: "70%",
        description: "Team collaboration moved to chat",
      },
    ],
    testimonial: {
      text: "This system replaced Slack for our organization. The real-time performance is incredible, and having full control over our data and customization was exactly what we needed.",
      author: "Jennifer Park",
      role: "CTO",
      company: "Remote Collaboration Inc.",
    },
    relatedBlogSlugs: [
      "best-practices-scalable-saas-applications",
      "optimize-react-performance-large-applications",
    ],
  },
  {
    id: 4,
    slug: "pos-system-offline-first",
    title: "Offline-First POS System for Retail",
    subtitle: "Building reliability when internet connection isn't guaranteed",
    category: "Retail",
    client: "Multi-location Retail Chain",
    industry: "Retail",
    duration: "4 months",
    tech: ["Next.js", "Laravel", "PostgreSQL", "Redis", "IndexedDB"],
    image: "/projects/pos-system.jpg",
    featured: false,
    challenge:
      "Retail stores needed a POS system that wouldn't fail during internet outages, which were common in their locations. The system had to handle high-volume transactions during peak hours while managing inventory in real-time across multiple locations. Any delay in checkout would result in lost sales and frustrated customers. The previous system required constant internet connectivity and would crash during busy periods.",
    approach: [
      "Designed offline-first architecture with local storage and sync",
      "Implemented optimistic UI updates for instant feedback",
      "Built conflict resolution system for offline changes",
      "Created performance-optimized database queries with proper indexing",
      "Used Redis for caching frequently accessed inventory data",
      "Designed clean, distraction-free interface for fast checkout",
    ],
    solution:
      "We built a high-performance POS system with offline-first architecture. The application stores critical data (products, prices, inventory) in IndexedDB for offline access. When online, it syncs with the backend in real-time. Transactions are queued locally during outages and automatically synced when connection is restored. Redis caches frequently accessed data like product information and pricing rules, reducing database load. The interface is optimized for speed with barcode scanning, keyboard shortcuts, and one-click common operations.",
    keyFeatures: [
      "Lightning-fast checkout with barcode scanning and keyboard shortcuts",
      "Real-time inventory tracking and automatic low-stock alerts",
      "Customer management with purchase history and loyalty programs",
      "Multiple payment methods (cash, card, digital wallets, split payments)",
      "Receipt printing and automated email sending for digital receipts",
      "Offline mode with automatic sync when connection is restored",
      "Comprehensive sales reports with filtering by date, product, cashier",
      "Multi-store inventory management with transfer tracking",
    ],
    results: [
      {
        metric: "Checkout time",
        value: "40% faster",
        description: "Optimized UI and performance improvements",
      },
      {
        metric: "Inventory accuracy",
        value: "99.8%",
        description: "Real-time tracking eliminated discrepancies",
      },
      {
        metric: "Peak hour throughput",
        value: "2x increase",
        description: "Faster transactions = more customers served",
      },
      {
        metric: "System availability",
        value: "99.99%",
        description: "Including offline mode functionality",
      },
    ],
    testimonial: {
      text: "We can finally process sales even when the internet goes down. The system is fast, reliable, and our cashiers love how intuitive it is.",
      author: "Robert Martinez",
      role: "Operations Manager",
      company: "Retail Chain LLC",
    },
    relatedBlogSlugs: [
      "optimize-react-performance-large-applications",
      "devops-essentials-modern-web-development",
    ],
  },
];

// Utility functions
export const getCaseStudyBySlug = (slug) => {
  return caseStudies.find((study) => study.slug === slug);
};

export const getFeaturedCaseStudies = () => {
  return caseStudies.filter((study) => study.featured);
};

export const getCaseStudiesByCategory = (category) => {
  return caseStudies.filter((study) => study.category === category);
};

export const getAllCaseStudyCategories = () => {
  return [...new Set(caseStudies.map((study) => study.category))];
};
