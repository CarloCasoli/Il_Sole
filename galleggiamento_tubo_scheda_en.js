SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   English text of the fact sheet: corresponds to galleggiamento_tubo_scheda.js,
%%   translated from paragraph 5.2 of the Italian book (the English chapter 5 does not exist yet).

# Buoyancy of the magnetic flux tube

## What the animation shows

The animation shows why a magnetic flux tube, formed at the base of the convection zone, is lighter than the plasma around it and rises toward the surface (magnetic buoyancy). It follows step by step the physical chain described in in-depth section 5.2: intense magnetic field → magnetic pressure $B^2/(2\mu_0)$ → lower internal gas pressure $P_i$ → lower internal density $\rho_i$ → upward buoyancy → rise and expansion. This chain is shown below the animation, with the steps of the current phase highlighted.

The animation is divided into two phases, selectable with the buttons at the top.

In phase **1 – Tube in equilibrium** the cross-section of the tube is observed at rest at the base of the convection zone. At the edge of the tube $P_e = P_i + B^2/(2\mu_0)$ must hold: the more field there is, the less gas is needed inside to balance the external pressure. Since the internal temperature equals the external one ($T_i = T_e$), a lower gas pressure means a lower density: the tube weighs less than the plasma it displaces, and the Archimedes buoyancy exceeds the weight.

In phase **2 – Rise** the tube rises from the base of the convection zone, at about 200,000 km depth, up to the photosphere. As it rises, the external pressure decreases and the tube expands. The magnetic flux $\Phi = B \cdot A$ and the mass of the tube are conserved: the area $A$ grows and the field $B$ decreases. The net buoyancy weakens, but as long as the tube contains magnetic field it stays directed upward, all the way to the surface.

The animation is a qualitative model. The tube is treated as thin and in thermal equilibrium with its surroundings; the convection zone is described as a polytrope (with $P \propto \text{depth}^{2.5}$ and $\rho \propto \text{depth}^{1.5}$) and gravity varies as $1/r^2$, so that it is about half at the photosphere compared with the base. In reality, at the base of the convection zone $P_e \approx 6\cdot10^{12}$ Pa and $B \approx 10$ T ($10^5$ G): the magnetic pressure is therefore only about 1/150,000 of the gas pressure. To make it visible, without the real-values option the magnetic pressure is amplified by about $10^4$–$10^5$ times. The times of the rise are also strongly accelerated, and the radius of the tube is not to scale.

## Elements of the scene

- **Pressures at the tube boundary** (bars on the left, in % of $P_e$): the external pressure $P_e$, the internal gas pressure $P_i$, the magnetic pressure $P_m$ and the stacked column $P_i + P_m$, which always reaches the dashed level of $P_e$.
- **Forces on the tube** (bars on the right): the weight $\rho_i \cdot g \cdot V$ (in red, downward), the Archimedes buoyancy $\rho_e \cdot g \cdot V$ (in blue, upward) and the net force. In phase 1 they are expressed in % of the buoyancy, which stays fixed; in phase 2 in % of the weight at the base.
- **Cross-section of the tube** (phase 1): the tube is seen in cross-section, with the field lines shown by ⊙ (coming out of the screen, in a number proportional to $B$) and the gas particles shown by dots, both inside and outside the tube. Outside, the plasma is denser and more compressed toward the bottom. The arrows along the edge show the pressures: in blue $P_e$, in light blue $P_i$, in purple $P_m$. At the center of the tube three vertical arrows indicate buoyancy, weight and net force; an indicator compares the gas density outside ($\rho_e$) and inside ($\rho_i$) the tube.
- **Rise** (phase 2): a column running from the base of the convection zone to the photosphere, with the depth scale in km. The tube rises leaving a dashed trail of earlier positions and widens as it rises; the arrows beside it show weight, buoyancy and net force.
- **Values panel** (phase 2): depth, field $B$, area $A$, flux $\Phi = B \cdot A$ (which stays constant), ratio $\rho_i/\rho_e$, gravity relative to the base, weight and net buoyancy.
- **Graphs**: in phase 1 they show the internal pressures and the net buoyancy as $B$ grows; the net buoyancy grows as $B^2$, because the weight decreases. In phase 2 they show, on a logarithmic scale, how during the rise $B$ decreases, $A$ grows and $\Phi$ stays constant; the second graph plots buoyancy, weight and net force as a function of depth.

## Controls and adjustable parameters

- **1 Tube in equilibrium / 2 Rise**: choose the phase to observe.
- **Field B**: intensity of the magnetic field in the tube at the base of the convection zone. Without real values it is expressed as a multiple of the reference value (from ×0 to ×1.43; initial value ×1, corresponding to $P_m \approx 24.5\%$ of $P_e$). With real values it is expressed in tesla (from 0 to 14.3 T; initial value 10 T). With $B = 0$ there is no magnetic pressure and the tube stays still.
- **Start the rise** (phase 2 only): starts the tube from the base of the convection zone.
- **Pause / Resume**: suspends or resumes the animation.
- **Restart**: brings the tube back to the base of the convection zone, ready for a new rise. The same happens when the field $B$ is changed or real values are turned on.
- **Speed**: scales the speed of the animation, from ×0.33 to ×3 (initial value ×1).
- **Real values**: uses the real proportions between magnetic pressure and gas pressure ($P_m \approx 1/150,000$ of $P_e$). The differences between the values become extremely small and are expressed in parts per million (ppm).

The animation adapts to the screen: on a phone the bars are placed above the drawing. It also follows the device's light or dark theme.

## Tips for use

It helps to start from phase 1 and slowly move the field-B slider: the field lines ⊙ increase, the gas particles inside the tube decrease and the column $P_i + P_m$ always stays equal to $P_e$, while the weight arrow shortens and the net buoyancy appears. One can then move to phase 2 and start the rise, watching in the values panel how $B$ decreases and $A$ increases while their product $\Phi$ stays constant. Repeating the rise with different values of $B$ shows that a stronger field makes the tube rise faster. Finally, turning on real values shows how small in reality the density difference is that is enough to make the tube rise through the whole convection zone.

`;  // ← Last line: do not modify.
