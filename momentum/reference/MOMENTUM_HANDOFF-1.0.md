<!-- momentum/reference/MOMENTUM_HANDOFF-1.0.md : the Lofty Momentum 1.4 build handoff as written on 25 September 2026, copied from the claude.ai/design project "Lofty Momentum" (docs/MOMENTUM_HANDOFF.md) on 6 October 2026. A dated record. The current handoff is ../HANDOFF.md and the artifact's Handoff section (2.0, 5 October 2026). Where this file says Figtree, white ink, Flint or two themes, the consolidation has since decided otherwise: see ../CONSOLIDATION.md. -->

# Lofty Momentum: UI build handoff

**Ask:** build the Lofty Project app's interface in the Lofty Momentum style, one layer at a time: tokens, then the shell, then components, then screens. Each step below has checks that must pass before you start the next one.

| | |
|---|---|
| Handoff version | 1.0, 25 September 2026 |
| Design system | Lofty Momentum 1.4 (concept) |
| Owner | Amber, AI & Automations and Systems Lead |
| Status | Concept. Build behind a theme flag until Amber confirms the switch (see "Before you start") |

## Sources, in order of authority

1. **Design system (the rules):** Lofty Momentum on claude.ai, `project/README.md` and each `components/<Name>/README.md`. Read the component README before you build that component.
2. **Claude Design project (files to copy):** "Lofty Momentum" design-system project, the same content laid out as files:
   - `styles.css` and `tokens/*.css` hold the tokens as CSS variables.
   - `assets/` holds the fonts, logos, arrows and rail icons.
   - `guidelines/*.html` holds one card per component.
   - `docs/components/*.md` holds the rules for each component.
   - `docs/MOMENTUM_HANDOFF.md` is this file.
3. **Presentation (the behaviour):** "Lofty Momentum" presentation artifact, also at `projects/lofty-momentum-presentation/index.html` in Claude Design. It is a clickable prototype of every screen in Sunrise, Deep Eco and Twilight, with sample data.

Rules win over pictures. If a card or the presentation disagrees with a README, the README is right. Log the mismatch in `HANDOFF.md`.

## Before you start

- **Check the repo's stack first.** Record the framework, styling approach and any existing component library in `CLAUDE.md` before writing UI code. This handoff assumes React on Vercel with Supabase, but it has not been checked against the repo.
- **Existing design system conflict (flag to Amber):** Lofty's App Design System is still the production source of truth, and Momentum is a concept. Build Momentum behind a theme flag, or on a branch, until Amber confirms the switch. If the repo already uses another component library, such as monday.com Vibe, map the Momentum tokens onto its theming. Don't run two systems side by side.
- **Don't port the prototype's markup.** The presentation screens were generated as flat HTML with inline styles and sample data. Use them to see layout and behaviour, then build real components from tokens.
- **Treat all sample content as sample.** Job numbers, names, figures and dates in the mockups are invented for the concept. Never seed them into a database as real records.

## Step 1: tokens and themes

- Copy `styles.css` and `tokens/` from Claude Design into the app's global styles. Every colour, space, radius, shadow and blur comes from these variables. No raw hex values in components.
- Themes sit on the root element:
  - Sunrise (light) on `:root`;
  - Deep Eco on `[data-theme="eco"]`;
  - Twilight on `[data-theme="twilight"]`.
- Build with the semantic tokens that switch with the theme: `page`, `ink`, `ink-muted`, `surface-frame`, `surface-panel`, `surface-card`, `surface-input`, `surface-selected`, `surface-solid`, `edge-glass`, `line`, `line-control`, `glow-1` to `glow-3`, `action`, `on-action`, `ai-surface`, `plum-lift`.
- Fonts:
  - App UI: Montserrat for display and numbers, Figtree for body, both from Google Fonts.
  - Decks, print and brand-led heroes only: Fieldwork Geo and Fieldwork Hum, as `.woff` from `assets/fonts`.
- Type styles come from `tokens/typography.css` (`--type-hero`, `--type-body`, `--type-stat-xl` and the rest).
- Spacing uses `space-4` to `space-48`. Radius runs `radius-s` 8, `radius-m` 12, `radius-l` 20, `radius-xl` 24, `radius-frame` 28, and `radius-pill` for buttons and chips.

**Checks before step 2:**

