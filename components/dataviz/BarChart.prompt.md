# BarChart

Stacked columns on a single accent. Pair it with `ChartLegend` in the same order.

```jsx
<BarChart
  series={[{ name: "Scheduled crew" }, { name: "Contractor" }]}
  data={[
    { label: "W33", values: [72, 24] },
    { label: "W34", values: [44, 16], muted: true }
  ]}
/>
```

Series colours come from `--data-1 … --data-6`, which flip themselves on dark — never hard-code a hex. Two or three series is the working limit; past that use a table. Never put orange and Eco Green in the same chart.
