One-line: what a list or board shows when there is nothing in it yet.

```jsx
<EmptyState title="No jobs scheduled" description="Jobs you assign to this crew will show up here." mainAction={{ text: "Create job", onClick }} supportingAction={{ text: "Import from CSV", href: "#" }} />
<EmptyState layout="compact" description="No results for “northline”." />
```

One primary action at most. Keep description to a sentence; the component caps text width at 500px.

Three kinds, worded differently: **first use** ("No jobs scheduled" + "Create job"), **no results** ("No matches for 'northline'" + "Clear filters"), **cleared** ("You're all caught up", no action).
