/* © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite. */
/* ═══════════════════════════════════════════════════════════════════════
   ELKHA.B — ELLES EN PARLENT (elles-en-parlent-engine.js) — site « Leur expérience »
   • Les vidéos en carrousels de 4 au maximum (on fait glisser sur téléphone)
   • Entre deux carrousels : une collaboratrice mise en avant (vedette), avec sa grande vidéo
     et toutes ses autres vidéos en miniatures, l'étape écrite sur chaque miniature
   • Au clic sur une vidéo d'un carrousel : panneau avec la vidéo, son texte et ses soins
   • « Voir le soin » ouvre la fiche du soin sur place (ajout au panier possible)
   Dans Carrd, la page contient un seul embed :
     <div id="eb-elles"></div>
     <script src="https://elkhabskincare.github.io/elkhab-site/elles-en-parlent-engine.js?v=1"></script>
   ───────────────────────────────────────────────────────────────────────
   ✏️ POUR AJOUTER OU MODIFIER UNE COLLABORATRICE, ON NE TOUCHE QU'À LA PARTIE « RÉGLAGES »
   ═══════════════════════════════════════════════════════════════════════ */
(function(){

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ✏️ RÉGLAGES                                                          │
   └─────────────────────────────────────────────────────────────────────┘ */

// Le titre « Elles en parlent » est dans la bannière (code banniere-experience-a-coller.txt) :
// ici, laisser surtitre, titre et intro vides pour ne pas l'avoir en double.
var PAGE = {
  surtitre: "",
  titre:    "",
  intro:    "",
  mention:  "Nos collaboratrices ont reçu les soins pour les tester. Elles ne sont pas rémunérées et leurs avis sont libres."
};

// FILTRES (toujours affichés) et message quand une gamme n'a pas encore de vidéo
var FILTRES = ["Toutes", "Bloom", "Balance", "Coffrets"];
var BIENTOT = {
  Toutes:   "Les premières expériences arrivent très bientôt.",
  Bloom:    "Les premières expériences Bloom arrivent très bientôt.",
  Balance:  "Les premières expériences Balance arrivent très bientôt.",
  Coffrets: "Les premières expériences de nos coffrets des fêtes arrivent très bientôt."
};

// SECTION « DEVENIR AMBASSADRICE » (en bas de page) — le bouton « code » ouvre l'espace ambassadrice
var AMBASSADRICE = {
  surtitre: "Vous aussi ?",
  titre:    "Devenir ambassadrice",
  texte:    "Vous créez du contenu autour du soin, de la beauté ou du bien-être, et l'univers ELKHA.B vous ressemble ? Présentez-vous et parlez-nous de votre peau.",
  tiktok:   "https://www.tiktok.com/@elkha.b",
  boutonTiktok: "Nous écrire sur TikTok",
  boutonCode:   "J'ai reçu un code",
  note:     "Votre espace ambassadrice s'ouvre avec votre code personnel."
};

// COLLABORATRICES — dans l'ordre d'affichage.
//   prenom   : son prénom
//   gamme    : "Bloom", "Balance" ou "Coffrets" (sert aux filtres et à la couleur)
//   vedette  : true pour la mettre en avant entre deux carrousels (grande vidéo + miniatures)
//   soin     : le ou les soins testés, en toutes lettres
//   soins    : les identifiants des fiches de ces soins (pour « Voir le soin »)
//   accroche : une phrase courte, affichée sur sa vidéo (et en grand pour une vedette)
//   texte    : son retour, entre les accents graves ` ` (gras : <strong>passage</strong>)
//   photo    : lien de sa photo (image de la vidéo dans le carrousel) ; vide = image de YouTube
//   videos   : une ligne par vidéo : identifiant YouTube, étape (écrite sur la miniature),
//              image (facultatif : l'image choisie pour cette miniature)
// Les carrousels prennent les collaboratrices 4 par 4 ; après chaque carrousel vient la
// vedette suivante (dans l'ordre de la liste).
var COLLABORATRICES = [

  { prenom: "Cynthia", gamme: "Bloom", vedette: true,
    soin:   "Luminescence Jour & Lumi-Veil CC Cream",
    soins:  ["luminescence-jour", "lumiveil-cc-cream"],
    accroche: "Dès deux semaines, une peau plus apaisée, hydratée et lumineuse.",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000049a881f4aa797360413e4ae5.png?v=1790834986",
    texte:  `Cynthia partage l’évolution de sa peau. Dès deux semaines, elle constate une peau plus apaisée, hydratée et lumineuse – et ça se voit ! Deux mois plus tard, son expérience révèle une véritable évolution de sa peau.`,
    videos: [ { id: "jAh20El_vsQ", etape: "2 semaines" },
              { id: "-3lgVEAQwaQ", etape: "2 mois" } ] },

  { prenom: "Alexia", gamme: "Bloom",
    soin:   "Lumi-Bloom Niacinamide 5",
    soins:  ["lumibloom-niac-5"],
    accroche: "Une peau plus hydratée et moins de boutons.",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Screenshot_20260813_122336_Studio_2.jpg?v=1790834755",
    texte:  `Alexia a testé Lumi-Bloom Niacinamide 5 et partage son expérience après plusieurs utilisations. Une peau plus hydratée, moins de boutons, mais aussi une amélioration visible de ses taches et cicatrices d’acné.`,
    videos: [ { id: "hKGBeoyF2l0" } ] },

  { prenom: "Laeticia", gamme: "Bloom",
    soin:   "Rituel Luminescence",
    soins:  ["rituel-luminescence"],
    accroche: "Une peau repulpée et incroyablement glowy.",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Screenshot_20260813_121319_Studio_2.jpg?v=1790834834",
    texte:  `Laeticia a intégré le Rituel Luminescence Jour & Nuit à sa routine pour répondre à ses besoins d’hydratation, de confort et d’éclat. Son retour en images laisse parler sa peau : visiblement plus hydratée, repulpée et surtout incroyablement glowy.`,
    videos: [ { id: "Oe8h7fPTp94" }, { id: "8_S3Wi6MADw" } ] },

  { prenom: "Joleene", gamme: "Bloom",
    soin:   "Lumi-Bloom Niacinamide 5",
    soins:  ["lumibloom-niac-5"],
    accroche: "Un teint plus uniforme et des pores floutés.",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Screenshot_20260813_122009_Studio_2.jpg?v=1790834834",
    texte:  `Une belle découverte pour Joleene, qui a adoré intégrer Lumi-Bloom Niacinamide 5 à sa routine. Son retour : un teint plus uniforme, une peau plus lisse et des pores visiblement floutés. Un soin dont elle est devenue fan !`,
    videos: [ { id: "ChnJo1rWTrs" }, { id: "b0wMzaHAHc0" } ] },

  { prenom: "Lorena", gamme: "Bloom",
    soin:   "Lumi-Veil CC Cream",
    soins:  ["lumiveil-cc-cream"],
    accroche: "Un effet floutant, dans un stick si pratique.",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000850c81f4b8b95d2d1b3722a7.png?v=1790834899",
    texte:  `Lorena a adoré découvrir Lumi-Veil CC Cream, notamment pour son format stick pratique, sa protection SPF 30 et sa texture agréable. Elle a également beaucoup apprécié son effet floutant, notamment sur ses petites imperfections, tout en apportant de l’hydratation à sa peau.`,
    videos: [ { id: "St_RfDjWUO8" } ] },

  { prenom: "Amelia", gamme: "Bloom",
    soin:   "Lumi-Bloom Niacinamide 5 & Gelée Lumi-Bloom",
    soins:  ["lumibloom-niac-5", "gelee-lumibloom"],
    accroche: "Une peau apaisée pendant son traitement anti-acné.",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_000000005f9481f48ad49297255e1574.png?v=1790834987",
    texte:  `Confrontée à une peau très sèche, irritée et sujette aux inflammations pendant son traitement anti-acné, Amelia a intégré les soins Lumi-Bloom à sa routine <strong>pendant plus de 2 mois</strong>. Sa peau se retrouve plus apaisée, hydratée et équilibrée, avec une diminution visible des inflammations. Découvrez son avant/après.`,
    videos: [ { id: "njhevy7pWF0" } ] },

  { prenom: "Gabrielle", gamme: "Bloom",
    soin:   "Radiance C Serum",
    soins:  ["radiance-serum"],
    accroche: "Une peau plus lumineuse et éclatante.",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_000000009f7881f49c75311cc9043c02.png?v=1790834899",
    texte:  `Après un mois d’utilisation, Gabrielle a adoré Radiance C Serum, sa texture et sa senteur qu’elle décrit comme « incredible ». Son retour après plusieurs semaines : une peau visiblement plus lumineuse et éclatante.`,
    videos: [ { id: "d4PjUqoH0Ow" } ] },

  { prenom: "Carla", gamme: "Bloom",
    soin:   "Radiance C Serum",
    soins:  ["radiance-serum"],
    accroche: "Une texture légère, une peau hydratée et lumineuse.",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000927c820eb3becfe2972c6776.png?v=1790834756",
    texte:  `Après un mois d’utilisation, Carla a adoré Radiance C Serum pour sa texture légère, sa pénétration rapide et son parfum naturel. Quelques gouttes suffisent pour une peau hydratée et lumineuse, avec un flacon qui dure dans le temps.`,
    videos: [ { id: "1D1jkbqN5EY" } ] }

  // ➜ Laurélie (Balance, vedette) : à ajouter quand ses vidéos seront prêtes, sur ce modèle :
  // ,{ prenom: "Laurélie", gamme: "Balance", vedette: true,
  //    soin: "Cellular Reveal & Cellular Eye Restore", soins: ["cellular-reveal", "cellular-eye-restore"],
  //    accroche: "…", photo: "", texte: `…`,
  //    videos: [ { id: "…", etape: "Premières impressions" }, { id: "…", etape: "3 semaines" } ] }

];

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ⛔ FIN DES RÉGLAGES — ne rien modifier en dessous                    │
   └─────────────────────────────────────────────────────────────────────┘ */

if(window.__ebElles) return;
window.__ebElles = true;

var BASE = 'https://elkhabskincare.github.io/elkhab-site/';
var COUL = { Bloom: '#a65a63', Balance: '#5f7149', Coffrets: '#7d1f2b' };
var PAR_RANG = 4;

function esc(t){ return String(t == null ? '' : t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function taille(url, l){ if(!url) return ''; if(!/cdn\.shopify\.com/.test(url)) return url; return url + (url.indexOf('?') > -1 ? '&' : '?') + 'width=' + l; }
function imageVideo(c, v, k){ return (v && v.image) || (k === 0 && c.photo ? taille(c.photo, 600) : 'https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg'); }
function lecteur(id){ return '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&playsinline=1&rel=0&modestbranding=1" title="Vidéo" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>'; }

/* ─── Police (comme les autres sites) ─── */
if(!document.getElementById('eb-montserrat')){
  var lf = document.createElement('link'); lf.id = 'eb-montserrat'; lf.rel = 'stylesheet';
  lf.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap';
  document.head.appendChild(lf);
}

/* ─── Styles ─── */
var css = ''
+ '.ebe{width:100%;font-family:"Montserrat",sans-serif;color:#000;text-align:left;-webkit-tap-highlight-color:transparent}'
+ '.ebe *{box-sizing:border-box}'
+ '.ebe-tete{text-align:center;padding:26px 16px 0}'
+ '.ebe-sur{font-size:10px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;opacity:.6}'
+ '.ebe-h1{font-size:clamp(22px,4.2vw,32px);font-weight:800;letter-spacing:.12em;text-transform:uppercase;margin:8px 0 10px;line-height:1.15}'
+ '.ebe-intro{font-size:13.5px;font-weight:300;margin:0}'
+ '.ebe-mention{font-size:11px;font-weight:300;font-style:italic;opacity:.65;max-width:520px;margin:10px auto 0;line-height:1.55}'
+ '.ebe-filtres{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:20px 0 4px}'
+ '.ebe-filtre{font:600 10.5px "Montserrat",sans-serif;letter-spacing:.1em;text-transform:uppercase;border:1px solid #000;background:none;color:#000;padding:8px 14px;cursor:pointer}'
+ '.ebe-filtre.on{background:#000;color:#f5f4f0}'
+ '@media (max-width:480px){.ebe-filtres{flex-wrap:nowrap;gap:6px}.ebe-filtre{font-size:9.5px;letter-spacing:.08em;padding:8px 11px}}'
/* Carrousel */
+ '.ebe-rang{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:22px 16px 6px;margin:0}'
+ '.ebe-rang::-webkit-scrollbar{display:none}'
+ '.ebe-carte{flex:0 0 44%;max-width:260px;scroll-snap-align:start;position:relative;aspect-ratio:9/16;border-radius:12px;overflow:hidden;border:0;padding:0;cursor:pointer;background:#ddd2c4;text-align:left;font:inherit;color:#f5f4f0}'
+ '.ebe-carte img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .7s ease}'
+ '.ebe-carte:hover img{transform:scale(1.04)}'
+ '.ebe-bas{position:absolute;left:0;right:0;bottom:0;padding:56px 13px 13px;background:linear-gradient(transparent,rgba(0,0,0,.62));color:#f5f4f0;pointer-events:none}'
+ '.ebe-bas b{display:block;font-size:11.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase}'
+ '.ebe-bas i{display:block;font-size:12px;font-weight:300;line-height:1.4;margin-top:5px}'
+ '.ebe-play{position:absolute;right:9px;top:9px;width:30px;height:30px;border-radius:50%;background:rgba(245,244,240,.92);pointer-events:none}'
+ '.ebe-play:after{content:"";position:absolute;left:12px;top:9px;border-style:solid;border-width:6px 0 6px 9px;border-color:transparent transparent transparent #000}'
+ '@media (min-width:900px){.ebe-rang{justify-content:center;gap:18px;padding:30px 40px 8px;overflow:visible}.ebe-carte{flex:0 1 250px}}'
/* Vedette */
+ '.ebe-ved{background:#ebe5db;margin:30px 0;padding:24px 16px 26px}'
+ '.ebe-ved-in{max-width:1080px;margin:0 auto}'
+ '.ebe-gamme{font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase}'
+ '.ebe-nom{font-size:21px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;margin:6px 0 3px;line-height:1.2}'
+ '.ebe-soin{font-size:12.5px;opacity:.75;line-height:1.45}'
+ '.ebe-acc{font-size:15.5px;font-weight:300;font-style:italic;line-height:1.5;margin:14px 0 16px}'
+ '.ebe-grille{display:grid;grid-template-columns:minmax(0,1fr) 30%;gap:12px;align-items:start}'
+ '.ebe-grand{position:relative;aspect-ratio:9/16;border-radius:12px;overflow:hidden;background:#d8cdbf}'
+ '.ebe-grand img,.ebe-grand iframe{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border:0}'
+ '.ebe-grand button{position:absolute;inset:0;border:0;padding:0;background:none;cursor:pointer}'
+ '.ebe-gplay{position:absolute;left:50%;top:50%;width:54px;height:54px;margin:-27px 0 0 -27px;border-radius:50%;background:rgba(245,244,240,.92);pointer-events:none}'
+ '.ebe-gplay:after{content:"";position:absolute;left:21px;top:17px;border-style:solid;border-width:10px 0 10px 15px;border-color:transparent transparent transparent #000}'
+ '.ebe-lec{position:absolute;left:0;right:0;bottom:0;padding:46px 14px 14px;background:linear-gradient(transparent,rgba(0,0,0,.6));color:#f5f4f0;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;line-height:1.3;pointer-events:none}'
+ '.ebe-lec small{display:block;font-size:9px;letter-spacing:.18em;opacity:.8;margin-bottom:3px}'
+ '.ebe-minis{display:flex;flex-direction:column;gap:10px;max-height:calc((100vw - 32px - 12px) * .7 * 16 / 9);overflow-y:auto;scrollbar-width:none;padding:3px}'
+ '.ebe-minis::-webkit-scrollbar{display:none}'
+ '.ebe-mini{position:relative;flex:0 0 auto;aspect-ratio:4/5;border-radius:9px;overflow:hidden;border:0;padding:0;cursor:pointer;background:#d8cdbf}'
+ '.ebe-mini img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}'
+ '.ebe-mini.on{outline:2px solid #000;outline-offset:2px}'
+ '.ebe-mini .ebe-play{width:22px;height:22px;right:6px;top:6px}.ebe-mini .ebe-play:after{left:8px;top:6px;border-width:5px 0 5px 7px}'
+ '.ebe-mtxt{position:absolute;left:0;right:0;bottom:0;padding:26px 8px 8px;background:linear-gradient(transparent,rgba(0,0,0,.62));color:#f5f4f0;font-size:9.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;line-height:1.25;text-align:left;pointer-events:none}'
+ '.ebe-texte{font-size:13.5px;font-weight:300;line-height:1.75;margin:18px 0 0}'
+ '.ebe-texte strong{font-weight:600}'
+ '.ebe-soins-t{font-size:10px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;opacity:.65;margin:20px 0 10px}'
+ '.ebe-soins{display:flex;flex-wrap:wrap;gap:10px}'
+ '.ebe-s{display:flex;gap:10px;align-items:center;background:#fff;border:0;border-radius:10px;padding:7px 14px 7px 7px;cursor:pointer;font:inherit;color:#000;text-align:left}'
+ '.ebe-s span.v{width:42px;height:54px;border-radius:7px;background:#ebe5db center/contain no-repeat;flex:0 0 42px}'
+ '.ebe-s b{display:block;font-size:12px;font-weight:600}'
+ '.ebe-s em{font-style:normal;font-size:9.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;border-bottom:1px solid #000}'
+ '@media (min-width:900px){'
+   '.ebe-ved{padding:40px 40px}'
+   '.ebe-ved-in{display:grid;grid-template-columns:300px minmax(0,1fr);grid-template-rows:auto auto 1fr;column-gap:44px;row-gap:0;align-items:start}'
+   '.ebe-grille{display:contents}'
+   '.ebe-grand{grid-column:1;grid-row:1 / span 3}'
+   '.ebe-info1{grid-column:2;grid-row:1}.ebe-minis{grid-column:2;grid-row:2}.ebe-info2{grid-column:2;grid-row:3}'
+   '.ebe-acc{margin-bottom:0}'
+   '.ebe-minis{flex-direction:row;flex-wrap:wrap;max-height:none;overflow:visible;gap:12px;margin-top:20px;align-self:start}'
+   '.ebe-mini{width:104px;aspect-ratio:9/16}'
+   '.ebe-nom{font-size:26px}.ebe-acc{font-size:19px}'
+ '}'
/* Panneau (vidéo d\'un carrousel) */
+ '.ebe-fond{position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden;transition:opacity .3s,visibility .3s}'
+ '.ebe-fond.ouvert{opacity:1;visibility:visible}'
+ '.ebe-pan{position:relative;background:#f5f4f0;width:100%;height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch;font-family:"Montserrat",sans-serif;color:#000}'
+ '.ebe-x{position:fixed;top:14px;right:14px;z-index:3;width:38px;height:38px;border-radius:50%;background:#000;color:#fff;border:0;font-size:22px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center}'
+ '.ebe-pvid{position:relative;background:#111;height:64vh;height:64svh}'
+ '.ebe-pvid .ebe-cadre{position:relative;height:100%;aspect-ratio:9/16;max-width:100%;margin:0 auto}'
+ '.ebe-pvid img,.ebe-pvid iframe{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border:0}'
+ '.ebe-pvid button{position:absolute;inset:0;border:0;padding:0;background:none;cursor:pointer}'
+ '.ebe-ptxt{padding:24px 20px 30px}'
+ '.ebe-nav{display:flex;justify-content:space-between;gap:10px;margin-top:26px;padding-top:18px;border-top:1px solid rgba(0,0,0,.12)}'
+ '.ebe-nav button{background:none;border:0;padding:4px 0;font:700 10.5px "Montserrat",sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#000;cursor:pointer}'
+ '.ebe-nav button[disabled]{opacity:.25;cursor:default}'
+ '@media (min-width:900px){'
+   '.ebe-pan{width:min(980px,calc(100% - 80px));height:min(640px,calc(100% - 80px));display:grid;grid-template-columns:auto minmax(0,1fr);overflow:hidden}'
+   '.ebe-x{position:absolute}'
+   '.ebe-pvid{height:100%}'
+   '.ebe-ptxt{overflow-y:auto;padding:46px 46px 34px;display:flex;flex-direction:column}'
+   '.ebe-nav{margin-top:auto}'
+ '}'
+ 'html.ebe-bloque{overflow:hidden}'
+ '.ebe-vide{text-align:center;font-size:14px;font-weight:300;font-style:italic;opacity:.75;margin:46px 20px 50px;line-height:1.6}'
/* Devenir ambassadrice */
+ '.ebe-amb{background:#141414;color:#f5f4f0;text-align:center;margin:40px 0 0;padding:44px 26px 46px}'
+ '.ebe-amb .ebe-sur{opacity:.6}'
+ '.ebe-amb-t{font-weight:400;font-size:21px;letter-spacing:.3em;padding-left:.3em;text-transform:uppercase;margin:12px 0 0;line-height:1.25}'
+ '.ebe-amb-g{width:90px;height:2px;margin:18px auto 0;background:linear-gradient(90deg,#141414,#e9e3d9 50%,#141414)}'
+ '.ebe-amb-p{font-size:13.5px;font-weight:300;line-height:1.75;opacity:.85;max-width:520px;margin:18px auto 0}'
+ '.ebe-amb-b{display:flex;flex-direction:column;gap:12px;max-width:340px;margin:24px auto 0}'
+ '.ebe-amb-b a,.ebe-amb-b button{display:block;font:700 11px "Montserrat",sans-serif;letter-spacing:.14em;text-transform:uppercase;padding:15px 22px;text-decoration:none;cursor:pointer;transition:transform .2s ease}'
+ '.ebe-amb-b a{background:#f5f4f0;color:#000;border:1px solid #f5f4f0}'
+ '.ebe-amb-b button{background:none;color:#f5f4f0;border:1px solid rgba(245,244,240,.5)}'
+ '.ebe-amb-b a:hover,.ebe-amb-b button:hover{transform:scale(1.03)}'
+ '.ebe-amb small{display:block;font-size:10.5px;font-weight:300;opacity:.55;margin-top:16px}'
+ '@media (min-width:900px){.ebe-amb{padding:64px 40px 66px}.ebe-amb-t{font-size:30px}.ebe-amb-p{font-size:14px}.ebe-amb-b{flex-direction:row;justify-content:center;max-width:none}}';
var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

/* ─── Données des fiches (pour les photos des soins et « Voir le soin ») ─── */
var fichesPretes = false, enAttente = [];
function chargerFiches(){
  var F = ['produits-data-test.js', 'produits-balance-test.js', 'avis-engine.js', 'fiche-engine.js'];
  (function suivant(i){
    if(i >= F.length){ fichesPretes = true; majSoins(); enAttente.splice(0).forEach(function(f){ f(); }); return; }
    if(document.querySelector('script[src*="' + F[i] + '"]')) return suivant(i + 1);
    var s = document.createElement('script'); s.src = BASE + F[i];
    s.onload = s.onerror = function(){ suivant(i + 1); };
    document.body.appendChild(s);
  })(0);
}
function produit(id){ return window.EB_PRODUITS && window.EB_PRODUITS[id]; }
function photoSoin(id){ var p = produit(id); var m = p && p.media; return (m && (m.miniature || (m.images && m.images[0]) || m.image)) || ''; }
function nomSoin(id){ var p = produit(id); return (p && p.nom) || ''; }
function soinsHTML(c){
  if(!c.soins || !c.soins.length) return '';
  return '<div class="ebe-soins-t">' + (c.soins.length > 1 ? 'Ses soins' : 'Son soin') + '</div><div class="ebe-soins">'
    + c.soins.map(function(id){
        return '<button type="button" class="ebe-s" data-ebe-fiche="' + esc(id) + '"><span class="v" data-ebe-photo="' + esc(id) + '"></span>'
          + '<span><b data-ebe-nom="' + esc(id) + '">' + esc(nomSoin(id) || id.replace(/-/g, ' ')) + '</b><em>Voir le soin</em></span></button>';
      }).join('') + '</div>';
}
function majSoins(){
  document.querySelectorAll('[data-ebe-photo]').forEach(function(el){ var u = photoSoin(el.getAttribute('data-ebe-photo')); if(u) el.style.backgroundImage = 'url("' + taille(u, 200) + '")'; });
  document.querySelectorAll('[data-ebe-nom]').forEach(function(el){ var n = nomSoin(el.getAttribute('data-ebe-nom')); if(n) el.textContent = n; });
}
function ouvrirFiche(id){
  function go(){ if(typeof window.ebFicheOpen === 'function' && produit(id)){ fermerPanneau(); window.ebFicheOpen(id); } }
  if(fichesPretes) go(); else enAttente.push(go);
}

/* ─── Construction de la page ─── */
var racine, filtre = 'Toutes', liste = [];
function visibles(){ return COLLABORATRICES.filter(function(c){ return filtre === 'Toutes' || c.gamme === filtre; }); }

function carteHTML(c, i){
  return '<button type="button" class="ebe-carte" data-ebe-ouvrir="' + i + '" aria-label="Voir la vidéo de ' + esc(c.prenom) + '">'
    + '<img src="' + esc(imageVideo(c, c.videos[0], 0)) + '" alt="' + esc(c.prenom) + ', ' + esc(c.soin) + ' ELKHA.B" loading="lazy">'
    + '<span class="ebe-play"></span><span class="ebe-bas"><b>' + esc(c.prenom) + '</b><i>' + esc(c.accroche) + '</i></span></button>';
}
function vedetteHTML(c, i){
  var v0 = c.videos[0];
  var minis = c.videos.map(function(v, k){
    return '<button type="button" class="ebe-mini' + (k === 0 ? ' on' : '') + '" data-ebe-ved="' + i + '" data-ebe-k="' + k + '" aria-label="Vidéo ' + esc(v.etape || (k + 1)) + '">'
      + '<img src="' + esc(imageVideo(c, v, k)) + '" alt="" loading="lazy"><span class="ebe-play"></span>'
      + (v.etape ? '<span class="ebe-mtxt">' + esc(v.etape) + '</span>' : '') + '</button>';
  }).join('');
  return '<section class="ebe-ved" id="ebe-ved-' + i + '"><div class="ebe-ved-in">'
    + '<div class="ebe-info ebe-info1"><div class="ebe-gamme" style="color:' + (COUL[c.gamme] || '#000') + '">' + esc(c.gamme) + '</div>'
    + '<h2 class="ebe-nom">' + esc(c.prenom) + '</h2><div class="ebe-soin">' + esc(c.soin) + '</div>'
    + '<p class="ebe-acc">' + esc(c.accroche) + '</p></div>'
    + '<div class="ebe-grille"><div class="ebe-grand" data-ebe-grand="' + i + '">' + grandHTML(c, 0, false) + '</div>'
    + (c.videos.length > 1 ? '<div class="ebe-minis">' + minis + '</div>' : '') + '</div>'
    + '<div class="ebe-info ebe-info2"><p class="ebe-texte">' + c.texte + '</p>' + soinsHTML(c) + '</div>'
    + '</div></section>';
}
function grandHTML(c, k, joue){
  var v = c.videos[k];
  if(joue) return lecteur(v.id);
  return '<img src="' + esc(imageVideo(c, v, k)) + '" alt="' + esc(c.prenom) + ', ' + esc(c.soin) + ' ELKHA.B"><span class="ebe-gplay"></span>'
    + (v.etape ? '<span class="ebe-lec"><small>À voir</small>' + esc(v.etape) + '</span>' : '')
    + '<button type="button" data-ebe-jouer="' + k + '" aria-label="Lire la vidéo"></button>';
}

function construire(){
  var h = '<div class="ebe-tete">' + (PAGE.surtitre ? '<div class="ebe-sur">' + esc(PAGE.surtitre) + '</div>' : '')
    + (PAGE.titre ? '<h1 class="ebe-h1">' + esc(PAGE.titre) + '</h1>' : '') + (PAGE.intro ? '<p class="ebe-intro">' + esc(PAGE.intro) + '</p>' : '')
    + (PAGE.mention ? '<p class="ebe-mention">' + esc(PAGE.mention) + '</p>' : '');
  // les filtres sont toujours là, même pour une gamme qui n'a pas encore de vidéo
  h += '<div class="ebe-filtres">' + FILTRES.map(function(g){ return '<button type="button" class="ebe-filtre' + (g === filtre ? ' on' : '') + '" data-ebe-filtre="' + g + '">' + g + '</button>'; }).join('') + '</div>';
  h += '</div>';
  liste = visibles();
  var normales = [], vedettes = [];
  liste.forEach(function(c, i){ (c.vedette ? vedettes : normales).push(i); });
  var r = 0, v = 0;
  if(!liste.length) h += '<p class="ebe-vide">' + esc(BIENTOT[filtre] || BIENTOT.Toutes) + '</p>';
  while(r < normales.length || v < vedettes.length){
    var rang = normales.slice(r, r + PAR_RANG); r += PAR_RANG;
    if(rang.length) h += '<div class="ebe-rang">' + rang.map(function(i){ return carteHTML(liste[i], i); }).join('') + '</div>';
    if(v < vedettes.length){ h += vedetteHTML(liste[vedettes[v]], vedettes[v]); v++; }
  }
  if(AMBASSADRICE && AMBASSADRICE.titre){
    h += '<section class="ebe-amb" id="devenir-ambassadrice"><div class="ebe-sur">' + esc(AMBASSADRICE.surtitre) + '</div>'
      + '<h2 class="ebe-amb-t">' + esc(AMBASSADRICE.titre) + '</h2><div class="ebe-amb-g"></div>'
      + '<p class="ebe-amb-p">' + esc(AMBASSADRICE.texte) + '</p><div class="ebe-amb-b">'
      + '<a href="' + esc(AMBASSADRICE.tiktok) + '" target="_blank" rel="noopener">' + esc(AMBASSADRICE.boutonTiktok) + '</a>'
      + '<button type="button" data-collaboration data-ebe-collab>' + esc(AMBASSADRICE.boutonCode) + '</button></div>'
      + (AMBASSADRICE.note ? '<small>' + esc(AMBASSADRICE.note) + '</small>' : '') + '</section>';
  }
  racine.innerHTML = '<div class="ebe">' + h + '</div>';
  majSoins();
}

/* ─── Vedette : changer de vidéo ─── */
function jouerVedette(i, k){
  var c = liste[i], cadre = racine.querySelector('[data-ebe-grand="' + i + '"]');
  if(!c || !cadre) return;
  cadre.innerHTML = grandHTML(c, k, true);
  racine.querySelectorAll('[data-ebe-ved="' + i + '"]').forEach(function(m){ m.classList.toggle('on', +m.getAttribute('data-ebe-k') === k); });
}

/* ─── Panneau ─── */
var fond, pan, courant = null;
function creerPanneau(){
  if(fond) return;
  fond = document.createElement('div'); fond.className = 'ebe-fond';
  fond.innerHTML = '<div class="ebe-pan" role="dialog" aria-modal="true"></div>';
  document.body.appendChild(fond);
  pan = fond.firstChild;
  fond.addEventListener('click', function(e){
    if(e.target === fond || e.target.closest('.ebe-x')) return fermerPanneau();
    var b;
    if((b = e.target.closest('[data-ebe-pjouer]'))) return dessinerPanneau(true);
    if((b = e.target.closest('[data-ebe-autre]'))){ courant.k = (courant.k + 1) % liste[courant.i].videos.length; return dessinerPanneau(true); }
    if((b = e.target.closest('[data-ebe-aller]'))){ courant = { i: +b.getAttribute('data-ebe-aller'), k: 0 }; return dessinerPanneau(false); }
    if((b = e.target.closest('[data-ebe-fiche]'))) return ouvrirFiche(b.getAttribute('data-ebe-fiche'));
  });
}
function dessinerPanneau(joue){
  var c = liste[courant.i], v = c.videos[courant.k];
  var ordre = []; liste.forEach(function(x, i){ if(!x.vedette) ordre.push(i); });
  var p = ordre.indexOf(courant.i), prec = p > 0 ? ordre[p - 1] : null, suiv = p < ordre.length - 1 ? ordre[p + 1] : null;
  pan.setAttribute('aria-label', 'Expérience de ' + c.prenom);
  pan.innerHTML = '<button type="button" class="ebe-x" aria-label="Fermer">&times;</button>'
    + '<div class="ebe-pvid"><div class="ebe-cadre">'
    + (joue ? lecteur(v.id) : '<img src="' + esc(imageVideo(c, v, courant.k)) + '" alt=""><span class="ebe-gplay"></span><button type="button" data-ebe-pjouer aria-label="Lire la vidéo"></button>')
    + '</div></div>'
    + '<div class="ebe-ptxt"><div class="ebe-gamme" style="color:' + (COUL[c.gamme] || '#000') + '">' + esc(c.gamme) + '</div>'
    + '<div class="ebe-nom">' + esc(c.prenom) + '</div><div class="ebe-soin">' + esc(c.soin) + '</div>'
    + '<p class="ebe-acc">' + esc(c.accroche) + '</p><p class="ebe-texte" style="margin-top:0">' + c.texte + '</p>' + soinsHTML(c)
    + '<div class="ebe-nav"><button type="button"' + (prec === null ? ' disabled' : ' data-ebe-aller="' + prec + '"') + '>‹ Précédente</button>'
    + (c.videos.length > 1 ? '<button type="button" data-ebe-autre>Voir l’autre vidéo</button>' : '')
    + '<button type="button"' + (suiv === null ? ' disabled' : ' data-ebe-aller="' + suiv + '"') + '>Suivante ›</button></div></div>';
  majSoins();
  pan.scrollTop = 0;
}
function arreterVedettes(){
  racine.querySelectorAll('[data-ebe-grand]').forEach(function(g){
    if(!g.querySelector('iframe')) return;
    var i = +g.getAttribute('data-ebe-grand'), on = racine.querySelector('.ebe-mini.on[data-ebe-ved="' + i + '"]');
    g.innerHTML = grandHTML(liste[i], on ? +on.getAttribute('data-ebe-k') : 0, false);
  });
}
function ouvrirPanneau(i){
  arreterVedettes();   // une seule vidéo à la fois
  creerPanneau(); courant = { i: i, k: 0 };
  dessinerPanneau(true);
  document.documentElement.classList.add('ebe-bloque');
  void fond.offsetWidth; fond.classList.add('ouvert');
}
function fermerPanneau(){
  if(!fond || !fond.classList.contains('ouvert')) return;
  fond.classList.remove('ouvert');
  document.documentElement.classList.remove('ebe-bloque');
  setTimeout(function(){ if(!fond.classList.contains('ouvert')) pan.innerHTML = ''; }, 320);   // arrête la vidéo
}
document.addEventListener('keydown', function(e){ if(e.key === 'Escape') fermerPanneau(); });

/* ─── Espace ambassadrice (collab-engine.js, d'habitude déjà chargé par le panier) ─── */
function ouvrirCollab(){
  if(typeof window.ebCollabOpen === 'function') return window.ebCollabOpen();
  var s = document.createElement('script'); s.src = BASE + 'collab-engine.js';
  s.onload = function(){ if(typeof window.ebCollabOpen === 'function') window.ebCollabOpen(); };
  document.body.appendChild(s);
}

/* ─── Démarrage ─── */
function demarrer(){
  racine = document.getElementById('eb-elles');
  if(!racine) return;
  construire();
  racine.addEventListener('click', function(e){
    var b;
    if((b = e.target.closest('[data-ebe-filtre]'))){ filtre = b.getAttribute('data-ebe-filtre'); construire(); return; }
    if((b = e.target.closest('[data-ebe-ouvrir]'))) return ouvrirPanneau(+b.getAttribute('data-ebe-ouvrir'));
    if((b = e.target.closest('[data-ebe-ved]'))) return jouerVedette(+b.getAttribute('data-ebe-ved'), +b.getAttribute('data-ebe-k'));
    if((b = e.target.closest('[data-ebe-jouer]'))){ var g = b.closest('[data-ebe-grand]'); return jouerVedette(+g.getAttribute('data-ebe-grand'), +b.getAttribute('data-ebe-jouer')); }
    if((b = e.target.closest('[data-ebe-fiche]'))) return ouvrirFiche(b.getAttribute('data-ebe-fiche'));
    if((b = e.target.closest('[data-ebe-collab]'))) return ouvrirCollab();
  });
  if(document.readyState === 'complete') chargerFiches(); else window.addEventListener('load', chargerFiches);
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer); else demarrer();

})();
