module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
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
  plugins: [require("flowbite/plugin")],
};
