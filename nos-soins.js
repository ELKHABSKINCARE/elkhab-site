// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
// =====================================================================
// ELKHA.B — Page « Nos soins » : les soins Bloom et Balance réunis, rangés par type
// Le contenu (titres, textes, soins) est écrit dans les 2 embeds Carrd, pour que Google le lise.
// Ce fichier fait la mise en forme : un type à la fois (comme des pages), photos à l'échelle réelle,
// barres de texture, filtre Bloom / Balance, prix à jour et ouverture des fiches.
// =====================================================================
(function(){ if(document.getElementById('eb-montserrat')) return; var l = document.createElement('link'); l.id = 'eb-montserrat'; l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap'; document.head.appendChild(l); })();
(function(){
  if(window.ebNosSoins) return; window.ebNosSoins = true;

  // ───────────────────────────── RÉGLAGES ─────────────────────────────
  var REGLAGES = {
    espaceMenu: 64,          // hauteur du menu fixe : la bande des types se colle juste dessous
    fondSite: "#f5f4f0",     // couleur exacte du fond du site
    versionPhotos: 1,        // +1 si une photo remplacée dans Shopify ne se met pas à jour
    typeParDefaut: "nettoyants",
    // Fond de la bande des types (calme, dans les beiges du site)
    bande: "linear-gradient(90deg,#fbfaf7,#e9e3d9 55%,#d6cdbf)",
    // Barre de texture (du plus léger au plus riche)
    barreDebut: [247, 246, 243],
    barreFin:   [17, 17, 17],
    base: "https://elkhabskincare.github.io/elkhab-site/",
    fichiers: ["produits-data-test.js", "produits-balance-test.js", "avis-engine.js", "fiche-engine.js"]
  };
  // ── NE RIEN MODIFIER EN DESSOUS ──────────────────────────────────────

  var root;
  (function attendre(n){
    root = document.getElementById('eb-ns');
    var suite = document.querySelectorAll('.eb-ns-suite .ens-s').length;
    if(root && (suite || document.readyState === 'complete' || n <= 0)) return demarrer();
    if(n > 0) setTimeout(function(){ attendre(n - 1); }, 100);
  })(40);

  function demarrer(){
  if(!root || root.getAttribute('data-pret')) return; root.setAttribute('data-pret', '1');
  function esc(t){ var d = document.createElement('div'); d.textContent = t == null ? '' : String(t); return d.innerHTML; }
  function src(u, w){ if(!u) return ''; if(u.indexOf('cdn.shopify.com') < 0) return u; return u + (u.indexOf('?') < 0 ? '?' : '&') + 'width=' + w + '&eb=' + REGLAGES.versionPhotos; }
  function brute(img){ return (img.getAttribute('data-src') || img.getAttribute('src') || '').replace(/([?&])width=\d+&?/, '$1').replace(/[?&]$/, ''); }

  // Les types du 2e embed rejoignent le 1er (une seule page pour la cliente)
  var zone = root.querySelector('.ens-zone') || root;
  document.querySelectorAll('.eb-ns-suite').forEach(function(su){ su.querySelectorAll('.ens-s').forEach(function(s){ zone.appendChild(s); }); su.style.display = 'none'; });

  function teinte(t){ var a = REGLAGES.barreDebut, b = REGLAGES.barreFin; return 'rgb(' + [0, 1, 2].map(function(i){ return Math.round(a[i] + (b[i] - a[i]) * t); }).join(',') + ')'; }
  // la bande reste claire longtemps et ne fonce vraiment qu'à la fin : les mots restent lisibles partout
  function tBande(x){ return x; }
  // texte noir ou clair : on garde celui qui se lit le mieux sur cette partie de la bande
  function sombre(t){
    var a = REGLAGES.barreDebut, b = REGLAGES.barreFin;
    var L = .2126 * Math.pow((a[0] + (b[0] - a[0]) * t) / 255, 2.2) + .7152 * Math.pow((a[1] + (b[1] - a[1]) * t) / 255, 2.2) + .0722 * Math.pow((a[2] + (b[2] - a[2]) * t) / 255, 2.2);
    return (L + .05) / .056 < 1.0 / (L + .05) * .98;
  }
  var CSS = ""
  + "#eb-ns{animation:none;opacity:1 !important;font-family:'Montserrat',sans-serif;color:#111;max-width:none;margin:0 auto;padding:0 0 70px;text-align:center}"
  + "#eb-ns *{box-sizing:border-box}"
  + ".ens-hd{padding:72px 20px 0;max-width:760px;margin:0 auto}"
  + ".ens-k{font-size:9.5px;letter-spacing:.3em;color:#8a8580;font-weight:600;margin:0 0 20px;text-transform:uppercase}"
  + "#eb-ns h1{font-size:30px;font-weight:600;letter-spacing:.02em;margin:0 0 22px;line-height:1.2}"
  + ".ens-in{font-size:13px;font-weight:300;line-height:1.75;color:#4d4a44;margin:0 auto}"
  // la bande des types, en dégradé Bloom → Balance, collée sous le menu
  // Bannière : la photo à droite, le texte à gauche sur la couleur du mur de la photo (sans couture)
  // photo entière (pas de zoom), à droite ; à gauche, le dégradé reprend exactement les couleurs du bord de la photo
  + ".ens-ban{position:relative;height:clamp(560px,44vw,740px);display:flex;overflow:hidden;background:linear-gradient(180deg,rgb(229,198,188) 0%,rgb(213,179,167) 10%,rgb(213,180,165) 20%,rgb(212,178,166) 30%,rgb(210,178,165) 40%,rgb(209,177,164) 50%,rgb(206,172,160) 60%,rgb(219,192,182) 70%,rgb(221,192,180) 80%,rgb(209,178,164) 90%,rgb(191,161,150) 100%)}"
  + ".ens-bimg{position:absolute;right:0;top:0;height:100%;width:auto;max-width:none;aspect-ratio:1086 / 1448;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 30%);mask-image:linear-gradient(90deg,transparent 0,#000 30%)}"
  + ".ens-bt{position:relative;z-index:2;flex:1 1 auto;max-width:calc(100% - clamp(560px,44vw,740px) * .62);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:" + REGLAGES.espaceMenu + "px 5% 0}"
  // l'ancienne image de fond du site Carrd (la « tall box ») est retirée par le code
  + ".ens-psb:before,.ens-psa:after{display:none !important}.ens-sansfond{background-image:none !important}.ens-sanspad{padding-top:0 !important}.ens-cache{display:none !important}"
  + "#eb-ns .ens-bk{font-size:10px;letter-spacing:.5em;font-weight:500;color:#3d3632;margin:0 0 16px;padding-left:.5em;text-transform:uppercase;line-height:1.4}"
  + ".ens-bn{font-size:30px;letter-spacing:.2em;font-weight:400;line-height:1.3;margin:0;padding-left:.2em;color:#111;text-transform:uppercase;transition:opacity .35s ease,transform .35s ease}"
  + ".ens-bg{width:84px;height:2px;margin:20px auto;background:linear-gradient(90deg,#fbfaf7,#e9e3d9 55%,#8f8676)}"
  + ".ens-bm{font-size:13.5px;font-weight:300;line-height:1.7;color:#2f2a27;max-width:420px;margin:0;transition:opacity .35s ease,transform .35s ease}"
  + ".ens-ban.change .ens-bn,.ens-ban.change .ens-bm{opacity:0;transform:translateY(6px)}"
  + "@media(max-width:1099px){.ens-bn{font-size:25px;letter-spacing:.16em}}"
  + "@media(max-width:699px){.ens-ban{display:block;height:100svh;min-height:620px;max-height:980px;background:" + REGLAGES.fondSite + "}.ens-bimg{position:absolute;left:0;top:0;width:100%;height:calc(100% - 170px);object-fit:cover;object-position:50% 60%;-webkit-mask-image:linear-gradient(180deg,#000 66%,transparent 98%);mask-image:linear-gradient(180deg,#000 66%,transparent 98%)}.ens-bt{position:absolute;left:0;right:0;bottom:5%;max-width:none;margin:0;padding:0 28px}#eb-ns .ens-bk{margin-bottom:18px}.ens-bn{font-size:21px;letter-spacing:.14em;line-height:1.45}.ens-bg{margin:20px auto}.ens-bm{font-size:13px;line-height:1.75}}"
  // le titre et le texte du type sont dans la bannière : dans la section, ils restent pour Google mais ne s'affichent pas en double
  + ".ens-s>h2,.ens-s>.ens-txt{position:absolute !important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}"
  + ".ens-bar{position:sticky;top:" + REGLAGES.espaceMenu + "px;z-index:50;margin:0;background:" + REGLAGES.bande + ";box-shadow:0 10px 24px rgba(40,30,20,.06)}"
  + ".ens-tabs{display:flex;flex-wrap:wrap;gap:12px 30px;justify-content:center;padding:17px 24px 15px;white-space:nowrap}"
  + ".ens-tabs::-webkit-scrollbar{display:none}"
  + ".ens-tabs a{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#111;opacity:.72;padding-bottom:5px;border-bottom:1px solid transparent;font-weight:500;text-decoration:none;flex:0 0 auto;transition:opacity .25s ease,border-color .25s ease}"
  + ".ens-tabs a.clair{color:#f5f4f0}"
  + ".ens-tabs a:hover{opacity:1}"
  + ".ens-tabs a.on{opacity:1;border-bottom-color:currentColor;font-weight:700}"
  + ".ens-tabs a.vide{opacity:.3;pointer-events:none}"
  + "@media(max-width:1250px){.ens-tabs{column-gap:22px}.ens-tabs a{letter-spacing:.12em}}"
  + ".ens-choix{display:none;width:100%;border:0;background:none;margin:0;padding:17px 18px;cursor:pointer;font-family:inherit;font-size:14px;font-weight:300;color:#111;text-align:center}"
  + ".ens-choix b{font-weight:600}.ens-choix i{font-style:normal;margin-left:10px;font-weight:300}"
  + ".ens-drop{display:none;position:absolute;left:0;right:0;top:100%;background:" + REGLAGES.fondSite + ";padding:6px 22px 18px;box-shadow:0 18px 30px rgba(0,0,0,.1);text-align:left}"
  + ".ens-drop a{display:flex;justify-content:space-between;padding:13px 0;border-bottom:1px solid rgba(0,0,0,.08);font-size:13px;font-weight:300;color:#111;text-decoration:none}"
  + ".ens-drop a.on{font-weight:600}.ens-drop a.vide{opacity:.3;pointer-events:none}"
  + ".ens-bar.ouvert .ens-drop{display:block}"
  + "@media(max-width:699px){.ens-tabs{display:none}.ens-choix{display:block}}"
  + ".ens-gm{display:flex;gap:18px;justify-content:center;margin:28px 0 0}"
  + ".ens-gm button{background:none;border:0;padding:0 0 3px;font-family:inherit;font-size:11px;font-weight:300;color:#8a8580;cursor:pointer;border-bottom:1px solid transparent}"
  + ".ens-gm button.on{color:#111;font-weight:500;border-bottom-color:#111}"
  + ".ens-s{display:none;position:relative;padding:40px 24px 0;max-width:1130px;margin:0 auto}"
  + ".ens-s.on{display:block;animation:ensEntre .45s ease}"
  + "@keyframes ensEntre{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}"
  + "#eb-ns h2{font-size:26px;font-weight:600;letter-spacing:.02em;margin:0 0 12px}"
  + ".ens-txt{font-size:13px;font-weight:300;line-height:1.75;color:#4d4a44;max-width:560px;margin:0 auto}"
  + ".ens-phr{font-size:13px;font-weight:400;color:#111;margin:0}"
  + ".ens-vide{display:none;font-size:13px;font-weight:300;color:#4d4a44;margin:40px 0 0}"
  + ".ens-grid{--col:4;--gap:30px;display:flex;flex-wrap:wrap;justify-content:center;gap:44px var(--gap);margin:36px auto 0;max-width:1080px}"
  + ".ens-grid>.ens-c{flex:0 0 calc((100% - (var(--col) - 1) * var(--gap)) / var(--col));min-width:0}"
  + "@media(max-width:899px){.ens-grid{--col:3}}"
  + "@media(max-width:599px){.ens-gm{margin-top:22px}.ens-grid{--col:2;--gap:8px;row-gap:34px}.ens-s{padding:60px 10px 0}#eb-ns h1{font-size:25px}#eb-ns h2{font-size:22px}.ens-in,.ens-txt{font-size:12.5px}}"
  + ".ens-c{display:block;text-decoration:none;color:#111;cursor:pointer}"
  + ".ens-c.off{display:none}"
  + ".ens-ph{display:block;position:relative;aspect-ratio:3 / 4;overflow:hidden;max-width:300px;margin:0 auto}"
  + ".ens-ph img{color:transparent;display:block;position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:50% 93%;opacity:0;transition:opacity .6s ease,transform .4s ease}"
  + ".ens-ph img.pret{opacity:1}"
  + ".ens-ph img.brut{opacity:1;-webkit-mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent),linear-gradient(transparent,#000 8%,#000 92%,transparent);-webkit-mask-composite:source-in;mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent),linear-gradient(transparent,#000 8%,#000 92%,transparent);mask-composite:intersect}"
  + ".ens-c:hover .ens-ph img{transform:translateY(-3px)}"
  + ".ens-g{font-size:8.5px;letter-spacing:.28em;font-weight:600;margin:10px 0 6px;text-transform:uppercase}"
  + ".ens-g.bloom{color:#c58b74}.ens-g.balance{color:#7d8f66}"
  + "#eb-ns h3{font-size:12px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;margin:0 0 6px;line-height:1.35}"
  + ".ens-a{font-size:11px;font-weight:300;color:#4d4a44;margin:0 0 6px;line-height:1.5}"
  + ".ens-p{font-size:11px;font-weight:400;margin:0}"
  + ".ens-sep{flex:0 0 100%;display:flex;align-items:center;gap:12px;margin:-14px 0 -6px;font-size:10px;letter-spacing:.22em;text-transform:uppercase;font-weight:600;color:#111}"
  + ".ens-sep i{flex:1;height:4px;display:block}"
  + ".ens-sep span:empty{display:none}"
  // Le conseil ELKHA.B : dans le même dégradé que la bande des types
  + ".ens-cons{max-width:860px;margin:76px auto 0;padding:44px 52px 46px;background:" + REGLAGES.bande + ";text-align:center}"
  + ".ens-ck{font-size:9.5px;letter-spacing:.3em;font-weight:600;text-transform:uppercase;color:#7a746a;margin:0 0 14px}"
  + ".ens-cons h3{font-size:20px !important;letter-spacing:.02em !important;text-transform:none !important;font-weight:600 !important;margin:0 0 16px !important;line-height:1.35 !important}"
  + ".ens-cons p:last-child{font-size:14px;font-weight:300;line-height:1.8;color:#2f2c28;margin:0}"
  // La carte du Journal : toute la carte mène à l'article
  + ".ens-jr{display:grid;grid-template-columns:1fr 1fr;max-width:860px;margin:44px auto 0;background:#ece5db;text-align:left;text-decoration:none;color:#111;transition:transform .35s ease,box-shadow .35s ease}"
  + ".ens-jr:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(40,30,20,.08)}"
  + ".ens-jph{display:block;position:relative;min-height:260px;overflow:hidden}"
  + ".ens-jph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .8s ease}"
  + ".ens-jr:hover .ens-jph img{transform:scale(1.03)}"
  + ".ens-jg{display:flex;flex-direction:column;justify-content:center;padding:40px 38px}"
  + ".ens-jk{font-size:9.5px;letter-spacing:.24em;font-weight:600;text-transform:uppercase;color:#7a746a;margin:0 0 12px}"
  + ".ens-jt{font-size:21px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;line-height:1.3;margin:0 0 10px}"
  + ".ens-ja{font-size:13.5px;font-weight:300;line-height:1.7;color:#3d3a35;margin:0 0 22px}"
  + ".ens-jl{align-self:flex-start;font-size:10px;letter-spacing:.22em;font-weight:600;text-transform:uppercase;border-bottom:1px solid #111;padding-bottom:3px}"
  + "@media(max-width:699px){.ens-cons{margin-top:60px;padding:34px 24px 36px}.ens-cons h3{font-size:17px !important}.ens-cons p:last-child{font-size:13.5px}.ens-jr{grid-template-columns:1fr;margin-top:30px}.ens-jph{min-height:200px}.ens-jg{padding:28px 24px 30px}.ens-jt{font-size:18px}}";
  var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);

  var ban = root.querySelector('.ens-ban');
  // toute la page « Nos soins » prend la largeur de l'écran et se centre, quelle que soit la mise en page Carrd
  function bordABord(){
    root.style.width = ''; root.style.marginLeft = ''; root.style.maxWidth = 'none';
    var g = root.getBoundingClientRect().left;
    root.style.width = document.documentElement.clientWidth + 'px'; root.style.marginLeft = (-g) + 'px';
  }
  bordABord(); setTimeout(bordABord, 400);

  // Carrd : on retire l'ancienne bannière en fond de site et l'espace qu'elle réservait, la bannière monte sous le menu
  function nettoyerFond(){
    var url = /url\(/, anc = [document.documentElement, document.body];
    for(var e = root.parentElement; e && e !== document.body; e = e.parentElement) anc.push(e);
    anc.forEach(function(el){
      ['::before', '::after'].forEach(function(ps, k){ var cs = getComputedStyle(el, ps); if(cs.content !== 'none' && url.test(cs.backgroundImage)) el.classList.add(k ? 'ens-psa' : 'ens-psb'); });
      if(url.test(getComputedStyle(el).backgroundImage)) el.classList.add('ens-sansfond');
      if(el !== document.documentElement && el !== document.body && parseFloat(getComputedStyle(el).paddingTop) > window.innerHeight * .12) el.classList.add('ens-sanspad');
    });
    // une grande image de fond posée à part (calque fixe de Carrd)
    document.querySelectorAll('body > *').forEach(function(el){
      if(el.contains(root) || el.id === 'eb-ns') return;
      var cs = getComputedStyle(el);
      if((cs.position === 'fixed' || cs.position === 'absolute') && url.test(cs.backgroundImage) && el.offsetWidth > window.innerWidth * .6) el.classList.add('ens-cache');
    });
    // mise en page Carrd « en deux colonnes » (contenu d'un côté, image de l'autre) : le contenu reprend toute la largeur
    var W = document.documentElement.clientWidth;
    for(var c = root.parentElement; c && c !== document.body; c = c.parentElement){
      var parent = c.parentElement; if(!parent) break;
      var autre = false;
      [].forEach.call(parent.children, function(f){
        if(f === c || /^(SCRIPT|STYLE|LINK|NOSCRIPT)$/.test(f.tagName) || f.classList.contains('ens-cache')) return;
        var vide = !f.textContent.trim() && !f.querySelector('img,video,iframe,svg,canvas');
        var r = f.getBoundingClientRect();
        if(vide && r.width > W * .2 && r.height > window.innerHeight * .3){ f.classList.add('ens-cache'); autre = true; }
      });
      if(autre){
        c.style.setProperty('width', '100%', 'important'); c.style.setProperty('max-width', 'none', 'important');
        c.style.setProperty('flex', '1 1 100%', 'important'); c.style.setProperty('margin-left', '0', 'important'); c.style.setProperty('margin-right', '0', 'important');
      }
    }
    // il reste un vide entre le menu et la bannière ? la bannière remonte
    if(!ban) return;
    var bloc = ban; bloc.style.marginTop = '';
    // la bannière monte tout en haut, derrière le menu transparent (comme sur les autres sites)
    var ecart = ban.getBoundingClientRect().top + window.scrollY;
    if(ecart > 4 && ecart < window.innerHeight * .8 && !quelqueChoseAuDessus()) bloc.style.marginTop = (-ecart) + 'px';

  }
  function quelqueChoseAuDessus(){
    var tous = document.body.querySelectorAll('img, video, p, h1, h2, h3, a, button, iframe');
    for(var i = 0; i < tous.length; i++){
      var el = tous[i]; if(root.contains(el)) continue;
      if(!(el.compareDocumentPosition(root) & Node.DOCUMENT_POSITION_FOLLOWING)) continue;
      var cs = getComputedStyle(el); if(cs.position === 'fixed' || cs.display === 'none' || cs.visibility === 'hidden') continue;
      var f = el; while(f && f !== document.body){ if(getComputedStyle(f).position === 'fixed') break; f = f.parentElement; } if(f && f !== document.body) continue;
      var r = el.getBoundingClientRect(); if(r.width > 2 && r.height > 2 && r.bottom + window.scrollY <= ban.getBoundingClientRect().top + window.scrollY + 2) return true;
    }
    return false;
  }
  try { nettoyerFond(); } catch(err){}
  setTimeout(function(){ try { nettoyerFond(); bordABord(); } catch(err){} }, 500);
  window.addEventListener('load', function(){ try { nettoyerFond(); bordABord(); } catch(err){} });
  var secs = [].slice.call(root.querySelectorAll('.ens-s'));
  secs.forEach(function(s){ s.querySelectorAll('.ens-c').forEach(function(c){ var im = c.querySelector('img'); if(im) im.setAttribute('data-g', c.getAttribute('data-gamme')); }); });

  // ── Prix toujours à jour (ceux des fiches, quand elles sont chargées) ──
  function majPrix(){
    var P = window.EB_PRODUITS || {};
    root.querySelectorAll('.ens-c').forEach(function(c){
      var d = P[c.getAttribute('data-fiche')], el = c.querySelector('.ens-prix');
      if(d && d.prix && el) el.textContent = d.prix.replace(/\s*€/, ' €');
    });
  }

  // ── Barres de texture : sous chaque rangée, de plus en plus foncées ──
  function barres(){
    secs.forEach(function(s){
      var grid = s.querySelector('.ens-grid'); if(!grid) return;
      grid.querySelectorAll('.ens-sep').forEach(function(x){ x.remove(); });
      var cartes = [].filter.call(grid.querySelectorAll('.ens-c'), function(c){ return !c.classList.contains('off'); });
      s.setAttribute('data-n', cartes.length);
      var deb = s.getAttribute('data-debut'), fin = s.getAttribute('data-fin');
      var phr = s.querySelector('.ens-phr'); if(phr) phr.style.display = (deb && cartes.length > 1) ? '' : 'none';
      if(!deb || cartes.length < 2 || !s.classList.contains('on')) return;
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
      a.classList.toggle('vide', !!(s && s.getAttribute('data-n') === '0'));
    });
  }

  // ── Un type à la fois, comme une page à part ──
  var bar = root.querySelector('.ens-bar'), actuel = '';
  var choix = document.createElement('button'); choix.type = 'button'; choix.className = 'ens-choix'; choix.setAttribute('aria-expanded', 'false');
  var drop = document.createElement('div'); drop.className = 'ens-drop';
  root.querySelectorAll('.ens-tabs a').forEach(function(a){ var b = document.createElement('a'); b.href = a.getAttribute('href'); b.setAttribute('data-type', a.getAttribute('data-type')); b.textContent = a.textContent; drop.appendChild(b); });
  if(bar){ bar.appendChild(choix); bar.appendChild(drop); }
  function ouvrirListe(o){ bar.classList.toggle('ouvert', o); choix.setAttribute('aria-expanded', o ? 'true' : 'false'); var i = choix.querySelector('i'); if(i) i.textContent = o ? '−' : '+'; }
  choix.addEventListener('click', function(){ ouvrirListe(!bar.classList.contains('ouvert')); });
  document.addEventListener('click', function(e){ if(bar && !bar.contains(e.target)) ouvrirListe(false); });
  drop.addEventListener('click', function(e){ var a = e.target.closest('a'); if(!a) return; e.preventDefault(); ouvrirListe(false); var t = a.getAttribute('data-type'); afficher(t, true); try { history.replaceState(null, '', '?type=' + t); } catch(err){} });
  // chaque onglet prend la couleur lisible sur sa partie de la bande (noir sur le clair, beige sur le foncé)
  function colorer(){
    if(!bar) return; root.querySelectorAll('.ens-tabs a').forEach(function(a){ a.classList.remove('clair'); }); choix.style.color = ''; return;   // bande claire : texte noir partout
 var W = bar.clientWidth || 1, nav = root.querySelector('.ens-tabs');
    root.querySelectorAll('.ens-tabs a').forEach(function(a){ var x = a.offsetLeft - (nav ? nav.scrollLeft : 0) + a.offsetWidth / 2; a.classList.toggle('clair', sombre(tBande(Math.max(0, Math.min(1, x / W))))); });
    if(sombre(tBande(.5))){ choix.style.color = REGLAGES.fondSite; } else choix.style.color = '';
  }
  var navT = root.querySelector('.ens-tabs'); if(navT) navT.addEventListener('scroll', colorer, { passive: true });
  function afficher(type, defiler){
    var s = document.getElementById('ens-' + type);
    if(!s || s.getAttribute('data-n') === '0'){ s = secs.filter(function(x){ return x.getAttribute('data-n') !== '0'; })[0]; if(!s) return; type = s.getAttribute('data-type'); }
    actuel = type;
    secs.forEach(function(x){ x.classList.toggle('on', x === s); });
    root.querySelectorAll('.ens-tabs a').forEach(function(a){
      var on = a.getAttribute('data-type') === type; a.classList.toggle('on', on);
      if(on){ var t = a.parentNode; if(t.scrollWidth > t.clientWidth) t.scrollTo({ left: a.offsetLeft - t.clientWidth / 2 + a.offsetWidth / 2, behavior: 'smooth' }); }
    });
    barres();
    var nomT = (root.querySelector('.ens-tabs a[data-type="' + type + '"]') || {}).textContent || '';
    if(ban){
      var bn = ban.querySelector('.ens-bn'), bm = ban.querySelector('.ens-bm'), txt = (s.querySelector('.ens-txt') || {}).textContent || '';
      if(bn && bn.textContent !== nomT){
        ban.classList.add('change');
        setTimeout(function(){ bn.textContent = nomT; if(bm) bm.textContent = txt; ban.classList.remove('change'); }, bn.textContent ? 300 : 0);
      }
    }
    choix.innerHTML = 'Type de soin : <b>' + esc(nomT) + '</b><i>+</i>';
    drop.querySelectorAll('a').forEach(function(a){ a.classList.toggle('on', a.getAttribute('data-type') === type); var o = root.querySelector('.ens-tabs a[data-type="' + a.getAttribute('data-type') + '"]'); a.classList.toggle('vide', !!(o && o.classList.contains('vide'))); });
    colorer();
    s.querySelectorAll('.ens-ph img').forEach(function(im){ if(!im.getAttribute('data-vu')){ im.setAttribute('data-vu', '1'); retravailler(im); } });
    // nouveau type = comme une nouvelle page : on remonte en douceur jusqu'à la bannière, qui affiche le nouveau titre
    if(defiler){
      var haut = ban ? window.scrollY + ban.getBoundingClientRect().top - REGLAGES.espaceMenu : 0;
      if(Math.abs(window.scrollY - haut) > 4) window.scrollTo({ top: Math.max(0, haut), behavior: 'smooth' });
    }
  }
  root.querySelectorAll('.ens-tabs a').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault(); var t = a.getAttribute('data-type'); afficher(t, true);
      try { history.replaceState(null, '', '?type=' + t); } catch(err){}
    });
  });

  // ── Filtre Tout voir / Bloom / Balance ──
  root.querySelectorAll('.ens-gm button').forEach(function(b){
    b.addEventListener('click', function(){
      var g = b.getAttribute('data-g');
      root.querySelectorAll('.ens-gm button').forEach(function(x){ x.classList.toggle('on', x === b); });
      root.querySelectorAll('.ens-c').forEach(function(c){ c.classList.toggle('off', !!g && c.getAttribute('data-gamme') !== g); });
      barres(); afficher(actuel, false);
    });
  });

  // ── Menu « Nos soins » : déjà sur cette page, « Sérums »… change de type sans recharger ──
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href*="?type="]'); if(!a || root.contains(a)) return;
    try { var u = new URL(a.href, location.href); } catch(err){ return; }
    if(u.hostname !== location.hostname) return;
    var t = u.searchParams.get('type'); if(!t || !document.getElementById('ens-' + t)) return;
    e.preventDefault(); afficher(t, true);
    try { history.replaceState(null, '', '?type=' + t); } catch(err){}
  }, true);

  // ── Fiches : elles s'ouvrent ici même ──
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
  var CW = 600, CH = 800, SOL = CH * .93, PXCM = CH * .84 / 16;
  function couleur(c){ c = (c || '').replace('#', ''); return c.length === 6 ? [0, 2, 4].map(function(i){ return parseInt(c.substr(i, 2), 16); }) : null; }
  function retravailler(img){
    var s = { hauteur: parseFloat(img.getAttribute('data-h')) || 0 }, url = src(brute(img), 700), bloom = img.getAttribute('data-g') === 'bloom';
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
      // photos Bloom (cadrées serré, fond moins régulier) : bords toujours fondus, comme sur la page Bloom
      // les ombres touchent parfois le bord de la photo : on fond le plus loin possible, jusqu'au flacon
      if(true){   // toutes les photos : l'ombre s'efface progressivement jusqu'au flacon, jamais coupée net
        var mb = x0 >= 0 ? (x1 - x0) * .06 + 4 : 0;
        fg = x0 >= 0 ? Math.min(.45, Math.max(.02, (x0 - mb) / w)) : .14;
        fd = x0 >= 0 ? Math.max(.55, Math.min(.98, (x1 + mb) / w)) : .86;
        fh = y0 >= 0 ? Math.min(.3, Math.max(.02, (y0 - 6) / h)) : .08;
        fb = y1 >= 0 ? Math.min(1, Math.max((y1 + 3) / h, .9, Math.min(.97, (y1 + (h - y1) * .25) / h))) : .92;
      }
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


  // ── Pour Google : la liste des soins (nom, photo, prix, marque) ──
  try {
    var items = [].map.call(root.querySelectorAll('.ens-c'), function(c, i){
      var im = c.querySelector('img'), sec = c.closest('.ens-s'), prixTxt = (c.querySelector('.ens-prix') || {}).textContent || '';
      return { "@type": "ListItem", position: i + 1, item: { "@type": "Product", name: c.querySelector('h3').textContent, description: im ? im.alt : '', image: im ? brute(im) : '', category: sec ? sec.querySelector('h2').textContent : '', brand: { "@type": "Brand", name: "ELKHA.B" }, url: c.href,
        offers: { "@type": "Offer", price: prixTxt.replace(/[^0-9,]/g, '').replace(',', '.'), priceCurrency: "EUR", availability: "https://schema.org/InStock", url: c.href } } };
    });
    var ld = document.createElement('script'); ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", name: "Nos soins ELKHA.B", itemListElement: items });
    document.head.appendChild(ld);
  } catch(err){}

  // ── Démarrage ──
  majPrix(); barres();
  var demande = (location.search.match(/[?&]type=([a-z-]+)/) || [])[1];
  afficher(demande || REGLAGES.typeParDefaut, false);
  var largeur = window.innerWidth;
  window.addEventListener('resize', function(){ colorer(); bordABord(); if(window.innerWidth !== largeur){ largeur = window.innerWidth; barres(); } });
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(colorer);
  }
})();
