# Personal website: UI redesign and Codex workflow

## Inline project awards and larger images — September 12, 2026

Rowan requested integrating awards into Projects and removing the Awards section.
The current section order is Experience → Projects → Research → Contact; both
navigation menus and section numbering follow that order. Old `?section=awards`
links now resolve to Projects, including refresh and browser history navigation.

- DreamCatcher displays its two TartanHacks category awards under its description,
  preserving the $3,000 team-prize qualification.
- A compact Exploring Perforated Backpropagation project entry carries its third
  place and $1,000 team prize. Its description comes from the supplied knowledge
  base publication record. The complete author list and preprint citation remain
  in Research. Its event month remains unresolved, so it shows 2025 and follows
  projects with more precise dates in that year; no month or image is invented.
- Award text now lives with each project in `src/content/projects.ts`; the separate
  awards data module was removed.
- Rowan's follow-up reduced project images and returned them to the right of
  the copy: up to 140px on desktop, 110px on smaller desktop widths, and 96px
  on mobile. At 360px and below they stack beneath the text as small previews.
  Entries without images retain the full text width. Original proportions and
  measured intrinsic dimensions are preserved. Clicking opens the original
  image in a new tab.

Verification: build/typecheck passes; all three awards and four images are present.
Browser checks passed the old awards destination, refresh and Back, Research
navigation, full-size image opening, and no overflow at 320, 390, 760, 761, 800,
900, and 1440px in light and dark themes. Desktop/mobile screenshots inspected.
Existing missing ESLint configuration and build warnings remain. Local only.

## Project dates from GitHub history — September 12, 2026

At Rowan's request, project dates now use the recorded implementation activity
in each linked repository's default-branch history. These are inferred periods,
not verified kickoff/completion dates: initial uploads can contain earlier work.
Dates below use America/New_York time consistently. The homepage sorts by the
latest project month, newest first, using `sortDate` in `src/content/projects.ts`.

