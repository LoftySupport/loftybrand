# Lofty Apps Design System

Lofty's brand kit applied to a work-management interface system. The brand palette, logo and Fieldwork typeface come from Lofty; layout, component behaviour, spacing, motion and the icon set are the product layer, on the explicit instruction that readability and familiar product patterns come first.

- **Brand source:** Lofty brand kit extracts supplied as images (`assets/brand-kit-colours.png`, `assets/brand-kit-typography.png`), the Lofty logo, the twin-triangle mark, a favicon, and six Fieldwork `.woff` files.
- **Product source:** token values, component sizing, states and the icon set were imported once from the upstream product library and now live here in full. This folder is the source of truth; nothing needs to be read upstream.

## Products represented

One product surface was described: **the app** — a work-management application . `ui_kits/app` is a click-through recreation of it (sign in, jobs table/timeline, new-job dialog, delivery dashboard). No marketing site, mobile app, or slide template was supplied, so none was invented.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import`s only. |
| `tokens/` | `fonts.css`, `colors.css`, `dark.css`, `typography.css`, `spacing.css`, `radius.css`, `shadows.css`, `motion.css`, `base.css` |
| `components/core/` | Button, IconButton, Icon, Avatar, Chips, Label, Tooltip, Loader |
| `components/typography/` | Text, Heading, Link, Divider, Kbd, EditableText, TextWithHighlight |
| `components/forms/` | TextField, TextArea, NumberField, Search, Dropdown, Checkbox, RadioButton, Toggle |
| `components/feedback/` | AttentionBox, Toast, Dialog, ProgressBar, EmptyState |
| `components/layout/` | Box, Flex |
| `components/navigation/` | Tabs, Menu, Breadcrumbs |
| `components/data/` | Table, Slider |
| `components/indicators/` | Counter, Badge, Skeleton, AvatarGroup |
| `components/actions/` | MenuButton, SplitButton, ButtonGroup |
| `components/pickers/` | Combobox, DatePicker, TimePicker, ColorPicker |
| `components/wizard/` | MultiStepIndicator, Steps |
| `components/overlays/` | Modal, AlertBanner, Tipseen |
| `components/disclosure/` | List, ExpandCollapse, Accordion |
| `components/dataviz/` | StatTile, BarChart, ChartLegend, DonutStat, MeterRow, StatusChip |
| `ui_kits/app/` | Work app recreation — see its own README |
| `guidelines/` | Foundation specimen cards — colours (brand, neutrals, semantic, tints, pairings, text-on, data, dark), type (display, titles, body, brand body), spacing, radius, elevation, motion, states, z-index, breakpoints, forms pattern, **screen pattern (`pattern-screen.html` — what a new screen has to have)**, a11y contrast & focus, copy glossary, icons grid, brand logo/mark/assets |
| `assets/` | Logo, mark, favicon, brand-kit reference images, Fieldwork fonts, 274 product icon SVGs + 14 Lofty construction icons |
| `assets/brand/` | Four logo colourways, the square app icon, and the six Lofty lines/shapes silhouettes in three colourways each |
| `SKILL.md` | Agent Skills wrapper so this folder works inside Claude Code |
| `projects/` | Index of downstream projects that consume this system, what each uses, and how to refresh a bound copy |
| `docs/` | `getting-started.md` (install, theming, first component), `tokens.md` (full token reference), `components.md` (component index + props summary) |
| `package.json` | Package manifest. No build step — `styles.css` is the entry point |
| `LICENSE` | Lofty proprietary terms |
| `NOTICE.md` | Third-party notices: Vibe (MIT), Montserrat/Figtree (OFL), Fieldwork (commercial) |
| `CONTRIBUTING.md` | The inheritance rule, the never-do list, how to add a component or icon |
| `CHANGELOG.md` | Versioned change history |

### Components

Core: **Button**, **IconButton**, **Icon**, **Avatar**, **Chips**, **Label**, **Tooltip**, **Loader**. Typography: **Text**, **Heading**, **Link**, **Divider**, **Kbd**, **EditableText**, **TextWithHighlight**. Forms: **TextField**, **TextArea**, **NumberField**, **Search**, **Dropdown**, **Checkbox**, **RadioButton**, **Toggle**. Pickers: **Combobox**, **DatePicker**, **TimePicker**, **ColorPicker**. Actions: **MenuButton**, **SplitButton**, **ButtonGroup**. Feedback: **AttentionBox**, **Toast**, **Dialog**, **ProgressBar**, **EmptyState**. Layout: **Box**, **Flex**. Overlays: **Modal**, **AlertBanner**, **Tipseen**. Navigation: **Tabs**, **Menu**, **Breadcrumbs**. Wizard: **MultiStepIndicator**, **Steps**. Disclosure: **List**, **ExpandCollapse**, **Accordion**. Indicators: **Counter**, **Badge**, **Skeleton**, **AvatarGroup**. Data: **Table**, **Slider**.

Data viz: **StatTile**, **BarChart**, **ChartLegend**, **DonutStat**, **MeterRow**, **StatusChip** — the dashboard set, drawn straight from the Flint recommendation. Every colour comes from `--data-1 … --data-6` and the neutral tokens, so one set of markup carries light and dark; see `components/dataviz/dataviz.card.html` for both themes side by side.

Each has a `.d.ts` props contract and a `.prompt.md` with a usage example. Every directory carries a `@dsCard` showcase.

**Families deliberately not built:** BaseList (List covers the product need), ThemeProvider (this system ships one light theme), Wizard (its two parts, MultiStepIndicator and Steps, are here — the wrapper is a layout decision per flow), Clickable, HiddenText, FormattedNumber, VirtualizedList/Grid, Transitions — infrastructure rather than visual components.

**Deliberate consolidations.** The upstream EditableText and EditableHeading are one `EditableText` with a `heading` flag. The Counter animation family is reduced to the pop; the roll-over digit transition was dropped because it draws the eye to a number that has not changed meaningfully.

**Intentional additions:** `Icon` — a wrapper over the SVG set, needed because the upstream React icon components are not usable in a bundler-less browser page. Behaviour and glyphs are unchanged.

---

## Content fundamentals

Product voice in Lofty's register. Australian English (`organise`, `utilisation`, `kilometre`).

- **Sentence case everywhere.** "New job", "Assign crew", "Delivery dashboard". Never Title Case, never ALL CAPS except the 12px section eyebrow in navigation (`WORKSPACES`).
- **Second person, active voice.** "Assign a crew before publishing the schedule." Not "The crew must be assigned." The product never says "I".
- **Buttons are verbs, and name the object where it fits.** "Create job", "Publish schedule", "Sign in". Not "Submit", "OK", "Yes".
- **Labels are nouns, one to three words.** "Job name", "Crew", "Due", "On time".
- **Empty and error states say what to do next.** "Enter a valid work email", not "Invalid input". "Nothing here yet" plus the action that fills it.
- **Numbers are concrete and unrounded.** "128 jobs", "91% on time", "+3 pts". No vague intensifiers ("dramatically improved").
- **No emoji.** Not in UI copy, not in decks, not as icons — the icon set covers every glyph need.
- **No exclamation marks** and no exclamatory congratulation. A completed action gets a plain toast: "Schedule published".
- **Sub-text is one sentence.** Helper text under a field explains the constraint, then stops.
- **Brand-led surfaces can be shorter and bolder** — the Fieldwork Geo display line on the sign-in panel ("Every job, every crew, one schedule.") is the one place a full-sentence statement is allowed to carry the page.

---

## Visual foundations

**Colour.** Five brand colours in a fixed hierarchy, and nothing outside them except status. Foundation Black `#414042`, Finisher White and Mid Grey `#d1d3d4` are the primaries: black for text, inverted surfaces and brand panels; white for pages, shells and cards. Mid Grey is a brand colour for the logo, print and brand-led surfaces only — it draws nothing in the UI. Crisp Orange `#f47e63` is the primary accent, and black never sits on it — filled orange carries Finisher White for text and icons, on both light and dark themes. It is the single filled action per view, the active tab underline, the selected nav item, the first data series. Eco Green `#005058` is the secondary accent, used sparingly — small decorative accents; it is never a shell, a panel fill, or a link colour, and the logo never appears in orange on it. **The two accents never appear together:** a view uses orange or green, so a chart is one accent family plus Flint neutrals. Flint 300 draws borders and dividers; `--ui-border-color` stays the darker `#8a898d` where a control boundary needs 3:1. Finisher White is the card and the page. Positive/negative/warning keep their imported values (`#00854d`, `#d83a52`, `#ffcb00`) because the brand palette has no legible status greens or reds. Note: the brand kit's Foundation Black swatch prints `HEX #000000` next to `RGB 65 64 66`; the RGB is authoritative here, so tokens use `#414042`.

