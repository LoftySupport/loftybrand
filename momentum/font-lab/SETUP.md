<!-- momentum/font-lab/SETUP.md : the chosen type and text-colour setup as values to build from. 7 October 2026; weights and Readable colours brought into line with the Hub 12 October 2026. -->
# Chosen setup: Outfit headings, Onest body, Readable text, glows at 15%

Decided by Amber on 7 October 2026: **Outfit for headings, Onest for body**, Fieldwork for brand surfaces only, **readable text and glows at 15%**. The weights below are the Hub's (`docs/ui-system/PATTERNS.md` section 13, 7 and 8 October 2026), which Amber confirmed on 12 October 2026 as the weights for both repositories.

**Applied in `momentum/tokens`:** the two fonts, h1 to h3 at weight 500, body at 400 on every theme, bold body styles at 600, the Readable text colours and glow discs at 15% or less.

## 1. Fonts and weights

Load from Google Fonts (variable, so every weight below is available). The system sans-serif is the fallback when Outfit and Onest are not available (Amber, 12 October 2026); Montserrat is the Word substitute only and is not in the stacks:

```css
@import url("https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap");
--font-display: Outfit, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
--font-body: Onest, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
```

### Outfit (`--font-display`)

Fieldwork Geo has only Light (300) and DemiBold (600), so 600 and 700 both show DemiBold. Measured as stroke thickness over lowercase height, Outfit at 600 (0.269) matches Geo DemiBold (0.267), and at 700 it reads heavier than Fieldwork. Amber found 600 too heavy on screen on 7 October 2026, and the Hub, which is live, set headings at **500**. Both repositories use 500.

| Style token | Size / line | Weight | Note |
| --- | --- | --- | --- |
| `--type-h1` | 32/40 | 500 | 700 in Vibe; 600 until 7 October 2026 |
| `--type-h2` | 24/30 | 500 | As above |
| `--type-h3` | 18/24 | 500 | As above |
| `--type-title` | 18/24 | 600 | Unchanged |
| `--type-stat-xl`, `--type-stat-l` | 120/116, 52/52 | 600 | Unchanged |
| `--type-hero`, `--type-hero-mobile` | 40/50, 32/38 | 500 | Unchanged (5 October). Outfit 300 (0.149) is nearest to Geo Light (0.165) if a Light hero is wanted |
| `--type-stat-m` | 36/40 | 500 | Unchanged |

### Onest (`--font-body`)

| Style token | Size / line | Weight, every theme |
| --- | --- | --- |
| `--type-text1` | 16/22 | 400 |
| `--type-text2` | 14/20 | 400 |
| `--type-text3` | 12/16 | 400 |
| `--type-body` | 15/23 | 400 |
| `--type-prompt` | 17/24 | 400 |
| `--type-caption` | 12/16 | 400 |
| `--type-body-strong`, `--type-label` | 14/20, 12/16 | 600 |

- **Body at 400 on every theme.** Onest at 500 on the dark themes (applied here on 7 October 2026 for thin strokes at 12 to 13px) was lowered by Amber in the Hub the same week as too heavy. At 13px Onest is 1.34px thick at 500 and 1.09px at 400 (`metrics.json`).
- **Medium styles 500, bold body styles 600** (700 until 8 October 2026).
- **Sizes:** body 16px, dense UI 14px, nothing that carries information under 13px, 12px for secondary captions only, 16px for text inputs (iPhones zoom below that), line height 1.5. These are Font Lab recommendations; the Hub's phone footer may drop to 10px (`0ne`).

## 2. Readable text colours

Applied in `momentum/tokens` on 12 October 2026, matching the Hub's `colors.css` and `dark.css`. Light themes keep the ink; the muted text goes darker. Dark themes get a soft white and a stronger secondary level.

| Token | Sunrise | Deep Eco | Twilight | Today |
| --- | --- | --- | --- | --- |
| `--ink` | `#081a1c` | `#eef4f3` | `#eef4f3` | Sunrise `#081a1c`; dark `#ffffff` |
| `--ink-muted` | `#3e4d50` | `rgba(238,244,243,0.86)` | `rgba(238,244,243,0.86)` | Sunrise `#5a6668`; dark `rgba(255,255,255,0.62)` |
| `--ink-disabled` | unchanged `rgba(8,26,28,0.4)` | unchanged `rgba(255,255,255,0.4)` | unchanged | Disabled controls only, never information |

Soft white, not pure white, on a near-black ground, because pure white glares on OLED phones. One secondary level only: no 62% and no 40% for content.

## 3. Glows at 15%

- **Momentum tokens:** `--glow-1` to `--glow-3` sit at 15% or less. The eleven backgrounds in `tokens/backgrounds.css` keep their measured values.
- **The Hub:** done for Deep Eco and Twilight (`docs/ui-system/PATTERNS.md` section 13: glow discs 15% or less, the Readable muted level). The cap is for the dark themes (Amber, 12 October 2026): Sunrise is stronger in the Hub, by her request on 7 October 2026 ("make entire background more crisp orange"): `app/src/lofty-ui/surfaces.css` draws 85% orange corners and a 50% edge. The Hub's `PATTERNS.md` section 13 row still says all three themes; it is flagged in the Hub's `docs/ui-system/BRAND_CHECK.md` to be reworded.

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
| The decision and the colour question | `momentum/HANDOFF.md`, `momentum/README.md` (Rules in force) |
| Fieldwork Geo checks (two weights, no hinting, metrics, licence G-23) | `momentum/font-lab/README.md`, section "Fieldwork Geo in the app" |
