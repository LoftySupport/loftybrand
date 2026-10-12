<!-- momentum/components/HubButtons.md : the Hub's built component, documented from the running app and its source. 12 October 2026. -->
# Buttons

Built in the Lofty Hub (`@lofty/ui`) on Vibe, themed by Momentum's tokens. Pictures: `guidelines/hub-buttons.html`. Source: `app/src/lofty-ui/components/index.tsx (`Button`, `IconButton`, `Icon`, `ICON_SIZES`)` in LoftySupport/loftyprojectapp.

- **Button** has three kinds: `primary` (Crisp Orange fill, Deep Eco text), `secondary` (white with a 1px `line-control` edge in Sunrise) and `tertiary` (text only). **IconButton** is a 32px round button for one icon.
- Measured in the live Hub, 12 October 2026: 32px high, `radius-pill` (999px), label 12px at weight 500.
- The tap area is 44px: a `.lui-tap::after` hit box at least `--ui-tap` wide and high, so the drawn control stays 32px.
- One primary action per layer (C24). Labels are verbs that name the object ("Create job", never "Submit").
- A label that is too long wraps inside the pill (`min-height` 32px, `max-width` 100%).
