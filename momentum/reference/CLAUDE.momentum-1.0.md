<!-- momentum/reference/CLAUDE.momentum-1.0.md : the CLAUDE.md section Lofty Momentum 1.4 proposed for the Hub repository, written 25 September 2026, copied from the claude.ai/design project "Lofty Momentum" (docs/CLAUDE.momentum.md) on 6 October 2026. A dated record, not current guidance: the Hub's CLAUDE.md and docs/ui-system/ own its rules, and the consolidation decided Montserrat only (no Figtree). -->

## UI: Lofty Momentum (design system 1.4)

Read `docs/design/MOMENTUM_HANDOFF.md` before any UI work. It sets the build order, the rules and the open decisions.

- **Source of rules:** the Lofty Momentum design system README and each component README. When a picture disagrees with a README, the README wins.
- **Tokens only.** Every colour, space, radius, shadow and blur comes from `styles/tokens/*.css`. No raw hex values in components.
- **Themes:** Sunrise on `:root`, Deep Eco on `[data-theme="eco"]`, Twilight on `[data-theme="twilight"]`. Build with semantic tokens (`page`, `ink`, `surface-*`, `line`), never the brand hexes.
- **Colour rules:**
  - Deep Eco text on orange, never white.
  - One orange action per area.
  - Plum marks the AI only.
  - Status colours only with the StatusIcon shape and a word.
  - Charts use `series-1` to `series-5` in order.
- **AI mark:** the Lofty arrows on a plum tile. Never a spark, and never redrawn.
- **Fonts:** Montserrat (display, numbers) and Figtree (body) in the app. Fieldwork is for print and decks only.
- **Every component** has hover, focus-visible, pressed, disabled and loading states. Every data region has loading, empty and error states.
- **Accessibility:** WCAG 2.2 AA, targets 40px (desktop) and 44px (phone), a keyboard equivalent for every drag, reduced-motion respected.
- **Copy:**
  - Australian English and sentence case.
  - Verb-plus-object buttons.
  - No emoji, no exclamation marks, no em dashes.
- **Sample data:** mockup content is invented. Never seed it as real records.
- **Open decisions:** listed in the handoff. Ask Amber, don't guess.
- **After any change:** update `README.md`, `HANDOFF.md` and this file with the date and the version.
