<!-- momentum/reference/README.md : dated source records kept beside Lofty Momentum Consolidated. Added 6 October 2026. -->
# Reference: dated records

Files kept as they were written, so a decision in `../CONSOLIDATION.md` can be checked against its source. Nothing here is current guidance on its own; where a file disagrees with `../README.md` or `../CONSOLIDATION.md`, the consolidation wins.

| File | What it is | Status against the consolidation |
| --- | --- | --- |
| `lofty-momentum-grounds.html` | "Lofty Momentum Grounds": the eleven backgrounds in light and dark, grouped by job, each shown at full size under real content with its CSS and contrast. From https://claude.ai/artifact/L8cprtqo47YTG5sLUafsit, copied 6 October 2026 | The CSS of all eleven and their dark twins is identical to `../tokens/backgrounds.css`. This page is the interactive specimen; the token file is the source |
| `lofty-hub-icon.html` | "Lofty Hub Icon": the app icon study. Ten geometric concepts graded, five revisions, the chosen icon across iOS appearances and sizes, and a second round of marks for Icon Composer. From https://claude.ai/artifact/3NgDUejwLP4U4HeZWNoza1, copied 6 October 2026 | **Chosen: Gantt, tone on tone, all orange.** The page says the chosen icon arranges the Lofty point in a new way and needs sign-off as a new mark before it ships. Not yet signed off; the icon is not in `assets/brand/` for that reason |
| `app-icon/` | Four PNG previews decoded from the icon page: the chosen icon at 300px, and its Default, Dark and Tinted-source appearances at 200px | Previews only. The page refers to layered files for iOS 26 and flattened 1024px PNGs with dark and tinted versions; those were not in the document and are not in this repository |
| `MOMENTUM_HANDOFF-1.0.md` | The Momentum 1.4 build handoff, 25 September 2026, from the claude.ai/design project "Lofty Momentum" | Replaced by the 2.0 handoff (the artifact's Handoff section and `../HANDOFF.md`). Figtree, two themes and the open ink decision are superseded |
| `CLAUDE.momentum-1.0.md` | The CLAUDE.md section the 1.4 handoff proposed for the Hub, 25 September 2026 | Not adopted as written; the Hub's `CLAUDE.md` and `docs/ui-system/` own its rules |
| `proposed-tokens-1.4.css` | The gap-fill proposals G-01 to G-10 written against Momentum 1.4 | Every block resolved; the header of the file says how |

## Not copied

- **The Momentum presentation** (`projects/lofty-momentum-presentation/index.html` in the "Lofty Momentum" design project, version 13): the clickable prototype of every screen in three themes. It is larger than the 256 KiB a design-sync read returns, so it could not be copied whole, and a cut file would mislead. It stays in the design project at https://claude.ai/design/p/85c9500f-c4af-47b9-8329-8ab78617deb2. The 2.0 handoff treats it as behaviour reference only: rules win over pictures.
- **The "Lofty Momentum" design project's own cards** (`cover`, `button`, `status-icon`, `app-rail`, Momentum 1.4 in Figtree with the spark icon): superseded by `../guidelines/`.
