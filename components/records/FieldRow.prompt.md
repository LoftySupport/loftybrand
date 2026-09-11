One-line: the property row — one row system for every record, drawer and page.

```jsx
<FieldList variant="page">
  <FieldRow label="Council" value="City of Playford" type="pick" />
  <FieldRow label="Handover date" type="date" />
  <FieldRow label="SharePoint folder" value="1209-002" type="link" />
</FieldList>
```

Rules
- Label column 120px in the drawer, 136px on the page. Row 32px. Labels secondary ink regular; values primary ink.
- **A field with a type shows its control, not the word "Empty".** Empty date reads `dd/mm/yyyy`, empty pick reads `Select`, empty text reads `Enter text`.
- In a column of controls every control is the same width and height — `box-sizing: border-box` and one width. Mixed 300/318/376px boxes read as broken.
- Values live in one place. Anything owned by the parent project (division, site manager, OTR) does not repeat on the child record.
