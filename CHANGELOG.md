# Changelog

Notable changes to the Lofty design system. Newest first.

## 1.0.0 — 2026-09-09

First packaged release. Everything below already existed in the working
project; this is the point it became a versioned repository.

### Added
- Repository scaffolding that did not previously exist: `LICENSE`,
  `NOTICE.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, `package.json`,
  `.gitignore`, and `docs/`.
- `projects/` — the three projects that consume this system, vendored in full:
  `lofty-hub-mockups/` (screen mockups + design check) and
  `lofty-document-template/` (A4 document master and covers) and
  `lofty-style-guide/` (single-page navigable style guide). Their duplicated
  logos, brand shapes and Fieldwork copies were dropped and every reference
  repointed at this repository's single asset set, so both render against the
  current tokens rather than a frozen `_ds/` snapshot.
- `--font-display-s` (600 24px/1.15) so the brand h3 reads from a token
  instead of an inline font shorthand in `Heading.jsx`.
- Named brand steps `--lofty-orange-70` and `--lofty-orange-40`, replacing
  two loose hex values in the data-viz ramp (`--data-2` light, `--data-3` dark).

### Changed
- Font fallback order stated explicitly and applied everywhere: brand font,
  then Montserrat, then Arial. Helvetica, Calibri, Carlito and Aptos are not
  used — two cover pages were setting Calibri and have been corrected.
- Contrast and token sweep across `guidelines/`: hardcoded hex values replaced
  with live token references throughout.
- Border rules narrowed to Flint 300; card and input grounds pinned to
  `--secondary-background-color`.
- Radii aligned to the token scale — no literal radius values remain.
- Screen type stack locked to Figtree body / Montserrat titles; Poppins
  fallbacks removed.
- Six domain icons (Projects, JobHouse, JobSite, Maintenance, Reports,
  Drawings) rebuilt at 18px on a 20×20 grid.

### Removed
- `uploads/` — 51 working files (source screenshots, OneDrive brand exports,
  scratch SVGs). Everything still needed had already been curated into
  `assets/`. The folder is now gitignored.
- `assets/icons/MondayDoc.svg` and `MondayLogoOutline.svg` — monday.com brand
  marks, not generic glyphs. Icon set is now 274 product glyphs.
- `guidelines/experiment-neutrals.html` and its variant — abandoned explorations.
- Retired neutral tokens `--lofty-gray-surface` and `--lofty-gray-light`,
  superseded by the Flint family.

### Known issues
- Domain icon stroke weight reads lighter than the filled Vibe glyphs at 14–16px.
  Needs a heavier or filled re-export of the source artwork.
- `--letter-spacing-*-medium` tokens do not exist; `Heading weight="medium"`
  falls back to the `-normal` tracking. Values are identical today, so nothing
  renders wrong.
- Fieldwork `.woff` files ship in this repository by decision of the brand
  owner. Distribution beyond the private repository is unconfirmed. See NOTICE.md.
