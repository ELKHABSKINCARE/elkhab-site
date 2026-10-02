(function(){
  // ==========================================================================
  // ELKHA.B — Fiches produits en panneau
  // Ouvre la fiche par-dessus la page : aucune page qui saute, panier conservé.
  // Le contenu vient de produits-data.js (window.EB_PRODUITS).
  // ==========================================================================

  var REVIEWS_ENGINE = 'https://cdn.jsdelivr.net/gh/ELKHABSKINCARE/elkhab-site@main/reviews-engine.js?v=9';

  var css = ''
  + ".eb-fp-overlay{position:fixed;inset:0;background:#141414;color:#fff;z-index:99990;transform:translateX(100%);transition:transform .5s cubic-bezier(.65,0,.35,1);overflow-y:auto;-webkit-overflow-scrolling:touch;font-family:'Montserrat',sans-serif}"
  + ".eb-fp-overlay.open{transform:translateX(0)}"
  + ".eb-fp-overlay *{box-sizing:border-box}"
  + ".eb-fp-close{position:fixed;top:20px;right:20px;z-index:99995;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.35);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.5);display:none;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:20px;font-weight:300;line-height:1;color:#000;cursor:pointer;padding:0;transition:transform .2s ease}"
  + ".eb-fp-close.visible{display:flex}.eb-fp-close:hover{transform:scale(1.1)}"
  + ".eb-fp-inner{max-width:620px;margin:0 auto;padding:0 0 70px}"
  // Média
  + ".eb-fp-media{position:relative;width:100%;aspect-ratio:4/5;background:#1e1e1e;overflow:hidden}"
  + ".eb-fp-media video,.eb-fp-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}"
  + ".eb-fp-slides{position:absolute;inset:0;display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}"
  + ".eb-fp-slides::-webkit-scrollbar{display:none}"
  + ".eb-fp-slide{flex:0 0 100%;position:relative;scroll-snap-align:start}"
  + ".eb-fp-dots{position:absolute;left:0;right:0;bottom:14px;display:flex;justify-content:center;gap:7px;z-index:2}"
  + ".eb-fp-dot{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.45);transition:background .2s ease}"
  + ".eb-fp-dot.on{background:#fff}"
  // Infos
  + ".eb-fp-info{padding:28px 24px 0}"
  + ".eb-fp-title{font-size:22px;font-weight:800;letter-spacing:.02em;margin:0 0 6px;color:#fff;text-align:left}"
  + ".eb-fp-price{font-size:15px;font-weight:600;opacity:.8;margin:0 0 18px;text-align:left}"
  + ".eb-fp-tagline{font-size:14px;line-height:1.7;opacity:.85;margin:0 0 24px;text-align:left}"
  + ".eb-fp-cart{display:flex;align-items:center;justify-content:center;width:100%;max-width:280px;margin:0 auto 34px;background:#000;color:#fff;border:1px solid #fff;border-radius:0;padding:16px 24px;font-family:'Montserrat',sans-serif;font-size:13px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;transition:transform .2s ease;white-space:nowrap}"
  + ".eb-fp-cart:hover{transform:scale(1.03)}"
  // Accordéon
  + ".eb-fp-acc{border-top:1px solid rgba(255,255,255,.2)}"
  + ".eb-fp-acc-item{border-bottom:1px solid rgba(255,255,255,.2)}"
  + ".eb-fp-acc-head{display:flex;justify-content:space-between;align-items:center;padding:20px 2px;cursor:pointer;background:none;border:none;width:100%;color:#fff;font-family:'Montserrat',sans-serif;text-align:left}"
  + ".eb-fp-acc-head h4{font-size:13px;letter-spacing:.08em;text-transform:uppercase;font-weight:700;margin:0;color:#fff}"
  + ".eb-fp-acc-icon{font-size:20px;font-weight:300;line-height:1;transition:transform .3s ease}"
  + ".eb-fp-acc-item.open .eb-fp-acc-icon{transform:rotate(45deg)}"
  + ".eb-fp-acc-body{max-height:0;overflow:hidden;transition:max-height .4s ease}"
  + ".eb-fp-acc-item.open .eb-fp-acc-body{max-height:1200px}"
  + ".eb-fp-acc-inner{padding:0 2px 22px;text-align:left}"
  + ".eb-fp-acc-inner p{font-size:13.5px;line-height:1.85;margin:0 0 10px;opacity:.85;color:#fff}"
  + ".eb-fp-acc-inner ul{list-style:none;margin:0;padding:0}"
  + ".eb-fp-acc-inner li{font-size:13.5px;line-height:1.85;margin-bottom:8px;padding-left:18px;position:relative;opacity:.85;color:#fff}"
  + ".eb-fp-acc-inner li:before{content:'•';position:absolute;left:2px;top:0;opacity:.7}"
  // Avis
  + ".eb-fp-reviews-title{font-size:13px;letter-spacing:.08em;text-transform:uppercase;font-weight:700;margin:40px 0 6px;color:#fff}"
  + ".eb-fp-overlay .eb-reviews{padding:0 !important;max-width:none !important}"
  + ".eb-fp-avis{display:flex;align-items:center;justify-content:center;width:100%;max-width:280px;margin:22px auto 0;background:#fff;color:#000;border:1px solid #fff;border-radius:0;padding:16px 24px;font-family:'Montserrat',sans-serif;font-size:13px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;transition:transform .2s ease;white-space:nowrap}"
  + ".eb-fp-avis:hover{transform:scale(1.03)}";

  var overlay, closeBtn, built = false;

  function esc(t){ var d = document.createElement('div'); d.textContent = t == null ? '' : String(t); return d.innerHTML; }

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
    // Accordéon : une seule section ouverte à la fois
    overlay.addEventListener('click', function(e){
      var head = e.target.closest('.eb-fp-acc-head');
      if(!head) return;
      var item = head.parentElement;
      var wasOpen = item.classList.contains('open');
      overlay.querySelectorAll('.eb-fp-acc-item').forEach(function(i){ i.classList.remove('open'); });
      if(!wasOpen) item.classList.add('open');
    });
  }

  function chargerAvis(){
    if(typeof window.ebRenderReviews === 'function') return;
    if(document.querySelector('script[src*="reviews-engine.js"]')) return;
    var s = document.createElement('script'); s.src = REVIEWS_ENGINE; document.head.appendChild(s);
  }

  function mediaHTML(m, nom){
    if(!m) return '';
    if(m.type === 'video' && m.video){
      return '<div class="eb-fp-media"><video autoplay muted loop playsinline preload="auto"'
        + (m.image ? ' poster="' + esc(m.image) + '"' : '') + ' src="' + esc(m.video) + '"></video></div>';
    }
    var imgs = m.images || (m.image ? [m.image] : []);
    if(imgs.length <= 1){
      return imgs.length ? '<div class="eb-fp-media"><img src="' + esc(imgs[0]) + '" alt="' + esc(nom) + '"></div>' : '';
    }
    var h = '<div class="eb-fp-media"><div class="eb-fp-slides">';
    imgs.forEach(function(src){ h += '<div class="eb-fp-slide"><img src="' + esc(src) + '" alt="' + esc(nom) + '"></div>'; });
    h += '</div><div class="eb-fp-dots">';
    imgs.forEach(function(_, i){ h += '<span class="eb-fp-dot' + (i === 0 ? ' on' : '') + '"></span>'; });
    return h + '</div></div>';
  }

  var slideTimer = null;
  function demarrerDiaporama(){
    clearInterval(slideTimer);
    var track = overlay.querySelector('.eb-fp-slides');
    if(!track) return;
    var dots = overlay.querySelectorAll('.eb-fp-dot');
    var maj = function(){
      var i = Math.round(track.scrollLeft / track.clientWidth);
      dots.forEach(function(d, k){ d.classList.toggle('on', k === i); });
    };
    track.addEventListener('scroll', maj, { passive: true });
    slideTimer = setInterval(function(){
      var n = dots.length, i = Math.round(track.scrollLeft / track.clientWidth);
      track.scrollTo({ left: ((i + 1) % n) * track.clientWidth, behavior: 'smooth' });
    }, 3500);
  }

  function ebFicheOpen(id){
    var data = window.EB_PRODUITS && window.EB_PRODUITS[id];
    if(!data){ console.error('ELKHA.B fiche — produit inconnu :', id); return; }
    build();
    chargerAvis();

    var h = '<div class="eb-fp-inner">' + mediaHTML(data.media, data.nom) + '<div class="eb-fp-info">';
    h += '<h1 class="eb-fp-title">' + esc(data.nom) + '</h1>';
    if(data.prix) h += '<div class="eb-fp-price">' + esc(data.prix) + '</div>';
    if(data.accroche) h += '<p class="eb-fp-tagline">' + esc(data.accroche) + '</p>';
    if(data.variantId) h += '<button type="button" class="eb-fp-cart eb-cart-add-btn" data-variant-id="' + esc(data.variantId) + '">Ajouter au panier</button>';

    h += '<div class="eb-fp-acc">';
    (data.sections || []).forEach(function(s, i){
      h += '<div class="eb-fp-acc-item' + (i === 0 ? ' open' : '') + '">';
      h += '<button type="button" class="eb-fp-acc-head"><h4>' + esc(s.titre) + '</h4><span class="eb-fp-acc-icon">+</span></button>';
      h += '<div class="eb-fp-acc-body"><div class="eb-fp-acc-inner">';
      if(s.texte){ String(s.texte).split('\n').forEach(function(p){ if(p.trim()) h += '<p>' + esc(p) + '</p>'; }); }
      if(s.liste){ h += '<ul>'; s.liste.forEach(function(li){ h += '<li>' + esc(li) + '</li>'; }); h += '</ul>'; }
      h += '</div></div></div>';
    });
    h += '</div>';

    if(data.avis){
      h += '<div class="eb-fp-reviews-title">Avis clients</div>';
      h += '<div class="eb-reviews" data-produit="' + esc(data.avis) + '"><div class="eb-review-status">Aucun avis pour le moment.</div></div>';
      h += '<button type="button" class="eb-fp-avis" data-avis="' + esc(data.avis) + '">Laisser un avis</button>';
    }
    h += '</div></div>';

    overlay.innerHTML = h;
    overlay.scrollTop = 0;
    var v = overlay.querySelector('video');
    if(v){ v.muted = true; var p = v.play(); if(p && p.catch) p.catch(function(){}); }
    demarrerDiaporama();

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

  // Déclencheur : tout élément avec data-fiche="identifiant" (bouton, image, lien…)
  document.addEventListener('click', function(e){
    var el = e.target.closest('[data-fiche]');
    if(!el) return;
    e.preventDefault();
    e.stopPropagation();
    ebFicheOpen(el.getAttribute('data-fiche'));
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
