# StatTile

Four across the top of a dashboard, in a `grid-template-columns:repeat(4,1fr)` with `gap:16`. Numbers stay concrete and unrounded.

```jsx
<StatTile label="Crew utilisation" value="82%" detail="target 75%" />
```

Never colour the value — the number carries itself. Trend belongs in `detail` as words ("down 2 on last week"), not as a coloured arrow.
