"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageHero, Section, Container } from "@/components/layouts";
import { Badge } from "@/components/ui";
import ServiceCard from "@/components/ServiceCard";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { services } from "@/data/services";
import {
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
  FaCloud,
  FaTools,
  FaChartLine,
  FaCode,
} from "react-icons/fa";

// Icon mapping
const iconMap = {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
  FaCloud,
  FaTools,
  FaChartLine,
  FaCode,
};

export default function ServiceDetailClient({ service, relatedServices, iconName }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  
  // Get icon component from map or use default
  const Icon = iconMap[iconName] || FaLaptopCode;

  // Get full service objects for related services with icons
  const relatedServicesWithIcons = relatedServices.map(rs => 
    services.find(s => s.id === rs.id)
  ).filter(Boolean);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title, href: null },
        ]}
      />

      {/* Service Overview */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeIn}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                <Icon className="text-4xl text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Overview
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeIn}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Technologies */}
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
              Technologies Used
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I use cutting-edge technologies to deliver robust and scalable solutions
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.staggerContainer}
            className="flex flex-wrap justify-center gap-3"
          >
            {service.technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={ANIMATION_VARIANTS.fadeIn}
              >
                <Badge variant="primary" size="lg">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Development Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A proven methodology for delivering high-quality results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.fadeIn}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-500 to-purple-600" />
                )}
              </motion.div>
            ))}
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
              Got questions? Find answers to common queries about this service
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.staggerContainer}
            className="max-w-3xl mx-auto space-y-4"
          >
            {service.faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={ANIMATION_VARIANTS.fadeIn}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <FaChevronUp className="text-blue-600 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Let&apos;s discuss your project and bring your vision to life
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {service.cta || "Get Started Today"}
            </Link>
          </motion.div>
        </Container>
      </Section>

      {/* Related Services */}
      {relatedServicesWithIcons.length > 0 && (
        <Section className="bg-white dark:bg-gray-900">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Other Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore more solutions to help grow your business
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedServicesWithIcons.map((relatedService, index) => (
                <ServiceCard
                  key={relatedService.id}
                  service={relatedService}
                  index={index}
                />
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeIn}
              className="text-center mt-12"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
              >
                View All Services
                <FaArrowRight />
              </Link>
            </motion.div>
          </Container>
        </Section>
      )}
    </>
  );
}
