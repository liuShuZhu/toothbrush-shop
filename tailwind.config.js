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
    extend: {
      // fontSize: ({ theme }) => ({
      //   ...theme("spacing"),
      // }),
      maxWidth: {
        '8xl': '96rem',
        '9xl': '120rem',
      },
      screens: {
        '3xl': '1560px',
        '4xl': '1930px',
      }
    }
  },
  plugins: [
    //   require('@headlessui/tailwindcss')({ prefix: 'ui' })
    require('@tailwindcss/forms'),
  ],
};
