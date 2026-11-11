SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dello Script 4.4 del libro (capitolo4.tex).

# La Tachocline

## Che cosa mostra l'animazione

L'animazione mostra lo *shear* che caratterizza la tachocline, la sottile regione di transizione a circa $0{,}70\,R_\odot$ in cui il Sole passa dalla rotazione quasi rigida della zona radiativa alla rotazione differenziale della zona convettiva.

A sinistra è rappresentata una *sezione meridiana* del Sole, colorata in base al periodo di rotazione locale: il rosso indica le regioni che ruotano più velocemente (circa $25$ giorni), il blu quelle più lente (circa $35$ giorni). La zona radiativa ha un colore uniforme, perché ruota come un corpo unico in circa $27$ giorni; la zona convettiva mostra invece il passaggio graduale dall'equatore veloce ai poli lenti. Una linea bianca indica la latitudine scelta.

A destra la stessa latitudine è vista dal polo nord. Dodici linee bianche rappresentano dei “raggi” di plasma che all'inizio sono perfettamente allineati, dalla zona radiativa (anello interno) alla zona convettiva (anello esterno); la fascia chiara tra i due anelli è la tachocline. Con il passare del tempo ciascun tratto dei raggi ruota con la velocità angolare dello strato in cui si trova: i raggi rimangono dritti nella zona radiativa e nella zona convettiva, ma si piegano nella tachocline, dove la velocità cambia bruscamente. Due punti colorati su ogni raggio seguono il plasma sopra (giallo, $0{,}80\,R_\odot$) e sotto (azzurro, $0{,}60\,R_\odot$) la tachocline.

Sotto la scena, un grafico riporta la velocità angolare in funzione del raggio per diverse latitudini: nella zona convettiva le curve sono separate, mentre sotto la tachocline convergono in un unico valore. È il profilo di rotazione interna ricavato dalle osservazioni eliosismiche.

L'animazione *non è in scala*: nella vista dal polo la profondità è dilatata per rendere visibile la tachocline, la legge di rotazione è semplificata e i periodi sono indicativi; il tempo scorre a circa $10$ giorni simulati per ogni secondo reale. Nel modello la zona radiativa ruota in circa $26{,}9$ giorni, l'equatore della zona convettiva in circa $25{,}2$ giorni e le alte latitudini in oltre $33$ giorni.

## Elementi della scena

- **Sezione meridiana**: metà del Sole vista di taglio, con l'asse di rotazione tratteggiato e il confine della tachocline indicato da un arco tratteggiato a $0{,}7\,R_\odot$.

- **Barra dei colori**: associa a ogni colore il periodo di rotazione, da $25$ a $35$ giorni.

- **Vista dal polo nord**: la circonferenza della latitudine scelta, con la profondità sull'asse radiale (da $0{,}5$ a $0{,}9\,R_\odot$); la parte centrale non è rappresentata.

- **Raggi di plasma**: dodici linee bianche, una delle quali più spessa per seguirla più facilmente, con i punti gialli (sopra la tachocline) e azzurri (sotto la tachocline).

- **Grafico del profilo di rotazione**: velocità angolare in nHz (con il periodo corrispondente in giorni) in funzione del raggio, per le latitudini $0^\circ$, $15^\circ$, $30^\circ$, $45^\circ$, $60^\circ$ e $75^\circ$; la latitudine scelta è evidenziata in arancione e la fascia della tachocline è colorata.

## Comandi e parametri personalizzabili

- **Pausa / Avvia**: sospende o riprende la rotazione.

- **Ripristina**: riporta il tempo a zero con i raggi di nuovo allineati e lascia l'animazione in pausa, per poter descrivere la situazione iniziale prima di avviarla.

- **Latitudine**: sceglie la latitudine osservata, da $0^\circ$ a $80^\circ$ (valore iniziale $15^\circ$). Aggiorna la linea sulla sezione meridiana, la vista dal polo e la curva evidenziata nel grafico.

- **Velocità**: moltiplicatore della velocità dell'animazione, da $\times 0{,}25$ a $\times 4$ (valore iniziale $\times 1$).

- **Riferimento solidale con la zona radiativa**: osserva la scena ruotando insieme alla zona radiativa. L'interno appare fermo e rimane visibile solo lo scorrimento della zona convettiva rispetto a esso.

## Pannello informativo

Il pannello riassume le grandezze caratteristiche dei tre strati: per la zona convettiva e per la zona radiativa riporta il periodo di rotazione alla latitudine scelta, per la tachocline la posizione ($\sim 0{,}70\,R_\odot$), lo spessore (pochi punti percentuali del raggio), la temperatura ($\sim 2\times10^6$ K) e la densità ($\sim 0{,}2$ g/cm$^3$). Un ultimo riquadro indica se, alla latitudine scelta, il plasma sopra la tachocline è in anticipo o in ritardo rispetto alla zona radiativa, e mostra il tempo simulato trascorso. In fondo al pannello si trovano i collegamenti alle animazioni dell'effetto $\Omega$ e del galleggiamento dei tubi di flusso, che proseguono la descrizione nel capitolo dedicato al campo magnetico.

## Suggerimenti di utilizzo

Conviene partire con il riferimento inerziale: tutto il Sole ruota e lo scorrimento è difficile da notare. Attivando il *riferimento solidale con la zona radiativa* l'interno si ferma e la deformazione dei raggi nella tachocline diventa evidente.

Spostando poi la latitudine si osserva che vicino all'equatore il plasma sopra la tachocline va avanti, mentre alle alte latitudini resta indietro. Esiste una latitudine intermedia, circa $35^\circ$ (nel modello circa $37^\circ$), in cui le due zone ruotano alla stessa velocità e lo scorrimento quasi si annulla. Dopo ogni cambio di latitudine conviene premere *Ripristina* e quindi *Avvia*, per osservare la deformazione a partire dai raggi allineati.

`;  // ← Ultima riga: non modificare.
