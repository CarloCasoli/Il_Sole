SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dello Script 5.3 del libro (capitolo5.tex).

# Risalita dei tubi di flusso del campo magnetico

## Che cosa mostra l'animazione

L'animazione mostra in tre dimensioni la risalita di un tratto del campo toroidale dalla base della zona convettiva fino alla fotosfera, in un Sole che ruota in modo differenziale. Il tubo di flusso giace inizialmente alla base della zona convettiva, a circa $0,7\,R_\odot$, lungo un parallelo. Un tratto del tubo diventa più leggero del plasma circostante e sale ad arco per galleggiamento magnetico, mentre i due piedi restano ancorati alla base. Quando la cima dell'arco attraversa la fotosfera compaiono due macchie, nei punti in cui il tubo buca la superficie.

Il galleggiamento nasce dalla differenza di peso tra il plasma del tubo e quello circostante; poiché il peso è diretto verso il centro del Sole, la spinta è radiale e, in assenza di altre forze, il tubo salirebbe lungo il raggio, senza cambiare latitudine. L'unica forza che lo devia da questa direzione è la forza di Coriolis, che agisce in due tempi. Salendo, il tubo si allontana dall'asse di rotazione e, come una pattinatrice che allarga le braccia, resta indietro rispetto al plasma circostante, cioè si sposta verso Ovest. Questo moto verso Ovest è a sua volta deviato dalla forza di Coriolis verso l'asse di rotazione, quindi verso il polo. Solo se il tubo cambia latitudine entra in gioco la rotazione differenziale, che lo trascina ulteriormente secondo la velocità di rotazione della nuova latitudine.

L'entità della deviazione dipende dall'intensità del campo nel tubo. Un tubo forte galleggia molto, sale in poche settimane e viene deviato poco: emerge quasi alla latitudine di partenza. Un tubo debole sale lentamente, la forza di Coriolis ha più tempo per agire e il tubo tenderebbe a salire quasi parallelo all'asse di rotazione, verso latitudini alte dove le macchie non si osservano mai. In realtà un tubo debole non arriva in superficie: salendo il suo campo si indebolisce più rapidamente dei moti convettivi circostanti e, quando diventa più debole di questi, la convezione lo sfilaccia e lo disgrega. È questo il ragionamento con cui si deduce che i tubi alla base della zona convettiva devono avere un campo dell'ordine di $10^5$ gauss.

L'animazione è uno schema qualitativo e non una simulazione magnetoidrodinamica: i percorsi della cima dell'arco riproducono l'andamento dei modelli a tubo sottile (Choudhuri e Gilman, 1987; Fan, 2009), ma tempi, angoli, spessori e soglia di disgregazione sono semplificati. L'inclinazione della coppia di macchie (legge di Joy) è imposta dal modello e non calcolata, e l'effetto della rotazione differenziale sulla cima è ridotto per rappresentare la tensione del tubo.

## Elementi della scena

- **Il Sole**: la fotosfera semitrasparente, con l'equatore e i paralleli a $\pm 30°$ e $\pm 60°$, l'asse di rotazione con le indicazioni N e S e, all'interno, la sfera più scura della zona radiativa, che termina a $0,7\,R_\odot$. Una freccia indica il verso di rotazione (Est).
- **File di punti sulla superficie**: sei meridiani di punti, dalla latitudine $-75°$ a $+75°$. All'inizio sono allineati; con il passare del tempo si incurvano perché l'equatore ruota più velocemente delle alte latitudini, e rendono così visibile la rotazione differenziale.
- **Tubo di flusso**: l'anello viola alla base della zona convettiva, alla latitudine di partenza, con il tratto centrale che sale ad arco. Durante la disgregazione il tubo si divide in sette fili sottili che ondeggiano, si allontanano e sbiadiscono.
- **Riferimenti**: la linea grigia tratteggiata che parte dal tubo indica la salita puramente radiale; il cerchio tratteggiato sulla fotosfera indica la latitudine di partenza.
- **Scia**: la linea rossa lasciata dalla cima dell'arco, che mostra il percorso reale e quanto si discosta dalla salita radiale.
- **Macchie**: due dischi scuri sulla fotosfera, nei punti in cui l'arco la attraversa.
- **Taglio lungo il meridiano**: nel pannello laterale, un quarto di sezione del Sole con l'asse, l'equatore e la zona radiativa. Vi sono tracciati la salita radiale (grigio tratteggiato), la salita parallela all'asse di rotazione (punteggiato) e il percorso reale della cima (rosso). È il riferimento più affidabile per leggere la latitudine, che nella vista 3D obliqua può essere falsata dalla prospettiva.

