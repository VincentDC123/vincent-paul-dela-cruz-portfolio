/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        move: 'move 50s ease-in-out infinite',
      },

      keyframes: {
        move: {
          '11%': { transform: 'translateY(-355px)' },
          '22%': { transform: 'translateY(-715px)' },
          '33%': { transform: 'translateY(-1070px)' },
          '44%': { transform: 'translateY(-1430px)' },
          '55%': { transform: 'translateY(-1790px)' },
          '66%': { transform: 'translateY(-2160px)' },
          '77%': { transform: 'translateY(-2500px)' },
          '88%': { transform: 'translateY(-2860px)' },
        }
      },
    },
  },
  plugins: [],
}

