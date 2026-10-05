<!-- momentum/components/GradientBackgrounds.md : Momentum component rules, from the Lofty Momentum Consolidated artifact (components/GradientBackgrounds/README.md). 5 October 2026. -->
# GradientBackgrounds

Eleven backgrounds, each in light and dark, chosen by job. Every light background has a dark twin with the same number. They are CSS versions of the glow discs, for anywhere a single CSS background is easier to ship.

- **Choose by job, not by taste.** Start with the primary for the job; use an alternative only when the primary does not suit the content.
  - Staff app and presentations: **4A Sunrise** (dark: Sunrise night). Alternatives 4B, 4E.
  - Reports and data-heavy screens: **2A Sky morning** (dark: Deep Eco night). Alternatives 2B, 2D.
  - Ask Lofty and AI screens: **3E Twilight light** (dark: Twilight). Alternative 3D.
  - Document covers and portal pages without a photo: **1D Low ember** (dark: Ember night). Alternatives 1A, 5B.
- **Colour rules by family.** The teal set (2) has no orange; the warm set (1) has no teal; plum (3) pairs only with orange and Blush.
- **Dark grounds.** Warm and plum backgrounds sit on `twilight`; teal and Eco Green ones sit on `eco-night`.
- **Contrast, measured** as the lowest point anywhere on a 960 x 540 render:
  - Light: Deep Eco ink 13:1 or better; `ink-muted` (#5A6668) 4.5:1 or better on all eleven.
  - Dark: #EEF4F3 ink 9.4:1 or better; the same colour at 68% 5.3:1 or better; Crisp Orange text 4:1 or better, so keep orange text to bold labels 14px and up.
- One per screen. Keep the brightest glow away from the prompt box's send button so the orange action stays the loudest thing.
- No straight top-to-bottom linear gradients. Glows are sized in percentages, so check the corners on very wide or very tall areas.
- Retired in 1.3: Aqua, Dawn, Site morning, Blush, Dusk, Ember, Plum night and Deep eco.

| No. | Name | Mode | Job | Role | CSS |
|---|---|---|---|---|---|
| 4A | Sunrise | light | Staff app and presentations | Primary | `radial-gradient(55% 70% at 8% 0%, rgba(244,126,99,0.22), transparent 70%), radial-gradient(45% 60% at 80% 110%, rgba(244,126,99,0.21), transparent 70%), radial-gradient(30% 40% at 100% 0%, rgba(0,155,163,0.15), transparent 70%), #fcf1ee` |
| 4A | Sunrise night | dark | Staff app and presentations | Primary | `radial-gradient(55% 70% at 8% 0%, rgba(244,126,99,0.36), transparent 70%), radial-gradient(45% 60% at 80% 110%, rgba(244,126,99,0.32), transparent 70%), radial-gradient(30% 40% at 100% 0%, rgba(0,155,163,0.40), transparent 70%), #020a0b` |
| 4B | Split light | light | Staff app and presentations | Alternative | `radial-gradient(60% 70% at 0% 0%, rgba(244,126,99,0.24), transparent 70%), radial-gradient(60% 70% at 100% 100%, rgba(0,155,163,0.16), transparent 70%), #fbf8f6` |
| 4B | Split night | dark | Staff app and presentations | Alternative | `radial-gradient(60% 70% at 0% 0%, rgba(244,126,99,0.29), transparent 70%), radial-gradient(60% 70% at 100% 100%, rgba(0,155,163,0.40), transparent 70%), #020a0b` |
| 4E | Coastline | light | Staff app and presentations | Alternative | `radial-gradient(70% 50% at 50% 0%, rgba(173,251,255,0.50), transparent 70%), radial-gradient(60% 60% at 0% 100%, rgba(244,126,99,0.20), transparent 70%), radial-gradient(40% 50% at 100% 90%, rgba(0,155,163,0.12), transparent 70%), #fbf9f7` |
| 4E | Coastline night | dark | Staff app and presentations | Alternative | `radial-gradient(70% 50% at 50% 0%, rgba(173,251,255,0.18), transparent 70%), radial-gradient(60% 60% at 0% 100%, rgba(244,126,99,0.25), transparent 70%), radial-gradient(40% 50% at 100% 90%, rgba(0,155,163,0.32), transparent 70%), #020a0b` |
| 2A | Sky morning | light | Reports and data-heavy screens | Primary | `radial-gradient(70% 80% at 100% 0%, rgba(173,251,255,0.70), transparent 70%), radial-gradient(60% 70% at 0% 100%, rgba(0,155,163,0.14), transparent 70%), #f6fbfb` |
| 2A | Deep Eco night | dark | Reports and data-heavy screens | Primary | `radial-gradient(45% 55% at 100% 0%, rgba(0,155,163,0.43), transparent 70%), radial-gradient(20% 26% at 88% 18%, rgba(173,251,255,0.18), transparent 70%), radial-gradient(35% 45% at 100% 60%, rgba(0,80,88,0.72), transparent 70%), #020a0b` |
| 2B | Current wash | light | Reports and data-heavy screens | Alternative | `radial-gradient(55% 65% at 0% 0%, rgba(0,155,163,0.18), transparent 70%), radial-gradient(50% 60% at 100% 100%, rgba(173,251,255,0.60), transparent 70%), #f4fafa` |
| 2B | Current night | dark | Reports and data-heavy screens | Alternative | `radial-gradient(55% 65% at 0% 0%, rgba(0,155,163,0.40), transparent 70%), radial-gradient(50% 60% at 100% 100%, rgba(173,251,255,0.14), transparent 70%), #020a0b` |
| 2D | Eco mist | light | Reports and data-heavy screens | Alternative | `radial-gradient(60% 60% at 88% 88%, rgba(0,80,88,0.10), transparent 70%), radial-gradient(50% 60% at 12% 18%, rgba(173,251,255,0.65), transparent 70%), #f7fbfb` |
| 2D | Eco depth | dark | Reports and data-heavy screens | Alternative | `radial-gradient(60% 60% at 88% 88%, rgba(0,80,88,0.80), transparent 70%), radial-gradient(50% 60% at 12% 18%, rgba(173,251,255,0.13), transparent 70%), #020a0b` |
| 3E | Twilight light | light | Ask Lofty and AI screens | Primary | `radial-gradient(45% 55% at 100% 0%, rgba(74,12,50,0.08), transparent 70%), radial-gradient(40% 50% at 82% 22%, rgba(244,126,99,0.18), transparent 70%), radial-gradient(50% 60% at 0% 100%, rgba(250,209,199,0.60), transparent 70%), #fdf8f8` |
| 3E | Twilight | dark | Ask Lofty and AI screens | Primary | `radial-gradient(45% 55% at 100% 0%, rgba(142,58,114,0.47), transparent 70%), radial-gradient(40% 50% at 82% 22%, rgba(244,126,99,0.14), transparent 70%), radial-gradient(50% 60% at 0% 100%, rgba(244,126,99,0.18), transparent 70%), #070105` |
| 3D | Plum low | light | Ask Lofty and AI screens | Alternative | `radial-gradient(80% 60% at 30% 115%, rgba(142,58,114,0.14), transparent 70%), radial-gradient(50% 55% at 92% 8%, rgba(244,126,99,0.20), transparent 70%), #fdf8f7` |
| 3D | Plum night | dark | Ask Lofty and AI screens | Alternative | `radial-gradient(80% 60% at 30% 115%, rgba(142,58,114,0.54), transparent 70%), radial-gradient(50% 55% at 92% 8%, rgba(244,126,99,0.22), transparent 70%), #070105` |
| 1D | Low ember | light | Document covers and portal pages without a photo | Primary | `radial-gradient(80% 60% at 50% 115%, rgba(244,126,99,0.30), transparent 70%), radial-gradient(50% 55% at 8% 8%, rgba(250,209,199,0.70), transparent 70%), #fffaf8` |
| 1D | Ember night | dark | Document covers and portal pages without a photo | Primary | `radial-gradient(80% 60% at 50% 115%, rgba(244,126,99,0.43), transparent 70%), radial-gradient(50% 55% at 8% 8%, rgba(250,209,199,0.11), transparent 70%), #070105` |
| 1A | Sunrise shell | light | Document covers and portal pages without a photo | Alternative | `radial-gradient(60% 70% at 0% 0%, rgba(244,126,99,0.22), transparent 70%), radial-gradient(55% 65% at 100% 100%, rgba(250,209,199,0.58), transparent 70%), #fcf1ee` |
| 1A | Sunrise shell night | dark | Document covers and portal pages without a photo | Alternative | `radial-gradient(60% 70% at 0% 0%, rgba(244,126,99,0.36), transparent 70%), radial-gradient(55% 65% at 100% 100%, rgba(250,209,199,0.14), transparent 70%), #070105` |
| 5B | Eco and blush | light | Document covers and portal pages without a photo | Alternative | `radial-gradient(55% 65% at 100% 0%, rgba(0,80,88,0.09), transparent 70%), radial-gradient(60% 70% at 0% 100%, rgba(250,209,199,0.85), transparent 70%), #fbfaf8` |
| 5B | Eco and blush night | dark | Document covers and portal pages without a photo | Alternative | `radial-gradient(55% 65% at 100% 0%, rgba(0,80,88,0.80), transparent 70%), radial-gradient(60% 70% at 0% 100%, rgba(250,209,199,0.16), transparent 70%), #020a0b` |
| Flow | Current flow | light | Brand panels and hero tiles only | Brand tile | `linear-gradient(135deg, #adfbff 0%, #009ba3 55%, #005058 100%)` |
