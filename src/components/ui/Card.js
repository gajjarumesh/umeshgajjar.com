"use client";

import { motion } from "framer-motion";
import PropTypes from "prop-types";

/**
 * Card Component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {boolean} props.glassmorphism - Enable glass morphism effect
 * @param {string} props.padding - 'sm' | 'md' | 'lg' | 'none'
 * @param {boolean} props.gradientBorder - Enable gradient border
 * @param {boolean} props.hover - Enable hover animation
 * @param {string} props.className - Additional CSS classes
 */
const Card = ({
  children,
  glassmorphism = false,
  padding = "md",
  gradientBorder = false,
  hover = true,
  className = "",
  ...props
}) => {
  const baseStyles = "rounded-xl transition-all duration-300";

  const glassStyles = glassmorphism
    ? "glass"
    : "bg-white border border-gray-200 shadow-md";

  const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const cardClasses = `${baseStyles} ${glassStyles} ${paddingStyles[padding]} ${
    gradientBorder ? "gradient-border" : ""
  } ${className}`;

  const hoverAnimation = hover
    ? {
        scale: 1.02,
        boxShadow: "var(--shadow-lg)",
      }
    : {};

  return (
    <motion.div
      className={cardClasses}
      whileHover={hoverAnimation}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  glassmorphism: PropTypes.bool,
  padding: PropTypes.oneOf(["none", "sm", "md", "lg"]),
  gradientBorder: PropTypes.bool,
  hover: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;
