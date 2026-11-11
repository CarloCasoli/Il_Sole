SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   Testo inglese della scheda: corrisponde a bolle_convettive_scheda.js e allo Script 4.6 del libro inglese.

# 2D simulation of convective cells in the convection zone

## What the animation shows

The animation shows in two dimensions a quarter-circle sector (90$^\circ$) of the Sun, from the center to the surface, with the sequence of the internal layers: the core, the radiative zone and the convection zone. Attention is focused on the *convection zone*, where energy is transported by the motion of masses of plasma and no longer by radiation.

In reality the convection zone is not made of separate layers: it extends from about $0.7\,R_\odot$ up to the surface, and the size of the convective motions grows continuously with depth. The animation schematizes it into a number of concentric layers that can be chosen from 1 to 4. With four layers, the default choice, each corresponds to one of the characteristic scales observed at the surface: *giant cells*, *supergranulation*, *mesogranulation* and *granulation*. Moving outwards the cells become more numerous and smaller, while the flow inside them becomes faster and faster.

Each cell is represented by a pair of counter-rotating vortices: the moving dashed arrows show the hot plasma rising at the center of the cell, moving sideways and sinking along the edges after cooling. The fixed white dashed lines show the closed path that the plasma follows in each cell. The color of the arrows identifies the layer they belong to, as shown in the legend below the animation.

The animation is *not to scale*: the layer thicknesses and the number of cells are chosen to make the phenomenon readable, and the speeds are purely indicative; they serve to highlight the qualitative comparison between the inner and outer layers.

## Elements of the scene

- **Core**: central region, in white–yellow, where nuclear fusion takes place (up to about $10\%$ of the radius in the animation).

- **Radiative zone**: orange band, between the core and about $65\%$ of the radius, where energy proceeds by photon diffusion.

- **Convective layers**: from 1 to 4 concentric bands between the radiative zone and the surface, with thickness decreasing outwards.

- **Legend**: lists the layers with the corresponding color and the number of cells in each; it updates at every change.

## Controls and adjustable parameters

The side panel allows you to act on the animation while it is running.

- **Pause / Start**: suspends or resumes the motion of the arrows.

- **Reset**: restores all parameters to their initial values (4 layers).

- **Number of convective layers**: from 1 to 4 (initial value 4). When the number of layers is changed, the parameters of each are replaced by a set of default values suited to that configuration.

- **Global speed**: multiplier of the speed of all layers (from $\times 0.1$ to $\times 3$; initial value $\times 1$).

- **Show cell trajectories**: shows or hides the white dashed lines that indicate the closed path of the plasma.

For each layer the following parameters are shown:

- **Number of cells**, *editable only for the deepest layer*: the following layers, going outwards, each have twice as many as the previous one and update automatically: with 4 cells in the first layer, for example, there are 4, 8, 16 and 32 cells. The maximum value allowed depends on the number of layers, because the number of cells in the last layer is limited to 80. More cells mean smaller cells.

- **Flow speed**: how fast the dashed arrows representing the motion of the plasma move (from 0.01 to 0.30).

- **Vortex size**: radius of the vortices drawn inside each cell (from 2 to 30). Values that are too large compared with the thickness of the layer or the width of the cell make neighboring vortices overlap.

## Tips for use

To compare the motion between the interior and the surface it is best to keep four layers and lower the global speed. Increasing the number of cells in the deepest layer, and consequently in the outer layers too, and reducing the vortex size gives an appearance closer to the photospheric granulation. With a single layer, instead, one sees the basic idea of convection, without the distinction between the different scales.

`;  // ← Last line: do not modify.
