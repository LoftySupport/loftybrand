# momentum/scripts/gen-tokens.py : the one source of values for momentum/tokens.json (also the artifact's) and momentum/tokens/colors, typography, spacing, radius, shadows, motion, layers and backgrounds .css.
# Run from the repository root: python3 momentum/scripts/gen-tokens.py momentum/tokens.json momentum/tokens
# fonts.css, base.css and vibe-theme.css are written by hand and are not touched. Edit the values here, never the generated files.
import json, sys, os
OUT_JSON = sys.argv[1]; OUT_CSS = sys.argv[2]
THEMES = [("light","Sunrise"),("eco","Deep Eco"),("twilight","Twilight")]
T = lambda l,e,t: {"light":l,"eco":e,"twilight":t}

# tier, name, value, usage
COLORS = [
 # Brand kit and Momentum palette (primitives)
 ("brand","crisp-orange","#f47e63","Core brand colour and the primary colour for interactive elements (Amber, 5 October 2026, C07). Always Deep Eco ink on it, 6.8:1; white on it is 2.6:1 and fails. Never body text on white."),
 ("brand","orange-hover","#d9634a","Hover step of orange fills (App Design System value). 3.6:1 on white, so only behind large or bold labels."),
 ("brand","orange-pressed","#c2543c","Pressed state of orange fills, link hover, and orange-toned icons or links on light surfaces (4.5:1 on white, 4.1:1 on Shell)."),
 ("brand","deep-eco","#081a1c","Near-black. All text on light surfaces and the ink on orange and Current. White on it 17:1."),
 ("brand","plum","#32021f","Accent: the AI mark, AI-led tiles and feature cards. Never a page ground. White on it 18:1, orange on it 6.9:1."),
 ("brand","eco-green","#005058","Accent: Next up and schedule cards, secondary filled surfaces, the Complete status. White on it 9.2:1."),
 ("brand","current","#009ba3","Movement: background glows, trend lines, progress fills, the Log a site visit tile. Deep Eco ink on it; white only for icons or 24px+ type (3.4:1). Never text on white."),
 ("brand","shell","#fcf1ee","Warm light surface and the Sunrise page ground under the orange glows. Also brand and print."),
 ("brand","blush","#fad1c7","Soft fills: avatars, quiet chart bars. Deep Eco ink on it."),
 ("brand","sky","#adfbff","Highlights on dark: eyebrow text on Eco Green, glow on light pages, avatars. Deep Eco ink on it."),
 ("brand","eco-night","#020a0b","Deep Eco dark page ground: near-black with a green cast. White on it 20:1."),
 ("brand","twilight","#070105","Twilight dark page ground: near-black with a plum cast. White on it 20:1."),
 ("brand","foundation-black","#414042","Brand kit primary and the App Design System's former text colour. Only the black lockup carries it now: text ink is Deep Eco on every surface, the Hub, the portal and documents included (Amber, 5 October 2026)."),
 ("brand","finisher-white","#ffffff","Brand kit. Solid cards and the prompt box in Sunrise; the white lockup and mark on dark grounds."),
 ("brand","mid-gray","#d1d3d4","Brand kit. Logo and print only. Never a UI border or fill (App Design System rule, kept)."),
 ("brand","plum-lift",T("{plum}","{plum}","#4a0c32"),"Plum for blocks and tiles on the page. Plum holds on eco-night; on twilight it disappears, so it lifts to #4A0C32. White on it 15:1."),
 # Semantic: grounds and ink
 ("semantic","page",T("{shell}","{eco-night}","{twilight}"),"The page ground under the glass frame: Shell in Sunrise, eco-night in Deep Eco, twilight in Twilight."),
 ("semantic","ink",T("{deep-eco}","#ffffff","#ffffff"),"Primary text and icons on page, glass and card surfaces. 16:1 on Shell, 20:1 on the dark pages."),
 ("semantic","ink-muted",T("#5a6668","rgba(255,255,255,0.62)","rgba(255,255,255,0.62)"),"Secondary text, captions, timestamps, placeholders. 5.4:1 on Shell, 5.9:1 on white, 4.8:1 on `surface-selected`; 7.8:1 on eco-night."),
 ("semantic","ink-disabled",T("rgba(8,26,28,0.4)","rgba(255,255,255,0.4)","rgba(255,255,255,0.4)"),"Disabled labels and controls: ink at 40%, the App Design System's disabled opacity. Exempt from the contrast floor, so never for content people must read. Confirmed by Amber, 5 October 2026."),
 ("semantic","surface-frame",T("rgba(255,255,255,0.42)","rgba(255,255,255,0.03)","rgba(255,255,255,0.03)"),"The frosted app frame that holds rail, panels and main area. Pair with blur-frame."),
 ("semantic","surface-panel",T("rgba(255,255,255,0.5)","rgba(255,255,255,0.04)","rgba(255,255,255,0.04)"),"Side panels: the AppRail, chat history and Your day."),
 ("semantic","surface-card",T("rgba(255,255,255,0.72)","rgba(255,255,255,0.05)","rgba(255,255,255,0.05)"),"Starter cards and answer widgets on the frame."),
 ("semantic","surface-input",T("#ffffff","rgba(255,255,255,0.06)","rgba(255,255,255,0.06)"),"The prompt box, search and form fields. Solid white in Sunrise so typing stays crisp."),
 ("semantic","surface-solid",T("#ffffff","#0a1b1d","#170710"),"Solid cards that must stand off the ground: kanban cards, widgets, tables, file lists, watch lists, modals."),
 ("semantic","surface-selected",T("#fae4d5","rgba(255,255,255,0.20)","rgba(255,255,255,0.20)"),"Selected row, nav item, tab or option: a peach tint on light, a white wash on dark, one token per theme (Amber, 5 October 2026, C11). Ink stays `ink`. Replaces Momentum's white and the App Design System's two values."),
 ("semantic","surface-selected-hover",T("#f6d3bf","rgba(255,255,255,0.28)","rgba(255,255,255,0.28)"),"Hover on a selected item (App Design System values for peach and the on-dark wash)."),
 ("semantic","surface-hover",T("rgba(8,26,28,0.08)","rgba(255,255,255,0.12)","rgba(255,255,255,0.12)"),"Neutral hover wash behind ghost buttons, icon buttons, menu and table rows. The App Design System rule with Deep Eco as the ink; white at 12% on dark. Confirmed by Amber, 5 October 2026."),
 ("semantic","edge-glass",T("rgba(255,255,255,0.85)","rgba(255,255,255,0.08)","rgba(255,255,255,0.08)"),"1px edge on frame, panels and cards so glass reads as a surface. Decorative: carries no meaning."),
 ("semantic","line",T("rgba(8,26,28,0.08)","rgba(255,255,255,0.08)","rgba(255,255,255,0.08)"),"Dividers inside panels, table rules, ring and tab tracks, recessed fills. Decorative: carries no meaning."),
 ("semantic","line-control","#8a898d","Control boundaries: inputs, ghost buttons, chips, the prompt box, one token in every theme (Amber, 5 October 2026, C10). 3.1:1 on Shell, 3.5:1 on white, 5.8:1 on eco-night, 5.1:1 on the dark solid card. 2.8:1 on `surface-selected` peach: a control inside a selected row takes `ink-muted` as its edge."),
 ("semantic","action","{crisp-orange}","Primary action fill: the one filled orange action per area."),
 ("semantic","action-hover","{orange-hover}","Hover on a filled action."),
 ("semantic","action-pressed","{orange-pressed}","Press on a filled action."),
 ("semantic","on-action","{deep-eco}","Text and icons on action fills (Amber, 5 October 2026, C08). Never white."),
 ("semantic","ai-surface","{plum}","The AI mark and AI-owned tiles. Never a page."),
 ("semantic","focus",T("#c2543c","#f47e63","#f47e63"),"Focus ring colour, drawn solid by `focus-ring`. 4.5:1 on white and 4.1:1 on Shell in Sunrise; 7.6:1 on eco-night. Replaces the App Design System's 50% orange ring, which measured 1.6:1 (C09: 3:1 on edges and icons). Confirmed by Amber, 5 October 2026."),
 ("semantic","backdrop",T("rgba(8,26,28,0.7)","rgba(0,0,0,0.7)","rgba(0,0,0,0.7)"),"Modal backdrop: the App Design System's 70% black, in Deep Eco on light. Confirmed by Amber, 5 October 2026."),
 ("semantic","glow-1",T("{crisp-orange}","{current}","#8e3a72"),"Large glow, top left in Sunrise: 1000px Crisp Orange disc at 15%. Top right in dark: Current (Deep Eco) or berry plum (Twilight) at 15%, 820px. Glow discs never exceed 15% opacity (Amber, 6 October 2026, from the 3 October feedback: little colour, low saturation)."),
 ("semantic","glow-2",T("{crisp-orange}","{crisp-orange}","{crisp-orange}"),"Warm glow, bottom right in Sunrise: 820px Crisp Orange disc at 15%. Bottom left in dark: 560px at 12%. Capped at 15% (Amber, 6 October 2026)."),
 ("semantic","glow-3",T("{current}","{eco-green}","{current}"),"Cool counterweight: a 700px Current disc at 12% top right in Sunrise; an Eco Green disc at 15% on the right in Deep Eco; a faint Current disc at 12% in Twilight. Capped at 15% (Amber, 6 October 2026). The eleven backgrounds in backgrounds.css keep their measured values."),
 # Status
 ("status","status-on-track",T("#00805f","#1f9e80","#1f9e80"),"On track. Circle with a tick. White glyph in light (4.9:1), Deep Eco glyph in dark (5.3:1). State only, never a chart series."),
 ("status","status-on-track-soft",T("rgba(0,128,95,0.12)","rgba(31,158,128,0.18)","rgba(31,158,128,0.18)"),"On track chip fill. Quietest of the three: tinted, no edge, `ink` label."),
 ("status","status-at-risk",T("#c28400","#bf8912","#bf8912"),"At risk. Triangle with an exclamation. White glyph in light (3.2:1, graphic only), Deep Eco glyph in dark (5.8:1). Replaces the App Design System's warning #ffcb00 (1.5:1 on white)."),
 ("status","status-at-risk-soft",T("#fdefc8","rgba(191,137,18,0.22)","rgba(191,137,18,0.22)"),"At risk chip fill, with status-at-risk-edge. Louder than On track."),
 ("status","status-at-risk-edge",T("rgba(194,132,0,0.55)","rgba(191,137,18,0.6)","rgba(191,137,18,0.6)"),"1px inset edge on the At risk chip."),
 ("status","status-overdue",T("#d83a52","#e85a6e","#e85a6e"),"Overdue. Octagon with a clock. White glyph in light (4.5:1), Deep Eco glyph in dark (5.2:1). The same red as the App Design System's negative."),
 ("status","status-overdue-fill","#d83a52","Overdue chip: solid fill with a white label and white octagon (4.5:1). Same in every theme, since white on the dark status-overdue is 3.4:1."),
 ("status","status-complete","{eco-green}","Complete: Eco Green circle with a tick (StatusIcon). Not started is a dashed `ink-muted` ring."),
 ("status","on-status",T("#ffffff","{deep-eco}","{deep-eco}"),"Glyph colour inside status icons."),
 # Series
 ("series","series-1","#009ba3","First chart series (Current). Fixed order, never cycled."),
 ("series","series-2","#e46c50","Second series: Crisp Orange deepened to clear 3:1 on white."),
 ("series","series-3",T("#8e3a72","#a8508a","#a8508a"),"Third series: plum lifted so it reads as a colour."),
 ("series","series-4",T("#ad8410","#b88c14","#b88c14"),"Fourth series: ochre."),
 ("series","series-5",T("#3f6fb0","#5a82d0","#5a82d0"),"Fifth series: slate blue."),
 ("series","series-other","{line-control}","A sixth category folds into Other in this neutral (ReportColours)."),
]

