# Rossville Volunteer Ambulance Service

The RVAS homepage and donation page use Vue 3 and Vite. Use Node 22.12.0 or a newer version supported by Vite.

Run `npm ci`, then `npm run dev` for local development.

Run `npm run build` to generate `dist/` for static hosting. The build renders both pages from the same Vue components used in the browser, so their content and FAQ answers are available without JavaScript. `dist-ssr/` is an intermediate build directory and does not need to be deployed. Rebuild when changing content; dated announcements and the footer year reflect the build date until JavaScript runs.

Run `npm test` to build and check page content, metadata, heading structure, donation links, and asset references in the generated HTML. Run `npm run preview` to inspect the production build locally.

Search titles, descriptions, social preview metadata, and organization structured data are in `index.html` and `donate.html`. Keep the structured address and email consistent with the visible contact information. Canonical URLs use `https://rossvilleambulance.com/`. When adding pages, update `public/sitemap.xml` to include their canonical URLs; `public/robots.txt` advertises that sitemap. Both files are copied into `dist/` during the build.