**Type.** Two systems, chosen by surface. On screen: Montserrat for titles, Figtree for body, at the product sizes (h1 32/40, h2 24/30, h3 18/24; text1 16/22, text2 14/20, text3 12/16). Tracking is slightly negative on headings only (-0.5px h1, -0.1px h2/h3). For brand-led surfaces — decks, print, proposals, hero statements: Fieldwork Geo Demi Bold for display, Fieldwork Hum Light for body, with the brand kit's tracking (-0.01em headings, -0.02em body) and its minimums (14pt headings, 8pt body).

**Spacing.** 2/4/8/12/16/20/24/32/40/48/64/80 — nothing off the scale, ever (no 6, 10, 14). Controls sit on an 8px rhythm: 24/32/40/48 buttons, 32 menu and list rows, 40 nav rows, 56 top bar. Content cards pad 24; compact tiles (dashboard stats, side panels) pad 16. A vertical stack inside a card gaps 16; adjacent controls gap 8; a label above its control gaps 4; page gutters are 32.

**Dark mode.** `data-theme="dark"` on `<html>` (or any subtree) swaps the semantic layer; component code never changes. Grounds are the dark Flint steps — page 900 `#1a1a18`, surface 800 `#24241f`, raised `#2f2e28` — with Flint 700 `#3a3a33` as the rule. Text lifts to `#f2f1f2` and muted `#b9b8bc`, both above 8:1 on surface. Crisp Orange keeps its hex and keeps white ink — black on orange is never used on either theme. Eco Green lifts to `#20707a` so white on it clears 4.5:1 (5.7:1), and green as text or an icon on dark uses `--lofty-green-dark-ink` `#57c3cc` at 7.5:1 — never as a fill. Status greens and reds lift the same way, so their ink flips to Flint 900 (`--text-color-on-status`) — 6.6:1 on positive, 5.8:1 on negative; warning stays. Shadows go neutral black and deeper, and elevation is shown by the surface stepping lighter as much as by shadow.

