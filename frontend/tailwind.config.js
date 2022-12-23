/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'header-btn': 'inset 0 0 0 100px rgb(0 0 0 / 20%)',
        'input-shadow': 'inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(248 183 66 / 60%)'
      },
      colors: {
        primary: '#c89979',
        'header-bg': '#333333',
        'header-border': 'rgba(255, 255, 255, 0.1)',
        text: 'rgba(102,102,102,0.85)'
      },
      keyframes: {
        stuckMoveDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        delayDown: {
          '0%': { transform: 'translate3d(0, -70px, 0)', opacity: '0' },
          '100%': { transform: 'translate3d(0, 0, 0) scale(1)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
}
