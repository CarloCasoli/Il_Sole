SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dello Script 3.1 del libro (capitolo3.tex).

# Traccia di pre-sequenza principale del Sole sul diagramma H-R

## Che cosa mostra l'animazione

L'animazione fa scorrere un punto lungo la traccia evolutiva pre-sequenza della protostella solare sul diagramma di Hertzsprung-Russell (log $T_{\text{eff}}$ – log $L$), attraverso i punti A→F descritti nel Capitolo 3:

- **A→B**: collasso dinamico quasi isotermo del nucleo prestellare (Classe 0), con il raggiungimento del primo nucleo idrostatico in B (minimo di luminosità);
- **B→C**: dissociazione collisionale dell'idrogeno molecolare, secondo collasso dinamico, shock di accrescimento e nascita della protostella compatta (transizione Classe 0→I);
- **C→D**: contrazione termodinamica (Teorema del Viriale) fino a quando la protostella diventa interamente convettiva e si posiziona sulla traccia di Hayashi (Classe I→II, T Tauri);
- **D→E**: prosecuzione sulla traccia di Hayashi, innesco della combustione del deuterio;
- **E→F**: distacco dalla traccia di Hayashi e risalita lungo la traccia di Henyey, flash del $^{12}\text{C}$, innesco stabile del ciclo p-p e raggiungimento della ZAMS in F.

Il tempo trascorso dall'inizio del collasso è rappresentato su una scala *logaritmica*, da 1 anno a circa $7{,}5 \cdot 10^7$ anni (l'età del Sole al raggiungimento della ZAMS, come indicato nel capitolo). Questa scelta permette di apprezzare visivamente quanto siano diseguali le durate delle diverse fasi: il tratto B→C, per esempio, dura appena una decina di giorni, mentre la discesa lungo la traccia di Hayashi (C→D→E) richiede decine di milioni di anni. Muovendo lo slider del tempo a velocità costante in scala logaritmica, il tratto B→C viene percorso in un istante quasi impercettibile rispetto al resto del cammino.

## Comandi e parametri personalizzabili

- **Avvia / Pausa**: avvia o sospende lo scorrimento automatico del punto lungo la traccia.

- **Azzera**: riporta la simulazione al punto A.

- **Velocità simulazione**: moltiplicatore della velocità di avanzamento (da $\times 0{,}2$ a $\times 4$; valore iniziale $\times 1$). Il percorso completo A→F dura circa 22 secondi a velocità $\times 1$.

- **Tempo trascorso (scala log)**: cursore manuale per posizionare il punto in un istante qualsiasi tra 1 anno e $7{,}5 \cdot 10^7$ anni; utile per esplorare liberamente la traccia senza attendere l'animazione.

- **Vai al punto**: sei pulsanti (A-F) per saltare direttamente a ciascuno dei punti chiave descritti nel capitolo.

## Contatori

Il pannello mostra in tempo reale: il punto attuale e la classe evolutiva YSO (Classe 0, I, II o ZAMS), la temperatura effettiva $T_{\text{eff}}$, la luminosità $L/L_\odot$, il raggio $R/R_\odot$ (ricavato dalla legge di Stefan-Boltzmann, $L = 4\pi R^2 \sigma T_{\text{eff}}^4$) e il tempo trascorso dall'inizio del collasso.

## Nota sui valori utilizzati

Le durate riportate per il punto B ($\tau_{\text{dyn}} \approx 10^4$ anni, nell'intervallo $10^2$–$10^5$ anni indicato nel testo), per il tratto B→C (≈10 giorni), per il tratto D→E ($\approx 10^6$ anni) e il tempo totale al punto F ($\approx 7{,}5 \cdot 10^7$ anni) sono quelle riportate nel Capitolo 3.

I valori di $T_{\text{eff}}$ e $L$ nei punti intermedi A, B, C, D ed E **non sono invece numeri tratti dal testo**: il capitolo descrive solo l'andamento qualitativo della traccia (discesa quasi verticale A→B, forte risalita B→C, discesa sulla traccia di Hayashi C→D→E, risalita lungo la traccia di Henyey E→F) e rimanda alla figura statica del capitolo per la forma reale della traccia. I valori usati qui sono stati scelti in modo plausibile per rispettare questo andamento qualitativo.

Il punto F corrisponde invece ai parametri reali del Sole odierno, riportati nella tabella dei parametri solari del capitolo: $T_{\text{eff}} = 5772\ \text{K}$, $L = L_\odot$.

La linea tratteggiata azzurra è la **Zero Age Main Sequence (ZAMS)**, disegnata in modo permanente sul diagramma come riferimento: è il luogo dei punti in cui stelle di massa diversa, terminata la contrazione pre-sequenza, iniziano la fusione stabile dell'idrogeno. Anche in questo caso solo il punto a $1\ M_\odot$ (che coincide con il punto F) corrisponde ai valori reali del Sole; gli altri punti della linea sono indicativi e servono solo a dare un'idea dell'andamento generale della sequenza principale per masse diverse.

`;  // ← Ultima riga: non modificare.
