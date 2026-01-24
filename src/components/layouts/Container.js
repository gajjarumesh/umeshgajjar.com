import React from "react";

/**
 * Container - Responsive container component with max-width variants
 * 
 * @param {ReactNode} children - Container content
 * @param {string} size - Max-width variant: 'sm' | 'md' | 'lg' | 'xl' | 'full'
 * @param {string} className - Additional CSS classes
 */
const Container = ({ children, size = "lg", className = "" }) => {
  const sizes = {
    sm: "max-w-3xl",     // ~768px
    md: "max-w-5xl",     // ~1024px
    lg: "max-w-7xl",     // ~1280px
    xl: "max-w-[1400px]", // ~1400px
    full: "max-w-full",
  };

  return (
    <div
      className={`${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
