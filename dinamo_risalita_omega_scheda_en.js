SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the scheda's text in Markdown:
%%   ## heading   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%% English translation of the existing Italian scheda (dinamo_risalita_omega_scheda.js).

# From the dynamo to the sunspot

## What the animation shows

The animation goes with sections 5.7 (birth of the toroidal field), 5.8 (instability of the toroidal field and emergence) and 5.10 (Hale's and Joy's laws), and picks up section 4.4 on the tachocline. It follows one stretch of magnetic field along its entire path: from the base of the convective zone, where differential rotation turns it into a big toroidal tube, to the photosphere, where one of its stretches emerges and forms a pair of sunspots.

It answers a question the simplified figures leave open: where does the horizontal stretch seen emerging at the surface come from? It is not a tube running just below the photosphere, but the **top of an Ω-shaped arch** whose legs run down for about 200,000 km, nearly along the radius, to the toroidal tube in the tachocline. The toroidal tube does not rise as a whole: it stays down, and only the stretch that becomes unstable rises.

## What you see

The figure is a **sector of the convective zone**: 90° of longitude and 30° of latitude, from 10° to 40° north, between the tachocline (about 0.7 solar radii) and the photosphere. The arch's legs rise along the radii, that is outward from the center of the Sun, marked below the figure.

- **Radiative zone** (grey), **tachocline** (light orange), **convective zone** and granulated **photosphere**. The ticks on the right show depth (0, 100,000, 200,000 km) and latitude (20°, 30°, 40° N).
- **Field lines and flux tubes** (purple): the oblique stripes on the tubes' surface represent the field lines wound around the tube's axis.
- **Grey dots**: the plasma carried by the convective cells.
- **Orange dots along the tube**: the plasma sliding from the top of the arch toward the feet.
- **Dashed line**: the radial rise, that is the path the top would follow without the Coriolis force. **Red line**: the top's actual path.
- **Sunspots**: where the legs cross the photosphere; the + and − signs show polarity. Above the photosphere the arch continues into the corona (transparent orange).

The box below the figure describes the phase in progress.

## The six phases

- **1. Poloidal field.** At the base of the convective zone the field left over from the previous cycle runs along the meridians. If the north pole is positive, as in the example in section 5.10, at the base of the convective zone the lines run from south to north: it is the inner branch of the lines that leave the north pole and re-enter at the south pole. It is weak, of order $10^2$ gauss.
- **2. Differential rotation (Ω effect).** The plasma nearer the equator rotates faster than the plasma nearer the pole; the arrows show this difference relative to the central latitude. The field is frozen into the plasma (section 5.5): every line is dragged and stretched in the direction of rotation. The line highlighted in red lets you follow one of them. As they stretch, the lines draw closer to each other and the field intensifies to about $10^4$ gauss within a few years.
- **3. The toroidal tube is born.** The field, by now almost entirely parallel to the equator, gathers into flux tubes that run along the whole circumference. They stay stored in the tachocline, where convection cannot drag them away, and reach about $10^5$ gauss.
- **4. Instability.** In a flux tube the total pressure equals the outside pressure, but part of it is magnetic pressure:
$$p_e = p_i + \frac{B^2}{8\pi}$$
so inside the tube there is less gas and the tube is lighter than its surroundings (magnetic buoyancy, Script 5.2). One stretch arches up, the plasma slides along the tube toward the sides, the central stretch empties out and rises even more: this is the Parker instability. The other tubes, and the rest of the same tube, stay in the tachocline.
- **5. Rise.** The top of the arch crosses the convective zone; the feet stay anchored to the toroidal tube. As it rises, the outside pressure decreases: the tube widens and the field weakens, because the magnetic flux $\Phi = B\,\pi a^2$ is conserved. The field at the top goes from about $10^5$ to about $10^3$ gauss.
- **6. Emergence.** The top crosses the photosphere: this is the horizontal stretch seen emerging at the surface (chapter 8, animation *From active regions to the coronal hole*). Where the legs pierce the photosphere two spots of opposite polarity are born: on the leading leg the field exits the surface (+), on the trailing leg it re-enters (−). The leading spot therefore has the same polarity as the north pole at the start of the cycle, as in the example of Hale's law in section 5.10.

With a weak tube, phase 6 is replaced by **Return to the tachocline** (see below).

## The Coriolis force

With the *Radial rise* button the top rises along the radius and the pair of spots is aligned along the parallel. With *With Coriolis* three effects appear, all due to the Sun's rotation (Deepening 5.3):

