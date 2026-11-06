import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#070709",
        surface: "#0e0e12",
        surfaceHover: "#13131a",
        borderSubtle: "rgba(255, 255, 255, 0.08)",
        borderHighlight: "rgba(255, 255, 255, 0.16)",
        emeraldAccent: "#10b981",
        emeraldHover: "#34d399",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.035em",
        tight: "-0.02em",
      },
      boxShadow: {
        "glow-card": "0 12px 35px -10px rgba(0, 0, 0, 0.8), 0 0 25px -5px rgba(16, 185, 129, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
