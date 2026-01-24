"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PageHero, Section, Container } from "@/components/layouts";
import { Badge } from "@/components/ui";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import {
  FaCalendar,
  FaClock,
  FaUser,
  FaTag,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaLink,
} from "react-icons/fa";

export default function BlogPostClient({ post, relatedPosts }) {
  const shareUrl = `https://umeshgajjar.com/blog/${post.slug}`;
  const shareTitle = post.title;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: null },
        ]}
      />

      {/* Article Content */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Post Metadata */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeIn}
              className="flex flex-wrap items-center gap-6 mb-8 text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <FaUser />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <span>{post.readTime}</span>
              </div>
              <Badge variant="primary">{post.category}</Badge>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeIn}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Article Content */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeIn}
              className="prose prose-lg dark:prose-invert max-w-none mb-12"
              style={{
                "--tw-prose-body": "rgb(55 65 81)",
                "--tw-prose-headings": "rgb(17 24 39)",
                "--tw-prose-links": "rgb(37 99 235)",
                "--tw-prose-bold": "rgb(17 24 39)",
                "--tw-prose-code": "rgb(17 24 39)",
                "--tw-prose-pre-bg": "rgb(243 244 246)",
              }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="blog-content"
              />
            </motion.article>

            {/* Tags */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeIn}
              className="mb-8"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <FaTag className="text-gray-600 dark:text-gray-400" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Share Buttons */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeIn}
              className="py-8 border-y border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Share this article
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-colors"
                >
                  <FaTwitter />
                  <span>Twitter</span>
                </a>
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#4267B2] text-white rounded-lg hover:bg-[#365899] transition-colors"
                >
                  <FaFacebook />
                  <span>Facebook</span>
                </a>
                <a
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006399] transition-colors"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <FaLink />
                  <span>Copy Link</span>
                </button>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
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
                Related Articles
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                More insights and tips from the same category
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Newsletter CTA */}
      <Section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want More Content Like This?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Subscribe to my newsletter for weekly insights on web development, best practices, and industry trends.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
              <Newsletter variant="inline" />
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Back to Blog CTA */}
      <Section className="bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
            >
              ← Back to All Articles
            </Link>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
