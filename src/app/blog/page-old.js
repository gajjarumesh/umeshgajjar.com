"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero, Section, Container } from "@/components/layouts";
import BlogCard from "@/components/BlogCard";
import { blogPosts, getAllCategories } from "@/data/blog";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { FaFilter, FaRss } from "react-icons/fa";

export default function BlogPage() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...getAllCategories()];

  // Filter blog posts
  const filteredPosts =
    filter === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === filter);

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Blog"
        description="Insights, tutorials, and thoughts on web development, best practices, and technology trends."
        breadcrumbs={[{ label: "Blog", href: null }]}
      />

      {/* Blog Section */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          {/* Filter Buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
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
                {category === "all" ? "All Posts" : category}
              </button>
            ))}
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-center text-gray-600 dark:text-gray-400"
          >
            Showing {filteredPosts.length} of {blogPosts.length} posts
          </motion.div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                No posts found in this category
              </p>
              <button
                onClick={() => setFilter("all")}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                View All Posts
              </button>
            </motion.div>
          )}

          {/* Newsletter Subscription */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="mt-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 md:p-12 rounded-2xl text-center"
          >
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                <FaRss className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Subscribe to the Newsletter
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Get the latest articles, tutorials, and insights delivered to your
                inbox. No spam, unsubscribe anytime.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Topics Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Popular Topics
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React.js",
                "Next.js",
                "Laravel",
                "Node.js",
                "SaaS Development",
                "API Development",
                "DevOps",
                "Performance",
                "Security",
                "Best Practices",
                "Architecture",
                "TypeScript",
              ].map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
