// [LAYER: UI] Tailwind theme tokens for the LaunchHive presentation layer.
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hive: {
          charcoal: "#000000",
          emerald: "#10b981",
          mint: "#34d399",
          white: "#ffffff",
          slate: "#111827",
          forest: "#064e3b",
        },
      },
      boxShadow: {
        glow: "0 24px 80px rgba(16, 185, 129, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;