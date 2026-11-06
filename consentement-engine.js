// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
/* ═══════════════════════════════════════════════════════════════
   ELKHA.B — BANDEAU COOKIES + PIXEL TIKTOK (consentement-engine.js)
   • Chargé par cart-engine.js, donc présent sur tous les sites.
   • Le bandeau s'affiche à la première visite (Refuser / Accepter).
   • Le pixel TikTok ne se charge QU'APRÈS « Accepter ».
   • Le choix est gardé 6 mois, pour tous les sites *.elkhab.com.
   • window.ebCookiesOpen() rouvre le bandeau (lien « Gérer mes cookies »).
   • Événements envoyés à TikTok (seulement avec accord) :
       page vue, fiche produit ouverte, ajout au panier.
     Le paiement et l'achat sont envoyés par l'application TikTok de Shopify.
   ═══════════════════════════════════════════════════════════════ */
(function(){
  if(window.ebConsentCharge) return;
  window.ebConsentCharge = true;

  var PIXEL_TIKTOK = 'DBN1FAJC77U4E0P7N0J0';
  var NOM = 'eb_cookies';               // valeur : « oui » ou « non »
  var DUREE = 60 * 60 * 24 * 182;       // 6 mois, en secondes

  // PHASE DE TEST : le bandeau ne s'affiche que sur ces sites.
  // Mettre TEST_SEULEMENT = [] pour l'activer partout.
  var TEST_SEULEMENT = [];
  var hote = location.hostname;
  var forcer = /[?&]cookies=test/.test(location.search);
  if(TEST_SEULEMENT.length && TEST_SEULEMENT.indexOf(hote) < 0 && !forcer) return;

  // Pas dans le Skin ID ou une autre page ouverte dans un cadre : c'est la page parente qui demande
  try { if(window.top !== window.self) return; } catch(e){ return; }

  /* ─── Lecture / écriture du choix ─── */
  function lire(){
    var m = document.cookie.match(new RegExp('(?:^|; )' + NOM + '=([^;]*)'));
    return m ? m[1] : null;
  }
  function ecrire(v){
    var dom = /(^|\.)elkhab\.com$/.test(hote) ? '; domain=.elkhab.com' : '';
    document.cookie = NOM + '=' + v + '; max-age=' + DUREE + '; path=/' + dom + '; SameSite=Lax' + (location.protocol === 'https:' ? '; Secure' : '');
  }

  /* ─── Pixel TikTok (chargé seulement après accord) ─── */
  var pixelPret = false;
  function chargerPixel(){
    if(pixelPret) return;
    pixelPret = true;
    !function (w, d, t) {
      w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
      ttq.load(PIXEL_TIKTOK);
      ttq.page();
    }(window, document, 'ttq');
  }
  function suivre(evenement, infos){
    if(!pixelPret || !window.ttq) return;
    try { window.ttq.track(evenement, infos || {}); } catch(e){}
  }

  /* ─── Retrouver un soin (nom, prix) à partir de son identifiant panier ─── */
  function prixNombre(p){ var m = String(p || '').replace(',', '.').match(/[\d.]+/); return m ? parseFloat(m[0]) : undefined; }
  function parVariante(variantId){
    var P = window.EB_PRODUITS || {};
    for(var id in P){
      var d = P[id]; if(!d) continue;
      if(String(d.variantId) === String(variantId)) return { id: id, nom: d.nom, prix: d.prix };
      var v = d.variantes || [];
      for(var i = 0; i < v.length; i++){ if(String(v[i].variantId) === String(variantId)) return { id: id, nom: d.nom + (v[i].nom ? ' — ' + v[i].nom : ''), prix: v[i].prix || d.prix }; }
    }
    return null;
  }
  function infosProduit(variantId, id, nom, prix){
    var o = { contents: [{ content_id: String(variantId || id), content_type: 'product', content_name: nom || '', quantity: 1 }], content_type: 'product', currency: 'EUR' };
    var n = prixNombre(prix); if(n !== undefined){ o.value = n; o.contents[0].price = n; }
    return o;
  }

  /* ─── Fiche produit ouverte (repérée à l'apparition de son titre) ─── */
  var derniere = '', quand = 0;
  function ficheOuverte(titre){
    var t = (titre.textContent || '').trim(); if(!t) return;
    if(t === derniere && Date.now() - quand < 3000) return;
    derniere = t; quand = Date.now();
    var P = window.EB_PRODUITS || {}, trouve = null;
    for(var id in P){ if(P[id] && P[id].nom === t){ trouve = id; break; } }
    var d = trouve ? P[trouve] : {};
    var vid = d.variantId || (d.variantes && d.variantes[0] && d.variantes[0].variantId);
    suivre('ViewContent', infosProduit(vid, trouve || t, t, d.prix));
  }
  function observer(){
    if(!window.MutationObserver || !document.body) return;
    new MutationObserver(function(liste){
      for(var i = 0; i < liste.length; i++){
        var aj = liste[i].addedNodes;
        for(var j = 0; j < aj.length; j++){
          var n = aj[j]; if(n.nodeType !== 1) continue;
          var h = n.matches && n.matches('.eb-fp-title') ? n : (n.querySelector && n.querySelector('.eb-fp-title'));
          if(h) ficheOuverte(h);
        }
      }
    }).observe(document.body, { childList: true, subtree: true });
  }

  /* ─── Ajout au panier ─── */
  document.addEventListener('click', function(e){
    var b = e.target.closest && e.target.closest('.eb-cart-add-btn');
    if(!b || !b.dataset.variantId) return;
    var p = parVariante(b.dataset.variantId) || {};
    suivre('AddToCart', infosProduit(b.dataset.variantId, p.id, p.nom, p.prix));
  }, true);
  // ajouts faits par le Skin ID ou d'autres modules (passent par window.ebCartAddItem)
  function brancherPanier(){
    var f = window.ebCartAddItem;
    if(typeof f !== 'function' || f.ebSuivi) return;
    var g = function(variantId, quantite){
      var p = parVariante(variantId) || {};
      suivre('AddToCart', infosProduit(variantId, p.id, p.nom, p.prix));
      return f.apply(this, arguments);
    };
    g.ebSuivi = true;
    window.ebCartAddItem = g;
  }

  /* ─── Le bandeau ─── */
  var css = ''
  + '#ebck{position:fixed;z-index:2147483000;left:50%;bottom:18px;transform:translate(-50%,20px);opacity:0;visibility:hidden;transition:opacity .45s ease,transform .45s ease,visibility 0s linear .45s;width:min(560px,calc(100vw - 24px));box-sizing:border-box;padding:22px 24px 20px;border-radius:18px;background:rgba(246,244,240,.82);-webkit-backdrop-filter:blur(24px) saturate(1.1);backdrop-filter:blur(24px) saturate(1.1);box-shadow:0 18px 50px rgba(0,0,0,.14),inset 0 0 0 1px rgba(255,255,255,.6);font-family:Montserrat,sans-serif;color:#111;text-align:left}'
  + '#ebck.on{opacity:1;visibility:visible;transform:translate(-50%,0);transition:opacity .45s ease,transform .45s ease}'
  + '#ebck .ebck-k{font-size:8.5px;font-weight:600;letter-spacing:.42em;color:#7a7268;margin:0 0 10px}'
  + '#ebck p{margin:0;font-size:12.5px;line-height:1.6;color:#2a2622;font-family:Montserrat,sans-serif}'
  + '#ebck p a{color:#111;text-decoration:underline;text-underline-offset:3px;cursor:pointer}'
  + '#ebck .ebck-b{display:flex;gap:10px;margin-top:16px}'
  + '#ebck button{flex:1;height:44px;margin:0;border-radius:0;font:600 10px Montserrat,sans-serif;letter-spacing:.28em;cursor:pointer;-webkit-appearance:none;appearance:none}'
  + '#ebck .ebck-r{background:transparent;border:1px solid #111;color:#111}'
  + '#ebck .ebck-a{background:#111;border:1px solid #111;color:#fff}'
  + '@media (prefers-reduced-motion:reduce){#ebck{transition:none}}';

  var boite = null;
  function construire(){
    if(boite) return boite;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    boite = document.createElement('div');
    boite.id = 'ebck';
    boite.setAttribute('role', 'dialog');
    boite.setAttribute('aria-label', 'Choix des cookies');
    boite.innerHTML = '<div class="ebck-k">ELKHA.B · COOKIES</div>'
      + '<p>Nous utilisons des cookies pour améliorer votre expérience et mesurer l’efficacité de nos publicités. <a class="ebck-plus" href="#politique-cookies">En savoir plus</a></p>'
      + '<div class="ebck-b"><button type="button" class="ebck-r">REFUSER</button><button type="button" class="ebck-a">ACCEPTER</button></div>';
    boite.querySelector('.ebck-r').addEventListener('click', function(){ choisir('non'); });
    boite.querySelector('.ebck-a').addEventListener('click', function(){ choisir('oui'); });
    boite.querySelector('.ebck-plus').addEventListener('click', function(e){
      if(typeof window.ebLegalOpen === 'function'){ e.preventDefault(); window.ebLegalOpen('politique-cookies'); }
    });
    document.body.appendChild(boite);
    return boite;
  }
  function montrer(){ construire(); requestAnimationFrame(function(){ requestAnimationFrame(function(){ boite.classList.add('on'); }); }); }
  function cacher(){ if(boite) boite.classList.remove('on'); }

  function choisir(v){
    var avant = lire();
    ecrire(v);
    cacher();
    if(v === 'oui') chargerPixel();
    // retrait de l'accord : on recharge la page pour arrêter le pixel déjà lancé
    else if(avant === 'oui' && pixelPret) setTimeout(function(){ location.reload(); }, 450);
  }

  window.ebCookiesOpen = montrer;

  /* ─── Démarrage ─── */
  function demarrer(){
    observer();
    brancherPanier();
    var essais = 0, t = setInterval(function(){ brancherPanier(); if(++essais > 20) clearInterval(t); }, 500);
    var c = lire();
    if(c === 'oui') chargerPixel();
    else if(c !== 'non') setTimeout(montrer, 900);
    if(location.hash === '#gerer-cookies') montrer();
    window.addEventListener('hashchange', function(){ if(location.hash === '#gerer-cookies') montrer(); });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer);
  else demarrer();
})();
