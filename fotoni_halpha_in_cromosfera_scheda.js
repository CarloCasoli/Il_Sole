SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.

# Dove va la luce di Hα

## Che cosa mostra l'animazione

L'animazione mostra perché, al centro della riga Hα, arriva all'osservatore solo una piccola parte della luce che la fotosfera manda verso l'alto, e dove va a finire il resto. Accompagna il paragrafo 7.4 e l'Approfondimento 7.3.

Le due colonne rappresentano la stessa atmosfera: in basso la fotosfera, sopra la cromosfera, in cima lo spazio e l'osservatore. Dalla fotosfera partono continuamente fotoni verso l'alto, da punti distribuiti su tutta la sua superficie. I fotoni sono disegnati in giallo. Solo quelli del centro della riga che riescono a uscire dalla cromosfera diventano rossi: sono la luce di Hα che un filtro a banda stretta isola e che forma l'immagine della cromosfera. I fotoni delle ali restano gialli anche dopo l'uscita: arrivano all'osservatore in gran numero, ma provengono direttamente dalla fotosfera ed è proprio la luce che il filtro deve scartare. Se il filtro è troppo largo ne lascia passare una parte, e l'immagine della cromosfera perde contrasto (animazione 7.1).

- **A sinistra, le ali di Hα e le altre radiazioni.** Per queste lunghezze d'onda la cromosfera è trasparente: i fotoni la attraversano in linea retta ed escono tutti.
- **A destra, il centro di Hα.** Per questa lunghezza d'onda la cromosfera è opaca. Ogni fotone viene assorbito da un atomo e riemesso in una direzione a caso, poi di nuovo assorbito e riemesso, molte volte (gli anelli colorati). I passi sono corti in basso, dove il gas è più denso, e si allungano salendo. Il viaggio finisce in uno di due modi: il fotone arriva abbastanza in alto da non incontrare più atomi ed esce verso l'osservatore, oppure ricade nella fotosfera, dove viene spento (il lampo grigio con la croce).

Sotto ogni colonna, i contatori riportano quanti fotoni sono partiti, quanti sono usciti verso l'osservatore e quanti sono ricaduti e si sono spenti nella fotosfera. Dopo qualche decina di fotoni si vede che nelle ali esce il 100%, mentre al centro della riga esce circa il 20%: il confronto tra le due colonne è la riga scura.

## Il ragionamento

1. **La densità non respinge il fotone.** Ogni volta che un atomo riemette il fotone, la direzione è a caso: in su o in giù con la stessa probabilità. Dove il gas è più denso il fotone viene riassorbito prima, cioè fa passi più corti, ma ci va.
2. **La fotosfera è una trappola, non un muro.** Nella fotosfera il gas è denso e gli urti tra particelle sono frequenti. Un atomo che ha assorbito il fotone, prima di riemetterlo, viene urtato da un elettrone e gli cede l'energia: il fotone si spegne e la sua energia diventa calore del gas. Nella cromosfera, invece, gli urti sono così rari che questo non succede quasi mai (Approfondimento 7.1).
3. **Perché esce solo circa il 20%.** Il fotone parte dal basso, vicino alla trappola e lontano dall'uscita. Muovendosi a caso, finisce più spesso nella fotosfera che oltre la sommità della cromosfera.
4. **Che cosa vediamo.** Il fondo della riga Hα è fatto dei fotoni che sono riusciti a uscire, riemessi per l'ultima volta dagli strati alti della cromosfera. Non è luce della fotosfera passata direttamente (Approfondimento 7.3).

## Comandi e parametri personalizzabili

- **Pausa / Riprendi**: ferma e riavvia l'animazione.
- **Azzera i contatori**: ricomincia il conteggio dei fotoni.
- **Velocità**: da ×0,25 a ×4. Alle velocità basse si seguono bene i singoli rimbalzi; a quelle alte i contatori si stabilizzano più in fretta.
- **Fotoni in volo**: quanti fotoni sono contemporaneamente in viaggio in ciascuna colonna, da 1 a 12.

## Il modello e le sue semplificazioni

L'animazione è qualitativa. I passi del fotone crescono con la quota perché la densità diminuisce; nella fotosfera ogni assorbimento ha una piccola probabilità di spegnere il fotone, che rappresenta gli urti frequenti di quello strato. Il numero di rimbalzi è enormemente più piccolo di quello reale. I parametri del cammino casuale sono scelti in modo che al centro della riga esca circa il 20% dei fotoni, come il fondo della riga Hα osservata: l'animazione mostra il meccanismo, non calcola quel valore. Nella realtà, inoltre, a ogni riemissione il fotone può cambiare leggermente lunghezza d'onda e uscire dalle ali della riga; questo effetto non è rappresentato.

## Suggerimenti di utilizzo

Impostare un solo fotone in volo e la velocità ×0,5, e seguire il fotone del centro di Hα: si vede che scende in fotosfera spesso quanto sale, e che quando entra nella fotosfera finisce presto per spegnersi. Poi portare la velocità a ×4 e i fotoni a 12, e attendere che i contatori si stabilizzino: a sinistra 100% usciti, a destra circa 20% usciti e 80% spenti.
`;
