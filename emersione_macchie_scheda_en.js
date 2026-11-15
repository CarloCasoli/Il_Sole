SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   English text of the fact sheet: corresponds to emersione_macchie_scheda.js,
%%   translated from paragraph 5.4 of the Italian book (the English chapter 5 does not exist yet).

# Emergence of a βγδ sunspot group

## What the animation shows

The animation simulates in three dimensions the buoyant emergence of a group of sunspots, starting from the two-dimensional diagram of the *feet* of the spots in the photosphere, that is, the points where the flux tubes cross the surface. Below the photosphere there is a single large *trunk of magnetic flux*. Five tubes detach from this large flux tube, located in the upper part of the trunk.

The five tubes emerge *one at a time*, each with its own color. Tube G, which carries the largest flux (about $4\cdot10^{21}$ Mx — Mx: maxwell, the CGS unit of magnetic flux, 1 Mx = 1 G cm²), detaches first from the top of the trunk and arches up like a bubble; p1, p2, p3 and p4 follow, with fluxes on the order of $2$–$3\cdot10^{20}$ Mx. When the apex of a tube crosses the photosphere, two pores of opposite polarity appear, almost touching; then the feet move apart, the surface flux grows and, with the pores larger, the penumbra appears. The loop of G rises to about 40 Mm and passes above the smaller loops, which are about 15 Mm high.

As they rise, the emerging lobes *twist*. G rotates by only 8° and p1 by 14°: these are *normal* pairs, with the same orientation. p2 and p4 rotate by 170° and 190°, so their poles arrive swapped relative to G (*inverted* pairs); p3 rotates by 90° and lines up its poles in the north–south direction. p4, the last to emerge, also *translates* by about 14 Mm eastward. In the end, feet of opposite polarity belonging to different tubes end up close together: this is the configuration of $\beta\gamma\delta$ sunspot groups, where flares can be triggered.

The animation is *not to scale* and is not a magnetohydrodynamic simulation: depths, durations, thicknesses and fluxes are schematic, and the twisting of the lobes is imposed by the model to show qualitatively how tubes with opposite polarities can emerge from a single trunk, a phenomenon observed in complex groups. In the scene 1 unit corresponds to about 5 Mm; the total simulated time is 14.5 days, with the five tubes crossing the photosphere around days 1.3, 4.8, 7.3, 10.1 and 12.9.

## Controls and adjustable parameters

- **Start emergence / Pause / Resume / Repeat**: starts, suspends or resumes the full sequence; at the end of the run the button allows repeating it.
- **2D diagram**: brings the scene back to time zero, with the foot diagram seen from above.
- **Time bar**: moves the simulated instant from 0 to 14.5 days and suspends the animation, to stop on any phase.
- **Speed**: scales the simulation time (×0.5, ×1, ×2, ×4; initial value ×1). At ×1 the full sequence lasts about 41 real seconds.
- **View**: *From above*, *Oblique* or *From the side*. The side view shows the underground phase, the oblique view the trunk with cross-sections at its ends, the view from above the configuration of the feet. Dragging with the mouse freely rotates the scene, the scroll wheel changes the zoom.
- **Emergence** (*All*, G, p1, p2, p3, p4): replays the full sequence from the start, or the emergence of a single tube, from its start to its end (from 2.6 to 3.2 simulated days), to explain it individually.
- **White light / Magnetogram**: shows the spots as in visible light (umbra and penumbra) or as a map of the magnetic field, with the polarities in red (+) and blue (−).
- **Automatic camera direction**: during the animation the camera follows the tube that is emerging (first from the side, then obliquely, finally from above). It switches itself off when the scene is rotated or a view is chosen.
- **Field direction (pulses)**: shows bright pulses running along the tubes in the direction of the field.
- **Polarity signs**: displays the + and − signs on the emerged feet.
- **Possible reconnection sites**: flags with a pulsing marker the points above the photosphere where legs of opposite polarity from two different tubes come closer than about 11 Mm (off at the start).
- **Foot diagram**: shows or hides the dots and dashed ellipses of the two-dimensional diagram, with the arrow indicating the translation of p4.
- **Field lines**: shows or hides the lines inside each tube.
- **Convection zone and trunk**: shows or hides the trunk, the cross-sections at its ends, and the volume of the convection zone.
- **Individual tube checkboxes**: exclude p1, p2, p3 or p4 from the sequence (G is always active) and allow seeing how the group changes without one of the pairs.

### Counters

The panel shows in real time a sentence describing the current phase and, for each tube, its state (*deep*, *rising*, *emerging*, *mature*; *excluded* if the tube has been removed with its checkbox, *hidden* if the emergence of another tube is being observed), the height of the apex relative to the photosphere in Mm (negative while the tube is below the surface), the rotation reached relative to the final one, the distance between the feet, and the emerged flux in Mx. It also shows an indicative *magnetic class*, computed with a simple rule based on the visible spots: $\beta$ if only G is present; $\beta\gamma$ when the small pairs appear; $\beta\gamma\delta$ when two spots of opposite polarity, belonging to different tubes, are closer than 0.8 times the sum of their penumbra radii. The rule does not match the official Mount Wilson definition, described in in-depth section 6.3. When the emergence of a single tube is being observed, the class is not indicated. The simulated instant and the class are repeated at the top left of the scene.

## Tips for use

To present the animation it helps to start from *2D diagram*, then use the *Emergence* buttons to explain one tube at a time: the *From the side* view is clearest for the underground phase and for the detachment from the trunk, *From above* for comparing with the foot diagram. The *Magnetogram* makes the comparison between normal and inverted polarities immediate, while *Possible reconnection sites* shows where a flare can arise once all the tubes have emerged. Turning off one or more small tubes shows how the group and its magnetic class change; for a closer comparison, the *Speed* can be slowed to ×0.5, or the *Time bar* can be moved by hand.

`;  // ← Last line: do not modify.
