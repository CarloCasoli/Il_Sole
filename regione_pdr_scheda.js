SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo riferito al paragrafo 3.3.5 del libro (capitolo3.tex): Il fronte di fotodissociazione, la schermatura
%%   da polvere, l'auto-schermatura e la regione PDR.

# Fronte di fotodissociazione e regione PDR

## Che cosa mostra l'animazione

L'animazione rappresenta in sezione il bordo di una nube molecolare esposto alla radiazione ultravioletta interstellare, come descritto nel paragrafo 3.3.5. L'asse orizzontale **non è una distanza fisica**, ma la **profondità ottica $A_V$** (l'estinzione dovuta alla polvere), la grandezza che governa davvero quanto il mezzo interno sia protetto dalla radiazione.

Nel pannello superiore, i fotoni UV (particelle arancioni) entrano da sinistra e vengono progressivamente assorbiti man mano che aumenta $A_V$, seguendo la stessa legge di estinzione usata in astrofisica ($I \propto 10^{-0.4 A_V}$): più a destra arrivano sempre meno fotoni. Due **fronti chimici** verticali segnano le transizioni fondamentali:

- **H $\to$ H$_2$**: oltre questo fronte l'idrogeno può restare in forma molecolare invece di essere fotodissociato.
- **C$^+$ $\to$ CO**: più in profondità, perché il monossido di carbonio richiede una schermatura maggiore del semplice H$_2$.

Le particelle **ciano** rappresentano l'**auto-schermatura dell'H$_2$**: un effetto distinto dalla semplice schermatura da polvere, in cui le bande di assorbimento della stessa molecola H$_2$ bloccano selettivamente la radiazione che dissocerebbe altro H$_2$, concentrandosi proprio in prossimità del fronte H$\to$H$_2$ e rendendolo più netto.

Il pannello inferiore può mostrare due grafici alternativi (si passa dall'uno all'altro con il pulsante):

1. **Abbondanze chimiche**: le curve di H, H$_2$, C$^+$ e CO in funzione di $A_V$, allineate verticalmente con i due fronti del pannello superiore.
2. **$A_V$ vs profondità fisica**: mostra come la stessa profondità ottica corrisponda a uno spessore fisico diverso a seconda della densità della nube — più la nube è densa, meno spazio serve per raggiungere la stessa schermatura.

## Elementi della scena

- **Tre zone colorate**: zona esterna (H atomico, C$^+$), zona PDR intermedia (H$_2$ molecolare, C$^+$ ancora presente), zona interna protetta (H$_2$, CO).

- **Particelle arancioni**: fotoni del campo UV generico, assorbiti secondo la legge di estinzione da polvere.

- **Particelle ciano**: auto-schermatura dell'H$_2$, concentrata vicino al proprio fronte.

## Comandi e parametri personalizzabili

- **Intensità campo UV ($G_0$)**: da $0{,}1$ a $10\,000$ (unità del campo di Habing). Aumentandola, entrambi i fronti si spostano più in profondità: serve più schermatura per proteggere le molecole in presenza di un campo di radiazione più intenso (come vicino a stelle O/B).

- **Densità della nube ($n$)**: da $0{,}1$ a $10\,000\ \text{cm}^{-3}$. Influisce solo sul secondo grafico (il legame tra $A_V$ e profondità fisica): a parità di $A_V$, una nube più densa corrisponde a uno spessore fisico minore.

- **Mostra auto-schermatura H$_2$**: attiva o disattiva le particelle ciano che rappresentano questo effetto.

- **Pulsante A_V vs profondità fisica / Abbondanze chimiche**: alterna il contenuto del pannello inferiore.

## Suggerimenti di utilizzo

Per osservare l'effetto del campo UV, conviene portare lo slider $G_0$ al massimo e osservare come i due fronti (e con essi le zone colorate) si spostino verso destra, ingrandendo la zona esterna esposta a scapito della PDR e dell'interno protetto — l'equivalente visivo di una nube vicina a stelle massicce. Il grafico $A_V$ vs profondità fisica, con la densità al minimo, mostra invece quanto spessore servirebbe in una nube molto rarefatta per raggiungere la stessa schermatura di una nube densa.

Il diagramma è **qualitativo**: le curve e le posizioni dei fronti sono scelte per riprodurre correttamente l'ordine fisico degli effetti descritti nel testo, non per fornire valori numerici di una vera rete chimica o di un calcolo di trasporto radiativo.
`;  // ← Ultima riga: non modificare.
