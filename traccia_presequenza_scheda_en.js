SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   English text of the description: corresponds to traccia_presequenza_scheda.js and Script 3.1 of the English book.

# Pre-main-sequence track of the Sun on the H-R diagram

## What the animation shows

The animation moves a point along the pre-main-sequence evolutionary track of the solar protostar on the Hertzsprung-Russell diagram (log $T_{\text{eff}}$ – log $L$), through the points A→F described in Chapter 3:

- **A→B**: nearly isothermal dynamical collapse of the prestellar core (Class 0), reaching the first hydrostatic core at B (luminosity minimum);
- **B→C**: collisional dissociation of molecular hydrogen, second dynamical collapse, accretion shock and birth of the compact protostar (Class 0→I transition);
- **C→D**: thermodynamic contraction (Virial Theorem) until the protostar becomes fully convective and settles on the Hayashi track (Class I→II, T Tauri);
- **D→E**: continuation along the Hayashi track, ignition of deuterium burning;
- **E→F**: departure from the Hayashi track and rise along the Henyey track, the $^{12}\text{C}$ flash, the stable ignition of the p-p chain and arrival on the ZAMS at F.

The elapsed time since the start of the collapse is shown on a *logarithmic* scale, from 1 year to about $7.5 \cdot 10^7$ years (the Sun's age when it reaches the ZAMS, as stated in the chapter). This choice makes it possible to visually appreciate how unequal the durations of the different phases are: the B→C segment, for instance, lasts only about ten days, while the descent along the Hayashi track (C→D→E) takes tens of millions of years. Moving the time slider at a constant rate on the logarithmic scale, the B→C segment is traversed almost instantly compared with the rest of the path.

## Controls and adjustable parameters

- **Start / Pause**: starts or suspends the automatic advance of the point along the track.

- **Reset**: brings the simulation back to point A.

- **Simulation speed**: speed multiplier (from $\times 0.2$ to $\times 4$; initial value $\times 1$). The full A→F path takes about 22 seconds at $\times 1$ speed.

- **Elapsed time (log scale)**: manual slider to place the point at any instant between 1 year and $7.5 \cdot 10^7$ years; useful for freely exploring the track without waiting for the animation.

- **Jump to point**: six buttons (A-F) to jump directly to each of the key points described in the chapter.

## Counters

The panel shows in real time: the current point and the YSO evolutionary class (Class 0, I, II or ZAMS), the effective temperature $T_{\text{eff}}$, the luminosity $L/L_\odot$, the radius $R/R_\odot$ (derived from the Stefan-Boltzmann law, $L = 4\pi R^2 \sigma T_{\text{eff}}^4$) and the elapsed time since the start of the collapse.

## Note on the values used

The durations given for point B ($\tau_{\text{dyn}} \approx 10^4$ years, within the $10^2$–$10^5$ year range stated in the text), for the B→C segment (≈10 days), for the D→E segment ($\approx 10^6$ years) and the total time at point F ($\approx 7.5 \cdot 10^7$ years) are those reported in Chapter 3.

The values of $T_{\text{eff}}$ and $L$ at the intermediate points A, B, C, D and E are **not figures taken from the text**: the chapter only describes the qualitative shape of the track (nearly vertical descent A→B, sharp rise B→C, descent on the Hayashi track C→D→E, rise along the Henyey track E→F) and refers to the chapter's static figure for the real shape of the track. The values used here were chosen to plausibly match this qualitative behaviour.

Point F, instead, corresponds to the real parameters of today's Sun, as given in the chapter's table of solar parameters: $T_{\text{eff}} = 5772\ \text{K}$, $L = L_\odot$.

The dashed light-blue line is the **Zero Age Main Sequence (ZAMS)**, drawn permanently on the diagram as a reference: it is the locus of points where stars of different masses, once the pre-main-sequence contraction is over, begin stable hydrogen fusion. Here too, only the point at $1\ M_\odot$ (which coincides with point F) corresponds to the real values of the Sun; the other points on the line are indicative and are meant only to give an idea of how the main sequence behaves for different masses.

`;  // ← Last line: do not modify.
