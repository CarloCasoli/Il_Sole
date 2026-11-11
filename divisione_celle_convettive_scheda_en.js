SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   Testo inglese della scheda: corrisponde a divisione_celle_convettive_scheda.js e allo Script 4.5 del libro inglese.

# Evolution of convective cells in the convection zone

## What the animation shows

The animation shows in three dimensions how a large convective cell of the solar convection zone develops and breaks up into smaller and smaller cells, down to the granulation observed in the photosphere. The scene is divided into three stacked layers, thinner and thinner going up: *level 1* hosts the parent cell, *level 2* the daughter cells, *level 3* the granules. The three levels recall, schematically, the hierarchy of scales observed in the Sun: giant cells (over $100\,\mathrm{Mm}$), supergranules (about $30\,\mathrm{Mm}$) and granules (about $1\,\mathrm{Mm}$).

Each cell goes through four phases. In the *rise* a bubble of hot gas, lighter than the surrounding gas, rises quickly along its central channel. In the *widening* it meets less and less dense layers and slows down: the column remains almost cylindrical, while the top swells into a rounded bulb in which the flow becomes horizontal and turns downwards. In the *instability* phase the edge starts to wobble sideways and the flow at the top can no longer remain single. In the *flow splitting* lanes of cool gas sink from the top and divide the large flow into smaller flows: some main ones, one at the center and the others around it, and some minor ones that fill the gaps, so as to cover the whole cross-section of the cell without leaving voids. Only when the splitting is complete do the new flows slowly start and grow as independent cells in the next layer. The last splitting produces the granules, all of similar size, which cover the entire surface.

The gas is represented by particles colored according to temperature, from dark red (cool gas, sinking) to light yellow (hot gas, rising), with three families of paths. Most of the gas *recirculates in place*: it rises at the center of its own cell, overturns at the top and sinks at the edges. A small part *moves up a level*, from the parent cell to the daughters and even less up to the granules. Finally, the gas cooled at the surface sinks in narrow, fast *cold plumes* that merge and reach the base of the parent cell. The cells of the lower levels do not disappear after splitting: they remain active beneath the smaller ones.

When the granules reach the surface the animation stops on the *complete structure*. Restarting it begins the *life of the granules*, which continues endlessly: each granule is born small and hotter, widens, cools and fades, and its place is immediately taken by a new granule; about one in four, instead of fading, splits into two or three parts, like the exploding granules observed in the photosphere. The underlying cells, instead, remain practically still, as a reminder of the great difference in lifetimes: a few minutes for granules (5–10 on average), one or two days for supergranules, weeks or more for giant cells.

The animation is *not to scale* and is not a hydrodynamic simulation: shapes, layer thicknesses, speeds and times are schematic. In the Sun there are no sharp layers or closed tubes stacked one on top of the other, but a continuous hierarchy of motions, and the existence of giant cells as a distinct scale is still debated. The ratio between layer thickness and cell diameter decreases going up to recall the rapid drop in density towards the surface, which forces the rising gas to spread out and overturn. At speed $\times 1$ the complete development of the three levels takes about $88$ real seconds.

## Controls and adjustable parameters

- **Pause / Start**: suspends or resumes the animation; the space bar has the same effect. At the end of the development the animation stops by itself on the complete structure, and the *Start* button launches the life of the granules, which continues until it is paused.

- **Time bar**: moves the instant of the animation to stop on any phase; the marks *L2* and *L3* show when the cells of the second and third levels are born.

- **Restart**: takes the animation back to the beginning, with only the parent cell.

- **New variant**: generates a new random arrangement of the daughter cells and granules, with slightly different shapes and times.

- **Download the .html file**: saves the animation as a standalone file that can be opened with any browser (an internet connection is needed to load the 3D graphics engine).

- **Animation speed**: scales the playback speed from $\times 0.25$ to $\times 3$ (initial value $\times 1$).

- **Main flows in the first splitting**: chooses into how many main flows the parent cell divides, from $4$ to $7$, always with one at the center and the others around it (initial value $5$, that is, $1 + 4$). The minor flows that fill the gaps and the granules are recomputed accordingly.

- **Shape irregularity**: sets how far the cells depart from a perfectly circular shape, from $0$ (regular cells) to $200\%$ (initial value $100\%$).

- **Cell shell**: shows or hides the semi-transparent surface that bounds each cell. Without the shell only the particles remain visible, and the gas paths are easier to read.

- **Shell opacity**: makes the shell more transparent or more solid, from $20\%$ to $180\%$ (initial value $100\%$).

- **Gas particles**: shows or hides the particles that represent the flows.

- **Highlight gas changing level**: dims the local recirculation and highlights only the particles that rise from one level to the next and the cold plumes that sink from the surface to the base.

- **Labels**: shows or hides the captions in the scene (hot rise at the center, cool descent at the edges, cool lanes, points where the flow overturns, names of the layers).

- **Auto-rotation**: slowly rotates the scene around the vertical axis.

- **View**: *Oblique*, *Side* or *Top*. Dragging with the mouse rotates the scene freely, the scroll wheel changes the zoom and the right button pans it.

## Counters

The column on the left side of the scene shows the current level (*parent cell*, *daughters*, *granules*) and the phase reached (*rise*, *widening*, *instability*, *flow splitting*; for the last level *complete structure* and *life of the granules*), with a title and a short sentence describing what is happening. A bar shows the *rise speed* of the cell under examination, labeled *high*, *medium*, *low* or *almost still*: it is high at the beginning of the rise and drops as the cell widens. Next to the time bar the elapsed time is shown relative to the duration of the development, replaced at the end by the words *complete structure* and *life of the granules*.

## Tips for use

To present the animation it is best to start with the shell on and the *Side* view, which shows well the shape of the cells and the sequence of the four phases; the *Time bar* lets you stop on the edge instability and on the flow splitting to describe them calmly. The *Top* view shows how the new flows cover the whole cross-section of the cell they come from. Switching off the *Cell shell* leaves only the particles, and the gas paths become evident: the wide recirculation of the parent cell, the bands in which the gas overturns beneath the daughters and the boiling surface; with *Highlight gas changing level* one can show how little gas passes from one layer to the next and how the cold plumes sink from the surface down to the base. Once the complete structure is reached, the automatic stop leaves time to describe it before starting the life of the granules, which is best observed from above or in the oblique view.

`;  // ← Last line: do not modify.
