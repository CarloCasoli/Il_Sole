SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.

# Il viaggio del fotone nella cromosfera

## Che cosa mostra l'animazione

L'animazione accompagna l'Approfondimento 7.3 e mostra due cose: perché la luce che osserviamo in una riga spettrale proviene dalla cromosfera, anche se i fotoni nascono più in basso, e perché al centro della riga ne arriva all'osservatore solo una piccola parte.

Un fotone non percorre un cammino diretto verso l'osservatore: viene assorbito da un atomo e riemesso in una direzione casuale, poi di nuovo assorbito e riemesso, molte volte. Ogni riemissione è, in un certo senso, un fotone nuovo. La direzione di ogni riemissione è davvero casuale: in su o in giù con la stessa probabilità. Salendo, la densità del plasma diminuisce e i tratti tra un urto e il successivo si allungano. Il viaggio finisce in uno di due modi:

- il fotone raggiunge la quota in cui non incontra più atomi capaci di assorbirlo e vola dritto verso l'osservatore. Il fotone che vediamo è l'ultimo di questa catena, riemesso alla quota in cui la profondità ottica è dell'ordine dell'unità ($\tau \approx 1$);
- il fotone ricade negli strati densi in basso, dove un atomo che lo ha assorbito viene urtato da un elettrone prima di riemetterlo e gli cede l'energia: il fotone si spegne e la sua energia diventa calore del gas.

Il disegno riprende la colonna d'atmosfera dell'animazione 7.1: sotto la fotosfera (dove anche il continuo è opaco, $\tau > 1$), fotosfera, bassa, media e alta cromosfera e, oltre i 3.000 km, la zona in cui il plasma è trasparente anche alla riga. Le suddivisioni della cromosfera sono indicate solo da linee tratteggiate e dalle scritte in alto: in cromosfera l'unico colore è quello della zona da cui esce la luce della riga. Su computer la quota scorre da sinistra a destra e l'osservatore (l'occhio) è a destra; su smartphone la quota scorre dal basso verso l'alto e l'osservatore è in alto. Su computer, sopra le corsie, è riportata la temperatura del plasma della Figura 7.1, sulla stessa scala delle quote.

Le corsie sono tre, una per tipo di luce:

- **Continuo**, una lunghezza d'onda generica (per esempio 500 nm) per la quale la cromosfera è trasparente. Il fotone parte sotto la fotosfera, rimbalza negli strati profondi, esce appena sopra la base della fotosfera e poi attraversa tutta la cromosfera senza più urti. Escono tutti: nel continuo un assorbimento è seguito subito da una nuova emissione termica, per cui non si vedono spegnimenti.
- **Hα** (656,3 nm). Il fotone parte dallo stesso strato del continuo, sotto la fotosfera, e continua a rimbalzare fino in cromosfera. Se il filtro è stretto deve salire fino all'alta cromosfera, e lungo la strada spesso ricade in basso e si spegne.
- **Ca II K** (393,4 nm). Stesso comportamento, con quote di fuga tipiche della bassa e media cromosfera.

## Colori dei fotoni e zona di uscita

- **Giallo**: il fotone è ancora dentro l'atmosfera e continua a essere assorbito e riemesso. I piccoli lampi gialli sono gli urti: l'atomo assorbe il fotone e lo riemette.
- **Rosso (Hα) o viola (Ca II K), traccia continua**: il fotone è stato riemesso per l'ultima volta in cromosfera e vola verso l'osservatore. È la luce che forma l'immagine della cromosfera.
- **Rosso o viola, traccia tratteggiata**: il fotone è uscito già dalla fotosfera. È luce delle ali della riga, cioè luce fotosferica che entra nell'immagine e ne riduce il contrasto.
- **Giallo anche dopo l'uscita**: nella corsia del continuo, dove tutta la luce esce dalla fotosfera.
- **Lampo grigio con la croce**: fotone spento negli strati densi.

Il colore non indica un cambio di lunghezza d'onda, che resta la stessa, ma lo strato da cui il fotone è stato riemesso per l'ultima volta.

In ogni corsia, una fascia sfumata nel colore della riga mostra da quali quote esce la luce raccolta dal filtro. È calcolata come nell'animazione 7.1: è la somma delle funzioni di contributo di tutte le lunghezze d'onda della banda, pesate per la trasmissione del filtro e per l'intensità della riga. Il riquadro delimitato da due linee è la zona cromosferica da cui esce la luce della riga: comprende la parte centrale (dal 20% all'80%) della luce emessa sopra la fotosfera. L'etichetta riporta le quote del riquadro e la percentuale di luce fotosferica nella banda. Con il filtro da 0,3 Å la zona di Hα è nell'alta cromosfera (circa 1.800–2.650 km) e la luce fotosferica è trascurabile; con 0,7 Å la zona scende a circa 1.150–2.450 km e la luce fotosferica è circa il 17%; con 3 Å la luce fotosferica supera il 60%.

