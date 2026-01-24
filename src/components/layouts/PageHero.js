"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronRight, FaHome } from "react-icons/fa";

/**
 * PageHero - Reusable hero component for internal pages
 * 
 * @param {string} title - The main page title
 * @param {string} description - Optional page description
 * @param {Array} breadcrumbs - Array of breadcrumb items [{ label, href }]
 * @param {string} variant - Background variant: 'gradient' | 'default'
 */
const PageHero = ({
  title,
  description,
  breadcrumbs = [],
  variant = "gradient",
}) => {
  const bgClasses = {
    gradient:
      "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white",
    default: "bg-slate-100 text-gray-900",
  };

  return (
    <section
      className={`relative py-20 md:py-28 overflow-hidden ${bgClasses[variant]}`}
    >
      {/* Animated Background Elements */}
      {variant === "gradient" && (
        <>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>
        </>
      )}

      <div className="container mx-auto px-4 xl:px-0 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link
                  href="/"
                  className={`flex items-center gap-1 ${
                    variant === "gradient"
                      ? "text-white/80 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors`}
                >
                  <FaHome />
                  <span>Home</span>
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaChevronRight
                    className={`text-xs ${
                      variant === "gradient" ? "text-white/50" : "text-gray-400"
                    }`}
                  />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className={`${
                        variant === "gradient"
                          ? "text-white/80 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      } transition-colors`}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      className={
                        variant === "gradient" ? "text-white" : "text-gray-900"
                      }
                    >
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl"
        >
          {title}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg md:text-xl max-w-2xl leading-relaxed ${
              variant === "gradient" ? "text-white/90" : "text-gray-600"
            }`}
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Decorative Wave (for gradient variant) */}
      {variant === "gradient" && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="currentColor"
              className="text-white"
            />
          </svg>
        </div>
      )}
    </section>
  );
};

export default PageHero;
