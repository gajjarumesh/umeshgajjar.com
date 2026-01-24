"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";
import * as SimpleIcons from "react-icons/si";

export default function TechStack() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
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
            Tech Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Modern technologies I use to build scalable and performant applications
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-16">
          {TECH_STACK.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.technologies.map((tech, techIndex) => {
                  const Icon = SimpleIcons[tech.icon];
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + techIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="group relative"
                    >
                      <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center gap-3 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
                        {Icon && (
                          <Icon className="text-5xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                        )}
                        <span className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                          {tech.name}
                        </span>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
