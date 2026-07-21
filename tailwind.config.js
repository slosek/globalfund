/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#171715",
          soft: "#30302c",
          muted: "#66665f",
          faint: "#94948a",
        },
        stone: {
          50: "#faf9f5",
          100: "#f3f0e9",
          200: "#e4dfd4",
          300: "#d0c8b9",
        },
        gold: "#e9b83f",
        coral: "#e86a4f",
        violet: "#8a6fd1",
        moss: "#44584a",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(23, 23, 21, 0.10)",
      },
      fontSize: {
        hero: ["clamp(4rem, 9vw, 8.75rem)", { lineHeight: "0.84", letterSpacing: "-0.055em" }],
        section: ["clamp(2.8rem, 6vw, 5.4rem)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
      },
    },
  },
  plugins: [],
};
