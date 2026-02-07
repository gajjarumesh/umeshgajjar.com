import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { generatePageMetadata, injectStructuredData, generateBreadcrumbSchema } from '@/lib/seo';
import { FiCode, FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi';

export const metadata = generatePageMetadata({
  title: 'About Umesh Gajjar - Senior Full Stack Developer',
  description:
    'Learn about Umesh Gajjar, a Senior Full Stack Developer with 7+ years of experience in building scalable web applications. From WordPress development to leading enterprise teams at Infosys.',
  keywords: [
    'Umesh Gajjar',
    'Full Stack Developer',
    'About',
    'Experience',
    'Team Lead',
    'Software Engineer',
    'Pune',
    'India',
  ],
  path: '/about',
});

const timeline = [
  {
    year: '2025',
    title: 'Senior Associate Consultant',
    company: 'Infosys',
    description:
      'Joined Infosys to lead enterprise-level development projects for global clients.',
  },
  {
    year: '2024',
    title: 'Started Freelancing',
    company: 'Self-Employed',
    description:
      'Launched freelance career focusing on Next.js, React, and WordPress solutions.',
  },
  {
    year: '2019-2024',
    title: 'Team Lead',
    company: 'Acespritech Solutions',
    description:
      'Led development teams, managed client relationships, and drove technical excellence.',
  },
  {
    year: '2018',
    title: 'Full Stack Developer',
    company: 'Various Companies',
    description:
      'Worked at NewsReach, KNP Technologies, and GreenCubes, building diverse web applications.',
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
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={injectStructuredData(breadcrumbSchema)}
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-white via-gray-50/30 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary tracking-tight">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-secondary/70 leading-relaxed max-w-3xl mx-auto">
            Senior Full Stack Developer passionate about building scalable,
            maintainable web applications
          </p>
        </div>
      </Section>

      {/* Professional Summary */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-base md:text-lg text-secondary/70 leading-relaxed">
              I'm Umesh Gajjar, a Senior Full Stack Developer based in Pune,
              Maharashtra, India, with over 7 years of experience in building
              scalable web applications. My journey in software development has
              taken me from creating custom WordPress themes to architecting
              enterprise-level SaaS platforms, always with a focus on delivering
              high-quality, maintainable solutions.
            </p>
            <p className="text-base md:text-lg text-secondary/70 leading-relaxed">
              Currently, I'm working as a Senior Associate Consultant at
              Infosys, where I lead development teams in building enterprise
              applications for global clients. Alongside my corporate role, I
              continue to work as a freelance developer, helping startups and
              agencies bring their ideas to life with modern web technologies.
            </p>
            <p className="text-base md:text-lg text-secondary/70 leading-relaxed">
              My expertise spans the full stack—from crafting pixel-perfect user
              interfaces with React.js and Next.js to building robust backend
              systems with Node.js and Laravel. I'm particularly passionate
              about performance optimization, scalable architecture, and
              creating exceptional user experiences. Whether it's a complex
              SaaS platform, an e-commerce solution, or a custom CMS, I approach
              every project with the same commitment to excellence.
            </p>
            <p className="text-base md:text-lg text-secondary/70 leading-relaxed">
              Beyond coding, I believe in the power of collaboration and
              continuous learning. I've mentored junior developers, led
              technical discussions, and always stay updated with the latest
              industry trends and best practices. My goal is not just to write
              code, but to build solutions that make a real impact for
              businesses and their users.
            </p>
          </div>
        </div>
      </Section>

      {/* Career Journey */}
      <Section className="bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
              Career Journey
            </h2>
            <p className="text-lg md:text-xl text-secondary/60">
              From WordPress developer to enterprise architect
            </p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="min-w-[120px]">
                  <div className="inline-block px-5 py-2.5 bg-primary/5 text-primary rounded-xl font-semibold border-2 border-primary/10">
                    {item.year}
                  </div>
                </div>
                <div className="group flex-1 p-8 bg-white rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-primary font-semibold mb-3">
                    {item.company}
                  </p>
                  <p className="text-base text-secondary/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership & Team Management */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Leadership & Team Management
          </h2>
          <div className="space-y-6">
            <p className="text-base md:text-lg text-secondary/70 leading-relaxed">
              With over 6 years of experience in team leadership, I've had the
              privilege of managing development teams, mentoring junior
              developers, and driving technical excellence across multiple
              projects. My leadership philosophy centers on empowerment,
              collaboration, and continuous improvement.
            </p>
            <ul className="space-y-4 text-base text-secondary/70">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">
                  •
                </span>
                <span>
                  <strong className="font-semibold text-secondary">Team Management:</strong> Leading cross-functional
                  teams of 5-10 developers, coordinating sprint planning, and
                  ensuring timely delivery of high-quality features.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">
                  •
                </span>
                <span>
                  <strong className="font-semibold text-secondary">Client Communication:</strong> Gathering requirements,
                  managing expectations, and maintaining transparent
                  communication throughout project lifecycle.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">
                  •
                </span>
                <span>
                  <strong className="font-semibold text-secondary">Technical Architecture:</strong> Making key decisions
                  on technology stack, system design, and development patterns
                  for scalable solutions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">
                  •
                </span>
                <span>
                  <strong className="font-semibold text-secondary">Mentorship:</strong> Conducting code reviews, pair
                  programming sessions, and knowledge-sharing workshops to
                  elevate team skills.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">
                  •
                </span>
                <span>
                  <strong className="font-semibold text-secondary">Quality Assurance:</strong> Implementing best
                  practices, code standards, and testing strategies to maintain
                  code quality.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Values & Work Philosophy */}
      <Section className="bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
              Values & Work Philosophy
            </h2>
            <p className="text-lg md:text-xl text-secondary/60 max-w-3xl mx-auto">
              Principles that guide my approach to software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-primary/5 rounded-xl flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl md:text-2xl font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-base text-secondary/70 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to Work Together?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get in Touch
            </Button>
            <Button
              href="/experience"
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View Experience
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
