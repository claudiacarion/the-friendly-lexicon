/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        century: ["Lexend"]
      },
      colors: {
        cone: "#363636",
        ctwo: "#242F40",
        cthree: "#947627",
        cfour: "#faf7f6",
        cfive: "#e5e5e5",
      }
    },
  },
  plugins: [],
}
