"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";

/**
 * Section - Reusable section wrapper component
 * 
 * @param {ReactNode} children - Section content
 * @param {string} id - Section ID for anchor links
 * @param {string} background - Background variant: 'default' | 'gradient' | 'glass'
 * @param {string} size - Container size: 'sm' | 'md' | 'lg' | 'xl' | 'full'
 * @param {string} className - Additional CSS classes
 * @param {boolean} animate - Enable entrance animations
 */
const Section = ({
  children,
  id,
  background = "default",
  size = "lg",
  className = "",
  animate = true,
}) => {
  const backgrounds = {
    default: "bg-transparent",
    gradient:
      "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50",
    glass:
      "glass",
  };

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const SectionWrapper = animate ? motion.section : "section";
  const sectionProps = animate
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        variants,
      }
    : {};

  return (
    <SectionWrapper
      id={id}
      className={`py-12 md:py-16 lg:py-20 ${backgrounds[background]} ${className}`}
      {...sectionProps}
    >
      <Container size={size}>{children}</Container>
    </SectionWrapper>
  );
};

export default Section;
