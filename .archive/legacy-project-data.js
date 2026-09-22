import {
  SiLaravel,
  SiReact,
  SiNodedotjs,
  SiVuedotjs,
  SiCodeigniter,
  SiWordpress,
  SiDjango,
  SiNextdotjs,
  SiAlltrails,
} from "react-icons/si";

export const tabs = [
  { label: "All", icon: <SiAlltrails className="text-lg" /> },
  { label: "Laravel", icon: <SiLaravel className="text-lg text-red-600" /> },
  { label: "React.js", icon: <SiReact className="text-lg text-primary" /> },
  {
    label: "Node.js",
    icon: <SiNodedotjs className="text-lg text-green-600" />,
  },
  {
    label: "Vue.js",
    icon: <SiVuedotjs className="text-lg text-emerald-600" />,
  },
  {
    label: "Codeigniter",
    icon: <SiCodeigniter className="text-lg text-orange-600" />,
  },
  {
    label: "WordPress",
    icon: <SiWordpress className="text-lg text-primary" />,
  },
  { label: "Django", icon: <SiDjango className="text-lg text-green-900" /> },
  { label: "NextJS", icon: <SiNextdotjs className="text-lg" /> },
];

export const projects = [
  {
    title: "HRMS Application",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    desc: "Engineered a full-featured Human Resource Management System, including payroll, attendance, leave, and performance modules. Led full-cycle development from backend architecture to responsive frontend integration, ensuring accuracy and scalability for organizational needs.",
  },
  {
    title: "USDV CRM",
    tech: ["PHP", "CodeIgniter", "MySQL", "jQuery"],
    desc: "Built a custom CRM tailored for visa and immigration consultants. Automated client eligibility checks, follow-ups, and documentation handling, leading to streamlined operations and faster conversions. Integrated dynamic workflows and robust user permissions.",
  },
  {
    title: "Healthcare Backend Portal",
    tech: ["Next.js", "Laravel", "Node.js", "Docker"],
    desc: "Redesigned a legacy request management system for medical interpreters. Migrated to microservices, implemented real-time chat and notifications, and dockerized the entire backend for seamless deployment and scaling.",
  },
  {
    title: "Crypto Trading Platform",
    tech: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    desc: "Optimized a high-frequency crypto trading platform’s frontend and backend. Implemented real-time charts, streamlined the order book UI, and enhanced database interactions for large transaction volumes.",
  },
  {
    title: "Fitness Website",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    desc: "Developed a dynamic gym and fitness event management system. Integrated features like event creation, approvals, and voting. Oversaw team task management and architecture planning for timely delivery.",
  },
  {
    title: "POS System",
    tech: ["Next.js", "Laravel", "PostgreSQL"],
    desc: "Designed and developed a full-featured Point of Sale system for retail, including inventory, billing, receipt printing, and customer management. Delivered a fast, minimal UI without using any UI libraries.",
  },
  {
    title: "BalingWireDirect",
    tech: ["Vue.js", "PHP", "Vuetify"],
    desc: "Built a responsive e-commerce platform for industrial wire ordering in the U.S. Implemented real-time pricing, optimized cart flows, and improved the user journey for bulk buyers with nationwide logistics integration.",
  },
  {
    title: "Sparring Zero Chat",
    tech: ["Next.js", "Socket.IO", "GraphQL", "TailwindCSS"],
    desc: "Built a Slack-style team chat system with real-time messaging, channels, and user-to-user communication. Integrated Socket.IO for instant communication and GraphQL for smooth, efficient authentication and data fetching.",
  },
  {
    title: "ID-Queue Workflow Software",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    desc: "Developed a ticket-based workflow system for ID issuance and employee task management. Integrated modular dashboards, admin approval layers, and progress tracking with clean UX.",
  },
  {
    title: "HR & Payroll System",
    tech: ["Laravel", "React.js", "MySQL"],
    desc: "Crafted a tailored HR and payroll platform for SMEs to manage salary generation, deductions, bonuses, and employee records. Focused on automating month-end calculations and report generation.",
  },
  {
    title: "ServiceNow API Integration",
    tech: ["Node.js", "ServiceNow", "Express"],
    desc: "Created a seamless API bridge between internal apps and ServiceNow for incident management, logging, and ticket resolution. Focused on secure integration and clean RESTful design.",
  },
  {
    title: "Restaurant Admin System",
    tech: ["Vue.js", "Laravel", "MySQL"],
    desc: "Developed a restaurant management dashboard to handle menus, reservations, online orders, and delivery tracking. Prioritized responsive layout and admin UX efficiency.",
  },
  {
    title: "Multi-vendor E-commerce",
    tech: ["React.js", "Node.js", "MongoDB"],
    desc: "Designed and built a scalable multi-vendor marketplace supporting product listings, vendor profiles, and order management. Integrated payment gateways and vendor analytics.",
  },
  {
    title: "Parcel Delivery Tracker",
    tech: ["Vue.js", "Firebase", "TailwindCSS"],
    desc: "Developed a lightweight courier tracking app with real-time location updates, delivery status, and QR-based scanning. Firebase handled backendless realtime data.",
  },
  {
    title: "Digital Voting App",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    desc: "Built a secure internal voting platform for event-based voting with encrypted submissions, IP tracking, and dashboard analytics. Focused on real-time vote status updates.",
  },
  {
    title: "Portfolio Builder",
    tech: ["React.js", "TailwindCSS", "Firebase"],
    desc: "Created a drag-and-drop personal portfolio builder for freelancers and developers. Implemented instant previews, custom theming, and easy deployment with Firebase hosting.",
  },
  {
    title: "Medical Lab Report Portal",
    tech: ["Laravel", "Bootstrap", "MySQL"],
    desc: "Automated medical lab report uploads and secure sharing with patients. Added doctor notes, PDF export, and mobile support for easier access to results.",
  },
  {
    title: "Online Exam System",
    tech: ["Vue.js", "Node.js", "MongoDB"],
    desc: "Built a full-featured exam system with question bank, timer, MCQs, subjective questions, and result analysis. Enabled role-based access for admin, faculty, and students.",
  },
  {
    title: "Freelance Gig App",
    tech: ["React.js", "Express", "MongoDB"],
    desc: "Created a Fiverr-style marketplace where freelancers list gigs, respond to inquiries, and manage orders. Integrated review system and real-time chat.",
  },
  {
    title: "Crypto Price Tracker",
    tech: ["Next.js", "TailwindCSS", "CoinGecko API"],
    desc: "Built a sleek dashboard to track live crypto prices, charts, and performance metrics using CoinGecko API. Emphasized dark mode UI and speed optimization.",
  },
  {
    title: "Invoice Generator",
    tech: ["Laravel", "Vue.js", "PDFKit"],
    desc: "Developed an invoice creation system with customer details, tax logic, downloadable PDF, and payment tracking. Used component-based design for reusability.",
  },
  {
    title: "Donation Platform",
    tech: ["React.js", "Node.js", "MongoDB"],
    desc: "Built a donation portal with cause categorization, donor history, and secure payment handling. Added admin analytics and dynamic campaign features.",
  },
  {
    title: "Orva Voice Assistant",
    tech: ["Vue.js", "Prisma", "TailwindCSS"],
    desc: "Developed a real-time voice-powered assistant for surgical teams to enable hands-free task logging and coordination during operations. Prioritized accuracy, latency, and accessibility.",
  },
];

