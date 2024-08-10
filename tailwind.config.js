/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "hsl(7, 99%, 70%)",
        "primary-yellow": "hsl(51, 100%, 49%)",
        "dark-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "moderate-cyan": "hsl(168, 34%, 41%)",
        "desat-blue": "hsl(212, 27%, 19%)",
        "grayish-blue-1": "hsl(213, 9%, 39%)",
        "grayish-blue-2": "hsl(232, 10%, 55%)",
        "grayish-blue-3": "hsl(210, 4%, 67%)",
        "custom-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
      gridTemplateRows: {
        3: "repeat(3,minmax(0, 30rem))",
      },
      gridTemplateColumns: {
        "content-grid": "repeat(auto-fill,minmax(200px,1fr))",
      },
    },
  },
  plugins: [],
};
