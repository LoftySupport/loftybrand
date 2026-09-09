One-line: separates groups that gap alone cannot — a vertical rule between toolbar clusters, a horizontal rule between card sections.

```jsx
<Divider />
<div style={{display:'flex',alignItems:'center',height:24,gap:8}}>
  <IconButton icon="Filter" /><Divider direction="vertical" /><IconButton icon="Sort" />
</div>
```

A vertical divider needs a parent with a real height. Do not stack dividers to make space — that is what `gap` is for.