| Project | Display period | Evidence |
| --- | --- | --- |
| Satellite Image Generator | Dec 2025 | [Scripts and notebook uploaded December 10](https://github.com/morse-rowan/satellite_diffusion/commit/a9ace8498f5693adbbe3f617ff72bbf3107332da); [DDIM sampling fix December 16](https://github.com/morse-rowan/satellite_diffusion/commit/2707e18ad593b7364dbfb43205b92bbe7e123214). |
| Automatic Highlight Reel Generator | Jul–Aug 2025 | Repository history begins July 11; [implementation setup July 12](https://github.com/pitt-cic/automatic-highlight-reel-generator/commit/ad2341736a23bc4d55eaefbff13234ae9db51a45) through [frontend integration August 26](https://github.com/pitt-cic/automatic-highlight-reel-generator/commit/9f917536b6078534eba89aa747e38a139c33db1d). |
| DreamCatcher | Feb 2025 | [Initial app February 5](https://github.com/morse-rowan/DreamCatcher/commits) through EEG/video pipeline, notebooks, and results on February 8; agrees with the resume's TartanHacks month. |
| SafeNet | Dec 2024–Jan 2025 | [Training notebook and results December 31](https://github.com/morse-rowan/SafeNet/commit/903f9fb7e43506dbff8f37c35546827de167da75); [pipeline/training/testing notebooks January 3](https://github.com/morse-rowan/SafeNet/commit/d04d10849c83f560351129e64d318e8dacc534c0). The first timestamp is January 1 UTC, December 31 Eastern. |

Reviewed all 12 Satellite, 45 Highlight Generator, 11 DreamCatcher, and 26 SafeNet
commits available in those default-branch histories. SafeNet's late-January and
February README-only updates do not extend its development period. The Highlight
Generator's February 2026 licensing/disclaimer edit is by another contributor
and does not extend Rowan's project period or internship dates.

## Paper exterior and timeline — September 12, 2026

Rowan requested the ruled-paper exterior and bounded one-page feel of
[Shreyash Ranjan's site](https://shreyashranjan.com/), with experience before
projects and awards. This local pass retains the profile sidebar and Bash name.

- The 1040px sheet has a warm light background with ruled outer margins;
  Graphite dark mode has matching subdued margins. The footer's **Paper**
  selector compares Ruled, Grid, and Plain and remembers the selection.
- Sections are Experience → Projects → Awards → Research → Contact. Aligned
  dates, fine vertical rules, and small markers connect entries. Current roles
  use filled markers. Mobile stacks the dates above the entry text and keeps
  a small visible paper margin. Section heading rules extend beyond the prose.
- `src/content/experience.ts` adds Edwards Lifesciences, Kovashka's lab,
  Pitt's AWS Cloud Innovation Center, and Medpath. `src/content/awards.ts`
  separates category placements and team prizes from project descriptions.
- Content sources: the user-supplied `Resume Studio/resume/build/main.pdf`,
  the corresponding knowledge-base experience/project/award/publication records,
  and the site's existing project descriptions, images, links, and authors.
  Graduation is now December 2027, explicitly confirmed in the knowledge base.
  Edwards retains the estimated effort-savings qualification. SafeNet is a
  prototype with unsafe-region recall, not a deployed safety system. The paper
  is labeled an arXiv preprint, separate from its hackathon recognition.
- The initial pass left SafeNet and Satellite Image Generator undated; the
  GitHub-history follow-up above now supplies their inferred periods and sorts
  all projects chronologically. Perforated AI still shows only 2025 because
  its event month differs across source records.
- Existing `?section=work` and `/#/portfolio` destinations map to Projects.
  Both writeup slugs, contact route, team-matching route, and gallery remain.

Verification: production build/typecheck passes. Browser checks passed paper
and font persistence, theme switching, section focus and Back/Forward, legacy
route refresh, both Markdown writeups and their return links, reduced-motion
Bash rendering, keyboard skip-link activation, loaded project images, and the
team-matching/gallery routes without JavaScript errors. No homepage overflow
at 320, 390, 760, 761, 800, 900, or 1440px in either theme. Desktop and mobile
screenshots were visually inspected. The missing ESLint configuration and
existing Browserslist/detail-chunk build warnings remain. Nothing is published.

## Accepted local implementation — September 12, 2026

Rowan approved applying the compact profile-sidebar layout to the actual local
website, using the **Graphite palette with no lava lamp**.
This supersedes the exploration-only scope recorded below. Work is isolated on
`codex/graphite-ui`. The earlier typography and gallery state is saved as local
checkpoint `9dc0550`; the gallery remains available at `/designs`. No publishing.

- `Home.tsx` implements a 1040px bounded layout: 245px sticky profile sidebar,
  64px gap, compact work/research/contact column. At 760px the profile stacks
  above the work. Navigation retains the original system monospace stack.
- `graphite.css` uses the selected Graphite light/dark colors. Existing saved
  theme settings are respected; new visitors default to light.
- The primary navbar now uses the selected bare Bash signature: `my@site:~$`,
  lowercase `rowan morse`, amber text, and `.` / `_` Morse symbols. JetBrains
  Mono without ligatures applies to the complete prompt. Rowan types once;
  the surname alternates between `__ ___ ._. ... .` and `morse`, backspacing
  character by character, holding the complete Morse-code or text surname for
  3.2 seconds. A single character-step timer pauses offscreen or when the tab
  is hidden. Reduced motion shows the resolved name without a cursor. The
  profile name remains static and title-cased.
  This approved exception supersedes the earlier no-typewriter guidance.
  Verification: build/typecheck passed; the full loop and both backspacing
  sequences, offscreen suspension, reduced motion, theme switching,
  section navigation, and writeup refresh/home navigation passed browser checks.
  No overflow or navbar overlap at 320, 390, 760, 800, or 1440px in either theme.
  Existing Browserslist and large writeup-chunk build warnings remain.
- JetBrains Mono remains the default main UI. Reading remains the independent
  default for writeups, with both choices available and persisted.
- Profile, projects, publications, awards, and links now live in `src/content/`.
  All four existing work entries and the complete publication author list are
  retained. Technology lists use small native disclosures. No invented roles,
  experience dates, or new claims have been added.
- Both full Markdown writeups keep their existing routes, HTML, tables, images,
  and math. The renderer and KaTeX load only for detail routes. Media are lazy
  loaded with intrinsic dimensions reserved for the existing PNG/GIF assets.
- Section links use HashRouter query parameters. Legacy portfolio/contact URLs
  land on homepage sections; team-matching routing and analytics remain intact.
  SafeNet headings have stable IDs and its TOC now uses router-aware links.
- Build passes. Homepage application JS is about 31.5kB minified plus the shared
  144.5kB entry; the roughly 616kB Markdown/math chunk is deferred. These are
  bundle measurements, not a browser performance benchmark. The existing large
  detail-chunk and stale Browserslist warnings remain. Missing ESLint config is
  pre-existing; lint is not claimed to pass.

Browser checks include desktop 1440px, mobile 390px, 320px overflow, Graphite
light/dark, independent font controls, full writeup rendering, SafeNet section
links, direct entry/refresh and Back/Forward, and legacy route entry. No
deployment, dependency installation, or hosting configuration changes are needed.

## Earlier exploration history

Prepared September 12, 2026. Setup and the round-1 local typography comparison are
complete. The selected typography is now applied to the local site's existing
pages and writeups. The comparison remains development-only. Nothing is published.

## Accepted typography

### Current scope: visual exploration only

#### Latest drafts: sidebar and lamp placements

O / Navbar lamp (`?design=navbar-lava`) puts the original lamp directly behind
the top navigation in an 88px header. Navigation keeps its original monospace
font with dark text, while the palette switch only affects the page below.
The navbar lamp also remains on the sample writeup, without a second article lamp.
Desktop and 390px mobile compositions were inspected; 320px had no horizontal
overflow. Build passes. This is still a development-only visual draft.

The **Sidebar studies** group now adds I / Lava sidebar, J / Paper sidebar,
K / ASCII atlas, and L / Contour sidebar. All retain Rowan's preferred profile
on the left and a continuous compact work → research → contact column. The order
is exploratory, not a preference for research or work first.

The **Lava placements** group adds M / Profile lamp (above the sidebar name,
Graphite default) and N / Work-column lamp (above the work, Blue-gray default).
The original full-width I ribbon remains available as a comparison. Each lava
draft has a Page palette selector: Violet, Graphite, Blue-gray, and Sage, with
light/dark variants. These only change surrounding components. Lamp gradients
always retain the original stops: background `#835eff` → `#ff008d`, blobs
`#ff9298` → `#ff008d`. No faded dark-mode overlay changes these colors.

Mobile plan is implemented in the drafts: at 760px and below, the profile moves
above the content, loses sticky positioning, and section links become a wrapping
horizontal row. At 360px and below, project thumbnails move below their text.
The 390px Mobile preview control uses the same container queries as a narrow
browser. Profile lamps become a 55px band; work-column lamps become a 40px band.
Writeup samples retain Reading prose and use a small lamp above the article.

ASCII atlas uses a custom procedural text globe (one pre element, 720 cells,
maximum 12 frames/second). It pauses offscreen, on hidden tabs, on reduced-motion
preference, and with the shared Pause control. No rendering dependency was added.
Current alternatives researched include [ascii-canvas](https://github.com/phyrextsai/ascii-canvas)
and [glyphcss](https://glyphcss.com/api/react/); the exact component Rowan saw is
unidentified. These are references, not installed dependencies or measured
performance claims for this prototype.

New files: `src/design/sidebar-studies.css`, `src/design/AsciiGlobe.tsx`.
The original A–H drafts remain intact. Actual site page components and hosting
were not changed. Build passes with the existing bundle/Browserslist warnings.
I–L homepages and a Reading writeup were checked for overflow at 320px, and
the ASCII pause state and profile stacking were verified. These remain small
visual drafts, not a complete production implementation.

**Latest feedback:** Rowan prefers Research Index for its compactness and clarity,
not necessarily its research-first order. The next drafts combine that density
with a bounded, one-page layout inspired by the Shreyash reference.

The new **Index studies** group at `/designs` contains:

- E / Lava index (`?design=lava-index`): shallow pastel lava ribbon, solid nav
  and content backgrounds, small purple accents, compact project rows.
- F / Light index (`?design=light-index`): minimal light page with a single
  reading column, margin section labels, and fine rules.
- G / Margin ledger (`?design=ledger`): slim sticky section navigation, warm
  paper, numbered entries along a vertical rule, text-only work list.
- H / Contour index (`?design=contour`): small animated contour sketch, blue
  accents, and small thumbnail annotations alongside project descriptions.

All four keep the same work → research → contact order for comparison; this is
not a final content-order decision. Original A–D drafts remain under **Original
directions**. A floating **Compare drafts** link returns to the gallery controls.
New styles live in `src/design/index-studies.css`. No public page changes or new
dependencies were needed. Existing independent font/theme/motion controls and the
Reading-default writeup sample remain available.

Validation: build passed with the existing bundle-size/Browserslist warnings.
Inspected all four desktop compositions, mobile lava/dark/paused rendering, and
checked every new homepage for overflow at 320 px. The Reading writeup also fits
at 320 px. Section navigation from a writeup focuses and scrolls to the requested
homepage section; Compare drafts returns focus to the controls. Reduced motion
has a CSS fallback; OS-level emulation was not part of this check.

Rowan requested several lightweight designs before further changes to the actual
site. Pause the foundation/homepage refactor. Use `/designs` for four disposable
frontend compositions: A Familiar (purple/lava/panels), B Fieldnotes (warm paper,
narrow column, margin labels), C Research index (profile sidebar and compact rows),
and D Visual portfolio (sage, offset intro, larger project imagery).

Each has the same existing publication and two projects, plus a sample satellite
writeup. Homepage defaults to Mono, writeup prose to Reading, and navigation uses
the original system monospace. Font, theme, and motion controls are local to the
playground and do not change production-page preferences. Design and page are
encoded in the URL for direct comparison links. Light and dark themes are included;
motion can be paused and respects reduced-motion preferences.

Implementation is isolated in `src/design/DesignGallery.tsx` and
`src/design/design-gallery.css`, behind the development-only `/designs` entry.
Keep the older `/design-study` font study available. No production page components
were changed in this exploration. These are visual samples, not a complete content
migration; the full SafeNet/writeup links still open the existing site routes.

Feedback can mix directions: “A's header, C's density, D's project images.”
No Figma, dependency additions, backend work, or publishing is needed for this round.

- Main UI: JetBrains Mono by default.
- Writeups: Reading (Segoe UI/Arial) by default.
- Both offer Mono/Reading controls, with independent preferences remembered in
  the browser. Choosing Mono for a writeup must not alter the main UI preference.
- Navbar: keep the original hosted site's system monospace stack, verified in
  the live browser: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
  "Liberation Mono", "Courier New", monospace`. It stays the same with either
  content font choice. The exact rendered fallback varies by platform.
- Shared tokens: `src/styles/typography.css`. Controls:
  `src/components/TypographySwitch.tsx`. Persistence:
  `src/hooks/useTypographyPreference.ts`.

This typography pass preserves the existing page layouts. Carry these decisions
into the upcoming homepage/layout refactor and subsequent motion round.

## Round 1 preview

Open `http://127.0.0.1:5173/design-study` with the development server running.
A uses Segoe UI/Arial sans-serif prose with JetBrains Mono labels; B uses
JetBrains Mono content. Both preserve the hosted navbar's system monospace and
share the same content, colors, spacing, image,
and static wave header. The theme control supports light and dark comparisons.
The sample contains the existing intro facts, publication, satellite project,
and contact details. It does not invent experience or a longer bio.

Implementation: `src/design/TypeStudy.tsx`, `src/design/type-study.css`, and a
development-only entry in `src/main.tsx`. The original routes retain their layout.
Production build passes; study-only code is absent from built
assets. JetBrains Mono is now loaded for the main site. The pre-existing
large-chunk/Browserslist warnings remain. Lint remains
unavailable until round 2 repairs its missing configuration.

Browser checks covered desktop at 1440 px, mobile at 390 px, and overflow at
320 px. The font loaded, A/B and theme controls worked, radio options supported
arrow-key selection, and the checked preview reported no console errors or broken
loaded images. Section links explicitly scroll and focus their destination in the
embedded preview; the comparison controls stay visible while reading. The study
now shares the accepted main UI preference instead of defaulting to Reading.

## Recommendation

Build a compact, one-page introduction to Rowan's engineering and research work,
with separate pages for substantial project writeups and future articles. Keep
React/Vite for this first pass. Use the live browser as the design workspace;
Figma is optional, not a prerequisite.

Working audience assumption: a balance of engineering recruiters and research
collaborators. Put concrete work and the existing publication close to the top.
If Rowan chooses a stronger focus later, change section order and emphasis first.

## Reference direction

These observations come from the linked sites and browser inspection. The
recommendations are an interpretation of Rowan's preferences, not a request to
copy another person's design or content.

| Reference | Observed qualities | Apply to Rowan's site |
| --- | --- | --- |
| [Shreyash Ranjan](https://shreyashranjan.com/) ([source](https://github.com/codingshreyash/codingshreyash.github.io)) | About, experience, projects, contact on one page; approximately 800 px content sections at the inspected desktop width; JetBrains Mono; decoration extends into side margins | Stable reading width, predictable section rhythm, compact navigation; compare monospace typography in a prototype |
| [Mesut Erhan Unal](https://erhan.in/) | Space Mono on visible text; pale gradient banner with a subtly shifting curved lower edge; restrained navigation | One shallow, low-contrast animated header, with readable text independent of the effect |
| [Ritwik Gupta](https://ritwikgupta.me/) and [blog](https://ritwikgupta.me/blog/) | Publication titles, authors, summaries, and direct research links; separate dated article archive | Make research easy to scan; support longer writing as its own destination when there is content |

## Audit of the current repository

### Git and runtime

- Actual repo: `C:/Users/rowan/Desktop/personal-builds/rowanmorse.me/morse-rowan.github.io`.
- Remote: `https://github.com/morse-rowan/morse-rowan.github.io.git`.
- After `git fetch origin`, local `main` and `origin/main` were both
  `aaa34c93a8ea2fa1566c74460321f40492b1995d`: **0 ahead / 0 behind**, clean worktree.
- Created `codex/ui-design-setup` for these setup documents. No commit, push,
  merge, dependency update, or deployment performed.
- React 18, TypeScript, Vite 5, Tailwind 3, React Router with hash routes.
- Existing Markdown renderer supports math, tables, and embedded HTML.
- Local development preview starts successfully; About and Portfolio inspected
  in the browser at desktop width. This is not a full accessibility/mobile audit.
- `npm run build`: passes. Main JS: **799.38 KB minified / 248.37 KB gzip**;
  CSS: **72.07 KB / 15.95 KB gzip**. Vite reports a large-chunk warning, and
  Browserslist reports stale browser data. These are baseline observations.
- `npm run lint`: fails before checking source because no ESLint config exists.
- Installed dependencies were used; fresh-install reproducibility remains to check.
- Workflow deploys `main` through GitHub Actions. A legacy `gh-pages` script also
  exists. Verify Pages settings before release; no hosting migration is needed.

### What to improve

1. **Show the work earlier.** The home page has an unfinished bio, while the
   publication and projects are on another route. A visitor should understand
   Rowan's interests and see evidence without navigating away.
2. **Unify alignment.** Header content spans the viewport; About uses a narrower
   container than Portfolio. Use shared layout widths and consistent edges.
3. **Reduce visual weight.** The saturated pink/purple header, purple panels,
   nested cards, and shadows compete. Replace most boxes with spacing and rules.
4. **Improve typography deliberately.** Google Fonts requests `Montserrat`, but
   CSS specifies `Montserrat Variable`; the family names appear mismatched.
   Verify the actual loaded font during implementation. Avoid loading unused Lora.
5. **Make content easy to edit.** Data arrays are embedded inside `Portfolio.tsx`.
   Contact details are duplicated. Role/title/date information for a proper
   experience timeline is incomplete and must come from Rowan.
6. **Fix small functional issues.** Contact displays the correct address but its
   link uses `mailto:email@example.com`. Social icon links and the mobile-menu
   button lack descriptive accessible names. Hidden mobile-menu keyboard behavior
   needs review. The lava CSS includes an incomplete border-radius declaration
   and no reduced-motion handling.
7. **Keep research pages fast.** `ProjectDetail` and its Markdown/math dependencies
   are eagerly imported. Some individual GIF assets are about 10 MB; reserve
   them for relevant writeups and provide lightweight previews.

Preserve the removed-headshot decision. A portrait is not needed for this layout.

## Proposed layout and visual rules

The content column should feel steady as the browser widens. Start with a
760–800 px main column and 60–68 character prose measure, inside an approximately
1040 px outer area for dates, section labels, and occasional research figures.
Use 20–24 px mobile side padding. Full-width artwork and thin rules may extend
outside this area; paragraphs should not stretch with them.

The first homepage should read in this order:

1. Compact header: name/home link, Work, Research, optional Writing, Contact,
   and a theme control. Add a resume link only once a current file is supplied.
2. Intro: Rowan Morse, short factual positioning, two or three bio sentences,
   and direct email/GitHub/LinkedIn links.
3. Experience: organization, role, dates, and one or two outcome-oriented lines.
   Use only confirmed facts. The existing CIC project can appear as selected
   work while formal role and dates remain unavailable.
4. Research: the existing perforated-backpropagation publication, complete
   author list, accurately labeled status/venue, and paper/code links where known.
   Keep award information distinct from publication venue.
5. Selected projects: three strong entries with title, short description,
   optional small image, and visible source/writeup/demo links.
6. Writing: a compact list of real dated posts, when available. Hide this section
   and its navigation item until the first post exists.
7. Contact/footer: one sentence and direct links, without a separate large card.

Start visual comparison with two controlled options using identical content:

- **A — Reading-first (recommended):** neutral sans-serif prose and headings,
  JetBrains Mono for dates and small labels; warm white background, near-black
  text, one muted blue accent. Compare a neutral charcoal dark theme as well.
- **B — Mono-first:** JetBrains Mono throughout, with the same width, spacing,
  content, color, and motion. This tests the quality Rowan liked in the references
  without changing every design variable at once.

Starting type sizes: 16–18 px body, 1.6–1.75 line height, 36–48 px name on desktop,
and 30–36 px on mobile. These are prototype values, not locked specifications.
Use a short spacing scale such as 4, 8, 12, 16, 24, 32, 48, 64 px.

### Header motion

The lava lamp is not inherently a bad idea; its current saturation and large
blobs give it more prominence than the content. First try a shallow gradient
band with two quiet overlapping SVG curves, about 100–160 px tall, moving a
small distance over 18–30 seconds. Keep it separate from the text background
if contrast varies. Prefer transform/opacity animation and no new animation
library for this effect.

Review it beside a static frame and, if desired, a desaturated lava variant.
Keep only one decorative effect. No animated typing, pointer trails, parallax,
scroll-delayed text, or repeated card entrance effects. Provide a static
`prefers-reduced-motion` state and a pause control if motion runs continuously.
The mobile composition must still work with motion disabled.

## Maintainable implementation

Proposed structure (not created in this setup):

```text
src/
  content/
    profile.ts       # bio, contact links, optional resume
    experience.ts    # organization, role, date range, summary, links
    publications.ts  # authors, status/venue, year, links, optional award
    projects.ts      # stable slug, description, links, image, featured flag
    posts.ts         # slug, date, title, summary, markdown path, draft flag
    types.ts         # shared content types
  components/
    layout/          # shared container, header, section, footer
    content/         # experience, publication, project, article-list rows
    HeaderArt.tsx
  pages/             # home, archive, project detail, article detail
  styles/
    tokens.css       # theme colors, typography, widths, spacing, motion
public/
  projects/          # retain existing writeup paths
  sat_diffusion/     # preserve existing Markdown and image URLs
  posts/             # add when the first article is ready
```

Use typed arrays for short structured entries and existing Markdown for prose.
Avoid adding a CMS or MDX during this pass. One new experience should require
one content entry, not a component change. A new article should require one
Markdown file plus one metadata entry; `draft` must exclude it from navigation
and public rendering, not just the list. Static public files are still accessible
by URL, so unpublished/private writing must stay outside `public/`.

Reuse the existing two project writeups and math/table behavior. Lazy-load detail
routes so the homepage does not eagerly load the Markdown/math renderer. Keep
page metadata and routing improvements as a separate measured decision. If a
search-indexed blog becomes central, assess static generation/prerendering then.

Retain the existing hash URLs, especially links to SafeNet, satellite diffusion,
and `/#/tm-portfolio` with its custom analytics event. Homepage navigation must
be router-aware: use a section parameter such as `/#/?section=research`, then
scroll after the home page mounts. Test refresh, browser history, and keyboard
focus; plain `#research` cannot be assumed safe with HashRouter. Clean URLs are
a later routing/hosting change, not a prerequisite for a one-page homepage.

## Iterating with Codex without Figma

Work in small, reviewable rounds. The loop is: **preview → describe a specific
reaction → change one thing → inspect desktop/mobile → keep or revise**.
Use screenshots when useful, but normal feedback such as “too spacious,” “the
text feels too mechanical,” or “keep this header, make the movement smaller” is
enough. Record accepted choices in this plan so later sessions remain consistent.

| Round | Concrete deliverable | Completion check |
| --- | --- | --- |
| 0. Setup — this task | Audit, README, AGENTS.md, this plan, feature branch, baseline preview | Repo sync verified; baseline commands attempted; no UI edits |
| 1. Visual study | Temporary local comparison of intro, one publication, one project row in A/B typography | Same real content; inspect about 390 px and 1440 px; choose typography/width; do not ship the comparison UI |
| 2. Foundation | Repair ESLint config using installed tooling; extract shared content and tokens; fix contact link | Build and lint pass; old routes/data remain valid; avoid unrelated dependency upgrades |
| 3. Homepage | Implement selected layout and anchored sections, theme, responsive navigation | Main story readable on one page; no invented experience; keyboard and mobile checks pass |
| 4. Motion | Implement the chosen restrained header effect | Static/reduced-motion/pause behavior; no text delay or layout shift; inspect desktop and mobile |
| 5. Research and writing | Restyle existing details; add article routes/archive when real writing exists | Existing math, tables, and figures render; working deep links, history, and draft behavior |
| 6. Release review | Production preview, visual QA, performance comparison, final diff | Fix regressions; verify Pages source; publish only when Rowan requests it |

Each implementation round should be a focused commit or PR, once requested.
Preserve the GitHub Pages workflow, custom domain, analytics behavior, and factual
content while iterating. Remove temporary comparison routes before release.

### Ready-to-use prompts

**Start the visual study**

> Read AGENTS.md and docs/ui-redesign-plan.md. Build the round-1 local comparison
> of reading-first and mono-first typography using my existing intro facts,
> publication, and a project. Keep content, widths, colors, and motion identical
> so I can compare type. Show desktop and mobile. Do not publish.

**Make focused adjustments**

> Keep the chosen typography and section order. The project rows feel too large.
> Reduce their vertical spacing, keep descriptions readable, and show before/after
> at desktop and mobile widths. Change only the project rows.

**Test motion**

> Keep the current layout. Compare a static header with a very subtle moving
> wave inspired by erhan.in. Use the same colors and height, honor reduced motion,
> and include a pause option. Show both locally before we choose.

**Add experience after the content refactor**

> Add this experience to the shared content file using only the facts below.
> Match existing ordering and presentation, flag missing dates instead of
> inventing them, and verify the result in the homepage preview: [paste facts].

**Review before publishing**

> Review this branch against main. Run build and lint; inspect 320 px, 390 px,
> 768 px, and 1440 px layouts, keyboard navigation, themes, reduced motion, old
> project links, the team-matching route, and missing-content behavior. Compare
> the production bundle with the recorded baseline and report remaining issues.
> Do not publish yet.

Figma becomes useful if Rowan wants to edit visual compositions personally or
collaborate with a designer. If that happens, transfer the selected browser design
into frames/components and a small token library after the direction is settled.
No plugin installation or Figma account setup is necessary for the workflow above.

Codex project instructions are supported through repository `AGENTS.md`; see
[official OpenAI documentation](https://learn.chatgpt.com/docs/agent-configuration/agents-md).
The staged design process here is a recommendation tailored to this repo.

## Definition of done for the redesign

- Real work, research, and contact details are easy to find; no placeholder bio,
  fabricated achievements, restored headshot, or empty blog section.
- Cohesive typography, bounded line lengths, consistent alignment, and no
  horizontal scrolling at 320 px through desktop widths.
- Visible focus, labeled controls, readable contrast, touch-friendly links,
  functional keyboard navigation, and restrained optional motion.
- Existing deep links, Markdown images/tables/math, custom domain, and
  team-matching analytics continue to work.
- Adding an experience is a content edit. Shared components own the layout.
- Build and repaired lint pass. Production preview has no unexplained errors.
- Measure mobile Lighthouse with consistent settings; aim for LCP ≤ 2.5 s,
  CLS ≤ 0.1, and field INP ≤ 200 ms when field data is available. These are
  targets, not audit results. Lab interaction checks do not prove field INP.
  See [Google's Web Vitals guidance](https://web.dev/articles/vitals).
- Aim to reduce homepage application JS below 150 KB gzip, measured separately
  from third-party analytics. Record the measured result and investigate misses
  rather than concealing warnings or calling the site fast without evidence.

## Decisions to collect during implementation

Audience emphasis; preferred initial theme; motion variant;
current bio and experience dates; resume link; whether the first writing content
is ready. None of these blocks the setup or the initial visual study.
