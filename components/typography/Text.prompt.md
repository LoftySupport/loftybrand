One-line: every run of body copy — it keeps type on the 16/14/12 scale instead of inventing sizes.

```jsx
<Text>Assign a crew before publishing the schedule.</Text>
<Text type="text3" color="secondary">Updated 4 minutes ago</Text>
<Text type="text2" weight="medium" ellipsis>Northbourne Ave resurfacing — stage 2</Text>
```

`type` text1 | text2 | text3; `weight` normal | medium | bold. `ellipsis` truncates one line, `maxLines` clamps several. Use `element="span"` inside a sentence.
