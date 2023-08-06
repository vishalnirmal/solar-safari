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
    },
  },
  plugins: [],
};
