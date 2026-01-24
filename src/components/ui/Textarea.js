"use client";

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

/**
 * Textarea Component
 * @param {Object} props
 * @param {string} props.label - Textarea label
 * @param {string} props.value - Textarea value
 * @param {Function} props.onChange - Change handler
 * @param {string} props.error - Error message
 * @param {boolean} props.showCharCount - Show character count
 * @param {number} props.maxLength - Maximum character length
 * @param {boolean} props.autoResize - Enable auto-resize
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.id - Textarea ID
 * @param {string} props.name - Textarea name
 * @param {boolean} props.required - Required field
 * @param {number} props.rows - Initial number of rows
 * @param {string} props.className - Additional CSS classes
 */
const Textarea = ({
  label,
  value,
  onChange,
  error,
  showCharCount = false,
  maxLength,
  autoResize = false,
  placeholder,
  id,
  name,
  required = false,
  rows = 4,
  className = "",
  ...props
}) => {
  const textareaRef = useRef(null);
  const textareaId = id || name || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    if (autoResize && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value, autoResize]);

  const textareaClasses = `
    w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-purple-500/20
    resize-none
    ${error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-purple-500"}
    ${className}
  `;

  const currentLength = value?.length || 0;
  const showCount = showCharCount || maxLength;

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Textarea Field */}
      <textarea
        ref={textareaRef}
        id={textareaId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        maxLength={maxLength}
        className={textareaClasses}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        {...props}
      />

      {/* Character Count and Error Container */}
      <div className="flex justify-between items-start mt-1.5">
        {/* Error Message */}
        {error && (
          <p id={`${textareaId}-error`} className="text-sm text-red-500" role="alert">
            {error}
          </p>
        )}

        {/* Character Count */}
        {showCount && (
          <p
            className={`text-sm ml-auto ${
              maxLength && currentLength > maxLength * 0.9
                ? "text-red-500"
                : "text-gray-500"
            }`}
          >
            {currentLength}
            {maxLength && `/${maxLength}`}
          </p>
        )}
      </div>
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  showCharCount: PropTypes.bool,
  maxLength: PropTypes.number,
  autoResize: PropTypes.bool,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  className: PropTypes.string,
};

export default Textarea;
