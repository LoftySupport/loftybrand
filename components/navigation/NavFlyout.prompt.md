One-line: a destination's saved views, opened on hover beside the rail — one component for both rail widths.

```jsx
<NavFlyout title="Projects" newLabel="New project" left={collapsed ? 72 : 232} top={rowTop}
  views={[{ label: "All projects", count: 9 }, { label: "My projects", count: 3 }]}
  groupLabel="stage"
  groups={[{ label: "Pre-construction", count: 3 }, { label: "Construction", count: 4 }]} />
```

Rules
- Opens on hover **or** keyboard focus of the destination; closes on mouse-out of both the row and the panel.
- The hovered row lifts to `rgba(255,255,255,.28)` while its panel is open.
- The panel is a light card on a dark rail: white fill, Flint 300 border, 8px radius, `0 6px 20px rgba(65,64,66,.16)`.
- Panel data is one shape per destination — title, newLabel, views, groupLabel, groups.
