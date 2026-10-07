<!-- momentum/canvas/README.md : source files of the design canvas "Lofty Momentum Consolidated Design". Added 6 October 2026. -->
# Canvas: Lofty Momentum Consolidated Design

The source of the Claude Design-canvas artifact at https://claude.ai/artifact/Ma3dEuBCDVpnYA7MZM8dfA (also https://claude.ai/code/artifact/a693ef6a-271a-429e-ab5a-d76cc4e9890d), copied from its live version on 6 October 2026. Six artboards and the canvas index, byte for byte, so the artifact can be republished from here.

| File | Artboard |
| --- | --- |
| `canvas.json` | Board positions, order and the installed design system |
| `Main.dc.html` | Ask Lofty landing, Sunrise. Carries the `theme` tweak (light, eco, twilight) |
| `LandingDeepEco.dc.html` | The same landing imported with `theme: eco` |
| `Colour.dc.html` | The palette in three themes |
| `Type.dc.html` | Outfit and Onest: the Hub's Vibe scale, Momentum's display, numbers and text, Fieldwork for brand surfaces |
| `Components.dc.html` | Controls and states |
| `Foundations.dc.html` | Spacing, shape and glass |
| `ds/lofty-momentum/tokens.json` | The consolidated system installed as the canvas's design system (a copy of `../tokens.json` at 5 October 2026) |

These files are artifact source, not web pages: they reference `./support.js` (supplied by the canvas runtime) and uploaded assets by `/_blob/<id>`. The flattened, self-contained versions that open in a browser are in `../guidelines/` (`screen-landing-sunrise.html`, `screen-landing-deep-eco.html`, `colour-three-themes.html`, `type-montserrat.html`, `controls-and-states.html`, `foundations-glass.html`).

Blob references and the repository file each one is:

| Blob | File |
| --- | --- |
| `b146eafe32579f99d4b12e4fed716029` | `assets/brand/lofty-logo-orange.png` |
| `5d0dc7d3655c31ca0c745377e317dda4` | `assets/brand/lofty-logo-white.png` |
| `8fc722733d4000409c4471b5ff7dce24` | `assets/lofty-mark-transparent.png` |
| `813687cf227cc99af11ccf75a1a66524` | `assets/fonts/Fieldwork-Geo-Demibold.woff` |
| `bde8b337bab308e0d8260eaf8dcc8cc6` | `assets/fonts/Fieldwork-Hum-Light.woff` |

To change the canvas: edit here, republish the artifact from this folder with the Artifact tool (`root` = this folder, `project/` paths), then regenerate the six flattened cards in `../guidelines/`.
