SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dello Script 5.4 del libro (capitolo5.tex).

# Emersione di un gruppo di macchie βγδ

## Che cosa mostra l'animazione

L'animazione simula in tre dimensioni l'emersione per galleggiamento di un gruppo di macchie solari, a partire dallo schema bidimensionale dei *piedi* delle macchie in fotosfera, cioè dei punti in cui i tubi di flusso attraversano la superficie. Sotto la fotosfera si trova un unico grande *tronco di flusso del campo magnetico*. Da questo grande tubo di flusso si staccano cinque tubi, collocati nella parte alta del tronco.

I cinque tubi emergono *uno alla volta*, ciascuno con un proprio colore. Il tubo G, che porta il flusso maggiore (circa $4\cdot10^{21}$ Mx — Mx: Maxwell, unità CGS del flusso magnetico, 1 Mx = 1 G cm²), si stacca per primo dalla cima del tronco e si inarca come una bolla; seguono p1, p2, p3 e p4, con flussi dell'ordine di $2$–$3\cdot10^{20}$ Mx. Quando l'apice di un tubo attraversa la fotosfera compaiono due pori di polarità opposta, quasi a contatto; poi i piedi si allontanano, il flusso in superficie cresce e, con i pori più grandi, compare la penombra. L'arco di G sale fino a circa 40 Mm e passa al di sopra delle anse più piccole, alte circa 15 Mm.

Salendo, i lobi emergenti si *torcono*. G ruota di soli 8° e p1 di 14°: sono coppie *normali*, con la stessa orientazione. p2 e p4 ruotano di 170° e 190°, quindi i loro poli arrivano scambiati rispetto a G (coppie *invertite*); p3 ruota di 90° e dispone i poli in direzione nord–sud. p4, l'ultimo a emergere, *trasla* inoltre di circa 14 Mm verso est. Alla fine piedi di polarità opposta appartenenti a tubi diversi si trovano vicini: è la configurazione dei gruppi di macchie $\beta\gamma\delta$, in cui possono innescarsi i brillamenti.

L'animazione *non è in scala* e non è una simulazione magnetoidrodinamica: profondità, durate, spessori e flussi sono schematici, e la torsione dei lobi è imposta dal modello per mostrare qualitativamente come da un unico tronco possano emergere tubi con polarità opposte, fenomeno osservato nei gruppi complessi. Nella scena 1 unità corrisponde a circa 5 Mm; il tempo simulato totale è di 14,5 giorni, con i cinque tubi che attraversano la fotosfera intorno ai giorni 1,3, 4,8, 7,3, 10,1 e 12,9.

## Comandi e parametri personalizzabili

- **Avvia emersione / Pausa / Riprendi / Ripeti**: avvia, sospende o riprende la sequenza completa; a fine corsa il pulsante permette di ripeterla.
- **Schema 2D**: riporta la scena al tempo zero, con lo schema dei piedi visto dall'alto.
- **Barra del tempo**: sposta l'istante simulato da 0 a 14,5 giorni e sospende l'animazione, per fermarsi su una fase qualsiasi.
- **Velocità**: scala il tempo di simulazione (×0,5, ×1, ×2, ×4; valore iniziale ×1). A ×1 la sequenza completa dura circa 41 secondi reali.
- **Vista**: *Dall'alto*, *Obliqua* o *Di lato*. La vista di lato mostra la fase sotterranea, l'obliqua il tronco con le sezioni agli estremi, quella dall'alto la configurazione dei piedi. Trascinando con il mouse si ruota liberamente la scena, con la rotellina si cambia l'ingrandimento.
- **Emersione** (*Tutte*, G, p1, p2, p3, p4): riproduce da capo la sequenza completa oppure l'emersione di un solo tubo, dalla sua partenza fino alla fine (da 2,6 a 3,2 giorni simulati), per spiegarla singolarmente.
- **Luce bianca / Magnetogramma**: mostra le macchie come nel visibile (umbra e penombra) oppure come mappa del campo magnetico, con le polarità in rosso (+) e in blu (−).
- **Regia automatica della camera**: durante l'animazione la camera segue il tubo che sta emergendo (prima di lato, poi obliqua, infine dall'alto). Si disattiva da sola quando si ruota la scena o si sceglie una vista.
- **Verso del campo (impulsi)**: mostra impulsi luminosi che scorrono lungo i tubi nel verso del campo.
- **Segni di polarità**: visualizza i segni + e − sui piedi emersi.
- **Siti di possibile riconnessione**: segnala con un marcatore pulsante i punti sopra la fotosfera in cui gambe di polarità opposta di due tubi diversi si avvicinano a meno di circa 11 Mm (disattivato all'inizio).
- **Schema dei piedi**: mostra o nasconde i punti e le ellissi tratteggiate dello schema bidimensionale, con la freccia che indica la traslazione di p4.
- **Linee di campo**: mostra o nasconde le linee all'interno di ciascun tubo.
- **Zona convettiva e tronco**: mostra o nasconde il tronco, le sezioni agli estremi e il volume della zona convettiva.
- **Caselle dei singoli tubi**: escludono dalla sequenza p1, p2, p3 o p4 (G è sempre attivo) e permettono di vedere come cambia il gruppo senza una delle coppie.

### Contatori

Il pannello mostra in tempo reale una frase che descrive la fase in corso e, per ogni tubo, il suo stato (*profondo*, *in risalita*, *emerge*, *matura*; *escluso* se il tubo è stato tolto con la sua casella, *nascosto* se si sta osservando l'emersione di un altro tubo), la quota dell'apice rispetto alla fotosfera in Mm (negativa finché il tubo è sotto la superficie), la rotazione raggiunta rispetto a quella finale, la distanza tra i piedi e il flusso emerso in Mx. Mostra inoltre una *classe magnetica* indicativa, calcolata con una regola semplice sulle macchie visibili: $\beta$ se è presente solo G; $\beta\gamma$ quando compaiono le coppie piccole; $\beta\gamma\delta$ quando due macchie di polarità opposta, appartenenti a tubi diversi, sono più vicine di 0,8 volte la somma dei loro raggi di penombra. La regola non coincide con la definizione ufficiale di Mount Wilson, descritta nell'approfondimento 6.3. Quando si osserva l'emersione di un solo tubo la classe non viene indicata. L'istante simulato e la classe sono ripetuti in alto a sinistra nella scena.

## Suggerimenti di utilizzo

Per presentare l'animazione conviene partire da *Schema 2D*, quindi usare i pulsanti *Emersione* per spiegare un tubo alla volta: la vista *Di lato* è la più chiara per la fase sotterranea e per il distacco dal tronco, la *Dall'alto* per il confronto con lo schema dei piedi. Il *Magnetogramma* rende immediato il confronto tra polarità normali e invertite, mentre *Siti di possibile riconnessione* indica dove può nascere un brillamento quando i tubi sono tutti emersi. Disattivando uno o più tubi piccoli si vede come cambiano il gruppo e la sua classe magnetica; per un confronto più attento si può rallentare la *Velocità* a ×0,5 o muovere la *Barra del tempo*.

`;  // ← Ultima riga: non modificare.
