One-line: quantities, hours, measurements — a TextField that only takes numbers.

```jsx
<NumberField label="Crew size" value={n} onChange={setN} min={1} max={40} />
<NumberField label="Area" value={a} onChange={setA} step={0.5} unit="m²" />
```

Steppers and ↑/↓ keys move by `step`; values clamp to min/max unless `allowOutOfBounds`. Emits `null` when cleared.
