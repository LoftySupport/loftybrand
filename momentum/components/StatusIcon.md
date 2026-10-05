<!-- momentum/components/StatusIcon.md : Momentum component rules, from the Lofty Momentum Consolidated artifact (components/StatusIcon/README.md). 5 October 2026. -->
# StatusIcon

Three job and task states, each told apart by shape and glyph as well as colour, so they read in print, for colour-blind viewers and at 16px.

| State | Shape and glyph | Light | Dark |
|---|---|---|---|
| On track | Circle, tick | `status-on-track` #00805F, white glyph | #1F9E80, Deep Eco glyph |
| At risk | Triangle, exclamation | `status-at-risk` #C28400, white glyph | #BF8912, Deep Eco glyph |
| Overdue | Octagon, clock | `status-overdue` #D83A52, white glyph | #E85A6E, Deep Eco glyph |

Two neutral companions: **Complete** (Eco Green circle, tick) and **Not started** (dashed muted ring).

- Always pair the icon with its word. The label is `ink` text (white on the solid Overdue chip), never the status colour.
- Sizes 16 (chips, table cells), 20 (lists), 24 to 32 (widgets and tiles).
- Chips are graded by urgency so they read at a glance:
  - **On track:** quiet. `status-on-track-soft` fill, no edge, `ink` label.
  - **At risk:** louder. `status-at-risk-soft` fill with a 1px `status-at-risk-edge` inset, `ink` label.
  - **Overdue:** loudest. Solid `status-overdue-fill`, white label, white octagon with a red clock.
  - Pill, 22px (tables, cards) or 26px (headers), icon then label, 12px bold.
- Status colours mean state only. Never use them as chart series or decoration, and never use brand orange for a state.
- Every status mark clears 3:1 against white in light and against Deep Eco in dark. The three were run through a colour-blind check: they separate in light; in dark, At risk and Overdue sit in the floor band for deuteranopia, which is why shape and label are required, not optional.
- These replace the older `warning` #FFCB00, which is 1.5:1 on white and cannot be seen as a mark.
