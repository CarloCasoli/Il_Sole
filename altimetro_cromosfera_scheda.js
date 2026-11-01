SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.

# L'altimetro virtuale della cromosfera

## Che cosa mostra l'animazione

L'animazione accompagna il paragrafo 7.4 e gli Approfondimenti 7.2, 7.3 e 7.4 e risponde a due domande: quando osservo il Sole attraverso un filtro sintonizzato su una riga spettrale, da quali quote dell'atmosfera proviene la luce che vedo? E perché righe diverse, che si formano a quote simili, danno immagini così diverse? È divisa in tre pannelli collegati tra loro.

*Profilo della riga (in alto a sinistra; su smartphone, il primo pannello).* Il grafico mostra l'intensità della riga scelta rispetto al continuo vicino, che vale 1. Il profilo non è disegnato a mano: è calcolato dalla temperatura di radiazione della riga (vedi sotto). Per questo in Ca II K e Mg II k compaiono da soli il piccolo picco vicino al centro (K2, k2) e l'avvallamento centrale (K3, k3). Il profilo è colorato secondo la regione da cui si forma ciascuna lunghezza d'onda: arancione per la fotosfera, rosso mattone per la bassa cromosfera, rosa per la media cromosfera, viola per l'alta cromosfera. Il cursore verticale indica la lunghezza d'onda osservata e si trascina con il mouse o con il dito. La campana azzurra tratteggiata è la trasmissione del filtro: un filtro reale non lascia passare una sola lunghezza d'onda, ma tutta una banda, con ali che si allargano ai lati. L'asse orizzontale non è lineare: è espanso vicino al centro della riga, dove le quote cambiano più rapidamente, e compresso nelle ali lontane.

*Colonna d'atmosfera (a destra).* L'asse verticale è la quota sopra la fotosfera, da 0 a 4.000 km; l'asse orizzontale è la temperatura. Fino a 3.000 km si estende la cromosfera della Figura 7.1. La fascia più scura in alto, oltre la linea tratteggiata dei 3.000 km, rappresenta lo spazio sopra la cromosfera: qui il plasma è così rarefatto da essere trasparente anche alla riga ($\tau \ll 1$), non emette più nella riga e i fotoni, una volta sfuggiti, viaggiano in linea retta verso l'osservatore. Le curve sono due.

- La **curva nera** è la temperatura del plasma, ripresa dalla Figura 7.1, con il minimo di circa 4.150 K verso i 450 km e la risalita fino a 10.000 K. Oltre i 3.000 km la curva esce dal grafico con una freccia: nella regione di transizione la temperatura sale bruscamente a $10^5$–$10^6$ K (paragrafo 7.7), valori fuori scala. È la stessa per tutte le righe, perché l'atmosfera del Sole è una sola: cambiando riga non cambia il plasma, cambia soltanto la quota da cui lo si guarda.
- La **curva tratteggiata colorata** è la temperatura di radiazione della riga, cioè la funzione sorgente $S(h)$ espressa come temperatura. È diversa per ogni riga ed è questa, non la temperatura del plasma, a stabilire quanto è luminosa la luce che esce. In fotosfera, dove gli urti sono frequenti (regime LTE), le due curve coincidono; in cromosfera, in regime non-LTE (Approfondimenti 7.1 e 7.2), si separano.

La campana colorata sul lato destro è la **funzione di contributo** della lunghezza d'onda del cursore: la luce non nasce da una quota precisa, ma da una fascia larga alcune centinaia di chilometri, più larga al centro della riga che nelle ali. La campana si interrompe al limite superiore della cromosfera, perché sopra non c'è più plasma in grado di emettere nella riga. La linea orizzontale con l'etichetta segna il centro della campana, dove $\tau \approx \mu$; il punto nero e il punto colorato su quella linea indicano le due temperature alla stessa quota. La fascia sfumata che riempie la colonna è la luce raccolta da tutta la banda del filtro: è la somma delle funzioni di contributo di tutte le lunghezze d'onda che il filtro lascia passare, pesate per la trasmissione del filtro e per l'intensità della riga. Sotto le quote di fuga i fotoni (i puntini) vengono assorbiti e riemessi in direzioni casuali; quando arrivano alla quota di fuga partono in linea retta verso l'alto. A destra della colonna, una barra verticale indica l'intervallo di quote che la Figura 7.1 attribuisce alla riga scelta.

*Cosa vedresti (in basso a sinistra).* Un'anteprima schematica dell'immagine che si otterrebbe con quel filtro, accompagnata da una descrizione. Per ogni riga sono disegnate tre immagini della stessa regione, una per la fotosfera, una per la bassa cromosfera e una per la media e alta cromosfera, con le strutture e i contrasti tipici di quella riga. Le tre immagini sono mescolate secondo la frazione di luce raccolta da ciascuna zona, indicata dalle barrette in basso. Il riquadro di testo descrive la zona che prevale nella banda del filtro e riporta le tre percentuali. Le immagini sono disegni schematici e i colori sono convenzionali.

