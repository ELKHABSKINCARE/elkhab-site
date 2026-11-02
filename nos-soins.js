// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
// =====================================================================
// ELKHA.B — Page « Nos soins » (soins.elkhab.com) : les soins Bloom et Balance réunis, rangés par type
// Le contenu (titres, textes, soins) est écrit directement dans l'embed Carrd, pour que Google le lise.
// Ce fichier ne fait que la mise en forme : photos à l'échelle réelle, barres de texture, onglets,
// filtre Bloom / Balance, prix à jour et ouverture des fiches.
// =====================================================================
(function(){ if(document.getElementById('eb-montserrat')) return; var l = document.createElement('link'); l.id = 'eb-montserrat'; l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap'; document.head.appendChild(l); })();
(function(){
  if(window.ebNosSoins) return; window.ebNosSoins = true;

  // ───────────────────────────── RÉGLAGES ─────────────────────────────
  var REGLAGES = {
    espaceMenu: 64,          // hauteur du menu fixe : les onglets se collent juste dessous
    fondSite: "#f5f4f0",     // couleur exacte du fond du site
    versionPhotos: 1,        // +1 si une photo remplacée dans Shopify ne se met pas à jour
    // Couleurs de la barre de texture (du plus léger au plus riche)
    barreDebut: [233, 228, 218],
    barreFin:   [43, 38, 32],
    // Fichiers chargés pour ouvrir les fiches directement sur cette page
    base: "https://elkhabskincare.github.io/elkhab-site/",
    fichiers: ["produits-data-test.js", "produits-balance-test.js", "avis-engine.js", "fiche-engine.js"]
  };
  // ── NE RIEN MODIFIER EN DESSOUS ──────────────────────────────────────

  var root = document.getElementById('eb-ns'); if(!root) return;
  function esc(t){ var d = document.createElement('div'); d.textContent = t == null ? '' : String(t); return d.innerHTML; }
  function src(u, w){ if(!u) return ''; if(u.indexOf('cdn.shopify.com') < 0) return u; return u + (u.indexOf('?') < 0 ? '?' : '&') + 'width=' + w + '&eb=' + REGLAGES.versionPhotos; }

  var CSS = ""
  + "#eb-ns{animation:none;font-family:'Montserrat',sans-serif;color:#111;max-width:1180px;margin:0 auto;padding:0 0 60px;text-align:center;opacity:1 !important}"
  + "#eb-ns *{box-sizing:border-box}"
  + ".ens-hd{padding:34px 20px 0}"
  + ".ens-k{font-size:9.5px;letter-spacing:.3em;color:#8a8580;font-weight:600;margin:0 0 12px;text-transform:uppercase}"
  + "#eb-ns h1{font-size:30px;font-weight:600;letter-spacing:.02em;margin:0 0 12px;line-height:1.2}"
  + ".ens-in{font-size:13px;font-weight:300;line-height:1.75;color:#4d4a44;max-width:560px;margin:0 auto}"
  + ".ens-bar{position:sticky;top:" + REGLAGES.espaceMenu + "px;z-index:50;margin:26px 0 0;padding:14px 0 12px;background:rgba(245,244,240,.88);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}"
  + ".ens-tabs{display:flex;gap:28px;justify-content:center;padding:0 20px;overflow-x:auto;white-space:nowrap;scrollbar-width:none;-webkit-overflow-scrolling:touch}"
  + ".ens-tabs::-webkit-scrollbar{display:none}"
  + ".ens-tabs a{font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#8a8580;padding-bottom:6px;border-bottom:1px solid transparent;font-weight:500;text-decoration:none;flex:0 0 auto;transition:color .25s ease,border-color .25s ease}"
  + ".ens-tabs a.on{color:#111;border-bottom-color:#111;font-weight:600}"
  + ".ens-tabs a.vide{opacity:.35;pointer-events:none}"
  + ".ens-gm{display:flex;gap:18px;justify-content:center;margin:12px 0 0}"
  + ".ens-gm button{background:none;border:0;padding:0 0 3px;font-family:inherit;font-size:11px;font-weight:300;color:#8a8580;cursor:pointer;border-bottom:1px solid transparent}"
  + ".ens-gm button.on{color:#111;font-weight:500;border-bottom-color:#111}"
  + ".ens-s{padding:54px 24px 0;scroll-margin-top:" + (REGLAGES.espaceMenu + 110) + "px}"
  + ".ens-s.vide{display:none}"
  + "#eb-ns h2{font-size:24px;font-weight:600;letter-spacing:.02em;margin:0 0 12px}"
  + ".ens-txt{font-size:13px;font-weight:300;line-height:1.75;color:#4d4a44;max-width:560px;margin:0 auto}"
  + ".ens-phr{font-size:13px;font-weight:400;color:#111;margin:22px 0 0}"
  // rangées centrées : un type avec 2 ou 3 soins reste au milieu de la page
  + ".ens-grid{--col:5;--gap:24px;display:flex;flex-wrap:wrap;justify-content:center;gap:40px var(--gap);margin:34px auto 0;max-width:1080px}"
  + ".ens-grid>.ens-c{flex:0 0 calc((100% - (var(--col) - 1) * var(--gap)) / var(--col));min-width:0}"
  + "@media(max-width:1099px){.ens-grid{--col:4}}"
  + "@media(max-width:899px){.ens-grid{--col:3}}"
  + "@media(max-width:599px){.ens-grid{--col:2;--gap:14px;row-gap:34px}.ens-s{padding:44px 16px 0}#eb-ns h1{font-size:25px}#eb-ns h2{font-size:21px}.ens-tabs{justify-content:flex-start;gap:22px}.ens-in,.ens-txt{font-size:12.5px}}"
  + ".ens-c{display:block;text-decoration:none;color:#111;cursor:pointer}"
  + ".ens-c.off{display:none}"
  + ".ens-ph{display:block;position:relative;aspect-ratio:3 / 4;overflow:hidden;max-width:230px;margin:0 auto}"
  + ".ens-ph img{color:transparent;display:block;position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:50% 86%;opacity:0;transition:opacity .6s ease}"
  + ".ens-ph img.pret{opacity:1}"
  + ".ens-ph img.brut{opacity:1;-webkit-mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent),linear-gradient(transparent,#000 8%,#000 92%,transparent);-webkit-mask-composite:source-in;mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent),linear-gradient(transparent,#000 8%,#000 92%,transparent);mask-composite:intersect}"
  + ".ens-c:hover .ens-ph img{transform:translateY(-3px)}.ens-ph img{transition:opacity .6s ease,transform .4s ease}"
  + ".ens-g{font-size:8.5px;letter-spacing:.28em;font-weight:600;margin:10px 0 6px;text-transform:uppercase}"
  + ".ens-g.bloom{color:#c58b74}.ens-g.balance{color:#7d8f66}"
  + "#eb-ns h3{font-size:12px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;margin:0 0 6px;line-height:1.35}"
  + ".ens-a{font-size:11px;font-weight:300;color:#4d4a44;margin:0 0 6px;line-height:1.5}"
  + ".ens-p{font-size:11px;font-weight:400;margin:0}"
  + ".ens-sep{flex:0 0 100%;display:flex;align-items:center;gap:12px;margin:-12px 0 -4px;font-size:10px;letter-spacing:.22em;text-transform:uppercase;font-weight:600;color:#111}"
  + ".ens-sep i{flex:1;height:4px;display:block}"
  + ".ens-sep span:empty{display:none}";
  var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);

  // ── Prix toujours à jour (ceux des fiches, quand elles sont chargées) ──
  function majPrix(){
    var P = window.EB_PRODUITS || {};
    root.querySelectorAll('.ens-c').forEach(function(c){
      var d = P[c.getAttribute('data-fiche')], el = c.querySelector('.ens-prix');
      if(d && d.prix && el) el.textContent = d.prix.replace('€', ' €').replace('  ', ' ');
    });
  }

  // ── Barres de texture : sous chaque rangée, de plus en plus foncées ──
  function teinte(t){ var a = REGLAGES.barreDebut, b = REGLAGES.barreFin; return 'rgb(' + [0, 1, 2].map(function(i){ return Math.round(a[i] + (b[i] - a[i]) * t); }).join(',') + ')'; }
  function barres(){
    root.querySelectorAll('.ens-s').forEach(function(s){
      var grid = s.querySelector('.ens-grid'); if(!grid) return;
      grid.querySelectorAll('.ens-sep').forEach(function(x){ x.remove(); });
      var cartes = [].filter.call(grid.querySelectorAll('.ens-c'), function(c){ return !c.classList.contains('off'); });
      s.classList.toggle('vide', !cartes.length);
      var deb = s.getAttribute('data-debut'), fin = s.getAttribute('data-fin');
      var phr = s.querySelector('.ens-phr'); if(phr) phr.style.display = (deb && cartes.length > 1) ? '' : 'none';
      if(!deb || cartes.length < 2) return;
      var cols = parseInt(getComputedStyle(grid).getPropertyValue('--col'), 10) || 1;
      var rangs = Math.ceil(cartes.length / cols);
      for(var r = 0; r < rangs; r++){
        var der = cartes[Math.min(cartes.length, (r + 1) * cols) - 1];
        var sep = document.createElement('div'); sep.className = 'ens-sep'; sep.setAttribute('aria-hidden', 'true');
        sep.innerHTML = '<span>' + (r === 0 ? esc(deb) : '') + '</span><i style="background:linear-gradient(90deg,' + teinte(r / rangs) + ',' + teinte((r + 1) / rangs) + ')"></i><span>' + (r === rangs - 1 ? esc(fin) : '') + '</span>';
        der.after(sep);
      }
    });
    root.querySelectorAll('.ens-tabs a').forEach(function(a){
      var s = document.getElementById('ens-' + a.getAttribute('data-type'));
      a.classList.toggle('vide', !!(s && s.classList.contains('vide')));
    });
  }

  // ── Filtre Tout voir / Bloom / Balance ──
  root.querySelectorAll('.ens-gm button').forEach(function(b){
    b.addEventListener('click', function(){
      var g = b.getAttribute('data-g');
      root.querySelectorAll('.ens-gm button').forEach(function(x){ x.classList.toggle('on', x === b); });
      root.querySelectorAll('.ens-c').forEach(function(c){ c.classList.toggle('off', !!g && c.getAttribute('data-gamme') !== g); });
      barres();
    });
  });

  // ── Onglets : un clic fait glisser jusqu'au type ; l'onglet suit la lecture ──
  var bar = root.querySelector('.ens-bar');
  function aller(type, doux){
    var s = document.getElementById('ens-' + type); if(!s) return;
    var y = window.scrollY + s.getBoundingClientRect().top - REGLAGES.espaceMenu - (bar ? bar.offsetHeight : 0) + 8;
    window.scrollTo({ top: Math.max(0, y), behavior: doux ? 'smooth' : 'auto' });
  }
  function marquer(type){
    root.querySelectorAll('.ens-tabs a').forEach(function(a){
      var on = a.getAttribute('data-type') === type; a.classList.toggle('on', on);
      if(on){ var t = a.parentNode, r = a.offsetLeft - t.clientWidth / 2 + a.offsetWidth / 2; if(t.scrollWidth > t.clientWidth) t.scrollTo({ left: r, behavior: 'smooth' }); }
    });
  }
  root.querySelectorAll('.ens-tabs a').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault(); var t = a.getAttribute('data-type'); aller(t, true); marquer(t);
      try { history.replaceState(null, '', '?type=' + t); } catch(err){}
    });
  });
  var secs = [].slice.call(root.querySelectorAll('.ens-s'));
  function suivre(){
    var lim = REGLAGES.espaceMenu + (bar ? bar.offsetHeight : 0) + 60, cur = secs[0];
    secs.forEach(function(s){ if(!s.classList.contains('vide') && s.getBoundingClientRect().top <= lim) cur = s; });
    if(cur) marquer(cur.getAttribute('data-type'));
  }
  window.addEventListener('scroll', suivre, { passive: true });

  // ── Fiches : elles s'ouvrent ici même quand le moteur des fiches est chargé ──
  root.addEventListener('click', function(e){
    var c = e.target.closest && e.target.closest('.ens-c'); if(!c) return;
    var id = c.getAttribute('data-fiche');
    if(typeof window.ebFicheOpen === 'function' && window.EB_PRODUITS && window.EB_PRODUITS[id]){ e.preventDefault(); window.ebFicheOpen(id); }
  });
  function charger(i){
    if(i >= REGLAGES.fichiers.length){ majPrix(); return; }
    var f = REGLAGES.fichiers[i];
    if(document.querySelector('script[src*="' + f + '"]')){ charger(i + 1); return; }
    var s = document.createElement('script'); s.src = REGLAGES.base + f;
    s.onload = s.onerror = function(){ if(i < 2) majPrix(); charger(i + 1); };
    document.body.appendChild(s);
  }
  charger(0);

  // ── Photos : fondues dans le fond du site, même échelle, même ligne de sol ──
  var FONDSITE = (function(c){ c = c.replace('#', ''); return [0, 2, 4].map(function(i){ return parseInt(c.substr(i, 2), 16); }); })(REGLAGES.fondSite);
  var CW = 600, CH = 800, SOL = CH * .86, PXCM = CH * .66 / 14.5;
  function couleur(c){ c = (c || '').replace('#', ''); return c.length === 6 ? [0, 2, 4].map(function(i){ return parseInt(c.substr(i, 2), 16); }) : null; }
  function retravailler(img){
    var s = { hauteur: parseFloat(img.getAttribute('data-h')) || 0 }, url = src(img.getAttribute('data-src'), 700);
    var FOND = couleur(img.getAttribute('data-fond')) || FONDSITE;
    var secours = setTimeout(function(){ img.classList.add('brut'); }, 6000);
    fetch(url, { mode: 'cors' }).then(function(r){ if(!r.ok) throw 0; return r.blob(); })
    .then(function(b){ return createImageBitmap(b); })
    .then(function(bmp){
      var w = bmp.width, h = bmp.height, c = document.createElement('canvas'); c.width = w; c.height = h;
      var x = c.getContext('2d'); x.drawImage(bmp, 0, 0);
      var d = x.getImageData(0, 0, w, h), p = d.data, i, k;
      // 1. couleur du fond de la photo (bords du haut et des côtés)
      var ech = [[], [], []];
      function prendre(px, py){ var j = (py * w + px) * 4; ech[0].push(p[j]); ech[1].push(p[j + 1]); ech[2].push(p[j + 2]); }
      for(k = 0; k < w; k += 4){ prendre(k, 2); prendre(k, 5); }
      for(k = 0; k < h / 4; k += 4){ prendre(2, k | 0); prendre(w - 3, k | 0); }
      var F = ech.map(function(a, n){ a.sort(function(u, v){ return u - v; }); return FOND[n] / (a[a.length >> 1] || 255); });
      // 2. le fond de la photo devient exactement celui du site
      for(i = 0; i < p.length; i += 4){ p[i] = Math.min(255, p[i] * F[0]); p[i + 1] = Math.min(255, p[i + 1] * F[1]); p[i + 2] = Math.min(255, p[i + 2] * F[2]); }
      x.putImageData(d, 0, 0);
      // 3. repérer le soin (colonnes hautes ; l'ombre au sol, plate, est ignorée)
      var col = new Uint32Array(w), dif = new Uint8Array(w * h);
      for(var y = 0; y < h; y++) for(var xx = 0; xx < w; xx++){
        i = (y * w + xx) * 4;
        if(Math.max(Math.abs(p[i] - FOND[0]), Math.abs(p[i + 1] - FOND[1]), Math.abs(p[i + 2] - FOND[2])) > 10){ dif[y * w + xx] = 1; col[xx]++; }
      }
      var x0 = -1, x1 = -1;
      // le flacon = les colonnes nettement différentes du fond (une ombre douce n'est pas prise pour le flacon)
      var fort = new Uint32Array(w);
      for(var y3 = 0; y3 < h; y3++) for(var x3 = 0; x3 < w; x3++){ i = (y3 * w + x3) * 4; if(Math.max(Math.abs(p[i] - FOND[0]), Math.abs(p[i + 1] - FOND[1]), Math.abs(p[i + 2] - FOND[2])) > 40) fort[x3]++; }
      for(xx = 0; xx < w; xx++) if(fort[xx] > h * .08){ if(x0 < 0) x0 = xx; x1 = xx; }
      if(x0 < 0 || x1 - x0 < w * .1){ x0 = x1 = -1; for(xx = 0; xx < w; xx++) if(col[xx] > h * .12){ if(x0 < 0) x0 = xx; x1 = xx; } }
      var y0 = -1, y1 = -1;
      if(x0 >= 0 && x1 - x0 > w * .1){
        var seuil = Math.max(2, (x1 - x0) * .04);
        for(y = 0; y < h; y++){ var n = 0; for(xx = x0; xx <= x1; xx++) n += dif[y * w + xx]; if(n >= seuil){ if(y0 < 0) y0 = y; y1 = y; } }
        // le pied du soin = dernière ligne vraiment pleine (le reflet sous le flacon ne compte pas)
        if(y0 >= 0){
          var yb = y1, plein = (x1 - x0) * .5;
          while(yb > y0){ var m = 0; for(xx = x0; xx <= x1; xx++) m += dif[yb * w + xx]; if(m >= plein) break; yb--; }
          if(y1 - yb > (y1 - y0) * .03) y1 = yb;
        }
      }
      // 4. bords fondus (l'ombre s'efface doucement au lieu d'être coupée)
      x.globalCompositeOperation = 'destination-in';
      //    seulement AUTOUR du flacon : le flacon lui-même n'est jamais rendu transparent (pas de halo blanc sur ses bords)
      var fg = .14, fd = .86, fh = .08, fb = .92;
      if(x0 >= 0){ var mg = (x1 - x0) * .1 + 4; fg = Math.min(.14, Math.max(0, (x0 - mg) / w)); fd = Math.max(.86, Math.min(1, (x1 + mg) / w)); }
      if(y0 >= 0){ fh = Math.min(.08, Math.max(0, (y0 - 3) / h)); fb = Math.max(.92, Math.min(1, (y1 + 3) / h)); }
      var g = x.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, fg > .001 ? 'rgba(0,0,0,0)' : '#000'); g.addColorStop(fg, '#000'); g.addColorStop(fd, '#000'); g.addColorStop(1, fd < .999 ? 'rgba(0,0,0,0)' : '#000');
      x.fillStyle = g; x.fillRect(0, 0, w, h);
      g = x.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, fh > .001 ? 'rgba(0,0,0,0)' : '#000'); g.addColorStop(fh, '#000'); g.addColorStop(fb, '#000'); g.addColorStop(1, fb < .999 ? 'rgba(0,0,0,0)' : '#000');
      x.fillStyle = g; x.fillRect(0, 0, w, h);
      // 5. cadre commun : même échelle (hauteur réelle), même ligne de sol
      var o = document.createElement('canvas'); o.width = CW; o.height = CH;
      var ox = o.getContext('2d');   // fond transparent : la photo se fond dans la page
      var sc, dx, dy;
      if(y0 >= 0 && s.hauteur && (y1 - y0) > h * .2){
        sc = s.hauteur * PXCM / (y1 - y0);
        if((x1 - x0) * sc > CW * .9) sc = CW * .9 / (x1 - x0);
        dx = CW / 2 - (x0 + x1) / 2 * sc; dy = SOL - y1 * sc;
      } else { sc = Math.min(CW / w, CH / h); dx = (CW - w * sc) / 2; dy = CH - h * sc; }
      ox.drawImage(c, dx, dy, w * sc, h * sc);
      o.toBlob(function(b){
        clearTimeout(secours);
        if(!b){ img.classList.add('brut'); return; }
        img.onload = function(){ img.classList.add('pret'); };
        img.src = URL.createObjectURL(b);
      }, 'image/png');
    })
    .catch(function(){ clearTimeout(secours); img.classList.add('brut'); });
  }

  var imgs = root.querySelectorAll('.ens-ph img');
  if('IntersectionObserver' in window && window.fetch && window.createImageBitmap){
    var io = new IntersectionObserver(function(en){ en.forEach(function(e){ if(e.isIntersecting){ io.unobserve(e.target); retravailler(e.target); } }); }, { rootMargin: '800px 0px' });
    imgs.forEach(function(im){ io.observe(im); });
  } else imgs.forEach(function(im){ im.src = src(im.getAttribute('data-src'), 700); im.classList.add('brut'); });

  // ── Démarrage ──
  barres(); majPrix();
  var largeur = window.innerWidth;
  window.addEventListener('resize', function(){ if(window.innerWidth !== largeur){ largeur = window.innerWidth; barres(); } });
  var demande = (location.search.match(/[?&]type=([a-z-]+)/) || [])[1];
  if(demande){ marquer(demande); setTimeout(function(){ aller(demande, false); }, 60); window.addEventListener('load', function(){ aller(demande, false); }); }
  else suivre();
})();