## Fotone evidenziato e tacche

 In ogni corsia un fotone è evidenziato (il punto più grande): il suo percorso resta disegnato e il numero dei suoi urti è indicato accanto alla corsia. Quando il fotone evidenziato sfugge, un cerchio segna il punto dell'ultima riemissione e da lì parte la traccia rettilinea verso l'osservatore; quando si spegne, il suo percorso resta visibile per un momento, tratteggiato in grigio. Le piccole tacche sul bordo di ogni corsia segnano le quote di fuga degli ultimi fotoni usciti: cadono dentro la fascia sfumata, a conferma che i fotoni simulati escono proprio dalla zona calcolata.

Per Hα e Ca II K, a ogni fotone viene assegnata a caso una lunghezza d'onda dentro la banda del filtro, con la stessa forma del filtro dell'animazione 7.1. Un fotone preso al centro della riga deve salire in alto prima di poter sfuggire, e la maggior parte non ci riesce; uno preso nelle ali, dove il plasma è più trasparente, sfugge già dalla fotosfera e quasi sempre ce la fa. Accanto a ogni corsia è riportata la percentuale di fotoni usciti e spenti.

## Il ragionamento

1. **La densità non respinge il fotone.** A ogni riemissione la direzione è a caso. Dove il gas è più denso il fotone viene riassorbito prima, cioè fa passi più corti, ma ci va.
2. **Gli strati densi sono una trappola, non un muro.** Sotto la fotosfera e, in misura minore, in fotosfera, gli urti sono così frequenti che un atomo eccitato viene spesso diseccitato da un urto prima di riemettere il fotone. In cromosfera, invece, l'atomo eccitato riemette quasi sempre prima di subire un urto (Approfondimento 7.1): lì il fotone cambia direzione, ma non si spegne.
3. **Perché esce solo una parte dei fotoni.** Il fotone parte dal basso, dentro la trappola e lontano dall'uscita. Muovendosi a caso, ha più occasioni di spegnersi che di arrivare oltre la quota di fuga. Più in alto è la quota di fuga, minore è la percentuale di fotoni che escono. Nel continuo invece ogni assorbimento è seguito da una nuova emissione e nessun fotone si spegne.
4. **Che cosa vediamo.** Con un filtro stretto su Hα esce circa il 15–20% dei fotoni: è il fondo scuro della riga. Quei fotoni non sono luce della fotosfera passata direttamente, ma sono stati riemessi per l'ultima volta dagli strati alti della cromosfera (Approfondimento 7.3).
5. **Il ruolo del filtro.** Allargando la banda entrano fotoni delle ali, che sfuggono dalla fotosfera: la percentuale di fotoni usciti sale, la quota media di fuga scende e l'immagine contiene sempre più luce fotosferica, cioè perde contrasto.

## Il modello e le sue semplificazioni

I fotoni di Hα e Ca II K partono, come quelli del continuo, da un punto a caso tra 300 e 400 km sotto la base della fotosfera, con lo spettro del continuo: la riga non è imposta all'inizio, ma viene scavata dal cammino nella cromosfera e dagli spegnimenti. Ogni fotone ha una quota di fuga che dipende dalla sua lunghezza d'onda, derivata dalla Figura 7.1 con la relazione $h \approx H \ln(\kappa_{riga}/\kappa_{cont})$ e con una dispersione pari alla larghezza della funzione di contributo, come nell'animazione 7.1. La quota media di fuga dei fotoni che escono è vicina a quella dell'animazione 7.1 (entro circa 70 km).

