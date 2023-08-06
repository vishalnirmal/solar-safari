/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "space-black": "var(--space-black)",
        "space-blue": "var(--space-blue)",
        "space-white": "var(--space-white)",
        nav: "#979797",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      fontSize: {
        h1: ["5rem", "1em"],
        "h1-sm": ["6.25rem", "1em"],
        "h1-lg": ["9.375rem", "1em"],
        h2: ["3.5rem", "1em"],
        "h2-sm": ["5rem", "1em"],
        "h2-lg": ["6.25rem", "1em"],
        h3: ["1.5rem", "1em"],
        "h3-sm": ["2.5rem", "1em"],
        "h3-lg": ["3.5rem", "1em"],
        h4: ["1rem", "1em"],
        "h4-sm": ["1.5rem", "1em"],
        "h4-lg": ["2rem", "1em"],
        h5: [
          "1rem",
          {
            letterSpacing: "0.168rem",
            lineHeight: "1em",
            fontWeight: "400",
          },
        ],
        "h5-sm": [
          "1.25rem",
          {
            letterSpacing: "0.211rem",
            lineHeight: "1em",
            fontWeight: "400",
          },
        ],
        "h5-lg": [
          "1.75rem",
          {
            letterSpacing: "0.295rem",
            lineHeight: "1em",
            fontWeight: "400",
          },
        ],
        sh1: ["1.75rem", "1em"],
        sh2: [
          "0.875rem",
          {
            letterSpacing: "0.1475rem",
            lineHeight: "1em",
            fontWeight: "400",
          },
        ],
        nav: [
          "1rem",
          {
            letterSpacing: "0.1687rem",
            lineHeight: "1em",
            fontWeight: "400",
          },
        ],
        "nav-sm": [
          "0.875rem",
          {
            letterSpacing: "0.1475rem",
            lineHeight: "1em",
            fontWeight: "400",
          },
        ],
        "nav-lg": [
          "1rem",
          {
            letterSpacing: "0.1687rem",
            lineHeight: "1em",
            fontWeight: "400",
          },
        ],
      },
      backgroundImage: {
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "technology-desktop":
          "url('/assets/technology/background-technology-desktop.jpg')",
        "technology-tablet":
          "url('/assets/technology/background-technology-tablet.jpg')",
        "technology-mobile":
          "url('/assets/technology/background-technology-mobile.jpg')",
      },
      transitionProperty: {
        right: "right",
      },
    },
  },
  plugins: [],
};
