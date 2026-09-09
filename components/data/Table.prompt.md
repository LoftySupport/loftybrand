One-line: the jobs grid — sticky grey header, hairline rules, hover rows, and its own loading/empty/error states.

```jsx
<Table columns={[{id:'job',title:'Job',sortable:true},{id:'cost',title:'Cost',numeric:true}]} rows={rows} sortBy="job" onSort={(id,dir)=>…} caption="Jobs this week" />
<Table columns={cols} loading />
<Table columns={cols} rows={[]} error="We couldn't load jobs. Check your connection." onRetry={reload} />
<Table columns={cols} rows={[]} emptyState={<EmptyState title="No jobs yet" description="…" mainAction={{text:'Create job'}} />} />
```

Numeric columns set `numeric` (right-aligned, tabular figures). Skeleton rows appear only for loads over ~300ms; render the table with `loading` rather than swapping it out so the layout doesn't shift.
