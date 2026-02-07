import Link from "next/link";

export const metadata = {
  title: "Engineering Services | Paravix",
  description: "Full-stack development and engineering consulting.",
};

const SERVICES = [
  {
    title: "Full-Stack Development",
    description: "End-to-end development of web applications with focus on maintainability and performance. React, Next.js, Node.js, and modern tech stacks.",
  },
  {
    title: "Backend Architecture",
    description: "Design and implementation of robust backend systems, APIs, and database architectures that scale with your business needs.",
  },
  {
    title: "Engineering Consulting",
    description: "Strategic guidance on technical decisions, architecture reviews, and long-term technology roadmaps for sustainable growth.",
  },
  {
    title: "Code & System Reviews",
    description: "Comprehensive audits of existing codebases and systems to identify technical debt, security issues, and optimization opportunities.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Engineering Services
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Paravix offers focused engineering services for teams
              that value long-term quality over quick fixes.
            </p>
          </section>

          {/* Services List */}
          <section className="space-y-12">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-8 hover:border-indigo-300 hover:shadow-lg transition-all"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                >
                  Get in touch →
                </Link>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section className="mt-16 bg-indigo-50 rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to discuss your project?
            </h3>
            <p className="text-gray-700 mb-6">
              If you have a technical problem or system to improve, describe the problem clearly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
