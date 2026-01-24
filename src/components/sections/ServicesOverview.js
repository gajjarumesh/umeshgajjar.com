"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getFeaturedServices } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui";

export default function ServicesOverview() {
  const featuredServices = getFeaturedServices();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive full-stack development services to bring your ideas to
            life. Every project follows the{" "}
            <Link
              href="/paravix"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              Paravix engineering approach
            </Link>{" "}
            for building systems that are simple, maintainable, and scalable.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/services">
            <Button size="lg" variant="secondary">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
