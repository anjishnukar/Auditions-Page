/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		keyframes: {
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
  			wiggle: {
  				'0%, 100%': {
  					transform: 'rotate(-0.5deg)'
  				},
  				'50%': {
  					transform: 'rotate(0.5deg)'
  				}
  			},
  			blink: {
  				'0%, 50%': {
  					opacity: 1
  				},
  				'50.1%, 100%': {
  					opacity: 0
  				}
  			},
  			wave: {
  				'0%, 100%': {
  					transform: 'rotate(0deg)'
  				},
  				'50%': {
  					transform: 'rotate(15deg)'
  				}
  			}
  		},
  		animation: {
  			wiggle: 'wiggle 0.5s linear infinite',
  			blink: 'blink 1s step-end infinite',
  			wave: 'wave 2s infinite',
			blob: "blob 7s infinite",
  		},
  		fontFamily: {
  			agudisplay: [
  				'Agu Display',
  				'serif'
  			],
  			shadows: [
  				'Shadows Into Light',
  				'serif'
  			],
  			anton: [
  				'Anton',
  				'serif'
  			],
  			raleway: [
  				'Raleway',
  				'serif'
  			],
			poppins: [
				'Poppins',
				'serif'
			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

