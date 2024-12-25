/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-0.5deg)'
          },
          '50%': {
            transform: 'rotate(0.5deg)'
          }
        },
        blink: {
          '0%, 50%': { opacity: 1 },
          '50.1%, 100%': { opacity: 0 },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
      },
      animation: {
        "wiggle": "wiggle 0.5s linear infinite",
        blink: 'blink 1s step-end infinite',
        wave: 'wave 2s infinite',
      },


      fontFamily: {
        agudisplay: ["Agu Display", 'serif'],
        shadows: ["Shadows Into Light", 'serif'],
        anton: ["Anton", 'serif'],
        raleway: ["Raleway", 'serif']
      },

    },
  },
  plugins: [],
}

