SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo tratto dal capitolo 6 del libro (capitolo6.tex), sezione «Script interattivi (GitHub)».
%%   Nota: la frase sul pulsante «5 Inversione» è stata aggiornata rispetto al libro,
%%   perché il codice non evidenzia più in modo permanente il pulsante dopo il clic.

# Evoluzione delle macchie in Fotosfera

## Che cosa mostra l'animazione

L'animazione mostra l'evoluzione di una coppia bipolare di macchie solari, una per emisfero, vista sul disco del Sole di fronte, con l'asse di rotazione verticale. Segue la coppia dall'emersione fino alla dispersione del suo campo e illustra come questo porti all'*inversione del campo magnetico polare*. La rotazione solare sposta le macchie da sinistra verso destra: la macchia che precede nel verso della rotazione è la *leading* (a destra), quella che segue è la *trailing* (a sinistra). Le polarità sono in rosso ($+$) e in blu ($-$); nei due emisferi la polarità della leading è opposta, come richiede la legge di Hale. Sul disco sono tracciati l'equatore, il meridiano centrale e i paralleli a $\pm15^\circ$, $\pm30^\circ$ e $\pm60^\circ$.

Il tempo scorre da $0$ a circa $24$ mesi e si divide in cinque fasi, ciascuna descritta nel riquadro sotto il disco.

1. *Emergenza* (mese $0$). Il tubo di flusso sale e la forza di Coriolis lo deforma: la leading finisce un po' più vicina all'equatore, la trailing un po' più verso il polo (legge di Joy). Ai poli c'è ancora il campo vecchio, della stessa polarità della leading. Per un breve tratto le due macchie sono unite da un segmento scuro che richiama il tubo.
2. *Maturità* (circa mese $8$). Le due macchie restano compatte e scure, con campo intenso, mentre la rotazione le porta sul disco; la convezione comincia a erodere i bordi.
3. *Dispersione* (circa mese $16$). La leading, vicina all'equatore, incontra la leading dell'altro emisfero, che ha polarità opposta: i flussi si annullano a vicenda. La trailing si diffonde in una zona sfumata, si frammenta e viene trascinata verso il polo dal flusso meridiano superficiale, come indicato dalla freccia.
4. *Il campo seguente arriva ai poli* (circa mese $20$). Il flusso trailing, di segno opposto al campo polare vecchio, comincia a neutralizzarlo: all'equatore si cancella tutto (intorno al mese $20$ compare l'ellisse *cancellazione*), verso i poli resta un eccesso di un solo segno.
5. *Inversione del campo polare* (mese $24$). Le calotte polari, oltre $60^\circ$ di latitudine, cambiano segno e assumono la polarità della trailing. Il campo poloidale è ricostruito con segno invertito, pronto a essere portato in profondità e riavvolto dalla rotazione differenziale.

L'animazione è *schematica*: le posizioni, le dimensioni e la forma delle macchie sono simboliche, e lo spostamento da sinistra a destra rappresenta in modo stilizzato lo scorrere di molte rotazioni solari, non è in scala. Mostra lo scenario del trasporto di flusso in superficie, ma non calcola campi, flussi o velocità.

## Comandi e parametri personalizzabili

- **Pausa / Riprendi**: sospende o riprende l'animazione. Una corsa completa dura circa $16$ secondi; alla fine l'animazione resta ferma due secondi e ricomincia da capo.
- **Barra del tempo**: sposta l'istante simulato da $0$ a circa $24$ mesi (il valore è scritto a destra, *mese N di ~24*). Muoverla sospende l'animazione.
- **Ciclo solare**: da $35^\circ$ (inizio del ciclo) a $5^\circ$ (fine del ciclo); valore iniziale $15^\circ$. Imposta la latitudine a cui emerge la coppia, scritta a destra (*emersione a N°*), e ridisegna la scena. A inizio ciclo la coppia emerge ad alta latitudine, verso la fine vicino all'equatore.
- **1 Emergenza, 2 Maturità, 3 Dispersione, 4 Verso i poli**: portano l'animazione all'inizio della fase scelta e la sospendono, per fermarsi a spiegarla.
- **5 Inversione**: non sposta il tempo. Scambia le polarità di tutte le macchie e dei poli e rappresenta il ciclo successivo, in cui le polarità sono opposte. La scena si ferma un secondo per mostrare il cambio.

## Contatori

Accanto alla barra del tempo è indicato il mese simulato (*mese N di ~24*); accanto al cursore del ciclo, la latitudine di emersione. Il riquadro sotto il disco mostra titolo e descrizione della fase in corso, che cambiano da soli mentre l'animazione procede o quando si sposta la barra. Le scritte *leading* e *trailing* compaiono solo nella prima parte dell'evoluzione.

## Suggerimenti di utilizzo

Per una presentazione conviene usare i pulsanti da *1* a *4* per fermarsi su ciascuna fase e leggere il riquadro, poi lasciare scorrere la fase finale per vedere i poli cambiare colore. Il pulsante *Inversione* aiuta a spiegare che il ciclo successivo parte con polarità opposte. Spostando il cursore *Ciclo solare* si confronta l'emersione a inizio ciclo, ad alta latitudine, con quella a fine ciclo, vicino all'equatore; conviene farlo con l'animazione in pausa su una fase fissa.

`;  // ← Ultima riga: non modificare.
