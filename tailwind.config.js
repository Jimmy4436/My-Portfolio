/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A202C',     // Dark Blue
        secondary: '#2D3748',   // Darker Blue
        accent: '#F6AD55',      // Orange Accent
        background: '#EDF2F7',  // Light Gray Background
        text: '#2D3748',        // Dark Text
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

