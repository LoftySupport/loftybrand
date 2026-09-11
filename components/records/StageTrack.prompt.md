One-line: where the record is in its pipeline, coloured by its health.

```jsx
<HealthChip status="at-risk" label="At risk" />
<StageTrack variant="track" status="at-risk" stages={[
  { name: "Acquisition & Development", state: "done", readoutLabel: "Job started", readoutValue: "04/02/2026" },
  { name: "Pre-construction", state: "current", readoutLabel: "Started on", readoutValue: "18/07/2026" },
  { name: "Construction", state: "todo" }
]} />
```

Rules
- **Status carries the health colour.** The current stage takes the same fill as the health chip — at risk is the warning yellow in both places, so the two read as one signal.
- Completed stages are Foundation Black; not started are Flint 200 with the name and a dash centred.
- Never Crisp Orange behind small text. Overdue is `--negative-color` with white ink, on track is `--positive-color` with `--text-color-on-status` ink.
- On the readouts the label is dark semibold and the value light — inverted from the usual field pairing, because the label is the thing you scan for.
- Carry the chip once per record.
