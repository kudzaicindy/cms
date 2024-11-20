/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff8533',    // Orange
        secondary: '#ff9d5c',  // Lighter Orange
        dark: {
          primary: '#111827',   // Gray 900
          secondary: '#1F2937', // Gray 800
        },
        gray: {
          custom: '#4B5563',    // Gray 600
          light: '#F3F4F6',     // Gray 100
        }
      },
    },
  },
  plugins: [],
}
