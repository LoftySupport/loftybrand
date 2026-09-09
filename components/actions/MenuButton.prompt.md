One-line: the row-level and toolbar-level "more" control — never build the open/close wiring by hand.

```jsx
<MenuButton align="end" onSelect={run} items={[
  { id: 'duplicate', label: 'Duplicate job', icon: 'Duplicate' },
  { divider: true },
  { id: 'delete', label: 'Delete job', icon: 'Delete', destructive: true }
]} />
<MenuButton kind="secondary" items={views}>Switch view</MenuButton>
```

Icon-only in table rows, labelled in toolbars. `align="end"` for anything near the right edge, or the menu clips.
