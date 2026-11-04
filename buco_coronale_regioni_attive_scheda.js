SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.

# Dalle regioni attive al buco coronale

## Che cosa mostra l'animazione

L'animazione accompagna i paragrafi 8.5 e 8.6 (dominio del campo magnetico e struttura della corona) e riprende i paragrafi 8.7 (CME), 8.8 (riscaldamento), 8.10 (vento solare) e 11.8. Risponde a una domanda: perché un buco coronale si apre, e poi si richiude, proprio tra due regioni attive?

La figura è una sezione del Sole al lembo, **in scala**: la fotosfera è un arco con il raggio solare vero (696 Mm) e la quota è misurata sopra la fotosfera, con le tacche a sinistra. Il tratto calcolato è largo circa 80° di longitudine, ma la finestra ne mostra solo una parte. Lungo la sezione si seguono 50 giorni, divisi in quattro fasi, segnate sotto la barra del tempo.

- **Regioni attive intense (giorni 0–14).** Due regioni attive, A a sinistra e B a destra, hanno la polarità − rivolta verso il centro. Tra le due c'è una zona di polarità + (zona unipolare): tutto il suo flusso è catturato dalle polarità − delle regioni attive e si richiude in archi. Le correnti elettriche negli archi delle regioni attive crescono, gli archi si gonfiano e, quando l'energia raggiunge la soglia, la regione A erutta (CME, giorno 8).
- **Declino (giorni 14–22).** Le regioni attive decadono: il flusso si disperde in superficie e le polarità − si indeboliscono. Il flusso + della zona centrale non trova più abbastanza flusso − con cui richiudersi.
- **Buco coronale aperto (giorni 22–38).** Le linee della zona + si aprono verso lo spazio: nasce un buco coronale. La frazione di flusso aperto arriva a circa l'80%. Dal centro del buco esce il vento veloce, dai bordi il vento lento.
- **Nuove regioni attive (giorni 38–50).** Emergono due nuove regioni attive, C e D, ancora con la polarità − verso il centro. Il flusso + torna a essere catturato e il buco si richiude del tutto. Verso la fine anche la regione C accumula energia ed erutta (giorno 48).

Il buco coronale non è disegnato a mano: la sua apertura e la sua chiusura sono il risultato del calcolo del campo in ogni istante (vedi *Il modello fisico*).

## Che cosa si vede sopra la fotosfera

- **Archi delle regioni attive** (rosso mattone): linee chiuse che collegano le due polarità di una regione attiva. I puntini che le percorrono rappresentano il plasma, che scorre in un solo verso, dal piede + al piede −, uguale per tutta la regione.
- **Archi della corona quieta** (arancione): linee chiuse più deboli, tra la zona + e le regioni attive o tra piccole polarità della rete.
- **Linee aperte del buco coronale**: azzurre al centro del buco (vento veloce), viola ai bordi, vicino agli archi chiusi (vento lento). Le linee grigie sono altre linee aperte, fuori dal buco.
- **CME**: quando l'energia di una regione attiva raggiunge il 100%, gli archi più alti si staccano e una bolla di plasma e campo sale verso l'alto; sotto restano un foglio di corrente e archi post-eruttivi. Durante l'eruzione il tempo dell'animazione rallenta, perché una CME si svolge in alcune ore, non in giorni.

## Che cosa si vede sotto la fotosfera

Sotto la fotosfera è mostrato solo lo strato più alto della zona convettiva, circa 60 Mm al centro della finestra; la curvatura della superficie fa sì che ai lati se ne veda meno. È lo stesso schema degli Script 5.3 e 5.4.

- **Tronco** (dorato): sotto ogni regione attiva, a circa 25 Mm di profondità, c'è un fascio orizzontale di tubi. È la parte alta, quasi orizzontale, dell'anello a Ω risalito dalla base della zona convettiva (Script 5.3). Il tubo toroidale vero e proprio resta molto più in basso, a circa 200 Mm, nella tachocline (paragrafo 4.4): è fuori dalla figura e lo indicano le due gambe tratteggiate che scendono dalle estremità del tronco.
- **Gambe delle regioni attive**: fasci di tubi sottili, chiari per la polarità + e azzurri per la polarità −, che salgono dal tronco fino ai piedi degli archi e sono deformati dalla convezione.
- **Distacco**: quando una regione attiva decade, le gambe si staccano dal tronco a pochi Mm sotto la superficie (2–6 Mm, Schüssler e Rempel 2005), il tronco si sfilaccia e scompare; in superficie restano frammenti che si disperdono.
- **Emersione**: per le nuove regioni attive il tronco compare dal giorno 27; tra i giorni 34 e 37 la sua sommità si solleva, attraversa la fotosfera e forma i nuovi piedi.
- **Sotto il buco coronale** ci sono solo tubi sottili, quasi verticali, della stessa polarità +: è flusso residuo, disperso in superficie, che non è più ancorato a un tronco. La sua connessione in profondità non è nota, e la figura lo dichiara.
- Le linee chiare ad arco nello strato rappresentano le celle convettive (Script 4.5 e 4.6).

## Il riscaldamento del plasma e il vento

Il cursore *Riscaldamento del plasma* rappresenta, in modo schematico, quanto è caldo il plasma che si trova sulle linee aperte. Va da 0 a 100; la soglia è a 40.

