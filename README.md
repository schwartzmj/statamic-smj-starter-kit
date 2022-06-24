## Setup

### nginx

Use the Statamic template in Forge. At time of writing, this enables:

1. The serving of static html files (ignored if Statamic is not set to 'full' cache)
1. Static caching of `jpg|jpeg|png|gif|css|js|woff2` files. Note we ignore PDFs because it is likely that a client will upload new PDFs with the same name.

### pm.max_children

- At the moment, we need to go in after installing a site and set to **5**.

_To get an idea of what to use for the pm.max_children, you can use this calculation: pm.max_children = Total RAM dedicated to the web server / Max child process size. Remember to leave some RAM for extra services you have running on your system._

Potentially helpful information: https://gist.github.com/holmberd/44fa5c2555139a1a46e01434d3aaa512

### [spatie/laravel-google-fonts](https://github.com/spatie/laravel-google-fonts)

1. Edit config/google-fonts.php with the URL string you want to use.
2. Make sure in production to run `php artisan storage:link`. This only needs to be done once.
   - This symlinks the `public` disk so it is publicly accessible.
3. Make sure `@googleFonts` Blade tag is used in `<head>`.

### [schwartzmj/statamic-akismet](https://github.com/schwartzmj/statamic-akismet)

1. Set `AKISMET_API_KEY=` in your env file.
