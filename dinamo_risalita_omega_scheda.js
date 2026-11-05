SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.

# Dalla dinamo alla macchia

## Che cosa mostra l'animazione

L'animazione accompagna i paragrafi 5.7 (nascita del campo toroidale), 5.8 (instabilità del campo toroidale ed emersione) e 5.10 (leggi di Hale e di Joy), e riprende il paragrafo 4.4 sulla tachocline. Segue un tratto di campo magnetico per tutto il suo percorso: dalla base della zona convettiva, dove la rotazione differenziale lo trasforma in un grande tubo toroidale, fino alla fotosfera, dove un suo tratto emerge e forma una coppia di macchie.

Risponde a una domanda che le figure semplificate lasciano aperta: da dove viene il tratto orizzontale che si vede emergere in superficie? Non è un tubo che corre appena sotto la fotosfera, ma la **sommità di un arco a Ω** le cui gambe scendono per circa 200.000 km, quasi lungo il raggio, fino al tubo toroidale nella tachocline. Il tubo toroidale non sale in blocco: resta in basso, e risale solo il tratto che diventa instabile.

## Che cosa si vede

La figura è un **settore della zona convettiva**: 90° di longitudine e 30° di latitudine, da 10° a 40° nord, compreso tra la tachocline (circa 0,7 raggi solari) e la fotosfera. Le gambe dell'arco salgono lungo i raggi, cioè verso l'esterno a partire dal centro del Sole, indicato sotto la figura.

- **Zona radiativa** (grigia), **tachocline** (arancio chiaro), **zona convettiva** e **fotosfera** granulata. Le tacche a destra indicano la profondità (0, 100.000, 200.000 km) e la latitudine (20°, 30°, 40° N).
- **Linee di campo e tubi di flusso** (viola): le strisce oblique sulla superficie dei tubi rappresentano le linee di campo avvolte attorno all'asse del tubo.
- **Puntini grigi**: il plasma trasportato dalle celle convettive.
- **Puntini arancioni lungo il tubo**: il plasma che scivola dalla sommità dell'arco verso i piedi.
- **Linea tratteggiata**: la salita radiale, cioè il percorso che la sommità seguirebbe senza la forza di Coriolis. **Linea rossa**: il percorso reale della sommità.
- **Macchie**: dove le gambe attraversano la fotosfera; i segni + e − indicano la polarità. Sopra la fotosfera l'arco prosegue nella corona (arancio trasparente).

Il riquadro sotto la figura descrive la fase in corso.

## Le sei fasi

- **1. Campo poloidale.** Alla base della zona convettiva il campo lasciato dal ciclo precedente corre lungo i meridiani. Se il polo nord è positivo, come nell'esempio del paragrafo 5.10, alla base della zona convettiva le linee vanno da sud a nord: è il ramo interno delle linee che escono dal polo nord e rientrano dal polo sud. È debole, dell'ordine di $10^2$ gauss.
- **2. Rotazione differenziale (effetto Ω).** Il plasma più vicino all'equatore ruota più in fretta di quello più vicino al polo; le frecce mostrano questa differenza rispetto alla latitudine centrale. Il campo è congelato nel plasma (paragrafo 5.5): ogni linea viene trascinata e stirata nel verso della rotazione. La linea evidenziata in rosso permette di seguirne una. Allungandosi, le linee si avvicinano tra loro e il campo si intensifica fino a circa $10^4$ gauss in alcuni anni.
- **3. Nasce il tubo toroidale.** Il campo, ormai quasi tutto parallelo all'equatore, si raccoglie in tubi di flusso che corrono lungo tutta la circonferenza. Restano immagazzinati nella tachocline, dove la convezione non riesce a trascinarli via, e raggiungono circa $10^5$ gauss.
- **4. Instabilità.** In un tubo di flusso la pressione totale è uguale a quella esterna, ma una parte è pressione magnetica:
$$p_e = p_i + \frac{B^2}{8\pi}$$
quindi dentro il tubo c'è meno gas e il tubo è più leggero dell'ambiente (galleggiamento magnetico, Script 5.2). Un tratto si inarca, il plasma scivola lungo il tubo verso i lati, il tratto centrale si svuota e sale ancora di più: è l'instabilità di Parker. Gli altri tubi, e il resto dello stesso tubo, rimangono nella tachocline.
- **5. Risalita.** La sommità dell'arco attraversa la zona convettiva; i piedi restano ancorati al tubo toroidale. Salendo, la pressione esterna diminuisce: il tubo si allarga e il campo si indebolisce, perché il flusso magnetico $\Phi = B\,\pi a^2$ si conserva. Il campo nella sommità passa da circa $10^5$ a circa $10^3$ gauss.
- **6. Emersione.** La sommità attraversa la fotosfera: è il tratto orizzontale che si vede emergere in superficie (capitolo 8, animazione *Dalle regioni attive al buco coronale*). Dove le gambe bucano la fotosfera nascono due macchie di polarità opposta: nella gamba che precede il campo esce dalla superficie (+), in quella che segue vi rientra (−). La macchia che precede ha quindi la stessa polarità del polo nord all'inizio del ciclo, come nell'esempio della legge di Hale del paragrafo 5.10.

