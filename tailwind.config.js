/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"General Sans"', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: { DEFAULT: '#1a1a1a', light: '#333', muted: '#666', faint: '#999' },
        parchment: '#faf8f5',
        linen: '#f4f1ec',
        fog: '#e8e4de',
        brass: { DEFAULT: '#b08d57', light: '#c9a84c', dark: '#8a6d3b', muted: '#d4c4a0' },
        navy: { DEFAULT: '#1c2b3a', light: '#2d4a5e', deep: '#0f1922' },
      },
      letterSpacing: {
        'editorial': '0.04em',
        'mega': '0.15em',
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.015em' }],
      },
    },
  },
  plugins: [],
};
