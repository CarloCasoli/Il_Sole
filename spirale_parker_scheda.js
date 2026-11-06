SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.

# La spirale di Parker

## Che cosa mostra l'animazione

L'animazione accompagna il paragrafo 11.1 (scenario "Sole quieto") il paragrafo 11.8 (scenario "Buco coronale") e i paragrafi 11.6-11.7 (scenario "CME") e mostra il Sole e i pianeti interni visti dall'alto, dal polo Nord dell'eclittica. Il Sole ruota in senso antiorario e soffia in ogni direzione il vento solare, che trascina con sé il campo magnetico.

**I pacchetti di vento** (punti arancioni) partono dalla superficie del Sole a intervalli regolari e viaggiano in linea retta verso l'esterno, alla velocità impostata con il cursore.

**Le linee del campo magnetico** uniscono i pacchetti partiti dallo stesso punto della superficie. Poiché il plasma del vento è un conduttore quasi perfetto, il campo resta "congelato" nel plasma (teorema di Alfvén, paragrafo 11.1): la linea di campo segue i pacchetti e non può staccarsene. I piccoli punti sul bordo del Sole sono i piedi delle linee, che ruotano con il Sole.

**La Terra** (in verde) percorre la sua orbita. La linea verde è la linea di campo che la collega al Sole. Accanto alla Terra è indicato l'angolo $\psi$ tra la linea di campo (tratto continuo) e la direzione radiale, cioè la direzione da cui arriva il vento (tratto tratteggiato).

Il Sole è disegnato molto più grande del vero: in scala sarebbe poco più grande di un pixel.

## Perché la spirale

Ogni pacchetto, una volta partito, procede in linea retta. Intanto però il punto da cui è partito ruota con il Sole, e i pacchetti emessi dopo partono in direzioni via via spostate in avanti. Unendo i pacchetti emessi dallo stesso punto si ottiene una curva che si avvolge all'indietro rispetto alla rotazione: una spirale di Archimede.

Se il punto di partenza è alla longitudine $\varphi_0$, la linea di campo alla distanza $r$ dal Sole si trova alla longitudine

$$\varphi(r) = \varphi_0 - \frac{\Omega\, r}{v}$$

dove $\Omega$ è la velocità angolare di rotazione del Sole e $v$ la velocità del vento. L'angolo tra la linea di campo e la direzione radiale è dato da

$$\tan\psi = \frac{\Omega\, r}{v}$$

Con un periodo di rotazione di circa 25 giorni, alla distanza della Terra $\Omega\, r$ vale circa 430 km/s, molto vicino alla velocità tipica del vento: per questo alla Terra l'angolo è di circa 45°.

## Che cosa osservare

1. **La particella seguita.** Con l'opzione "Segui un pacchetto di vento" un pacchetto è evidenziato ("pacchetto seguito"): il tratteggio arancione è il suo percorso, perfettamente rettilineo. La linea di campo su cui si trova (più spessa) è invece curva, e il suo piede sul Sole si è spostato. Il pacchetto non segue la spirale: è la spirale che ruota, mentre i pacchetti la "scorrono" verso l'esterno.
2. **La spirale ruota rigidamente con il Sole.** Ogni 25,4 giorni l'intera figura compie un giro completo, come l'acqua di un irrigatore rotante: ogni goccia va dritta, ma il getto disegna una spirale.
3. **La velocità del vento.** Con vento lento (300 km/s) la spirale è più avvolta e alla Terra l'angolo supera i 50°; con vento veloce (750 km/s) la spirale si apre e l'angolo scende verso i 30°. Il tempo di viaggio fino alla Terra passa da quasi 6 giorni a poco più di 2.
4. **Il piede della linea della Terra.** La linea che arriva alla Terra non parte dal punto del Sole rivolto verso la Terra, ma da un punto spostato verso il bordo occidentale del disco, circa 60° a ovest con un vento di 400 km/s. È il motivo per cui le particelle energetiche dei brillamenti (capitolo 9) arrivano alla Terra soprattutto quando il brillamento avviene nell'emisfero occidentale del disco solare.
5. **Lontano dal Sole.** Allargando la vista fino a Giove si vede che la spirale si avvolge sempre più: a 5 UA le linee di campo sono quasi circonferenze, e il campo è diretto quasi perpendicolarmente alla direzione radiale.

## Le polarità

### Che cosa indica il colore

Una linea di campo ha un verso, come una strada a senso unico. L'opzione "Mostra le polarità" colora le linee e lo sfondo secondo questo verso: **blu** dove il campo punta lontano dal Sole, **corallo** dove punta verso il Sole. Le frecce indicano il verso. Il campo resta sempre disteso nel piano del disegno, lungo la spirale: il colore non indica un campo rivolto verso chi guarda.

