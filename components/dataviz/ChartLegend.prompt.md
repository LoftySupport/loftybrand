# ChartLegend

Sits directly under the plot, never floating beside it.

```jsx
<ChartLegend items={[{ name: "Scheduled crew" }, { name: "Contractor" }, { name: "Forecast" }]} />
```

Leave `color` off and the legend takes `--data-1`, `--data-2`, `--data-3` in order, which is the same order `BarChart` assigns. Set it only when the series are out of order.
