import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0D0D0D",
        charcoal: "#141414",
        gold: "#C5A059",
        bronze: "#B07D46",
        "light-gray": "#A3A3A3",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.2em",
        wide: "0.35em",
      },
      transitionDuration: {
        luxury: "600ms",
      },
    },
  },
};

export default config;
