SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   Testo inglese della scheda: corrisponde a equilibrio_nucleo_scheda.js e allo Script 4.2 del libro inglese.

# The thermostat of the solar core

## What the animation shows

The animation shows how the Sun maintains its internal equilibrium between the *weight* of the overlying layers, the *gas pressure*, the *radiation pressure* and the *efficiency of the thermonuclear reactions* $\varepsilon$, which depends strongly on temperature (pp chain, $\varepsilon \propto \rho T^4$; CNO cycle, $\varepsilon \propto \rho T^{17}$). A button briefly alters the efficiency of the reactions and one observes how the system reacts. Two models are available, selectable at the top.

In the *Kippenhahn–Weigert model* (core thermostat) the core and the layers above it move together: the pressure the core must support (weight/area) varies as $1/r^4$, because the overlying mass stays constant but gravity decreases and the area grows. If the reactions produce more energy than normal, the core expands and, by the virial theorem, cools down: the efficiency drops below the equilibrium value and the core then slowly contracts again until it returns to the initial state. A decrease in efficiency produces the opposite effect. This is the mechanism that makes the Sun stable.

In the *Schwarzschild–Härm model* (bubble at constant pressure, a case analogous to the thin-shell instability, 1965) the layers above the bubble do not move and the weight stays constant: the heated bubble expands while remaining hot, with no thermostat at all, and returns to equilibrium only because radiation exchanges heat with the surrounding plasma.

On the left, the pressure vectors (weight, gas pressure, radiation pressure, their sum and the resultant) and the deviations of temperature and density are drawn on a single scale and on a reference grid. On the right is the cross-section of the core (or of the bubble) with the moving ions and the flashes of the reactions: green for the pp chain, purple for the CNO cycle.

Since in the real Sun the variations are fractions of a thousandth and develop over very long times, the animation is *not to scale*: the variations are greatly amplified, the times accelerated, and the radiation pressure is enlarged (in the core it is about $1/1500$ of the gas pressure). The aim is to show the self-regulating mechanism qualitatively.

## Controls and adjustable parameters

- **Model**: selects the whole core (thermostat) or the isolated bubble; the active button is highlighted and the simulation restarts from equilibrium.

- **Increase efficiency / Decrease efficiency**: suddenly multiplies (or divides) the efficiency of the reactions; the pulse then dies away gradually. Repeated clicks in quick succession add a step to the pulse, up to a maximum of three.

- **Pause / Start** and **Reset**: suspend the simulation or bring it back to equilibrium, clearing the graphs.

- **Intensity**: pulse factor at the first step (from $\times 1.15$ to $\times 2.50$; initial value $\times 2.05$). The second and third steps each add half of the initial change.

- **Speed**: how fast the simulation runs (from $\times 0.33$ to $\times 8$; initial value $\times 1$). It does not change the physics, only the pace at which it is observed.

- **Real P rad (1/1500)**: shows the radiation pressure in its real proportion, practically invisible, instead of enlarged to 25% of the total pressure.

## Graphs and indicators

The vectors are expressed as a percentage of the equilibrium weight; the labels show the instantaneous values, while the deviations of temperature and density are amplified 5 times. Above the cross-section are shown the deviation of the radius (drawn amplified 8 times), the efficiency of the plasma and, during a pulse, the imposed factor and the step reached. At the bottom, the left-hand graph shows over time the deviations of radius, temperature, radiation pressure and weight/area (fixed scale $\pm 40\%$); the right-hand one shows the total efficiency of the reactions on a logarithmic scale (from $\times 0.25$ to $\times 4$). The colored bands mark the pulses: red for increases, light blue for decreases.

## Tips for use

To see the thermostat at work it is best to give a single *Increase efficiency* in the core model and follow the $\varepsilon$ graph: the initial jump is followed by a dip below equilibrium and a slow recovery. Repeating the test in the bubble model shows that the dip does not appear: without the change in weight/area there is no self-regulation. With a low *Speed* the individual phases are easier to follow.

`;  // ← Last line: do not modify.
