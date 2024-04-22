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
        redText: "#116464",
        deepGrey: "#1B1B1B",
        grey: "#585858"
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
        yep: "url('/images/yep.png')",
        yep_banner: "url('/images/yep_banner.png')",
        competitionsIcon: "url('/images/competitions_icon.png')",
        speakersIcon: "url('/images/speakers_icon.png')",
        tobe_announced: "url('/images/tobe_announced.webp')",
        previous_sponsors: "url('/images/previous_sponsors.png')",
        sponsors_2: "url('/images/sponsors_2.png')",
        sponsors_3: "url('/images/sponsors_3.png')",
        sponsors_4: "url('/images/sponsors_4.png')",
        sponsors_5: "url('/images/sponsors_5.png')",
        participantsIcon: "url('/images/participants_icon.png')",
        ankurWarikoo: "url('/images/past_speakers/ankur_warikoo.png')",
        ganeshPrasad: "url('/images/past_speakers/ganesh_prasad.png')",
        varunMayya: "url('/images/past_speakers/varun_mayya.png')",
        workshopsIcon: "url('/images/workshops_icon.png')",
        eligibility: "url('/images/eligibility.png')",
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