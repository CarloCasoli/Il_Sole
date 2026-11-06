SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.

# Stiramento del tubo di flusso

## Che cosa mostra l'animazione

L'animazione accompagna i paragrafi 5.7 (nascita del campo toroidale) e 5.8 (intensificazione del campo toroidale), e porta in tre dimensioni le figure 5.2, 5.3 e 5.4. Segue **un solo tubo** del campo poloidale e mostra perché, mentre la rotazione differenziale lo avvolge attorno al Sole, il suo campo cresce, e perché cresce soprattutto alle medie latitudini.

## Passo 1: spostamento e allungamento

La pagina si apre con una **mappa** della sfera srotolata: in verticale la latitudine, dal polo sud al polo nord; in orizzontale la longitudine, nel verso di rotazione. Il tubo è segnato con una **perlina ogni 10°** di latitudine, e le perline seguono il plasma.

Le **frecce tratteggiate** mostrano di quanto si sposta ogni perlina: quella all'equatore più di tutte. Il numero **×N** accanto a ogni tratto dice invece di quanto quel tratto si è allungato, e il colore lo ripete (stessa scala del passo 2). Il confronto chiarisce il punto chiave: il tratto equatoriale si sposta più di tutti ma quasi non si allunga, perché le sue due perline viaggiano quasi appaiate; si allungano di più i tratti alle medie latitudini, dove perline vicine hanno velocità diverse. Il campo di ogni tratto cresce quanto il suo allungamento.

La mappa deforma le distanze alle alte latitudini, come ogni mappa piana della sfera; i valori ×N sono calcolati sulla sfera e sono corretti.

Il cursore arriva a **3 giri** dell'equatore sui poli. Oltre il primo giro il tubo esce dal bordo destro della mappa e rientra da sinistra, come accade sulla sfera: le strisce quasi orizzontali che si formano alle medie latitudini sono gli avvolgimenti della figura 5.4. Una perlina che si trova proprio sul bordo è disegnata su entrambi i lati.

Il grafico **«B nel tempo, oltre la mappa»** mostra come continua la crescita fino a mezzo ciclo (circa 21 giri, 5,5 anni), in scala logaritmica, per tre tratti: 30°–40°, 0°–10° e 80°–90°. Il tratto pieno corrisponde ai 3 giri della mappa, il tratteggio al seguito. Dopo mezzo ciclo il tratto 30°–40° si è allungato circa 100 volte, quello equatoriale circa 20, quello polare solo circa 3. Il passo 1 mostra solo lo stiramento, senza il freno della tensione: con i valori reali il freno è trascurabile, mentre la saturazione è mostrata nel passo 2.

## Passo 2: che cosa si vede

- La **sfera della tachocline**, a circa 0,70 raggi solari; sotto c'è la zona radiativa. La sfera trasparente esterna è la fotosfera: in mezzo c'è la zona convettiva. Sono segnati l'**asse di rotazione**, il verso di rotazione, l'**equatore** e i paralleli a **35°**.
- Il **tubo** parte lungo un meridiano, dal polo sud al polo nord, come il tratto interno del campo poloidale della figura 5.2. I **coni blu** indicano il verso del campo; il **tratteggio** è la posizione iniziale.
- I **pallini** sono segnati ogni 10° di latitudine: seguono il plasma e mostrano quanto si sposta e quanto si allunga ogni tratto.
- Il **colore del tubo** indica quanto è cresciuto il campo rispetto all'inizio, tratto per tratto: blu dove $B = B_0$, rosso e arancione dove è cresciuto di più. La scala è logaritmica e fissa per tutta l'animazione; la legenda nel pannello a lato indica il valore massimo raggiunto alla fine.
- Le **frecce grigie** sono la velocità del plasma rispetto ai poli: massima all'equatore, nulla ai poli.
- I **puntini** sono traccianti nel plasma: ognuno ruota con la velocità della propria latitudine.
- Il **quadrato arancione** a 35° nord è un elemento di plasma che contiene un tratto di tubo: lo shear lo trasforma in un parallelogramma sempre più lungo e sottile, con la stessa area.
- Le **frecce rosse** sono le forze di tensione magnetica.
- Due viste: **Intero Sole** e **Dettaglio a 35°**. Si può ruotare la scena trascinando con il mouse.

