SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.

# Il viaggio del fotone nella cromosfera

## Che cosa mostra l'animazione

L'animazione accompagna l'Approfondimento 7.3 e mostra perché la luce che osserviamo in una riga spettrale proviene dalla cromosfera, anche se i fotoni nascono più in basso. Un fotone che nasce negli strati profondi non percorre un cammino diretto verso l'osservatore: viene assorbito da un atomo e riemesso in una direzione casuale, poi di nuovo assorbito e riemesso, molte volte. Ogni riemissione è, in un certo senso, un fotone nuovo. Salendo, la densità del plasma diminuisce, i tratti tra un urto e il successivo si allungano, finché un fotone riemesso non incontra più atomi capaci di assorbirlo e vola dritto verso l'osservatore. Il fotone che vediamo è l'ultimo di questa catena, riemesso alla quota in cui la profondità ottica è dell'ordine dell'unità ($\tau \approx 1$).

Il disegno riprende la colonna d'atmosfera dell'animazione 7.1, con le stesse fasce colorate: sotto la fotosfera (dove anche il continuo è opaco, $\tau > 1$), fotosfera, bassa, media e alta cromosfera e, oltre i 3.000 km, la zona in cui il plasma è trasparente anche alla riga. Su computer la quota scorre da sinistra a destra e l'osservatore (l'occhio) è a destra; su smartphone la quota scorre dal basso verso l'alto e l'osservatore è in alto. Su computer, sopra le corsie, è riportata la temperatura del plasma della Figura 7.1, sulla stessa scala delle quote.

Le corsie sono tre, una per tipo di luce:

- **Continuo**, una lunghezza d'onda generica (per esempio 500 nm) per la quale la cromosfera è trasparente. Il fotone rimbalza nella parte più profonda, esce dalla fotosfera e poi attraversa tutta la cromosfera senza più urti.
- **Hα** (656,3 nm). Il fotone rimbalza in fotosfera e continua a rimbalzare in cromosfera fino a una quota di fuga che, con un filtro stretto, è nell'alta cromosfera.
- **Ca II K** (393,4 nm). Stesso comportamento, con quote di fuga tipiche della bassa e media cromosfera.

Ogni urto è segnato da un piccolo lampo: è l'atomo che assorbe il fotone e lo riemette. In ogni corsia un fotone è evidenziato (il punto più grande): il suo percorso resta disegnato e il numero dei suoi urti è indicato accanto alla corsia. Quando il fotone sfugge, un cerchio segna il punto dell'ultima riemissione e da lì parte la traccia rettilinea verso l'osservatore. Le piccole tacche sul bordo di ogni corsia segnano le quote di fuga degli ultimi fotoni: si addensano attorno alla quota tipica di formazione di quella luce.

Per Hα e Ca II K, a ogni fotone viene assegnata a caso una lunghezza d'onda dentro la banda del filtro, con lo stesso modello dell'animazione 7.1: la probabilità tiene conto della trasmissione del filtro e dell'intensità della riga. Un fotone preso al centro della riga sfugge in alto; uno preso nelle ali, dove il plasma è più trasparente, sfugge in fotosfera. Allargando la banda aumenta la parte di fotoni presi nelle ali, e la quota di fuga media scende.

## Il modello e le sue semplificazioni

Le quote di fuga sono quelle dell'animazione 7.1: per ogni lunghezza d'onda la quota tipica deriva dalla Figura 7.1 e dalla relazione $h \approx H \ln(\kappa_{riga}/\kappa_{cont})$, con una dispersione pari alla larghezza della funzione di contributo.

