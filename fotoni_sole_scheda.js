SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dello Script 4.3 del libro (capitolo4.tex).

# Modello 2D del moto dei fotoni nel Nucleo e in Zona Radiativa

## Che cosa mostra l'animazione

L'animazione simula in due dimensioni il viaggio di un fotone dal nucleo alla superficie del Sole. I fotoni nascono al centro e procedono per *cammino casuale* (*random walk*): a ogni urto cambiano direzione in modo casuale e percorrono un tratto brevissimo. Nella zona radiativa (interna, fino a circa $0{,}7\,R_\odot$) il moto è quindi una lenta diffusione a zig-zag. Oltre il confine con la zona convettiva la direzione diventa sostanzialmente stabile, con una lieve deriva angolare, come una bolla di plasma che sale; una volta superata la superficie il fotone prosegue in linea retta fino a una distanza finale e viene tolto dal conteggio dei fotoni attivi, mentre la sua traccia resta disegnata sulla scena. Ogni fotone ha un colore casuale, così da distinguere i singoli percorsi.

Poiché i veri tempi di fuga sono dell'ordine di decine o centinaia di migliaia di anni e i veri passi hanno lunghezza dell'ordine di frazioni di millimetro, l'animazione *non è in scala* gli urti sono enormemente compressi e il tempo simulato è solo un indicatore statistico. L'obiettivo è mostrare qualitativamente perché un fotone impiega così tanto a uscire, pur viaggiando alla velocità della luce.

## Comandi e parametri personalizzabili

- **Avvia / Pausa**: avvia o sospende la simulazione.

- **Azzera scena**: cancella le tracce e i contatori e ridisegna il Sole.

- **Frequenza generazione**: numero di nuovi fotoni emessi dal nucleo al secondo reale (da 0,2 a 20 al secondo; valore iniziale 3).

- **Velocità simulazione**: numero di passi calcolati per ogni fotone a ogni fotogramma (da $\times 1$ a $\times 60$; valore iniziale $\times 8$). Valori alti accelerano l'uscita dei fotoni.

- **Durata tratto (anni simulati)**. intervallo minimo–massimo (1–5000, iniziale 200–1500) da cui è estratto a caso il tempo associato a ogni singolo urto. Influenza *solo* il tempo simulato medio mostrato nelle statistiche, non la geometria del percorso.

- **Lunghezza tratto (pixel)**: intervallo minimo–massimo (0,1–15, iniziale 0,6–2) della lunghezza di ogni passo. Passi più corti richiedono più urti per uscire e rendono il percorso più fitto e lento; passi più lunghi producono uscite più rapide.

- **Velocità zona convettiva**: moltiplicatore (da $\times 2$ a $\times 50$, iniziale $\times 10$) applicato al passo oltre il confine interno della zona convettiva; il passo è comunque limitato a una frazione del raggio per evitare oscillazioni troppo ampie.

- **Fotoni massimi contemporanei**: tetto al numero di fotoni attivi (da 100 a 6000, iniziale 3000), utile per adattare il carico di calcolo al proprio dispositivo.

## Contatori

Il pannello mostra in tempo reale i fotoni attivi, i fotoni usciti, il tempo simulato medio di uscita e la percentuale di passi effettivamente calcolati per fotogramma (*throttling*), che si riduce automaticamente se il dispositivo non regge il carico.

## Suggerimenti di utilizzo

Per osservare bene la diffusione nel nucleo conviene ridurre la *Lunghezza tratto* e usare una bassa *Frequenza di generazione*. Aumentando invece la *Velocità zona convettiva* si evidenzia il contrasto tra la lenta diffusione interna e il trasporto rapido negli strati esterni.

`;  // ← Ultima riga: non modificare.
