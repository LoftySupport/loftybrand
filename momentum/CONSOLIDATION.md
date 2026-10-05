<!-- momentum/CONSOLIDATION.md : how Lofty Momentum Consolidated was decided. 5 October 2026. Same text as the artifact's Consolidation section. -->
# Consolidation

How Lofty Momentum Consolidated was put together, decision by decision, so nothing here has to be taken on trust.

## Sources and precedence

| Rank | Source | What it is | Read |
|---|---|---|---|
| 1 | Amber's decisions, 4 and 5 October 2026 | The Hub rebuild's conflict table (`loftyprojectapp/docs/ui-system/RULE_SOURCES.md` rows C01 to C58) and `OPEN_QUESTIONS.md`, answered one row at a time | In full |
| 2 | Lofty Momentum 1.4 | Concept design system, 25 September 2026 (`project/README.md`, `Handoff.md`, `tokens.json`, 20 component guidelines and previews, three asset groups) | In full |
| 3 | Lofty's App Design System | LoftySupport/loftybrand at `main`, 5 October 2026: `readme.md`, `SKILL.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `docs/tokens.md`, the nine token files, 61 Vibe-shaped components, 288 icons, brand assets | Tokens, docs and asset folders in full; component source by index |
| 4 | monday.com Vibe | The base the App Design System and the Hub inherit from | As the App Design System records it |

A higher rank wins a conflict. A lower rank fills a gap. Nothing here is invented: every value below names its source, and the few values derived here are listed in their own table for Amber to confirm.

## Decisions carried into the tokens

| Topic | App Design System | Momentum 1.4 | Amber's decision | Consolidated |
|---|---|---|---|---|
| Font family | Figtree body, Montserrat titles | Figtree body, Montserrat display | 5 Oct, C04: "Montserrat for digital and web. Drop Figtree." Fallback: system sans-serif stack, set once | `display` and `body` are both Montserrat then the system stack. Every preview and guideline says Montserrat |
| Font weights | 200 to 700 | 400, 500, 600, 700 | 5 Oct, C05: four weights, set once | 400, 500, 600, 700. Fieldwork keeps 300 and 600 because those are the only cuts supplied |
| Type scale | Vibe 32/24/18, 16/14/12 | hero 40/50, body 15/23, prompt 17, stats | 4 Oct, C01 and C03: keep Vibe's scale and line heights for the Hub | Both: a `Screen` group (Vibe scale) and Momentum's `Display`, `Numbers` and `Text` groups for AI surfaces |
| Casing | Sentence case, nav eyebrow in caps | Sentence case | 5 Oct, C06: sentence case, one nav eyebrow; Tools lane names keep capitals | As decided |
| Role of orange | One filled action per view | Core brand and primary action | 5 Oct, C07: primary colour for interactive elements | `action` = `crisp-orange` |
| Ink on orange | White, never black (9 Sep acceptance at 2.6:1) | Deep Eco, never white | 5 Oct, C08: Deep Eco dark ink now, one token | `on-action` = `deep-eco`, 6.8:1 |
| Contrast bar | "Readable is the bar"; measured shortfalls recorded | 4.5:1 text, 3:1 marks | 5 Oct, C09: WCAG AA, 4.5:1 text, 3:1 icons and edges | Every usage note carries its ratio; the focus ring was rebuilt to pass (below) |
| Control boundary | `#8a898d` (`--ui-border-color`), `#807f74` on dark | `rgba(8,26,28,0.12)` light, white 16% dark (1.6:1 on dark) | 5 Oct, C10: `#8a898d`, one token | `line-control` = `#8a898d` in every theme: 3.1:1 on Shell, 3.5:1 on white, 5.8:1 on eco-night, 5.1:1 on the dark solid card |
| Selected state | Peach `#fae4d5` on light; white wash 20% on dark rails | `surface-selected` white on light, white 10% on dark | 5 Oct, C11: peach tint on light, white wash on dark, one token each | `surface-selected` = `#fae4d5` / `rgba(255,255,255,0.20)`; `surface-selected-hover` carries the App Design System hover steps |
| Status | Outline chip with a dot; Vibe `#00854d`, `#d83a52`, `#ffcb00` | Pill chip, shape icon plus word, graded; `#00805f`, `#c28400`, `#d83a52` | 5 Oct, C12: "Match momentum" | Momentum's set and grading. Vibe's warning `#ffcb00` (1.5:1) is retired. `status-complete` = `eco-green` added from the StatusIcon guideline |
| Themes | Light and dark (`data-theme="dark"`) | Sunrise, Deep Eco, Twilight | 4 Oct, C15: two themes. 5 Oct: Amber's brief asks for three via `data-theme` and two token tiers. **Decided 5 Oct 2026, this consolidation: three themes.** The Hub ships Sunrise, Deep Eco and Twilight; C15 is superseded | Three themes and two tiers (primitives, semantic) |

## Where Momentum won over the App Design System

These are not Amber's decisions; they follow from rank 2 beating rank 3. Each is a candidate to confirm or reverse.

