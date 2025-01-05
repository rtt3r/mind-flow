import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  prefix: '',
  theme: {
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
        'linear-1':
          'linear-gradient(hsl(var(--linear-1-from)), hsl(var(--linear-1-to)))',
        'linear-2':
          'linear-gradient(hsl(var(--linear-2-from)), hsl(var(--linear-2-to)))',
        'linear-3':
          'linear-gradient(hsl(var(--linear-3-from)), hsl(var(--linear-3-to)))',
        'linear-4':
          'linear-gradient(hsl(var(--linear-4-from)), hsl(var(--linear-4-to)))',
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
          ring: 'hsl(var(--sidebar-ring))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
