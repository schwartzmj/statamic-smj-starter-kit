module.exports = {
  tailwindConfig: "./tailwind.config.site.js",
  plugins: ["./node_modules/prettier-plugin-antlers/"],
  overrides: [
    {
      files: "*.antlers.html",
      vscodeLanguageIds: ["antlers"],
      options: {
        parser: "antlers",
      },
    },
  ],
};
