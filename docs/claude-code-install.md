# Using this design system in Claude Code

The whole folder is the handoff. It has no build step: `styles.css` is the entry point, `SKILL.md` is the Agent Skills wrapper, and every component ships a `.d.ts` contract and a `.prompt.md` example beside it.

## Install as a skill

```
unzip lofty-apps-design-system.zip -d ~/.claude/skills/lofty-design
```

Or per-project:

```
unzip lofty-apps-design-system.zip -d .claude/skills/lofty-design
```

Claude Code reads the frontmatter in `SKILL.md` (`name: lofty-design`) and loads it on demand. Invoke with `/lofty-design` or just ask for a Lofty-branded screen.

## Install as a repo

The source of truth is `LoftySupport/loftybrand` (branch `main`). To push this copy from a local clone:

```
git clone git@github.com:LoftySupport/loftybrand.git
cd loftybrand
unzip -o ../lofty-apps-design-system.zip
git add -A && git commit -m "Sync design system" && git push
```

## What to read first

1. `readme.md` — full rationale and every foundation.
2. `SKILL.md` — the working summary: colour hierarchy, type scale, spacing, motion, never-do list.
3. `docs/getting-started.md`, `docs/tokens.md`, `docs/components.md`.
4. `guidelines/` — one specimen card per foundation.
5. `ui_kits/app/` — a working recreation of the work app; shows how the parts compose.
6. `templates/` — ready starting points for decks and documents.

## Rules that matter when generating code

- Tokens only. Never a literal hex, radius, or spacing value.
- Vibe is the inherited foundation; anything unspecified defaults to Vibe behaviour.
- Copy assets out of `assets/` into the consuming project — never reference this folder's paths.
- Read the `.d.ts` before using a component. Do not guess props.

`_ds_bundle.js`, `_ds_manifest.json` and `_adherence.oxlintrc.json` are generated artefacts — do not hand-edit them.
