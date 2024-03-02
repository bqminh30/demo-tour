module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode:'jit',
  theme: {
    extend: {
      width: {
        main: '1400px',
        second: '1148px'
      },
      boxShadow: {
        sm: "0 0 32px 0 #0000000A",
        // rest of the box shadow values
      },

      letterSpacing: {
        '1': '0em',
        '2': '0.025em',
        '3': '0.05em',
        '4': '0.1em',
        '5': '0.2em',
      },
      backgroundColor: {
        primary: '#ffffff',
      },
      colors: {
        main: '#B34B1E'
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
        '7': '7 7 0%',
        '8': '8 8 0%',
      },
      keyframes: {
        'slide-top': {
          '0%': {
           ' -webkit-transform' : ' translateY(40px)',
           ' transform' : ' translateY(20px)'
          },
          '100%':{
            ' -webkit-transform' : ' translateY(0)',
           ' transform' : ' translateY(0)'
          }
        }
      }
    },
  },
  plugins: [],
}