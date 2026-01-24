"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { testimonials } from "@/data/testimonials";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-8 text-6xl text-blue-500/20 dark:text-blue-400/20">
            <FaQuoteLeft />
          </div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xl" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 text-center leading-relaxed italic">
              &ldquo;{currentTestimonial.text}&rdquo;
            </p>

            {/* Client Info */}
            <div className="flex flex-col items-center">
              {/* Avatar Placeholder */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
                {currentTestimonial.name.charAt(0)}
              </div>

              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                {currentTestimonial.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {currentTestimonial.role}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                {currentTestimonial.company}
              </p>
              {currentTestimonial.project && (
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                  Project: {currentTestimonial.project}
                </p>
              )}
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-gray-700 dark:text-gray-300" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 dark:bg-blue-400 w-8"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
