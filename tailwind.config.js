const { preinitModule } = require('react-dom');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  prefix: '',
  theme: {
  	fontFamily: {
  		sans: [
  			'Cairo',
                ...defaultTheme.fontFamily.sans
            ],
  		serif: [
                ...defaultTheme.fontFamily.serif
            ]
  	},
  	extend: {
  		colors: {
  			blue: 'hsl(var(--blue))',
  			black: 'hsl(var(--black))',
  			yellow: 'hsl(var(--yellow))',
  			orange: 'hsl(var(--orange))',
  			green: 'hsl(var(--green))',
  			red: 'hsl(var(--red))',
  			white: 'hsl(var(--white))',
  			'gray-1': 'hsl(var(--gray-1))',
  			'gray-2': 'hsl(var(--gray-2))',
  			'gray-3': 'hsl(var(--gray-3))',
  			'gray-4': 'hsl(var(--gray-4))',
  			cyan: 'hsl(var(--cyan))',
  			'dark-background': 'hsl(var(--dark-background))',
  			'dark-1': 'hsl(var(--dark-1))',
  			'dark-2': 'hsl(var(--dark-2))',
  			'linear-1': 'linear-gradient(hsl(var(--linear-1-from)), hsl(var(--linear-1-to)))',
  			'linear-2': 'linear-gradient(hsl(var(--linear-2-from)), hsl(var(--linear-2-to)))',
  			'linear-3': 'linear-gradient(hsl(var(--linear-3-from)), hsl(var(--linear-3-to)))',
  			'linear-4': 'linear-gradient(hsl(var(--linear-4-from)), hsl(var(--linear-4-to)))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')],
};
