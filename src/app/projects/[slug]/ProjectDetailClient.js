"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PageHero, Section, Container } from "@/components/layouts";
import { Badge } from "@/components/ui";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import {
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGithub,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";

export default function ProjectDetailClient({ project, nextProject }) {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={project.title}
        description={`${project.category} Project`}
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: project.title, href: null },
        ]}
      />

      {/* Project Overview */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Project Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeIn}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeIn}
            >
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="primary">{project.category}</Badge>
                {project.featured && <Badge variant="success">Featured</Badge>}
              </div>

              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                About This Project
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                    >
                      <FaExternalLinkAlt />
                      View Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FaGithub />
                      View on GitHub
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Challenge & Solution */}
      {(project.challenge || project.solution) && (
        <Section className="bg-gray-50 dark:bg-gray-800">
          <Container>
            <div className="grid md:grid-cols-2 gap-8">
              {project.challenge && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeIn}
                  className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    The Challenge
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </motion.div>
              )}

              {project.solution && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeIn}
                  className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    The Solution
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.solution}
                  </p>
                </motion.div>
              )}
            </div>
          </Container>
        </Section>
      )}

      {/* Key Features */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
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
                Key Features
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Highlights of what makes this project stand out
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {project.keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                >
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-200">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Results/Impact */}
      {project.results && project.results.length > 0 && (
        <Section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Results & Impact
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Measurable outcomes and achievements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm"
                >
                  <FaCheckCircle className="text-4xl mx-auto mb-4" />
                  <p className="text-lg font-semibold">{result}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <Section className="bg-gray-50 dark:bg-gray-800">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeIn}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 md:p-12 shadow-xl relative">
                <FaQuoteLeft className="text-5xl text-blue-600/20 dark:text-blue-400/20 absolute top-8 left-8" />
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 italic mb-6 leading-relaxed">
                    &ldquo;{project.testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        {project.testimonial.author}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* Screenshots Gallery */}
      {project.screenshots && project.screenshots.length > 0 && (
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
                Project Screenshots
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A closer look at the project interface and features
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-video rounded-xl overflow-hidden shadow-xl"
                >
                  <Image
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Next Project Navigation */}
      {nextProject && (
        <Section className="bg-gray-50 dark:bg-gray-800">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeIn}
            >
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group block bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                    NEXT PROJECT
                  </span>
                  <FaArrowRight className="text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {nextProject.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {nextProject.tech.slice(0, 4).map((tech, index) => (
                    <Badge key={index} variant="secondary" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Link>
            </motion.div>
          </Container>
        </Section>
      )}

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
              Like What You See?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Let&apos;s work together to build something amazing for your business
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Start Your Project
              </Link>
              <Link
                href="/projects"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                View More Projects
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
