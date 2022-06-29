const sveltePreprocess = require("svelte-preprocess");

// Any issues, try looking at https://github.com/omnisyle/vite-svelte-ts-tailwind/blob/master/package.json to see if we need any more packages installed, like tslib.
module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
};