**Backgrounds.** Flat colour. White pages and a white app shell separated by Flint 300 rules, Flint 100 for page tints and Flint 200 for recessed areas, solid Foundation Black for brand panels. No gradients, no photographic hero imagery, no repeating patterns, no grain, no illustration set — none exist in the supplied material, and inventing one would be a guess. The only decorative element available is the twin-triangle mark, used at low prominence.

**Cards.** 1px Flint 300 border, 8px radius, white fill, no shadow at rest. Shadow appears only when something floats: `--box-shadow-xs` for row hover, `small` for dropdowns, `medium` for menus/toasts/tooltips, `large` for modals. Shadows are neutral Foundation Black at 10–30% — never tinted orange.

**Radii.** Seven values, each a token: 2px (`--border-radius-2`) checkbox and small label; 4px (`small`) buttons, inputs, chips, labels, tabs, menu items; 8px (`medium`) cards, menus, dropdowns, dialogs; 12px (`large`) panels and the app icon; 16px (`big`) the full-view modal only; 100px (`pill`) toggles, progress tracks, counters, badges, step dots; 50% (`circle`) avatars, radios, loaders, knobs. Never a literal radius anywhere — components, the app kit, and guideline cards all reference the tokens.

**Borders.** 1px solid, always. `--ui-border-color` `#8a898d` on control boundaries where 3:1 is required, Flint 300 (`--layout-border-color`) on card, panel and table rules, Flint 200 (`--ui-border-subtle-color`) on decorative rules inside a control. The border switches to Foundation Black on input hover and Crisp Orange on focus. Coloured left-border accent strips are not part of this system.

