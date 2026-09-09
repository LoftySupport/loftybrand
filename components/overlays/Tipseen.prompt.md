One-line: introduces one new control the first time a user meets it — dismissible, never repeated.

```jsx
<Tipseen title="Timeline view" position="top" onClose={dismiss}>
  Drag a job to move it. Crews stay attached.
</Tipseen>
```

One Tipseen per session. Chain several only inside a Steps-driven tour. A Tooltip explains on hover; a Tipseen interrupts, so it earns a higher bar.