FONTS = [
 ("Fieldwork Geo","fonts/Fieldwork-Geo-Light.woff","300","normal"),
 ("Fieldwork Geo","fonts/Fieldwork-Geo-Demibold.woff","600","normal"),
 ("Fieldwork Hum","fonts/Fieldwork-Hum-Light.woff","300","normal"),
 ("Fieldwork Hum","fonts/Fieldwork-Hum-DemiBold.woff","600","normal"),
 ("Fieldwork","fonts/Fieldwork-ItalicLight.woff","300","italic"),
 ("Fieldwork","fonts/Fieldwork-ItalicDemiBold.woff","600","italic"),
]
# Outfit for headings and Onest for body (Amber, 7 October 2026, replacing Montserrat only, C04). Both from Google Fonts.
SYS_TAIL = 'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif'
FAMILIES = {
 "display": "Outfit, " + SYS_TAIL,
 "body": "Onest, " + SYS_TAIL,
 "brand": '"Fieldwork Geo", "Fieldwork", Outfit, Arial, sans-serif',
 "brand-body": '"Fieldwork Hum", "Fieldwork", Onest, Arial, sans-serif',
}
# name, size, lh, weight, ls, sample, usage
GROUPS = [
 ("Display","display",[
  ("hero","40px","50px",500,"-1.2px","Which job is one phone call away from moving?","The landing question, up to two lines (LandingQuestion)."),
  ("hero-mobile","32px","38px",500,"-1px","What do you need on site today?","Landing question on phones."),
  ("title","18px","24px",600,None,"Harbour Rise Lot 12","Thread, widget and panel titles."),
 ]),
 ("Numbers","display",[
  ("stat-xl","120px","116px",600,"-6px","68%","One hero figure per screen."),
  ("stat-l","52px","52px",600,"-2px","14","Tile figures."),
  ("stat-m","36px","40px",500,"-1px","12","Glance panel counts."),
 ]),
 ("Screen","display",[
  ("h1","32px","40px",600,"-0.5px","Jobs","Page titles. Vibe's scale, kept for the Hub (Amber, 4 October 2026, C01 and C03)."),
  ("h2","24px","30px",600,"-0.1px","Harbour Rise","Section titles."),
  ("h3","18px","24px",600,"-0.1px","Open variations","Card and dialog titles."),
 ]),
 ("Screen text","body",[
  ("text1","16px","22px",400,None,"Assign a crew before publishing the schedule.","Body copy in the Hub, in Onest. Weights 400, 500, 600 and 700 only (Amber, 5 October 2026, C05)."),
  ("text2","14px","20px",400,None,"Due Friday 9 October","Table cells, menu items, field values. 600 for emphasis."),
  ("text3","12px","16px",400,None,"Updated 2 h ago","Captions, counts and the smallest label. No type step below 12px."),
 ]),
 ("Text","body",[
  ("body","15px","23px",400,None,"68% built and 4 days behind plan.","AI answers and chat text."),
  ("prompt","17px","24px",400,None,"Ask about any job, or tell Lofty what to do","Text inside the prompt box."),
  ("body-strong","14px","20px",700,None,"Prep my next meeting","Card and row titles in chat surfaces."),
  ("caption","12px","16px",400,None,"Requested Mon 21 Sep","Supporting lines and timestamps, in ink-muted."),
  ("label","12px","16px",700,None,"Needs you","Section labels inside panels, sentence case."),
 ]),
 ("Brand","brand",[
  ("brand-display","48px","52px",600,"-0.01em","Every job, moving forward.","Decks, print and brand-led hero statements. Fieldwork Geo DemiBold."),
  ("brand-body","16px","24px",300,"-0.02em","Lofty Building Group, Adelaide.","Body copy on brand-led surfaces. Fieldwork Hum Light; the brand faces ship only in 300 and 600."),
 ]),
]
SPACING = [
 ("space-2","2px","Hairline offsets: the gap between a focus ring and its control, a dot and its label (App Design System)."),
 ("space-4","4px","Label to value."),
 ("space-8","8px","Between chips and adjacent controls."),
 ("space-12","12px","Between starter cards and inside compact rows."),
 ("space-16","16px","Frame padding, gap between rail and panels, card padding, compact tiles."),
 ("space-20","20px","Panel padding and frame inset from the page edge."),
 ("space-24","24px","Between stacked widgets; content card padding."),
 ("space-32","32px","Between the landing question, prompt box and starter row; page gutters."),
 ("space-40","40px","Control height on desktop; nav row height (App Design System)."),
 ("space-48","48px","Side padding of the conversation column; the largest button."),
 ("space-64","64px","Condensed rail width; section breaks on long pages (App Design System)."),
 ("space-80","80px","Hero and cover spacing on brand-led surfaces (App Design System)."),
]
RADIUS = [
 ("radius-xs","4px","Dense controls: checkboxes, menu items, small tags, table controls (the App Design System's `--border-radius-small`). Amber, 5 October 2026 (kept) and 6 October 2026 (the 3 October scale applies)."),
 ("radius-s","8px","Buttons, inputs, icon buttons (send, voice), segmented controls, status chips that are not pills. Amber, 6 October 2026: buttons are 8px, not pills."),
 ("radius-m","12px","Cards: starter cards, answer widgets, glance cards, chat bubbles; also rail rows and icon tiles. Amber, 6 October 2026."),
 ("radius-l","16px","Panels: the rail, the Your day panel, the prompt box, modals (Vibe's big radius). Amber, 6 October 2026; reinstates the 16px step dropped on 5 October."),
 ("radius-xl","24px","The frosted app frame; same value as `radius-frame`. Amber, 6 October 2026."),
 ("radius-frame","24px","The frosted app frame only (was 28px). Amber, 6 October 2026."),
 ("radius-pill","999px","Chips (tool chips, status chips, filter chips) and Search only. Never a button (Amber, 6 October 2026, from the 3 October feedback \"Momentum is too round\"). Toggles and progress tracks keep their natural pill shape."),
 ("radius-circle","50%","Avatars, radios, loaders, status circles (App Design System; kept by Amber, 5 October 2026)."),
]
SHADOWS = [
 ("shadow-xs",T("0 4px 6px -4px rgba(65,64,66,0.1)","0 4px 6px -4px rgba(0,0,0,0.4)","0 4px 6px -4px rgba(0,0,0,0.4)"),"Row hover lift (App Design System)."),
 ("shadow-s",T("0 4px 8px rgba(65,64,66,0.2)","0 4px 8px rgba(0,0,0,0.5)","0 4px 8px rgba(0,0,0,0.5)"),"Dropdowns and a board card on hover (App Design System)."),
 ("shadow-m",T("0 6px 20px rgba(65,64,66,0.2)","0 6px 20px rgba(0,0,0,0.55)","0 6px 20px rgba(0,0,0,0.55)"),"Menus, toasts and tooltips (App Design System)."),
 ("shadow-l",T("0 15px 50px rgba(65,64,66,0.3)","0 15px 50px rgba(0,0,0,0.7)","0 15px 50px rgba(0,0,0,0.7)"),"Modals (App Design System)."),
 ("shadow-float",T("0 24px 60px rgba(8,26,28,0.10)","0 24px 60px rgba(0,0,0,0.35)","0 24px 60px rgba(0,0,0,0.35)"),"The prompt box and anything that floats over glass."),
 ("shadow-ai","0 12px 32px rgba(50,2,31,0.35)","The plum AI mark on the landing page."),
 ("focus-ring",T("0 0 0 2px #ffffff, 0 0 0 4px #c2543c","0 0 0 2px #020a0b, 0 0 0 4px #f47e63","0 0 0 2px #070105, 0 0 0 4px #f47e63"),"Visible focus on every control: a 2px gap in the page colour, then a 2px solid ring in `focus`. Never removed, never replaced by a colour change alone. Confirmed by Amber, 5 October 2026."),
]
BLUR = [
 ("blur-frame","30px","backdrop-filter on the app frame."),
 ("blur-input","20px","backdrop-filter on the prompt box and floating bars."),
 ("blur-glow","140px","filter blur on the background glow discs, which sit at 15% opacity or less (Amber, 6 October 2026)."),
]
ZINDEX = [
 ("z-sticky","10","Sticky table headers and the top bar."),
 ("z-dropdown","20","Dropdown lists and combobox panels."),
 ("z-tooltip","30","Tooltips and tipseens."),
 ("z-dialog","40","Dialogs, modals and the backdrop."),
 ("z-toast","50","Toasts and alert banners."),
]
MOTION = [
 ("motion-productive-short","70ms","Press scale, hover washes."),
 ("motion-productive-medium","100ms","Toggle knobs, tab underlines."),
 ("motion-productive-long","150ms","Chevron rotation; a new answer or widget sliding in 8px from the left."),
 ("motion-expressive-short","250ms","Dialog and toast entrances."),
 ("motion-expressive-long","400ms","Progress fills animating forward once on load."),
 ("motion-ai-feedback","300ms","The latest moment the arrows mark starts pulsing after a question is sent."),
 ("motion-timing-enter","cubic-bezier(0,0,0.35,1)","Entering."),
 ("motion-timing-exit","cubic-bezier(0.4,0,1,1)","Leaving."),
 ("motion-timing-transition","cubic-bezier(0.4,0,0.2,1)","State changes."),
]
BACKGROUNDS = [
 ("4A","Sunrise","light","Staff app and presentations","Primary","radial-gradient(55% 70% at 8% 0%, rgba(244,126,99,0.22), transparent 70%), radial-gradient(45% 60% at 80% 110%, rgba(244,126,99,0.21), transparent 70%), radial-gradient(30% 40% at 100% 0%, rgba(0,155,163,0.15), transparent 70%), #fcf1ee"),
 ("4A","Sunrise night","dark","Staff app and presentations","Primary","radial-gradient(55% 70% at 8% 0%, rgba(244,126,99,0.36), transparent 70%), radial-gradient(45% 60% at 80% 110%, rgba(244,126,99,0.32), transparent 70%), radial-gradient(30% 40% at 100% 0%, rgba(0,155,163,0.40), transparent 70%), #020a0b"),
 ("4B","Split light","light","Staff app and presentations","Alternative","radial-gradient(60% 70% at 0% 0%, rgba(244,126,99,0.24), transparent 70%), radial-gradient(60% 70% at 100% 100%, rgba(0,155,163,0.16), transparent 70%), #fbf8f6"),
 ("4B","Split night","dark","Staff app and presentations","Alternative","radial-gradient(60% 70% at 0% 0%, rgba(244,126,99,0.29), transparent 70%), radial-gradient(60% 70% at 100% 100%, rgba(0,155,163,0.40), transparent 70%), #020a0b"),
 ("4E","Coastline","light","Staff app and presentations","Alternative","radial-gradient(70% 50% at 50% 0%, rgba(173,251,255,0.50), transparent 70%), radial-gradient(60% 60% at 0% 100%, rgba(244,126,99,0.20), transparent 70%), radial-gradient(40% 50% at 100% 90%, rgba(0,155,163,0.12), transparent 70%), #fbf9f7"),
 ("4E","Coastline night","dark","Staff app and presentations","Alternative","radial-gradient(70% 50% at 50% 0%, rgba(173,251,255,0.18), transparent 70%), radial-gradient(60% 60% at 0% 100%, rgba(244,126,99,0.25), transparent 70%), radial-gradient(40% 50% at 100% 90%, rgba(0,155,163,0.32), transparent 70%), #020a0b"),
 ("2A","Sky morning","light","Reports and data-heavy screens","Primary","radial-gradient(70% 80% at 100% 0%, rgba(173,251,255,0.70), transparent 70%), radial-gradient(60% 70% at 0% 100%, rgba(0,155,163,0.14), transparent 70%), #f6fbfb"),
 ("2A","Deep Eco night","dark","Reports and data-heavy screens","Primary","radial-gradient(45% 55% at 100% 0%, rgba(0,155,163,0.43), transparent 70%), radial-gradient(20% 26% at 88% 18%, rgba(173,251,255,0.18), transparent 70%), radial-gradient(35% 45% at 100% 60%, rgba(0,80,88,0.72), transparent 70%), #020a0b"),
 ("2B","Current wash","light","Reports and data-heavy screens","Alternative","radial-gradient(55% 65% at 0% 0%, rgba(0,155,163,0.18), transparent 70%), radial-gradient(50% 60% at 100% 100%, rgba(173,251,255,0.60), transparent 70%), #f4fafa"),
 ("2B","Current night","dark","Reports and data-heavy screens","Alternative","radial-gradient(55% 65% at 0% 0%, rgba(0,155,163,0.40), transparent 70%), radial-gradient(50% 60% at 100% 100%, rgba(173,251,255,0.14), transparent 70%), #020a0b"),
 ("2D","Eco mist","light","Reports and data-heavy screens","Alternative","radial-gradient(60% 60% at 88% 88%, rgba(0,80,88,0.10), transparent 70%), radial-gradient(50% 60% at 12% 18%, rgba(173,251,255,0.65), transparent 70%), #f7fbfb"),
 ("2D","Eco depth","dark","Reports and data-heavy screens","Alternative","radial-gradient(60% 60% at 88% 88%, rgba(0,80,88,0.80), transparent 70%), radial-gradient(50% 60% at 12% 18%, rgba(173,251,255,0.13), transparent 70%), #020a0b"),
 ("3E","Twilight light","light","Ask Lofty and AI screens","Primary","radial-gradient(45% 55% at 100% 0%, rgba(74,12,50,0.08), transparent 70%), radial-gradient(40% 50% at 82% 22%, rgba(244,126,99,0.18), transparent 70%), radial-gradient(50% 60% at 0% 100%, rgba(250,209,199,0.60), transparent 70%), #fdf8f8"),
 ("3E","Twilight","dark","Ask Lofty and AI screens","Primary","radial-gradient(45% 55% at 100% 0%, rgba(142,58,114,0.47), transparent 70%), radial-gradient(40% 50% at 82% 22%, rgba(244,126,99,0.14), transparent 70%), radial-gradient(50% 60% at 0% 100%, rgba(244,126,99,0.18), transparent 70%), #070105"),
 ("3D","Plum low","light","Ask Lofty and AI screens","Alternative","radial-gradient(80% 60% at 30% 115%, rgba(142,58,114,0.14), transparent 70%), radial-gradient(50% 55% at 92% 8%, rgba(244,126,99,0.20), transparent 70%), #fdf8f7"),
 ("3D","Plum night","dark","Ask Lofty and AI screens","Alternative","radial-gradient(80% 60% at 30% 115%, rgba(142,58,114,0.54), transparent 70%), radial-gradient(50% 55% at 92% 8%, rgba(244,126,99,0.22), transparent 70%), #070105"),
 ("1D","Low ember","light","Document covers and portal pages without a photo","Primary","radial-gradient(80% 60% at 50% 115%, rgba(244,126,99,0.30), transparent 70%), radial-gradient(50% 55% at 8% 8%, rgba(250,209,199,0.70), transparent 70%), #fffaf8"),
 ("1D","Ember night","dark","Document covers and portal pages without a photo","Primary","radial-gradient(80% 60% at 50% 115%, rgba(244,126,99,0.43), transparent 70%), radial-gradient(50% 55% at 8% 8%, rgba(250,209,199,0.11), transparent 70%), #070105"),
 ("1A","Sunrise shell","light","Document covers and portal pages without a photo","Alternative","radial-gradient(60% 70% at 0% 0%, rgba(244,126,99,0.22), transparent 70%), radial-gradient(55% 65% at 100% 100%, rgba(250,209,199,0.58), transparent 70%), #fcf1ee"),
 ("1A","Sunrise shell night","dark","Document covers and portal pages without a photo","Alternative","radial-gradient(60% 70% at 0% 0%, rgba(244,126,99,0.36), transparent 70%), radial-gradient(55% 65% at 100% 100%, rgba(250,209,199,0.14), transparent 70%), #070105"),
 ("5B","Eco and blush","light","Document covers and portal pages without a photo","Alternative","radial-gradient(55% 65% at 100% 0%, rgba(0,80,88,0.09), transparent 70%), radial-gradient(60% 70% at 0% 100%, rgba(250,209,199,0.85), transparent 70%), #fbfaf8"),
 ("5B","Eco and blush night","dark","Document covers and portal pages without a photo","Alternative","radial-gradient(55% 65% at 100% 0%, rgba(0,80,88,0.80), transparent 70%), radial-gradient(60% 70% at 0% 100%, rgba(250,209,199,0.16), transparent 70%), #020a0b"),
 ("Flow","Current flow","light","Brand panels and hero tiles only","Brand tile","linear-gradient(135deg, #adfbff 0%, #009ba3 55%, #005058 100%)"),
]

