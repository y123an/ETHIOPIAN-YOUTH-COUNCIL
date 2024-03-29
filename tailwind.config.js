/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0753E1",
        secondary: "",
      },
      fontFamily: {
        Dosis: ['"Dosis"', "sans-serif"],
      },
      backgroundImage: {
        "core-values": "url('./src/assets/images/hero-image.jpg')",
      },
    },
  },
  plugins: [],
};
