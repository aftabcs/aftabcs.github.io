import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        accent: {
          DEFAULT: "#E11D48",
          subtle: "rgba(225,29,72,0.12)",
          glow: "rgba(225,29,72,0.25)",
        },
        surface: {
          DEFAULT: "#111111",
          raised: "#1C1C1E",
        },
      },
      borderRadius: {
        xl: "24px",
        "2xl": "32px",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 900px 700px at 110% 110%, rgba(225,29,72,0.07), transparent)",
      },
      boxShadow: {
        accent:
          "0 0 0 1px rgba(225,29,72,0.4), 0 8px 32px rgba(225,29,72,0.2)",
      },
      animation: {
        "scroll-bounce": "scrollBounce 2s ease-in-out infinite",
      },
      keyframes: {
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
    },
  },
} satisfies Config;
