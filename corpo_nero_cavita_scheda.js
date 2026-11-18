SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo dell'Approfondimento 2.3 del libro (capitolo2.tex).

# Il corpo nero come cavità

## Che cosa mostra l'animazione

L'animazione mette in scena il modello fisico con cui, nel Capitolo 2 (Approfondimento 2.3, "Il corpo nero"), si introduce il concetto di corpo nero: una cavità chiusa, con pareti tutte alla stessa temperatura T e un piccolo foro verso l'esterno. La radiazione che entra non esce subito: percorre un cammino lungo e tortuoso, venendo continuamente assorbita, riemessa e diffusa dalle pareti. Dopo moltissime interazioni la radiazione perde memoria delle condizioni con cui è entrata (direzione, colore, intensità) e si stabilisce in equilibrio termico con le pareti: lo spettro che esce dal foro è quindi lo spettro di corpo nero alla temperatura T della cavità, descritto dalla legge di Planck.

## Perché il foro deve essere piccolo

Se il foro fosse grande, un fotone potrebbe uscire dopo pochissimi urti, portando ancora con sé "memoria" delle condizioni di ingresso: in questo caso la radiazione uscente non rappresenterebbe fedelmente la temperatura interna della cavità. Un foro piccolo costringe invece la radiazione a subire un numero enorme di urti prima di trovare la via d'uscita, garantendo che quando esce abbia davvero raggiunto l'equilibrio termico con le pareti.

## Le leggi fisiche coinvolte

Legge di Planck:

$$B(\lambda,T) = \frac{2hc^2}{\lambda^5}\cdot\frac{1}{e^{hc/(\lambda kT)}-1}$$

Legge di Wien:

$$\lambda_{max} \approx \frac{2{,}898\times10^6\ \text{nm·K}}{T}$$

Al crescere della temperatura della cavità, il colore di equilibrio verso cui "scivolano" i fotoni dopo molti urti si sposta dal rosso (T basse) al bianco-giallo (T solare, ≈5800 K) fino all'azzurro intenso (T molto alte) — esattamente come nella figura "Legge di Wien: curve di emissione di corpo nero e corrispondente colore delle stelle" del capitolo.

## Come usare i comandi

- **Modalità guidata**: segue un solo fotone con didascalie passo-passo; ideale per capire il meccanismo la prima volta.
- **Modalità libera**: immette molti fotoni insieme per osservare l'effetto statistico e i contatori.
- **Temperatura della cavità**: cambia il colore di equilibrio e la $\lambda_{max}$ calcolata con la legge di Wien.
- **Rugosità delle pareti**: rende il percorso dei fotoni più o meno tortuoso (non cambia la fisica di fondo, solo la messa in scena).
- **Dimensione del foro**: un foro più grande fa uscire i fotoni con meno urti, mostrando perché un foro piccolo è necessario per un corpo nero "fedele".

## Semplificazioni della simulazione

Per chiarezza didattica: il colore di un fotone è una rappresentazione visiva della sua "temperatura equivalente", non una lunghezza d'onda calcolata in modo rigoroso; i tempi e le velocità non sono in scala reale; il numero di urti necessari per termalizzare è volutamente piccolo (decine, non i milioni di interazioni reali) per restare osservabile a occhio. Anche il colore della sezione solida, scelto per essere sempre riconoscibile (rosso-arancio, giallo, azzurro), è una tinta didattica e non il colore fisico esatto del corpo nero a quella temperatura.

## Riferimento nel libro

Capitolo 2, §2.4 "Il corpo nero" e Approfondimento 2.3 "Il corpo nero".
`;  // ← Ultima riga: non modificare.
