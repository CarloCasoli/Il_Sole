SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   English text of the description: matches modello_culla_kuperus_raadu_scheda.js and the chapter-14 Script of the book.

# Filament dip — Kuperus–Raadu model

## What the animation shows

The animation shows, in three dimensions, how the rotation of the footpoints of a magnetic flux tube can produce a helical structure able to support a filament, following the Kuperus–Raadu model. The scene shows an *arcade of five arcs* side by side, all anchored to the same pair of footpoints on the photosphere (represented by an orange grid): a positive pole on the left and a negative pole on the right, separated by the *neutral line* (PIL, polarity inversion line), drawn in red at the center of the scene.

The cycle unfolds in four phases, which happen partly together:

- **Rotation of the footpoints**: two small curved arrows, one for each pole of every arc, rotate continuously around the footpoint, representing the rotational motion of the photosphere at the base of the flux tube.
- **Helical twist**: along each arc, the magnetic field channel (drawn as a solid light-blue tube) begins to twist, turning into a bundle of three strands that wind helically around one another, with a winding pitch of about $2.2$ turns over the whole length of the arc.
- **Fading of the original channel**: as the helix forms, the solid blue tube that represented the original channel becomes gradually more transparent, until it disappears: only the helix of strands remains.
- **Deposit of the plasma**: once the twisting is essentially complete (after about $75\%$ of the cycle), an orange plasma cylinder appears, laid along the neutral line, at the lowest point reached by the helix, labeled *Deposited plasma*.

Throughout the animation, the five arcs gradually sag at the center, forming a common dip that deepens, around which the helix winds. The full cycle lasts about $5.2$ seconds and then stops at the last frame, waiting to be restarted.

**The limit of the model.** As with the Kippenhahn–Schlüter model, the animation does not simulate the real magnetic forces or the physics of photospheric rotation: the twist and the sagging of the dip are imposed by geometric formulas. The model illustrates the *idea* of the Kuperus–Raadu mechanism — a twist of the field that produces a helical dip in which plasma can be deposited — but does not demonstrate its quantitative plausibility.

## Controls and adjustable parameters

- **↺ Restart**: brings the scene back to the start of the cycle.
- **View**: dragging with the mouse (or a finger) rotates the scene; the scroll wheel (or two fingers) zooms the view in or out; the right button pans the view.

In the page's source code one can also change, among others:

- **Number of arcs**: five, spaced $3$ units apart along the neutral line.
- **Number of strands per arc**: three, offset by $120°$ from one another.
- **Maximum amplitude of the helix** and **maximum depth of the central dip**.
- **Rotation speed** of the footpoints and **winding speed** of the helix.
- **Threshold and final opacity** of the deposited plasma cylinder.
- **Duration of the cycle**.

## Counters

The animation has no numerical counters. The labels *Neutral line (PIL)*, *Positive Pole (+)*, *Negative Pole (−)* and *Deposited plasma* appear directly in the three-dimensional scene, next to the elements they refer to.

## Tips for use

It helps to follow a single central arc to see clearly the sequence of the four phases: the rotation of the footpoints, the twist that replaces the solid channel with the helix of three strands, and finally the deposit of plasma at the lowest point. Rotating the view along the neutral line shows better how all the arcs share the same dip; rotating it perpendicular to the PIL instead reveals the helical structure of each individual arc.

`;  // ← Last line: do not modify.
