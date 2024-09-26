import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    colors: {
      white: "#fff",
      black: "#000",
      text: {
        primary: "#ffff",
        secondary: "#D2D2D4",
        tertiary: "#8E9094",
        ["light-primary"]: "#1B232A",
        ["light-secondary"]: "#3C454E",
      },
      primary: {
        red: "#E13951",
        green: "#56C1A1",
        blue: "#316484",
        purple: "#622E64",
        yellow: "#DA9347",
      },
      background: {
        primary: "#1B232A",
      },
      gradient: {
        green: {
          from: "#58C1A1",
          to: "#316484",
        },
        red: {
          from: "#E13951",
          to: "#622E64",
        },
        yellow: {
          from: "#D53E56",
          to: "#D6924D",
        },
      },
    },
    fontSize: {
      80: ["5rem", { lineHeight: "1.3" }],
      64: ["4rem", { lineHeight: "1.3" }],
      52: ["3.25rem", { lineHeight: "1.3" }],
      48: ["3rem", { lineHeight: "1.3" }],
      44: ["2.75rem", { lineHeight: "1.3" }],
      40: ["2.5rem", { lineHeight: "1.3" }],
      38: ["2.375rem", { lineHeight: "1.3" }],
      32: ["2rem", { lineHeight: "1.3" }],
      28: ["1.75rem", { lineHeight: "1.4" }],
      24: ["1.5rem", { lineHeight: "1.4" }],
      20: ["1.25rem", { lineHeight: "1.4" }],
      18: ["1.125rem", { lineHeight: "1.4" }],
      16: ["1rem", { lineHeight: "1.4" }],
      14: ["0.875rem", { lineHeight: "1.4" }],
    },
    extend: {
      keyframes: {
        "smooth-opacity": {
          "0%": { opacity: "0.2" },
          "100%": { opacity: "1" },
        },
        "open-from-right": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "smooth-appear": "smooth-opacity 200ms ease-in-out",
        "right-open": "open-from-right 0.5s ease-in-out",
        rotate: "rotate 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
