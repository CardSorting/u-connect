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
          charcoal: "#111827",
          gold: "#F6B73C",
          amber: "#FFDD8A",
          cream: "#FFF8E7",
          slate: "#293241",
          honey: "#FFE2A8",
        },
      },
      boxShadow: {
        glow: "0 24px 80px rgba(246, 183, 60, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;