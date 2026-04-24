/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0035B0',
        secondary: '#17161B',
        'off-white': '#FAFAFA',
      },
      fontFamily: {
        sans: ['Instrument Sans Variable', 'Instrument Sans Fallback', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
