/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1280px',
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
      },
    },
    extend: {
      colors: {
        'primary': '#5669FF',
      },
    },
  },
  plugins: [],
}
