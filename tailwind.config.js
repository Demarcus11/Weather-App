/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      desktop: "720px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
