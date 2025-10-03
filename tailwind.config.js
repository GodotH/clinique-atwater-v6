/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Premium color palette
        'brand-teal': {
          DEFAULT: '#0BA9B5',
          600: '#0BA9B5',
          700: '#087C86',
        },
        'leaf': {
          DEFAULT: '#69C36B',
          500: '#69C36B',
        },
        'ink': {
          DEFAULT: '#0E1B2A',
          900: '#0E1B2A',
        },
        'slate': {
          DEFAULT: '#5A6B7B',
          200: '#E6EEF1',
          600: '#5A6B7B',
          700: '#32475C',
        },
        'mist': {
          DEFAULT: '#F3FAFB',
          50: '#F3FAFB',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'card': '16px',
      },
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        'section': 'clamp(56px, 8vw, 104px)',
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        'hero': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'section': ['2.25rem', { lineHeight: '1.2' }],
        'service': ['1.875rem', { lineHeight: '1.3' }],
        'feature': ['1.5rem', { lineHeight: '1.4' }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "slide-in-up": {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in-left": {
          from: { opacity: 0, transform: "translateX(-30px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-up": "slide-in-up 0.6s ease-out",
        "fade-left": "fade-in-left 0.6s ease-out",
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'medical': '0 6px 20px rgba(0, 0, 0, 0.1)',
        'trust': '0 4px 12px rgba(30, 64, 175, 0.4)',
        'success': '0 4px 12px rgba(5, 150, 105, 0.3)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}