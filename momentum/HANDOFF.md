<!-- momentum/HANDOFF.md : outstanding issues and next steps for Lofty Momentum Consolidated. 5 October 2026, updated 6 October 2026. -->
# Handoff: Lofty Momentum Consolidated

Outstanding issues, open questions and next steps only. What the system is and how it was decided: `README.md` and `CONSOLIDATION.md`.

## 6 October 2026: cards, canvas source and records added

**Done**
- `guidelines/`: 27 specimen cards. The 20 component previews from the artifact, with every uploaded asset replaced by this repository's file (`assets/icons/Inbox.svg` and the three Lofty traces included); the six cards flattened from the design canvas; the 3 October 2026 reconciliation card and its `recon-visuals.js` as a governance record (font link moved from Figtree to Montserrat, text unchanged). The same 21 new files were written to the claude.ai/design project "Lofty Momentum Consolidated" (`4b3d14eb-fc09-41a4-acd8-1e8a6af7fb24`), which now shows 27 cards.
- `canvas/`: the live source of "Lofty Momentum Consolidated Design" (https://claude.ai/code/artifact/a693ef6a-271a-429e-ab5a-d76cc4e9890d), seven files plus the installed `tokens.json`.
- `reference/`: the Grounds page (https://claude.ai/artifact/L8cprtqo47YTG5sLUafsit; its CSS matches `tokens/backgrounds.css` exactly), the Lofty Hub Icon study (https://claude.ai/artifact/3NgDUejwLP4U4HeZWNoza1) with four PNG previews of the chosen icon, and three records from the claude.ai/design project "Lofty Momentum" (`85c9500f-c4af-47b9-8329-8ab78617deb2`): the 1.0 handoff, the proposed CLAUDE.md section and `proposed.css`.
- `CONSOLIDATION.md`: new section answering the 3 October 2026 reconciliation row by row, with the owner feedback it recorded.
- Artifact "Lofty Momentum Consolidated": the app icon uploaded to the Logos group, an AppIcon entry, the README's Logos section and the Consolidation section updated.

**Needs Amber** (asked in the popup on 6 October 2026; the outcome is recorded under Decided once answered)
- C-09 of the reconciliation recorded the feedback "Momentum is too round" with a suggested scale (4px dense controls, 8px buttons and inputs, 12px cards, 16px panels, 24px frame; pills for chips and Search only). The consolidation kept Momentum's radii (8, 12, 20, 24, 28, pill) and pill buttons under rank 2, and Amber's 5 October decision on radii covered only which steps exist. Which scale applies?
- C-04 recorded the feedback "natural gradients with little colour, low saturation (about 15% or less)". The glow discs in `tokens/colors.css` run at 22% to 47% alpha and the eleven backgrounds at 8% to 85%. Is the 15% a ceiling on the glows, or guidance already met by the backgrounds' soft falloff?
- The chosen app icon needs sign-off as a new mark before it moves to `assets/brand/`, and the 1024px, dark and tinted exports need to be produced; the study only holds previews.

**Not done, and why**
- The Momentum presentation (`projects/lofty-momentum-presentation/index.html`, version 13) was not copied: it exceeds the 256 KiB a design-sync read returns and a cut copy would mislead. It stays in the "Lofty Momentum" design project.

## 5 October 2026: consolidation published

**Done**
- Artifact "Lofty Momentum Consolidated" populated: brand book, Consolidation and Handoff sections, `tokens.json` (56 colours in three themes, 19 type styles, spacing, radius, shadow, blur, z-index), 20 components with previews, six Fieldwork fonts, 81 assets in three groups, a new cover.
- This folder added: the same tokens as CSS, the Vibe name mapping, the eleven backgrounds, the component rules as Markdown.
- Design canvas published (5 October 2026, later the same day): six artboards at https://claude.ai/artifact/Ma3dEuBCDVpnYA7MZM8dfA, with the consolidated system installed as its design system. The landing artboard carries a theme tweak (light, eco, twilight); the Deep Eco artboard imports it.
- Pull requests #4 to #7 merged 5 October 2026; all nine consolidation decisions recorded below.
- claude.ai/design project "Lofty Momentum Consolidated" created 5 October 2026 by design-sync (131 files: this folder, assets, fonts, 57 icons, six specimen cards, `readme.md`, `SKILL.md`, `github.md`). Re-sync from this folder after a change; the specimen cards come from the design canvas, not the repo.

**Decided**
- 5 October 2026, Amber: the Hub ships three themes (Sunrise, Deep Eco, Twilight) via `data-theme`, with two token tiers. Supersedes C15's two themes. The Hub's `docs/ui-system/OPEN_QUESTIONS.md` and `PATTERNS.md` (C15) on `ui_system_rebuild` already record the change.
- 5 October 2026, Amber: text ink is Deep Eco everywhere, the Hub, the portal and documents included. Foundation Black stays only for the black lockup. Closes Momentum 1.4's open decision. Applied to the document template and cover pages (`projects/lofty-document-template/`, `templates/lofty-document/`) on 5 October: text, headings, rules and the 8% hover wash moved to Deep Eco; the dark brand band on the template's closing page still uses Foundation Black as a background, which is a panel, not ink.
- 5 October 2026, Amber: the Hub drops Flint. One neutral story: Shell, the alpha `line` tokens, `surface-solid` and the two dark pages. The Hub's Flint references resolve through `vibe-theme.css`; the root `tokens/colors.css` keeps Flint for the production system until the switch.
- 5 October 2026, Amber: glass everywhere Momentum draws it (frame, panels, cards, widgets). Body text still sits on `surface-solid` or `surface-input`; text on glass is measured over the brightest glow. The App Design System's "no gradients, no blur" rule no longer applies to the Hub.
- 5 October 2026, Amber: charts use the five Momentum series only. The orange ramp and its sequential scale are not carried. Heat and load charts wait until a sequential scale is designed separately.
- 5 October 2026, Amber: the four derived values stand (solid focus ring, Deep Eco hover wash, disabled ink at 40%, Deep Eco backdrop).
- 5 October 2026, Amber: eight radii. `radius-xs` 4px and `radius-circle` stay for Vibe controls; 2px and 16px are dropped.
- 5 October 2026, Amber: the Vibe glyphs keep the names Contacts, Dashboard and Team; the Lofty traces moved from `assets/icons-pending/` to `assets/icons/` as `ContactsLofty`, `DashboardLofty` and `TeamLofty` (`docs/icons-pending-decision.md`).

**Needs Amber**
Nothing open from the 5 October consolidation itself. The 6 October items are listed above.

**Next steps**
- When the Hub rebuild reaches Stage 3, repoint `app/src/design-system/` (the mirror) at this folder and update `loftyTheme.ts`; expect `npm run check:design-tokens` to fail until both move together. Correct `DESIGN.md` and `check-contrast.mjs` lines 142 to 152 for Deep Eco on orange (C08 follow-up).
- Repoint the homeowner portal's tokens (`portal/src/styles/tokens/`, byte-identical to Momentum 1.4) at this folder so there is one set.
- Regenerate the CSS from `tokens.json` whenever a value changes, so the artifact and this folder never drift: edit `scripts/gen-tokens.py` and run it (`python3 momentum/scripts/gen-tokens.py momentum/tokens.json momentum/tokens`), then republish `tokens.json` to the artifact.
- Decide whether the root `styles.css` and `SKILL.md` switch to Momentum, or whether this folder stays opt-in until the Hub ships it.

**Known shortfalls, kept and named**
- `line-control` on `surface-selected` peach is 2.8:1; a control inside a selected row uses `ink-muted` as its edge.
- `status-at-risk` light is 3.2:1 on white: graphic only, never text.
- `orange-hover` is 3.6:1 on white: large or bold labels only.
