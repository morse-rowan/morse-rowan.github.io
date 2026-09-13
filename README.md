# Rowan Morse's website

React, TypeScript, Vite, and Tailwind, published at
[rowanmorse.me](https://rowanmorse.me) through GitHub Pages.

## Development

Work from this repository directory, which contains `package.json` and `.git`.
Read [AGENTS.md](AGENTS.md) for project guidance and the
[design history](docs/ui-redesign-plan.md) for accepted design decisions.

```powershell
npm ci
npm run dev -- --host 127.0.0.1 --port 5173 --strictPort
```

Stop this repository's running Vite preview before reinstalling dependencies on
Windows; esbuild can otherwise remain locked. Use a feature branch for new work.

The site uses a warm paper layout with Ruled/Grid/Plain options and Graphite dark
mode. The profile sidebar moves above the content on mobile. Sections are
Experience, Projects, Research, and Contact; awards appear within projects.
The Bash name honors reduced motion. UI and writeup fonts have independent,
persistent Mono/Reading controls; existing theme preferences are retained.

`/designs` and `/design-study` are local development comparisons. Their modules
are excluded from production by the development-only branch in `src/main.tsx`.
The historical design checkpoints remain in Git.

## Validation

```powershell
npm run build
npm run preview -- --host 127.0.0.1 --port 4173 --strictPort
npm run lint
```

`build` checks TypeScript and creates `dist/`. Check the production preview at
1440, 390, and 320 px, including themes, fonts, navigation, and both writeups.
A clean lockfile install and production build were verified on September 12,
2026 with Node 20.18.0 and npm 11.2.0. CI uses Node 20.

Known maintenance issues: lint fails because there is no ESLint configuration;
Browserslist data is stale; the lazy-loaded Markdown/math chunk exceeds Vite's
500 KB warning threshold. Dependency/runtime upgrades are separate maintenance.

## Content

| Content | File |
| --- | --- |
| Profile, education, contact links | `src/content/profile.ts` |
| Experience | `src/content/experience.ts` |
| Projects, awards, technologies | `src/content/projects.ts` |
| Publication and full author list | `src/content/publications.ts` |
| Writeups | `public/projects/safenet.md`, `public/sat_diffusion/sat_diffusion.md` |
| Writeup media dimensions | `src/content/writeupImages.ts` |
| Routing and appearance preferences | `src/App.tsx` |
| Homepage and header | `src/pages/Home.tsx`, `src/components/Navbar.tsx`, `src/components/BashName.tsx` |
| Layout and typography | `src/styles/graphite.css`, `src/styles/typography.css` |

Add project objects to `src/content/projects.ts`; a `writeup` path enables
`/#/portfolio/<slug>`. Keep published slugs stable. Store Markdown under `public/`
and record media dimensions to reserve image space. `detailUrl` supports external
writeups, and optional `awards` and `demo` fields render only when provided.

## Publishing and rollback

`main` is the production branch. GitHub Pages is configured for **GitHub Actions**,
with custom domain `rowanmorse.me` and HTTPS enforced (verified September 12, 2026).
The existing `.github/workflows/deploy.yml` installs from the lockfile, builds,
and deploys on a push to `main` or manual workflow dispatch.

For an authorized release, commit and validate the feature branch, fetch the
remote, review differences from `origin/main`, and merge without rewriting
history. Push `main`, wait for the Actions deployment to succeed, then verify
the public site and its assets. Do not publish merely to provide a local preview.

Do not use the legacy `npm run deploy` script: it writes to `gh-pages`, which is
not the configured Pages source. Retain that old branch as history. `dist/` stays
untracked. Preserve `public/CNAME`, verification metadata, and analytics IDs.

The [September 2026 migration record](docs/releases/2026-09-12.md) documents the
release boundaries, validation, and rollback instructions. The previous deployed
source is preserved by the annotated `pre-paper-release-2026-09-12` tag. Rollback
uses a new revert commit on `main`, followed by the same Actions deployment;
never force-push or move the rollback tag.

The existing `/#/portfolio`, `/#/portfolio/safenet`,
`/#/portfolio/sat_diffusion`, `/#/contact`, and `/#/tm-portfolio` URLs remain
supported. The team-matching route retains `tm_portfolio_view`. Section links use
router query parameters; legacy `work` and `awards` section values map to Projects.
This is a static-site release with no database, DNS, or data migration.
