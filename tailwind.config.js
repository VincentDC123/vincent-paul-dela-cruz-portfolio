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
          // '33%': { transform: 'translateY(-120px)' },
          // '66%': { transform: 'translateY(-240px)' },
          // '100%': { transform: 'translateY(-360px)' },
          '11%': { transform: 'translateY(-385px)' },
          '22%': { transform: 'translateY(-775px)' },
          '33%': { transform: 'translateY(-1165px)' },
          '44%': { transform: 'translateY(-1560px)' },
          '55%': { transform: 'translateY(-1950px)' },
          '66%': { transform: 'translateY(-2350px)' },
          '77%': { transform: 'translateY(-2740px)' },
          '88%': { transform: 'translateY(-3145px)' },
        }
      },
    },
  },
  plugins: [],
}

