One-line: affects the whole account — trial expiry, scheduled maintenance, a failed sync. Anything scoped to one view is an AttentionBox; anything caused by the user's last click is a Toast.

```jsx
<AlertBanner backgroundColor="warning" icon="Info" actionText="Add payment" onAction={billing} onClose={dismiss}>
  Your trial ends in 3 days
</AlertBanner>
```

One at a time, above the top bar, single line. Never two stacked.
