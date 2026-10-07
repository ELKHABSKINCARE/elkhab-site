/* ═══════════════════════════════════════════════════════════════════════
   ELKHA.B — JOURNAL (journal-engine.js, chargé par le menu du Journal)
   • Page d'accueil du Journal : À la une, filtres, cartes des articles
   • Bannière animée en haut de chaque article + fondu du texte
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
//   photo   : 📷 lien de la photo de la carte (laisse "" pour la vignette beige)
//   diagnostic : (facultatif) ajoute le bloc noir « diagnostic » à la fin de l'article
//                diagnostic: true                → phrase standard
//                diagnostic: "Ta question ici"   → ta question en grand, puis la phrase standard
var ARTICLES = [
  { id: "article-vitaminec",           section: "actifs",  titre: "Vitamine C",                 question: "Pourquoi est-elle devenue incontournable en skincare ?",
    photo: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Serum_eclat_Bloom_et_citron.png?v=1791354955" },
  { id: "article-niacinamide",         section: "actifs",  titre: "Niacinamide",                question: "Pourquoi tout le monde en parle ?",
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
+ ".ebj{font-family:'Montserrat',sans-serif;color:#000;width:100vw;max-width:none;margin:0 0 0 calc(50% - 50vw);padding:0 0 30px;box-sizing:border-box;-webkit-tap-highlight-color:transparent;text-align:left}"
+ ".ebj *{box-sizing:border-box}"
+ ".ebj a{color:#000;text-decoration:none}"
+ ".ebj input{position:absolute;opacity:0;pointer-events:none;width:0;height:0}"
+ ".ebj-tag{display:block;font-size:10.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;opacity:.55;margin-bottom:8px}"
+ ".ebj-img{position:relative;overflow:hidden;background:#EBE5DB}"
+ ".ebj-img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .6s ease}"
+ ".ebj-img .ebj-num{position:absolute;left:18px;bottom:14px;font-size:44px;font-weight:200;letter-spacing:.02em;opacity:.35}"
+ ".ebj a:hover .ebj-img img{transform:scale(1.04)}"
+ ".ebj-une{display:block;margin:0 0 44px}"
+ ".ebj-une .ebj-img{aspect-ratio:4/5}"
+ ".ebj-une-txt{padding:18px 20px 0}"
+ ".ebj-une-titre{font-size:21px;font-weight:600;line-height:1.3;letter-spacing:.05em;text-transform:uppercase;margin:0 0 8px}"
+ ".ebj-une-q{font-size:15px;font-weight:300;line-height:1.55;margin:0 0 14px}"
+ ".ebj-lire{display:inline-block;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;border-bottom:1px solid #000;padding-bottom:3px;transition:opacity .2s ease}"
+ ".ebj a:hover .ebj-lire{opacity:.6}"
+ ".ebj-filtres{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding:0 20px 4px;margin:0 0 30px}"
+ ".ebj-filtres::-webkit-scrollbar{display:none}"
+ ".ebj-filtres label{flex:0 0 auto;cursor:pointer;border:1px solid #000;border-radius:999px;padding:9px 12px;font-size:10.5px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;transition:background .25s ease,color .25s ease,transform .2s ease}"
+ ".ebj-filtres label:active{transform:scale(.96)}"
+ ".ebj-sec{margin:0 0 40px}"
+ ".ebj-sec-titre{font-size:13px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;margin:0 0 16px;padding:0 20px}"
+ "@keyframes ebjFade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}"
+ ".ebj-row{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:0 20px 6px;scroll-padding:0 20px}"
+ ".ebj-row::-webkit-scrollbar{display:none}"
+ ".ebj-card{flex:0 0 72%;scroll-snap-align:start;display:block}"
+ ".ebj-card .ebj-img{aspect-ratio:4/5;margin-bottom:12px}"
+ ".ebj-card-titre{font-size:15px;font-weight:600;margin:0 0 4px}"
+ ".ebj-card-q{font-size:13px;font-weight:300;line-height:1.55;margin:0}"
+ "@media (min-width:900px){"
+ ".ebj-une{margin-bottom:56px}"
+ ".ebj-une .ebj-img{aspect-ratio:16/10}"
+ ".ebj-une-txt{padding:24px 22px 0}"
+ ".ebj-une-titre{font-size:25px}"
+ ".ebj-une-q{font-size:16px}"
+ ".ebj-filtres{justify-content:center;gap:8px;padding:0 22px;margin-bottom:46px}"
+ ".ebj-filtres label{padding:10px 18px;font-size:11.5px;letter-spacing:.08em}"
+ ".ebj-sec{margin-bottom:60px}"
+ ".ebj-sec-titre{padding:0 22px}"
+ ".ebj-row{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;overflow:visible;padding:0}"
+ ".ebj-card > :not(.ebj-img){padding-left:22px;padding-right:22px}"
+ ".ebj-card{flex:none}"
+ "}"
/* Grand écran sans image à droite : photo à la une à gauche, texte à droite */
+ ".ebj{container-type:inline-size}"
+ "@container (min-width:1000px){"
+ ".ebj-une{display:grid;grid-template-columns:58% 1fr;align-items:center;gap:48px;padding:0 40px 0 0;margin-bottom:64px}"
+ ".ebj-une .ebj-img{aspect-ratio:4/3}"
+ ".ebj-une-txt{padding:0}"
+ ".ebj-une-titre{font-size:28px}"
+ ".ebj-une-q{font-size:17px}"
+ "}"
/* Bannière des articles */
+ "html{overflow-x:clip}"
+ ".ebja{position:relative;width:100vw;margin-left:calc(50% - 50vw);background:#EBE5DB;overflow:hidden;font-family:'Montserrat',sans-serif;color:#000;text-align:center;padding:64px 28px 54px;margin-bottom:30px;box-sizing:border-box}"
+ ".ebja-in{max-width:720px;margin:0 auto}"
+ ".ebja-tag{display:block;font-size:10.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;margin-bottom:18px}"
+ ".ebja-titre{font-family:'Montserrat',sans-serif;font-size:25px;font-weight:600;line-height:1.25;letter-spacing:.05em;text-transform:uppercase;margin:0 0 12px;color:#000}"
+ ".ebja-q{font-size:15px;font-weight:300;line-height:1.6;margin:0}"
+ ".ebja-trait{display:block;width:46px;height:1px;background:#000;margin:26px auto 0;opacity:.6}"
/* Animations, rejouées à chaque ouverture d'article */
+ ".ebja.go{animation:ebjaSlide .9s cubic-bezier(.22,.8,.24,1) both}"
+ ".ebja.go .ebja-tag{animation:ebjaUp .7s ease .45s both}"
+ ".ebja.go .ebja-titre{animation:ebjaUp .8s ease .6s both}"
+ ".ebja.go .ebja-q{animation:ebjaUp .8s ease .75s both}"
+ ".ebja.go .ebja-trait{animation:ebjaTrait .8s ease 1s both}"
+ ".ebja.go ~ *{animation:ebjaFade .9s ease 1s both}"
+ "@keyframes ebjaSlide{from{transform:translateX(100%)}to{transform:none}}"
+ "@keyframes ebjaUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}"
+ "@keyframes ebjaTrait{from{width:0}to{width:46px}}"
+ "@keyframes ebjaFade{from{opacity:0}to{opacity:1}}"
+ "@media (min-width:900px){.ebja{padding:100px 40px 84px}.ebja-titre{font-size:38px}.ebja-q{font-size:18px}}"
/* Bloc diagnostic en fin d'article */
+ ".ebjd{position:relative;width:100vw;margin:44px 0 10px calc(50% - 50vw);background:#141414;color:#fff;text-align:center;font-family:'Montserrat',sans-serif;padding:60px 28px;box-sizing:border-box}"
+ ".ebjd-in{max-width:620px;margin:0 auto}"
+ ".ebjd-tag{display:block;font-size:10.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;opacity:.5;margin-bottom:18px}"
+ ".ebjd-q{font-size:22px;font-weight:600;line-height:1.35;margin:0 0 10px;color:#fff}"
+ ".ebjd-p{font-size:15px;font-weight:300;line-height:1.6;margin:0 0 28px;opacity:.85}"
+ ".ebjd-btn{display:inline-flex;align-items:center;justify-content:center;background:#fff;color:#000;border:none;border-radius:0;padding:16px 26px;font-family:'Montserrat',sans-serif;font-size:13px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;transition:transform .2s ease;-webkit-tap-highlight-color:transparent}"
+ ".ebjd-btn:hover{transform:scale(1.03)}"
+ "@media (min-width:900px){.ebjd{padding:84px 40px}.ebjd-q{font-size:28px}}"
+ "@media (prefers-reduced-motion:reduce){.ebja.go,.ebja.go *,.ebja.go ~ *{animation:none !important}}"
/* Bouton Fermer des articles */
+ ".eb-journal-close{position:fixed;top:80px;right:24px;z-index:9999;background:rgba(255,255,255,.35);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.5);width:38px;height:38px;border-radius:50%;display:none;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:20px;font-weight:300;color:#000;cursor:pointer;transition:transform .2s ease;-webkit-tap-highlight-color:transparent}"
+ ".eb-journal-close.visible{display:flex}"
+ ".eb-journal-close:hover{transform:scale(1.1)}"
+ ".eb-article-ouvert #" + BANNIERE_DU_SITE + ",.eb-article-ouvert .eb-haut-journal,.eb-article-ouvert .eb-cache-article{display:none !important}"
/* Téléphone et tablette : Carrd place l'image du site tout en haut de la page (body::before) — cachée pendant la lecture d'un article */
+ "@media (max-width:980px){html.eb-article-ouvert body::before{display:none !important}}";

