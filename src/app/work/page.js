"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHero, Section, Container } from "@/components/layouts";
import { Button, Card, Badge } from "@/components/ui";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { caseStudies } from "@/data/caseStudies";
import { generateMetadata } from "@/lib/seo";
import {
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaIndustry,
} from "react-icons/fa";

// SEO Metadata
export const metadata = generateMetadata({
  title: "Case Studies - Real Projects, Real Decisions",
  description:
    "Explore detailed case studies showcasing real challenges, solutions, and results from web development projects. Learn how we've built scalable systems for clients across various industries.",
  keywords:
    "case studies, web development projects, software development, system design, project portfolio, client success stories",
  canonicalUrl: "https://umeshgajjar.com/work",
});

export default function WorkPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Real Projects, Real Decisions"
        description="Case studies showcasing the challenges we've solved and the systems we've built"
        breadcrumbs={[{ label: "Work", href: null }]}
      />

      {/* Introduction */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Every project tells a story of tradeoffs, decisions, and learning.
              These case studies go beyond the surface to share the{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                real challenges we faced
              </span>
              , the{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                solutions we chose
              </span>
              , and the{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                results we achieved
              </span>
              . Discover more about our{" "}
              <Link
                href="/paravix"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                engineering approach
              </Link>{" "}
              or explore our{" "}
              <Link
                href="/services"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                development services
              </Link>
              .
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Case Studies Grid */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <Container>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Left Column - Overview */}
                    <div>
                      <div className="mb-4">
                        <Badge className="mb-2">{study.category}</Badge>
                        {study.featured && (
                          <Badge className="ml-2 bg-purple-600">Featured</Badge>
                        )}
                      </div>

                      <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                        {study.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        {study.subtitle}
                      </p>

                      {/* Project Info */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                          <FaIndustry className="text-blue-600" />
                          <span>
                            <span className="font-semibold">Industry:</span>{" "}
                            {study.industry}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                          <FaClock className="text-blue-600" />
                          <span>
                            <span className="font-semibold">Duration:</span>{" "}
                            {study.duration}
                          </span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Challenge */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                          The Challenge
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                    </div>

                    {/* Right Column - Solution & Results */}
                    <div>
                      {/* Solution */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                          The Solution
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          {study.solution}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {study.keyFeatures.slice(0, 4).map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                            >
                              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                          Results Achieved
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result, i) => (
                            <div
                              key={i}
                              className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                            >
                              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                                {result.value}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">
                                {result.metric}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Related Blog Posts */}
                      {study.relatedBlogSlugs && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                            Related Articles:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {study.relatedBlogSlugs.map((slug) => (
                              <Link key={slug} href={`/blog/${slug}`}>
                                <Button variant="secondary" size="sm">
                                  Read More
                                  <FaArrowRight className="ml-2 text-xs" />
                                </Button>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Testimonial */}
                      {study.testimonial && (
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg border-l-4 border-blue-600">
                          <p className="text-gray-700 dark:text-gray-200 italic mb-4">
                            "{study.testimonial.text}"
                          </p>
                          <div className="text-sm">
                            <div className="font-semibold text-gray-900 dark:text-white">
                              {study.testimonial.author}
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">
                              {study.testimonial.role}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Whether you're facing similar challenges or have a unique problem
              to solve, let's discuss how we can help. Learn more about our{" "}
              <Link
                href="/services"
                className="underline font-semibold hover:text-white"
              >
                development services
              </Link>{" "}
              or explore the{" "}
              <Link
                href="/paravix"
                className="underline font-semibold hover:text-white"
              >
                Paravix engineering approach
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Start a Conversation
                  <FaArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
