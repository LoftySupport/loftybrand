<!-- momentum/HANDOFF.md : outstanding issues and next steps for Lofty Momentum. Updated 12 October 2026. -->
# Handoff: Lofty Momentum

Outstanding issues, open questions and next steps only. What the system is: `README.md`. How it got here, as a dated record: `CONSOLIDATION.md`, `CHANGELOG.md` and `reference/`.

## Needs Amber

- **Where the Hub and Momentum still differ** (found by the live-app comparison, 12 October 2026; the Hub's `docs/ui-system/BRAND_CHECK.md` has the table). None is decided:
  - Status colours: the Hub uses Vibe's `#00854d` and `#ffcb00`; Momentum uses the graded `#00805f`, `#c28400`, `#d83a52`.
  - Chart series: the Hub's orange-first ramp; Momentum's five fixed series (your 5 October decision, not yet in the rulebook).
  - Sunrise glows: Momentum caps every disc at 15%; the Hub draws 85% orange corners and a 50% edge at your 7 October request.
  - Sunrise page ground (`#f3f4f4` in the Hub, Shell `#fcf1ee` here), the Flint-style neutrals still in the Hub's `--ui-background-*` and `--layout-border-color`, and the placeholder colour.
  - Dark control edge: the Hub has `#807f74`; the rule is `#8a898d` in every theme.
  - Dark shadows: you confirmed tinted on 5 October; Momentum now is, the Hub is still pure black.
  - Hub still ships spacing 2, 20, 40 and 80 (`BRAND_CHECK.md` F2).
- **Fieldwork Geo in the app.** Yes for headings and display, not body (only Light and DemiBold exist, so CSS weight 400 renders Light). Before the Hub serves it, confirm the TipoType web licence covers hub.lofty.au (G-23) and pin the vertical metrics in `@font-face` (the lab has the block). Not needed while Fieldwork is not shipped in the Hub.
- **The app icon.** The chosen icon needs sign-off as a new mark before it moves to `assets/brand/`, and the 1024px, dark and tinted exports need to be produced; the study only holds previews.
- **The root kit.** Whether the root `styles.css`, `SKILL.md` and `tokens/` switch fully to Momentum, or this folder stays opt-in until the Hub ships it. The root kit uses Outfit and Onest but keeps 700 headings and the old spacing, radii and selected state.

## Next steps

- **Check the cards.** `guidelines/*.html` and `canvas/*.dc.html` were rewritten for Outfit and Onest by a script. On 12 October 2026 the muted text colours, the colour card's selected swatch and the foundations card's spacing steps were updated. The cards still draw 8px buttons, 40px controls, white ink on the dark themes, 600 headings and 700 bold text. Redraw them to the current tokens; the artifact's `components/*/preview.html` likewise. Rules win over pictures until then.
- **Re-sync the copies.** Republish `tokens.json` and the README to the Lofty Momentum artifact, and re-sync the design project, after this change.
- **Hub Stage 3.** Repoint `app/src/design-system/` (the mirror) at this folder and update `loftyTheme.ts`; expect `npm run check:design-tokens` to fail until both move together. Correct `DESIGN.md` and `check-contrast.mjs` lines 142 to 152 for Deep Eco on orange.
- **Homeowner portal.** Repoint its tokens (`portal/src/styles/tokens/`, byte-identical to an earlier Momentum draft) at this folder so there is one set.
- **Keep the tokens single-sourced.** Edit `scripts/gen-tokens.py`, run it (`python3 momentum/scripts/gen-tokens.py momentum/tokens.json momentum/tokens`), copy `tokens.json` to `canvas/ds/lofty-momentum/tokens.json`, then republish and re-sync.
- **Compare with the live Hub.** Run `.claude/skills/run-lofty-hub/driver.mjs drift --brand <this checkout>` in `LoftySupport/loftyprojectapp` after any token change.

## Known shortfalls

- `status-at-risk` light is 3.2:1 on white: graphic only, never text.
- `orange-hover` is 3.6:1 on white: large or bold labels only.
- No sequential chart scale: heat and load charts wait for one.
