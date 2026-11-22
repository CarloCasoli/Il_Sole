SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   English text of the description: corresponds to diagramma_jeans_scheda.js and to Approfondimento 3.3 of the Italian book (capitolo3.tex).

# Interactive Jeans Diagram (T, n)

## What the animation shows

The animation shows the **thermodynamic state diagram of the interstellar medium** in the logarithmic temperature–density plane ($T$, $n$), the same one shown in the in-depth section 3.3 of the book. Each diagonal line marks, for a given mass $M$, the critical threshold beyond which a gas cloud can no longer remain in hydrostatic equilibrium and is bound to collapse gravitationally: the **Jeans mass**,

$$M_J \propto T^{3/2} \cdot \rho^{-1/2}$$

Unlike the static figure in the book, here the threshold is not fixed: choosing the cloud mass with the slider redraws the corresponding line in real time, making it possible to see concretely how the critical threshold shifts as $M$ changes.

## Elements of the scene

- **Orange line (current threshold)**: the Jeans threshold computed for the mass set with the slider.

- **Dashed gray lines**: the four reference thresholds for 1, 10, 100 and 1000 $M_\odot$, identical to those in the book's diagram.

- **Colored background regions**: the typical zones of the interstellar medium (cold dense cores, giant molecular clouds, diffuse HI clouds, HII regions, hot intercloud medium, supernova remnants), to frame where the explored conditions physically sit.

- **Dashed red arrow**: the typical evolutionary path of a cloud that cools and compresses, from diffuse conditions towards collapse.

- **Colored point (draggable)**: represents a hypothetical cloud with a given temperature $T$ and density $n$. Two dashed guide lines connect the point to both axes, where the current numerical values of $T$ and $n$ are shown.

## Controls and customizable parameters

- **Cloud mass**: slider from $0.1$ to $10{,}000\ M_\odot$. Moves the current threshold line (orange) without changing the four reference lines.

- **Point on the graph**: freely draggable with the mouse or a finger. Its color changes in real time:
  - **green = STABLE**, if the point is below the threshold line (thermal pressure supports the cloud);
  - **red = UNSTABLE**, if the point is above the line (gravity wins and the cloud collapses).

- **Reset point**: brings the point back to its initial position ($T \approx 20\,\text{K}$, $n \approx 3000\ \text{cm}^{-3}$, typical of a prestellar core).

## Suggested use

To understand the role of mass, it helps to fix the point on a realistic physical condition (for example a giant molecular cloud, $T\approx 15\ \text{K}$, $n\approx 300\ \text{cm}^{-3}$) and then slide the mass control: as $M$ increases, the threshold line drops below the point, turning it from stable to unstable, showing why more massive clouds collapse more easily at the same temperature and density.
`;  // ← Last line: do not modify.
