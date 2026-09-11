One-line: the conversation tab strip inside a record — Tabs when the tabs sit on white, RecordTabs when they need delineation.

```jsx
<RecordTabs value={tab} onChange={setTab}
  tabs={[{ id: "tasks", label: "Tasks", count: 4 }, { id: "comments", label: "Comments" }, { id: "activity", label: "Activity log" }]} />
```

Rules
- 36px tall, 16px horizontal padding, a 1px Flint 200 divider between tabs, on a Flint 100 strip.
- The active tab lifts as a white card with a 2px Crisp Orange underline — the orange is a line, never a fill behind the label.
- Without the strip and the dividers the tabs read as body text. That is the defect this component exists to fix.
