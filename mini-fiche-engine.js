// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
/* ═══════════════════════════════════════════════════════════════
   ELKHA.B — MINI-FICHES TIKTOK (mini-fiche-engine.js)
   Chargé par cart-engine.js uniquement quand l'adresse contient ?mini=
     • un soin  : ?mini=radiance-serum
     • deux soins (vidéo d'une collaboratrice) : ?mini=radiance-serum,luminescence-jour
   Un panneau monte du bas : l'essentiel du soin, « Ajouter au panier »,
   « Voir la fiche complète ». Un soin sans texte de mini-fiche ouvre sa fiche complète.
   ═══════════════════════════════════════════════════════════════ */
(function(){
  if(window.ebMiniCharge) return;
  window.ebMiniCharge = true;

  var BASE = 'https://elkhabskincare.github.io/elkhab-site/';
  var SEUIL_LIVRAISON = 65;
  var COULEUR = { bloom: '#a65a63', balance: '#5f7149' };

  /* ─── Les textes des mini-fiches (un bloc par soin) ─── */
  var MINI = {
    'radiance-serum': {
      gamme: 'bloom', type: 'Sérum antioxydant',
      photo: 'rituel-flacon-radiance-c-serum.webp',
      eng: ['99 % d’origine naturelle', '13 % d’ingrédients bio', 'Vegan', 'Haute tolérance'],
      accroche: 'La protection <b>antioxydante</b>, sans l’inconfort de la vitamine C.',
      points: [
        'Une vitamine C stabilisée, haute tolérance, qui aide la peau à se défendre contre le stress oxydatif, pour un teint éclatant.',
        'L’acide hyaluronique apporte l’hydratation que les soins à la vitamine C oublient souvent.',
        'Éclat, hydratation et confort, dans une texture sorbet onctueuse à la senteur envoûtante d’agrumes.'
      ],
      duree: 'Formule concentrée : une pression suffit, jusqu’à 3 mois de soin, soit moins de 12 € par mois.'
    },
    'luminescence-jour': {
      gamme: 'bloom', type: 'Crème hydratante',
      photo: 'rituel-flacon-luminescence-jour.webp',
      eng: ['99 % d’origine naturelle', 'Vegan'],
      accroche: 'Une hydratation <b>qui dure</b>, et le confort en plus.',
      points: [
        'L’acide hyaluronique multimoléculaire hydrate à plusieurs niveaux de l’épiderme, pour une peau souple et rebondie toute la journée.',
        'Le bisabolol apaise la peau et aide à préserver sa barrière cutanée.',
        'Une texture crème soyeuse qui pénètre vite, sans fini gras, et révèle un teint lumineux.'
      ],
      duree: 'Formule concentrée : une pression suffit, jusqu’à 3 mois de soin, soit moins de 12 € par mois.'
    }
    ,
    'lumiveil-cc-cream': {
      gamme: 'bloom', type: 'CC crème SPF 30',
      photo: 'site',   // la vignette du site (photo Shopify « miniature » de la fiche)
      eng: ['98 % d’origine naturelle', 'SPF 30', 'Vegan'],
      choix: 'Votre teinte', choisir: 'Choisissez votre teinte',
      // dans le même ordre que les variantes de la fiche (B1, B2, B3, B4)
      variantes: [
        // les photos de texture de la fiche du site (Shopify)
        { cle: 'b1', label: 'B1 Clair', texture: 'https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEINTE_CLAIR_c06c07dc-44a2-4d5d-b942-164990d69865.jpg?v=1791308948' },
        { cle: 'b2', label: 'B2 Moyen', texture: 'https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEINTE_MOYENNE_ad0953ad-5a17-4603-b5ef-3c78bd357ffe.jpg?v=1791308962' },
        { cle: 'b3', label: 'B3 Hâlé',  texture: 'https://cdn.shopify.com/s/files/1/1016/8683/7593/files/HALE_a966c14d-9b78-4dc7-a661-f8a1cf5ab0c4.jpg?v=1791308743' },
        { cle: 'b4', label: 'B4 Foncé', texture: 'https://cdn.shopify.com/s/files/1/1016/8683/7593/files/FONCE_5b3e6189-9008-4c99-a85a-dbef815da88f.jpg?v=1791308970' }
      ],
      accroche: 'Un teint <b>unifié</b>, une peau <b>soignée</b>.',
      pour: 'Idéal pour les peaux sèches et sensibles qui ont besoin d’apaisement.',
      points: [
        'Une texture légère qui unifie le teint, floute les imperfections et donne à votre teint un effet glow naturel.',
        'Les céramides protègent la barrière cutanée des agressions extérieures et maintiennent l’hydratation tout au long de la journée.',
        'Un vrai soin, avec la protection SPF 30 au quotidien.'
      ],
      duree: 'Format stick : il se glisse dans votre sac pour des retouches à tout moment.'
    }
  };

  var ids = ((new URLSearchParams(location.search)).get('mini') || '').split(',')
    .map(function(s){ return s.trim(); }).filter(Boolean).slice(0, 3);
  if(!ids.length) return;
  var choixLien = {};   // ?mini=lumiveil-cc-cream:b2 → teinte B2 déjà choisie
  ids = ids.map(function(x){ var k = x.split(':'); if(k[1]) choixLien[k[0]] = k[1].toLowerCase(); return k[0]; });

  /* ─── Outils ─── */
  function esc(t){ return String(t == null ? '' : t).replace(/[&<>"]/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function nb(p){ var m = String(p || '').replace(',', '.').match(/[\d.]+/); return m ? parseFloat(m[0]) : 0; }
  function euros(n){ return n.toFixed(2).replace('.', ',') + ' €'; }
  function insec(t){ return esc(t).replace(/ (%|€)/g, ' $1'); }
  var NOMBRES = ['', 'un', 'deux', 'trois'];

  function charger(fichiers, fin){
    var i = 0;
    (function suivant(){
      if(i >= fichiers.length) return fin();
      var f = fichiers[i++];
      if(document.querySelector('script[src*="' + f + '"]')) return suivant();
      var s = document.createElement('script'); s.src = BASE + f;
      s.onload = s.onerror = suivant;
      (document.body || document.head).appendChild(s);
    })();
  }
  function ficheComplete(id){
    function ouvrir(){ if(typeof window.ebFicheOpen === 'function' && window.EB_PRODUITS && window.EB_PRODUITS[id]){ window.ebFicheOpen(id); return true; } return false; }
    if(ouvrir()) return;
    charger(['produits-data-test.js', 'produits-balance-test.js', 'avis-engine.js', 'fiche-engine.js'], function(){
      var n = 0, t = setInterval(function(){ if(ouvrir() || ++n > 40) clearInterval(t); }, 150);
    });
  }
  // fiche vue : envoyée à TikTok seulement si la cliente a accepté les cookies
  // (si elle accepte après l'ouverture, on l'envoie à ce moment-là)
  var vues = {};
  function suivreVue(id, d){
    if(vues[id]) return;
    var essais = 0;
    (function tenter(){
      if(window.ttq && typeof window.ttq.track === 'function'){ vues[id] = true; envoyerVue(id, d); return; }
      if(++essais < 90) setTimeout(tenter, 1000);
    })();
  }
  function envoyerVue(id, d){
    try {
      if(window.ttq && typeof window.ttq.track === 'function'){
        var v = nb(d.prix);
        window.ttq.track('ViewContent', { contents: [{ content_id: String(d.variantId || id), content_type: 'product', content_name: d.nom, quantity: 1, price: v }], content_type: 'product', currency: 'EUR', value: v });
      }
    } catch(e){}
  }

  /* ─── Styles ─── */
  var css = ''
  + '#ebmf-v{position:fixed;inset:0;z-index:2147482000;background:rgba(0,0,0,.28);opacity:0;transition:opacity .4s ease}'
  + '#ebmf-v.on{opacity:1}'
  + '#ebmf{position:fixed;z-index:2147482001;left:50%;bottom:0;width:min(480px,100vw);max-height:92vh;max-height:92dvh;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;box-sizing:border-box;background:#f6f4f0;border-radius:22px 22px 0 0;padding:10px 22px calc(24px + env(safe-area-inset-bottom));transform:translate(-50%,102%);transition:transform .5s cubic-bezier(.22,.8,.24,1);font-family:Montserrat,sans-serif;color:#111;text-align:left;box-shadow:0 -12px 40px rgba(0,0,0,.14)}'
  + '#ebmf.on{transform:translate(-50%,0)}'
  + '#ebmf *{box-sizing:border-box}'
  + '#ebmf .mf-grip{width:38px;height:4px;border-radius:4px;background:#d6d0c6;margin:0 auto 12px}'
  + '#ebmf .mf-x{position:absolute;top:14px;right:18px;width:34px;height:34px;border-radius:50%;border:1px solid rgba(0,0,0,.12);background:transparent;display:flex;align-items:center;justify-content:center;font:300 19px Montserrat,sans-serif;color:#111;cursor:pointer;padding:0;line-height:1}'
  + '#ebmf .mf-k{font-size:8.5px;font-weight:600;letter-spacing:.38em;color:#7a7268;margin:6px 0 12px;padding-right:44px}'
  + '#ebmf .mf-off{background:#ebe5db;border-radius:10px;padding:11px 14px;font-size:11px;line-height:1.45;color:#2a2622;margin:0 46px 14px 0}'
  + '#ebmf .mf-k + .mf-off{margin-right:0}'
  + '#ebmf .mf-off b{font-weight:700}'
  + '#ebmf .mf-vgs{display:flex;gap:10px;margin-bottom:2px}'
  + '#ebmf .mf-vg{flex:1;border:1px solid rgba(0,0,0,.1);border-radius:14px;padding:6px;background:#f6f4f0;opacity:.55;cursor:pointer;transition:opacity .25s,border-color .25s}'
  + '#ebmf .mf-vg.on{border:1.5px solid #111;opacity:1}'
  + '#ebmf .mf-vph{height:84px;border-radius:10px;background:#efece6;display:flex;align-items:center;justify-content:center;overflow:hidden}'
  + '#ebmf .mf-vph img{width:100%;height:100%;object-fit:contain;transform:scale(.88);mix-blend-mode:darken}'
  + '#ebmf .mf-haut{display:flex;gap:16px;align-items:center;margin-top:2px}'
  + '#ebmf .mf-ph{width:112px;height:142px;border-radius:14px;background:#efece6;display:flex;align-items:center;justify-content:center;flex:none;overflow:hidden}'
  + '#ebmf .mf-ph img{width:100%;height:100%;object-fit:contain;transform:scale(.88);mix-blend-mode:darken}'
  + '#ebmf .mf-g{font-size:8.5px;font-weight:600;letter-spacing:.34em;margin-top:14px}'
  + '#ebmf .mf-haut .mf-g{margin-top:0}'
  + '#ebmf .mf-n{display:flex;justify-content:space-between;align-items:baseline;gap:10px;font-size:16px;font-weight:700;letter-spacing:.06em;margin:5px 0 4px;line-height:1.25}'
  + '#ebmf .mf-np{font-size:14px;font-weight:500;letter-spacing:.03em;white-space:nowrap}'
  + '#ebmf .mf-s{font-size:11px;color:#6b645b;line-height:1.5}'
  + '#ebmf .mf-eng{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0 0}'
  + '#ebmf .mf-eng span{border:1px solid rgba(0,0,0,.18);padding:5px 8px;font-size:7.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase}'
  + '#ebmf .mf-acc{font-size:18px;font-weight:300;line-height:1.3;margin:14px 0 8px}'
  + '#ebmf .mf-acc b{font-weight:700}'
  + '#ebmf .mf-pts{list-style:none;margin:0 0 12px;padding:0;border-top:1px solid rgba(0,0,0,.08)}'
  + '#ebmf .mf-pts li{display:flex;gap:12px;padding:8px 0;border-bottom:1px solid rgba(0,0,0,.08);font-size:11.5px;line-height:1.5;color:#2a2622;margin:0}'
  + '#ebmf .mf-pts li span{font-size:8.5px;font-weight:600;letter-spacing:.2em;padding-top:3px;flex:none}'
  + '#ebmf .mf-dur{font-size:10.5px;color:#6b645b;margin:0 0 14px;line-height:1.5}'
  + '#ebmf button.mf-b{width:100%;display:flex;justify-content:space-between;align-items:center;height:54px;margin:0;padding:0 20px;background:#111;color:#fff;border:1px solid #111;border-radius:0;font:600 10.5px Montserrat,sans-serif;letter-spacing:.26em;cursor:pointer;-webkit-appearance:none;appearance:none}'
  + '#ebmf .mf-l2{display:flex;align-items:center;gap:14px}'
  + '#ebmf button.mf-b1{flex:1;display:flex;justify-content:space-between;align-items:center;height:44px;margin:0;padding:0 16px;background:transparent;color:#111;border:1px solid #111;border-radius:0;font:600 9.5px Montserrat,sans-serif;letter-spacing:.22em;cursor:pointer;-webkit-appearance:none;appearance:none}'
  + '#ebmf .mf-lien{display:inline-block;background:none;border:0;padding:0;font:600 9.5px Montserrat,sans-serif;letter-spacing:.24em;color:#111;text-decoration:underline;text-underline-offset:5px;cursor:pointer;white-space:nowrap}'
  + '#ebmf .mf-c{text-align:center;margin-top:16px}'
  + '#ebmf .mf-sep{height:1px;background:rgba(0,0,0,.1);margin:16px 0}'
  + '#ebmf .mf-tl{font-size:8px;font-weight:600;letter-spacing:.32em;color:#7a7268;margin:16px 0 8px}'
  + '#ebmf .mf-chs{display:grid;grid-template-columns:1fr 1fr;gap:6px}'
  + '#ebmf button.mf-ch{display:flex;align-items:center;gap:8px;margin:0;padding:9px 10px;background:transparent;border:1px solid rgba(0,0,0,.18);border-radius:0;color:#111;font:600 9px Montserrat,sans-serif;letter-spacing:.16em;cursor:pointer;text-align:left;-webkit-appearance:none;appearance:none}'
  + '#ebmf button.mf-ch i{width:14px;height:14px;border-radius:50%;flex:none;box-shadow:inset 0 0 0 1px rgba(0,0,0,.08)}'
  + '#ebmf button.mf-ch.on{background:#111;color:#fff;border-color:#111}'
  + '#ebmf button.mf-ch b{font-weight:600}'
  + '#ebmf .mf-chs.tx{grid-template-columns:repeat(4,1fr)}'
  + '#ebmf .mf-chs.tx button.mf-ch{flex-direction:column;align-items:stretch;gap:7px;padding:5px 5px 8px;text-align:center;letter-spacing:.12em;font-size:8.5px}'
  + '#ebmf .mf-tx{display:block;width:100%;aspect-ratio:1/1;background:#efece6 center/cover no-repeat}'
  + '#ebmf .mf-pour{font-size:11.5px;font-style:italic;color:#6b645b;margin:-2px 0 10px;line-height:1.5}'
  + '#ebmf button.mf-b.off{background:#e4dfd7;border-color:#e4dfd7;color:#7a7268}'
  + '#ebmf button.mf-b1.off{border-color:rgba(0,0,0,.25);color:#7a7268}'
  + '@media (prefers-reduced-motion:reduce){#ebmf,#ebmf-v{transition:none}}';

  var voile, panneau, actif = 0, produits = [];

  function photoDe(p){
    var v = p.m.variantes;
    if(v && p.sel >= 0 && v[p.sel].photo) return BASE + v[p.sel].photo;
    if(p.m.photo === 'site'){ var u = (p.d.media && p.d.media.miniature) || ''; return u + (u.indexOf('?') < 0 ? '?' : '&') + 'width=500'; }
    return BASE + p.m.photo;
  }
  function varianteId(p){ return p.m.variantes ? (p.sel >= 0 ? p.d.variantes[p.sel].variantId : null) : p.d.variantId; }
  function choixHTML(p){
    var v = p.m.variantes; if(!v) return '';
    return '<div class="mf-tl">' + esc(p.m.choix.toUpperCase()) + '</div><div class="mf-chs' + (v[0].texture ? ' tx' : '') + '">'
      + v.map(function(x, i){ return '<button type="button" class="mf-ch' + (i === p.sel ? ' on' : '') + '" data-choix="' + p.i + ':' + i + '">' + (x.texture ? '<span class="mf-tx" style="background-image:url(' + (/^https?:/.test(x.texture) ? x.texture + '&width=240' : BASE + x.texture) + ')"></span>' : '<i style="background:' + x.couleur + '"></i>') + '<b>' + esc(x.label.toUpperCase()) + '</b></button>'; }).join('')
      + '</div>';
  }
  function blocProduit(p, multi){
    var m = p.m, d = p.d;
    var tete = '<div class="mf-g" style="color:' + COULEUR[m.gamme] + '">' + esc((m.gamme === 'balance' ? 'Balance' : 'Bloom').toUpperCase() + ' · ' + m.type.toUpperCase()) + '</div>'
      + '<div class="mf-n"><span>' + esc(d.nom.toUpperCase()) + '</span>' + (multi ? '<span class="mf-np">' + euros(nb(d.prix)) + '</span>' : '') + '</div>'
      + '<div class="mf-s">' + esc(d.sousTitre || '').split(' · ').join('<br>') + ((d.details && d.details[0]) ? ' · ' + esc(d.details[0]) : '') + '</div>';
    var h = multi ? tete
      : '<div class="mf-haut"><div class="mf-ph"><img src="' + photoDe(p) + '" alt="' + esc(d.nom) + ' ELKHA.B"></div><div>' + tete + '</div></div>';
    h += '<div class="mf-eng">' + m.eng.map(function(e){ return '<span>' + insec(e) + '</span>'; }).join('') + '</div>'
      + choixHTML(p)
      + '<div class="mf-acc">' + m.accroche + '</div>'
      + (m.pour ? '<div class="mf-pour">' + esc(m.pour) + '</div>' : '')
      + '<ul class="mf-pts">' + m.points.map(function(t, i){ return '<li><span style="color:' + COULEUR[m.gamme] + '">0' + (i + 1) + '</span>' + esc(t) + '</li>'; }).join('') + '</ul>'
      + '<div class="mf-dur">' + insec(m.duree) + '</div>';
    if(multi){
      h += '<div class="mf-l2"><button type="button" class="mf-b1' + (varianteId(p) ? '' : ' off') + '" data-ajout="' + p.i + '"><span>' + (varianteId(p) ? 'AJOUTER CE SOIN' : 'CHOISIR') + '</span><span>' + euros(nb(d.prix)) + '</span></button><button type="button" class="mf-lien" data-fiche="' + esc(p.id) + '">FICHE COMPLÈTE</button></div>';
    } else {
      h += '<button type="button" class="mf-b' + (varianteId(p) ? '' : ' off') + '" data-ajout="' + p.i + '"><span>' + (varianteId(p) ? (p.m.variantes ? 'AJOUTER · ' + esc(p.m.variantes[p.sel].label.split(' ')[0]) : 'AJOUTER AU PANIER') : esc(p.m.choisir.toUpperCase())) + '</span><span>' + euros(nb(d.prix)) + '</span></button>'
        + '<div class="mf-c"><button type="button" class="mf-lien" data-fiche="' + esc(p.id) + '">VOIR LA FICHE COMPLÈTE</button></div>';
    }
    return h;
  }

  function manque(){ for(var i = 0; i < produits.length; i++){ if(!varianteId(produits[i])) return i; } return -1; }
  function dessiner(){
    var multi = produits.length > 1;
    var total = produits.reduce(function(t, p){ return t + nb(p.d.prix); }, 0);
    var h = '<div class="mf-grip"></div><button type="button" class="mf-x" aria-label="Fermer">×</button>';
    if(multi){
      var n = NOMBRES[produits.length];
      h += '<div class="mf-k">LES ' + produits.length + ' SOINS DE LA VIDÉO</div>'
        + '<div class="mf-off">Avec les ' + n + ' soins : ' + (total >= SEUIL_LIVRAISON ? '<b>livraison offerte</b> et <b>un échantillon offert</b>' : '<b>un échantillon offert</b>') + '</div>'
        + '<div class="mf-vgs">' + produits.map(function(p, i){ return '<div class="mf-vg' + (i === actif ? ' on' : '') + '" data-vg="' + i + '" role="button" tabindex="0" aria-label="' + esc(p.d.nom) + '"><div class="mf-vph"><img src="' + photoDe(p) + '" alt="' + esc(p.d.nom) + ' ELKHA.B"></div></div>'; }).join('') + '</div>'
        + '<div class="mf-det">' + blocProduit(produits[actif], true) + '</div>'
        + '<div class="mf-sep"></div>'
        + '<button type="button" class="mf-b' + (manque() < 0 ? '' : ' off') + '" data-ajout="tout"><span>' + (manque() < 0 ? 'AJOUTER LES ' + n.toUpperCase() + ' SOINS' : esc(produits[manque()].m.choisir.toUpperCase())) + '</span><span>' + euros(total) + '</span></button>';
    } else {
      h += '<div class="mf-off">Livraison offerte dès ' + SEUIL_LIVRAISON + ' € d’achat</div>' + blocProduit(produits[0], false);
    }
    panneau.innerHTML = h;
  }

  function ouvrirPanier(){
    var p = document.getElementById('ebCartPanel'), v = document.getElementById('ebCartBackdrop');
    if(p) p.classList.add('open');
    if(v) v.classList.add('open');
  }
  async function ajouter(liste, bouton){
    if(typeof window.ebCartAddItem !== 'function') return;
    var texte = bouton.innerHTML;
    bouton.disabled = true;
    bouton.innerHTML = '<span>AJOUT EN COURS…</span>';
    for(var i = 0; i < liste.length; i++){ await window.ebCartAddItem(varianteId(liste[i]), 1); }   // l'un après l'autre
    bouton.innerHTML = '<span>AJOUTÉ</span>';
    setTimeout(function(){ fermer(); ouvrirPanier(); bouton.disabled = false; bouton.innerHTML = texte; }, 450);
  }

  function fermer(){
    if(!panneau) return;
    panneau.classList.remove('on'); voile.classList.remove('on');
    document.documentElement.style.overflow = '';
    try {
      var u = new URL(location.href); u.searchParams.delete('mini');
      history.replaceState(history.state, '', u.pathname + (u.search || '') + u.hash);
    } catch(e){}
  }

  function construire(){
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    voile = document.createElement('div'); voile.id = 'ebmf-v';
    panneau = document.createElement('div'); panneau.id = 'ebmf';
    panneau.setAttribute('role', 'dialog'); panneau.setAttribute('aria-modal', 'true');
    panneau.setAttribute('aria-label', produits.map(function(p){ return p.d.nom; }).join(' et '));
    document.body.appendChild(voile); document.body.appendChild(panneau);
    voile.addEventListener('click', fermer);
    panneau.addEventListener('click', function(e){
      var t = e.target.closest('button, [data-vg]'); if(!t) return;
      if(t.classList.contains('mf-x')) return fermer();
      if(t.hasAttribute('data-vg')){
        actif = +t.getAttribute('data-vg');
        dessiner();
        suivreVue(produits[actif].id, produits[actif].d);
        return;
      }
      if(t.hasAttribute('data-fiche')){ var id = t.getAttribute('data-fiche'); fermer(); return ficheComplete(id); }
      if(t.hasAttribute('data-choix')){
        var c = t.getAttribute('data-choix').split(':');
        produits[+c[0]].sel = +c[1];
        var haut = panneau.scrollTop; dessiner(); panneau.scrollTop = haut;
        return;
      }
      var a = t.getAttribute('data-ajout');
      if(a === 'tout'){
        var q = manque();
        if(q >= 0){ actif = q; dessiner(); var zone = panneau.querySelector('.mf-chs'); if(zone) zone.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
        return ajouter(produits, t);
      }
      if(a !== null){
        if(!varianteId(produits[+a])){ var z = panneau.querySelector('.mf-chs'); if(z) z.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
        return ajouter([produits[+a]], t);
      }
    });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') fermer(); });
    dessiner();
    document.documentElement.style.overflow = 'hidden';
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ voile.classList.add('on'); panneau.classList.add('on'); }); });
    suivreVue(produits[0].id, produits[0].d);
  }

  /* ─── Démarrage : on attend les données des soins, puis on ouvre ─── */
  function demarrer(){
    charger(['produits-data-test.js', 'produits-balance-test.js'], function(){
      var essais = 0, t = setInterval(function(){
        var P = window.EB_PRODUITS || {};
        var prets = ids.every(function(id){ return P[id] || !MINI[id]; });
        if(!prets && ++essais < 60) return;
        clearInterval(t);
        produits = [];
        ids.forEach(function(id){
          var m = MINI[id], d = P[id];
          if(!m || !d) return;
          if(m.variantes){
            if(!d.variantes || d.variantes.length !== m.variantes.length) return;
            var sel = -1;
            m.variantes.forEach(function(v, k){ if(v.cle === choixLien[id]) sel = k; });
            produits.push({ id: id, m: m, d: d, i: produits.length, sel: sel });
          } else if(d.variantId){
            produits.push({ id: id, m: m, d: d, i: produits.length, sel: -1 });
          }
        });
        if(!produits.length){ if(P[ids[0]]) ficheComplete(ids[0]); return; }
        construire();
      }, 150);
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer);
  else demarrer();
})();
