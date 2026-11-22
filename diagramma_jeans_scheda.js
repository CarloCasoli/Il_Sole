SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo riferito all'Approfondimento 3.3 del libro (capitolo3.tex).

# Diagramma di Jeans (T, n) interattivo

## Che cosa mostra l'animazione

L'animazione rappresenta il **diagramma di stato termodinamico del mezzo interstellare** nel piano logaritmico temperatura–densità ($T$, $n$), lo stesso riportato nell'Approfondimento 3.3 del libro. Ogni retta diagonale individua, per una data massa $M$, la soglia critica oltre la quale una nube di gas non può più restare in equilibrio idrostatico ed è destinata a collassare gravitazionalmente: la **Massa di Jeans**,

$$M_J \propto T^{3/2} \cdot \rho^{-1/2}$$

A differenza della figura statica del libro, qui la soglia non è fissa: scegliendo la massa della nube con lo slider, la retta corrispondente si ridisegna in tempo reale, permettendo di vedere concretamente come la soglia critica si sposti al variare di $M$.

## Elementi della scena

- **Retta arancione (soglia corrente)**: la soglia di Jeans calcolata per la massa impostata con lo slider.

- **Rette grigie tratteggiate**: le quattro soglie di riferimento per 1, 10, 100 e 1000 $M_\odot$, identiche a quelle del diagramma del libro.

- **Regioni colorate di sfondo**: le zone tipiche del mezzo interstellare (nuclei densi freddi, nubi molecolari giganti, nubi diffuse HI, regioni HII, mezzo inter-nube rovente, resti di supernova), per inquadrare dove si collocano fisicamente le condizioni esplorate.

- **Freccia rossa tratteggiata**: il percorso evolutivo tipico di una nube che si raffredda e si comprime, dalle condizioni diffuse verso il collasso.

- **Punto colorato (trascinabile)**: rappresenta una nube ipotetica con una certa temperatura $T$ e densità $n$. Due linee guida tratteggiate collegano il punto ai due assi, dove compaiono i valori numerici correnti di $T$ e $n$.

## Comandi e parametri personalizzabili

- **Massa della nube**: slider da $0{,}1$ a $10\,000\ M_\odot$. Sposta la retta di soglia corrente (arancione) senza modificare le quattro rette di riferimento.

- **Punto sul grafico**: trascinabile liberamente con il mouse o il dito. Il colore cambia in tempo reale:
  - **verde = STABILE**, se il punto è sotto la retta di soglia (la pressione termica sostiene la nube);
  - **rosso = INSTABILE**, se il punto è sopra la retta (la gravità vince e la nube collassa).

- **Reimposta punto**: riporta il punto alla posizione iniziale ($T \approx 20\,\text{K}$, $n \approx 3000\ \text{cm}^{-3}$, tipica di un nucleo pre-stellare).

## Suggerimenti di utilizzo

Per capire il ruolo della massa, conviene fissare il punto su una condizione fisica realistica (ad esempio una nube molecolare gigante, $T\approx 15\ \text{K}$, $n\approx 300\ \text{cm}^{-3}$) e poi far scorrere lo slider della massa: si osserva come, aumentando $M$, la retta di soglia scenda sotto il punto facendolo passare da stabile a instabile, mostrando perché le nubi più massicce collassano più facilmente a parità di temperatura e densità.
`;  // ← Ultima riga: non modificare.
