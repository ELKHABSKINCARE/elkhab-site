// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
// =====================================================================
// ELKHA.B — Les soins Bloom, rangés par étape de routine (v2 : vitrine sobre, étapes révélées par les filtres)
// Un seul embed Carrd :  <div id="eb-soins"><div class="ebs-intro"><p>Ton texte…</p></div></div>
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
    // Couleur exacte du fond du site : les photos y sont fondues (plus de cadre ni d'ombre coupée)
    fondSite: "#f5f4f0",
    // Si une photo remplacée dans Shopify s'affiche tantôt l'ancienne, tantôt la nouvelle :
    // augmenter ce chiffre de 1 (oblige téléphones et serveurs à reprendre la photo du jour)
    versionPhotos: 2,
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
  // hauteur = hauteur réelle du soin en cm : toutes les photos sont remises à la même échelle,
  //           posées sur la même ligne (les petits soins restent petits)
  var SOINS = {
    "gelee-lumibloom": {
      nom: "Gelée Lumi-Bloom", actifs: "Prébiotique · Acide hyaluronique · Sodium PCA",
      ligne: "Hydratation · Apaisement · Barrière cutanée · Peaux sensibles",
      besoins: ["hydratation","apaisement","sensibles"], prix: "28,90€", taille: "30 ml", hauteur: 11,
      // 📷 Gelée Lumi-Bloom
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000189881f48908d7eaebf894d3.png?v=1792227809",
      alt: "Gelée Lumi-Bloom ELKHA.B, gel aux prébiotiques et à l'acide hyaluronique, flacon pipette 30 ml"
    },
    "radiance-serum": {
      nom: "Radiance C Serum", actifs: "Vitamine C & E · Acide hyaluronique",
      ligne: "Éclat · Anti-taches · Protection · Peaux sensibles",
      besoins: ["eclat","anti-taches","sensibles"], prix: "34,90€", taille: "30 ml", hauteur: 12.5,
      // 📷 Radiance C Serum
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_000000000e1481f585b2ee37b40be0d3.png?v=1792225353",
      alt: "Radiance C Serum ELKHA.B, sérum éclat à la vitamine C pour peaux sensibles, 30 ml"
    },
    "lumibloom-niac-5": {
      nom: "Lumi-Bloom Niacinamide 5", actifs: "Vitamine B3 · Ginkgo biloba",
      ligne: "Pores & imperfections · Teint unifié · Peaux sensibles",
      besoins: ["pores","anti-taches","sensibles"], prix: "34,90€", taille: "50 ml", hauteur: 14.5,
      // 📷 Niacinamide 5
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000f6dc81f488084229cc8f2994.png?v=1792228227",
      alt: "Lumi-Bloom Niacinamide 5 ELKHA.B, soin pores et teint unifié à la niacinamide, 50 ml"
    },
    "radiance-eye-cream": {
      nom: "Radiance Eye Cream", actifs: "Acide hyaluronique · Ginkgo biloba · Beurre de karité",
      ligne: "Cernes · Poches · Ridules",
      besoins: ["regard"], prix: "28,90€", taille: "15 ml", hauteur: 10.5,
      // 📷 Radiance Eye Cream
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000a11082109a9d69ab565cdea5.png?v=1792225354",
      alt: "Radiance Eye Cream ELKHA.B, crème contour des yeux cernes et poches, 15 ml"
    },
    "luminescence-jour": {
      nom: "Luminescence Jour", actifs: "Acide hyaluronique multi-moléculaire · Bisabolol",
      ligne: "Hydratation · Éclat · Apaisement · Peaux sensibles",
      besoins: ["hydratation","eclat","apaisement","sensibles"], prix: "34,90€", taille: "50 ml", hauteur: 14.5,
      // 📷 Luminescence Jour
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000067a081f4b806353042f5d59c.png?v=1792224216",
      alt: "Luminescence Jour ELKHA.B, crème hydratante éclat à l'acide hyaluronique, 50 ml"
    },
    "radiance-protect": {
      nom: "Radiance Protect", actifs: "Jojoba · Filtres minéraux · SPF 50",
      ligne: "SPF 50 · Anti-taches · Peaux sensibles",
      besoins: ["solaire","anti-taches","sensibles"], prix: "26,90€", taille: "12 g", hauteur: 9.5,
      // 📷 Radiance Protect (version teintée)
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000067b4820898e2100a2336668b.png?v=1792227560",
      alt: "Radiance Protect ELKHA.B, stick solaire minéral SPF 50, 12 g"
    },
    "lumiveil-cc-cream": {
      nom: "Lumi-Veil CC Cream SPF30", actifs: "Céramides · Beurre de cacao",
      ligne: "Teint unifié · SPF 30 · Barrière cutanée · Apaisement · Peaux sensibles",
      besoins: ["anti-taches","solaire","apaisement","sensibles"], prix: "26,90€", taille: "12 g", hauteur: 9.5,
      // 📷 Lumi-Veil (les 4 teintes)
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_000000006504820e806a74d83392168f.png?v=1792228400",
      alt: "Lumi-Veil CC Cream SPF 30 ELKHA.B, stick teinté en 4 teintes"
    },
    "luminescence-nuit": {
      nom: "Luminescence Nuit", actifs: "Collagène · Plancton marin · Beurre de cacao",
      ligne: "Rides & fermeté · Hydratation intense · Peaux sensibles",
      besoins: ["fermete","hydratation","sensibles"], prix: "34,90€", taille: "50 ml", hauteur: 14.5,
      // 📷 Luminescence Nuit
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000c27082109ec53e33d47ac1b1.png?v=1792228225",
      alt: "Luminescence Nuit ELKHA.B, crème de nuit fermeté au collagène et plancton marin, 50 ml"
    },
    "rituel-luminescence": {
      nom: "Rituel Luminescence", actifs: "Le coffret Jour & Nuit · Hydratation & fermeté",
      ligne: "Hydratation intense · Fermeté · Éclat · Apaisement",
      besoins: ["hydratation","eclat","apaisement","fermete","sensibles"], prix: "67,90€", taille: "2 × 50 ml", hauteur: 14.5,
      // 📷 Rituel Luminescence
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/rituel-luminescence-carrousel-v2.png?v=1792224561",
      alt: "Rituel Luminescence ELKHA.B, coffret crème de jour et crème de nuit"
    },
    "bright-glow-patch": {
      nom: "Patchs éclaircissants & lissants", actifs: "Niacinamide · Acide hyaluronique",
      ligne: "Cernes · Ridules",
      besoins: ["regard"], prix: "28,90€", taille: "7 paires", hauteur: 11,
      // 📷 Patchs Lumi-Eyes niacinamide
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000018cc82108970f45b4b30dfff.png?v=1792225964",
      alt: "Patchs yeux Lumi-Eyes ELKHA.B à la niacinamide, cernes et ridules"
    },
    "bright-glow-decongestionnant": {
      nom: "Patchs éclat décongestionnants", actifs: "Caféine · Vitamine C",
      ligne: "Poches · Teint terne · Peaux sensibles",
      besoins: ["regard","sensibles"], prix: "28,90€", taille: "7 paires", hauteur: 11,
      // 📷 Patchs Lumi-Eyes caféine + vitamine C
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000426481f48f8efd886f65ba45.png?v=1792225964",
      alt: "Patchs yeux Lumi-Eyes ELKHA.B à la caféine et vitamine C, poches"
    },
    "bright-glow-anti-fatigue": {
      nom: "Patchs anti-fatigue réconfortants", actifs: "Antioxydants · Provitamine B5",
      ligne: "Fatigue · Sécheresse",
      besoins: ["regard"], prix: "28,90€", taille: "7 paires", hauteur: 11,
      // 📷 Patchs Lumi-Eyes antioxydants
      photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000027bc81f4ab57858a2c77cf29.png?v=1792225964",
      alt: "Patchs yeux Lumi-Eyes ELKHA.B anti-fatigue aux antioxydants"
    }
  };

  // Les 5 étapes (dans l'ordre de la routine)
  var ETAPES = [
    { num: "01", titre: "Préparer",  texte: "Une peau équilibrée reçoit mieux ses soins.", couleur: "#e6cdbb", soins: ["gelee-lumibloom"] },
    { num: "02", titre: "Traiter",   texte: "Le soin ciblé : éclat, pores, regard.",        couleur: "#d9a796", soins: ["radiance-serum","lumibloom-niac-5","radiance-eye-cream"],
      // 📷 Grande photo d'ambiance après l'étape 02 (laisser "" pour ne rien afficher)
      ambiance: { photo: "", alt: "Lèvres et peau lumineuse, soins ELKHA.B Bloom", cadrage: "50% 40%" } },
    { num: "03", titre: "Hydrater",  texte: "L'hydratation au cœur de la routine.",       couleur: "#c27a5c", soins: ["luminescence-jour"] },
    { num: "04", titre: "Protéger",  texte: "Le geste du matin, chaque jour.",            couleur: "#e0663c", soins: ["radiance-protect","lumiveil-cc-cream"],
      // 📷 Grande photo d'ambiance après l'étape 04 (laisser "" pour ne rien afficher)
      ambiance: { photo: "", alt: "Peau lumineuse et hydratée, rituel ELKHA.B Bloom", cadrage: "50% 30%" } },
    { num: "05", titre: "Régénérer", texte: "La nuit, la peau se répare.",                couleur: "#7d1f2b", soins: ["luminescence-nuit"] }
  ];

  // Le coffret, en grand, après l'étape 05
  var COFFRET = { surtitre: "LE COFFRET JOUR & NUIT", soin: "rituel-luminescence" };

  // Les soins ciblés (en plus de la routine)
  var CIBLES = {
    surtitre: "EN PLUS", titre: "Les patchs", sousTitre: "Lumi-Eyes Bright & Glow",
    texte: "Une pause pour le regard, quand vous en avez envie.",
    soins: ["bright-glow-patch","bright-glow-decongestionnant","bright-glow-anti-fatigue"]
  };
  // ─────────────────────────── FIN DES RÉGLAGES ───────────────────────

  var root = document.getElementById('eb-soins');
  if(!root || root.getAttribute('data-ok')) return;
  root.setAttribute('data-ok', '1');

  var NOMS = {}; BESOINS.forEach(function(b){ NOMS[b.id] = b.nom; });
  var LIGNE = 'rgba(0,0,0,.14)';

  var css = ''
  + "#eb-soins{font-family:'Montserrat',sans-serif;color:#000;text-align:left;-webkit-tap-highlight-color:transparent;width:100%}"
  + "@media (max-width:899px){#eb-soins{width:100vw !important;max-width:100vw !important;margin-left:calc(50% - 50vw) !important}}"
  + "#eb-soins *{box-sizing:border-box}"
  + "#eb-soins a{color:inherit;text-decoration:none}"
  + ".ebs-in{padding:0 18px}"
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
  // Barre des besoins
  + ".ebs-cap{font-size:9.5px;font-weight:600;letter-spacing:.22em;opacity:.55;margin:0 0 10px}"
  + ".ebs-sq{display:block;width:18px;height:18px}"
  + ".ebs-txt{font-family:'Montserrat',sans-serif;font-weight:300;font-size:14.5px;line-height:1.9;color:rgba(0,0,0,.7);text-align:center;max-width:760px;margin:0 auto}"
  + ".ebs-txt p{margin:0 0 12px}"
  + ".ebs-court{display:none}"
  + ".ebs-plus{display:inline;background:none;border:0;padding:0 2px;margin:0;font-family:'Montserrat',sans-serif;font-size:19px;font-weight:400;line-height:1;color:#000;cursor:pointer;vertical-align:-1px}"
  + ".ebs-txt.coupe:not(.ouvert) .ebs-plein{display:none}"
  + ".ebs-txt.coupe:not(.ouvert) .ebs-court{display:block}"
  + ".ebs-slot{margin-top:24px}"
  + ".ebs-bar{padding:10px 0 10px;transition:background .3s ease}"
  + ".ebs-bar.fixe{position:fixed;left:0;right:0;z-index:900;background:rgba(246,244,240,.94);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid " + LIGNE + "}"
  + ".ebs-bar.fixe .ebs-cap{display:none}"
  + ".ebs-chips{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;margin:0 -18px;padding:0 18px}"
  + ".ebs-chips::-webkit-scrollbar{display:none}"
  + ".ebs-chips button{flex:none;font-family:'Montserrat',sans-serif;font-size:10.5px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:#000;background:transparent;border:1px solid rgba(0,0,0,.25);border-radius:0;padding:9px 13px;cursor:pointer;transition:background .25s ease,color .25s ease,border-color .25s ease}"
  + ".ebs-chips button.on{background:#000;color:#f6f4f0;border-color:#000}"
  + ".ebs-compte{font-size:11px;font-weight:300;font-style:italic;opacity:.6;padding-top:8px;min-height:24px}"
  // Vitrine
  + ".ebs-flow{display:flex;flex-wrap:wrap;justify-content:center;margin-top:8px}"
  + "@media (max-width:1179px){.ebs-flow{padding-right:26px}.ebs-amb{width:calc(100% + 26px) !important;margin-right:-26px !important}}"
  + ".ebs-grp{width:100%;display:flex;flex-wrap:wrap;justify-content:center;padding-bottom:10px}"
  + ".ebs-card{position:relative;display:block;width:50%;padding:0 0 34px;transition:opacity .5s ease,filter .5s ease}"
  + ".ebs-card{transition:opacity .5s ease,filter .5s ease,width .5s ease,padding .5s ease}"
  + ".ebs-card.off{opacity:.25;filter:grayscale(1)}"
  // filtre actif : les soins qui ne correspondent pas rétrécissent en petites vignettes, sans texte
  + ".filtre .ebs-card.off{width:22%;padding-bottom:10px}"
  + ".filtre .ebs-card.off .ebs-tx,.filtre .ebs-card.off .ebs-num{display:none}"
  + ".filtre .ebs-h.vide{margin:0 0 8px}"
  + ".filtre .ebs-h.vide p{display:none}"
  + ".ebs-ph{display:block;position:relative;aspect-ratio:3 / 4;overflow:hidden}"
  + ".ebs-ph img{display:block;position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:50% 86%;opacity:0;transition:opacity .6s ease}"
  + ".ebs-ph img.pret{opacity:1}"
  // secours si la photo ne peut pas être retravaillée : bords fondus en CSS
  + ".ebs-ph img.brut{opacity:1;-webkit-mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent),linear-gradient(transparent,#000 8%,#000 92%,transparent);-webkit-mask-composite:source-in;mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent),linear-gradient(transparent,#000 8%,#000 92%,transparent);mask-composite:intersect}"
  // textes alignés d'une vignette à l'autre (téléphone)
  + "@media (max-width:899px){#eb-soins .ebs-tx h3{font-size:10.5px;letter-spacing:.12em;min-height:2.9em;display:flex;align-items:flex-end;justify-content:center}.ebs-tx .a{min-height:3.1em}#eb-soins .ebs-cib h2{font-size:20px}}"
  + ".ebs-num{position:absolute;top:10px;left:10px;display:flex;align-items:center;gap:6px;font-size:9px;font-weight:500;letter-spacing:.12em;opacity:.75}"
  + ".ebs-num i{display:block;width:8px;height:8px}"
  + ".ebs-tx{text-align:center;padding:14px 8px 0}"
  + ".ebs-tx h3{font-family:'Montserrat',sans-serif;font-size:12.5px;font-weight:400;letter-spacing:.18em;text-transform:uppercase;line-height:1.45;margin:0;color:#000}"
  + ".ebs-tx .a{display:block;font-size:10.5px;font-weight:400;letter-spacing:.05em;line-height:1.55;margin-top:6px;opacity:.85}"
  + ".ebs-tx .l{display:block;font-size:9.5px;font-weight:300;font-style:italic;line-height:1.5;margin-top:7px;opacity:.55}"
  + ".ebs-tx .p{display:block;font-size:9.5px;font-weight:400;margin-top:3px;opacity:.85}"
  // Titres d'étape : cachés, révélés par un filtre
  + ".ebs-h{display:block;width:100%;padding:0 18px;margin:0 0 30px}"
  + ".ebs-h:first-child{display:none}"
  + ".ebs-h div{min-height:0}"
  + ".ebs-h div > *,.ebs-h p{display:none}"
  + ".ebs-h div{padding-top:0}"
  + ".ebs-h div{display:flex;align-items:baseline;gap:12px;border-top:1px solid " + LIGNE + ";padding-top:16px}"
  + ".ebs-h .ebs-sq{width:12px;height:12px;align-self:center}"
  + ".ebs-h h2{font-family:'Montserrat',sans-serif;font-size:11.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;margin:0;color:#000}"
  + ".ebs-h p{font-size:12px;font-weight:300;line-height:1.5;opacity:.7;margin:6px 0 0 24px}"
  + ".filtre .ebs-h{display:block;margin:6px 0 18px}"
  + ".filtre .ebs-h div{padding-top:16px}"
  + ".filtre .ebs-h div > *{display:block;animation:ebsIn .6s ease both}"
  + ".filtre .ebs-h p{display:block;animation:ebsIn .6s ease both}"
  + ".filtre .ebs-h.vide div > *,.filtre .ebs-h.vide p{animation:none;opacity:.3}"
  + "@keyframes ebsIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}"
  // Grandes photos
  + ".ebs-amb{width:100%;margin:6px 0 40px;overflow:hidden;max-height:1400px;}"
  + ".ebs-amb img{display:block;width:100%;height:auto}"
  + ".filtre .ebs-amb{display:none}"
  // Pont Balance
  + ".ebs-pont{display:none;width:100%;margin:0 18px 36px;padding:16px 0;border-top:1px solid " + LIGNE + ";border-bottom:1px solid " + LIGNE + ";font-size:12.5px;font-weight:300;line-height:1.6;text-align:center}"
  + ".ebs-pont b{font-weight:600;color:#2c5a3c}"
  + ".ebs-pont a{display:inline-block;margin-top:8px;font-size:10.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#2c5a3c;border-bottom:1px solid #2c5a3c;padding-bottom:2px}"
  + ".ebs-pont.on{display:block}"
  // Coffret
  + ".ebs-cof{width:100%;padding:0 0 10px}"
  + ".ebs-cof{display:flex;flex-direction:column;align-items:center}"
  + ".ebs-cof .ebs-card{width:50%}"
  + ".ebs-sur{display:block;text-align:center;font-size:9.5px;font-weight:600;letter-spacing:.22em;opacity:.55;margin:0 0 14px}"
  // Patchs (même style que les titres de section du site)
  + ".ebs-cib{width:100%;text-align:center;padding:44px 18px 22px}"
  + ".ebs-cib h2{font-family:'Montserrat',sans-serif;font-size:24px;font-weight:800;letter-spacing:.02em;text-transform:uppercase;margin:0;color:#000}"
  + ".ebs-cib span{display:block;font-size:11px;font-weight:400;letter-spacing:.2em;text-transform:uppercase;margin-top:10px}"
  + ".ebs-cib p{font-size:12.5px;font-weight:300;opacity:.7;margin:10px 0 0}"
  // Ordinateur
  + "@media (min-width:900px){"
  +   ".ebs-in{max-width:1080px;margin:0 auto}"
  +   ".ebs-rail{right:18px}"
  +   ".ebs-chips{flex-wrap:wrap;justify-content:center;overflow:visible;margin:0;padding:0}"
  +   ".ebs-slot .ebs-cap,.ebs-compte{text-align:center}"
  +   ".ebs-flow{max-width:1080px;margin:8px auto 0}"
  +   ".ebs-card{width:25%;padding:0 9px 40px}"
  +   ".ebs-amb img{height:520px;object-fit:cover}"
  +   ".ebs-cof .ebs-card{width:25%}"
  + "}";
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function src(u, w){ if(!u) return ''; if(u.indexOf('cdn.shopify.com') < 0) return u; return u + (u.indexOf('?') < 0 ? '?' : '&') + 'width=' + w + '&eb=' + REGLAGES.versionPhotos; }
  function prix(id){ var p = window.EB_PRODUITS && window.EB_PRODUITS[id]; return (p && p.prix) || SOINS[id].prix; }

  function vignette(id, etape){
    var s = SOINS[id]; if(!s) return '';
    return '<a class="ebs-card" href="' + esc(REGLAGES.lienFiche + id) + '" data-fiche="' + esc(id) + '" data-b="' + esc(s.besoins.join(' ')) + '" data-e="' + (etape ? etape.num : '') + '">'
      + '<div class="ebs-ph"><img src="' + esc(src(s.photo, 700)) + '" data-id="' + esc(id) + '" alt="' + esc(s.alt) + '" loading="lazy" decoding="async"></div>'
      + (etape ? '<span class="ebs-num"><i style="background:' + etape.couleur + '"></i>' + etape.num + '</span>' : '')
      + '<div class="ebs-tx"><h3>' + esc(s.nom) + '</h3><span class="a">' + esc(s.actifs) + '</span><span class="l">' + esc(s.ligne) + '</span><span class="p" data-prix="' + esc(id) + '">' + esc(prix(id)) + ' – ' + esc(s.taille) + '</span></div>'
      + '</a>';
  }

  // Texte d'introduction : écrit directement dans l'embed Carrd (lisible par Google), repris ici avec un « + »
  var intro = root.querySelector('.ebs-intro');
  var h = intro ? '<div class="ebs-in"><div class="ebs-txt"><div class="ebs-plein">' + intro.innerHTML + '</div><p class="ebs-court"></p></div></div>' : '';
  h += '<div class="ebs-slot"><div class="ebs-bar"><div class="ebs-in"><p class="ebs-cap">VOTRE BESOIN</p><div class="ebs-chips" role="group" aria-label="Filtrer les soins par besoin">'
    + '<button type="button" class="on" data-id="">Tout voir</button>'
    + BESOINS.map(function(b){ return '<button type="button" data-id="' + b.id + '">' + esc(b.nom) + '</button>'; }).join('')
    + '</div><div class="ebs-compte" aria-live="polite"></div></div></div></div>';
  h += '<div class="ebs-flow">';
  ETAPES.forEach(function(e){
    h += '<section class="ebs-h" data-h="' + e.num + '"><div><i class="ebs-sq" style="background:' + e.couleur + '"></i><h2>Étape ' + e.num + ' · ' + esc(e.titre) + '</h2></div><p>' + esc(e.texte) + '</p></section>';
    h += '<div class="ebs-grp">' + e.soins.map(function(id){ return vignette(id, e); }).join('') + '</div>';
    if(e.ambiance && e.ambiance.photo){
      h += '<figure class="ebs-amb"><img src="' + esc(src(e.ambiance.photo, 1200)) + '" alt="' + esc(e.ambiance.alt) + '" loading="lazy" decoding="async" style="object-position:' + esc(e.ambiance.cadrage || '50% 50%') + '"></figure>';
    }
  });
  if(REGLAGES.pontBalance) h += '<div class="ebs-pont" aria-live="polite"></div>';
  if(SOINS[COFFRET.soin]) h += '<div class="ebs-cof"><span class="ebs-sur">' + esc(COFFRET.surtitre) + '</span>' + vignette(COFFRET.soin, null) + '</div>';
  h += '<div class="ebs-cib" id="ebs-cibles"><h2>' + esc(CIBLES.titre) + '</h2><span>' + esc(CIBLES.sousTitre) + '</span><p>' + esc(CIBLES.texte) + '</p></div>';
  h += CIBLES.soins.map(function(id){ return vignette(id, null); }).join('');
  h += '</div>';
  root.innerHTML = h;

  var cards = root.querySelectorAll('.ebs-card');

  // ── Photos : fondues dans le fond du site, même échelle, même ligne de sol ──
  var FOND = (function(c){ c = c.replace('#', ''); return [0, 2, 4].map(function(i){ return parseInt(c.substr(i, 2), 16); }); })(REGLAGES.fondSite);
  var CW = 600, CH = 800, SOL = CH * .86, PXCM = CH * .66 / 14.5;
  function retravailler(img){
    var s = SOINS[img.getAttribute('data-id')], url = src(s.photo, 700);
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
      for(xx = 0; xx < w; xx++) if(col[xx] > h * .12){ if(x0 < 0) x0 = xx; x1 = xx; }
      var y0 = -1, y1 = -1;
      if(x0 >= 0 && x1 - x0 > w * .1){
        var seuil = Math.max(2, (x1 - x0) * .04);
        for(y = 0; y < h; y++){ var n = 0; for(xx = x0; xx <= x1; xx++) n += dif[y * w + xx]; if(n >= seuil){ if(y0 < 0) y0 = y; y1 = y; } }
      }
      // 4. bords fondus (l'ombre s'efface doucement au lieu d'être coupée)
      x.globalCompositeOperation = 'destination-in';
      var g = x.createLinearGradient(0, 0, w, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(.14, '#000'); g.addColorStop(.86, '#000'); g.addColorStop(1, 'rgba(0,0,0,0)');
      x.fillStyle = g; x.fillRect(0, 0, w, h);
      g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(.08, '#000'); g.addColorStop(.92, '#000'); g.addColorStop(1, 'rgba(0,0,0,0)');
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
  var imgs = root.querySelectorAll('.ebs-ph img');
  if('IntersectionObserver' in window && window.fetch && window.createImageBitmap){
    var io = new IntersectionObserver(function(en){ en.forEach(function(e){ if(e.isIntersecting){ io.unobserve(e.target); retravailler(e.target); } }); }, { rootMargin: '800px 0px' });
    imgs.forEach(function(im){ io.observe(im); });
  } else imgs.forEach(function(im){ im.classList.add('brut'); });
  // Téléphone : 4 lignes, puis « … + » à la fin de la phrase ; ouvert : « − » à la fin du texte
  var txt = root.querySelector('.ebs-txt');
  if(txt){
    var plein = txt.querySelector('.ebs-plein'), court = txt.querySelector('.ebs-court');
    var mots = plein.textContent.replace(/\s+/g, ' ').trim().split(' ');
    var moins = document.createElement('button'); moins.type = 'button'; moins.className = 'ebs-plus'; moins.textContent = '−'; moins.setAttribute('aria-label', 'Réduire le texte');
    var dernier = plein.querySelector('p:last-child') || plein; dernier.appendChild(document.createTextNode('\u00a0')); dernier.appendChild(moins);
    var largeur = 0;
    function couper(){
      if(window.innerWidth >= 900){ txt.classList.remove('coupe'); moins.style.display = 'none'; return; }
      moins.style.display = '';
      if(txt.clientWidth === largeur) return; largeur = txt.clientWidth;
      txt.classList.add('coupe'); var ouvert = txt.classList.contains('ouvert'); txt.classList.remove('ouvert');
      var lh = parseFloat(getComputedStyle(court).lineHeight) || 27.5, max = lh * 4 + 2;
      function essai(n){ court.innerHTML = esc(mots.slice(0, n).join(' ')) + '…\u00a0<button type="button" class="ebs-plus" aria-label="Lire la suite">+</button>'; return court.offsetHeight <= max; }
      court.innerHTML = '';
      // le texte entier tient-il en 4 lignes ? alors pas de « + »
      txt.classList.remove('coupe');
      if(plein.offsetHeight <= max + lh){ txt.classList.remove('coupe'); moins.style.display = 'none'; return; }
      txt.classList.add('coupe');
      var a = 1, b = mots.length - 1;
      while(a < b){ var m = Math.ceil((a + b) / 2); if(essai(m)) a = m; else b = m - 1; }
      essai(a);
      if(ouvert) txt.classList.add('ouvert');
    }
    txt.addEventListener('click', function(e){
      var b = e.target.closest('.ebs-plus'); if(!b) return;
      var o = txt.classList.toggle('ouvert');
      if(!o){ var r = txt.getBoundingClientRect(); if(r.top < REGLAGES.espaceMenu) window.scrollTo({ top: window.scrollY + r.top - REGLAGES.espaceMenu - 20, behavior: 'smooth' }); }
    });
    couper();
    window.addEventListener('resize', couper);
    if(document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ largeur = 0; couper(); });
  }
  var pont = root.querySelector('.ebs-pont'), compte = root.querySelector('.ebs-compte');

  // id = besoin choisi ('' = tout voir)
  function filtrer(id, defiler){
    root.querySelectorAll('.ebs-chips button').forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-id') === id); });
    var actif = !!id, n = 0, premiere = null;
    root.classList.toggle('filtre', actif);
    cards.forEach(function(c){
      var ok = !id || (' ' + c.getAttribute('data-b') + ' ').indexOf(' ' + id + ' ') >= 0;
      c.classList.toggle('off', actif && !ok);
      if(actif && ok){ n++; if(!premiere) premiere = c; }
    });
    // un titre d'étape n'apparaît que si l'étape a au moins un soin allumé
    root.querySelectorAll('.ebs-h').forEach(function(t){
      var num = t.getAttribute('data-h'), plein = false;
      cards.forEach(function(c){ if(c.getAttribute('data-e') === num && !c.classList.contains('off')) plein = true; });
      t.classList.toggle('vide', !plein);
    });
    compte.textContent = !actif ? '' : (n + (n > 1 ? ' soins' : ' soin') + ' pour « ' + NOMS[id] + ' »');
    if(pont){
      if(id && PONT[id]){ pont.innerHTML = PONT[id] + '<br><a href="' + esc(REGLAGES.lienBalance) + '">Découvrir Balance</a>'; pont.classList.add('on'); }
      else pont.classList.remove('on');
    }
    if(defiler && premiere){
      setTimeout(function(){
        var r = premiere.getBoundingClientRect(), haut = REGLAGES.espaceMenu + 150;
        if(r.top < haut || r.top > window.innerHeight * .7) window.scrollTo({ top: window.scrollY + r.top - haut, behavior: 'smooth' });
      }, 350);
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

  // Barre des besoins collée sous le menu
  var slot = root.querySelector('.ebs-slot'), bar = root.querySelector('.ebs-bar'), fin = root.querySelector('.ebs-cib');
  function coller(){
    var r = slot.getBoundingClientRect(), f = fin.getBoundingClientRect();
    var on = r.top < REGLAGES.espaceMenu && f.top > REGLAGES.espaceMenu + 120;
    if(on && !bar.classList.contains('fixe')){ slot.style.height = bar.offsetHeight + 'px'; bar.style.top = REGLAGES.espaceMenu + 'px'; bar.classList.add('fixe'); }
    else if(!on && bar.classList.contains('fixe')){ bar.classList.remove('fixe'); bar.style.top = ''; slot.style.height = ''; }
  }
  window.addEventListener('scroll', coller, { passive: true });
  window.addEventListener('resize', coller);
  coller();

  // ── L'échelle à curseur : suit la lecture, et emmène à l'étape choisie ──
  var rail = document.createElement('div');
  rail.className = 'ebs-rail'; rail.setAttribute('aria-hidden', 'true');
  rail.innerHTML = '<i class="g"></i><i class="c"></i><div class="lab"></div>';
  document.body.appendChild(rail);
  var curseur = rail.querySelector('.c'), lab = rail.querySelector('.lab'), flow = root.querySelector('.ebs-flow');
  var HAUT_RAIL = 220, actuelle = -1, minuterie = null, glisse = false;
  function premiereDe(i){ return root.querySelector('.ebs-card[data-e="' + ETAPES[i].num + '"]'); }
  function placer(i, montrer){
    var pos = ((i + .5) / ETAPES.length * 100) + '%';
    curseur.style.top = pos; lab.style.top = pos;
    // étiquette à la couleur de l'étape, légèrement transparente
    var cc = ETAPES[i].couleur.replace('#', ''), rgb = [0, 2, 4].map(function(k){ return parseInt(cc.substr(k, 2), 16); });
    // texte foncé ou clair : celui qui se lit le mieux sur la couleur (contraste calculé)
    function lum(c){ return c.map(function(v){ v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }).reduce(function(t, v, n){ return t + v * [.2126, .7152, .0722][n]; }, 0); }
    var L = lum(rgb), fonce = (L + .05) / (lum([58, 26, 18]) + .05), clairC = (lum([251, 246, 241]) + .05) / (L + .05);
    lab.style.background = 'rgba(' + rgb.join(',') + ',.9)';
    lab.style.color = fonce >= clairC ? '#3a1a12' : '#fbf6f1';
    lab.innerHTML = 'Étape ' + ETAPES[i].num + ' · ' + esc(ETAPES[i].titre) + '<small>' + esc(ETAPES[i].texte) + '</small>';
    if(montrer){
      rail.classList.add('lb'); clearTimeout(minuterie);
      if(!glisse) minuterie = setTimeout(function(){ rail.classList.remove('lb'); }, 2000);
    }
  }
  function suivre(){
    var barre = bar.classList.contains('fixe') ? bar.offsetHeight : 0;
    rail.style.top = (REGLAGES.espaceMenu + barre + 16) + 'px';
    rail.style.height = HAUT_RAIL + 'px';
    var f = flow.getBoundingClientRect(), fin5 = root.querySelector('.ebs-cof') || fin;
    var visible = bar.classList.contains('fixe') && f.top < window.innerHeight * .55 && fin5.getBoundingClientRect().top > REGLAGES.espaceMenu + barre + HAUT_RAIL * .6;
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
    if(c){
      var barre = bar.classList.contains('fixe') ? bar.offsetHeight : 70;
      window.scrollTo({ top: window.scrollY + c.getBoundingClientRect().top - REGLAGES.espaceMenu - barre - 20, behavior: 'smooth' });
    }
    clearTimeout(minuterie); minuterie = setTimeout(function(){ rail.classList.remove('lb'); }, 2000);
  }
  rail.addEventListener('pointerup', lacher);
  rail.addEventListener('pointercancel', lacher);
  window.addEventListener('scroll', suivre, { passive: true });
  window.addEventListener('resize', suivre);
  suivre();

  window.addEventListener('load', function(){
    root.querySelectorAll('[data-prix]').forEach(function(p){ var id = p.getAttribute('data-prix'); p.textContent = prix(id) + ' – ' + SOINS[id].taille; });
  });
})();
