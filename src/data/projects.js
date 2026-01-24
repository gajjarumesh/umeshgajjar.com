export const projects = [
  {
    id: 1,
    slug: "hrms-application",
    title: "HRMS Application",
    category: "Enterprise",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Docker", "TailwindCSS"],
    shortDesc:
      "Comprehensive Human Resource Management System with payroll, attendance, and performance modules.",
    description:
      "Engineered a full-featured Human Resource Management System, including payroll, attendance, leave, and performance modules. Led full-cycle development from backend architecture to responsive frontend integration, ensuring accuracy and scalability for organizational needs.",
    image: "/projects/hrms.jpg",
    featured: true,
    challenge:
      "The organization needed to digitize complex HR processes including multi-tier approval workflows, intricate payroll calculations with various deduction rules, and synchronization between attendance, leave, and holiday calendars.",
    solution:
      "Built a comprehensive HRMS with a dynamic formula engine for payroll calculations, role-based access control for different user hierarchies, and integrated calendar logic that automatically syncs attendance with leave requests and company holidays. Implemented real-time notifications and approval workflows.",
    keyFeatures: [
      "Dynamic payroll calculation engine with customizable rules",
      "Multi-level approval workflows for leave and expenses",
      "Integrated attendance tracking with biometric device support",
      "Performance management with goal tracking and reviews",
      "Comprehensive reporting and analytics dashboard",
      "Employee self-service portal for leave and profile management",
    ],
    results: [
      "Reduced manual HR work by 70%",
      "Improved payroll accuracy to 99.9%",
      "Scaled to 500+ users with zero downtime",
      "Decreased leave processing time from days to minutes",
    ],
    screenshots: ["/projects/hrms-dashboard.jpg", "/projects/hrms-payroll.jpg"],
    liveUrl: null,
    githubUrl: null,
    testimonial: {
      text: "The HRMS system transformed our HR department. What used to take days now happens in minutes.",
      author: "Sarah Chen",
      role: "HR Director",
    },
  },
  {
    id: 2,
    slug: "healthcare-backend-portal",
    title: "Healthcare Backend Portal",
    category: "Healthcare",
    tech: [
      "Next.js",
      "Laravel",
      "Node.js",
      "Docker",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
    ],
    shortDesc:
      "Modern request management system for medical interpreters with real-time features.",
    description:
      "Redesigned a legacy request management system for medical interpreters. Migrated to microservices, implemented real-time chat and notifications, and dockerized the entire backend for seamless deployment and scaling.",
    image: "/projects/healthcare-portal.jpg",
    featured: true,
    challenge:
      "Legacy monolithic system couldn't scale, had no real-time communication capabilities, and was difficult to maintain and deploy. Medical interpreters needed instant notifications for urgent requests.",
    solution:
      "Migrated to microservices architecture with separate services for authentication, request management, and communications. Implemented Socket.IO for real-time chat and notifications. Containerized all services with Docker for consistent deployments and easy scaling.",
    keyFeatures: [
      "Real-time chat between patients, interpreters, and medical staff",
      "Instant push notifications for urgent interpretation requests",
      "Microservices architecture for better scalability",
      "Comprehensive admin dashboard with analytics",
      "Automated interpreter matching based on language and availability",
      "Integration with hospital scheduling systems",
    ],
    results: [
      "Reduced request response time by 60%",
      "Improved system uptime to 99.9%",
      "Deployment time reduced from hours to minutes",
      "Increased interpreter satisfaction by 45%",
    ],
    screenshots: [
      "/projects/healthcare-dashboard.jpg",
      "/projects/healthcare-chat.jpg",
    ],
    liveUrl: null,
    githubUrl: null,
    testimonial: {
      text: "The new system has completely transformed how we manage interpretation requests. Real-time communication is a game-changer.",
      author: "Dr. Michael Rodriguez",
      role: "Hospital Administrator",
    },
  },
  {
    id: 3,
    slug: "sparring-zero-chat",
    title: "Sparring Zero Chat",
    category: "Communication",
    tech: [
      "Next.js",
      "Socket.IO",
      "GraphQL",
      "TailwindCSS",
      "PostgreSQL",
      "Redis",
    ],
    shortDesc:
      "Slack-style team chat system with real-time messaging and channels.",
    description:
      "Built a Slack-style team chat system with real-time messaging, channels, and user-to-user communication. Integrated Socket.IO for instant communication and GraphQL for smooth, efficient authentication and data fetching.",
    image: "/projects/sparring-chat.jpg",
    featured: true,
    challenge:
      "Team needed a custom collaboration tool with real-time messaging, file sharing, and threaded conversations that could scale to thousands of concurrent users.",
    solution:
      "Developed a real-time chat application using Socket.IO for instant messaging, GraphQL for efficient data queries, and Redis for session management and caching. Implemented channels, direct messages, file uploads, and message threading.",
    keyFeatures: [
      "Real-time messaging with typing indicators",
      "Public and private channels with granular permissions",
      "Direct messaging and group conversations",
      "File sharing with preview support",
      "Message threading and reactions",
      "User presence indicators (online/offline/away)",
      "Message search with advanced filters",
    ],
    results: [
      "Supports 5,000+ concurrent users",
      "Average message latency under 100ms",
      "99.95% message delivery rate",
      "Reduced email communication by 70%",
    ],
    screenshots: [
      "/projects/sparring-channels.jpg",
      "/projects/sparring-chat-view.jpg",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 4,
    slug: "pos-system",
    title: "Point of Sale System",
    category: "Retail",
    tech: ["Next.js", "Laravel", "PostgreSQL", "Redis", "TailwindCSS"],
    shortDesc:
      "Full-featured POS system with inventory, billing, and customer management.",
    description:
      "Designed and developed a full-featured Point of Sale system for retail, including inventory, billing, receipt printing, and customer management. Delivered a fast, minimal UI without using any UI libraries.",
    image: "/projects/pos-system.jpg",
    featured: false,
    challenge:
      "Retail business needed a fast, reliable POS system that could handle high-volume transactions during peak hours while managing inventory in real-time.",
    solution:
      "Built a high-performance POS system with optimized database queries, Redis caching for frequently accessed data, and a clean, distraction-free interface. Implemented offline mode for uninterrupted operation during internet outages.",
    keyFeatures: [
      "Lightning-fast checkout process with barcode scanning",
      "Real-time inventory tracking and low-stock alerts",
      "Customer management with purchase history",
      "Multiple payment methods (cash, card, digital wallets)",
      "Receipt printing and email sending",
      "Offline mode with automatic sync",
      "Comprehensive sales reports and analytics",
    ],
    results: [
      "Reduced checkout time by 40%",
      "Eliminated inventory discrepancies",
      "Increased customer throughput during peak hours",
      "99.99% uptime including offline mode",
    ],
    screenshots: ["/projects/pos-checkout.jpg", "/projects/pos-inventory.jpg"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 5,
    slug: "balingwiredirect-ecommerce",
    title: "BalingWireDirect E-commerce",
    category: "E-commerce",
    tech: ["Vue.js", "PHP", "Vuetify", "MySQL", "Stripe"],
    shortDesc:
      "Industrial wire ordering platform with real-time pricing and logistics.",
    description:
      "Built a responsive e-commerce platform for industrial wire ordering in the U.S. Implemented real-time pricing, optimized cart flows, and improved the user journey for bulk buyers with nationwide logistics integration.",
    image: "/projects/balingwire.jpg",
    featured: false,
    challenge:
      "B2B customers needed a platform for ordering industrial wire in bulk with complex pricing based on quantity, weight, and shipping zones.",
    solution:
      "Developed an e-commerce platform with dynamic pricing engine that calculates costs based on multiple variables, integrated with shipping APIs for real-time freight quotes, and streamlined bulk ordering workflow.",
    keyFeatures: [
      "Dynamic pricing based on quantity and shipping zone",
      "Real-time freight cost calculation",
      "Bulk order management with quick reorder functionality",
      "Custom quote requests for large orders",
      "Account management with order history",
      "Integration with logistics partners",
    ],
    results: [
      "Increased online orders by 150%",
      "Reduced quote generation time from hours to seconds",
      "Improved customer satisfaction scores by 35%",
      "Expanded nationwide delivery coverage",
    ],
    screenshots: [
      "/projects/balingwire-products.jpg",
      "/projects/balingwire-checkout.jpg",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 6,
    slug: "crypto-trading-platform",
    title: "Crypto Trading Platform",
    category: "Fintech",
    tech: ["Laravel", "MySQL", "Bootstrap", "jQuery", "WebSocket"],
    shortDesc:
      "High-frequency crypto trading platform with real-time charts and order book.",
    description:
      "Optimized a high-frequency crypto trading platform's frontend and backend. Implemented real-time charts, streamlined the order book UI, and enhanced database interactions for large transaction volumes.",
    image: "/projects/crypto-trading.jpg",
    featured: false,
    challenge:
      "Existing platform struggled with high-frequency trading, slow order book updates, and database bottlenecks during high volume periods.",
    solution:
      "Optimized database queries with proper indexing, implemented Redis caching for order book data, upgraded to WebSocket for real-time updates, and rewrote critical sections for better performance.",
    keyFeatures: [
      "Real-time order book with sub-second updates",
      "Advanced charting with technical indicators",
      "Instant trade execution",
      "Portfolio tracking and analytics",
      "Stop-loss and take-profit orders",
      "Multi-cryptocurrency support",
    ],
    results: [
      "Reduced order execution time by 75%",
      "Improved order book refresh rate to 100ms",
      "Handled 10x transaction volume without degradation",
      "Decreased user-reported errors by 90%",
    ],
    screenshots: [
      "/projects/crypto-dashboard.jpg",
      "/projects/crypto-orderbook.jpg",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 7,
    slug: "fitness-event-management",
    title: "Fitness Event Management System",
    category: "Health & Fitness",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS S3"],
    shortDesc:
      "Dynamic gym and fitness event platform with approvals and voting.",
    description:
      "Developed a dynamic gym and fitness event management system. Integrated features like event creation, approvals, and voting. Oversaw team task management and architecture planning for timely delivery.",
    image: "/projects/fitness-events.jpg",
    featured: false,
    challenge:
      "Fitness centers needed a centralized platform to manage events, member registrations, and community engagement through voting features.",
    solution:
      "Created a comprehensive event management system with member registration workflows, admin approval system, community voting features, and automated email notifications.",
    keyFeatures: [
      "Event creation and management by trainers",
      "Multi-level approval workflow",
      "Community voting for event popularity",
      "Automated email reminders and notifications",
      "Member registration with payment integration",
      "Event calendar with scheduling conflicts detection",
    ],
    results: [
      "Increased event participation by 60%",
      "Streamlined event approval process",
      "Improved member engagement",
      "Reduced administrative overhead by 50%",
    ],
    screenshots: [
      "/projects/fitness-events-list.jpg",
      "/projects/fitness-calendar.jpg",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 8,
    slug: "usdv-crm",
    title: "USDV Visa Consultant CRM",
    category: "CRM",
    tech: ["PHP", "CodeIgniter", "MySQL", "jQuery"],
    shortDesc:
      "Custom CRM for visa consultants with automated workflows and document management.",
    description:
      "Built a custom CRM tailored for visa and immigration consultants. Automated client eligibility checks, follow-ups, and documentation handling, leading to streamlined operations and faster conversions. Integrated dynamic workflows and robust user permissions.",
    image: "/projects/usdv-crm.jpg",
    featured: false,
    challenge:
      "Visa consultants needed to manage hundreds of clients, track application progress, automate follow-ups, and handle extensive documentation securely.",
    solution:
      "Developed a specialized CRM with automated client communication, document management system, eligibility checking algorithms, and comprehensive reporting for tracking application success rates.",
    keyFeatures: [
      "Automated client eligibility assessment",
      "Document checklist and upload management",
      "Automated email and SMS reminders",
      "Application status tracking dashboard",
      "Client portal for status updates",
      "Reporting and analytics for conversion rates",
    ],
    results: [
      "Reduced application processing time by 50%",
      "Improved client follow-up consistency",
      "Increased application success rate by 25%",
      "Enhanced document organization and retrieval",
    ],
    screenshots: ["/projects/crm-dashboard.jpg", "/projects/crm-client.jpg"],
    liveUrl: null,
    githubUrl: null,
  },
];

// Additional projects (less detailed)
export const additionalProjects = [
  {
    id: 9,
    slug: "id-queue-workflow",
    title: "ID-Queue Workflow Software",
    category: "Enterprise",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    shortDesc:
      "Ticket-based workflow system for ID issuance and task management.",
    description:
      "Developed a ticket-based workflow system for ID issuance and employee task management. Integrated modular dashboards, admin approval layers, and progress tracking with clean UX.",
    image: "/projects/id-queue.jpg",
    featured: false,
  },
  {
    id: 10,
    slug: "hr-payroll-system",
    title: "HR & Payroll System",
    category: "Enterprise",
    tech: ["Laravel", "React.js", "MySQL"],
    shortDesc: "Tailored HR and payroll platform for SMEs.",
    description:
      "Crafted a tailored HR and payroll platform for SMEs to manage salary generation, deductions, bonuses, and employee records. Focused on automating month-end calculations and report generation.",
    image: "/projects/hr-payroll.jpg",
    featured: false,
  },
  {
    id: 11,
    slug: "servicenow-api-integration",
    title: "ServiceNow API Integration",
    category: "Integration",
    tech: ["Node.js", "ServiceNow", "Express"],
    shortDesc:
      "API bridge for incident management and ticket resolution with ServiceNow.",
    description:
      "Created a seamless API bridge between internal apps and ServiceNow for incident management, logging, and ticket resolution. Focused on secure integration and clean RESTful design.",
    image: "/projects/servicenow.jpg",
    featured: false,
  },
  {
    id: 12,
    slug: "restaurant-admin-system",
    title: "Restaurant Admin System",
    category: "Hospitality",
    tech: ["Vue.js", "Laravel", "MySQL"],
    shortDesc:
      "Restaurant management dashboard for menus, reservations, and orders.",
    description:
      "Developed a restaurant management dashboard to handle menus, reservations, online orders, and delivery tracking. Prioritized responsive layout and admin UX efficiency.",
    image: "/projects/restaurant-admin.jpg",
    featured: false,
  },
  {
    id: 13,
    slug: "multi-vendor-ecommerce",
    title: "Multi-vendor E-commerce",
    category: "E-commerce",
    tech: ["React.js", "Node.js", "MongoDB"],
    shortDesc:
      "Scalable marketplace with vendor profiles and order management.",
    description:
      "Designed and built a scalable multi-vendor marketplace supporting product listings, vendor profiles, and order management. Integrated payment gateways and vendor analytics.",
    image: "/projects/multi-vendor.jpg",
    featured: false,
  },
  {
    id: 14,
    slug: "online-exam-system",
    title: "Online Exam System",
    category: "Education",
    tech: ["Vue.js", "Node.js", "MongoDB"],
    shortDesc: "Full-featured exam system with question bank and analytics.",
    description:
      "Built a full-featured exam system with question bank, timer, MCQs, subjective questions, and result analysis. Enabled role-based access for admin, faculty, and students.",
    image: "/projects/exam-system.jpg",
    featured: false,
  },
  {
    id: 15,
    slug: "orva-voice-assistant",
    title: "Orva Voice Assistant",
    category: "Healthcare",
    tech: ["Vue.js", "Prisma", "TailwindCSS"],
    shortDesc:
      "Voice-powered assistant for surgical teams with hands-free coordination.",
    description:
      "Developed a real-time voice-powered assistant for surgical teams to enable hands-free task logging and coordination during operations. Prioritized accuracy, latency, and accessibility.",
    image: "/projects/orva-voice.jpg",
    featured: false,
  },
];

// Combine all projects
export const allProjects = [...projects, ...additionalProjects];

// Utility functions
export const getProjectBySlug = (slug) => {
  return allProjects.find((project) => project.slug === slug);
};

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category) => {
  return allProjects.filter((project) => project.category === category);
};

export const getProjectsByTech = (tech) => {
  return allProjects.filter((project) =>
    project.tech.some((t) => t.toLowerCase().includes(tech.toLowerCase()))
  );
};

export const getAllCategories = () => {
  return [...new Set(allProjects.map((project) => project.category))];
};

export const getAllTechnologies = () => {
  const allTech = allProjects.flatMap((project) => project.tech);
  return [...new Set(allTech)].sort();
};
