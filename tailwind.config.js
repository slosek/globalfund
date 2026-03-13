/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: { DEFAULT: '#0f0f0f', light: '#2a2a2a', muted: '#666', faint: '#999' },
        gray: { 50: '#f9f9f9', 100: '#f0f0f0', 200: '#e4e4e4', 300: '#d1d1d1', 400: '#a0a0a0' },
        electric: { DEFAULT: '#e63c2f', light: '#ef5a3c', dark: '#c22b1f', glow: '#ff7a5c' },
        amber: { DEFAULT: '#f5a623', light: '#fbc24e', dark: '#d98e0a' },
        emerald: { DEFAULT: '#10b981', light: '#34d399' },
        violet: { DEFAULT: '#7c3aed', light: '#a78bfa' },
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 9vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'section': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
      },
    },
  },
  plugins: [],
};
