import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/CTASection';
import { 
  FiCalendar, 
  FiMapPin, 
  FiBriefcase, 
  FiCheckCircle,
  FiAward,
  FiTrendingUp,
  FiUsers,
  FiCode,
  FiStar
} from 'react-icons/fi';
import { HeroParticles } from '@/components/animations/HeroParticles';
import { FadeUp } from '@/components/animations/FadeUp';

export const metadata = {
  title: 'Professional Experience & Career Timeline | Umesh Gajjar',
  description:
    'Detailed career journey of Umesh Gajjar - from WordPress developer to Senior Associate Consultant at Infosys. 8+ years of full-stack development experience leading teams at Acespritech, NewsReach, KNP Technologies, and more.',
  keywords: 'Umesh Gajjar Experience, Career Timeline, Infosys Developer, Team Lead, Full Stack Career, Software Engineer Experience, Acespritech, Freelance Developer',
};

const experiences = [
  {
    company: 'Infosys',
    position: 'Senior Associate Consultant',
    duration: 'September 2025 – Present',
    location: 'Pune, Maharashtra, India',
    type: 'Full-time',
    description:
      'Leading enterprise application development initiatives for global clients, architecting scalable solutions, and driving technical excellence across development teams.',
    responsibilities: [
      'Architecting and implementing enterprise-level web applications using modern JavaScript frameworks',
      'Leading technical discussions and making strategic technology decisions for client projects',
      'Mentoring development teams on best practices, code quality, and scalable architecture patterns',
      'Collaborating with cross-functional teams including business analysts, designers, and project managers',
      'Conducting code reviews and ensuring adherence to coding standards and security best practices',
      'Driving innovation and continuous improvement in development processes and methodologies',
    ],
    technologies: [
      'React.js',
      'Next.js',
      'Node.js',
      'TypeScript',
      'AWS',
      'Microservices',
      'Enterprise Architecture',
    ],
  },
  {
    company: 'Freelance',
    position: 'Full Stack Developer',
    duration: 'October 2024 – Present',
    location: 'Remote',
    type: 'Self-Employed',
    description:
      'Delivering custom web applications for diverse clients across startups, agencies, and small businesses. Specializing in Next.js, React, WordPress, and full-stack solutions with end-to-end project ownership.',
    responsibilities: [
      'Building custom web applications from requirements gathering to deployment and maintenance',
      'Developing responsive, SEO-optimized websites using Next.js, React, and modern web technologies',
      'Creating custom WordPress themes and plugins tailored to specific client requirements',
      'Implementing headless CMS solutions combining WordPress backend with Next.js frontend',
      'Managing complete project lifecycle including client communication, technical architecture, and delivery',
      'Providing ongoing support, maintenance, and feature enhancements for deployed applications',
    ],
    technologies: [
      'Next.js',
      'React.js',
      'WordPress',
      'Node.js',
      'Laravel',
      'PostgreSQL',
      'Vercel',
      'AWS',
    ],
    projects: [
      'Built 5+ custom Next.js applications for SaaS startups',
      'Delivered 10+ WordPress solutions for agencies and small businesses',
      'Implemented headless CMS architectures for performance-critical applications',
    ],
  },
  {
    company: 'Acespritech Solutions',
    position: 'Team Lead',
    duration: '2018 – 2024 (6+ Years)',
    location: 'Pune, Maharashtra, India',
    type: 'Full-time',
    description:
      'Led development teams on multiple enterprise projects, managed client relationships, conducted code reviews, and made technical architecture decisions. Progressed from developer to team lead role.',
    responsibilities: [
      'Leading and managing development teams of 5-10 developers across multiple concurrent projects',
      'Coordinating sprint planning, daily standups, and retrospectives in Agile/Scrum environment',
      'Managing client relationships, gathering requirements, and providing regular project updates',
      'Making technical architecture decisions for scalable, maintainable solutions',
      'Conducting comprehensive code reviews and ensuring code quality standards',
      'Mentoring junior developers through pair programming and knowledge-sharing sessions',
      'Implementing CI/CD pipelines and DevOps practices for faster, reliable deployments',
      'Handling technical recruitment, interviewing candidates, and onboarding new team members',
    ],
    technologies: [
      'React.js',
      'Vue.js',
      'Node.js',
      'Laravel',
      'Symfony',
      'MySQL',
      'PostgreSQL',
      'Docker',
    ],
    achievements: [
      'Successfully delivered 30+ projects on time and within budget',
      'Improved team productivity by 40% through process optimization and automation',
      'Reduced production bugs by 50% by implementing comprehensive code review practices',
      'Mentored 15+ junior developers who progressed to senior positions',
      'Established coding standards and best practices adopted company-wide',
    ],
  },
  {
    company: 'NewsReach',
    position: 'Full Stack Developer',
    duration: '2018',
    location: 'Pune, Maharashtra, India',
    type: 'Full-time',
    description:
      'Developed full-stack web applications focusing on content management systems and media platforms. Worked with PHP, Laravel, JavaScript, and modern frontend frameworks.',
    responsibilities: [
      'Building and maintaining web applications for news and media content delivery',
      'Developing RESTful APIs for mobile and web applications',
      'Implementing responsive frontend designs with focus on performance and accessibility',
      'Collaborating with content teams to build intuitive admin interfaces',
      'Optimizing database queries and application performance for high-traffic scenarios',
    ],
    technologies: [
      'Laravel',
      'Vue.js',
      'MySQL',
      'JavaScript',
      'HTML/CSS',
      'RESTful APIs',
    ],
  },
  {
    company: 'KNP Technologies',
    position: 'Web Developer',
    duration: '2017 – 2018',
    location: 'Pune, Maharashtra, India',
    type: 'Full-time',
    description:
      'Contributed to web development projects with focus on frontend development and WordPress customizations. Gained experience in client communication and project management.',
    responsibilities: [
      'Developing custom WordPress themes and plugins for client projects',
      'Building responsive websites using HTML, CSS, JavaScript, and jQuery',
      'Implementing frontend designs from PSD/Figma mockups with pixel-perfect accuracy',
      'Integrating third-party APIs and payment gateways',
      'Providing website maintenance and technical support to clients',
    ],
    technologies: [
      'WordPress',
      'PHP',
      'JavaScript',
      'jQuery',
      'HTML/CSS',
      'MySQL',
    ],
  },
  {
    company: 'GreenCubes',
    position: 'Junior Web Developer',
    duration: '2016 – 2017',
    location: 'Pune, Maharashtra, India',
    type: 'Full-time',
    description:
      'Started professional career as a junior developer, working on website development projects and learning industry best practices. Built strong foundation in web technologies.',
    responsibilities: [
      'Assisting senior developers in building and maintaining websites',
      'Writing clean, maintainable HTML, CSS, and JavaScript code',
      'Implementing responsive designs for cross-browser compatibility',
      'Learning and applying best practices in web development',
      'Participating in code reviews and technical discussions',
    ],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'WordPress',
      'Bootstrap',
    ],
  },
];

