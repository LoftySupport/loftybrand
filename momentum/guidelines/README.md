<!-- momentum/guidelines/README.md : the specimen cards of Lofty Momentum. Added 6 October 2026. -->
# Guidelines: the specimen cards

One HTML card per Momentum component or theme, the same files the claude.ai/design project "Lofty Momentum Consolidated" shows in its Design System pane. Each file opens on its own in a browser and links `../styles.css` for the tokens. The first line of every card is its `@dsCard` marker (group, viewport, name, subtitle); the design-sync tool reads it to build the pane.

Three origins, kept in step by hand:

- **Component cards** (`answer-widget.html` to `task-planner.html`, 20 files): the preview of each component in the artifact "Lofty Momentum Consolidated" (https://claude.ai/artifact/EhxWmKtgNMfZsT7wYgTR6P), with the artifact's uploaded assets replaced by this repository's files (`../../assets/brand/`, `../../assets/icons/`, `../../assets/lofty-mark-transparent.png`). The rule for each component is in `../components/<Name>.md`. When a preview changes in the artifact, regenerate the card; do not edit it here.
- **Theme and screen cards** (`screen-landing-sunrise.html`, `screen-landing-deep-eco.html`, `colour-three-themes.html`, `type-outfit-onest.html`, `controls-and-states.html`, `foundations-glass.html`): flattened from the six artboards of the design canvas "Lofty Momentum Consolidated Design" (https://claude.ai/artifact/Ma3dEuBCDVpnYA7MZM8dfA; source in `../canvas/`).
- **Governance record** (`reconciliation.html` with `recon-visuals.js`): the reconciliation card written against Momentum 1.4 before the consolidation, copied from the claude.ai/design project "Lofty Momentum" (`85c9500f-c4af-47b9-8329-8ab78617deb2`) on 6 October 2026. It lists every conflict (C-01 to C-22), repo finding (R-01 to R-07) and gap (G-01 to G-24, B-01 to B-06) with the owner feedback given at the time. It is a record, not a live decision tool: the outcomes are in `../CONSOLIDATION.md`, section "The 3 October 2026 reconciliation, answered". Its font link was changed from Figtree to Montserrat; the text is unchanged. Its decision buttons save to the browser only.

| Group | Cards |
| --- | --- |
| Actions | `button.html` |
| Backgrounds | `gradient-backgrounds.html` (the eleven backgrounds; interactive version in `../reference/lofty-momentum-grounds.html`) |
| Brand | `cover.html`, `print-templates.html` |
| Chat | `answer-widget.html`, `chat-bubble.html`, `prompt-box.html`, `starter-card.html` |
| Colour, Type, Controls, Foundations | `colour-three-themes.html`, `type-outfit-onest.html`, `controls-and-states.html`, `foundations-glass.html` |
| Data | `report-colours.html`, `report-examples.html` |
| Governance | `reconciliation.html` |
| Layout | `app-frame.html`, `app-rail.html` |
| Panels | `glance-card.html` |
| Reference screens | `reference-landing.html`, `reference-landing-dark.html`, `reference-conversation.html` |
| Screens | `landing-question.html`, `task-planner.html`, `screen-landing-sunrise.html`, `screen-landing-deep-eco.html` |
| Status | `status-icon.html` |

Four cards (`landing-question`, `print-templates`, `report-examples`, `task-planner`) embed sample photographs as data URIs, which is why they are large. The content in every card is sample content: never seed it as data.
