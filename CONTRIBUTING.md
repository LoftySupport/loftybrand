# Contributing

## The one rule

**Vibe is the inherited foundation. Everything defaults to Vibe unless a Lofty
override is specified.** When something is not specified, the answer is
"whatever Vibe does".

That inheritance is deliberate and documented. Do not strip Vibe references,
attributions or lineage notes from tokens, component contracts, guidelines or
readmes — they record where behaviour comes from, which is what lets a
Vibe-shaped component drop onto this token layer without a rewrite.

| Layer | Comes from Vibe | Comes from Lofty |
| --- | --- | --- |
| Token names | ✅ | |
| Token values | | ✅ brand kit |
| Screen type scale | ✅ Figtree / Montserrat | |
| Brand type | | ✅ Fieldwork, brand surfaces only |
| Status colours | ✅ values kept for contrast | |
| Icons | ✅ default set | ✅ construction/domain additions |
| Component layout + interaction | ✅ | |
| Component skin | | ✅ |

## Never do these

- **No raw hex in components.** Every colour is a `var(--token)`. The only
  hex values in the system live in `tokens/`.
- **No literal radii.** Use `--border-radius-*`.
- **No off-scale spacing.** 2/4/8/12/16/20/24/32/40/48/64/80 only — no 6, 10, 14.
- **No new colours.** Five brand colours plus status. The two accents never
  appear together in one view.
- **No emoji, no gradients, no backdrop blur, no left-border accent strips.**
- **Never edit `_ds_bundle.js`, `_ds_manifest.json` or
  `_adherence.oxlintrc.json`** — a compiler regenerates them and they are
  gitignored.

## Adding or changing a component

1. `components/<group>/<Name>.jsx` — the component. Inline styles, tokens only.
2. `components/<group>/<Name>.d.ts` — the props contract. Required: a
   component without a sibling `.d.ts` is invisible to the compiler.
3. `components/<group>/<Name>.prompt.md` — one usage example.
4. Add it to the group's `<group>.card.html` showcase.
5. Update the index table in `readme.md`.
6. Add a `CHANGELOG.md` entry.

Contracts are load-bearing: the `.d.ts` files generate the adherence lint
rules that tell consuming projects which props exist. A prop that is not
declared will be flagged as invalid wherever it is used.

## Adding an icon

Drop a 20×20 SVG into `assets/icons/` with a PascalCase stem. Single-weight,
mostly filled, rounded terminals. It must read as solid at 14px. Reference it
by stem — `<Icon name="JobSite" />`. Do not add an icon that already exists in
the Vibe set under a different name.

## Copy

Australian English. Sentence case. Second person, active voice. Buttons are
verbs. No exclamation marks. See "Content fundamentals" in `readme.md`.

## Accessibility floor

Text 4.5:1, headline-scale type 3:1, control boundaries 3:1. Focus rings are
never removed. Verify against `guidelines/a11y-contrast.html` and
`guidelines/a11y-focus.html` before opening a PR.
