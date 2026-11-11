SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dello Script 4.6 del libro (capitolo4.tex).

# Simulazione 2D delle celle convettive in Zona Convettiva

## Che cosa mostra l'animazione

L'animazione rappresenta in due dimensioni un settore di un quarto di cerchio (90$^\circ$) del Sole, dal centro alla superficie, con la sequenza degli strati interni: il nucleo, la zona radiativa e la zona convettiva. L'attenzione è concentrata sulla *zona convettiva*, dove l'energia viene trasportata dal movimento di masse di plasma e non più dalla radiazione.

Nella realtà la zona convettiva non è formata da strati separati: si estende da circa $0{,}7\,R_\odot$ fino alla superficie, e la dimensione dei moti convettivi cresce con la profondità, in modo continuo. L'animazione la schematizza in un numero di strati concentrici che si può scegliere da 1 a 4. Con quattro strati, la scelta predefinita, ciascuno corrisponde a una delle scale caratteristiche osservate in superficie: le *celle giganti*, la *supergranulazione*, la *mesogranulazione* e la *granulazione*. Procedendo verso l'esterno le celle diventano più numerose e più piccole, mentre il flusso al loro interno è sempre più rapido.

Ogni cella è rappresentata da una coppia di vortici di verso opposto: le frecce tratteggiate in movimento mostrano il plasma caldo che sale al centro della cella, si sposta lateralmente e scende lungo i bordi dopo essersi raffreddato. Le linee tratteggiate bianche, fisse, indicano il percorso chiuso che il plasma compie in ciascuna cella. Il colore delle frecce distingue lo strato di appartenenza, come riportato nella legenda sotto l'animazione.

L'animazione *non è in scala*: gli spessori degli strati e il numero di celle sono scelti per rendere leggibile il fenomeno, e le velocità sono puramente indicative; servono a evidenziare il confronto qualitativo tra strato interno ed esterno.

## Elementi della scena

- **Nucleo** : zona centrale, in bianco–giallo, dove avviene la fusione nucleare (fino a circa il $10\%$ del raggio nell'animazione).

- **Zona radiativa**: fascia color arancio, compresa tra il nucleo e circa il $65\%$ del raggio, dove l'energia procede per diffusione dei fotoni.

- **Strati convettivi**: da 1 a 4 fasce concentriche tra la zona radiativa e la superficie, con spessore decrescente verso l'esterno.

- **Legenda**: elenca gli strati con il colore corrispondente e il numero di celle di ciascuno; si aggiorna a ogni modifica.

## Comandi e parametri personalizzabili

Il pannello laterale permette di intervenire sull'animazione mentre è in esecuzione.

- **Pausa / Avvia**: sospende o riprende il movimento delle frecce.

- **Ripristina**: riporta tutti i parametri ai valori iniziali (4 strati).

- **Numero di strati convettivi**: da 1 a 4 (valore iniziale 4). Cambiando il numero di strati, i parametri di ciascuno vengono sostituiti da un insieme di valori predefiniti adatto a quella configurazione.

- **Velocità globale**: moltiplicatore della velocità di tutti gli strati (da $\times 0{,}1$ a $\times 3$; valore iniziale $\times 1$).

- **Mostra traiettorie delle celle**: attiva o nasconde le linee tratteggiate bianche che indicano il percorso chiuso del plasma.

Per ciascuno strato sono mostrati questi parametri:

- **Numero di celle** *modificabile solo per lo strato più profondo*: gli strati successivi, verso l'esterno, ne hanno ciascuno il doppio di quello precedente e si aggiornano automaticamente: con 4 celle nel primo strato si hanno ad esempio 4, 8, 16 e 32 celle. Il valore massimo consentito dipende dal numero di strati, perché il numero di celle dell'ultimo strato è limitato a 80. Più celle significano celle più piccole.

- **Velocità del flusso**: rapidità delle frecce tratteggiate che rappresentano il moto del plasma (da 0,01 a 0,30).

- **Dimensione dei vortici**: raggio dei vortici disegnati dentro ogni cella (da 2 a 30). Valori troppo grandi rispetto allo spessore dello strato o alla larghezza della cella fanno sovrapporre i vortici vicini.

## Suggerimenti di utilizzo

Per confrontare il moto tra l'interno e la superficie conviene mantenere quattro strati e rallentare la velocità globale. Aumentando il numero di celle dello strato più profondo, e di conseguenza anche quelle degli strati esterni, e riducendo la dimensione dei vortici si ottiene un aspetto più simile alla granulazione fotosferica. Con un solo strato si vede invece l'idea di base della convezione, senza la distinzione tra le diverse scale.

`;  // ← Ultima riga: non modificare.
