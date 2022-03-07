module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        pulse1: {
          '0%,100%': {'opacity': 1},
          '50%': {'opacity': .5}
        }
      },
      animation: {
        slide: 'slide 0.5s ease',
        pulse1: 'pulse1 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
  },
  plugins: [],
}
