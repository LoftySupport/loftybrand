<!-- momentum/components/PromptBox.md : Momentum component rules, from the Lofty Momentum artifact (components/PromptBox/README.md). 5 October 2026. -->
# PromptBox

The hero of every landing screen: one large box to ask or instruct.

- 720px wide on desktop landing, a single-line docked version (64px) under a conversation, a single-line bar on phones (`radius-l`).
- `surface-input` fill, `line-control` edge, `radius-l` (16px), `shadow-float`, backdrop blur `blur-input`.
- Placeholder in `prompt` style: "Ask about any job, or tell Lofty what to do".
- Tool chips bottom left (Attach, job picker, Search records) as ghost pills (chips keep the pill); voice and send bottom right as 40px `radius-s` icon buttons. Send is the one orange action.
