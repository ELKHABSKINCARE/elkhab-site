/* © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite. */
/* ═══════════════════════════════════════════════════════════════════════
   ELKHA.B — JOURNAL (journal-engine-test.js : nouvelle version, cartes « fiches »)
   • Page d'accueil du Journal : À la une, rubriques, cartes « fiches » beiges (monogramme E.B)
   • Carte d'identité animée en haut de chaque article + fondu du texte
   • Temps de lecture calculé tout seul à partir du texte de l'article
   • Bouton Fermer des articles
   ───────────────────────────────────────────────────────────────────────
   ✏️ POUR MODIFIER LE JOURNAL, ON NE TOUCHE QU'À LA PARTIE « RÉGLAGES »
   ═══════════════════════════════════════════════════════════════════════ */
(function(){

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ✏️ RÉGLAGES                                                          │
   └─────────────────────────────────────────────────────────────────────┘ */

// ★ ARTICLE À LA UNE : mets ici l'identifiant de l'article (voir la liste ci-dessous)
//   Sa photo est celle que tu as mise pour cet article dans la liste ARTICLES.
var A_LA_UNE = "article-peau-deshydratee";

// BANNIÈRE DU HAUT DU JOURNAL : cachée quand un article est ouvert,
// pour que la cliente voie la bannière de l'article glisser.
// Repérée automatiquement (tout ce qui est au-dessus de la première section).
// Facultatif : si un élément Carrd porte cet ID, c'est lui qui sera caché à la place.
var BANNIERE_DU_SITE = "banniere-journal";

// SECTIONS DU JOURNAL, dans l'ordre d'affichage
var SECTIONS = [
  { cle: "actifs",  nom: "Actifs" },
  { cle: "besoins", nom: "Besoins de la peau" },
  { cle: "routine", nom: "Routine" }
];

// ARTICLES — un bloc par article, dans l'ordre d'affichage
//   id      : identifiant de la section de l'article dans Carrd
//   section : actifs, besoins ou routine (ou "" pour ne pas l'afficher en carte)
//   titre   : affiché en majuscules dans la bannière de l'article
//   question: la phrase sous le titre
//   photo   : 📷 lien de la photo de la carte, au format PORTRAIT (4:5, comme sur Instagram)
//   gamme   : (facultatif) "bloom" ou "balance" si l'article parle d'abord d'une gamme
//             → le petit point et le mot de la gamme prennent sa couleur sur la carte
//   diagnostic : (facultatif) ajoute le bloc noir « diagnostic » à la fin de l'article
//                diagnostic: true                → phrase standard
//                diagnostic: "Ta question ici"   → ta question en grand, puis la phrase standard
var ARTICLES = [
  { id: "article-vitaminec",           section: "actifs",  gamme: "bloom", titre: "Vitamine C",                 question: "Pourquoi est-elle devenue incontournable en skincare ?",
    photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Serum_eclat_Bloom_et_citron.png?v=1791354955" },
  { id: "article-niacinamide",         section: "actifs",  gamme: "bloom", titre: "Niacinamide",                question: "Pourquoi tout le monde en parle ?",
    photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Gouttes_de_verre_sur_creme_pale.png?v=1791355188" },
  { id: "article-acide-hyaluronique",  section: "actifs",  titre: "Acide hyaluronique",         question: "Hydrate-t-il vraiment ?",
    photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Design_sans_titre_4.jpg?v=1791354662" },
  { id: "article-peau-qui-tiraille",   section: "besoins", titre: "Peau qui tiraille",          question: "Manque de nutrition ou d'hydratation ?",
    photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/creme_visage_femme.jpg?v=1791356338" },
  { id: "article-teint-terne",         section: "besoins", titre: "Teint terne",                question: "Pourquoi la peau perd son éclat ?",
    photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Lumi_Eyes_gris_2.png?v=1791354936" },
  { id: "article-naturel-synthetique", section: "besoins", titre: "Naturel ou synthétique",     question: "Qu'est-ce qui est vraiment mieux pour votre peau ?",
   diagnostic: true, 
   photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Lumi_Eyes_gris_7.png?v=1791356237" },
  { id: "article-routine-matin",       section: "routine", titre: "Routine du matin",           question: "Dans quel ordre appliquer ses soins ?",
    photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Lumi_Eyes_gris_6.png?v=1791356237" },
  { id: "produits-routine",            section: "routine", titre: "Moins, mais mieux",          question: "Faut-il vraiment autant de produits dans sa routine ?",
    photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Lumi_Eyes_gris_8.png?v=1791356236" },
  // Article seulement à la une pour l'instant (pas de carte) : étiquette « Besoins de la peau »
  { id: "article-peau-deshydratee",    section: "",        etiquette: "Besoins de la peau",
    titre: "Peau sèche ou déshydratée", question: "Comment faire la différence ?",
    diagnostic: "Peau sèche, déshydratée… ou les deux ?",
    photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Lumi_Eyes_gris_1.png?v=1791354936" }
];

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ⛔ NE RIEN MODIFIER EN DESSOUS                                        │
   └─────────────────────────────────────────────────────────────────────┘ */

if(window.ebJournalCharge) return;
window.ebJournalCharge = true;

var CSS = ""
/* Accueil du Journal */
+ ".ebj{container-type:inline-size;font-family:'Montserrat',sans-serif;color:#141414;width:100vw;max-width:none;margin:0 0 0 calc(50% - 50vw);padding:0 0 30px;box-sizing:border-box;-webkit-tap-highlight-color:transparent;text-align:left}"
+ ".ebj *{box-sizing:border-box}"
+ ".ebj a{color:#141414;text-decoration:none}"
+ ".ebj input{position:absolute;opacity:0;pointer-events:none;width:0;height:0}"
/* Carte « fiche » : beige nacré, vagues fines, monogramme E.B embossé */
+ ".ebjc{position:relative;display:flex;flex-direction:column;border-radius:16px;overflow:hidden;padding:18px 20px 20px;background:linear-gradient(135deg,#faf8f4 0%,#f3eee6 40%,#e9e1d4 75%,#ddd2c1 100%);border:1px solid rgba(20,20,20,.1);box-shadow:0 16px 36px rgba(60,40,20,.14);transition:transform .35s ease,box-shadow .35s ease}"
+ ".ebjc:after{content:'';position:absolute;inset:0;background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.5) 45%,transparent 58%);mix-blend-mode:soft-light;pointer-events:none}"
+ ".ebj a.ebjc:hover{transform:translateY(-4px);box-shadow:0 22px 44px rgba(60,40,20,.18)}"
+ ".ebjc-vg{position:absolute;left:0;right:0;width:100%;top:34px;height:90px;pointer-events:none;opacity:.55}"
+ ".ebjc-top{position:relative;display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px}"
+ ".ebjc-k{white-space:nowrap;font-size:8px;font-weight:700;letter-spacing:.34em;color:rgba(20,20,20,.55);padding-top:8px}"
+ ".ebjc-mono{width:46px;height:58px;flex:none;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:2px;box-shadow:inset 1px 1px 0 rgba(110,85,60,.38),inset -1px -1px 0 rgba(255,255,255,.95),1px 1px 0 rgba(255,255,255,.95),-1px -1px 0 rgba(110,85,60,.25)}"
+ ".ebjc-mono span,.ebjc-mono small{color:transparent;background-image:linear-gradient(180deg,#fbf9f5,#e9dfd0 55%,#d9cbb6);-webkit-background-clip:text;background-clip:text;filter:drop-shadow(1px 1px 0 rgba(110,85,60,.42)) drop-shadow(-1px -1px 0 rgba(255,255,255,.95))}"
+ ".ebjc-mono span{font-size:20px;font-weight:300;line-height:1}.ebjc-mono b{font-weight:800}"
+ ".ebjc-mono small{font-size:4.5px;font-weight:700;letter-spacing:.5em;padding-left:.5em;margin-top:5px}"
+ ".ebjc-ph{position:relative;aspect-ratio:4/5;border-radius:11px;overflow:hidden;background:#e6ddd0;box-shadow:0 8px 20px rgba(40,25,15,.14);margin-bottom:16px}"
+ ".ebjc-ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .7s ease}"
+ ".ebj a.ebjc:hover .ebjc-ph img{transform:scale(1.04)}"
+ ".ebjc-n{position:relative;font-size:8.5px;font-weight:700;letter-spacing:.26em;text-transform:uppercase;color:rgba(20,20,20,.55);margin-bottom:6px}"
+ ".ebjc-n em{font-style:normal}.ebjc-n em.bloom{color:#9a4a4c}.ebjc-n em.balance{color:#4f6b2a}"
+ ".ebjc-t{position:relative;font-size:19px;font-weight:800;line-height:1.18;margin:0 0 6px;color:#141414}"
+ ".ebjc-q{position:relative;font-size:12.5px;font-weight:400;line-height:1.5;color:rgba(20,20,20,.75);margin:0 0 16px}"
+ ".ebjc-ok{white-space:nowrap;position:relative;margin-top:auto;display:flex;align-items:center;gap:8px;font-size:8.5px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:#6e5f4e}"
+ ".ebjc-ok i{width:6px;height:6px;border-radius:50%;background:#8a7762;box-shadow:0 0 0 3px rgba(138,119,98,.18);flex:none}"
+ ".ebjc-ok.bloom i{background:#b0675e;box-shadow:0 0 0 3px rgba(176,103,94,.18)}.ebjc-ok.balance i{background:#6f8a2c;box-shadow:0 0 0 3px rgba(111,138,44,.18)}"
/* À la une : la même carte, en grand */
+ ".ebj-une{display:block;padding:0 16px;margin:0 0 40px}"
+ ".ebj-une .ebjc{max-width:260px;margin:0 auto;padding:13px 14px 15px}"
+ ".ebj-une .ebjc-t{font-size:17px}.ebj-une .ebjc-q{font-size:12px}"
+ ".ebj-une .ebjc-ph{width:74%;margin:24px auto 14px}.ebj-une .ebjc-vg{top:34px;height:64px;opacity:.75}"
+ ".ebj-une-tag{display:block;text-align:center;font-size:10px;font-weight:600;letter-spacing:.32em;text-transform:uppercase;color:#8a8580;margin:0 0 16px}"
/* Rubriques : texte fin souligné (pas de pastilles) */
+ ".ebj-filtres{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;padding:0 16px;margin:0 0 34px}"
+ ".ebj-filtres label{cursor:pointer;font-size:10.5px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;padding-bottom:5px;border-bottom:1px solid transparent;transition:border-color .25s ease,opacity .25s ease;opacity:.6}"
+ ".ebj-sec{margin:0 0 40px}"
+ ".ebj-sec-titre{display:flex;align-items:center;gap:16px;font-size:15px;font-weight:700;letter-spacing:.24em;text-transform:uppercase;margin:0 0 18px;padding:0 16px;color:#141414}"
+ ".ebj-sec-titre:after{content:'';flex:1;height:1px;background:#141414;opacity:.25}"
+ "@keyframes ebjFade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}"
+ ".ebj-row{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:6px 16px 26px;scroll-padding:0 16px}"
+ ".ebj-row::-webkit-scrollbar{display:none}"
+ ".ebj-row .ebjc{flex:0 0 min(43%,190px);scroll-snap-align:start;padding:11px 12px 13px;border-radius:13px;box-shadow:0 10px 24px rgba(60,40,20,.13)}"
+ ".ebj-row .ebjc-vg{top:30px;height:56px;opacity:.75}"
+ ".ebj-row .ebjc-top{margin-bottom:10px}"
+ ".ebj-row .ebjc-k{font-size:6px;letter-spacing:.22em;padding-top:5px}"
+ ".ebjc-lire{font-weight:inherit}.ebj-row .ebjc-lire{display:none}"
+ ".ebj-row .ebjc-mono{width:34px;height:43px}.ebj-row .ebjc-mono span{font-size:14.5px}.ebj-row .ebjc-mono small{font-size:3.4px;margin-top:4px}"
+ ".ebj-row .ebjc-ph{width:72%;margin:22px auto 11px;border-radius:8px;box-shadow:0 6px 14px rgba(40,25,15,.12)}"
+ ".ebj-row .ebjc-n{font-size:7px;letter-spacing:.22em;margin-bottom:5px}"
+ ".ebj-row .ebjc-t{font-size:14px;margin-bottom:4px}"
+ ".ebj-row .ebjc-q{font-size:11px;margin-bottom:12px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}"
+ ".ebj-row .ebjc-ok{font-size:7px;letter-spacing:.18em;gap:6px}.ebj-row .ebjc-ok i{width:5px;height:5px}"
+ "@container (min-width:620px){"
+ ".ebj-une{margin-bottom:56px;padding:0 24px}"
+ ".ebj-une .ebjc{max-width:none;width:min(640px,100%);display:grid;grid-template-columns:minmax(180px,220px) 1fr;grid-template-rows:auto 1fr;column-gap:30px;padding:24px 28px 26px}"
+ ".ebj-une .ebjc-top{grid-column:1 / -1}"
+ ".ebj-une .ebjc-ph{grid-row:2;margin:0;width:auto}"
+ ".ebj-une .ebjc-body{justify-content:center}"
+ ".ebj-une .ebjc-t{font-size:24px}.ebj-une .ebjc-q{font-size:14px}"
+ ".ebj-filtres{margin-bottom:46px;gap:30px}"
+ ".ebj-sec{margin-bottom:56px}"
+ ".ebj-sec-titre{padding:0 24px}"
+ ".ebj-row{gap:22px;padding:6px 24px 26px;scroll-padding:0 24px}"
+ ".ebj-row .ebjc{flex:0 0 190px}"
+ "}"
+ "@container (min-width:1000px){.ebj-sec-titre{padding:0 40px}.ebj-row{padding:6px 40px 26px;scroll-padding:0 40px}}"
+ ".ebjc-body{position:relative;display:flex;flex-direction:column;flex:1}"
/* Carte d'identité en haut des articles */
+ "html{overflow-x:clip}"
+ ".ebja{position:relative;width:100vw;margin-left:calc(50% - 50vw);background:#f5f4f0;overflow:hidden;font-family:'Montserrat',sans-serif;color:#141414;padding:44px 16px 40px;margin-bottom:30px;box-sizing:border-box}"
+ ".ebja .ebjc{max-width:560px;margin:0 auto;aspect-ratio:1.586;justify-content:space-between;padding:20px 24px 22px}"
+ ".ebja .ebjc-mid{position:relative;text-align:center}"
+ ".ebja .ebjc-n{margin-bottom:8px}"
+ ".ebja-titre{font-family:'Montserrat',sans-serif;font-size:24px;font-weight:800;line-height:1.15;letter-spacing:.04em;text-transform:uppercase;margin:0 0 8px;color:#141414}"
+ ".ebja-q{font-size:13.5px;font-weight:400;line-height:1.5;margin:0;color:rgba(20,20,20,.75)}"
+ ".ebja .ebjc-ok{margin:0}"
+ "@media (max-width:420px){.ebja .ebjc{aspect-ratio:auto;min-height:230px;gap:16px}.ebja-titre{font-size:20px}}"
+ "@media (min-width:900px){.ebja{padding:80px 40px 70px}.ebja .ebjc{padding:28px 34px 30px}.ebja-titre{font-size:32px}.ebja-q{font-size:16px}}"
/* Animations, rejouées à chaque ouverture d'article */
+ ".ebja.go .ebjc{animation:ebjaCarte .9s cubic-bezier(.22,.8,.24,1) both}"
+ ".ebja.go .ebjc-mid{animation:ebjaUp .8s ease .5s both}"
+ ".ebja.go .ebjc-ok{animation:ebjaUp .7s ease .75s both}"
+ ".ebja.go ~ *{animation:ebjaFade .9s ease .9s both}"
+ "@keyframes ebjaCarte{from{opacity:0;transform:translateY(30px) rotate(-2deg)}to{opacity:1;transform:none}}"
+ "@keyframes ebjaUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}"
+ "@keyframes ebjaFade{from{opacity:0}to{opacity:1}}"
/* Bloc diagnostic en fin d'article */
+ ".ebjd{position:relative;width:100vw;margin:44px 0 10px calc(50% - 50vw);background:#141414;color:#fff;text-align:center;font-family:'Montserrat',sans-serif;padding:60px 28px;box-sizing:border-box}"
+ ".ebjd-in{max-width:620px;margin:0 auto}"
+ ".ebjd-tag{display:block;font-size:10.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;opacity:.5;margin-bottom:18px}"
+ ".ebjd-q{font-size:22px;font-weight:600;line-height:1.35;margin:0 0 10px;color:#fff}"
+ ".ebjd-p{font-size:15px;font-weight:300;line-height:1.6;margin:0 0 28px;opacity:.85}"
+ ".ebjd-btn{display:inline-flex;align-items:center;justify-content:center;background:#fff;color:#000;border:none;border-radius:0;padding:16px 26px;font-family:'Montserrat',sans-serif;font-size:13px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;transition:transform .2s ease;-webkit-tap-highlight-color:transparent}"
+ ".ebjd-btn:hover{transform:scale(1.03)}"
+ "@media (min-width:900px){.ebjd{padding:84px 40px}.ebjd-q{font-size:28px}}"
+ "@media (prefers-reduced-motion:reduce){.ebja.go *,.ebja.go ~ *,.ebjc,.ebjc-ph img{animation:none !important;transition:none !important}}"
/* Bouton Fermer des articles */
+ ".eb-journal-close{position:fixed;top:80px;right:24px;z-index:9999;background:#f5f4f0;border:1px solid rgba(20,20,20,.35);width:38px;height:38px;border-radius:50%;display:none;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:20px;font-weight:300;color:#000;cursor:pointer;transition:transform .2s ease;-webkit-tap-highlight-color:transparent}"
+ ".eb-journal-close.visible{display:flex}"
+ ".eb-journal-close:hover{transform:scale(1.1)}"
+ ".eb-article-ouvert #" + BANNIERE_DU_SITE + ",.eb-article-ouvert .eb-haut-journal,.eb-article-ouvert .eb-cache-article{display:none !important}"
/* Téléphone et tablette : Carrd place l'image du site tout en haut de la page (body::before) — cachée pendant la lecture d'un article */
+ "@media (max-width:980px){html.eb-article-ouvert body::before{display:none !important}}";

/* Filtres : une règle par section */
SECTIONS.forEach(function(s){
  CSS += "#ebj-f-" + s.cle + ":checked ~ .ebj-filtres label[for='ebj-f-" + s.cle + "']{border-bottom-color:#141414;opacity:1}"
      +  "#ebj-f-" + s.cle + ":checked ~ .ebj-secs .ebj-sec:not(.c-" + s.cle + "){display:none}"
      +  "#ebj-f-" + s.cle + ":checked ~ .ebj-secs .c-" + s.cle + "{animation:ebjFade .5s ease both}";
});
CSS += "#ebj-f-tout:checked ~ .ebj-filtres label[for='ebj-f-tout']{border-bottom-color:#141414;opacity:1}"
    +  "#ebj-f-tout:checked ~ .ebj-secs .ebj-sec{animation:ebjFade .5s ease both}";

var st = document.createElement('style');
st.textContent = CSS;
document.head.appendChild(st);

function esc(t){ var d = document.createElement('div'); d.textContent = t || ''; return d.innerHTML; }
// Le point d'interrogation reste collé au dernier mot
function q(t){ return esc(t).replace(/ ([?!:;])/g, '&nbsp;$1'); }
function nomSection(cle){ for(var i = 0; i < SECTIONS.length; i++){ if(SECTIONS[i].cle === cle) return SECTIONS[i].nom; } return ''; }
function etiquette(a){ return a.etiquette || nomSection(a.section); }
function trouverArticle(id){ for(var i = 0; i < ARTICLES.length; i++){ if(ARTICLES[i].id === id) return ARTICLES[i]; } return null; }
// Vagues fines (comme la carte membre), dessinées une seule fois
var VAGUES = (function(){
  var p = '';
  for(var k = 0; k < 22; k++){
    var amp = -24 + k * 48 / 21, pts = [];
    for(var x = -5; x <= 305; x += 6){ pts.push(x + ',' + (45 + amp * Math.sin(2 * Math.PI * x / 300)).toFixed(1)); }
    p += '<polyline points="' + pts.join(' ') + '" fill="none" stroke="#b9a68c" stroke-width=".5"/>';
  }
  return '<svg class="ebjc-vg" viewBox="0 0 300 90" preserveAspectRatio="none" aria-hidden="true">' + p + '</svg>';
})();
var MONO = '<div class="ebjc-mono" aria-hidden="true"><span><b>E</b>.B</span><small>PARIS</small></div>';
function numero(a){
  var n = 0;
  for(var i = 0; i < ARTICLES.length; i++){ n++; if(ARTICLES[i] === a) break; }
  return 'N° ' + (n < 10 ? '0' : '') + n;
}
// Temps de lecture : environ 200 mots par minute, calculé sur le texte de l'article
function lecture(a){
  var sec = sectionDe(a.id); if(!sec) return '';
  var t = (sec.textContent || '').replace(/\s+/g, ' ').trim(); if(!t) return '';
  var m = Math.max(1, Math.round(t.split(' ').length / 200));
  return 'Lecture ' + m + ' min';
}
function gamme(a){ return (a.gamme === 'bloom' || a.gamme === 'balance') ? a.gamme : ''; }
function ligneN(a){
  var g = gamme(a), et = etiquette(a);
  return '<span class="ebjc-n">' + numero(a) + (et ? ' · ' + esc(et) : '') + (g ? '<em class="' + g + '"> · ' + (g === 'bloom' ? 'Bloom' : 'Balance') + '</em>' : '') + '</span>';
}
function ligneOk(a, lien){
  var l = lecture(a);
  var txt = esc(l) + (lien ? '<b class="ebjc-lire">' + (l ? ' · ' : '') + esc(lien) + '</b>' : '');
  return '<span class="ebjc-ok ' + gamme(a) + '"><i></i>' + txt + '</span>';
}
function carte(a, tag){
  return '<' + tag + ' class="ebjc" href="#' + a.id + '">' + VAGUES
    + '<div class="ebjc-top"><span class="ebjc-k">ELKHA.B · JOURNAL</span>' + MONO + '</div>'
    + '<div class="ebjc-ph">' + (a.photo ? '<img src="' + esc(a.photo) + '" alt="' + esc(a.titre) + '" loading="lazy">' : '') + '</div>'
    + '<div class="ebjc-body">' + ligneN(a)
    + '<h4 class="ebjc-t">' + esc(a.titre) + '</h4>'
    + '<p class="ebjc-q">' + q(a.question) + '</p>'
    + ligneOk(a, 'Lire la fiche') + '</div></' + tag + '>';
}

/* ─── PAGE D'ACCUEIL DU JOURNAL ─── */
function construireAccueil(){
  var cibles = document.querySelectorAll('#eb-journal');
  if(!cibles.length) return;
  var html = '<div class="ebj">';
  var une = trouverArticle(A_LA_UNE);
  if(une){ html += '<div class="ebj-une"><span class="ebj-une-tag">À la une</span>' + carte(une, 'a') + '</div>'; }
  html += '<input type="radio" name="ebj-f" id="ebj-f-tout" checked>';
  SECTIONS.forEach(function(s){ html += '<input type="radio" name="ebj-f" id="ebj-f-' + s.cle + '">'; });
  html += '<div class="ebj-filtres"><label for="ebj-f-tout">Tout</label>';
  SECTIONS.forEach(function(s){ html += '<label for="ebj-f-' + s.cle + '">' + esc(s.nom) + '</label>'; });
  html += '</div><div class="ebj-secs">';
  SECTIONS.forEach(function(s){
    var liste = ARTICLES.filter(function(a){ return a.section === s.cle; });
    if(!liste.length) return;
    html += '<div class="ebj-sec c-' + s.cle + '"><h3 class="ebj-sec-titre">' + esc(s.nom) + '</h3><div class="ebj-row">';
    liste.forEach(function(a){ html += carte(a, 'a'); });
    html += '</div></div>';
  });
  html += '</div></div>';
  for(var i = 0; i < cibles.length; i++){ cibles[i].innerHTML = html; }
}

/* ─── CARTES D'IDENTITÉ DES ARTICLES ─── */
function sectionDe(id){ return document.getElementById(id + '-section') || document.querySelector('section#' + id); }
function construireBannieres(){
  ARTICLES.forEach(function(a){
    var sec = sectionDe(a.id);
    if(!sec || sec.querySelector('.ebja')) return;
    var b = document.createElement('div');
    b.className = 'ebja';
    b.setAttribute('data-article', a.id);
    b.innerHTML = '<div class="ebjc">' + VAGUES
      + '<div class="ebjc-top"><span class="ebjc-k">ELKHA.B · JOURNAL</span>' + MONO + '</div>'
      + '<div class="ebjc-mid">' + ligneN(a)
      + '<h1 class="ebja-titre">' + esc(a.titre) + '</h1>'
      + '<p class="ebja-q">' + q(a.question) + '</p></div>'
      + ligneOk(a, '') + '</div>';
    sec.insertBefore(b, sec.firstChild);
    if(a.diagnostic && !sec.querySelector('.ebjd')){
      var d = document.createElement('div');
      d.className = 'ebjd';
      d.innerHTML = '<div class="ebjd-in"><span class="ebjd-tag">Skin ID — ELKHA.B</span>'
        + (typeof a.diagnostic === 'string' ? '<p class="ebjd-q">' + q(a.diagnostic) + '</p><p class="ebjd-p">Votre peau a des choses à vous dire.</p>'
                                             : '<p class="ebjd-q">Votre peau a des choses à vous dire.</p><p class="ebjd-p"></p>')
        + '<button type="button" class="ebjd-btn">Découvrir mon Skin ID</button></div>';
      d.querySelector('.ebjd-btn').addEventListener('click', function(){
        if(typeof window.ebDiagOpen === 'function'){ window.ebDiagOpen(); }
      });
      sec.appendChild(d);
    }
  });
}
// Repère automatiquement la bannière du haut du Journal :
// les éléments Carrd placés au-dessus de la première section (communs à toutes les sections)
var hautMarque = false;
function marquerHaut(){
  if(hautMarque || document.getElementById(BANNIERE_DU_SITE)) return;
  var premier = null;
  for(var i = 0; i < ARTICLES.length && !premier; i++){ premier = sectionDe(ARTICLES[i].id); }
  if(!premier || !premier.parentElement) return;
  hautMarque = true;
  var enfants = premier.parentElement.children;
  for(var j = 0; j < enfants.length; j++){
    var el = enfants[j];
    if(el.tagName === 'SECTION') break;              // on s'arrête à la première section
    if(el.querySelector('section, #eb-journal')) continue;
    el.classList.add('eb-haut-journal');
  }
}

// Sur ordinateur, si le site est en deux parties (texte à gauche, image à droite),
// la bannière prend toute la largeur de la colonne de gauche au lieu de tout l'écran
function ajusterLargeur(){
  var bs = document.querySelectorAll('.ebja, .ebjd, .ebj');
  for(var i = 0; i < bs.length; i++){
    var b = bs[i];
    if(!b.offsetParent) continue;                     // section cachée
    b.style.width = ''; b.style.marginLeft = '';
    var col = null, el = b.parentElement;
    while(el && el !== document.body){
      var r = el.getBoundingClientRect();
      var auBord = r.left <= 2 || r.right >= window.innerWidth - 2;   // colonne collée au bord de l'écran
      if(r.width > 0 && r.width < window.innerWidth * 0.9 && auBord){ col = el; }
      el = el.parentElement;
    }
    if(!col) continue;                                // site sur toute la largeur : rien à changer
    var p = b.parentElement, pr = p.getBoundingClientRect(), ps = getComputedStyle(p);
    var c = col.getBoundingClientRect();
    var L = pr.left + parseFloat(ps.paddingLeft || 0) + parseFloat(ps.borderLeftWidth || 0);
    b.style.width = c.width + 'px';
    b.style.marginLeft = (c.left - L) + 'px';
  }
}
window.addEventListener('resize', ajusterLargeur);

// Sur téléphone, l'image de la mise en page en deux parties passe AU-DESSUS du contenu :
// on cache aussi tout ce qui se trouve au-dessus de l'article (jamais le menu ni les panneaux)
var masqueFait = null;
function masquerAuDessus(id){
  if(id && masqueFait === id) return;                 // déjà fait pour cet article
  var anciens = document.querySelectorAll('.eb-cache-article');
  for(var i = 0; i < anciens.length; i++){ anciens[i].classList.remove('eb-cache-article'); }
  masqueFait = null;
  if(!id) return;
  var sec = sectionDe(id);
  if(!sec || !sec.offsetParent){                      // Carrd n'a pas encore affiché l'article : on réessaie
    setTimeout(function(){ if(location.hash.replace('#','') === id) masquerAuDessus(id); }, 150);
    return;
  }
  masqueFait = id;
  var haut = sec.getBoundingClientRect().top + 1;
  var aCacher = [];
  var el = sec;
  while(el && el.parentElement && el.parentElement !== document.documentElement){
    var parent = el.parentElement;
    for(var j = 0; j < parent.children.length; j++){
      var f = parent.children[j];
      if(f === el || /^(SCRIPT|STYLE|LINK)$/.test(f.tagName)) continue;
      var cs = getComputedStyle(f);
      if(cs.position === 'fixed' || cs.display === 'none') continue;
      if(f.querySelector('section') || f.tagName === 'SECTION') continue;
      if(/eb-|ebFiche|ebCart|ebOverlay/.test((f.className || '') + ' ' + (f.id || '')) ) continue;
      var r = f.getBoundingClientRect();
      if(r.height > 0 && r.bottom <= haut){ aCacher.push(f); }
    }
    if(parent === document.body) break;
    el = parent;
  }
  aCacher.forEach(function(f){ f.classList.add('eb-cache-article'); });
  if(aCacher.length){ window.scrollTo(0, 0); }
}

// Rejoue l'animation à chaque ouverture d'un article
function animer(){
  var h = location.hash.replace('#', '');
  // Article ouvert : on cache la bannière du haut du Journal et on remonte en haut
  var estArticle = !!trouverArticle(h);
  marquerHaut();
  document.documentElement.classList.toggle('eb-article-ouvert', estArticle);
  masquerAuDessus(estArticle ? h : null);
  if(estArticle){ window.scrollTo(0, 0); ajusterLargeur(); setTimeout(ajusterLargeur, 80); setTimeout(ajusterLargeur, 400); }
  var b = document.querySelector('.ebja[data-article="' + h + '"]');
  if(!b) return;
  rejouer(b);
  // Si quelque chose reste au-dessus de la bannière (image du haut sur téléphone),
  // la page remonte jusqu'à la bannière, puis l'animation se rejoue sous les yeux de la cliente
  var touche = false;
  function stop(){ touche = true; }
  window.addEventListener('touchstart', stop, { passive: true, once: true });
  window.addEventListener('wheel', stop, { passive: true, once: true });
  [60, 350, 800].forEach(function(t, i){
    setTimeout(function(){
      if(touche || location.hash.replace('#', '') !== h || !b.offsetParent) return;
      var y = b.getBoundingClientRect().top + window.scrollY;
      if(Math.abs(window.scrollY - y) > 4){
        window.scrollTo({ top: y, behavior: 'instant' });
        if(i === 0) rejouer(b);
      }
    }, t);
  });
}
function rejouer(b){
  b.classList.remove('go');
  void b.offsetWidth;
  b.classList.add('go');
}

/* ─── BOUTON FERMER DES ARTICLES ─── */
function boutonFermer(){
  // Si l'ancien bouton (embed Carrd) est encore sur la page, on le laisse faire
  if(document.getElementById('ebFicheClose')) return;
  var sections = ARTICLES.map(function(a){ return a.id; });
  var FALLBACK_SITE = 'journal';
  var EB_KNOWN = ['accueil','bloom','balance','journal','experience','soins','avis'];
  var STORE_KEY = 'eb_close_stack';
  var btn = document.createElement('div');
  btn.className = 'eb-journal-close';
  btn.innerHTML = '&times;';
  document.body.appendChild(btn);

  function ebP(name){
    if(typeof window.ebGetParam === 'function') return window.ebGetParam(name);
    return new URLSearchParams(window.location.search).get(name);
  }
  function ebGo(site, params, hash){
    if(typeof window.ebNavigate === 'function'){ window.ebNavigate(site, params, hash); }
    else { history.back(); }
  }
  function suivie(h){ return sections.indexOf(h) !== -1; }
  function courant(){ return window.location.hash.replace('#', ''); }
  function replacer(y){
    var agi = false;
    function stop(){ agi = true; }
    ['touchstart','wheel','mousedown','keydown'].forEach(function(evt){ window.addEventListener(evt, stop, { passive: true, once: true }); });
    [50, 150, 300, 500, 800, 1200].forEach(function(t){
      setTimeout(function(){ if(!agi && Math.abs(window.scrollY - y) > 2){ window.scrollTo({ top: y, behavior: 'instant' }); } }, t);
    });
  }
  function charger(){ try { var s = JSON.parse(sessionStorage.getItem(STORE_KEY) || '[]'); return Array.isArray(s) ? s : []; } catch(e){ return []; } }
  function sauver(){ try { sessionStorage.setItem(STORE_KEY, JSON.stringify(pile)); } catch(e){} }

  var pile = charger();
  var arrivee = new URLSearchParams(window.location.search);
  if(arrivee.get('origin') || arrivee.get('from')){ pile = []; }
  else {
    var h0 = courant();
    while(pile.length && pile[pile.length - 1].to !== h0){ pile.pop(); }
    pile.forEach(function(e){ e.live = false; });
  }
  sauver();

  document.addEventListener('click', function(e){
    var lien = e.target.closest && e.target.closest('a[href^="#"]');
    if(!lien) return;
    var cible = lien.getAttribute('href').replace('#', '');
    var de = courant();
    if(suivie(cible) && cible !== de){
      pile.push({ from: de, to: cible, y: Math.round(window.scrollY), live: true });
      sauver();
    }
  }, true);

  function verifier(){
    var h = courant();
    btn.classList.toggle('visible', suivie(h));
    if(pile.length && h === pile[pile.length - 1].from){ pile.pop(); sauver(); }
  }

  btn.addEventListener('click', function(){
    if(pile.length){
      var prev = pile.pop();
      sauver();
      if(prev.live){ history.back(); }
      else { window.location.hash = prev.from ? '#' + prev.from : '#'; }
      replacer(prev.y);
      return;
    }
    var origin = ebP('origin');
    if(origin && EB_KNOWN.indexOf(origin) !== -1){ ebGo(origin, { scrollTo: ebP('pos') }, ebP('h')); return; }
    ebGo(FALLBACK_SITE);
  });

  verifier();
  window.addEventListener('hashchange', verifier);
}

function demarrer(){
  construireAccueil();
  ajusterLargeur(); setTimeout(ajusterLargeur, 300); setTimeout(ajusterLargeur, 1200);
  construireBannieres();
  boutonFermer();
  animer();
  window.addEventListener('hashchange', function(){ setTimeout(animer, 30); setTimeout(ajusterLargeur, 120); });
}
if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', demarrer); }
else { demarrer(); }
})();
