import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: "var(--font-urbanist)",
        yellowTail: "var(--font-yellowTail)",
        sombra: "var(--font-sombra)",
        poppins: "var(--font-poppins)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        red: {
          "primary-1": "#CD1D15",
          "primary-2": "#C20006",
          "primary-3": "#6A0F0C",
          "light-1": "#FCD6D6",
          "light-2": "#F8A3A3",
          "light-3": "#B38E88",
        },
        white: {
          50: "#FEF3F2",
          100: "#FAFAFA",
          200: "#F6E2E0",
          body: "#FAF9F6",
        },
        black: {
          100: "#333333",
          200: "#828282",
          300: "#4F4F4F",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
