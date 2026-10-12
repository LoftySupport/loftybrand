<!-- momentum/components/HubDetachDelete.md : the Hub's built component, documented from the running app and its source. 12 October 2026. -->
# Detach and Delete

Built in the Lofty Hub (`@lofty/ui`) on Vibe, themed by Momentum's tokens. Pictures: `guidelines/hub-detach-delete.html`. Source: `app/src/lofty-ui/components/index.tsx (`ConfirmDelete`, `DeleteButton`, `DetachButton`, `NotSet`)` in LoftySupport/loftyprojectapp.

- **Delete** opens a modal with Cancel, "Detach X from Y" and "Yes, permanently delete X" (C38). Delete uses the bin icon, **Detach** the broken-link icon (C37). "Remove" is retired.
- Delete asks only when something saved goes (`DeleteButton`); a line still being written deletes straight away. Detach (`DetachButton`) never asks. Clearing a filter or a notification is **Clear** (0nk).
- An empty value is a blank cell, never a dash; a visually hidden "Not set" names it for a screen reader (`NotSet`, 0nf).
