SCHEDA = String.raw`
%% ↑ Prima riga: non modificare.  Sotto c'è il testo della scheda in Markdown:
%%   ## titolo   **grassetto**   *corsivo*   - elenco   formule tra $...$
%%   Non usare l'accento grave.
%%   Testo ripreso dal paragrafo 5.7 del libro (Script 5.1), capitolo5.tex.

# Effetto Ω: avvolgimento del campo e ciclo di 22 anni

## Che cosa mostra l'animazione

L'animazione mostra come la rotazione differenziale del Sole avvolga le linee del campo magnetico e dia origine al ciclo delle macchie solari (**effetto Ω**). Il Sole non ruota come un corpo rigido: l'equatore compie un giro in circa 25 giorni, i poli in circa 35. Poiché il gas ionizzato trascina con sé le linee di campo, quelle che all'inizio corrono da un polo all'altro (campo *poloidale*) si inclinano, si allungano e si avvolgono attorno al Sole, fino a trasformarsi in un campo orizzontale molto più intenso (campo *toroidale*).

La scena è divisa in due pannelli affiancati. Quello di sinistra mostra il Sole visto dall'esterno, con le linee di campo, disegnate sulla sfera alla base della zona convettiva (0,7 $R_\odot$), dove avviene lo stiramento, che si avvolgono man mano che passa il tempo. Quello di destra mostra una sezione interna: i tubi di flusso toroidali che si formano alla base della zona convettiva, la loro risalita verso la superficie, dove emergono come coppie di macchie, e il lento ritorno del campo poloidale con polarità invertita. Dopo circa 11 anni il campo ai poli ha cambiato segno e il ciclo ricomincia con le polarità opposte: per questo la simulazione copre due cicli, cioè i 22 anni del ciclo magnetico completo.

L'animazione è uno schema qualitativo e **non è in scala**: il profilo di rotazione, le latitudini dei tubi e i tempi sono semplificati per rendere leggibile la sequenza dei fenomeni.

## Elementi della scena

- **Pannello di sinistra (vista esterna)**: il Sole in giallo, con una linea bianca tratteggiata che segna l'equatore e un cerchio tratteggiato a 0,7 $R_\odot$, la base della zona convettiva. Le frecce a sinistra indicano la rotazione: più lunghe all'equatore (25 giorni) e più corte verso i poli (circa 35 giorni).
- **Linee di campo**: dodici meridiani distribuiti in longitudine, di cui quello centrale è più spesso. All'inizio sono verticali; poi si inclinano e si avvolgono. Il colore indica la polarità e le piccole frecce il verso del campo.
- **Tubi di flusso toroidali**: quando le linee diventano quasi orizzontali compaiono, in ciascun emisfero, tubi colorati con frecce bianche. Il rosso e il blu indicano i due versi opposti del campo, che sono opposti nei due emisferi.
- **Pannello di destra (sezione interna)**: la sezione del Sole con l'asse polare tratteggiato e le indicazioni di polo nord e polo sud. I cappucci colorati ai poli rappresentano il campo poloidale, che cambia colore, e quindi segno, nel corso del ciclo.
- **Tubi in sezione**: cerchi che compaiono alla base della zona convettiva a latitudini via via più basse (da 35° a 5°). Il punto bianco indica il campo che esce dal piano, la croce il campo che vi entra.
- **Macchie e archi Ω**: quando un tubo emerge in superficie compaiono due macchie di polarità opposta, contrassegnate da + e −, unite da un arco rosso a forma di Ω. Le due macchie poi si allontanano e si sfumano.
- **Nastro trasportatore**: circolazione meridiana, con il gas che in superficie scorre verso i poli e in profondità ritorna verso l'equatore. I pallini si muovono lungo il percorso: rossi in superficie, blu nel ritorno profondo, grigi nei tratti di raccordo.
- **Barra del campo toroidale**: indica quanto campo orizzontale si è accumulato.

## Comandi e parametri personalizzabili

L'animazione parte da sola e ricomincia dopo ogni ciclo completo. I controlli in basso permettono di fermarla e di scorrere il tempo a mano.

- **Pausa / Riprendi**: sospende o riprende l'animazione. Quando si muove uno dei due cursori, l'animazione si ferma da sola.
- **Ciclo solare, 0–22 anni**: cursore che percorre i due cicli (valore iniziale 0). A destra è indicato l'istante corrente, con l'anno e il numero del ciclo. Il secondo ciclo comincia dopo 11 anni, con polarità invertite.
- **Avvolgimento del campo, in giorni**: cursore da 0 a 700 giorni, circa i primi 1,9 anni di ciascun ciclo. Serve a osservare con calma come le linee si inclinano e si avvolgono nella fase iniziale.
- **Campo orizzontale (toroidale)**: barra di sola lettura, che si riempie man mano che il campo si avvolge e si svuota quando i tubi emergono.

Il tempo scorre più lentamente nei primi 1,9 anni di ciascun ciclo, la fase dell'avvolgimento, e più velocemente dopo. L'animazione si adatta allo schermo: su telefono i due pannelli si dispongono uno sopra l'altro. Segue inoltre il tema chiaro o scuro del dispositivo.

## Suggerimenti di utilizzo

Per capire l'avvolgimento conviene fermare l'animazione e muovere lentamente il cursore dei giorni, osservando come le linee vicine all'equatore, più veloci, si inclinano per prime, mentre la barra del campo toroidale si riempie. Con il cursore dei 22 anni si può poi seguire la sequenza dei tubi: ogni tubo emerge a una latitudine più bassa del precedente, e ogni coppia di macchie dà un piccolo contributo al cambio di segno del campo ai poli. Conviene infine confrontare i due cicli per osservare l'inversione delle polarità.

`;  // ← Ultima riga: non modificare.
