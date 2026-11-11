SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   Testo inglese della scheda: corrisponde a fotoni_sole_scheda.js e allo Script 4.3 del libro inglese.

# 2D model of photon motion in the core and radiative zone

## What the animation shows

The animation simulates in two dimensions the journey of a photon from the core to the surface of the Sun. Photons are born at the center and proceed by *random walk*: at each collision they change direction randomly and travel a very short distance. In the radiative zone (inner, up to about $0.7\,R_\odot$) the motion is therefore a slow zig-zag diffusion. Beyond the boundary with the convection zone the direction becomes essentially stable, with a slight angular drift, like a bubble of rising plasma; once past the surface the photon continues in a straight line up to a final distance and is removed from the count of active photons, while its track remains drawn on the scene. Each photon has a random color, so that the individual paths can be told apart.

Since the real escape times are of the order of tens or hundreds of thousands of years and the real steps are of the order of a centimeter, the animation is *not to scale*: the collisions are enormously compressed and the simulated time is only a statistical indicator. The aim is to show qualitatively why a photon takes so long to get out, even though it travels at the speed of light.

## Controls and adjustable parameters

- **Start / Pause**: starts or suspends the simulation.

- **Clear scene**: clears the tracks and counters and redraws the Sun.

- **Generation rate**: number of new photons emitted by the core per real second (from 0.2 to 20 per second; initial value 3).

- **Simulation speed**: number of steps computed for each photon at each frame (from $\times 1$ to $\times 60$; initial value $\times 8$). High values speed up the escape of photons.

- **Step duration (simulated years)**: minimum–maximum interval (1–5000, initial 200–1500) from which the time associated with each single collision is drawn at random. It affects *only* the mean simulated time shown in the statistics, not the geometry of the path.

- **Step length (pixels)**: minimum–maximum interval (0.1–15, initial 0.6–2) of the length of each step. Shorter steps require more collisions to get out and make the path denser and slower; longer steps produce faster escapes.

- **Convection zone speed**: multiplier (from $\times 2$ to $\times 50$, initial $\times 10$) applied to the step beyond the inner boundary of the convection zone; the step is in any case limited to a fraction of the radius to avoid excessively wide oscillations.

- **Maximum simultaneous photons**: cap on the number of active photons (from 100 to 6000, initial 3000), useful for adapting the computational load to one's device.

## Counters

The panel shows in real time the active photons, the photons that have escaped, the mean simulated escape time and the percentage of steps actually computed per frame (*throttling*), which is automatically reduced if the device cannot handle the load.

## Tips for use

To observe diffusion in the core properly it is best to reduce the *Step length* and use a low *Generation rate*. Increasing the *Convection zone speed*, on the other hand, highlights the contrast between the slow internal diffusion and the rapid transport in the outer layers.

`;  // ← Last line: do not modify.
