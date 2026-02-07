import Link from "next/link";

export const metadata = {
  title: "About Paravix & Umesh Gajjar",
  description: "Learn about Paravix and its founder Umesh Gajjar, a senior full-stack engineer focused on long-term software quality.",
};

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* About the Founder */}
          <section className="mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About Umesh Gajjar
            </h1>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                I&apos;m Umesh Gajjar, a full-stack developer with over seven years of experience
                building and maintaining web applications, backend systems, and internal tools.
              </p>
              <p>
                My focus has shifted from delivering features
                to taking responsibility for how systems behave over time.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/paravix"
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                Learn about Paravix →
              </Link>
              <Link
                href="/contact"
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                Get in touch →
              </Link>
            </div>
          </section>

          {/* Why Paravix Exists */}
          <section className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Paravix Was Created
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-6">
              <p>
                Many long-term software problems are introduced early.
                Paravix exists to slow that process down
                and design systems that can adapt without collapsing.
              </p>
            </div>
            <Link
              href="/services"
              className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
            >
              View our services →
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
