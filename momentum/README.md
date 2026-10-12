<!-- momentum/README.md : Lofty Momentum in this repository: tokens, rules, cards and the tools behind them. Updated 7 October 2026. -->
# Lofty Momentum

Lofty Momentum is the brand layer the Lofty Hub applies over Vibe, and the shared token set the homeowner portal reads: three themes (Sunrise, Deep Eco, Twilight), Outfit for headings, Onest for body, glass and glow surfaces, and the rules for the components built on them. The 61 Vibe-shaped components, the icons and the brand assets stay where they are and read this folder through `tokens/vibe-theme.css`.

The same system is published as the Claude artifact "Lofty Momentum Consolidated" (brand book, live previews, asset groups): https://claude.ai/artifact/EhxWmKtgNMfZsT7wYgTR6P. `tokens.json` here is the source of the artifact's tokens. The CSS is generated from the same values.

A design canvas of the same system, "Lofty Momentum Consolidated Design" (the Ask Lofty landing in Sunrise and Deep Eco with a theme switch, colour in three themes, type, controls and states, spacing, shape and glass), is at https://claude.ai/artifact/Ma3dEuBCDVpnYA7MZM8dfA. It reads this system's `tokens.json` for its colour and text style menus. Both artifacts are private until shared.

A claude.ai/design design-system project, "Lofty Momentum Consolidated" (project `71001be5-6701-4256-b11a-e0540b42e348`), holds a design-sync copy of this folder with the brand assets, fonts, the Momentum icon subset and six specimen cards. It sits beside "Lofty's App Design System" (`491d6888-cf3b-4d56-bdaa-4ac8a6948e99`), which keeps the 61 Vibe-shaped components. Re-sync it from this folder after a change here.

Status: draft for review. Nothing in `components/` is coded yet; the files are rules and layout references.

## Precedence

Vibe supplies the semantic token names; Momentum supplies the values. Outstanding questions and follow-ups are in [`HANDOFF.md`](HANDOFF.md).

## Sections

- **App:** screens and components for the staff app. The cards are grouped as *App screens* (the landing, the conversation, My tasks, reports) and *App components* (buttons, chat, answer widgets, the rail, the frame, status, charts), with the rules in `components/`.
- **Hub components and Page templates:** the Hub's built components (`@lofty/ui`) and its seven page templates, photographed from the running app in Sunrise and Deep Eco (*Hub components* and *Page templates* cards), with the rules in `components/Hub*.md`.
- **Portal:** the purchaser portal at portal.lofty.au: its routes and its reference screens in Sunrise, Deep Eco and Twilight (the *Portal* cards). The app is `portal/` in loftysupport/loftyprojectapp; its design handoff is `docs/portal/HANDOFF.md` there.
- **Foundations and brand:** colour, type, spacing and glass, the eleven backgrounds, the cover and the print templates.

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The entry point. `@import`s only. Link it instead of the root `styles.css` to get Momentum |
| `tokens/colors.css` | 56 colour tokens: primitives, the semantic layer, status and chart series. Sunrise on `:root`, Deep Eco on `[data-theme="eco"]`, Twilight on `[data-theme="twilight"]` |
| `tokens/typography.css` | Outfit for headings and Onest for body, four weights (body at 500 on the dark themes), 19 type styles as `--type-*` font shorthands (the Hub's Vibe scale plus Momentum's display, numbers and chat styles) |
| `tokens/spacing.css`, `radius.css`, `shadows.css`, `motion.css`, `layers.css` | Twelve spacing steps, eight radii, elevation and the solid focus ring with the blur radii, durations and easings, the z-index scale |
| `tokens/backgrounds.css` | The eleven Momentum backgrounds with their dark twins as `--bg-*`, chosen by job |
| `tokens/fonts.css` | Outfit and Onest from Google Fonts; Fieldwork `@font-face` pointing at `../assets/fonts` |
| `tokens/base.css` | Element defaults for a page that links `styles.css`. Not for the Hub, where Vibe owns the base |
| `tokens/vibe-theme.css` | **The Vibe mapping:** every Vibe semantic name the Hub and the components use, pointed at a Momentum token. Fixed fallbacks are marked |
| `tokens.json` | The artifact's token file: every token with its usage note and contrast ratio |
| `scripts/gen-tokens.py` | The one source of values. Writes `tokens.json` and eight of the `tokens/*.css` files; `fonts.css`, `base.css` and `vibe-theme.css` are hand-written |
| `components/Hub*.md` | The Hub's built components and page templates, documented from the running app (12 October 2026): buttons, tabs, modal and states, detach and delete, fields, table, text and people, toast, record family, views and toolbar, floating panel, and the seven templates |
| `components/*.md` | Momentum's component rules: AppFrame, AppRail, PromptBox, StarterCard, ChatBubble, AnswerWidget, GlanceCard, Button, StatusIcon, ReportColours, ReportExamples, LandingQuestion, TaskPlanner, PrintTemplates, GradientBackgrounds, and the three reference screens |
| `guidelines/*.html` | 51 specimen cards (33 on 6 October 2026, 18 Hub cards on 12 October): the 20 component previews from the artifact pointed at this repository's assets, the six theme and screen cards flattened from the design canvas, and the 3 October 2026 reconciliation record. Index in `guidelines/README.md` |
| `../assets/app-icon/` | The Hub's app icon exports (1024, 512, 192, 180, 32, 16, `.ico`), copied from the Hub on 12 October 2026 |
| `canvas/` | Source of the design canvas "Lofty Momentum Consolidated Design": `canvas.json` and six `.dc.html` artboards, byte for byte with the live artifact (6 October 2026) |
| `font-lab/` | The Lofty Font Lab (7 October 2026): a tester for choosing a body typeface beside Fieldwork on the real Sunrise, Deep Eco and Twilight grounds, with the measurements behind it. Open `index.html` from a checkout. See `font-lab/README.md` |
| `reference/` | Dated records: the Grounds page (eleven backgrounds, interactive), the Lofty Hub app icon study with the chosen icon's previews, the Momentum prototype (version 13, 6 MB), the Momentum 1.4 handoff, its proposed CLAUDE.md section and its gap-fill token proposals. `reference/README.md` says what each file is |
| `CONSOLIDATION.md` | History only: the dated record of how the sources were merged. Not guidance; the rules in force are in this README and the tokens |
| `SKILL.md` | The skill for designing and building with Lofty Momentum: the rules in force as a working summary, with the order to read things in |
| `HANDOFF.md` | Outstanding issues, open questions and the next steps |

