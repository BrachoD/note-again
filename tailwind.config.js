import typography from "@tailwindcss/typography";
import lineClamp from "@tailwindcss/line-clamp";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-surface": "#1e1e2f",
        "dark-border": "#2e2e3e",
        "dark-text": "#e4e4e7",
        "dark-muted": "#a1a1aa",
        "dark-danger": "#b91c1c",
        "dark-dangerHover": "#991b1b",
        "dark-button": "#3b82f6",
        "dark-buttonHover": "#2563eb",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-out",
      },
    },
  },
  plugins: [typography, lineClamp],
};
