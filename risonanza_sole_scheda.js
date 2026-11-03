SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.

# Risonanza acustica e modi di oscillazione del Sole

## Che cosa mostra l'animazione

L'animazione accompagna la sezione "Dal caos alla risonanza" dell'Approfondimento 10.1 e mostra come i colpi casuali dei granuli, che riempiono il Sole di un groviglio di onde, si traducano in poche frequenze di oscillazione ben precise: i modi di oscillazione del Sole.

**In alto, la sezione del Sole**, con la stessa velocità del suono e gli stessi colori dello Script 10.1. I granuli colpiscono la superficie in punti e istanti casuali (il punto arancione). Da ogni colpo partono onde in tutte le direzioni: scendono, si curvano perché la velocità del suono cresce con la profondità, tornano in superficie e vi rimbalzano. Il colore indica fino a dove scende ciascuna onda: blu per quelle che arrivano vicino al centro, rosa per quelle che restano vicino alla superficie. Le onde si sovrappongono e in poco tempo l'interno è un groviglio senza un ordine apparente.

**In basso, lo spettro del moto della superficie.** È il risultato dell'analisi di Fourier del moto della superficie misurato con la luce di tutto il disco, cioè osservando il Sole come una stella, come fanno la rete BiSON o gli strumenti GOLF e VIRGO a bordo di SOHO (paragrafo 10.3). L'altezza della curva indica quanta energia di oscillazione c'è a ciascuna frequenza. Lo spettro viene ricalcolato continuamente, man mano che la registrazione si allunga.

La curva tratteggiata è la forma dell'energia fornita dai colpi dei granuli: è larga, centrata attorno a 3 mHz, e non ha picchi. La zona grigia a destra è oltre la frequenza di taglio acustica (circa 5,3 mHz): lì le onde non vengono più respinte dalla superficie, sfuggono nell'atmosfera e non possono risuonare (paragrafo 10.2).

## Che cosa osservare

I valori citati in questa sezione sono quelli del Sole, cioè con raggio e temperatura pari a 1. Spostando i cursori cambiano: i valori aggiornati di $\Delta\nu$ e del periodo tipico sono riportati sotto lo spettro (vedi "Cambiare la stella").

1. **Le prime ore.** Lo spettro è fatto di poche gobbe larghe attorno a 3 mHz, cioè a periodi di circa 5 minuti. Non si distingue nessuna nota.
2. **Dopo alcuni giri.** Un giro completo di un'onda, dalla superficie al centro e ritorno, dura circa 2 ore. Dopo alcuni giri le onde che tornano in superficie fuori fase con sé stesse si sono cancellate, e restano solo quelle che tornano in fase: nello spettro emergono picchi stretti, a distanza regolare.
3. **La spaziatura.** I picchi dello stesso tipo si ripetono ogni 135 μHz circa (indicato con $\Delta\nu$). Tra due di essi cade un picco di un modo di tipo diverso, per cui nello spettro si vede un picco circa ogni 68 μHz. Alcuni picchi sono in realtà coppie di modi vicinissimi, a circa 9 μHz l'uno dall'altro: sul grafico principale questa distanza è più piccola di un pixel, per questo una delle coppie è mostrata nel riquadro di ingrandimento.
4. **Il martello e la campana.** I picchi non hanno la forma della curva tratteggiata: i colpi decidono quanta energia arriva nella zona dei 3 mHz, ma le frequenze delle note sono decise dal Sole. È la frase dell'Approfondimento 10.1: i granuli fanno da martello, ma la nota la decide la campana.
5. **Il riquadro di ingrandimento.** Mostra la coppia formata da un modo di grado 2 e uno di grado 0, attorno a 3,16 mHz; le linee tratteggiate indicano le loro frequenze. Nelle prime ore si vede un'unica gobba; dopo circa un giorno e mezzo di osservazione la gobba si separa in due picchi. Nel riquadro è riportata l'ampiezza invece della potenza, ed è applicata una leggera media su pochi μHz, come si fa con i dati reali: così si vede anche il picco più debole.
6. **La durata della registrazione.** Due note vicine si distinguono solo se la registrazione dura più dell'inverso della loro distanza in frequenza. Il riquadro "Risoluzione 1/T" riporta questo limite. È il motivo per cui servono osservazioni lunghe e senza interruzioni: il Polo Sud, la rete GONG, i satelliti SOHO e SDO (paragrafo 10.3).
7. **Fino a quando osservare.** Oltre le 100 ore circa lo spettro non migliora più: i picchi hanno raggiunto la loro larghezza naturale, che dipende da quanto vive ciascun modo, e non si stringono più. Nei dati reali è proprio dalla larghezza dei picchi, circa 1 μHz, che si ricava la durata dei modi: alcuni giorni. Anche le altezze dei picchi non si stabilizzano allungando la registrazione: nei dati reali si fa la media di molte registrazioni.

## Cambiare la stella

