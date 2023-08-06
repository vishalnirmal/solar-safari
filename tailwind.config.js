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
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      fontSize: {
        "heading-1": ["150px", "1em"],
        "heading-2": ["100px", "1em"],
        "heading-3": ["56px", "1em"],
        "heading-4": ["32px", "1em"],
        "heading-5": [
          "28px",
          {
            letterSpacing: "4.75px",
            lineHeight: "1em",
            fontWeight: "400",
          },
        ],
        "sub-heading-1": ["28px", "1em"],
        "sub-heading-2": [
          "14px",
          {
            letterSpacing: "2.35px",
            lineHeight: "1em",
            fontWeight: "400",
          },
        ],
        nav: [
          "16px",
          {
            letterSpacing: "2.7px",
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
    },
    transitionProperty: {
      right: "right",
    },
  },
  plugins: [],
};
