import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#4f5e2d",
          "green-dark": "#3e4925",
          "green-deep": "#2c3519",
          cream: "#f6f0e6",
          paper: "#fbf8f2",
          paperDark: "#f4ede1",
          gold: "#b49355",
          "gold-light": "#cbb47e",
          text: "#2f2a24",
          muted: "#6b655d",
          line: "#ddd2c0",
          "line-dark": "#c8bca7",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
