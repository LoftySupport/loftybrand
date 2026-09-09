# MeterRow

A stack of three to six, gapped 12, inside a panel.

```jsx
<MeterRow label="Northline" value={82} />
<MeterRow label="Depot 2" value={64} color="var(--data-2)" />
<MeterRow label="Contractor" value={47} color="var(--data-4)" />
```

Walk down the `--data-` ramp in order so the rows read as one series by value. `ProgressBar` is the one for "how far through is this task"; `MeterRow` is for comparison.
