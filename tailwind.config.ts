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
          DEFAULT: "#E89D4F", // Golden-Orange from insta tile
          hover: "#D48639",
          light: "#F7B46E",
        },
        background: {
          DEFAULT: "#FFF8EA", // Warm light cream
          dark: "#F0E7D8",
          light: "#FFFFFF",
        },
        brand: {
          pink: "#D584C8", // Soft magenta-pink
          green: "#06B050", // Vibrant green shirt
        },
        slate: {
          900: "#27272A", // Slightly warmer dark
          800: "#3F3F46",
          700: "#52525B",
        }
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        heading: ["var(--font-lora)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
