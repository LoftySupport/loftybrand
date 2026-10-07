<!-- momentum/font-lab/AGENT-PROMPT.md : the typography handoff for the Lofty Hub agent. 7 October 2026. Self-contained: paste it as the first message. -->
# Prompt for the Hub agent: typography and text colour

Paste everything below the line into the agent working on `loftysupport/loftyprojectapp`.

---

You are continuing the Lofty Design System rebuild in Lofty Hub (`app/`, React + Vibe + Supabase). Amber has made the typography decisions below. Your job is to apply them to the Hub. Read `CLAUDE.md` and `docs/ui-system/PLAN.md` first, then continue the existing `ui_system_rebuild` branch (one branch per area; do not cut a new one). Raise any question as one row with `node scripts/register.mjs add --kind question`, one at a time, with context, options and a recommendation. Do the unblocked work first.

## What Amber decided (7 October 2026)

- **Headings: Outfit. Body: Onest.** Montserrat and Figtree both leave the Hub. Two faces at most.
- **Matching Fieldwork Geo strokes:** headings h1 to h3 are weight **600**. Outfit's strokes match Fieldwork Geo DemiBold at 600 and read heavier at 700.
- **Body text is weight 500 on the dark themes** (Deep Eco and Twilight), 400 on Sunrise.
- **Readable text and glows at 15%** is the setup Amber asked for. Apply it, and tell her in the pull request what changed in each dark theme.
- **Fieldwork is not shipped in the Hub.** It stays for decks, print and brand-led heroes only. Do not load it.

## Fonts

Load from Google Fonts, variable, once, wherever the Hub loads fonts today (find where Figtree and Montserrat load, probably `index.html` or a fonts file, and replace them):

```css
@import url("https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap");
--font-display: Outfit, Montserrat, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
--font-body: Onest, Montserrat, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
```

Montserrat is the fallback when Outfit and Onest are not available. It sits next in each stack and is not loaded from Google Fonts. No component names a font directly. Everything reads the two tokens.

## Weights and sizes

| Style | Size / line | Face | Light | Dark |
| --- | --- | --- | --- | --- |
| h1 | 32/40 | Outfit | 600 | 600 |
| h2 | 24/30 | Outfit | 600 | 600 |
| h3 | 18/24 | Outfit | 600 | 600 |
| title | 18/24 | Outfit | 600 | 600 |
| stat-xl, stat-l | 120/116, 52/52 | Outfit | 600 | 600 |
| hero, hero-mobile | 40/50, 32/38 | Outfit | 500 | 500 |
| stat-m | 36/40 | Outfit | 500 | 500 |
| text1 | 16/22 | Onest | 400 | **500** |
| text2 | 14/20 | Onest | 400 | **500** |
| text3 | 12/16 | Onest | 400 | **500** |
| body | 15/23 | Onest | 400 | **500** |
| prompt | 17/24 | Onest | 400 | **500** |
| caption | 12/16 | Onest | 400 | **500** |
| body-strong, label | 14/20, 12/16 | Onest | 700 | 700 |

- The Vibe screen text styles (text1 to text3) move to the **body** face. They were on the display face.
- Nothing that carries information under 13px. 12px for secondary captions only. Text inputs are 16px (iPhones zoom below that). Line height 1.5 for body.
- Sizes in rem so the person's text size setting works. Touch targets 44px on phones.
- Whether body-strong and label stay at 700 or move to 600 is not decided. Keep 700 and raise it as a question.

## Readable text colours

| Token | Sunrise | Deep Eco | Twilight | Replaces |
| --- | --- | --- | --- | --- |
| ink | `#081a1c` | `#eef4f3` | `#eef4f3` | dark `#ffffff` |
| ink-muted | `#3e4d50` | `rgba(238,244,243,0.86)` | `rgba(238,244,243,0.86)` | Sunrise `#5a6668`; dark `rgba(255,255,255,0.62)` or the Hub's `#b9b8bc` |
| ink-disabled | `rgba(8,26,28,0.4)` | `rgba(255,255,255,0.4)` | `rgba(255,255,255,0.4)` | unchanged; disabled controls only, never information |

One secondary level only. No 62% and no 40% for content. Soft white, not pure white, on near-black.

## Glows at 15%

- From my earlier read (verify before editing): `app/src/lofty-ui/surfaces.css` draws the night grounds with 36 to 47% glows and glass at 5 to 8% white. Cap every glow disc at **15% opacity or less** in all three themes.
- From the same read: `app/src/design-system/tokens/dark.css` has muted text `#b9b8bc`, disabled at 0.4 and a control edge `#807f74`. Replace the muted value with the table above. Keep the control edge at 3:1 or better on the ground.
- Informational text never uses the 40% tint. Use ink or ink-muted.

## Acceptance

Worst case is the centre of the brightest glow behind the glass card, computed from the token values. AA needs 4.5:1. Expected after the change:

| Theme | Ink | Muted |
| --- | --- | --- |
| Sunrise | 17.1:1 | 8.5:1 |
| Deep Eco | 10.2:1 | 8.0:1 |
| Twilight | 10.8:1 | 8.5:1 |

Before the change Deep Eco muted text was 4.0:1 and failed. Run the Hub's own checks and report the real figures from the Hub's tokens, not mine:

```bash
cd app && npm run lint && npm run typecheck && npm run build && npm run check
cd app && npm run check:design
cd app && npm run check:browser   # a screen's layout changed
```

Also check, in Chromium at 390px wide in Deep Eco and Twilight, a table, a form and a side panel at 13px body, and confirm the text is Onest at 500 and headings are Outfit at 600. Screenshots in the pull request.

## Rules that still bind

- No component imports the Supabase client or seed data. Use the repository layer.
- Use the component that exists (`SectionHead`, `SidePanel`, `Toolbar`, `SortableTable`). Do not invent a control.
- Every commit carries a `Changelog:` trailer. After merge to `main`, run `node scripts/changelog.mjs --sync`.
- Never edit a generated file by hand. A pull request opens ready for review, not as a draft.
- Do not set the Claude AI profile address as your git author.
- Update `docs/ui-system/` for the font and colour change, not `HANDOFF.md`. Record anything open as a register row.

## Open for Amber (raise as register rows, one at a time)

1. Body-strong and label: 700 or 600.
2. Whether text-heavy tables and forms sit on opaque cards (Deep Eco muted 11.9:1, Twilight 13.0:1) instead of glass. Amber has not decided; Momentum already says body text sits on a solid surface.
3. Fieldwork Geo web licence for hub.lofty.au (G-23, TipoType). Not needed while Fieldwork is not shipped.

Source of the numbers: the Lofty Font Lab in `loftysupport/loftybrand`, `momentum/font-lab/SETUP.md` and `README.md`.
