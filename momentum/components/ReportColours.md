<!-- momentum/components/ReportColours.md : Momentum component rules, from the Lofty Momentum artifact (components/ReportColours/README.md). 5 October 2026. -->
# ReportColours

How several colours sit together in reports, charts and multi-colour icons without muddying.

**Two separate sets, never mixed:**

- **Status** (`status-on-track`, `status-at-risk`, `status-overdue`) answers "is it OK?". Use it only for state: status bars, chips, table flags.
- **Series** (`series-1` to `series-5`) answers "which one?". Use it for jobs, divisions, suppliers, anything categorical.

**Series order (always in this order, never cycled):**

| Slot | Light | Dark | From |
|---|---|---|---|
| series-1 | #009BA3 | #009BA3 | Scheduling teal, as the team draws it |
| series-2 | #E46C50 | #F47E63 | Construction orange. Light is deepened for 3:1 on white; dark is the team colour as it is |
| series-3 | #8E3A72 | #A8508A | Design plum. Lifted on dark, where the team colour is 2.5:1 |
| series-4 | #947DDC | #A08BE0 | Estimating lavender. Light is deepened for 3:1 on white; dark is the team colour as it is |
| series-5 | #3F6FB0 | #3F6FB0 | Acquisition & Development blue, as the team draws it (3.5:1 on the dark solid card) |

The series are the Hub's team colours (Amber, 26 October 2026: "update colours based on team colour icons"). Where a team colour holds 3:1 on its ground it is used as it is; where it does not, it keeps its hue and moves its lightness (series-2 and series-4 in light, series-3 in dark). Ochre (#AD8410 and #B88C14) is retired: it matched no team. The eleven team colours are tokens in their own right (`team-*`); use them for a team's mark and tag, not for a chart.

Contrast: each series clears 3:1 on white (light) and on the dark solid card and eco-night (dark); the lowest is 3.2:1 on white (series-2) and 3.5:1 on dark (series-5). Separation was checked on 26 October 2026 with a colour-vision simulation (Machado matrices, CIELAB distance, every pair of the five). The closest pair is 28 apart for normal vision in Sunrise, 14 for protan and deutan and 17 for tritan; in the dark themes 27, 15, 9 and 17 (the deutan 9 is series-1 against series-3, unchanged from before). The orange and green pair (Maintenance) was tried for slot four and dropped: 7 apart for deutan. Treat the simulation as a screen, not a clinical test. Crisp Orange itself is 2.6:1 on white, which is why charts use the deeper #E46C50.

**When colours run together:**

- Leave a 2px gap between touching segments (stacked bars, donuts, adjacent bars) so each colour ends cleanly.
- Round only the data end of a bar (4px).
- Put the value and name beside the mark in `ink` text. Never colour the text.
- Two or more series always get a legend; up to four also get direct labels at the line end.
- A sixth category folds into "Other" in a neutral (`line-control`), rather than a new colour.
- Keep brand accents (Eco Green, plum, blush, sky) out of charts. They belong to surfaces.
- Status bars use the StatusIcon shapes in their legend, so the meaning survives print and colour blindness.

**In the app:** see ReportExamples for the Reports > Budget screen, which uses every rule above.