Il numero di urti, invece, è simbolico. Per una passeggiata casuale il numero di urti necessari per uscire da uno strato di profondità ottica $\tau$ è dell'ordine di $\tau^2$. Partendo da circa 400 km sotto la base della fotosfera, il continuo ha $\tau \approx 10$ e quindi circa un centinaio di urti, un valore vicino a quello mostrato. Al centro di Hα, invece, la profondità ottica di partenza è dell'ordine di $10^7$ e gli urti reali sarebbero circa $10^{13}$–$10^{14}$, con tratti di frazioni di millimetro. Per rendere visibile il percorso, l'animazione ingrandisce i tratti, ne fa crescere la lunghezza con la quota e aggiunge una leggera spinta verso l'esterno, così che il viaggio duri pochi secondi. Il numero reale stimato è riportato nei riquadri sotto il disegno.

Altre semplificazioni:

- In una riga reale, a ogni riemissione il fotone può cambiare leggermente lunghezza d'onda (ridistribuzione in frequenza). Un fotone nato al centro della riga può così finire nelle ali e sfuggire da lì: è uno dei meccanismi principali con cui la luce esce dalle righe cromosferiche. L'animazione assegna invece una lunghezza d'onda fissa a ogni fotone.
- Non è rappresentata la distruzione dei fotoni per urto: in cromosfera, regime non-LTE, un atomo eccitato riemette quasi sempre prima di subire un urto (Approfondimento 7.1), per cui la catena di diffusioni è molto lunga.
- La direzione laterale serve solo a rendere visibile il percorso: le dimensioni orizzontali non hanno significato fisico.

## Comandi e parametri personalizzabili

- **Banda filtro Hα**: larghezza a metà altezza della trasmissione del filtro, con i valori tipici 0,3 Å (professionale), 0,5 Å (doppio etalon), 0,7 Å (amatoriale) e 3 Å (filtro largo), oppure con lo slider da 0,1 a 10 Å.
- **Banda filtro Ca II K**: valori tipici 0,3 Å (professionale), 2,4 Å (amatoriale) e 8 Å (filtro largo), oppure con lo slider.
- **Forma del filtro**: sotto 1 Å è quella di un etalon Fabry–Pérot, con ali estese; da 1 Å in su quella di un filtro interferenziale a fianchi ripidi, come i filtri Ca-K amatoriali.
- **Velocità**: da ×0,25 a ×3. Alle velocità basse si seguono bene i singoli urti.
- **Fotoni per corsia**: da 1 a 8. Con un solo fotone si segue la catena completa del fotone evidenziato; con più fotoni si vede meglio la distribuzione delle quote di fuga.
- **Pausa / Riprendi** e **Azzera**: fermano l'animazione o ripartono da capo, cancellando le statistiche.

## Contatori

Sotto il disegno, un riquadro per ciascuna corsia riporta:

- gli urti del fotone evidenziato nell'animazione;
- il numero di urti reali stimato per lo stesso tragitto ($\approx \tau^2$);
- la quota di fuga del fotone evidenziato;
- la quota media di fuga degli ultimi fotoni (fino a 200);
- la percentuale di fotoni fuggiti dalla fotosfera (sotto i 400 km, il limite della fotosfera nella Figura 7.1).

## Suggerimenti di utilizzo

Impostare la velocità a ×0,25 e un solo fotone per corsia: si segue la catena di assorbimenti e riemissioni del fotone evidenziato, con i tratti che si allungano salendo.

Con Hα, passare dal filtro da 3 Å a quello da 0,3 Å e attendere qualche decina di fotoni: le tacche delle quote di fuga si spostano dalla fotosfera all'alta cromosfera e la percentuale di fotoni fuggiti dalla fotosfera crolla. È per questo che servono filtri a banda strettissima per vedere la cromosfera.

Confrontare le tre corsie: nel continuo il fotone sfugge appena sopra la base della fotosfera e attraversa la cromosfera come se non ci fosse; in Hα e Ca II K la cromosfera è invece una "nebbia" che il fotone deve attraversare urto dopo urto.

Confrontare il numero di urti mostrato con quello reale stimato: per il continuo i due valori sono simili, per il centro di Hα differiscono di molti ordini di grandezza.
`;
