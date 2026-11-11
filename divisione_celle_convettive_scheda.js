SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dello Script 4.5 del libro (capitolo4.tex).

# Evoluzione delle celle convettive in Zona Convettiva

## Che cosa mostra l'animazione

L'animazione mostra in tre dimensioni come una grande cella convettiva della zona convettiva solare si sviluppa e si frammenta in celle sempre più piccole, fino alla granulazione osservata in fotosfera. La scena è divisa in tre strati sovrapposti, sempre più sottili salendo: il *livello 1* ospita la cella madre, il *livello 2* le celle figlie, il *livello 3* i granuli. I tre livelli richiamano, in forma schematica, la gerarchia delle scale osservate nel Sole: celle giganti (oltre $100\,\mathrm{Mm}$), supergranuli (circa $30\,\mathrm{Mm}$) e granuli (circa $1\,\mathrm{Mm}$).

Ogni cella attraversa quattro fasi. Nella *risalita* una bolla di gas caldo, più leggera del gas circostante, sale veloce lungo il proprio canale centrale. Nell'*allargamento* incontra strati sempre meno densi e rallenta: la colonna resta quasi cilindrica, mentre la sommità si gonfia in un bulbo arrotondato in cui il flusso diventa orizzontale e piega verso il basso. Nella fase di *instabilità* il bordo comincia a ondeggiare lateralmente e il flusso in cima non riesce più a restare unico. Nella *divisione del flusso* corsie di gas freddo scendono dalla sommità e separano il grande flusso in flussi più piccoli: alcuni principali, uno al centro e gli altri attorno, e alcuni minori che riempiono gli spazi, così da coprire tutta la sezione della cella senza lasciare vuoti. Solo quando la divisione è completa i nuovi flussi partono lentamente e crescono come celle autonome nello strato successivo. L'ultima divisione produce i granuli, tutti di dimensione simile, che coprono l'intera superficie.

Il gas è rappresentato da particelle colorate secondo la temperatura, dal rosso scuro (gas freddo, che sprofonda) al giallo chiaro (gas caldo, che sale), con tre famiglie di percorsi. La maggior parte del gas *ricircola sul posto*: sale al centro della propria cella, si rovescia in cima e riscende ai bordi. Una piccola parte *sale di livello*, dalla cella madre alle figlie e ancora meno fino ai granuli. Il gas raffreddato in superficie, infine, scende in *getti freddi* stretti e veloci che si uniscono fra loro e raggiungono la base della cella madre. Le celle dei livelli inferiori non scompaiono dopo la divisione: restano attive sotto quelle più piccole.

Quando i granuli raggiungono la superficie l'animazione si ferma sulla *struttura completa*. Riavviandola comincia la *vita dei granuli*, che prosegue senza fine: ogni granulo nasce piccolo e più caldo, si allarga, si raffredda e si spegne, e il suo posto è preso subito da un nuovo granulo; circa uno su quattro, invece di spegnersi, si spezza in due o tre parti, come i granuli esplosivi osservati in fotosfera. Le celle sottostanti restano invece praticamente ferme, a ricordare la grande differenza dei tempi di vita: pochi minuti per i granuli (in media 5–10), uno o due giorni per i supergranuli, settimane o più per le celle giganti.

L'animazione *non è in scala* e non è una simulazione idrodinamica: forme, spessori degli strati, velocità e tempi sono schematici. Nel Sole non esistono strati netti né tubi chiusi uno sopra l'altro, ma una gerarchia continua di moti, e l'esistenza di celle giganti come scala distinta è ancora discussa. Il rapporto tra spessore dello strato e diametro delle celle diminuisce salendo per ricordare il rapido calo della densità verso la superficie, che costringe il gas in risalita ad allargarsi e a rovesciarsi. A velocità $\times 1$ lo sviluppo completo dei tre livelli dura circa $88$ secondi reali.

## Comandi e parametri personalizzabili

- **Pausa / Avvia**: sospende o riprende l'animazione; lo stesso effetto si ottiene con la barra spaziatrice. Alla fine dello sviluppo l'animazione si ferma da sola sulla struttura completa e il pulsante *Avvia* fa partire la vita dei granuli, che continua finché non viene sospesa.

