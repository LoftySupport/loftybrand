<!-- momentum/components/HubFields.md : the Hub's built component, documented from the running app and its source. 12 October 2026. -->
# Fields

Built in the Lofty Hub (`@lofty/ui`) on Vibe, themed by Momentum's tokens. Pictures: `guidelines/hub-fields.html`. Source: `app/src/lofty-ui/components/fields.tsx, Select.tsx` in LoftySupport/loftyprojectapp.

- **Field** puts a label beside or over a control; **FieldsAcross** lays several in a row; **Problem** and **Result** carry the message under it.
- Measured live: text inputs and selects are 32px high with `radius-xs` (4px), 14px at weight 400 and a 1px `line-control` edge (`#8a898d`); a textarea has the same edge and radius.
- **Select** and **MultiSelect** are Vibe's Dropdown narrowed to a plain `{ value, label }` list. **Toggle** (a small switch with no On and Off words) and **Radio** are in `components/index.tsx`. The tap area is 44px (C22).
