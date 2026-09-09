One-line: holds the layout while data loads, so nothing jumps when it arrives — use it instead of a centred Loader for lists, tables and cards.

```jsx
<Skeleton type="text" size="h2" width={220} />
<Skeleton type="text" count={4} fullWidth />
<div style={{display:'flex',gap:12,alignItems:'center'}}><Skeleton type="circle" width={32} height={32} /><Skeleton type="text" width={140} /></div>
```

Match the real content's dimensions. A Loader is for actions the user just triggered; a Skeleton is for content that was never there.
