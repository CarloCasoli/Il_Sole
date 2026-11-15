SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   English text of the description: matches modello_culla_da_shear_scheda.js and the chapter-14 Script of the book.

# Filament dip from shear

## What the animation shows

The animation shows, in three dimensions, how the opposite *shearing motion* of the two footpoints of a series of magnetic arcs, along the neutral line, can lead to *magnetic reconnection* and to the formation of a single large helical flux tube, parallel to the neutral line itself, following the shear mechanism proposed for solar filaments. The scene shows nine arcs side by side, shaped like an *omega* (bulging toward the center), anchored to a positive pole and a negative pole separated by the neutral line (PIL). Two small arrows show, at the start, the direction in which the footpoints of the two poles slide relative to one another.

The animation plays only once, over about $19.6$ seconds, in four phases that follow one another and partly overlap:

- **Shearing**: in the first part, the footpoints of the nine arcs slide in opposite directions along the PIL, with the twisting concentrated near the footpoints themselves, so that the bases of the arcs tend to become parallel to the neutral line.
- **Arcs vanishing from the center toward the sides**: once the shearing is complete, the arcs, touching and reconnecting, vanish one after another starting from the central one and moving progressively outward.
- **Birth of the large helical tube**: at the same time as the arcs vanish, at the height of their former apexes a large transparent tube parallel to the PIL appears, inside which a magnetic-field helix winds (with nine complete turns): small glowing spheres move along the helix to show its winding direction. At the base of the tube, in the dip formed by the helix, an orange plasma cylinder appears.
- **Residual small arcs**: below the large tube, straddling the neutral line, new small arcs appear one after another, starting at half height and gradually lowering, representing the remnants of the reconnected arcs closest to the photosphere.

**The limit of the model.** As with the other two dip models, the animation does not simulate the magnetic-field forces or the physical reconnection process: the shearing, the vanishing of the arcs and the birth of the helix are all imposed by predetermined geometric functions, chosen to show clearly the logical sequence of the shear mechanism, not to compute its quantitative effects.

## Controls and adjustable parameters

- **↺ Restart**: brings the scene back to the start of the animation, which otherwise stays still at the end of the sequence.
- **View**: dragging with the mouse (or a finger) rotates the scene; the scroll wheel (or two fingers) zooms the view in or out; the right button pans the view.

In the page's source code one can also change, among others:

- **Number of initial arcs**: nine, spaced $7.5$ units apart along the PIL.
- **Maximum shear** of the footpoints and **concentration of the shear** near the footpoints.
- **Number of turns** of the helix (nine) and the **radius** of the helix and of the tube containing it.
- **Timing and duration** of each of the four phases (shearing, vanishing, birth of the helix, residual arcs).
- **Total duration** of the animation.

## Counters

The animation has no numerical counters. The labels *Neutral line (PIL)*, *Positive Pole (+)* and *Negative Pole (−)* appear directly in the three-dimensional scene, next to the elements they refer to.

## Tips for use

It helps to watch the animation at least twice: the first time facing the scene, to follow the shearing of the footpoints and the arcs vanishing from the center toward the sides; the second time rotating the view along the direction of the neutral line, to appreciate the length and the winding of the large helical tube that forms in their place. The **↺ Restart** button lets the full sequence be watched again as many times as needed.

`;  // ← Last line: do not modify.
