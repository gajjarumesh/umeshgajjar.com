"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero, Section, Container } from "@/components/layouts";
import ProjectCard from "@/components/ProjectCard";
import { allProjects, getAllCategories, getAllTechnologies } from "@/data/projects";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { FaFilter, FaSearch } from "react-icons/fa";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", ...getAllCategories()];
  const technologies = getAllTechnologies();

  // Filter projects
  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Projects"
        description="A showcase of successful projects across various industries. From SaaS platforms to enterprise solutions."
        breadcrumbs={[{ label: "Projects", href: null }]}
      />

      {/* Projects Section */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          {/* Filter and Search */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="mb-12"
          >
            {/* Search Bar */}
            <div className="mb-6 max-w-2xl mx-auto">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects by name, description, or technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <FaFilter />
                <span className="font-semibold">Category:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category === "all" ? "All Projects" : category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-center text-gray-600 dark:text-gray-400"
          >
            Showing {filteredProjects.length} of {allProjects.length} projects
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                No projects found matching your criteria
              </p>
              <button
                onClick={() => {
                  setFilter("all");
                  setSearchQuery("");
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}

          {/* Technology Stack Used */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.slice(0, 15).map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                  onClick={() => setSearchQuery(tech)}
                >
                  {tech}
                </span>
              ))}
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
              Have a Project in Mind?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Let&apos;s discuss how I can help bring your vision to life with cutting-edge technology.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Project
            </a>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
