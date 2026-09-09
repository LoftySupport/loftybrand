repo: LoftySupport/loftybrand
branch: main

## Last sync
date: 2026-09-09T04:12:00Z
### Updated in this project
- Added the sequential data-viz scale (`--data-scale-1…5`, `--data-gradient`) with dark-mode reversal; the "Data-viz ramp" card now specimens light and dark, categorical and sequential.
- Corrected both consuming projects to brand spec: retired cool greys to Flint, unauthorised oranges to `#c2543c`, radii onto the token scale, Calibri removed.
- Packaged the design system for upload: added LICENSE, NOTICE.md, CONTRIBUTING.md, CHANGELOG.md, package.json, .gitignore and docs/.
- Wrote docs/getting-started.md, docs/tokens.md and docs/components.md — install, theming, full token reference and component index.
- Removed monday.com's own brand marks (MondayDoc, MondayLogoOutline) from the icon set; 274 product glyphs remain. Fieldwork fonts kept in the repository.
- Recorded third-party terms: Vibe (MIT), Montserrat/Figtree (OFL), Fieldwork (commercial).

## Screen map
| Area | Repo files |
| --- | --- |
| Token layer | `styles.css`, `tokens/*.css` |
| Components | `components/<group>/<Name>.jsx` + `.d.ts` + `.prompt.md` |
| Showcases | `components/<group>/<group>.card.html`, `guidelines/*.html` |
| Work app kit | `ui_kits/app/*.jsx`, `ui_kits/app/index.html` |
| Brand assets | `assets/brand/`, `assets/fonts/`, `assets/icons/` |
| Docs | `readme.md`, `SKILL.md`, `docs/*.md` |
| Consumers | `projects/*.md` |

## Upstream inheritance
monday.com Vibe is the design system this one inherits from — token names, the
screen type scale, status values, component behaviour and the default icon set.
Not a sync source; imported once and now vendored here in full.

upstream_repo: mondaycom/vibe
upstream_branch: master
upstream_path: packages/icons/src/svg
