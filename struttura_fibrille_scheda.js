SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dello Script del cap. 14 del libro (capitolo14.tex).

# Struttura ed evoluzione delle fibrille cromosferiche

## Che cosa mostra l'animazione

L'animazione mostra, in tre dimensioni, tredici *fibrille cromosferiche* (tubi di flusso magnetico) che partono da una regione attiva circolare e si allargano a ventaglio verso una zona di atterraggio comune, in una scena che riproduce schematicamente l'andamento a S di un filamento osservato in riga H-alfa. Tutte le fibrille nascono con la stessa densità di plasma, rappresentata da un colore *chiaro* (giallo-arancione).

Il meccanismo centrale, che si ripete in continuazione su fibrille scelte a caso, è il seguente:

- Sulla fotosfera, alla base di una fibrilla ancora "libera" (senza eventi in corso), compare un piccolo **granulo**: un cerchio giallo con bordo nero, posizionato esattamente sotto il punto del tubo in cui il plasma sta per addensarsi.
- Il granulo si restringe fino quasi a scomparire; al suo posto nasce un sottile **tubo a zigzag**, che rappresenta un'onda di pressione e risale verso il tubo, allargando la propria oscillazione man mano che sale.
- Quando l'onda tocca il tubo, nel punto scelto a caso lungo il suo percorso, il plasma lì si *addensa*: il tratto diventa gradualmente più scuro (colore bruno), resta scuro per una durata casuale, poi torna gradualmente chiaro.
- Mentre resta scuro, il tratto scurito *scorre in avanti* nello stesso verso del flusso di plasma, mantenendo sempre la stessa lunghezza, come se fosse trasportato dal plasma in movimento.

Lungo ciascun tubo scorrono inoltre, in loop continuo, piccole freccette che rappresentano il flusso di plasma dalla regione attiva verso la zona di atterraggio, dove si trovano piccole facole luminose.

**Il limite del modello.** Anche questa animazione è *qualitativa*: la forma dei tubi, la comparsa dei granuli e il loro addensamento sono generati da funzioni geometriche e da probabilità scelte per dare un'idea plausibile del fenomeno, non per calcolare le reali onde magnetoacustiche o la densità del plasma cromosferico.

## Comandi e parametri personalizzabili

- **Vista dall'alto / Vista 3D / Vista laterale / Vista granuli**: spostano la telecamera in quattro posizioni predefinite, per osservare la scena dall'alto, in prospettiva, di lato, oppure da vicino sulla regione dei granuli.
- **Rotazione auto: on/off**: attiva o disattiva una rotazione automatica e continua della vista attorno al punto osservato.
- **? Aiuto**: ferma l'animazione e apre un pannello che spiega in dettaglio ogni singolo parametro del pannello "Controlli fibrille"; chiudendolo, l'animazione riparte.
- **Vista**: trascinando con il mouse o con un dito si ruota liberamente la scena; con la rotellina (o con due dita) si avvicina o allontana la vista; con il tasto destro si sposta la vista (pan).

Il pannello **Controlli fibrille**, apribile e richiudibile, raccoglie una ventina di cursori che regolano in tempo reale, senza bisogno di ricaricare la pagina, tutti gli aspetti del fenomeno: la frequenza con cui nascono i nuovi eventi, la durata e l'estensione del tratto scuro, la velocità delle dissolvenze, la zona del percorso in cui può comparire un evento, le dimensioni e i tempi del granulo fotosferico e dell'onda a zigzag, e la velocità delle freccette di flusso. Il pannello di aiuto interno (**? Aiuto**) descrive puntualmente l'effetto di ciascun cursore. I pulsanti **💾 Salva parametri** e **📂 Carica parametri** permettono di salvare su file e ricaricare in seguito una particolare combinazione di valori.

## Contatori

L'animazione non ha contatori numerici permanenti a schermo; i valori correnti di ogni parametro sono mostrati accanto al relativo cursore, nel pannello "Controlli fibrille", e si aggiornano in tempo reale mentre lo si sposta.

## Suggerimenti di utilizzo

Conviene iniziare dalla vista 3D per farsi un'idea d'insieme della forma a ventaglio delle fibrille, poi passare alla vista granuli per osservare da vicino, alla base dei tubi, la sequenza granulo → onda a zigzag → scurimento. Aprendo il pannello "Controlli fibrille" e aumentando la probabilità di innesco, o riducendo l'intervallo di controllo, si rendono gli eventi più frequenti e più facili da seguire; aumentando la durata minima e massima del tratto scuro, ogni evento resta visibile più a lungo. Il pulsante **? Aiuto** è il punto di riferimento per capire il significato esatto di ciascun cursore prima di modificarlo.

`;  // ← Ultima riga: non modificare.
