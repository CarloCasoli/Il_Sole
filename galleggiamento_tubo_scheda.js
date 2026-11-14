SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dello Script 5.2 del libro (capitolo5.tex).

# Galleggiamento del tubo di flusso del campo magnetico

## Che cosa mostra l'animazione

L'animazione mostra perché un tubo di flusso magnetico, formato alla base della zona convettiva, è più leggero del plasma che lo circonda e risale verso la superficie (galleggiamento magnetico). Segue passo per passo la catena fisica descritta nell'approfondimento 5.2: campo magnetico intenso → pressione magnetica $B^2/(2\mu_0)$ → pressione del gas interna $P_i$ più bassa → densità interna $\rho_i$ più bassa → spinta verso l'alto → risalita ed espansione. Questa catena è riportata sotto l'animazione, con i passaggi della fase in corso evidenziati.

L'animazione è divisa in due fasi, selezionabili con i pulsanti in alto.

Nella fase **1 – Tubo in equilibrio** si osserva la sezione del tubo ferma alla base della zona convettiva. Al bordo del tubo deve valere $P_e = P_i + B^2/(2\mu_0)$: più campo è presente, meno gas serve all'interno per bilanciare la pressione esterna. Poiché la temperatura interna è uguale a quella esterna ($T_i = T_e$), una pressione del gas minore significa una densità minore: il tubo pesa meno del plasma che sposta e la spinta di Archimede supera il peso.

Nella fase **2 – Risalita** il tubo sale dalla base della zona convettiva, a circa 200.000 km di profondità, fino alla fotosfera. Salendo, la pressione esterna diminuisce e il tubo si espande. Il flusso magnetico $\Phi = B \cdot A$ e la massa del tubo si conservano: l'area $A$ cresce e il campo $B$ diminuisce. La spinta netta si indebolisce, ma finché il tubo contiene campo magnetico resta diretta verso l'alto, fino alla superficie.

L'animazione è un modello qualitativo. Il tubo è considerato sottile e in equilibrio termico con l'ambiente; la zona convettiva è descritta come un politropo (con $P \propto \text{profondità}^{2,5}$ e $\rho \propto \text{profondità}^{1,5}$) e la gravità varia come $1/r^2$, così che alla fotosfera è circa la metà che alla base. Nella realtà, alla base della zona convettiva $P_e \approx 6\cdot10^{12}$ Pa e $B \approx 10$ T ($10^5$ G): la pressione magnetica è quindi solo circa 1/150.000 della pressione del gas. Per renderla visibile, senza l'opzione valori reali la pressione magnetica è amplificata di circa $10^4$–$10^5$ volte. Anche i tempi della risalita sono fortemente accelerati e il raggio del tubo non è in scala.

## Elementi della scena

- **Pressioni al bordo del tubo** (barre a sinistra, in % di $P_e$): la pressione esterna $P_e$, la pressione del gas interna $P_i$, la pressione magnetica $P_m$ e la colonna impilata $P_i + P_m$, che arriva sempre al livello tratteggiato di $P_e$.
- **Forze sul tubo** (barre a destra): il peso $\rho_i \cdot g \cdot V$ (in rosso, verso il basso), la spinta di Archimede $\rho_e \cdot g \cdot V$ (in blu, verso l'alto) e la forza netta. Nella fase 1 sono espresse in % della spinta, che resta fissa; nella fase 2 in % del peso alla base.
- **Sezione del tubo** (fase 1): il tubo è visto in sezione, con le linee di campo indicate da ⊙ (uscenti dallo schermo, in numero proporzionale a $B$) e le particelle di gas indicate da punti, sia dentro sia fuori dal tubo. All'esterno il plasma è più denso e compresso verso il basso. Le frecce lungo il bordo mostrano le pressioni: in blu $P_e$, in azzurro $P_i$, in viola $P_m$. Al centro del tubo tre frecce verticali indicano spinta, peso e forza netta; un indicatore confronta la densità del gas fuori ($\rho_e$) e dentro ($\rho_i$) il tubo.
- **Risalita** (fase 2): una colonna che va dalla base della zona convettiva alla fotosfera, con la scala delle profondità in km. Il tubo sale lasciando una scia tratteggiata delle posizioni precedenti e si allarga man mano che sale; le frecce a fianco mostrano peso, spinta e forza netta.
- **Riquadro dei valori** (fase 2): profondità, campo $B$, area $A$, flusso $\Phi = B \cdot A$ (che resta costante), rapporto $\rho_i/\rho_e$, gravità rispetto alla base, peso e spinta netta.
- **Grafici**: nella fase 1 mostrano le pressioni interne e la spinta netta al crescere di $B$; la spinta netta cresce come $B^2$, perché diminuisce il peso. Nella fase 2 mostrano, in scala logaritmica, come durante la risalita $B$ cala, $A$ cresce e $\Phi$ resta costante; il secondo grafico riporta spinta, peso e forza netta in funzione della profondità.

## Comandi e parametri personalizzabili

- **1 Tubo in equilibrio / 2 Risalita**: scelgono la fase da osservare.
- **Campo B**: intensità del campo magnetico nel tubo alla base della zona convettiva. Senza valori reali è espressa come multiplo del valore di riferimento (da ×0 a ×1,43; valore iniziale ×1, a cui corrisponde $P_m \approx 24,5\%$ di $P_e$). Con valori reali è espressa in tesla (da 0 a 14,3 T; valore iniziale 10 T). Con $B = 0$ non c'è pressione magnetica e il tubo resta fermo.
- **Avvia risalita** (solo nella fase 2): fa partire il tubo dalla base della zona convettiva.
- **Pausa / Riprendi**: sospende o riprende l'animazione.
- **Ricomincia**: riporta il tubo alla base della zona convettiva, pronto per una nuova risalita. Lo stesso avviene quando si cambia il campo $B$ o si attivano i valori reali.
- **Velocità**: scala la velocità dell'animazione, da ×0,33 a ×3 (valore iniziale ×1).
- **Valori reali**: usa le proporzioni reali tra pressione magnetica e pressione del gas ($P_m \approx 1/150.000$ di $P_e$). Le differenze tra i valori diventano piccolissime e sono espresse in parti per milione (ppm).

L'animazione si adatta allo schermo: su telefono le barre si dispongono sopra il disegno. Segue inoltre il tema chiaro o scuro del dispositivo.

## Suggerimenti di utilizzo

Conviene partire dalla fase 1 e muovere lentamente il cursore del campo $B$: le linee di campo ⊙ aumentano, le particelle di gas all'interno del tubo diminuiscono e la colonna $P_i + P_m$ resta sempre uguale a $P_e$, mentre la freccia del peso si accorcia e compare la spinta netta. Si può poi passare alla fase 2 e avviare la risalita, osservando nel riquadro dei valori come $B$ diminuisce e $A$ aumenta mentre il loro prodotto $\Phi$ resta costante. Ripetendo la risalita con valori diversi di $B$ si vede che un campo più intenso fa salire il tubo più rapidamente. Infine, attivando i valori reali, si apprezza quanto sia piccola nella realtà la differenza di densità che basta a far risalire il tubo attraverso tutta la zona convettiva.

`;  // ← Ultima riga: non modificare.
