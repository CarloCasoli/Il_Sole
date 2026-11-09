SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.

# Il ciclo di Dungey

## Che cosa mostra l'animazione

L'animazione accompagna l'Approfondimento 11.1 (La fisica della riconnessione magnetica) e mostra come il vento solare scambia energia con la magnetosfera terrestre. Il Sole è a sinistra, fuori dall'inquadratura; la coda magnetica si allunga verso destra. Tutte le distanze sono in raggi terrestri (R⊕, 6371 km) e la Terra è disegnata in scala.

**Le superfici.** L'onda d'urto (arancione) è il punto in cui il vento, supersonico, rallenta di colpo. La magnetopausa (viola) è il confine oltre il quale domina il campo terrestre. Nella vista 3D è disegnata solo la metà verso l'alba, per non coprire le linee.

**Le linee di campo.** In azzurro le linee **chiuse** (due piedi sulla Terra), in verde le linee **aperte** (un piede sulla Terra e l'altro nel vento solare: formano i lobi della coda), in giallo le linee **del vento**, che non toccano la Terra. La linea **bianca** è quella che seguiamo; la sua gemella dell'altro emisfero è verde chiaro. I piccoli coni indicano il verso del campo.

**Il riquadro del polo** mostra il polo Nord visto dall'alto, con il Sole in alto (ore 12) e la mezzanotte in basso (ore 24). Il cerchio tratteggiato è il confine della calotta polare, cioè la zona da cui partono le linee aperte; attorno c'è l'ovale aurorale. Il punto bianco è il piede della linea seguita.

**L'indicatore del flusso aperto** dice quanto flusso magnetico è immagazzinato nei lobi della coda, in gigaweber (GWb).

**Il vettore del campo del vento** (frecce in basso a sinistra, davanti all'onda d'urto) mostra il campo che arriva dal Sole scomposto in due parti: in grigio la parte lungo la spirale di Parker, in giallo la parte Nord–Sud, Bz. In bianco la loro somma (vedi più sotto).

**Il cartello in alto** dice se la "porta" della magnetosfera è aperta (Bz verso Sud) o chiusa (Bz verso Nord).

**Le fasi.** Si scelgono il verso del campo del vento (*Bz sud* o *Bz nord*) e poi si avanza con il pulsante *Avanti*. Con *Bz sud* le fasi sono otto, più la sequenza *Nel tempo* (pulsante a parte); con *Bz nord* due (le linee del vento che scivolano via, la coda che si scarica lentamente), più l'approfondimento *Sopra la cuspide*. *Tutto il ciclo* le fa scorrere da sole.

Le viste: **3D** (si ruota con il dito o con il mouse) e **Sezione** (il piano mezzogiorno–mezzanotte visto di fianco, come nei disegni classici del ciclo). In entrambe si può ingrandire e spostare la scena.

## Quale parte del campo del vento conta

Il campo trasportato dal vento solare ha tre componenti. Si usano gli assi centrati sulla Terra: x verso il Sole, y verso il tramonto, z verso Nord.

- **Bx e By** stanno nel piano dell'eclittica e seguono la spirale di Parker (a circa 45° dalla direzione del Sole, alla distanza della Terra). Il loro **segno è deciso dalla gonna**: sopra la gonna il campo esce dal Sole lungo la spirale, sotto vi rientra (settori, Script della corrente eliosferica). Bx praticamente non agisce sulla magnetosfera; By agisce poco: è il "campo guida" del caso ortogonale (Approfondimento 11.1), che inclina la riconnessione e rende le aurore diverse fra i due poli.
- **Bz** è la componente Nord–Sud. **Non dipende dal settore della gonna**: nasce dalle onde e dalle irregolarità del vento, dalle zone compresse (CIR) e soprattutto dalla struttura a elica delle CME. È la componente che "lavora": verso Sud apre la magnetosfera, verso Nord la chiude.

Per questo nell'animazione le linee gialle del vento sono disegnate verticali: mostrano solo la componente che conta, Bz.

## Le due direzioni di Bz

Sul lato giorno il campo terrestre, all'equatore, punta verso Nord.

**Bz sud (antiparallelo).** Il campo del vento è opposto a quello terrestre. Nel punto in cui i due si toccano, davanti alla Terra, il campo si annulla (punto X) e le linee si ricollegano: la magnetosfera si "apre". Comincia il ciclo descritto da James Dungey nel 1961.

**Bz nord (parallelo).** I due campi sono concordi e si respingono, come due calamite accostate per lo stesso polo. Le linee del vento arrivano una dopo l'altra, si piegano attorno alla magnetosfera senza toccarla, scivolano sui fianchi e se ne vanno, mentre ne arrivano altre. Davanti al naso passano più fitte: lì il campo si intensifica e la pressione magnetica $B^2/2\mu_0$ cresce (zona viola). Il plasma viene spremuto via lungo i fianchi: i satelliti misurano davvero questo strato, detto *strato di svuotamento del plasma* (plasma depletion layer), soprattutto quando Bz punta a Nord. Non entra energia: niente substorm.

La magnetosfera **non arretra** per effetto di Bz verso Nord: la sua grandezza dipende dalla pressione del vento (densità e velocità). Anzi, con Bz verso Sud la riconnessione "erode" il lato giorno e la magnetopausa si avvicina di circa 1 R⊕; con Bz verso Nord resta un po' più lontana (è quanto prevede anche il modello di Shue). La magnetosfera viene spinta indietro solo quando arriva un vento più denso o più veloce, per esempio il fronte di una CME, con qualunque Bz.

**Nella coda**, senza riconnessione sul lato giorno, non arriva flusso nuovo: quello che c'era si richiude lentamente, nel giro di ore. Le linee dei lobi diminuiscono e il campo cala, la coda si sgonfia, la calotta polare si restringe; la plasma sheet si ispessisce e si riempie di plasma più freddo e denso, che entra dai fianchi e dalle cuspidi. A volte, dopo ore di Bz verso Nord, compare un arco aurorale che attraversa la calotta polare ("aurora theta").

**Per approfondire: la riconnessione dei lobi.** Anche con Bz verso Nord la "porta" non è chiusa del tutto. Sopra ciascuna cuspide, un po' verso la notte, il campo del lobo punta verso la Terra, cioè verso Sud, ed è quindi opposto al campo del vento. Lì avviene una riconnessione debole (pulsante *Sopra la cuspide*): la linea del vento si scambia con una linea del lobo, il flusso aperto non cambia, sopra il polo il plasma si muove al contrario del solito (verso il Sole) e si accende una piccola macchia aurorale molto vicina al polo, sul lato giorno. Più raramente la riconnessione avviene in entrambi gli emisferi sulla stessa linea: il tratto centrale della linea del vento resta allora agganciato alla Terra come linea chiusa del lato giorno. Questo processo non è descritto nel libro.

## Il ciclo con Bz sud, fase per fase

1. Il vento porta una sua linea verso la Terra; intanto le linee chiuse tornano verso il lato giorno.
2. Le due linee si affacciano come due U con le basi di verso opposto. Nello strato fra le due il campo cambia verso in poco spazio: per la legge di Ampère $\nabla \times \vec B = \mu_0 \vec J$ scorre una corrente intensa.
3. Il campo si annulla nel punto X e le linee si ricollegano: nascono due linee aperte piegate a gomito. La tensione magnetica, proporzionale a $B^2/(\mu_0 R_c)$ con $R_c$ raggio di curvatura, le fa scattare come una fionda. I getti di plasma corrono verso Nord e verso Sud lungo la magnetopausa. Il plasma del vento (puntini arancioni) scivola lungo le nuove linee aperte fino alle cuspidi: gli elettroni colpiscono l'alta atmosfera vicino al polo, sul lato giorno, e accendono l'aurora diurna.
4. Il vento trascina la linea sopra il polo; il piede attraversa la calotta polare.
5. La linea si distende nel lobo nord, la gemella nel lobo sud. Il flusso aperto cresce e la plasma sheet si assottiglia. I lobi sono quasi vuoti: ciò che si muove è soprattutto la linea stessa. Un po' di plasma del vento entra comunque lungo queste linee vicino alla magnetopausa (il "mantello", pochi puntini arancioni) e viene portato verso la plasma sheet.
6. A circa 25 R⊕ le linee dei due lobi, di verso opposto, si ricollegano (linea X vicina alla Terra, modello NENL). La parte esterna si stacca: è il plasmoide.
7. La nuova linea chiusa scatta verso la Terra (dipolarizzazione); il getto viene frenato a circa 10 R⊕ e la corrente devia verso la ionosfera notturna. Gli elettroni accelerati corrono lungo la linea chiusa verso entrambi i poli (puntini verdi) e, quando arrivano, l'ovale aurorale notturno si accende (breakup del substorm).
8. Le linee chiuse tornano sul lato giorno scorrendo attorno alla Terra sui due fianchi, del tramonto e dell'alba. Non gira una linea rigida: si muove un intero nastro di linee, che cambiano forma mentre passano. La telecamera sale sopra il lato notte per mostrarlo; le frecce azzurre indicano il flusso sul piano dell'equatore.

Le fasi 6 e 7 sono quelle che, viste da terra, diventano un substorm.

## Nel tempo: la coda si carica, poi si scarica

Le otto fasi seguono il viaggio di **una sola linea**. Ma finché Bz resta verso Sud la riconnessione sul lato giorno è **continua**: avviene lungo una linea X che attraversa tutto il lato giorno, spesso a impulsi (eventi di trasferimento di flusso, circa ogni 8 minuti). Il pulsante *Nel tempo* mostra che cosa succede nell'arco di un paio d'ore.

- **Fase di crescita (30–60 minuti).** Ogni lampo diurno apre una linea che va ad aggiungersi ai lobi. Il flusso aperto cresce: le linee nei lobi si infittiscono e si ispessiscono, il loro colore passa dal verde all'azzurro e poi al fucsia (scala nel riquadro), la coda si gonfia e il campo nei lobi aumenta. Il valore mostrato è stimato dividendo il flusso per la sezione di un lobo, $B \approx \Phi / (\pi R^2/2)$ con $R$ raggio della coda: circa 20 nT a riposo, fino a 40 nT a fine crescita. Intanto la plasma sheet si assottiglia e la calotta polare si allarga.
- **Inizio del substorm.** La coda non regge più: si forma la linea X vicina alla Terra e la riconnessione notturna parte di colpo.
- **Espansione (circa 30 minuti).** La coda si scarica molto più in fretta di quanto si fosse caricata: plasmoide, dipolarizzazione, elettroni verso i poli, ovale aurorale acceso. Le linee dei lobi diminuiscono e il campo cala.
- **Recupero**, e poi si ricomincia: con Bz verso Sud per ore i substorm si ripetono circa ogni 2–4 ore. Il grafico nel riquadro disegna il tipico "dente di sega" del flusso nei lobi.

## La fisica e le formule

**Pressione del vento.** La pressione dinamica del vento solare è
$$P_{dyn} = m_p\, n\, v^2 \approx 1{,}67\cdot 10^{-6}\; n\, v^2 \;\text{nPa}$$
con $n$ in particelle per cm³ e $v$ in km/s (si considerano solo i protoni). Con $n = 5$ e $v = 450$ km/s si ottiene circa 1,7 nPa.

**Distanza della magnetopausa.** La forma della magnetopausa viene dal modello empirico di Shue et al. (1998), ricavato da migliaia di attraversamenti misurati dai satelliti:
$$r(\theta) = r_0 \left(\frac{2}{1+\cos\theta}\right)^{\alpha}$$
$$r_0 = \left[10{,}22 + 1{,}29\,\tanh\big(0{,}184\,(B_z + 8{,}14)\big)\right] P_{dyn}^{-1/6{,}6}$$
$$\alpha = (0{,}58 - 0{,}007\,B_z)\,\big(1 + 0{,}024\,\ln P_{dyn}\big)$$
con $r_0$ in R⊕, $B_z$ in nT e $P_{dyn}$ in nPa. $r_0$ è la distanza del "naso" della magnetopausa e $\alpha$ dice quanto si apre la coda. Con il vento tranquillo dell'animazione $r_0 \approx 10$ R⊕. Se scende sotto 6,6 R⊕ i satelliti geostazionari si trovano fuori dalla magnetosfera, nel vento solare: è successo durante la tempesta del 10–11 maggio 2024, quando la magnetopausa fu spinta fino a circa 5,1–5,2 R⊕ (misure THEMIS, Fu et al. 2025). L'onda d'urto è disegnata a circa 1,3 volte $r_0$, un valore tipico.

**Velocità della riconnessione.** Il vento che si muove con velocità $v$ e trasporta un campo $B_s$ diretto verso Sud genera un campo elettrico $E = v\,B_s$. Il flusso che si apre ogni secondo sul lato giorno è circa
$$\Phi_D \approx v\, B_s\, L$$
dove $L$ è la lunghezza efficace della linea X (qui 4 R⊕). Si misura in volt (Wb/s); con 450 km/s e 5 nT si ottengono circa 50 kV, in accordo con i 30–50 kV tipici osservati.

**Flusso aperto e calotta polare.** Il flusso aperto nei lobi è di solito circa 0,4 GWb e varia fra 0,2 e 1 GWb (Milan, 2017). Più flusso aperto significa una calotta polare più grande: il riquadro calcola la latitudine del suo confine da
$$\Phi = 2\pi R_\oplus^2\, B_{polo}\,(1 - \sin\lambda)$$
con $B_{polo} \approx 6\cdot 10^{-5}$ T. Con 0,4 GWb il confine è a circa 76°; con 1 GWb scende verso 69°, e l'ovale aurorale scende con lui. È per questo che nelle grandi tempeste l'aurora si vede a latitudini insolite.

**Il substorm.** La linea sull'indicatore (0,9 GWb) è solo indicativa: nella realtà **non esiste una soglia fissa** per l'inizio del substorm, e durante la scarica la coda perde flusso al ritmo medio di 90–120 kV.

## Che cosa osservare

1. In fase 2 guarda i coni: sul lato giorno il campo terrestre punta verso l'alto, quello del vento verso il basso. È questo che rende possibile la riconnessione.
2. In fase 3 la linea bianca si spezza in due linee aperte. Prima era chiusa (due piedi sulla Terra); dopo ha un piede sulla Terra e l'altro nel vento.
3. Nel riquadro del polo segui il piede: attraversa la calotta dal lato giorno al lato notte (fasi 4–5) e torna sul lato giorno passando per il fianco del tramonto, a latitudine più bassa (fase 8). Sono le due celle di convezione, che i radar SuperDARN misurano davvero.
4. Durante le fasi 3–5 l'indicatore del flusso sale e il confine della calotta si allarga; durante le fasi 6–7 scende.
5. Passa a *Bz nord* e confronta: le frecce davanti alla Terra hanno lo stesso verso, le linee del vento passano a distanza dalla magnetopausa (zona viola) e scivolano via sui fianchi; nella fase 2 la coda si scarica lentamente e l'ovale resta spento.
6. Nelle fasi 3 e 7 (Bz sud) la telecamera si avvicina alla Terra: guarda l'ovale aurorale che si accende, prima sul lato giorno vicino alle cuspidi, poi, nel breakup, sul lato notte.
7. Con *Bz nord* premi *Sopra la cuspide*: sopra il polo i versi dei due campi sono opposti, e lì avviene l'unica riconnessione possibile, debole.

## I limiti del modello

L'animazione è un **modello didattico**, non una simulazione magnetoidrodinamica.

- Le linee di campo sono le curve di livello di una funzione costruita a mano: dipolo terrestre + campo uniforme del vento (il modello "nel vuoto" usato dallo stesso Dungey nel 1961) + un termine che riproduce i lobi e la plasma sheet della coda, adattato alla magnetopausa di Shue. Le linee X, i lobi e le linee aperte nascono da questa funzione; le fasi invece sono guidate dal codice.
- Le linee sono disegnate solo nel piano mezzogiorno–mezzanotte (più alcune copie di contorno nella vista 3D). Il nastro di linee della fase 8 è schematico. I puntini lungo le linee indicano la direzione del moto delle particelle, non il loro numero né la loro velocità reale.
- La coda è mostrata fino a circa 85 R⊕; nella realtà si estende per centinaia di raggi terrestri.
- Il vento è sempre lento e tranquillo (450 km/s, 5 particelle/cm³, Bz = ±5 nT): il vento veloce dei buchi coronali e le CME non sono ancora rappresentati.
- L'asse magnetico è dritto: l'inclinazione stagionale del dipolo e la componente $B_y$ del campo del vento (il "campo guida" dell'Approfondimento 11.1) non sono ancora rappresentate.
- Le latitudini nel riquadro del polo sono adattate ai valori osservati (confine della calotta a circa 77° a mezzogiorno e 71° a mezzanotte).
- I tempi delle fasi sono accelerati. Nella realtà il piede di una linea impiega alcune ore ad attraversare la calotta e un ciclo completo di Dungey dura spesso 8 ore o più.

## Per approfondire

- J. W. Dungey, *Interplanetary magnetic field and the auroral zones*, Physical Review Letters 6, 47 (1961).
- J.-H. Shue et al., *Magnetopause location under extreme solar wind conditions*, Journal of Geophysical Research 103, 17691 (1998).
- S. E. Milan et al., *Overview of solar wind–magnetosphere–ionosphere–atmosphere coupling and the generation of magnetospheric currents*, Space Science Reviews 206, 547 (2017).
`;
