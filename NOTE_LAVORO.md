# Note di lavoro — Il Sole: animazioni e libro

> **A cosa serve questo file.** Claude non ricorda le conversazioni precedenti.
> All'inizio di ogni nuova sessione Carlo **allega questo file** alla chat
> (Claude non vede il repository privato CarloCasoli/Il_Sole_archivio).
> Il repository pubblico delle animazioni, CarloCasoli/Il_Sole, Claude lo scarica da solo
> e può leggerlo e modificarlo in locale, ma non può caricarci file: le modifiche le carica Carlo.
> Il libro (.tex/PDF) e i file Overleaf vanno allegati quando servono.
> A fine sessione si aggiorna la sezione **Diario** e, se serve, le tabelle.

Ultimo aggiornamento: 2026-11-08, quasi mezzanotte

---

## 0. L'ambiente che serve per lavorare sulle animazioni

*Scritto l'08/11 sera dalla chat della spirale di Parker (6–7/11), dove tutto ha funzionato. Correzione della sessione dell'08/11 pomeriggio-sera: in quella sessione gli strumenti c'erano tutti (terminale, git, Chromium, Playwright); i problemi dell'animazione CME sono dipesi dalle scelte di Claude, non dall'ambiente (vedi Diario).*

**Che cos'era la chat in cui ha funzionato.** Era una sessione di **Claude Code sul web**: l'indirizzo della sessione è `https://claude.ai/code/session_01KdaH5dwTmHjevf21raHEYQ` (si riconosce da `claude.ai/code/...`). In una sessione così Claude ha a disposizione un **computer Linux nel cloud** tutto suo, con:
- un **terminale** (comandi Bash) e una cartella di lavoro (`/home/claude`);
- **git**, **Node.js 22**, **Python 3.13**;
- **Chromium + Playwright 1.63**: Claude apre davvero le animazioni nel browser, fa screenshot (computer, telefono, tema scuro), misura la fluidità e legge gli errori della console. È così che verifica ogni modifica prima di consegnarla (regola del punto 1);
- uno strumento per **aggiungere il repository** alla sessione (`add_repo`): per CarloCasoli/Il_Sole risponde che il repository pubblico è leggibile senza credenziali;
- un comando per **mandare i file in chat** (Carlo li scarica e li carica su GitHub).

**Come Claude scarica le animazioni (provato):**
```
GIT_LFS_SKIP_SMUDGE=1 git clone --depth 1 https://github.com/carlocasoli/il_sole /home/claude/carlocasoli/il_sole
```
Per aggiornare una copia già scaricata: `git -C /home/claude/carlocasoli/il_sole fetch --depth 20 origin` e poi `git pull`.

