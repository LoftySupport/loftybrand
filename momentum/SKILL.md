---
name: lofty-momentum
description: Use this skill to design and build Lofty Momentum interfaces and assets: the Lofty Hub staff app, the purchaser portal, and brand-led screens and mocks, for production or throwaway prototypes. Contains the three themes, tokens, type, glass and glow surfaces, component rules, the App and Portal reference screens, and the rules in force.
user-invocable: true
---

# Lofty Momentum

Lofty's brand layer for the Hub and the shared tokens for the purchaser portal: three themes (Sunrise, Deep Eco, Twilight), Outfit headings, Onest body, a frosted glass frame over soft glows, and an AI-first landing. monday.com Vibe stays the base: Vibe supplies the semantic token names and component behaviour, Momentum supplies the values. Momentum is never a second component system.

This file is the working summary. The rules in force are in `momentum/README.md` in loftysupport/loftybrand and in the Lofty Momentum artifact's README.

## Before you build

1. Read the rules below. Where a picture and a rule disagree, the rule wins. Where this folder and the Hub's rulebook disagree, the Hub's rulebook wins in the Hub (next section).
2. Open `guidelines/`. The cards are grouped **App screens**, **App components**, **Hub components** (the built `@lofty/ui` components), **Page templates** (the seven templates), **Portal**, **Foundations** (colour, type, spacing and glass, the eleven backgrounds) and **Brand** (the cover and the print templates). Build a new app screen from the reference screens, not from a single component.
3. Read the component rule in `docs/components/<Name>.md` (in the repository, `momentum/components/<Name>.md`) before using a component. Do not guess sizes or states.
4. The type setup and how it was chosen are in `font-lab/`. `font-lab/SETUP.md` has the weights and colour values to build from.
5. What is still open is in `HANDOFF.md`. Do not decide it for Amber: ask, one question at a time.

`CONSOLIDATION.md`, `reference/` and `guidelines/reconciliation.html` are dated history. Do not build from them.

## Where the Hub's rulebook decides

`docs/ui-system/PATTERNS.md` in loftysupport/loftyprojectapp is the one rulebook for the Hub. Amber's brand-check decisions of 5 October 2026 (B1 to B15 in the Hub's `docs/ui-system/BRAND_CHECK.md`), her 7 and 8 October type and selected-state decisions, and the Hub's page layouts (`LAYOUTS.md`) outrank anything in this folder for a Hub screen. This folder carries those values from 12 October 2026. Momentum's own sizes (type 15, 17, 40, 52 and 120; the 64px condensed rail; 280px glance panel) apply on the AI landing, the portal and brand-led surfaces only.

- **Check a Hub change against both** with the Hub's `brand-check` skill, and run the Hub's `run-lofty-hub` skill to compare the live app's computed values with these tokens.
- **Not carried, on purpose:** spacing 2, 20, 40 and 80; 40px controls; peach selected; 16px panels.
- **Still differs in the Hub, so a Hub screen follows the Hub:** status and chart colours, the Sunrise page ground, neutral greys, and dark shadows (`docs/ui-system/BRAND_CHECK.md`, section "Found by the live-app comparison").

## Using it

- **Visual artifacts and prototypes:** link `styles.css`, set `data-theme="eco"` or `"twilight"` on the root element for the dark themes (Sunrise is the default), and build with semantic tokens only. Copy the assets you need out of `assets/`. Treat every name, figure and date in the previews as sample content, never as data.
- **The Hub:** apply Momentum through the theme files (`app/src/theme/tokens.css` and `loftyTheme.ts`), never in components or pages. `tokens/vibe-theme.css` maps every Vibe semantic name onto a Momentum token. Re-declare at `body.light-app-theme` specificity or Vibe's class wins.
- **Edit the generator, never the token files:** values live in `scripts/gen-tokens.py`, which writes `tokens.json` and the `tokens/*.css` files.
- If invoked with no other guidance, ask what they want to build, ask a focused round of questions, then act as their designer.

## Themes and colour

Build with the semantic tokens (`--page`, `--ink`, `--ink-muted`, `--surface-card`, `--surface-solid`, `--line-control`, `--action`, `--on-action`). Read a primitive only to define a semantic token.

| Primitive | Hex | Job |
| --- | --- | --- |
| Crisp Orange | `#f47e63` | Brand and the primary colour for interactive elements. Ink on it is Deep Eco, 6.8:1 |
| Deep Eco | `#081a1c` | Text ink in Sunrise, and the ink on orange and Current |
| Plum | `#32021f` | The AI mark and AI-led tiles. An accent, never a page |
| Eco Green | `#005058` | Schedule and Next up cards, the Complete status |
| Current | `#009ba3` | Movement: glows, progress, trend lines. Never text on white |
| Shell | `#fcf1ee` | The Sunrise page ground |
| Blush, Sky | `#fad1c7`, `#adfbff` | Soft fills and avatars; highlights on dark |
| Eco night, Twilight | `#020a0b`, `#070105` | The two dark page grounds |

