<!-- momentum/components/HubFloatingPanel.md : the Hub's built component, documented from the running app and its source. 12 October 2026. -->
# Floating panel

Built in the Lofty Hub (`@lofty/ui`) on Vibe, themed by Momentum's tokens. Pictures: `guidelines/hub-floating-panel.html`. Source: `app/src/components/FloatingPanel.tsx` in LoftySupport/loftyprojectapp.

- **FloatingPanel** floats over the Hub and stays while you keep working behind it (Amber, 8 October 2026, 0nc; the email composer pops out as one).
- It opens at the bottom right (24px from each edge), is 600px wide by default, moves by its title bar and folds to the title bar. It is not a dialog: nothing behind it is blocked.
