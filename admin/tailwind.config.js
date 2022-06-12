module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["montserrat"],
      },
      colors: {
        accent: "#EA4335",
        bkgBlue: "#081828",
        bkgWhite: "#F9F9F9",
        tranpBlue: "#3C4956",
      },
    },
  },
  plugins: [require("@themesberg/flowbite/plugin")],
};