Il verso viene deciso sul Sole e trasportato dal vento senza cambiare (flusso congelato, paragrafo 11.1): una linea che parte da una zona dove il campo esce dalla superficie punta lontano dal Sole lungo tutta la spirale.

### Il legame con la "gonna da ballerina"

La corrente eliosferica (Script 11.1) divide lo spazio in due: **sopra la gonna** il campo ha il verso dell'emisfero Nord del Sole, **sotto la gonna** quello dell'emisfero Sud. La vista dall'alto mostra solo il piano dell'eclittica, come un foglio infilato orizzontalmente nella gonna: dove la gonna passa sotto il foglio, il foglio si trova sopra la gonna e ha la polarità del Nord; dove la gonna passa sopra il foglio, ha la polarità del Sud. Le zone colorate a spirale sono i **settori**, e i confini tra i colori sono i punti in cui la gonna attraversa il foglio.

Il riquadro sotto la vista principale mostra la **sezione laterale** lungo la direzione Sole–Terra: la linea nera è la gonna vista di fianco, la linea verde tratteggiata è il piano dell'eclittica e il punto verde è la Terra. Le onde della gonna si allontanano dal Sole trascinate dal vento: quando una di esse passa sulla Terra, la Terra cambia faccia e la polarità alla Terra si inverte.

### Come è calcolata

La forma della gonna è descritta da due numeri: l'**inclinazione** (quanto si allontana dall'equatore solare) e il numero di **ondulazioni** lungo un giro (1 ondulazione dà 2 settori, 2 ondulazioni danno 4 settori). Ogni pacchetto di vento conserva la latitudine e la longitudine solare da cui è partito; per ogni punto del piano il programma cerca la parte di gonna partita nello stesso istante e verifica se il punto si trova sopra o sotto di essa.

I pulsanti delle fasi impostano valori tipici per le quattro fasi del capitolo 11:

- **Minimo (paragrafo 11.5):** gonna quasi piatta, inclinata di circa 10°, 2 settori.
- **Ascesa (paragrafo 11.6):** gonna inclinata e ondulata, di solito 4 settori.
- **Massimo (paragrafo 11.7):** gonna inclinata fin quasi ai poli; i campi polari del Sole si stanno invertendo.
- **Chiusura (paragrafo 11.8):** la gonna torna più piatta, ma con i versi scambiati rispetto al minimo precedente: il polo Nord del Sole ha ora il campo entrante. È il ciclo di Hale di 22 anni (paragrafo 11.9).

### Che cosa osservare

1. **Quanto dura un settore.** La gonna compie un giro, visto dalla Terra, in circa 27 giorni. Con 2 settori la Terra resta su ciascuna faccia per circa 13-14 giorni, con 4 settori per circa una settimana.
2. **Il passaggio è breve.** La corrente eliosferica è spessa circa 10 000 km, meno di un millesimo della distanza Terra-Sole: il cambio di verso alla Terra dura da pochi minuti a qualche ora, una frazione minima del giro.
3. **La latitudine della Terra.** L'equatore del Sole è inclinato di 7,25° sull'eclittica, quindi durante l'anno la Terra sale e scende rispetto all'equatore solare: è a sud all'inizio di marzo e a nord all'inizio di settembre (il valore è indicato nella sezione laterale). Nella fase di minimo, con la gonna quasi piatta, la Terra resta più a lungo sotto la gonna in primavera e sopra la gonna in autunno, e vede prevalere la polarità dell'emisfero solare verso cui è spostata (effetto Rosenberg-Coleman). Per vederlo, impostare la fase di minimo e una velocità di riproduzione alta.
4. **Il verso non decide le tempeste.** La polarità del settore indica il verso del campo nel piano dell'eclittica. L'ingresso di energia nella magnetosfera dipende invece dalla componente Nord-Sud del campo (paragrafo 11.6), che oscilla continuamente dentro ogni settore.

## Lo scenario "Buco coronale"

### Che cosa mostra

