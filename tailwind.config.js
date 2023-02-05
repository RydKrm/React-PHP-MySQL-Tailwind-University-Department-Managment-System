//const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ['"Roboto"', "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
