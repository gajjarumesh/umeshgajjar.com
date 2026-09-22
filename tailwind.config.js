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
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      colors: {
        sapphire: {
          DEFAULT: "#0F52BA",
          50:  "#eef4ff",
          100: "#d9e8ff",
          200: "#bcd4ff",
          300: "#8db8ff",
          400: "#5a91f8",
          500: "#3470f0",
          600: "#1f52e6",
          700: "#0F52BA",
          800: "#1340a0",
          900: "#153880",
          muted: "rgba(15,82,186,0.08)",
          light: "rgba(15,82,186,0.12)",
        },
        page: {
          bg:    "#f2f5fb",
          card:  "#ffffff",
          border:"#e4eaf4",
          hover: "#edf1fa",
        },
        ink: {
          DEFAULT: "#1a1f36",
          muted:   "#5a6480",
          faint:   "#8892a4",
          line:    "#dde3ef",
        },
      },
    },
  },
  plugins: [],
};
