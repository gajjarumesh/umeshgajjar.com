"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="h-full p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Icon */}
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-3xl text-white" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Learn More Link */}
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all duration-300"
        >
          Learn More
          <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>

        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}
