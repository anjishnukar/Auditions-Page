/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
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
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
          
        },
      },
      animation: {
        "wiggle": "wiggle 0.5s linear infinite",
        blink: 'blink 1s step-end infinite',
        wave: 'wave 2s infinite',
        blob: "blob 7s infinite",
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
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