**Hover.** Neutral wash, not a colour change: `rgba(65,64,66,.08)` behind tertiary buttons, icon buttons, menu and table rows. Filled elements darken to their `-hover` step instead. The primary orange button is the one exception: its fill drops out on hover and orange becomes the ink and the line, then press is a `#c2543c` fill at 0.95 scale. Inputs darken their border. Links are Foundation Black and move to `#c2543c` on hover — never Eco Green.

**Press.** Scale. Buttons `scale(0.95)`, icon buttons `scale(0.9)`, both over 70ms — the reason the system feels physical rather than flat.

**Focus.** A 3px orange-at-50% ring plus a 1px inset — `--focus-ring`. Never removed, never replaced by a colour change alone.

**Status and pills.** No colour field behind a label. Status is an outline chip — transparent fill, Flint 400 border, Foundation Black text — with an 8px dot in `--positive-color` or `--negative-color`. A filled element means a call to action, and it is orange with white ink.

**Selected.** Tinted, not filled: `#fae4d5` (`--primary-selected-color`) behind selected nav items, dropdown options, list rows and secondary buttons in an "on" state, `#f6d3bf` on hover, `#fdf6f0` for the lightest highlight. The tints are derived from Crisp Orange toward warm peach — earlier magenta-leaning values (`#fdded6`, `#fbcabd`) were retired because selected states read as a different colour family. Text stays Foundation Black. Where peach is too warm on a given surface, Flint 200 is the neutral fallback for selection.

**Motion.** Two families. Productive (70/100/150ms) for anything the user drives: press, hover, toggle knob, tab underline, chevron rotation. Expressive (250/400ms) for entrances: dialogs, toasts, attention boxes. Easings are `cubic-bezier(0,0,0.35,1)` entering, `cubic-bezier(0.4,0,1,1)` exiting, `cubic-bezier(0,0,0.2,1.4)` for the one emphasised pop (chips appearing). Nothing bounces except that chip pop. No parallax, no scroll-triggered animation.

**Transparency and blur.** Transparency only in two places: the neutral hover wash and the modal backdrop (Foundation Black at 70%). No frosted glass, no backdrop blur — `backdrop-filter: brightness()` is used only for buttons sitting on a primary-colour field, and this system keeps that narrow use.

**Layout rules.** Fixed 56px top bar, 224px side nav, both persistent. Content scrolls under them. Tables get a sticky grey header row. Toasts pin to top-centre. Dialogs centre over the backdrop. Max content width is not capped — the app fills the viewport, dashboards use a 4-column stat grid then a 1.6fr/1fr split.

**Imagery.** No photography supplied and none generated. Where a photo would sit, use a flat brand-colour panel, the mark, or one of the brand silhouettes in `assets/brand/`. If real photography arrives it should be warm-neutral and un-filtered to sit alongside Crisp Orange.

**Neutrals — Flint.** One neutral family with numbered steps, secondary to the accent and never decoration: Flint 50 `#f9f9f6` (`--page-tint-soft-color`) a softer page for dense tables and long forms; Flint 100 `#f4f3ee` (`--page-tint-color`) the page; Flint 200 `#e1e1d9` (`--surface-recessed-color`) recessed fills, tracks and quiet chips; Flint 300 `#c6c5ba` (`--layout-border-color`) every border and divider; Flint 400 `#b6b6ac` a mid-tone fill for chart neutrals and disabled states, never a text ground. Dark mode is the same material: Flint 700 `#3a3a33` rule, 800 `#24241f` surface, 900 `#1a1a18` page. One page tint per screen. Mid Grey `#d1d3d4` is a cool grey that fought Crisp Orange, so it no longer draws UI borders — it stays a brand colour for the logo, print and brand-led surfaces. Paper, Mineral, Stone and the cool `#f6f7f7` / `#e7e8e9` greys are all retired, and the `--lofty-gray-surface` and `--lofty-gray-light` tokens are gone with them — Flint replaces them everywhere.

