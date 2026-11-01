SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.

# L'altimetro virtuale della cromosfera

## Che cosa mostra l'animazione

L'animazione accompagna il paragrafo 7.4 e l'Approfondimento 7.4 e risponde a una domanda precisa: quando osservo il Sole attraverso un filtro sintonizzato su una riga spettrale, da quale quota dell'atmosfera proviene la luce che vedo? È divisa in tre pannelli collegati tra loro.

*Profilo della riga (in alto a sinistra).* Il grafico mostra l'intensità della riga scelta rispetto al continuo vicino, che vale 1. Il profilo è colorato secondo la regione da cui si forma ciascuna lunghezza d'onda: arancione per la fotosfera, rosso mattone per la bassa cromosfera, rosa per la media cromosfera, viola per l'alta cromosfera. Il cursore verticale indica la lunghezza d'onda osservata e si trascina con il mouse o con il dito. La campana azzurra tratteggiata è la trasmissione del filtro: un filtro reale non lascia passare una sola lunghezza d'onda, ma tutta una banda, con ali che si allargano ai lati. L'asse orizzontale non è lineare: è espanso vicino al centro della riga, dove le quote cambiano più rapidamente, e compresso nelle ali lontane.

*Colonna d'atmosfera (a destra).* L'asse verticale è la quota sopra la fotosfera, da 0 a 3.000 km; l'asse orizzontale è la temperatura. La curva nera è l'andamento della temperatura della Figura 7.1, con il minimo di circa 4.150 K verso i 450 km e la risalita fino a 10.000 K. La linea colorata con l'etichetta indica la quota a cui, per la lunghezza d'onda del cursore, la profondità ottica vale $\tau \approx \mu$: è lo strato da cui la luce riesce finalmente a sfuggire. La fascia colorata sfumata indica invece tutte le quote raccolte dalla banda del filtro, più intensa dove il contributo è maggiore. Sotto questa fascia i fotoni (i puntini) vengono assorbiti e riemessi in direzioni casuali; quando arrivano alla quota di fuga partono in linea retta verso l'alto, verso l'osservatore. A destra della colonna, una barra verticale indica l'intervallo di quote che la Figura 7.1 attribuisce alla riga scelta.

*Cosa vedresti (in basso a sinistra).* Un'anteprima schematica dell'immagine che si otterrebbe con quel filtro. Sono mescolate tre immagini di fantasia della stessa regione: la granulazione con una piccola macchia (fotosfera), la rete cromosferica con una plage luminosa (bassa cromosfera), le fibrille orientate dal campo magnetico, la plage e un filamento scuro (media e alta cromosfera). Il peso di ciascuna è quello delle quote raccolte dal filtro, indicato dalle tre barrette in basso. Quando nella banda entra molta luce fotosferica il contrasto delle strutture cromosferiche diminuisce: la luce della fotosfera "lava via" i dettagli, come descritto nel paragrafo 7.4.

## Il modello fisico

Il modello è qualitativo ma non arbitrario. Se la densità del plasma diminuisce in modo esponenziale con la quota, con altezza di scala $H$, la profondità ottica a una data lunghezza d'onda vale circa

$$\tau_\nu(h) \approx \frac{\kappa_{riga}}{\kappa_{cont}} \, e^{-h/H}$$

dove il continuo raggiunge $\tau = 1$ alla base della fotosfera ($h = 0$). Ponendo $\tau_\nu = \mu$ si ottiene la quota di formazione

$$h \approx H \ln\frac{\kappa_{riga}}{\kappa_{cont}} + H \ln\frac{1}{\mu}$$

Il primo termine spiega perché la quota dipende dal logaritmo dell'opacità: al centro di Hα la riga è circa un milione di volte più opaca del continuo, eppure la quota sale "solo" di circa 2.500 km. Il secondo termine è la relazione di Eddington–Barbier dell'Approfondimento 7.4: avvicinandosi al bordo del disco ($\mu \to 0$) la linea di vista è obliqua e la luce emerge da strati più alti. L'animazione usa un'unica altezza di scala $H = 180$ km.

