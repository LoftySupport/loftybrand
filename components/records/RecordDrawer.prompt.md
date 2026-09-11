One-line: the record shell — header, scrolling body, docked footer.

```jsx
<RecordDrawer header={<RecordBreadcrumb items={crumbs} />} footer={<RecordTabs tabs={tabs} value={tab} onChange={setTab} />}>
  <RecordSection title="Job Stage" meta="Stage 2 of 5 · 22 days" first open={open.stage} onToggle={toggle("stage")}>…</RecordSection>
  <RecordSection title="Key properties" open={open.key} onToggle={toggle("key")}>…</RecordSection>
</RecordDrawer>
```

Rules
- Three siblings, `minHeight: 0` on the scroll region. A footer inside the scroll region defeats the pattern.
- Drawer 460px, page left column 1180px wide overall — the same record at two widths, same properties in the same order.
- Sections are collapsible, open by default, separated by a 1px Flint 300 rule with 16px of air.
- Carry "Started on … · N days ago" and the health chip **once** on the record, in the section header.
