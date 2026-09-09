One-line: the action control — use exactly one `kind="primary"` Button per screen region, everything else secondary or tertiary.

```jsx
<Button onClick={save}>Save changes</Button>
<Button kind="secondary" leftIcon={<Icon name="Add" />}>New job</Button>
<Button kind="tertiary" color="negative" size="small">Delete</Button>
```

Variants: `kind` primary | secondary | tertiary; `color` primary (Crisp Orange) | secondary (Foundation Black) | positive | negative | inverted; `size` xs | small | medium | large. `loading` swaps content for a spinner; `active` shows the selected state.

The filled orange primary inverts on hover — the fill drops out and orange becomes the ink and the 1px line — then presses to `--lofty-orange-pressed` at scale(0.95). Filled positive, negative, secondary and inverted just darken to their `-hover` step. Focus draws `--focus-ring` on every kind. Eco Green is not a button colour: it is a minimal highlight, never a call to action.
