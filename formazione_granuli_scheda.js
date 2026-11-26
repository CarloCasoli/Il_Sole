SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo tratto dal capitolo 6 del libro (capitolo6.tex), sezione «Script interattivi (GitHub)».

# Formazione dei granuli in Fotosfera

## Che cosa mostra l'animazione

L'animazione simula in due dimensioni la *granulazione* della fotosfera vista dall'alto: una rete di celle convettive luminose, i *granuli*, che nascono, crescono e si affievoliscono continuamente, separate da sottili corsie scure, gli spazi *intergranulari*. Nella realtà il centro di un granulo è plasma caldo che sale dagli strati sottostanti; in superficie il plasma cede energia, si raffredda e ridiscende lungo le corsie scure. Per questo i granuli appaiono più luminosi al centro e più scuri ai bordi.

Ogni granulo è disegnato come una macchia luminosa dal contorno irregolare, che ruota lentamente su se stesso. Il centro è bianco-giallo, poi il colore passa all'arancione e al bruno fino a sfumare nel fondo scuro; la luminosità del centro oscilla leggermente (circa $\pm 10\%$) per evocare il tremolio dei granuli reali. Dietro i granuli è disegnato uno sfondo fisso di tonalità brune, che rappresenta il fondo scuro delle corsie intergranulari. Una leggera vignettatura scurisce i bordi dello schermo per suggerire la profondità.

Ciascun granulo ha un proprio *ciclo di vita* di durata casuale, tra $3,2$ e $7,2$ secondi. Nel primo $22\%$ del ciclo cresce da $0,4$ volte la dimensione massima fino al valore pieno; resta alla dimensione massima fino al $72\%$ del ciclo; nell'ultimo $28\%$ si riduce di nuovo a $0,4$ volte la dimensione massima, diventando via via più tenue. Il granulo non si riduce mai a un punto: quando il ciclo termina, ne nasce subito uno nuovo, con dimensione e durata casuali, in una posizione molto vicina alla precedente. All'avvio i cicli hanno età casuali, così i granuli non sono sincronizzati e la scena è subito a regime. Nella fase centrale del ciclo compare un sottile contorno scuro che richiama lo spazio intergranulare.

L'animazione è *qualitativa* e non è una simulazione fisica del plasma: non calcola velocità, temperature né interazioni tra celle vicine. I granuli nascono e si spengono indipendentemente l'uno dall'altro e non si fondono né si frammentano come accade nelle osservazioni. Le proporzioni sono solo indicative: un granulo reale ha un diametro dell'ordine di $1000$ km e vive alcuni minuti, mentre qui la vita è accorciata di un fattore dell'ordine di cento per rendere visibile il ricambio.

## Comandi e parametri personalizzabili

- **Pausa / Riprendi**: in basso a destra. Sospende il disegno e lo riprende. Il tempo interno continua a scorrere durante la pausa, quindi alla ripresa i granuli sono più avanti nel loro ciclo.
- **Velocità**: cursore sopra il pulsante pausa, da $0,15\times$ (molto più lento) a $1,5\times$; valore iniziale $1\times$. Rallenta o accelera il ritmo con cui i granuli nascono, crescono e si affievoliscono, senza cambiarne l'aspetto.
- **Distanza tra i centri** (*SPACING*, in pixel; valore iniziale $46$): controlla la dimensione media dei granuli e quindi il loro numero sullo schermo. Valori più grandi producono granuli più grandi e meno numerosi.
- **Dimensione massima**: il raggio massimo di ogni granulo è estratto a caso tra $0,85$ e $1,15$ volte la distanza tra i centri, quindi tra circa $39$ e $53$ pixel con il valore iniziale.
- **Durata del ciclo**: intervallo da $3200$ a $7200$ millisecondi, da cui è estratta a caso la vita di ogni granulo. Intervalli più brevi rendono il ricambio più rapido e la scena più agitata.
- **Dimensione minima** (*FLOOR*; valore iniziale $0,4$): frazione della dimensione massima da cui un granulo parte e a cui ritorna alla fine del ciclo. Con $0$ i granuli nascerebbero e morirebbero da un punto.
- **Irregolarità del contorno**: ampiezza dell'ondulazione del bordo, estratta a caso tra $0,12$ e $0,24$ del raggio.
- **Fasi del ciclo**: le soglie del $22\%$ e del $72\%$ separano crescita, massimo e decadimento.

Tutti i parametri, tranne il pulsante e il cursore della velocità, si modificano direttamente nel sorgente della pagina.

## Contatori

L'animazione non ha contatori né pannelli di controllo. L'unico testo sullo schermo è la didascalia in basso a sinistra, *Fotosfera simulata — granuli in convezione, vista dall'alto*, accanto al pulsante *pausa*.

## Suggerimenti di utilizzo

Per osservare la struttura delle celle conviene mettere in pausa quando la scena mostra molti granuli nella fase di massimo, perché sono più luminosi e ben contrastati con le corsie scure. Lasciando scorrere l'animazione si vede invece il ricambio continuo: i granuli si accendono, si espandono e si spengono senza mai lasciare buchi nel reticolo. Se si ridimensiona la finestra, lo sfondo viene ridisegnato ma i granuli restano quelli creati all'avvio, quindi conviene ricaricare la pagina per riempire tutta l'area.

`;  // ← Ultima riga: non modificare.
