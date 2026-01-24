"use client";

import PropTypes from "prop-types";

/**
 * Badge Component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Badge content
 * @param {string} props.color - 'blue' | 'purple' | 'pink' | 'teal' | 'gray'
 * @param {React.ReactNode} props.icon - Optional icon
 * @param {string} props.className - Additional CSS classes
 */
const Badge = ({ children, color = "blue", icon, className = "", ...props }) => {
  const baseStyles =
    "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-200";

  const colors = {
    blue: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    purple: "bg-purple-100 text-purple-700 hover:bg-purple-200",
    pink: "bg-pink-100 text-pink-700 hover:bg-pink-200",
    teal: "bg-teal-100 text-teal-700 hover:bg-teal-200",
    gray: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  const badgeClasses = `${baseStyles} ${colors[color]} ${className}`;

  return (
    <span className={badgeClasses} {...props}>
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["blue", "purple", "pink", "teal", "gray"]),
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default Badge;
