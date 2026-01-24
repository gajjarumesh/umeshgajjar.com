"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero, Section, Container } from "@/components/layouts";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { FaFilter } from "react-icons/fa";

export default function ServicesPage() {
  const [filter, setFilter] = useState("all");

  // Get unique categories
  const categories = ["all", ...new Set(services.map(() => "featured"))];

  // Filter services
  const filteredServices =
    filter === "all"
      ? services
      : services.filter((service) => service.featured);

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Services"
        description="Comprehensive web development solutions tailored to your business needs. From MVPs to enterprise applications."
        breadcrumbs={[{ label: "Services", href: null }]}
      />

      {/* Services Section */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          {/* Filter Buttons (Optional) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <FaFilter />
              <span className="font-semibold">Filter:</span>
            </div>
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === "all"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === "featured"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Featured
            </button>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="mt-20 grid md:grid-cols-4 gap-8 text-center"
          >
            <div className="p-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Projects Delivered
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                6+
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Years Experience
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Client Satisfaction
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Technologies
              </p>
            </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Let&apos;s discuss your requirements and build something amazing together.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get a Free Consultation
            </a>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
