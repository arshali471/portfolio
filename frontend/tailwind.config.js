/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#fdfcfb',
          100: '#f9f5f0',
          200: '#f0e9df',
          300: '#ebe2d8',
          400: '#ddd3c8',
        },
        ink: {
          50:  '#f5f5f5',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#aaaaaa',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#2e2e2e',
          800: '#1c1c1c',
          900: '#111111',
        },
        accent: {
          green:  '#10b981',
          blue:   '#3b82f6',
          purple: '#8b5cf6',
          orange: '#f59e0b',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"Fira Code"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.8rem,6.5vw,5rem)', { lineHeight: '1.06', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2rem,4vw,3.5rem)',   { lineHeight: '1.1',  letterSpacing: '-0.02em'  }],
        'display-md': ['clamp(1.5rem,2.5vw,2rem)', { lineHeight: '1.2',  letterSpacing: '-0.015em' }],
      },
      boxShadow: {
        'card':    '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 30px rgba(0,0,0,0.08)',
        'btn':     '0 1px 2px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        'xl2': '1rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4,0,0.2,1)',
      },
    },
  },
  plugins: [],
}
