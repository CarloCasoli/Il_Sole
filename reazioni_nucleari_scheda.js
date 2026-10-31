SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.

# Le reazioni nucleari

## Che cosa mostra l'animazione

L'animazione accompagna gli Approfondimenti 4.1 e 4.2 e segue il percorso dell'energia nel nucleo del Sole: dall'incontro di due nuclei che si respingono, alle reazioni che trasformano quattro protoni in un nucleo di elio, fino al bilancio dell'energia liberata. È divisa in quattro fogli, selezionabili con le linguette in alto.

*1 – Barriera e tunnel.* Il grafico riprende la figura del picco di Gamow dell'Approfondimento 4.2: la distribuzione di Maxwell–Boltzmann (in blu), la probabilità di attraversare la barriera per effetto tunnel (in rosso) e il loro prodotto, il picco di Gamow (in arancione). A differenza della figura, qui si può variare la temperatura. Il grafico usa una scala fissa e l'area del picco è proporzionale al numero di reazioni: alzando la temperatura il picco non si sposta soltanto verso energie maggiori, ma cresce, mentre il tratteggio grigio resta fermo sul picco al centro del Sole (15,7 milioni di kelvin) come termine di confronto. Si possono confrontare tre coppie di nuclei: p + p, p + $^{12}$C e p + $^{14}$N, il passo più lento del ciclo CNO. Con una carica maggiore la barriera è più alta e la dipendenza dalla temperatura diventa molto più ripida: portando la temperatura a 20 milioni di kelvin le reazioni p + p aumentano di circa $2{,}4$ volte, quelle p + $^{14}$N di quasi cento volte.

*2 – Ciclo P-P.* Le reazioni del ciclo protone–protone sono mostrate una alla volta, con la conservazione della carica, del numero di nucleoni e del numero leptonico. Lo schema a destra indica la reazione in corso; i passi 1–3 avvengono due volte, perché servono due nuclei di $^{3}$He. In basso, delle barre verticali riportano il tempo medio di attesa di ciascuna reazione nel nucleo solare e compaiono man mano che si procede: circa $10^{10}$ anni per p + p, circa un secondo per d + p, circa $10^{5}$ anni per $^{3}$He + $^{3}$He. È evidente che la prima reazione è il collo di bottiglia di tutto il ciclo. Come approfondimento si possono mostrare anche i rami ppII e ppIII.

*3 – Ciclo CNO.* La ruota mostra le sei reazioni del ciclo CNO, in cui carbonio, azoto e ossigeno fanno da catalizzatori: il $^{12}$C che entra nel ciclo ne esce intatto, mentre quattro protoni diventano un nucleo di elio. Anche qui le barre riportano il tempo medio di attesa di ogni reazione al centro del Sole, dai due minuti del decadimento del $^{15}$O ai circa $3 \cdot 10^{8}$ anni della cattura p + $^{14}$N, il passo più lento. Il grafico a destra confronta l'energia prodotta per chilogrammo dai due cicli in funzione della temperatura: al centro del Sole prevale il ciclo P-P, mentre sopra i 17 milioni di kelvin circa prevale il ciclo CNO, come avviene nelle stelle più massicce (Approfondimento 6.1).

*4 – Bilancio energetico.* Una bilancia confronta la massa di quattro protoni con quella di un nucleo di elio: la differenza, circa lo $0{,}7\%$, si trasforma in energia secondo la relazione $Q = \Delta m \, c^{2}$. Il conto si può fare con le masse nucleari o con quelle atomiche e un testo spiega perché i due modi danno lo stesso risultato, 26,73 MeV, se si tiene conto degli elettroni. Il totale è identico per i due cicli, ma cambiano le reazioni in cui l'energia viene liberata e la quota portata via dai neutrini, che escono subito dal Sole senza scaldarlo: circa il $2\%$ nel ciclo P-P e circa il $6\%$ nel ciclo CNO. Un'ultima animazione mostra la diversa sorte dei neutrini, che attraversano il Sole in pochi secondi, e dei fotoni, la cui energia impiega centinaia di migliaia di anni per lasciare la zona radiativa.