/* Filtres : une règle par section */
SECTIONS.forEach(function(s){
  CSS += "#ebj-f-" + s.cle + ":checked ~ .ebj-filtres label[for='ebj-f-" + s.cle + "']{background:#000;color:#fff}"
      +  "#ebj-f-" + s.cle + ":checked ~ .ebj-secs .ebj-sec:not(.c-" + s.cle + "){display:none}"
      +  "#ebj-f-" + s.cle + ":checked ~ .ebj-secs .c-" + s.cle + "{animation:ebjFade .5s ease both}";
});
CSS += "#ebj-f-tout:checked ~ .ebj-filtres label[for='ebj-f-tout']{background:#000;color:#fff}"
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
function vignette(photo, num, alt){
  return '<div class="ebj-img">' + (photo ? '<img src="' + esc(photo) + '" alt="' + esc(alt) + '" loading="lazy">' : '<span class="ebj-num">' + num + '</span>') + '</div>';
}

/* ─── PAGE D'ACCUEIL DU JOURNAL ─── */
function construireAccueil(){
  var cibles = document.querySelectorAll('#eb-journal');
  if(!cibles.length) return;
  var html = '<div class="ebj">';
  var une = trouverArticle(A_LA_UNE);
  if(une){
    html += '<a class="ebj-une" href="#' + une.id + '">'
         +  vignette(une.photo, '', une.titre)
         +  '<div class="ebj-une-txt"><span class="ebj-tag">À la une' + (etiquette(une) ? ' · ' + esc(etiquette(une)) : '') + '</span>'
         +  '<h2 class="ebj-une-titre">' + esc(une.titre) + '</h2>'
         +  '<p class="ebj-une-q">' + q(une.question) + '</p>'
         +  '<span class="ebj-lire">Lire l\'article →</span></div></a>';
  }
  html += '<input type="radio" name="ebj-f" id="ebj-f-tout" checked>';
  SECTIONS.forEach(function(s){ html += '<input type="radio" name="ebj-f" id="ebj-f-' + s.cle + '">'; });
  html += '<div class="ebj-filtres"><label for="ebj-f-tout">Tout</label>';
  SECTIONS.forEach(function(s){ html += '<label for="ebj-f-' + s.cle + '">' + esc(s.nom) + '</label>'; });
  html += '</div><div class="ebj-secs">';
  var n = 0;
  SECTIONS.forEach(function(s){
    var liste = ARTICLES.filter(function(a){ return a.section === s.cle; });
    if(!liste.length) return;
    html += '<div class="ebj-sec c-' + s.cle + '"><h3 class="ebj-sec-titre">' + esc(s.nom) + '</h3><div class="ebj-row">';
    liste.forEach(function(a){
      n++;
      html += '<a class="ebj-card" href="#' + a.id + '">'
           +  vignette(a.photo, 'N°' + (n < 10 ? '0' : '') + n, a.titre)
           +  '<span class="ebj-tag">' + esc(s.nom) + '</span>'
           +  '<h4 class="ebj-card-titre">' + esc(a.titre) + '</h4>'
           +  '<p class="ebj-card-q">' + q(a.question) + '</p></a>';
    });
    html += '</div></div>';
  });
  html += '</div></div>';
  for(var i = 0; i < cibles.length; i++){ cibles[i].innerHTML = html; }
}

