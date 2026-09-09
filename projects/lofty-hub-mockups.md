# Lofty Hub Mockups

Screen mockups and a written design check for the Lofty projects app.

**Design project:** https://claude.ai/design/p/32860179-6011-4fb8-b214-ab6fa12cd759
**Tracks:** `LoftySupport/loftyprojectapp` (branch `main`)

## Files

Vendored under [`lofty-hub-mockups/`](./lofty-hub-mockups/), with the orange
logo and the design-check capture under `docs/`.

| File | What it is |
| --- | --- |
| `Lofty Hub Mockups.dc.html` | Round-one mockups: job drawer, new job, projects board and Gantt, reports, Settings → Processes |
| `Design Check.dc.html` | Design check against the bound system and WCAG 2.2 AA — 6 P0, 14 P1, plus a pattern register |

## What it consumes

Tokens, the compiled bundle, the product icon SVGs, and the orange logo from
`assets/brand/`. It uses the screen stack: semantic tokens, Figtree and
Montserrat, dataviz components for the reports surface.

## Decisions worth carrying back

**The orange split.** `#f47e63` fails contrast for text at small sizes. The
mockups resolved this by giving `#c2543c` (already a token here) anything that
carries text or meaning at 4.54:1, and keeping `#f47e63` decorative. That split
is now the system rule.

**Flint migration.** The mockups predated the Flint neutral family and held 116
literals of the retired cool greys `#f6f7f7`, `#e7e8e9` and `#d1d3d4`. All
moved to Flint 100/200/300. The board's green phase ramp was re-cut on the
orange ladder and its green counter tints moved to Flint 200, applying the rule
that Crisp Orange and Eco Green never share a view.

## Open in that project

- Reports panels are still hand-built rather than using the dataviz components.
- No dark screen has been drawn, so the dark token layer is unexercised at
  screen scale.
