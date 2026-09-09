# Getting started

## Install

The system is plain CSS and bundler-less JSX. There is no build step.

```bash
git clone https://github.com/LoftySupport/loftybrand.git
```

Or as a dependency:

```bash
npm install github:LoftySupport/loftybrand
```

## Link the stylesheet

`styles.css` is the single entry point. It `@import`s the nine token files and
nothing else.

```html
<link rel="stylesheet" href="styles.css">
```

Montserrat and Figtree load from Google Fonts. Fieldwork loads from
`assets/fonts` via `tokens/fonts.css` and is only needed for brand-led
surfaces.

That gives you 282 CSS custom properties. Use them directly — components are
optional:

```html
<div style="background: var(--secondary-background-color);
            border: 1px solid var(--layout-border-color);
            border-radius: var(--border-radius-medium);
            padding: var(--space-24);
            font: var(--font-text2-normal);
            color: var(--primary-text-color)">
  Job scheduled
</div>
```

## Dark mode

Set `data-theme="dark"` on `<html>` or any subtree. The semantic token layer
swaps; component code never changes.

```html
<html data-theme="dark">
```

Only ever read semantic tokens (`--primary-text-color`,
`--secondary-background-color`) in component code. Reading a brand token
(`--lofty-crisp-orange`) or a Flint step directly will not respond to the theme.

## Use a component

Components are ES modules of plain JSX. In a bundled app:

```jsx
import { Button } from "@lofty/design-system/components/core/Button.jsx";
import { Icon } from "@lofty/design-system/components/core/Icon.jsx";

<Button size="large" leftIcon={<Icon name="Add" size={16} />}>
  Create job
</Button>
```

Each component has a sibling `.d.ts` listing every prop it accepts, and a
`.prompt.md` with a worked example. Read those before guessing at an API.

### Icon paths

`Icon` resolves a glyph as a CSS mask over `currentColor`, so it inherits the
colour of its context. It needs to know where `assets/icons` is, and the
default assumes it is being used from inside `components/<group>/`:

```jsx
<Icon name="JobSite" basePath="/assets/icons" />
```

Components that render icons internally take `iconBasePath` to pass through.
Set it once at your app boundary if your asset root is not the default.

## Layout constants

Fixed 56px top bar, 224px side nav, both persistent, content scrolls under
them. Tables get a sticky header row. Toasts pin top-centre. Content width is
uncapped.

## Browse the system

Every foundation and component group ships a showcase card — open any of these
directly in a browser:

| Path | What it shows |
| --- | --- |
| `guidelines/` | Colour, type, spacing, radius, elevation, motion, states, forms, a11y, icons, brand |
| `components/<group>/<group>.card.html` | Every component in that group, light and dark |
| `ui_kits/app/index.html` | Click-through recreation of the work app |
| `thumbnail.html` | The system's tile |

## Working in Claude Code

`SKILL.md` wraps the folder as an Agent Skill. Point Claude Code at the repo
root and the tokens, component contracts and copy rules load as context.