## Perché righe diverse danno immagini diverse

Il confronto tra le due curve della colonna spiega quanto descritto nell'Approfondimento 7.3: le immagini nelle diverse righe sono molto diverse anche quando provengono da quote simili, perché dipendono dal modo in cui ciascuna riga si forma.

- **Hα.** La temperatura di radiazione si stacca dalla temperatura del plasma già in bassa cromosfera e poi resta bassa, circa 4.000–4.500 K, anche dove il plasma supera gli 8.000 K. L'intensità al centro della riga dipende quindi più dalla quantità di plasma lungo la linea di vista che dalla sua temperatura: si vedono fibrille e filamenti, scuri e contrastati, che tracciano il campo magnetico.
- **Ca II K e Mg II k.** La temperatura di radiazione segue il plasma oltre il minimo di temperatura, sale con l'inversione termica e poi si stacca. Ne nascono i picchi K2 e k2 e l'avvallamento centrale. Queste righe sono sensibili soprattutto al riscaldamento: la rete cromosferica e le plage risultano molto luminose, mentre i filamenti sono deboli.
- **Na D₂.** La temperatura di radiazione scende sotto il minimo di temperatura del plasma: il nucleo della riga è più scuro di quanto la sola temperatura farebbe prevedere, e l'immagine ha un contrasto basso.

## Il modello fisico

Il modello è qualitativo ma non arbitrario. Se la densità del plasma diminuisce in modo esponenziale con la quota, con altezza di scala $H$, la profondità ottica a una data lunghezza d'onda vale circa

$$\tau_\nu(h) \approx \frac{\kappa_{riga}}{\kappa_{cont}} \, e^{-h/H}$$

dove il continuo raggiunge $\tau = 1$ alla base della fotosfera ($h = 0$). Ponendo $\tau_\nu = \mu$ si ottiene la quota di formazione

$$h \approx H \ln\frac{\kappa_{riga}}{\kappa_{cont}} + H \ln\frac{1}{\mu}$$

Il primo termine spiega perché la quota dipende dal logaritmo dell'opacità: al centro di Hα la riga è circa un milione di volte più opaca del continuo, eppure la quota sale "solo" di circa 2.500 km. Il secondo termine è la relazione di Eddington–Barbier dell'Approfondimento 7.4: avvicinandosi al bordo del disco ($\mu \to 0$) la linea di vista è obliqua e la luce emerge da strati più alti. L'animazione usa un'unica altezza di scala $H = 180$ km.

L'intensità emergente a ogni lunghezza d'onda è calcolata come media della funzione sorgente sulla funzione di contributo, rappresentata da una campana centrata sulla quota $\tau \approx \mu$:

$$I_\lambda \approx \int S_\lambda(h)\, C(h)\, dh$$

con $S_\lambda$ data dalla funzione di Planck alla temperatura di radiazione della riga. Il profilo è poi diviso per l'intensità del continuo vicino.

Le quote al centro di ciascuna riga, al centro del disco, sono quelle della Figura 7.1. Per Hα le ali vicine (circa 0,3–0,7 Å dal centro) cadono nella fascia "Hα – ali" della figura, tra 800 e 2.200 km, mentre le ali lontane scendono in fotosfera, come descritto nel paragrafo 7.4. Per Mg II k sono state mantenute le quote della figura; si noti che in diversi modelli dell'atmosfera solare il nucleo di Mg II k si forma a quote simili o superiori a quelle del centro di Hα.

Le curve della temperatura di radiazione sono schematiche: riproducono l'andamento qualitativo dei modelli dell'atmosfera solare quieta (Vernazza, Avrett e Loeser 1981, bibliografia [1]) e sono scelte in modo che i profili calcolati abbiano le intensità tipiche osservate. Non sono il risultato di un calcolo di trasporto radiativo non-LTE, che esula dagli scopi del volume (Approfondimento 7.2).

## Comandi e parametri personalizzabili

