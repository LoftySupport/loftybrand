# Lofty's App Design System — project instructions

## Vibe is the inherited foundation
monday.com Vibe is the design system this one inherits from. **Everything defaults to Vibe unless a Lofty override is specified.** That inheritance is deliberate and documented — do not strip Vibe references, attributions, or lineage notes from tokens, component contracts, guidelines or readmes.

- **Tokens:** the semantic layer follows Vibe's token names so Vibe-shaped components map straight onto it. Brand palette (Lofty brand kit) is the source of truth for *values*; Vibe supplies the *names*.
- **Type:** Vibe's screen scale (Figtree body, Montserrat titles). Lofty's Fieldwork families are for brand-led surfaces only (decks, print, marketing heroes).
- **Status colours:** Vibe values, kept for contrast and readability.
- **Icons:** default to the Vibe icon set in `assets/icons` unless a Lofty-drawn icon is supplied. Construction/domain icons are the Lofty additions, drawn to the same rules.
- **Components:** layout and interaction behaviour come from Vibe; brand comes from the Lofty brand kit. Nothing here should be invented Lofty product design.

When something is not specified, the answer is "whatever Vibe does".

## Momentum, 5 October 2026
`momentum/` holds Lofty Momentum Consolidated: the brand refresh merged with this system and Amber's 4 and 5 October 2026 decisions, as an opt-in token layer with three themes. Read `momentum/CONSOLIDATION.md` before changing a value there, and `momentum/HANDOFF.md` for what is still open. Vibe stays the base: `momentum/tokens/vibe-theme.css` maps every Vibe semantic name onto a Momentum token, so the components in `components/` are unchanged. The root `styles.css` still serves the production system; link `momentum/styles.css` to get Momentum. Since 6 October 2026 `momentum/guidelines/` holds the specimen cards (regenerate from the artifact, do not hand-edit), `momentum/canvas/` the design canvas source, and `momentum/reference/` dated records that the consolidation may have superseded; `momentum/reference/README.md` says which. `momentum/font-lab/` is a tester for choosing the body typeface (Amber, 7 October 2026: Montserrat body text is too hard to read); open it before changing a font token. Decided 7 October 2026: Outfit headings, Onest body, Fieldwork for brand surfaces only.
