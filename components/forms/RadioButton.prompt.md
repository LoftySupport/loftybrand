One-line: mutually exclusive choice where every option should stay visible.

```jsx
<RadioButton name="view" label="Table" checked={v === "table"} onChange={() => setV("table")} />
<RadioButton name="view" label="Timeline" checked={v === "timeline"} onChange={() => setV("timeline")} />
```
