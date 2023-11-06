/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        englishViolet: "#44355B",
        darkPurple: "#31263E",
        raisinBlack: "#221E22",
        hunyadiYellow: "#ECA72C",
        flame: "#EE5622",
        cosmicLatte: "#FFF8E7",
        davyGray: "#50514F",
        ashGray: "#CBD4C2",
        snow: "#FFFCFF",
        cerulean: "#247BA0",
        khaki: "#C3B299",
      },
    },
  },
  plugins: [],
};
