module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(320px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        pulse3: {
          '0%,100%' : {'opacity': 1},
          '50%':  { 'opacity': .3}
        }
      },
      animation: {
        slide: 'slide 0.5s ease',
        pulse3: 'pulse3 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
  },
  plugins: [],
}