## La fisica

Il campo è **congelato nel plasma**: ogni tratto del tubo segue la latitudine in cui si trova. La velocità angolare cala dall'equatore verso i poli (paragrafo 5.7):

$\Omega(\lambda) = \Omega_{eq} - (\Omega_{eq} - \Omega_{pol}) \sin^2 \lambda$

con periodi di 25 giorni all'equatore e 34 ai poli. Rispetto ai poli, l'equatore guadagna un giro ogni 94 giorni circa, e un tratto a latitudine $\lambda$ si sposta di

$\varphi(\lambda, t) = \Delta\Omega \, t \cos^2 \lambda$

Ai poli lo spostamento è nullo: il tubo **resta ancorato ai poli** e, giro dopo giro, si avvolge attorno al Sole. Nasce la componente est–ovest $B_\varphi$: nell'emisfero nord è diretta contro il verso di rotazione, nel sud nel verso di rotazione.

## Due leggi di rotazione

Un selettore in alto permette di scegliere la legge di rotazione, sia nel passo 1 sia nel passo 2:

- **legge del libro** (paragrafo 5.7), a due termini: $\Omega(\lambda) = \Omega_{eq} - (\Omega_{eq} - \Omega_{pol}) \sin^2 \lambda$, con periodi di 25 e 34 giorni. L'equatore guadagna un giro sui poli ogni 94 giorni e lo stiramento è massimo a 35°;
- **legge di Snodgrass e Ulrich** (1990), a tre termini, misurata con l'effetto Doppler in fotosfera: $\Omega(\lambda) = A + B \sin^2 \lambda + C \sin^4 \lambda$, con $A = 14{,}71$, $B = -2{,}39$, $C = -1{,}78$ gradi al giorno (periodi di 24,5 e 34,2 giorni). La rotazione cala più in fretta alle alte latitudini: l'equatore guadagna un giro ogni 86 giorni e lo stiramento massimo si sposta a circa 44°.

Alla base della zona convettiva l'eliosismologia trova un profilo in latitudine simile a quello di superficie. Con qualsiasi legge la velocità angolare è simmetrica attorno all'equatore: per questo lì la curva del tubo resta arrotondata e non forma una punta. Con il passare del tempo, però, la zona arrotondata si restringe e la punta si affila.

## Perché il campo cresce

Un tratto di tubo che si allunga si assottiglia, perché il plasma non si comprime: $A \cdot L$ resta costante. Il flusso $\Phi = B \cdot A$ si conserva, quindi il campo cresce in proporzione all'allungamento: $B = B_0 \, L / L_0$. La causa è l'**allungamento**, non una compressione dall'esterno.

L'allungamento però non è uguale lungo il tubo. Un tratto si allunga tanto più quanto più rapidamente $\varphi$ cambia con la latitudine:

$\dfrac{L}{L_0} = \sqrt{1 + (2 \, \Delta\Omega \, t \, \sin\lambda \cos^2 \lambda)^2}$

Ai **poli** il tubo non si sposta e non si allunga. All'**equatore** si sposta più di tutti, ma esattamente lì non si allunga: lo stiramento non dipende da quanto si sposta un punto, ma da quanto si spostano **l'uno rispetto all'altro** due punti vicini del tubo. Vicino all'equatore la velocità angolare cambia pochissimo con la latitudine, perché è simmetrica nei due emisferi: un tratto tra 0° e 2° ha i due estremi che viaggiano quasi appaiati, mentre un tratto tra 35° e 37° ha estremi che si separano circa trenta volte di più. È come un treno veloce, i cui vagoni non si allungano perché viaggiano tutti alla stessa velocità. Il passo 1 dell'animazione mostra proprio questo confronto. L'allungamento è massimo a $\lambda \approx 35°$, dove $\sin\lambda \cos^2\lambda$ è massimo. Lì il tubo diventa più sottile e il campo più intenso. Il pannello «Sezione del tubo a quattro latitudini» (0°, 10°, 35°, 60°) e il grafico «Campo lungo il tubo» lo mostrano.

