One-line: segmented single-select control for switching views or filters.

```jsx
<ButtonGroup options={["Table","Timeline","Map"]} value={view} onSelect={setView} />
<ButtonGroup kind="tertiary" size="small" options={[{value:"day",text:"Day"},{value:"week",text:"Week"}]} value="week" />
```

Use for 2–5 mutually exclusive options that change what is shown, not for actions. For actions use Button or SplitButton.