Con il tubo debole la fase 6 è sostituita da **Ritorno alla tachocline** (vedi sotto).

## La forza di Coriolis

Con il pulsante *Salita radiale* la sommità sale lungo il raggio e la coppia di macchie è allineata lungo il parallelo. Con *Con Coriolis* compaiono tre effetti, tutti dovuti alla rotazione del Sole (Approfondimento 5.3):

- **Ritardo rispetto alla rotazione.** Salendo, il plasma si allontana dall'asse di rotazione e, conservando il momento angolare, rallenta: la sommità resta indietro rispetto al verso di rotazione (la ballerina che allarga le braccia).
- **Spostamento verso il polo.** La forza di Coriolis che agisce su questo moto all'indietro ha una componente diretta verso l'asse di rotazione: la sommità tende a salire parallela all'asse invece che lungo il raggio, e quindi si sposta verso latitudini più alte. È la differenza tra la linea rossa e la linea tratteggiata.
- **Inclinazione dell'arco (legge di Joy).** La forza di Coriolis agisce anche sul plasma che scorre lungo le gambe: l'arco si torce, la gamba che precede diventa più ripida di quella che segue e la macchia che precede emerge a latitudine più bassa. Si vede bene con la vista *Dall'alto*.

Questi effetti sono calcolati con lo stesso modello dello Script 5.3, che mostra la risalita in tutto il Sole: le due animazioni danno gli stessi numeri.

## Tubo forte, medio e debole

L'effetto della forza di Coriolis dipende dal tempo che ha per agire, quindi dall'intensità del campo nel tubo. Un tubo forte galleggia di più, sale in fretta e viene deviato poco; uno debole sale lentamente e viene deviato molto.

- **Forte, $10^5$ gauss.** Sale in circa 30 giorni, quasi lungo il raggio. Emerge a circa 21,7° di latitudine: appena 2° più vicino al polo della latitudine di partenza (20°). Inclinazione della coppia: circa 9°.
- **Medio, $6\times10^4$ gauss.** Sale in circa 50 giorni. Emerge intero, ma a circa 27° di latitudine, 7° più vicino al polo: lo spostamento è ben visibile. Inclinazione della coppia: circa 10°.
- **Debole, $3\times10^4$ gauss.** Sale lentamente e viene deviato verso il polo. A circa 160.000 km di profondità il suo campo scende sotto quello dei moti convettivi intorno (campo di equipartizione): la convezione lo fa a pezzi prima che arrivi in superficie, a circa 31° di latitudine e 130.000 km di profondità.

Gli strumenti riportano, istante per istante, il campo nel tubo e quello dei moti convettivi alla stessa profondità: finché il primo è più grande, il tubo resta compatto.

Il confronto con le osservazioni è l'argomento con cui si stima l'intensità dei tubi alla base della zona convettiva: le macchie compaiono solo entro circa 35°–40° di latitudine e con l'inclinazione osservata, e questo richiede tubi di circa $10^5$ gauss.

## Che fine fa il tubo debole

Quando il tubo debole si disfa, il campo non sparisce: le linee del campo magnetico non hanno estremità e non possono interrompersi. I fili restano collegati al tubo ai due lati e formano una matassa debole e aggrovigliata dentro la zona convettiva. Nella fase *Ritorno alla tachocline*:

