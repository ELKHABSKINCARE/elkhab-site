// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
// =====================================================================
// ELKHA.B — Page « Votre rituel » (rituel.elkhab.com), ouverte par le QR code au dos des coffrets
// Embed Carrd :  <div id="eb-rituel"></div>
//                <script defer src="https://elkhabskincare.github.io/elkhab-site/rituel-engine.js"></script>
// L'adresse choisit le coffret : ?ts (Le Temps Suspendu), ?lh (Lumière d'hiver), ?rm (Rituel de Minuit), ?na (Nouvelle Aube)
// Le rituel (étapes, conclusion) vient des fiches des coffrets (produits-data-test.js et produits-balance-test.js) :
// une étape modifiée dans la fiche l'est aussi ici.
//
// MODE D'EMPLOI
// - Phrase d'accueil, conseil « Pour bien commencer », couleur : dans COFFRETS ci-dessous.
// - Ne pas supprimer les guillemets, les virgules ni les accolades { } [ ].
// =====================================================================
(function(){
  if(window.ebRituel) return; window.ebRituel = true;

  // ───────────────────────────── RÉGLAGES ─────────────────────────────
  var BASE = 'https://elkhabskincare.github.io/elkhab-site/';
  var SHOP = 'https://cdn.shopify.com/s/files/1/1016/8683/7593/files/';
  var COFFRETS = {
    ts: {
      fiche: 'coffret-temps-suspendu', sous: 'Coffret Rituel Lift', couleur: '#8a6a22',
      bande: BASE + 'rituel-bande-ts.webp',
      photo: SHOP + 'temps-suspendu-face-fond-site.jpg', cadre: { ratio: '1 / 1', position: '50% 57%', zoom: 1.12 },
      accueil: "Votre coffret réunit trois soins Balance aux peptides pour lisser les traits et raffermir la peau, regard compris.",
      conseil: "Les peptides agissent dans la durée : c'est l'application régulière, matin et soir, qui fait la différence au fil des semaines. Sur le contour des yeux, tapotez Eye Lift sans étirer la peau. Le matin, terminez par une protection solaire : les UV sont le premier accélérateur du relâchement cutané."
    },
    lh: {
      fiche: 'coffret-lumiere-dhiver', sous: 'Coffret Rituel Éclat', couleur: '#7d1f2b',
      bande: BASE + 'rituel-bande-lh.webp',
      photo: SHOP + 'lumiere-dhiver-face-fond-site.jpg', cadre: { ratio: '1 / 1', position: '50% 72%', zoom: 1.25 },
      accueil: "Votre coffret réunit deux sérums Bloom pour garder un teint lumineux et unifié tout l'hiver.",
      conseil: "Vitamine C le matin, alpha-arbutine le soir : chacun au moment où il agit le mieux. Les taches s'atténuent avec la régularité, comptez quelques semaines. Chaque matin, terminez par une protection solaire : sans elle, les taches reviennent plus vite."
    },
    rm: {
      fiche: 'coffret-rituel-de-minuit', sous: 'Coffret Soin du Soir', couleur: '#9b2f62',
      bande: BASE + 'rituel-bande-rm.webp',
      photo: SHOP + 'rituel-de-minuit-face-fond-site.jpg', cadre: { ratio: '1 / 1', position: '50% 57%', zoom: 1.12 },
      accueil: "Votre coffret réunit trois soins Bloom et Balance pour un rituel du soir complet : démaquiller, raffermir, reposer le regard.",
      conseil: "Agitez toujours Fusion Balance avant emploi pour mélanger ses deux phases. Pour le contour des yeux, une petite quantité de Radiance Eye Cream suffit pour les deux yeux. Le matin, une protection solaire préserve les résultats."
    },
    na: {
      fiche: 'coffret-nouvelle-aube', sous: 'Coffret Peau Neuve', couleur: '#7a4900',
      bande: BASE + 'rituel-bande-na.webp',
      photo: SHOP + 'nouvelle-aube-face-fond-site.jpg', cadre: { ratio: '4 / 3', position: '50% 59%', zoom: 1.35 },
      accueil: "Votre coffret réunit trois soins Balance pour commencer l'année avec une peau neuve : exfolier, lisser, repulper.",
      conseil: "Commencez AHA Balance Peel un soir par semaine, puis passez à deux si votre peau le tolère bien. Le lendemain, une protection solaire est indispensable : une peau fraîchement exfoliée est plus sensible aux UV."
    }
  };
  // les soins à leur taille réelle : [hauteur en cm, photo du flacon sur le fond du site, ce qu'il fait]
  // (sur ces photos, le bas du flacon est toujours à 82,8 % de la hauteur : tous les flacons sont posés sur la même ligne)
  var FLACONS = {
    'active-lift':        [9.5,  SHOP + 'balance-active-lift-flacon-site-v8.png', 'Sérum aux peptides'],
    'age-lift':           [14.5, SHOP + 'balance-age-lift-flacon-site-v6.png', 'Crème aux peptides'],
    'eye-lift':           [7.5,  SHOP + 'balance-eye-lift-flacon-site-v7.png', 'Contour des yeux aux peptides'],
    'aha-balance-peel':   [11,   SHOP + 'balance-aha-balance-peel-flacon-site-v6.png', "Peeling à l'acide lactique"],
    'hydra-balance':      [10.5, SHOP + 'balance-hydra-balance-flacon-site-v7.png', "Gel à l'acide hyaluronique"],
    'fusion-balance':     [12.5, SHOP + 'balance-fusion-balance-flacon-site-v6.png', 'Démaquillant biphasé'],
    'luminescence-boost': [9.5,  SHOP + 'bloom-luminescence-boost-flacon-site-v1.png', 'Sérum booster de fermeté'],
    'radiance-eye-cream': [7.5,  SHOP + 'bloom-radiance-eye-cream-flacon-site-v1.png', 'Soin contour des yeux'],
    'radiance-serum':     [12.5, BASE + 'bloom-radiance-c-serum-flacon-site-v1.png', 'Sérum éclat à la vitamine C'],
    'lumibloom-arbutin':  [9.5,  SHOP + 'bloom-lumi-bloom-arbutin-flacon-site-v1.png', "Sérum anti-taches à l'alpha-arbutine"]
  };
  var LIENS = { site: 'https://elkhab.com/', routines: 'https://routines.elkhab.com/' };
  // ─────────────────────────── FIN DES RÉGLAGES ───────────────────────────

  var DONNEES = [BASE + 'produits-data-test.js', BASE + 'produits-balance-test.js'];
  var AVIS = BASE + 'avis-engine.js', SKINID = BASE + 'skin-id-engine.js?v=6';

  var CSS = ""
  + "#eb-rituel{font-family:'Montserrat',sans-serif;color:#1d1b18;background:#f6f4f0;text-align:center;-webkit-font-smoothing:antialiased;width:100vw;margin-left:calc(50% - 50vw);overflow-x:hidden}"
  + "#eb-rituel *{box-sizing:border-box}"
  + "#eb-rituel h1,#eb-rituel h2,#eb-rituel p{margin:0;font-family:'Montserrat',sans-serif}"
  + ".ebq-bande{height:74px;background-size:cover;background-position:center}"
  + ".ebq-in{max-width:520px;margin:0 auto;padding:0 0 10px}"
  + ".ebq-logo{font-size:20px;letter-spacing:.42em;padding-left:.42em;font-weight:400;margin-top:26px;color:#111}"
  + ".ebq-paris{font-size:7px;letter-spacing:.6em;padding-left:.6em;color:#555;margin-top:2px}"
  + "#eb-rituel .ebq-k{font-size:9.5px;letter-spacing:.32em;padding-left:.32em;text-transform:uppercase;font-weight:600;margin:30px 0 10px}"
  + "#eb-rituel h1{font-size:23px;letter-spacing:.2em;padding-left:.2em;font-weight:500;text-transform:uppercase;line-height:1.3;color:#111}"
  + "#eb-rituel .ebq-sous{font-size:11px;letter-spacing:.24em;padding-left:.24em;text-transform:uppercase;color:#4a453e;margin-top:8px}"
  + ".ebq-g{display:block;width:70px;height:1px;margin:18px auto}"
  + "#eb-rituel .ebq-bien{font-size:14px;line-height:1.7;margin:0 26px;color:#2a2723}"
  + "#eb-rituel .ebq-bien b{display:block;font-weight:600;color:#111}"
  + ".ebq-photo{margin:20px 0 0;overflow:hidden}"
  + ".ebq-photo img{display:block;width:100%;height:100%;object-fit:cover}"
  + "#eb-rituel h2{font-size:11px;letter-spacing:.3em;padding-left:.3em;text-transform:uppercase;font-weight:600;margin:34px 0 16px;color:#111}"
  + ".ebq-soins{display:grid;gap:6px;padding:0 14px;align-items:start}"
  + ".ebq-soin{display:flex;flex-direction:column;align-items:center;background:none;border:0;padding:0;font-family:inherit;color:inherit}"
  + ".ebq-fl{display:flex;align-items:flex-end;justify-content:center;height:146px;width:100%;margin-bottom:24px}"
  + ".ebq-fl img{display:block;width:auto;max-width:100%}"
  + ".ebq-soin b{font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;margin-top:10px;line-height:1.35}"
  + ".ebq-soin span{font-size:10px;color:#5a544c;margin-top:4px;line-height:1.35}"
  + "#eb-rituel .ebq-mom{font-size:10px;letter-spacing:.28em;padding-left:.28em;text-transform:uppercase;font-weight:600;margin:26px 0 10px}"
  + ".ebq-et{list-style:none;margin:0 22px;padding:0;text-align:left}"
  + ".ebq-et li{position:relative;padding:12px 0 12px 34px;border-top:1px solid #e3dccf;font-size:13px;line-height:1.6;color:#2a2723}"
  + ".ebq-et li:last-child{border-bottom:1px solid #e3dccf}"
  + ".ebq-et li i{position:absolute;left:0;top:13px;font-style:normal;font-size:10px;color:#9a8f80}"
  + ".ebq-et li b{display:block;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;margin-bottom:2px;color:#111}"
  + "#eb-rituel .ebq-cons{margin:30px 26px 0;font-size:13px;line-height:1.7;color:#2a2723}"
  + "#eb-rituel .ebq-cons b{display:block;font-size:9.5px;letter-spacing:.28em;padding-left:.28em;text-transform:uppercase;margin-bottom:10px}"
  + ".ebq-btn{display:block;width:calc(100% - 44px);margin:28px 22px 0;background:#111;color:#f6f4f0;border:1px solid #111;font-family:'Montserrat',sans-serif;font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;font-weight:600;padding:17px 10px;cursor:pointer;text-decoration:none}"
  + ".ebq-btn2{margin-top:10px;background:transparent;color:#111}"
  + "#eb-rituel .ebq-lien{display:inline-block;margin:22px 0 0;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:#111;text-decoration:none;border-bottom:1px solid #111;padding-bottom:3px}"
  + "#eb-rituel .ebq-fin{font-size:12.5px;font-style:italic;color:#4a453e;line-height:1.7;margin:34px 30px 34px}"
  + ".ebq-liste{display:grid;gap:10px;margin:26px 22px 0}"
  + ".ebq-liste a{display:block;padding:16px;border:1px solid #e3dccf;color:#111;text-decoration:none;font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:600}"
  + "@media (min-width:700px){.ebq-bande{height:110px}#eb-rituel h1{font-size:28px}}";

  function esc(t){ return String(t == null ? '' : t).replace(/[&<>"]/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function charger(src, ok){ var s = document.createElement('script'); s.src = src; s.async = false; s.onload = ok; s.onerror = ok; document.head.appendChild(s); }
  function chargerTous(liste, fin){ var i = 0; (function suivant(){ if(i >= liste.length) return fin(); charger(liste[i++], suivant); })(); }

  function code(){
    var q = location.search.replace(/^\?/, '').split('&')[0].toLowerCase();
    if(COFFRETS[q]) return q;
    try { var c = new URL(location.href).searchParams.get('coffret'); if(c && COFFRETS[c]) return c; } catch(e){}
    return '';
  }

  function soinsHTML(P, soins){
    var reel = soins.filter(function(s){ return FLACONS[s]; });
    var hmax = Math.max.apply(null, reel.map(function(s){ return FLACONS[s][0]; }).concat([1]));
    return '<div class="ebq-soins" style="grid-template-columns:repeat(' + soins.length + ',1fr)">' + soins.map(function(s){
      var f = FLACONS[s], p = P[s] || {};
      var h = f ? Math.round(138 * f[0] / hmax) : 120;
      var img = f ? f[1] : ((p.media && (p.media.miniature || (p.media.images && p.media.images[0]))) || '');
      return '<div class="ebq-soin"><span class="ebq-fl">' + (img ? '<img src="' + esc(img + (img.indexOf('cdn.shopify.com') < 0 ? '' : (img.indexOf('?') < 0 ? '?' : '&') + 'width=400')) + '" alt="' + esc((p.nom || '') + ' ELKHA.B') + '" style="height:' + h + 'px;margin-bottom:-' + Math.round(h * 0.172) + 'px" loading="lazy">' : '') + '</span>'
        + '<b>' + esc(p.nom || '') + '</b><span>' + esc(f ? f[2] : '') + '</span></div>';
    }).join('') + '</div>';
  }

  function rituelHTML(P, ro, couleur){
    var h = '', mom = null, n = 0, ouvert = false;
    (ro.etapes || []).forEach(function(e){
      var m = e.moment || ro.moment || '';
      if(m !== mom){ if(ouvert) h += '</ol>'; h += (m ? '<p class="ebq-mom" style="color:' + couleur + '">' + esc(m) + '</p>' : '') + '<ol class="ebq-et">'; ouvert = true; mom = m; }
      n++;
      var nom = e.titre || (P[e.soin] && P[e.soin].nom) || '';
      h += '<li><i>' + (n < 10 ? '0' : '') + n + '</i>' + (nom ? '<b>' + esc(nom) + '</b>' : '') + esc(e.texte) + '</li>';
    });
    return h + (ouvert ? '</ol>' : '');
  }

  function page(root){
    var P = window.EB_PRODUITS || {}, k = code(), C = COFFRETS[k];
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    if(!C || !P[C.fiche]){
      // adresse sans coffret : on propose les quatre
      root.innerHTML = '<div class="ebq-in"><div class="ebq-logo">ELKHA.B</div><div class="ebq-paris">PARIS</div>'
        + '<p class="ebq-k" style="color:#8f8676">Votre rituel</p><h1>Votre coffret</h1><i class="ebq-g" style="background:linear-gradient(90deg,#f6f4f0,#8f8676)"></i>'
        + '<p class="ebq-bien"><b>Bienvenue parmi les B.</b>Choisissez votre coffret pour découvrir son rituel.</p><div class="ebq-liste">'
        + Object.keys(COFFRETS).map(function(c){ var f = P[COFFRETS[c].fiche]; return f ? '<a href="?' + c + '">' + esc(f.nom) + '</a>' : ''; }).join('')
        + '</div><a class="ebq-lien" href="' + LIENS.site + '">Découvrir ELKHA.B</a><p class="ebq-fin">Bienvenue parmi les B. : beauté, bien-être, et surtout bien dans sa peau.</p></div>';
      return;
    }
    var r = P[C.fiche], ro = r.routine || {}, soins = (ro.soins || []).filter(function(s){ return P[s]; }), coul = C.couleur;
    document.title = 'Votre rituel ' + r.nom + ' | ELKHA.B';
    var cad = C.cadre || {};
    root.innerHTML = '<div class="ebq-bande" style="background-image:url(' + esc(C.bande) + ')"></div>'
      + '<div class="ebq-in">'
      + '<div class="ebq-logo">ELKHA.B</div><div class="ebq-paris">PARIS</div>'
      + '<p class="ebq-k" style="color:' + coul + '">Votre rituel</p>'
      + '<h1>' + esc(r.nom) + '</h1><p class="ebq-sous">' + esc(C.sous) + '</p>'
      + '<i class="ebq-g" style="background:linear-gradient(90deg,#f6f4f0,' + coul + ')"></i>'
      + '<p class="ebq-bien"><b>Bienvenue parmi les B.</b>' + esc(C.accueil) + '</p>'
      + '<div class="ebq-photo" style="aspect-ratio:' + (cad.ratio || '1 / 1') + '"><img src="' + esc(C.photo + '?width=1000') + '" alt="Coffret ' + esc(r.nom) + ' ELKHA.B, édition des fêtes" style="object-position:' + (cad.position || '50% 50%') + ';transform:scale(' + (cad.zoom || 1) + ')"></div>'
      + '<h2>Dans votre coffret</h2>' + soinsHTML(P, soins)
      + '<h2>Votre rituel</h2>' + rituelHTML(P, ro, coul)
      + '<p class="ebq-cons"><b style="color:' + coul + '">Pour bien commencer</b>' + esc(C.conseil) + '</p>'
      + '<button type="button" class="ebq-btn" data-a="avis">Donner mon avis</button>'
      + '<button type="button" class="ebq-btn ebq-btn2" data-a="skinid">Faire mon Skin ID</button>'
      + '<a class="ebq-lien" href="' + LIENS.site + '">Découvrir ELKHA.B</a>'
      + '<p class="ebq-fin">Bienvenue parmi les B. : beauté, bien-être, et surtout bien dans sa peau.</p>'
      + '</div><div class="ebq-bande" style="background-image:url(' + esc(C.bande) + ')"></div>';

    root.addEventListener('click', function(ev){
      var b = ev.target.closest && ev.target.closest('[data-a]'); if(!b) return;
      if(b.getAttribute('data-a') === 'avis'){
        var items = soins.map(function(s){ var p = P[s], f = FLACONS[s]; return { n: p.avis || p.nom, d: p.nom, i: f ? f[1] : '' }; });
        if(typeof window.ebAvisOpen === 'function') window.ebAvisOpen(items); else charger(AVIS, function(){ if(window.ebAvisOpen) window.ebAvisOpen(items); });
      } else {
        if(typeof window.ebSkinIdOpen === 'function') window.ebSkinIdOpen(); else charger(SKINID, function(){ if(window.ebSkinIdOpen) window.ebSkinIdOpen(); });
      }
    });
  }

  function demarrer(){
    var root = document.getElementById('eb-rituel');
    if(!root){ root = document.createElement('div'); root.id = 'eb-rituel'; document.body.appendChild(root); }
    if(root.getAttribute('data-ok')) return; root.setAttribute('data-ok', '1');
    var C = COFFRETS[code()];
    if(C && C.photo){ var l = document.createElement('link'); l.rel = 'preload'; l.as = 'image'; l.href = C.photo + '?width=1000'; document.head.appendChild(l); }
    if(window.EB_PRODUITS && C && window.EB_PRODUITS[C.fiche]) return page(root);
    chargerTous(DONNEES, function(){ page(root); });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer); else demarrer();
})();
