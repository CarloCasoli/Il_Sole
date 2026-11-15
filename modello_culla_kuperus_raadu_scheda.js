SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dello Script del cap. 14 del libro (capitolo14.tex).

# Culla del filamento — modello Kuperus–Raadu

## Che cosa mostra l'animazione

L'animazione mostra, in tre dimensioni, come la rotazione dei piedi di un tubo di flusso magnetico possa produrre una struttura elicoidale capace di sostenere un filamento, secondo il modello di Kuperus e Raadu. La scena presenta un'*arcata di cinque archi* affiancati, tutti ancorati alla stessa coppia di piedi sulla fotosfera (rappresentata da una griglia arancione): un polo positivo, a sinistra, e un polo negativo, a destra, separati dalla *linea neutra* (PIL, *polarity inversion line*), disegnata in rosso al centro della scena.

Il ciclo si svolge in quattro fasi, che avvengono in parte insieme:

- **Rotazione dei piedi**: due piccole freccette curve, una per ciascun polo di ogni arco, ruotano in continuazione attorno al piede, rappresentando il moto di rotazione della fotosfera alla base del tubo di flusso.
- **Torsione elicoidale**: lungo ogni arco, il canale di campo magnetico (disegnato come un tubo azzurro pieno) comincia a torcersi, trasformandosi in un fascio di tre filamenti che si avvolgono elicoidalmente l'uno sull'altro, con un passo di avvolgimento di circa $2{,}2$ giri sull'intera lunghezza dell'arco.
- **Svanire del canale originario**: mentre l'elica si forma, il tubo azzurro pieno che rappresentava il canale iniziale diventa via via più trasparente, fino a sparire: resta solo l'elica di filamenti.
- **Deposito del plasma**: quando la torsione è ormai completa (dopo circa il $75\%$ del ciclo), compare un cilindro di plasma arancione, disposto lungo la linea neutra, nel punto più basso raggiunto dall'elica, con l'etichetta *Plasma depositato*.

Durante tutta l'animazione, i cinque archi si abbassano gradualmente al centro, formando una culla comune sempre più profonda, sulla quale l'elica si avvolge. Il ciclo completo dura circa $5{,}2$ secondi e poi resta fermo all'ultimo fotogramma, in attesa di essere fatto ripartire.

**Il limite del modello.** Come nel modello di Kippenhahn–Schlüter, l'animazione non simula le forze magnetiche reali né la fisica della rotazione fotosferica: la torsione e l'abbassamento della culla sono imposti da formule geometriche. Il modello illustra l'*idea* del meccanismo di Kuperus–Raadu — una torsione del campo che produce una culla elicoidale in cui il plasma può depositarsi — ma non ne dimostra la plausibilità quantitativa.

## Comandi e parametri personalizzabili

- **↺ Ricomincia**: riporta la scena all'inizio del ciclo.
- **Vista**: trascinando con il mouse (o con un dito) si ruota la scena; con la rotellina (o con due dita) si avvicina o allontana la vista; con il tasto destro si sposta la vista.

Nel sorgente della pagina si possono modificare, tra gli altri:

- **Numero di archi**: cinque, distanziati di $3$ unità lungo la linea neutra.
- **Numero di filamenti per arco**: tre, sfasati di $120°$ l'uno dall'altro.
- **Ampiezza massima dell'elica** e **profondità massima della culla centrale**.
- **Velocità di rotazione** dei piedi e **velocità di avvolgimento** dell'elica.
- **Soglia e opacità finale** del cilindro di plasma depositato.
- **Durata del ciclo**.

## Contatori

L'animazione non ha contatori numerici. Le etichette *Linea neutra (PIL)*, *Polo Positivo (+)*, *Polo Negativo (−)* e *Plasma depositato* compaiono direttamente nella scena tridimensionale, vicino agli elementi a cui si riferiscono.

## Suggerimenti di utilizzo

Conviene seguire un singolo arco centrale per vedere con chiarezza la sequenza delle quattro fasi: la rotazione dei piedi, la torsione che sostituisce il canale pieno con l'elica di tre filamenti, e infine il deposito del plasma nel punto più basso. Ruotando la vista lungo la linea neutra si apprezza meglio come tutti gli archi condividano la stessa culla; ruotandola perpendicolarmente alla PIL si distingue invece la struttura elicoidale di ciascun arco.

`;  // ← Ultima riga: non modificare.
