"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui";
import { FaClock, FaCalendar, FaUser, FaArrowRight } from "react-icons/fa";

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300"
    >
      {/* Featured Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20">
        {/* Placeholder for image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <span className="text-4xl">📝</span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-blue-600 text-white border-0">
            {post.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <FaCalendar className="text-xs" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <FaClock className="text-xs" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          {/* Author */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
              {post.author.charAt(0)}
            </div>
            <span className="text-sm text-gray-600">
              {post.author}
            </span>
          </div>

          {/* Read More Link */}
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
          >
            Read More
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
