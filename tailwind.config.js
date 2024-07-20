/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {},
    // spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
    //   map[index] = `${index}px`;
    //   return map;
    // }, {}),
    // extend: {
    //   fontSize: ({ theme }) => ({
    //     ...theme("spacing"),
    //   }),
    // },
  },
  plugins: [
    //   require('@headlessui/tailwindcss')({ prefix: 'ui' })
    require('@tailwindcss/forms'),
  ],
};