Rules:
- **Deep Eco ink on Crisp Orange, never white** (white is 2.6:1). Never orange body text on white or Shell: use `orange-pressed` for an orange link on light.
- **One filled orange action per area.** On the landing page it is the send button.
- **Text ink is Deep Eco everywhere**, documents included. Foundation Black is the black lockup only; Mid Grey is logo and print only.
- **Control edges are `line-control` `#8a898d` in every theme.** Dividers use `line`.
- **Selected is `surface-selected`:** a white pill with `selected-glow` on light (`surface-selected-wash` on a white surface), a white wash at 14% on dark. Never an orange fill. Hover is a neutral wash (`surface-hover`), not a colour change.
- **Watch lists and summary tiles sit on `surface-solid`; tables and forms stay on glass in the Hub.**
- **Status is a graded pill with a shape and a word:** On track `#00805f`, At risk `#c28400`, Overdue `#d83a52`, plus Complete in Eco Green. State only, never decoration.
- **Charts use `series-1` to `series-5` in fixed order;** a sixth category folds into `series-other`. The series are the Hub's team colours (Scheduling, Construction, Design, Estimating, Acquisition & Development), deepened or lifted only where 3:1 needs it. `team-*` tokens are for a team's mark and tag, never a chart. Brand accents stay on surfaces.
- **Contrast is WCAG AA, measured:** 4.5:1 text, 3:1 icons, control edges and focus rings, in every theme. Disabled text is the one exemption.
- **Readable text.** Ink is `#081a1c` on Sunrise and soft white `#eef4f3` on the dark themes. One muted level: `#3e4d50` on Sunrise, 86% soft white on dark. Disabled is 40%, for controls only, never for information.

## Type

- **Outfit for headings and Onest for body**, from Google Fonts. The system sans-serif stack is the fallback when they are not available (Amber, 12 October 2026), then Arial. Both faces are variable; use 400, 500, 600 and 700 only, and the same weights on every theme.
- **Headings h1 to h3 are weight 500** (the Hub's `PATTERNS.md` section 13; Amber found 600 too heavy on 7 October 2026). `title` and the stat figures stay at 600.
- **Body text is weight 400 on every theme.** Medium styles are 500; bold body styles (`body-strong`, `label`) are 600.
- **The Hub keeps Vibe's scale:** h1 32/40, h2 24/30, h3 18/24, text1 16/22, text2 14/20, text3 12/16. Nothing below 12px, except the Hub's phone footer at 10px.
- **AI and chat surfaces:** `hero` 40/50 at 500, `body` 15/23, `prompt` 17/24, `body-strong` 14/20, `caption` and `label` 12/16. Numbers: `stat-xl` one per screen, `stat-l` for tiles, `stat-m` for counts. Negative tracking on display and figures only.
- **Fieldwork Geo and Hum are brand faces** for decks, print and brand-led heroes, supplied only in 300 and 600. Never app UI. Print stays on Fieldwork; Montserrat is the Word substitute where Fieldwork is not installed.
- Sentence case everywhere, except in the Hub's record drawers: their section titles and field labels are Title Case with the small words lowered, and a section heading is 16/500 over 14/400 rows (the Hub's `PATTERNS.md` section 25, Amber, 15 October 2026). A question or sentence in a drawer stays sentence case.

## Surfaces, shape and spacing

- **Page and glow:** `page` with three blurred discs (`glow-1` to `glow-3`, `blur-glow`). On the dark themes they sit at 15% opacity or less; the Hub's Sunrise ground is stronger (85% orange corners and a 50% edge, Amber's 7 October request, confirmed 12 October). Never a straight linear gradient. The eleven backgrounds are chosen by job: Sunrise for the staff app, Sky morning for reports, Twilight light for Ask Lofty, Low ember for covers and portal pages without a photo.
- **Glass:** one frosted frame inset 12px (`space-12`) from the page edge in the Hub (`surface-frame`, `edge-glass`, `radius-frame`, `blur-frame`), with panels and cards on it. No drop shadow at rest. Tables and forms stay on glass in the Hub (Amber, 8 October 2026, `0lh`); kanban cards, widgets and modals sit on `surface-solid`. Any text on glass is measured at 4.5:1 over the brightest glow.
- **The prompt box is the only surface that floats** (`surface-input`, `line-control`, `shadow-float`).
- **Radii:** `radius-xs` 4 controls and inputs, `radius-s` 8 small tags and dense-table cards, `radius-m` 12 rail items, tiles and rows, `radius-l` 20 cards, `radius-xl` 24 the prompt box and side panels, `radius-frame` 28. Buttons, chips, send buttons, toggles and progress tracks are pills (`radius-pill`). No literal radii.
- **Spacing:** 4, 8, 12, 16, 24, 32, 48, 64. Nothing off the scale. Buttons and fields are 32px with a 44px tap area; page margin 24, 16 on small screens.
- **Shadows only when something floats:** `shadow-xs` row hover, `shadow-s` dropdowns, `shadow-m` menus and toasts, `shadow-l` modals. The dark themes tint them from the ground, never pure black. Selected rows use `selected-glow`.
- **Layers are named, never a number:** `z-sticky`, `z-dropdown`, `z-frame`, `z-scrim`, `z-panel`, `z-drawer`, `z-toast`, `z-skip`. Backdrops have three depths: `backdrop` 70% (modal), `backdrop-record` 45% (record drawer), `backdrop-list` 22% (list or filter panel).

