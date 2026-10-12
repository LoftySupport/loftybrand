<!-- momentum/components/HubToast.md : the Hub's built component, documented from the running app and its source. 12 October 2026. -->
# Toast

Built in the Lofty Hub (`@lofty/ui`) on Vibe, themed by Momentum's tokens. Pictures: `guidelines/hub-toast.html`. Source: `app/src/lofty-ui/components/Toast.tsx` in LoftySupport/loftyprojectapp.

- One toast at a time (C36). Tones are `positive`, `normal` and `warning`; `useToasts()` shows one, `ToastsProvider` holds it.
- It hides after 5 seconds, or 8 seconds when it carries an Undo (`undo` option).
- Wording follows the house rules: it says what happened and what to do next, with no exclamation marks.