# ---------- tokens.json ----------
def tok(name,value,usage): return {"name":name,"value":value,"usage":usage}
tokens = {
 "name":"Lofty Momentum Consolidated","version":2,
 "meta":{"source":"consolidation","of":["Lofty Momentum 1.4 (concept, 25 September 2026)","Lofty's App Design System (LoftySupport/loftybrand, main, 5 October 2026)","Amber's decisions of 4 and 5 October 2026 in loftyprojectapp docs/ui-system"],"synced":"2026-10-05"},
 "color":{"themes":[{"id":i,"name":n} for i,n in THEMES],"tokens":[tok(n,v,u) for _,n,v,u in COLORS]},
 "type":{"fonts":[{"family":f,"file":p,"weight":w,"style":s} for f,p,w,s in FONTS],"families":FAMILIES,"groups":[]},
 "spacing":{"tokens":[tok(*s) for s in SPACING]},
 "radius":{"tokens":[tok(*r) for r in RADIUS]},
 "shadow":{"tokens":[tok(*s) for s in SHADOWS]},
 "blur":{"note":"Backdrop and glow blur radii. Glass needs a coloured glow behind it or it reads as grey.","tokens":[tok(*b) for b in BLUR]},
 "zIndex":{"note":"Layer scale, never a literal (App Design System).","tokens":[tok(*z) for z in ZINDEX]},
}
for gname,fam,styles in GROUPS:
    g={"name":gname,"family":fam,"styles":[]}
    for n,fs,lh,fw,ls,sample,usage in styles:
        st={"name":n,"fontSize":fs,"lineHeight":lh,"fontWeight":fw,"sample":sample,"usage":usage}
        if ls: st["letterSpacing"]=ls
        if n=="brand-body": st["family"]="brand-body"
        g["styles"].append(st)
    tokens["type"]["groups"].append(g)
