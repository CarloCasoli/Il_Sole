SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   Testo inglese della scheda: corrisponde a funzione_sorgente_strati_scheda.js e all'Approfondimento 2.9 del libro inglese.

# The source function across the Sun's layers

## What the animation shows

The animation reconstructs the numerical example of In-depth section 2.9: the journey of radiation through 4 ideal layers of the solar atmosphere, from the deepest and densest up to the outermost one. To follow the energy bookkeeping without the complex units of specific intensity, the book uses a relative dimensionless scale from 0 to 150, where 150 represents the saturation level of the continuum in local thermodynamic equilibrium (LTE) at that layer's temperature.

Two parallel beams rise together: the **generic frequencies** (the continuum, i.e. the thermal background to which the gas is relatively transparent) and the **selective frequencies** (those at which the atoms of a particular element, at that precise temperature, are structured to latch onto and absorb). In each layer, the final balance of each beam is: (incoming radiation) + (local emission) + (local absorption, negative).

Each layer also shows small **arrows**: green pointing up for emission (gain), red pointing down for absorption (loss), with length proportional to the value. On the right, a panel shows the **spectral profile**: a curve that stays flat at 150 for the continuum, and that gets progressively carved out around the line's frequency as absorption proceeds — until, in the final layer, it forms the observed absorption line.

## The four layers

- **1. Deep region (thermal prison in LTE)**: very high density and temperature. The gas is in perfect thermodynamic equilibrium: it absorbs everything but emits just as much. Balance: 150 → 150, for both the continuum and the line.
- **2. Intermediate layer (transition towards transparency)**: the gas becomes almost transparent at generic frequencies (150 → 150), but some atoms start latching onto a specific frequency: the first absorption line appears (150 → 100).
- **3. Cold layer (temperature minimum)**: the gas is rarefied and cold, emitting almost nothing. For the continuum it stays transparent (150 → 150); for the selective line the little gas left is still a very strong filter, and the intensity drops to its minimum (100 → 50).
- **4. Superheated outer layer**: a paradox typical of the solar chromosphere — the density is almost zero, but mechanisms such as magnetic fields make the temperature rise again. The rarefied but excited atoms re-emit exactly at the line's frequency, lifting its intensity a little (50 → 75).

## The result: why we see spectral lines

The observer finally receives an intensity of **150** for the generic frequencies (the continuum, uniform and bright) and of **75** for the selective frequency. The difference between the two is exactly the absorption line observed in the spectrum: the fingerprint of the atoms' selective opacity along the line of sight. The small final rise (from 50 to 75) tells us something more: that line carries the information of a hotter outer layer, able to partly fill it in with its own emission — the same mechanism that produces the emission cores observed at the center of some chromospheric lines (e.g. the Ca II H and K doublet).

## The reference equations

Source function:

$$S_\nu = \frac{\eta_\nu}{k_\nu} = \frac{\eta_\nu}{\kappa_\nu \rho}$$

Radiative transfer equation (as a function of optical depth):

$$\frac{dI_\nu}{d\tau_\nu} = S_\nu - I_\nu$$

Formal solution for a homogeneous medium of optical thickness $\tau_\nu$:

$$I_\nu(\tau_\nu) = I_\nu(0)\,e^{-\tau_\nu} + S_\nu\left(1-e^{-\tau_\nu}\right)$$

When $\tau_\nu \gg 1$ (optically thick medium), the first term vanishes and $I_\nu \to S_\nu$: the intensity "forgets" where it started and aligns with the local source function.

## How to use the controls

- **Next / previous layer**: moves forward or back one layer, showing the balance calculation.
- **Play automatically**: advances on its own every 2.4 seconds; press it again to pause.
- **Restart**: goes back to the beginning, before radiation enters the first layer.

## Simplifications of the simulation

The numerical values (0-150) are those of the book's teaching example, not absolute physical measurements: they serve to illustrate the relative energy balances with bookkeeping clarity, not to compute a real specific intensity. Also, only two "families" of frequencies are represented (continuum and one selective line), while in reality every frequency has its own behavior.

In particular, the example's final result (150 vs 75, i.e. a line left at 50% of the continuum) is a depth chosen for teaching clarity, not calibrated on any specific real line. For comparison, a strong line such as **H-alpha** in the quiet solar spectrum has a core residual intensity of about **15-20%** of the continuum: much deeper than what is shown here. A line's real depth depends on its strength (opacity) and on the temperature structure of the layers where it forms — factors this animation deliberately simplifies to just 4 layers and 2 frequency families.

## Reference in the book

Chapter 2, §2.4 "The black body" and In-depth section 2.9 "Quantitative analysis of the Source Function".
`;  // ← Last line: do not modify.