- Swapping `data-theme` on the root restyles a test page completely, with no hard-coded colours left.
- Text contrast is 4.5:1 or better in all three themes: `ink` and `ink-muted` on `page`, `surface-card` and `surface-solid`.

## Colour rules that code must enforce

| Rule | Why |
|---|---|
| Text on Crisp Orange is Deep Eco (`on-action`), never white. | White on orange is 2.6:1 and fails. |
| Orange is never body text on white. Use `orange-pressed` for orange links or icons on white. | Contrast |
| Current (`current`) is never text on white. Use it for fills, lines and glows only. | 3.4:1 |
| One filled orange action per area. | Orange is the action colour. |
| Plum (`ai-surface`) marks what the AI owns, and is never a page ground. | Keeps AI entry points recognisable. |
| Status colours mean state only, and always come with the StatusIcon shape and a word. | Colour-blind safe |
| Charts use `series-1` to `series-5` in fixed order, and never brand or status colours. | ReportColours |
| Watch lists and summary tiles sit on white `surface-card`, never orange or dark fills. | Version 1.4 decision |

## Step 2: app shell

Build these first. Every staff screen sits inside them.

- **AppFrame:**
  - `page` ground with three blurred glow discs (`blur-glow` 140px). Never a straight top-to-bottom gradient.
  - One frosted frame inset `space-20`, using `surface-frame`, `edge-glass`, `radius-frame` and `blur-frame`.
- **AppRail:** 224px full, 64px condensed. It holds:
  - the logo;
  - Ask Lofty (a ghost pill with the orange arrows; in the condensed rail, a 40px plum tile at radius 14);
  - search;
  - My work (Inbox, Tasks);
  - Pinned;
  - the destinations Projects, Jobs, Maintenance, Reports, Contacts, Tools;
  - Settings, Admin and the signed-in person at the foot.

  The current destination is a lifted fill, never orange.
- **Your day panel (GlanceCard):** 280px on the right, with Schedule, Tasks and Activity tabs.
- **PromptBox:** solid `surface-input`, `line-control` edge and `shadow-float`. It is the only surface that floats. There are three variants: hero, docked and mobile.
- **Layout widths:** desktop reference is 1440px. Phone is 390px, with a day summary pill, the question, 2 × 2 quick starts and a voice-first prompt bar.

**Checks before step 3:**

- The rail collapses and expands.
- Every icon-only control has an accessible label and a tooltip.
- Touch targets are 40px or more on desktop and 44px or more on phones.

## Step 3: components

Build in this order. Each one has a README and a card in the design system.

| # | Component | Main rules |
|---|---|---|
| 1 | Button | Primary (orange, Deep Eco text), accent, ghost. Pills. Labels are verbs that name the object: "Chase engineer". |
| 2 | StatusIcon | On track (circle), At risk (triangle), Overdue (octagon), plus Complete and Not started. Graded chips: quiet, louder, solid. |
| 3 | ChatBubble | Your message in a quiet bubble on the right. Lofty's reply has no bubble: a plum tile with the arrows, then body text. |
| 4 | AnswerWidget | One sentence, then ring, figure and risk tiles, then the action button. |
| 5 | StarterCard | Phone quick starts only, four per role, one accent each. |
| 6 | GlanceCard | Your day panel content. |
| 7 | LandingQuestion | Mark on the left, a question from the bank of 12 beside it, the prompt docked low. |
| 8 | TaskPlanner | My tasks with the calendar and task lanes side by side (spec below). |
| 9 | Charts | Stacked bar, donut, line and grouped bar from ReportColours and ReportExamples. |

**Every component needs these states:**

- default, hover, focus-visible, pressed, disabled, loading, selected (where it applies);
- for any data region: loading, empty (first use, no results, all done), error (what happened, why, how to fix, with an action), and loaded.

## Step 4: screens

The presentation has all of these. Build in this order:

| # | Screen | Notes |
|---|---|---|
| 1 | Ask Lofty landing | LandingQuestion, with the Your day panel on the right. |
| 2 | Conversation | Answers stack from the bottom; prompt docked; Jobs and the linked chat highlighted in the rail. |
| 3 | My tasks | TaskPlanner. |
| 4 | Projects board | Cards open the job drawer. |
| 5 | Jobs table | Rows open the job drawer. |
| 6 | Job drawer, then full job record | "Open full record" goes from drawer to record. |
| 7 | Site calendar and Programme (Gantt) | Progress fills left to right. |
| 8 | Reports, then Reports › Budget | Series colours only in charts. Status only on chips. |
| 9 | Homeowner portal: home, handover files, contact | Photo-led, smoky glass over the home's photo, no AI. |

