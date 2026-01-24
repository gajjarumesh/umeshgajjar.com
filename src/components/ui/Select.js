"use client";

import PropTypes from "prop-types";

/**
 * Select Component
 * @param {Object} props
 * @param {string} props.label - Select label
 * @param {string} props.value - Selected value
 * @param {Function} props.onChange - Change handler
 * @param {Array} props.options - Array of options [{value, label}]
 * @param {string} props.error - Error message
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.id - Select ID
 * @param {string} props.name - Select name
 * @param {boolean} props.required - Required field
 * @param {string} props.className - Additional CSS classes
 */
const Select = ({
  label,
  value,
  onChange,
  options = [],
  error,
  placeholder = "Select an option",
  id,
  name,
  required = false,
  className = "",
  ...props
}) => {
  const selectId = id || name || `select-${Math.random().toString(36).substr(2, 9)}`;

  const selectClasses = `
    w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-blue-500/20
    bg-white cursor-pointer appearance-none
    ${error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}
    ${!value ? "text-gray-500" : "text-gray-900"}
    ${className}
  `;

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Select Field */}
      <div className="relative">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={selectClasses}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${selectId}-error` : undefined}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom Dropdown Arrow */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p id={`${selectId}-error`} className="mt-1.5 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default Select;
