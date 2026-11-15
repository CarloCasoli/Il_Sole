SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   English text of the description: matches modello_culla_kippenhahn_schluter_scheda.js and the chapter-14 Script of the book.

# Filament dip — Kippenhahn–Schlüter model

## What the animation shows

The animation shows in three dimensions the formation of a magnetic *dip* and the *condensation* of plasma inside it, following the Kippenhahn–Schlüter model for the support of solar filaments and prominences. A thin grid at the bottom represents the photosphere. On the grid, the *polarity inversion line* (PIL), that is, the line separating zones of opposite magnetic polarity, is drawn in red along one axis of the scene. Above the PIL stretches an arcade of thirteen magnetic field lines, in blue, all identical, parallel to one another and equally spaced: each is a parabola-shaped arc that crosses the PIL, about $7$ units high at the center and $14$ units wide at the base.

The scene animates in two parts, which happen together.

- **Formation of the dip**: at the center of each arc, above the PIL, the magnetic field gradually sags, by about $2$ units at most, forming a loop that curves upward between two side humps. This is the *dip*: a depression of the field lines in which plasma can be held up against gravity. The rest of the arc stays almost unchanged.
- **Condensation of the plasma**: once the dip is deep enough (from about $60\%$ of its maximum depth onward), a glowing light-blue cylinder appears inside it, laid along the PIL, representing the filament of condensed plasma. The cylinder, which always sits at the same height, becomes gradually less transparent until it is clearly visible once the dip has reached maximum depth. Its height is chosen so that at $60\%$ the field lines cross it at the center, and at greater depth they pass beneath it, as if supporting it.

The animation plays only once, over about $3.1$ seconds: it starts from the still-flat arcs and stops, at the end, with the dip fully formed and the plasma condensed inside it. The **↺ Restart** button lights up once the animation has finished and lets it be played again from the beginning as many times as wanted.

**The limit of the model.** The animation *does not explain how the small initial dip is created*. It only shows what happens afterward: a depression of the field lines that deepens, and the plasma that condenses inside it. The depression, in the code, is imposed by a mathematical formula and does not follow from a physical process: no force is simulated, nor the mechanism that first deforms the magnetic field and produces the dip. This is the limit of the model: it gives a good picture of how an already-present dip supports matter, but leaves open the question of how it arises.

The animation is also *qualitative*: the sizes, times and shapes are schematic, not to scale, and no gravity, density, temperature or magnetic forces are computed. The field is drawn as an arcade crossing the PIL perpendicularly, a simplification: in real filaments the field is usually strongly inclined, nearly parallel to the PIL.

## Controls and adjustable parameters

The animation has no buttons or sliders, apart from the **↺ Restart** button, which brings the scene back to the start of the cycle. The only other way to interact is to move the view with the mouse or a finger.

- **Drag**: rotates the scene around its center.
- **Scroll wheel**: zooms the view in or out (with two fingers on a touch screen).
- **Right button**: pans the view.

All other parameters are changed in the page's source code. The main ones are:

- **Number and spacing of the field lines**: thirteen lines, from $-9$ to $+9$ in steps of $1.5$.
- **Shape of the arc**: maximum height ($7$) and half-width ($7$).
- **Depth of the dip**: $2.0$ units at most.
- **Width of the dip**: set by the parameter $3$ in the exponent that controls the Gaussian.
- **Plasma filament**: radius ($0.35$), length ($17$) and height ($5.8$).
- **Threshold for the plasma to appear**: $0.6$ of the cycle, with a final opacity of $0.95$.
- **Duration of the animation**: about $3.1$ seconds, adjustable by changing the factor that multiplies time.

## Counters

The animation has no counters. At the top center only the title *3D Animation: Formation of the Dip and Condensation of the Filament* appears, with the subtitle *The field deforms; the plasma condenses in the dip that forms*. The red line has no label in the scene and must be explained out loud.

## Tips for use

To show the dip, it helps to look at the scene along the direction of the red line, at the level of the grid, so as to see the arcs edge-on: the point where they sag and the position of the plasma cylinder are then clear. To show the extent of the filament along the PIL, the view can then be rotated from above. The **↺ Restart** button lets the cycle be watched from the beginning as many times as needed; it is useful to talk through the condensation phase and to say openly that the scene does not explain how the dip forms the first time.

`;  // ← Last line: do not modify.
