import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://example.com',
    output: 'static',
    // Clean addresses, not .html files. Astro's directory format writes
    // `<slug>/index.html`, and the Quant deploy strips `index.html`, so a page
    // publishes as `/about`. With `format: 'file'` it would publish as
    // `/about.html`, which Studio's own publish never produces — the same page
    // would then have two addresses. `trailingSlash: 'never'` keeps the
    // canonical link, the sitemap and in-page links on the same form.
    trailingSlash: 'never',
    build: {
        format: 'directory'
    }
});