Due cursori permettono di cambiare il **raggio** della stella e la **temperatura del gas**, da 0,8 a 1,3 volte i valori del Sole. La temperatura cambia nella stessa proporzione in tutti gli strati. A ogni modifica la registrazione riparte da zero, perché le note sono cambiate e la registrazione precedente non vale più: bisogna attendere che i picchi riemergano. Il pulsante "Torna al Sole" ripristina i valori reali.

### Che cosa succede cambiando il raggio

Si immagini di ingrandire il Sole lasciando invariate la massa e la temperatura del gas. Cambiano due cose, in misura diversa.

**1. Le note scendono, in proporzione al raggio.** La frequenza di una nota dipende dal tempo che l'onda impiega a compiere il proprio giro, dalla superficie al centro e ritorno. In una stella più grande la strada è più lunga, mentre la velocità del suono non cambia, perché la temperatura è la stessa. Il giro dura di più e tutte le note scendono. Con un raggio di 1,3 volte quello del Sole il giro passa da circa 2 ore a circa 2,7 ore, e tutte le frequenze si riducono di 1,3 volte. Si riduce nella stessa proporzione anche la distanza tra due note successive dello stesso tipo, la spaziatura $\Delta\nu$: da 135 a circa 104 μHz. Una stella più grande suona più grave, con note più fitte.

**2. La zona dei "5 minuti" scende molto di più.** La zona in cui i granuli forniscono più energia (la curva tratteggiata) e la frequenza di taglio (la banda grigia) non dipendono dal tempo del giro, ma dalla gravità in superficie. A parità di massa la gravità diminuisce come il quadrato del raggio: con un raggio di 1,3 volte è circa 1,7 volte più debole. Gli strati superficiali sono più "molli" e le oscillazioni più lente. La zona di energia si sposta da 3,1 a circa 1,8 mHz e il periodo tipico passa da circa 5,4 a circa 9 minuti.

**3. Il risultato: la stella "suona" note diverse.** La zona di energia si sposta più delle note, quindi i colpi dei granuli fanno vibrare un altro gruppo di modi. Nel Sole i modi più forti sono quelli con circa 21 nodi lungo il raggio. In una stella di raggio 1,3 sono quelli con circa 16, in una di raggio 0,8 quelli con circa 27. Sotto la curva tratteggiata della stella grande ci sono quindi meno picchi, quella della stella piccola ne contiene di più.

### Come leggere il grafico

- **La scala delle frequenze si adatta da sola.** Così la zona di energia e la frequenza di taglio restano sempre nella stessa posizione sullo schermo. Per questo, a occhio, sembra che si spostino solo i picchi. Conviene leggere i numeri sull'asse, non le posizioni.
- **Nella stella grande i picchi sembrano più distanziati, ma in realtà sono più vicini.** La scala dell'asse si è compressa più della spaziatura tra i picchi. Il valore vero è quello di $\Delta\nu$ sotto lo spettro: 104 μHz contro i 135 del Sole.
- **Le tacche grigie sull'asse** indicano dove si trovano le note di grado 0 del Sole reale. Nella stella grande i picchi cadono a sinistra delle tacche, cioè a frequenze più basse; nella stella piccola a destra.
- **Il riquadro di ingrandimento** segue la coppia di note vicinissime più vicina al centro della zona di energia. Nella stella grande le due note sono più vicine (circa 7 μHz contro 9) e servono circa 40 ore di osservazione per separarle, contro le circa 31 del Sole. Nella stella piccola (circa 11 μHz) ne bastano circa 25.
- **La larghezza dei picchi non cambia** in μHz, perché la durata dei modi è la stessa. Rispetto alla spaziatura, quindi, i picchi della stella grande appaiono relativamente più larghi.

### Valori di riferimento, a temperatura invariata

- **Raggio 0,8**: giro dell'onda ≈ 1,6 h; $\Delta\nu$ ≈ 169 μHz; periodo tipico ≈ 3,4 min; frequenza di taglio ≈ 8,3 mHz; coppia nel riquadro ≈ 11 μHz.
- **Sole**: giro dell'onda ≈ 2,05 h; $\Delta\nu$ = 135 μHz; periodo tipico ≈ 5,4 min; frequenza di taglio ≈ 5,3 mHz; coppia nel riquadro ≈ 9 μHz.
- **Raggio 1,3**: giro dell'onda ≈ 2,7 h; $\Delta\nu$ ≈ 104 μHz; periodo tipico ≈ 9,1 min; frequenza di taglio ≈ 3,1 mHz; coppia nel riquadro ≈ 7 μHz.

### E la temperatura?

Il cursore della temperatura agisce sulla velocità del suono, che cresce come la radice quadrata della temperatura. Un gas più caldo del 30% trasmette il suono circa il 14% più in fretta, e tutte le note salgono di circa il 14%. Effetto più debole rispetto al raggio: con il raggio aumentato del 30% le note scendono di circa il 23%.

