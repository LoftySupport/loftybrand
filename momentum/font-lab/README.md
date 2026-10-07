<!-- momentum/font-lab/README.md : the Lofty Font Lab, a tester for choosing a body typeface. Added 7 October 2026. -->
# Font Lab

A tester for choosing a body typeface beside Fieldwork, on the real Momentum themes. Amber's brief, 7 October 2026: body text in Montserrat is too hard to read; find out whether the fault is the font or the colours, and pick an alternative with a tester.

Open `index.html` from a checkout of this repository, in Chrome, with an internet connection. It reads Fieldwork from `../../assets/fonts`, the Lofty logo from `../../assets/brand`, and the other faces from Google Fonts (open licence).

## What it does

| Section | Answers |
| --- | --- |
| Recommendations | My recommendations, the Apple-style view, dark mode on phones, the Fieldwork Geo checks, and two buttons: the recommended setup, and Amber's lean (Readable text, glows 15%, a 390px phone at 13px, Hanken headings over every small-text candidate) |
| Top bar: body size, body weight, text colours, view (desktop or 390px phone), backgrounds | Change one variable at a time. Text colours: Momentum today, or a Readable set (a proposal). Backgrounds: the Hub's grounds today, glows at 15%, solid cards, or flat |
| Font against colours | Two rows, each with its own heading font and body font, across three themes (Sunrise, Deep Eco, Twilight) on the real grounds and glass, with the contrast at the brightest glow behind the text. Compare rows for the font effect, flip the top bar for the colour effect |
| Contrast by combination | The same numbers for four colour settings. They do not depend on the font |
| Measured against Fieldwork | Lowercase height, width, stroke weight and a closeness score, from the font files |
| Pairing studio | Any heading face with any body face, Montserrat included in both lists, on all three themes |
| Letterforms, Every face | Glyph comparison with Fieldwork Geo as the brand reference, and each face as the body font on all three themes with a 16 to 12px ladder. "Headings on every card" tries one heading font over every body face |

## Where it came from, and what was left out

Built from Amber's font-lab experiment for another brand. Kept: the layout, the controls, the pairing studio, the glyph comparison and the candidate faces (Hanken Grotesk, Manrope, Albert Sans, Figtree, Onest, Plus Jakarta Sans, Montserrat; Jost, Outfit and Space Grotesk as heading faces; added by Claude: System UI as a device reference). Removed at Amber's request on 7 October 2026: Inter, Mulish, Fieldwork Hum, Source Sans 3, IBM Plex Sans, Atkinson Hyperlegible Next, Public Sans, DM Sans and Nunito Sans (Fieldwork Hum is still measured as the baseline for the percentages below, but is not a choice in any list). Replaced: its colours with Momentum's, its display face with Fieldwork, its copy with Lofty copy, its single light and dark panes with the three themes. Left out and not saved anywhere: the other brand's name, logo, palette and notes, its display and print faces (Modulus Pro, Sofia Pro) and Poppins.

## Findings and recommendations, 7 October 2026

Measured, not opinion (stroke weight is the stem thickness at mid lowercase height, as a share of lowercase height):

| Face | Lowercase vs Fieldwork | Width vs Fieldwork | Strokes vs Fieldwork (400) | Closeness |
| --- | --- | --- | --- | --- |
| Montserrat | +12% | +11.9% | -19% | 63 |
| Hanken Grotesk | +5% | -1.8% | +4% | 95 |
| Figtree | +7% | -1.2% | -3% | 95 |
| Onest | +13% | +2.7% | -3% | 89 |

- **The font is a cause.** Montserrat has the widest letters in the set and, at weight 400, strokes about 19% thinner for its lowercase height than Fieldwork's. Its lowercase is not small, so the "short x-height" explanation in the original experiment does not apply to it.
- **The colours are also a cause, in Deep Eco.** Worst case at the brightest glow behind the glass card, Momentum text on the Hub's grounds: Deep Eco muted 4.0:1 (fails AA), Twilight 4.9:1, Sunrise 5.7:1. Ink passes everywhere. Glows at 15%: Deep Eco muted 5.5:1. Opaque cards with the Readable set: Sunrise 8.8:1, Deep Eco 11.9:1, Twilight 13.0:1.

**Recommendations (inference and design judgement, not decisions).** Amber's brief, 7 October 2026: at most two faces in the app, readability first, small text on dark and on phones matters most, and body text does not need to resemble Fieldwork (the brand face is for recognition on decks, print and heroes, not loaded in the app).

1. **Two faces at most. Option A (my pick, to confirm by eye): Hanken Grotesk for headings with Onest for body.** Hanken is close to Fieldwork and holds up at heading sizes. Onest has the heaviest strokes of the body candidates and a lowercase 13% taller than Fieldwork's: at 13px, 6.9px lowercase and 1.34px stroke at weight 500 on dark (1.09px at 400 on light). Alternatives: Figtree (the least change: it was the body face until 5 October, 6.5px lowercase, 1.25px stroke at 500), Albert Sans, Manrope and Plus Jakarta Sans (taller lowercase, lighter strokes). **Option B: Onest alone for headings and body.** With Public Sans, IBM Plex Sans, Atkinson Hyperlegible Next and DM Sans removed, Onest is now the only body candidate with both a tall lowercase and sturdy strokes; that is inference from the measurements, not a decision.
2. **Hanken Grotesk is not the body face:** its lowercase (6.4px at 13px) is the smallest of the shortlist, which matches Amber's report that it is hard to read small. **Montserrat leaves the Hub. Inter is ruled out** (Amber, 7 October 2026: it is the default of so many products); it stays in the lab only as a reference.
3. **Size and weight:** body 16px, dense UI 14px, nothing that carries information under 13px, weight 400 on light and 500 on dark, line height 1.5, letter-spacing +0.01em at 13px and below.
4. **Colour (Amber's lean): Readable text and glows at 15%.** Muted text then passes comfortably in every theme (Sunrise 8.5:1, Deep Eco 8.0:1, Twilight 8.5:1). Opaque cards for dense tables and forms are an optional extra (Deep Eco 11.9:1); Momentum already says body text sits on a solid surface.
5. **One brighter secondary level:** dark ink `#eef4f3`, secondary 86% (not 62%), light-theme muted `#3e4d50`; the 40% tint for disabled controls only.
6. **Phones in dark mode:** weight 500 body on dark, soft white on a near-black ground, 16px text inputs (iPhones zoom below that), 44px targets, rem sizes, and `prefers-contrast`, `prefers-reduced-transparency` and `prefers-color-scheme`.

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
