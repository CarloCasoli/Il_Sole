SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dell'Approfondimento 2.9 del libro (capitolo2.tex).

# La funzione sorgente negli strati dell'atmosfera del Sole

## Che cosa mostra l'animazione

L'animazione ricostruisce l'esempio numerico dell'Approfondimento 2.9: il viaggio della radiazione attraverso 4 strati ideali dell'atmosfera solare, dal più profondo e denso fino a quello più esterno. Per seguire la contabilità energetica senza le complesse unità di misura della radianza, il libro usa una scala adimensionale relativa da 0 a 150, dove 150 rappresenta il livello di saturazione del continuo in equilibrio termodinamico locale (LTE) alla temperatura di quello strato.

Salgono due fasci paralleli: le **frequenze generiche** (il continuo, cioè il fondo termico a cui il gas è relativamente trasparente) e le **frequenze selettive** (quelle a cui gli atomi di un particolare elemento, a quella precisa temperatura, sono strutturati per agganciare e assorbire). In ogni strato, il saldo finale di ciascun fascio è: (radiazione in arrivo) + (emissione locale) + (assorbimento locale, negativo).

Su ogni strato compaiono anche piccole **freccette**: verdi verso l'alto per l'emissione (guadagno), rosse verso il basso per l'assorbimento (perdita), con lunghezza proporzionale al valore. A destra, un pannello mostra il **profilo spettrale**: una curva che resta piatta a 150 per il continuo, e che si scava progressivamente attorno alla frequenza della riga man mano che l'assorbimento procede — fino a formare, nello strato finale, la riga di assorbimento osservata.

## I quattro strati

- **1. Regione profonda (prigione termica in LTE)**: densità e temperatura altissime. Il gas è in equilibrio termodinamico perfetto: assorbe tutto ma emette altrettanto. Saldo: 150 → 150, sia per il continuo sia per la riga.
- **2. Strato intermedio (transizione verso la trasparenza)**: il gas diventa quasi trasparente alle frequenze generiche (150 → 150), ma alcuni atomi iniziano ad agganciare una frequenza specifica: nasce la prima riga di assorbimento (150 → 100).
- **3. Strato freddo (minimo di temperatura)**: il gas è rarefatto e freddo, non emette quasi nulla. Per il continuo resta trasparente (150 → 150); per la riga selettiva il poco gas rimasto è ancora un filtro fortissimo, e l'intensità crolla al minimo (100 → 50).
- **4. Strato esterno surriscaldato**: paradosso tipico della cromosfera solare — la densità è quasi nulla, ma meccanismi come i campi magnetici fanno risalire la temperatura. Gli atomi rarefatti ma eccitati riemettono proprio sulla frequenza della riga, risollevandone un poco l'intensità (50 → 75).

## Il risultato: perché vediamo le righe spettrali

L'osservatore riceve infine un'intensità di **150** per le frequenze generiche (il continuo, uniforme e brillante) e di **75** per la frequenza selettiva. La differenza tra i due è esattamente la riga di assorbimento osservata nello spettro: l'impronta digitale dell'opacità selettiva degli atomi lungo la linea di vista. La piccola risalita finale (da 50 a 75) racconta inoltre qualcosa in più: quella riga porta con sé l'informazione di uno strato esterno più caldo, capace di riempirla parzialmente con la propria emissione — lo stesso meccanismo che produce i nuclei di emissione osservati al centro di alcune righe cromosferiche (es. il doppietto H e K del Ca II).

## Le equazioni di riferimento

Funzione sorgente:

$$S_\nu = \frac{\eta_\nu}{k_\nu} = \frac{\eta_\nu}{\kappa_\nu \rho}$$

Equazione del trasporto radiativo (in funzione della profondità ottica):

$$\frac{dI_\nu}{d\tau_\nu} = S_\nu - I_\nu$$

Soluzione formale per un mezzo omogeneo di spessore ottico $\tau_\nu$:

$$I_\nu(\tau_\nu) = I_\nu(0)\,e^{-\tau_\nu} + S_\nu\left(1-e^{-\tau_\nu}\right)$$

Quando $\tau_\nu \gg 1$ (mezzo otticamente spesso), il primo termine svanisce e $I_\nu \to S_\nu$: l'intensità "dimentica" da dove è partita e si allinea alla funzione sorgente locale.

## Come usare i comandi

- **Strato successivo / precedente**: avanza o torna indietro di uno strato, mostrando il calcolo del bilancio.
- **Riproduci automaticamente**: avanza da solo ogni 2,4 secondi; premilo di nuovo per mettere in pausa.
- **Ricomincia**: torna all'inizio, prima che la radiazione entri nel primo strato.

## Semplificazioni della simulazione

I valori numerici (0-150) sono quelli dell'esempio didattico del libro, non misure fisiche assolute: servono a illustrare con chiarezza contabile i saldi energetici relativi, non a calcolare una vera intensità specifica. Sono inoltre rappresentate solo due "famiglie" di frequenze (continuo e una riga selettiva), mentre nella realtà ogni frequenza ha il proprio comportamento.

In particolare, il risultato finale dell'esempio (150 contro 75, cioè una riga che residua al 50% del continuo) è una profondità scelta per chiarezza didattica, non calibrata su una riga reale specifica. Per confronto, una riga forte come l'**H-alfa** nello spettro solare quieto ha un'intensità residua al centro di circa il **15-20%** del continuo: molto più profonda di quella mostrata qui. La profondità reale di una riga dipende dalla sua forza (opacità) e dalla struttura di temperatura degli strati in cui si forma, elementi che questa animazione semplifica volutamente a soli 4 strati e 2 famiglie di frequenze.

## Riferimento nel libro

Capitolo 2, §2.4 "Il corpo nero" e Approfondimento 2.9 "Analisi quantitativa della Funzione Sorgente".
`;  // ← Ultima riga: non modificare.
