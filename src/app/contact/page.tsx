import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/CTASection';
import ContactForm from './ContactForm';
import {
  FiGithub,
  FiLinkedin,
  FiCode,
  FiMessageSquare,
  FiMail,
  FiMapPin,
  FiClock,
  FiPhone,
  FiCalendar,
  FiCheckCircle,
} from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

export const metadata = {
  title: 'Contact - Hire Full Stack Developer for Your Project | Umesh Gajjar',
  description:
    'Get in touch with Umesh Gajjar for web development projects, technical consulting, or freelance opportunities. Available for Next.js, React, WordPress, and full-stack development work. Based in Pune, India.',
  keywords: 'Contact Umesh Gajjar, Hire Full Stack Developer, Freelance Developer Pune, Web Development Services, Next.js Developer for Hire, React Developer Contact, WordPress Developer, Technical Consulting',
};

const socialLinks = [
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/gajjarumesh',
    handle: '@gajjarumesh',
    color: 'bg-primary',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/umesh-gajjar/',
    handle: '/in/umesh-gajjar',
    color: 'bg-primary',
  },
  {
    name: 'X (Twitter)',
    icon: FaXTwitter,
    url: 'https://x.com/_umesh_gajjar',
    handle: '@_umesh_gajjar',
    color: 'bg-primary',
  },
];

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description:
      'Full-stack web application development using React, Next.js, Node.js, and modern technologies.',
    features: ['Custom Web Applications', 'E-commerce Solutions', 'API Development', 'Performance Optimization'],
    color: 'bg-primary',
  },
  {
    icon: FiMessageSquare,
    title: 'Technical Consulting',
    description:
      'Architecture reviews, performance optimization, and technical guidance for your projects.',
    features: ['Code Reviews', 'Architecture Planning', 'Technology Selection', 'Best Practices'],
    color: 'bg-primary',
  },
  {
    icon: FiCalendar,
    title: 'Project Management',
    description:
      'End-to-end project management from planning to deployment and maintenance.',
    features: ['Project Planning', 'Team Leadership', 'Delivery Management', 'Quality Assurance'],
    color: 'bg-primary',
  },
  {
    icon: FiCheckCircle,
    title: 'Maintenance & Support',
    description:
      'Ongoing maintenance, updates, and technical support for your web applications.',
    features: ['Bug Fixes', 'Security Updates', '24/7 Support', 'Performance Monitoring'],
    color: 'bg-primary',
  },
];

const contactInfo = [
  {
    icon: FiMail,
    title: 'Email',
    value: 'hello@umeshgajjar.com',
    link: 'mailto:hello@umeshgajjar.com',
    color: 'bg-primary',
  },
  {
    icon: FiMapPin,
    title: 'Location',
    value: 'Pune, Maharashtra, India',
    link: null,
    color: 'bg-primary',
  },
  {
    icon: FiClock,
    title: 'Response Time',
    value: '24-48 hours',
    link: null,
    color: 'bg-primary',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO SECTION WITH ANIMATED BACKGROUND */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-slate-900 via-primary to-slate-900 py-20 md:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
            <FiMessageSquare className="w-4 h-4 text-pattern" />
            <span>Let's Build Something Amazing Together</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Ready to Start Your Project?
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
            Turn your vision into reality with expert full-stack development. From concept to deployment,
            I'll help you create exceptional web experiences.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <FiCheckCircle className="w-4 h-4 text-pattern" />
              <span className="text-sm">8+ Years Experience</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <FiCheckCircle className="w-4 h-4 text-pattern" />
              <span className="text-sm">100+ Projects Delivered</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <FiCheckCircle className="w-4 h-4 text-pattern" />
              <span className="text-sm">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT INFO CARDS */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach out and start your project
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl" style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>
                  
                  <div className="relative text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-pattern" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                      {info.title}
                    </h3>
                    
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENHANCED Services Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services I Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl" style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>
                  
                  <div className="relative">
                    <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-pattern" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-500 to-primary-900 py-20 md:py-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Ready to get started? Fill out the form below and I'll get back to you within 24 hours
            </p>
          </div>
          
          <div className="bg-white backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* SOCIAL LINKS SECTION */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow my work and connect with me on social platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent transform hover:-translate-y-2 text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl" style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>
                  
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                      {social.name}
                    </h3>
                    
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors font-medium">
                      {social.handle}
                    </p>
                    
                    <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                      <span>Connect with me</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
                 

      {/* FAQ SECTION */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about working with me
            </p>
          </div>

          <div className="grid gap-6">
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">?</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    What types of projects do you work on?
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    I specialize in full-stack web development including SaaS applications, e-commerce platforms, corporate websites, custom web applications, and WordPress solutions. My expertise covers React, Next.js, Vue.js, Node.js, Laravel, and modern web technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FiClock className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    What's your typical project timeline?
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex web applications can take 2-6 months. I provide detailed timelines during our initial consultation and keep you updated throughout the development process.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FiPhone className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    How do you handle communication during projects?
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    I believe in transparent communication. I provide regular updates via email, schedule weekly check-ins for larger projects, and use project management tools to keep you informed of progress. You'll always know where your project stands.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FiMapPin className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    Do you work with international clients?
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    Yes! I have extensive experience working with clients across different time zones and cultures. I'm comfortable with remote collaboration and use modern tools to ensure seamless communication regardless of location.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-cyan-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FiCheckCircle className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    What's included in your web development services?
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    My services include complete project planning, UI/UX design consultation, full-stack development, testing, deployment, and post-launch support. I also provide documentation, training, and ongoing maintenance options to ensure your project's long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Transform Your Ideas?"
        subtitle="Let's collaborate to create something extraordinary. From concept to deployment, I'll help you build web experiences that make an impact."
        primaryButtonText="Start Your Project"
        primaryButtonHref="#contact-form"
        secondaryButtonText="View Portfolio"
        secondaryButtonHref="/projects"
      />
    </>
  );
}
