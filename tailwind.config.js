/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6', // light navy blue
          dark: '#1e3a8a', // dark navy blue
        },
        secondary: {
          light: '#10b981', // light green
          dark: '#047857', // dark green
        },
      },
    },
  },
  plugins: [],
}