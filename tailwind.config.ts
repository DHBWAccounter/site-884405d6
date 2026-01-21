import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3D9991",
          light: "#4DA8A0",
          dark: "#2D7A73",
        },
        dark: {
          DEFAULT: "#1F1F1F",
          light: "#2F2F2F",
        },
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
      fontFamily: {
        sans: ["var(--font-proxima-nova)", "system-ui", "sans-serif"],
        serif: ["var(--font-adobe-garamond)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
