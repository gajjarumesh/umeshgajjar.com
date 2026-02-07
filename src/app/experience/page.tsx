import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { generatePageMetadata, injectStructuredData, generateBreadcrumbSchema } from '@/lib/seo';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';

export const metadata = generatePageMetadata({
  title: 'Professional Experience & Career Timeline',
  description:
    'Detailed career journey of Umesh Gajjar - from WordPress developer to Senior Associate Consultant at Infosys. 7+ years of full-stack development experience leading teams at Acespritech, NewsReach, KNP Technologies, and more.',
  keywords: [
    'Umesh Gajjar Experience',
    'Career Timeline',
    'Infosys Developer',
    'Team Lead',
    'Full Stack Career',
    'Software Engineer Experience',
    'Acespritech',
    'Freelance Developer',
    'Professional Experience',
  ],
  path: '/experience',
});

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
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
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
            Professional Experience
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
            7+ years of full-stack development experience building scalable web
            applications
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            From WordPress developer to leading enterprise teams at Infosys
          </p>
        </div>
      </Section>

      {/* Career Timeline */}
      <Section className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full border-4 border-white dark:border-gray-900"></div>

                {/* Content */}
                <div className="pb-8">
                  {/* Header */}
                  <div className="mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {exp.position}
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-lg">
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        {exp.company}
                      </span>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 text-base mt-2 md:mt-0">
                        <span className="flex items-center gap-2">
                          <FiCalendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-2">
                          <FiMapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <FiBriefcase className="w-4 h-4" />
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  {exp.responsibilities && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        Key Responsibilities:
                      </h3>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0">
                              •
                            </span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Achievements */}
                  {exp.achievements && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        Key Achievements:
                      </h3>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0">
                              ✓
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Projects */}
                  {exp.projects && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        Notable Projects:
                      </h3>
                      <ul className="space-y-2">
                        {exp.projects.map((project, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0">
                              →
                            </span>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      Technologies Used:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full"
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
        </div>
      </Section>

      {/* Skills Highlight */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Skills Developed Through Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive skill set built through hands-on experience across
              diverse projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Technical Leadership
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                6+ years leading development teams, making architectural
                decisions, and driving technical excellence
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Full-Stack Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Mastery of modern frontend frameworks (React, Next.js, Vue.js)
                and backend technologies (Node.js, Laravel, PHP)
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Client Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Strong communication skills, requirement gathering, and managing
                stakeholder expectations
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            With 7+ years of experience and a proven track record, I'm ready to
            help your team succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100"
            >
              Get in Touch
            </Button>
            <Button
              href="/projects"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              View Projects
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
