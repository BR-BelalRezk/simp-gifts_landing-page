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
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        red: {
          primary: "#CD1D15",
          "light-1": "#FCD6D6",
          "light-2": "#F8A3A3",
        },
        white: {
          100: "#FAFAFA",
          body: "#FAF9F6",
        },
        black: {
          100: "#333333",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
