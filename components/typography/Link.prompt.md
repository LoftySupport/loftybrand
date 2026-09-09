One-line: navigation inside prose — Foundation Black at rest, underlined and orange-pressed on hover. Eco Green is never a link colour.

```jsx
<Link href="/jobs">Back to jobs</Link>
<Link href="https://lofty.com.au" iconEnd="ExternalPage">Company site</Link>
<Text>Crews are set in <Link inline inheritFontSize href="/settings">workspace settings</Link>.</Text>
```

Use `inline` + `inheritFontSize` whenever the link sits mid-sentence, otherwise it breaks the line box.
