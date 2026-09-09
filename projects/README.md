# Projects using this design system

Downstream projects that consume the Lofty design system. Each binds the system
as a local `_ds/lofty-s-app-design-system-491d6888…/` copy, so a change here
only reaches them when that copy is refreshed.

Each is vendored here in full — source files, assets and its own notes — so the
repository carries the work that exercises the system, not just a link to it.

| Folder | What it is | Consumes | Notes |
| --- | --- | --- | --- |
| [`lofty-hub-mockups/`](./lofty-hub-mockups/) · [notes](./lofty-hub-mockups.md) | Screen mockups and a design check for the projects app | Tokens, bundle, icons, brand assets | Tracks `LoftySupport/loftyprojectapp` |
| [`lofty-document-template/`](./lofty-document-template/) · [notes](./lofty-document-template.md) | A4 print/PDF document master and cover pages | Brand palette, Fieldwork fonts, brand shapes | Brand-led surface — Fieldwork, not the screen type scale |
| [`lofty-style-guide/`](./lofty-style-guide/) · [notes](./lofty-style-guide.md) | Single-page navigable style guide | All nine token files, `styles.css`, logo and masthead shape | Pure token references — no literals |

## No duplicated assets

Each project arrived with its own copy of the logos, brand shapes and Fieldwork
fonts. Those copies are gone. Every reference now points up at this
repository's single set:

| Was | Now |
| --- | --- |
| `_ds/lofty-s-app-design-system-491d6888…/` | `../../` |
| `assets/fonts/Fieldwork-*.woff` | `../../assets/fonts/` |
| `assets/logo.png`, `lofty-logo-white.png` | `../../assets/brand/` |
| `assets/lofty-lines-*`, `lofty-shapes-*` | `../../assets/brand/` |
| `iconBasePath` | `../../assets/icons` |

So the projects open and render directly from this repository, against the
current tokens and the current bundle — not a frozen snapshot. A token change
here shows up in them on reload, which makes them a live regression check.

Only each project's own files stayed local: `support.js`, `doc-page.js`, and
the document template's `SKILL.md`.

Left behind at import: each project's `_ds/` snapshot, `uploads/` working
screenshots, and build artefacts under `.bundles/`.

## How binding works

A consuming project holds its own copy of the compiled system under `_ds/`.
That copy is a snapshot: `_ds_bundle.js`, the token CSS, and whichever assets
the project needed. It does not update itself.

When a token value, component API or icon changes here, every consuming project
needs its `_ds/` copy refreshed and its literals re-checked. The colour sweep
that retired the cool greys took 116 literal replacements in the Hub mockups
alone — consumers hold hardcoded values that no lint rule here can see.

Refresh checklist for a consumer:

1. Re-copy `_ds_bundle.js`, `styles.css` and `tokens/` into its `_ds/` folder.
2. Copy any newly-referenced icons and brand assets.
3. Grep the project for hex literals that match retired token values.
4. Re-run its own design check against the updated guidelines.

## Two consumption modes

**Screen** — Figtree body, Montserrat titles, semantic tokens, components from
the bundle. Dark mode via `data-theme`. The Hub mockups work this way.

**Brand-led** — Fieldwork Geo and Hum, brand palette values direct, print
geometry. The document template works this way; it deliberately does not use
the screen type scale or the component bundle.

Both are legitimate. A project should not mix them within one surface.
