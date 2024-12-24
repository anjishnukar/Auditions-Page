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
        }
      },
      animation: {
        "wiggle": "wiggle 0.5s linear infinite"
      },

      fontFamily: {
        agudisplay: ["Agu Display", 'serif'],
        shadows: ["Shadows Into Light", 'serif'],
        anton: ["Anton", 'serif'],
        raleway: ["Raleway", 'serif']
      }

    },
  },
  plugins: [],
}