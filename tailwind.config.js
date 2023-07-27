/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Barlow Condensed"],
        secondary: ["Montserrat"],
        signature: ["Waiting for the Sunrise"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
