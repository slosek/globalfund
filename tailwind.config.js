/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Outfit"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        ink: { DEFAULT: '#0d0d0d', light: '#2a2a2a', muted: '#555' },
        stone: '#777',
        silver: '#bbb',
        cloud: '#f3f3f3',
        snow: '#fafafa',
        accent: { DEFAULT: '#1a3d5c', light: '#2a6496', dark: '#0f2a40' },
        warm: { DEFAULT: '#c9a84c', light: '#e8d48b' },
      },
    },
  },
  plugins: [],
};
