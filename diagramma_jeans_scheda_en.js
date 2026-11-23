SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   English text of the description: corresponds to diagramma_jeans_scheda.js and to Approfondimento 3.3 of the Italian book (capitolo3.tex).

# Interactive Jeans Diagram (T, n)

## What the animation shows

The animation shows the **thermodynamic state diagram of the interstellar medium** in the logarithmic temperature–density plane ($T$, $n$), the same one shown in the in-depth section 3.3 of the book. Each diagonal line marks, for a given mass $M$, the critical threshold beyond which a gas cloud can no longer remain in hydrostatic equilibrium and is bound to collapse gravitationally: the **Jeans mass**,

$$M_J \propto T^{3/2} \cdot \rho^{-1/2}$$

Unlike the static figure in the book, here the threshold is not fixed: choosing the cloud mass with the slider redraws the corresponding line in real time. A second panel below the diagram also shows how the cloud fragments into progressively smaller pieces as the collapse proceeds: the two panels share the same underlying physics and update together.

## Elements of the scene

- **Orange line (current threshold)**: the Jeans threshold computed for the mass set with the slider.

- **Dashed gray lines**: the four reference thresholds for 1, 10, 100 and 1000 $M_\odot$, identical to those in the book's diagram.

- **Colored background regions**: the typical zones of the interstellar medium (cold dense cores, giant molecular clouds, diffuse HI clouds, HII regions, hot intercloud medium, supernova remnants), to frame where the explored conditions physically sit.

- **Dashed red path (collapse evolution)**: not a simple arrow, but the characteristic shape (illustrative, not a fixed track) of a real cloud collapse, in two segments: a first, nearly vertical segment, the **isothermal phase**, where the cloud is still optically thin and cools by radiating freely — the temperature stays nearly constant while the density rises by many orders of magnitude; followed by a segment bending upward, the **adiabatic phase**, where the cloud has become optically thick and the heat stays trapped ($T \sim \rho^{2/3}$).

- **Colored point (draggable)**: represents a hypothetical cloud with a given temperature $T$ and density $n$. Two dashed guide lines connect the point to both axes, where the current numerical values of $T$ and $n$ are shown. It can be moved by hand or advanced automatically with the "Evolve" button.

- **Bottom panel — cloud fragmentation**: as soon as the local Jeans mass, computed at the current $(T,n)$ point, drops below the cloud's total mass, the cloud can split into progressively smaller, independently unstable pieces. The panel shows this hierarchical splitting live, drawing the fragments as circles: the color deepens, from orange to red, as the fragmentation generation gets deeper. A numeric readout in the top right of the panel reports the local Jeans mass, the approximate number of fragments, and the generation reached.

## Controls and customizable parameters

- **Cloud mass**: slider from $0.1$ to $10{,}000\ M_\odot$. Moves the current threshold line (orange) without changing the four reference lines, and restarts the fragmentation in the bottom panel from scratch.

- **Point on the graph**: freely draggable with the mouse or a finger. Its color changes in real time:
  - **green = STABLE**, if the point is below the threshold line (thermal pressure supports the cloud);
  - **red = UNSTABLE**, if the point is above the line (gravity wins and the cloud collapses).

- **Evolution speed**: slider from 2 to 20 seconds. Sets the duration of the animation started by the "Evolve" button.

- **▶ Evolve (cooling/compression)**: automatically advances the point along the collapse path (isothermal phase followed by adiabatic phase), starting from wherever the point currently is — not from a fixed position — so the evolution can be watched from whatever starting condition was chosen.

- **Reset point**: brings the point back to its initial position ($T \approx 20\,\text{K}$, $n \approx 3000\ \text{cm}^{-3}$, typical of a prestellar core) and resets the fragmentation.

- **Fragments in the bottom panel**: hover the mouse (or a finger) over a fragment to highlight, in the graph above, the Jeans threshold curve computed for that fragment's own mass (dashed cyan line), together with a label giving the fragment's mass and whether that piece, on its own, is stable or collapsing.

## Suggested use

To understand the role of mass, it helps to fix the point on a realistic physical condition (for example a giant molecular cloud, $T\approx 15\ \text{K}$, $n\approx 300\ \text{cm}^{-3}$) and then slide the mass control: as $M$ increases, the threshold line drops below the point, turning it from stable to unstable, showing why more massive clouds collapse more easily at the same temperature and density.

To watch collapse and fragmentation together, press **▶ Evolve** and follow both panels at once: as the point moves down the collapse path in the graph above, the bottom panel shows the cloud splitting progressively into a growing number of smaller pieces. Note that fragmentation is irreversible within the same scenario: even if the local Jeans mass rises again during the adiabatic phase, fragments that have already split off do not merge back — the splitting only restarts from scratch when the point is dragged again, "Evolve" is run again from a new starting point, the cloud mass is changed, or "Reset point" is pressed.
`;  // ← Last line: do not modify.