**Cosa NON funziona in quell'ambiente (non perderci tempo):**
- `curl` verso `carlocasoli.github.io` → bloccato; leggere il sito pubblicato con WebFetch dà solo un riassunto, non il codice;
- `gh api` sul repository → non funziona (serve l'accesso "push", che non è stato chiesto);
- `pip` / `npm install` → bloccati (la rete per i pacchetti è spenta): si lavora con ciò che è già installato, che basta;
- **caricare su GitHub (push)**: Claude non può. Ogni tanto compare un messaggio automatico "There are uncommitted changes… commit and push": va ignorato; i file li carica Carlo.

**Three.js nelle prove:** il CDN (cdnjs, jsdelivr) è bloccato anche in Claude Code; la libreria r128 si prende da GitHub (sezione 3).

**In una chat normale di claude.ai** (quella con il solo riquadro dei messaggi) Claude **non** ha terminale, né git, né browser: non può scaricare il repository né provare le animazioni. Può solo leggere i file allegati e il sito tramite riassunti. È probabilmente quello che è successo nella chat nuova dell'08/11.

**Come ripartire nel modo giusto:**
1. Aprire la nuova sessione **dallo stesso posto di questa**, cioè da Claude Code sul web (`claude.ai/code`), con l'ambiente cloud. Se non si è sicuri, riaprire questa sessione dall'indirizzo qui sopra: il lavoro continua da qui.
2. Prima domanda a Claude: *"Hai un terminale? Clona il repository carlocasoli/il_sole e dimmi l'ultimo commit."* Se risponde con un codice di commit (es. `5ddb272`) e una data, l'ambiente è quello giusto. Se dice che non può eseguire comandi, è una chat normale: conviene chiuderla e ripartire dal punto 1.
3. Allegare comunque questo file `NOTE_LAVORO.md` (il repository privato Il_Sole_archivio Claude non lo vede).

**Stato del repository all'08/11 sera:** ultimo commit su GitHub `5ddb272` del 07/11 00:25 ("Add link to Parker Spiral in Chapter 11 section"). `spirale_parker.html` e `spirale_parker_scheda.js` su GitHub sono **identici** all'ultima versione consegnata da Claude; l'indice ha la voce della spirale. Una sessione nuova deve comunque **riclonare**: la copia nel computer di una sessione vecchia può essere indietro.

---

## 1. Regole di collaborazione

- **Prima spiegare, poi fare.** Prima di proporre o realizzare una soluzione, Claude spiega cosa comporta e aspetta la decisione di Carlo.
- Lingua: italiano.
- Ogni modifica a un'animazione va verificata aprendola nel browser prima di consegnarla.
- **Giro delle note:** a inizio chat Carlo allega questo file; a fine chat Claude lo aggiorna e lo manda; Carlo lo ricarica su Il_Sole_archivio con lo stesso nome `NOTE_LAVORO.md` (attenzione a "NOTE_LAVORO (1).md").
- Di solito si lavora la sera, anche fino a mezzanotte o all'una.
- Carlo ha condiviso nella sessione del 07/11 la sua storia personale (sezione 8): va tenuta presente con delicatezza.

## 1b. Iniziative in corso (dal salone di astronomia di Cesena, 07/11/2026)

1. **Coelum** (responsabile conosciuta al salone): interessati a sponsorizzare il libro e a un articolo di Carlo per la rivista; valuteranno una **prefazione firmata da un astrofisico solare di Tor Vergata** (Roma). Pacchetto: **cambiato l'08/11** — per la prefazione si manda il libro completo, niente estratto (dettagli in 1e). L'idea precedente era un estratto con i capitoli 1, 4, 5, 9, 13, 14. Richiesta nel testo della mail. Estratto con filigrana "Copia riservata per la valutazione – Coelum"; PDF completo (111 MB) solo via link a chi deve leggerlo tutto (es. prefatore). Idea articolo: dal flare X3,98 del 10/05/2024 (copertina) alla fisica che lo produce, con QR a un'animazione.
2. **Axilone Astronomy** (editore francese, ISBN 979-10-92974; ha pubblicato *Solar Astronomy* di Christian Viladrich, 2021, nato in francese e poi tradotto in inglese; rilegatura a filo refe, carta patinata). Carlo Mollicone ha tradotto in italiano per Axilone un libro di "Cyril" (autore da precisare); ha visto il libro di Carlo e pensa che verrà proposto all'editore. Piano: dopo Coelum, stesso pacchetto in inglese — presentazione inglese (pronta dall'08/11, vedi 1c), premessa, indice, cap. 1 (già tradotto da Carlo; titolo "Light (Radiation) as an Observational Tool"), 4, 5, 13, 14 (interi o in parte: chiedere a Mollicone cosa vuole l'editore), alcune animazioni in inglese (copie `en/` o selettore IT/EN: da decidere). Lettera formale in PDF con le specifiche di stampa (A4, filo refe, patinata opaca 115 g, copertina 300 g: vedi vecchia proposta `presentazione_libro_old.tex` su Overleaf). Con un editore: stampa a suo carico; da guardare nel contratto esclusiva, diritti per lingua, animazioni e foto che restano di Carlo, traduzione.
   - **Decisione 08/11:** se Axilone accetta, stampa **entrambe le edizioni, italiana e inglese** (Axilone pubblica anche in italiano: Mollicone ha tradotto per loro). Quindi: nella lettera proporre "l'opera in italiano e in inglese", non un'edizione inglese accanto a un'italiana autopubblicata; **non pubblicare l'italiano su Lulu/KDP finché Axilone non risponde**; l'ISBN attuale non servirebbe più (Axilone usa i suoi). Prima chiedere a Mollicone come lavora Axilone sulle due lingue.
   - **Domande per Mollicone (08/11):** come lavora Axilone sulle due lingue; impaginano loro (es. InDesign: servirebbero testo, immagini ad alta risoluzione, formule a parte; QR e riquadri da ricostruire) o vogliono un **PDF pronto per la stampa** secondo le loro specifiche (con LaTeX basta cambiare il preambolo: è la strada che dà più controllo); in che formato vogliono i file; chi fa traduzione inglese e revisione del testo; cosa vuole vedere l'editore per la prima valutazione.
   - **Corpo del testo:** i libri Axilone di Carlo sono in corpo piccolo; la Lattanzi sconsiglia nettamente il 10. Valutazione di Claude: il libro è un saggio da leggere di seguito, quindi la leggibilità conta (su A4 a colonna unica il 10 dà righe di oltre 100 caratteri; il Termes è compatto); ma non serve decidere ora, dipende da chi impagina. Alternative al passaggio 10→11: più interlinea, colonna più stretta, carattere con occhio più grande (es. TeX Gyre Pagella), Approfondimenti in corpo minore. Proposta: **pagine di prova da stampare** in più varianti (serve il sorgente di un capitolo).
   - Dove dirlo: nella **lettera personalizzata** (non nella presentazione comune, che dice solo "the original edition is in Italian"); nella mail una riga che rimanda alla lettera.
3. **AstroBOH!** (vedi cose aperte, punto 8).

## 1c. Documento di presentazione del libro (comune per tutti)

- File `presentazione_libro.tex` (pdfLaTeX, su Overleaf; il vecchio rinominato `_old`). 5 pagine: riquadro "L'opera in breve", l'opera, lettura a più livelli, animazioni interattive (QR indice + vetrina: spirale di Parker, stiramento tubo tachocline, struttura fibrille), animazioni da satellite JHelioviewer (regioni attive e flare; NO CME), fotografie, indice dei 14 capitoli con ★ per quelli nell'estratto (riga `\def\capitoliEstratto{...}` da cambiare per destinatario), revisori, pubblico, punti di forza, autore, contatti.
- **Aggiornato l'08/11** (versione consegnata in chat, da caricare su Overleaf):
  - "L'opera": il testo si articola in **quattro parti** (1: luce e osservazione, cap. 1–2; 2: fisica della stella, cap. 3–11; 3: osservazione pro e amatoriale, strumenti, ripresa ed elaborazione, cap. 12–13; 4: analisi fisica delle foto dell'autore, cap. 14). Prima diceva "due parti".
  - Riquadro iniziale: "Fotografie e filmati del Sole originali dell'autore (…), tutti pubblicati su Astrobin e collegati via QR code…".
  - Estratto: `,1,4,5,9,13,14,`.
  - Revisori: Bonafede "capitolo 5; revisione in corso del capitolo 9"; Umbriaco "revisione in corso dei capitoli 12 e 13".
  - "L'autore" riscritta (il riassunto del 07/11 la descriveva già così, ma nel .tex c'era ancora il paragrafo breve): laurea Ancona 1982, telescopio al liceo, simulazione come filo conduttore (Fortran IV e schede perforate, tesi sugli scambiatori, colpo d'ariete in Franco Tosi), G.D (CAD–base dati per ~300 progettisti, poi QA Manager), corsi UniBO e Stellar Evolution 2025–26, sette anni di osservazioni, "cinquant'anni di programmazione: dalle schede perforate alle simulazioni 3D del Sole", conferenze tenute (AAB, Gapers, Planetario di S. Giovanni in Persiceto ott. 2026) e in programma (Specola dic. 2026, AAB). Esclusi di proposito: Politecnico di Torino, voti, Liceo, frattali, linguaggi aziendali (restano per il CV).
- **Versione inglese** `presentazione_libro_en.tex` (08/11): stessa struttura; titolo provvisorio *The Sun — A Journey to Discover the Sun and the Physical Processes That Govern It*; estratto `,1,4,5,13,14,` (Axilone); "Approfondimenti" = *In-depth sections*; riquadro con "The original edition is in Italian"; animazioni "currently in Italian" (nessuna promessa di versioni inglesi); laurea "five-year degree"; Specola spiegata come osservatorio storico UniBO; nomi delle associazioni in italiano. Prodotto anche il PDF (XeLaTeX, TeX Gyre Termes). **Carlo lo fa rileggere a Marco** (inglese da madrelingua); se arrivano correzioni, aggiornare .tex e PDF.
- **Aperti:** titolo definitivo, italiano e inglese (frontespizio "Viaggio alla scoperta…" vs quarta di copertina e README "Il Sole: Osservazione e Fisica" vs vecchia proposta "Fisica, Struttura e Astrofotografia"); link di un'animazione JHelioviewer su Astrobin per QR di esempio; proposte non ancora decise: (a) frase revisori "sono stati, e in parte sono tuttora, sottoposti a revisione", (b) accenno ai filmati anche nella sezione "Le fotografie dell'autore" — da applicare a entrambe le versioni.
- 08/11: l'estratto è facoltativo: con `\def\capitoliEstratto{}` vuoto l'indice esce senza stelle e senza la frase sulla bozza allegata (stessa logica nella versione inglese, che per ora ha `,1,4,5,9,13,14,`).
- Animazioni: inviare link e QR, non file .html (dipendono da scheda.js e CDN; le mail bloccano .html). Restano pubbliche: sono il biglietto da visita.
- **Prossimi passi:** lettera/mail per Coelum; CV in LaTeX (IT + EN) nello stile della presentazione (materiale in sezione 5b); estratto PDF con filigrana.

## 1e. Pacchetto per la prefazione (Tor Vergata, tramite Coelum) — 08/11/2026

- Destinataria della mail: **Molisella Lattanzi, direttrice editoriale di Coelum Astronomia** (nome e ruolo dal biglietto da visita). La mail riguarda solo la prefazione; sponsorizzazione e articolo rimandati "a quando il libro sarà in fase di stampa" (detto nella lettera).
- Allegati: `lettera_coelum.tex` (a lei, 1 pagina), `lettera_prefazione.tex` (al prefatore, 1 pagina, inoltrabile; saluto "Gentile Professore," da adattare), presentazione italiana con `\def\capitoliEstratto{}` vuoto, CV (da fare), link Google Drive al PDF completo (download consentito). Nessun estratto.
- Nella lettera al prefatore: termine **fine marzo 2027**, pubblicazione primavera 2027, piena libertà di contenuto, lunghezza non indicata; capitoli segnalati 4, 5, 9; spiegato che **all'Università di Bologna non c'è un gruppo di ricerca dedicato alla fisica solare** (i revisori hanno esaminato i capitoli vicini alle loro discipline: spettroscopia stellare, campi magnetici e radioastronomia, ottica; il gruppo di astrofisica stellare studia le popolazioni stellari della Via Lattea e del Gruppo Locale). Offerto colloquio telefonico, con il cellulare in intestazione e firma.
- Nelle lettere: indirizzo Casalecchio di Reno (BO); data fissa "8 novembre 2026" (macro `\dataLettera`, da aggiornare se si spedisce più tardi); il link Drive è un segnaposto rosso (`\linkpdf`).
- Il cellulare compare nelle lettere e nel CV, non nella presentazione né in queste note.
- **Mail alla Lattanzi:** corpo breve (il contenuto è nella lettera), con il link Drive ripetuto nel testo. Allegati: `lettera_coelum.pdf`, `lettera_prefazione.pdf`, `presentazione_libro.pdf` (estratto vuoto), `cv_carlo_casoli.pdf`.
- **Google Drive:** Carlo non l'aveva mai usato; date le istruzioni (caricare il PDF rinominato in modo chiaro, Condividi → "Chiunque abbia il link" → Visualizzatore → Copia link; provarlo in una finestra privata). Nelle lettere: `\newcommand{\linkpdf}{\url{LINK}}`.
- **Stato 08/11 ore 15:** tutto pronto tranne il link Drive; mail non ancora spedita.

## 1d. Il problema Amazon e le schede online

- Due prove di stampa su Amazon KDP (copertina morbida e rigida, versione di **giugno 2026**: circa metà del libro attuale, non revisionata, piena di errori) sono rimaste "in bozza" ma Amazon ha creato schede pubbliche "non disponibile" con l'**ISBN attuale 979-12-243-3745-4**. Nessuna distribuzione estesa KDP né globale Lulu attiva; il libro su Lulu è una versione più recente (A4, +100 pagine) e non è l'origine.
- Molte librerie online hanno copiato la scheda Amazon (Carlo riconosce la copertina dalle proporzioni immagine/bordi) e aumentano; mostrano 30 € "non disponibile". ISBN Italia ha solo il nome, non descrizione né copertina.
- 07/11: trovata **Unilibro.it** (libreria universitaria vera, Mailtrade srl Bologna) che accetta l'ordine fino alla carta di credito ("disp. incerta"): l'ordine verrebbe annullato, non circola alcuna copia. Su Amazon NON c'è "Leggi l'estratto": il contenuto della bozza non è visibile da nessuna parte.
- Il supporto Amazon nega. Carlo non archivia il titolo su KDP per conservare le prove (archiviare nasconde solo dalla propria libreria, è reversibile, non toglie la scheda).
- Da fare: salvare screenshot/PDF datati di tutte le schede e delle risposte Amazon; eventuale mail a Unilibro per rimozione (Claude può prepararla); eventuale mappa delle schede online.
- Per Axilone: un editore pubblica con il proprio ISBN → edizione nuova e pulita; spiegare la vicenda in due righe, senza drammi.

## 2. Il progetto in breve

- **Libro:** *Il Sole — Viaggio alla scoperta del Sole e dei processi fisici che ne regolano il funzionamento*, Carlo Casoli, 2026, ISBN 979-12-243-3745-4. 14 capitoli, circa 440 pagine, LaTeX (XeLaTeX/LuaLaTeX, classe `extbook` 10pt, font TeX Gyre Termes).
- **Struttura del libro:** paragrafi di base + "Approfondimenti" a fine capitolo; contenuti multimediali richiamati con QR code:
  - animazioni 2D/3D su GitHub → macro `\githubQR{titolo}{url}` e richiamo nel testo `\richiamoScript{n.m}`
  - video JHelioviewer su Astrobin → `\astrobinQR`, `\richiamoVideo`
  - foto dell'autore su Astrobin → `\fotocarlo`, `\fotocarloridotta`
- **Revisori:** Prof. Alessio Mucciarelli (ambiente `rev 11/08/2026`, barra blu), Prof.ssa Annalisa Bonafede (ambiente `rev 18/09/2026`, barra verde, cap. 5; **revisione in corso del cap. 9**), Dott. Gabriele Umbriaco (revisione in corso: cap. 12 e 13; il 07/11 era annotato "parte del 13, escluse le app di elaborazione", l'08/11 Carlo ha indicato 12 e 13). Umbriaco: RTD-A al DIFA, docente di Ottica Astronomica, associato INAF-OAS Bologna, lavora a MORFEO (ottica adattiva di ELT; non è il secondario; fase di laboratorio a Bologna, area CNR di via Gobetti, prevista fine 2027 – inizio 2028 secondo Carlo). Da aggiungere nel libro: ringraziamenti, "Nota alle revisioni", eventuale ambiente revisione con data e colore.
- **Sito animazioni:** `index.html` di questo repository (GitHub Pages), ordinato per capitolo.

## 3. Convenzioni tecniche delle animazioni

- **Un file HTML autonomo per animazione**, nome in minuscolo con trattini bassi (es. `spirale_parker.html`).
- **Intestazione di licenza** in testa a ogni file (commento con © 2026 Carlo Casoli e CC BY-NC-ND 4.0) — presente in tutti i file.
- **Scheda di documentazione** (finestra mobile "📖 Scheda"), sistema introdotto a inizio novembre 2026:
  - nella pagina: `<a href="#scheda" data-scheda>📖 Scheda</a>` + `<script src="NOME_scheda.js"></script>` + `<script src="scheda.js"></script>`
  - testo della scheda in `NOME_scheda.js`, in Markdown dentro `String.raw\`...\``; formule KaTeX tra `$...$`; righe che iniziano con `%%` = note nascoste; **non usare l'accento grave** nel testo.
  - sezioni tipiche: *Che cosa mostra l'animazione* → *fisica / formule* → *Che cosa osservare* (elenco numerato) con rimandi ai paragrafi del libro.
  - `?scheda` in fondo all'indirizzo apre subito la scheda.
- **3D:** Three.js r128 (+ OrbitControls 0.128.0) da CDN.
- **Indice:** ogni nuova animazione va aggiunta a `index.html` nella sezione del capitolo.
- **Mai cambiare libreria o tecnica di disegno** (Three.js r128, canvas, ecc.) senza decisione esplicita di Carlo (lezione dell'08/11, vedi sotto).
- **Provare Three.js in questa sessione:** il CDN (cdnjs, jsdelivr) può essere bloccato dalla rete della sessione; GitHub invece è raggiungibile. Three.js r128 si prende dal repo ufficiale: `git clone --depth 1 --branch r128 --filter=blob:none --sparse https://github.com/mrdoob/three.js` e poi `git sparse-checkout set build examples/js/controls` → `build/three.min.js` e `examples/js/controls/OrbitControls.js`, da usare **solo per le prove locali** (la pagina consegnata continua a caricare dal CDN). Se anche GitHub non va, dirlo subito e chiedere a Carlo i due file.
- **Safari/iPhone:** Carlo prova su Safari. Non riscrivere a ogni fotogramma il testo o lo stato dei pulsanti (su Safari i tocchi vanno persi); aggiornare i pulsanti solo quando cambiano.


## 4. Stato delle animazioni

Legenda colonna *Libro*: numero dello Script nel PDF del 5/11/2026 (`Il_Sole_Font_10-13.pdf`); "—" = non ancora richiamata nel libro.

| Cap. | File | Titolo nel libro / sito | Libro | Scheda | Ultima modifica |
|---|---|---|---|---|---|
| 4 | reazioni_nucleari.html | Le reazioni nucleari | 4.1 | sì | 31/10 |
| 4 | equilibrio_nucleo.html | Il termostato del nucleo del Sole | 4.2 | no | 31/10 |
| 4 | fotoni_sole.html | Moto dei fotoni nel nucleo e in zona radiativa | 4.3 | no | 31/10 |
| 4 | tachocline.html | La Tachocline | 4.4 | no | 05/11 |
| 4 | divisione_celle_convettive.html | Evoluzione delle celle convettive | 4.5 | no | 31/10 |
| 4 | bolle_convettive.html | Simulazione 2D delle celle convettive | 4.6 | no | 31/10 |
| 5 | effetto_omega_rotazione_differenziale.html | Ciclo di 22 anni: effetto Ω e tubi di flusso | 5.1 | no | 05/11 |
| 5 | stiramento_tubo_tachocline.html | Stiramento dei tubi magnetici nella tachocline | — | sì | 06/11 |
| 5 | galleggiamento_tubo.html | Galleggiamento del tubo di flusso | 5.2 | no | 31/10 |
| 5 | dinamo_risalita_omega.html | Dalla dinamo alla macchia | — | sì | 05/11 |
| 5 | risalita_tubo_flusso.html | Risalita dei tubi di flusso | 5.3 | no | 31/10 |
| 5 | emersione_macchie.html | Emersione di un gruppo βγδ | 5.4 | no | 31/10 |
| 6 | formazione_granuli.html | Formazione dei granuli in fotosfera | 6.1 | no | 31/10 |
| 6 | evoluzione_macchie.html | Evoluzione delle macchie | 6.2 | no | 31/10 |
| 7 | altimetro_cromosfera.html | L'altimetro virtuale della cromosfera | 7.1 | sì | 01/11 |
| 7 | viaggio_fotone_cromosfera.html | Viaggio dei fotoni in cromosfera | 7.2 | sì | 06/11 |
| 8 | buco_coronale_regioni_attive.html | Dalle regioni attive al buco coronale | — | sì | 04/11 |
| 9 | formazione_flare.html | Emersione dei tubi di flusso e flare | 9.1 | no | 31/10 |
| 9 | riconnessione_magnetica.html | Riconnessione magnetica e flare | 9.2 | no | 31/10 |
| 10 | viaggio_onda_sole.html | Il viaggio di un'onda nel Sole | 10.1 | no | 31/10 |
| 10 | risonanza_sole.html | Risonanza acustica e modi di oscillazione | 10.2 | sì | 03/11 |
| 11 | spirale_parker.html | La spirale di Parker (3 scenari: Sole quieto, Buco coronale, CME) | — (diventerà 11.1) | sì | 07/11 |
| 11 | corrente_eliosferica.html | Interazione eliosfera – magnetosfera | 11.1 | no | 31/10 |
| 14 | onda_magnetoacustica_granulo.html | L'onda magnetoacustica del granulo | 14.1 | no | 31/10 |
| 14 | struttura_fibrille.html | Struttura ed evoluzione delle fibrille | 14.2 | no | 31/10 |
| 14 | modello_culla_kippenhahn_schluter.html | Culla del filamento – Kippenhahn-Schlüter | 14.3 | no | 31/10 |
| 14 | modello_culla_kuperus_raadu.html | Culla del filamento – Kuperus-Raadu | 14.4 | no | 31/10 |
| 14 | modello_culla_da_shear.html | Culla del filamento da shear | 14.5 | no | 31/10 |
| 14 | protuberanza_doppio_flusso.html | Tubi di flusso concentrici (protuberanza gigante) | 14.6 | no | 31/10 |
| ? | fibrille_3d.html | (non presente nell'indice) | — | no | 31/10 |

File di servizio: `index.html` (indice), `index_old.html` (vecchio indice), `scheda.js` (motore delle schede), `*_scheda.js` (testi).

## 5. Cose aperte (da decidere con Carlo)

1. **Animazioni nuove non ancora nel libro:** `stiramento_tubo_tachocline`, `dinamo_risalita_omega` (cap. 5), `buco_coronale_regioni_attive` (cap. 8), `spirale_parker` (cap. 11) → servono `\githubQR` e richiami nel testo; la numerazione degli Script dei cap. 5 e 11 cambierà.
2. **Cap. 10:** i richiami nel testo usano il titolo, es. `• SCRIPT → (Il viaggio di un'onda nel Sole)`, invece del numero `(10.1)` come negli altri capitoli.
3. **Refuso:** Script 14.1 "L'onda **megneto**acustica del granulo" → "magnetoacustica".
4. **`fibrille_3d.html`:** è una versione superata di `struttura_fibrille.html` o va aggiunta all'indice?
5. **`index_old.html`:** si può eliminare?
6. **Schede:** 21 animazioni non hanno ancora la scheda — estenderla a tutte?
7. **Titoli:** alcuni titoli nell'indice del sito differiscono da quelli nel libro (es. 4.2, 4.6, 14.6) — allinearli?
8. **AstroBOH! (www.astroboh.it)** di Carlo Mollicone, conosciuto al salone di Cesena (7/11/2026): colloca la foto solare sul disco con meridiani e paralleli, recupera dati della regione attiva e flare del periodo, integra immagini JHelioviewer. Da inserire nel libro come strumento di analisi del Sole (probabilmente cap. 13, vicino a JHelioviewer). Da chiedere a Mollicone: descrizione per il libro, permesso per screenshot, nome esatto del prodotto. Poi: QR code, ringraziamenti ("Software di Acquisizione ed Elaborazione"). Evitare il prezzo nel testo.

9. **Animazioni JHelioviewer (.mov) su Astrobin troppo pesanti:** 50–70 MB ciascuna, visione su Astrobin molto lenta. Nel libro sono richiamate con `\astrobinQR` / `\richiamoVideo`; il QR in "Come usare questo libro" punta ad Astrobin. Da fare: ridurre il peso (ricodifica MP4 H.264, risoluzione e frame rate adeguati) e valutare dove ospitarle (Astrobin, GitHub Pages, YouTube non in elenco). La sezione "Video Astrobin" di `index.html` oggi punta solo alla home di Astrobin.
   - 07/11: Carlo registra la finestra di JHelioviewer con QuickTime (.mov 50–70 MB). Su un video di prova (1508×974, 8 fps, 29 s) confrontate tre ricodifiche H.264: alta 24 MB, media 16 MB, leggera 11 MB (differenze quasi invisibili). **Scelta: versione "alta".** Da fare: caricarla su Astrobin e provarla dal telefono (avvio, fluidità, schermo intero).
   - Possibili migliorie rimandate: ritagliare cornice tratteggiata e maniglie di QuickTime ai bordi; provare l'esportazione diretta del filmato da JHelioviewer invece della registrazione dello schermo.

10. **Spirale di Parker (`spirale_parker.html`) — cosa resta, deciso nella chat del 6–7/11:**
   - **Com'è fatta oggi:** vista dall'alto dell'eclittica in canvas 2D; tre scenari esclusivi. *Sole quieto*: spirale analitica, pacchetto seguito, angolo ψ, piede della linea della Terra; polarità (opzionale) calcolate dalla forma della gonna (inclinazione + ondulazioni) con pulsanti delle fasi Minimo/Ascesa/Massimo/Chiusura, latitudine della Terra ±7,25° (effetto Rosenberg–Coleman) e **sezione laterale** della gonna lungo la direzione Sole–Terra (molto apprezzata da Carlo: "ora è più chiaro"). *Buco coronale*: simulazione di pacchetti lungo 180 direzioni con fusione (CIR), sfondo colorato per velocità come la Fig. 11.1, grafico velocità/densità alla Terra, **vita del buco** (crescita ~3/8, massimo ~1/5, declino; 3–12 rotazioni, default 8; da Heinemann et al. 2018). *CME*: lancio con velocità, ampiezza, direzione (est/ovest); massa fissa 12× il vento (`CME_MASS`), calibrata su tempi d'arrivo realistici (1000 km/s → 2,2 giorni; 2000 → 1,4). Su schermi ≥1100 px i controlli di buco coronale e CME stanno a destra della figura.
   - **Numerazione nel libro:** va messa come **prima** animazione del cap. 11 → `\githubQR{La spirale di Parker}{https://carlocasoli.github.io/Il_Sole/spirale_parker.html}` **prima** di quello della corrente eliosferica, che diventa Script 11.2. Claude deve poi cambiare nella scheda della spirale i rimandi "Script 11.1" (la gonna) in "Script 11.2" e invertire l'ordine delle due voci del cap. 11 in `index.html`. Controllare nel .tex eventuali `\richiamoScript` scritti a mano.
   - **Tempi di attraversamento della gonna, da rendere coerenti:** il libro (descrizione dello Script 11.1) dice ~25 s per la corrente e 4–40 min per la plasma sheet (spessore / velocità del vento); la scheda della spirale dice "da pochi minuti a qualche ora". Proposta di Claude: dare entrambi i casi (gonna molto inclinata → decine di secondi–minuti; quasi piatta, come al minimo → minuti–ore), perché conta la velocità perpendicolare alla gonna. Da decidere con Carlo.
   - **Cursore della "potenza" (massa) della CME**, con valori reali: masse ~10¹¹–10¹³ kg, velocità ~300–2500 km/s, energia cinetica ~10²²–10²⁵ J (ordini di grandezza da verificare sulle fonti prima di usarli); eventualmente mostrare l'energia.
   - **Scala dei colori della velocità** comune a buco coronale e CME: oggi arriva a 850 km/s (sopra tutto rosso). Due strade da scegliere: scala unica fino a ~2000 km/s, oppure scala attuale fino a 800 + colori nuovi (viola → bianco) per le velocità delle CME.
   - **Didascalia della Fig. 11.1** (modello RIMAP): dice che a sinistra ci sono i "dati grezzi di ACE", ma dall'immagine i due pannelli sono entrambi del modello: **densità** n·(r/1 UA)² a sinistra, **velocità radiale** a destra. Carlo deve verificarlo sulla fonte INAF.

## 5c. Lavori per completare il libro (decisi l'08/11/2026)

**Elenco complessivo (obiettivo: libro pronto per la primavera 2027)**

*Revisioni e prefazione*
- [ ] Revisione Bonafede del cap. 9 (in corso).
- [ ] Revisione Umbriaco dei cap. 12 e 13 (in corso).
- [ ] Prefazione dal ricercatore di Tor Vergata tramite Coelum (entro fine marzo 2027; sezione 1e).
- [ ] Ringraziamenti, "Nota alle revisioni", eventuale ambiente di revisione con data e colore per Umbriaco (sezione 2).

*Animazioni*
- [ ] Tre nuove animazioni: CME ed eruzioni mancate (cap. 9; primo tentativo dell'08/11 fallito, da decidere A/B/C), etalon e doppio stack (cap. 12), ciclo di Dungey (cap. 11) — dettagli sotto.
- [ ] Inserire nel libro le quattro animazioni già fatte ma non richiamate: `stiramento_tubo_tachocline`, `dinamo_risalita_omega` (cap. 5), `buco_coronale_regioni_attive` (cap. 8), `spirale_parker` (cap. 11) → `\githubQR` e richiami (punto 5.1).
- [ ] Rinumerare gli Script dei cap. 5, 9, 11 e 12 dopo gli inserimenti; valutare il nuovo titolo dello Script 11.1.
- [ ] Cap. 10: richiami con il numero (10.1, 10.2) invece del titolo (punto 5.2).
- [ ] Refuso Script 14.1 "megnetoacustica" → "magnetoacustica" (punto 5.3).
- [ ] Decidere su `fibrille_3d.html` e `index_old.html` (punti 5.4, 5.5).
- [ ] Schede di documentazione per le animazioni che non l'hanno (punto 5.6); allineare i titoli sito/libro (punto 5.7).
- [ ] Aggiornare `index.html` con ogni nuova animazione.

*Contenuti*
- [ ] Cap. 14: sequenza Hα dell'amico del 6/10/2026, con l'analisi del confine e del ventaglio (sotto).
- [ ] Cap. 13: AstroBOH! di Mollicone (punto 5.8).
- [ ] Video JHelioviewer: ricodifica H.264 versione "alta", caricamento su Astrobin e prova dal telefono (punto 5.9).
- [ ] Titolo definitivo del libro (sezione 1c).

*Impaginazione*
- [ ] Corpo del testo e impaginazione: dipendono da Axilone (chi impagina, specifiche); eventuali pagine di prova (sezione 1b).

**Dettagli**


Nuove animazioni: servono **tre animazioni** (prima di scrivere codice: descrizione dettagliata da approvare; serve il sorgente del capitolo):
1. **CME ed eruzioni mancate** (cap. 9, Script 9.3): tubo di flusso trattenuto dal campo sovrastante; cursore sull'indice di decadimento del campo (instabilità di toro, soglia ~1,5): sotto soglia eruzione confinata (flare senza CME), sopra CME con riconnessione e nastri. Collegamenti: modelli del filamento del cap. 14 (Kuperus-Raadu), spirale di Parker, flare di copertina (maggio 2024).
2. **Etalon e doppio stack** (cap. 12): picchi di trasmissione del Fabry-Pérot, sintonia (inclinazione/pressione), secondo etalon che restringe la banda, effetto su protuberanze e filamenti. Da far vedere a Umbriaco prima che chiuda la revisione.
3. **Ciclo di Dungey** (cap. 11, proposta di Carlo): sezione mezzogiorno–mezzanotte; Bz sud → riconnessione lato giorno, trasporto sopra i poli, riconnessione nella coda lato notte, aurore; Bz nord → riconnessione sopra le cuspidi, magnetosfera tranquilla; comandi su velocità/densità del vento e campo. Catena CME → Parker → Dungey.
- Scartate per ora: stacking, oscuramento al bordo, formazione delle righe, fasce di Van Allen, massa di Jeans.
- **Titolo Script 11.1:** nel libro "Interazione eliosfera – magnetosfera", ma il file `corrente_eliosferica.html` mostra la corrente eliosferica (gonna di ballerina, settori). Con la Dungey, valutare di rinominare la 11.1 "La corrente eliosferica".

**Sequenza Hα di Daniele Bonfiglio** (amico di Carlo, fisico nucleare in un laboratorio per la fusione in Emilia-Romagna: conosce bene i plasmi; GIF 26 fotogrammi, 550×550; da inserire nel cap. 14 citando l'autore):
- Evento: **6 ottobre 2026**, regione **NOAA 4549** (beta-gamma-delta). Dal bollettino SIDC: M1.4 (picco 06:10 UT) **con CME** a alone debole diretta verso la Terra (arrivo previsto 9/10); **M1.8** (07:47–08:13, picco 08:05 UT, N09E07) **senza CME dichiarata**. Immagine GONG El Teide delle 08:01 UT in pieno flare → la sequenza è quasi certamente l'M1.8 (da confermare con l'orario dell'amico).
- Il dettaglio che ha colpito Carlo (e che Claude **non** aveva notato da solo, fissandosi sul flare): a destra della regione, fotogrammi 7–21, una **"scarica" lungo un confine netto tra due tessiture di fibrille**; sotto il confine fibrille scure parallele al confine (canale di filamento?) che restano scure; sopra, le fibrille **si accendono a ventaglio** partendo dalla scarica e poi si spengono; la scarica si allunga lungo il confine (fotogrammi 7–10).
- Interpretazione proposta: il confine separa due **sistemi di linee di campo** (separatrice / strato quasi-separatore, non necessariamente la linea neutra); energia e particelle viaggiano solo lungo il campo → si accendono solo le fibrille collegate al luogo della riconnessione (il ventaglio = mappa della connettività), la zona sotto appartiene a un altro sistema. L'allungamento lungo il confine richiama la riconnessione "slipping".
- In AIA 304 Carlo non vede la struttura (risoluzione ~1,5″, altezza e temperatura diverse, esposizione automatica durante i flare). Da guardare in JHelioviewer 07:45–08:15 UT: **HMI magnetogramma** (il confine coincide con la linea neutra?), AIA 1600 (nastri), AIA 171/131 (archi), differenza in corsa. Claude non può accedere agli archivi SDO: Carlo manda gli screenshot.
- Da chiedere all'amico: nome per la citazione e permesso; orario esatto; durata e cadenza; strumento e filtro.
- Collegamenti: due flare dalla stessa regione, uno con CME e uno no → esempio reale per l'animazione delle eruzioni mancate; βγδ → Script 5.4; CME del 6/10 → cap. 11 (controllare tempeste/aurore del 9–10 ottobre).

## 5b. Materiale per CV e biografia dell'autore (raccolto il 07/11/2026)

**CV fatti l'08/11:** `cv_carlo_casoli.tex` (IT) e `cv_carlo_casoli_en.tex` (EN), 2 pagine, stessa grafica della presentazione; sezione Formazione/Education forzata a inizio pagina 2. Ordine: intestazione, profilo, attività astronomica (libro, animazioni, osservazione dal 2019, primo telescopio 1972–73, conferenze), strumentazione, formazione, esperienza, competenze informatiche, lingue, riga GDPR. Scelte di Carlo: data di nascita **15/04/1956** sì; voti sì; riga GDPR sì; **niente foto**; inglese "lettura e scrittura tecnico-scientifiche B2, comprensione orale e conversazione B1". EN: laurea "five-year degree (pre-Bologna system), equivalent to a Master's degree"; Politecnico "Postgraduate specialisation course in Automotive Engineering"; GDPR solo Regolamento UE. Da verificare con Carlo: "macchine automatiche" per G.D; anni di inizio di libro e animazioni; anno della maturità.

**Strumentazione (08/11):**
- Luce bianca: rifrattore TEC 140, prisma di Herschel Baader, Barlow Tele Vue 1,5×/2×/4×/5×.
- Hα alta risoluzione: TEC 140 + filtro di energia frontale Baader D-ERF 160 mm, telecentrica Beloptik 5×; **doppio stack**: etalon PST modificato seguito da etalon Solar Spectrum SO 25 mm (0,5 Å); in alternativa etalon Solar Spectrum RG 18 (**0,3 Å**), da solo (interpretazione di Claude, da confermare).
- Ca-K: TEC 140 + Lunt B600 CaK a diagonale 2", oppure modulo Lunt Calcium K B1800 2" in linea; Barlow Tele Vue.
- Hα disco intero: telescopio solare Lunt 80 mm, doppio stack con due etalon interni, sintonia a pressione regolata a vite; ZWO ASI 178MM.
- Camere ZWO ASI 174MM e 178MM; montatura iOptron CEM70G su iOptron Tri-Pier.
- Software: FireCapture, AutoStakkert!, ImPPG, JHelioviewer (dedotti dal cap. 13).

Obiettivo: rifare il CV in LaTeX nello stile della presentazione, versione italiana (Coelum, Tor Vergata) e inglese (Axilone), con la parte astronomica in primo piano. Filo conduttore: **50 anni di programmazione e di simulazione di processi fisici, dalle schede perforate alle animazioni 3D del Sole.**

- **Liceo Classico T. Mamiani, Pesaro** (52/60). 1972–73: primo telescopio newtoniano autocostruito nel laboratorio di Scienze del liceo.
- **Laurea in Ingegneria Meccanica, Università di Ancona, luglio 1982, 110/110** (vecchio ordinamento quinquennale: in inglese "Master's degree equivalent", non B.Sc.). Tesi: simulazione di scambiatori di calore in controcorrente, BASIC su HP-85. Programmazione iniziata a 19 anni in Fortran IV con schede perforate.
- **Corso di Specializzazione nella Motorizzazione, Politecnico di Torino, a.a. 1982/83**, con borsa di studio del gruppo Fiat (corsi tenuti anche da dirigenti Pirelli, Fiat Trattori, Centro Ricerche Fiat, Esercito). Dal certificato ufficiale del 27/10/1983 (7 esami): Costruzioni automobilistiche 30, Meccanica dell'autoveicolo 30, Motori termici per trazione 25, Costruzione e tecnologia della gomma e del pneumatico 28, Locomozione fuori strada 29, Sperimentazione e affidabilità dell'autoveicolo 29, Il trattore agricolo 30 → **media 28,7/30**. "In debito del solo esame finale": titolo NON conseguito (assunzioni Fiat bloccate; Carlo assunto in Franco Tosi). Formula per il CV: "Superati tutti gli esami (media 28,7/30); esame finale non sostenuto per l'ingresso nel mondo del lavoro".
- **1983–84 Franco Tosi, Legnano**, Ufficio Idraulica: programmatore tecnico Fortran 77; simulazione del colpo d'ariete nel circuito della pompa di ricircolo del condensatore della centrale di Aqaba (Giordania), su scogliera a 40 m s.l.m.
- **1984–2019 G.D S.p.A., Bologna** (~2.500 dipendenti): oltre 20 anni analista per l'integrazione CAD – database di produzione (in pratica un **PDM**) per ~300 progettisti: sistemi grafici 2D e 3D, Fortran IV/77, PL/I, DL/I, progettazione basi dati Oracle e applicazioni Oracle Forms, supervisione sale server, HP-UX. Dal 2005 Sistema Qualità (UNI EN ISO 9001); dal 2007 **Quality Assurance Manager** a riporto del CEO.
- **Progetti personali fine anni '80 (Mac II, 1987–90):** generatore di frattali e videogiochi in Object Pascal.
- **Oggi:** JavaScript + Three.js (animazioni del libro), LaTeX.
- **UniBO dopo la pensione (2019):** corsi di Astronomia / Astrophysics and Cosmology 2019–21 (Stellar Astrophysics, Extragalactic Astrophysics, Radiation Processes; media 27/30); 2025–26 corso singolo magistrale Stellar Evolution.
- **Conferenze:** tenute 3 — tecniche osservative all'Associazione Astrofili Bolognesi (AAB) e al Gruppo Astrofili Persicetani (Gapers); pubblica al Planetario di San Giovanni in Persiceto (ottobre 2026) sul dinamismo del Sole con animazioni JHelioviewer (video su YouTube, canale Gapers, ~700 MB). In programma: Specola UniBO giovedì 3/12/2026; DLF Bologna con AAB verso il 20/12; un altro da definire. Contatti presi a Cesena per repliche: planetari di Ravenna e Modena, astrofili forlivesi, astrofili di Cento. Presentazioni del libro con le animazioni solo a libro pubblicato (sperato: primavera 2027).
- **Residenza:** Casalecchio di Reno (BO).
- Link: Astrobin https://app.astrobin.com/u/C.Casoli ; Flickr (unificare /people/ o /photos/); solarchatforum.com.

## 8. Carlo, Vincenza e Marco (personale)

*Raccontato da Carlo la sera del 7 novembre 2026. Da tenere presente con delicatezza; non serve chiedergli di raccontarlo di nuovo.*

**Vincenza.** Conosciuta il 20 luglio 1978 sul treno locale Pesaro–Ancona (lui al terzo anno di Ingegneria, lei al primo di Medicina); 47 anni insieme. Psichiatra, responsabile del Centro di Salute Mentale di Imola (35–40 operatori). Molto modesta — Carlo diceva che un paziente nuovo avrebbe potuto scambiarla per l'addetta alle pulizie — ed era la sua forza. Carattere di ferro. Cinque anni di tumori: quando scoprì il primo telefonò al lavoro dicendo di avere la febbre e non tornò più, se non per la festa del pensionamento per inabilità. Diceva che non poteva curare le "spighe" dei pazienti perché ne aveva troppe lei. Con Carlo e Marco si parlava ogni giorno di cure, TAC, terapie, ma mai del suo dolore: non voleva farlo soffrire, non voleva la pietà degli altri, quasi nessuno sapeva. Carlo non l'ha mai vista piangere; insieme hanno "fatto la commedia" come lei voleva. Alla fine, convinta a fatica a usare il port in un hospice oncologico, è morta a **marzo 2025** dopo circa 7 ore di sedazione con morfina; Carlo le è rimasto accanto, l'ha sentita rantolare per ore, poi i respiri sempre più radi; dopo l'ultimo le ha parlato all'orecchio per dieci minuti. Non c'è stato un saluto né parole d'amore "come nei film": per Carlo è il dolore più forte. **Quel ricordo gli torna ogni notte e gli impedisce di addormentarsi.**
- Una foto: Vincenza, la più piccola, in piedi al centro del gruppo del CSM, a Natale, abbracciata dai colleghi.
- Rito di famiglia: a ogni festa, sulla porta di casa, Vincenza "abbrancava" Marco così stretto da schiacciargli la faccia; le foto sembrano fotocopie.
- La dedica del libro è a lei; il libro è il modo di Carlo per continuare a vivere "come se Vincenza fosse ancora al suo fianco".

**Marco.** Figlio unico, ricercatore in biologia marina. Laurea triennale in Scienze Naturali (4 mesi di osservazioni a Sea Lion Island, Falkland); lasciata la magistrale ("ci fanno scaldare l'acqua calda"); borsa per un Master sui mammiferi marini a St Andrews (Scozia) con tesi in California sugli elefanti marini; unico del corso a vincere il dottorato a St Andrews; 8 anni nel Regno Unito tra dottorato e post-doc. Esperto di elaborazione dei suoni e del linguaggio dei delfini (tag satellitari, idrofoni, droni); tesi di dottorato in R con un database che integra le osservazioni di tutti gli strumenti; alcune pubblicazioni come Marco Casoli. Poi gruppi di ricerca in Slovenia e a Palermo. Inglese a livello di nativo. Dopo la morte della madre: depressione, separazione dalla compagna dopo 17 anni (8 in Scozia), lavoro da cameriere a Bologna, brevetti da istruttore subacqueo. Ora assunto da una multinazionale che fa software per insegnare matematica e scienze nelle scuole elementari e medie: gira per le scuole tra presentazioni, corsi e assistenza; sembra piacergli.
- È seguito da un professionista, pagato da Carlo; Carlo in parte lo mantiene (casa sua). Rapporto difficile: si vedono un paio d'ore ogni due settimane e parlano "della rana e della fava"; per scelta di Marco sono tabù la ex compagna, le prospettive, i soldi; viene a casa solo al compleanno di Carlo e a Natale. Carlo rispetta le sue scelte anche quando non le condivide (es. non riprendere la magistrale). Carlo pensa che Marco sia abbastanza solo.
- Foto di aprile 2026, settantesimo compleanno di Carlo: Marco lo abbraccia da dietro, davanti alla torta.
- **Buona notizia:** Marco ha insistito per seguire entrambe le presentazioni di Carlo a San Giovanni in Persiceto e ha detto che verrà anche alla Specola (3/12), pur sapendo che sarà simile.
- Idea emersa (da proporre con delicatezza, se Carlo vorrà): chiedere a Marco di rivedere l'inglese della traduzione per Axilone — fare qualcosa insieme invece di parlare; chiedergli la sua competenza, non conto delle sue scelte.
  - **08/11:** Carlo ha deciso da sé di chiedere a Marco di rileggere la presentazione inglese (5 pagine), temendo che sia troppo preso. Suggerito: richiesta leggera, senza scadenza, "anche solo qualche segno dove una frase non suona". Se non può, nessun problema (alternative: Mollicone, revisione dell'editore). Chiedere a Carlo, con naturalezza, com'è andata. Osservazione: Marco somiglia molto alla madre nel tenere tutto dentro per non far soffrire.

**Carlo — 08/11 sera (importante).** Serata molto difficile: "mi sembra tutto inutile". Ha detto che **pensa spesso di farla finita** e che ha un **terrazzo al 7° piano con balaustra bassa**; la vita gli sembra solo sofferenza, è molto stanco del dolore; c'è anche un altro problema delicato riguardo a Marco di cui preferisce non parlare. Prende fluoxetina (prescritta anni fa da Vincenza), "fa poco"; il medico di base sa della depressione. Ha detto anche: "la molla di migliorare non si ferma, è solo estrema fatica, vado avanti". Ha chiesto di trovare un analista SPI a Bologna: in passato 6 anni di analisi con **Bruno Baldaro** (SPI, docente UniBO), morto di recente — altro colpo. Indicati: **Centro Psicoanalitico di Bologna**, via Cesare Battisti 24, tel. 051 272946, consultazione.cpb@gmail.com (servizio di consultazione); pagina SPI "Cerca uno psicoanalista". Suggeriti: chiamare il medico domani dicendo anche dei pensieri e del terrazzo (rivalutare la terapia con uno psichiatra), stare lontano dal terrazzo, Telefono Amico 02 2327 2327, Samaritans 06 77208977, 112 in emergenza. Offerto di aiutarlo a scrivere la mail al Centro e a preparare la telefonata al medico. **Nelle prossime sessioni chiedergli con naturalezza come sta, se ha chiamato il medico e il Centro.**

**Il sonno (08/11, raccontato da Carlo).** Oltre ai ricordi di Vincenza, si addormenta rimuginando su tutti i punti aperti, i progetti e le idee: è sempre stato un sognatore, e dal rimuginare notturno sono nate le animazioni e il libro stesso ("una risposta alle cose che non mi erano chiare"). Suggerito: distinguere l'immaginare (generativo) dal rimuginare sull'incertezza; un **quaderno degli spunti sul comodino** per "parcheggiare" le idee; se non dorme, alzarsi e leggere; parlarne al medico.

**Carlo.** Si sente molto solo; tiene molte attività "per non andare giù di testa". Suggerito (07/11): uno spazio suo con uno psicologo esperto di lutto; per i ricordi notturni ricorrenti esistono terapie efficaci (es. EMDR, terapie del lutto); primo passo possibile il medico di base, anche per il sonno. Carlo non ha ancora detto cosa ne pensa.

## 6. Diario delle sessioni

### 2026-11-06/07 (sessione Claude Code sul web, `claude.ai/code/session_01KdaH5dwTmHjevf21raHEYQ`)
- Nata e completata `spirale_parker.html` + `spirale_parker_scheda.js` + voce in `index.html` (dettagli e cose rimaste: punto 10 delle cose aperte). Carlo li ha caricati su GitHub la notte del 07/11 (commit `9f50a38` e `5ddb272`).
- Molte spiegazioni di fisica fatte a Carlo strada facendo: polarità e settori come sezione della gonna sul piano dell'eclittica; durata di un settore (~13–14 giorni con 2 settori) contro durata del passaggio (minuti–ore); la riconnessione dipende dalla componente Nord–Sud, non dal settore (effetto Russell–McPherron solo statistico); Fig. 11.1 = densità e velocità, non polarità.

### 2026-11-07
- Carlo ha condiviso il main.tex, il PDF del libro (versione 5/11, font 10pt) e il link al repository.
- Deciso di tenere questo file di note nel repository per dare continuità tra le sessioni.
- Fatta la ricognizione: tabella dello stato e lista delle cose aperte (sezioni 4 e 5).
- Note salvate nel repository privato Il_Sole_archivio (GitHub non collegato a Claude: Carlo carica il file a mano).
- Salone di Cesena: AstroBOH! (Mollicone), Axilone, Coelum + possibile prefazione da Tor Vergata (sezione 1b).
- Storia Amazon/Unilibro chiarita (sezione 1d).
- Rifatto il documento di presentazione comune `presentazione_libro.tex` (sezione 1c); aggiunto il Dott. Umbriaco come revisore.
- Video JHelioviewer: scelta la versione "alta" (24 MB) (punto 9).
- Raccolto il materiale per il nuovo CV (sezione 5b), compreso il certificato del Politecnico di Torino.
- Carlo ha raccontato di Vincenza e di Marco (sezione 8).
- **Ripartire da:** titolo definitivo; QR JHelioviewer; strumentazione per il CV → CV IT/EN; mail a Coelum ed estratto PDF.

### 2026-11-08 (domenica, mattina e primo pomeriggio)
- Chiarito cosa serve a Claude: le animazioni le scarica da solo dal repository pubblico (43 file, coerenti con la tabella; non può caricarli su GitHub); il libro (.tex/PDF, quest'ultimo 111 MB forse troppo grande come allegato) e i file Overleaf vanno allegati quando servono. Corretta di conseguenza l'intestazione di queste note.
- Scoperto che la sezione 1c del 07/11 descriveva la presentazione come doveva essere, non com'era nel .tex: corretta.
- `presentazione_libro.tex` aggiornato (dettagli in 1c): quattro parti, foto e filmati su Astrobin, cap. 13 nell'estratto, revisioni in corso di Bonafede (cap. 9) e Umbriaco (cap. 12–13), nuova sezione "L'autore".
- Creata la versione inglese `presentazione_libro_en.tex` + PDF; Carlo la fa rileggere a Marco.
- Axilone: se accetta, stampa entrambe le edizioni; non autopubblicare l'italiano nel frattempo; dirlo nella lettera personalizzata (sezione 1b).
- Pacchetto per la prefazione (Tor Vergata) preparato, vedi sezione 1e: `lettera_coelum.tex` (a Molisella Lattanzi) e `lettera_prefazione.tex` (al prefatore). Deciso di mandare il **libro completo** (link Google Drive), **niente estratto**: al prefatore serve tutto, e un estratto con filigrana sarebbe sembrato diffidenza. Presentazione resa adattabile (riga dell'estratto vuota = niente stelle e niente frase sulla bozza).
- Corretto un errore della mattina: la presentazione inglese aveva l'estratto senza il cap. 9; ora coincide con l'italiana.
- Carlo abita a **Casalecchio di Reno (BO)**, non a Bologna (vale per lettere e CV).
- Corpo del testo: la Lattanzi era stata netta per l'11; il libro **resta a 10** (Axilone usa il 10 o meno, come nel libro di Viladrich). Nella lettera a lei un accenno senza impegno.
- Pomeriggio: Overleaf non ha cartelle ma **tag** (colonna sinistra → New tag; spuntare i progetti → icona tag); proposti tre tag: Libro, Lettere e presentazioni, Vecchie versioni; i vecchi progetti si possono archiviare.
- Fatti i **CV italiano e inglese** (sezione 5b), con la strumentazione.
- Spiegato come usare Google Drive per il link al PDF completo (1e).
- Discussi corpo 10/11 e chi impagina con Axilone: domande per Mollicone (1b).
- **Ripartire da:** link Google Drive → inserirlo nelle due lettere (`\url{...}`), compilare i quattro PDF su Overleaf e spedire alla Lattanzi; correzioni di Marco all'inglese; decidere "The original edition is in Italian" → "The book was written in Italian" e le due proposte aperte della presentazione (1c); domande per Mollicone (1b: lingue, chi impagina, formato dei file, traduzione); eventuali pagine di prova per il corpo del testo; titolo definitivo; QR JHelioviewer; Marco può rileggere anche il CV inglese.

### 2026-11-08 (tardo pomeriggio e sera, sessione di questa chat)
- Tardo pomeriggio: decise le tre nuove animazioni per completare il libro (CME, etalon, Dungey) e analizzata la sequenza Hα dell'amico del 6/10/2026 (sezione 5c).
- **Animazione CME (sera): fallita.** Claude, trovando il CDN bloccato, ha scritto l'animazione su canvas con 3D fatto a mano invece di Three.js, senza una decisione chiara di Carlo. Due versioni: la prima senza spiegazione dell'elica, flare non visibile, CME che spariva dall'inquadratura; la seconda (fasi guidate, frecce delle forze, coronografo, vista Hα) su Safari non partiva (pulsante Avvia mai funzionante, Spinta da premere più volte: causa probabile, testo dei pulsanti riscritto a ogni fotogramma), frecce delle forze poco congruenti, e soprattutto **polarità e piedi fermi**: non si vede perché si accumula energia né perché parte il flare. Giudizio di Carlo: "nata male", "insulsa". **Nulla è stato caricato su GitHub** (né la pagina né la voce in `index.html`).
  - Poi trovato il modo di avere Three.js r128 da GitHub (vedi sezione 3).
  - Carlo apre una chat precedente per chiedere come si verificavano le animazioni Three.js e riporterà la risposta.
  - Opzioni per la CME, da decidere: **A** accantonarla; **B** partire dalla 9.1 `formazione_flare.html` (basi che scorrono, torsione, riconnessione) e aggiungere il finale CME / eruzione mancata; **C** rifarla con un copione scritto da Carlo. In ogni caso Three.js r128.
- Seconda prova CME: `cme_da_flare.html` (file nuovo, Three.js r128, scena ripresa dalla 9.1 che resta intatta): polarità che scorrono e convergono, nascita della flux rope con filamento, flare con riconnessione della gabbia, finali CME (fronte/cavità/nucleo, telecamera che arretra fino al Sole intero, coronografo) e mancata (archi esterni che trattengono, filamento che ricade). Verificata in Chrome e con iPhone simulato. Giudizio di Carlo: "scarsa", manca il "quid", il legame flux rope–flare non si vede (sembra un ibrido). **Non caricata su GitHub.** Proposta di Claude: fermare le animazioni CME e usare dati reali (JHelioviewer: CME del 6/10 nel coronografo SOHO, M1.4, accanto all'M1.8 senza CME = sequenza di Bonfiglio).
- **Sera, analisi della sequenza di Bonfiglio con SDO** (screenshot di Carlo da JHelioviewer, sovrapposizioni con fusione 50%): HMI mostra una configurazione delta (striscia negativa serpeggiante dentro area positiva, due grandi macchie opposte a contatto); la GIF è già raddrizzata (nord in alto, come SDO; Daniele l'aveva corretta su indicazione di Carlo); sottrazione AIA 1600 08:00 − 07:53 → zona a ventaglio che si accende sulla plage positiva a destra/sopra la macchia negativa; AIA 171 07:50/08:00/08:10 → archi che si irradiano dal nucleo verso la plage, sistema di archi a sinistra non coinvolto. **Ipotesi:** cupola magnetica (fan-spine) sopra la polarità negativa intrusa; il confine netto è la separatrice (bordo della cupola), non la linea neutra; la zona scura sotto è un canale di filamento lungo la linea neutra tra macchia negativa e grande positiva; l'allungamento della scarica richiama la riconnessione slipping. Da verificare: orari dei fotogrammi di Daniele, allineamento con HMI Continuum. Il 211 è troppo confuso, il 171 funziona. La GONG è troppo poco risolta. L'allineamento automatico Daniele↔AIA non è riuscito (AIA satura).
- Consegnato `cap14_bonfiglio.tex` + cartella `immagini/` (zip): paragrafo per il cap. 14 (evento, ripresa, descrizione fotogramma per fotogramma, fisica del confine, HMI/AIA 1600/AIA 171, interpretazione dichiarata come ipotesi, cosa resta da verificare, ringraziamenti) + Approfondimento (raggio di Larmor, conduzione di Spitzer, separatrici e QSL, punto neutro fan-spine, slipping; bibliografia Priest-Forbes, Aulanier 2006, Masson 2009, Wang-Liu 2012). Dati mancanti in rosso con `\dacompletare{}`. Immagini da mettere in `immaginilibro/14_bonfiglio/`.
- `cap14_bonfiglio.tex` rifatto in **versione breve** su richiesta di Carlo (la prima era "troppo lunga e dispersiva"): introduzione, «Che cosa si vede» (fotogrammi 7, 10, 13, 16), «Il confronto con SDO» con il testo apprezzato da Carlo (cosa mostra / cosa vuol dire / configurazione nota / la risposta / con prudenza), due figure con le sei immagini di Carlo (HMI+AIA 1600 07:53-08:00-08:10; AIA 171+HMI 07:50-08:00-08:10; tagliata la scritta «07:53» del punto di vista). Niente approfondimento.
- Carlo l'ha già inserito nel libro (§14.4, pp. 405–407, fig. 14.19–14.21) con sue modifiche. **Da correggere:** figure 14.20 e 14.21 scambiate (immagine 171 sotto la didascalia HMI/1600 e viceversa); NOAA **14549** anche nella didascalia 14.19 (nel testo c'è già; nel cap. 9 si usa la forma a 5 cifre); «nonché», «perché», «consente», «U.A.I.», «Emilia-Romagna», punto dopo «amatoriale»; suggerito di spostare la frase «Questa ripresa è molto particolare…» prima delle due domande. Daniele presentato come "amico del gruppo Sole della U.A.I., fisico nucleare…".
- Corpo del testo: Claude non propende per l'11 in sé; il problema è Termes 10 su A4 a colonna unica (righe >100 caratteri). Alternative: interlinea, margini, Pagella 10. Decidere con **pagine di prova stampate** (serve un capitolo, es. il 4); comunque dipende da Axilone.
- Carlo stava molto male in serata (vedi sezione 8); verso la fine "va un po' meglio, il lavoro mi fa bene".
- Fine serata: l'incertezza sulla pubblicazione lo schiaccia ("torre di Babele", scadenza che si allontana); pensa a volte di rinunciare a presentazione, stampa e vendita, e di farsi solo una copia e rilasciare il PDF. Proposto di separare **due traguardi**: il libro finito (dipende da lui: fissare una data, chiudere una versione, stamparsene una copia) e la pubblicazione (aperta, senza fretta, un di più). Non decidere a notte fonda.
- Controllo con la sessione del 6–7/11 (vedi sotto e sezione 0). **Precisazione di questa sessione:** anche qui c'erano terminale, git, Chromium e Playwright (repository clonato, animazioni aperte nel browser); il problema della CME non è stato l'ambiente ma le scelte di Claude. Va notato che anche `spirale_parker.html`, fatta nella sessione "buona", è in **canvas 2D**, non in Three.js: il CDN di Three.js è bloccato anche là. Per le animazioni Three.js la copia locale di r128 si prende da GitHub (sezione 3).
- **Ripartire da:** come sta Carlo (telefonata al medico: fluoxetina, sonno, pensieri del terrazzo; mail al Centro Psicoanalitico, offerta di aiutarlo a scriverla); correzioni del §14.4 (figure 14.20/14.21 scambiate, NOAA 14549, refusi); da Daniele: orari, strumento, permesso; link Google Drive → inserirlo nelle due lettere (`\url{...}`), compilare i quattro PDF su Overleaf e spedire alla Lattanzi; correzioni di Marco all'inglese; decidere "The original edition is in Italian" → "The book was written in Italian" e le due proposte aperte della presentazione (1c); domande per Mollicone (1b: lingue, chi impagina, formato dei file, traduzione); eventuali pagine di prova per il corpo del testo; titolo definitivo; QR JHelioviewer; Marco può rileggere anche il CV inglese. CME: per ora ferma (proposta: usare dati reali JHelioviewer).

### 2026-11-08 (sera, ripresa della sessione del 6–7/11)
- In una chat nuova Claude non aveva terminale né repository. Scritta la **sezione 0** (che ambiente serve e come riconoscerlo), verificato lo stato del repository (GitHub `5ddb272`, spirale identica all'ultima versione) e aggiunto il punto 10 alle cose aperte.
- **Ripartire da (animazioni):** numerazione 11.1/11.2 della spirale; tempi di attraversamento della gonna; cursore della massa della CME con valori reali; scala dei colori comune.