Il cammino non ha nessuna direzione preferita, a parte il primo tratto, diretto verso l'alto all'uscita dal punto di emissione. La probabilità che un assorbimento spenga il fotone è più alta sotto la fotosfera, piccola in fotosfera e nulla in cromosfera. Il suo valore è tarato fotone per fotone, in base alla quota da cui quel fotone potrà sfuggire: più freddo è lo strato, più alta è la probabilità di spegnersi lungo il cammino. La taratura è fatta in modo che la frazione di fotoni che arrivano all'osservatore sia uguale alla luminosità relativa della luce emessa a quella quota, calcolata con la temperatura della Figura 7.1. Nella realtà la luce di una riga è debole per due motivi: molti fotoni vengono distrutti negli strati densi, e lo strato da cui la luce sfugge è più freddo della fotosfera, effetto che a 393 nm pesa molto più che a 656 nm. In un'animazione a fotoni i due effetti sono rappresentati insieme dagli spegnimenti. Il risultato riproduce, banda per banda, l'intensità del modello della Figura 7.1: escono circa il 17% dei fotoni Hα con il filtro da 0,3 Å (il fondo della riga osservata è circa il 17% del continuo), circa il 22% con quello da 0,7 Å e circa il 41% con quello da 3 Å; per Ca II K circa il 15% con 0,3 Å, il 14% con 2,4 Å e il 23% con 8 Å. Ogni corsia emette fotoni a ritmo costante, uguale per tutte e tre, come avviene nel Sole: con un fotone al secondo, dopo una decina di minuti a velocità ×1 sono partiti circa 600 fotoni per corsia, e la percentuale mostrata oscilla di 2–3 punti; aumentando i fotoni emessi o la velocità la statistica si accumula più in fretta. Il destino di ogni fotone resta casuale, per cui le uscite non sono cadenzate: qualche pausa più lunga e qualche uscita ravvicinata sono normali. Si noti che con 1 Å escono meno fotoni che con 0,7 Å: sotto 1 Å il filtro è un etalon, con ali estese che lasciano entrare luce delle ali della riga; da 1 Å in su è un filtro interferenziale a fianchi ripidi, che la taglia.

Il numero di urti è simbolico. Per una passeggiata casuale il numero di urti necessari per uscire da uno strato di profondità ottica $\tau$ è dell'ordine di $\tau^2$. Partendo da circa 400 km sotto la base della fotosfera, il continuo ha $\tau \approx 10$ e quindi circa un centinaio di urti, un valore vicino a quello mostrato. Al centro di Hα, invece, la profondità ottica nello stesso punto di partenza è dell'ordine di $10^7$ e gli urti reali sarebbero circa $10^{14}$–$10^{15}$, con tratti di frazioni di millimetro. Per rendere visibile il percorso, l'animazione ingrandisce i tratti e ne fa crescere la lunghezza con la quota, così che il viaggio duri qualche secondo. Il numero reale stimato è riportato nei riquadri sotto il disegno.

Altre semplificazioni:

- In una riga reale, a ogni riemissione il fotone può cambiare leggermente lunghezza d'onda (ridistribuzione in frequenza). Un fotone nato al centro della riga può così finire nelle ali e sfuggire da lì: è uno dei meccanismi principali con cui la luce esce dalle righe cromosferiche. L'animazione assegna invece una lunghezza d'onda fissa a ogni fotone.
- Tutti i fotoni della riga arrivano dal basso. In realtà anche la cromosfera produce fotoni propri, quando un elettrone urta un atomo e lo eccita o quando un elettrone si ricombina con uno ione. Sul disco questo contributo è più debole della luce che arriva da sotto e la riga resta scura; oltre il bordo del disco, dove sotto non c'è la fotosfera, è l'unico contributo, ed è per questo che protuberanze e spicole appaiono in emissione.
- In cromosfera lo spegnimento per urto non è del tutto assente, ma è molto meno probabile che negli strati densi, per cui nell'animazione è trascurato.
- La direzione laterale serve solo a rendere visibile il percorso: le dimensioni orizzontali non hanno significato fisico.