## Rules in force

| Area | Rule |
| --- | --- |
| Faces | Outfit headings, Onest body; the system sans-serif is the fallback when they are not available (Montserrat is the Word substitute only); Fieldwork for decks, print and brand-led heroes only |
| Weights | 400, 500, 600, 700; h1 to h3 at 500; body 400 on every theme; bold body styles 600 (the Hub's `PATTERNS.md` section 13, 7 and 8 October 2026) |
| Ink on orange | Deep Eco `#081a1c`, 6.8:1 |
| Text ink | Deep Eco `#081a1c` on Sunrise, soft white `#eef4f3` on the dark themes. One muted level: `#3e4d50` on Sunrise, 86% soft white on dark. Foundation Black is a brand kit primitive for the black lockup only |
| Page | Shell `#fcf1ee` with glow discs and a frosted frame |
| Control edge | `#8a898d` in every theme |
| Selected | `surface-selected`: a white pill with `selected-glow` on light, white 14% on dark (Amber, 8 October 2026) |
| Status | Graded pill with shape and word; `#00805f` `#c28400` `#d83a52` |
| Focus | Solid 2px ring with a gap, 4.1:1 or better |
| Charts | Five fixed series plus Other. No sequential scale yet |
| Themes | Sunrise, Deep Eco, Twilight; the Hub ships all three |
| Radii | 4 controls, 8 small tags, 12 rows and tiles, 20 cards, 24 prompt box and side panels, 28 frame; pills for buttons, chips, send buttons, toggles and progress tracks |
| Spacing | 4, 8, 12, 16, 24, 32, 48, 64: eight steps. Buttons and fields 32px with a 44px tap area; page margin 24, 16 on small screens |
| Glows | Three blurred discs, at 15% opacity or less on the dark themes (the Hub's Sunrise ground is stronger, by Amber's request), plus the eleven backgrounds by job |

## Using it

```html
<link rel="stylesheet" href="momentum/styles.css">
<html data-theme="eco">
```

- Build with semantic tokens (`--page`, `--ink`, `--surface-card`, `--line-control`, `--action`, `--on-action`). Read a primitive (`--crisp-orange`) only to define a semantic token.
- A Vibe-shaped component from `../components/` keeps reading `--primary-color`, `--primary-text-color` and the rest; `tokens/vibe-theme.css` resolves them. In the Hub, re-declare at `body.light-app-theme` specificity as `app/src/theme/tokens.css` does, or Vibe's class wins.
- Assets are the repository's single set: logos and marks in `../assets/brand/` and `../assets/`, icons in `../assets/icons/`, fonts in `../assets/fonts/`. Nothing is duplicated here.
- No raw hex, radius or spacing in components. Every value here is a custom property.

## App icon

The Lofty Hub app icon study (`reference/lofty-hub-icon.html`, from https://claude.ai/artifact/L8cprtqo47YTG5sLUafsit) chose **Gantt, tone on tone, all orange**: three rounded bars stepping forward on Crisp Orange, the top two in darker orange and the last in white. Previews are in `reference/app-icon/`. The study notes that the icon arranges the Lofty point in a new way and needs sign-off as a new mark before it ships; until then it stays in `reference/`, not `assets/brand/`, and the 1024px exports the study describes are not in this repository.

## Not here

- Coded Momentum components. The artifact's previews are HTML references; the Hub builds them from Vibe and these tokens (`HANDOFF.md`, steps 2 and 3).
- A sequential chart scale, a 2px radius step and Eco Green hover and tint steps: gaps the sources do not fill, kept as marked fallbacks in `vibe-theme.css`.
- The homeowner portal's own stylesheet. It keeps its photo-led look and should read this folder for tokens instead of its byte-identical Momentum 1.4 copy in `loftyprojectapp/portal/src/styles/tokens/`.