os.makedirs(os.path.dirname(OUT_JSON),exist_ok=True)
json.dump(tokens,open(OUT_JSON,"w"),indent=1,ensure_ascii=False); open(OUT_JSON,"a").write("\n")

# ---------- CSS ----------
os.makedirs(OUT_CSS,exist_ok=True)
def css_val(v): 
    return "var(--%s)"%v[1:-1] if isinstance(v,str) and v.startswith("{") else v
def theme_val(v,t): return v if isinstance(v,str) else v.get(t, v["light"])
def write(name,text): open(os.path.join(OUT_CSS,name),"w").write(text)

lines=["/* momentum/tokens/colors.css : Lofty Momentum Consolidated colour tokens.","   Generated from tokens.json by gen.py on 5 October 2026. Edit the generator, not this file.","   Sunrise (light) on :root; Deep Eco on [data-theme=\"eco\"]; Twilight on [data-theme=\"twilight\"] (any element).","   Precedence: Amber's decisions of 4 and 5 October 2026, then Momentum 1.4, then the App Design System, then Vibe. */",":root, [data-theme=\"light\"] {"]
tier=None
for tr,n,v,u in COLORS:
    if tr!=tier: lines.append("  /* ---- %s ---- */"%{"brand":"Brand kit and Momentum palette (primitives, never themed except plum-lift)","semantic":"Semantic layer: build with these, not the primitives","status":"Status: state only, never decoration or a chart series","series":"Chart series: which one, never is it OK"}[tr]); tier=tr
    lines.append("  --%s: %s;"%(n,css_val(theme_val(v,"light"))))
