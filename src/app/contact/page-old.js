"use client";

import { motion } from "framer-motion";
import { PageHero, Section, Container } from "@/components/layouts";
import ContactForm from "@/components/ContactForm";
import { SITE_CONFIG, SOCIAL_LINKS, ANIMATION_VARIANTS } from "@/lib/constants";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: SITE_CONFIG.location,
      href: null,
    },
    {
      icon: FaClock,
      label: "Response Time",
      value: "Within 24 hours",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: SOCIAL_LINKS.github,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: SOCIAL_LINKS.linkedin,
      color: "hover:text-blue-600",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      href: SOCIAL_LINKS.twitter,
      color: "hover:text-blue-400",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Get In Touch"
        description="Have a project in mind? Let's discuss how I can help bring your vision to life."
        breadcrumbs={[{ label: "Contact", href: null }]}
      />

      {/* Contact Section */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.slideInLeft}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Feel free to reach out through any of these channels. I typically
                respond within 24 hours.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-xl"
              >
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  Working Hours
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <p className="text-sm mt-3 text-gray-500 dark:text-gray-500">
                    Timezone: {SITE_CONFIG.timezone}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.slideInRight}
              className="lg:col-span-3"
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                  Send Me a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Fill out the form below and I&apos;ll get back to you as soon as
                  possible.
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Quick answers to common questions about working with me.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is your typical response time?",
                a: "I typically respond to all inquiries within 24 hours during business days. Urgent matters are prioritized.",
              },
              {
                q: "Do you work with clients worldwide?",
                a: "Yes! I work with clients globally and am experienced in remote collaboration across different time zones.",
              },
              {
                q: "What information should I include in my inquiry?",
                a: "Please include details about your project goals, timeline, budget range, and any specific technical requirements. The more information you provide, the better I can help.",
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes, I offer a free initial consultation to discuss your project requirements and determine if we're a good fit.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  {faq.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
