/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamoly: {
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        deepBlue: "#02042a",
        LightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",

        LightBlue500: "#0072e7",
        greenLight: "#61cea6",

        grayText: "#818597",
        LightGray: "#e2e2e2",

        grayBlue: "#344a6c",

        deepBlueHead: "#162156",
        gray2: "#525a76",
      },
    },
  },
  plugins: [],
};
