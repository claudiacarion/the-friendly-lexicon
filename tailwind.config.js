/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        century: ["Century Gothic"]
      },
      colors: {
        cone: "#363636",
        ctwo: "#242F40",
        cthree: "#CCA43B",
        cfour: "#f9f9f9",
        cfive: "#CBCBCB",
      }
    },
  },
  plugins: [],
}
