<!-- momentum/components/AppRail.md : Momentum component rules, from the Lofty Momentum artifact (components/AppRail/README.md). 5 October 2026. -->
# AppRail

The left navigation, matching the App Rail diagram: logo, Ask Lofty and search, My work, Pinned projects, the six destinations, then Settings, Admin and the signed-in person.

- 224px wide inside the glass frame, `surface-panel` with `edge-glass`, `radius-l` (16px). Collapses to a condensed 64px rail with the chevron top right (see below).
- Logo: the orange lockup at 24px high on light, the white lockup on dark (Logos group).
- **Top:** Ask Lofty (a ghost button, `radius-s`, with the orange Lofty arrows) and a round search button (Search keeps the pill). The orange fill stays on the prompt box.
- **My work:** a group label with Inbox and Tasks, each with a count.
- **Pinned:** up to three pinned projects, number in bold then name.
- **Destinations, in order:** Projects, Jobs, Maintenance, Reports, Contacts, Tools, with counts where useful (Projects 9, Jobs 128, Maintenance 23). Jobs uses the Location (place) icon.
- **Foot:** Settings and Admin, then the signed-in person with their company.
- Icons from the Icons and Product icons groups, rendered as a mask over `currentColor` at 20px.
- Rows are 36px, `radius-m`. The current destination is a lifted fill (white in light, `rgba(255,255,255,0.15)` in dark) with bold text, never an orange fill.

## Condensed

- 64px wide, same panel and edge. The favicon arrows (`lofty-mark-transparent.png`, 32px) replace the lockup, with the expand chevron under it.
- Ask Lofty becomes a 40px plum tile (radius 14) with the orange arrows, so the AI entry point reads at a glance; search stays a 40px round ghost button.
- Inbox and Tasks keep their count badges; Pinned becomes one icon.
- Destinations are 44px icon-only tiles in the same order, each with a tooltip and an accessible label. The current one keeps the lifted fill.
- Settings, Admin and the avatar sit at the foot.
- Open decision: when the condensed rail shows by default (a screen width, or only when the person collapses it) and whether it remembers their choice.
