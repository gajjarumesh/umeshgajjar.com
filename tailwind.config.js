/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "Outfit", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f4f3ff",
          100: "#ebe9fe",
          200: "#d9d6fe",
          300: "#bfb8fd",
          400: "#9d90fa",
          500: "#7366f6",
          600: "#5d4eed",
          700: "#4c3fd9",
          800: "#3d33b5",
          900: "#1c0770",
          DEFAULT: "#1c0770",
        },
        secondary: {
          50: "#f1f1ff",
          100: "#e6e5ff",
          200: "#d0cfff",
          300: "#b4b2ff",
          400: "#938fff",
          500: "#746eff",
          600: "#5c4eff",
          700: "#4a3ceb",
          800: "#3d32c7",
          900: "#261cc1",
          DEFAULT: "#261cc1",
        },
        background: "#e0fbfc",
        pattern: "#BF4646",
        fontColor: "#293241",
      },
    },
  },
  plugins: [],
};