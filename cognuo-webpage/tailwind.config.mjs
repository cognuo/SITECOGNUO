/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0035B0',
        'primary-deep': '#0A2E7A',
        secondary: '#101010',
        navy: '#1E1D30',
        blush: '#F4F7FF',
        'off-white': '#FAFAFA',
      },
      fontFamily: {
        sans: ['Red Hat Display', 'Instrument Sans Fallback', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Red Hat Display', 'Instrument Sans Fallback', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
