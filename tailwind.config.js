/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightWhite: "#CCCDCD",
        gray: "#B3B8BA",
        black: "#010101",
        lightBlack: "#4E5051",
        green: "#15AA15",
        blurWhite: "#FFFFFF0A",
        transparent: "transparent",
        skyBlue: "#00FFE1",
        lightBlue: "#6E5DF6",
      },
      fontSize: {
        "3xl2": "32px",
        "4xl2": "40px",
      },
      backgroundImage: {
        stastic: "url('/src/assets/images/bgStastic.png')",
        ellipseGradient:
          " linear-gradient(171.68deg, #00FFE1 39.97%, #6E5DF6 107.69%);",
        footerEllipse:
          "linear-gradient(107.02deg, #00FFE1 12.76%, #6E5DF6 91.81%);",
        accountTittleGradient:
          "linear-gradient(82.75deg, #00FFE1 -11.09%, #6E5DF6 55.46%), linear-gradient(180deg, #9B77E8 0%, #6854FF 100%);",
      },
    },
  },
  plugins: [],
};
