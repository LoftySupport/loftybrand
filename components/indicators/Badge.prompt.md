One-line: marks something as needing attention without adding a row of UI.

```jsx
<Badge><IconButton icon="Notifications" ariaLabel="Notifications" /></Badge>
<Badge badgeContent={<Counter count={4} color="negative" />}><IconButton icon="Inbox" /></Badge>
<Badge alignment="circular" color="positive"><Avatar text="AK" /></Badge>
```

Use `alignment="circular"` on avatars. The 2px white ring is what keeps the badge legible against a dark control.
