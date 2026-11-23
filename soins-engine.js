// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
// =====================================================================
// ELKHA.B — Les soins Bloom, rangés par étape de routine (v3.1 : vignettes à liseré blanc et ombre légère, comme Balance et les routines ; coffret Jour & Nuit centré dans une vignette invisible sur la bande : sans filtre, bouton « Ajouter », teintes, notes)
// Un seul embed Carrd :  <div id="eb-soins"><div class="ebs-intro"><p>Ton texte…</p></div></div>
//                        <script src="https://elkhabskincare.github.io/elkhab-site/soins-engine.js"></script>
//
// MODE D'EMPLOI
// - Pour modifier un texte : changer uniquement ce qui est entre guillemets "…".
// - Pour changer une photo : chercher (Ctrl + F) le repère 📷 puis remplacer le nom du fichier.
// - Ne pas supprimer les guillemets, les virgules ni les accolades { } [ ].
// - Les prix et les numéros de panier viennent de produits-data-test.js (chargé sur la page) ;
//   le prix écrit ici ne sert que de secours.
// =====================================================================
(function(){

  // ───────────────────────────── RÉGLAGES ─────────────────────────────
  var REGLAGES = {
    // Hauteur du menu fixe du site
    espaceMenu: 64,
    // Lien des fiches (les fiches s'ouvrent en panneau)
    lienFiche: "?fiche=",
    // Couleur exacte du fond du site
    fondSite: "#f5f4f0",
    // Fond des photos des soins et de la bande du coffret
    fondCarte: "#ece5db",
    // Titre du texte de présentation (le texte lui-même s'écrit dans l'embed Carrd)
    titreTexte: "La collection Bloom",
    // ⭐ Notes : couleur de l'étoile (brun du Lumi-Veil B4) et nombre d'avis minimum pour afficher la note
    couleurEtoile: "#4a2a1a",
    avisMinimum: 3
  };

  // Photos préparées à l'avance, déposées dans elkhab-site (GitHub)
  var PHOTOS = "https://elkhabskincare.github.io/elkhab-site/";

  // Les soins
  //   actifs = ligne des actifs ; actifsCourt = version téléphone (2 lignes maximum), si la ligne est longue
  //   benefice = la phrase sous les actifs ; prix et taille sous la phrase
  //   teintes = petites cases de texture sur la photo (la teinte choisie part au panier)
  //   conseil = texte placé à côté du soin (sur ordinateur) ou en dessous (sur téléphone)
  var SOINS = {
    "milky-bloom": {
      nom: "Milky Bloom", actifs: "Camomille · Argousier",
      benefice: "Démaquille et nettoie sans tiraillement, préserve la barrière cutanée", prix: "29,90€", taille: "150 ml",
      // 📷 Milky Bloom
      photo: PHOTOS + "bloom-sable-milky-bloom.png",
      alt: "Milky Bloom ELKHA.B, nettoyant huile-en-lait démaquillant pour peaux sensibles et sèches, flacon pompe 150 ml"
    },
    "radiance-cleanser": {
      nom: "Radiance Cleanser", actifs: "Aloe vera · Extrait de mûre",
      benefice: "Nettoie en profondeur et ravive l'éclat, sans dessécher", prix: "24,90€", taille: "145 ml",
      // 📷 Radiance Cleanser
      photo: PHOTOS + "bloom-sable-radiance-cleanser.png",
      alt: "Radiance Cleanser ELKHA.B, gel nettoyant éclat pour peaux mixtes à grasses, flacon pompe 145 ml"
    },
    "lumi-pure": {
      nom: "Lumi-Pure", actifs: "Argiles · Charbon végétal",
      benefice: "Désincruste les pores et matifie, sans agresser la peau", prix: "29,90€", taille: "90 ml",
      // 📷 Lumi-Pure
      photo: PHOTOS + "bloom-sable-lumi-pure.png",
      alt: "Lumi-Pure ELKHA.B, masque purifiant séborégulateur aux argiles et au charbon végétal pour peaux mixtes à grasses, pot 90 ml"
    },
    "gelee-lumibloom": {
      nom: "Gelée Lumi-Bloom", actifs: "Prébiotique · Acide hyaluronique · Sodium PCA", actifsCourt: "Prébiotique · Acide hyaluronique",
      benefice: "Hydrate, rééquilibre et préserve le microbiome de la peau", prix: "28,90€", taille: "30 ml",
      // 📷 Gelée Lumi-Bloom
      photo: PHOTOS + "bloom-sable-gelee-lumibloom.png",
      alt: "Gelée Lumi-Bloom ELKHA.B, gel aux prébiotiques et à l'acide hyaluronique, flacon pipette 30 ml",
      conseil: {
        titre: "L'éclat de la peau commence par son équilibre",
        textes: [
          "À la surface de notre peau vit un écosystème précieux : le microbiome. En harmonie avec la barrière cutanée, il contribue à préserver l'hydratation, le confort et les défenses naturelles de la peau.",
          "Enrichie en prébiotiques bioactifs, la Gelée Lumi‑Bloom a été pensée pour soutenir cet équilibre délicat, renforcer la barrière cutanée et aider la peau à retrouver tout son éclat naturel."
        ],
        // 🎬 petite vidéo de texture sous le texte (laisser "" pour ne rien afficher)
        video: "bloom-gelee-texture"
      }
    },
    "radiance-serum": {
      nom: "Radiance C Serum", actifs: "Vitamine C & E · Acide hyaluronique",
      benefice: "Antioxydant, ravive l'éclat et unifie le teint", prix: "34,90€", taille: "30 ml",
      // 📷 Radiance C Serum
      photo: PHOTOS + "bloom-sable-radiance-serum.png",
      alt: "Radiance C Serum ELKHA.B, sérum éclat à la vitamine C pour peaux sensibles, 30 ml"
    },
    "lumibloom-niac-5": {
      nom: "Lumi-Bloom Niacinamide 5", actifs: "Vitamine B3 · Ginkgo biloba",
      benefice: "Matifie, rééquilibre et unifie le teint", prix: "34,90€", taille: "50 ml",
      // 📷 Lumi-Bloom Niacinamide 5
      photo: PHOTOS + "bloom-sable-lumibloom-niac-5.png",
      alt: "Lumi-Bloom Niacinamide 5 ELKHA.B, soin pores et teint unifié à la niacinamide, 50 ml"
    },
    "lumibloom-arbutin": {
      nom: "Lumi-Bloom Arbutin", actifs: "Alpha-arbutine · Bidens pilosa · Vitamine C", actifsCourt: "Alpha-arbutine · Bidens pilosa",
      benefice: "Atténue les taches, unifie le teint et hydrate", prix: "29,90€", taille: "30 ml",
      // 📷 Lumi-Bloom Arbutin
      photo: PHOTOS + "bloom-sable-lumibloom-arbutin.png",
      alt: "Lumi-Bloom Arbutin ELKHA.B, sérum anti-taches à l'alpha-arbutine, flacon verre 30 ml"
    },
    "radiance-eye-cream": {
      nom: "Radiance Eye Cream", actifs: "Acide hyaluronique · Ginkgo biloba · Beurre de karité", actifsCourt: "Acide hyaluronique · Ginkgo biloba",
      benefice: "Atténue cernes et poches, lisse les ridules", prix: "28,90€", taille: "15 ml",
      // 📷 Radiance Eye Cream
      photo: PHOTOS + "bloom-sable-radiance-eye-cream.png",
      alt: "Radiance Eye Cream ELKHA.B, crème contour des yeux cernes et poches, 15 ml",
      conseil: {
        titre: "Tout l'éclat du regard, dans un seul soin",
        textes: [
          "La finesse du contour des yeux mérite une attention particulière. Radiance Eye Cream associe des extraits végétaux ciblés, reconnus pour leur action sur la microcirculation, à l'acide hyaluronique pour aider à estomper cernes et poches tout en lissant les ridules.",
          "Et son petit plus ? Une texture légère, sans fini gras, qui se fond sous le maquillage et aide l'anticernes à rester en place, sans filer dans les plis."
        ],
        video: "",
        // 📷 photo posée à côté du texte (quand il n'y a pas de vidéo)
        image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Texture_creme.png?v=1791055980"
      }
    },
    "luminescence-jour": {
      nom: "Luminescence Jour", actifs: "Acide hyaluronique multi-moléculaire · Bisabolol", actifsCourt: "Acide hyaluronique · Bisabolol",
      benefice: "Hydrate en profondeur, repulpe et apaise la peau", prix: "34,90€", taille: "50 ml",
      // 📷 Luminescence Jour
      photo: PHOTOS + "bloom-sable-luminescence-jour.png", photoLarge: PHOTOS + "bloom-sable-luminescence-jour-large.png",
      alt: "Luminescence Jour ELKHA.B, crème hydratante éclat à l'acide hyaluronique, 50 ml"
    },
    "radiance-protect": {
      nom: "Radiance Protect", actifs: "Jojoba · Filtres minéraux · SPF 50", actifsCourt: "Filtres minéraux · SPF 50",
      benefice: "Hydrate sans effet gras, protège des UV, stick minéral", prix: "26,90€", taille: "12 g",
      // 📷 Radiance Protect (photo de la teinte affichée en premier)
      photo: PHOTOS + "bloom-sable-radiance-protect-teinte.png",
      alt: "Radiance Protect ELKHA.B, stick solaire minéral SPF 50, 12 g",
      // « variante » = nom exact de la variante dans produits-data-test.js
      teintes: [
        { nom: "Teinté",      variante: "TEINTÉ",      texture: PHOTOS + "bloom-texture-radiance-protect-teinte.png",      photo: PHOTOS + "bloom-sable-radiance-protect-teinte.png", photoTel: PHOTOS + "bloom-sable-radiance-protect-teinte-tel.png" },
        { nom: "Sans teinte", variante: "SANS TEINTE", texture: PHOTOS + "bloom-texture-radiance-protect-sans-teinte.png", photo: PHOTOS + "bloom-sable-radiance-protect-sans-teinte.png", photoTel: PHOTOS + "bloom-sable-radiance-protect-sans-teinte-tel.png" }
      ],
      teinteDepart: 0
    },
    "lumiveil-cc-cream": {
      nom: "Lumi-Veil CC Cream SPF30", actifs: "Céramides · Beurre de cacao",
      benefice: "Unifie le teint, protège et hydrate intensément", prix: "26,90€", taille: "12 g",
      // 📷 Lumi-Veil CC Cream (photo de la teinte affichée en premier)
      photo: PHOTOS + "bloom-sable-lumiveil-b2-moyen.png",
      alt: "Lumi-Veil CC Cream SPF 30 ELKHA.B, stick teinté en 4 teintes",
      teintes: [
        { nom: "B1 Clair",  variante: "N°B1 CLAIR",  texture: PHOTOS + "bloom-texture-lumiveil-b1.png", photo: PHOTOS + "bloom-sable-lumiveil-b1-clair.png", photoTel: PHOTOS + "bloom-sable-lumiveil-b1-clair-tel.png" },
        { nom: "B2 Moyen",  variante: "N°B2 MOYEN",  texture: PHOTOS + "bloom-texture-lumiveil-b2.png", photo: PHOTOS + "bloom-sable-lumiveil-b2-moyen.png", photoTel: PHOTOS + "bloom-sable-lumiveil-b2-moyen-tel.png" },
        { nom: "B3 Hâlé",   variante: "N°B3 HÂLÉ",   texture: PHOTOS + "bloom-texture-lumiveil-b3.png", photo: PHOTOS + "bloom-sable-lumiveil-b3-hale.png", photoTel: PHOTOS + "bloom-sable-lumiveil-b3-hale-tel.png" },
        { nom: "B4 Foncé",  variante: "N°B4 FONCÉ",  texture: PHOTOS + "bloom-texture-lumiveil-b4.png", photo: PHOTOS + "bloom-sable-lumiveil-b4-fonce.png", photoTel: PHOTOS + "bloom-sable-lumiveil-b4-fonce-tel.png" }
      ],
      teinteDepart: 1
    },
    "luminescence-boost": {
      nom: "Luminescence Boost", actifs: "Cresson · Sureau · Acide hyaluronique", actifsCourt: "Cresson · Sureau",
      benefice: "Raffermit et lisse, tout en soutenant le collagène", prix: "31,90€", taille: "30 ml",
      // 📷 Luminescence Boost
      photo: PHOTOS + "bloom-sable-luminescence-boost.png",
      alt: "Luminescence Boost ELKHA.B, sérum booster de fermeté, 30 ml"
    },
    "luminescence-nuit": {
      nom: "Luminescence Nuit", actifs: "Plancton marin · Soutien du collagène · Beurre de cacao", actifsCourt: "Plancton marin · Beurre de cacao",
      benefice: "Nourrit, régénère et stimule le collagène", prix: "34,90€", taille: "50 ml",
      // 📷 Luminescence Nuit
      photo: PHOTOS + "bloom-sable-luminescence-nuit.png",
      alt: "Luminescence Nuit ELKHA.B, crème de nuit fermeté au plancton marin, soutien du collagène, 50 ml"
    },
    "rituel-luminescence": {
      nom: "Rituel Luminescence", actifs: "Le duo Jour & Nuit · Hydratation & fermeté", actifsCourt: "Le duo Jour & Nuit",
      benefice: "Le rituel complet : hydratation intense, régénération et apaisement", prix: "67,90€", taille: "2 × 50 ml",
      // 📷 Rituel Luminescence
      photo: PHOTOS + "bloom-sable-rituel-luminescence-centre.png",
      alt: "Rituel Luminescence ELKHA.B, coffret crème de jour et crème de nuit"
    },
    "bright-glow-patch": {
      nom: "Patchs éclaircissants & lissants", actifs: "Niacinamide · Acide hyaluronique",
      benefice: "Éclaircissent et lissent le contour des yeux", prix: "28,90€", taille: "7 paires",
      // 📷 Patchs Lumi-Eyes niacinamide
      photo: PHOTOS + "bloom-sable-bright-glow-patch.png",
      // 📷 le patch lui-même, posé en bas à droite de la vignette
      detail: PHOTOS + "bloom-patch-niacinamide.png",
      alt: "Patchs yeux Lumi-Eyes ELKHA.B à la niacinamide, cernes et ridules"
    },
    "bright-glow-decongestionnant": {
      nom: "Patchs éclat décongestionnants", actifs: "Caféine · Vitamine C",
      benefice: "Décongestionnent et réveillent le regard", prix: "28,90€", taille: "7 paires",
      // 📷 Patchs Lumi-Eyes caféine + vitamine C
      photo: PHOTOS + "bloom-sable-bright-glow-decongestionnant.png",
      detail: PHOTOS + "bloom-patch-cafeine-vitamine-c.png",
      alt: "Patchs yeux Lumi-Eyes ELKHA.B à la caféine et vitamine C, poches"
    },
    "bright-glow-anti-fatigue": {
      nom: "Patchs anti-fatigue réconfortants", actifs: "Antioxydants · Provitamine B5",
      benefice: "Réconfortent le regard fatigué", prix: "28,90€", taille: "7 paires",
      // 📷 Patchs Lumi-Eyes antioxydants
      photo: PHOTOS + "bloom-sable-bright-glow-anti-fatigue.png", photoLarge: PHOTOS + "bloom-sable-bright-glow-anti-fatigue-large.png",
      detail: PHOTOS + "bloom-patch-antioxydants-b5.png",
      alt: "Patchs yeux Lumi-Eyes ELKHA.B anti-fatigue aux antioxydants"
    }
  };

  // Les 5 étapes (dans l'ordre de la routine)
  var ETAPES = [
    { num: "01", titre: "Préparer",  texte: "Une peau nette et équilibrée reçoit mieux ses soins.", couleur: "#e6cdbb", soins: ["milky-bloom","radiance-cleanser","lumi-pure","gelee-lumibloom"] },
    { num: "02", titre: "Traiter",   texte: "Le soin ciblé : éclat, pores, taches, regard.",        couleur: "#d9a796", soins: ["radiance-serum","lumibloom-niac-5","lumibloom-arbutin","radiance-eye-cream"] },
    { num: "03", titre: "Hydrater",  texte: "L'hydratation au cœur de la routine.",                 couleur: "#c27a5c", soins: ["luminescence-jour"],
      // 🎬 Vidéo à côté de Luminescence Jour (laisser video: "" pour ne rien afficher)
      //    cadrageTelephone = partie de la vidéo gardée sur téléphone (format plus bas)
      ambiance: { video: "https://cdn.shopify.com/videos/c/o/v/10cbd7af9222428db48ede51b66e58c9.mp4", alt: "Rituel ELKHA.B Bloom, peau lumineuse et hydratée", cadrageTelephone: "50% 38%" } },
    { num: "04", titre: "Protéger",  texte: "Le geste du matin, chaque jour.",                      couleur: "#e0663c", soins: ["radiance-protect","lumiveil-cc-cream"] },
    { num: "05", titre: "Régénérer", texte: "La nuit, la peau se répare.",                          couleur: "#7d1f2b", soins: ["luminescence-boost","luminescence-nuit"] }
  ];

  // Le coffret, en grand, après l'étape 05
  var COFFRET = { surtitre: "Le duo Jour & Nuit", texte: "Luminescence Jour et Luminescence Nuit, réunis pour un rituel complet du matin au soir.", soin: "rituel-luminescence" };

  // Les patchs (en plus de la routine)
  var CIBLES = {
    titre: "Les patchs", sousTitre: "Lumi-Eyes Bright & Glow",
    texte: "Une pause pour le regard, quand vous en avez envie.",
    soins: ["bright-glow-patch","bright-glow-decongestionnant","bright-glow-anti-fatigue"]
  };
  // ─────────────────────────── FIN DES RÉGLAGES ───────────────────────

  // Panier et avis : identifiants PUBLICS (prévus pour être dans une page, comme dans reviews-engine.js)
  var BOUTIQUE = 'fyjy1d-t8.myshopify.com';
  var STOREFRONT = 'https://' + BOUTIQUE + '/api/2026-07/graphql.json';
  var STOREFRONT_TOKEN = 'd7b9bf173e3b947dc2bb10f375e14185';
  var JUDGEME_BADGE = 'https://judge.me/api/v1/widgets/preview_badge';
  var JUDGEME_TOKEN = '-VkYlsX3rxyFcQpINRq-Lm_31J4';

  // Un même embed peut être collé deux fois (version téléphone + version ordinateur de Carrd) :
  // chaque bloc est construit séparément
  function lancer(){
    document.querySelectorAll('[id="eb-soins"], .eb-soins').forEach(function(el){
      if(el.getAttribute('data-ok')) return;
      el.setAttribute('data-ok', '1');
      construire(el);
    });
  }
  function visibleBloc(el){ return el.getClientRects().length > 0; }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function produit(id){ return (window.EB_PRODUITS && window.EB_PRODUITS[id]) || null; }
  function prix(id){ var p = produit(id); return (p && p.prix) || SOINS[id].prix; }
  function prixHTML(id){ return '<b>' + esc(prix(id)).replace('€', ' €') + '</b><small>' + esc(SOINS[id].taille) + '</small>'; }

  // ─────────────────────────────── STYLE ───────────────────────────────
  var LIGNE = 'rgba(0,0,0,.14)';
  var css = ''
  + "#eb-soins{font-family:'Montserrat',sans-serif;color:#000;text-align:left;-webkit-tap-highlight-color:transparent;width:100%}"
  + "#eb-soins *{box-sizing:border-box}"
  + "#eb-soins a{color:inherit;text-decoration:none}"
  + "@keyframes ebsIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}"

  // Vitrine
  + ".ebs-flow{display:flex;flex-wrap:wrap;justify-content:center;margin-top:58px}"
  + ".ebs-grp{width:100%;display:flex;flex-wrap:wrap;justify-content:center;padding-bottom:10px}"

  // Titres d'étape
  + ".ebs-h{display:block;width:100%;padding:0 18px;margin:10px 0 22px}"
  + ".ebs-h div{display:flex;align-items:center;justify-content:center;gap:12px;border-top:1px solid " + LIGNE + ";padding-top:26px}"
  + ".ebs-sq{display:block;width:12px;height:12px;flex:none}"
  + "#eb-soins .ebs-h h2{font-family:'Montserrat',sans-serif;font-size:14px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;margin:0;color:#000}"
  + ".ebs-h p{text-align:center;font-size:13.5px;font-weight:400;line-height:1.5;opacity:.85;margin:8px 0 0}"

  // Vignette d'un soin
  + ".ebs-card{position:relative;display:flex;flex-direction:column;width:50%;padding:0 0 34px}"
  // prix et bouton calés en bas : tous les boutons d'une rangée sont au même niveau
  + ".ebs-tx{flex:1;display:flex;flex-direction:column}.ebs-tx .p{margin-top:auto !important;padding-top:12px}"
  + ".ebs-ph{display:block;position:relative;aspect-ratio:4 / 7;overflow:hidden;border-radius:12px;background:" + REGLAGES.fondCarte + ";border:1px solid #fff;box-shadow:0 6px 18px rgba(40,25,20,.10)}"
  + ".ebs-ph img{display:block;position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 78%}"
  + ".ebs-num{position:absolute;z-index:2;top:14px;left:12px;display:flex;align-items:center;gap:6px;font-size:9px;font-weight:500;letter-spacing:.12em;opacity:.88}"
  + ".ebs-num i{display:block;width:8px;height:8px}"
  // note : posée sur le fond de la photo, en bas à gauche
  + ".ebs-note{position:absolute;left:16px;bottom:14px;z-index:2;display:flex;align-items:center;gap:5px;font-size:12px;font-weight:500;letter-spacing:.06em;color:#000}"
  + ".ebs-note i{font-style:normal;font-size:15px;line-height:1;color:" + REGLAGES.couleurEtoile + "}"
  // patchs : le patch posé directement sur le fond, en bas à droite de la vignette
  + ".ebs-ph img.ebs-detail{position:absolute;inset:auto;right:6%;bottom:5%;width:30%;height:auto;object-fit:contain;transform:rotate(-8deg);z-index:2;filter:drop-shadow(0 3px 5px rgba(80,50,30,.12))}"
  // teintes : cases de texture à droite de la photo
  + ".ebs-tt{position:absolute;right:14px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;align-items:center;gap:10px;z-index:2}"
  + ".ebs-t{display:block;width:42px;height:42px;border-radius:10px;background-size:cover;background-position:center;cursor:pointer;box-shadow:0 0 0 1px rgba(0,0,0,.08)}"
  + ".ebs-t.on{box-shadow:0 0 0 1.5px " + REGLAGES.fondCarte + ",0 0 0 2.6px #000}"
  + ".ebs-tt em{font-style:normal;font-size:10px;letter-spacing:.08em;white-space:nowrap;margin-top:2px;color:#3a2a24;width:0;display:flex;justify-content:center}"   // le nom ne pousse plus les cases
  + ".ebs-ph img.ebs-ti{opacity:0;transition:opacity .25s ease}.ebs-ph img.ebs-ti.on{opacity:1}"
  // textes
  + ".ebs-tx{text-align:center;padding:14px 8px 0}"
  + "#eb-soins .ebs-tx h3{font-family:'Montserrat',sans-serif;font-size:15px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;line-height:1.45;margin:0;color:#000;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}"
  + ".ebs-tx .a{display:block;font-size:10.5px;font-weight:400;letter-spacing:.16em;text-transform:uppercase;line-height:1.55;margin-top:9px;color:#8a6a55}"
  + ".ebs-tx .am{display:none}"
  + ".ebs-tx .l{display:block;font-size:13.5px;font-weight:400;line-height:1.55;margin-top:9px;color:#3a2a24;text-wrap:balance}"
  + ".ebs-tx .p{display:flex;align-items:baseline;justify-content:center;gap:9px;margin-top:12px}"
  + ".ebs-tx .p b{font-size:16.5px;font-weight:600;letter-spacing:.03em;color:#000}"
  + ".ebs-tx .p small{font-size:12px;letter-spacing:.08em;color:rgba(0,0,0,.5)}"
  + ".ebs-ajouter{display:block;margin:14px auto 0;width:72%;max-width:240px;background:#000;color:" + REGLAGES.fondSite + ";padding:13px 0;font-size:11px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;text-align:center;cursor:pointer;transition:background .25s ease}"
  + ".ebs-ajouter:hover,.ebs-ajouter.ok{background:#3a2a24}"

  // Texte de respiration placé sous la rangée de son étape (texte + vidéo ou photo à côté sur ordinateur, en dessous sur téléphone)
  + ".ebs-conseil{width:38%;max-width:420px;text-align:left}"
  + "#eb-soins .ebs-conseil h3{font-family:'Montserrat',sans-serif;font-size:19px;font-weight:500;letter-spacing:.04em;line-height:1.35;margin:0 0 16px;color:#000}"
  + ".ebs-conseil h3:after{content:'';display:block;width:46px;height:1px;background:rgba(0,0,0,.3);margin-top:14px}"
  + ".ebs-conseil p{font-size:14px;line-height:1.75;color:#3a2a24;margin:0 0 12px}"
  + ".ebs-vid{display:block;width:100%;aspect-ratio:2 / 1;object-fit:cover;margin-top:10px;background:" + REGLAGES.fondCarte + "}"

  // Vidéo d'ambiance
  + ".ebs-amb{width:100%;margin:6px 0 40px;overflow:hidden;order:2}.ebs-bande{width:100%}"
  + ".ebs-amb video{display:block;width:100%;height:auto}"

  // Coffret
  + ".ebs-cof{width:100%;display:flex;flex-direction:column;align-items:center;background:" + REGLAGES.fondCarte + ";padding:46px 18px 40px;margin:10px 0 0}"
  + "#eb-soins .ebs-coft{font-family:'Montserrat',sans-serif;font-size:19px;font-weight:800;letter-spacing:.02em;text-transform:uppercase;color:#000;text-align:center;margin:0 0 12px;line-height:1.2}"
  + ".ebs-cof p.ebs-cofp{font-size:12.5px;font-weight:400;line-height:1.6;opacity:.88;text-align:center;margin:0 0 18px;max-width:420px}"
  + "#eb-soins .ebs-cof .ebs-card{width:100%;max-width:600px;display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:center;padding:0}"
  + ".ebs-cof .ebs-tx{text-align:left;padding:0 4px}"
  // la photo du coffret est une scène sur le même fond sable que la bande : montrée en entier, ombre comprise, sans cadre
  + "#eb-soins .ebs-cof .ebs-ph{aspect-ratio:auto;height:auto;margin:0;border-radius:12px;background:" + REGLAGES.fondCarte + ";overflow:hidden;border:0;box-shadow:none}"
  + "#eb-soins .ebs-cof .ebs-ph img{position:static;height:auto;object-fit:contain}"

  // Patchs
  + ".ebs-cib{width:100%;text-align:center;padding:44px 18px 22px}"
  + "#eb-soins .ebs-cib h2{font-family:'Montserrat',sans-serif;font-size:24px;font-weight:800;letter-spacing:.02em;text-transform:uppercase;margin:0;color:#000}"
  + ".ebs-cib span{display:block;font-size:11px;font-weight:400;letter-spacing:.2em;text-transform:uppercase;margin-top:10px}"
  + ".ebs-cib p{font-size:12.5px;font-weight:400;opacity:.85;margin:10px 0 0}"

  // Texte de présentation
  + ".ebs-bloom{padding:46px 22px 10px;text-align:center}"
  + "#eb-soins .ebs-bloom h2{font-family:'Montserrat',sans-serif;font-size:15px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#000;margin:0 0 16px}"
  + ".ebs-txt{font-family:'Montserrat',sans-serif;font-weight:400;font-size:14.5px;line-height:1.9;color:rgba(0,0,0,.86);text-align:center;max-width:760px;margin:0 auto}"
  + ".ebs-txt p{margin:0 0 12px}"
  + ".ebs-court{display:none}"
  + ".ebs-plus{display:inline;background:none;border:0;padding:0 2px;margin:0;font-family:'Montserrat',sans-serif;font-size:19px;font-weight:400;line-height:1;color:#000;cursor:pointer;vertical-align:-1px}"
  + ".ebs-txt.coupe:not(.ouvert) .ebs-plein{display:none}"
  + ".ebs-txt.coupe:not(.ouvert) .ebs-court{display:block}"

  // Échelle de la routine : fine barre en dégradé sur le bord droit, avec un curseur carré
  + ".ebs-rail{position:fixed;right:0;width:30px;z-index:950;opacity:0;pointer-events:none;transition:opacity .4s ease;touch-action:none;cursor:pointer}"
  + ".ebs-rail.vu{opacity:1;pointer-events:auto}"
  + ".ebs-rail .g{position:absolute;right:10px;top:0;bottom:0;width:7px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.06);background:linear-gradient(" + ETAPES.map(function(e, i){
      // chaque couleur garde une vraie plage, avec un fondu court vers la suivante (comme les packagings)
      var a = i * 20, b = a + 20;
      return e.couleur + ' ' + (i ? a + 5 : 0) + '%,' + e.couleur + ' ' + (i < ETAPES.length - 1 ? b - 5 : 100) + '%';
    }).join(',') + ")}"
  + ".ebs-rail .c{position:absolute;right:5px;width:17px;height:17px;margin-top:-8.5px;border:1.5px solid #000;transition:top .35s ease}"
  + ".ebs-rail.glisse .c{transition:none}"
  + ".ebs-rail .lab{position:absolute;right:30px;margin-top:-22px;white-space:nowrap;border:0;padding:9px 13px;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);font-family:'Montserrat',sans-serif;font-size:11px;font-weight:400;letter-spacing:.18em;text-transform:uppercase;color:#000;opacity:0;transform:translateX(6px);transition:opacity .35s ease,transform .35s ease,top .35s ease;pointer-events:none}"
  + ".ebs-rail .lab small{display:block;font-size:10.5px;font-weight:400;letter-spacing:.05em;text-transform:none;margin-top:4px;opacity:.85}"
  + ".ebs-rail.lb .lab{opacity:1;transform:none}"
  + ".ebs-rail.glisse .lab{transition:opacity .35s ease,transform .35s ease}"

  // ── Téléphone ──
  + "@media (max-width:899px){"
  +   "#eb-soins{width:100vw !important;max-width:100vw !important;margin-left:calc(50% - 50vw) !important}"
  +   ".ebs-flow{padding-left:20px;padding-right:20px}"
  // téléphone : vignette moins haute (la photo entière, flacon centré comme sur ordinateur)
  +   ".ebs-card .ebs-ph{margin:0 5px;aspect-ratio:3 / 4}.ebs-ph img{object-position:50% 0%}"
  +   ".ebs-card{padding-bottom:50px}"
  // soin seul sur sa ligne : vignette sur toute la largeur (format paysage), textes étalés, bouton plus large
  +   ".ebs-card.seul{width:100%}"
  +   ".ebs-card.seul .ebs-ph{aspect-ratio:16 / 11}.ebs-card.seul .ebs-ph img{object-fit:cover;object-position:50% 0%}"
  +   ".ebs-card.seul .ebs-tx{padding-left:12px;padding-right:12px}"
  +   ".ebs-card.seul .ebs-tx .ao{display:inline}.ebs-card.seul .ebs-tx .am{display:none}"
  +   ".ebs-card.seul .ebs-ajouter{width:62%}"
  +   "#eb-soins .ebs-card.seul .ebs-tx h3{font-size:12.5px}"
  +   ".ebs-card.seul .ebs-ph img.ebs-detail{width:19%;right:17%;bottom:7%}"
  +   ".ebs-card.seul[data-fiche='luminescence-jour'] .ebs-ph img{transform:scale(1.42);transform-origin:50% 52%}"   /* le soin star de Bloom : plus grand dans sa vignette */
  // teintes : sur téléphone, les photos des teintes ont le flacon déjà décalé à gauche (photos « -tel » préparées), pour ne pas passer sous les cases
    +   "#eb-soins .ebs-h h2{font-size:12px}"
  +   ".ebs-h p{font-size:11.5px}"
  +   ".ebs-tx{padding-left:4px;padding-right:4px}"
  +   "#eb-soins .ebs-tx h3{font-size:11px;letter-spacing:.11em;-webkit-hyphens:none;hyphens:none;overflow-wrap:normal;word-break:normal}"
  +   ".ebs-tx h3 .nb{white-space:nowrap}"
  +   ".ebs-tx .a{font-size:8.5px;margin-top:7px}"
  +   ".ebs-tx .ao{display:none}.ebs-tx .am{display:inline}"
  +   ".ebs-tx .l{font-size:10.5px;margin-top:7px}"
  +   ".ebs-tx .p{margin-top:9px;gap:6px}"
  +   ".ebs-tx .p b{font-size:13px}"
  +   ".ebs-tx .p small{font-size:9.5px}"
  +   ".ebs-ajouter{width:88%;padding:10px 0;font-size:9px;letter-spacing:.2em;margin-top:16px}"
  +   ".ebs-note{font-size:10px;left:10px;bottom:9px;gap:4px}.ebs-note i{font-size:12.5px}"
  +   ".ebs-tt{right:9px;gap:7px}.ebs-t{width:31px;height:31px;border-radius:8px}.ebs-tt em{font-size:8px}"
  +   ".ebs-conseil{width:100%;max-width:none;padding:6px 26px 34px;text-align:center}"
  +   "#eb-soins .ebs-conseil h3{font-size:15px}"
  +   ".ebs-conseil h3:after{margin:12px auto 0}"
  +   ".ebs-conseil p{font-size:12px;line-height:1.65}"
  // visuels (vidéo et photo de texture) d'un bord à l'autre de l'écran, angles droits ; seules les vignettes restent arrondies
  +   ".ebs-vid{width:100vw;max-width:none;margin:16px 0 0 calc(50% - 50vw);aspect-ratio:16 / 10}"
  +   ".ebs-cimg{display:block;position:relative;width:100vw;max-width:none;margin:16px 0 0 calc(50% - 50vw);overflow:hidden;aspect-ratio:4 / 3;background:#f39a2c}"
  // la photo de texture (en hauteur) est tournée d'un quart de tour pour s'étaler en largeur
  +   ".ebs-cimg img{position:absolute;left:50%;top:50%;display:block;width:75vw;height:100vw;object-fit:cover;transform:translate(-50%,-50%) rotate(-90deg)}"
  +   ".ebs-amb{width:calc(100% + 40px);margin-left:-20px;margin-right:-20px}"
  +   ".ebs-amb video{aspect-ratio:4 / 3;object-fit:cover}"
  +   ".ebs-cof{width:calc(100% + 40px);margin-left:-20px;margin-right:-20px}"
  +   "#eb-soins .ebs-cib h2{font-size:20px}"
  // l'étiquette de l'échelle ne s'affiche que quand la cliente fait glisser l'échelle (elle cachait les teintes)
  +   ".ebs-rail .lab{padding:6px 9px;font-size:8.5px;letter-spacing:.14em;margin-top:-16px}"
  +   ".ebs-rail .lab small{font-size:8.5px;margin-top:2px}"
  +   ".ebs-rail.lb:not(.glisse) .lab{opacity:0}"
  + "}"
  // tablette et petit ordinateur : place pour l'échelle à droite
  + "@media (min-width:900px) and (max-width:1179px){.ebs-flow{padding-right:26px}.ebs-amb{width:calc(100% + 26px);margin-right:-26px}.ebs-cof{width:calc(100% + 26px);margin-right:-26px}}"

  // ── Ordinateur ──
  + "@media (min-width:900px){"
  +   ".ebs-flow{max-width:1080px;margin:8px auto 0}"
  +   ".ebs-h div{border-top:0}"
  +   ".ebs-h:before{content:'';display:block;width:56px;height:1px;background:rgba(0,0,0,.22);margin:0 auto}"
  // vignettes plus petites ; le haut de la photo est gardé : le flacon le plus haut (Milky Bloom) est centré, tous restent posés sur la même ligne
  +   ".ebs-ph{aspect-ratio:41 / 50;height:auto}"
  +   ".ebs-ph img{object-position:50% 0%}"
  +   ".ebs-card{width:25%;padding:0 11px 62px}"
  +   ".ebs-bande{width:100%;display:flex;justify-content:center;padding:6px 0 56px}"
  +   ".ebs-bande .ebs-conseil{width:100%;max-width:820px;display:grid;grid-template-columns:1fr 1fr;column-gap:48px;align-items:center}"
  +   ".ebs-bande .ebs-conseil h3,.ebs-bande .ebs-conseil p{grid-column:1}.ebs-bande .ebs-vid{grid-column:2;grid-row:1 / span 4;margin:0;aspect-ratio:4 / 3}.ebs-bande .ebs-cimg{grid-column:2;grid-row:1 / span 4;display:block;overflow:hidden;background:#f39a2c;aspect-ratio:1 / 1}.ebs-bande .ebs-cimg img{display:block;width:100%;height:100%;object-fit:cover;object-position:50% 50%}.ebs-bande .ebs-conseil.sans-vid{display:block;max-width:640px;text-align:center}.ebs-bande .sans-vid h3:after{margin:14px auto 0}"
  // textes plus fins sur ordinateur, prix proche de la contenance, plus d'air avant le bouton
  +   "#eb-soins .ebs-tx h3{font-size:13px;letter-spacing:.15em}"
  +   ".ebs-tx .a{font-size:9.5px;margin-top:8px;text-wrap:balance}"
  +   ".ebs-t{width:34px;height:34px;border-radius:8px}.ebs-tt{gap:8px;right:12px}"
  +   ".ebs-tx .l{font-size:12.5px;margin-top:8px}"
  +   ".ebs-tx .p{margin-top:14px;gap:8px}"
  +   ".ebs-tx .p b{font-size:14px;font-weight:500}"
  +   ".ebs-tx .p small{font-size:11.5px}"
  +   ".ebs-ajouter{margin-top:18px;width:78%;max-width:210px;padding:12px 0;font-size:10px}"
  // écritures fines (élégance) : nom en medium, actifs, phrase et prix en léger
  +   "#eb-soins .ebs-tx h3{font-weight:500}"
  +   ".ebs-tx .a,.ebs-tx .l{font-weight:300}"
  +   ".ebs-tx .l{color:#2a1d18}"
  +   ".ebs-tx .p b{font-weight:400}"
  // le nombre de soins par rangée dépend de la place (environ 360 px par soin)
  // la vidéo à gauche (collée au bord de la colonne), Luminescence Jour à droite
  +   ".avec-amb{flex-wrap:nowrap;align-items:center;justify-content:flex-start}"
  +   ".avec-amb .ebs-amb{order:-1;flex:0 0 50%;width:50%;margin:0 0 40px}"
  +   ".avec-amb .ebs-card{width:50%;padding:0 max(9px, calc((50% - 380px) / 2)) 40px}"   // le soin garde la taille d'une vignette normale
  +   ".ebs-amb video{object-fit:cover}"
  +   "#eb-soins .ebs-coft{font-size:23px}"
  +   "#eb-soins .ebs-bloom h2{font-size:17px}"
  +   "#eb-soins .ebs-cof .ebs-card{max-width:660px;grid-template-columns:320px 1fr;gap:30px}"
  + "}";

  function construire(root){
  if(!document.getElementById('ebs-style')){ var st = document.createElement('style'); st.id = 'ebs-style'; st.textContent = css; document.head.appendChild(st); }

  // Nom du soin : les mots à tiret (Lumi-Bloom) ne se coupent pas, un chiffre ou « & » reste collé au mot voisin
  function nomInsecable(nom){
    return esc(nom).replace(/ (\d+)(?= |$)/g, ' $1').replace(/&amp; /g, '&amp; ')
      .split(' ').map(function(m){ return m.indexOf('-') > 0 ? '<span class="nb">' + m + '</span>' : m; }).join(' ');
  }
  function teintesHTML(id){
    var s = SOINS[id], t = s.teintes; if(!t) return '';
    var d = s.teinteDepart || 0;
    return '<span class="ebs-tt">' + t.map(function(x, k){
      return '<span class="ebs-t' + (k === d ? ' on' : '') + '" data-fiche="" role="button" tabindex="0" aria-label="Teinte ' + esc(x.nom) + '" data-k="' + k + '" style="background-image:url(' + esc(x.texture) + ')"></span>';
    }).join('') + '<em>' + esc(t[d].nom) + '</em></span>';
  }
  // toutes les photos de teintes sont posées l'une sur l'autre dès le départ : changer de teinte ne recharge rien (pas de saut)
  function photosTeintes(s){
    var d = s.teinteDepart || 0;
    return s.teintes.map(function(x, k){
      var im = '<img class="ebs-ti' + (k === d ? ' on' : '') + '" src="' + esc(x.photo) + '" alt="' + (k === d ? esc(s.alt) : '') + '"' + (k === d ? '' : ' aria-hidden="true"') + ' loading="lazy" decoding="async">';
      return x.photoTel ? '<picture><source media="(max-width:899px)" srcset="' + esc(x.photoTel) + '">' + im + '</picture>' : im;
    }).join('');
  }
  function vignette(id, etape, seul){
    var s = SOINS[id]; if(!s) return '';
    var actifs = s.actifsCourt ? '<span class="ao">' + esc(s.actifs) + '</span><span class="am">' + esc(s.actifsCourt) + '</span>' : esc(s.actifs);
    var photo = s.teintes ? s.teintes[s.teinteDepart || 0].photo : s.photo;
    return '<a class="ebs-card' + (seul ? ' seul' : '') + (s.teintes ? ' avec-teintes' : '') + '" href="' + esc(REGLAGES.lienFiche + id) + '" data-fiche="' + esc(id) + '" data-e="' + (etape ? etape.num : '') + '">'
      + '<div class="ebs-ph">' + (s.teintes ? photosTeintes(s) : (seul && s.photoLarge ? '<picture><source media="(max-width:899px)" srcset="' + esc(s.photoLarge) + '">' : '') + '<img src="' + esc(photo) + '" alt="' + esc(s.alt) + '" loading="lazy" decoding="async">' + (seul && s.photoLarge ? '</picture>' : ''))
      + (etape ? '<span class="ebs-num"><i style="background:' + etape.couleur + '"></i>' + etape.num + '</span>' : '')
      + (s.detail ? '<img class="ebs-detail" src="' + esc(s.detail) + '" alt="" aria-hidden="true" loading="lazy" decoding="async">' : '')
      + '<span class="ebs-note" hidden></span>' + teintesHTML(id) + '</div>'
      + '<div class="ebs-tx"><h3>' + nomInsecable(s.nom) + '</h3>'
      + '<span class="a">' + actifs + '</span>'
      + '<span class="l">' + esc(s.benefice) + '</span>'
      + '<span class="p" data-prix="' + esc(id) + '">' + prixHTML(id) + '</span>'
      + '<span class="ebs-ajouter" data-fiche="" role="button" tabindex="0" aria-label="Ajouter ' + esc(s.nom) + ' au panier">Ajouter</span></div>'
      + '</a>';
  }
  function conseilHTML(id){
    var c = SOINS[id].conseil, v = c.video;
    return '<aside class="ebs-conseil' + (v || c.image ? '' : ' sans-vid') + '"><h3>' + esc(c.titre) + '</h3>' + c.textes.map(function(t){ return '<p>' + esc(t) + '</p>'; }).join('')
      + (v ? '<video class="ebs-vid ebs-auto" aria-hidden="true" muted loop playsinline preload="none" poster="' + esc(PHOTOS + v + '.png') + '">'
           + '<source src="' + esc(PHOTOS + v + '.webm') + '" type="video/webm"><source src="' + esc(PHOTOS + v + '.mp4') + '" type="video/mp4"></video>' : '')
      + (!v && c.image ? '<a class="ebs-cimg" href="' + esc(REGLAGES.lienFiche + id) + '"><img src="' + esc(c.image) + '" alt="' + esc('Texture crème de ' + SOINS[id].nom + ' ELKHA.B') + '" loading="lazy" decoding="async"></a>' : '')
      + '</aside>';
  }

  // ─────────────────────────── CONSTRUCTION ───────────────────────────
  // Texte d'introduction : écrit directement dans l'embed Carrd (lisible par Google), repris ici avec un « + »
  var intro = root.querySelector('.ebs-intro');
  var h = '<div class="ebs-flow">';
  ETAPES.forEach(function(e){
    h += '<section class="ebs-h" data-h="' + e.num + '"><div><i class="ebs-sq" style="background:' + e.couleur + '"></i><h2>Étape ' + e.num + ' · ' + esc(e.titre) + '</h2></div><p>' + esc(e.texte) + '</p></section>';
    var amb = e.ambiance && e.ambiance.video ? e.ambiance : null;
    // un soin seul sur sa ligne de téléphone (nombre impair) prend toute la largeur
    h += '<div class="ebs-grp' + (amb ? ' avec-amb' : '') + '">' + e.soins.map(function(id, k){
      return vignette(id, e, e.soins.length % 2 === 1 && k === e.soins.length - 1);
    }).join('');
    e.soins.forEach(function(id){ if(SOINS[id] && SOINS[id].conseil) h += '<div class="ebs-bande">' + conseilHTML(id) + '</div>'; });
    // la vidéo est dans le même groupe que le soin : à gauche du soin sur ordinateur, en dessous sur téléphone
    if(amb) h += '<figure class="ebs-amb"><video class="ebs-auto" src="' + esc(amb.video) + '" muted loop playsinline preload="none" aria-label="' + esc(amb.alt) + '" data-tel="' + esc(amb.cadrageTelephone || '50% 50%') + '"></video></figure>';
    h += '</div>';
  });
  if(SOINS[COFFRET.soin]) h += '<section class="ebs-cof"><h2 class="ebs-coft">' + esc(COFFRET.surtitre) + '</h2>' + (COFFRET.texte ? '<p class="ebs-cofp">' + esc(COFFRET.texte) + '</p>' : '') + vignette(COFFRET.soin, null) + '</section>';
  h += '<div class="ebs-cib"><h2>' + esc(CIBLES.titre) + '</h2><span>' + esc(CIBLES.sousTitre) + '</span><p>' + esc(CIBLES.texte) + '</p></div>';
  h += CIBLES.soins.map(function(id, k){ return vignette(id, null, CIBLES.soins.length % 2 === 1 && k === CIBLES.soins.length - 1); }).join('');
  h += '</div>';
  if(intro) h += '<section class="ebs-bloom"><h2>' + esc(REGLAGES.titreTexte) + '</h2><div class="ebs-txt"><div class="ebs-plein">' + intro.innerHTML + '</div><p class="ebs-court"></p></div></section>';
  root.innerHTML = h;

  var cards = root.querySelectorAll('.ebs-card');
  var flow = root.querySelector('.ebs-flow');

  // ── Ordinateur : 4 soins par rangée ; vidéo étirée jusqu'au bord de la colonne ──
  function largeurBloc(){ pleineLargeur(); }
  function colonne(){
    var el = root;
    while(el.parentElement && el.parentElement !== document.body){
      var re = el.getBoundingClientRect(), cote = [].some.call(el.parentElement.children, function(c){
        if(c === el) return false;
        var rc = c.getBoundingClientRect();
        return rc.width > 50 && rc.bottom > re.top && rc.top < re.bottom && (rc.right <= re.left + 2 || rc.left >= re.right - 2);
      });
      if(cote) return el;
      el = el.parentElement;
    }
    return null;
  }
  function pleineLargeur(){
    root.querySelectorAll('.ebs-amb').forEach(function(f){
      ['width', 'max-width', 'margin-left', 'margin-right', 'flex'].forEach(function(p){ f.style.removeProperty(p); });
      var v = f.querySelector('video');
      if(v) v.style.objectPosition = window.innerWidth < 900 ? v.getAttribute('data-tel') : '50% 50%';
      if(window.innerWidth < 900) return;
      var r = (colonne() || root).getBoundingClientRect(), L = Math.max(0, r.left);
      var n = f.getBoundingClientRect(), d = Math.max(0, n.left - L);
      f.style.setProperty('width', (n.width + d) + 'px', 'important');
      f.style.setProperty('max-width', 'none', 'important');
      f.style.setProperty('flex', 'none', 'important');
      f.style.setProperty('margin-left', (-d) + 'px', 'important');
      f.style.setProperty('margin-right', '0', 'important');
    });
  }
  largeurBloc(); window.addEventListener('resize', largeurBloc);
  window.addEventListener('load', largeurBloc);

  // ── Vidéos : elles démarrent juste avant que la cliente arrive dessus, et s'arrêtent quand elle s'éloigne ──
  root.querySelectorAll('video.ebs-auto').forEach(function(v){
    function jouer(){ var p = v.play(); if(p && p.catch) p.catch(function(){}); }
    if(!('IntersectionObserver' in window)){ v.preload = 'auto'; jouer(); return; }
    new IntersectionObserver(function(en){
      en.forEach(function(x){ if(x.isIntersecting){ if(v.preload !== 'auto') v.preload = 'auto'; jouer(); } else v.pause(); });
    }, { rootMargin: '300px 0px' }).observe(v);
  });

  // ── Texte de présentation, téléphone : 4 lignes, puis « … + » ; ouvert : « − » à la fin du texte ──
  var txt = root.querySelector('.ebs-txt');
  if(txt){
    var plein = txt.querySelector('.ebs-plein'), court = txt.querySelector('.ebs-court');
    var mots = plein.textContent.replace(/\s+/g, ' ').trim().split(' ');
    var moins = document.createElement('button'); moins.type = 'button'; moins.className = 'ebs-plus'; moins.textContent = '−'; moins.setAttribute('aria-label', 'Réduire le texte');
    var dernier = plein.querySelector('p:last-child') || plein; dernier.appendChild(document.createTextNode(' ')); dernier.appendChild(moins);
    var largeur = 0;
    var couper = function(){
      if(window.innerWidth >= 900){ txt.classList.remove('coupe'); moins.style.display = 'none'; return; }
      moins.style.display = '';
      if(txt.clientWidth === largeur) return; largeur = txt.clientWidth;
      var ouvert = txt.classList.contains('ouvert'); txt.classList.remove('ouvert');
      var lh = parseFloat(getComputedStyle(court).lineHeight) || 27.5, max = lh * 4 + 2;
      function essai(n){ court.innerHTML = esc(mots.slice(0, n).join(' ')) + '… <button type="button" class="ebs-plus" aria-label="Lire la suite">+</button>'; return court.offsetHeight <= max; }
      court.innerHTML = '';
      // le texte entier tient-il en 4 lignes ? alors pas de « + »
      txt.classList.remove('coupe');
      if(plein.offsetHeight <= max + lh){ moins.style.display = 'none'; return; }
      txt.classList.add('coupe');
      var a = 1, b = mots.length - 1;
      while(a < b){ var m = Math.ceil((a + b) / 2); if(essai(m)) a = m; else b = m - 1; }
      essai(a);
      if(ouvert) txt.classList.add('ouvert');
    };
    txt.addEventListener('click', function(e){
      var b = e.target.closest('.ebs-plus'); if(!b) return;
      var o = txt.classList.toggle('ouvert');
      if(!o){ var r = txt.getBoundingClientRect(); if(r.top < REGLAGES.espaceMenu) window.scrollTo({ top: window.scrollY + r.top - REGLAGES.espaceMenu - 20, behavior: 'smooth' }); }
    });
    couper();
    window.addEventListener('resize', couper);
    if(document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ largeur = 0; couper(); });
  }

  // ── Teintes et bouton « Ajouter » ──
  function sansAccent(t){ return String(t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase().trim(); }
  function teinteChoisie(card){ var t = card.querySelector('.ebs-t.on'); return t ? +t.getAttribute('data-k') : -1; }
  function varianteDe(id, card){
    var p = produit(id); if(!p) return '';
    var s = SOINS[id], k = teinteChoisie(card);
    if(s.teintes && k > -1 && p.variantes){
      var voulu = sansAccent(s.teintes[k].variante);
      for(var i = 0; i < p.variantes.length; i++){ if(sansAccent(p.variantes[i].label) === voulu) return p.variantes[i].variantId; }
      return '';
    }
    return p.variantId || (p.variantes && p.variantes[0] && p.variantes[0].variantId) || '';
  }
  function choisirTeinte(t){
    var card = t.closest('.ebs-card'), id = card.getAttribute('data-fiche'), k = +t.getAttribute('data-k'), x = SOINS[id].teintes[k];
    card.querySelectorAll('.ebs-ph img.ebs-ti').forEach(function(im, j){
      var on = j === k; im.classList.toggle('on', on);
      im.alt = on ? SOINS[id].alt : ''; if(on) im.removeAttribute('aria-hidden'); else im.setAttribute('aria-hidden', 'true');
    });
    card.querySelectorAll('.ebs-t').forEach(function(y){ y.classList.toggle('on', y === t); });
    card.setAttribute('data-teinte-nom', x.variante);   // la fiche s'ouvrira sur cette teinte
    card.querySelector('.ebs-tt em').textContent = x.nom;
  }
  function ajouter(btn){
    if(btn.classList.contains('ok') || btn.getAttribute('data-envoi')) return;
    var card = btn.closest('.ebs-card'), id = card.getAttribute('data-fiche'), v = varianteDe(id, card);
    // panier indisponible : on ouvre la fiche du soin à la place
    if(!v || typeof window.ebCartAddItem !== 'function'){ window.location.href = card.getAttribute('href'); return; }
    btn.setAttribute('data-envoi', '1');
    function fini(ok){
      btn.removeAttribute('data-envoi');
      if(!ok) return;
      btn.textContent = 'Ajouté'; btn.classList.add('ok');
      setTimeout(function(){ btn.textContent = 'Ajouter'; btn.classList.remove('ok'); }, 2000);
    }
    Promise.resolve(window.ebCartAddItem(v, 1)).then(function(c){ fini(!!c); }, function(){ fini(false); });
  }
  root.addEventListener('click', function(ev){
    var t = ev.target.closest('.ebs-t');
    if(t){ ev.preventDefault(); ev.stopPropagation(); choisirTeinte(t); return; }
    var a = ev.target.closest('.ebs-ajouter');
    if(a){ ev.preventDefault(); ev.stopPropagation(); ajouter(a); }
  }, true);
  root.addEventListener('keydown', function(ev){
    if(ev.key !== 'Enter' && ev.key !== ' ') return;
    var t = ev.target.closest('.ebs-t, .ebs-ajouter'); if(!t) return;
    ev.preventDefault(); ev.stopPropagation();
    if(t.classList.contains('ebs-t')) choisirTeinte(t); else ajouter(t);
  }, true);

  // ── L'échelle à curseur : suit la lecture, et emmène à l'étape choisie ──
  var rail = document.createElement('div');
  rail.className = 'ebs-rail'; rail.setAttribute('aria-hidden', 'true');
  rail.innerHTML = '<i class="g"></i><i class="c"></i><div class="lab"></div>';
  document.body.appendChild(rail);
  var curseur = rail.querySelector('.c'), lab = rail.querySelector('.lab'), fin = root.querySelector('.ebs-cof') || root.querySelector('.ebs-cib');
  var HAUT_RAIL = 220, actuelle = -1, minuterie = null, glisse = false;
  function premiereDe(i){ return root.querySelector('.ebs-card[data-e="' + ETAPES[i].num + '"]'); }
  function delai(){ return window.innerWidth < 900 ? 1200 : 2000; }
  function lum(c){ return c.map(function(v){ v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }).reduce(function(t, v, n){ return t + v * [.2126, .7152, .0722][n]; }, 0); }
  function placer(i, montrer){
    var pos = ((i + .5) / ETAPES.length * 100) + '%';
    curseur.style.top = pos; lab.style.top = pos;
    // étiquette à la couleur de l'étape ; texte foncé ou clair selon ce qui se lit le mieux
    var cc = ETAPES[i].couleur.replace('#', ''), rgb = [0, 2, 4].map(function(k){ return parseInt(cc.substr(k, 2), 16); });
    var L = lum(rgb), fonce = (L + .05) / (lum([58, 26, 18]) + .05), clairC = (lum([251, 246, 241]) + .05) / (L + .05);
    lab.style.background = 'rgba(' + rgb.join(',') + ',.9)';
    lab.style.color = (i >= 2 || clairC > fonce) ? '#fbf6f1' : '#3a1a12';
    lab.innerHTML = 'Étape ' + ETAPES[i].num + ' · ' + esc(ETAPES[i].titre) + '<small>' + esc(ETAPES[i].texte) + '</small>';
    if(montrer){
      rail.classList.add('lb'); clearTimeout(minuterie);
      if(!glisse) minuterie = setTimeout(function(){ rail.classList.remove('lb'); }, delai());
    }
  }
  function suivre(){
    rail.style.top = (REGLAGES.espaceMenu + 16) + 'px';
    rail.style.height = HAUT_RAIL + 'px';
    var rb = root.getBoundingClientRect(); rail.style.left = (rb.right - 30 - (window.innerWidth >= 900 ? 18 : 0)) + 'px'; rail.style.right = 'auto';
    var c1 = premiereDe(0), debut = c1 ? c1.getBoundingClientRect().top < window.innerHeight * .5 : true;
    var visible = visibleBloc(root) && rb.top < REGLAGES.espaceMenu && debut && fin.getBoundingClientRect().top > REGLAGES.espaceMenu + HAUT_RAIL * .6;
    rail.classList.toggle('vu', visible);
    if(glisse) return;
    var ligne = window.innerHeight * .45, i = 0;
    ETAPES.forEach(function(e, k){ var c = premiereDe(k); if(c && c.getBoundingClientRect().top < ligne) i = k; });
    if(i !== actuelle){ var avant = actuelle; actuelle = i; placer(i, visible && avant !== -1); }
  }
  function etapeSous(y){
    var r = rail.getBoundingClientRect(), t = Math.min(1, Math.max(0, (y - r.top) / r.height));
    return Math.min(ETAPES.length - 1, Math.floor(t * ETAPES.length));
  }
  rail.addEventListener('pointerdown', function(e){
    glisse = true; rail.classList.add('glisse');
    try { rail.setPointerCapture(e.pointerId); } catch(err){}
    actuelle = etapeSous(e.clientY); placer(actuelle, true); e.preventDefault();
  });
  rail.addEventListener('pointermove', function(e){
    if(!glisse) return;
    var i = etapeSous(e.clientY);
    if(i !== actuelle){ actuelle = i; placer(i, true); }
  });
  function lacher(){
    if(!glisse) return;
    glisse = false; rail.classList.remove('glisse');
    var c = premiereDe(actuelle);
    if(c) window.scrollTo({ top: window.scrollY + c.getBoundingClientRect().top - REGLAGES.espaceMenu - 90, behavior: 'smooth' });
    clearTimeout(minuterie); minuterie = setTimeout(function(){ rail.classList.remove('lb'); }, delai());
  }
  rail.addEventListener('pointerup', lacher);
  rail.addEventListener('pointercancel', lacher);
  window.addEventListener('scroll', suivre, { passive: true });
  window.addEventListener('resize', suivre);
  suivre();

  // ── Textes des vignettes alignés : sur une même rangée, nom, actifs et phrase commencent à la même hauteur ──
  function aligner(){
    var champs = ['h3', '.a', '.l'];
    cards.forEach(function(c){ champs.forEach(function(q){ var el = c.querySelector(q); if(el) el.style.minHeight = ''; }); });
    var rangs = {};
    cards.forEach(function(c){
      if(c.offsetParent === null) return;
      var k = (c.parentNode === flow ? 'f' : 'g') + Math.round(c.getBoundingClientRect().top + window.scrollY);
      (rangs[k] = rangs[k] || []).push(c);
    });
    Object.keys(rangs).forEach(function(k){
      var r = rangs[k]; if(r.length < 2) return;
      champs.forEach(function(q){
        var max = 0; r.forEach(function(c){ var el = c.querySelector(q); if(el) max = Math.max(max, el.offsetHeight); });
        r.forEach(function(c){ var el = c.querySelector(q); if(el) el.style.minHeight = max + 'px'; });
      });
    });
  }
  // Téléphone : un mot trop long pour la vignette (ex. « décongestionnants ») resserre un peu son titre au lieu d'être coupé
  function ajusterNoms(){
    root.querySelectorAll('.ebs-tx h3').forEach(function(t){
      t.style.letterSpacing = ''; t.style.fontSize = '';
      if(window.innerWidth >= 900) return;
      if(t.scrollWidth > t.clientWidth + 1) t.style.letterSpacing = '.05em';
      if(t.scrollWidth > t.clientWidth + 1) t.style.fontSize = '10px';
      // titre sur 3 lignes : on essaie de le faire tenir sur 2 en resserrant légèrement les lettres
      var lh = parseFloat(getComputedStyle(t).lineHeight) || 16, avant = Math.round(t.offsetHeight / lh);
      if(avant > 2 && !t.style.letterSpacing){
        t.style.letterSpacing = '.075em';
        if(Math.round(t.offsetHeight / lh) >= avant) t.style.letterSpacing = '';
      }
    });
  }
  ajusterNoms(); aligner();
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ ajusterNoms(); aligner(); });
  window.addEventListener('resize', ajusterNoms);
  var largeurA = 0;
  window.addEventListener('resize', function(){ if(window.innerWidth !== largeurA){ largeurA = window.innerWidth; aligner(); } });

  // ── Prix à jour (produits-data-test.js peut arriver après ce fichier) ──
  function majPrix(){ root.querySelectorAll('[data-prix]').forEach(function(p){ p.innerHTML = prixHTML(p.getAttribute('data-prix')); }); }
  window.addEventListener('load', function(){ majPrix(); aligner(); });

  // ── Notes des clientes (Judge.me), affichées à partir de REGLAGES.avisMinimum avis ──
  // numéros des produits gardés sur l'appareil ; notes gardées le temps de la visite
  function lire(m, k){ try { return JSON.parse(m.getItem(k)); } catch(e){ return null; } }
  function garder(m, k, v){ try { m.setItem(k, JSON.stringify(v)); } catch(e){} }
  function afficherNotes(notes){
    cards.forEach(function(c){
      var n = notes[c.getAttribute('data-fiche')], el = c.querySelector('.ebs-note'); if(!el) return;
      if(n && n.total >= REGLAGES.avisMinimum && n.moyenne > 0){
        el.innerHTML = '<i>★</i> ' + n.moyenne.toFixed(1).replace('.', ',');
        el.setAttribute('aria-label', 'Note ' + n.moyenne.toFixed(1).replace('.', ',') + ' sur 5');
        el.hidden = false;
      } else el.hidden = true;
    });
  }
  function chargerNotes(){
    var deja = lire(sessionStorage, 'ebs-notes');
    if(deja){ afficherNotes(deja); return; }
    var ids = Object.keys(SOINS).filter(function(id){ return root.querySelector('.ebs-card[data-fiche="' + id + '"]'); });
    var variantes = {};
    ids.forEach(function(id){ var p = produit(id); var v = p && (p.variantId || (p.variantes && p.variantes[0] && p.variantes[0].variantId)); if(v) variantes[id] = String(v); });
    var connus = lire(localStorage, 'ebs-produits') || {};
    var manquants = ids.filter(function(id){ return variantes[id] && !connus[variantes[id]]; });
    var etape1 = !manquants.length ? Promise.resolve() : fetch(STOREFRONT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN },
      body: JSON.stringify({ query: '{nodes(ids:[' + manquants.map(function(id){ return '"gid://shopify/ProductVariant/' + variantes[id] + '"'; }).join(',') + ']){... on ProductVariant{id product{id}}}}' })
    }).then(function(r){ return r.json(); }).then(function(j){
      ((j && j.data && j.data.nodes) || []).forEach(function(n){ if(n && n.product) connus[String(n.id).split('/').pop()] = String(n.product.id).split('/').pop(); });
      garder(localStorage, 'ebs-produits', connus);
    });
    etape1.then(function(){
      var notes = {};
      return Promise.all(ids.map(function(id){
        var pid = connus[variantes[id]]; if(!pid) return null;
        return fetch(JUDGEME_BADGE + '?external_id=' + encodeURIComponent(pid) + '&api_token=' + encodeURIComponent(JUDGEME_TOKEN) + '&shop_domain=' + BOUTIQUE)
          .then(function(r){ return r.json(); }).then(function(j){
            var d = new DOMParser().parseFromString((j && j.badge) || '', 'text/html').querySelector('[data-average-rating]');
            if(d) notes[id] = { moyenne: parseFloat(d.getAttribute('data-average-rating')) || 0, total: parseInt(d.getAttribute('data-number-of-reviews'), 10) || 0 };
          }).catch(function(){});
      })).then(function(){ garder(sessionStorage, 'ebs-notes', notes); afficherNotes(notes); });
    }).catch(function(){});
  }
  // une fois la page chargée, sans retarder l'affichage des soins
  function plusTard(){ setTimeout(chargerNotes, 800); }
  if(document.readyState === 'complete') plusTard(); else window.addEventListener('load', plusTard);
  }   // fin de construire()

  lancer();
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', lancer);
  window.addEventListener('load', lancer);
})();
