const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./resources/**/*.antlers.html",
    "./resources/**/*.blade.php",
    "./resources/**/*.{svelte,vue,js}",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-to-tr":
          "radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-tl":
          "radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-br":
          "radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))",
        "gradient-radial-to-bl":
          "radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))",
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
