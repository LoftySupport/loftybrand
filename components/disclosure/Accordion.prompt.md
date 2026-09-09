One-line: several long sections the user reads one at a time — help content, a settings page, an FAQ.

```jsx
<Accordion defaultIndex={0} sections={[
  { title: 'Scheduling', content: <SchedulingHelp /> },
  { title: 'Crews and depots', content: <CrewHelp /> },
  { title: 'Billing', content: <BillingHelp /> }
]} />
```

Default to one-at-a-time. `allowMultiple` only when users genuinely compare sections side by side.
