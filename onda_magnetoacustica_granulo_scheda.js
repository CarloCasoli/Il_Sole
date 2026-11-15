SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dello Script del cap. 14 del libro (capitolo14.tex).

# L'onda magnetoacustica del granulo

## Che cosa mostra l'animazione

L'animazione mostra, in tre dimensioni, come il collasso periodico di un granulo fotosferico, alla base di un tubo di flusso magnetico, possa generare un'onda magnetoacustica che risale lungo il tubo fino alle fibrille cromosferiche in cima. La scena riproduce un granulo centrale cilindrico, circondato da un canale di discesa conico (la corona scura attorno al granulo), a sua volta attorniato da quattro granuli vicini più piccoli, disposti in cerchio. Dalla base del tubo si innalza un tronco di cono quasi trasparente che si restringe verso l'alto, fino a un "piede" scuro; da lì il tubo prosegue verticale e in cima si divide in tre fibrille, una centrale e due laterali, che curvano dolcemente di lato.

L'intero fenomeno si ripete in un ciclo continuo di $6$ secondi, in tre fasi concatenate:

- **Collasso del granulo**: il granulo centrale si restringe isotropicamente (si rimpicciolisce in diametro, non in altezza) mentre i quattro granuli vicini crescono e si stringono verso di esso, occupandone lo spazio: è la rappresentazione del canale di discesa del plasma che si strozza. Durante il collasso, piccole frecce scure scorrono verso il basso nel canale, a indicare il flusso di plasma in caduta.
- **Pistone**: quando il granulo è vicino al culmine della contrazione, il "piede" alla base del tubo compie un breve movimento a scatto verso il basso e torna su, come un pistone: è l'impulso meccanico che dà origine all'onda.
- **Onda magnetoacustica**: subito dopo il colpo di pistone, un sottile tubo a zigzag (l'onda) parte dal piede e risale lungo il tratto verticale, allargando la propria oscillazione quadraticamente con l'altezza, finché non raggiunge la base delle fibrille in cima; lì l'onda si dissolve rapidamente.

Lungo le tre fibrille in cima, piccole freccette scure scorrono in continuazione dal tronco verso l'esterno, a rappresentare il flusso di plasma che le percorre indipendentemente dal ciclo dell'onda.

**Il limite del modello.** L'animazione è *qualitativa*: il collasso del granulo, il colpo di pistone e la propagazione dell'onda sono tutti imposti da funzioni geometriche e temporali scelte per illustrare con chiarezza il nesso causale "canale che si restringe → caduta accelerata del plasma → impulso → onda che risale", non per calcolare le reali forze di galleggiamento, la pressione del plasma o la velocità del suono nella fotosfera.

## Comandi e parametri personalizzabili

- **Vista dall'alto / Vista 3D / Vista laterale**: spostano la telecamera in tre posizioni predefinite.
- **Rotazione auto: on/off**: attiva o disattiva una rotazione automatica e continua della vista attorno al punto osservato.
- **Vista**: trascinando con il mouse o con un dito si ruota liberamente la scena; con la rotellina (o con due dita) si avvicina o allontana la vista; con il tasto destro si sposta la vista.

Nel sorgente della pagina si possono modificare, tra gli altri:

- **Durata del ciclo** (il periodo del pistone, $6$ secondi) e **durata del colpo di pistone** ($0{,}5$ secondi).
- **Tempo di risalita dell'onda** lungo il tubo (circa $3{,}2$ secondi) e **durata della dissolvenza finale** dell'onda in cima.
- **Intensità del collasso** del granulo centrale e **scala minima/massima** dei granuli vicini.
- **Ampiezza dell'oscillazione a zigzag** dell'onda, alla base e in cima.
- **Numero e velocità delle freccette di flusso** lungo le fibrille.

## Contatori

L'animazione non ha contatori numerici a schermo.

## Suggerimenti di utilizzo

Conviene seguire un ciclo completo partendo dalla vista laterale, così da vedere con chiarezza, in sequenza, il collasso del granulo, il colpo di pistone alla base del tubo e la salita dell'onda fino alle fibrille. Passando poi alla vista dall'alto si apprezza meglio come i quattro granuli vicini si stringano attorno al granulo centrale durante il collasso.

`;  // ← Ultima riga: non modificare.