lines.append("  color-scheme: light;\n}")
for t,_ in THEMES[1:]:
    lines.append("[data-theme=\"%s\"] {"%t)
    for tr,n,v,u in COLORS:
        if isinstance(v,dict) and v[t]!=v["light"]: lines.append("  --%s: %s;"%(n,css_val(v[t])))
    lines.append("  color-scheme: dark;\n}")
write("colors.css","\n".join(lines)+"\n")

ty=["/* momentum/tokens/typography.css : families, weights and the type styles. Outfit for headings and Onest for body (Amber, 7 October 2026, replacing Montserrat only, C04); four weights (C05). Fieldwork for brand-led surfaces only. */",":root {"]
for k,v in FAMILIES.items(): ty.append("  --font-%s: %s;"%(k,v))
ty.append("  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semibold: 600;\n  --font-weight-bold: 700;")
for gname,fam,styles in GROUPS:
    ty.append("  /* %s */"%gname)
    for n,fs,lh,fw,ls,sample,usage in styles:
        f = "brand-body" if n=="brand-body" else fam
        ty.append("  --type-%s: %d %s/%s var(--font-%s);"%(n,fw,fs,lh,f))
        if ls: ty.append("  --letter-spacing-%s: %s;"%(n,ls))
ty.append("}")
write("typography.css","\n".join(ty)+"\n")

