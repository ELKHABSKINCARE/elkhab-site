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
// - Couleurs, textures des soins (sens), « Le saviez-vous ? » (savoir) : dans COFFRETS ci-dessous.
// - Texte de l'univers ELKHA.B et petit mot cadeau : UNIVERS et MOT, juste après.
// - Ne pas supprimer les guillemets, les virgules ni les accolades { } [ ].
// =====================================================================
(function(){
  if(window.ebRituel) return; window.ebRituel = true;

  // ───────────────────────────── RÉGLAGES ─────────────────────────────
  var BASE = 'https://elkhabskincare.github.io/elkhab-site/';
  var SHOP = 'https://cdn.shopify.com/s/files/1/1016/8683/7593/files/';
  // motif : l'écran d'ouverture (motifs de la boîte) · voile / encre : couleur posée sur le motif et couleur du texte
  // nuit / or : fond des moments du soir et couleur des titres sur ce fond
  // sens : la texture et le parfum de chaque soin · savoir : les « Le saviez-vous ? », rangés par moment du rituel
  var COFFRETS = {
    ts: {
      fiche: 'coffret-temps-suspendu', nom: 'Le Temps Suspendu', sous: 'Coffret Rituel Lift', couleur: '#8a6a22',
      bande: BASE + 'rituel-bande-ts.webp', motif: BASE + 'rituel-motif-ts.webp',
      voile: 'rgba(16,24,14,.5)', base: '#2c3826', encre: '#e9c979', nuit: '#1f2a1b', or: '#e9c979',
      sens: {
        'active-lift': "Un sérum au parfum floral, réchauffé de notes d'ambre et de poudre.",
        'age-lift': "Une crème légère et nourrissante, au fini souple et au délicat parfum floral.",
        'eye-lift': "Une texture légère, sans film gras, aux notes de rose et de géranium."
      },
      savoir: {
        'Matin et soir': [
          "Les peptides sont de courtes chaînes d'acides aminés, les briques qui composent le collagène. Ils agissent comme des messagers : ils signalent à la peau qu'il est temps de produire du collagène, la protéine de sa fermeté, que l'on fabrique un peu moins chaque année dès 25 ans. Les résultats se construisent donc avec la régularité, semaine après semaine. Le matin, terminez par une protection solaire : les UV sont le premier accélérateur du relâchement cutané.",
          "La peau du contour de l'œil est trois à cinq fois plus fine que celle du visage, et presque sans glandes sébacées : c'est là que les ridules apparaissent en premier. Appliquez Eye Lift du bout de l'annulaire, le doigt qui appuie le moins."
        ]
      }
    },
    lh: {
      fiche: 'coffret-lumiere-dhiver', nom: "Lumière d'hiver", sous: 'Coffret Rituel Éclat', couleur: '#7d1f2b',
      bande: BASE + 'rituel-bande-lh.webp', motif: BASE + 'rituel-motif-lh.webp',
      voile: 'rgba(40,6,12,.55)', base: '#4a1219', encre: '#e9c979', nuit: '#3d0d15', or: '#e9c979',
      sens: {
        'radiance-serum': "Une texture sorbet jaune soleil, fondante et douce, au parfum d'agrumes.",
        'lumibloom-arbutin': "Un sérum léger et soyeux, aux notes de vétiver, de cèdre et de vanille."
      },
      savoir: {
        'Le matin': ["La vitamine C est un antioxydant : elle neutralise les radicaux libres produits par les UV et la pollution, ceux qui ternissent le teint. Appliquée le matin, elle prépare la peau à la journée et renforce l'action de votre protection solaire, sans la remplacer."],
        'Le soir': ["L'alpha-arbutine freine la tyrosinase, l'enzyme qui fabrique la mélanine. Moins de pigment produit en excès : les taches s'estompent peu à peu. Comptez six à huit semaines, le temps que votre peau se renouvelle."]
      }
    },
    rm: {
      fiche: 'coffret-rituel-de-minuit', nom: 'Rituel de Minuit', sous: 'Coffret Soin du Soir', couleur: '#9b2f62',
      bande: BASE + 'rituel-bande-rm.webp', motif: BASE + 'rituel-motif-rm.webp',
      voile: 'rgba(36,8,22,.55)', base: '#3a1a2c', encre: '#ffffff', nuit: '#33111f', or: '#f0b8d2',
      sens: {
        'fusion-balance': "Deux phases qui fusionnent quand on l'agite, une texture qui fond sur le maquillage. Sans parfum.",
        'luminescence-boost': "Une texture fondante et fraîche, aux notes poudrées d'iris et de violette.",
        'radiance-eye-cream': "Une crème douce et confortable, aux notes de coton et de fleurs."
      },
      savoir: {
        'Le soir': [
          "Le maquillage, surtout waterproof, est conçu pour résister à l'eau : seule une phase huileuse peut le dissoudre. Celle de Fusion Balance capte les pigments, la phase aqueuse rince. Pas besoin de frotter, et la peau garde ses huiles naturelles, celles qui protègent sa barrière.",
          "La nuit, la peau change de rythme : le renouvellement de ses cellules s'accélère, mais elle perd aussi plus d'eau. C'est le meilleur moment pour lui apporter des actifs raffermissants et hydratants."
        ]
      }
    },
    na: {
      fiche: 'coffret-nouvelle-aube', nom: 'Nouvelle Aube', sous: 'Coffret Peau Neuve', couleur: '#7a4900',
      bande: BASE + 'rituel-bande-na.webp', motif: BASE + 'rituel-motif-na.webp',
      voile: 'rgba(246,244,240,.3)', base: '#cdd8c0', encre: '#7a4900', nuit: '#2b3424', or: '#d9b27a',
      sens: {
        'aha-balance-peel': "Une texture liquide et légère, à la senteur discrète, légèrement sucrée.",
        'active-lift': "Un sérum au parfum floral, réchauffé de notes d'ambre et de poudre.",
        'hydra-balance': "Un gel frais qui glisse sur la peau, au parfum aquatique et fruité."
      },
      savoir: {
        'Matin et soir': ["L'acide hyaluronique peut retenir jusqu'à mille fois son poids en eau. Dans Hydra Balance, il est présent en plusieurs tailles de molécules : les plus grandes hydratent en surface, les plus petites agissent plus profondément dans l'épiderme."],
        '1 à 2 soirs par semaine': ["L'acide lactique est un AHA : il dissout le « ciment » qui retient les cellules mortes à la surface de la peau, sans grains ni frottement. C'est une exfoliation chimique, plus régulière qu'un gommage. Il fait aussi partie des composants naturels de l'hydratation de la peau : il exfolie tout en hydratant. Le lendemain matin, la protection solaire est indispensable : une peau fraîchement exfoliée est plus sensible aux UV."]
      }
    }
  };
  // textes communs aux quatre coffrets
  var UNIVERS = "Chez ELKHA.B, chaque soin est formulé avec précision : des actifs choisis pour leur efficacité, dosés au juste nécessaire, dans des formules vegan et d'origine naturelle, certifiées COSMOS Natural.";
  var VALEURS = ['Vegan', 'COSMOS Natural', 'Marque française'];
  var MOT = "Que ce coffret vous ait été offert ou que vous vous soyez fait plaisir, ce moment est pour vous.";
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
  + ".ebq-paris{font-size:7px;letter-spacing:.6em;padding-left:.6em;color:#555;margin-top:4px;display:flex;align-items:center;justify-content:center;gap:9px}"
  + ".ebq-paris:before,.ebq-paris:after,#ebq-ouv .ebq-op:before,#ebq-ouv .ebq-op:after{content:'';display:block;width:18px;height:1px;background:currentColor;opacity:.7}"
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
  // ── version immersive : univers, petit mot, textures, moments jour / nuit, « Le saviez-vous ? »
  + "#eb-rituel .ebq-bien2{font-size:15px;font-weight:600;color:#111;margin:0 0 10px}"
  + "#eb-rituel .ebq-univ{font-size:13.5px;line-height:1.8;margin:0 28px;color:#2a2723}"
  + ".ebq-val{display:flex;justify-content:center;flex-wrap:wrap;gap:4px 0;margin:20px 16px 0;font-size:8.5px;letter-spacing:.2em;text-transform:uppercase;font-weight:600;color:#111}"
  + ".ebq-val span+span:before{content:'\\00B7';margin:0 9px;color:var(--c)}"
  + "#eb-rituel .ebq-mot{margin:34px 34px 0;font-style:italic;font-weight:300;font-size:14px;line-height:1.75;color:#4a453e}"
  + ".ebq-soin em{display:block;font-size:11px;line-height:1.6;color:#5a544c;margin-top:6px;padding:0 2px}"
  + ".ebq-m{padding:40px 24px 42px;text-align:left}"
  + ".ebq-mi{max-width:480px;margin:0 auto}"
  + "#eb-rituel .ebq-mh{font-size:10px;letter-spacing:.32em;padding-left:.32em;text-transform:uppercase;font-weight:600;text-align:center}"
  + "#eb-rituel .ebq-st{font-size:13px;line-height:1.7;margin-top:18px}"
  + ".ebq-st b{display:block;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;margin-bottom:4px}"
  + ".ebq-sav{margin-top:24px;padding-top:18px;border-top:1px solid #e3dccf}"
  + ".ebq-sav i{display:block;font-style:normal;font-size:9px;letter-spacing:.3em;text-transform:uppercase;font-weight:600;margin-bottom:8px}"
  + "#eb-rituel .ebq-sav p{font-size:13px;line-height:1.75}"
  + "#eb-rituel .ebq-sav p+p{margin-top:14px}"
  + ".ebq-jour .ebq-mh,.ebq-jour .ebq-sav i{color:var(--c)}.ebq-jour .ebq-st b{color:#111}.ebq-jour{color:#2a2723}"
  + ".ebq-nuit{color:#efe4d6}.ebq-nuit .ebq-mh,.ebq-nuit .ebq-sav i,.ebq-nuit .ebq-st b{color:var(--o)}.ebq-nuit .ebq-sav{border-color:rgba(255,255,255,.2)}"
  + ".ebq-jour+.ebq-jour{padding-top:0}"
  + ".ebq-js .ebq-rv{opacity:0;transform:translateY(16px);transition:opacity .9s ease,transform .9s ease}"
  + ".ebq-js .ebq-rv.ebq-vu{opacity:1;transform:none}"
  // ── écran d'ouverture (le couvercle)
  + "#ebq-ouv{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483000;font-family:'Montserrat',sans-serif;text-align:center;-webkit-font-smoothing:antialiased;overflow:hidden}"
  + "#ebq-ouv .ebq-p{position:absolute;top:0;bottom:0;width:50.5%;overflow:hidden;transition:transform 1.2s cubic-bezier(.7,0,.25,1) .35s}"
  + "#ebq-ouv .ebq-pg{left:0}#ebq-ouv .ebq-pd{right:0}"
  + "#ebq-ouv .ebq-p i{position:absolute;top:0;bottom:0;width:100vw;background-size:cover;background-position:center}"
  + "#ebq-ouv .ebq-pg i{left:0}#ebq-ouv .ebq-pd i{right:0}"
  + "#ebq-ouv .ebq-p b{position:absolute;top:0;left:0;right:0;bottom:0}"
  + "#ebq-ouv .ebq-c{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 20px;transition:opacity .45s ease}"
  + "#ebq-ouv .ebq-ol{font-size:22px;letter-spacing:.45em;padding-left:.45em}"
  + "#ebq-ouv .ebq-op{font-size:7.5px;letter-spacing:.7em;padding-left:.7em;margin-top:5px;opacity:.85;display:flex;align-items:center;justify-content:center;gap:10px}"
  + "#ebq-ouv{visibility:hidden}#ebq-ouv.ebq-vis{visibility:visible;animation:ebqApparait .6s ease}@keyframes ebqApparait{from{opacity:0}}"
  + "#ebq-ouv button.ebq-att{opacity:.55}"
  + "#ebq-ouv .ebq-ok{font-size:9.5px;letter-spacing:.34em;padding-left:.34em;text-transform:uppercase;margin-top:16vh;opacity:.9}"
  + "#ebq-ouv .ebq-on{font-size:27px;letter-spacing:.16em;padding-left:.16em;font-weight:500;text-transform:uppercase;margin-top:14px;line-height:1.3}"
  + "#ebq-ouv .ebq-os{font-size:10.5px;letter-spacing:.26em;padding-left:.26em;text-transform:uppercase;margin-top:10px;font-weight:500}"
  + "#ebq-ouv button{margin-top:14vh;background:transparent;border:1px solid currentColor;color:inherit;font-family:inherit;padding:16px 34px 16px calc(34px + .26em);font-size:10.5px;letter-spacing:.26em;text-transform:uppercase;font-weight:600;cursor:pointer}"
  + "#ebq-ouv .ebq-of{position:absolute;bottom:26px;left:0;right:0;font-size:8.5px;letter-spacing:.3em;padding-left:.3em;text-transform:uppercase;opacity:.75}"
  + "#ebq-ouv.ebq-ouvert .ebq-c{opacity:0}#ebq-ouv.ebq-ouvert .ebq-pg{transform:translateX(-101%)}#ebq-ouv.ebq-ouvert .ebq-pd{transform:translateX(101%)}"
  + "@media (prefers-reduced-motion:reduce){#ebq-ouv .ebq-p{transition:none}#ebq-ouv{transition:opacity .5s}#ebq-ouv.ebq-ouvert{opacity:0}}"
  + "@media (min-width:700px){.ebq-bande{height:110px}#eb-rituel h1{font-size:28px}#ebq-ouv .ebq-on{font-size:34px}#ebq-ouv .ebq-ol{font-size:26px}}";

  function esc(t){ return String(t == null ? '' : t).replace(/[&<>"]/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function charger(src, ok){ var s = document.createElement('script'); s.src = src; s.async = false; s.onload = ok; s.onerror = ok; document.head.appendChild(s); }
  function chargerTous(liste, fin){ var i = 0; (function suivant(){ if(i >= liste.length) return fin(); charger(liste[i++], suivant); })(); }

  function code(){
    var q = location.search.replace(/^\?/, '').split('&')[0].toLowerCase();
    if(COFFRETS[q]) return q;
    try { var c = new URL(location.href).searchParams.get('coffret'); if(c && COFFRETS[c]) return c; } catch(e){}
    return '';
  }

  function soinsHTML(P, soins, sens){
    sens = sens || {};
    var reel = soins.filter(function(s){ return FLACONS[s]; });
    var hmax = Math.max.apply(null, reel.map(function(s){ return FLACONS[s][0]; }).concat([1]));
    return '<div class="ebq-soins" style="grid-template-columns:repeat(' + soins.length + ',1fr)">' + soins.map(function(s){
      var f = FLACONS[s], p = P[s] || {};
      var h = f ? Math.round(138 * f[0] / hmax) : 120;
      var img = f ? f[1] : ((p.media && (p.media.miniature || (p.media.images && p.media.images[0]))) || '');
      return '<div class="ebq-soin"><span class="ebq-fl">' + (img ? '<img src="' + esc(img + (img.indexOf('cdn.shopify.com') < 0 ? '' : (img.indexOf('?') < 0 ? '?' : '&') + 'width=400')) + '" alt="' + esc((p.nom || '') + ' ELKHA.B') + '" style="height:' + h + 'px;margin-bottom:-' + Math.round(h * 0.172) + 'px" loading="lazy">' : '') + '</span>'
        + '<b>' + esc(p.nom || '') + '</b>' + (sens[s] ? '<em>' + esc(sens[s]) + '</em>' : '<span>' + esc(f ? f[2] : '') + '</span>') + '</div>';
    }).join('') + '</div>';
  }

  function estNuit(m){ return /soir/i.test(m) && !/matin/i.test(m); }
  function momentsHTML(P, ro, C){
    var groupes = [], g = null;
    (ro.etapes || []).forEach(function(e){
      var m = e.moment || ro.moment || '';
      if(!g || g.m !== m){ g = { m: m, et: [] }; groupes.push(g); }
      g.et.push(e);
    });
    return groupes.map(function(g){
      var nuit = estNuit(g.m), sav = (C.savoir || {})[g.m] || [];
      return '<section class="ebq-m ' + (nuit ? 'ebq-nuit' : 'ebq-jour') + '"' + (nuit ? ' style="background:' + C.nuit + '"' : '') + '><div class="ebq-mi ebq-rv">'
        + (g.m ? '<p class="ebq-mh">' + esc(g.m) + '</p>' : '')
        + g.et.map(function(e){ var nom = e.titre || (P[e.soin] && P[e.soin].nom) || ''; return '<p class="ebq-st">' + (nom ? '<b>' + esc(nom) + '</b>' : '') + esc(e.texte) + '</p>'; }).join('')
        + (sav.length ? '<div class="ebq-sav"><i>Le saviez-vous ?</i>' + sav.map(function(t){ return '<p>' + esc(t) + '</p>'; }).join('') + '</div>' : '')
        + '</div></section>';
    }).join('');
  }

  // l'écran d'ouverture : affiché dès le scan, pendant que les fiches se chargent derrière ;
  // les motifs de la boîte s'écartent ensuite comme un couvercle qu'on soulève
  var OUV = null;
  function styles(){ if(document.getElementById('ebq-css')) return; var st = document.createElement('style'); st.id = 'ebq-css'; st.textContent = CSS; document.head.appendChild(st); }
  function ouverture(C){
    styles();
    var o = document.createElement('div'); o.id = 'ebq-ouv'; o.setAttribute('role', 'dialog'); o.setAttribute('aria-label', 'Votre rituel ' + C.nom);
    var pan = function(c){ return '<div class="ebq-p ' + c + '" style="background:' + (C.base || '#111') + '"><i style="background-image:url(' + esc(C.motif) + ')"></i><b style="background:' + C.voile + '"></b></div>'; };
    o.innerHTML = pan('ebq-pg') + pan('ebq-pd')
      + '<div class="ebq-c" style="color:' + C.encre + '"><div class="ebq-ol">ELKHA.B</div><div class="ebq-op">PARIS</div>'
      + '<div class="ebq-ok">Votre rituel</div><div class="ebq-on">' + esc(C.nom) + '</div><div class="ebq-os">' + esc(C.sous) + '</div>'
      + '<button type="button">Ouvrir mon rituel</button><div class="ebq-of">Édition des fêtes</div></div>';
    document.body.appendChild(o);
    // l'écran reste caché (le logo de chargement reste visible) tant que l'image des motifs n'est pas arrivée
    var vu = false, montrer = function(){ if(vu) return; vu = true; o.classList.add('ebq-vis'); };
    var im = new Image(); im.onload = im.onerror = montrer; im.src = C.motif; if(im.complete) montrer();
    setTimeout(montrer, 4000);
    var html = document.documentElement, avant = [html.style.overflow, document.body.style.overflow];
    html.style.overflow = 'hidden'; document.body.style.overflow = 'hidden';
    var fini = false, pret = false, demande = false, btn = o.querySelector('button');
    function fermer(){
      if(fini) return; fini = true;
      html.style.overflow = avant[0]; document.body.style.overflow = avant[1];
      if(o.parentNode) o.parentNode.removeChild(o);
    }
    function ouvrir(){ window.scrollTo(0, 0); o.classList.add('ebq-ouvert'); setTimeout(fermer, 1700); }
    btn.addEventListener('click', function(){ if(pret) ouvrir(); else { demande = true; btn.classList.add('ebq-att'); } });
    return { pret: function(){ pret = true; if(demande) ouvrir(); }, fermer: fermer };
  }

  function apparitions(root){
    if(!('IntersectionObserver' in window)) return;
    root.classList.add('ebq-js');
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('ebq-vu'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    [].forEach.call(root.querySelectorAll('.ebq-rv'), function(el){ io.observe(el); });
  }

  function page(root){
    var P = window.EB_PRODUITS || {}, k = code(), C = COFFRETS[k];
    styles();
    if(!C || !P[C.fiche]){
      if(OUV){ OUV.fermer(); OUV = null; }
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
    root.style.setProperty('--c', coul); root.style.setProperty('--o', C.or || coul);
    root.innerHTML = '<div class="ebq-bande" style="background-image:url(' + esc(C.bande) + ')"></div>'
      + '<div class="ebq-in">'
      + '<div class="ebq-logo">ELKHA.B</div><div class="ebq-paris">PARIS</div>'
      + '<p class="ebq-k" style="color:' + coul + '">Votre rituel</p>'
      + '<h1>' + esc(r.nom) + '</h1><p class="ebq-sous">' + esc(C.sous) + '</p>'
      + '<i class="ebq-g" style="background:linear-gradient(90deg,#f6f4f0,' + coul + ')"></i>'
      + '<p class="ebq-bien2">Bienvenue parmi les B.</p>'
      + '<p class="ebq-univ">' + esc(UNIVERS) + '</p>'
      + '<div class="ebq-val">' + VALEURS.map(function(v){ return '<span>' + esc(v) + '</span>'; }).join('') + '</div>'
      + '<p class="ebq-mot ebq-rv">' + esc(MOT) + '</p>'
      + '<div class="ebq-rv"><h2>Dans votre coffret</h2>' + soinsHTML(P, soins, C.sens) + '</div>'
      + '<h2 style="margin-bottom:0">Votre rituel</h2>'
      + '</div>'
      + momentsHTML(P, ro, C)
      + '<div class="ebq-in">'
      + '<button type="button" class="ebq-btn" data-a="avis">Donner mon avis</button>'
      + '<button type="button" class="ebq-btn ebq-btn2" data-a="skinid">Faire mon Skin ID</button>'
      + '<a class="ebq-lien" href="' + LIENS.site + '">Découvrir ELKHA.B</a>'
      + '<p class="ebq-fin">Bienvenue parmi les B. : beauté, bien-être, et surtout bien dans sa peau.</p>'
      + '</div><div class="ebq-bande" style="background-image:url(' + esc(C.bande) + ')"></div>';
    apparitions(root);
    if(OUV) OUV.pret();

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
    if(C && C.motif) OUV = ouverture(C);
    if(window.EB_PRODUITS && C && window.EB_PRODUITS[C.fiche]) return page(root);
    chargerTous(DONNEES, function(){ page(root); });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer); else demarrer();
})();
