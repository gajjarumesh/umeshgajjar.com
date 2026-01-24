"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageHero, Section, Container } from "@/components/layouts";
import { Button, Card } from "@/components/ui";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import {
  FaCode,
  FaCogs,
  FaChartLine,
  FaBalanceScale,
  FaLightbulb,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const principles = [
  {
    icon: FaCode,
    title: "Simplicity Over Complexity",
    description:
      "Choose the simplest solution that solves the problem. Complex systems are harder to maintain, debug, and scale. We favor clarity and straightforward implementations over clever abstractions.",
  },
  {
    icon: FaCogs,
    title: "Maintainability First",
    description:
      "Code is read far more often than it's written. We write code that the next developer—or our future selves—can understand and modify without frustration. Clear naming, consistent patterns, and comprehensive documentation.",
  },
  {
    icon: FaChartLine,
    title: "Scalable by Design",
    description:
      "Design for growth from day one, but don't over-engineer. We build systems that can handle 10x growth without complete rewrites. Start simple, measure everything, scale based on real data.",
  },
  {
    icon: FaBalanceScale,
    title: "Honest About Tradeoffs",
    description:
      "Every technical decision involves tradeoffs. We don't pretend perfect solutions exist. Instead, we clearly communicate what we're optimizing for and what we're sacrificing, helping you make informed decisions.",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Understand the Real Problem",
    description:
      "We start by understanding your business goals, not just technical requirements. What problem are we actually solving? Who are the users? What does success look like?",
  },
  {
    number: "02",
    title: "Design for Change",
    description:
      "Requirements evolve. Markets shift. We architect systems that can adapt without massive rewrites. Modular design, clear boundaries, and pragmatic abstraction.",
  },
  {
    number: "03",
    title: "Build Incrementally",
    description:
      "Ship early, gather feedback, iterate. We deliver value in small increments rather than waiting months for a 'perfect' solution. Real user feedback beats theoretical perfection.",
  },
  {
    number: "04",
    title: "Measure and Optimize",
    description:
      "Data over opinions. We instrument systems to understand actual usage patterns and performance bottlenecks. Optimization is based on measurements, not guesses.",
  },
];

export default function ParavixClient() {
  return (
    <>
      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Paravix",
            description:
              "Engineering philosophy focused on building scalable, maintainable systems",
            founder: {
              "@type": "Person",
              name: "Umesh Gajjar",
              url: "https://umeshgajjar.com",
            },
            url: "https://umeshgajjar.com/paravix",
            sameAs: ["https://umeshgajjar.com"],
          }),
        }}
      />

      {/* Hero Section */}
      <PageHero
        title="Paravix"
        description="Engineering Systems That Scale"
        breadcrumbs={[{ label: "Paravix", href: null }]}
      />

      {/* Brand Identity Section */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              What Paravix Represents
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
              <p className="mb-6">
                Paravix is more than a brand name—it&apos;s a philosophy of software
                engineering. It represents a commitment to building systems that
                are{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  simple, maintainable, and scalable
                </span>
                .
              </p>
              <p className="mb-6">
                In an industry obsessed with the latest frameworks and
                buzzwords, we focus on fundamentals. We believe great software
                comes from{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  clear thinking
                </span>
                , not clever language. From{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  experience
                </span>
                , not theory.
              </p>
              <p>
                Every project under Paravix follows these principles—whether
                it&apos;s a startup MVP or an enterprise platform serving thousands
                of users. Learn more about our{" "}
                <Link
                  href="/services"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  development services
                </Link>{" "}
                or explore{" "}
                <Link
                  href="/work"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  real projects and decisions
                </Link>{" "}
                we&apos;ve made.
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Engineering Principles */}
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
              Engineering Principles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Core principles that guide every technical decision we make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <principle.icon className="text-white text-2xl" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {principle.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Link to related blog posts */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Read more about our approach to system design:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/blog/best-practices-scalable-saas-applications">
                <Button variant="secondary" size="sm">
                  Building Scalable SaaS Apps
                </Button>
              </Link>
              <Link href="/blog/laravel-vs-nodejs-choosing-right-backend">
                <Button variant="secondary" size="sm">
                  Architecture Decisions
                </Button>
              </Link>
              <Link href="/blog/devops-essentials-modern-web-development">
                <Button variant="secondary" size="sm">
                  DevOps & Maintainability
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Approach Section */}
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
              <FaUsers className="text-4xl text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                How We Work with Clients
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collaborative approach focused on delivering real value
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {approachSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
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
            <FaLightbulb className="text-6xl mb-6 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Whether you need to build an MVP, scale an existing application,
              or modernize a legacy system, the Paravix engineering approach can
              help. See our{" "}
              <Link
                href="/work"
                className="underline font-semibold hover:text-white"
              >
                case studies
              </Link>{" "}
              to understand how we&apos;ve solved similar challenges, or{" "}
              <Link
                href="/services"
                className="underline font-semibold hover:text-white"
              >
                explore our services
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
              <Link href="/work">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