The CRM screens use no photos. Glass, solid cards and glows carry the look.

## Behaviour specs

### Landing question

- The bank holds 12 questions (listed in LandingQuestion). Show a random one on each visit.
- "Another question" moves to the next one and wraps after 12. Show "Question n of 12".
- Never auto-rotate while the page is open.
- Store the bank as data, such as a Supabase table or a config file, so it can grow without a deploy.

### My tasks (TaskPlanner)

- **Timeline:** 7am to 6pm at 46px per hour. Drops snap to 15 minutes. Durations come from the task.
- **Lanes:**
  - Calendar · Outlook: read-only events, with an Eco Green marker.
  - Tasks: booked blocks, with a Current marker.
- **Dragging:**
  - While dragging, a dashed ghost shows where the block will land.
  - Dropping creates a block showing title, time and job, with an × to unschedule.
  - Blocks can be dragged to a new time.
- **Capacity bar:** "planned today" and "available" update on every book, move or unschedule.
- **Now line:** Crisp Orange with a dot.
- **Keyboard:** every drag needs a keyboard equivalent. Give each card a "Schedule" action that opens a time picker.
- **Data (inference, confirm with Amber):** calendar events would come from Outlook through Microsoft Graph. Lofty writes only its own task blocks. Whether blocks also write back to Outlook is an open decision.

### Motion

- New answers and widgets slide in 8px from the left over 150ms.
- Progress fills animate forward once on load.
- Show the AI working within 300ms: the arrows mark pulses.
- Nothing bounces. All motion stops under `prefers-reduced-motion`.

## Content rules for UI copy

- Australian English: organise, colour, utilisation.
- Sentence case everywhere.
- Second person, active voice. The product never says "I"; only the AI does, in conversation.
- Buttons are verbs with the object: "Prep me", "Hold the pour".
- Numbers are concrete: "3 days waiting", "-4 days".
- No emoji, no exclamation marks, no em dashes.
- Errors say what happened, why, and how to fix it, with an action button.

## Brand assets

- **Logos:**
  - Orange lockup at 24px high in the rail on light grounds, white lockup on dark.
  - The condensed rail uses the favicon arrows (`lofty-mark-transparent.png`) at 32px.
  - Phones use the square orange app icon.
- **AI mark:** the Lofty arrows in orange on a plum tile. Never the old four-point spark. Never redraw the arrows as chevrons, and never put them in a white circle.
- **Icons:** render as a CSS mask over `currentColor`, so they take the colour of their context.

## Out of scope for now

- **Website pages:** parked on 25 September 2026. They restart from screenshots of the current site.
- **Link Capital screens:** not designed yet.
- **Starter card sets per role, and whether landing questions vary by role:** open decisions.

## Open decisions (ask Amber, don't guess)

- Default dark theme (Deep Eco or Twilight), or a per-person choice saved to their profile.
- When the condensed rail shows by default, and whether it remembers each person's choice.
- Whether the Your day panel opens on Schedule or on the last tab used.
- Whether both side panels show by default at laptop width.
- Whether the homeowner portal follows dark mode or stays photo-led.
- Whether My tasks writes back to Outlook, and when the Week view is added.
- Real icons for Tools and Dashboard.

## Definition of done for each screen

- Matches the presentation in Sunrise, Deep Eco and Twilight.
- Uses tokens only. Run a style inventory, such as grep for raw hex values, and expect none outside `tokens/`.
- Passes WCAG 2.2 AA:
  - contrast 4.5:1 for text and 3:1 for icons, control edges and focus rings;
  - full keyboard path with a visible focus;
  - labels on icon-only controls.
- Works at 390px, 1440px and 200% text zoom.
- Every data region handles loading, empty and error states.
- `README.md`, `HANDOFF.md` and `CLAUDE.md` are updated with the change, the date and the version.

## Change log

- 1.0, 25 September 2026: first handoff, from design system 1.4 and presentation version 13.
