/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
      },
      colors: {
        'jaguar-gold': '#d4a517',
        'jaguar-dark': '#8b6914',
      },
      animation: {
        'float': 'float 15s infinite',
        'morphing': 'morphing 8s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease infinite',
      },
    },
  },
  plugins: [],
}