- **Lag behind the rotation.** As it rises, the plasma moves away from the rotation axis and, conserving angular momentum, slows down: the top lags behind the direction of rotation (the skater who spreads her arms).
- **Shift toward the pole.** The Coriolis force acting on this backward motion has a component directed toward the rotation axis: the top tends to rise parallel to the axis rather than along the radius, and so shifts toward higher latitudes. This is the difference between the red line and the dashed line.
- **Tilt of the arch (Joy's law).** The Coriolis force also acts on the plasma flowing along the legs: the arch twists, the leading leg becomes steeper than the trailing one, and the leading spot emerges at a lower latitude. It shows up well in the *From above* view.

These effects are computed with the same model as Script 5.3, which shows the rise across the whole Sun: the two animations give the same numbers.

## Strong, medium and weak tube

The effect of the Coriolis force depends on how much time it has to act, which in turn depends on the field's strength in the tube. A strong tube floats more, rises quickly and is deflected little; a weak one rises slowly and is deflected a great deal.

- **Strong, $10^5$ gauss.** Rises in about 30 days, nearly along the radius. Emerges at about 21.7° of latitude: just 2° closer to the pole than the starting latitude (20°). Tilt of the pair: about 9°.
- **Medium, $6\times10^4$ gauss.** Rises in about 50 days. Emerges whole, but at about 27° of latitude, 7° closer to the pole: the shift is clearly visible. Tilt of the pair: about 10°.
- **Weak, $3\times10^4$ gauss.** Rises slowly and is deflected toward the pole. At about 160,000 km of depth its field drops below that of the surrounding convective motions (equipartition field): convection breaks it apart before it reaches the surface, at about 31° of latitude and 130,000 km of depth.

The readouts report, instant by instant, the field in the tube and that of the convective motions at the same depth: as long as the former is bigger, the tube stays compact.

The comparison with observations is the argument used to estimate the strength of the tubes at the base of the convective zone: sunspots appear only within about 35°–40° of latitude and with the observed tilt, and this requires tubes of about $10^5$ gauss.

## What happens to the weak tube

When the weak tube breaks apart, the field does not disappear: magnetic field lines have no ends and cannot break off. The strands stay connected to the tube on both sides and form a weak, tangled skein inside the convective zone. In the *Return to the tachocline* phase:

- where the skein brings lines of opposite direction close together, they reconnect and cancel each other out (magnetic reconnection): that part of the flux is lost. In the animation these are the two strands that vanish;
- the rest is dragged down by convection, whose downdrafts are narrower and faster than the updrafts (turbulent pumping), and returns to the tachocline within a few months;
- there it recompacts into the toroidal tube: the gap in the toroidal system closes and differential rotation will go back to reinforcing it.

A tube that is too weak does not produce a sunspot, but most of its flux returns to the dynamo.

## Half of the dynamo

The animation shows the first half of the magnetic cycle: differential rotation turns the poloidal field into a much stronger toroidal field (Ω effect). Closing the cycle needs the reverse step, from toroidal back to poloidal: the pairs of spots tilted by the Coriolis force, as they disperse, rebuild a poloidal field of opposite sign (Babcock–Leighton mechanism, section 5.13). That is why Joy's tilt is not a detail: it is the engine of the second half of the cycle.

## Controls

- **Start / Pause**, **Restart** and **◂ Phase / Phase ▸**; the phase list lets you jump directly to a phase.
- **Speed**: ×0.5, ×1, ×2, ×4.
- **Radial rise / With Coriolis**: turns the Coriolis force on or off. Changing the choice during the rise restarts the animation from the instability.
- **Strong / Medium / Weak**: the strength of the field in the rising tube.
- **Convective motions** and **Plasma sliding along the tube**: show or hide the respective dots.
- **Point of view**: *Oblique*, *Facing* (the sector's corona seen face-on, best for following the rise along the radius) and *From above* (the photosphere seen from outside, best for the pair's tilt). Dragging the figure rotates it; the wheel changes the zoom.

## Readouts

The *Readouts* box reports the time (years while the toroidal field is forming, days from the rise onward), the field in the tube and that of the convective motions at the same depth, the top's depth and the tube's state. With the Coriolis force on it also reports the top's latitude, its shift toward the pole, its lag relative to the rotation and, after emergence, the tilt of the pair of spots.

## The model and its simplifications

- It is a qualitative schematic, not a magnetohydrodynamic simulation.
- The sector is narrower in latitude than would be needed to contain the whole toroidal system; there are many toroidal tubes in the Sun, here eight are drawn.
- The active region's dimensions are those of a large real region: the two spots, about 26,000 km in diameter, emerge about 90,000 km apart (about 7° on the surface). The Ω arch is wide at the base and narrow at the top, as in the models: the legs converge as they rise toward the photosphere.
- The tube in the tachocline is drawn a bit thicker than the real one, to stay visible: about 3,750 km in radius, against the 2,000–5,000 km of a tube that produces a large active region. The widening during the rise is also compressed: here about three times, in the Sun five to ten times.
- How the field goes from about $10^4$ to about $10^5$ gauss in the tachocline is still debated: differential rotation alone does not seem sufficient.
- Rise times, shift toward the pole, lag and the fragmentation threshold follow the model of Script 5.3, which reproduces the behavior of thin-tube models: Parker (1955); Choudhuri and Gilman (1987); D'Silva and Choudhuri (1993); Caligari, Moreno-Insertis and Schüssler (1995); Fan (2009, *Living Reviews in Solar Physics*). The pair's tilt and the legs' asymmetry are chosen to reproduce the observed values.
- The dispersed flux's return toward the tachocline is shown schematically: in the Sun it is a turbulent process, observed only in numerical simulations.
- *Leading* indicates the direction of rotation: on the disk as seen from Earth, the leading spot is the one further West.
`;  // ← Last line: do not modify.
