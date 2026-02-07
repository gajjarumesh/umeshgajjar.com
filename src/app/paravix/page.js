import Link from "next/link";

export const metadata = {
  title: "Paravix | An Engineering-First Brand",
  description: "Paravix is an engineering-focused brand dedicated to clarity and maintainability.",
};

// Placeholder for engineering principles
const ENGINEERING_PRINCIPLES = [
  {
    title: "Simplicity before abstraction",
    description: "Start simple, add complexity only when proven necessary",
  },
  {
    title: "Clarity over cleverness",
    description: "Code that's easy to understand beats code that's impressive",
  },
  {
    title: "Security by design",
    description: "Build security into the foundation, not as an afterthought",
  },
  {
    title: "Decisions documented",
    description: "Record the why, not just the what",
  },
  {
    title: "Systems built for humans",
    description: "Code is read far more than it's written",
  },
];

export default function Paravix() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Brand Identity */}
          <section className="mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8">
              Paravix | An Engineering-First Brand
            </h1>
            <div className="text-lg text-secondary/80 leading-relaxed space-y-4 mb-8">
              <p>
                Paravix is not a traditional agency.
                It is an engineering brand focused on clarity,
                responsibility, and long-term thinking.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/services"
                className="text-primary font-medium hover:text-primary-600 transition-colors"
              >
                View services →
              </Link>
              <Link
                href="/contact"
                className="text-primary font-medium hover:text-primary-600 transition-colors"
              >
                Get in touch →
              </Link>
            </div>
          </section>

          {/* Engineering Principles */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10">
              Engineering Principles
            </h2>
            <div className="space-y-6">
              {ENGINEERING_PRINCIPLES.map((principle, index) => (
                <div
                  key={index}
                  className="border-l-4 border-primary bg-gray-50 p-6 rounded-r-lg"
                >
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-secondary/80">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
              <p className="text-secondary/80 mb-4">
                These principles guide how we build software systems that last.
              </p>
              <Link
                href="/contact"
                className="inline-block text-primary font-medium hover:text-primary-600 transition-colors"
              >
                Discuss your project →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