Le curve blu e rossa del primo foglio sono disegnate ciascuna con una propria scala, per mostrarne la forma: la probabilità di effetto tunnel, per esempio, al picco di Gamow vale circa $10^{-4}$ per la coppia p + p e circa $10^{-18}$ per la coppia p + $^{14}$N. I tempi di attesa e le curve di produzione dell'energia valgono per le condizioni del centro del Sole, dove il ciclo CNO pesa di più: integrato su tutto il nucleo, il ciclo CNO fornisce circa l'$1\%$ dell'energia del Sole.

## Comandi e parametri personalizzabili

- **Linguette 1–4**: selezionano il foglio.

- **Pausa / Avvia** e **Velocità**: valgono per tutti i fogli; la velocità va da $\times 0{,}25$ a $\times 3$ (valore iniziale $\times 1$). **Ricomincia** riporta all'inizio il foglio aperto.

- **Coppia** (foglio 1): sceglie i due nuclei che si incontrano, p + p, p + $^{12}$C oppure p + $^{14}$N.

- **Temperatura** (fogli 1 e 3): da 8 a 35 milioni di kelvin nel primo foglio, da 8 a 30 nel terzo; il pulsante **Centro del Sole** riporta il valore a 15,7 milioni di kelvin.

- **Reazione precedente / Reazione successiva** (fogli 2 e 3): passano da una reazione all'altra anche con l'animazione in pausa. Nel foglio 2 si può anche fare clic su un riquadro dello schema.

- **Mostra i rami ppII e ppIII** (foglio 2): aggiunge allo schema i due rami secondari del ciclo P-P, con le reazioni del berillio, del litio e del boro.

- **Scala dei tempi lineare / logaritmica** (fogli 2 e 3): in scala lineare si percepiscono le proporzioni reali, ma le barre più piccole non sono visibili; in scala logaritmica si vedono tutte.

- **Masse nucleari / atomiche** e **Ciclo P-P / Ciclo CNO** (foglio 4): scelgono il tipo di masse usato nel conto e il ciclo di cui mostrare la ripartizione dell'energia.

## Grafici e indicatori

Nel primo foglio, in alto a destra del grafico, è indicato di quante volte cambia il numero di reazioni rispetto al centro del Sole; quando il picco diventa troppo alto esce dal grafico e compare un avviso. Sotto il grafico sono riportati i valori numerici per la coppia e la temperatura scelte: energia termica tipica $kT$, altezza della barriera e suo rapporto con $kT$, energia di Gamow $E_G$, posizione $E_0$ e larghezza del picco, spessore della barriera da attraversare, probabilità di effetto tunnel, sensibilità alla temperatura (il ritmo delle reazioni varia come $T^{\nu}$) e variazione del ritmo per un aumento della temperatura del $10\%$.

Nel terzo foglio i valori sotto la ruota indicano l'energia prodotta per chilogrammo dai due cicli, la quota del ciclo CNO, l'esponente $\nu$ di ciascun ciclo (circa 4 per il ciclo P-P e circa 20 per il ciclo CNO al centro del Sole) e la temperatura alla quale le due curve si incrociano.

Nel quarto foglio la ripartizione dell'energia è divisa in due righe: sopra l'energia liberata da ogni fase del ciclo, sotto, in giallo, la parte portata via dai neutrini, allineata con la fase in cui nascono. In fondo al foglio sono riportati alcuni numeri globali del Sole: i nuclei di elio prodotti al secondo, l'idrogeno trasformato e la massa convertita in energia ogni secondo, il numero di neutrini solari che attraversano ogni centimetro quadrato della Terra.

## Suggerimenti di utilizzo

Nel primo foglio conviene partire dal centro del Sole con la coppia p + p e alzare lentamente la temperatura, osservando il picco arancione che cresce rispetto al tratteggio grigio; ripetendo la prova con la coppia p + $^{14}$N si vede quanto più ripida sia la crescita, e si capisce perché il ciclo CNO domina nelle stelle più calde. Nei fogli 2 e 3 è utile mettere in pausa e avanzare con *Reazione successiva*, confrontando le barre dei tempi prima in scala lineare e poi in scala logaritmica. Nel quarto foglio, passando dal ciclo P-P al ciclo CNO, si vede che il totale non cambia mentre la riga dei neutrini sì. Il viaggio dei fotoni prosegue nell'animazione *Modello 2D del moto dei fotoni nel Nucleo e in Zona Radiativa*.

`;  // ← Ultima riga: non modificare.
