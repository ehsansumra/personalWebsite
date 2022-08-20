/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'false',

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'navWidth': '1000px',
        'boxWidth': '460px'
      },
      dropShadow: {
        'dropViolet': '1px 1px 1px rgba(139, 92, 246, 1)',
        'dropRed': '1px 1px 1px rgba(239, 68, 68, 1)',
        'dropGreen': '1px 1px 1px rgba(34, 197, 94, 1)',
      }

    },
  },
  plugins: [],
}
