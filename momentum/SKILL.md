---
name: lofty-momentum
description: Use this skill to design and build Lofty Momentum interfaces and assets: the Lofty Hub staff app, the purchaser portal, and brand-led screens and mocks, for production or throwaway prototypes. Contains the three themes, tokens, type, glass and glow surfaces, component rules, the App and Portal reference screens, and the rules in force.
user-invocable: true
---

# Lofty Momentum

Lofty's brand layer for the Hub and the shared tokens for the purchaser portal: three themes (Sunrise, Deep Eco, Twilight), Outfit headings, Onest body, a frosted glass frame over soft glows, and an AI-first landing. monday.com Vibe stays the base: Vibe supplies the semantic token names and component behaviour, Momentum supplies the values. Momentum is never a second component system.

This file is the working summary. The rules in force are in `momentum/README.md` in loftysupport/loftybrand and in the Lofty Momentum artifact's README.

## Before you build

1. Read the rules below. Where a picture and a rule disagree, the rule wins.
2. Open `guidelines/`. The cards are grouped **App screens**, **App components**, **Portal**, **Foundations** (colour, type, spacing and glass, the eleven backgrounds) and **Brand** (the cover and the print templates). Build a new app screen from the reference screens, not from a single component.
3. Read the component rule in `docs/components/<Name>.md` (in the repository, `momentum/components/<Name>.md`) before using a component. Do not guess sizes or states.
4. The type setup and how it was chosen are in `font-lab/`. `font-lab/SETUP.md` has the weights and colour values to build from.
5. What is still open is in `HANDOFF.md`. Do not decide it for Amber: ask, one question at a time.

`CONSOLIDATION.md`, `reference/` and `guidelines/reconciliation.html` are dated history. Do not build from them.

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
- **Selected is `surface-selected`:** peach on light, a white wash at 20% on dark. Never an orange fill. Hover is a neutral wash (`surface-hover`), not a colour change.
- **Tables, watch lists and summary tiles sit on `surface-solid`.**
- **Status is a graded pill with a shape and a word:** On track `#00805f`, At risk `#c28400`, Overdue `#d83a52`, plus Complete in Eco Green. State only, never decoration.
- **Charts use `series-1` to `series-5` in fixed order;** a sixth category folds into `series-other`. Brand accents stay on surfaces.
- **Contrast is WCAG AA, measured:** 4.5:1 text, 3:1 icons, control edges and focus rings, in every theme. Disabled text is the one exemption.
- **Readable text colours are not yet adopted.** Whether the dark themes move to soft white ink and a stronger secondary level is open (`HANDOFF.md`); the values are in `font-lab/SETUP.md`.

## Type

- **Outfit for headings and Onest for body**, from Google Fonts. Montserrat is the fallback when they are not available, then the system sans-serif stack, then Arial. Both faces are variable; use 400, 500, 600 and 700 only.
- **Headings h1 to h3 are weight 600.** Outfit matches Fieldwork Geo DemiBold there and reads heavier at 700.
- **Body text is weight 500 on the dark themes,** 400 on Sunrise. The tokens redeclare the six body styles under `[data-theme="eco"]` and `[data-theme="twilight"]`.
- **The Hub keeps Vibe's scale:** h1 32/40, h2 24/30, h3 18/24, text1 16/22, text2 14/20, text3 12/16. Nothing below 12px.
- **AI and chat surfaces:** `hero` 40/50 at 500, `body` 15/23, `prompt` 17/24, `body-strong` 14/20, `caption` and `label` 12/16. Numbers: `stat-xl` one per screen, `stat-l` for tiles, `stat-m` for counts. Negative tracking on display and figures only.
- **Fieldwork Geo and Hum are brand faces** for decks, print and brand-led heroes, supplied only in 300 and 600. Never app UI. Print stays on Fieldwork; Montserrat is the Word substitute where Fieldwork is not installed.
- Sentence case everywhere.

## Surfaces, shape and spacing

- **Page and glow:** `page` with three blurred discs (`glow-1` to `glow-3`, `blur-glow`) at 15% opacity or less. Never a straight linear gradient. The eleven backgrounds are chosen by job: Sunrise for the staff app, Sky morning for reports, Twilight light for Ask Lofty, Low ember for covers and portal pages without a photo.
- **Glass:** one frosted frame inset `space-20` from the page edge (`surface-frame`, `edge-glass`, `radius-frame`, `blur-frame`), with panels and cards on it. No drop shadow at rest. Body text sits on `surface-solid` or `surface-input`; any text on glass is measured at 4.5:1 over the brightest glow.
- **The prompt box is the only surface that floats** (`surface-input`, `line-control`, `shadow-float`).
- **Radii:** `radius-xs` 4 dense controls, `radius-s` 8 buttons and inputs, `radius-m` 12 cards, `radius-l` 16 panels and the prompt box, `radius-frame` 24. Pills for chips and Search only; buttons are never pills. No literal radii.
- **Spacing:** 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80. Nothing off the scale. Touch targets 40px desktop, 44px phone.
- **Shadows only when something floats:** `shadow-xs` row hover, `shadow-s` dropdowns, `shadow-m` menus and toasts, `shadow-l` modals.

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

## Logos and icons

- **Logos** (`assets/brand/`): white lockup or mark on Deep Eco, the dark pages and plum; black or orange lockup on Shell and white. The orange lockup never sits on Eco Green or Current. Clear space equals the height of the "L". Never recolour a file.
- **The AI mark** is the Lofty arrows in orange on a plum tile (`plum-lift` on Twilight). Never a four-point spark, never in a white circle.
- **The app icon** (Gantt, tone on tone, all orange) is a decision record until it is signed off as a new mark. Do not ship it.
- **Icons** (`assets/icons/`): render as a mask over `currentColor`. Deep Eco on orange and Current tiles, white on plum, Eco Green and dark grounds. Sizes 16, 20, 24. No emoji, no icon font.

## Voice

Australian English. Sentence case. Second person, active voice; the product never says "I" except the AI in conversation, which is collaborative, confident and positive and points to what is next. Buttons are verbs that name the object ("Chase engineer", not "Submit"). Labels are nouns of one to three words. Numbers are concrete ("68%", "3 days waiting"). Empty and error states say what happened and what to do next, and carry the action. No emoji, no exclamation marks, no em dashes.

## Handoff to code

- `styles.css` imports `tokens/*.css`. Every colour, size, radius, shadow and easing is a custom property; component code references tokens, never literals.
- `tokens.json` is the full token set with usage notes and contrast ratios.
- `assets/` holds the single set of logos, icons and fonts. Nothing is duplicated in this folder.
- Update `README.md`, `HANDOFF.md` and `CLAUDE.md` in the repository with the change, the date and the version.
