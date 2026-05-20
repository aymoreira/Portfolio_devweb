/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          high: '#25282B',
          medium: '#828282',
          low: '#9A9FA8',
        },
        primary: '#FFFFFF',
        background: '#F9FAFF',
        line: '#25282B',
        yellow: '#FDC435',

      },
      fontFamily: {

        comfortaa: ["Comfortaa", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}