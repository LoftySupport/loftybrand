<!-- momentum/README.md : Lofty Momentum Consolidated in this repository. Version 2.0 draft, 5 October 2026. -->
# Lofty Momentum Consolidated

The Momentum brand refresh (concept 1.4, 25 September 2026) merged with this repository's App Design System and Amber's decisions of 4 and 5 October 2026 for the Lofty Hub rebuild, as one token set. It is the brand layer the Hub applies over Vibe, and the shared tokens the homeowner portal reads. It does not replace the rest of this repository: the 61 Vibe-shaped components, the icons and the brand assets stay where they are and read this folder through `tokens/vibe-theme.css`.

The same system is published as the Claude artifact "Lofty Momentum Consolidated" (brand book, live previews, asset groups): https://claude.ai/artifact/EhxWmKtgNMfZsT7wYgTR6P. `tokens.json` here is the artifact's token file, byte for byte. The CSS is generated from the same values.

Status: draft for Amber's review. Nothing in `components/` is coded yet; the files are rules and layout references.

## Precedence

Where the sources disagree: Amber's dated decisions, then Momentum 1.4, then the App Design System, then Vibe. Every conflict and its outcome is in [`CONSOLIDATION.md`](CONSOLIDATION.md). Outstanding questions and follow-ups are in [`HANDOFF.md`](HANDOFF.md).

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The entry point. `@import`s only. Link it instead of the root `styles.css` to get Momentum |
| `tokens/colors.css` | 56 colour tokens: primitives, the semantic layer, status and chart series. Sunrise on `:root`, Deep Eco on `[data-theme="eco"]`, Twilight on `[data-theme="twilight"]` |
| `tokens/typography.css` | Montserrat only, four weights, 19 type styles as `--type-*` font shorthands (the Hub's Vibe scale plus Momentum's display, numbers and chat styles) |
| `tokens/spacing.css`, `radius.css`, `shadows.css`, `motion.css`, `layers.css` | Twelve spacing steps, eight radii, elevation and the solid focus ring with the blur radii, durations and easings, the z-index scale |
| `tokens/backgrounds.css` | The eleven Momentum backgrounds with their dark twins as `--bg-*`, chosen by job |
| `tokens/fonts.css` | Montserrat from Google Fonts; Fieldwork `@font-face` pointing at `../assets/fonts` |
| `tokens/base.css` | Element defaults for a page that links `styles.css`. Not for the Hub, where Vibe owns the base |
| `tokens/vibe-theme.css` | **The consolidation as CSS:** every Vibe semantic name the App Design System and the Hub use, pointed at a Momentum token. Fallbacks to App Design System values are marked |
| `tokens.json` | The artifact's token file: every token with its usage note and contrast ratio |
| `scripts/gen-tokens.py` | The one source of values. Writes `tokens.json` and eight of the `tokens/*.css` files; `fonts.css`, `base.css` and `vibe-theme.css` are hand-written |
| `components/*.md` | Momentum's component rules: AppFrame, AppRail, PromptBox, StarterCard, ChatBubble, AnswerWidget, GlanceCard, Button, StatusIcon, ReportColours, ReportExamples, LandingQuestion, TaskPlanner, PrintTemplates, GradientBackgrounds, and the three reference screens |
| `CONSOLIDATION.md` | Sources, precedence, every decision carried, where Momentum won, derived values to confirm, known shortfalls, gaps |
| `HANDOFF.md` | Outstanding issues, open questions and the next steps |

## What changed against the App Design System

| | App Design System (root of this repository) | Momentum Consolidated (this folder) |
| --- | --- | --- |
| Faces | Figtree body, Montserrat titles | Montserrat only (Amber, 5 Oct 2026, C04) |
| Weights | 200 to 700 | 400, 500, 600, 700 (C05) |
| Ink on orange | White | Deep Eco `#081a1c`, 6.8:1 (C08) |
| Text ink | Foundation Black `#414042` | Deep Eco. Foundation Black stays a brand kit primitive for the lockup and print |
| Page | Flint 100 `#f4f3ee`, flat | Shell `#fcf1ee` with glow discs and a frosted frame |
| Control edge | `#8a898d` light, `#807f74` dark | `#8a898d` in every theme (C10) |
| Selected | Peach `#fae4d5` light; white wash on dark rails | `surface-selected`: peach light, white 20% dark (C11) |
| Status | Outline chip, dot, Vibe `#00854d` `#d83a52` `#ffcb00` | Graded pill with shape and word; `#00805f` `#c28400` `#d83a52` (C12) |
| Focus | Orange at 50%, 1.6:1 | Solid 2px ring with a gap, 4.1:1 or better (C09) |
| Charts | Single-accent orange ramp | Five fixed series plus Other |
| Themes | Light and dark | Sunrise, Deep Eco, Twilight; the Hub ships all three (Amber, 5 Oct 2026, superseding C15) |

## Using it

```html
<link rel="stylesheet" href="momentum/styles.css">
<html data-theme="eco">
```

- Build with semantic tokens (`--page`, `--ink`, `--surface-card`, `--line-control`, `--action`, `--on-action`). Read a primitive (`--crisp-orange`) only to define a semantic token.
- A Vibe-shaped component from `../components/` keeps reading `--primary-color`, `--primary-text-color` and the rest; `tokens/vibe-theme.css` resolves them. In the Hub, re-declare at `body.light-app-theme` specificity as `app/src/theme/tokens.css` does, or Vibe's class wins.
- Assets are the repository's single set: logos and marks in `../assets/brand/` and `../assets/`, icons in `../assets/icons/`, fonts in `../assets/fonts/`. Nothing is duplicated here.
- No raw hex, radius or spacing in components. Every value here is a custom property.

## Not here

- Coded Momentum components. The artifact's previews are HTML references; the Hub builds them from Vibe and these tokens (`HANDOFF.md`, steps 2 and 3).
- A sequential chart scale, a 2px radius step and Eco Green hover and tint steps: gaps the sources do not fill, kept as marked fallbacks in `vibe-theme.css`.
- The homeowner portal's own stylesheet. It keeps its photo-led look and should read this folder for tokens instead of its byte-identical Momentum 1.4 copy in `loftyprojectapp/portal/src/styles/tokens/`.