export const projectCaseStudies = [
  {
    title: "HRMS Application",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    caseStudy: {
      overview:
        "A comprehensive Human Resource Management System to manage employee records, payroll, leave, and attendance for mid-sized companies.",
      objectives:
        "Digitize HR processes to increase efficiency, accuracy, and transparency across departments.",
      role: "Led backend architecture, developed frontend modules, and managed overall system planning and integration.",
      techRationale: [
        "Next.js for fast rendering and server-side integration",
        "Node.js for scalable API services",
        "PostgreSQL for structured, transactional data",
        "TailwindCSS for rapid UI development",
      ],
      challenges: [
        "Complex payroll calculations and deductions",
        "Multi-role hierarchy with approval levels",
        "Leave balance sync with attendance and holidays",
      ],
      solutions: [
        "Built a dynamic formula engine for payroll rules",
        "Implemented RBAC for HR, managers, and employees",
        "Integrated attendance and leave with custom calendar logic",
      ],
      impact: [
        "Reduced manual HR work by over 70%",
        "Improved payroll accuracy and trust",
        "System scaled to 500+ users with zero downtime",
      ],
    },
  },
  {
    title: "USDV CRM",
    tech: ["PHP", "CodeIgniter", "MySQL", "jQuery"],
    caseStudy: {
      overview:
        "A CRM platform for managing visa applications, lead follow-ups, and document workflows for a consulting firm.",
      objectives:
        "Centralize client data, automate reminders, and improve application tracking.",
      role: "Full-stack developer responsible for backend logic, frontend behavior, and data security.",
      techRationale: [
        "CodeIgniter for structured MVC-based PHP development",
        "MySQL for quick data retrieval and transactions",
        "jQuery for dynamic form handling and client-side interactivity",
      ],
      challenges: [
        "Tracking multiple steps for different visa types",
        "Handling document uploads securely",
        "Managing client communications from CRM",
      ],
      solutions: [
        "Designed modular workflows for visa categories",
        "Implemented file storage with audit logging",
        "Built notification system for deadlines and follow-ups",
      ],
      impact: [
        "Enabled 2x faster visa processing",
        "Improved communication consistency",
        "Reduced client onboarding effort by 40%",
      ],
    },
  },
  {
    title: "Healthcare Backend Portal",
    tech: ["Next.js", "Laravel", "Node.js", "Docker"],
    caseStudy: {
      overview:
        "A backend platform for managing healthcare interpreter assignments, chat, and real-time request updates.",
      objectives:
        "Modernize a legacy PHP system and improve communication speed between coordinators and interpreters.",
      role: "Handled real-time modules, API services, and Docker-based deployment.",
      techRationale: [
        "Laravel for PHP-based legacy compatibility",
        "Node.js for real-time sockets and chat logic",
        "Docker for modular and portable deployments",
      ],
      challenges: [
        "Interpreter scheduling conflicts",
        "High volume of urgent real-time notifications",
        "Legacy database migration",
      ],
      solutions: [
        "Built a conflict-resolving assignment engine",
        "Implemented Redis + Socket.IO notification queues",
        "Wrote migration script from legacy MySQL schema",
      ],
      impact: [
        "Interpreter assignment time reduced by 75%",
        "Fully real-time updates with no refresh",
        "Successfully migrated 5+ years of legacy data",
      ],
    },
  },
  {
    title: "Crypto Trading Platform",
    tech: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    caseStudy: {
      overview:
        "A crypto trading frontend and backend for real-time asset tracking and user trades.",
      objectives:
        "Improve data performance and interface responsiveness for high-frequency trading.",
      role: "Worked on trading interface, backend performance tuning, and API improvements.",
      techRationale: [
        "Laravel for backend transaction logic",
        "Bootstrap for responsive UI",
        "MySQL tuned for high-write workloads",
        "jQuery for quick chart and table updates",
      ],
      challenges: [
        "Live chart updates with minimal lag",
        "Handling 1000s of trades in real time",
        "User dashboard with real-time balances",
      ],
      solutions: [
        "Integrated WebSocket-based charting",
        "Indexed key transactional tables",
        "Added queuing system for wallet sync",
      ],
      impact: [
        "Page load time dropped by 38%",
        "Server could now handle 8k+ requests/min",
        "Client saw 25% growth in average trading volume",
      ],
    },
  },
  {
    title: "Fitness Website",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    caseStudy: {
      overview:
        "An event-based gym and fitness management platform with real-time voting and admin control.",
      objectives:
        "Enable gyms to create and manage fitness events, accept registrations, and host internal votes.",
      role: "Spearheaded frontend UX, event module logic, and database design.",
      techRationale: [
        "Next.js for SSR and smooth transitions",
        "Node.js for fast REST APIs",
        "PostgreSQL for relational event tracking",
      ],
      challenges: [
        "Admin controls for complex event states",
        "Secure user voting with real-time updates",
        "Mobile responsiveness",
      ],
      solutions: [
        "Built role-based event dashboard",
        "Used websockets for live vote counting",
        "Created fully responsive layout for participants",
      ],
      impact: [
        "Voting engagement up by 50%",
        "Admin event setup reduced to under 3 minutes",
        "Adopted by 15+ local gyms in launch month",
      ],
    },
  },
  {
    title: "POS System",
    tech: ["Next.js", "Laravel", "PostgreSQL"],
    caseStudy: {
      overview:
        "A custom Point-of-Sale system with product, cart, billing, and receipt functionality built for retail outlets.",
      objectives:
        "Create a fast and responsive in-store POS app without using heavy UI libraries.",
      role: "Built frontend from scratch, backend APIs, and barcode-ready billing UI.",
      techRationale: [
        "Laravel for backend control and billing logic",
        "Next.js for statically rendered views",
        "PostgreSQL for reliable transactions",
      ],
      challenges: [
        "Offline-capable product handling",
        "Bill printing integration",
        "Fast item search and cart UI",
      ],
      solutions: [
        "Built local caching and background sync",
        "Integrated WebUSB printing system",
        "Optimized queries and indexed product lookups",
      ],
      impact: [
        "Checkout time dropped to under 30s",
        "POS installed in 40+ stores",
        "1000+ invoices processed daily without lags",
      ],
    },
  },
  {
    title: "BalingWireDirect",
    tech: ["Vue.js", "PHP", "Vuetify"],
    caseStudy: {
      overview:
        "An industrial eCommerce platform for bulk orders of baling wire and accessories across the U.S.",
      objectives:
        "Provide real-time pricing, simplified UX, and bulk cart checkout for industrial buyers.",
      role: "Built key frontend components, product filters, and custom checkout logic.",
      techRationale: [
        "Vue.js for component-based development",
        "Vuetify for elegant material design",
        "PHP for backend catalog control",
      ],
      challenges: [
        "Pricing engine based on weight and distance",
        "Bulk order form UX",
        "Responsive UI for warehouse users",
      ],
      solutions: [
        "Wrote dynamic pricing rules with cart modifiers",
        "Created custom quantity pickers and validation",
        "Tested layout on tablet-based workflows",
      ],
      impact: [
        "Streamlined checkout experience for warehouse users",
        "Client reported 30% increase in bulk orders",
        "System scaled to 5,000+ SKUs with no slowdowns",
      ],
    },
  },
  {
    title: "Sparring Zero Chat",
    tech: ["Next.js", "Socket.IO", "GraphQL", "TailwindCSS"],
    caseStudy: {
      overview:
        "A real-time team and one-on-one messaging platform inspired by Slack and Discord.",
      objectives:
        "Enable fast, secure communication with private and team channels.",
      role: "Built real-time messaging system, channel architecture, and GraphQL authentication.",
      techRationale: [
        "Next.js for SSR and route handling",
        "Socket.IO for real-time messaging",
        "GraphQL for flexible data retrieval",
        "TailwindCSS for rapid UI styling",
      ],
      challenges: [
        "Handling message delivery latency",
        "Building a scalable channel-based system",
        "Token refresh and real-time auth sync",
      ],
      solutions: [
        "Used optimized event emitters with acknowledgments",
        "Built dynamic channel rendering logic",
        "Integrated JWT with GraphQL middleware",
      ],
      impact: [
        "99.9% message delivery reliability",
        "Latency kept under 150ms globally",
        "Adopted internally across multiple teams",
      ],
    },
  },
  {
    title: "ID-Queue Workflow Software",
    tech: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
    caseStudy: {
      overview:
        "An internal workflow system for managing departmental queues, task assignments, and real-time status updates.",
      objectives:
        "Streamline ticket management and improve collaboration across teams handling high-volume tasks.",
      role: "Designed the database schema, developed queue management logic, and built the entire frontend UX.",
      techRationale: [
        "Next.js for interactive interface and routing",
        "Node.js for task handling and real-time updates",
        "PostgreSQL for storing structured workflow data",
        "TailwindCSS for fast UI development",
      ],
      challenges: [
        "Assigning and tracking tasks across departments",
        "Real-time status indicators and queue load",
        "Preventing duplicate task conflicts",
      ],
      solutions: [
        "Built task prioritization and locking system",
        "Implemented polling for live queue insights",
        "Designed dashboards with filterable views",
      ],
      impact: [
        "Task handling time dropped by 40%",
        "Improved transparency for team leads",
        "System scaled to 10+ departments with minimal training",
      ],
    },
  },
  {
    title: "HR & Payroll System",
    tech: ["Vue.js", "Laravel", "MySQL"],
    caseStudy: {
      overview:
        "A lightweight payroll and attendance system for small to mid-sized enterprises to manage employee records with ease.",
      objectives:
        "Automate monthly salary, attendance tracking, and leave approvals through one dashboard.",
      role: "Led full-stack development, created modular components, and integrated attendance calculation logic.",
      techRationale: [
        "Vue.js for dynamic and reactive UI",
        "Laravel for backend API and job scheduling",
        "MySQL for employee and payroll data",
      ],
      challenges: [
        "Calculating deductions with variable pay structures",
        "Creating flexible shift and leave policies",
        "Admin-level multi-role access",
      ],
      solutions: [
        "Developed salary formula editor",
        "Integrated biometric attendance support",
        "Built detailed reports and payroll export",
      ],
      impact: [
        "80% reduction in payroll processing time",
        "Trusted by HRs with no tech background",
        "Onboarded 200+ employees within 1 week of launch",
      ],
    },
  },
  {
    title: "ServiceNow API Integration",
    tech: ["Node.js", "REST API", "PostgreSQL"],
    caseStudy: {
      overview:
        "A backend middleware service that connects custom portals with the ServiceNow ITSM API.",
      objectives:
        "Bridge data between legacy systems and ServiceNow to automate ticket generation and status tracking.",
      role: "Developed API bridges, wrote sync jobs, and handled request transformation logic.",
      techRationale: [
        "Node.js for flexibility with async operations",
        "REST API design to match ServiceNow spec",
        "PostgreSQL for staging and queuing tasks",
      ],
      challenges: [
        "Mapping complex request structures",
        "Avoiding duplicate ticket generation",
        "Maintaining sync state",
      ],
      solutions: [
        "Built transformation engine with validation rules",
        "Created checksum-based deduplication",
        "Implemented cron-based sync queues",
      ],
      impact: [
        "Enabled real-time sync between old and new systems",
        "Zero duplicate tickets in live use",
        "API layer reused by 4 other tools",
      ],
    },
  },
  {
    title: "Restaurant Admin System",
    tech: ["Vue.js", "Laravel", "MySQL"],
    caseStudy: {
      overview:
        "A restaurant admin backend for managing orders, menu items, table bookings, and kitchen flow.",
      objectives:
        "Digitize kitchen operations and streamline waiter-to-kitchen ticketing.",
      role: "Built order ticketing interface, menu admin panel, and reporting dashboard.",
      techRationale: [
        "Vue.js for reactive table and order updates",
        "Laravel for routing and notification logic",
        "MySQL for order and stock storage",
      ],
      challenges: [
        "Syncing table status with kitchen orders",
        "Order ticket printing",
        "Managing order statuses in real-time",
      ],
      solutions: [
        "Used WebSocket channels for order updates",
        "Integrated thermal printer commands",
        "Color-coded order progress indicators",
      ],
      impact: [
        "Kitchen errors reduced by 70%",
        "Order turnaround improved by 35%",
        "Staff onboarding completed in 1 day",
      ],
    },
  },
  {
    title: "Multi-vendor E-commerce",
    tech: ["Laravel", "Blade", "Bootstrap", "MySQL"],
    caseStudy: {
      overview:
        "An online marketplace allowing multiple vendors to sell products with separate dashboards and payout management.",
      objectives:
        "Enable vendor onboarding, product listings, customer checkout, and admin-level oversight.",
      role: "Handled vendor flow, admin management, and catalog system with stock control.",
      techRationale: [
        "Laravel for multi-role logic",
        "Blade templating for fast layout rendering",
        "Bootstrap for quick design",
        "MySQL for handling large product volumes",
      ],
      challenges: [
        "Managing vendor permissions",
        "Product approval workflows",
        "Commission and payout management",
      ],
      solutions: [
        "Role-based dashboards for admin, vendor, and customer",
        "Built automated payout calculator",
        "Created vendor-specific analytics",
      ],
      impact: [
        "Onboarded 100+ vendors in first month",
        "Platform processed over 2,000 orders in Q1",
        "Reduced admin overhead by 60%",
      ],
    },
  },
  {
    title: "Parcel Delivery Tracker",
    tech: ["Node.js", "React.js", "PostgreSQL"],
    caseStudy: {
      overview:
        "A shipment tracking dashboard for a courier company with real-time delivery status and ETA predictions.",
      objectives:
        "Provide clients and agents with accurate tracking data through a centralized portal.",
      role: "Built tracking logic, designed the timeline UI, and managed webhook integrations from GPS vendors.",
      techRationale: [
        "React.js for map and status components",
        "Node.js for real-time updates and job scheduling",
        "PostgreSQL for tracking logs and delivery metadata",
      ],
      challenges: [
        "Unreliable GPS pings from external systems",
        "Merging multiple shipment data formats",
        "Accurate status progression",
      ],
      solutions: [
        "Used AI model to predict ETAs based on past data",
        "Wrote unified shipment ingestion engine",
        "Color-coded delivery statuses",
      ],
      impact: [
        "Tracking accuracy rose to 95%",
        "Reduced customer support calls by 60%",
        "Courier feedback improved significantly",
      ],
    },
  },
  {
    title: "Digital Voting App",
    tech: ["Vue.js", "Firebase", "TailwindCSS"],
    caseStudy: {
      overview:
        "A web-based voting app for managing internal events, elections, and feedback with anonymous and secure voting.",
      objectives:
        "Provide fair, tamper-proof voting with flexible event setup and result visualization.",
      role: "Designed vote casting UX, result page animations, and Firebase-based voting state logic.",
      techRationale: [
        "Vue.js for reactive voting experience",
        "Firebase for real-time database and auth",
        "TailwindCSS for polished UI styling",
      ],
      challenges: [
        "Preventing duplicate or tampered votes",
        "Live result rendering without server delay",
        "Offline caching of vote intents",
      ],
      solutions: [
        "Used device fingerprints and user tokens",
        "Built live chart components with result sync",
        "Integrated PWA support for offline mode",
      ],
      impact: [
        "Handled over 5,000 concurrent votes",
        "Live results displayed under 500ms latency",
        "Rated 4.8+ in user satisfaction surveys",
      ],
    },
  },
  {
    title: "Portfolio Builder",
    tech: ["React.js", "Node.js", "MongoDB"],
    caseStudy: {
      overview:
        "A drag-and-drop personal portfolio builder for freelancers with theme support and custom domains.",
      objectives:
        "Let users create live portfolio sites in minutes without coding.",
      role: "Created layout engine, block system, and image optimization layer.",
      techRationale: [
        "React.js for dynamic component rendering",
        "Node.js for image and data processing",
        "MongoDB for flexible block structures",
      ],
      challenges: [
        "Real-time previewing",
        "Theme saving and restoration",
        "Multi-device rendering compatibility",
      ],
      solutions: [
        "Used iframe sandbox for live preview",
        "Built theme manager with autosave",
        "Tested layouts across screen sizes",
      ],
      impact: [
        "Over 10,000 portfolios created in beta",
        "Avg. site creation time under 7 mins",
        "Achieved 99.99% uptime since launch",
      ],
    },
  },
  {
    title: "Job Portal",
    tech: ["Laravel", "Vue.js", "MySQL"],
    caseStudy: {
      overview:
        "A job portal connecting employers and job seekers with application tracking, resume uploads, and interview scheduling.",
      objectives:
        "Build an end-to-end hiring ecosystem with dashboard insights and user-friendly search filters.",
      role: "Handled both frontend and backend, implemented search filters, and built employer dashboard.",
      techRationale: [
        "Laravel for robust backend routing and auth",
        "Vue.js for reactive job listings and filters",
        "MySQL for candidate, employer, and job data",
      ],
      challenges: [
        "Candidate-job match scoring",
        "File uploads with versioning",
        "Email notifications and interview calendar",
      ],
      solutions: [
        "Built scoring algorithm based on skills & experience",
        "Integrated file version manager for resumes",
        "Connected with Google Calendar API for interview sync",
      ],
      impact: [
        "Reduced hiring cycle by 40%",
        "Platform scaled to 5,000+ job seekers",
        "Positive feedback from HR managers for its simplicity",
      ],
    },
  },
  {
    title: "Freelancer Hiring Platform",
    tech: ["Next.js", "MongoDB", "Node.js"],
    caseStudy: {
      overview:
        "A marketplace platform for businesses to hire freelancers based on skills, portfolios, and live availability.",
      objectives:
        "Enable business clients to post gigs and connect with vetted freelancers through chat and milestone tracking.",
      role: "Built core architecture, implemented multi-role auth, and managed chat module integration.",
      techRationale: [
        "Next.js for seamless SSR and client routing",
        "MongoDB for flexibility in project and chat data",
        "Node.js for scalable backend API",
      ],
      challenges: [
        "Real-time chat and notifications",
        "Milestone and dispute handling",
        "Freelancer profile ranking system",
      ],
      solutions: [
        "Used Socket.IO for messaging and updates",
        "Built a milestone module with escrow options",
        "Implemented profile badges and rating boosts",
      ],
      impact: [
        "Processed $100k+ worth of gigs in the first quarter",
        "Platform enabled over 200 successful freelance contracts",
        "User churn reduced by 35% through improved UX",
      ],
    },
  },
  {
    title: "Course Management Platform",
    tech: ["React.js", "Node.js", "PostgreSQL"],
    caseStudy: {
      overview:
        "An online learning platform with instructor dashboards, video hosting, assessments, and progress tracking.",
      objectives:
        "Allow creators to publish and monetize structured courses with learner insights.",
      role: "Led design system, backend API development, and course publishing logic.",
      techRationale: [
        "React.js for reusable and responsive UI",
        "Node.js for API-driven architecture",
        "PostgreSQL for student progress and test scoring",
      ],
      challenges: [
        "Video uploads and encoding",
        "Auto-save quizzes and results",
        "Student progress analytics",
      ],
      solutions: [
        "Integrated with Cloudinary for secure media delivery",
        "Used Redis queue for quiz autosave and retry",
        "Created progress charts per module",
      ],
      impact: [
        "10,000+ video lessons hosted in beta",
        "Completion rates increased 2x with analytics",
        "Instructor satisfaction score: 4.9/5",
      ],
    },
  },
  {
    title: "Real Estate Listings",
    tech: ["Vue.js", "Laravel", "MySQL"],
    caseStudy: {
      overview:
        "A responsive portal for listing, filtering, and showcasing real estate properties with maps and image galleries.",
      objectives:
        "Enable buyers and agents to easily browse and manage residential and commercial listings.",
      role: "Developed listing search filters, map API integration, and agent CMS.",
      techRationale: [
        "Vue.js for fast filter interactions",
        "Laravel for admin panel and API",
        "MySQL for listing and lead data",
      ],
      challenges: [
        "Advanced multi-criteria search filters",
        "Responsive image galleries with zoom",
        "Agent dashboard with lead tracking",
      ],
      solutions: [
        "Built dynamic filter generator with facets",
        "Used lazy-loading for gallery performance",
        "Added notifications and analytics to dashboards",
      ],
      impact: [
        "Cut listing time by 70%",
        "Boosted lead conversions by 30%",
        "Adopted by 50+ agents in the launch phase",
      ],
    },
  },
  {
    title: "Custom CMS for Publishing",
    tech: ["Laravel", "Bootstrap", "MySQL"],
    caseStudy: {
      overview:
        "A modular content management system for managing blogs, news, and media content across categories.",
      objectives:
        "Replace WordPress with a lightweight, developer-first CMS tailored to client needs.",
      role: "Built layout builder, tag/category logic, and admin media manager.",
      techRationale: [
        "Laravel for robust backend control",
        "Bootstrap for flexible layout",
        "MySQL for fast category and tag querying",
      ],
      challenges: [
        "Role-based access and publishing flow",
        "Media gallery with drag-drop upload",
        "SEO-friendly routing",
      ],
      solutions: [
        "Integrated WYSIWYG editor with role drafts",
        "Built custom route slugs with canonical URLs",
        "Added meta tag control per article",
      ],
      impact: [
        "Publishers gained 3x editorial speed",
        "Improved search engine ranking within 60 days",
        "Reduced hosting cost vs legacy CMS",
      ],
    },
  },
  {
    title: "SaaS Billing Portal",
    tech: ["Next.js", "Stripe", "Node.js"],
    caseStudy: {
      overview:
        "A centralized billing and subscription dashboard for SaaS tools offering tiered pricing and invoicing.",
      objectives:
        "Allow users to upgrade, cancel, and manage subscriptions while syncing with usage data.",
      role: "Built Stripe integration, webhook handling, and billing history module.",
      techRationale: [
        "Next.js for UI speed and transitions",
        "Stripe for payments and invoicing",
        "Node.js for webhook and tier logic",
      ],
      challenges: [
        "Dynamic pricing based on usage",
        "Handling Stripe’s webhooks reliably",
        "Preventing duplicate invoice generation",
      ],
      solutions: [
        "Mapped usage tiers to pricing levels with live meters",
        "Added retry queues for webhook failures",
        "Linked invoices to transaction logs securely",
      ],
      impact: [
        "Handled over $500K in SaaS revenue",
        "Reduced support queries by 45%",
        "Subscription churn dropped 22% after launch",
      ],
    },
  },
  {
    title: "Marketing Landing Page Builder",
    tech: ["React.js", "TailwindCSS", "Node.js"],
    caseStudy: {
      overview:
        "A no-code marketing tool for building high-conversion landing pages using drag-drop components.",
      objectives:
        "Empower digital marketers to launch campaign pages without dev involvement.",
      role: "Led frontend block builder, form integration, and page publishing logic.",
      techRationale: [
        "React.js for interactive builder interface",
        "TailwindCSS for clean design and layout control",
        "Node.js for handling publish and preview flows",
      ],
      challenges: [
        "Drag-drop UI with undo/redo",
        "Multi-device preview and responsiveness",
        "Saving reusable blocks as templates",
      ],
      solutions: [
        "Built Redux-powered undo stack",
        "Used iframe-based preview engine",
        "Enabled block import/export via JSON",
      ],
      impact: [
        "Cut landing page time from 3 days to 30 minutes",
        "300+ templates used in launch campaigns",
        "Conversion rate lifted by 17% with faster iterations",
      ],
    },
  },
];
