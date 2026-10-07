<!-- momentum/HANDOFF.md : outstanding issues and next steps for Lofty Momentum. Updated 7 October 2026. -->
# Handoff: Lofty Momentum

Outstanding issues, open questions and next steps only. What the system is: `README.md`. How it got here, as a dated record: `CONSOLIDATION.md`, `CHANGELOG.md` and `reference/`.

## Needs Amber

- **Readable text colours.** Deep Eco muted text is 4.0:1 at the brightest glow with the Hub's grounds (fails AA). Glows at 15% give 5.5:1; the Readable set (soft white ink, secondary text 86%) with glows at 15% gives 8.0:1; on solid cards 11.9:1. The values are in `font-lab/SETUP.md`. Not yet in the tokens: adopt, adjust or decline.
- **The Hub's dark themes.** Deep Eco and Twilight screens have the same readability problem as the deck was fixed for: glows at 32% to 47% lift the background behind 12 to 13px muted text and the `#807f74` control edge, and the 40% disabled tint is used for text that carries information. Computed from the Hub's tokens on `main`: muted text 4.7:1 and control edges 2.4:1 over the strongest Deep Eco glow, disabled tint 2.7:1. Proposed on the Hub's `ui_system_rebuild` area: glows to 15%, a muted floor for information text, a lighter dark control edge. `font-lab/AGENT-PROMPT.md` carries the brief for the app agent. Nothing changed in the Hub.
- **Bold body styles.** `body-strong` and `label` are 700 in Onest. Keep, or move to 600.
- **Fieldwork Geo in the app.** Yes for headings and display, not body (only Light and DemiBold exist, so CSS weight 400 renders Light). Before the Hub serves it, confirm the TipoType web licence covers hub.lofty.au (G-23) and pin the vertical metrics in `@font-face` (the lab has the block). Not needed while Fieldwork is not shipped in the Hub.
- **The app icon.** The chosen icon needs sign-off as a new mark before it moves to `assets/brand/`, and the 1024px, dark and tinted exports need to be produced; the study only holds previews.
- **The root kit.** Whether the root `styles.css`, `SKILL.md` and `tokens/` heading weights switch fully to Momentum, or this folder stays opt-in until the Hub ships it. The root kit now uses Outfit and Onest but keeps 700 headings.

## Next steps

- **Check the cards.** `guidelines/*.html` and `canvas/*.dc.html` were rewritten for Outfit and Onest by a script: inline styles at 18px or larger, and h1 to h4, are Outfit, the rest Onest, with 700 headings moved to 600. Check them by eye and regenerate any that read wrong. The artifact's `components/*/preview.html` still say Montserrat and draw pill buttons and 20 to 28px corners; redraw them to the current radii and fonts. Rules win over pictures until then.
- **Hub Stage 3.** Repoint `app/src/design-system/` (the mirror) at this folder and update `loftyTheme.ts`; expect `npm run check:design-tokens` to fail until both move together. Re-sync the Hub's `docs/ui-system/` radius rows with the current scale. Correct `DESIGN.md` and `check-contrast.mjs` lines 142 to 152 for Deep Eco on orange.
- **Homeowner portal.** Repoint its tokens (`portal/src/styles/tokens/`, byte-identical to an earlier Momentum draft) at this folder so there is one set.
- **Keep the tokens single-sourced.** Edit `scripts/gen-tokens.py`, run it (`python3 momentum/scripts/gen-tokens.py momentum/tokens.json momentum/tokens`), then republish `tokens.json` to the artifact and re-sync the design project.

## Known shortfalls

- `line-control` on `surface-selected` peach is 2.8:1; a control inside a selected row uses `ink-muted` as its edge.
- `status-at-risk` light is 3.2:1 on white: graphic only, never text.
- `orange-hover` is 3.6:1 on white: large or bold labels only.
- No sequential chart scale: heat and load charts wait for one.
