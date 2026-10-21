<!-- momentum/components/HubTextAndPeople.md : the Hub's built component, documented from the running app and its source. 12 October 2026; the colour picker 21 October 2026. -->
# Text, people and popovers

Built in the Lofty Hub (`@lofty/ui`) on Vibe, themed by Momentum's tokens. Pictures: `guidelines/hub-text-people.html`. Source: `app/src/lofty-ui/components/index.tsx, ColourPicker.tsx` in LoftySupport/loftyprojectapp.

- **Text** and **Heading** carry the type styles; the Hub's section heading is an h2 at weight 500. Never set a font on a page.
- **Avatar** is a person's initials in a circle (small, medium or large); **Popover** and **Tooltip** wrap Vibe's.
- **ColourPicker** is every colour setting in the Hub since 19 October 2026 (the Hub's `PATTERNS.md` section 26): a saturation and brightness area, the eyedropper where the browser has one, hue and opacity sliders, the value as HEX, RGB or HSL, and the palette's 41 colours as swatches, Crisp Orange first. A swatch saves its palette name and follows the theme; anything else saves a hex. A drag writes once, on release. There is no contrast check on a chosen colour (Amber: *"Any colour, no check"*). It replaces **SwatchPicker**, the five-to-a-line swatch grid, which now draws only on the Hub's `/design-system` page. The card `guidelines/hub-text-people.html` still shows the old grid.
- **StatusPill** is a pill with a shape icon and a word, in tones `overdue`, `at_risk`, `on_track`, `complete`, `active` and `inactive`; colour means state only (C12).
