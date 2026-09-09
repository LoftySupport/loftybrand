One-line: rows of content or options — the crew list in a panel, search results, a picker's body. Use Menu when every row is a command.

```jsx
<List selectedId={depot} onSelect={setDepot} items={[
  { title: 'Depots' },
  { id: 'd1', label: 'Depot 1', secondaryLabel: 'Fyshwick', end: <Counter count={12} color="light" /> },
  { id: 'd2', label: 'Depot 2', secondaryLabel: 'Mitchell' }
]} />
```

Two lines maximum per row. Omit `onSelect` for a read-only list so rows do not offer a hover they cannot honour.
