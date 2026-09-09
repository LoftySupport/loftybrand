One-line: multi-line input for notes, descriptions and comments.

```jsx
<TextArea label="Site notes" value={v} onChange={set} rows={4} maxLength={500} showCharCount />
<TextArea label="Reason" validation="error" message="Required before you can close the job" />
```

Same border ladder as TextField (Mid Gray → Foundation Black → Crisp Orange). Character count turns Negative when over maxLength.
