import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import preact from "@preact/preset-vite";
// import vue from '@vitejs/plugin-vue';
// Partytown
import path from "path";
import fs from "fs";
import { partytownVite } from "@builder.io/partytown/utils";
import { partytownSnippet } from "@builder.io/partytown/integration";

fs.writeFileSync(
  path.join(__dirname, "storage", "app", "public", "partytownSnippet.txt"),
  partytownSnippet(),
  {
    encoding: "utf8",
    flag: "w",
  }
);

// TODO: resources/js/cp.js and resources/css/cp.css need to get built and NOT included in the frontend bundle
// They currently build but have a hash. It sounds like maybe I'll have to have a separate vite.config (vite.cp.config) and run another vite command in package.json for it. See: https://github.com/vitejs/vite/issues/2039#issuecomment-779356090
// Here's how to output unhashed files?: https://github.com/vitejs/vite/discussions/3278#discussioncomment-721347
// https://laravel.com/docs/9.x/vite
export default defineConfig({
  esbuild: {
    drop: ["console", "debugger"],
  },
  plugins: [
    laravel([
      "resources/css/tailwind.css",
      "resources/js/app.js",
      // Components
      "resources/js/glightbox.js",
      "resources/js/Preact/Counter/render.tsx",
      // CP
      "resources/css/cp.css",
      "resources/js/cp.js",
    ]),
    preact(),
    // laravel({
    //   input: "resources/js/app.js",
    //   publicDirectory: "public", // default
    //   buildDirectory: "build", // default
    // }),
    // vue({
    //     template: {
    //         transformAssetUrls: {
    //             base: null,
    //             includeAbsolute: false,
    //         },
    //     },
    // }),
    partytownVite({
      dest: path.join(__dirname, "public", "~partytown"),
    }),
  ],
});