La fascia attorno all'equatore in cui il tubo resta intatto **si restringe con il tempo**, come $1/t$. Per questo, con i valori reali e dopo 21 giri, i grafici «Campo lungo il tubo» e «Spessore del tubo lungo il tubo» hanno una forma a V molto stretta proprio all'equatore: meno di un grado più in là, il campo è già cresciuto di decine di volte. In «Schema», dopo meno di due giri, la stessa fascia è ancora larga e le curve scendono in modo arrotondato.

La componente nord–sud $B_\theta$ resta **costante**; cresce solo $B_\varphi$, in proporzione al tempo. Lo shear non crea il campo dal nulla: ruota e allunga quello che c'è.

## Perché una fascia e non un tubo

Lo shear muove il plasma solo lungo i paralleli, verso est; non c'è nessun moto in direzione radiale. Un tratto di tubo che si allunga deve ridurre la sua sezione, perché il volume si conserva, ma può farlo solo nella direzione in cui il plasma viene deformato: quella **sulla superficie della sfera**, perpendicolare al tubo. Lo **spessore radiale** resta quello iniziale. La sezione diventa quindi un'ellisse sempre più schiacciata: il tubo si trasforma in una **fascia**. Non è una scelta grafica, ma la conseguenza diretta del moto di taglio.

Il grafico «Spessore del tubo lungo il tubo» mostra le due dimensioni in funzione della latitudine, in scala logaritmica: la larghezza nel piano della sfera si riduce come $1/(L/L_0)$, con il minimo attorno a 35°, mentre lo spessore radiale non cambia. Con i valori reali, dopo mezzo ciclo, a 35° la larghezza si è ridotta a circa un centesimo.

Questo ha un significato fisico preciso: lo shear **non produce tubi circolari, ma strati sottili di campo**. I tubi delle animazioni sul galleggiamento e sulla risalita si formano dopo: quando lo strato diventa abbastanza intenso, il galleggiamento magnetico lo rende instabile e lo frammenta in tubi. È un meccanismo studiato con simulazioni numeriche (per esempio Vasil e Brummell, 2008) e non ancora del tutto chiarito. Inoltre, quando la fascia diventa molto sottile, entra in gioco la diffusione magnetica, che il modello trascura e che tende ad allargare le strutture troppo strette.

Anche il tubo iniziale circolare è un'idealizzazione: il campo poloidale non è fatto di tubi separati ma è diffuso; il tubo serve a seguire un fascio di linee di campo.

## Da dove viene l'energia

Allungare una linea di campo è come tendere un elastico: bisogna lavorare contro la sua **tensione**. Lo sforzo $B_\theta B_\varphi / \mu_0$ trasporta momento angolare lungo il tubo: frena le basse latitudini e accelera quelle alte. L'energia del campo viene quindi dalla rotazione differenziale, che a poco a poco si attenua.

Il meccanismo si esaurisce quando l'energia magnetica diventa paragonabile a quella del moto di taglio:

$\dfrac{B_{eq}^2}{2\mu_0} = \dfrac{1}{2} \rho \, \Delta v^2 \quad\Rightarrow\quad B_{eq} = \Delta v \sqrt{\mu_0 \rho} \approx 6 \cdot 10^4 \text{ G}$

dove $\Delta v \approx 375$ m/s è la differenza di velocità tra equatore e poli sulla sfera della tachocline e $\rho \approx 0{,}2$ g/cm³.

## La saturazione nel grafico

Il grafico «Saturazione» mostra il campo a 35° rispetto a $B_{eq}$, nel tempo, con due curve:

- la **linea tratteggiata** è la crescita **senza freno**: come andrebbe il campo se la tensione non frenasse mai la rotazione differenziale. Il tubo continuerebbe ad allungarsi allo stesso ritmo e $B$ supererebbe $B_{eq}$, cosa che non può accadere. È solo un riferimento;
- la **linea rossa** è la crescita **con il freno**. All'inizio coincide con la tratteggiata, perché il campo è debole e la sua tensione non conta. Man mano che $B$ cresce, la tensione riduce la differenza di velocità tra equatore e poli: il tubo si allunga più lentamente e la rossa si stacca dalla tratteggiata, restando **sotto**. Non scende nel tempo: cresce sempre, ma sempre più piano. Vicino a $B_{eq}$ il freno è quasi totale e la curva si appiattisce contro la linea orizzontale, senza superarla.

