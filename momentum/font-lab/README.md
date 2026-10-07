<!-- momentum/font-lab/README.md : the Lofty Font Lab, a tester for choosing a body typeface. Added 7 October 2026. -->
# Font Lab

A tester for choosing a body typeface beside Fieldwork, on the real Momentum themes. Amber's brief, 7 October 2026: body text in Montserrat is too hard to read; find out whether the fault is the font or the colours, and pick an alternative with a tester.

Open `index.html` from a checkout of this repository, in Chrome, with an internet connection. It reads Fieldwork from `../../assets/fonts`, the Lofty logo from `../../assets/brand`, and the other faces from Google Fonts (open licence).

## What it does

| Section | Answers |
| --- | --- |
| Top bar: body size, body weight, text colours, backgrounds | Change one variable at a time. Text colours: Momentum today, or a Readable set (a proposal). Backgrounds: the Hub's grounds today, every glow capped at 15%, or flat |
| Font against colours | Two fonts, three themes (Sunrise, Deep Eco, Twilight) on the real grounds and glass, with the contrast at the brightest glow behind the text. Compare rows for the font effect, flip the top bar for the colour effect |
| Contrast by combination | The same numbers for four colour settings. They do not depend on the font |
| Measured against Fieldwork | Lowercase height, width, stroke weight and a closeness score, from the font files |
| Pairing studio | Any heading face with any body face, Montserrat included in both lists, on all three themes |
| Letterforms, Every face | Glyph comparison with Fieldwork Geo and Hum as the brand reference, and each face on all three themes with a 16 to 12px ladder |

## Where it came from, and what was left out

Built from Amber's font-lab experiment for another brand. Kept: the layout, the controls, the pairing studio, the glyph comparison and the candidate faces (Hanken Grotesk, Manrope, Albert Sans, Figtree, Onest, Plus Jakarta Sans, Montserrat, Nunito Sans, Mulish; Jost, Outfit and Space Grotesk as heading faces). Replaced: its colours with Momentum's, its display face with Fieldwork, its copy with Lofty copy, its single light and dark panes with the three themes. Left out and not saved anywhere: the other brand's name, logo, palette and notes, its display and print faces (Modulus Pro, Sofia Pro) and Poppins.

## Findings, 7 October 2026

Measured, not opinion:

| Face | Lowercase vs Fieldwork | Width vs Fieldwork | Strokes vs Fieldwork (400) | Closeness |
| --- | --- | --- | --- | --- |
| Montserrat | +12% | +11.9% | -19% | 63 |
| Hanken Grotesk | +5% | -1.8% | +3% | 95 |
| Figtree | +7% | -1.2% | -2% | 96 |
| Nunito Sans | +4% | -1.0% | -3% | 94 |
| Mulish | +7% | +1.9% | -4% | 93 |
| Albert Sans | +7% | +0.4% | -8% | 91 |

- **The font is a cause.** Montserrat has the widest letters in the set and, at weight 400, strokes about 19% thinner for its lowercase height than Fieldwork's. Words run long and small text looks faint. Its lowercase is not small, so the "short x-height" explanation in the original experiment does not apply to it.
- **The colours are also a cause, in Deep Eco.** Worst case at the brightest glow, behind the glass card: Momentum text on the Hub's grounds gives 4.0:1 for muted text in Deep Eco, which fails AA (4.5:1). Twilight is 4.9:1 and Sunrise 5.7:1. Ink passes everywhere (7.4:1 to 17.1:1). Capping the glows at 15% lifts Deep Eco muted to 5.5:1; capping the glows and using the Readable set lifts it to 8.0:1.
- **Inference, to judge by eye in the tester:** fixing the colours alone leaves Montserrat's width and thin strokes; changing the font alone leaves Deep Eco muted text at 4.0:1. Both changes together are the strongest. Hanken Grotesk and Figtree keep Fieldwork's proportions and heavier strokes.

Limits: contrast is a worst case taken at the centre of one glow at a time (overlaps can be slightly worse) and is computed from the token values, not from rendered pixels. Fieldwork exists in Light (300) and DemiBold (600) only, so weights 400 and 500 show Light. The "Readable set" (dark ink `#eef4f3`, secondary text 86%, body weight one step heavier on dark, light-theme muted `#3e4d50`) is a proposal, not a token.

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
