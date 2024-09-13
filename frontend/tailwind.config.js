const { Skeleton } = require("@mui/material");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainGreen: "#5bc136",
      },
      backgroundImage: {
        "image-with-overlay": `
          linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 93%), 
          url('/grid.svg')
        `,
      },
      fontFamily: {
        sans: [
          "Open Sans",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
        ],

        roboto: ["Roboto"],
      },
      animation: {
        skeleton: "skeleton .4s ease-in-out infinite alternate-reverse",
      },
      keyframes: {
        skeleton: {
          "0%": {
            background: "rgba(199,199,199,1)",
          },
          "100%": {
            background: "rgba(199,199,199,.6)",
          },
        },
      },
    },
  },
  plugins: [],
};