**Una semplificazione importante.** In una stella vera raggio e temperatura non sono indipendenti: a parità di massa, una stella più grande ha un interno più freddo, e la spaziatura $\Delta\nu$ diminuisce ancora più rapidamente, come la radice quadrata della densità media. I due cursori separati sono un esperimento "cosa succederebbe se", utile per isolare l'effetto di ciascun fattore. La relazione tra $\Delta\nu$ e densità media è quella con cui l'asterosismologia studia le stelle osservate dai telescopi Kepler e TESS (Approfondimento 10.1).

## Comandi

- **Pausa / Avvia**: ferma e riavvia l'animazione.
- **Ricomincia**: azzera la registrazione e lo spettro.
- **Velocità**: da mezz'ora a 6 ore di Sole per ogni secondo di animazione. A velocità bassa si seguono meglio le onde nella sezione; a velocità alta lo spettro si definisce prima.
- **Raggio** e **Temperatura del gas**: cambiano la stella (vedi sopra).
- **Torna al Sole**: ripristina il raggio e la temperatura del Sole.

Sotto lo spettro sono riportati il tempo di osservazione, la risoluzione in frequenza 1/T, il numero di colpi dei granuli registrati, la spaziatura $\Delta\nu$ e il periodo tipico delle oscillazioni.

## Il modello e le sue semplificazioni

**Le onde nella sezione** sono calcolate come nello Script 10.1: i percorsi seguono la legge della rifrazione con un profilo approssimato della velocità del suono del Modello Solare Standard, e la riflessione in superficie è semplificata. Per non affollare il disegno è mostrato solo un colpo ogni tanto, e ogni colpo lancia otto percorsi per lato, scelti per raggiungere profondità diverse.

**Lo spettro** è calcolato con un modello dei modi di oscillazione. Ogni modo è un oscillatore con una propria frequenza e un piccolo smorzamento, e riceve una spinta a ogni colpo di granulo: un colpo ogni 45 secondi, in un punto a caso della superficie. La spinta è proporzionale alla forma del modo nel punto colpito e all'energia che i colpi forniscono a quella frequenza (la curva tratteggiata). Il moto della superficie è la somma di tutti i modi, ed è campionato ogni 45 secondi, come fa lo strumento HMI di SDO.

Sono inclusi i modi di grado da 0 a 3, quelli che restano visibili osservando il Sole come una stella: i modi di grado più alto dividono la superficie in tante zone che salgono e scendono, e nella luce di tutto il disco si cancellano. Le frequenze seguono la relazione approssimata $\nu \approx \Delta\nu\,(n + \ell/2 + \varepsilon)$, con $\Delta\nu \approx 135$ μHz, più una piccola correzione che separa i modi di grado 0 e 2. Sono vicine a quelle misurate: per esempio il modo di grado 0 con $n = 21$ cade a circa 3,03 mHz.

La sezione e lo spettro descrivono lo stesso fenomeno in due modi diversi: le onde che viaggiano e si sovrappongono, e i modi che sopravvivono alla sovrapposizione. Lo spettro non è calcolato a partire dalle onde disegnate.

Altre semplificazioni:

- **Il tempo è compresso.** Un modo reale vive alcuni giorni e i suoi picchi sono larghi circa 1 μHz; nell'animazione i modi vivono circa un giorno, così lo spettro si definisce in poche decine di secondi.
- **Prima che la registrazione inizi**, il modello fa vibrare il Sole per qualche ora: anche il Sole reale vibra già quando si comincia a osservarlo.
- **L'altezza dei singoli picchi cambia** da una prova all'altra, perché i colpi sono casuali; lo stesso accade nei dati reali, dove serve una media su molti mesi per ottenere altezze stabili.
- **La forma della curva tratteggiata è schematica.** Nella realtà la zona dei 3 mHz è favorita sia dalla durata dei colpi dei granuli sia dal modo in cui i modi si smorzano.
- **La rotazione e il campo magnetico**, che spostano leggermente le frequenze, non sono rappresentati.

## Suggerimenti di utilizzo

Lasciare l'animazione alla velocità di 1 ora al secondo e osservare lo spettro nei primi 10 secondi: le gobbe larghe si spezzano progressivamente in picchi sempre più stretti. Confrontare i picchi con la curva tratteggiata: i picchi non seguono il profilo della curva, ma cadono a frequenze fisse, distanziate in modo regolare.

Premere "Ricomincia" più volte: le altezze dei picchi cambiano ogni volta, ma le loro posizioni restano le stesse. Le note sono una proprietà del Sole, non dei colpi.

Con la velocità a 6 ore al secondo, portare il raggio a 1,3: dopo una decina di secondi i picchi riemergono più fitti e a frequenze più basse, a sinistra delle tacche grigie del Sole reale. Poi riportare il raggio a 1 e alzare la temperatura a 1,3: le note salgono, ma meno di quanto scendevano con il raggio, perché contano come la radice quadrata della temperatura.

Portare la velocità a 6 ore al secondo e seguire il riquadro di ingrandimento: la gobba unica si separa in due picchi quando il tempo di osservazione supera un giorno e mezzo circa, cioè quando la risoluzione 1/T scende sotto i 9 μHz. Oltre le 100 ore circa non serve aspettare: lo spettro non cambia più nella sostanza.
`;
