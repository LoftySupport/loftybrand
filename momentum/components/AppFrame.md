<!-- momentum/components/AppFrame.md : Momentum component rules, from the Lofty Momentum artifact (components/AppFrame/README.md). 5 October 2026. -->
# AppFrame

The glass shell every screen sits in.

- Page: `page` ground with three glow discs (`glow-1` top right, `glow-2` bottom left, `glow-3` centre) blurred by `blur-glow`.
- Frame: inset 12px (`space-12`; measured in the live Hub, 12 October 2026), `surface-frame`, `edge-glass`, `radius-frame` (28px), backdrop blur `blur-frame`, 16px padding and gaps. The three glow discs behind it sit at 15% opacity or less.
- Inside, left to right: 56px icon rail, 248px chat history, main column, 280px glance panel. Both side panels can collapse.