## States and motion

- **Focus** is `focus-ring`: a 2px gap in the page colour, then a 2px solid ring in `focus`. Never removed.
- **Press** scales: buttons 0.95, icon buttons 0.9.
- **Direction:** progress fills left to right; arrows point right (next) or up (growth), never down for a positive.
- **Motion:** new answers slide in 8px over `motion-productive-long`; the AI shows it is working within `motion-ai-feedback`. Nothing bounces. Everything stops under reduced motion.

## Screens

**App.** AI is the front door: one plain question, a large prompt box, quiet navigation at the edges. Desktop is the 224px AppRail, the main column and a 280px Your day panel. After a question, answers stack from the bottom and the prompt box docks. Phone (390px) is a day summary pill, the question, four quick starts and a voice-first prompt bar. Answers are widgets, not paragraphs: one short sentence, then the record, the blocker and the button that clears it. CRM pages carry no photos. Page layout, slots and approved Vibe overrides are decided in the Hub's `docs/ui-system/LAYOUTS.md` and `PATTERNS.md`; Momentum supplies values and does not change them.

**Portal.** The purchaser portal at portal.lofty.au is photo-led and has no AI: Home and Log in sit on a full-bleed photo, Files and Contact use the glass frame, and a shared header (address, menu, account) and footer sit on every page. The Portal cards show the routes and the reference screens in three themes (drawn on 26 September 2026 in Momentum 1.4 with Montserrat, so check the built app for later changes).

## Components

Layout and style references built from tokens, not coded React. The Hub's coded components come from Vibe, themed by these tokens. The rules are in `docs/components/`: AppFrame, AppRail, PromptBox, StarterCard, ChatBubble, AnswerWidget, GlanceCard, Button, StatusIcon, ReportColours, ReportExamples, LandingQuestion, TaskPlanner, PrintTemplates, GradientBackgrounds, ReferenceLanding, ReferenceLandingDark, ReferenceConversation. The 61 Vibe-shaped components live in LoftySupport/loftybrand.

The Hub's built components and templates are documented from the running app in `components/Hub*.md` (buttons 32px pills, tabs, modal, fields, table, toast, stage track, views, floating panel, `HubTemplates.md`); read them before drawing one, because they are what ships.

## Logos and icons

- **Logos** (`assets/brand/`): white lockup or mark on Deep Eco, the dark pages and plum; black or orange lockup on Shell and white. The orange lockup never sits on Eco Green or Current. Clear space equals the height of the "L". Never recolour a file.
- **The AI mark** is the Lofty arrows in orange on a plum tile (`plum-lift` on Twilight). Never a four-point spark, never in a white circle.
- **The app icon** (Gantt, tone on tone, all orange): the Hub already ships its exports (`assets/app-icon/`: 1024, 512, 192, 180, 32, 16 and `.ico`). It still needs sign-off as a new mark; do not use it in new brand work until then.
- **Icons** (`assets/icons/`): render as a mask over `currentColor`. Deep Eco on orange and Current tiles, white on plum, Eco Green and dark grounds. Sizes 16, 20, 24. No emoji, no icon font.

## Voice

Australian English. Sentence case (Title Case only for the Hub drawer titles and labels, above). Second person, active voice; the product never says "I" except the AI in conversation, which is collaborative, confident and positive and points to what is next. Buttons are verbs that name the object ("Chase engineer", not "Submit"). Labels are nouns of one to three words. Numbers are concrete ("68%", "3 days waiting"). Empty and error states say what happened and what to do next, and carry the action. No emoji, no exclamation marks, no em dashes.

## Handoff to code

- `styles.css` imports `tokens/*.css`. Every colour, size, radius, shadow and easing is a custom property; component code references tokens, never literals.
- `tokens.json` is the full token set with usage notes and contrast ratios.
- `assets/` holds the single set of logos, icons and fonts. Nothing is duplicated in this folder.
- Update `README.md`, `HANDOFF.md` and `CLAUDE.md` in the repository with the change, the date and the version.
