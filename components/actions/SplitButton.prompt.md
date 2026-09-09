One-line: use only when one action is clearly the default and the others are the same verb with a different object — otherwise a Button plus a MenuButton is honest and this is not.

```jsx
<SplitButton onClick={createJob} onSelect={createFrom} items={[
  { id: 'template', label: 'From a template' },
  { id: 'import', label: 'Import from CSV' }
]}>New job</SplitButton>
```

Still one filled action per region: a primary SplitButton counts as that one.
