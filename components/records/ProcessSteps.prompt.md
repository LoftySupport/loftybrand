One-line: the process checklist — ticking a step stamps the date and opens the next one.

```jsx
<ProcessSteps steps={steps} openStep={open} onOpenStep={setOpen}
  onToggleStep={(i, date) => setSteps(s => s.map((x, j) => j === i ? { ...x, done: !!date, date } : x))} />
```

Rules
- A step is a checkbox row with a disclosure chevron, 36px. The chevron or the name opens the step's own fields as typed controls beneath it.
- Ticking stamps today's date and opens the next step; unticking clears it. The date stays editable.
- Progress and the "N of 9" summary **derive from the ticks** — never store them twice.
- Completed steps strike through in secondary ink.
- The card is Flint 50 on a Flint 300 border, 8px radius, with a 4px Crisp Orange progress bar at the top.
