# Rowan Morse's website

React, TypeScript, Vite, and Tailwind. Published at [rowanmorse.me](https://rowanmorse.me)
using GitHub Pages.

## Start here

The [UI redesign plan](docs/ui-redesign-plan.md) contains the repo audit, design
direction, maintenance plan, implementation milestones, and ready-to-use Codex
prompts. [AGENTS.md](AGENTS.md) gives future Codex sessions project guidance.

Open **this repository folder** in Codex, rather than its parent `rowanmorse.me`
folder, so Git and npm commands run from the correct location.

## Local development

The local implementation is on **`codex/graphite-ui`**. It uses the selected
compact sidebar composition and Graphite light/dark palette, with no lava lamp.
The profile moves above the work at 760px and below. Writeups retain their full
Markdown content and independent Reading/Mono control. The UI font control is
in the footer. Existing saved font and theme preferences are respected.

The previous drafts are saved in local checkpoint `9dc0550`. No push or deployment
is part of this work; the hosted website remains unchanged.

Run these commands from the directory containing this file:

```powershell
# Needed for a fresh checkout or changed lockfile:
npm ci

# Start the development preview:
npm run dev -- --host 127.0.0.1 --port 5173 --strictPort
```

Open the printed local URL. Stop the server with Ctrl+C. If port 5173 is already
occupied by this repo's preview, reuse it; otherwise choose another port.

### Visual design playground

Open [the design gallery](http://127.0.0.1:5173/designs) to compare the latest compact
one-page **Index studies**: Lava index, Light index, Margin ledger, and Contour index.
The first four drafts remain available under **Original directions**. Each has
a homepage and sample writeup, independent Mono/Reading controls, light/dark themes,
and pausable decoration. These sketches are development-only and do not modify
the actual site's UI or saved font preferences. The selected Graphite direction
is now implemented at the root URL; these drafts remain available for comparison.

### Typography comparison

While the development server is running, open
[the local study](http://127.0.0.1:5173/design-study). Use A / B to compare
sans-serif prose against JetBrains Mono, and the theme control for light/dark.
Content and layout are shared. Header artwork is static for this typography round.
The main site remains at `/`; the study is excluded from production builds.
The temporary comparison lives in `src/design/` and is selected by the
development-only branch in `src/main.tsx`.

The accepted fonts are applied to the main site's existing pages: **Mono** by
default for the UI and **Reading** by default for project writeups. Each has a
Mono/Reading control with its own saved browser preference. Navigation retains
the original hosted site's system monospace font. Edit the shared font tokens
in `src/styles/typography.css` when refining these choices.

```powershell
npm run build
npm run preview -- --host 127.0.0.1
```

`build` runs TypeScript checking and creates the production site in `dist/`.
`preview` serves that build; use it for final checks, and `dev` for design iteration.

Baseline verified on September 12, 2026 with Node 20.18.0 and npm 11.2.0 using
the existing installed dependencies. A fresh `npm ci` was not tested in this audit.
CI currently specifies Node 20. Runtime/dependency upgrades should be a separate
maintenance change, with supported versions verified when performed.

**Known issue:** `npm run lint` currently fails because the repository has no
ESLint configuration. Repair it in the first engineering milestone in the plan.

## Where content currently lives

| Content | File |
| --- | --- |
| Name, interests, graduation, contact links | `src/content/profile.ts` |
| Internship project, personal projects, awards and technologies | `src/content/projects.ts` |
| Publication and complete author list | `src/content/publications.ts` |
| Project writeups | `public/projects/safenet.md`, `public/sat_diffusion/sat_diffusion.md` |
| Routes, theme | `src/App.tsx` |
| Navigation and homepage | `src/components/Navbar.tsx`, `src/pages/Home.tsx` |
| Graphite palette, compact layout, mobile breakpoints | `src/styles/graphite.css` |
| Writeup image dimensions | `src/content/writeupImages.ts` |
| Typography and global styling | `src/styles/globals.css`, `tailwind.config.js`, `index.html` |

Add a project object to `src/content/projects.ts` to create a new row. A `writeup`
path enables its existing-style `/#/portfolio/<slug>` route. Add the Markdown
under `public/`, and give its images width/height attributes or an entry in
`writeupImages.ts` so lazy loading reserves space. Use `detailUrl` for an external
writeup. Optional `awards` and `demo` fields render only when supplied.

The homepage is continuous work → research → contact. Old `/#/portfolio` and
`/#/contact` links open the corresponding homepage section; `/#/tm-portfolio`
retains its analytics event. Section navigation uses router query parameters,
including the existing SafeNet table of contents, so links support refresh and
browser history without conflicting with HashRouter.

## Git and publishing

```powershell
git status --short --branch
git fetch origin
git rev-list --left-right --count HEAD...origin/main
```

The last command reports local-only commits first and remote-only commits second.
At the September 12 audit, local `main` and `origin/main` both pointed to `aaa34c9`,
with no differences or uncommitted files. Setup documents were then added on
`codex/ui-design-setup`. The later `codex/graphite-ui` branch checkpoints those
drafts and contains the local implementation. Nothing has been pushed.

`.github/workflows/deploy.yml` builds and deploys on a push to `main` or a manual
workflow run. `public/CNAME` preserves the custom domain. The older `npm run deploy`
command publishes to `gh-pages`; use the existing Actions workflow as the intended
release path and verify the GitHub Pages source setting before the first release.
The account setting itself was not inspected in this audit.

Use feature branches for iterations. Review the final changes, then explicitly
request a merge/push when ready to publish.
