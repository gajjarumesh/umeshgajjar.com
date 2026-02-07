"use client";

import { useState } from "react";
import PropTypes from "prop-types";

/**
 * Input Component
 * @param {Object} props
 * @param {string} props.label - Input label
 * @param {string} props.type - Input type
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change handler
 * @param {string} props.error - Error message
 * @param {boolean} props.floatingLabel - Enable floating label
 * @param {React.ReactNode} props.leftIcon - Icon on the left
 * @param {React.ReactNode} props.rightIcon - Icon on the right
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.id - Input ID
 * @param {string} props.name - Input name
 * @param {boolean} props.required - Required field
 * @param {string} props.className - Additional CSS classes
 */
const Input = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  floatingLabel = false,
  leftIcon,
  rightIcon,
  placeholder,
  id,
  name,
  required = false,
  className = "",
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const showFloatingLabel = floatingLabel && (isFocused || hasValue);

  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;

  const inputClasses = `
    w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-blue-500/20
    ${error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}
    ${leftIcon ? "pl-10" : ""}
    ${rightIcon ? "pr-10" : ""}
    ${floatingLabel ? "pt-6 pb-2" : ""}
    ${className}
  `;

  return (
    <div className="w-full">
      <div className="relative">
        {/* Regular Label */}
        {label && !floatingLabel && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Floating Label */}
        {label && floatingLabel && (
          <label
            htmlFor={inputId}
            className={`
              absolute left-4 transition-all duration-200 pointer-events-none
              ${
                showFloatingLabel
                  ? "text-xs top-2 text-primary"
                  : "text-base top-3 text-gray-500"
              }
            `}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Left Icon */}
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}

        {/* Input Field */}
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={floatingLabel ? "" : placeholder}
          required={required}
          className={inputClasses}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />

        {/* Right Icon */}
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p id={`${inputId}-error`} className="mt-1.5 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  floatingLabel: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