---

## Iconography

**288 SVGs** in `assets/icons/`: the product icon set (**274**) plus **14 Lofty construction glyphs** — Projects, JobHouse, JobSite, Reports, Company, Maintenance, Drawings, Estimating, Costs, Crew, HardHat, Delivery, Materials, Approval — drawn as filled 20×20 shapes in the same idiom for Lofty-specific navigation and object types. Reference sketches for some of them are kept as `.png` beside the SVGs; only the `.svg` files are for use. No substitution, no CDN dependency, no icon font, no emoji, no Unicode glyphs standing in for icons.

- **Style:** single-weight, mostly-filled 20×20-origin glyphs with rounded terminals. They read as solid rather than stroked at small sizes.
- **Use:** the `Icon` component renders a glyph as a CSS mask over `currentColor`, so an icon always inherits the colour of its context (`--icon-color` in toolbars, white on Eco Green, `--negative-color` in a destructive menu item). Reference by file stem: `<Icon name="MoreActions" />`.
- **Sizes:** 14 (xs controls), 16 (buttons, table cells, menu items), 18 (nav, attention boxes), 20 (default), 24 (empty states, large buttons).
- **Colour:** neutral by default. Orange only when the icon *is* the action (a primary IconButton), status colours only inside status contexts. An icon on an orange fill is always white, never black.
- **Brand marks removed:** the upstream set ships monday.com's own `MondayDoc` and `MondayLogoOutline` marks. Both are deleted here — MIT covers code, not trademarks. Do not re-import them on an icon refresh.
- **Naming:** PascalCase stems as upstream — `Board`, `MyWeek`, `DropdownChevronDown`, `NavigationChevronRight`, `MoreActions`, `CloseSmall`. Several near-duplicates exist upstream (`Bullet`/`Bulllet`) and were copied as-is.
- **Brand marks are not icons:** `assets/brand/` holds the lockup in four colourways (`lofty-logo-black.png`, `-orange`, `-green`, `-white`), the square app icon (`lofty-logo-orange-square.png`), the twin-triangle mark, and the favicon. Pick the cut that matches its background rather than recolouring a file; the lockup keeps clear space equal to the height of its "L"; the orange lockup never sits on Eco Green.
- **Lines and shapes:** six organic silhouettes (`lofty-shapes-01..03`, `lofty-lines-01..03`) in Crisp Orange, Eco Green and Finisher White. Backgrounds and crops, not illustration — one per surface, cropped by the page edge, always behind or beside content and never under text. The supplied SVGs define no fill or stroke (empty `<defs>`, no `cls-1` rules), so all 18 files carry explicit brand hex fills here; the Lines/Shapes distinction cannot be seen until the Lines set is re-exported with expanded stroke styles. See `guidelines/brand-assets.html`.

---

## Fonts and substitutions

Fieldwork is supplied as `.woff` only, in six cuts: Geo Light/Demibold, Hum Light/DemiBold, Italic Light/DemiBold. There is no Fieldwork Regular or Medium, so the brand scale uses 300 and 600 exclusively. `.woff2` would be a worthwhile addition. The brand kit names **Montserrat** as the print substitute when Fieldwork is unavailable; on screen titles use **Montserrat** and body copy **Figtree**, which is what `--title-font-family` and `--font-family` resolve to and what all product components use. Both load from Google Fonts. **Arial** is the final fallback where neither the brand fonts nor Montserrat are available, and sits last in every stack ahead of the generic `sans-serif`. Helvetica, Calibri, Carlito and Aptos are not used.
