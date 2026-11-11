SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   Testo inglese della scheda: corrisponde a reazioni_nucleari_scheda.js e allo Script 4.1 del libro.

# Nuclear reactions

## What the animation shows

The animation accompanies In-depth sections 4.1 and 4.2 and follows the path of energy in the core of the Sun: from the encounter of two nuclei that repel each other, to the reactions that turn four protons into a helium nucleus, up to the balance of the energy released. It is divided into four sheets, selected with the tabs at the top.

*1 – Barrier and tunneling.* The graph reproduces the Gamow peak figure of In-depth section 4.2: the Maxwell–Boltzmann distribution (in blue), the probability of crossing the barrier by quantum tunneling (in red) and their product, the Gamow peak (in orange). Unlike the figure, here the temperature can be varied. The graph uses a fixed scale and the area of the peak is proportional to the number of reactions: as the temperature rises the peak does not just shift towards higher energies, but grows, while the gray dashed curve stays fixed on the peak at the center of the Sun (15.7 million kelvin) as a reference. Three pairs of nuclei can be compared: p + p, p + $^{12}$C and p + $^{14}$N, the slowest step of the CNO cycle. With a larger charge the barrier is higher and the temperature dependence becomes much steeper: raising the temperature to 20 million kelvin, the p + p reactions increase about $2.4$ times, the p + $^{14}$N reactions almost a hundred times.

*2 – P-P chain.* The reactions of the proton–proton chain are shown one at a time, with conservation of charge, nucleon number and lepton number. The diagram on the right shows the current reaction; steps 1–3 occur twice, because two $^{3}$He nuclei are needed. At the bottom, vertical bars show the mean waiting time of each reaction in the solar core, and appear as the sequence proceeds: about $10^{10}$ years for p + p, about one second for d + p, about $10^{5}$ years for $^{3}$He + $^{3}$He. It is clear that the first reaction is the bottleneck of the whole chain. As a further step, the ppII and ppIII branches can also be shown.

*3 – CNO cycle.* The wheel shows the six reactions of the CNO cycle, in which carbon, nitrogen and oxygen act as catalysts: the $^{12}$C that enters the cycle comes out intact, while four protons become a helium nucleus. Here too the bars show the mean waiting time of each reaction at the center of the Sun, from the two minutes of the $^{15}$O decay to the roughly $3 \cdot 10^{8}$ years of the p + $^{14}$N capture, the slowest step. The graph on the right compares the energy produced per kilogram by the two cycles as a function of temperature: at the center of the Sun the P-P chain dominates, while above about 17 million kelvin the CNO cycle dominates, as happens in more massive stars (In-depth section 6.1).

*4 – Energy balance.* A scale compares the mass of four protons with that of a helium nucleus: the difference, about $0.7\%$, is turned into energy according to the relation $Q = \Delta m \, c^{2}$. The calculation can be done with nuclear or with atomic masses, and a text explains why the two methods give the same result, 26.73 MeV, once the electrons are taken into account. The total is the same for the two cycles, but the reactions in which the energy is released change, and so does the share carried away by neutrinos, which leave the Sun at once without heating it: about $2\%$ in the P-P chain and about $6\%$ in the CNO cycle. A final animation shows the different fate of neutrinos, which cross the Sun in a few seconds, and of photons, whose energy takes hundreds of thousands of years to leave the radiative zone.

The blue and red curves of the first sheet are each drawn with their own scale, to show their shape: the tunneling probability, for example, is about $10^{-4}$ at the Gamow peak for the p + p pair and about $10^{-18}$ for the p + $^{14}$N pair. The waiting times and the energy production curves refer to the conditions at the center of the Sun, where the CNO cycle weighs most: integrated over the whole core, the CNO cycle provides about $1\%$ of the Sun's energy.

## Controls and adjustable parameters

- **Tabs 1–4**: select the sheet.

- **Pause / Start** and **Speed**: apply to all sheets; the speed ranges from $\times 0.25$ to $\times 3$ (initial value $\times 1$). **Restart** takes the open sheet back to the beginning.

- **Pair** (sheet 1): chooses the two nuclei that meet, p + p, p + $^{12}$C or p + $^{14}$N.

- **Temperature** (sheets 1 and 3): from 8 to 35 million kelvin in the first sheet, from 8 to 30 in the third; the **Center of the Sun** button resets the value to 15.7 million kelvin.

- **Previous reaction / Next reaction** (sheets 2 and 3): move from one reaction to the next even with the animation paused. In sheet 2 one can also click on a box of the diagram.

- **Show the ppII and ppIII branches** (sheet 2): adds to the diagram the two secondary branches of the P-P chain, with the reactions of beryllium, lithium and boron.

- **Linear / logarithmic time scale** (sheets 2 and 3): on a linear scale the real proportions can be perceived, but the smallest bars are not visible; on a logarithmic scale they can all be seen.

- **Nuclear / atomic masses** and **P-P chain / CNO cycle** (sheet 4): choose the type of masses used in the calculation and the cycle whose energy breakdown is shown.

## Graphs and indicators

In the first sheet, at the top right of the graph, the factor by which the number of reactions changes with respect to the center of the Sun is shown; when the peak becomes too high it leaves the graph and a warning appears. Below the graph the numerical values for the chosen pair and temperature are shown: typical thermal energy $kT$, barrier height and its ratio to $kT$, Gamow energy $E_G$, position $E_0$ and width of the peak, thickness of the barrier to be crossed, tunneling probability, temperature sensitivity (the reaction rate varies as $T^{\nu}$) and change in the rate for a $10\%$ temperature increase.

In the third sheet the values below the wheel show the energy produced per kilogram by the two cycles, the share of the CNO cycle, the exponent $\nu$ of each cycle (about 4 for the P-P chain and about 20 for the CNO cycle at the center of the Sun) and the temperature at which the two curves cross.

In the fourth sheet the energy breakdown is split into two rows: above, the energy released by each phase of the cycle; below, in yellow, the part carried away by neutrinos, aligned with the phase in which they are produced. At the bottom of the sheet some global figures for the Sun are given: the helium nuclei produced per second, the hydrogen transformed and the mass converted into energy every second, and the number of solar neutrinos crossing each square centimeter of the Earth.

## Tips for use

In the first sheet it is best to start from the center of the Sun with the p + p pair and raise the temperature slowly, watching the orange peak grow relative to the gray dashed curve; repeating the test with the p + $^{14}$N pair shows how much steeper the growth is, and makes it clear why the CNO cycle dominates in hotter stars. In sheets 2 and 3 it is useful to pause and advance with *Next reaction*, comparing the time bars first on a linear and then on a logarithmic scale. In the fourth sheet, switching from the P-P chain to the CNO cycle, one sees that the total does not change while the neutrino row does. The journey of photons continues in the animation *2D model of photon motion in the core and radiative zone*.

`;  // ← Last line: do not modify.