write("spacing.css","/* momentum/tokens/spacing.css : 2 to 80, nothing off the scale. */\n:root {\n"+"".join("  --%s: %s; /* %s */\n"%(n,v,u) for n,v,u in SPACING)+"}\n")
write("radius.css","/* momentum/tokens/radius.css : corners grow with the surface. */\n:root {\n"+"".join("  --%s: %s; /* %s */\n"%(n,v,u) for n,v,u in RADIUS)+"}\n")
sh=["/* momentum/tokens/shadows.css : shadows, the focus ring and blur. Only the prompt box floats at rest. */",":root {"]
for n,v,u in SHADOWS: sh.append("  --%s: %s; /* %s */"%(n,theme_val(v,"light"),u))
for n,v,u in BLUR: sh.append("  --%s: %s; /* %s */"%(n,v,u))
sh.append("}")
for t,_ in THEMES[1:]:
    sh.append("[data-theme=\"%s\"] {"%t)
    for n,v,u in SHADOWS:
        if isinstance(v,dict) and v[t]!=v["light"]: sh.append("  --%s: %s;"%(n,v[t]))
    sh.append("}")
write("shadows.css","\n".join(sh)+"\n")
write("motion.css","/* momentum/tokens/motion.css : productive and expressive durations, the AI feedback deadline, easings. Nothing bounces; everything stops under prefers-reduced-motion (see base.css). */\n:root {\n"+"".join("  --%s: %s; /* %s */\n"%(n,v,u) for n,v,u in MOTION)+"}\n")
write("layers.css","/* momentum/tokens/layers.css : z-index scale, never a literal (App Design System). */\n:root {\n"+"".join("  --%s: %s; /* %s */\n"%(n,v,u) for n,v,u in ZINDEX)+"}\n")
bg=["/* momentum/tokens/backgrounds.css : the eleven Momentum backgrounds, light and dark twins, chosen by job (GradientBackgrounds). One per screen; never a straight top-to-bottom gradient. */",":root {"]
for no,name,mode,job,role,css in BACKGROUNDS:
    slug=(no+"-"+name).lower().replace(" ","-")
    bg.append("  --bg-%s: %s; /* %s, %s: %s */"%(slug,css,mode,role.lower(),job))
bg.append("}")
write("backgrounds.css","\n".join(bg)+"\n")
print("tokens:",len(COLORS),"colours,",sum(len(s) for _,_,s in GROUPS),"type styles")
