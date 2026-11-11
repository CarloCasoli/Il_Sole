/*
  © 2026 Carlo Casoli — "Il Sole: Osservazione e Fisica"
  Licenza CC BY-NC-ND 4.0: https://creativecommons.org/licenses/by-nc-nd/4.0/deed.it

  Lingua delle animazioni: italiano (predefinito) oppure inglese con ?lang=en nell'indirizzo.
  Uso nella pagina dell'animazione, PRIMA dello script dell'animazione:
    <script src="lingua.js"></script>
  Nel testo della pagina:
    <span data-en="English text">Testo italiano</span>      (il testo inglese sostituisce quello italiano)
    <canvas aria-label="Grafico" data-en-aria="Chart">      (lo stesso per aria-label)
    <span data-lang-switch></span>                          (dove far comparire il selettore IT | EN)
  Nello script dell'animazione:
    T('testo italiano', 'English text')    restituisce il testo nella lingua scelta
    NUM('26,73 MeV')                       in inglese diventa '26.73 MeV'
    LANG                                   vale 'it' oppure 'en'
  I collegamenti alle altre animazioni e all'indice conservano la lingua scelta.
*/
(function () {
  'use strict';
  var m = /[?&]lang=([a-z]{2})\b/i.exec(location.search);
  var LANG = m && m[1].toLowerCase() === 'en' ? 'en' : 'it';
  var EN = LANG === 'en';
  window.LANG = LANG;
  window.T = function (it, en) { return EN && en != null ? en : it; };
  window.NUM = function (s) { return EN ? String(s).replace(/(\d),(\d)/g, '$1.$2') : s; };

  /* indirizzo della stessa pagina (o di un'altra) nella lingua indicata */
  function withLang(href, lang) {
    var hash = '', i = href.indexOf('#');
    if (i >= 0) { hash = href.slice(i); href = href.slice(0, i); }
    var q = '', j = href.indexOf('?');
    if (j >= 0) { q = href.slice(j + 1); href = href.slice(0, j); }
    var parts = q ? q.split('&').filter(function (p) { return p && !/^lang=/i.test(p); }) : [];
    if (lang === 'en') parts.push('lang=en');
    return href + (parts.length ? '?' + parts.join('&') : '') + hash;
  }

  function apply() {
    if (EN) {
      document.documentElement.lang = 'en';
      document.querySelectorAll('[data-en]').forEach(function (el) {
        var en = el.getAttribute('data-en');
        if (el.tagName === 'TITLE') { document.title = en; return; }
        /* il pallino colorato delle legende (<i> vuoto all'inizio) viene conservato */
        var f = el.firstElementChild;
        var keep = f && f.tagName === 'I' && !f.textContent ? f.outerHTML : '';
        el.innerHTML = keep + en;
      });
      document.querySelectorAll('[data-en-aria]').forEach(function (el) {
        el.setAttribute('aria-label', el.getAttribute('data-en-aria'));
      });
      /* licenza Creative Commons: pagina in inglese */
      document.querySelectorAll('a[href*="creativecommons.org"]').forEach(function (a) {
        a.setAttribute('href', a.getAttribute('href').replace(/deed\.it$/, 'deed.en'));
      });
      /* i collegamenti interni (altre animazioni, indice) restano in inglese */
      document.querySelectorAll('a[href]').forEach(function (a) {
        var h = a.getAttribute('href');
        if (/^[\w\-.\/]+\.html?([?#].*)?$/i.test(h) && !/^\w+:/.test(h)) a.setAttribute('href', withLang(h, 'en'));
      });
    }
    /* selettore di lingua */
    document.querySelectorAll('[data-lang-switch]').forEach(function (box) {
      box.className = (box.className ? box.className + ' ' : '') + 'cc-badge lang-sw';
      box.setAttribute('role', 'group');
      box.setAttribute('aria-label', EN ? 'Language' : 'Lingua');
      box.innerHTML = '';
      [['it', 'IT', 'Italiano'], ['en', 'EN', 'English']].forEach(function (l, k) {
        if (k) box.appendChild(document.createTextNode(' | '));
        var a = document.createElement('a');
        a.textContent = l[1]; a.title = l[2]; a.setAttribute('lang', l[0]);
        a.href = withLang(location.pathname.replace(/^.*\//, '') + location.search + location.hash, l[0]);
        if (l[0] === LANG) { a.setAttribute('aria-current', 'true'); a.style.fontWeight = '700'; a.style.textDecoration = 'none'; }
        /* l'indirizzo viene ricalcolato al clic: così conserva il foglio aperto (#1…#4) */
        a.addEventListener('click', function (e) {
          e.preventDefault();
          if (l[0] === LANG) return;
          location.href = withLang(location.pathname.replace(/^.*\//, '') + location.search + location.hash, l[0]);
        });
        box.appendChild(a);
      });
    });
  }
  if (document.readyState === 'loading' && !document.body) document.addEventListener('DOMContentLoaded', apply);
  else apply();
})();
