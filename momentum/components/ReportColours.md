<!-- momentum/components/ReportColours.md : Momentum component rules, from the Lofty Momentum artifact (components/ReportColours/README.md). 5 October 2026. -->
# ReportColours

How several colours sit together in reports, charts and multi-colour icons without muddying.

**Two separate sets, never mixed:**

- **Status** (`status-on-track`, `status-at-risk`, `status-overdue`) answers "is it OK?". Use it only for state: status bars, chips, table flags.
- **Series** (`series-1` to `series-5`) answers "which one?". Use it for jobs, divisions, suppliers, anything categorical.

**Series order (always in this order, never cycled):**

| Slot | Light | Dark | From |
|---|---|---|---|
| series-1 | #009BA3 | #009BA3 | Current |
| series-2 | #E46C50 | #E46C50 | Crisp Orange, deepened for 3:1 on white |
| series-3 | #8E3A72 | #A8508A | Plum, lifted to read as a colour |
| series-4 | #AD8410 | #B88C14 | Ochre, added for a warm fourth |
| series-5 | #3F6FB0 | #5A82D0 | Slate blue, added for a cool fifth |

Both sets were run through a colour-blind and contrast check: every adjacent pair separates for protan, deutan and tritan vision, all sit inside the lightness band, and each clears 3:1 on white (light) and on Deep Eco (dark). Crisp Orange itself is 2.6:1 on white, which is why charts use the deeper #E46C50.

**When colours run together:**

- Leave a 2px gap between touching segments (stacked bars, donuts, adjacent bars) so each colour ends cleanly.
- Round only the data end of a bar (4px).
- Put the value and name beside the mark in `ink` text. Never colour the text.
- Two or more series always get a legend; up to four also get direct labels at the line end.
- A sixth category folds into "Other" in a neutral (`line-control`), rather than a new colour.
- Keep brand accents (Eco Green, plum, blush, sky) out of charts. They belong to surfaces.
- Status bars use the StatusIcon shapes in their legend, so the meaning survives print and colour blindness.

**In the app:** see ReportExamples for the Reports > Budget screen, which uses every rule above.
