One-line: a start or finish time on a fixed interval — a list beats a text field because arbitrary minutes are almost never wanted.

```jsx
<TimePicker value={start} onChange={setStart} from={6} to={19} minuteStep={30} />
```

Narrow `from`/`to` to the working day so the list stays scannable. Keep `use24Hour` on for anything crews read on site.
