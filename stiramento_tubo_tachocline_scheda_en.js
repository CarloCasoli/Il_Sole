SCHEDA_EN = String.raw`
%% ↑ First line: do not modify.  Below is the scheda's text in Markdown:
%%   ## heading   **bold**   *italic*   - list   formulas between $...$
%%   Do not use the backtick character.
%% English translation of the existing Italian scheda (stiramento_tubo_tachocline_scheda.js).

# Stretching of the flux tube

## What the animation shows

The animation goes with sections 5.7 (birth of the toroidal field) and 5.8 (intensification of the toroidal field), and brings figures 5.2, 5.3 and 5.4 into three dimensions. It follows **a single tube** of the poloidal field and shows why, as differential rotation wraps it around the Sun, its field grows, and why it grows mostly at mid-latitudes.

## Step 1: shift and stretch

The page opens with a **map** of the unrolled sphere: latitude runs vertically, from the south pole to the north pole; longitude runs horizontally, in the direction of rotation. The tube is marked with a **bead every 10°** of latitude, and the beads follow the plasma.

The **dashed arrows** show how far each bead moves: the one at the equator more than any other. The **×N** number next to each stretch instead says how much that stretch has elongated, and the color repeats it (same scale as step 2). The comparison makes the key point clear: the equatorial stretch moves more than any other but barely stretches, because its two beads travel almost side by side; the stretches that elongate the most are at mid-latitudes, where nearby beads have different speeds. Each stretch's field grows as much as its elongation.

The map distorts distances at high latitudes, like any flat map of a sphere; the ×N values are computed on the sphere and are correct.

The slider goes up to **3 turns** of the equator over the poles. Beyond the first turn the tube exits the map's right edge and re-enters on the left, as happens on the sphere: the nearly horizontal stripes that form at mid-latitudes are the windings of figure 5.4. A bead sitting right on the edge is drawn on both sides.

The **"B over time, beyond the map"** chart shows how the growth continues up to half a cycle (about 21 turns, 5.5 years), on a logarithmic scale, for three stretches: 30°–40°, 0°–10° and 80°–90°. The solid part corresponds to the map's 3 turns, the dashed part to what follows. After half a cycle the 30°–40° stretch has elongated about 100 times, the equatorial one about 20, the polar one only about 3. Step 1 shows only the stretching, without tension's brake: with real values the brake is negligible, while saturation is shown in step 2.

## Step 2: what you see

- The **tachocline sphere**, at about 0.70 solar radii; below it is the radiative zone. The outer transparent sphere is the photosphere: in between is the convective zone. The **rotation axis**, the direction of rotation, the **equator** and the parallels at **35°** are marked.
- The **tube** starts along a meridian, from the south pole to the north pole, like the inner stretch of the poloidal field in figure 5.2. The **blue cones** show the field's direction; the **dashed line** is the initial position.
- The **beads** are marked every 10° of latitude: they follow the plasma and show how far each stretch moves and how much it elongates.
- The **tube's color** shows how much the field has grown relative to the start, stretch by stretch: blue where $B = B_0$, red and orange where it has grown the most. The scale is logarithmic and fixed for the whole animation; the legend in the side panel gives the maximum value reached at the end.
- The **grey arrows** are the plasma velocity relative to the poles: maximum at the equator, zero at the poles.
- The **dots** are tracers in the plasma: each one rotates at the speed of its own latitude.
- The **orange square** at 35° north is a plasma element containing a stretch of tube: the shear turns it into a longer and thinner parallelogram, with the same area.
- The **red arrows** are the magnetic tension forces.
- Two views: **Whole Sun** and **Detail at 35°**. You can rotate the scene by dragging with the mouse.

## The physics

The field is **frozen into the plasma**: every stretch of the tube follows the latitude it is at. The angular velocity decreases from the equator toward the poles (section 5.7):

$\Omega(\lambda) = \Omega_{eq} - (\Omega_{eq} - \Omega_{pol}) \sin^2 \lambda$

with periods of 25 days at the equator and 34 at the poles. Relative to the poles, the equator gains one turn roughly every 94 days, and a stretch at latitude $\lambda$ moves by

$\varphi(\lambda, t) = \Delta\Omega \, t \cos^2 \lambda$

At the poles the displacement is zero: the tube **stays anchored at the poles** and, turn after turn, wraps around the Sun. The east–west component $B_\varphi$ is born: in the northern hemisphere it points against the direction of rotation, in the south with it.

## Two rotation laws

A selector at the top lets you choose the rotation law, in both step 1 and step 2:

- the **book's law** (section 5.7), with two terms: $\Omega(\lambda) = \Omega_{eq} - (\Omega_{eq} - \Omega_{pol}) \sin^2 \lambda$, with periods of 25 and 34 days. The equator gains one turn over the poles every 94 days and the stretching is maximum at 35°;
- **Snodgrass and Ulrich's law** (1990), with three terms, measured with the Doppler effect in the photosphere: $\Omega(\lambda) = A + B \sin^2 \lambda + C \sin^4 \lambda$, with $A = 14{.}71$, $B = -2{.}39$, $C = -1{.}78$ degrees per day (periods of 24.5 and 34.2 days). The rotation decreases faster at high latitudes: the equator gains one turn every 86 days and the maximum stretching shifts to about 44°.

At the base of the convective zone helioseismology finds a latitudinal profile similar to the surface one. Under either law the angular velocity is symmetric around the equator: that is why the tube's curve stays rounded there and does not form a tip. As time passes, though, the rounded zone narrows and the tip sharpens.

## Why the field grows

A stretch of tube that elongates thins out, because the plasma does not compress: $A \cdot L$ stays constant. The flux $\Phi = B \cdot A$ is conserved, so the field grows in proportion to the elongation: $B = B_0 \, L / L_0$. The cause is the **elongation**, not an outside compression.

The elongation, however, is not the same along the tube. A stretch elongates more the faster $\varphi$ changes with latitude:

$\dfrac{L}{L_0} = \sqrt{1 + (2 \, \Delta\Omega \, t \, \sin\lambda \cos^2 \lambda)^2}$

At the **poles** the tube does not move and does not stretch. At the **equator** it moves more than anywhere else, but exactly there it does not stretch: stretching does not depend on how far a point moves, but on how far **two nearby points** of the tube move **relative to each other**. Near the equator the angular velocity changes very little with latitude, because it is symmetric in the two hemispheres: a stretch between 0° and 2° has its two ends traveling almost side by side, while a stretch between 35° and 37° has ends that separate roughly thirty times more. It is like a fast train whose cars do not stretch apart because they all travel at the same speed. Step 1 of the animation shows exactly this comparison. The elongation is maximum at $\lambda \approx 35°$, where $\sin\lambda \cos^2\lambda$ is maximum. There the tube becomes thinner and the field stronger. The "Tube cross-section at four latitudes" panel (0°, 10°, 35°, 60°) and the "Field along the tube" chart show this.

The band around the equator where the tube stays intact **narrows with time**, as $1/t$. That is why, with real values and after 21 turns, the "Field along the tube" and "Tube thickness along the tube" charts have a very narrow V shape right at the equator: less than a degree further out, the field has already grown by tens of times. In "Schematic", after fewer than two turns, the same band is still wide and the curves descend in a rounded way.

The north–south component $B_\theta$ stays **constant**; only $B_\varphi$ grows, in proportion to time. Shear does not create the field out of nothing: it rotates and stretches what is already there.

## Why a ribbon and not a tube

Shear moves the plasma only along the parallels, eastward; there is no motion at all in the radial direction. A stretch of tube that elongates must shrink its cross-section, because volume is conserved, but it can only do so in the direction the plasma is being deformed in: the one **on the sphere's surface**, perpendicular to the tube. The **radial thickness** stays at its initial value. The cross-section therefore becomes an increasingly flattened ellipse: the tube turns into a **ribbon**. This is not a drawing choice, but the direct consequence of the shearing motion.

The "Tube thickness along the tube" chart shows the two dimensions as a function of latitude, on a logarithmic scale: the width in the sphere's plane shrinks as $1/(L/L_0)$, with a minimum around 35°, while the radial thickness does not change. With real values, after half a cycle, at 35° the width has shrunk to about a hundredth.

This has a precise physical meaning: shear **does not produce circular tubes, but thin sheets of field**. The tubes in the buoyancy and rise animations form afterward: when the sheet becomes intense enough, magnetic buoyancy makes it unstable and breaks it into tubes. It is a mechanism studied with numerical simulations (for example Vasil and Brummell, 2008) and not yet fully understood. Moreover, when the sheet becomes very thin, magnetic diffusion comes into play, which the model neglects and which tends to widen structures that are too narrow.

Even the initial circular tube is an idealization: the poloidal field is not made of separate tubes but is diffuse; the tube is used to track a bundle of field lines.

## Where the energy comes from

Stretching a field line is like pulling an elastic band: you have to do work against its **tension**. The stress $B_\theta B_\varphi / \mu_0$ carries angular momentum along the tube: it slows the low latitudes and speeds up the high ones. The field's energy therefore comes from differential rotation, which gradually weakens.

The mechanism runs out when the magnetic energy becomes comparable to that of the shearing motion:

$\dfrac{B_{eq}^2}{2\mu_0} = \dfrac{1}{2} \rho \, \Delta v^2 \quad\Rightarrow\quad B_{eq} = \Delta v \sqrt{\mu_0 \rho} \approx 6 \cdot 10^4 \text{ G}$

where $\Delta v \approx 375$ m/s is the velocity difference between the equator and the poles on the tachocline sphere and $\rho \approx 0{.}2$ g/cm³.

## Saturation in the chart

The "Saturation" chart shows the field at 35° relative to $B_{eq}$, over time, with two curves:

- the **dashed line** is the growth **without the brake**: how the field would behave if tension never slowed differential rotation. The tube would keep stretching at the same rate and $B$ would exceed $B_{eq}$, which cannot happen. It is only a reference;
- the **red line** is the growth **with the brake**. At first it coincides with the dashed line, because the field is weak and its tension does not matter. As $B$ grows, tension reduces the velocity difference between the equator and the poles: the tube stretches more slowly and the red line pulls away from the dashed one, staying **below** it. It never goes down over time: it always grows, but ever more slowly. Near $B_{eq}$ the brake is almost total and the curve flattens against the horizontal line, without crossing it.

The gap between the two curves, labeled "tension's brake" in the chart, measures how much tension has slowed the shear. In the model the brake is simplified: the stretching rate is multiplied by $1 - (B/B_{eq})^2$.

With **real values** the two curves stay almost overlapped. Starting from 100 G, after half a cycle the field at 35° reaches about $10^4$ G, that is about $0{.}17 \, B_{eq}$: the magnetic energy is only 3% of the shear's and the brake is negligible. Reaching saturation with latitudinal shear alone would take about 30 years, more than a cycle: that is one of the reasons the tachocline's radial shear is thought to be more important.

## Why saturation shows up in "Schematic" but not with real values

The physics is the same in both cases: tension's brake depends only on how close $B$ is to $B_{eq}$. What changes is the **field you start from**.

- **Schematic**: you start from $B_0 = B_{eq}/8 \approx 7400$ G. To reach $B_{eq}$ the tube only needs to stretch about 8 times, and at 35° that happens in about 330 days. The field reaches $B_{eq}$ and the brake becomes nearly total.
- **Real values**: you start from 100 G. To reach $B_{eq}$ the tube would need to stretch about 600 times; in 2000 days, at 35°, it reaches about 100 times. The field reaches about $0{.}17 \, B_{eq}$ and the brake is worth only about 3%.

With real values saturation would be **too slow** to show: with latitudinal shear alone it would arrive after about 30 years, while the solar cycle reverses after about 11. In "Schematic" time is **not sped up**: rotation and speed are the real ones. It is the initial field that is **amplified**, so the limit is reached within a few months and with a tube that is still legible. It is a didactic choice, to make visible an effect that in the Sun, with latitudinal shear alone, would not have time to appear.

## Schematic and real values

- **Schematic**: the initial field is amplified ($B_0 = B_{eq}/8$), and saturation arrives after about 330 days and fewer than two turns.
- **Real values**: the initial field is 100 G. After 2000 days, about half a cycle, the equator has made 21 turns over the poles and at 35° the field has reached about $10^4$ G, still far from saturation. The $10^5$ G of sunspots cannot be reached by latitudinal shear alone.

## Limits of the model

- It represents **only the latitudinal shear**, like the chapter 5 figures. In the tachocline the **radial shear** between the convective zone and the radiative zone also acts, more intensely, which is not represented here.
- It is a qualitative schematic, not a magnetohydrodynamic simulation: incompressible plasma, no magnetic diffusion, the same initial field all along the tube.
- The feedback is simplified: all differential rotation slows as $1 - (B_{max}/B_{eq})^2$.
- The poloidal field at the base of the convective zone is not measured: 100 G is a hypothesis.
- The tube rests on the sphere; in the Sun the field line closes through the interior. The tube's thickness is arbitrary: only the ratios matter.
- References: Charbonneau, *Dynamo models of the solar cycle* (Living Reviews in Solar Physics); Fan (2009, *Living Reviews in Solar Physics*); Hughes, Rosner and Weiss (eds.), *The Solar Tachocline* (2007).
`;  // ← Last line: do not modify.
