<!-- momentum/components/HubModalAndStates.md : the Hub's built component, documented from the running app and its source. 12 October 2026. -->
# Modal and states

Built in the Lofty Hub (`@lofty/ui`) on Vibe, themed by Momentum's tokens. Pictures: `guidelines/hub-modal-states.html`. Source: `app/src/lofty-ui/components/index.tsx (`Modal`, `Skeleton`, `Spinner`, `EmptyState`)` in LoftySupport/loftyprojectapp.

- **Modal** sizes are `s` 460, `m` 540 and `l` 800px (C28). Vibe's modal traps focus, closes on Escape and returns focus. A footer slot holds the actions.
- **Skeleton** is a 20px line with `radius-xs` on a neutral fill; **Spinner** is the other loading mark. Every data region needs loading, empty and error states.
- **EmptyState** is a title (18px at 500), one sentence (14px, at most 48 characters wide) and an optional action that says what to do next.
