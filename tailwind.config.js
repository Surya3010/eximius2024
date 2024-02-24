/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Green: "#1fdf64",
        Black: "#000",
        DeepNightBlack: "#121212",
        MidNightBlack: "#181818",
        EveningBlack: "#1a1a1a",
        DarkGray: "#282828",
        SlateGray: "#404040",
        LightGray: "#959595",
        SilverGray: "#B3B3B3",
        Snow: "#ffffff",
        red: "#DA0400",
        redText: "#FA0400",
        deepGrey: "#1B1B1B",
        grey: "#585858",
      },
      fontFamily: {
        'cascadia-normal': ['cascadia-normal'],
        'circular': ['circular-normal', 'sans-serif'],
        'circular-light': ['circular-light', 'sans-serif'],
        'circular-normal': ['circular-normal', 'sans-serif'],
        'circular-medium': ['circular-medium', 'sans-serif'],
        'circular-bold': ['circular-bold', 'sans-serif'],

      },
      backgroundImage: {
        ayush: "url('/team/ayush_krishna.webp')",
        sabareesh: "url('/team/sabareesh_narayanan.webp')",
        coming_soon: "url('/backgrounds/coming-soon.webp')",
        swirls: "url('/backgrounds/swirls.webp')",
        swirls_home: "url('/backgrounds/swirls_home.webp')",
        tm: "url('/assets/tm.png')",
        td: "url('/assets/td.png')",
      },
      backgroundPosition: {
        custom: "center top 25%",
      },
    },
  },
  plugins: []
}