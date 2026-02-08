import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/CTASection';
import { FiCode, FiServer, FiLayout, FiCloud, FiCheckCircle, FiArrowRight, FiExternalLink } from 'react-icons/fi';

export const metadata = {
  title: 'Senior Full Stack Developer Building Scalable Web Applications | Umesh Gajjar',
  description:
    'Umesh Gajjar - Senior Full Stack Developer with 8+ years of experience in React.js, Next.js, Vue.js, Node.js, Laravel, and WordPress. Specializing in building high-performance, scalable web applications for startups, agencies, and SaaS companies.',
  keywords: 'Full Stack Developer, React Developer, Next.js Expert, Vue.js Developer, Node.js Developer, Laravel Developer, WordPress Developer, Pune Developer, Senior Developer, Freelance Developer',
};

const expertiseAreas = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    description:
      'Building modern, performant React/Next.js and Vue.js/Nuxt.js applications with focus on user experience, accessibility, and Core Web Vitals.',
    features: ['React/Next.js', 'Vue.js/Nuxt.js', 'TypeScript', 'Responsive Design'],
  },
  {
    icon: FiServer,
    title: 'Backend Architecture',
    description:
      'Designing and implementing scalable Node.js and PHP solutions for enterprise needs. Experience with APIs, microservices, and real-time applications.',
    features: ['Node.js/Express', 'Laravel/PHP', 'RESTful APIs', 'Microservices'],
  },
  {
    icon: FiLayout,
    title: 'WordPress & CMS',
    description:
      'Custom WordPress development, plugin creation, WooCommerce customizations, and headless CMS implementations for content management.',
    features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Headless CMS'],
  },
  {
    icon: FiCloud,
    title: 'Cloud & DevOps',
    description:
      'AWS infrastructure management, Docker containerization, CI/CD pipelines, ensuring reliable deployments and system monitoring.',
    features: ['AWS Services', 'Docker', 'CI/CD Pipelines', 'System Monitoring'],
  },
];

const featuredProjects = [
  {
    title: 'Enterprise SaaS Platform',
    description:
      'Multi-tenant SaaS application with role-based access control, subscription management, and real-time analytics.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    highlight: '10,000+ Active Users',
  },
  {
    title: 'E-Commerce Solution',
    description:
      'High-performance e-commerce platform with advanced filtering, payment gateway integration, and inventory management.',
    tech: ['React', 'Laravel', 'MySQL', 'Redis'],
    highlight: '₹50L+ Monthly Revenue',
  },
  {
    title: 'Custom Admin Dashboard',
    description:
      'Data visualization and analytics dashboard for enterprise clients with real-time updates and custom reporting.',
    tech: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
    highlight: '500+ Organizations',
  },
];

const stats = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Projects Completed', value: '100+' },
  { label: 'Happy Clients', value: '50+' },
  { label: 'Technologies', value: '20+' },
];