/* ─── BANNIÈRES DES ARTICLES ─── */
function sectionDe(id){ return document.getElementById(id + '-section') || document.querySelector('section#' + id); }
function construireBannieres(){
  ARTICLES.forEach(function(a){
    var sec = sectionDe(a.id);
    if(!sec || sec.querySelector('.ebja')) return;
    var b = document.createElement('div');
    b.className = 'ebja';
    b.setAttribute('data-article', a.id);
    b.innerHTML = '<div class="ebja-in">'
      + (etiquette(a) ? '<span class="ebja-tag">' + esc(etiquette(a)) + '</span>' : '')
      + '<h1 class="ebja-titre">' + esc(a.titre) + '</h1>'
      + '<p class="ebja-q">' + q(a.question) + '</p>'
      + '<span class="ebja-trait"></span></div>';
    sec.insertBefore(b, sec.firstChild);
    if(a.diagnostic && !sec.querySelector('.ebjd')){
      var d = document.createElement('div');
      d.className = 'ebjd';
      d.innerHTML = '<div class="ebjd-in"><span class="ebjd-tag">Diagnostic de peau</span>'
        + (typeof a.diagnostic === 'string' ? '<p class="ebjd-q">' + q(a.diagnostic) + '</p><p class="ebjd-p">Votre peau a des choses à vous dire.</p>'
                                             : '<p class="ebjd-q">Votre peau a des choses à vous dire.</p><p class="ebjd-p"></p>')
        + '<button type="button" class="ebjd-btn">2 minutes pour l\'écouter</button></div>';
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
