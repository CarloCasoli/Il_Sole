SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   Testo inglese della scheda: corrisponde a tachocline_scheda.js e allo Script 4.4 del libro inglese.

# The tachocline

## What the animation shows

The animation shows the *shear* that characterizes the tachocline, the thin transition region at about $0.70\,R_\odot$ where the Sun passes from the almost rigid rotation of the radiative zone to the differential rotation of the convection zone.

On the left is a *meridional cross-section* of the Sun, colored according to the local rotation period: red marks the regions that rotate fastest (about $25$ days), blue the slowest (about $35$ days). The radiative zone has a uniform color, because it rotates as a single body in about $27$ days; the convection zone instead shows the gradual transition from the fast equator to the slow poles. A white line marks the chosen latitude.

On the right the same latitude is seen from the north pole. Twelve white lines represent “spokes” of plasma that are initially perfectly aligned, from the radiative zone (inner ring) to the convection zone (outer ring); the light band between the two rings is the tachocline. As time passes, each segment of the spokes rotates with the angular velocity of the layer it is in: the spokes stay straight in the radiative zone and in the convection zone, but bend in the tachocline, where the velocity changes abruptly. Two colored dots on each spoke follow the plasma above (yellow, $0.80\,R_\odot$) and below (light blue, $0.60\,R_\odot$) the tachocline.

Below the scene, a graph shows the angular velocity as a function of radius for different latitudes: in the convection zone the curves are separate, while below the tachocline they converge to a single value. This is the internal rotation profile derived from helioseismic observations.

The animation is *not to scale*: in the view from the pole the depth is stretched to make the tachocline visible, the rotation law is simplified and the periods are indicative; time runs at about $10$ simulated days per real second. In the model the radiative zone rotates in about $26.9$ days, the equator of the convection zone in about $25.2$ days and the high latitudes in over $33$ days.

## Elements of the scene

- **Meridional cross-section**: half of the Sun seen edge-on, with the dashed rotation axis and the boundary of the tachocline marked by a dashed arc at $0.7\,R_\odot$.

- **Color bar**: associates each color with the rotation period, from $25$ to $35$ days.

- **View from the north pole**: the circle of the chosen latitude, with depth along the radial axis (from $0.5$ to $0.9\,R_\odot$); the central part is not shown.

- **Plasma spokes**: twelve white lines, one of which is thicker so that it is easier to follow, with yellow dots (above the tachocline) and light-blue dots (below the tachocline).

- **Rotation profile graph**: angular velocity in nHz (with the corresponding period in days) as a function of radius, for latitudes $0^\circ$, $15^\circ$, $30^\circ$, $45^\circ$, $60^\circ$ and $75^\circ$; the chosen latitude is highlighted in orange and the tachocline band is shaded.

## Controls and adjustable parameters

- **Pause / Start**: suspends or resumes the rotation.

- **Reset**: sets the time back to zero with the spokes aligned again and leaves the animation paused, so that the initial situation can be described before starting it.

- **Latitude**: chooses the latitude observed, from $0^\circ$ to $80^\circ$ (initial value $15^\circ$). It updates the line on the meridional cross-section, the view from the pole and the highlighted curve in the graph.

- **Speed**: multiplier of the animation speed, from $\times 0.25$ to $\times 4$ (initial value $\times 1$).

- **Frame co-rotating with the radiative zone**: views the scene rotating together with the radiative zone. The interior appears still and only the slip of the convection zone relative to it remains visible.

## Information panel

The panel summarizes the characteristic quantities of the three layers: for the convection zone and for the radiative zone it gives the rotation period at the chosen latitude; for the tachocline, its position ($\sim 0.70\,R_\odot$), thickness (a few percent of the radius), temperature ($\sim 2\times10^6$ K) and density ($\sim 0.2$ g/cm$^3$). A final box shows whether, at the chosen latitude, the plasma above the tachocline is ahead of or behind the radiative zone, and shows the simulated time elapsed. At the bottom of the panel are links to the animations of the $\Omega$ effect and of the buoyancy of flux tubes, which continue the description in the chapter devoted to the magnetic field.

## Tips for use

It is best to start with the inertial frame: the whole Sun rotates and the slip is hard to notice. Switching on the *frame co-rotating with the radiative zone*, the interior stops and the deformation of the spokes in the tachocline becomes evident.

Then, moving the latitude, one sees that near the equator the plasma above the tachocline moves ahead, while at high latitudes it lags behind. There is an intermediate latitude, about $35^\circ$ (about $37^\circ$ in the model), at which the two zones rotate at the same speed and the slip almost vanishes. After each change of latitude it is best to press *Reset* and then *Start*, to observe the deformation starting from aligned spokes.

`;  // ← Last line: do not modify.
