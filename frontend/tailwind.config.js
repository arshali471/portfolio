/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'devops-bg': '#0f172a',
        'terminal-green': '#22c55e',
        'aws-orange': '#ff9900',
        'k8s-blue': '#326ce5',
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'], // Suggest installing Fira Code or using default mono
      }
    },
  },
  plugins: [],
}