- dove la matassa avvicina linee di verso opposto, queste si riconnettono e si annullano a vicenda (riconnessione magnetica): quella parte di flusso è persa. Nell'animazione sono i due fili che svaniscono;
- il resto viene trascinato in basso dalla convezione, le cui correnti discendenti sono più strette e veloci di quelle ascendenti (pompaggio turbolento), e torna nella tachocline nel giro di alcuni mesi;
- lì si ricompatta nel tubo toroidale: il vuoto nel sistema toroidale si richiude e la rotazione differenziale tornerà a rinforzarlo.

Un tubo troppo debole non produce una macchia, ma il suo flusso, in buona parte, torna alla dinamo.

## Metà della dinamo

L'animazione mostra la prima metà del ciclo magnetico: la rotazione differenziale trasforma il campo poloidale in campo toroidale, molto più intenso (effetto Ω). Per chiudere il ciclo serve il passaggio inverso, da toroidale a poloidale: le coppie di macchie inclinate dalla forza di Coriolis, disperdendosi, ricostruiscono un campo poloidale di segno opposto (meccanismo di Babcock-Leighton, paragrafo 5.13). Per questo l'inclinazione di Joy non è un dettaglio: è il motore della seconda metà del ciclo.

## Comandi

- **Avvia / Pausa**, **Ricomincia** e **◂ Fase / Fase ▸**; l'elenco delle fasi permette di andare direttamente a una fase.
- **Velocità**: ×0,5, ×1, ×2, ×4.
- **Salita radiale / Con Coriolis**: attiva o disattiva la forza di Coriolis. Cambiando scelta durante la risalita, l'animazione riparte dall'instabilità.
- **Forte / Medio / Debole**: intensità del campo nel tubo che sale.
- **Moti convettivi** e **Plasma che scivola lungo il tubo**: mostrano o nascondono i rispettivi puntini.
- **Punto di vista**: *Obliqua*, *Di fronte* (la corona del settore vista di fronte, la più adatta per seguire la salita lungo il raggio) e *Dall'alto* (la fotosfera vista dall'esterno, la più adatta per l'inclinazione della coppia). Trascinando la figura la si ruota; con la rotella si cambia lo zoom.

## Strumenti

Il riquadro *Strumenti* riporta il tempo (anni durante la formazione del campo toroidale, giorni dalla risalita in poi), il campo nel tubo e quello dei moti convettivi alla stessa profondità, la profondità della sommità e lo stato del tubo. Con la forza di Coriolis attiva riporta anche la latitudine della sommità, il suo spostamento verso il polo, il ritardo rispetto alla rotazione e, dopo l'emersione, l'inclinazione della coppia di macchie.

## Il modello e le sue semplificazioni

- È uno schema qualitativo, non una simulazione magnetoidrodinamica.
- Il settore è più stretto in latitudine di quanto servirebbe per contenere l'intero sistema toroidale; i tubi toroidali nel Sole sono molti, qui ne sono disegnati otto.
- Le dimensioni della regione attiva sono quelle di una grande regione reale: le due macchie, di circa 26.000 km di diametro, emergono a circa 90.000 km l'una dall'altra (circa 7° sulla superficie). L'arco a Ω è largo alla base e stretto in cima, come nei modelli: le gambe convergono salendo verso la fotosfera.
- Il tubo nella tachocline è disegnato un po' più grosso del vero, per restare visibile: circa 3.750 km di raggio, contro i 2.000–5.000 km di un tubo che produce una grande regione attiva. Anche l'allargamento durante la risalita è compresso: qui circa tre volte, nel Sole da cinque a dieci volte.
- Come il campo passi da circa $10^4$ a circa $10^5$ gauss nella tachocline è ancora discusso: la sola rotazione differenziale non sembra sufficiente.
- Tempi di risalita, spostamento verso il polo, ritardo e soglia di disgregazione seguono il modello dello Script 5.3, che riproduce l'andamento dei modelli a tubo sottile: Parker (1955); Choudhuri e Gilman (1987); D'Silva e Choudhuri (1993); Caligari, Moreno-Insertis e Schüssler (1995); Fan (2009, *Living Reviews in Solar Physics*). L'inclinazione della coppia e l'asimmetria delle gambe sono scelte per riprodurre i valori osservati.
- Il ritorno del flusso disperso verso la tachocline è mostrato in modo schematico: nel Sole è un processo turbolento, che si osserva solo nelle simulazioni numeriche.
- *Precede* indica il verso della rotazione: sul disco visto dalla Terra la macchia che precede è quella più a Ovest.
`;
