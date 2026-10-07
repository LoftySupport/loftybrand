<!-- momentum/HANDOFF.md : outstanding issues and next steps for Lofty Momentum Consolidated. 5 October 2026, updated 6 October 2026. -->
# Handoff: Lofty Momentum Consolidated

Outstanding issues, open questions and next steps only. What the system is and how it was decided: `README.md` and `CONSOLIDATION.md`.

## 7 October 2026: Font Lab added, body face under review

**Done**
- `font-lab/`: a tester for choosing a body typeface beside Fieldwork, built from Amber's experiment for another brand with Momentum colours and grounds, Fieldwork, and Lofty copy (the other brand's name, logo, palette and display faces were not saved). It separates font from colours on Sunrise, Deep Eco and Twilight. Findings and method in `font-lab/README.md`.
- The deck's dark themes and the Hub's dark themes were reported hard to read the same day. The deck was fixed (`reference/README.md`); the Hub is below.

**Needs Amber**
- Which body face? Amber reported on 7 October 2026 that Montserrat in body text is too hard to read, which reopens the body half of C04 ("Montserrat for digital and web", 5 October). Measured: Montserrat has the widest letters in the set (+11.9% against Fieldwork Hum) and strokes 19% thinner for its lowercase at weight 400. Of the faces still in the lab, Hanken Grotesk and Figtree are the closest to Fieldwork on width, proportions and stroke weight (95 each). Amber's constraints (7 October 2026): at most two faces in the app, readability first, small text on dark and on phones matters most, and body text need not resemble Fieldwork (the brand face is for recognition on decks, print and heroes, not loaded in the app). My recommendation (inference, to confirm by eye in the lab on a 390px phone): option A, Hanken Grotesk for headings with Onest for body (heaviest strokes of the body candidates, lowercase 13% taller than Fieldwork's; Figtree as the safe alternative), or option B, Onest alone. Hanken as the body face has the smallest lowercase of the shortlist, matching Amber's report. Montserrat leaves the Hub; Inter is ruled out (Amber, 7 October 2026: the default of too many products). Amber also removed Mulish, Fieldwork Hum, Source Sans 3, IBM Plex Sans, Atkinson Hyperlegible Next, Public Sans, DM Sans and Nunito Sans from the lab's choices the same day, so Public Sans is no longer the pick; Fieldwork stays for brand surfaces. Amber's lean on colour: Readable text with glows at 15%. Nothing in the tokens has changed.
- Colours too, in Deep Eco: muted text is 4.0:1 at the brightest glow with Momentum text on the Hub's grounds (fails AA). Capping the glows at 15% gives 5.5:1; opaque text cards with the proposed Readable set (soft white ink, secondary text 86%, a heavier body weight on dark) give 11.9:1. My recommendation: text on solid surfaces (the Momentum rule already says so), glass only for the frame, rail and header. Adopt, adjust or decline?
- Fieldwork Geo in the app: yes for headings and display, not body (only Light and DemiBold exist, so CSS weight 400 renders Light). Before the Hub serves it: confirm the TipoType web licence covers hub.lofty.au (G-23), and pin the vertical metrics in `@font-face` (the lab has the block).

## 6 October 2026: cards, canvas source and records added

