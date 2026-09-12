# Working on Rowan's website

Read `docs/ui-redesign-plan.md` before design work. It records the references,
proposed direction, current limitations, and small implementation milestones.
Treat proposed visual choices as starting points; Rowan's feedback takes priority.

## Project and commands

- Work from this directory, which contains `package.json` and `.git`.
- Keep the existing React + TypeScript + Vite + Tailwind stack for the first redesign.
- Install reproducibly with `npm ci` when dependencies are missing.
- Preview: `npm run dev -- --host 127.0.0.1 --port 5173 --strictPort`.
- Build/typecheck: `npm run build`.
- `npm run lint` currently fails because no ESLint config exists. Report this
  accurately until the configuration is repaired; do not claim it passes.
- Check Git status before editing. Preserve unrelated changes.
- GitHub Actions deploys pushes to `main`. Keep UI experiments on a feature
  branch. Do not treat a request for a local preview as a request to publish.

## Design

- Current task scope is lightweight visual exploration, not production UI work.
  Use the development-only `/designs` gallery to compare distinct compositions;
  the user explicitly requested multiple directions, including one near the
  existing website. Keep gallery controls/preferences isolated from actual pages.
- Latest preference: Research Index's compactness and clarity, combined with a
  narrow one-page layout. The new Index studies (E–H) explore this; research-first
  order is not required. Keep prior drafts available and avoid production refactors.
- Further accepted direction: retain the name/profile sidebar on desktop and move
  it above the work on mobile. I–L explore this; M–N compare lamp placement and
  surrounding palettes. Keep the lamp's original #835eff/#ff008d background and
  #ff9298/#ff008d blob colors unchanged across all new lava palettes.

- Rowan selected JetBrains Mono for main UI content and the Reading option
  (Segoe UI/Arial) for writeups, with both options available independently.
  Retain the original hosted navbar's system monospace stack, including Consolas
  as a Windows fallback. These choices also apply to the design study.
- Typography tokens live in `src/styles/typography.css`; the shared switch and
  preference hook persist UI and writeup choices separately in local storage.
- Aim for a professional personal site with a narrow reading column, clear
  hierarchy, useful whitespace, restrained color, and one quiet header animation.
- Let section rules or header artwork extend beyond the text column; keep prose
  readable on wide screens. Use a single-column layout on mobile.
- Favor simple experience/publication/project rows. Avoid nested cards, excessive
  badges, oversized marketing headlines, typewriter text, and scroll hijacking.
- Keep navigation and reading snappy. Text must not wait for animation.
- Use shared CSS tokens for colors, widths, typography, spacing, and motion.
- Provide visible keyboard focus, semantic headings, accessible control names,
  comfortable touch targets, and a static reduced-motion alternative.
- Compare small browser prototypes using real existing content. Change one
  design variable at a time; verify desktop and mobile before presenting results.

## Content and compatibility

- Preserve factual content, authorship, awards, links, and existing project slugs.
  Do not invent employers, dates, publication venues, outcomes, or blog posts.
- Do not restore the removed headshot or pull it from Git history.
- Plan structured content under `src/content/` so adding an entry does not require
  editing layout components. These files are proposed, not yet implemented.
- Reuse existing Markdown writeups, image assets, and math/table rendering.
- Preserve `/#/portfolio`, `/#/portfolio/safenet`,
  `/#/portfolio/sat_diffusion`, `/#/contact`, and `/#/tm-portfolio` behavior
  during the first redesign, including the team-matching analytics event.
- Account for HashRouter when implementing section navigation; plain `#section`
  links can collide with routes. Test direct entry, refresh, and Back/Forward.
- Keep `public/CNAME`, verification metadata, and hosting behavior intact unless
  the task specifically includes changing them.

## Verification

- For implementation, run the build and relevant focused checks. Clearly separate
  pre-existing failures from regressions. Documentation-only edits need a diff
  and link/path check, not repeated application builds.
- Visually check at roughly 390 px mobile and 1440 px desktop; check 320 px for
  overflow. Exercise navigation, theme switching, and content links.
- Check reduced motion and keyboard access when changing animation/navigation.
- Load large media and the Markdown/math renderer only where needed. Measure
  production performance before claiming an improvement.
- Report what changed, how it was verified, and any remaining limitations.