## Comandi e parametri personalizzabili

- **Banda filtro Hα**: larghezza a metà altezza della trasmissione del filtro, con i valori tipici 0,3 Å (professionale), 0,5 Å (doppio etalon), 0,7 Å (amatoriale) e 3 Å (filtro largo), oppure con lo slider da 0,1 a 10 Å.
- **Banda filtro Ca II K**: valori tipici 0,3 Å (professionale), 2,4 Å (amatoriale) e 8 Å (filtro largo), oppure con lo slider.
- **Forma del filtro**: sotto 1 Å è quella di un etalon Fabry–Pérot, con ali estese; da 1 Å in su quella di un filtro interferenziale a fianchi ripidi, come i filtri Ca-K amatoriali.
- **Velocità**: da ×0,25 a ×3. Alle velocità basse si seguono bene i singoli urti.
- **Fotoni emessi al secondo**: da 0,25 a 3, uguale per le tre corsie. Il numero di fotoni presenti non è fisso: nelle righe se ne accumulano di più che nel continuo, perché i fotoni di riga restano intrappolati più a lungo. Con pochi fotoni si segue meglio la catena del fotone evidenziato; con più fotoni i contatori si stabilizzano prima e si vede meglio la distribuzione delle quote di fuga.
- **Pausa / Riprendi** e **Azzera**: fermano l'animazione o ripartono da capo, cancellando le statistiche: dopo l'azzeramento le corsie si riempiono di nuovo gradualmente. Anche cambiando la banda di un filtro le statistiche di quella corsia ripartono da zero.

## Contatori

Accanto alle corsie di Hα e Ca II K sono riportate le percentuali di fotoni usciti e spenti. Sotto il disegno, un riquadro per ciascuna corsia riporta:

- gli urti del fotone evidenziato nell'animazione;
- il numero di urti reali stimato per lo stesso tragitto ($\approx \tau^2$);
- l'esito dell'ultimo fotone evidenziato: la quota da cui è uscito o quella a cui si è spento;
- la zona cromosferica di uscita della luce e la percentuale di luce fotosferica nella banda, calcolate come nell'animazione 7.1;
- la quota media di fuga degli ultimi fotoni usciti (fino a 200);
- quanti fotoni sono usciti verso l'osservatore e quanti sono ricaduti e si sono spenti negli strati densi, con le percentuali.

Accanto all'occhio dell'osservatore (su smartphone, a destra dell'occhio) è indicato il numero di fotoni ricevuti, cioè arrivati fino all'osservatore. Riparte da zero con **Azzera** e quando si cambia la banda di un filtro. Poiché le tre corsie emettono fotoni allo stesso ritmo, il confronto tra i fotoni ricevuti mostra direttamente quanto la riga è più scura del continuo.

## Suggerimenti di utilizzo

Impostare la velocità a ×0,25 e il minimo di fotoni emessi (0,25 al secondo): si segue la catena di assorbimenti e riemissioni del fotone evidenziato, con i tratti che si allungano salendo. Nella corsia di Hα si vede che il fotone, partito sotto la fotosfera come quello del continuo, scende spesso quanto sale, e che quando ricade negli strati densi finisce presto per spegnersi.

Con Hα, passare dal filtro da 3 Å a quello da 0,3 Å, con 2 o 3 fotoni emessi al secondo, e attendere che i contatori si stabilizzino: la fascia colorata e le tacche delle quote di fuga si spostano dalla fotosfera all'alta cromosfera, i fotoni con la traccia tratteggiata quasi scompaiono e la percentuale di fotoni usciti scende da circa il 40% a meno del 20%. È la riga che si fa scura: per questo servono filtri a banda strettissima per vedere la cromosfera con contrasto.

Confrontare le tre corsie: nel continuo il fotone sfugge appena sopra la base della fotosfera e attraversa la cromosfera come se non ci fosse; in Hα e Ca II K la cromosfera è invece una "nebbia" che il fotone deve attraversare urto dopo urto, e che rimanda indietro la maggior parte dei fotoni.

Confrontare il numero di urti mostrato con quello reale stimato: per il continuo i due valori sono simili, per il centro di Hα differiscono di molti ordini di grandezza.
`;
