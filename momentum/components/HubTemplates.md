<!-- momentum/components/HubTemplates.md : the Hub's page templates, from the running app and its source. 12 October 2026. -->
# Page templates

Every page in the Hub is a template. A page passes content to slots and sets no height, spacing, type or colour (`docs/ui-system/PATTERNS.md` section 2, `LAYOUTS.md` in LoftySupport/loftyprojectapp). Pictures: `guidelines/template-*.html`, from `/design-system/preview/<template>`.

| Template | Layout | Use |
| --- | --- | --- |
| `IndexPage` | Index page | Layouts 1 and 2: header, content and an overlay drawer that can expand. The default for every list. |
| `RecordPage` | Record page | Layout 3: header block, double navigation, two columns and a sidebar. Record mode. |
| `RecordPage` | Record page, Gantt | Layout 3 in Gantt mode: the same frame with the programme as the main column. |
| `PlainPage` | Plain page | Layout 4: header and content, no tools area. Reports, Tools landing, privacy. |
| `OutsidePage` | Outside page | Layout 5: no navigation, content centred, footer only. Sign-in and other pages outside the app. |
| `DockedPage` | Docked page | Layout 6: the drawer docks beside the content instead of covering it. |
| `SettingsPage` | Settings page | Layout 7: a list on the left, the selected group's options docked on the right. Details parked. |

- Slots on the header: `title`, `actions`, `primaryTabs`, `subTabs`, `subBar` (the views row), `secondaryNav` (toolbar and filters) and a `headerVariant` of black, plain or none.
- Page header 64, filters row 36, footer 40, navigation 224 or 72, drawer 480 (440 on tablet), drawer header 64 and footer 72 (C26, C27).
- Breakpoints are `data-bp`: phone under 600, tablet 600 to 899, desktop 900 to 1439, wide 1440 and up. A component that needs its own width uses `@container page`.
- A new page is an index page (`npm run new:page`) or reuses a template as it is; no new layout, template or styling without Amber's approval (11 October 2026).
Source: `app/src/lofty-ui/templates/index.tsx`, `primitives/index.tsx` in LoftySupport/loftyprojectapp.
