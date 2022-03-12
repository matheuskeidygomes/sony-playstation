module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)'},
          '100%': { transform: 'translateX(0px)'}
        },
        pulse3: {
          '0%,100%': { 'opacity': 1 },
          '50%': { 'opacity': .3 }
        },
        fade: {
          '0%': {'opacity': 0},
          '1%': { transform: 'translateX(-100%)'},
          '10%': {'opacity': .1},
          '20%': {'opacity': .2},
          '30%': {'opacity': .3},
          '40%': {'opacity': .4},
          '50%': {'opacity': .5},
          '60%': {'opacity': .6},
          '70%': {'opacity': .7},
          '80%': {'opacity': .8},
          '90%': {'opacity': .9},
          '99%': { transform: 'translateX(0px)'},
          '100%': {'opacity': 1}
        }
      },
      animation: {
        slide: 'slide 0.3s ease',
        pulse3: 'pulse3 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        fade: 'fade 0.5s ease'
      }
    },
  },
  plugins: [],
}
