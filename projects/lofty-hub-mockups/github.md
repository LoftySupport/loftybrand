repo: LoftySupport/loftyprojectapp
branch: main

## Last sync

date: 2026-09-07T09:00:00Z

### Updated in this project

- Design-system copy under `_ds/` refreshed again: new `colors.css` (Flint neutral family, single-accent `--data-1…6`), `styles.css`, tokens and bundle (adds the dataviz set — StatTile, BarChart, ChartLegend, DonutStat, MeterRow, StatusChip).
- Mockups migrated off the retired cool greys `#f6f7f7` / `#e7e8e9` / `#d1d3d4` onto Flint 100/200/300 — 116 literals.
- The board's green phase ramp re-cut on the orange ladder and green counter tints moved to Flint 200, per the rule that Crisp Orange and Eco Green never share a view.
- Design check gained a "Re-checked against the design system update" section; its body background was reading the retired `--lofty-gray-surface` and now reads `--page-tint-color`.
- Not done: the Reports panels are still hand-built rather than the new dataviz components, and no dark screen has been drawn.

## Sync history

### 2026-09-07T05:30:00Z

- Design-system copy under `_ds/` refreshed from the bound Lofty design system: new bundle (adds ButtonGroup, EmptyState, NumberField, Skeleton and others), `tokens/dark.css`, and `assets/brand/`.

### 2026-09-06T10:40:00Z

- Design check written against Vibe 4, the bound Lofty design system and WCAG 2.2 AA — 6 P0, 14 P1, plus a pattern register.
- Round-one mockups for five screens: job drawer, new job, projects, reports, Settings → Processes.
- Reconciled the orange conflict: `#c2543c` (already a design-system token) carries text and meaning at 4.54:1; `#f47e63` stays decorative.
- Vibe icon SVGs copied into `_ds/.../assets/icons/`; the orange logo copied from the design system's brand folder.

## Screen map

Read means the file was read in full. Listed means only the tree entry was seen. Capture means a screenshot under `docs/comparison-screenshots/` was viewed (these are of the prototype, not the React app).

| Screen | Built from |
| --- | --- |
| App shell (in 3a) | Read: `app/src/shell/AppShell.tsx` (rail destinations, header cluster, logo files). Not read: `AppShell.css` |
| Job drawer (1a, 1b, 1c) | Read: `app/src/components/JobDrawer.tsx`, `SidePanel.tsx`, `PanelExpand.tsx`. Capture: `drawer-docked.png` |
| New job (2a, 2b) | Read: `SidePanel.tsx` (the rationale for panel over dialog). Listed: `CreateDialogs.tsx`, `InlineNewProjectRow.tsx`. Capture: `new-job-modal.png` |
| Projects Board + Gantt (3a, 3b) | Read: `app/src/data/savedViews.ts` (PROJECT_VIEWS). Grep: `ProjectsPage.tsx` view branches (Board/Table/Gantt, ProjectCard). Capture: `projects-cards.png`. Not read: `ProjectsGantt.tsx`, `RecordCards.tsx` |
| Reports (4a) | Capture: `reports-portfolio.png` (tab names, stat cards, bar charts). `DESIGN.md` "Empty is a design decision". Not read: `ReportsPage.tsx` |
| Settings → Processes (5a, 5b) | Read: `SortableTable.tsx`. Grep: `ProcessesSetupPage.tsx` (Pipeline/Table switch, `Col` set). `PRODUCT.md` must-have 3. Not read in full: `ProcessesSetupPage.tsx` |
| Design check (all findings) | Read: `DESIGN.md`, `PRODUCT.md`, `CLAUDE.md`, `app/src/theme/*`, `app/package.json`, `SortableTable.tsx`, `SidePanel.tsx`, `AppShell.tsx`, `JobDrawer.tsx`. Captures: `drawer-docked`, `new-job-modal`, `projects-cards`, `reports-portfolio`, `drilldown-scheduling` |
