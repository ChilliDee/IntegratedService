/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cantarell", "sans-serif"],
        unbounded: ["Unbounded", "cursive"],
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [],
};
