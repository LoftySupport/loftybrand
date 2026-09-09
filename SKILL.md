---
name: lofty-design
description: Use this skill to generate well-branded interfaces and assets for Lofty, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Lofty Apps Design System

Lofty's brand kit applied to a work-management interface system. Brand palette, logo and Fieldwork typeface are Lofty's; layout, component behaviour, spacing, motion and the 276-glyph icon set (plus 14 Lofty construction glyphs) are the product layer — readability and familiar product patterns come first.

Read `readme.md` for the full rationale and every foundation in detail. This file is the working summary.

## Before you build

1. Read `readme.md`.
2. Look at `guidelines/` — one `@dsCard` specimen per foundation (colour hierarchy, neutrals, pairings, dark mode, type, spacing, elevation, icons, brand assets), plus two composed pattern references: `recommendation-dashboard-v2.html` (data-viz ramp in place) and `pattern-board.html` (Kanban lanes, collapsible columns, outline status chips, drag targets).
3. Read the `.d.ts` and `.prompt.md` beside any component you plan to use. Do not guess props.
4. For an app-shaped screen, open `ui_kits/app/` first — it is a working recreation (sign in, jobs table/timeline, new-job dialog, delivery dashboard) and shows how the parts compose.

## Using it

**Visual artifacts** (slides, mocks, throwaway prototypes): copy the assets you need out of `assets/` into your own project — never reference this folder's paths — and write static HTML. Link `styles.css` for tokens; load `_ds_bundle.js` and read components off `window.<Namespace>` (run the design-system check to get the exact namespace).

**Production code:** copy assets and tokens, read the rules below, and design as an expert in this brand rather than porting files wholesale.

**Templates:** `templates/<slug>/` holds ready starting points. Prefer one over building a deck or document shell from scratch.

If invoked with no other guidance, ask what they want to build, ask a focused round of questions, then act as their designer.

## Colour

Three primaries carry every surface; two accents do the pointing.

| Role | Colour | Hex | Use |
| --- | --- | --- | --- |
| Primary | Foundation Black | `#414042` | Text, inverted surfaces, brand panels |
| Primary | Finisher White | `#ffffff` | Pages, shells, cards |
| Primary | Mid Grey | `#d1d3d4` | Logo and print only — never a UI border |
| Primary accent | Crisp Orange | `#f47e63` | The one filled action per view, active state, first data series |
| Secondary accent | Eco Green | `#005058` | Sparing highlights, later data series |

Neutrals are the **Flint** family and nothing else — one material, numbered steps, secondary to the accent: Flint 50 `#f9f9f6` softer page, 100 `#f4f3ee` page, 200 `#e1e1d9` recessed fills and tracks, 300 `#c6c5ba` borders and dividers, 400 `#b6b6ac` mid-tone fill (chart neutral, disabled — never a text ground); dark mode 700 `#3a3a33` rule, 800 `#24241f` surface, 900 `#1a1a18` page. One page tint per screen. Paper, Mineral, Stone and the cool `#f6f7f7` grey are retired, and Mid Grey no longer draws UI borders — it is a brand colour for the logo and print. Selected tints are warm peach, never pink: `#fae4d5` selected, `#f6d3bf` selected-hover, `#fdf6f0` highlight (`--primary-selected-color`, `--primary-selected-hover-color`, `--primary-highlighted-color`). Status keeps its imported values — `#00854d`, `#d83a52`, `#ffcb00` — because the brand palette has no legible status green or red. Data-viz is **single accent**: `--data-1` Crisp Orange, `--data-2` Orange 70 `#f8a48c`, `--data-3` Orange deep `#d9634a` (flips to Orange 40 `#fbd8cd` on dark), then value only — `--data-4` Foundation Black (Flint 200 on dark), `--data-5` Flint 400, `--data-6` Flint 200.

