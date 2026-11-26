SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the scheda text in Markdown:
%%   ## heading   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the grave accent.
%%   English text corresponding to evoluzione_macchie_scheda.js, from chapter 6 (capitolo6_en.tex), section "Interactive scripts (GitHub)".
%%   Note: the sentence about the "5 Reversal" button has been updated from the book,
%%   because the code no longer keeps the button permanently highlighted after the click.

# Evolution of spots in the Photosphere

## What the animation shows

The animation shows the evolution of a bipolar pair of sunspots, one per hemisphere, viewed on the disk of the Sun face-on, with the rotation axis vertical. It follows the pair from emergence to the dispersal of its field and illustrates how this leads to the *reversal of the polar magnetic field*. Solar rotation moves the spots from left to right: the spot that leads in the direction of rotation is the *leading* spot (on the right), the one that follows is the *trailing* spot (on the left). The polarities are shown in red ($+$) and blue ($-$); in the two hemispheres the polarity of the leading spot is opposite, as required by Hale's law. On the disk the equator, the central meridian, and the parallels at $\pm15^\circ$, $\pm30^\circ$, and $\pm60^\circ$ are drawn.

Time runs from $0$ to about $24$ months and is divided into five phases, each described in the box below the disk.

1. *Emergence* (month $0$). The flux tube rises and the Coriolis force deforms it: the leading spot ends up a bit closer to the equator, the trailing spot a bit closer to the pole (Joy's law). At the poles the old field, of the same polarity as the leading spot, is still present. For a brief stretch the two spots are joined by a dark segment representing the tube.
2. *Maturity* (around month $8$). The two main spots remain compact and dark, with an intense field, while rotation carries them across the disk; the convection begins to erode their edges.
3. *Dispersal* (around month $16$). The leading spot, near the equator, meets the leading spot of the other hemisphere, which has opposite polarity: the fluxes cancel each other out. The trailing spot spreads into a diffuse zone, fragments, and is carried toward the pole by the surface meridional flow, as indicated by the arrow.
4. *The following field arrives at the poles* (around month $20$). The trailing flux, of opposite sign to the old polar field, begins to neutralize it: at the equator everything cancels out (around month $20$ the ellipse labeled *cancellation* appears), toward the poles an excess of a single sign remains.
5. *Reversal of the polar field* (month $24$). The polar caps, beyond $60^\circ$ of latitude, change sign and take on the polarity of the trailing spot. The poloidal field is rebuilt with reversed sign, ready to be carried into depth and rewound by differential rotation.

The animation is *schematic*: the positions, sizes, and shapes of the spots are symbolic, and the shift from left to right represents in a stylized way the passage of many solar rotations; it is not to scale. It shows the scenario of surface flux transport, but does not compute fields, fluxes, or velocities.

## Controls and customizable parameters

- **Pause / Resume**: suspends or resumes the animation. A complete run lasts about $16$ seconds; at the end the animation stays still for two seconds and starts again from the beginning.
- **Time bar**: moves the simulated instant from $0$ to about $24$ months (the value is written on the right, *month N of ~24*). Moving it suspends the animation.
- **Solar cycle**: from $35^\circ$ (start of the cycle) to $5^\circ$ (end of the cycle); initial value $15^\circ$. Sets the latitude at which the pair emerges, shown on the right (*emergence at N°*), and redraws the scene. At the start of the cycle the pair emerges at high latitude, toward the end near the equator.
- **1 Emergence, 2 Maturity, 3 Dispersal, 4 Toward the poles**: bring the animation to the beginning of the chosen phase and pause it there, to stop and explain it.
- **5 Reversal**: does not move the time. Swaps the polarities of all the spots and poles and represents the next cycle, in which the polarities are reversed. The scene pauses for one second to show the change.

## Counters

Next to the time bar the simulated month is shown (*month N of ~24*); next to the cycle slider, the emergence latitude. The box below the disk shows the title and description of the current phase, which change automatically as the animation proceeds or when the bar is moved. The labels *leading* and *trailing* appear only in the first part of the evolution.

## Usage tips

For a presentation it is best to use the buttons from *1* to *4* to stop at each phase and read the box, then let the final phase run to see the poles change color. The *Reversal* button helps explain that the next cycle starts with opposite polarities. Moving the *Solar cycle* slider lets you compare emergence at the start of the cycle, at high latitude, with that at the end of the cycle, near the equator; it is best done with the animation paused on a fixed phase.

`;  // ← Last line: do not modify.
