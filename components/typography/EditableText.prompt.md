One-line: rename in place — job titles, board names, column headers — instead of opening a dialog to change one string.

```jsx
<EditableText heading headingType="h2" value={job.name} onChange={renameJob} />
<EditableText multiline value={notes} onChange={setNotes} placeholder="Add site notes" />
```

Enter commits, Escape reverts, blur commits. Hover shows the neutral wash so it reads as editable before the click.
