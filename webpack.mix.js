const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/site.js", "public/js");

// mix
//   .js(
//     "resources/js/vue/meeting-calendar/index.js",
//     "public/js/vue/meeting-calendar"
//   )
//   .vue({ version: 2 });

mix.postCss("resources/css/tailwind.css", "public/css", [
  require("postcss-import"),
  require("tailwindcss/nesting"),
  require("tailwindcss")(require("./tailwind.config.site")),
]);

// mix.browserSync({
//   proxy: process.env.APP_URL,
//   files: ["resources/views/**/*.html", "public/**/*.(css|js)"],
//   // Option to open in non default OS browser.
//   // browser: "firefox",
//   notify: false,
// });

if (mix.inProduction()) {
  mix.version();
}

/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

mix
  .js("resources/js/cp.js", "public/vendor/app/js")
  .vue({ version: 2 })
  .postCss("resources/css/cp.css", "public/vendor/app/css", [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss")(require("./tailwind.config.cp")),
  ]);