<!-- momentum/components/HubTextAndPeople.md : the Hub's built component, documented from the running app and its source. 12 October 2026. -->
# Text, people and popovers

Built in the Lofty Hub (`@lofty/ui`) on Vibe, themed by Momentum's tokens. Pictures: `guidelines/hub-text-people.html`. Source: `app/src/lofty-ui/components/index.tsx, SwatchPicker.tsx` in LoftySupport/loftyprojectapp.

- **Text** and **Heading** carry the type styles; the Hub's section heading is an h2 at weight 500. Never set a font on a page.
- **Avatar** is a person's initials in a circle (small, medium or large); **Popover** and **Tooltip** wrap Vibe's; **SwatchPicker** is a grid of named colour swatches, five to a line, for the accent colour.
- **StatusPill** is a pill with a shape icon and a word, in tones `overdue`, `at_risk`, `on_track`, `complete`, `active` and `inactive`; colour means state only (C12).
