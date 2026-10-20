// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
// =====================================================================
// ELKHA.B — Les soins Bloom, rangés par étape de routine
// Un seul embed Carrd :  <div id="eb-soins"></div>
//                        <script src="https://elkhabskincare.github.io/elkhab-site/soins-engine.js"></script>
//
// MODE D'EMPLOI
// - Pour modifier un texte : changer uniquement ce qui est entre guillemets "…".
// - Pour changer une photo : chercher (Ctrl + F) le repère 📷 puis remplacer
//   le lien entre guillemets par le nouveau lien Shopify.
// - Ne pas supprimer les guillemets, les virgules ni les accolades { } [ ].
// - Les prix viennent de produits-data.js quand il est chargé sur la page
//   (sinon, le prix écrit ici est utilisé).
// =====================================================================
(function(){

  // ───────────────────────────── RÉGLAGES ─────────────────────────────
  var REGLAGES = {
    // Hauteur du menu fixe du site : la barre « Votre besoin » se colle juste en dessous
    espaceMenu: 64,
    // Lien des fiches (l'adresse du site Bloom) — les fiches s'ouvrent en panneau
    lienFiche: "?fiche=",
    // Pont vers Balance (affiché seulement pour certains besoins) — false pour le masquer
    pontBalance: true,
    lienBalance: "https://balance.elkhab.com/"
  };

  // Les besoins (petites pastilles). « id » = ce qui apparaît dans l'adresse : ?besoin=eclat
  var BESOINS = [
    { id: "hydratation", nom: "Hydratation" },
    { id: "apaisement",  nom: "Apaisement" },
    { id: "eclat",       nom: "Éclat" },
    { id: "anti-taches", nom: "Teint unifié & anti-taches" },
    { id: "pores",       nom: "Pores & imperfections" },
    { id: "fermete",     nom: "Rides & fermeté" },
    { id: "regard",      nom: "Regard" },
    { id: "solaire",     nom: "Protection solaire" },
    { id: "sensibles",   nom: "Peaux sensibles" }
  ];

  // Texte du pont vers Balance, selon le besoin choisi
  var PONT = {
    "anti-taches": "Pour des taches plus installées, découvrez <b>Bright Control</b> et <b>Spot Control</b>, dans la gamme Balance.",
    "fermete":     "Pour des rides plus marquées, découvrez la gamme <b>Balance</b> et ses alternatives douces au rétinol.",
    "pores":       "Pour lisser le grain de peau, découvrez les exfoliants doux de la gamme <b>Balance</b>."
  };

  // Les soins. besoins = pastilles qui les allument ; ligne = petite ligne en italique
  var SOINS = {
    "gelee-lumibloom": {
      nom: "Gelée Lumi-Bloom", actifs: "Prébiotique · Acide hyaluronique · Sodium PCA",
      ligne: "Hydratation · Apaisement · Barrière cutanée · Peaux sensibles",
      besoins: ["hydratation","apaisement","sensibles"], prix: "28,90€", taille: "30 ml",
      // 📷 Gelée Lumi-Bloom
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000189881f48908d7eaebf894d3.png?v=1792227809",
      alt: "Gelée Lumi-Bloom ELKHA.B, gel aux prébiotiques et à l'acide hyaluronique, flacon pipette 30 ml"
    },
    "radiance-serum": {
      nom: "Radiance C Serum", actifs: "Vitamine C & E · Acide hyaluronique",
      ligne: "Éclat · Anti-taches · Protection · Peaux sensibles",
      besoins: ["eclat","anti-taches","sensibles"], prix: "34,90€", taille: "30 ml",
      // 📷 Radiance C Serum
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_000000000e1481f585b2ee37b40be0d3.png?v=1792225353",
      alt: "Radiance C Serum ELKHA.B, sérum éclat à la vitamine C pour peaux sensibles, 30 ml"
    },
    "lumibloom-niac-5": {
      nom: "Lumi-Bloom Niacinamide 5", actifs: "Vitamine B3 · Ginkgo biloba",
      ligne: "Pores & imperfections · Teint unifié · Peaux sensibles",
      besoins: ["pores","anti-taches","sensibles"], prix: "34,90€", taille: "50 ml",
      // 📷 Niacinamide 5
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000f6dc81f488084229cc8f2994.png?v=1792228227",
      alt: "Lumi-Bloom Niacinamide 5 ELKHA.B, soin pores et teint unifié à la niacinamide, 50 ml"
    },
    "radiance-eye-cream": {
      nom: "Radiance Eye Cream", actifs: "Acide hyaluronique · Ginkgo biloba · Beurre de karité",
      ligne: "Cernes · Poches · Ridules",
      besoins: ["regard"], prix: "28,90€", taille: "15 ml",
      // 📷 Radiance Eye Cream
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000a11082109a9d69ab565cdea5.png?v=1792225354",
      alt: "Radiance Eye Cream ELKHA.B, crème contour des yeux cernes et poches, 15 ml"
    },
    "luminescence-jour": {
      nom: "Luminescence Jour", actifs: "Acide hyaluronique multi-moléculaire · Bisabolol",
      ligne: "Hydratation · Éclat · Apaisement · Peaux sensibles",
      besoins: ["hydratation","eclat","apaisement","sensibles"], prix: "34,90€", taille: "50 ml",
      // 📷 Luminescence Jour
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000067a081f4b806353042f5d59c.png?v=1792224216",
      alt: "Luminescence Jour ELKHA.B, crème hydratante éclat à l'acide hyaluronique, 50 ml"
    },
    "radiance-protect": {
      nom: "Radiance Protect", actifs: "Jojoba · Filtres minéraux · SPF 50",
      ligne: "SPF 50 · Anti-taches · Peaux sensibles",
      besoins: ["solaire","anti-taches","sensibles"], prix: "26,90€", taille: "12 g",
      // 📷 Radiance Protect (version teintée)
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000067b4820898e2100a2336668b.png?v=1792227560",
      alt: "Radiance Protect ELKHA.B, stick solaire minéral SPF 50, 12 g"
    },
    "lumiveil-cc-cream": {
      nom: "Lumi-Veil CC Cream SPF30", actifs: "Céramides · Beurre de cacao",
      ligne: "Teint unifié · SPF 30 · Barrière cutanée · Apaisement · Peaux sensibles",
      besoins: ["anti-taches","solaire","apaisement","sensibles"], prix: "26,90€", taille: "12 g",
      // 📷 Lumi-Veil (les 4 teintes)
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_000000006504820e806a74d83392168f.png?v=1792228400",
      alt: "Lumi-Veil CC Cream SPF 30 ELKHA.B, stick teinté en 4 teintes"
    },
    "luminescence-nuit": {
      nom: "Luminescence Nuit", actifs: "Collagène · Plancton marin · Beurre de cacao",
      ligne: "Rides & fermeté · Hydratation intense · Peaux sensibles",
      besoins: ["fermete","hydratation","sensibles"], prix: "34,90€", taille: "50 ml",
      // 📷 Luminescence Nuit
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000c27082109ec53e33d47ac1b1.png?v=1792228225",
      alt: "Luminescence Nuit ELKHA.B, crème de nuit fermeté au collagène et plancton marin, 50 ml"
    },
    "rituel-luminescence": {
      nom: "Rituel Luminescence", actifs: "Le coffret Jour & Nuit · Hydratation & fermeté",
      ligne: "Hydratation intense · Fermeté · Éclat · Apaisement",
      besoins: ["hydratation","eclat","apaisement","fermete","sensibles"], prix: "67,90€", taille: "2 × 50 ml",
      // 📷 Rituel Luminescence
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/rituel-luminescence-carrousel-v2.png?v=1792224561",
      alt: "Rituel Luminescence ELKHA.B, coffret crème de jour et crème de nuit"
    },
    "bright-glow-patch": {
      nom: "Patchs éclaircissants & lissants", actifs: "Niacinamide · Acide hyaluronique",
      ligne: "Cernes · Ridules",
      besoins: ["regard"], prix: "28,90€", taille: "7 paires",
      // 📷 Patchs Lumi-Eyes niacinamide
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000018cc82108970f45b4b30dfff.png?v=1792225964",
      alt: "Patchs yeux Lumi-Eyes ELKHA.B à la niacinamide, cernes et ridules"
    },
    "bright-glow-decongestionnant": {
      nom: "Patchs éclat décongestionnants", actifs: "Caféine · Vitamine C",
      ligne: "Poches · Teint terne · Peaux sensibles",
      besoins: ["regard","sensibles"], prix: "28,90€", taille: "7 paires",
      // 📷 Patchs Lumi-Eyes caféine + vitamine C
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000426481f48f8efd886f65ba45.png?v=1792225964",
      alt: "Patchs yeux Lumi-Eyes ELKHA.B à la caféine et vitamine C, poches"
    },
    "bright-glow-anti-fatigue": {
      nom: "Patchs anti-fatigue réconfortants", actifs: "Antioxydants · Provitamine B5",
      ligne: "Fatigue · Sécheresse",
      besoins: ["regard"], prix: "28,90€", taille: "7 paires",
      // 📷 Patchs Lumi-Eyes antioxydants
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000027bc81f4ab57858a2c77cf29.png?v=1792225964",
      alt: "Patchs yeux Lumi-Eyes ELKHA.B anti-fatigue aux antioxydants"
    }
  };

  // Les 5 étapes (dans l'ordre de la routine)
  var ETAPES = [
    { num: "01", titre: "Préparer",  texte: "Une peau équilibrée reçoit mieux ses soins.", couleur: "#efe2d6", soins: ["gelee-lumibloom"] },
    { num: "02", titre: "Traiter",   texte: "Le soin ciblé : éclat, pores, regard.",        couleur: "#ddb3a5", soins: ["radiance-serum","lumibloom-niac-5","radiance-eye-cream"],
      // 📷 Grande photo d'ambiance après l'étape 02 (laisser "" pour ne rien afficher)
      ambiance: { photo: "", alt: "Lèvres et peau lumineuse, soins ELKHA.B Bloom", cadrage: "50% 40%" } },
    { num: "03", titre: "Hydrater",  texte: "L'hydratation au cœur de la routine.",       couleur: "#c48366", soins: ["luminescence-jour"] },
    { num: "04", titre: "Protéger",  texte: "Le geste du matin, chaque jour.",            couleur: "#e07048", soins: ["radiance-protect","lumiveil-cc-cream"],
      // 📷 Grande photo d'ambiance après l'étape 04 (laisser "" pour ne rien afficher)
      ambiance: { photo: "", alt: "Peau lumineuse et hydratée, rituel ELKHA.B Bloom", cadrage: "50% 30%" } },
    { num: "05", titre: "Régénérer", texte: "La nuit, la peau se répare.",                couleur: "#6b222a", soins: ["luminescence-nuit"] }
  ];

  // Le coffret, en grand, après l'étape 05
  var COFFRET = { surtitre: "LE COFFRET JOUR & NUIT", soin: "rituel-luminescence" };

  // Les soins ciblés (en plus de la routine)
  var CIBLES = {
    surtitre: "EN PLUS", titre: "Les soins ciblés", sousTitre: "Lumi-Eyes Bright & Glow",
    texte: "Une pause pour le regard, quand vous en avez envie.",
    soins: ["bright-glow-patch","bright-glow-decongestionnant","bright-glow-anti-fatigue"]
  };
  // ─────────────────────────── FIN DES RÉGLAGES ───────────────────────

  var root = document.getElementById('eb-soins');
  if(!root || root.getAttribute('data-ok')) return;
  root.setAttribute('data-ok', '1');

  var NOMS = {}; BESOINS.forEach(function(b){ NOMS[b.id] = b.nom; });
  var ENCRE = '#000', BORDEAUX = '#7d1f2b';

  var css = ''
  + "#eb-soins{font-family:'Montserrat',sans-serif;color:" + ENCRE + ";text-align:left;-webkit-tap-highlight-color:transparent;width:100%}"
  + "@media (max-width:899px){#eb-soins{width:100vw !important;max-width:100vw !important;margin-left:calc(50% - 50vw) !important}}"
  + "#eb-soins *{box-sizing:border-box}"
  + "#eb-soins a{color:inherit;text-decoration:none}"
  // Légende 01 → 05
  + ".ebs-leg{display:flex;gap:6px;max-width:520px;margin:0 auto}"
  + ".ebs-leg a{flex:1;height:30px;border-radius:15px;display:flex;align-items:center;justify-content:center;font-size:11.5px;font-weight:600;letter-spacing:.06em;transition:transform .25s ease}"
  + ".ebs-leg a:active{transform:scale(.94)}"
  + ".ebs-legt{display:flex;justify-content:space-between;max-width:520px;margin:7px auto 0;font-size:9.5px;font-weight:500;letter-spacing:.18em;opacity:.5}"
  // Barre des besoins (se colle sous le menu)
  + ".ebs-slot{margin-top:26px}"
  + ".ebs-bar{padding:10px 0 12px;background:transparent;transition:background .3s ease,box-shadow .3s ease}"
  + ".ebs-bar.fixe{position:fixed;left:0;right:0;z-index:900;background:rgba(246,244,240,.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 6px 18px rgba(0,0,0,.05)}"
  + ".ebs-ft{font-size:9.5px;font-weight:600;letter-spacing:.2em;opacity:.55;padding:0 18px 8px}"
  + ".ebs-bar.fixe .ebs-ft{display:none}"
  + ".ebs-chips{display:flex;gap:8px;overflow-x:auto;padding:0 18px;scrollbar-width:none;-webkit-overflow-scrolling:touch}"
  + ".ebs-chips::-webkit-scrollbar{display:none}"
  + ".ebs-chips button{flex:none;font-family:'Montserrat',sans-serif;font-size:12px;font-weight:400;letter-spacing:.02em;color:#000;background:#fff;border:1px solid rgba(0,0,0,.14);border-radius:18px;padding:8px 14px;cursor:pointer;transition:background .25s ease,color .25s ease,border-color .25s ease}"
  + ".ebs-chips button.on{background:#000;color:#f6f4f0;border-color:#000}"
  + ".ebs-compte{font-size:11px;font-weight:300;font-style:italic;opacity:.6;padding:8px 18px 0;min-height:22px}"
  // Parcours
  + ".ebs-path{position:relative;margin-top:6px}"
  + ".ebs-path:before{content:'';position:absolute;left:21px;top:34px;bottom:40px;width:2px;background:linear-gradient(#efe2d6,#ddb3a5,#c48366,#e07048,#6b222a);opacity:.6}"
  + ".ebs-etape{position:relative;padding-top:34px;scroll-margin-top:150px}"
  + ".ebs-band{display:flex;align-items:center;gap:14px;padding-left:15px}"
  + ".ebs-dot{display:block;width:14px;height:14px;border-radius:50%;flex:none;box-shadow:0 0 0 4px #f6f4f0;position:relative}"
  + ".ebs-band small{display:block;font-size:9.5px;font-weight:600;letter-spacing:.2em;opacity:.55}"
  + ".ebs-band h2{font-family:'Montserrat',sans-serif;font-size:17px;font-weight:600;letter-spacing:.04em;margin:2px 0 0;line-height:1.2;color:#000;text-transform:none}"
  + ".ebs-d{font-size:12.5px;font-weight:300;line-height:1.55;opacity:.75;margin:6px 0 14px 43px}"
  + ".ebs-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px 10px;margin:0 14px 0 43px}"
  + ".ebs-etape.eteinte .ebs-band,.ebs-etape.eteinte .ebs-d{opacity:.35}"
  // Vignette (style des vignettes actuelles)
  + ".ebs-card{display:block;transition:opacity .45s ease,filter .45s ease,transform .6s ease;opacity:0;transform:translateY(14px)}"
  + ".ebs-card.vu{opacity:1;transform:none}"
  + ".ebs-card.off{opacity:.2;filter:grayscale(.7)}"
  + ".ebs-ph{display:block;background:#f3f1ed;overflow:hidden}"
  + ".ebs-ph img{display:block;width:100%;height:auto}"   // photo entière : jamais zoomée, jamais rognée
  + ".ebs-tx{display:block;text-align:center;padding:12px 2px 0}"
  + ".ebs-tx h3{font-family:'Montserrat',sans-serif;font-size:12.5px;font-weight:400;letter-spacing:.18em;text-transform:uppercase;line-height:1.45;margin:0;color:#000}"
  + ".ebs-tx .a{display:block;font-size:10.5px;font-weight:400;letter-spacing:.05em;line-height:1.55;margin-top:6px;opacity:.85}"
  + ".ebs-tx .l{display:block;font-size:9.5px;font-weight:300;font-style:italic;line-height:1.5;margin-top:7px;opacity:.55}"
  + ".ebs-tx .p{display:block;font-size:9.5px;font-weight:400;margin-top:3px;opacity:.85}"
  // Vignette seule sur sa ligne (téléphone) : photo à gauche, texte à droite
  + ".ebs-card.seule{grid-column:1 / -1;display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:center}"
  + ".ebs-card.seule .ebs-tx{text-align:left;padding:0 4px}"
  // Grande photo d'ambiance : pleine largeur
  + ".ebs-amb{display:block;margin:40px 0 0;width:100%;overflow:hidden;position:relative;z-index:1}"
  + ".ebs-amb img{display:block;width:100%;height:auto}"
  // Pont Balance
  + ".ebs-pont{display:none;margin:30px 14px 0 43px;padding:14px 16px;border-left:3px solid #2c5a3c;background:#eef1ec;font-size:12.5px;font-weight:300;line-height:1.6}"
  + ".ebs-pont b{color:#2c5a3c;font-weight:600}"
  + ".ebs-pont a{display:inline-block;margin-top:6px;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#2c5a3c;border-bottom:1px solid #2c5a3c;padding-bottom:2px}"
  + ".ebs-pont.on{display:block;animation:ebsIn .5s ease}"
  + "@keyframes ebsIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}"
  // Le coffret
  + ".ebs-coffret{margin:44px 14px 0 43px}"
  + ".ebs-coffret .ebs-sur{display:block;text-align:left;font-size:9.5px;font-weight:600;letter-spacing:.22em;opacity:.55;margin-bottom:12px}"
  // Soins ciblés
  + ".ebs-cibles{position:relative;padding-top:52px}"
  + ".ebs-cibles .ebs-dot{background:#e8ddd0}"
  + ".ebs-sous{display:block;font-size:10.5px;font-weight:400;letter-spacing:.18em;text-transform:uppercase;margin:4px 0 0 43px;opacity:.8}"
  // Ordinateur
  + "@media (min-width:900px){"
  +   ".ebs-in{max-width:1080px;margin:0 auto}"
  +   ".ebs-chips{flex-wrap:wrap;justify-content:center;overflow:visible}"
  +   ".ebs-ft{text-align:center}"
  +   ".ebs-bar.fixe .ebs-chips{max-width:1080px;margin:0 auto}"
  +   ".ebs-compte{text-align:center}"
  // Ordinateur : titre de l'étape à gauche, soins à droite
  +   ".ebs-etape,.ebs-cibles{display:grid;grid-template-columns:300px 1fr;grid-template-rows:auto auto auto 1fr;column-gap:36px;align-items:start}"
  +   ".ebs-etape > *,.ebs-cibles > *{grid-column:1}"
  +   ".ebs-etape > .ebs-grid,.ebs-cibles > .ebs-grid{grid-column:2;grid-row:1 / span 4;margin:0 18px 0 0}"
  +   ".ebs-grid{grid-template-columns:repeat(3,1fr);gap:28px 18px}"
  +   ".ebs-grid .ebs-card.seule{grid-column:auto;display:block}"
  +   ".ebs-grid .ebs-card.seule .ebs-tx{text-align:center;padding:12px 2px 0}"
  +   ".ebs-coffret,.ebs-pont{margin-left:379px;margin-right:18px}"
  +   ".ebs-coffret .ebs-card.seule{grid-template-columns:calc((100% - 36px) / 3) 1fr;gap:24px}"
  +   ".ebs-amb{margin-top:56px}"
    +   ".ebs-amb img{height:520px;object-fit:cover}"
  +   ".ebs-tx h3{font-size:13px}"
  + "}";
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  // Photo Shopify à la bonne taille (plus léger), toujours entière
  function src(u, w){ if(!u) return ''; if(u.indexOf('cdn.shopify.com') < 0) return u; return u + (u.indexOf('?') < 0 ? '?' : '&') + 'width=' + w; }
  function prix(id){ var p = window.EB_PRODUITS && window.EB_PRODUITS[id]; return (p && p.prix) || SOINS[id].prix; }

  function vignette(id, seule){
    var s = SOINS[id]; if(!s) return '';
    return '<a class="ebs-card' + (seule ? ' seule' : '') + '" href="' + esc(REGLAGES.lienFiche + id) + '" data-fiche="' + esc(id) + '" data-b="' + esc(s.besoins.join(' ')) + '">'
      + '<div class="ebs-ph"><img src="' + esc(src(s.photo, 700)) + '" srcset="' + esc(src(s.photo, 450)) + ' 450w, ' + esc(src(s.photo, 700)) + ' 700w, ' + esc(src(s.photo, 1000)) + ' 1000w" sizes="(min-width:900px) 260px, 50vw" alt="' + esc(s.alt) + '" loading="lazy" decoding="async"></div>'
      + '<div class="ebs-tx"><h3>' + esc(s.nom) + '</h3><span class="a">' + esc(s.actifs) + '</span><span class="l">' + esc(s.ligne) + '</span><span class="p" data-prix="' + esc(id) + '">' + esc(prix(id)) + ' – ' + esc(s.taille) + '</span></div>'
      + '</a>';
  }
  function grille(ids){
    var impair = ids.length % 2 === 1;
    return '<div class="ebs-grid">' + ids.map(function(id, i){ return vignette(id, impair && i === ids.length - 1); }).join('') + '</div>';
  }

  var h = '<div class="ebs-in">';
  h += '<div class="ebs-leg" style="padding:0 18px">' + ETAPES.map(function(e, i){
    return '<a href="#ebs-' + e.num + '" style="background:' + e.couleur + ';color:' + (i < 2 ? '#3a1a12' : '#f6ece2') + '" aria-label="Étape ' + e.num + ' : ' + esc(e.titre) + '">' + e.num + '</a>';
  }).join('') + '</div><div class="ebs-legt" style="padding:0 18px"><span>PREMIER GESTE</span><span>DERNIER GESTE</span></div>';
  h += '</div>';
  h += '<div class="ebs-slot"><div class="ebs-bar"><div class="ebs-in"><div class="ebs-ft">VOTRE BESOIN</div><div class="ebs-chips" role="group" aria-label="Filtrer les soins par besoin">'
    + '<button type="button" class="on" data-id="">Tout voir</button>'
    + BESOINS.map(function(b){ return '<button type="button" data-id="' + b.id + '">' + esc(b.nom) + '</button>'; }).join('')
    + '</div><div class="ebs-compte" aria-live="polite"></div></div></div></div>';
  h += '<div class="ebs-in"><div class="ebs-path">';
  ETAPES.forEach(function(e){
    h += '<section class="ebs-etape" id="ebs-' + e.num + '"><div class="ebs-band"><i class="ebs-dot" style="background:' + e.couleur + '"></i><div><small>ÉTAPE ' + e.num + '</small><h2>' + esc(e.titre) + '</h2></div></div>'
      + '<p class="ebs-d">' + esc(e.texte) + '</p>' + grille(e.soins) + '</section>';
    if(e.ambiance && e.ambiance.photo){
      h += '<figure class="ebs-amb" style="margin-top:40px"><img src="' + esc(src(e.ambiance.photo, 1200)) + '" alt="' + esc(e.ambiance.alt) + '" loading="lazy" decoding="async" style="object-position:' + esc(e.ambiance.cadrage || '50% 50%') + '"></figure>';
    }
  });
  if(REGLAGES.pontBalance) h += '<div class="ebs-pont" aria-live="polite"></div>';
  if(SOINS[COFFRET.soin]) h += '<div class="ebs-coffret"><span class="ebs-sur">' + esc(COFFRET.surtitre) + '</span>' + vignette(COFFRET.soin, true) + '</div>';
  h += '<section class="ebs-cibles" id="ebs-cibles"><div class="ebs-band"><i class="ebs-dot"></i><div><small>' + esc(CIBLES.surtitre) + '</small><h2>' + esc(CIBLES.titre) + '</h2></div></div>'
    + '<span class="ebs-sous">' + esc(CIBLES.sousTitre) + '</span><p class="ebs-d">' + esc(CIBLES.texte) + '</p>' + grille(CIBLES.soins) + '</section>';
  h += '</div></div>';
  root.innerHTML = h;

  // ── Apparition douce des vignettes ──
  var cards = root.querySelectorAll('.ebs-card');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(en){ en.forEach(function(x){ if(x.isIntersecting){ x.target.classList.add('vu'); io.unobserve(x.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    cards.forEach(function(c){ io.observe(c); });
  } else cards.forEach(function(c){ c.classList.add('vu'); });

  // ── Filtres ──
  var pont = root.querySelector('.ebs-pont'), compte = root.querySelector('.ebs-compte');
  function filtrer(id, defiler){
    root.querySelectorAll('.ebs-chips button').forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-id') === id); });
    var n = 0, premiere = null;
    cards.forEach(function(c){
      var ok = !id || (' ' + c.getAttribute('data-b') + ' ').indexOf(' ' + id + ' ') >= 0;
      c.classList.toggle('off', !ok);
      if(ok && id){ n++; if(!premiere) premiere = c; }
    });
    root.querySelectorAll('.ebs-etape').forEach(function(s){ s.classList.toggle('eteinte', !!id && !s.querySelector('.ebs-card:not(.off)')); });
    compte.textContent = id ? (n + (n > 1 ? ' soins' : ' soin') + ' pour « ' + NOMS[id] + ' »') : '';
    if(pont){
      if(id && PONT[id]){ pont.innerHTML = PONT[id] + '<br><a href="' + esc(REGLAGES.lienBalance) + '">Découvrir Balance</a>'; pont.classList.add('on'); }
      else pont.classList.remove('on');
    }
    if(defiler && premiere){
      var r = premiere.getBoundingClientRect(), haut = REGLAGES.espaceMenu + 110;
      if(r.top < haut || r.top > window.innerHeight * .7) window.scrollTo({ top: window.scrollY + r.top - haut - 10, behavior: 'smooth' });
    }
  }
  root.querySelector('.ebs-chips').addEventListener('click', function(e){
    var b = e.target.closest('button'); if(!b) return;
    var id = b.getAttribute('data-id');
    if(b.classList.contains('on') && id) id = '';
    filtrer(id, true);
    b.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  });
  // Lien direct : ?besoin=eclat
  try { var pre = new URLSearchParams(location.search).get('besoin'); if(pre && NOMS[pre]){ filtrer(pre, false); var ch = root.querySelector('.ebs-chips'), on = ch.querySelector('button.on'); ch.scrollLeft = on.offsetLeft - ch.offsetLeft - 18; } } catch(err){}

  // ── Légende 01 → 05 : défile jusqu'à l'étape ──
  root.querySelectorAll('.ebs-leg a').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      var cible = document.querySelector(a.getAttribute('href'));
      if(cible) window.scrollTo({ top: window.scrollY + cible.getBoundingClientRect().top - REGLAGES.espaceMenu - 90, behavior: 'smooth' });
    });
  });

  // ── Barre des besoins collée sous le menu pendant le défilement ──
  var slot = root.querySelector('.ebs-slot'), bar = root.querySelector('.ebs-bar'), fin = root.querySelector('.ebs-cibles');
  function coller(){
    var r = slot.getBoundingClientRect(), f = fin.getBoundingClientRect();
    var on = r.top < REGLAGES.espaceMenu && f.bottom > REGLAGES.espaceMenu + 160;
    if(on && !bar.classList.contains('fixe')){ slot.style.height = bar.offsetHeight + 'px'; bar.style.top = REGLAGES.espaceMenu + 'px'; bar.classList.add('fixe'); }
    else if(!on && bar.classList.contains('fixe')){ bar.classList.remove('fixe'); bar.style.top = ''; slot.style.height = ''; }
  }
  window.addEventListener('scroll', coller, { passive: true });
  window.addEventListener('resize', coller);
  coller();

  // ── Prix : repris de produits-data.js s'il arrive après ──
  window.addEventListener('load', function(){
    root.querySelectorAll('[data-prix]').forEach(function(p){ var id = p.getAttribute('data-prix'); p.textContent = prix(id) + ' – ' + SOINS[id].taille; });
  });
})();
