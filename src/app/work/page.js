import Link from "next/link";
import { getCollection, COLLECTIONS } from "@/lib/db";

export const metadata = {
  title: "Engineering Case Studies | Paravix",
  description: "Real-world engineering case studies and system decisions.",
};

async function getCaseStudies() {
  try {
    const caseStudies = await getCollection(COLLECTIONS.CASE_STUDIES);
    const studies = await caseStudies
      .find({ published: true })
      .sort({ createdAt: -1 })
      .toArray();
    
    return studies.map(study => ({ ...study, _id: study._id.toString() }));
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return [];
  }
}

export default async function Work() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Engineering Case Studies
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Real-world engineering case studies and system decisions.
          </p>

          {caseStudies.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600 text-lg mb-4">
                Case studies are being prepared.
              </p>
              <Link
                href="/blog"
                className="inline-block text-indigo-600 font-medium hover:text-indigo-700"
              >
                Read the engineering blog →
              </Link>
            </div>
          ) : (
            <div className="space-y-12">
              {caseStudies.map((study) => (
                <article
                  key={study._id}
                  className="border border-gray-200 rounded-lg p-8 hover:border-indigo-300 hover:shadow-lg transition-all"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {study.title}
                  </h2>

                  {/* Problem */}
                  {study.problem && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Problem
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>
                  )}

                  {/* Constraints */}
                  {study.constraints && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Constraints
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {study.constraints}
                      </p>
                    </div>
                  )}

                  {/* Decisions */}
                  {study.decisions && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Decisions
                      </h3>
                      <div className="text-gray-700 leading-relaxed">
                        {typeof study.decisions === 'string' ? (
                          <p>{study.decisions}</p>
                        ) : Array.isArray(study.decisions) ? (
                          <ul className="list-disc list-inside space-y-2">
                            {study.decisions.map((decision, idx) => (
                              <li key={idx}>{decision}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  )}

                  {/* Outcome */}
                  {study.outcome && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Outcome
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>
                  )}

                  {/* Related Links */}
                  <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-200">
                    {study.relatedBlogSlugs && study.relatedBlogSlugs.length > 0 ? (
                      study.relatedBlogSlugs.map((slug) => (
                        <Link
                          key={slug}
                          href={`/blog/${slug}`}
                          className="text-indigo-600 font-medium hover:text-indigo-700"
                        >
                          Related blog post →
                        </Link>
                      ))
                    ) : (
                      <Link
                        href="/blog"
                        className="text-indigo-600 font-medium hover:text-indigo-700"
                      >
                        Read related insights →
                      </Link>
                    )}
                    <Link
                      href="/services"
                      className="text-indigo-600 font-medium hover:text-indigo-700"
                    >
                      View services →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <section className="mt-16 bg-indigo-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a similar challenge?
            </h3>
            <p className="text-gray-700 mb-6">
              Discuss your engineering problem or system design needs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Get in touch
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
