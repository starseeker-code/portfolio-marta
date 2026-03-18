/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink:  '#FF1493',
          hot:   '#FF006B',
          light: '#FF69B4',
          dim:   '#C2185B',
        },
        ink: {
          black:  '#080808',
          dark:   '#0f0f0f',
          mid:    '#181818',
          light:  '#222222',
          border: '#2e2e2e',
          muted:  '#666666',
        },
        gold: '#FFD700',
      },
      fontFamily: {
        display: ['"Permanent Marker"', 'cursive'],
        body:    ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #FF1493 0%, #FF006B 50%, #C2185B 100%)',
      },
    },
  },
  plugins: [],
}