Un settore del Sole, il buco coronale (l'arco scuro sul bordo del Sole), emette vento veloce; il resto della superficie emette vento lento. È la situazione descritta per la fase di chiusura nel paragrafo 11.8. I cursori regolano la velocità dei due venti e la larghezza del buco.

**Lo sfondo** è colorato secondo la velocità del vento, con una scala simile a quella della Figura 11.1: blu per il vento lento, giallo, arancione e rosso per il vento veloce. Il vento veloce forma una fascia a spirale che ruota con il Sole: è la stessa fascia arancione del pannello di destra della Figura 11.1.

**I punti scuri** (chiari nel tema scuro) segnano il plasma compresso: dove il vento veloce raggiunge il vento lento che lo precede, i due flussi non possono attraversarsi e il plasma si accumula sul fronte. È la Regione di Interazione Corotante (CIR, paragrafo 11.8), che corrisponde agli archi brillanti del pannello di sinistra della Figura 11.1.

**Il grafico** mostra ciò che misurerebbe una sonda vicino alla Terra negli ultimi 8 mesi (60 giorni se l'evoluzione è spenta): la velocità del vento (linea colorata) e la densità rispetto al vento lento indisturbato (tratteggio).

### La vita di un buco coronale

Con l'opzione "Evoluzione del buco coronale" (attiva all'apertura) il buco nasce all'avvio dello scenario, cresce, raggiunge un massimo e si richiude, come nelle osservazioni. Le proporzioni tra le fasi riprendono un buco coronale seguito dal satellite SDO per più di 10 rotazioni nel 2012 (Heinemann e collaboratori, 2018):

- **crescita**, per circa 3/8 della vita: il buco si allarga gradualmente;
- **massimo**, per circa 1/8-1/5 della vita: larghezza e velocità del vento restano ai valori massimi;
- **declino**, per il resto della vita: prima rapido, poi sempre più lento, fino alla chiusura.

La durata della vita si regola da 3 a 12 rotazioni (8 all'apertura, circa 7 mesi). Le osservazioni mostrano che il vento veloce è tanto più rapido quanto più grande è il buco: per questo, insieme alla larghezza, cresce e cala anche la velocità del vento veloce. I cursori fissano i valori raggiunti al massimo. Il riquadro in alto a sinistra indica la fase e la rotazione in corso. Dopo la chiusura segue una rotazione di solo vento lento, poi nasce un nuovo buco coronale.

Nel grafico la vita del buco si legge rotazione dopo rotazione: ogni 27 giorni arriva una CIR, con un picco di velocità prima basso, poi sempre più alto e largo, e infine di nuovo basso, finché i passaggi scompaiono.

### Che cosa osservare

1. **La firma di una CIR alla Terra.** Prima arriva un picco di densità: è l'"ingorgo" di plasma compresso sul fronte. Subito dopo la velocità sale bruscamente, e per alcuni giorni la Terra è investita dal vento veloce, meno denso. Poi la velocità scende lentamente: il vento lento che segue il buco coronale resta indietro, e tra i due si apre una zona rarefatta.
2. **La ricorrenza di 27 giorni.** La struttura ruota con il Sole e torna sulla Terra dopo una rotazione vista dalla Terra, circa 27 giorni: nel grafico i picchi si ripetono a questa distanza. È la regolarità "quasi matematica" delle tempeste ricorrenti descritta nel paragrafo 11.8.
3. **Il fronte si irrigidisce allontanandosi dal Sole.** Vicino al Sole i due venti non hanno ancora avuto il tempo di raggiungersi; la compressione nasce a qualche decimo di UA e diventa più intensa man mano che ci si allontana, perché il fronte raccoglie sempre più plasma.
4. **Le linee di campo.** Nel vento veloce la spirale è più aperta, nel vento lento più avvolta. Nella zona compressa le linee si avvicinano: anche il campo magnetico è compresso, e le sue oscillazioni possono avere componenti Nord-Sud capaci di innescare tempeste di intensità moderata (paragrafo 11.8).
5. **Cambiare i parametri.** Le modifiche dei cursori, e anche la crescita e il declino del buco, partono dal Sole e viaggiano con il vento: alla Terra arrivano alcuni giorni dopo, il tempo di viaggio del vento.
6. **Le tempeste ricorrenti di una stagione.** Con la velocità di riproduzione al massimo (10 giorni al secondo) l'intera vita del buco scorre in circa 20 secondi: è la sequenza di tempeste moderate e regolari che accompagna la fase di chiusura del ciclo (paragrafo 11.8).

## Lo scenario "CME"

### Che cosa mostra

Il Sole soffia un vento uniforme, la cui velocità si regola con il cursore "Velocità del vento di fondo". Il pulsante "Lancia una CME" fa partire un'espulsione di massa coronale: per qualche ora il Sole emette, entro un'ampiezza angolare scelta, una grande quantità di plasma molto più veloce del vento. Velocità di lancio, ampiezza e direzione si regolano prima del lancio; la direzione è misurata rispetto alla Terra, verso ovest o verso est come la vede un osservatore terrestre.

**Sullo sfondo** la CME appare come una bolla di vento veloce (giallo, arancione, rosso) che si allontana dal Sole. **I punti viola** indicano il materiale della CME, **i punti scuri** (chiari nel tema scuro) il vento solare compresso davanti a essa: è la "guaina" spinta dalla CME, preceduta nella realtà da un'onda d'urto.

La CME, a differenza di un buco coronale, non ruota con il Sole: una volta partita procede nella sua direzione. Le linee del campo della spirale che incontra vengono spinte in avanti e stirate attorno alla bolla: è il drappeggio del campo interplanetario attorno alla CME.

Il riquadro in alto a sinistra indica da quanti giorni la CME è in viaggio, e poi dopo quanto tempo e a quale velocità è arrivata alla Terra, oppure che l'ha mancata. Il grafico mostra ciò che misurerebbe una sonda vicino alla Terra negli ultimi 15 giorni: la linea viola tratteggiata segna il lancio, la fascia viola il passaggio del materiale della CME.

### Che cosa osservare

1. **La firma di una CME alla Terra.** All'arrivo la velocità sale di colpo e la densità ha un picco: è il passaggio dell'onda d'urto e della guaina compressa (paragrafo 11.6). Segue il materiale della CME, più rarefatto, mentre la velocità cala lentamente.
2. **Il tempo di viaggio.** Una CME a 1000 km/s arriva in poco più di 2 giorni, una a 2000 km/s in circa un giorno e mezzo, una a 500 km/s in quasi 4 giorni. Sono valori in linea con quelli osservati.
3. **La CME rallenta.** Spingendo davanti a sé il vento più lento, la CME perde velocità: una CME lanciata a 2000 km/s arriva alla Terra a circa 1200-1300 km/s. Una CME lanciata a una velocità vicina a quella del vento, invece, quasi non rallenta.
4. **La direzione conta.** Con un'ampiezza di 60°, una CME lanciata a 30° o più dalla direzione della Terra non la colpisce. Lanciata a 15°-25°, la colpisce di fianco: arriva più tardi e più lenta, perché il fianco della CME è meno veloce del centro. Una CME molto ampia (120°) può colpire la Terra di fianco anche se lanciata a 45° da essa. Per gli effetti sulla Terra conta però soprattutto il verso del campo magnetico trasportato dalla CME: una componente Nord-Sud diretta verso Sud e prolungata per molte ore produce le tempeste più intense (paragrafi 11.6 e 11.7). L'animazione non rappresenta questa componente.
5. **Il campo si raddrizza.** Durante il passaggio della CME l'angolo tra il campo e la direzione radiale alla Terra si riduce molto: il campo viene stirato verso l'esterno dalla bolla in espansione.
6. **CME in sequenza.** Lanciando una seconda CME più veloce poco dopo la prima, la seconda può raggiungere la prima lungo il cammino e fondersi con essa: nella realtà questi eventi composti producono alcune delle tempeste più forti.

## Limiti del modello

Il modello è cinematico. Nello scenario del Sole quieto il vento ha la stessa velocità ovunque; nello scenario del buco coronale ogni pacchetto viaggia in linea retta finché non raggiunge quello che lo precede, e allora i due si fondono conservando la quantità di moto. Nello scenario della CME il materiale emesso ha una massa pari a 12 volte quella del vento emesso nello stesso intervallo, valore scelto in modo da ottenere tempi di arrivo realistici, e la CME è rappresentata solo nel piano dell'eclittica. Non si considerano la pressione del plasma, la struttura magnetica interna della CME (la nube magnetica) e l'azione del campo sul vento: nella realtà la pressione allarga la zona compressa e genera onde d'urto ai suoi bordi, mentre nel modello la compressione è concentrata in uno strato sottile (la densità indicata nel grafico è una media su 0,2 UA). La gonna è descritta da una forma regolare; quella reale, calcolata ogni rotazione dalle mappe del campo magnetico solare, è più irregolare e i suoi settori hanno durate diverse. La vista dall'alto rappresenta il piano dell'eclittica, inclinato di 7,25° sull'equatore solare. Nello scenario del buco coronale cambiano solo la larghezza del buco e la velocità del vento: un buco reale cambia anche forma e latitudine, e può spezzarsi o unirsi ad altri. La posizione del buco e quella della gonna sono indipendenti; nella realtà un buco coronale ha una sola polarità e si trova da una parte della gonna.

La ricostruzione della Figura 11.1 (modello RIMAP) è ottenuta invece con un modello magnetoidrodinamico alimentato dalle misure reali del vento solare.

`;
