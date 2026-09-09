One-line: who is on a job, in one cell's width — a table's crew column, a card footer, a dialog's assignee row.

```jsx
<AvatarGroup people={crew} max={3} size="small" onCounterClick={openCrewMenu} />
<AvatarGroup people={crew} size="xs" counterColor="dark" />
```

Avatars overlap 8px and stack front-to-back in order. Keep `max` at 3-4; beyond that the row reads as noise and the counter does the work.
