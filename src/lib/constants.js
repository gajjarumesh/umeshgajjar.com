// Site-wide constants and configuration

export const SITE_CONFIG = {
  name: "Umesh Gajjar",
  title: "Umesh Gajjar | Full Stack Developer",
  description:
    "Expert Full Stack Developer specializing in React.js, Laravel, Node.js, and scalable SaaS applications. 6+ years of experience building high-performance web solutions.",
  url: "https://umeshgajjar.com",
  email: "hello@umeshgajjar.com",
  phone: "+91 XXXXXXXXXX",
  location: "India",
  timezone: "Asia/Kolkata",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/gajjarumesh",
  linkedin: "https://linkedin.com/in/umeshgajjar",
  twitter: "https://twitter.com/umeshgajjar",
  email: "mailto:hello@umeshgajjar.com",
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/", external: false },
  { label: "About", href: "/about", external: false },
  { label: "Paravix", href: "/paravix", external: false },
  { label: "Services", href: "/services", external: false },
  { label: "Work", href: "/work", external: false },
  { label: "Projects", href: "/projects", external: false },
  { label: "Blog", href: "/blog", external: false },
  { label: "Contact", href: "/contact", external: false },
];

export const FOOTER_LINKS = {
  services: [
    { label: "Web Development", href: "/services/custom-web-application-development" },
    { label: "SaaS Development", href: "/services/saas-development-mvp-building" },
    { label: "E-commerce Solutions", href: "/services/ecommerce-solutions" },
    { label: "API Development", href: "/services/api-development-integration" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Paravix", href: "/paravix" },
    { label: "Work", href: "/work" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export const SKILLS = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Vue.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 95 },
  ],
  backend: [
    { name: "Laravel", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "GraphQL", level: 75 },
    { name: "REST APIs", level: 95 },
  ],
  database: [
    { name: "PostgreSQL", level: 90 },
    { name: "MySQL", level: 90 },
    { name: "MongoDB", level: 85 },
    { name: "Redis", level: 80 },
  ],
  devops: [
    { name: "Docker", level: 85 },
    { name: "AWS", level: 75 },
    { name: "CI/CD", level: 80 },
    { name: "Nginx", level: 75 },
  ],
};

export const TECH_STACK = [
  {
    category: "Frontend",
    technologies: [
      { name: "React.js", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Vue.js", icon: "SiVuedotjs" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Laravel", icon: "SiLaravel" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express", icon: "SiExpress" },
      { name: "GraphQL", icon: "SiGraphql" },
    ],
  },
  {
    category: "Database",
    technologies: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Redis", icon: "SiRedis" },
    ],
  },
  {
    category: "DevOps & Cloud",
    technologies: [
      { name: "Docker", icon: "SiDocker" },
      { name: "AWS", icon: "SiAmazon" },
      { name: "Vercel", icon: "SiVercel" },
      { name: "GitHub Actions", icon: "SiGithubactions" },
    ],
  },
];

export const STATS = [
  { label: "Years Experience", value: "6+", icon: "FaBriefcase" },
  { label: "Projects Completed", value: "50+", icon: "FaCheckCircle" },
  { label: "Technologies Mastered", value: "15+", icon: "FaCode" },
  { label: "Client Satisfaction", value: "100%", icon: "FaSmile" },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery",
    description:
      "Understanding your requirements, goals, and challenges to create a clear project roadmap.",
    icon: "FaSearch",
  },
  {
    step: 2,
    title: "Design & Planning",
    description:
      "Creating wireframes, prototypes, and technical architecture for optimal user experience.",
    icon: "FaPencilRuler",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Building your solution with clean code, best practices, and regular progress updates.",
    icon: "FaCode",
  },
  {
    step: 4,
    title: "Testing & Launch",
    description:
      "Rigorous testing, deployment to production, and ongoing support for success.",
    icon: "FaRocket",
  },
];

export const CONTACT_OPTIONS = {
  projectTypes: [
    "Web Application Development",
    "SaaS Platform",
    "E-commerce Website",
    "Mobile App (PWA)",
    "API Development",
    "Legacy System Modernization",
    "Technical Consulting",
    "Other",
  ],
  budgetRanges: [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Not Sure Yet",
  ],
  timelines: [
    "ASAP (< 1 month)",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible",
  ],
};

export const WORK_EXPERIENCE = [
  {
    id: 1,
    company: "Freelance / Independent",
    role: "Senior Full Stack Developer",
    period: "2021 - Present",
    location: "Remote",
    description:
      "Leading end-to-end development of web applications, SaaS platforms, and enterprise solutions for clients worldwide. Specializing in React, Laravel, and Node.js ecosystems.",
    achievements: [
      "Delivered 30+ successful projects across various industries",
      "Achieved 100% client satisfaction with on-time delivery",
      "Built scalable SaaS platforms serving 10,000+ users",
      "Modernized legacy systems reducing operational costs by 40%",
    ],
  },
  {
    id: 2,
    company: "Tech Solutions Inc.",
    role: "Full Stack Developer",
    period: "2019 - 2021",
    location: "Remote",
    description:
      "Developed and maintained multiple client projects, focusing on React and Laravel applications. Collaborated with cross-functional teams to deliver high-quality solutions.",
    achievements: [
      "Led development of 3 major SaaS applications",
      "Improved application performance by 50% through optimization",
      "Mentored junior developers in best practices",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
    ],
  },
  {
    id: 3,
    company: "StartupHub",
    role: "Junior Full Stack Developer",
    period: "2018 - 2019",
    location: "India",
    description:
      "Started career developing web applications using PHP, Laravel, and Vue.js. Gained comprehensive experience in full software development lifecycle.",
    achievements: [
      "Built 10+ web applications from scratch",
      "Learned and mastered modern web development stack",
      "Contributed to open-source projects",
      "Received 'Rising Star Developer' award",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "Gujarat Technical University",
    period: "2014 - 2018",
    location: "Gujarat, India",
    description:
      "Focused on software engineering, data structures, algorithms, and web technologies. Graduated with distinction.",
  },
];

export const CERTIFICATIONS = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    credentialId: "AWS-XXX-XXX",
  },
  {
    name: "React Advanced Patterns",
    issuer: "Frontend Masters",
    year: "2022",
    credentialId: "FM-XXX-XXX",
  },
  {
    name: "Laravel Certified Developer",
    issuer: "Laravel",
    year: "2021",
    credentialId: "LAR-XXX-XXX",
  },
];

// Animation variants for Framer Motion
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
};
