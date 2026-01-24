"use client";

import { motion } from "framer-motion";
import { PageHero, Section, Container } from "@/components/layouts";
import { Button } from "@/components/ui";
import {
  WORK_EXPERIENCE,
  SKILLS,
  EDUCATION,
  CERTIFICATIONS,
  ANIMATION_VARIANTS,
} from "@/lib/constants";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaDownload,
  FaCalendar,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="About Me"
        description="Full Stack Developer with 6+ years of experience crafting scalable web applications and SaaS platforms."
        breadcrumbs={[{ label: "About", href: null }]}
      />

      {/* Professional Bio */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Bringing Ideas to Life Through Code
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                I&apos;m a passionate Full Stack Developer with over 6 years of
                experience building robust web applications, scalable SaaS
                platforms, and enterprise solutions. My expertise spans modern
                JavaScript frameworks (React.js, Next.js, Vue.js) and powerful
                backend technologies (Laravel, Node.js), enabling me to craft
                end-to-end solutions that deliver real business value.
              </p>
              <p className="mb-4">
                Throughout my career, I&apos;ve had the privilege of working with
                clients across various industries—from healthcare and fintech to
                e-commerce and enterprise software. I thrive on solving complex
                technical challenges and transforming ideas into production-ready
                applications that users love.
              </p>
              <p>
                My approach combines technical excellence with business acumen. I
                don&apos;t just write code—I partner with clients to understand their
                goals, architect scalable solutions, and deliver projects on time
                and within budget. Whether it&apos;s building an MVP, modernizing a
                legacy system, or scaling an application to thousands of users,
                I&apos;m committed to delivering exceptional results.
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Skills Section */}
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
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Proficient in modern web technologies with a focus on scalable,
              maintainable, and performant solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {Object.entries(SKILLS).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-6 capitalize text-gray-900 dark:text-white">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-200">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Work Experience Timeline */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaBriefcase className="text-4xl text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A journey of continuous learning and delivering impactful solutions.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {WORK_EXPERIENCE.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 pb-12 border-l-2 border-blue-200 dark:border-blue-800 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-600 -translate-x-[9px] ring-4 ring-white dark:ring-gray-900" />

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {job.role}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                        <FaCalendar className="text-sm" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <FaMapMarkerAlt className="text-sm" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {job.description}
                  </p>

                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </p>
                    {job.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                      >
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Education Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaGraduationCap className="text-4xl text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Education
              </h2>
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {edu.institution}
                </p>
                <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-sm" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-sm" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Certifications Section */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaCertificate className="text-4xl text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Continuously upgrading skills through professional certifications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                  <FaCertificate className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {cert.year}
                </p>
              </motion.div>
            ))}
          </div>
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
              Let&apos;s Work Together
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Ready to bring your project to life? Download my resume or get in
              touch to discuss how I can help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
                href="/contact"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
