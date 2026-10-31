/*
  © 2026 Carlo Casoli — "Il Sole: Osservazione e Fisica"
  Licenza CC BY-NC-ND 4.0: https://creativecommons.org/licenses/by-nc-nd/4.0/deed.it

  Finestra mobile con la scheda (documentazione) dell'animazione.
  Uso nella pagina dell'animazione:
    <a href="#scheda" data-scheda>📖 Scheda</a>
    <script src="NOME_scheda.js"></script>   (il testo della scheda, in Markdown)
    <script src="scheda.js"></script>
  Nel file NOME_scheda.js le righe che iniziano con %% sono note e non vengono mostrate.
  Aggiungendo ?scheda all'indirizzo, la finestra si apre subito.
*/
(function () {
  'use strict';
  var me = document.currentScript;
  var NAME = location.pathname.replace(/^.*\//, '').replace(/\.html?$/, '') || 'pagina';
  var KEY = 'scheda:' + NAME;
  var KATEX = 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/';

  /* ---------- stato salvato (posizione, dimensione, ridotta) ---------- */
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(st) { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  var state = load();

  /* ---------- stile ---------- */
  var css = '' +
    '#sch-win{--sw-bg:#fffdf8;--sw-fg:#1f1d1a;--sw-muted:#6b665d;--sw-line:#e2dccf;--sw-head:#f3eee3;--sw-acc:#c4561b;' +
    'position:fixed;z-index:2147483600;display:none;flex-direction:column;background:var(--sw-bg);color:var(--sw-fg);' +
    'border:1px solid var(--sw-line);border-radius:12px;box-shadow:0 12px 40px rgba(0,0,0,.28),0 2px 8px rgba(0,0,0,.12);' +
    'overflow:hidden;resize:both;min-width:280px;min-height:46px;max-width:calc(100vw - 16px);max-height:calc(100vh - 16px);' +
    'font:15px/1.6 Charter,"Iowan Old Style",Georgia,serif;text-align:left;letter-spacing:normal;text-transform:none}' +
    '@media (prefers-color-scheme:dark){#sch-win{--sw-bg:#1b1916;--sw-fg:#efe9dd;--sw-muted:#a59e90;--sw-line:#38332b;--sw-head:#25221d;--sw-acc:#ff8a4c}}' +
    '#sch-win.open{display:flex}' +
    '#sch-win.min{height:auto!important;resize:none}#sch-win.min .sch-body{display:none}' +
    '#sch-win .sch-head{display:flex;align-items:center;gap:8px;padding:8px 8px 8px 14px;background:var(--sw-head);' +
    'border-bottom:1px solid var(--sw-line);cursor:move;user-select:none;-webkit-user-select:none;touch-action:none;' +
    'font:600 14px/1.3 -apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif}' +
    '#sch-win .sch-title{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
    '#sch-win .sch-btn{flex:none;width:30px;height:28px;border:1px solid var(--sw-line);border-radius:7px;background:var(--sw-bg);' +
    'color:var(--sw-fg);font:600 16px/1 -apple-system,BlinkMacSystemFont,sans-serif;cursor:pointer;display:grid;place-items:center;padding:0}' +
    '#sch-win .sch-btn:hover{border-color:var(--sw-acc);color:var(--sw-acc)}' +
    '#sch-win .sch-body{flex:1;overflow:auto;padding:4px 18px 18px;overscroll-behavior:contain}' +
    '#sch-win h1{display:none}' +
    '#sch-win h2{font:650 17px/1.3 -apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;margin:20px 0 8px;' +
    'padding-top:12px;border-top:1px solid var(--sw-line);color:var(--sw-fg)}' +
    '#sch-win h2:first-child,#sch-win h1+h2{border-top:0;padding-top:6px;margin-top:8px}' +
    '#sch-win h3{font:650 15px/1.3 -apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;margin:16px 0 6px}' +
    '#sch-win p{margin:0 0 11px}#sch-win ul,#sch-win ol{margin:0 0 12px;padding-left:20px}#sch-win li{margin:0 0 6px}' +
    '#sch-win a{color:var(--sw-acc)}#sch-win code{font:13px ui-monospace,Menlo,monospace}' +
    '#sch-win .sch-tex{font:13px ui-monospace,Menlo,monospace;color:var(--sw-muted)}' +
    '#sch-win .sch-foot{margin-top:18px;padding-top:10px;border-top:1px solid var(--sw-line);color:var(--sw-muted);' +
    'font:12px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif}' +
    '#sch-win .sch-msg{color:var(--sw-muted);font:14px/1.5 -apple-system,BlinkMacSystemFont,sans-serif;padding:14px 0}' +
    '@media (max-width:700px){#sch-win{left:0!important;right:0!important;top:auto!important;bottom:0!important;width:auto!important;' +
    'height:52vh!important;max-width:none;border-radius:14px 14px 0 0;resize:none}#sch-win.min{height:auto!important}' +
    '#sch-win .sch-head{cursor:default}}';
  var style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);

  /* ---------- finestra ---------- */
  var win = document.createElement('div');
  win.id = 'sch-win';
  win.setAttribute('role', 'dialog');
  win.setAttribute('aria-label', 'Scheda dell\'animazione');
  win.innerHTML =
    '<div class="sch-head"><span class="sch-title">📖 Scheda dell\'animazione</span>' +
    '<button type="button" class="sch-btn" data-act="min" title="Riduci / espandi" aria-label="Riduci">–</button>' +
    '<button type="button" class="sch-btn" data-act="close" title="Chiudi" aria-label="Chiudi">×</button></div>' +
    '<div class="sch-body"><div class="sch-msg">Caricamento…</div></div>';
  var head = win.querySelector('.sch-head'), body = win.querySelector('.sch-body');
  var titleEl = win.querySelector('.sch-title'), minBtn = win.querySelector('[data-act=min]');

  function place() {
    var w = Math.min(state.w || 440, window.innerWidth - 16);
    var h = Math.min(state.h || Math.round(window.innerHeight * 0.7), window.innerHeight - 16);
    var x = state.x != null ? state.x : window.innerWidth - w - 16;
    var y = state.y != null ? state.y : 64;
    x = Math.max(8, Math.min(x, window.innerWidth - Math.min(w, 200) - 8));
    y = Math.max(8, Math.min(y, window.innerHeight - 46));
    win.style.left = x + 'px'; win.style.top = y + 'px';
    win.style.width = w + 'px'; win.style.height = h + 'px';
  }
  function setMin(m) {
    win.classList.toggle('min', m); minBtn.textContent = m ? '▢' : '–';
    minBtn.setAttribute('aria-label', m ? 'Espandi' : 'Riduci');
    state.min = m; save(state);
  }

  /* ---------- trascinamento ---------- */
  var drag = null;
  head.addEventListener('pointerdown', function (e) {
    if (e.target.closest('.sch-btn') || window.innerWidth <= 700) return;
    var r = win.getBoundingClientRect();
    drag = { dx: e.clientX - r.left, dy: e.clientY - r.top };
    head.setPointerCapture(e.pointerId); e.preventDefault();
  });
  head.addEventListener('pointermove', function (e) {
    if (!drag) return;
    var x = Math.max(8 - win.offsetWidth + 120, Math.min(e.clientX - drag.dx, window.innerWidth - 120));
    var y = Math.max(0, Math.min(e.clientY - drag.dy, window.innerHeight - 40));
    win.style.left = x + 'px'; win.style.top = y + 'px';
  });
  head.addEventListener('pointerup', function () {
    if (!drag) return; drag = null;
    state.x = parseInt(win.style.left, 10); state.y = parseInt(win.style.top, 10); save(state);
  });
  head.addEventListener('dblclick', function (e) { if (!e.target.closest('.sch-btn')) setMin(!win.classList.contains('min')); });

  /* ---------- ridimensionamento: ricorda la misura ---------- */
  if (window.ResizeObserver) {
    new ResizeObserver(function () {
      if (!win.classList.contains('open') || win.classList.contains('min') || window.innerWidth <= 700) return;
      state.w = win.offsetWidth; state.h = win.offsetHeight; save(state);
    }).observe(win);
  }

  /* ---------- pulsanti ---------- */
  win.addEventListener('click', function (e) {
    var b = e.target.closest('.sch-btn'); if (!b) return;
    if (b.dataset.act === 'close') close(); else setMin(!win.classList.contains('min'));
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && win.classList.contains('open')) close(); });

  /* ---------- Markdown essenziale ---------- */
  function esc(s) { return s.replace(/&(?![a-zA-Z#0-9]+;)/g, '&amp;'); }
  function inline(s) {
    return s
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*\w])\*([^*\n]+)\*(?!\w)/g, '$1<em>$2</em>')
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }
  function markdown(src) {
    var math = [];
    src = src.replace(/\r/g, '')
      .replace(/\$\$([\s\S]+?)\$\$/g, function (m, t) { math.push([t, true]); return '\u0000' + (math.length - 1) + '\u0000'; })
      .replace(/(^|[^\\])\$([^$\n]+?)\$/g, function (m, p, t) { math.push([t, false]); return p + '\u0000' + (math.length - 1) + '\u0000'; })
      .replace(/\\\$/g, '$');
    var lines = src.split('\n'), out = [], para = [], list = null;
    function flushP() { if (para.length) { out.push('<p>' + inline(esc(para.join(' '))) + '</p>'); para = []; } }
    function flushL() { if (list) { out.push('<' + list.t + '>' + list.items.map(function (i) { return '<li>' + inline(esc(i)) + '</li>'; }).join('') + '</' + list.t + '>'); list = null; } }
    lines.forEach(function (ln) {
      var m;
      if (/^\s*$/.test(ln)) { flushP(); flushL(); return; }
      if ((m = ln.match(/^(#{1,3})\s+(.*)$/))) { flushP(); flushL(); var n = m[1].length; out.push('<h' + n + '>' + inline(esc(m[2])) + '</h' + n + '>'); return; }
      if ((m = ln.match(/^\s*([-*+]|\d+[.)])\s+(.*)$/))) {
        flushP(); var t = /\d/.test(m[1]) ? 'ol' : 'ul';
        if (!list || list.t !== t) { flushL(); list = { t: t, items: [] }; }
        list.items.push(m[2]); return;
      }
      if (list && /^\s+\S/.test(ln)) { list.items[list.items.length - 1] += ' ' + ln.trim(); return; }
      flushL(); para.push(ln.trim());
    });
    flushP(); flushL();
    return out.join('\n').replace(/\u0000(\d+)\u0000/g, function (m, i) {
      var t = math[+i];
      return '<span class="sch-math" data-display="' + (t[1] ? 1 : 0) + '">' + t[0].replace(/</g, '&lt;') + '</span>';
    });
  }
  function renderMath() {
    var els = body.querySelectorAll('.sch-math');
    if (!els.length) return;
    function go() {
      els.forEach(function (el) {
        try { window.katex.render(el.textContent, el, { displayMode: el.dataset.display === '1', throwOnError: false }); }
        catch (e) { el.className = 'sch-tex'; }
      });
    }
    if (window.katex) return go();
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = KATEX + 'katex.min.css'; document.head.appendChild(l);
    var s = document.createElement('script'); s.src = KATEX + 'katex.min.js'; s.onload = go;
    s.onerror = function () { els.forEach(function (el) { el.className = 'sch-tex'; }); };
    document.head.appendChild(s);
  }

  /* ---------- testo della scheda (dentro la pagina) ---------- */
  var loaded = false;
  function fill() {
    if (loaded) return; loaded = true;
    var src = document.getElementById('scheda');
    var txt = typeof window.SCHEDA === 'string' ? window.SCHEDA : (src ? src.textContent : '');
    txt = txt.replace(/^%%.*$/gm, '').replace(/^\n+/, '');
    if (!txt.trim()) { body.innerHTML = '<div class="sch-msg">Scheda non ancora disponibile.</div>'; return; }
    var t = txt.match(/^#\s+(.+)$/m); if (t) titleEl.textContent = '📖 ' + t[1].trim();
    body.innerHTML = markdown(txt) +
      '<div class="sch-foot">© 2026 Carlo Casoli — <em>Il Sole: Osservazione e Fisica</em> · ' +
      '<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.it" target="_blank" rel="license noopener">CC BY-NC-ND 4.0</a></div>';
    renderMath();
  }

  function open() {
    if (!win.parentNode) document.body.appendChild(win);
    place(); win.classList.add('open'); setMin(false); fill();
  }
  function close() { win.classList.remove('open'); }
  function toggle() { if (win.classList.contains('open') && !win.classList.contains('min')) close(); else open(); }

  window.addEventListener('resize', function () { if (win.classList.contains('open')) place(); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-scheda]'); if (!a) return;
    e.preventDefault(); toggle();
  });
  function boot() { document.body.appendChild(win); if (/^#scheda$/i.test(location.hash) || /[?&]scheda\b/i.test(location.search)) open(); }
  if (document.body) boot(); else document.addEventListener('DOMContentLoaded', boot);
})();