export default function HomePage() {
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
        
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center z-10">
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-10 border border-white/25 shadow-lg">
            <FiCode className="w-4 h-4 text-pattern" />
            <span>Full Stack Developer</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Building Amazing Web Experiences
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/85 max-w-4xl mx-auto leading-relaxed mb-16 font-light">
            8+ years of expertise in creating scalable, user-focused web applications 
            that drive business growth and deliver exceptional results.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-3 rounded-full text-white/90 border border-white/25 text-sm font-medium">
              <FiCheckCircle className="w-4 h-4 text-green-400" />
              <span>100+ Projects</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-3 rounded-full text-white/90 border border-white/25 text-sm font-medium">
              <FiCheckCircle className="w-4 h-4 text-green-400" />
              <span>Enterprise Level</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-3 rounded-full text-white/90 border border-white/25 text-sm font-medium">
              <FiCheckCircle className="w-4 h-4 text-green-400" />
              <span>Modern Tech Stack</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={stat.label} className="inline-flex flex-col items-center bg-white/15 backdrop-blur-sm px-8 py-6 rounded-2xl text-white border border-white/25 shadow-lg">
                <span className="text-3xl font-bold text-secondary-200 mb-1">{stat.value}</span>
                <span className="text-sm text-white/75 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact">
              <Button className="bg-pattern text-white hover:bg-pattern hover:text-white px-10 py-5 rounded-2xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-3 border-2 border-white hover:border-pattern" variant="custom">
                <span>Start Your Project</span>
                <FiArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button className="bg-transparent text-white hover:bg-white hover:text-primary px-10 py-5 rounded-2xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-3 border-2 border-white">
                <span>View Portfolio</span>
                <FiExternalLink className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ENHANCED EXPERTISE SECTION */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fontColor mb-6 leading-tight">
              Technical Expertise
            </h2>
            <p className="text-lg md:text-xl text-fontColor/70 max-w-3xl mx-auto leading-relaxed">
              Full-stack development services focused on building scalable, maintainable applications that drive business success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-white rounded-3xl p-10 shadow-sm border border-secondary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-fontColor">
                      {area.title}
                    </h3>
                  </div>
                  
                  <p className="text-fontColor/75 leading-relaxed text-lg mb-8">
                    {area.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pattern rounded-full flex-shrink-0"></div>
                        <span className="text-fontColor/80 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENHANCED PROJECTS SECTION */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-fontColor mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-fontColor/80 max-w-2xl mx-auto">
              Recent projects showcasing expertise in modern web development and innovative solutions
            </p>
          </div>

          <div className="grid gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1"
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative flex flex-col md:flex-row gap-8 items-start">
                  {/* Left: Project number and visual */}
                  <div className="flex-shrink-0 flex items-center gap-4">
                    <div className="relative">
                      {/* Main number circle */}
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      {/* Animated ring */}
                      <div className="absolute inset-0 w-20 h-20 border-2 border-pattern/50 rounded-2xl animate-pulse group-hover:scale-125 transition-transform duration-500"></div>
                    </div>
                    
                    {/* Progress line for desktop */}
                    <div className="hidden md:block w-16 h-px bg-gradient-to-r from-pattern/50 to-transparent"></div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary/80 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <svg className="w-6 h-6 text-pattern/50 group-hover:text-pattern group-hover:rotate-45 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    
                    <p className="text-lg text-primary/70 leading-relaxed group-hover:text-primary/80 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    {/* Tech stack with enhanced styling */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-4 py-2 text-sm font-semibold bg-white text-primary rounded-xl border-2 border-gray-200/50 shadow-sm hover:border-primary/30 hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5"
                          style={{
                            animationDelay: `${techIndex * 100}ms`
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center mt-16">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white hover:text-secondary-50 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span>Explore All Projects</span>
              <svg className="w-6 h-6 text-pattern/80 group-hover:translate-x-1 transition-transform group-hover:text-pattern" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* NEW JOURNEY - Timeline style on the side */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-fontColor mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-fontColor/80">
              Building scalable solutions and leading teams at top organizations
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {/* Item 1 */}
              <div className="relative pl-12 md:pl-20">
                <div className="absolute left-0 md:left-4 w-8 h-8 bg-pattern rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary/80">Senior Associate Consultant</h3>
                    <span className="text-sm text-primary/70">Sep 2025 - Present</span>
                  </div>
                  <p className="text-lg text-primary font-semibold mb-2">Infosys</p>
                  <p className="text-primary/90 leading-relaxed">
                    Leading enterprise application development, architecting scalable solutions for global clients, and driving technical excellence across development teams.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative pl-12 md:pl-20">
                <div className="absolute left-0 md:left-4 w-8 h-8 bg-pattern rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary/80">Freelance Full Stack Developer</h3>
                    <span className="text-sm text-primary/70">Oct 2024 - Present</span>
                  </div>
                  <p className="text-lg text-primary font-semibold mb-2">Self-Employed</p>
                  <p className="text-primary/90 leading-relaxed">
                    Delivering custom web applications for diverse clients. Specializing in Next.js, React, and WordPress solutions with end-to-end project ownership.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative pl-12 md:pl-20">
                <div className="absolute left-0 md:left-4 w-8 h-8 bg-pattern rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary/80">Team Lead</h3>
                    <span className="text-sm text-primary/70">6+ Years Leadership</span>
                  </div>
                  <p className="text-lg text-primary font-semibold mb-2">Acespritech Solutions</p>
                  <p className="text-primary/90 leading-relaxed">
                    Led development teams on multiple projects, managed client relationships, conducted code reviews, and made technical architecture decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA */}
          <div className="text-center mt-16">
            <Link
              href="/experience"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white hover:text-secondary-50 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span>View Full Experience</span>
              <svg className="w-6 h-6 text-pattern/80 group-hover:translate-x-1 transition-transform group-hover:text-pattern" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTASection 
        title="Let's Build Something Amazing Together"
        subtitle="Ready to transform your ideas into powerful web applications? I'm here to help you succeed with cutting-edge technologies and proven expertise."
        primaryButtonText="Start Your Project"
        primaryButtonHref="/contact"
      />
    </>
  );
}
