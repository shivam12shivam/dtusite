const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: 'rgb(222, 151, 62)', // or '#DE973E'
      },
      fontSize: {
        'xxs': '0.6rem', // 10px
      },
      fontFamily: {
        impact: ['Impact', 'Arial', 'sans-serif'], 
      },
    },
  },
  plugins: [],
});