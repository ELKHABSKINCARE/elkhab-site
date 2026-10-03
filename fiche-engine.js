(function(){
  // ==========================================================================
  // ELKHA.B — Fiches produits en panneau
  // Ouvre la fiche par-dessus la page : aucune page qui saute, panier conservé.
  // Le contenu vient de produits-data.js (window.EB_PRODUITS).
  // ==========================================================================

  var BASE = 'https://cdn.jsdelivr.net/gh/ELKHABSKINCARE/elkhab-site@main/';
  var REVIEWS_ENGINE = BASE + 'reviews-engine.js?v=9';
  var INCI_DATA = BASE + 'inci-data.js?v=2';

  var css = ''
  // Panneau
  + ".eb-fp-overlay{position:fixed;inset:0;background:#fff;color:#000;z-index:99990;transform:translateX(100%);transition:transform .5s cubic-bezier(.65,0,.35,1);overflow-y:auto;-webkit-overflow-scrolling:touch;font-family:'Montserrat',sans-serif;-webkit-tap-highlight-color:transparent}"
  + ".eb-fp-overlay.open{transform:translateX(0)}"
  + ".eb-fp-overlay *{box-sizing:border-box}"
  + ".eb-fp-close{position:fixed;top:20px;right:20px;z-index:99995;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(0,0,0,.12);box-shadow:0 2px 10px rgba(0,0,0,.08);display:none;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:20px;font-weight:300;line-height:1;color:#000;cursor:pointer;padding:0;transition:transform .2s ease}"
  + ".eb-fp-close.visible{display:flex}.eb-fp-close:hover{transform:scale(1.1)}"
  // Média : affiché en entier, jamais rogné
  + ".eb-fp-media{position:relative;width:100%;background:#f6f4f0;overflow:hidden}"
  + ".eb-fp-media video,.eb-fp-media > img{display:block;width:100%;height:auto}"
  + "@media (max-width:899px){.eb-fp-media video,.eb-fp-media > img,.eb-fp-slide img{width:100%;height:calc(100vh - var(--eb-reserve, 80px));height:calc(100svh - var(--eb-reserve, 80px));object-fit:cover;object-position:center;background:#fff}}"
  + ".eb-fp-slides{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}"
  + ".eb-fp-slides::-webkit-scrollbar{display:none}"
  + ".eb-fp-slide{flex:0 0 100%;scroll-snap-align:start}"
  + ".eb-fp-slide img{display:block;width:100%;height:auto}"
  + ".eb-fp-dots{position:absolute;left:0;right:0;bottom:14px;display:flex;justify-content:center;gap:7px}"
  + ".eb-fp-dot{width:7px;height:7px;border-radius:50%;background:rgba(0,0,0,.25);transition:background .2s ease}"
  + ".eb-fp-dot.on{background:#000}"
  // En-tête de la fiche
  + ".eb-fp-content{padding:32px 24px 70px;max-width:620px;margin:0 auto}"
  + "@media (max-width:899px){.eb-fp-content{padding-top:16px}}"
  + ".eb-fp-head{text-align:center;margin-bottom:28px}"
  + ".eb-fp-title{font-size:21px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin:0 0 10px;color:#000}"
  + ".eb-fp-sub{font-size:14px;font-weight:300;line-height:1.6;margin:0 0 14px;color:#222}"
  + ".eb-fp-details{font-size:10.5px;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:#555;margin:0 0 7px}"
  + ".eb-fp-note{font-size:11px;font-weight:300;font-style:italic;letter-spacing:.04em;color:#888;margin:0}"
  // Boutons
  + ".eb-fp-buy{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;max-width:320px;margin:0 auto;background:#000;color:#fff;border:none;border-radius:0;padding:17px 24px;font-family:'Montserrat',sans-serif;font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:transform .2s ease;white-space:nowrap}"
  + ".eb-fp-buy:hover{transform:scale(1.03)}"
  + ".eb-fp-buy .eb-produit-add-price{font-weight:400;opacity:.85}"
  + ".eb-fp-ship{font-size:12px;line-height:1.6;text-align:center;color:#444;margin:12px auto 0;max-width:320px;opacity:0;transform:translateY(10px) scale(.88);transition:opacity 1.1s ease,transform 1.1s cubic-bezier(.2,.8,.2,1)}"
  + ".eb-fp-ship.eb-in{opacity:1;transform:scale(1)}"
  // Accordéon
  + ".eb-fp-acc{border-top:1px solid rgba(0,0,0,.15);margin-top:40px}"
  + ".eb-fp-acc-item{border-bottom:1px solid rgba(0,0,0,.15)}"
  + ".eb-fp-acc-head{display:flex;justify-content:space-between;align-items:center;padding:20px 2px;cursor:pointer;background:none;border:none;width:100%;color:#000;font-family:'Montserrat',sans-serif;text-align:left}"
  + ".eb-fp-acc-head h4{font-size:13px;letter-spacing:.08em;text-transform:uppercase;font-weight:700;margin:0;color:#000}"
  + ".eb-fp-acc-icon{font-size:20px;font-weight:300;line-height:1;transition:transform .3s ease}"
  + ".eb-fp-acc-item.open .eb-fp-acc-icon{transform:rotate(45deg)}"
  + ".eb-fp-acc-body{max-height:0;overflow:hidden;transition:max-height .45s ease}"
  + ".eb-fp-acc-item.open .eb-fp-acc-body{max-height:2400px}"
  + ".eb-fp-acc-inner{padding:0 2px 22px;text-align:left}"
  + ".eb-fp-acc-inner p{font-size:13.5px;line-height:1.85;margin:0 0 10px;color:#222}"
  + ".eb-fp-acc-inner ul{list-style:none;margin:0;padding:0}"
  + ".eb-fp-acc-inner li{font-size:13.5px;line-height:1.85;margin-bottom:8px;padding-left:18px;position:relative;color:#222}"
  + ".eb-fp-acc-inner li:before{content:'•';position:absolute;left:2px;top:0;opacity:.6}"
  + ".eb-fp-inci-list{font-size:12.5px !important;line-height:1.8 !important;color:#444 !important}"
  + ".eb-fp-inci-legend{font-size:11.5px;line-height:1.7;color:#777;margin:6px 0 14px}"
  + ".eb-fp-inci-stats{display:flex;gap:28px;margin:6px 0 14px}"
  + ".eb-fp-inci-val{font-size:20px;font-weight:700}"
  + ".eb-fp-inci-lab{font-size:11px;color:#666;line-height:1.4}"
  // Vos expériences : bandeau #141414, comme le panneau d'avis
  + ".eb-fp-h2{font-size:26px;font-weight:700;margin:52px 0 10px;color:#000;text-align:left}"
  + ".eb-fp-exp{background:#141414;color:#fff;margin:52px -24px 0;padding:44px 24px 48px}"
  + ".eb-fp-exp .eb-fp-h2{color:#fff;margin:0 0 10px}"
  + ".eb-fp-overlay .eb-reviews{padding:0 !important;max-width:none !important;margin:0 !important}"
  + ".eb-fp-exp .eb-reviews,.eb-fp-exp .eb-reviews *{color:#fff !important}"
  + ".eb-fp-exp .eb-review{border-bottom:1px solid rgba(255,255,255,.18) !important}"
  + ".eb-fp-avis{display:flex;align-items:center;justify-content:center;width:100%;max-width:320px;margin:28px auto 0;background:#fff;color:#000;border:none;border-radius:0;padding:17px 24px;font-family:'Montserrat',sans-serif;font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:transform .2s ease;white-space:nowrap}"
  + ".eb-fp-avis:hover{transform:scale(1.03)}"
  // Pour aller plus loin / L'accord parfait
  + ".eb-fp-sep{border:none;border-top:1px solid rgba(0,0,0,.15);width:60%;margin:56px auto 30px}"
  + ".eb-fp-exp + .eb-fp-sep{border-top:none;margin-top:30px}"
  + ".eb-fp-kicker{font-size:13px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;text-align:center;margin:0 0 10px}"
  + ".eb-fp-accord-img{display:block;width:calc(100% + 48px);max-width:none;height:auto;margin:22px -24px 22px}"
  + ".eb-fp-accord-text{font-size:14px;line-height:1.8;color:#222;text-align:center}"
  + ".eb-fp-accord-text p{margin:0 0 12px}"
  + ".eb-fp-accord-text.eb-clamp p.eb-suite{display:none}"
  + ".eb-fp-accord-text.eb-clamp.eb-un p{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}"
  + ".eb-fp-more{display:block;margin:6px auto 0;background:none;border:none;padding:4px 0;font-family:'Montserrat',sans-serif;font-size:12px;font-weight:500;letter-spacing:.06em;text-decoration:underline;text-underline-offset:4px;color:#000;cursor:pointer}"
  + ".eb-fp-pill{display:inline-flex;align-items:center;justify-content:center;margin:26px auto 0;background:#000;color:#fff;border:none;border-radius:999px;padding:10px 28px;font-family:'Montserrat',sans-serif;font-size:11.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:transform .2s ease}"
  + ".eb-fp-pill:hover{transform:scale(1.05)}"
  + ".eb-fp-center{text-align:center}"
  + ".eb-fp-accord-buy{margin-top:22px !important}"
  // Ordinateur : deux colonnes, média fixe à gauche
  + "@media (min-width:900px){"
  +   ".eb-fp-wrap{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);min-height:100%}"
  +   ".eb-fp-left{position:sticky;top:0;height:100vh;background:#f6f4f0;display:flex;align-items:center;justify-content:center;overflow:hidden}"
  +   ".eb-fp-left .eb-fp-media{height:100%;display:flex;align-items:center;justify-content:center}"
  +   ".eb-fp-left .eb-fp-media video,.eb-fp-left .eb-fp-media > img{width:100%;height:100%;object-fit:contain}"
  +   ".eb-fp-left .eb-fp-slides{height:100%}"
  +   ".eb-fp-left .eb-fp-slide img{height:100%;object-fit:contain}"
  +   ".eb-fp-content{padding:90px 56px 80px;max-width:600px}" +
    ".eb-fp-accord-img{width:calc(100% + 112px);margin:22px -56px 22px}"
  +   ".eb-fp-title{font-size:24px}"
  +   ".eb-fp-exp{margin:52px -56px 0;padding:48px 56px 52px}"
  + "}";

  var overlay, closeBtn, built = false, observer = null, slideTimer = null;

  function esc(t){ var d = document.createElement('div'); d.textContent = t == null ? '' : String(t); return d.innerHTML; }

  // Images Shopify en haute résolution (écrans Retina), sans jamais les agrandir artificiellement
  function hd(url, w){
    if(!url) return '';
    if(/cdn\.shopify\.com\/s\/files\//.test(url) && !/[?&]width=/.test(url)){
      return url + (url.indexOf('?') === -1 ? '?' : '&') + 'width=' + (w || 1600);
    }
    return url;
  }

  function charger(src, test){
    if(test()) return;
    if(document.querySelector('script[src="' + src + '"]')) return;
    var s = document.createElement('script'); s.src = src; document.head.appendChild(s);
  }

  function build(){
    if(built) return;
    built = true;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    overlay = document.createElement('div');
    overlay.className = 'eb-fp-overlay';
    overlay.setAttribute('role', 'dialog');
    document.body.appendChild(overlay);
    closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'eb-fp-close';
    closeBtn.setAttribute('aria-label', 'Fermer');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', ebFicheClose);
    document.body.appendChild(closeBtn);

    overlay.addEventListener('click', function(e){
      // Accordéon : une seule section ouverte à la fois
      var head = e.target.closest('.eb-fp-acc-head');
      if(head){
        var item = head.parentElement;
        var wasOpen = item.classList.contains('open');
        overlay.querySelectorAll('.eb-fp-acc-item').forEach(function(i){ i.classList.remove('open'); });
        if(!wasOpen){ item.classList.add('open'); if(item.hasAttribute('data-inci')) remplirComposition(item); }
        return;
      }
      // « Voir plus » / « Voir moins »
      var more = e.target.closest('.eb-fp-more');
      if(more){
        var txt = overlay.querySelector('.eb-fp-accord-text');
        var ferme = txt.classList.toggle('eb-clamp');
        more.textContent = ferme ? 'Voir plus' : 'Voir moins';
      }
    });
  }

  // Composition (INCI), reprise de inci-data.js
  function remplirComposition(item){
    var key = item.getAttribute('data-inci');
    var inner = item.querySelector('.eb-fp-acc-inner');
    var essai = 0;
    (function tenter(){
      var base = (typeof INCI_DETAILS !== 'undefined') ? INCI_DETAILS : null;
      var d = base && base[key];
      if(!d){
        if(++essai < 25){ setTimeout(tenter, 200); }
        else { inner.innerHTML = '<p>Composition momentanément indisponible.</p>'; }
        return;
      }
      var parts = d.parts || [{ label: '', ingredients: d.ingredients, legend: d.legend, natural: d.natural, organic: d.organic }];
      var h = '';
      parts.forEach(function(p){
        if(p.label) h += '<p><strong>' + esc(p.label) + '</strong></p>';
        h += '<p class="eb-fp-inci-list">' + esc(p.ingredients) + '</p>';
        if(p.legend && p.legend.length) h += '<div class="eb-fp-inci-legend">' + p.legend.map(esc).join('<br>') + '</div>';
        if(p.natural || p.organic){
          h += '<div class="eb-fp-inci-stats">';
          if(p.natural) h += '<div><div class="eb-fp-inci-val">' + esc(p.natural) + '%</div><div class="eb-fp-inci-lab">d\'origine naturelle</div></div>';
          if(p.organic) h += '<div><div class="eb-fp-inci-val">' + esc(p.organic) + '%</div><div class="eb-fp-inci-lab">issus de l\'agriculture biologique</div></div>';
          h += '</div>';
        }
      });
      if(d.certification) h += '<p class="eb-fp-inci-legend">' + esc(d.certification) + '</p>';
      inner.innerHTML = h;
    })();
  }

  function mediaHTML(m, nom){
    if(!m) return '';
    if(m.type === 'video' && m.video){
      return '<div class="eb-fp-media"><video autoplay muted loop playsinline preload="auto"'
        + (m.image ? ' poster="' + esc(hd(m.image, 1600)) + '"' : '') + ' src="' + esc(m.video) + '"></video></div>';
    }
    var imgs = m.images || (m.image ? [m.image] : []);
    if(imgs.length <= 1){
      return imgs.length ? '<div class="eb-fp-media"><img src="' + esc(hd(imgs[0], 1600)) + '" alt="' + esc(nom) + '"></div>' : '';
    }
    var h = '<div class="eb-fp-media"><div class="eb-fp-slides">';
    imgs.forEach(function(src){ h += '<div class="eb-fp-slide"><img src="' + esc(hd(src, 1600)) + '" alt="' + esc(nom) + '"></div>'; });
    h += '</div><div class="eb-fp-dots">';
    imgs.forEach(function(_, i){ h += '<span class="eb-fp-dot' + (i === 0 ? ' on' : '') + '"></span>'; });
    return h + '</div></div>';
  }

  function demarrerDiaporama(){
    clearInterval(slideTimer);
    var track = overlay.querySelector('.eb-fp-slides');
    if(!track) return;
    var dots = overlay.querySelectorAll('.eb-fp-dot');
    track.addEventListener('scroll', function(){
      var i = Math.round(track.scrollLeft / track.clientWidth);
      dots.forEach(function(d, k){ d.classList.toggle('on', k === i); });
    }, { passive: true });
    slideTimer = setInterval(function(){
      var n = dots.length, i = Math.round(track.scrollLeft / track.clientWidth);
      track.scrollTo({ left: ((i + 1) % n) * track.clientWidth, behavior: 'smooth' });
    }, 3500);
  }

  // Apparition douce (une seule fois) des phrases « livraison offerte »
  function animerPhrases(){
    if(observer) observer.disconnect();
    var els = overlay.querySelectorAll('.eb-fp-ship');
    if(!('IntersectionObserver' in window)){ els.forEach(function(el){ el.classList.add('eb-in'); }); return; }
    observer = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('eb-in'); observer.unobserve(en.target); }
      });
    }, { root: overlay, threshold: 0.6 });
    // On attend la fin du glissement du panneau, pour que l'effet soit bien visible
    setTimeout(function(){ els.forEach(function(el){ observer.observe(el); }); }, 650);
  }

  // Téléphone : la vidéo occupe tout l'écran, sauf la place exacte du titre et des actifs
  function ajusterHauteurMedia(){
    if(!overlay) return;
    var titre = overlay.querySelector('.eb-fp-title');
    var sous = overlay.querySelector('.eb-fp-sub');
    if(!titre) return;
    var reserve = 16 + titre.offsetHeight + 10 + (sous ? sous.offsetHeight : 0) + 12;
    overlay.style.setProperty('--eb-reserve', reserve + 'px');
  }
  window.addEventListener('resize', ajusterHauteurMedia);

  function boutonAchat(variantId, prix, extraClass){
    return '<button type="button" class="eb-fp-buy eb-cart-add-btn' + (extraClass ? ' ' + extraClass : '') + '" data-variant-id="' + esc(variantId) + '">'
      + 'Ajouter au panier' + (prix ? ' <span class="eb-produit-add-price">— ' + esc(prix) + '</span>' : '') + '</button>';
  }

  function ebFicheOpen(id){
    var data = window.EB_PRODUITS && window.EB_PRODUITS[id];
    if(!data){ console.error('ELKHA.B fiche — produit inconnu :', id); return; }
    build();
    charger(REVIEWS_ENGINE, function(){ return typeof window.ebRenderReviews === 'function'; });
    if(data.inci) charger(INCI_DATA, function(){ return typeof INCI_DETAILS !== 'undefined'; });

    var h = '<div class="eb-fp-wrap"><div class="eb-fp-left">' + mediaHTML(data.media, data.nom) + '</div><div class="eb-fp-right"><div class="eb-fp-content">';

    // En-tête : titre, actifs, détails, petite note
    h += '<div class="eb-fp-head">';
    h += '<h1 class="eb-fp-title">' + esc(data.nom) + '</h1>';
    if(data.sousTitre) h += '<p class="eb-fp-sub">' + esc(data.sousTitre) + '</p>';
    if(data.details && data.details.length) h += '<p class="eb-fp-details">' + data.details.map(esc).join(' · ') + '</p>';
    if(data.note) h += '<p class="eb-fp-note">' + esc(data.note) + '</p>';
    h += '</div>';

    // Achat
    if(data.variantId){
      h += boutonAchat(data.variantId, data.prix);
      h += '<p class="eb-fp-ship">Livraison offerte dès 65€ d\'achat</p>';
    }

    // Accordéon (+ composition en dernier)
    h += '<div class="eb-fp-acc">';
    var sections = (data.sections || []).slice();
    if(data.inci) sections.push({ titre: 'Composition', inci: data.inci });
    sections.forEach(function(s, i){
      h += '<div class="eb-fp-acc-item' + (i === 0 ? ' open' : '') + '"' + (s.inci ? ' data-inci="' + esc(s.inci) + '"' : '') + '>';
      h += '<button type="button" class="eb-fp-acc-head"><h4>' + esc(s.titre) + '</h4><span class="eb-fp-acc-icon">+</span></button>';
      h += '<div class="eb-fp-acc-body"><div class="eb-fp-acc-inner">';
      if(s.texte){ String(s.texte).split('\n').forEach(function(p){ if(p.trim()) h += '<p>' + esc(p) + '</p>'; }); }
      if(s.liste){ h += '<ul>'; s.liste.forEach(function(li){ h += '<li>' + esc(li) + '</li>'; }); h += '</ul>'; }
      if(s.inci){ h += '<p>Chargement de la composition…</p>'; }
      h += '</div></div></div>';
    });
    h += '</div>';

    // Vos expériences
    if(data.avis){
      h += '<div class="eb-fp-exp"><h2 class="eb-fp-h2">Vos expériences</h2>';
      h += '<div class="eb-reviews" data-produit="' + esc(data.avis) + '"><div class="eb-review-status">Aucun avis pour le moment.</div></div>';
      h += '<button type="button" class="eb-fp-avis" data-avis="' + esc(data.avis) + '">Laisser un avis</button></div>';
    }

    // Pour aller plus loin — L'accord parfait
    var a = data.accord;
    if(a){
      h += '<hr class="eb-fp-sep">';
      h += '<p class="eb-fp-kicker">Pour aller plus loin</p>';
      h += '<h2 class="eb-fp-h2" style="margin-top:6px">L\'accord parfait</h2>';
      if(a.image) h += '<img class="eb-fp-accord-img" src="' + esc(hd(a.image, 1600)) + '" alt="' + esc(a.nom || '') + '">';
      if(a.texte){
        var paras = String(a.texte).split('\n').filter(function(p){ return p.trim(); });
        // Plusieurs paragraphes : le premier en entier, la suite derrière « Voir plus »
        // Un seul long paragraphe : 4 lignes complètes, terminées par « … »
        h += '<div class="eb-fp-accord-text eb-clamp' + (paras.length === 1 ? ' eb-un' : '') + '">';
        paras.forEach(function(p, i){ h += '<p' + (i > 0 ? ' class="eb-suite"' : '') + '>' + esc(p) + '</p>'; });
        h += '</div>';
        if(paras.length > 1 || String(paras[0] || '').length > 220) h += '<button type="button" class="eb-fp-more">Voir plus</button>';
      }
      if(a.fiche){
        if(window.EB_PRODUITS[a.fiche]){
          h += '<div class="eb-fp-center"><button type="button" class="eb-fp-pill" data-fiche="' + esc(a.fiche) + '">Découvrir</button></div>';
        } else {
          h += '<div class="eb-fp-center"><a class="eb-fp-pill" style="text-decoration:none" href="https://soins.elkhab.com/#' + esc(a.fiche) + '">Découvrir</a></div>';
        }
      }
      if(a.variantId){
        h += boutonAchat(a.variantId, a.prix, 'eb-fp-accord-buy');
        h += '<p class="eb-fp-ship">Complétez votre rituel Bloom et profitez de la livraison offerte dès 65 € d\'achat</p>';
      }
    }

    h += '</div></div></div>';

    overlay.innerHTML = h;
    overlay.scrollTop = 0;

    ajusterHauteurMedia();

    var v = overlay.querySelector('video');
    if(v){ v.muted = true; var p = v.play(); if(p && p.catch) p.catch(function(){}); }
    demarrerDiaporama();
    animerPhrases();

    requestAnimationFrame(function(){ overlay.classList.add('open'); });
    closeBtn.classList.add('visible');
    document.documentElement.style.overflow = 'hidden';
  }

  function ebFicheClose(){
    if(!overlay) return;
    overlay.classList.remove('open');
    closeBtn.classList.remove('visible');
    document.documentElement.style.overflow = '';
    clearInterval(slideTimer);
    var v = overlay.querySelector('video'); if(v) v.pause();
  }

  window.ebFicheOpen = ebFicheOpen;
  window.ebFicheClose = ebFicheClose;

  // Déclencheurs : lien « #fiche-identifiant » (ex. image Carrd) ou élément data-fiche="identifiant"
  // Écoute sur window, en premier, pour passer avant tout autre code de la page
  window.addEventListener('click', function(e){
    var el = e.target.closest('[data-fiche], a[href*="#fiche-"]');
    if(!el) return;
    var id = el.getAttribute('data-fiche');
    if(!id){
      var href = el.getAttribute('href') || '';
      id = href.split('#fiche-')[1];
    }
    if(!id || !(window.EB_PRODUITS && window.EB_PRODUITS[id])) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    ebFicheOpen(id);
  }, true);

  // Ouverture directe par l'adresse : ?fiche=radiance-serum
  var params = new URLSearchParams(window.location.search);
  var fiche = params.get('fiche');
  if(fiche){
    try {
      var u = new URL(window.location.href); u.searchParams.delete('fiche');
      history.replaceState(history.state, '', u.pathname + u.search + u.hash);
    } catch(err){}
    var ouvrir = function(){ setTimeout(function(){ ebFicheOpen(fiche); }, 300); };
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ouvrir); else ouvrir();
  }
})();
