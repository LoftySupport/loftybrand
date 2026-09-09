One-line: colour-coding a board, label or crew — from the brand set only, never an arbitrary picker.

```jsx
<ColorPicker value={boardColor} onChange={setBoardColor} />
<ColorPicker colors={BRAND_SWATCHES.slice(0,4)} shape="circle" size="small" columns={4} />
```

If a user needs a colour outside these six, the answer is a new brand token, not a hex field.
