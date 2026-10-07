<!-- momentum/components/GlanceCard.md : Momentum component rules, from the Lofty Momentum artifact (components/GlanceCard/README.md). 5 October 2026. -->
# GlanceCard

The "Your day" side panel: switch between Schedule, Tasks and Activity without leaving the conversation.

- `surface-panel`, `edge-glass`, `radius-l` (16px), 20px padding, 280px wide.
- Header: "Your day" and the date in `ink-muted`.
- Tabs: a segmented control (`radius-s`) (Schedule, Tasks, Activity) on a `line` track. The selected tab is `surface-selected` with bold text; counts sit beside the label in `ink-muted`. Never an orange fill.
- **Schedule:** the Next up card in `eco-green` with Sky eyebrow text and a white "Prep me" button, then the day as time rows.
- **Tasks:** what needs you, each with a check box, bold title and muted detail with how long it has waited. The one chase action is text in `orange-pressed` (orange on dark).
- **Activity:** what changed on your jobs, newest first, with a coloured dot per source.
- Rows are divided by `line`.
- Open decision: whether the panel opens on Schedule every time or on the last tab each person used. The preview opens on Schedule.
