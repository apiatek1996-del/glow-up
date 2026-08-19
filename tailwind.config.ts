import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D584C8", // Pink accent
          hover: "#C26FB5",
          light: "#FDF4FC",
        },
        indigoBrand: {
          DEFAULT: "#7C3AED",
          hover: "#6D28D9",
        },
        warmSun: {
          DEFAULT: "#FFFDF0",
          dark: "#FEF9C3",
        },
        warmOrange: {
          DEFAULT: "#E89D4F", // Warm orange
          light: "#FFF7ED",
          hover: "#D48639",
        },
        background: {
          DEFAULT: "#FFFDF5", // Warm cream instead of grey!
          dark: "#FFF7ED",
          light: "#FFFFFF",
        },
        slate: {
          900: "#1E293B", // Text
          800: "#334155",
          700: "#475569",
        }
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        heading: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
