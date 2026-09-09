One-line: picking a due date or a schedule day — a calendar, not a typed field, whenever the day of the week matters.

```jsx
<DatePicker value={due} onChange={setDue} min={iso(new Date())} />
```

Weeks start Monday. Today is orange text; the selection is an orange fill. Pair it with a TextField trigger inside a MenuButton for the compact form.
