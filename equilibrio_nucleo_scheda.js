SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dello Script 4.2 del libro (capitolo4.tex).

# Il termostato del nucleo del Sole

## Che cosa mostra l'animazione

L'animazione mostra come il Sole mantiene il proprio equilibrio interno tra il *peso* degli strati sovrastanti, la *pressione del gas*, la *pressione di radiazione* e l'*efficienza delle reazioni termonucleari* $\varepsilon$, che dipende fortemente dalla temperatura (catena pp, $\varepsilon \propto \rho T^4$; ciclo CNO, $\varepsilon \propto \rho T^{17}$). Un pulsante altera per un istante l'efficienza delle reazioni e si osserva come il sistema reagisce. Sono disponibili due modelli, selezionabili in alto.

Nel *modello di Kippenhahn–Weigert* (termostato del nucleo) il nucleo e gli strati sopra di esso si muovono insieme: la pressione che il nucleo deve sostenere (peso/area) varia come $1/r^4$, perché la massa sovrastante resta costante ma la gravità diminuisce e l'area cresce. Se le reazioni producono più energia del normale, il nucleo si espande e, per il teorema del viriale, si raffredda: l'efficienza scende sotto il valore di equilibrio e il nucleo poi si ricontrae lentamente fino a tornare allo stato iniziale. Una diminuzione di efficienza produce l'effetto opposto. È il meccanismo che rende il Sole stabile.

Nel *modello di Schwarzschild–Härm* (bolla a pressione costante, caso analogo all'instabilità dei gusci sottili, 1965) gli strati sopra la bolla non si spostano e il peso resta costante: la bolla scaldata si espande restando calda, senza alcun termostato, e torna all'equilibrio solo perché la radiazione scambia calore con il plasma circostante.

A sinistra sono disegnati, in un'unica scala e su una griglia di riferimento, i vettori delle pressioni (peso, pressione del gas, pressione di radiazione, loro somma e risultante) e gli scarti di temperatura e densità. A destra compare la sezione del nucleo (o della bolla) con gli ioni in moto e i lampi delle reazioni: verdi per la catena pp, viola per il ciclo CNO.

Poiché nel Sole reale le variazioni sono di frazioni di millesimo e si sviluppano su tempi lunghissimi, l'animazione *non è in scala*: le variazioni sono fortemente amplificate, i tempi accelerati, e la pressione di radiazione è ingrandita (nel nucleo vale circa $1/1500$ della pressione del gas). L'obiettivo è mostrare qualitativamente il meccanismo di autoregolazione.

## Comandi e parametri personalizzabili

- **Modello**: seleziona il nucleo intero (termostato) o la bolla isolata; il pulsante attivo è evidenziato e la simulazione riparte dall'equilibrio.

- **Aumenta efficienza / Diminuisci efficienza**: moltiplica (o divide) di colpo l'efficienza delle reazioni; l'impulso si smorza poi gradualmente. Clic ripetuti a breve distanza aggiungono un gradino all'impulso, fino a un massimo di tre.

- **Pausa / Avvia** e **Azzera**: sospendono la simulazione o la riportano all'equilibrio cancellando i grafici.

- **Intensità**: fattore dell'impulso al primo gradino (da $\times 1{,}15$ a $\times 2{,}50$; valore iniziale $\times 2{,}05$). Il secondo e il terzo gradino aggiungono ciascuno metà della variazione iniziale.

- **Velocità**: rapidità di scorrimento della simulazione (da $\times 0{,}33$ a $\times 8$; valore iniziale $\times 1$). Non cambia la fisica, solo il ritmo con cui la si osserva.

- **P rad reale (1/1500)**: mostra la pressione di radiazione nella sua proporzione reale, praticamente invisibile, invece che ingrandita al 25% della pressione totale.

## Grafici e indicatori

I vettori sono espressi in percentuale del peso di equilibrio; le etichette riportano i valori istantanei, mentre gli scarti di temperatura e densità sono amplificati 5 volte. Sopra la sezione sono indicati lo scarto del raggio (disegnato amplificato 8 volte), l'efficienza del plasma e, durante un impulso, il fattore imposto e il gradino raggiunto. In basso, il grafico di sinistra riporta nel tempo gli scarti di raggio, temperatura, pressione di radiazione e peso/area (scala fissa $\pm 40\%$); quello di destra l'efficienza totale delle reazioni in scala logaritmica (da $\times 0{,}25$ a $\times 4$). Le fasce colorate indicano gli impulsi: rosse per gli aumenti, azzurre per le diminuzioni.

## Suggerimenti di utilizzo

Per cogliere il termostato conviene dare un singolo *Aumenta efficienza* nel modello del nucleo e seguire il grafico di $\varepsilon$: il salto iniziale è seguito da un calo sotto l'equilibrio e da una lenta risalita. Ripetendo la prova nel modello della bolla si vede che il calo non compare: senza la variazione del peso/area non c'è autoregolazione. Con *Velocità* bassa si seguono meglio le singole fasi.

`;  // ← Ultima riga: non modificare.
