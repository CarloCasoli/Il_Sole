SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   English text of the description: corresponds to regione_pdr_scheda.js and to section 3.3.5 of the
%%   Italian book (capitolo3.tex): the photodissociation front, dust shielding, self-shielding and the PDR.

# Photodissociation Front and PDR Region

## What the animation shows

The animation shows, in cross-section, the edge of a molecular cloud exposed to the interstellar ultraviolet radiation field, as described in section 3.3.5 of the book. The horizontal axis is **not a physical distance**, but the **optical depth $A_V$** (dust extinction), the quantity that really governs how protected the interior of the medium is from radiation.

In the top panel, UV photons (orange particles) enter from the left and are progressively absorbed as $A_V$ increases, following the same extinction law used in astrophysics ($I \propto 10^{-0.4 A_V}$): fewer and fewer photons reach the right-hand side. Two vertical **chemical fronts** mark the fundamental transitions:

- **H $\to$ H$_2$**: beyond this front hydrogen can remain in molecular form instead of being photodissociated.
- **C$^+$ $\to$ CO**: deeper still, because carbon monoxide requires more shielding than plain H$_2$.

The **cyan** particles represent **H$_2$ self-shielding**: an effect distinct from simple dust shielding, in which the absorption bands of H$_2$ itself selectively block the radiation that would dissociate more H$_2$, concentrated right around the H$\to$H$_2$ front and making it sharper.

The bottom panel can show two alternative graphs (switch between them with the button):

1. **Chemical abundances**: the curves of H, H$_2$, C$^+$ and CO as a function of $A_V$, vertically aligned with the two fronts in the top panel.
2. **$A_V$ vs physical depth**: shows how the same optical depth corresponds to a different physical thickness depending on the cloud's density — the denser the cloud, the less space is needed to reach the same shielding.

## Elements of the scene

- **Three colored zones**: outer zone (atomic H, C$^+$), intermediate PDR zone (molecular H$_2$, C$^+$ still present), protected interior zone (H$_2$, CO).

- **Orange particles**: photons of the generic UV field, absorbed according to the dust extinction law.

- **Cyan particles**: H$_2$ self-shielding, concentrated near its own front.

## Controls and customizable parameters

- **UV field intensity ($G_0$)**: from $0.1$ to $10{,}000$ (Habing units). Increasing it pushes both fronts deeper: more shielding is needed to protect molecules in the presence of a more intense radiation field (such as near O/B stars).

- **Cloud density ($n$)**: from $0.1$ to $10{,}000\ \text{cm}^{-3}$. Affects only the second graph (the relation between $A_V$ and physical depth): at the same $A_V$, a denser cloud corresponds to a smaller physical thickness.

- **Show H$_2$ self-shielding**: toggles the cyan particles representing this effect.

- **A_V vs physical depth / Chemical abundances button**: switches the content of the bottom panel.

## Suggested use

To see the effect of the UV field, try pushing the $G_0$ slider to its maximum and watch both fronts (and with them the colored zones) shift to the right, enlarging the exposed outer zone at the expense of the PDR and the protected interior — the visual equivalent of a cloud close to massive stars. The $A_V$ vs physical depth graph, with density at its minimum, shows instead how much thickness a very rarefied cloud would need to reach the same shielding as a dense one.

The diagram is **qualitative**: the curves and front positions are chosen to reproduce the correct physical ordering of the effects described in the text, not to provide numerical values from an actual chemical network or radiative-transfer calculation.
`;  // ← Last line: do not modify.
