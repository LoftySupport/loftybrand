# Component index

61 components across 15 groups. Every component has a sibling `.d.ts` props
contract and a `.prompt.md` usage example — read those before guessing at an
API. Every group has a `<group>.card.html` showcase that renders the whole
group in light and dark.

Layout and interaction behaviour come from Vibe. The skin is Lofty.

| Group | Components |
| --- | --- |
| `core/` | Button, IconButton, Icon, Avatar, Chips, Label, Tooltip, Loader |
| `typography/` | Text, Heading, Link, Divider, Kbd, EditableText, TextWithHighlight |
| `forms/` | TextField, TextArea, NumberField, Search, Dropdown, Checkbox, RadioButton, Toggle |
| `pickers/` | Combobox, DatePicker, TimePicker, ColorPicker |
| `actions/` | MenuButton, SplitButton, ButtonGroup |
| `feedback/` | AttentionBox, Toast, Dialog, ProgressBar, EmptyState |
| `overlays/` | Modal, AlertBanner, Tipseen |
| `navigation/` | Tabs, Menu, Breadcrumbs |
| `disclosure/` | List, ExpandCollapse, Accordion |
| `indicators/` | Counter, Badge, Skeleton, AvatarGroup |
| `data/` | Table, Slider |
| `dataviz/` | StatTile, BarChart, ChartLegend, DonutStat, MeterRow, StatusChip |
| `wizard/` | MultiStepIndicator, Steps |
| `layout/` | Box, Flex |

## Conventions that hold across all of them

- **Inline styles, tokens only.** No stylesheets, no CSS classes, no raw hex.
- **`style` prop merges last** on every component, so a caller can override.
- **`iconBasePath`** is passed through by any component that renders an icon
  internally. Set it at your app boundary if your asset root is not the default.
- **Sizes** are `xs | small | medium | large` where a component has them, and
  they land on the 8px control rhythm: 24 / 32 / 40 / 48.
- **Focus** is the shared `--focus-ring` — a 3px orange-at-50% ring plus a 1px
  inset. Never removed.
- **Press** is scale: buttons `scale(0.95)`, icon buttons `scale(0.9)`, 70ms.

## Deliberate decisions

**Not built:** BaseList (List covers the product need), ThemeProvider (dark
mode is a `data-theme` attribute, not a provider), the Wizard wrapper (its two
parts ship; the wrapper is a per-flow layout decision), Clickable, HiddenText,
FormattedNumber, VirtualizedList/Grid, Transitions — infrastructure rather than
visual components.

**Consolidated:** upstream EditableText and EditableHeading are one
`EditableText` with a `heading` flag. The Counter animation family is reduced
to the pop; the roll-over digit transition was dropped because it draws the eye
to a number that has not changed meaningfully.

**Added:** `Icon` — a wrapper over the SVG set, needed because the upstream
React icon components are not usable in a bundler-less browser page. Behaviour
and glyphs are unchanged.

## Adherence linting

`_adherence.oxlintrc.json` is generated from the `.d.ts` contracts. It gives
consuming projects a lint rule per component that rejects undeclared props. It
is compiler output — gitignored, never edited by hand.
