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
        cthree: "#947627",
        cfour: "#FAF9F6",
        cfive: "#CBCBCB",
      }
    },
  },
  plugins: [],
}