Le quote al centro di ciascuna riga, al centro del disco, sono quelle della Figura 7.1. Per Hα le ali vicine (circa 0,3–0,7 Å dal centro) cadono nella fascia "Hα – ali" della figura, tra 800 e 2.200 km, mentre le ali lontane scendono in fotosfera, come descritto nel paragrafo 7.4. Per Mg II k sono state mantenute le quote della figura; si noti che in diversi modelli dell'atmosfera solare il nucleo di Mg II k si forma a quote simili o superiori a quelle del centro di Hα.

I profili delle righe sono forme schematiche ispirate agli atlanti osservativi: per Ca II K e Mg II k è visibile il piccolo picco che risale al centro della riga, segno dell'inversione termica cromosferica. I profili non sono calcolati dalla temperatura con il trasporto radiativo, che in cromosfera richiederebbe un trattamento non-LTE.

## Comandi e parametri personalizzabili

- **Riga spettrale**: Hα (656,3 nm, idrogeno), Ca II K (393,4 nm, calcio ionizzato), Na D₂ (589,0 nm, sodio), Mg II k (279,6 nm, magnesio ionizzato). Mg II k cade nell'ultravioletto, assorbito dall'atmosfera terrestre: si osserva solo da satellite, per esempio con la missione IRIS.
- **Lunghezza d'onda**: distanza $\Delta\lambda$ dal centro della riga, in ångström. Si regola con il cursore sul profilo, con lo slider o con le frecce sinistra e destra della tastiera. Il pulsante *Centro riga* riporta il cursore al centro; il pulsante *Ala* lo sposta in un'ala della riga.
- **Banda del filtro**: larghezza a metà altezza della trasmissione, da 0,1 a 10 Å. Per ogni riga sono disponibili tre valori tipici; per Hα, per esempio, 0,5 Å (doppio etalon), 0,7 Å (filtro amatoriale) e 3 Å (filtro interferenziale largo). La forma della trasmissione imita quella di un filtro a doppio etalon Fabry–Pérot: un picco centrale con ali che si allargano ai lati, per cui anche lunghezze d'onda lontane dal centro contribuiscono un poco all'immagine.
- **Posizione sul disco**: il coseno $\mu$ dell'angolo tra la linea di vista e la verticale locale, da 1 (centro del disco) a 0,2 (vicino al bordo). Accanto è indicata la distanza dal centro in raggi solari, $r/R_\odot = \sqrt{1-\mu^2}$. I pulsanti *Centro del disco* e *Vicino al bordo* impostano 1 e 0,25.
- **Pausa / Riprendi**: ferma e riavvia il moto dei fotoni.

## Contatori

Sotto i pannelli sono riportati:

- la riga e l'elemento che la produce;
- la lunghezza d'onda effettivamente osservata, in nanometri;
- la quota di formazione ($\tau \approx \mu$) per la lunghezza d'onda del cursore;
- la temperatura a quella quota, letta sulla curva della Figura 7.1;
- la regione dell'atmosfera corrispondente;
- l'opacità della riga rispetto al continuo, come ordine di grandezza;
- l'intensità del profilo rispetto al continuo;
- la quota media della luce raccolta da tutta la banda del filtro;
- la frazione della luce raccolta che proviene dalla fotosfera (quote inferiori a 500 km).

## Suggerimenti di utilizzo

Con Hα e il filtro da 0,5 Å, trascinare lentamente il cursore dal centro verso un'ala: la linea di fuga scende dall'alta cromosfera alla fotosfera e, nell'anteprima, le fibrille lasciano il posto alla granulazione. È l'altimetro virtuale descritto nell'Approfondimento 7.4.

Tenendo il cursore al centro della riga, allargare la banda del filtro: la fascia nella colonna si allunga verso il basso, la frazione di luce fotosferica cresce e l'anteprima perde contrasto. Confrontare per Ca II K il filtro da 0,3 Å con quello amatoriale da 2,4 Å.

Con il cursore nel continuo (ala lontana) spostare la posizione verso il bordo: anche il continuo emerge da strati più alti. È l'origine dell'oscuramento al bordo, perché quegli strati sono più freddi.

L'animazione è qualitativa: quote, profili e immagini sono schematici, la cromosfera reale è disomogenea e dinamica, e strutture diverse (fibrille, spicole, plage) hanno quote di formazione diverse anche nella stessa riga.
`;
