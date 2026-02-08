/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#648bb5',
          500: '#3d5a80',
          600: '#2c4866',
          700: '#1e3a52',
          800: '#102a3e',
          900: '#0a1929',
          DEFAULT: '#3d5a80',
        },
        secondary: {
          50: '#f7fcfd',
          100: '#e1f5f8',
          200: '#c9eef3',
          300: '#b1e4ee',
          400: '#98c1d9',
          500: '#7fb3d3',
          600: '#5a9fc7',
          700: '#4a8bb8',
          800: '#3a78a5',
          900: '#2a5f87',
          DEFAULT: '#98c1d9',
        },
        background: '#e0fbfc',
        pattern: '#ee6c4d',
        fontColor: '#293241',
      },
    },
  },
  plugins: [],
}