**Dark mode:** set `data-theme="dark"` on `<html>`. Grounds Flint 900 `#1a1a18` / 800 `#24241f` / raised `#2f2e28`, border Flint 700 `#3a3a33`, text `#f2f1f2`, muted `#b9b8bc`. Orange keeps its hex and keeps white ink; Eco Green lifts to `#20707a` for fills and `#57c3cc` for ink. Control borders lift to `#807f74` for 3:1, and status fills carry Flint 900 ink. Never hand-pick dark colours — the tokens in `tokens/dark.css` already do it.

Hard rules:
- Contrast pairs are measured, not guessed — `guidelines/a11y-contrast.html` lists every pairing in both themes with its ratio.
- Never black on Crisp Orange — not text, not icons. Filled orange carries Finisher White, and because white on orange is 2.6:1 an orange fill is only used for large or semibold labels; use `--lofty-orange-pressed` `#c2543c` when AA text on orange is required.
- Never Crisp Orange on Eco Green — not the logo, not type, not icons.
- Never white on Mid Grey, and never Mid Grey as a UI border. Control boundaries are `--ui-border-color` (black 60 `#8a898d`, 3.5:1 on white); card, panel and table rules are Flint 300.
- Never orange and green in the same view. They are accents, not a pair.
- Never a colour field behind a status pill. Status is an outline chip with an 8px dot; a fill means a call to action, and it is orange with white ink.
- Eco Green is never a shell, a full-bleed background, or a link colour.
- Crisp Orange is never body text on white (2.3:1).
- No colour outside the palette except status.

## Type

Two systems, chosen by surface.

- **Screen:** Montserrat titles, Figtree body, at the product sizes — h1 32/40, h2 24/30, h3 18/24; text1 16/22, text2 14/20, text3 12/16. Negative tracking on headings only (-0.5px h1, -0.1px h2/h3).
- **Brand-led** (decks, print, proposals, hero statements): Fieldwork Geo Demi Bold display, Fieldwork Hum Light body; tracking -0.01em headings, -0.02em body; minimums 14pt headings, 8pt body.

Fieldwork ships as `.woff` in six cuts only, so the brand scale uses weights 300 and 600 exclusively. Print substitute is Montserrat. On screen: Montserrat titles, Figtree body. Fallback order in every stack is brand font, then Montserrat, then Arial — Helvetica, Calibri, Carlito and Aptos are not used.

## Foundations

**Spacing** 2/4/8/12/16/20/24/32/40/48/64/80 — never off-scale. Controls on an 8px rhythm (24/32/40/48 buttons, 32 list rows, 40 nav rows, 56 top bar); content cards pad 24, compact tiles 16; stack inside a card gaps 16; adjacent controls gap 8; label-to-control 4; page gutters 32.

**Radii** All tokens: 2px checkbox & small label · 4px controls, chips, tabs, menu items · 8px cards, menus, dialogs · 12px panels & app icon · 16px full-view modal only · 100px pills (toggle, progress, counter, badge) · 50% avatars. No literal radii.

**Borders** 1px solid, always. `--ui-border-color` on controls, Flint 300 (`--layout-border-color`) on cards, panels and table rules, Flint 200 (`--ui-border-subtle-color`) on decorative rules inside a control; border goes Foundation Black on input hover, Crisp Orange on focus. No coloured left-border accent strips.

**Data viz** `components/dataviz/` carries the dashboard set — StatTile, BarChart, ChartLegend, DonutStat, MeterRow, StatusChip. Categorical colour comes from `--data-1 … --data-6`; for continuous quantity (heat, load, density) use the sequential scale `--data-scale-1 … -5` or `--data-gradient`. All of it comes from the tokens and the neutral steps, so the same markup renders light and dark. Never hard-code a series hex.

**Cards** 1px Flint 300, 8px radius, white fill, no shadow at rest. Shadow only when something floats — `xs` row hover, `small` dropdowns, `medium` menus/toasts/tooltips, `large` modals. Neutral black at 10–30%, never tinted orange.

**Backgrounds** Flat colour. No gradients, no photographic heroes, no patterns, no grain. The twin-triangle mark at low prominence is the only decorative element.