La distanza tra le due curve, indicata nel grafico come «freno della tensione», misura quanto la tensione ha frenato lo shear. Nel modello il freno è semplificato: la velocità di allungamento viene moltiplicata per $1 - (B/B_{eq})^2$.

Con i **valori reali** le due curve restano quasi sovrapposte. Partendo da 100 G, dopo mezzo ciclo il campo a 35° arriva a circa $10^4$ G, cioè circa $0{,}17 \, B_{eq}$: l'energia magnetica è solo il 3% di quella del taglio e il freno è trascurabile. Per arrivare alla saturazione con il solo shear in latitudine servirebbero circa 30 anni, più di un ciclo: è uno dei motivi per cui si ritiene più importante lo shear radiale della tachocline.

## Perché in «Schema» la saturazione si vede e con i valori reali no

La fisica è la stessa nei due casi: il freno della tensione dipende solo da quanto $B$ è vicino a $B_{eq}$. Cambia il **campo da cui si parte**.

- **Schema**: si parte da $B_0 = B_{eq}/8 \approx 7400$ G. Per arrivare a $B_{eq}$ basta allungare il tubo circa 8 volte, e a 35° succede in circa 330 giorni. Il campo raggiunge $B_{eq}$ e il freno diventa quasi totale.
- **Valori reali**: si parte da 100 G. Per arrivare a $B_{eq}$ bisognerebbe allungare il tubo circa 600 volte; in 2000 giorni, a 35°, si arriva a circa 100 volte. Il campo raggiunge circa $0{,}17 \, B_{eq}$ e il freno vale solo il 3% circa.

Con i valori reali la saturazione sarebbe **troppo lenta** per essere mostrata: con il solo shear in latitudine arriverebbe dopo circa 30 anni, mentre il ciclo solare si inverte dopo circa 11. In «Schema» il tempo **non è accelerato**: rotazione e velocità sono quelle reali. È il campo iniziale a essere **amplificato**, così il limite viene raggiunto in pochi mesi e con un tubo ancora leggibile. È una scelta didattica, per rendere visibile un effetto che nel Sole, con il solo shear in latitudine, non avrebbe il tempo di comparire.

## Schema e valori reali

- **Schema**: il campo iniziale è amplificato ($B_0 = B_{eq}/8$), e la saturazione arriva dopo circa 330 giorni e meno di due giri.
- **Valori reali**: il campo iniziale è 100 G. Dopo 2000 giorni, circa mezzo ciclo, l'equatore ha fatto 21 giri sui poli e a 35° il campo è arrivato a circa $10^4$ G, ancora lontano dalla saturazione. Per i $10^5$ G delle macchie non basta lo shear in latitudine.

## Limiti del modello

- Rappresenta **solo lo shear in latitudine**, come le figure del capitolo 5. Nella tachocline agisce anche lo **shear radiale** tra zona convettiva e zona radiativa, più intenso, che qui non è rappresentato.
- È uno schema qualitativo, non una simulazione magnetoidrodinamica: plasma incomprimibile, nessuna diffusione magnetica, campo iniziale uguale lungo tutto il tubo.
- La retroazione è semplificata: tutta la rotazione differenziale rallenta come $1 - (B_{max}/B_{eq})^2$.
- Il campo poloidale alla base della zona convettiva non si misura: 100 G è un'ipotesi.
- Il tubo è appoggiato sulla sfera; nel Sole la linea di campo si richiude attraverso l'interno. Lo spessore del tubo è arbitrario: contano solo i rapporti.
- Riferimenti: Charbonneau, *Dynamo models of the solar cycle* (Living Reviews in Solar Physics); Fan (2009, *Living Reviews in Solar Physics*); Hughes, Rosner e Weiss (a cura di), *The Solar Tachocline* (2007).
`;
