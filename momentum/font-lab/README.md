<!-- momentum/font-lab/README.md : the Lofty Font Lab, a tester for choosing a body typeface. Added 7 October 2026. -->
# Font Lab

A tester for choosing a body typeface beside Fieldwork, on the real Momentum themes. Amber's brief, 7 October 2026: body text in Montserrat is too hard to read; find out whether the fault is the font or the colours, and pick an alternative with a tester.

Open `index.html` from a checkout of this repository, in Chrome, with an internet connection. It reads Fieldwork from `../../assets/fonts`, the Lofty logo from `../../assets/brand`, and the other faces from Google Fonts (open licence).

## What it does

| Section | Answers |
| --- | --- |
| Recommendations | My recommendations, the Apple-style view, the Fieldwork Geo checks, and a button that sets the recommended setup |
| Top bar: body size, body weight, text colours, backgrounds | Change one variable at a time. Text colours: Momentum today, or a Readable set (a proposal). Backgrounds: the Hub's grounds today, glows at 15%, solid cards, or flat |
| Font against colours | Two fonts, three themes (Sunrise, Deep Eco, Twilight) on the real grounds and glass, with the contrast at the brightest glow behind the text. Compare rows for the font effect, flip the top bar for the colour effect |
| Contrast by combination | The same numbers for four colour settings. They do not depend on the font |
| Measured against Fieldwork | Lowercase height, width, stroke weight and a closeness score, from the font files |
| Pairing studio | Any heading face with any body face, Montserrat included in both lists, on all three themes |
| Letterforms, Every face | Glyph comparison with Fieldwork Geo and Hum as the brand reference, and each face on all three themes with a 16 to 12px ladder |

## Where it came from, and what was left out

Built from Amber's font-lab experiment for another brand. Kept: the layout, the controls, the pairing studio, the glyph comparison and the candidate faces (Hanken Grotesk, Manrope, Albert Sans, Figtree, Onest, Plus Jakarta Sans, Montserrat, Nunito Sans, Mulish; Jost, Outfit and Space Grotesk as heading faces; added by Claude: DM Sans, Public Sans, Inter, Atkinson Hyperlegible Next, Source Sans 3, IBM Plex Sans and System UI as a device reference). Replaced: its colours with Momentum's, its display face with Fieldwork, its copy with Lofty copy, its single light and dark panes with the three themes. Left out and not saved anywhere: the other brand's name, logo, palette and notes, its display and print faces (Modulus Pro, Sofia Pro) and Poppins.

## Findings and recommendations, 7 October 2026

Measured, not opinion (stroke weight is the stem thickness at mid lowercase height, as a share of lowercase height):

| Face | Lowercase vs Fieldwork | Width vs Fieldwork | Strokes vs Fieldwork (400) | Closeness |
| --- | --- | --- | --- | --- |
| Montserrat | +12% | +11.9% | -19% | 63 |
| Hanken Grotesk | +5% | -1.8% | +4% | 95 |
| DM Sans | +8% | +1.8% | +1% | 95 |
| Figtree | +7% | -1.2% | -3% | 95 |
| Nunito Sans | +4% | -1.0% | 0% | 97 |
| Public Sans | +10% | +3.1% | +7% | 89 |
| Inter | +17% | +4.5% | -2% | 87 |

- **The font is a cause.** Montserrat has the widest letters in the set and, at weight 400, strokes about 19% thinner for its lowercase height than Fieldwork's. Its lowercase is not small, so the "short x-height" explanation in the original experiment does not apply to it.
- **The colours are also a cause, in Deep Eco.** Worst case at the brightest glow behind the glass card, Momentum text on the Hub's grounds: Deep Eco muted 4.0:1 (fails AA), Twilight 4.9:1, Sunrise 5.7:1. Ink passes everywhere. Glows at 15%: Deep Eco muted 5.5:1. Opaque cards with the Readable set: Sunrise 8.8:1, Deep Eco 11.9:1, Twilight 13.0:1.

**Recommendations (inference and design judgement, not decisions):**

1. **Body, tables and small UI: Hanken Grotesk.** Fieldwork's proportions, a lowercase 5% taller, strokes 4% heavier. Alternatives: DM Sans (rounder, suits Fieldwork Geo), Figtree (least change), Public Sans or Inter for the largest lowercase regardless of brand fit.
2. **Keep Montserrat for titles, the landing question and big numbers**, and Fieldwork for brand surfaces.
3. **Size and weight:** body 16px, dense UI 14px, nothing that carries information under 13px, weight 400 on light and 500 on dark, line height 1.5, letter-spacing +0.01em at 13px and below.
4. **Biggest colour change: put text on solid surfaces, not glass over a glow** (the Momentum rule already says so). Keep the glass for the frame, rail and header.
5. **One brighter secondary level:** dark ink `#eef4f3`, secondary 86% (not 62%), light-theme muted `#3e4d50`; glows at 15% or less; the 40% tint for disabled controls only.
6. **Honour the device:** `prefers-contrast: more`, `prefers-reduced-transparency`, `prefers-color-scheme`, and rem-based sizes.

An Apple designer's view, from my own understanding of Apple's Human Interface Guidelines (not re-checked today): size and weight before colour; use a text face for text; two levels of text colour; material for chrome and solid for content; honour the person's settings; do not make the brand face do UI work. The lab lists each with the Lofty change.

## Fieldwork Geo in the app

Yes for headings and display, not for body, tables or small text. Checked in the font files and in Chromium:

- Only Light (300) and DemiBold (600). CSS weights 400 and 500 render Light and 600 and 700 render DemiBold (tested), so the Hub's default body weight of 400 would be Light.
- 424 Latin characters including `$ % · – — ’ “ ” × ° ½ é … • ± ≈ − €`. Missing: `→` and `✓` (they fall back to the system font; use the icon set).
- Tabular, lining, old-style and slashed-zero figures are included: set `font-variant-numeric: tabular-nums lining-nums` in tables and stats.
- WOFF, about 80 KB per weight; preload and `font-display: swap`. No italic in Geo (the italic files belong to Hum). No hinting, so small Light text looks soft on Windows.
- The file's hhea and typo vertical metrics differ and USE_TYPO_METRICS is set, so Mac and Windows can place text at different heights in buttons, inputs and cells. Not tested on either here. Pin one set with `ascent-override`, `descent-override` and `line-gap-override` in `@font-face` (the lab has the block) and test in Chrome and Safari.
- Licence: the files point to tipotype.com/license. Confirm the web licence covers hub.lofty.au before the Hub serves them (G-23, still open).

Limits: contrast is a worst case at the centre of one glow at a time (overlaps can be slightly worse), computed from token values, not rendered pixels. Fieldwork exists in Light and DemiBold only. The Readable set and the proposed tokens in the lab are proposals, not tokens.

## Re-measuring

```bash
pip install fonttools brotli
python3 momentum/font-lab/measure-fonts.py momentum/font-lab/metrics.json /tmp/lofty-font-cache
```

It reads Fieldwork from `assets/fonts`, fetches each candidate's Latin file from Google Fonts, writes `metrics.json` and refreshes the figures embedded in `index.html` between the `METRICS` markers.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The tester |
| `metrics.json` | The measurements |
| `measure-fonts.py` | Regenerates `metrics.json` and the embedded figures |
