One-line: the app's persistent dark rail — one component with two widths, not two components.

```jsx
<NavRail collapsed={collapsed} activeId="projects" onSelect={setActive}
  onToggleCollapse={() => setCollapsed(c => !c)} onHoverDestination={setFlyout}
  destinations={[
    { id: "projects", label: "Projects", icon: "Projects", count: 9, iconSize: 28 },
    { id: "jobs", label: "Jobs", icon: "Job", count: 128, iconSize: 28 },
    { id: "reports", label: "Reports", icon: "Reports" }
  ]}>
  <img src="assets/brand/lofty-logo-orange.png" alt="Lofty" height={24} />
</NavRail>
```

Rules
- Selection on the dark rail is a **white wash** (`rgba(255,255,255,.20)`), never the peach light-surface tint, never an orange fill.
- Row hover is `rgba(255,255,255,.12)`. Rules and borders are `rgba(255,255,255,.16)`. Muted meta is `rgba(255,255,255,.72)` — 4.5:1 on Foundation Black.
- Utility controls (search, expand, settings, admin) render at 20px; destinations at 24px, or 28px for the Lofty construction glyphs, which carry internal padding.
- Every collapsed button needs a `title` — it is both the tooltip and the accessible name.
- Nothing below 12px. No text smaller than `--font-text3-normal` anywhere in the rail.
