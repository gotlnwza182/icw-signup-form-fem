/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "intro-pattern": "url('./assets/bg-intro-desktop.png')",
      },
      boxShadow: {
        "2lg": "0 8px 0px 0px rgb(0 0 0 / 0.14)",
        "2inner": "inset 0 -4px 2px 0 rgb(0 0 0 / 0.14)",
      },
    },
  },
  plugins: [],
};
