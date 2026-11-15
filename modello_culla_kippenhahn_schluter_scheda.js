SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dello Script del cap. 14 del libro (capitolo14.tex).

# Culla del filamento — modello Kippenhahn–Schlüter

## Che cosa mostra l'animazione

L'animazione mostra in tre dimensioni la formazione di una *culla* magnetica e la *condensazione* di plasma al suo interno, secondo il modello di Kippenhahn e Schlüter per il sostegno dei filamenti e delle protuberanze solari. Una griglia sottile in basso rappresenta la fotosfera. Sulla griglia, la *linea di inversione di polarità* (PIL, *polarity inversion line*), cioè la linea che separa le zone di polarità magnetica opposta, è disegnata in rosso lungo un asse della scena. Sopra la PIL si estende un'arcata di tredici linee di campo magnetico, in blu, tutte uguali, parallele tra loro e ugualmente distanziate: ciascuna è un arco a forma di parabola che attraversa la PIL, alto circa $7$ unità al centro e largo $14$ unità alla base.

La scena si anima in due parti, che avvengono insieme.

- **Formazione della culla**: al centro di ogni arco, sopra la PIL, il campo magnetico si abbassa gradualmente, di circa $2$ unità al massimo, formando un'ansa concava verso l'alto tra due gobbe laterali. È la *culla*: una depressione delle linee di campo in cui il plasma può essere trattenuto contro la gravità. Il resto dell'arco rimane quasi invariato.
- **Condensazione del plasma**: quando la culla è ormai abbastanza profonda (da circa il $60\%$ della sua profondità massima in poi), compare al suo interno un cilindro luminoso azzurro, disposto lungo la PIL, che rappresenta il filamento di plasma condensato. Il cilindro, che è sempre alla stessa quota, si fa via via meno trasparente fino a essere ben visibile quando la culla ha raggiunto la massima profondità. La sua quota è scelta in modo che a $60\%$ le linee di campo lo attraversino al centro, e a profondità maggiore passino sotto di esso, come se lo sostenessero.

L'animazione si svolge una sola volta, in circa $3{,}1$ secondi: parte dagli archi ancora piatti e si ferma, al termine, con la culla completamente formata e il plasma condensato al suo interno. Il tasto **↺ Ricomincia** si illumina quando l'animazione è terminata e permette di farla ripartire dall'inizio quante volte si vuole.

**Il limite del modello.** L'animazione *non spiega come si crea la piccola culla iniziale*. Mostra solo che cosa succede dopo: una depressione delle linee di campo che si approfondisce e il plasma che si condensa al suo interno. La depressione, nel codice, è imposta da una formula matematica e non deriva da un processo fisico: non viene simulata nessuna forza né il meccanismo che deforma per la prima volta il campo magnetico e produce la culla. Questo è il limite del modello: dà una buona immagine di come una culla già presente sostenga la materia, ma lascia aperta la domanda di come nasca.

L'animazione è inoltre *qualitativa*: le dimensioni, i tempi e le forme sono schematici, non in scala, e non vengono calcolati gravità, densità, temperatura né forze magnetiche. Il campo è disegnato come un'arcata che attraversa perpendicolarmente la PIL, una semplificazione: nei filamenti reali il campo è in genere fortemente inclinato, quasi parallelo alla PIL.

## Comandi e parametri personalizzabili

L'animazione non ha pulsanti né cursori, a parte il tasto **↺ Ricomincia**, che riporta la scena all'inizio del ciclo. L'unico altro modo di interagire è spostare la vista con il mouse o con un dito.

- **Trascinamento**: ruota la scena attorno al suo centro.
- **Rotellina**: avvicina o allontana la vista (con due dita sullo schermo tattile).
- **Tasto destro**: sposta la vista.

Tutti gli altri parametri si modificano nel sorgente della pagina. I principali sono:

- **Numero e distanza delle linee di campo**: tredici linee, da $-9$ a $+9$ con passo $1{,}5$.
- **Forma dell'arco**: altezza massima ($7$) e semilarghezza ($7$).
- **Profondità della culla**: $2{,}0$ unità al massimo.
- **Larghezza della culla**: determinata dal parametro $3$ nell'esponente che regola la gaussiana.
- **Filamento di plasma**: raggio ($0{,}35$), lunghezza ($17$) e quota ($5{,}8$).
- **Soglia di comparsa del plasma**: $0{,}6$ del ciclo, con opacità finale di $0{,}95$.
- **Durata dell'animazione**: circa $3{,}1$ secondi, regolabile cambiando il fattore che moltiplica il tempo.

## Contatori

L'animazione non ha contatori. In alto al centro compare solo il titolo *Animazione 3D: Formazione della Culla e Condensazione del Filamento*, con il sottotitolo *Il campo si deforma; il plasma si condensa nella culla formata*. La linea rossa non ha un'etichetta nella scena e va spiegata a voce.

## Suggerimenti di utilizzo

Per far vedere la culla conviene guardare la scena lungo la direzione della linea rossa, a livello della griglia, in modo da vedere gli archi di profilo: il punto in cui si abbassano e la posizione del cilindro di plasma sono evidenti. Per mostrare l'estensione del filamento lungo la PIL si può poi ruotare la vista dall'alto. Il tasto **↺ Ricomincia** permette di rivedere il ciclo dall'inizio quante volte si vuole; è utile parlare durante la fase di condensazione e dire apertamente che la scena non spiega come la culla si formi la prima volta.

`;  // ← Ultima riga: non modificare.
