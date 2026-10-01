# Alec Schneider — Engineering Portfolio

A static Astro portfolio for Alec Schneider, UCF mechanical engineering student. The site presents selected CAD and engineering projects, a short professional profile, and résumé/contact links.

## Run locally

Install [Node.js 22 or newer](https://nodejs.org/) and pnpm 11, then run:

```sh
pnpm install
pnpm dev
```

The development server prints the local preview URL. To build the deployment site, run:

```sh
pnpm build
```

Build output is written to `dist/`.

## Publish to GitHub Pages

Create a GitHub repository named `engineering-portfolio` (or publish this source in another repository), then push the `main` branch. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The included workflow builds pull requests, then publishes commits on `main` to GitHub Pages.

The workflow passes the GitHub owner and repository into Astro automatically. Site paths, project pages, résumé links, and images use Astro's configured repository base path.

## Project content

Add or update a project under `src/content/projects/`. Its Markdown frontmatter is validated by `src/content.config.ts`. Project imagery belongs in `public/images/cad/`. The résumé download is `public/Alec-Schneider-Resume.pdf`.

All performance, fabrication, and competition claims should stay tied to project evidence or the supplied résumé. Original SolidWorks source models remain in their engineering project folders and are not part of the site.
