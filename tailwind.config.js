/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/**/*.html"],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0% , 100%' : {
            transform: 'rotate(55deg)',
            top: '89px',
            left: '669px',
          },
          '20%' : {
            transform: 'rotate(145deg)',
            top: '67px',
            left: '701px',
          },
          '40%' : {
            transform: 'rotate(235deg)',
            top: '44px',
            left: '734px',
          },
          '60%' : {
            transform: 'rotate(325deg)',
            top: '21px',
            left: '767px',
          },
          '80%' : {
            transform: 'rotate(415deg)',
            top: '-2px',
            left: '800px',
          },
        }
      }
    },
  },
  plugins: [],
}