- **Barra del tempo**: sposta l'istante dell'animazione per fermarsi su una fase qualsiasi; i segni *L2* e *L3* indicano quando nascono le celle del secondo e del terzo livello.

- **Ricomincia**: riporta l'animazione all'inizio, con la sola cella madre.

- **Nuova variante**: genera una nuova disposizione casuale delle celle figlie e dei granuli, con forme e tempi leggermente diversi.

- **Scarica il file .html**: salva l'animazione come file autonomo, apribile con qualsiasi browser (serve la connessione internet per caricare il motore grafico 3D).

- **Velocità animazione**: scala la velocità di riproduzione da $\times 0{,}25$ a $\times 3$ (valore iniziale $\times 1$).

- **Flussi principali nella prima divisione**: sceglie in quanti flussi principali si divide la cella madre, da $4$ a $7$, sempre con uno al centro e gli altri attorno (valore iniziale $5$, cioè $1 + 4$). I flussi minori che riempiono gli spazi e i granuli vengono ricalcolati di conseguenza.

- **Irregolarità della forma**: regola quanto le celle si discostano dalla forma perfettamente circolare, da $0$ (celle regolari) a $200\%$ (valore iniziale $100\%$).

- **Guscio della cella**: mostra o nasconde la superficie semitrasparente che delimita ogni cella. Senza guscio restano visibili soltanto le particelle, e i percorsi del gas risultano più leggibili.

- **Opacità del guscio**: rende il guscio più trasparente o più pieno, da $20\%$ a $180\%$ (valore iniziale $100\%$).

- **Particelle del gas**: mostra o nasconde le particelle che rappresentano i flussi.

- **Evidenzia il gas che cambia livello**: attenua il ricircolo locale e mette in risalto soltanto le particelle che salgono da un livello all'altro e i getti freddi che scendono dalla superficie fino alla base.

- **Etichette**: mostra o nasconde le didascalie nella scena (risalita calda al centro, discesa fredda ai bordi, corsie fredde, punti in cui il flusso si rovescia, nomi degli strati).

- **Rotazione automatica**: fa ruotare lentamente la scena attorno all'asse verticale.

- **Vista**: *Obliqua*, *Laterale* o *Dall'alto*. Trascinando con il mouse si ruota liberamente la scena, con la rotellina si cambia l'ingrandimento e con il tasto destro la si sposta.

## Contatori

La colonna sul lato sinistro della scena indica il livello in corso (*cella madre*, *figlie*, *granuli*) e la fase raggiunta (*risalita*, *allargamento*, *instabilità*, *divisione del flusso*; per l'ultimo livello *struttura completa* e *vita dei granuli*), con un titolo e una breve frase che descrivono ciò che sta accadendo. Una barra mostra la *velocità di risalita* della cella in esame, con l'indicazione *alta*, *media*, *bassa* o *quasi ferma*: è alta all'inizio della risalita e cala man mano che la cella si allarga. Accanto alla barra del tempo compare il tempo trascorso rispetto alla durata dello sviluppo, sostituito alla fine dalle scritte *struttura completa* e *vita dei granuli*.

## Suggerimenti di utilizzo

Per presentare l'animazione conviene partire con il guscio attivo e la vista *Laterale*, che mostra bene la forma delle celle e la sequenza delle quattro fasi; la *Barra del tempo* permette di fermarsi sull'instabilità del bordo e sulla divisione del flusso per descriverle con calma. La vista *Dall'alto* mostra come i nuovi flussi coprono tutta la sezione della cella da cui nascono. Disattivando il *Guscio della cella* restano le sole particelle e diventano evidenti i percorsi del gas: il ricircolo largo della cella madre, le fasce in cui il gas si rovescia sotto le figlie e la superficie che ribolle; con *Evidenzia il gas che cambia livello* si fa vedere quanto poco gas passa da uno strato al successivo e come i getti freddi scendano dalla superficie fino alla base. Raggiunta la struttura completa, l'arresto automatico lascia il tempo di descriverla prima di avviare la vita dei granuli, da osservare preferibilmente dall'alto o in vista obliqua.

`;  // ← Ultima riga: non modificare.
