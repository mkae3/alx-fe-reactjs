/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",         // ضروري للـ checker
    "./src/**/*.{js,jsx,ts,tsx}", // جميع ملفات React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


