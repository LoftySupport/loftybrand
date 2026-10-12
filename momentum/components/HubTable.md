<!-- momentum/components/HubTable.md : the Hub's built component, documented from the running app and its source. 12 October 2026. -->
# Table

Built in the Lofty Hub (`@lofty/ui`) on Vibe, themed by Momentum's tokens. Pictures: `guidelines/hub-table.html`. Source: `app/src/lofty-ui/components/Table.tsx, RowMenu.tsx` in LoftySupport/loftyprojectapp.

- **Table** with **SortHeader**, `useTableSort` and **RowMenu**: sortable and resizable columns, a 32px row menu, and a phone form below 720px.
- Measured live in Sunrise: header 40px, 12px at weight 500 in `#3e4d50` on `#f8f8f8`; body cells 14px at weight 400; rows 49px.
- Open: the rule is rows 44 and header 36 (C25), the page's own title says header 40 and rows 36 (44 on touch), and the rendered rows are 49px (Hub `BRAND_CHECK.md` F27).
- In the Hub a table stays on glass, not a solid card (0lh).
