# Lofty's App Design System — project instructions

## Vibe is the inherited foundation
monday.com Vibe is the design system this one inherits from. **Everything defaults to Vibe unless a Lofty override is specified.** That inheritance is deliberate and documented — do not strip Vibe references, attributions, or lineage notes from tokens, component contracts, guidelines or readmes.

- **Tokens:** the semantic layer follows Vibe's token names so Vibe-shaped components map straight onto it. Brand palette (Lofty brand kit) is the source of truth for *values*; Vibe supplies the *names*.
- **Type:** Vibe's screen scale with Outfit titles and Onest body. Lofty's Fieldwork families are for brand-led surfaces only (decks, print, marketing heroes), and print stays on Fieldwork. Montserrat is the fallback when Outfit and Onest are not available, and the Word document substitute where Fieldwork is not installed.
- **Status colours:** Vibe values, kept for contrast and readability.
- **Icons:** default to the Vibe icon set in `assets/icons` unless a Lofty-drawn icon is supplied. Construction/domain icons are the Lofty additions, drawn to the same rules.
- **Components:** layout and interaction behaviour come from Vibe; brand comes from the Lofty brand kit. Nothing here should be invented Lofty product design.

When something is not specified, the answer is "whatever Vibe does".

## Momentum
`momentum/` holds Lofty Momentum: the brand layer for the Hub and the portal, as an opt-in token layer with three themes (Sunrise, Deep Eco, Twilight). `momentum/README.md` states the rules in force, `momentum/HANDOFF.md` what is still open, and `momentum/font-lab/` the type setup and how it was chosen. `momentum/CONSOLIDATION.md`, `momentum/reference/` and `guidelines/reconciliation.html` are dated history, not guidance; do not build from them. Vibe stays the base: `momentum/tokens/vibe-theme.css` maps every Vibe semantic name onto a Momentum token, so the components in `components/` are unchanged. The root `styles.css` still serves the production system; link `momentum/styles.css` to get Momentum. `momentum/SKILL.md` is the skill for designing and building with it. `momentum/guidelines/` holds the specimen cards, `momentum/canvas/` the design canvas source; edit the generator (`momentum/scripts/gen-tokens.py`), never the generated token files.
