import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/CTASection';
import Link from 'next/link';
import { FiCode, FiUsers, FiTrendingUp, FiHeart, FiCheckCircle, FiMessageSquare, FiTarget, FiBriefcase, FiBookOpen, FiShield, FiLayers, FiStar, FiUser, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { HeroParticles } from '@/components/animations/HeroParticles';
import { FadeUp } from '@/components/animations/FadeUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

export const metadata = {
  title: 'About Umesh Gajjar - Senior Full Stack Developer | Umesh Gajjar',
  description:
    'Learn about Umesh Gajjar, a Senior Full Stack Developer with 8+ years of experience in building scalable web applications. From WordPress development to leading enterprise teams at Infosys.',
  keywords: 'Umesh Gajjar, Full Stack Developer, About, Experience, Team Lead, Software Engineer, Pune, India',
};

const timeline = [
  {
    year: '2018-2022',
    title: 'Full Stack Developer',
    company: 'Various Companies',
    icon: FiTrendingUp,
    description:
      'Worked at NewsReach, KNP Technologies, and GreenCubes, building diverse web applications and gaining expertise.',
    location: 'Pune, India',
  },
  {
    year: '2022-2024',
    title: 'Team Lead & Senior Developer',
    company: 'Acespritech Solutions',
    icon: FiUsers,
    description:
      'Led development teams of 5+ developers, managed client relationships, and drove technical excellence across projects.',
    location: 'Pune, India',
  },
  {
    year: '2024',
    title: 'Senior Full Stack Developer',
    company: 'Freelance',
    icon: FiCode,
    description:
      'Launched independent consultancy focusing on Next.js, React, and modern web technologies for diverse clients.',
    location: 'Remote',
  },
  {
    year: '2025',
    title: 'Senior Associate Consultant',
    company: 'Infosys',
    icon: FiBriefcase,
    description:
      'Leading enterprise-level development projects for global clients, focusing on scalable solutions and team leadership.',
    location: 'Pune, India',
  },
];

const values = [
  {
    icon: FiCode,
    title: 'Clean, Maintainable Code',
    description:
      'Writing code that is easy to understand, test, and maintain. Following best practices and design patterns for long-term project success.',
  },
  {
    icon: FiTrendingUp,
    title: 'Scalability & Performance',
    description:
      'Building applications that grow with business needs. Optimizing for performance, handling increased load, and ensuring reliability.',
  },
  {
    icon: FiUsers,
    title: 'Collaboration & Communication',
    description:
      'Effective communication with stakeholders, transparent project management, and collaborative problem-solving with team members.',
  },
  {
    icon: FiHeart,
    title: 'User-Centric Development',
    description:
      'Prioritizing user experience in every decision. Building intuitive interfaces that solve real problems and delight users.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* MODERN HERO SECTION */}
      <section className="relative min-h-[60vh] bg-primary py-20 md:py-32 overflow-hidden">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pattern/10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full"></div>
        </div>
        
        {/* Floating Particles - hydration-safe */}
        <HeroParticles />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
            <FiHeart className="w-4 h-4 text-pattern" />
            <span>Passionate About Creating</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight gradient-text">
            About Umesh
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
            A passionate full-stack developer dedicated to crafting exceptional web experiences
            that make a real difference in people's lives.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <FiCheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">8+ Years Experience</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <FiCheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">100+ Projects</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <FiCheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Team Leadership</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL SUMMARY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <FiUsers className="w-4 h-4 text-pattern" />
              <span>Professional Summary</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Umesh Gajjar
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <FiCode className="w-6 h-6 text-pattern" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Senior Full Stack Developer</h3>
                    <p className="text-pattern font-semibold">8+ Years Experience • Pune, Maharashtra</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  I'm a passionate Senior Full Stack Developer with expertise in building scalable web applications.
                  My journey spans from custom WordPress development to architecting enterprise-level SaaS platforms,
                  always focusing on delivering high-quality, maintainable solutions that drive real business value.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <FiBriefcase className="w-6 h-6 text-pattern" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Current Role</h3>
                    <p className="text-pattern font-semibold">Senior Associate Consultant at Infosys</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Currently leading development teams in building enterprise applications for global clients.
                  I balance my corporate responsibilities with freelance projects, helping startups and agencies
                  transform their ideas into powerful web solutions using cutting-edge technologies.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <FiTarget className="w-6 h-6 text-pattern" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Excellence</h3>
                    <p className="text-pattern font-semibold">Full Stack Expertise • Modern Technologies</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  My expertise spans the complete development stack—from creating pixel-perfect UIs with React.js and Next.js
                  to building robust backend systems with Node.js and Laravel. I'm passionate about performance optimization,
                  scalable architecture, and delivering exceptional user experiences across all project types.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER JOURNEY - REDESIGNED */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-secondary/15 text-primary px-8 py-4 rounded-full text-sm font-semibold mb-8 border border-secondary/30">
              <FiTrendingUp className="w-5 h-5 text-pattern" />
              <span>Professional Growth</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fontColor mb-8 leading-tight">
              Career Journey
            </h2>
            <p className="text-xl md:text-2xl text-fontColor/70 max-w-3xl mx-auto leading-relaxed">
              From WordPress developer to enterprise architect - a journey of continuous learning and growth
            </p>
          </div>

          {/* Modern Stepped Timeline */}
          <div className="relative">
            {/* Vertical progress line */}
            <div className="absolute left-8 md:left-16 top-0 bottom-0 w-1 bg-secondary/30 rounded-full"></div>
            
            <StaggerContainer className="space-y-16">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <StaggerItem key={index}><div className="relative">
                    {/* Timeline marker */}
                    <div className="absolute left-6 md:left-14 w-5 h-5 bg-pattern rounded-full border-4 border-white shadow-lg z-10">
                      <div className="absolute inset-0 bg-pattern rounded-full animate-pulse opacity-75"></div>
                    </div>
                    
                    {/* Year badge */}
                    <div className="absolute left-20 md:left-28 top-0">
                      <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-3xl font-bold text-sm shadow-lg">
                        <span>{item.year}</span>
                      </div>
                    </div>
                    
                    {/* Career card */}
                    <div className="ml-20 md:ml-28 mt-16">
                      <div className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-secondary/20 hover:shadow-lg transition-all duration-300 group">
                        {/* Card header */}
                        <div className="flex items-start gap-6 mb-8">
                          <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <Icon className="w-8 h-8 text-pattern" />
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-2xl md:text-3xl font-bold text-fontColor mb-3 group-hover:text-primary transition-colors duration-300">
                              {item.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                              <span className="text-xl font-semibold text-secondary">
                                {item.company}
                              </span>
                              <span className="px-4 py-2 bg-secondary/15 text-fontColor/70 rounded-full text-sm font-medium">
                                {item.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Card content */}
                        <div className="pl-22">
                          <p className="text-lg text-fontColor/80 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        
                        {/* Visual enhancement */}
                        <div className="absolute top-6 right-6 w-20 h-20 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div></StaggerItem>
                );
              })}
            </StaggerContainer>
            
            {/* Timeline end marker */}
            <div className="relative mt-16">
              <div className="absolute left-6 md:left-14 w-5 h-5 bg-secondary rounded-full border-4 border-white shadow-lg"></div>
              <div className="ml-20 md:ml-28">
                <div className="inline-flex items-center gap-3 bg-pattern/10 text-pattern px-6 py-4 rounded-2xl font-semibold">
                  <FiArrowRight className="w-5 h-5" />
                  <span>Looking Forward</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP & TEAM MANAGEMENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <FiUsers className="w-4 h-4 text-pattern" />
              <span>Team Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leadership & Team Management
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              With 6+ years of team leadership experience, I focus on empowerment, collaboration,
              and driving technical excellence across projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl w-fit mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                <FiUsers className="w-8 h-8 text-pattern" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                Team Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Leading cross-functional teams of 5-10 developers, coordinating sprint planning,
                and ensuring timely delivery of high-quality features.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="p-4 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl w-fit mb-6 group-hover:from-secondary/20 group-hover:to-primary/20 transition-colors">
                <FiMessageSquare className="w-8 h-8 text-pattern/80" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors">
                Client Communication
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gathering requirements, managing expectations, and maintaining transparent
                communication throughout the project lifecycle.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl w-fit mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                <FiLayers className="w-8 h-8 text-pattern" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                Technical Architecture
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Making key decisions on technology stack, system design, and development
                patterns for scalable solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="p-4 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl w-fit mb-6 group-hover:from-secondary/20 group-hover:to-primary/20 transition-colors">
                <FiBookOpen className="w-8 h-8 text-pattern/80" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors">
                Mentorship
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Conducting code reviews, pair programming sessions, and knowledge-sharing
                workshops to elevate team skills.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl w-fit mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                <FiShield className="w-8 h-8 text-pattern" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                Quality Assurance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Implementing best practices, code standards, and testing strategies
                to maintain high code quality.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group md:col-span-2 lg:col-span-1">
              <div className="p-4 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl w-fit mb-6 group-hover:from-secondary/20 group-hover:to-primary/20 transition-colors">
                <FiTrendingUp className="w-8 h-8 text-pattern" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors">
                Continuous Learning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Staying updated with industry trends, conducting technical discussions,
                and fostering a culture of innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES & WORK PHILOSOPHY */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <FiStar className="w-4 h-4 text-pattern" />
              <span>Core Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Values & Work Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The guiding principles that shape my approach to software development
              and professional relationships.
            </p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={index}>
                <div
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                >
                  {/* Subtle background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex-shrink-0 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-8 h-8 text-pattern/70 group-hover:text-pattern transition-colors duration-300" />
                      </div>
                      <div className="flex-1 space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <CTASection 
        title="Ready to Work Together?"
        subtitle="I'm always interested in hearing about new projects and opportunities. Let's discuss how we can collaborate to bring your ideas to life."
        secondaryButtonText="View Experience"
        secondaryButtonHref="/experience"
      />
    </>
  );
}
