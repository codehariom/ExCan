/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
