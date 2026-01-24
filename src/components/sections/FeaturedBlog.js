"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getFeaturedBlogPosts } from "@/data/blog";
import { Button } from "@/components/ui";
import { FaArrowRight, FaClock, FaTag } from "react-icons/fa";
import { ANIMATION_VARIANTS } from "@/lib/constants";

export default function FeaturedBlog() {
  const featuredPosts = getFeaturedBlogPosts().slice(0, 2);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Thoughts From Real Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Engineering insights, architecture decisions, and lessons learned
            from building production systems
          </p>
        </motion.div>

        {/* Featured Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="p-8">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                      <FaClock className="text-xs" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400"
                      >
                        <FaTag className="text-xs" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300">
                    Read Article
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/blog">
            <Button size="lg" variant="secondary">
              View All Articles
              <FaArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
