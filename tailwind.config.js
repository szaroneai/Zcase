/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zcase: {
          base: '#ffffff',       // Main background (White)
          surface: '#f9fafb',    // Secondary background (Very Light Gray)
          text: '#1f2937',       // Main text (Dark Gray)
          muted: '#6b7280',      // Secondary text (Gray)
          border: '#e5e7eb',     // Borders
          
          // Brand Colors
          black: '#111827',      // Deep Dark Gray/Black for text/contrast
          accent: '#FFD700',     // Industrial Yellow / Gold
          accentHover: '#E6C200',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tech: ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
}
