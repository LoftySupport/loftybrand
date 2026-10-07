<!-- momentum/components/LandingQuestion.md : Momentum component rules, from the Lofty Momentum Consolidated artifact (components/LandingQuestion/README.md). 5 October 2026. -->
# LandingQuestion

The Ask Lofty landing, version 2 (25 September 2026). The AI mark sits on the left with a question from a bank of twelve beside it. This replaces the centred mark and the fixed "What should we move forward today?" headline.

- **Hero:** left-aligned. Plum tile 68px with the orange Lofty arrows (`plum-lift` on Twilight). Greeting in `ink-muted`, then the question in Montserrat 500 at 40/50, tracking -1.2px, two lines at most, max width 760px.
- **Controls under the question:** "Question n of 12" in `ink-muted`, and a ghost button (`radius-s`) "Another question" that moves to the next question and wraps at twelve.
- **Rotation:** a random question on each visit. Never auto-rotate while the page is open.
- **Prompt box:** docked at the foot of the main column, full column width. Placeholder "Ask about any job, or tell Lofty what to do". Chips: Attach, Any job, Search records. Voice, then the orange send (the page's one orange action).
- **Your day panel** stays on the right (GlanceCard).
- Questions are written in the brand tone: collaborative, positive, pointing at the next action. One question, no exclamation marks.

## Question bank

1. Which job is one phone call away from moving?
2. What is the one blocker that would free up three jobs?
3. Who has been waiting on us the longest?
4. Which site needs you in person today?
5. What would make this week’s handovers easy?
6. Every job moves when someone owns the next step. Which one is yours?
7. A pour booked is a promise kept. What else can we lock in today?
8. Small moves every day beat a big push on Friday. Where do we start?
9. Which homeowner would love an update right now?
10. What did we learn on the last handover that we can use on the next?
11. Which trade is ready early, and where can they help?
12. What is due this week that nobody has touched yet?

Open decision: whether questions vary by role (site supervisor, sales, Link Capital), and who owns adding new ones.
