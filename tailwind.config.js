/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-bebas-neue)'],
      },
      colors: {
        primary: {
          dark: '#070332',
          light: '#F8FCCD',
        },
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