export default function ExperiencePage() {
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
            <FiBriefcase className="w-4 h-4 text-pattern" />
            <span>Career Journey</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight gradient-text">
            Professional Experience
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
            8+ years of full-stack development experience, from WordPress developer
            to enterprise team leadership at global companies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <FiTrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm">8+ Years Growth</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <FiUsers className="w-4 h-4 text-green-400" />
              <span className="text-sm">Team Leadership</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <FiAward className="w-4 h-4 text-green-400" />
              <span className="text-sm">Enterprise Level</span>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN CAREER TIMELINE */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <FiCalendar className="w-4 h-4 text-pattern" />
              <span>Career Timeline</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A comprehensive look at my career progression and key contributions at each stage
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeUp key={index} delay={index * 0.08}>
              <div className="relative">
                <div className="bg-white border border-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                  {/* Company header with gradient */}
                  <div className="bg-gradient-to-r from-primary to-primary-400 p-8 text-white relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <FiBriefcase className="w-6 h-6 text-pattern" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold mb-1 text-white">
                            {exp.position}
                          </h2>
                          <p className="text-xl font-semibold text-white/90">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-white/90">
                        <div className="flex items-center gap-2">
                          <FiCalendar className="w-4 h-4 text-pattern" />
                          <span className="text-sm font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiMapPin className="w-4 h-4 text-pattern" />
                          <span className="text-sm font-medium">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiBriefcase className="w-4 h-4 text-pattern" />
                          <span className="text-sm font-medium">{exp.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 space-y-8">
                    {/* Description */}
                    <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    {exp.responsibilities && (
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <FiCheckCircle className="w-5 h-5 text-pattern" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            Key Responsibilities
                          </h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {exp.responsibilities.map((resp, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-lg hover:border-primary/30 transition-colors">
                              <div className="w-2 h-2 bg-pattern rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {exp.achievements && (
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-pattern rounded-lg">
                            <FiAward className="w-5 h-5 text-pattern" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            Key Achievements
                          </h3>
                        </div>
                        <div className="grid gap-4">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-primary-50 border border-green-100 rounded-lg">
                              <FiCheckCircle className="w-5 h-5 text-pattern mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 font-medium">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Projects */}
                    {exp.projects && (
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-secondary/10 rounded-lg">
                            <FiCode className="w-5 h-5 text-pattern" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            Notable Projects
                          </h3>
                        </div>
                        <div className="grid gap-3">
                          {exp.projects.map((project, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-secondary/5 border border-secondary/10 rounded-lg">
                              <div className="w-2 h-2 bg-pattern rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{project}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FiCode className="w-5 h-5 text-pattern" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Technologies Used
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-pattern font-semibold rounded-full border border-primary/20 hover:from-primary/20 hover:to-secondary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS HIGHLIGHT */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <FiStar className="w-4 h-4 text-pattern" />
              <span>Core Competencies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Skills Developed Through Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive skill set built through hands-on experience across diverse projects and leadership roles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl w-fit mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                <FiUsers className="w-8 h-8 text-pattern" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                Technical Leadership
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                6+ years leading development teams, making architectural decisions,
                and driving technical excellence across enterprise projects.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="p-4 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl w-fit mb-6 group-hover:from-secondary/20 group-hover:to-primary/20 transition-colors">
                <FiCode className="w-8 h-8 text-pattern" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors">
                Full-Stack Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Mastery of modern frontend frameworks (React, Next.js, Vue.js)
                and backend technologies (Node.js, Laravel, PHP).
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl w-fit mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                <FiTrendingUp className="w-8 h-8 text-pattern" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                Client Management
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Strong communication skills, requirement gathering, stakeholder
                management, and delivering projects that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Interested in Working Together?"
        subtitle="With 8+ years of experience and a proven track record, I'm ready to help your team succeed and deliver exceptional results."
      />
    </>
  );
}