**States** Hover is a neutral wash `rgba(65,64,66,.08)`, not a colour change; filled elements darken to their `-hover` step. The one exception is the primary orange button: on hover the fill drops out and orange becomes the ink and the 1px line, then press is a `#c2543c` fill at 0.95 scale. On a board, a card lifts on hover — border steps to Flint 400 and `--box-shadow-small` appears — and the lane you drag over takes a dashed orange edge on `--primary-highlighted-color`. Press is scale — buttons `0.95`, icon buttons `0.9`, over 70ms. Focus is a 3px orange-at-50% ring plus 1px inset, never removed. Selected is tinted `#fae4d5` with black text, not filled.

**Motion** Productive 70/100/150ms for anything the user drives; expressive 250/400ms for entrances. Easings `cubic-bezier(0,0,0.35,1)` in, `cubic-bezier(0.4,0,1,1)` out, `cubic-bezier(0,0,0.2,1.4)` for the one emphasised pop (chips). No parallax, no scroll-triggered animation.

**Transparency** Only the hover wash and the modal backdrop (black at 70%). No frosted glass, no backdrop blur.

**Layout** Fixed 56px top bar, 224px side nav, both persistent, both white with grey rules. Content scrolls under them. Sticky grey table headers. Toasts top-centre. Dialogs centre over the backdrop.

## Icons

290 SVGs in `assets/icons/`: 276 product glyphs plus 14 Lofty construction glyphs drawn to the same rules — Projects, JobHouse, JobSite, Reports, Company, Maintenance, Drawings, Estimating, Costs, Crew, HardHat, Delivery, Materials, Approval. Single-weight, mostly-filled, 20×20 origin, rounded terminals. Use the construction set for Lofty-specific navigation and object types before reaching for a product near-equivalent. See `guidelines/icons-grid.html`.

Render through the `Icon` component — a CSS mask over `currentColor`, so glyphs inherit their context. Reference by file stem: `<Icon name="MoreActions" />`. Sizes 14/16/18/20/24. Neutral by default; orange only when the icon *is* the action; status colours only in status contexts. PascalCase names as upstream.

No substitution, no CDN, no icon font, no emoji, no Unicode glyphs standing in for icons. **Because icons render as masks, a white shape inside an SVG reads as solid — cut holes with `fill-rule="evenodd"`, never with a white fill.**

Brand marks are not icons. `assets/brand/` holds the lockup in four colourways, the square app icon, the mark and the favicon. Pick the cut that matches its background rather than recolouring; clear space equals the height of the "L".

## Handoff to code

Everything a codebase needs is in this folder and nothing depends on the authoring tool:

- `styles.css` → `tokens/*.css`: link the entry file, or copy `tokens/` and import them. Every colour, size, radius, shadow and easing is a CSS custom property; component code must reference tokens, never literals.
- `components/<group>/<Name>.jsx` + `.d.ts` + `.prompt.md`: the `.d.ts` is the props contract, the `.prompt.md` is the usage note and example, the `.jsx` is a reference implementation (React, inline token references). Port the contract and behaviour; do not depend on `_ds_bundle.js` in production — it is a preview bundle.
- `assets/icons/*.svg`: ship as-is and render through a mask/currentColor wrapper equivalent to `Icon`. `assets/fonts/`: six Fieldwork `.woff` for brand-led surfaces; product UI loads Figtree + Montserrat.
- `assets/brand/`: logo colourways, app icon, silhouettes.
- `ui_kits/app/`: composition reference for the shell, tables, dialogs and dashboard.
- `guidelines/*.html`: open in a browser for visual specimens of each foundation.

## Voice

Australian English (`organise`, `utilisation`, `kilometre`).

- Sentence case everywhere. Never Title Case, never ALL CAPS except the 12px nav eyebrow.
- Second person, active voice. The product never says "I".
- Buttons are verbs and name the object: "Create job", not "Submit".
- Labels are nouns, one to three words.
- Empty and error states say what to do next.
- Numbers concrete and unrounded: "128 jobs", "91% on time".
- No emoji. No exclamation marks.
- Helper text is one sentence.
- Brand-led surfaces may be shorter and bolder — one display statement is allowed to carry a page.
