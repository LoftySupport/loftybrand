<!-- momentum/components/TaskPlanner.md : Momentum component rules, from the Lofty Momentum Consolidated artifact (components/TaskPlanner/README.md). 5 October 2026. -->
# TaskPlanner

My tasks: people see their tasks and their actual calendar together, and drag tasks onto the day to book time for them.

- **Header:** "My tasks" with Today, This week and Delegated counts; Day, Week, Board and List views; Filter and Sort; notifications; "New task" (the screen's one orange action).
- **Left column (about 40%):**
  - Capacity bar: "3h 45m planned today" and "7h 30m available", Current fill on a `line` track.
  - Add box: "Add a task, then press Enter", with "Plan my day" beside it (plum tile style, arrows mark, the AI owns it).
  - To schedule: filter chips (All, Jobs, Admin, Mine only) with counts, then task cards.
  - Task card: drag handle, round checkbox, title (Montserrat 700, 15px), job chip, duration, due date, subtask count and list. Status chips only for At risk and Overdue, with their icons (StatusIcon).
  - Done today: collapsed list, struck through.
- **Right column: the day.**
  - Title "Thursday 24 September" with counts, previous, Today and next.
  - All-day row for events without a time.
  - Two lanes side by side: **Calendar · Outlook** (read-only events, Eco Green dot) and **Tasks** (booked task blocks, Current dot).
  - 7am to 6pm at 46px per hour, hour lines in `line`. The now line is Crisp Orange with a dot.
  - Drop: tasks snap to 15 minutes, with a dashed ghost at the drop point. A block shows title, time and job, with an x to unschedule. Blocks can be dragged to a new time.
  - Planned hours and the booked count update as tasks are booked or removed.
- **AI strip** above the docked prompt: one sentence about free time, then "Plan my afternoon".
- **Keyboard:** every drag has an equivalent: a "Schedule" action on the card that opens a time picker.
- Calendar data comes from Outlook (Microsoft Graph); only task blocks are written by Lofty. Open decisions: whether booked blocks also write back to Outlook, and a Week view.