**Done**
- `guidelines/`: 27 specimen cards. The 20 component previews from the artifact, with every uploaded asset replaced by this repository's file (`assets/icons/Inbox.svg` and the three Lofty traces included); the six cards flattened from the design canvas; the 3 October 2026 reconciliation card and its `recon-visuals.js` as a governance record (font link moved from Figtree to Montserrat, text unchanged). The same 21 new files were written to the claude.ai/design project "Lofty Momentum Consolidated" (`71001be5-6701-4256-b11a-e0540b42e348`), which now shows 27 cards. The project created on 5 October (`4b3d14eb-fc09-41a4-acd8-1e8a6af7fb24`) was no longer listed on 6 October (the design API returned not found), so it was recreated as `71001be5-6701-4256-b11a-e0540b42e348` with all 172 files; the old id is dead.
- `canvas/`: the live source of "Lofty Momentum Consolidated Design" (https://claude.ai/code/artifact/a693ef6a-271a-429e-ab5a-d76cc4e9890d), seven files plus the installed `tokens.json`.
- `reference/`: the Grounds page (https://claude.ai/artifact/L8cprtqo47YTG5sLUafsit; its CSS matches `tokens/backgrounds.css` exactly), the Lofty Hub Icon study (https://claude.ai/artifact/3NgDUejwLP4U4HeZWNoza1) with four PNG previews of the chosen icon, and three records from the claude.ai/design project "Lofty Momentum" (`85c9500f-c4af-47b9-8329-8ab78617deb2`): the 1.0 handoff, the proposed CLAUDE.md section and `proposed.css`.
- `CONSOLIDATION.md`: new section answering the 3 October 2026 reconciliation row by row, with the owner feedback it recorded.
- Artifact "Lofty Momentum Consolidated": the app icon uploaded to the Logos group, an AppIcon entry, the README's Logos section and the Consolidation section updated.

**Decided**
- 6 October 2026, Amber: the 3 October radius scale applies (reconciliation C-09, "Momentum is too round"). `radius-xs` 4 dense controls, `radius-s` 8 buttons and inputs, `radius-m` 12 cards, `radius-l` 16 panels and the prompt box, `radius-frame` 24; pills for chips and Search only, buttons are never pills. Reinstates the 16px step dropped on 5 October; 20 and 28 go. Applied to the generator, the tokens, the component rules and the two landing specimens.
- 6 October 2026, Amber: the glow discs (`glow-1` to `glow-3`) are capped at 15% opacity in every theme (reconciliation C-04, "little colour, low saturation"). The eleven backgrounds keep their measured, contrast-checked values. Applied to the generator notes, the AppFrame rule and the landing specimens.

**Needs Amber**
- The Hub's Deep Eco and Twilight screens have the same readability problem as the deck (Amber's screenshots of User settings, 7 October 2026): glows at 32% to 47% lift the background behind 12 to 13px muted text and the `#807f74` control edge, and the 40% disabled tint is used for text that carries information ("no provider yet"). Computed from the Hub's tokens on `main`: muted text 4.7:1 and control edges 2.4:1 over the strongest Deep Eco glow, disabled tint 2.7:1. Proposed on the Hub's `ui_system_rebuild` area: glows to 15%, a muted floor for information text, a lighter dark control edge. Awaiting Amber's go-ahead; nothing changed in the Hub.
- The chosen app icon needs sign-off as a new mark before it moves to `assets/brand/`, and the 1024px, dark and tinted exports need to be produced; the study only holds previews.

**Next steps**
- Redraw the component previews to the 6 October shapes: `guidelines/*.html` and the artifact's `components/*/preview.html` still draw pill buttons and 20 to 28px corners (hard-coded px, not tokens), except the two landing specimens and the canvas, which were updated. Rules win over pictures until then.
- Re-sync the Hub's `docs/ui-system/` radius rows (C09 in `RULE_SOURCES.md`) with the 3 October scale when Stage 3 starts.

**Done later the same day**
- 7 October 2026: Amber's upload of the presentation under its new title ("Lofty Momentum Slide Presentation") replaced the copy below, with a readability pass on the Deep Eco and Twilight themes (details in `reference/README.md`). The same weakness exists in the Hub itself and is not fixed there yet: see Needs Amber.
- The Momentum presentation (version 13, about 6 MB) is in `reference/lofty-momentum-prototype.html`, copied from the artifact's new Prototypes asset group (added by a Cowork session on 6 October) after the 256 KiB design-sync read cap had blocked a direct copy.

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
- 5 October 2026, Amber: eight radii. `radius-xs` 4px and `radius-circle` stay for Vibe controls; 2px and 16px are dropped. (16px returned on 6 October as `radius-l`; see above.)
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
