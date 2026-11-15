SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   English text of the description: matches protuberanza_doppio_flusso_scheda.js and the chapter-14 Script of the book.

# Model of concentric magnetic flux tubes

## What the animation shows

The animation shows, in three dimensions, a model of a solar prominence supported by *two concentric, helical magnetic flux tubes*, with plasma flowing inside them in opposite directions. Below the tubes, an orange disk represents the photosphere, with a central glow that pulses slowly.

- **Tube A (inner, orange)**: a thinner, semi-transparent tube that forms an arc with a long flat central stretch and a steep descent toward its two footpoints, anchored to the outer *N* (red) and *S* (blue) poles.
- **Tube B (outer, light blue)**: a second tube, wider in the central stretch (where it is concentric with Tube A) and that progressively narrows toward its own two footpoints, anchored to a second pair of *S* and *N* poles, closer to the center and of opposite polarity to the poles of Tube A.

Inside each tube, small *arrows* move, representing the plasma in motion: the white ones, in Tube A, follow a slightly helical path; the green ones, in Tube B, move in the opposite direction and follow a path more closely aligned with the tube's axis. The opposing flow in the two tubes is the central feature of the model: it suggests two distinct, concentric magnetic current systems, each dragging plasma in a different direction.

**The limit of the model.** Here too the animation is *qualitative*: the shape of the two tubes, their twist and the motion of the plasma arrows are built with geometric functions chosen to give a clear picture of the double concentric-tube structure, not to compute the magnetic forces, the currents or the real equilibrium of the prominence.

## Controls and adjustable parameters

- **⏸ Pause / ▶ Play**: stops or restarts the motion of the plasma arrows; the view stays interactive either way.
- **Plasma speed**: a slider that sets how fast the arrows move along the two tubes (from $\times 0.1$ to $\times 3$; initial value $\times 1$).
- **⟲ Reset view**: brings the camera and the scene's orientation back to the starting position.
- **View**: dragging with the mouse or a finger freely rotates the scene in any direction; the scroll wheel (or a pinch gesture) zooms the view in or out.

In the page's source code one can also change, among others, the radius and length of the two tubes, the number of turns of the plasma helices in each, the number of arrows and their relative speed.

## Counters

The animation has no numerical counters. The letters *N* and *S* on the footpoints of the two tubes indicate the magnetic polarity of the respective poles.

## Tips for use

It helps to start the animation and slowly rotate the scene around the tubes' axis, to see how the white and green arrows move in opposite directions while each stays inside its own tube. Increasing the plasma speed with the slider makes the direction of each flow easier to tell apart; the **⏸ Pause** button lets the motion be stopped to study the geometry of the two concentric tubes at leisure.

`;  // ← Last line: do not modify.