## Comandi e parametri personalizzabili

- **Avvia / Pausa / Riprendi / Ripeti**: avvia, sospende o riprende la risalita; a fine corsa il pulsante permette di ripeterla.
- **Ricomincia**: riporta il tubo alla base della zona convettiva e cancella la scia.
- **Intensità del campo nel tubo**: da $2$ a $15 \cdot 10^4$ gauss (valore iniziale $10 \cdot 10^4$). Determina la durata della salita (circa un mese per $10^5$ gauss, diversi mesi per i tubi deboli) e quindi l'entità della deviazione.
- **Latitudine di partenza**: latitudine del tubo alla base, da $10°$ a $35°$ (valore iniziale $20°$).
- **Velocità**: giorni simulati per ogni secondo reale ($1$, $3$, $6$, $12$ o $24$; valore iniziale $3$).
- **Forza di Coriolis**: attiva o disattiva la forza di Coriolis. Disattivata, il tubo sale lungo il raggio senza cambiare latitudine.
- **Rotazione differenziale sul tubo**: attiva o disattiva il trascinamento della cima da parte della rotazione differenziale quando cambia latitudine.
- **Scia della cima dell'arco**: mostra o nasconde la scia.
- **Disgregazione per convezione**: attiva o disattiva la disgregazione dei tubi deboli. Disattivata, mostra il percorso ipotetico che un tubo debole seguirebbe se restasse intero.
- **Punto di vista**: *Chi ruota col Sole*, in cui la scena ruota insieme al Sole alla velocità della latitudine di partenza e restano visibili solo i moti relativi, oppure *Dallo spazio*, in cui si vede l'intera rotazione.
- **Vista**: *Obliqua*, *Dal polo Nord* o *Di fronte*. Trascinando con il mouse si ruota liberamente la scena e con la rotellina si cambia l'ingrandimento.

### Contatori

Il pannello mostra in tempo reale i giorni trascorsi, lo stato del tubo (*compatto*, *si sfilaccia*, *disgregato*), la profondità della cima dell'arco sotto la fotosfera in km, la sua latitudine e lo spostamento verso Ovest rispetto al punto di partenza, suddiviso nel contributo della forza di Coriolis e in quello della rotazione differenziale. In alto a sinistra nella scena sono ripetuti il giorno e l'intensità del campo; in basso, una frase descrive la fase in corso e, a fine corsa, la latitudine di emersione o la profondità a cui il tubo si è disgregato.

## Suggerimenti di utilizzo

Conviene partire con la *Forza di Coriolis* disattivata: la cima sale lungo il raggio, la latitudine resta costante e il contributo della rotazione differenziale resta nullo. Attivando la forza di Coriolis con il campo a $10 \cdot 10^4$ gauss si osservano il leggero ritardo verso Ovest e la piccola deviazione verso il polo. Riducendo il campo a $3$–$4 \cdot 10^4$ gauss la salita diventa lenta e la deviazione cresce; con la *Disgregazione per convezione* attiva il tubo si sfilaccia prima di arrivare in superficie, mentre disattivandola si vede il percorso ipotetico verso le alte latitudini. Il punto di vista *Chi ruota col Sole* è il più adatto a osservare i moti relativi; il confronto con la vista *Dallo spazio* mostra perché, osservando il Sole dall'esterno, questi spostamenti si confondono nella rotazione d'insieme. La vista *Dal polo Nord* è la più chiara per lo spostamento verso Ovest, il *Taglio lungo il meridiano* per quello verso il polo.

`;  // ← Ultima riga: non modificare.
