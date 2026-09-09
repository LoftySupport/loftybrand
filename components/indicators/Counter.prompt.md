One-line: a count attached to something else — a tab, a nav item, a filter button — never a standalone stat.

```jsx
<Counter count={12} />
<Counter count={1284} color="dark" kind="line" />
<Counter count={3} color="negative" size="large" />
```

`kind="line"` for counts inside an already-coloured control. For a figure that is the content of a card, use Heading, not Counter.
