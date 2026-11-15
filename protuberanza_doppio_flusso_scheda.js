SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dello Script del cap. 14 del libro (capitolo14.tex).

# Modello di tubi di flusso magnetico concentrici

## Che cosa mostra l'animazione

L'animazione mostra, in tre dimensioni, un modello di protuberanza solare sostenuta da *due tubi di flusso magnetico elicoidali e concentrici*, con plasma che scorre al loro interno in direzioni opposte. Sotto i tubi, un disco arancione rappresenta la fotosfera, con un bagliore centrale che pulsa lentamente.

- **Tubo A (interno, arancione)**: un tubo semitrasparente, più sottile, che forma un arco con un lungo tratto centrale piatto e una discesa ripida verso i due piedi, ancorati ai poli *N* (rosso) e *S* (blu) più esterni.
- **Tubo B (esterno, azzurro)**: un secondo tubo, più largo nel tratto centrale (dove è concentrico al Tubo A) e che si restringe progressivamente verso i propri due piedi, ancorati a una seconda coppia di poli *S* e *N*, più vicini al centro e di polarità opposta rispetto ai poli del Tubo A.

Dentro ciascun tubo si muovono delle *freccette* che rappresentano il plasma in movimento: quelle bianche, nel Tubo A, percorrono un cammino leggermente elicoidale; quelle verdi, nel Tubo B, si muovono in direzione opposta e seguono un percorso più allineato all'asse del tubo. Il flusso contrapposto nei due tubi è la caratteristica centrale del modello: suggerisce due sistemi di corrente magnetica distinti e concentrici, con il plasma trascinato in direzioni opposte da ciascuno.

**Il limite del modello.** Anche qui l'animazione è *qualitativa*: la forma dei due tubi, la loro torsione e il moto delle freccette di plasma sono costruiti con funzioni geometriche scelte per dare un'immagine chiara della struttura a doppio tubo concentrico, non per calcolare le forze magnetiche, le correnti o l'equilibrio reale della protuberanza.

## Comandi e parametri personalizzabili

- **⏸ Pausa / ▶ Play**: ferma o riavvia il movimento delle freccette di plasma; la vista resta comunque interattiva.
- **Velocità plasma**: cursore che regola la rapidità con cui le freccette scorrono lungo i due tubi (da $\times 0{,}1$ a $\times 3$; valore iniziale $\times 1$).
- **⟲ Reset vista**: riporta la telecamera e l'orientamento della scena alla posizione iniziale.
- **Vista**: trascinando con il mouse o con un dito si ruota liberamente la scena in qualsiasi direzione; con la rotellina (o con un gesto di pizzico) si avvicina o allontana la vista.

Nel sorgente della pagina si possono modificare, tra gli altri, il raggio e la lunghezza dei due tubi, il numero di giri delle eliche di plasma in ciascuno, il numero di freccette e la loro velocità relativa.

## Contatori

L'animazione non ha contatori numerici. Le lettere *N* e *S* sui piedi dei due tubi indicano la polarità magnetica dei rispettivi poli.

## Suggerimenti di utilizzo

Conviene far partire l'animazione e ruotare lentamente la scena attorno all'asse dei tubi, così da vedere come le freccette bianche e verdi si muovano in versi opposti pur restando ciascuna dentro il proprio tubo. Aumentando la velocità del plasma con il cursore si distingue meglio il verso di percorrenza di ciascun flusso; il tasto **⏸ Pausa** permette di fermare il movimento per osservare con calma la geometria dei due tubi concentrici.

`;  // ← Ultima riga: non modificare.