| Topic | App Design System | Consolidated (Momentum) |
|---|---|---|
| Ink | Foundation Black `#414042` | `ink` = Deep Eco `#081a1c` everywhere: the Hub, the portal and documents. **Decided 5 Oct 2026 (Amber).** Foundation Black stays a brand kit primitive for the black lockup only |
| Page and neutrals | Flint family (`#f4f3ee` page, `#c6c5ba` borders, dark Flint 700 to 900) | `page` = Shell, glass surfaces, `line` alpha rules, `eco-night` and `twilight` dark pages. **Decided 5 Oct 2026 (Amber): the Hub drops Flint.** Its Flint references map onto these in `vibe-theme.css` |
| Backgrounds | Flat colour, no gradients, no blur | Glow discs, the frosted frame, eleven backgrounds by job |
| Data visualisation | Single-accent orange ramp `--data-1` to `-6` and a sequential orange scale | Five fixed series plus `series-other`. No sequential scale exists in Momentum: a gap, listed below |
| Radii | 2, 4, 8, 12, 16, pill, circle | Momentum's 8 to 28 plus pill, with `radius-xs` 4px and `radius-circle` added from the App Design System. 2px and 16px are not carried |
| Shadows | Four elevation shadows | Momentum's `shadow-float` and `shadow-ai`, plus the four App Design System elevation shadows so Vibe dropdowns, menus and modals keep theirs |

## Values derived here, to confirm

Nothing in this table comes verbatim from a source. Each applies a source rule to a Momentum value and is marked in its usage note.

| Token | Value | Derivation |
|---|---|---|
| `focus` and `focus-ring` | Solid 2px ring, `orange-pressed` on light, `crisp-orange` on dark, with a 2px gap in the page colour | The App Design System's ring is orange at 50%: 1.6:1 over white, which fails Amber's 3:1 edge rule (C09). The pressed step is 4.5:1 on white and 4.1:1 on Shell; Crisp Orange is 7.6:1 on eco-night |
| `surface-hover` | `rgba(8,26,28,0.08)` light, `rgba(255,255,255,0.12)` dark | The App Design System's neutral hover wash (`rgba(65,64,66,.08)`, on-dark 12%) with Deep Eco as the ink |
| `ink-disabled` | ink at 40% | The App Design System's `--disabled-component-opacity` 0.4 applied to `ink` |
| `backdrop` | `rgba(8,26,28,0.7)` light, `rgba(0,0,0,0.7)` dark | The App Design System's 70% backdrop with Deep Eco as the ink |
| `surface-selected-hover` | `#f6d3bf` light, `rgba(255,255,255,0.28)` dark | App Design System `--primary-selected-hover-color` and `--on-dark-selected-hover-color`, placed beside Amber's selected token |
| `series-other` | `{line-control}` | The ReportColours rule "a sixth category folds into Other in a neutral (`line-control`)", now `#8a898d` |

## Known shortfalls, kept and named

- `line-control` on `surface-selected` peach is 2.8:1. A control inside a selected row takes `ink-muted` as its edge (in the usage note).
- `status-at-risk` light `#c28400` is 3.2:1 on white: a graphic mark, never text, as Momentum states.
- `orange-hover` `#d9634a` is 3.6:1 on white: only behind large or bold labels.
- White on `crisp-orange` is 2.6:1 and is not used anywhere in this system.

## Gaps the sources do not fill

- A sequential (continuous quantity) chart scale. Momentum has none; the App Design System's orange ladder is single-accent and is not carried. Needs a decision before heat maps or load charts are built.
- A 2px radius for checkboxes and a 16px radius for the full-view modal, which Vibe components use. `vibe-theme.css` keeps `--border-radius-2: 2px` and maps the big radius to `radius-l` (20px) until decided.
- Eco Green hover and tint steps (`--highlight-hover-color`, `--highlight-tint-color`). Momentum has none; `vibe-theme.css` keeps the App Design System values as literals, flagged.
- Overdue tints for Vibe's `--negative-color-selected`. Momentum's Overdue chip is a solid fill; `vibe-theme.css` keeps the App Design System tints as literals, flagged.

## Lineage of Momentum 1.4

- 1.4, 25 September 2026: hero type 40/50; the Lofty arrows replace the four-point spark as the AI mark; landing version 2 with a bank of twelve questions; condensed rail Ask Lofty as a plum tile; watch lists on white cards; LandingQuestion, TaskPlanner and PrintTemplates; the Claude Code handoff.
- 1.3.2 and 1.3.1, 25 September 2026: ReportExamples; `ice` renamed `sky`.
- 1.3, 25 September 2026: eleven backgrounds by job with dark twins; eight retired; dark glows raised.
- 1.2, 25 September 2026: Sunrise light ground; two dark themes, Deep Eco and Twilight; `blur-glow` 140px.
- 1.1, 24 September 2026: graded status chips; AppRail matching the App Rail diagram; the CRM carries no photos.
- 1.0, 24 September 2026: first version, from the AI-first mockups on the Lofty colour trial canvas.
