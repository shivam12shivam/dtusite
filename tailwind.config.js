const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: 'rgb(222, 151, 62)', // or '#DE973E'
      },
      fontFamily: {
        impact: ['Impact', 'Arial', 'sans-serif'], // Add Impact with fallbacks
      },
    },
  },
  plugins: [],
});