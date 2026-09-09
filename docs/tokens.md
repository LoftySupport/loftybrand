# Token reference

282 custom properties across nine files, all imported by `styles.css`.

| File | Holds |
| --- | --- |
| `tokens/fonts.css` | `@font-face` for the six Fieldwork cuts; Google Fonts imports |
| `tokens/colors.css` | Brand palette, Flint neutrals, semantic layer, status, data ramp |
| `tokens/dark.css` | `[data-theme="dark"]` overrides of the semantic layer only |
| `tokens/typography.css` | Font stacks, the screen scale, the brand scale, tracking |
| `tokens/spacing.css` | `--space-2` … `--space-80` |
| `tokens/radius.css` | `--border-radius-2`, `-small`, `-medium`, `-large`, `-big`, `-pill`, `-circle` |
| `tokens/shadows.css` | `--box-shadow-xs` … `-large` |
| `tokens/motion.css` | Productive and expressive durations, easing curves |
| `tokens/base.css` | Element resets, focus ring, selection |

## The three layers

Read the layers top-down. **Only ever consume the semantic layer in component
code.**

```
Brand palette      --lofty-crisp-orange: #f47e63
       ↓           the Lofty brand kit. Values are authoritative. Never themed.

Neutral family     --lofty-flint-300: #c6c5ba
       ↓           one grey family, numbered. Light and dark steps.

Semantic layer     --primary-color: var(--lofty-crisp-orange)
                   Vibe's token names. THIS is what components read.
                   Themed by tokens/dark.css.
```

A component that reads `--lofty-crisp-orange` instead of `--primary-color`
works in light mode and silently breaks the theme contract.

## Brand palette

| Token | Value | Role |
| --- | --- | --- |
| `--lofty-foundation-black` | `#414042` | Text, inverted surfaces, brand panels |
| `--lofty-finisher-white` | | Pages, shells, cards |
| `--lofty-crisp-orange` | `#f47e63` | Primary accent. One filled action per view |
| `--lofty-eco-green` | `#005058` | Secondary accent, sparing, decorative only |
| `--lofty-mid-grey` | `#d1d3d4` | Brand only — logo, print. Draws no UI |

The two accents never appear together in one view. Black never sits on orange:
filled orange carries Finisher White ink on both themes.

The brand kit prints `HEX #000000` beside `RGB 65 64 66` for Foundation Black.
The RGB is authoritative, so tokens use `#414042`.

## Flint neutrals

| Token | Light | Semantic alias | Role |
| --- | --- | --- | --- |
| Flint 50 | `#f9f9f6` | `--page-tint-soft-color` | Softer page for dense tables, long forms |
| Flint 100 | `#f4f3ee` | `--page-tint-color` | The page |
| Flint 200 | `#e1e1d9` | `--surface-recessed-color` | Recessed fills, tracks, quiet chips |
| Flint 300 | `#c6c5ba` | `--layout-border-color` | Every border and divider |
| Flint 400 | `#b6b6ac` | | Chart neutrals, disabled. Never a text ground |
| Flint 700 | `#3a3a33` | | Dark rule |
| Flint 800 | `#24241f` | | Dark surface |
| Flint 900 | `#1a1a18` | | Dark page |

One page tint per screen. `--ui-border-color` stays the darker `#8a898d`
wherever a control boundary needs 3:1.

## Status

Imported values, kept because the brand palette has no legible status greens
or reds.

| Token | Value |
| --- | --- |
| `--positive-color` | `#00854d` |
| `--negative-color` | `#d83a52` |
| `--warning-color` | `#ffcb00` |

On dark these lift, so their ink flips to Flint 900 via
`--text-color-on-status` — 6.6:1 on positive, 5.8:1 on negative.

## Data viz

Two ramps, for two different jobs.

**Categorical** — `--data-1` … `--data-6`, for distinct series. Orange carries
the series and the rest is value. Two or three series is the working limit;
past that use a table.

**Sequential** — `--data-scale-1` … `--data-scale-5` plus `--data-gradient`
(a ready `linear-gradient` across all five stops), for continuous quantity:
heat, load, density, progress fills. It climbs the orange ladder only, so it
reads as one scale rather than a set of categories. Use the gradient for a
fill, the numbered stops for a legend.

Both flip themselves on dark. Categorical inverts series 3 and neutrals 4–6;
the sequential scale reverses, starting at Flint 700 so its low end lifts off
the panel instead of fading into it.

Never hard-code a series colour, and never put orange and Eco Green in one
chart.

## Selected states

Tinted, never filled. `--primary-selected-color` `#fae4d5`, hover `#f6d3bf`,
lightest highlight `#fdf6f0`. Text stays Foundation Black. Where peach is too
warm on a surface, Flint 200 is the neutral fallback.

## Type scale

Screen — Montserrat titles, Figtree body:

| Token | Size / line height |
| --- | --- |
| `--font-h1-bold` | 32 / 40, tracking −0.5px |
| `--font-h2-bold` | 24 / 30, tracking −0.1px |
| `--font-h3-bold` | 18 / 24, tracking −0.1px |
| `--font-text1-normal` | 16 / 22 |
| `--font-text2-normal` | 14 / 20 |
| `--font-text3-normal` | 12 / 16 |

Brand — Fieldwork Geo display, Fieldwork Hum body, brand surfaces only:

| Token | Size / line height |
| --- | --- |
| `--font-display-l` | 600 44 / 1.05 |
| `--font-display-m` | 600 32 / 1.1 |
| `--font-display-s` | 600 24 / 1.15 |
| `--font-brand-body` | 18 / 1.5, tracking −0.02em |

Fieldwork ships in six cuts with no Regular or Medium, so the brand scale uses
weights 300 and 600 exclusively.

## Motion

Productive (70/100/150ms) for anything the user drives — press, hover, toggle
knob, tab underline, chevron. Expressive (250/400ms) for entrances — dialogs,
toasts, attention boxes.

Easing `cubic-bezier(0,0,0.35,1)` entering, `cubic-bezier(0.4,0,1,1)` exiting,
`cubic-bezier(0,0,0.2,1.4)` for the one emphasised pop (chips appearing).
Nothing else bounces. No parallax, no scroll-triggered animation.
