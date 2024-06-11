/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightWhite: "#CCCDCD",
        gray: "#B3B8BA",
        black: "#010101",
        blurWhite: "#FFFFFF0A",
        transparent: "transparent",
        skyBlue: "#00FFE1",
        lightBlue: "#6E5DF6",
      },
      backgroundImage: {
        stastic: "url('/src/assets/images/bgStastic.png')",
        ellipseGradient:
          " linear-gradient(171.68deg, #00FFE1 39.97%, #6E5DF6 107.69%);",
      },
    },
  },
  plugins: [],
};
