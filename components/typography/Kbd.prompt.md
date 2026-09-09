One-line: shows a keystroke in help text, menu hints and empty states.

```jsx
<Text type="text3" color="secondary">Press <Kbd size="small">/</Kbd> to search</Text>
<div style={{display:'flex',gap:4}}><Kbd>⌘</Kbd><Kbd>K</Kbd></div>
```

One key per Kbd — combinations are separate keys in a 4px flex row, not "⌘+K" inside one.
