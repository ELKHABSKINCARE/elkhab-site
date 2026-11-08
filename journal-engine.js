/* © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite. */
/* ═══════════════════════════════════════════════════════════════════════
   ELKHA.B — JOURNAL (journal-engine.js, chargé par le menu du Journal) — version magazine
   • Page d'accueil du Journal : « À la une » sur une bande beige, rubriques, articles en grille (photos en passe-partout)
   • Ouverture de chaque article en double page (titre + photo), lettrine, citation mise en valeur, ligne de lecture
   • Temps de lecture calculé tout seul à partir du texte de l'article
   • Bouton Fermer des articles
   ───────────────────────────────────────────────────────────────────────
   ✏️ POUR MODIFIER LE JOURNAL, ON NE TOUCHE QU'À LA PARTIE « RÉGLAGES »
   ═══════════════════════════════════════════════════════════════════════ */
(function(){
/* ─── ARTICLE OUVERT DANS LE PANNEAU D'UN AUTRE SITE (articles-panneau.js) ───
   Le menu, le bandeau cookies et la newsletter de ce site sont cachés (ceux de la page d'en dessous suffisent),
   la croix referme le panneau, et un lien vers un autre site est suivi par la page d'en dessous. */
var EN_CADRE = window.parent !== window && /[?&]cadre=1/.test(location.search);
if(EN_CADRE){
  document.documentElement.classList.add('eb-cadre');
  var stCadre = document.createElement('style');
  stCadre.textContent = 'html.eb-cadre .eb-navbar,html.eb-cadre .ebn,html.eb-cadre #ebck,html.eb-cadre .ebm-voile,html.eb-cadre #ebCartButton,html.eb-cadre .eb-cart-button,html.eb-cadre .eb-journal-close{display:none !important}';
  (document.head || document.documentElement).appendChild(stCadre);
  window.addEventListener('click', function(e){
    if(e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]'); if(!a) return;
    var u; try { u = new URL(a.getAttribute('href'), location.href); } catch(err){ return; }
    if(u.hostname === location.hostname) return;              // un autre article : il s'ouvre ici, dans le panneau
    if(!/^https?:$/.test(u.protocol)) return;
    e.preventDefault(); e.stopPropagation();
    try { window.parent.postMessage({ eb: 'article-lien', href: u.toString() }, '*'); } catch(err){ location.href = u.toString(); }
  }, true);
}
function direAuPanneau(type){ if(EN_CADRE){ try { window.parent.postMessage({ eb: type }, '*'); } catch(e){} } }

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
//   photo   : 📷 lien de la photo de l'article, au format PORTRAIT (4:5, comme sur Instagram)
//   intro   : (facultatif) deux lignes de présentation, affichées quand l'article est « À la une »
//   gamme   : (facultatif) "bloom" ou "balance" si l'article parle d'abord d'une gamme
//             → le petit point et le mot de la gamme prennent sa couleur sur la carte
//   CITATION : dans ton texte Carrd, un paragraphe seul entre guillemets « … » est mis en valeur tout seul
//   diagnostic : (facultatif) ajoute le bloc noir « diagnostic » à la fin de l'article
//                diagnostic: true                → phrase standard
//                diagnostic: "Ta question ici"   → ta question en grand, puis la phrase standard
var ARTICLES = [
  { id: "article-vitaminec",           section: "actifs",  gamme: "bloom", titre: "Vitamine C",                 question: "Pourquoi est-elle devenue incontournable en skincare ?",
    photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/radiance-c-serum-cerise-fond-site.png?v=1793617062" },
  { id: "article-niacinamide",         section: "actifs",  gamme: "bloom", titre: "Niacinamide",                question: "Pourquoi tout le monde en parle ?",
    photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Gouttes_de_verre_sur_creme_pale.png?v=1791355188" },
  { id: "article-bakuchiol",           section: "actifs",  gamme: "balance", titre: "Bakuchiol",                question: "Le secret végétal d'une peau plus lisse et plus ferme",
    intro: "Extrait des graines de Psoralea corylifolia, il agit sur les mêmes signes que le rétinol (rides, fermeté, grain de peau) avec une bien meilleure tolérance.",
    photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Elixir_Bakuchiol_sur_pierre_naturelle.png?v=1793807524" },
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
/* Article en vignette : la photo dans un passe-partout beige, le numéro en grand chiffre fin, le texte dessous */
+ ".ebjm{display:block;position:relative}"
+ ".ebjm-ph{position:relative;aspect-ratio:4/5;background:#ebe4d8}"
+ ".ebjm-ph i{position:absolute;inset:8px;overflow:hidden;display:block;background:#e2d9cc}"
+ ".ebjm-ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .9s ease}"
+ ".ebj a.ebjm:hover .ebjm-ph img{transform:scale(1.04)}"
+ ".ebjm-n{position:absolute;left:16px;bottom:4px;font-size:36px;font-weight:200;line-height:1;color:#f5f4f0;letter-spacing:-.02em;z-index:2}"
+ ".ebjm-k{font-size:8.5px;font-weight:500;letter-spacing:.26em;text-transform:uppercase;color:#8a8478;margin:18px 0 8px}"
+ ".ebjm-k b{font-weight:600}.ebjm-k b.bloom{color:#9a4a4c}.ebjm-k b.balance{color:#4f6b2a}"
+ ".ebjm-t{font-family:'Montserrat',sans-serif;font-size:12.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;line-height:1.35;margin:0 0 6px;color:#141414}"
+ ".ebjm-q{font-size:12px;line-height:1.6;margin:0;color:#4a453e}"
+ ".ebjm-m{font-size:8.5px;letter-spacing:.22em;text-transform:uppercase;color:#8a8478;margin:10px 0 0}"
/* À la une : posé sur une bande beige, « À la une » écrit sur le côté, la photo dans un passe-partout clair */
+ ".ebj-une{position:relative;display:grid;grid-template-columns:1fr;max-width:1240px;margin:0 auto 64px;padding:58px 22px 44px;background:linear-gradient(165deg,#efe8dd,#e6ddcf);align-items:center}"
+ ".ebj-une:before{content:'À la une';position:absolute;left:0;right:0;top:24px;text-align:center;font-size:9px;font-weight:600;letter-spacing:.6em;padding-left:.6em;text-transform:uppercase;color:#8a7f6f}"
+ ".ebj-une .ebjm-ph{background:#f8f5f1}.ebj-une .ebjm-ph i{inset:10px}.ebj-une .ebjm-n{display:none}"
+ ".ebj-une-tx{position:relative;padding:0 4px;margin-top:-34px;z-index:2}"
+ ".ebj-num{width:fit-content;font-size:82px;font-weight:200;line-height:.86;letter-spacing:-.02em;margin:0 0 10px -4px;padding-right:.04em;color:transparent;background:linear-gradient(165deg,#ece6dc 8%,#c9bfaf 45%,#8f8676 92%);-webkit-background-clip:text;background-clip:text}"
/* signature : le grand numéro prend le dégradé du liseré de sa gamme */
+ ".ebj-num.bloom{background-image:linear-gradient(165deg,#f3dccf 8%,#e3b6a3 38%,#c98a78 66%,#8a3038 95%)}"
+ ".ebj-num.balance{background-image:linear-gradient(165deg,#e6e9cc 8%,#c3cc8f 38%,#a6b965 64%,#4f6b2a 95%)}"
+ ".ebj-une .ebj-num{text-shadow:none}"
+ ".ebj-une-h{font-family:'Montserrat',sans-serif;font-size:27px;font-weight:300;letter-spacing:.14em;text-transform:uppercase;margin:0;line-height:1.12;color:#141414}"
+ ".ebj-une-q{font-size:16px;font-weight:300;line-height:1.45;margin:12px 0 0;color:#2a2723}"
+ ".ebj-une-p{font-size:13px;line-height:1.85;margin:16px 0 0;color:#2a2723;max-width:430px}"
+ ".ebj-lire{display:inline-flex;align-items:center;gap:14px;margin-top:24px;font-size:10px;letter-spacing:.28em;text-transform:uppercase;font-weight:600}"
+ ".ebj-lire:after{content:'';width:46px;height:1px;background:#141414;transition:width .3s ease}"
+ ".ebj a.ebj-une:hover .ebj-lire:after{width:70px}"
/* Rubriques : texte fin souligné */
+ ".ebj-filtres{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;padding:0 16px;margin:0 0 46px}"
+ ".ebj-filtres label{cursor:pointer;font-size:9.5px;font-weight:500;letter-spacing:.24em;text-transform:uppercase;padding-bottom:6px;border-bottom:1px solid transparent;transition:border-color .25s ease,opacity .25s ease;opacity:.55}"
+ ".ebj-sec{max-width:1240px;margin:0 auto 80px;padding:0 22px}"
+ ".ebj-sec-titre{display:flex;align-items:baseline;gap:16px;font-family:'Montserrat',sans-serif;font-size:20px;font-weight:300;letter-spacing:.24em;text-transform:uppercase;margin:0 0 30px;color:#141414}"
+ ".ebj-sec-titre small{font-size:9px;font-weight:500;letter-spacing:.3em;color:#8a8478}"
+ ".ebj-sec-titre:after{content:'';flex:1;height:1px;background:#141414;opacity:.2}"
+ "@keyframes ebjFade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}"
/* téléphone : les articles deux par deux, bien espacés */
+ ".ebj-row{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:48px 18px;align-items:start}"
+ "@container (min-width:900px){"
+ ".ebj-une{grid-template-columns:46% 54%;margin-bottom:110px;padding:70px 60px 70px 92px}"
+ ".ebj-une:before{left:46px;right:auto;top:50%;transform:translate(-50%,-50%) rotate(-90deg);font-size:10px;white-space:nowrap}"
+ ".ebj-une .ebjm-ph i{inset:14px}"
+ ".ebj-une-tx{padding:0 0 0 9%;margin:0}"
+ ".ebj-num{font-size:130px;margin-left:-6px}.ebjm-k{font-size:9px}"
+ ".ebj-une-h{font-size:36px}.ebj-une-q{font-size:19px}.ebj-une-p{font-size:14px}"
+ ".ebj-filtres{gap:34px;margin-bottom:56px}.ebj-filtres label{font-size:10.5px;letter-spacing:.3em}"
+ ".ebj-sec{padding:0 40px;margin-bottom:120px}.ebj-sec-titre{font-size:28px;margin-bottom:40px}"
+ ".ebj-row{grid-template-columns:repeat(3,minmax(0,1fr));gap:70px 40px}"
+ ".ebjm-ph i{inset:12px}.ebjm-n{left:24px;bottom:2px;font-size:46px}"
+ ".ebjm-k{margin-top:22px}.ebjm-t{font-size:14px;letter-spacing:.16em}.ebjm-q{font-size:12.5px}"
+ "}"
/* Ouverture de l'article : une double page (le titre à gauche, la photo à droite) */
+ "html{overflow-x:clip}"
+ ".ebja{position:relative;display:flex;flex-direction:column;width:100vw;margin-left:calc(50% - 50vw);background:#f5f4f0;font-family:'Montserrat',sans-serif;color:#141414;margin-bottom:56px;box-sizing:border-box;text-align:left}"
+ ".ebja-ph{position:relative;order:-1;aspect-ratio:4/5;overflow:hidden;background:#e6ddd0}"
+ ".ebja-ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 40%}"
+ ".ebja-tx{position:relative;padding:0 22px;margin-top:-64px;z-index:2}"
+ ".ebja .ebj-num{font-size:84px;margin-bottom:10px}"
+ ".ebja-k{font-size:9px;font-weight:500;letter-spacing:.3em;text-transform:uppercase;color:#8a8478;margin:0 0 14px}"
+ ".ebja-k b{font-weight:600}.ebja-k b.bloom{color:#9a4a4c}.ebja-k b.balance{color:#4f6b2a}"
+ ".ebja-titre{font-family:'Montserrat',sans-serif;font-size:31px;font-weight:300;line-height:1.1;letter-spacing:.14em;text-transform:uppercase;margin:0;color:#141414}"
+ ".ebja-q{font-size:17px;font-weight:300;line-height:1.45;margin:14px 0 0;color:#2a2723;max-width:460px}"
+ ".ebja-m{display:flex;gap:22px;font-size:9px;letter-spacing:.24em;text-transform:uppercase;color:#8a8478;margin:22px 0 0}"
+ "@media (min-width:900px){"
+ ".ebja{display:grid;grid-template-columns:46% 54%;height:min(86vh,760px);min-height:560px;margin-bottom:90px}"
+ ".ebja-tx{grid-column:1;grid-row:1;display:flex;flex-direction:column;justify-content:center;margin:0;padding:0 8% 0 10%;background:linear-gradient(160deg,#f8f6f1,#eee7db)}"
+ ".ebja-ph{grid-column:2;grid-row:1;aspect-ratio:auto;height:100%}"
+ ".ebja .ebj-num{font-size:120px}"
+ ".ebja-titre{font-size:48px}.ebja-q{font-size:21px}.ebja-m{margin-top:34px}"
+ "}"
/* Le texte de l'article : lettrine, citation */
+ ".ebj-lettrine:first-letter{float:left;font-size:3.6em;line-height:.82;font-weight:600;margin:.08em .06em 0 0;color:#8a3038}"
+ ".ebj-cit{margin:46px auto !important;max-width:640px;font-size:22px !important;font-weight:300 !important;line-height:1.45 !important;text-align:center !important;color:#141414 !important}"
+ ".ebj-cit:before,.ebj-cit:after{content:'';display:block;width:60px;height:1px;background:#8f8676;margin:0 auto 26px}"
+ ".ebj-cit:after{margin:26px auto 0}"
+ "@media (min-width:900px){.ebj-cit{font-size:26px !important;margin:56px auto !important}}"
/* La ligne de lecture, tout en haut de l'écran */
+ ".ebj-prog{position:fixed;top:0;left:0;height:2px;width:0;background:linear-gradient(90deg,#efe9df,#cfc6b8 55%,#8f8676);z-index:10000;transition:width .15s linear;pointer-events:none}"
+ ".ebj-prog.bloom{background:linear-gradient(90deg,#efe5da,#e6cbbd,#d39b82,#eb895e,#6d222a)}.ebj-prog.balance{background:linear-gradient(90deg,#ebecdb,#d9ddb7,#c3cc8f,#a6b965,#85a33a)}"
/* Animations, rejouées à chaque ouverture d'article */
+ ".ebja.go .ebja-ph img{animation:ebjaZoom 14s ease-out both}"
+ ".ebja.go .ebja-tx > *{animation:ebjaUp .8s ease both}"
+ ".ebja.go .ebja-tx > *:nth-child(2){animation-delay:.12s}.ebja.go .ebja-tx > *:nth-child(3){animation-delay:.24s}.ebja.go .ebja-tx > *:nth-child(4){animation-delay:.36s}.ebja.go .ebja-tx > *:nth-child(5){animation-delay:.48s}"
+ ".ebja.go ~ *{animation:ebjaFade .9s ease .5s both}"
+ "@keyframes ebjaZoom{from{transform:scale(1.08)}to{transform:none}}"
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
+ "@media (prefers-reduced-motion:reduce){.ebja.go *,.ebja.go ~ *,.ebjm-ph img{animation:none !important;transition:none !important}}"
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
function numero(a){
  var n = 0;
  for(var i = 0; i < ARTICLES.length; i++){ n++; if(ARTICLES[i] === a) break; }
  return (n < 10 ? '0' : '') + n;
}
// Temps de lecture : environ 200 mots par minute, calculé sur le texte de l'article
function lecture(a){
  var sec = sectionDe(a.id); if(!sec) return '';
  var t = (sec.textContent || '').replace(/\s+/g, ' ').trim(); if(!t) return '';
  var m = Math.max(1, Math.round(t.split(' ').length / 200));
  return 'Lecture ' + m + ' min';
}
function gamme(a){ return (a.gamme === 'bloom' || a.gamme === 'balance') ? a.gamme : ''; }
function rub(a){
  var g = gamme(a), et = etiquette(a);
  return (et ? esc(et) : '') + (g ? (et ? ' · ' : '') + '<b class="' + g + '">' + (g === 'bloom' ? 'Bloom' : 'Balance') + '</b>' : '');
}
function photo(a, cls){ return a.photo ? '<img src="' + esc(a.photo) + '" alt="' + esc(a.titre + (a.question ? ' : ' + a.question : '')) + '" loading="' + (cls || 'lazy') + '">' : ''; }
// Un article en vignette (grille de magazine)
function vignette(a){
  var l = lecture(a);
  return '<a class="ebjm" href="#' + a.id + '">'
    + '<div class="ebjm-ph"><i>' + photo(a) + '</i><span class="ebjm-n" aria-hidden="true">' + numero(a) + '</span></div>'
    + '<p class="ebjm-k">' + rub(a) + '</p>'
    + '<h4 class="ebjm-t">' + esc(a.titre) + '</h4>'
    + '<p class="ebjm-q">' + q(a.question) + '</p>'
    + (l ? '<p class="ebjm-m">' + esc(l) + '</p>' : '') + '</a>';
}
// À la une : double page
function une(a){
  var l = lecture(a);
  return '<a class="ebj-une" href="#' + a.id + '">'
    + '<div class="ebjm-ph"><i>' + photo(a, 'eager') + '</i></div>'
    + '<div class="ebj-une-tx"><div class="ebj-num ' + gamme(a) + '" aria-hidden="true">' + numero(a) + '</div>'
    + (rub(a) ? '<p class="ebjm-k">' + rub(a) + '</p>' : '')
    + '<h2 class="ebj-une-h">' + esc(a.titre) + '</h2>'
    + '<p class="ebj-une-q">' + q(a.question) + '</p>'
    + (a.intro ? '<p class="ebj-une-p">' + q(a.intro) + '</p>' : '')
    + '<span class="ebj-lire">Lire l\'article</span>'
    + (l ? '<p class="ebjm-m">' + esc(l) + '</p>' : '') + '</div></a>';
}

/* ─── PAGE D'ACCUEIL DU JOURNAL ─── */
function construireAccueil(){
  var cibles = document.querySelectorAll('#eb-journal');
  if(!cibles.length) return;
  var html = '<div class="ebj">';
  var alaune = trouverArticle(A_LA_UNE);
  if(alaune){ html += une(alaune); }
  html += '<input type="radio" name="ebj-f" id="ebj-f-tout" checked>';
  SECTIONS.forEach(function(s){ html += '<input type="radio" name="ebj-f" id="ebj-f-' + s.cle + '">'; });
  html += '<div class="ebj-filtres"><label for="ebj-f-tout">Tout</label>';
  SECTIONS.forEach(function(s){ html += '<label for="ebj-f-' + s.cle + '">' + esc(s.nom) + '</label>'; });
  html += '</div><div class="ebj-secs">';
  SECTIONS.forEach(function(s){
    var liste = ARTICLES.filter(function(a){ return a.section === s.cle; });
    if(!liste.length) return;
    html += '<div class="ebj-sec c-' + s.cle + '"><h3 class="ebj-sec-titre">' + esc(s.nom) + '<small>' + liste.length + ' article' + (liste.length > 1 ? 's' : '') + '</small></h3><div class="ebj-row">';
    liste.forEach(function(a){ html += vignette(a); });
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
    var l = lecture(a), g = gamme(a);
    b.innerHTML = '<div class="ebja-tx"><div class="ebj-num ' + g + '" aria-hidden="true">' + numero(a) + '</div>'
      + '<p class="ebja-k">' + rub(a) + '</p>'
      + '<h1 class="ebja-titre">' + esc(a.titre) + '</h1>'
      + '<p class="ebja-q">' + q(a.question) + '</p>'
      + '<div class="ebja-m">' + (l ? '<span>' + esc(l) + '</span>' : '') + '<span>ELKHA.B Journal</span></div></div>'
      + '<div class="ebja-ph">' + photo(a, 'eager') + '</div>';
    sec.insertBefore(b, sec.firstChild);
    mettreEnPage(sec);
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
// Le texte de l'article : lettrine sur le premier vrai paragraphe, citations « … » mises en valeur
function mettreEnPage(sec){
  var ps = sec.querySelectorAll('p'), premier = false;
  for(var i = 0; i < ps.length; i++){
    var p = ps[i];
    if(p.closest('.ebja, .ebjd')) continue;
    var t = (p.textContent || '').trim();
    if(/^[«"“].{10,}[»"”]$/.test(t)){ p.classList.add('ebj-cit'); continue; }
    if(!premier && t.length > 80 && /^[A-Za-zÀ-ÿ]/.test(t)){ p.classList.add('ebj-lettrine'); premier = true; }
  }
}
// La ligne de lecture : elle avance au fil de l'article ouvert
var prog = null;
function ligneLecture(){
  if(!prog){ prog = document.createElement('div'); prog.className = 'ebj-prog'; document.body.appendChild(prog);
    window.addEventListener('scroll', ligneLecture, { passive: true }); }
  var h = location.hash.replace('#', ''), a = trouverArticle(h), sec = a && sectionDe(h);
  if(!sec || !sec.offsetParent){ prog.style.width = '0'; return; }
  prog.classList.toggle('bloom', gamme(a) === 'bloom'); prog.classList.toggle('balance', gamme(a) === 'balance');
  var r = sec.getBoundingClientRect(), tot = r.height - window.innerHeight;
  var p = tot > 0 ? Math.min(1, Math.max(0, -r.top / tot)) : 1;
  prog.style.width = (p * 100).toFixed(1) + '%';
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
    if(el.id === 'ebarr' || el.querySelector('section, #eb-journal')) continue;   // jamais le voile d'arrivée
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
  ligneLecture();
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
  function depuisAutreSite(){
    try { var r = new URL(document.referrer); return !!r.hostname && r.hostname !== location.hostname && /(^|\.)elkhab\.com$|\.carrd\.co$/.test(r.hostname); } catch(e){ return false; }
  }
  // un voile beige ELKHA.B (le même que celui du site d'origine) pendant le retour
  function voileRetour(){
    var v = document.createElement('div'); v.className = 'eb-voile-retour';
    v.style.cssText = 'position:fixed;inset:0;z-index:2147483646;background:#f5f4f0;opacity:0;transition:opacity .25s ease';
    document.body.appendChild(v); void v.offsetWidth; v.style.opacity = '1';
  }
  window.addEventListener('pageshow', function(e){ if(e.persisted){ [].forEach.call(document.querySelectorAll('.eb-voile-retour'), function(v){ v.remove(); }); } });
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
    if(EN_CADRE){ direAuPanneau('article-fermer'); return; }
    var origin = ebP('origin');
    // arrivée depuis un autre site ELKHA.B (lien vers l'article) : on revient simplement en arrière,
    // la page d'origine réapparaît exactement où elle était, sans rechargement
    if(origin && origin !== 'journal' && history.length > 1 && depuisAutreSite()){
      voileRetour();
      setTimeout(function(){ history.back(); }, 260);
      return;
    }
    if(origin && EB_KNOWN.indexOf(origin) !== -1){ ebGo(origin, { scrollTo: ebP('pos') }, ebP('h')); return; }
    ebGo(FALLBACK_SITE);
  });

  verifier();
  window.addEventListener('hashchange', verifier);
}

// Arrivée sur un article : le voile beige posé par l'embed du menu (#ebarr) cache la page
// pendant qu'elle se met en place, puis s'efface en fondu sur l'article prêt (rien ne saute)
function finArrivee(){
  // le beige posé dès le début de la page (embed « Head » : classe eb-arr) est relayé par le voile #ebarr
  var html = document.documentElement;
  var v = document.getElementById('ebarr');
  if(!v){
    if(html.classList.contains('eb-arr')){
      var lever = function(){ html.classList.remove('eb-arr'); };
      if(document.readyState === 'complete') setTimeout(lever, 250);
      else window.addEventListener('load', function(){ setTimeout(lever, 250); });
      setTimeout(lever, 3500);
    }
    return;
  }
  var fait = false;
  function effacer(){
    if(fait) return; fait = true;
    html.classList.remove('eb-arr');
    if(/^#article-/.test(location.hash) && window.scrollY > 2) window.scrollTo(0, 0);
    v.style.transition = 'opacity .4s ease'; v.style.opacity = '0';
    setTimeout(function(){ if(v.parentNode) v.parentNode.removeChild(v); }, 450);
  }
  if(document.readyState === 'complete') setTimeout(effacer, 250);
  else window.addEventListener('load', function(){ setTimeout(effacer, 250); });
  setTimeout(effacer, 3500);
}

function demarrer(){
  construireAccueil();
  ajusterLargeur(); setTimeout(ajusterLargeur, 300); setTimeout(ajusterLargeur, 1200);
  construireBannieres();
  boutonFermer();
  animer();
  window.addEventListener('hashchange', function(){ setTimeout(animer, 30); setTimeout(ajusterLargeur, 120); });
  finArrivee();
  // dans le panneau : on se montre quand l'article est mis en page (et au plus tard au chargement complet)
  if(EN_CADRE){
    var dit = false, pret = function(){ if(!dit){ dit = true; direAuPanneau('article-pret'); } };
    setTimeout(pret, 450);
    window.addEventListener('load', function(){ setTimeout(pret, 150); });
  }
}
if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', demarrer); }
else { demarrer(); }
})();
