SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   English text of the description: matches onda_magnetoacustica_granulo_scheda.js and the chapter-14 Script of the book.

# The magnetoacoustic wave of the granule

## What the animation shows

The animation shows, in three dimensions, how the periodic collapse of a photospheric granule, at the base of a magnetic flux tube, can generate a magnetoacoustic wave that rises along the tube up to the chromospheric fibrils at the top. The scene reproduces a central cylindrical granule, surrounded by a conical downflow channel (the dark crown around the granule), which is in turn surrounded by four smaller neighboring granules arranged in a circle. From the base of the tube rises an almost transparent truncated cone that narrows upward to a dark "foot"; from there the tube continues vertically and at the top splits into three fibrils, one central and two lateral, which curve gently to the side.

The whole phenomenon repeats in a continuous $6$-second cycle, in three linked phases:

- **Collapse of the granule**: the central granule shrinks isotropically (it shrinks in diameter, not in height) while the four neighboring granules grow and press in toward it, taking up its space: this represents the plasma downflow channel narrowing. During the collapse, small dark arrows move downward in the channel, indicating the plasma flow as it falls.
- **Piston**: when the granule is near the peak of its contraction, the "foot" at the base of the tube makes a brief, sharp downward motion and springs back up, like a piston: this is the mechanical impulse that gives rise to the wave.
- **Magnetoacoustic wave**: right after the piston stroke, a thin zigzag tube (the wave) starts from the foot and rises along the vertical stretch, widening its own oscillation quadratically with height, until it reaches the base of the fibrils at the top; there the wave dissolves quickly.

Along the three fibrils at the top, small dark arrows continuously move from the trunk outward, representing the plasma flow running through them independently of the wave's cycle.

**The limit of the model.** The animation is *qualitative*: the collapse of the granule, the piston stroke and the propagation of the wave are all imposed by geometric and timing functions chosen to illustrate clearly the causal chain "narrowing channel → accelerated plasma downflow → impulse → rising wave", not to compute the real buoyancy forces, the plasma pressure or the speed of sound in the photosphere.

## Controls and adjustable parameters

- **Top view / 3D view / Side view**: move the camera to three preset positions.
- **Auto-rotation: on/off**: turns a continuous automatic rotation of the view around the observed point on or off.
- **View**: dragging with the mouse or a finger freely rotates the scene; the scroll wheel (or two fingers) zooms the view in or out; the right button pans the view.

In the page's source code one can also change, among others:

- **Cycle duration** (the piston period, $6$ seconds) and **duration of the piston stroke** ($0.5$ seconds).
- **Wave travel time** up the tube (about $3.2$ seconds) and **duration of the final fade** of the wave at the top.
- **Intensity of the collapse** of the central granule and **minimum/maximum scale** of the neighboring granules.
- **Amplitude of the zigzag oscillation** of the wave, at the base and at the top.
- **Number and speed of the flow arrows** along the fibrils.

## Counters

The animation has no numerical counters on screen.

## Tips for use

It helps to follow one full cycle starting from the side view, to clearly see, in sequence, the collapse of the granule, the piston stroke at the base of the tube and the wave rising up to the fibrils. Switching then to the top view makes it easier to appreciate how the four neighboring granules press in around the central granule during the collapse.

`;  // ← Last line: do not modify.
