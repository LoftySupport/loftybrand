<!-- momentum/components/HubViews.md : the Hub's built component, documented from the running app and its source. 12 October 2026. -->
# Views and toolbar

Built in the Lofty Hub (`@lofty/ui`) on Vibe, themed by Momentum's tokens. Pictures: `guidelines/hub-views.html`. Source: `app/src/lofty-ui/toolbar/*.tsx, app/src/components/SavedViewTabs.tsx` in LoftySupport/loftyprojectapp.

- The **Toolbar** is one row of pills; **ViewSwitch** is Table, Board, Gantt and Calendar as one segmented control; **Segmented** is the same control for any small set; **ToolbarMenu** is a toolbar button that opens a small panel (Filter, Advanced filter); **DateRange** picks a period; **ViewTabs** show the views.
- **SavedViewTabs** (in `app/src/components`) show a person's saved views; a built-in view can be closed and comes back from the views menu.
- Filters, view and sort live in the query string, with defaults absent.
