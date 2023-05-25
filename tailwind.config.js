//const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ['"Roboto"', "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    colors: {
      'dark-green':'#61892F',
      'green' : '#86C232',
      'dark-black' : '#222629',
      'medium-black' : '#474B4F',
      'light-black' : '#6B6E70'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
