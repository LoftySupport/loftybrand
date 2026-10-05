<!-- momentum/HANDOFF.md : outstanding issues and next steps for Lofty Momentum Consolidated. 5 October 2026. -->
# Handoff: Lofty Momentum Consolidated

Outstanding issues, open questions and next steps only. What the system is and how it was decided: `README.md` and `CONSOLIDATION.md`.

## 5 October 2026: consolidation published

**Done**
- Artifact "Lofty Momentum Consolidated" populated: brand book, Consolidation and Handoff sections, `tokens.json` (56 colours in three themes, 19 type styles, spacing, radius, shadow, blur, z-index), 20 components with previews, six Fieldwork fonts, 81 assets in three groups, a new cover.
- This folder added: the same tokens as CSS, the Vibe name mapping, the eleven backgrounds, the component rules as Markdown.

**Decided**
- 5 October 2026, Amber: the Hub ships three themes (Sunrise, Deep Eco, Twilight) via `data-theme`, with two token tiers. Supersedes C15's two themes; the Hub's `docs/ui-system/OPEN_QUESTIONS.md` row of 5 October and `PATTERNS.md` section 7 (C15) still need updating on `ui_system_rebuild`.
- 5 October 2026, Amber: text ink is Deep Eco everywhere, the Hub, the portal and documents included. Foundation Black stays only for the black lockup. Closes Momentum 1.4's open decision; the document template in `projects/lofty-document-template/` still sets Foundation Black and needs the change.
- 5 October 2026, Amber: the Hub drops Flint. One neutral story: Shell, the alpha `line` tokens, `surface-solid` and the two dark pages. The Hub's Flint references resolve through `vibe-theme.css`; the root `tokens/colors.css` keeps Flint for the production system until the switch.

**Needs Amber (one at a time, in the popup)**
1. Backgrounds and glass: the App Design System's "no gradients, no blur" rule is superseded by Momentum's glows and frame. Confirm for the Hub, or limit glass to the shell.
2. Data visualisation: five fixed series replace the single-accent orange ramp. Confirm, and decide a sequential scale (none exists in either source).
3. The derived values in `CONSOLIDATION.md` (focus ring, hover wash, disabled ink, backdrop): confirm or change.
4. `radius-xs` 4px and `radius-circle` from the App Design System are kept for Vibe controls; 2px and 16px are dropped. Confirm.
5. Contacts, Dashboard and Team icons: which drawing wins (`../assets/icons-pending/README.md`).

**Next steps**
- When the Hub rebuild reaches Stage 3, repoint `app/src/design-system/` (the mirror) at this folder and update `loftyTheme.ts`; expect `npm run check:design-tokens` to fail until both move together. Correct `DESIGN.md` and `check-contrast.mjs` lines 142 to 152 for Deep Eco on orange (C08 follow-up).
- Repoint the homeowner portal's tokens (`portal/src/styles/tokens/`, byte-identical to Momentum 1.4) at this folder so there is one set.
- Regenerate the CSS from `tokens.json` whenever a value changes, so the artifact and this folder never drift: edit `scripts/gen-tokens.py` and run it (`python3 momentum/scripts/gen-tokens.py momentum/tokens.json momentum/tokens`), then republish `tokens.json` to the artifact.
- Decide whether the root `styles.css` and `SKILL.md` switch to Momentum, or whether this folder stays opt-in until the Hub ships it.

**Known shortfalls, kept and named**
- `line-control` on `surface-selected` peach is 2.8:1; a control inside a selected row uses `ink-muted` as its edge.
- `status-at-risk` light is 3.2:1 on white: graphic only, never text.
- `orange-hover` is 3.6:1 on white: large or bold labels only.
