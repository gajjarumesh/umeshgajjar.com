import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import ContactForm from './ContactForm';
import {
  generatePageMetadata,
  injectStructuredData,
  generateBreadcrumbSchema,
  siteConfig,
} from '@/lib/seo';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiCode,
  FiMessageSquare,
} from 'react-icons/fi';

export const metadata = generatePageMetadata({
  title: 'Contact - Hire Full Stack Developer for Your Project',
  description:
    'Get in touch with Umesh Gajjar for web development projects, technical consulting, or freelance opportunities. Available for Next.js, React, WordPress, and full-stack development work. Based in Pune, India.',
  keywords: [
    'Contact Umesh Gajjar',
    'Hire Full Stack Developer',
    'Freelance Developer Pune',
    'Web Development Services',
    'Next.js Developer for Hire',
    'React Developer Contact',
    'WordPress Developer',
    'Technical Consulting',
  ],
  path: '/contact',
});

const socialLinks = [
  {
    name: 'GitHub',
    icon: FiGithub,
    url: siteConfig.social.github,
    handle: '@gajjarumesh',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: siteConfig.social.linkedin,
    handle: '/in/umeshgajjar',
  },
  {
    name: 'Twitter',
    icon: FiTwitter,
    url: siteConfig.social.twitter,
    handle: '@umeshgajjar',
  },
];

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description:
      'Full-stack web application development using React, Next.js, Node.js, and modern technologies.',
  },
  {
    icon: FiMessageSquare,
    title: 'Technical Consulting',
    description:
      'Architecture reviews, performance optimization, and technical guidance for your projects.',
  },
];

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={injectStructuredData(breadcrumbSchema)}
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            Have a project in mind? Need technical expertise? I'm here to help.
          </p>
          <p className="text-lg text-gray-600">
            Available for freelance projects, full-time opportunities, and
            technical consulting
          </p>
        </div>
      </Section>

      {/* Services Overview */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How I Can Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional web development services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 rounded-lg">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <ContactForm />
        </div>
      </Section>

      {/* Social Links */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Connect on Social Media
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Follow my work and connect with me on these platforms
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-lg transition-all group"
                >
                  <Icon className="w-6 h-6 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {social.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {social.handle}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </Section>

      {/* FAQ / Quick Info */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What types of projects do you work on?
              </h3>
              <p className="text-gray-600">
                I work on a wide range of web development projects including
                SaaS applications, e-commerce platforms, corporate websites,
                custom web applications, and WordPress solutions. I specialize
                in React, Next.js, Vue.js, Node.js, and Laravel.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What is your typical response time?
              </h3>
              <p className="text-gray-600">
                I typically respond to all inquiries within 24-48 hours during
                business days. For urgent matters, please mention it in your
                message subject line.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Are you available for full-time positions?
              </h3>
              <p className="text-gray-600">
                Yes, I'm open to both full-time opportunities and freelance
                projects. Currently working at Infosys as a Senior Associate
                Consultant while also taking on select freelance projects.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you work with international clients?
              </h3>
              <p className="text-gray-600">
                Absolutely! I have experience working with clients across
                different time zones and am comfortable with remote
                collaboration. I'm proficient in English and use modern
                communication tools for seamless project management.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Let's discuss your project and how I can help bring your ideas to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="#contact-form"
              variant="secondary"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100"
            >
              Send a Message
            </Button>
            <Button
              href="/projects"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              View My Work
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
