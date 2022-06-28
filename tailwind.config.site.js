const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./resources/**/*.antlers.html",
    "./resources/**/*.blade.php",
    "./resources/**/*.{svelte,vue}",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.violet,
        },
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
        heading: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
