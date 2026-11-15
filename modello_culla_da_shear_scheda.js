SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dello Script del cap. 14 del libro (capitolo14.tex).

# Culla del filamento da shear

## Che cosa mostra l'animazione

L'animazione mostra, in tre dimensioni, come il *moto di scorrimento* (shear) opposto dei due piedi di una serie di archi magnetici, lungo la linea neutra, possa portare alla *riconnessione magnetica* e alla formazione di un unico grande tubo di flusso elicoidale, parallelo alla linea neutra stessa, secondo il meccanismo da shear proposto per i filamenti solari. La scena presenta nove archi affiancati, a forma di *omega* (rigonfi verso il centro), ancorati a un polo positivo e a un polo negativo separati dalla linea neutra (PIL). Due freccette indicano, all'inizio, il verso in cui i piedi dei due poli scorrono l'uno rispetto all'altro.

L'animazione si svolge una sola volta, in circa $19{,}6$ secondi, in quattro fasi che si susseguono e in parte si sovrappongono:

- **Scorrimento (shear)**: nella prima parte, i piedi dei nove archi scorrono in direzioni opposte lungo la PIL, concentrando la torsione vicino ai piedi stessi, così che le basi degli archi tendono a diventare parallele alla linea neutra.
- **Scomparsa degli archi dal centro verso i lati**: una volta completato lo scorrimento, gli archi, toccandosi e riconnettendosi, svaniscono uno dopo l'altro a partire da quello centrale e via via verso quelli più esterni.
- **Nascita del grande tubo elicoidale**: contemporaneamente alla scomparsa degli archi, compare, alla stessa quota dei loro apici, un grande tubo trasparente parallelo alla PIL, dentro il quale si avvolge un'elica di campo magnetico (con nove giri completi): piccole sfere luminose scorrono lungo l'elica per mostrarne il verso di avvolgimento. Alla base del tubo, nella culla formata dall'elica, appare un cilindro di plasma arancione.
- **Piccoli archi residui**: sotto il grande tubo, a cavallo della linea neutra, nascono via via nuovi piccoli archi, che partono a mezza altezza e si abbassano progressivamente, a rappresentare i resti degli archi riconnessi più vicini alla fotosfera.

**Il limite del modello.** Come negli altri due modelli di culla, l'animazione non simula le forze del campo magnetico né il processo fisico di riconnessione: lo scorrimento, la scomparsa degli archi e la nascita dell'elica sono tutti imposti da funzioni geometriche prestabilite, scelte per mostrare con chiarezza la sequenza logica del meccanismo da shear, non per calcolarne gli effetti quantitativi.

## Comandi e parametri personalizzabili

- **↺ Ricomincia**: riporta la scena all'inizio dell'animazione, che altrimenti resta ferma al termine della sequenza.
- **Vista**: trascinando con il mouse (o con un dito) si ruota la scena; con la rotellina (o con due dita) si avvicina o allontana la vista; con il tasto destro si sposta la vista.

Nel sorgente della pagina si possono modificare, tra gli altri:

- **Numero di archi iniziali**: nove, distanziati di $7{,}5$ unità lungo la PIL.
- **Scorrimento massimo** dei piedi e **concentrazione dello scorrimento** vicino ai piedi.
- **Numero di giri** dell'elica (nove) e **raggio** dell'elica e del tubo che la contiene.
- **Istanti e durate** di ciascuna delle quattro fasi (scorrimento, scomparsa, nascita dell'elica, archi residui).
- **Durata totale** dell'animazione.

## Contatori

L'animazione non ha contatori numerici. Le etichette *Linea neutra (PIL)*, *Polo Positivo (+)* e *Polo Negativo (−)* compaiono direttamente nella scena tridimensionale, vicino agli elementi a cui si riferiscono.

## Suggerimenti di utilizzo

Conviene osservare l'animazione almeno due volte: la prima guardando la scena di fronte, per seguire lo scorrimento dei piedi e la scomparsa degli archi dal centro verso i lati; la seconda ruotando la vista lungo la direzione della linea neutra, per apprezzare la lunghezza e l'avvolgimento del grande tubo elicoidale che si forma al loro posto. Il tasto **↺ Ricomincia** permette di rivedere la sequenza completa quante volte serve.

`;  // ← Ultima riga: non modificare.
