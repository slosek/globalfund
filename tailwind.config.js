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
          DEFAULT: "#141412",
          soft: "#292925",
          muted: "#626158",
          faint: "#918f83",
        },
        stone: {
          50: "#fbf8f0",
          100: "#f3ede1",
          200: "#e5dccd",
          300: "#cfc3b1",
        },
        gold: "#e7bd20",
        coral: "#ef5d4c",
        violet: "#7654b7",
        moss: "#3f5548",
      },
      boxShadow: {
        soft: "0 28px 90px rgba(20, 20, 18, 0.12)",
        float: "0 18px 55px rgba(20, 20, 18, 0.09)",
      },
      fontSize: {
        hero: ["clamp(3.75rem, 9.7vw, 9.6rem)", { lineHeight: "0.79", letterSpacing: "-0.06em" }],
        section: ["clamp(2.9rem, 6.2vw, 5.8rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        statement: ["clamp(3.35rem, 6.1vw, 6.75rem)", { lineHeight: "0.9", letterSpacing: "-0.045em" }],
      },
    },
  },
  plugins: [],
};
