/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        barbie: {
          pink: '#E91E8C',
          hot: '#FF1493',
          light: '#FF69B4',
          pale: '#FDE8F5',
          blush: '#FFD6E8',
          rose: '#C2185B',
          cream: '#FFF0F8',
        },
        gold: '#D4AF37',
        urban: {
          dark: '#120810',
          mid:  '#22091a',
          edge: '#3a0f2a',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'barbie-gradient': 'linear-gradient(135deg, #FF1493 0%, #E91E8C 50%, #C2185B 100%)',
        'pink-gradient': 'linear-gradient(180deg, #FFF0F8 0%, #FDE8F5 100%)',
      },
    },
  },
  plugins: [],
}