- **Sopra la soglia** la corona è a milioni di gradi: la pressione del plasma caldo spinge il plasma lungo le linee aperte e si forma il vento solare, continuo. I puntini salgono e non tornano indietro: velocemente al centro del buco, più lentamente ai bordi. La riga di stato riporta le velocità tipiche a grande distanza dal Sole, circa 750 km/s per il vento veloce e 350 km/s per quello lento, che crescono con il riscaldamento.
- **Sotto la soglia** il plasma non ha energia sufficiente: sale lungo le linee aperte fino a una quota massima, si ferma e ricade (i puntini in discesa diventano rosa), come accade nelle spicole. La quota massima raggiunta, riportata nella riga di stato, cresce con il riscaldamento: da circa 15 Mm a circa 335 Mm appena sotto la soglia.

Il riscaldamento agisce solo sul moto del plasma: non cambia la forma del campo, che è dominato dal campo magnetico ($\beta < 1$).

## Il modello fisico

Il campo della corona è calcolato in ogni istante come equilibrio *force-free* in due dimensioni sulla sezione del lembo, con il raggio solare vero: le forze magnetiche si bilanciano da sole, perché le correnti elettriche scorrono parallele al campo. Le correnti sono presenti solo negli archi delle regioni attive e rappresentano l'energia accumulata; altrove il campo è potenziale. L'equazione che si risolve è l'equazione di Grad–Shafranov:

$$\nabla^2 A = -\left(\frac{r}{R_\odot}\right)^2 F\,F'(A)$$

dove $A$ è il potenziale vettore, le cui curve di livello sono le linee di campo, e $F(A)$ descrive la corrente lungo ogni linea. A 800 Mm di quota il campo è imposto radiale (superficie sorgente): oltre quella quota le linee sono aperte.

- **Superficie.** Le regioni attive sono coppie di polarità opposte; durante il declino si allargano e si indeboliscono, come fa il flusso disperso dalla convezione e dalla rotazione differenziale. A queste si aggiungono la zona unipolare + e le piccole polarità della rete.
- **Energia e CME.** L'energia di una regione attiva è la corrente nei suoi archi. Cresce nel tempo; la soglia di eruzione (100%) è posta dove gli archi raggiungono circa 250 Mm. In due dimensioni gli archi possono gonfiarsi molto più che nel Sole reale, quindi la soglia è un parametro scelto, non il risultato del calcolo. Dopo l'eruzione l'energia riparte da un valore più basso.
- **Apertura del buco.** È il risultato del calcolo: finché le polarità − delle regioni attive sono forti, il flusso + si richiude su di esse; quando si indeboliscono, le linee + si aprono (riconnessione di interscambio). Lo stato riporta la frazione di flusso + aperto.

## Comandi

- **Avvia / Pausa** e **Ricomincia**; la **barra del tempo** permette di andare a un giorno qualsiasi. Il calcolo dei 50 giorni avviene all'apertura della pagina e richiede circa un minuto: l'animazione si può avviare subito, l'avanzamento è indicato accanto ai comandi.
- **Velocità**: ×0,5, ×1, ×2.
- **Zoom**: con la rotella o con i pulsanti − e +. Lo zoom è centrato in orizzontale e il bordo inferiore resta sempre alla stessa profondità: cambia soltanto quanta corona si vede sopra. *Vista iniziale* riporta zoom e posizione all'avvio. Trascinando la figura la si sposta lateralmente.
- **Riscaldamento del plasma**: vedi sopra.
- **Mostra**: *Moti del plasma*, *Sotto la fotosfera* ed *Etichette* attivano o nascondono le rispettive parti della figura.

## Stato

Il riquadro *Stato* riporta il giorno, la fase, la frazione di flusso aperto della zona + e l'energia accumulata dalle due regioni attive presenti (100% = soglia di eruzione), con una frase che descrive quello che sta accadendo.

## Il modello e le sue semplificazioni

- Il calcolo è in due dimensioni: le regioni attive sono sezioni di strutture che nel Sole reale sono tridimensionali. Per questo la soglia di eruzione è fissata a mano.
- La CME, i moti del plasma e i tubi sotto la fotosfera sono schematici. I tubi seguono le polarità calcolate alla superficie, ma non sono il risultato di un calcolo magnetoidrodinamico.
- Le durate sono tipiche ma semplificate: regioni attive intense per circa due settimane, buco coronale aperto per circa due settimane. I buchi coronali alle basse latitudini durano di solito meno di una rotazione solare.
- I moti del plasma sono accelerati rispetto ai giorni dell'animazione, altrimenti sarebbero invisibili.

## Suggerimenti di utilizzo

Lasciare scorrere l'animazione dall'inizio con le etichette attive: si vedono gli archi delle regioni attive gonfiarsi fino alla CME del giorno 8, poi il declino. Fermarsi intorno al giorno 18 e poi al giorno 24: tra le due date le linee della zona + passano da chiuse ad aperte.

Con il buco aperto (per esempio al giorno 30), abbassare il riscaldamento sotto 40: il plasma sulle linee aperte sale e ricade. Rialzarlo: il vento riparte, più veloce al centro del buco che ai bordi.

Ingrandire la zona sotto una regione attiva con la sezione sotto la fotosfera attiva, prima al giorno 5 (gambe collegate al tronco), poi al giorno 16 (distacco e tronco che si sfilaccia), infine tra i giorni 34 e 37 (emersione delle nuove regioni attive).

Allargare la vista con lo zoom per vedere fin dove arrivano gli archi più alti e le linee aperte.
`;
