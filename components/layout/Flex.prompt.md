One-line: lay out siblings with a gap from the spacing scale.

```jsx
<Flex gap="small" align="center"><Avatar text="JD" /><Text>Jo Dunne</Text></Flex>
<Flex direction="column" gap="medium" align="stretch">…</Flex>
```

Always prefer `gap` over margins on children. Wrap with `wrap` for chip rows and toolbars.
