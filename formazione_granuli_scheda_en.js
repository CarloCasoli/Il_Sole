SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the scheda text in Markdown:
%%   ## heading   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the grave accent.
%%   English text corresponding to formazione_granuli_scheda.js, from chapter 6 (capitolo6_en.tex), section "Interactive scripts (GitHub)".

# Formation of granules in the Photosphere

## What the animation shows

The animation simulates in two dimensions the *granulation* of the photosphere seen from above: a network of bright convective cells, the *granules*, which are born, grow, and fade continuously, separated by thin dark lanes, the *intergranular* spaces. In reality the center of a granule is hot plasma rising from the layers below; at the surface the plasma releases energy, cools, and sinks back down along the dark lanes. This is why granules appear brighter at the center and darker at the edges.

Each granule is drawn as a bright patch with an irregular outline, which slowly rotates on itself. The center is white-yellow, then the color passes to orange and brown until it fades into the dark background; the brightness of the center oscillates slightly (about $\pm 10\%$) to evoke the flickering of real granules. Behind the granules a fixed background of brownish tones is drawn, which represents the dark background of the intergranular lanes. A slight vignetting darkens the edges of the screen to suggest depth.

Each granule has its own *life cycle* of random duration, between $3.2$ and $7.2$ seconds. In the first $22\%$ of the cycle it grows from $0.4$ times the maximum size up to full value; it stays at maximum size until $72\%$ of the cycle; in the last $28\%$ it shrinks again to $0.4$ times the maximum size, becoming progressively fainter. The granule never shrinks to a point: when the cycle ends, a new one is immediately born, with random size and duration, at a position very close to the previous one. At startup the cycles have random ages, so the granules are not synchronized and the scene is immediately at steady state. In the central phase of the cycle a thin dark outline appears, recalling the intergranular space.

The animation is *qualitative* and is not a physical simulation of the plasma: it does not compute velocities, temperatures, or interactions between neighboring cells. The granules are born and fade independently of one another and do not merge or fragment as happens in observations. The proportions are only indicative: a real granule has a diameter on the order of $1000$ km and lives for a few minutes, while here the lifetime is shortened by a factor on the order of a hundred to make the turnover visible.

## Controls and customizable parameters

- **Pause / Resume**: the only interface control (bottom right). Suspends the drawing and resumes it. Internal time keeps running during the pause, so upon resuming the granules are further along in their cycle.
- **Distance between centers** (*SPACING*, in pixels; initial value $46$): controls the average size of the granules and therefore their number on screen. Larger values produce larger and fewer granules.
- **Maximum size**: the maximum radius of each granule is drawn at random between $0.85$ and $1.15$ times the distance between centers, that is, between about $39$ and $53$ pixels with the initial value.
- **Cycle duration**: range from $3200$ to $7200$ milliseconds, from which the lifetime of each granule is drawn at random. Shorter intervals make the turnover faster and the scene more agitated.
- **Minimum size** (*FLOOR*; initial value $0.4$): fraction of the maximum size from which a granule starts and to which it returns at the end of the cycle. With $0$ the granules would be born and die from a single point.
- **Outline irregularity**: amplitude of the edge waviness, drawn at random between $0.12$ and $0.24$ of the radius.
- **Cycle phases**: the thresholds of $22\%$ and $72\%$ separate growth, maximum, and decay.

All parameters, except the button, are modified directly in the source of the page.

## Counters

The animation has no counters or control panels. The only text on screen is the caption at the bottom left, *Simulated photosphere — granules in convection, viewed from above*, next to the *pause* button.

## Usage tips

To observe the structure of the cells, it is best to pause when the scene shows many granules at their maximum phase, since they are brighter and well contrasted against the dark lanes. Letting the animation run instead shows the continuous turnover: granules light up, expand, and fade without ever leaving gaps in the lattice. If the window is resized, the background is redrawn but the granules remain the ones created at startup, so it is best to reload the page to fill the entire area.

`;  // ← Last line: do not modify.
