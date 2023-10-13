/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "dark-BackgroundColor": "hsl(207, 26%, 17%)", //dark mode background color
        "blue-text": "hsl(200, 15%, 8%) ", //lght mode text
        "gray-input": "hsl(0, 0%, 52%)", //Light Mode Input
        "light-gray": "hsl(0, 0%, 98%)", //light mode background
        " White": "hsl(0, 0%, 100%)", //Dark Mode Text & Light Mode Elements
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
