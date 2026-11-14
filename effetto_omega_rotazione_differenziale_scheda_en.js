SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   Testo inglese della scheda: corrisponde a effetto_omega_rotazione_differenziale_scheda.js,
%%   tradotto dal paragrafo 5.7 del libro italiano (il capitolo 5 inglese non esiste ancora).

# The Ω effect: winding of the field and the 22-year cycle

## What the animation shows

The animation shows how the Sun's differential rotation winds up the lines of the magnetic field and gives rise to the sunspot cycle (the **Ω effect**). The Sun does not rotate as a rigid body: the equator completes a turn in about 25 days, the poles in about 35. Because the ionized gas drags the field lines along with it, the lines that at first run from one pole to the other (*poloidal* field) tilt, stretch and wind around the Sun, until they turn into a much more intense horizontal field (*toroidal* field).

The scene is split into two side-by-side panels. The left one shows the Sun seen from the outside, with the field lines, drawn on the sphere at the base of the convective zone (0.7 $R_\odot$), where the stretching takes place, winding up as time passes. The right one shows an internal section: the toroidal flux tubes that form at the base of the convective zone, their rise towards the surface, where they emerge as pairs of spots, and the slow return of the poloidal field with reversed polarity. After about 11 years the field at the poles has changed sign and the cycle starts again with opposite polarities: this is why the simulation covers two cycles, that is, the 22 years of the full magnetic cycle.

The animation is a qualitative scheme and **is not to scale**: the rotation profile, the latitudes of the tubes and the timings are simplified to make the sequence of phenomena easy to read.

## Elements of the scene

- **Left panel (external view)**: the Sun in yellow, with a dashed white line marking the equator and a dashed circle at 0.7 $R_\odot$, the base of the convective zone. The arrows on the left show the rotation: longer at the equator (25 days) and shorter towards the poles (about 35 days).
- **Field lines**: twelve meridians distributed in longitude, of which the central one is thicker. At the start they are vertical; then they tilt and wind up. Color shows the polarity and the small arrows the direction of the field.
- **Toroidal flux tubes**: when the lines become nearly horizontal, colored tubes with white arrows appear in each hemisphere. Red and blue show the two opposite directions of the field, which are opposite in the two hemispheres.
- **Right panel (internal section)**: the cross-section of the Sun with the dashed polar axis and the labels for the north and south pole. The colored caps at the poles represent the poloidal field, which changes color, and therefore sign, over the course of the cycle.
- **Tubes in cross-section**: circles that appear at the base of the convective zone at progressively lower latitudes (from 35° to 5°). The white dot shows the field coming out of the plane, the cross the field going into it.
- **Spots and Ω-shaped loops**: when a tube emerges at the surface, two spots of opposite polarity appear, marked with + and −, joined by a red Ω-shaped loop. The two spots then move apart and fade.
- **Conveyor belt**: the meridional circulation, with gas flowing towards the poles at the surface and returning towards the equator at depth. The dots move along the path: red at the surface, blue in the deep return flow, gray in the connecting stretches.
- **Toroidal field bar**: shows how much horizontal field has built up.

## Controls and adjustable parameters

The animation starts on its own and restarts after each full cycle. The controls at the bottom let you stop it and scroll through time by hand.

- **Pause / Resume**: suspends or resumes the animation. Moving either slider stops the animation automatically.
- **Solar cycle, 0–22 years**: a slider that runs through the two cycles (initial value 0). On the right the current instant is shown, with the year and the cycle number. The second cycle begins after 11 years, with reversed polarities.
- **Winding of the field, in days**: a slider from 0 to 700 days, about the first 1.9 years of each cycle. It lets you watch slowly how the lines tilt and wind up in the initial phase.
- **Horizontal (toroidal) field**: a read-only bar, which fills up as the field winds up and empties when the tubes emerge.

Time passes more slowly in the first 1.9 years of each cycle, the winding phase, and faster afterwards. The animation adapts to the screen: on a phone the two panels are stacked one above the other. It also follows the device's light or dark theme.

## Tips for use

To understand the winding, it helps to stop the animation and move the days slider slowly, watching how the lines near the equator, which are faster, tilt first, while the toroidal field bar fills up. With the 22-year slider one can then follow the sequence of tubes: each tube emerges at a lower latitude than the previous one, and each pair of spots gives a small contribution to the sign change of the field at the poles. Finally, it helps to compare the two cycles to observe the reversal of the polarities.

`;  // ← Last line: do not modify.
