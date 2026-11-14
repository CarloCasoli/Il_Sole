SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the English text of the description, in Markdown:
%%   ## title   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%%   English text of the fact sheet: corresponds to risalita_tubo_flusso_scheda.js,
%%   translated from paragraph 5.3 of the Italian book (the English chapter 5 does not exist yet).

# Rise of the magnetic flux tubes

## What the animation shows

The animation shows in three dimensions the rise of a stretch of the toroidal field from the base of the convection zone up to the photosphere, in a Sun that rotates differentially. The flux tube initially lies at the base of the convection zone, at about $0.7\,R_\odot$, along a parallel. A stretch of the tube becomes lighter than the surrounding plasma and rises as a loop by magnetic buoyancy, while the two feet stay anchored at the base. When the top of the loop crosses the photosphere, two spots appear, at the points where the tube pierces the surface.

The buoyancy arises from the weight difference between the plasma in the tube and the surrounding plasma; since the weight is directed toward the center of the Sun, the buoyancy is radial and, in the absence of other forces, the tube would rise along the radius, without changing latitude. The only force that deflects it from this direction is the Coriolis force, which acts in two stages. As it rises, the tube moves away from the rotation axis and, like a skater spreading her arms, lags behind the surrounding plasma, that is, it drifts westward. This westward motion is in turn deflected by the Coriolis force toward the rotation axis, hence toward the pole. Only if the tube changes latitude does differential rotation come into play, dragging it further according to the rotation speed of the new latitude.

The size of the deflection depends on the intensity of the field in the tube. A strong tube floats a great deal, rises in a few weeks and is deflected little: it emerges almost at the starting latitude. A weak tube rises slowly, the Coriolis force has more time to act and the tube would tend to rise almost parallel to the rotation axis, toward high latitudes where spots are never observed. In reality a weak tube does not reach the surface: as it rises its field weakens faster than the surrounding convective motions, and once it becomes weaker than these, convection shreds and breaks it up. This is the reasoning used to deduce that the tubes at the base of the convection zone must have a field on the order of $10^5$ gauss.

The animation is a qualitative scheme and not a magnetohydrodynamic simulation: the paths of the top of the loop reproduce the trend of thin-tube models (Choudhuri and Gilman, 1987; Fan, 2009), but times, angles, thicknesses and the breakup threshold are simplified. The tilt of the pair of spots (Joy's law) is imposed by the model rather than computed, and the effect of differential rotation on the top is reduced to represent the tube's tension.

## Elements of the scene

- **The Sun**: the semi-transparent photosphere, with the equator and the parallels at $\pm 30°$ and $\pm 60°$, the rotation axis with the N and S markers and, inside, the darker sphere of the radiative zone, which ends at $0.7\,R_\odot$. An arrow indicates the direction of rotation (East).
- **Rows of dots on the surface**: six meridians of dots, from latitude $-75°$ to $+75°$. At the start they are aligned; as time passes they curve because the equator rotates faster than the high latitudes, making the differential rotation visible.
- **Flux tube**: the purple ring at the base of the convection zone, at the starting latitude, with the central stretch rising as a loop. During breakup the tube splits into seven thin strands that wave, drift apart and fade.
- **References**: the dashed gray line starting from the tube indicates the purely radial rise; the dashed circle on the photosphere indicates the starting latitude.
- **Trail**: the red line left by the top of the loop, showing the actual path and how much it departs from the radial rise.
- **Spots**: two dark disks on the photosphere, at the points where the loop crosses it.
- **Cross-section along the meridian**: in the side panel, a quarter-section of the Sun with the axis, the equator and the radiative zone. It plots the radial rise (dashed gray), the rise parallel to the rotation axis (dotted) and the actual path of the top (red). It is the most reliable reference for reading the latitude, which in the oblique 3D view can be distorted by perspective.

## Controls and adjustable parameters

- **Start / Pause / Resume / Repeat**: starts, suspends or resumes the rise; at the end of the run the button allows repeating it.
- **Restart**: brings the tube back to the base of the convection zone and clears the trail.
- **Field intensity in the tube**: from $2$ to $15 \cdot 10^4$ gauss (initial value $10 \cdot 10^4$). Determines the duration of the rise (about a month for $10^5$ gauss, several months for weak tubes) and hence the size of the deflection.
- **Starting latitude**: latitude of the tube at the base, from $10°$ to $35°$ (initial value $20°$).
- **Speed**: simulated days per real second ($1$, $3$, $6$, $12$ or $24$; initial value $3$).
- **Coriolis force**: turns the Coriolis force on or off. Off, the tube rises along the radius without changing latitude.
- **Differential rotation on the tube**: turns on or off the dragging of the top by differential rotation when the latitude changes.
- **Trail of the top of the loop**: shows or hides the trail.
- **Breakup by convection**: turns on or off the breakup of weak tubes. Off, it shows the hypothetical path a weak tube would follow if it stayed intact.
- **Point of view**: *Co-rotating with the Sun*, in which the scene rotates together with the Sun at the speed of the starting latitude and only the relative motions remain visible, or *From space*, in which the full rotation is seen.
- **View**: *Oblique*, *From the North pole* or *Face on*. Dragging with the mouse freely rotates the scene, and the scroll wheel changes the zoom.

### Counters

The panel shows in real time the days elapsed, the state of the tube (*intact*, *fraying*, *broken up*), the depth of the top of the loop below the photosphere in km, its latitude, and the westward displacement relative to the starting point, broken down into the contribution of the Coriolis force and that of differential rotation. At the top left of the scene, the day and the field intensity are repeated; at the bottom, a sentence describes the current phase and, at the end of the run, the emergence latitude or the depth at which the tube broke up.

## Tips for use

It helps to start with the *Coriolis force* turned off: the top rises along the radius, the latitude stays constant, and the contribution of differential rotation stays zero. Turning on the Coriolis force with the field at $10 \cdot 10^4$ gauss shows the slight westward lag and the small deflection toward the pole. Reducing the field to $3$–$4 \cdot 10^4$ gauss makes the rise slow and the deflection grows; with *Breakup by convection* on, the tube frays before reaching the surface, while turning it off shows the hypothetical path toward high latitudes. The *Co-rotating with the Sun* point of view is best suited to observing the relative motions; comparing it with the *From space* view shows why, when observing the Sun from the outside, these displacements blend into the overall rotation. The *From the North pole* view is clearest for the westward displacement, the *Cross-section along the meridian* for the one toward the pole.

`;  // ← Last line: do not modify.
