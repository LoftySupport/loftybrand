# Work app UI kit

A click-through recreation of the Lofty work app: monday.com Vibe layout and interaction patterns, re-skinned to the Lofty brand palette (Crisp Orange primary, white shell with Mid Gray rules, Foundation Black brand panels).

## Screens
| File | Screen | Built from |
| --- | --- | --- |
| `LoginScreen.jsx` | Sign in — split brand panel + form | Vibe TextField / Button / Checkbox styles; Lofty logo + mark |
| `AppShell.jsx` | Top bar + side navigation | Vibe layout tokens, Search, Avatar, IconButton |
| `BoardScreen.jsx` | Jobs: table / timeline / map tabs, new-job dialog, toast | Vibe Table, Tabs, Dialog, Toast, AttentionBox, Label, Chips |
| `DashboardScreen.jsx` | Delivery dashboard: stats, bar chart, utilisation, crew table | Vibe Table + brand data-viz ramp |

## Try it
Open `index.html`. Sign in with any email containing "@", switch nav items (Jobs / Dashboards), switch tabs, create a job, dismiss the toast, click the avatar to sign out.

## Deliberate gaps
Map view is left blank with a note: no map surface exists in the supplied source material. Nothing in this kit is invented Lofty product design — layout and behaviour come from Vibe, brand comes from the Lofty brand kit.
