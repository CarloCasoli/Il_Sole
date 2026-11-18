SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   Testo inglese della scheda: corrisponde a corpo_nero_cavita_scheda.js e all'Approfondimento 2.3 del libro inglese.

# The black body as a cavity

## What the animation shows

The animation stages the physical model used in Chapter 2 (In-depth section 2.3, "The black body") to introduce the concept of a black body: a closed cavity, with walls all at the same temperature T and a small hole towards the outside. Radiation that enters does not leave immediately: it follows a long, winding path, being continuously absorbed, re-emitted and scattered by the walls. After a very large number of interactions the radiation loses the memory of the conditions it entered with (direction, color, intensity) and settles into thermal equilibrium with the walls: the spectrum leaving the hole is therefore the black-body spectrum at the cavity's temperature T, described by Planck's law.

## Why the hole must be small

If the hole were large, a photon could leave after very few collisions, still carrying the "memory" of the conditions it entered with: in that case the outgoing radiation would not faithfully represent the internal temperature of the cavity. A small hole instead forces the radiation to undergo an enormous number of collisions before finding the way out, guaranteeing that by the time it leaves it has truly reached thermal equilibrium with the walls.

## The physical laws involved

Planck's law:

$$B(\lambda,T) = \frac{2hc^2}{\lambda^5}\cdot\frac{1}{e^{hc/(\lambda kT)}-1}$$

Wien's law:

$$\lambda_{max} \approx \frac{2.898\times10^6\ \text{nm·K}}{T}$$

As the cavity's temperature rises, the equilibrium color the photons "drift" towards after many collisions moves from red (low T) to white-yellow (solar T, ≈5800 K) up to intense blue (very high T) — exactly as in the chapter's figure "Wien's law: black-body emission curves and the corresponding color of the stars".

## How to use the controls

- **Guided mode**: follows a single photon with step-by-step captions; ideal for understanding the mechanism the first time.
- **Free mode**: injects many photons together, to observe the statistical effect and the counters.
- **Cavity temperature**: changes the equilibrium color and the $\lambda_{max}$ computed from Wien's law.
- **Wall roughness**: makes the photons' path more or less winding (it does not change the underlying physics, only the staging).
- **Hole size**: a larger hole lets photons out with fewer collisions, showing why a small hole is needed for a "faithful" black body.

## Simplifications of the simulation

For teaching clarity: a photon's color is a visual representation of its "equivalent temperature", not a rigorously computed wavelength; the times and speeds are not to real scale; the number of collisions needed to thermalize is deliberately small (tens, not the real millions of interactions) so that it stays observable by eye. The color of the solid cross-section too, chosen to always be recognizable (red-orange, yellow, blue), is a didactic tint and not the exact physical color of a black body at that temperature.

## Reference in the book

Chapter 2, §2.4 "The black body" and In-depth section 2.3 "The black body".
`;  // ← Last line: do not modify.
