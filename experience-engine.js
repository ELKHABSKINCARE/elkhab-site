/* ═══════════════════════════════════════════════════════════════════════
   ELKHA.B — LEUR EXPÉRIENCE (experience-engine.js)
   • Grille des collaboratrices (3 par ligne sur ordinateur, 2 sur téléphone)
   • Au clic : panneau avec le texte, puis bouton « Voir la vidéo »
   • Fenêtre vidéo au fond beige du site, bouton « Voir l'autre vidéo »
   Dans Carrd, la page contient un seul embed :
     <div id="eb-experience"></div>
     <script src="https://elkhabskincare.github.io/elkhab-site/experience-engine.js"></script>
   ───────────────────────────────────────────────────────────────────────
   ✏️ POUR AJOUTER OU MODIFIER UNE COLLABORATRICE, ON NE TOUCHE QU'À
      LA PARTIE « RÉGLAGES »
   ═══════════════════════════════════════════════════════════════════════ */
(function(){

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ✏️ RÉGLAGES                                                          │
   └─────────────────────────────────────────────────────────────────────┘ */

// Nombre de collaboratrices affichées avant le bouton « Voir toutes les collaboratrices »
var NOMBRE_VISIBLE = 6;

// COLLABORATRICES — dans l'ordre d'affichage.
// ➜ Pour une nouvelle collaboration : copie un bloc { ... }, colle-le EN HAUT
//   de la liste (les plus récentes en premier) et remplace les informations.
//   prenom : son prénom
//   soin   : le ou les soins testés (affichés sous la photo)
//   photo  : lien Shopify de sa photo
//   texte  : son retour, entre les accents graves ` `
//            (pour mettre un passage en gras : <strong>passage</strong>)
//   videos : l'identifiant YouTube (ce qui suit « youtu.be/ » ou « v= »)
//            Pour une 2e vidéo, ajoute une 2e ligne : le bouton
//            « Voir l'autre vidéo » apparaît tout seul.
var COLLABORATRICES = [

  { prenom: "Alexia",
    soin:   "Lumi-Bloom Niacinamide 5",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Screenshot_20260813_122336_Studio_2.jpg?v=1790834755",
    texte:  `Alexia a testé Lumi-Bloom Niacinamide 5 et partage son expérience après plusieurs utilisations. Une peau plus hydratée, moins de boutons, mais aussi une amélioration visible de ses taches et cicatrices d’acné.`,
    videos: [ "hKGBeoyF2l0" ] },

  { prenom: "Cynthia",
    soin:   "Luminescence Jour & Lumi-Veil CC Cream",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000049a881f4aa797360413e4ae5.png?v=1790834986",
    texte:  `Cynthia partage l’évolution de sa peau. Dès deux semaines, elle constate une peau plus apaisée, hydratée et lumineuse – et ça se voit ! Deux mois plus tard, son expérience révèle une véritable évolution de sa peau.`,
    videos: [ "jAh20El_vsQ", "-3lgVEAQwaQ" ] },

  { prenom: "Laeticia",
    soin:   "Rituel Luminescence",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Screenshot_20260813_121319_Studio_2.jpg?v=1790834834",
    texte:  `Laeticia a intégré le Rituel Luminescence Jour & Nuit à sa routine pour répondre à ses besoins d’hydratation, de confort et d’éclat. Son retour en images laisse parler sa peau : visiblement plus hydratée, repulpée et surtout incroyablement glowy.`,
    videos: [ "Oe8h7fPTp94", "8_S3Wi6MADw" ] },

  { prenom: "Joleene",
    soin:   "Lumi-Bloom Niacinamide 5",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Screenshot_20260813_122009_Studio_2.jpg?v=1790834834",
    texte:  `Une belle découverte pour Joleene, qui a adoré intégrer Lumi-Bloom Niacinamide 5 à sa routine. Son retour : un teint plus uniforme, une peau plus lisse et des pores visiblement floutés. Un soin dont elle est devenue fan !`,
    videos: [ "ChnJo1rWTrs", "b0wMzaHAHc0" ] },

  { prenom: "Lorena",
    soin:   "Lumi-Veil CC Cream",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000850c81f4b8b95d2d1b3722a7.png?v=1790834899",
    texte:  `Lorena a adoré découvrir Lumi-Veil CC Cream, notamment pour son format stick pratique, sa protection SPF 50 et sa texture agréable. Elle a également beaucoup apprécié son effet floutant, notamment sur ses petites imperfections, tout en apportant de l’hydratation à sa peau.`,
    videos: [ "St_RfDjWUO8" ] },

  { prenom: "Amelia",
    soin:   "Lumi-Bloom Niacinamide 5 & Gelée Lumi-Bloom",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_000000005f9481f48ad49297255e1574.png?v=1790834987",
    texte:  `Confrontée à une peau très sèche, irritée et sujette aux inflammations pendant son traitement anti-acné, Amelia a intégré les soins Lumi-Bloom à sa routine <strong>pendant plus de 2 mois</strong>. Sa peau se retrouve plus apaisée, hydratée et équilibrée, avec une diminution visible des inflammations. Découvrez son avant/après.`,
    videos: [ "njhevy7pWF0" ] },

  { prenom: "Gabrielle",
    soin:   "Radiance C Serum",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_000000009f7881f49c75311cc9043c02.png?v=1790834899",
    texte:  `Après un mois d’utilisation, Gabrielle a adoré Radiance C Serum, sa texture et sa senteur qu’elle décrit comme « incredible ». Son retour après plusieurs semaines : une peau visiblement plus lumineuse et éclatante.`,
    videos: [ "d4PjUqoH0Ow" ] },

  { prenom: "Carla",
    soin:   "Radiance C Serum",
    photo:  "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000927c820eb3becfe2972c6776.png?v=1790834756",
    texte:  `Après un mois d’utilisation, Carla a adoré Radiance C Serum pour sa texture légère, sa pénétration rapide et son parfum naturel. Quelques gouttes suffisent pour une peau hydratée et lumineuse, avec un flacon qui dure dans le temps.`,
    videos: [ "1D1jkbqN5EY" ] }

];

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ⛔ FIN DES RÉGLAGES — ne rien modifier en dessous                    │
   └─────────────────────────────────────────────────────────────────────┘ */

if(window.__ebExperience) return;
window.__ebExperience = true;

function esc(t){ return String(t == null ? '' : t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function img(url, l){ return url + (url.indexOf('?') > -1 ? '&' : '?') + 'width=' + l; }

/* ─── Styles ─── */
var css = ''
+ '.ebx{width:100%;container-type:inline-size;font-family:"Montserrat",sans-serif;color:#000;text-align:left;-webkit-tap-highlight-color:transparent}'
+ '.ebx *{box-sizing:border-box}'
+ '.ebx-grille{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:26px 14px;align-items:start}'
+ '@container (min-width:560px){.ebx-grille{grid-template-columns:repeat(3,minmax(0,1fr));gap:40px 24px}}'
+ '.ebx-carte{display:block;width:100%;padding:0;margin:0;border:0;background:none;cursor:pointer;text-align:left;font:inherit;color:#000}'
+ '.ebx-carte.ebx-cachee{display:none}'
+ '.ebx-photo{display:block;position:relative;overflow:hidden;aspect-ratio:4/5;background:#EBE5DB}'
+ '.ebx-photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .7s ease}'
+ '.ebx-carte:hover .ebx-photo img{transform:scale(1.05)}'
+ '.ebx-play{position:absolute;left:10px;bottom:10px;width:32px;height:32px;border-radius:50%;background:rgba(246,244,240,.92);display:flex;align-items:center;justify-content:center}'
+ '.ebx-play:after{content:"";margin-left:3px;border-style:solid;border-width:6px 0 6px 10px;border-color:transparent transparent transparent #000}'
+ '.ebx-prenom{display:block;margin:12px 0 4px;font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase}'
+ '.ebx-soin{display:block;font-size:11.5px;font-weight:300;line-height:1.45;opacity:.75}'
+ '.ebx-plus-zone{text-align:center;margin-top:34px}'
+ '.ebx-plus{background:none;border:0;border-bottom:1px solid #000;padding:0 0 4px;font-family:"Montserrat",sans-serif;font-size:11.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#000;cursor:pointer}'
/* Panneau */
+ '.ebx-fond{position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:70px 16px 16px;opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s ease;font-family:"Montserrat",sans-serif;color:#000}'
+ '.ebx-fond.ebx-ouvert{opacity:1;visibility:visible}'
+ '.ebx-panneau{position:relative;background:#F6F4F0;width:min(760px,100%);max-height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch;transform:translateY(16px);transition:transform .3s ease;box-shadow:0 30px 80px rgba(0,0,0,.3)}'
+ '.ebx-fond.ebx-ouvert .ebx-panneau{transform:none}'
+ '.ebx-fermer{position:absolute;top:12px;right:12px;z-index:5;width:38px;height:38px;border-radius:50%;background:#000;color:#fff;border:0;font-size:22px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 10px rgba(0,0,0,.3)}'
/* Vue texte */
+ '.ebx-fiche{display:grid;grid-template-columns:minmax(0,1fr)}'
+ '.ebx-fiche-photo{position:relative;background:#EBE5DB;aspect-ratio:16/11;overflow:hidden}'
+ '.ebx-fiche-photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 25%}'
+ '.ebx-fiche-txt{padding:26px 24px 30px;display:flex;flex-direction:column;justify-content:center}'
+ '.ebx-tag{font-size:9.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;opacity:.55;margin-bottom:10px}'
+ '.ebx-nom{font-size:20px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin:0 0 6px;line-height:1.2}'
+ '.ebx-fiche-soin{font-size:12.5px;font-weight:500;opacity:.7;margin-bottom:18px;line-height:1.45}'
+ '.ebx-texte{font-size:14px;font-weight:300;line-height:1.75;margin:0 0 24px}'
+ '.ebx-texte strong{font-weight:600}'
+ '.ebx-btn{align-self:flex-start;display:inline-flex;align-items:center;gap:10px;background:#000;color:#fff;border:0;padding:14px 26px;font-family:"Montserrat",sans-serif;font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:transform .2s ease}'
+ '.ebx-btn:hover{transform:scale(1.03)}'
+ '.ebx-btn:before{content:"";border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent #fff}'
+ '@media (min-width:700px){.ebx-fiche{grid-template-columns:42% minmax(0,1fr)}.ebx-fiche-photo{aspect-ratio:auto;min-height:440px}.ebx-fiche-txt{padding:44px 40px}}'
/* Vue vidéo */
+ '.ebx-video{display:flex;flex-direction:column;align-items:center;padding:60px 20px 26px;background:#F6F4F0}'
+ '.ebx-video-cadre{position:relative;height:min(64vh,600px);aspect-ratio:9/16;max-width:100%;background:#F6F4F0}'
+ '.ebx-video-cadre iframe{position:absolute;inset:0;width:100%;height:100%;border:0;pointer-events:none}'
+ '.ebx-bouclier{position:absolute;inset:0;z-index:2;cursor:pointer;background:transparent}'
+ '.ebx-video-bas{width:100%;max-width:420px;text-align:center;padding-top:18px}'
+ '.ebx-video-bas .ebx-nom{font-size:15px;margin-bottom:4px}'
+ '.ebx-video-bas .ebx-fiche-soin{margin-bottom:14px}'
+ '.ebx-liens{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:14px 22px}'
+ '.ebx-video-bas .ebx-btn{align-self:center}'
+ '.ebx-retour{background:none;border:0;border-bottom:1px solid #000;padding:0 0 3px;font-family:"Montserrat",sans-serif;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#000;cursor:pointer}'
+ 'html.ebx-bloque,html.ebx-bloque body{overflow:hidden !important}';

var st = document.createElement('style');
st.textContent = css;
document.head.appendChild(st);

/* ─── Grille ─── */
function construireGrille(zone){
  var h = '<div class="ebx"><div class="ebx-grille">';
  COLLABORATRICES.forEach(function(c, i){
    h += '<button type="button" class="ebx-carte' + (i >= NOMBRE_VISIBLE ? ' ebx-cachee' : '') + '" data-ebx="' + i + '" aria-label="Découvrir le retour de ' + esc(c.prenom) + '">'
       +   '<span class="ebx-photo"><img src="' + esc(img(c.photo, 600)) + '" alt="' + esc(c.prenom) + '" loading="lazy"><span class="ebx-play"></span></span>'
       +   '<span class="ebx-prenom">' + esc(c.prenom) + '</span>'
       +   '<span class="ebx-soin">' + esc(c.soin) + '</span>'
       + '</button>';
  });
  h += '</div>';
  if(COLLABORATRICES.length > NOMBRE_VISIBLE){
    h += '<div class="ebx-plus-zone"><button type="button" class="ebx-plus">Voir toutes les collaboratrices</button></div>';
  }
  h += '</div>';
  zone.innerHTML = h;

  zone.addEventListener('click', function(e){
    var carte = e.target.closest('.ebx-carte');
    if(carte){ ouvrir(+carte.getAttribute('data-ebx')); return; }
    var plus = e.target.closest('.ebx-plus');
    if(plus){
      zone.querySelectorAll('.ebx-cachee').forEach(function(el){ el.classList.remove('ebx-cachee'); });
      plus.parentNode.remove();
    }
  });
}

/* ─── Panneau ─── */
var fond, panneau, contenu, actuelle = null, videoIndex = 0, enLecture = true;

function creerPanneau(){
  fond = document.createElement('div');
  fond.className = 'ebx-fond';
  fond.innerHTML = '<div class="ebx-panneau" role="dialog" aria-modal="true"><button type="button" class="ebx-fermer" aria-label="Fermer">×</button><div class="ebx-contenu"></div></div>';
  document.body.appendChild(fond);
  panneau = fond.querySelector('.ebx-panneau');
  contenu = fond.querySelector('.ebx-contenu');

  fond.addEventListener('click', function(e){
    if(e.target === fond || e.target.closest('.ebx-fermer')){ fermer(); return; }
    if(e.target.closest('.ebx-voir')){ videoIndex = 0; vueVideo(); return; }
    if(e.target.closest('.ebx-autre')){ videoIndex = videoIndex === 0 ? 1 : 0; vueVideo(); return; }
    if(e.target.closest('.ebx-retour')){ vueTexte(); return; }
    if(e.target.closest('.ebx-bouclier')){ lecturePause(); }
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && fond.classList.contains('ebx-ouvert')) fermer();
  });
}

function vueTexte(){
  var c = COLLABORATRICES[actuelle];
  contenu.innerHTML = '<div class="ebx-fiche">'
    + '<div class="ebx-fiche-photo"><img src="' + esc(img(c.photo, 900)) + '" alt="' + esc(c.prenom) + '"></div>'
    + '<div class="ebx-fiche-txt">'
    +   '<div class="ebx-tag">Leur expérience</div>'
    +   '<h3 class="ebx-nom">' + esc(c.prenom) + '</h3>'
    +   '<div class="ebx-fiche-soin">' + esc(c.soin) + '</div>'
    +   '<p class="ebx-texte">' + c.texte + '</p>'
    +   (c.videos && c.videos.length ? '<button type="button" class="ebx-btn ebx-voir">Voir la vidéo</button>' : '')
    + '</div></div>';
  panneau.scrollTop = 0;
}

function vueVideo(){
  var c = COLLABORATRICES[actuelle];
  var id = c.videos[videoIndex];
  enLecture = true;
  contenu.innerHTML = '<div class="ebx-video">'
    + '<div class="ebx-video-cadre"><iframe id="ebxIframe" src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?rel=0&modestbranding=1&playsinline=1&autoplay=1&enablejsapi=1" allow="autoplay; encrypted-media" allowfullscreen></iframe><div class="ebx-bouclier"></div></div>'
    + '<div class="ebx-video-bas">'
    +   '<h3 class="ebx-nom">' + esc(c.prenom) + '</h3>'
    +   '<div class="ebx-fiche-soin">' + esc(c.soin) + '</div>'
    +   '<div class="ebx-liens">'
    +     (c.videos.length > 1 ? '<button type="button" class="ebx-btn ebx-autre">Voir l’autre vidéo</button>' : '')
    +     '<button type="button" class="ebx-retour">← Retour au texte</button>'
    +   '</div>'
    + '</div></div>';
  panneau.scrollTop = 0;
}

function lecturePause(){
  var f = document.getElementById('ebxIframe');
  if(!f || !f.contentWindow) return;
  f.contentWindow.postMessage(JSON.stringify({ event: 'command', func: enLecture ? 'pauseVideo' : 'playVideo', args: [] }), '*');
  enLecture = !enLecture;
}

function ouvrir(i){
  if(!COLLABORATRICES[i]) return;
  if(!fond) creerPanneau();
  actuelle = i;
  vueTexte();
  document.documentElement.classList.add('ebx-bloque');
  fond.offsetHeight;
  fond.classList.add('ebx-ouvert');
}

function fermer(){
  fond.classList.remove('ebx-ouvert');
  document.documentElement.classList.remove('ebx-bloque');
  setTimeout(function(){ if(!fond.classList.contains('ebx-ouvert')) contenu.innerHTML = ''; }, 300); // arrête la vidéo
}

/* ─── Démarrage ─── */
function demarrer(){
  var zone = document.getElementById('eb-experience');
  if(zone && !zone.getAttribute('data-ebx-pret')){
    zone.setAttribute('data-ebx-pret', '1');
    construireGrille(zone);
  }
}
if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', demarrer); } else { demarrer(); }

})();