- **Riga spettrale**: Hα (656,3 nm, idrogeno), Ca II K (393,4 nm, calcio ionizzato), Na D₂ (589,0 nm, sodio), Mg II k (279,6 nm, magnesio ionizzato). Mg II k cade nell'ultravioletto, assorbito dall'atmosfera terrestre: si osserva solo da satellite, per esempio con la missione IRIS.
- **Lunghezza d'onda**: distanza $\Delta\lambda$ dal centro della riga, in ångström. Si regola con il cursore sul profilo, con lo slider o con le frecce sinistra e destra della tastiera. Il pulsante *Centro riga* riporta il cursore al centro; il pulsante *Ala* lo sposta in un'ala della riga.
- **Banda del filtro**: larghezza a metà altezza della trasmissione, da 0,1 a 10 Å. Per ogni riga sono disponibili tre valori tipici; per Hα sono quattro: 0,3 Å (strumenti professionali), 0,5 Å (doppio etalon), 0,7 Å (filtro amatoriale) e 3 Å (filtro interferenziale largo). All'avvio è selezionato il filtro amatoriale. La forma della trasmissione dipende dal tipo di filtro. Sotto 1 Å è quella di un etalon Fabry–Pérot, come nei filtri Hα: un picco centrale con ali che si allargano ai lati, per cui anche lunghezze d'onda lontane dal centro contribuiscono un poco all'immagine. Da 1 Å in su è quella di un filtro interferenziale a più cavità, come i filtri Ca-K amatoriali o i filtri Hα larghi: una banda quasi piatta con fianchi ripidi, che lascia passare pochissima luce fuori banda.
- **Posizione sul disco**: il coseno $\mu$ dell'angolo tra la linea di vista e la verticale locale, da 1 (centro del disco) a 0,2 (vicino al bordo). Accanto è indicata la distanza dal centro in raggi solari, $r/R_\odot = \sqrt{1-\mu^2}$. I pulsanti *Centro del disco* e *Vicino al bordo* impostano 1 e 0,25.
- **Pausa / Riprendi**: ferma e riavvia il moto dei fotoni.

## Contatori

Sotto i pannelli sono riportati:

- la riga e l'elemento che la produce;
- la lunghezza d'onda effettivamente osservata, in nanometri;
- la quota di formazione ($\tau \approx \mu$), cioè il centro della funzione di contributo per la lunghezza d'onda del cursore;
- lo spessore della zona di formazione, cioè la semilarghezza della funzione di contributo;
- la temperatura del plasma a quella quota, letta sulla curva della Figura 7.1;
- la temperatura di radiazione della luce che esce a quella lunghezza d'onda;
- la regione dell'atmosfera corrispondente;
- l'opacità della riga rispetto al continuo, come ordine di grandezza;
- l'intensità del profilo rispetto al continuo;
- la quota media della luce raccolta da tutta la banda del filtro;
- la frazione della luce raccolta che proviene dalla fotosfera (quote inferiori a 400 km, il limite della fotosfera nella Figura 7.1).

## Suggerimenti di utilizzo

Con Hα, portare il cursore al centro della riga e passare dal filtro da 3 Å a quelli da 0,7, 0,5 e 0,3 Å: la luce fotosferica nella banda scende da circa il 63% al 17%, all'8% e infine al 2%, e la quota media sale da circa 600 a oltre 2.200 km. Sempre al centro della riga, confrontare i due contatori delle temperature: il plasma è a circa 8.500 K, ma la luce esce con una temperatura di radiazione di circa 4.150 K. È la differenza tra LTE e non-LTE descritta negli Approfondimenti 7.1 e 7.2.

Trascinare lentamente il cursore dal centro verso un'ala: la campana di contributo scende dall'alta cromosfera alla fotosfera, si restringe, e nell'anteprima le fibrille lasciano il posto alla granulazione. È l'altimetro virtuale descritto nell'Approfondimento 7.4.

Passare da Hα a Ca II K e poi a Mg II k tenendo il cursore al centro: la curva tratteggiata cambia forma, e con essa il profilo e l'immagine. In Ca II K il cursore spostato di circa 0,2 Å cade sul picco K2, dove la curva tratteggiata raggiunge il suo massimo.

Tenendo il cursore al centro della riga, allargare la banda del filtro: la fascia nella colonna si allunga verso il basso e la frazione di luce fotosferica cresce. Le ali della riga sono molto più luminose del centro, quindi anche una piccola trasmissione del filtro nelle ali porta molta luce fotosferica. Confrontare per Ca II K il filtro da 0,3 Å con quello amatoriale da 2,4 Å: con il primo la luce viene dalla media cromosfera (circa 1.300 km), con il secondo soprattutto dalla bassa cromosfera, attorno ai picchi K2 e ai minimi K1 (circa 700 km), con circa un quarto di luce fotosferica.

Con il cursore nel continuo (ala lontana) spostare la posizione verso il bordo: anche il continuo emerge da strati più alti e più freddi. È l'origine dell'oscuramento al bordo.

L'animazione è qualitativa: quote, curve di temperatura di radiazione e immagini sono schematiche, la cromosfera reale è disomogenea e dinamica, e strutture diverse (fibrille, spicole, plage) hanno quote di formazione diverse anche nella stessa riga.
`;
