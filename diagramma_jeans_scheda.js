SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo riferito all'Approfondimento 3.3 del libro (capitolo3.tex).

# Diagramma di Jeans (T, n) interattivo

## Che cosa mostra l'animazione

L'animazione rappresenta il **diagramma di stato termodinamico del mezzo interstellare** nel piano logaritmico temperatura–densità ($T$, $n$), lo stesso riportato nell'Approfondimento 3.3 del libro. Ogni retta diagonale individua, per una data massa $M$, la soglia critica oltre la quale una nube di gas non può più restare in equilibrio idrostatico ed è destinata a collassare gravitazionalmente: la **Massa di Jeans**,

$$M_J \propto T^{3/2} \cdot \rho^{-1/2}$$

A differenza della figura statica del libro, qui la soglia non è fissa: scegliendo la massa della nube con lo slider, la retta corrispondente si ridisegna in tempo reale. Un secondo pannello, sotto il diagramma, mostra inoltre come la nube si frammenti in porzioni via via più piccole quando il collasso procede: i due pannelli sono collegati dalla stessa fisica e si aggiornano insieme.

## Elementi della scena

- **Retta arancione (soglia corrente)**: la soglia di Jeans calcolata per la massa impostata con lo slider.

- **Rette grigie tratteggiate**: le quattro soglie di riferimento per 1, 10, 100 e 1000 $M_\odot$, identiche a quelle del diagramma del libro.

- **Regioni colorate di sfondo**: le zone tipiche del mezzo interstellare (nuclei densi freddi, nubi molecolari giganti, nubi diffuse HI, regioni HII, mezzo inter-nube rovente, resti di supernova), per inquadrare dove si collocano fisicamente le condizioni esplorate.

- **Percorso rosso tratteggiato (evoluzione di collasso)**: non una semplice freccia, ma la forma caratteristica (non un percorso fisso, solo indicativo) del collasso reale di una nube, in due tratti: un primo tratto quasi verticale, la **fase isoterma**, in cui la nube è ancora otticamente sottile e si raffredda irraggiando liberamente — la temperatura resta quasi costante mentre la densità cresce di molti ordini di grandezza; segue un tratto inclinato verso l'alto, la **fase adiabatica**, in cui la nube è diventata otticamente spessa e il calore resta intrappolato ($T \sim \rho^{2/3}$).

- **Punto colorato (trascinabile)**: rappresenta una nube ipotetica con una certa temperatura $T$ e densità $n$. Due linee guida tratteggiate collegano il punto ai due assi, dove compaiono i valori numerici correnti di $T$ e $n$. Può essere spostato a mano oppure fatto avanzare automaticamente con il pulsante "Evolvi".

- **Pannello inferiore — frammentazione della nube**: appena la massa di Jeans locale, calcolata nel punto $(T,n)$ in cui si trova la nube, scende sotto la massa totale della nube, questa può frammentarsi in porzioni via via più piccole, ciascuna indipendentemente instabile. Il pannello mostra questa suddivisione gerarchica in tempo reale, con i frammenti disegnati come cerchi: il colore si fa più intenso, dall'arancio al rosso, man mano che la generazione di frammentazione è più profonda. In alto a destra nel pannello compare un riepilogo numerico (massa di Jeans locale, numero approssimativo di frammenti, generazione raggiunta).

## Comandi e parametri personalizzabili

- **Massa della nube**: slider da $0{,}1$ a $10\,000\ M_\odot$. Sposta la retta di soglia corrente (arancione) senza modificare le quattro rette di riferimento, e riparte da zero la frammentazione nel pannello inferiore.

- **Punto sul grafico**: trascinabile liberamente con il mouse o il dito. Il colore cambia in tempo reale:
  - **verde = STABILE**, se il punto è sotto la retta di soglia (la pressione termica sostiene la nube);
  - **rosso = INSTABILE**, se il punto è sopra la retta (la gravità vince e la nube collassa).

- **Velocità evoluzione**: slider da 2 a 20 secondi. Imposta la durata dell'animazione avviata dal pulsante "Evolvi".

- **▶ Evolvi (raffreddamento)**: fa avanzare automaticamente il punto lungo il percorso di collasso (fase isoterma seguita da fase adiabatica), a partire da dove si trova in quel momento — non da una posizione fissa — cosicché l'evoluzione si possa osservare da qualunque condizione di partenza si sia scelta.

- **Reimposta punto**: riporta il punto alla posizione iniziale ($T \approx 20\,\text{K}$, $n \approx 3000\ \text{cm}^{-3}$, tipica di un nucleo pre-stellare) e azzera la frammentazione.

- **Frammenti nel pannello inferiore**: passa il mouse (o il dito) su un frammento per evidenziarne, nel grafico superiore, la curva di soglia di Jeans calcolata sulla sua massa specifica (tratteggio ciano), insieme a un'etichetta con la massa del frammento e l'indicazione se quella porzione, da sola, è stabile o collassa.

## Suggerimenti di utilizzo

Per capire il ruolo della massa, conviene fissare il punto su una condizione fisica realistica (ad esempio una nube molecolare gigante, $T\approx 15\ \text{K}$, $n\approx 300\ \text{cm}^{-3}$) e poi far scorrere lo slider della massa: si osserva come, aumentando $M$, la retta di soglia scenda sotto il punto facendolo passare da stabile a instabile, mostrando perché le nubi più massicce collassano più facilmente a parità di temperatura e densità.

Per vedere insieme collasso e frammentazione, premi **▶ Evolvi** e osserva i due pannelli in parallelo: mentre il punto scende lungo il percorso di collasso nel grafico in alto, nel pannello inferiore la nube si suddivide progressivamente in un numero crescente di porzioni più piccole. Nota che la frammentazione è irreversibile all'interno dello stesso scenario: anche se nella fase adiabatica la massa di Jeans locale torna a salire, i frammenti già separati non si "riuniscono" — la suddivisione riparte da zero solo trascinando di nuovo il punto, premendo di nuovo "Evolvi" da capo, cambiando la massa della nube o premendo "Reimposta punto".
`;  // ← Ultima riga: non modificare.
