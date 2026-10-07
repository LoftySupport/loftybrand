<!-- momentum/font-lab/SETUP.md : the chosen type and text-colour setup as values to build from. 7 October 2026. Written for Amber to hand to a build session. -->
# Chosen setup: Outfit headings, Onest body, Readable text, glows at 15%

Decided by Amber on 7 October 2026: **Outfit for headings, Onest for body**, Fieldwork for brand surfaces only. **Readable text and glows at 15%** was Amber's lean and is not yet a decision; the values are here so it can be applied in one step.

**What is applied in `momentum/tokens` today:** the two fonts, h1 to h3 at weight 600, body text at 500 on the dark themes (Amber, 7 October 2026) and the glow discs at 15% or less. **What is not applied:** the Readable text colours.

## 1. Fonts and weights

Load from Google Fonts (variable, so every weight below is available):

```css
@import url("https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap");
--font-display: Outfit, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
--font-body: Onest, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
```

### Outfit (`--font-display`), matching Fieldwork Geo strokes

Fieldwork Geo has only Light (300) and DemiBold (600), so 600 and 700 both show DemiBold. Outfit matches Geo DemiBold at **weight 600** (stroke thickness as a share of lowercase height: Outfit 0.269, Geo 0.267). At 700 Outfit reads heavier than Fieldwork. Measured, not judged by eye.

| Style token | Size / line | Weight | Why |
| --- | --- | --- | --- |
| `--type-h1` | 32/40 | 600 | Was 700 (Vibe). Moved to match Geo DemiBold |
| `--type-h2` | 24/30 | 600 | As above |
| `--type-h3` | 18/24 | 600 | As above |
| `--type-title` | 18/24 | 600 | Unchanged |
| `--type-stat-xl`, `--type-stat-l` | 120/116, 52/52 | 600 | Unchanged |
| `--type-hero`, `--type-hero-mobile` | 40/50, 32/38 | 500 | Unchanged (5 October). Sits between Geo Light and DemiBold, so it matches neither exactly. Outfit 300 (0.149) is the nearest to Geo Light (0.165) if a Light hero is wanted |
| `--type-stat-m` | 36/40 | 500 | Unchanged |

### Onest (`--font-body`)

| Style token | Size / line | Light themes | Dark themes (Readable) |
| --- | --- | --- | --- |
| `--type-text1` | 16/22 | 400 | 500 |
| `--type-text2` | 14/20 | 400 | 500 |
| `--type-text3` | 12/16 | 400 | 500 |
| `--type-body` | 15/23 | 400 | 500 |
| `--type-prompt` | 17/24 | 400 | 500 |
| `--type-caption` | 12/16 | 400 | 500 |
| `--type-body-strong`, `--type-label` | 14/20, 12/16 | 700 | 700 |

- **Dark weight 500** is decided (Amber, 7 October 2026) and applied: `tokens/typography.css` redeclares the six body styles at 500 under `[data-theme="eco"]` and `[data-theme="twilight"]`. Thin light-on-dark strokes break up at 12 to 13px, especially on phones. At 13px Onest is 1.34px thick at 500 and 1.09px at 400.
- **Bold body styles at 700:** unchanged from 5 October. Whether they move to 600 is open.
- **Sizes:** body 16px, dense UI 14px, nothing that carries information under 13px, 12px for secondary captions only, 16px for text inputs (iPhones zoom below that), line height 1.5.

## 2. Readable text colours

Light themes keep the ink; the muted text goes darker. Dark themes get a soft white and a stronger secondary level.

| Token | Sunrise | Deep Eco | Twilight | Today |
| --- | --- | --- | --- | --- |
| `--ink` | `#081a1c` | `#eef4f3` | `#eef4f3` | Sunrise `#081a1c`; dark `#ffffff` |
| `--ink-muted` | `#3e4d50` | `rgba(238,244,243,0.86)` | `rgba(238,244,243,0.86)` | Sunrise `#5a6668`; dark `rgba(255,255,255,0.62)` |
| `--ink-disabled` | unchanged `rgba(8,26,28,0.4)` | unchanged `rgba(255,255,255,0.4)` | unchanged | Disabled controls only, never information |

Soft white, not pure white, on a near-black ground, because pure white glares on OLED phones. One secondary level only: no 62% and no 40% for content.

## 3. Glows at 15%

- **Momentum tokens:** already done on 6 October 2026. `--glow-1` to `--glow-3` and the eleven backgrounds in `tokens/backgrounds.css` sit at 15% or less.
- **The Hub:** not done. From my earlier read of `app/src/lofty-ui/surfaces.css` the night grounds use 36 to 47% glows and the glass uses 5 to 8% white, and `app/src/design-system/tokens/dark.css` has muted text `#b9b8bc`. Re-read both before editing; the Hub's `ui_system_rebuild` branch owns them.

## 4. Contrast this gives

Worst case, at the centre of the brightest glow behind the glass card (computed from the token values, not from rendered pixels). AA needs 4.5:1.

| Theme | Today: ink / muted | Readable + glows 15%: ink / muted | Readable + solid cards: ink / muted |
| --- | --- | --- | --- |
| Sunrise | 17.1 / 5.7 | 17.1 / 8.5 | 17.9 / 8.8 |
| Deep Eco | 7.4 / **4.0 (fails)** | 10.2 / 8.0 | 15.9 / 11.9 |
| Twilight | 9.7 / 4.9 | 10.8 / 8.5 | 17.6 / 13.0 |

"Today" is the Hub's current grounds with Momentum text, which is where Deep Eco muted text fails. Solid cards for dense tables and forms are an optional extra; Momentum already says body text sits on a solid surface.

## 5. References

| What | Where |
| --- | --- |
| The tester that produced these numbers | `momentum/font-lab/index.html`; method in `README.md` |
| Stroke thickness by weight, every face | `momentum/font-lab/metrics.json` (`stems`), regenerated by `measure-fonts.py` |
| The font and weight tokens | `momentum/scripts/gen-tokens.py` (edit here), generated to `tokens/typography.css`, `tokens/fonts.css`, `tokens.json` |
| The decision and the colour question | `momentum/HANDOFF.md`, `momentum/CONSOLIDATION.md` (C04 row) |
| Fieldwork Geo checks (two weights, no hinting, metrics, licence G-23) | `momentum/font-lab/README.md`, section "Fieldwork Geo in the app" |
