import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/Hero.png')",
      },
      colors: {
        primary: {
          100: "#FF4081",
          200: "#ff79b0",
          300: "#ffe4ff",
        },
        accent: {
          100: "#FFC107",
          200: "#916400",
        },
        text: {
          100: "#333333",
          200: "#5c5c5c",
        },
        bg: {
          100: "#F5F5F5",
          200: "#ebebeb",
          300: "#c2c2c2",
        },
      },
    },
  },
  plugins: [],
};
export default config;
