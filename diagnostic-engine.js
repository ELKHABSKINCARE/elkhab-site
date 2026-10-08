(function(){
  var styleTag = document.createElement('style');
  styleTag.textContent = '\n.eb-diag-overlay{position:fixed;inset:0;background:#141414;z-index:99999;transform:translateX(-100%);transition:transform .5s cubic-bezier(.65,0,.35,1);overflow-y:auto;font-family:\'Montserrat\',sans-serif;color:#fff}\n.eb-diag-overlay.open{transform:translateX(0)}\n.eb-diag-close{position:fixed;top:20px;right:20px;z-index:100000;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.35);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.5);display:none;align-items:center;justify-content:center;font-family:\'Montserrat\',sans-serif;font-size:20px;font-weight:300;line-height:1;color:#000;cursor:pointer;padding:0;transition:transform .2s ease}\n.eb-diag-close.visible{display:flex}\n.eb-diag-close:hover{transform:scale(1.1)}\n.eb-diag-progress{position:fixed;top:0;left:0;right:0;height:2px;background:rgba(255,255,255,.15);z-index:2}\n.eb-diag-progress-bar{height:100%;background:#fff;width:0%;transition:width .5s ease}\n.eb-diag-screen{display:none;animation:ebFadeIn .5s ease}\n.eb-diag-screen.active{display:block;min-height:100vh}\n@keyframes ebFadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}\n\n.eb-diag-screen.active[data-screen="intro"]{height:100vh;display:flex;flex-direction:column;overflow:hidden}\n.eb-diag-intro-top{padding:52px 24px 14px;text-align:center;flex-shrink:0}\n.eb-diag-intro-brand{font-size:11px;letter-spacing:.22em;text-transform:uppercase;opacity:.55;margin-bottom:8px}\n.eb-diag-intro-title{font-size:22px;font-weight:800;letter-spacing:.02em}\n.eb-diag-intro-image{flex-shrink:0;aspect-ratio:16/9;width:100%;background-color:#111;position:relative;overflow:hidden}\n.eb-diag-intro-image video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n@media (min-width:900px){.eb-diag-intro-image{width:min(720px,calc(52vh * 16 / 9));align-self:center;margin:0 auto}.eb-diag-intro-top{padding-top:64px}}\n.eb-diag-intro-bottom{padding:18px 28px 28px;text-align:center;max-width:480px;margin:0 auto;flex-shrink:0}\n.eb-diag-intro-text{font-size:13px;line-height:1.6;opacity:.75;margin-bottom:18px}\n\n.eb-diag-content{max-width:520px;margin:0 auto;padding:104px 28px 60px}\n.eb-diag-eyebrow{font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.5;margin-bottom:16px}\n.eb-diag-question{font-size:22px;font-weight:700;line-height:1.45;margin-bottom:30px}\n.eb-diag-answer{display:block;width:100%;text-align:left;background:transparent;border:1px solid rgba(255,255,255,.4);padding:18px 20px;margin-bottom:18px;font-family:\'Montserrat\',sans-serif;font-size:15px;font-weight:500;color:#fff;cursor:pointer;transition:transform .22s ease,background .22s ease,color .22s ease,border-color .22s ease;line-height:1.5}\n.eb-diag-answer:hover{transform:scale(1.02);background:#fff;color:#000;border-color:#fff}\n.eb-diag-start-btn{display:inline-block;width:100%;text-align:center;background:#fff;color:#000;border:none;padding:18px;font-family:\'Montserrat\',sans-serif;font-size:14px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:transform .2s ease}\n.eb-diag-start-btn:hover{transform:scale(1.03)}\n.eb-diag-nav{display:flex;justify-content:space-between;align-items:center;margin-top:28px;gap:16px}\n.eb-diag-back{background:transparent;border:1px solid rgba(255,255,255,.4);color:#fff;font-family:\'Montserrat\',sans-serif;font-size:11px;letter-spacing:.08em;text-transform:uppercase;padding:13px 22px;cursor:pointer;transition:background .2s ease,color .2s ease}\n.eb-diag-back:hover{background:#fff;color:#000}\n.eb-diag-count{font-size:11.5px;opacity:.55;letter-spacing:.04em}\n\n.eb-diag-result-eyebrow{font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.5;margin-bottom:16px}\n.eb-diag-result-headline{font-size:24px;font-weight:800;line-height:1.45;margin-bottom:30px}\n.eb-diag-result p{font-size:13px;line-height:2;margin:0 0 22px;opacity:.85}\n.eb-diag-result h4{font-size:13px;letter-spacing:.1em;text-transform:uppercase;margin:38px 0 4px;font-weight:700}\n.eb-diag-result-needs-list{margin:0;padding:0;list-style:none}\n.eb-diag-result-needs-list li{font-size:14.5px;line-height:2.1;margin-bottom:16px;padding-left:22px;position:relative;opacity:.85}\n.eb-diag-result-needs-list li:before{content:"•";position:absolute;left:0;top:0;font-size:16px;opacity:.6}\n.eb-diag-acc{margin:0 0 10px}\n.eb-diag-acc-item{border-top:1px solid rgba(255,255,255,.3)}\n.eb-diag-acc-item:last-child{border-bottom:1px solid rgba(255,255,255,.3)}\n.eb-diag-acc-header{display:flex;justify-content:space-between;align-items:center;padding:22px 2px;cursor:pointer}\n.eb-diag-acc-header h4{margin:0;font-size:12.5px;letter-spacing:.09em;text-transform:uppercase;font-weight:700}\n.eb-diag-acc-icon{font-size:20px;font-weight:300;transition:transform .3s ease;flex-shrink:0;margin-left:12px}\n.eb-diag-acc-item.open .eb-diag-acc-icon{transform:rotate(45deg)}\n.eb-diag-acc-body{max-height:0;overflow:hidden;transition:max-height .4s ease}\n.eb-diag-acc-item.open .eb-diag-acc-body{max-height:900px}\n.eb-diag-acc-body-inner{padding:4px 2px 28px}\n.eb-diag-acc-body-inner p:first-child{margin-top:0}\n.eb-diag-acc-body-inner p:last-child{margin-bottom:0}\n.eb-diag-product{border:1px solid rgba(255,255,255,.4);padding:22px;margin-bottom:20px;cursor:pointer;transition:transform .2s ease,background .2s ease,border-color .2s ease}\n.eb-diag-product:hover{transform:scale(1.02);background:rgba(255,255,255,.06);border-color:#fff}\n.eb-diag-product-name{font-weight:700;font-size:15px;margin-bottom:8px}\n.eb-diag-product-why{font-size:13px;line-height:1.75;opacity:.65}\n.eb-diag-approach{margin-top:42px;padding:30px;border:1px solid rgba(255,255,255,.4)}\n.eb-diag-approach p{margin-bottom:0}\n.eb-diag-final{text-align:center;margin-top:38px}\n.eb-diag-footnote{font-size:13px;line-height:1.9;opacity:.55;font-style:italic;margin:0}\n.eb-diag-gesture{font-style:italic;opacity:.6;font-size:13.5px;line-height:1.8;margin-top:8px}\n.eb-diag-cta{display:inline-block;margin-top:22px;padding:17px 34px;background:#fff;color:#000;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;transition:transform .2s ease}\n.eb-diag-cta:hover{transform:scale(1.05)}\n.eb-diag-restart{display:table;margin:22px auto 0;background:none;border:none;font-family:\'Montserrat\',sans-serif;font-size:12px;text-decoration:underline;opacity:.5;color:#fff;cursor:pointer}\n';
  document.head.appendChild(styleTag);

  // Vidéo d'introduction — hébergée sur le site Accueil (elkhab.com)
  var EB_DIAG_VIDEO = 'https://cdn.shopify.com/videos/c/o/v/abdc438cf15542ef9daf8749d954cd2b.mp4';

  var container = document.createElement('div');
  container.innerHTML = '<div class="eb-diag-overlay" id="ebDiagOverlay">\n  <div class="eb-diag-progress"><div class="eb-diag-progress-bar" id="ebProgressBar"></div></div>\n\n  <div class="eb-diag-screen active" data-screen="intro">\n    <div class="eb-diag-intro-top">\n      <div class="eb-diag-intro-brand">ELKHA.B</div>\n      <div class="eb-diag-intro-title">Votre peau évolue</div>\n    </div>\n    <div class="eb-diag-intro-image"><video autoplay muted loop playsinline src="' + EB_DIAG_VIDEO + '"></video></div>\n    <div class="eb-diag-intro-bottom">\n      <div class="eb-diag-intro-text">Ce diagnostic vous aide à mieux comprendre votre peau et à lui apporter des soins réellement adaptés, parmi l\'ensemble des gammes ELKHA.B.<br><br>6 questions, une minute, une routine pensée pour vous.<br>Et, si vous le souhaitez, un focus sur votre regard.</div>\n      <button class="eb-diag-start-btn" onclick="ebDiagStart()">Commencer mon diagnostic</button>\n    </div>\n  </div>\n\n  <div class="eb-diag-screen" data-screen="questions">\n    <div class="eb-diag-content">\n      <div class="eb-diag-eyebrow" id="ebQIntro"></div>\n      <div class="eb-diag-question" id="ebQTitle"></div>\n      <div id="ebQAnswers"></div>\n      <div class="eb-diag-nav">\n        <button class="eb-diag-back" id="ebBack" onclick="ebDiagBack()">Précédent</button>\n        <div class="eb-diag-count" id="ebCount"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class="eb-diag-screen" data-screen="result">\n    <div class="eb-diag-content">\n      <div id="ebResultContent"></div>\n      <button class="eb-diag-restart" onclick="ebDiagRestart()">Refaire le diagnostic</button>\n    </div>\n  </div>\n</div>';
  document.body.appendChild(container);

  // Croix de fermeture : placée hors du panneau pour rester fixe à l'écran pendant le défilement
  var closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'eb-diag-close';
  closeBtn.id = 'ebDiagCloseBtn';
  closeBtn.setAttribute('aria-label', 'Fermer');
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', function(){ if(window.ebDiagClose) window.ebDiagClose(); });
  document.body.appendChild(closeBtn);

  // ==========================================================================
  // ORDINATEUR : deux colonnes — vidéos à gauche (en fondu enchaîné), diagnostic à droite
  // ==========================================================================
  var EB_DIAG_VIDEOS = [
    'https://cdn.shopify.com/videos/c/o/v/44d073274ddc45f2b336ec63cd08f88d.mp4',
    'https://cdn.shopify.com/videos/c/o/v/b0123ce9a6924f3eb5a61934eafdc044.mp4',
    'https://cdn.shopify.com/videos/c/o/v/abdc438cf15542ef9daf8749d954cd2b.mp4',
    'https://cdn.shopify.com/videos/c/o/v/3ca944e1c65749beac96a1de37005378.mp4'
  ];
  var sideCss = document.createElement('style');
  sideCss.textContent = ''
    + '.eb-diag-side{display:none}'
    + '@media (min-width:900px){'
    +   '.eb-diag-side{display:block;position:fixed;top:0;left:0;width:42vw;height:100vh;background:#141414;z-index:99999;overflow:hidden;transform:translateX(-100%);transition:transform .5s cubic-bezier(.65,0,.35,1)}'
    +   '.eb-diag-side.open{transform:translateX(0)}'
    +   '.eb-diag-side video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 1.2s ease}'
    +   '.eb-diag-side video.eb-paysage{object-fit:contain}'
    +   '.eb-diag-side video.eb-visible{opacity:1}'
    +   '#ebDiagOverlay{padding-left:42vw}'
    +   '#ebDiagOverlay .eb-diag-intro-image{display:none}'
    +   '#ebDiagOverlay .eb-diag-screen[data-screen="intro"].active{min-height:100vh;display:flex;flex-direction:column;justify-content:center}'
    + '}';
  document.head.appendChild(sideCss);

  var side = document.createElement('div');
  side.className = 'eb-diag-side';
  side.innerHTML = '<video muted playsinline preload="auto"></video><video muted playsinline preload="none"></video>';
  document.body.appendChild(side);
  var lecteurs = side.querySelectorAll('video');
  var actif = 0, rang = 0;

  function formater(v){
    // Vidéo horizontale (16/9) : affichée en entier ; vidéo portrait : remplit la colonne
    v.classList.toggle('eb-paysage', v.videoWidth > v.videoHeight);
  }
  lecteurs.forEach(function(v){
    v.addEventListener('loadedmetadata', function(){ formater(v); });
    v.addEventListener('ended', function(){ if(v === lecteurs[actif]) suivante(); });
  });
  function jouer(v){ v.muted = true; var p = v.play(); if(p && p.catch) p.catch(function(){}); }
  function preparer(v, i){ v.preload = 'auto'; v.src = EB_DIAG_VIDEOS[i % EB_DIAG_VIDEOS.length]; }
  function suivante(){
    var courant = lecteurs[actif], prochain = lecteurs[1 - actif];
    rang = (rang + 1) % EB_DIAG_VIDEOS.length;
    if(!prochain.src || prochain.getAttribute('data-rang') != String(rang)){ preparer(prochain, rang); }
    prochain.currentTime = 0;
    jouer(prochain);
    prochain.classList.add('eb-visible');
    courant.classList.remove('eb-visible');
    actif = 1 - actif;
    // Une fois le fondu terminé, l'ancienne vidéo laisse place à la suivante, qui se prépare discrètement
    var apres = (rang + 1) % EB_DIAG_VIDEOS.length;
    setTimeout(function(){
      courant.pause();
      preparer(courant, apres); courant.setAttribute('data-rang', String(apres));
    }, 1300);
  }
  function demarrerColonne(){
    if(!window.matchMedia('(min-width:900px)').matches) return;
    var v = lecteurs[actif];
    if(!v.src){
      rang = 0; preparer(v, 0); v.setAttribute('data-rang', '0');
      preparer(lecteurs[1 - actif], 1); lecteurs[1 - actif].setAttribute('data-rang', '1');
    }
    v.classList.add('eb-visible');
    jouer(v);
  }
  function arreterColonne(){ lecteurs.forEach(function(v){ v.pause(); }); }

  // La colonne s'ouvre et se ferme en même temps que le diagnostic
  var ov = document.getElementById('ebDiagOverlay');
  if(ov && window.MutationObserver){
    new MutationObserver(function(){
      var ouvert = ov.classList.contains('open');
      side.classList.toggle('open', ouvert);
      if(ouvert) demarrerColonne(); else arreterColonne();
    }).observe(ov, { attributes: true, attributeFilter: ['class'] });
  }
})();


(function(){

// ═══════════════════════════════════════════════════════════════════════
//  RÉGLAGES DU DIAGNOSTIC — tout ce qui peut se modifier est ici
// ═══════════════════════════════════════════════════════════════════════

// Adresse du Google Sheet (même script que la newsletter et les collaborations)
var URL_SCRIPT = "https://script.google.com/macros/s/AKfycbxQCXs8onhnmA1p_mbMHPWhlUF0x_sIxRiveilPYitjZExd70PZLilpMxflvT8ttTVa1Q/exec";

// Les soins que le diagnostic peut conseiller (prix de secours : le prix réel est lu dans produits-data quand il est chargé)
var SOINS = {
  "radiance-serum":       { nom:"Radiance C Serum", why:"Soin éclat dynamisant à la vitamine C, antioxydant, unifie le teint", prix:"34,90€" },
  "lumibloom-niac-5":     { nom:"Lumi-Bloom Niacinamide 5", why:"Régule le sébum, resserre les pores, unifie le teint et estompe les taches", prix:"34,90€" },
  "gelee-lumibloom":      { nom:"Gelée Lumi-Bloom", why:"Prébiotique bioactif : répare la barrière cutanée et protège le microbiote de la peau", prix:"28,90€" },
  "luminescence-jour":    { nom:"Luminescence Jour", why:"Hydratation intense et apaisante", prix:"34,90€" },
  "luminescence-nuit":    { nom:"Luminescence Nuit", why:"Hydratation intense et effet fermeté pendant la nuit", prix:"34,90€" },
  "lumiveil-cc-cream":    { nom:"Lumi-Veil CC Cream SPF 30", why:"Unifie le teint, protège du soleil et répare la barrière (céramides, beurre de cacao)", prix:"26,90€" },
  "radiance-protect":     { nom:"Radiance Protect SPF 50", why:"Le geste à ne pas oublier : une protection solaire quotidienne", prix:"26,90€" },
  "radiance-eye-cream":   { nom:"Radiance Eye Cream", why:"Le soin quotidien du contour de l'œil : hydrate, atténue poches et cernes, lisse les ridules", prix:"28,90€" },
  "bright-glow-patch":            { nom:"Lumi-Eyes Bright & Glow", formule:"Patchs éclaircissants & lissants", why:"Niacinamide et acide hyaluronique : atténuent les cernes et lissent les ridules", prix:"28,90€" },
  "bright-glow-decongestionnant": { nom:"Lumi-Eyes Bright & Glow", formule:"Patchs éclat décongestionnants", why:"Caféine et vitamine C : dégonflent les poches et réveillent l'éclat du regard", prix:"28,90€" },
  "bright-glow-anti-fatigue":     { nom:"Lumi-Eyes Bright & Glow", formule:"Patchs anti-fatigue réconfortants", why:"Antioxydants et provitamine B5 : réconfortent un contour sec et effacent les signes de fatigue", prix:"28,90€" }
};

// Les routines ELKHA.B : proposées UNIQUEMENT si les soins conseillés forment exactement l'une d'elles
var ROUTINES = [
  { id:"routine-hydratation",      nom:"Routine Hydratation",        prix:"63€",    soins:["gelee-lumibloom","luminescence-jour"] },
  { id:"routine-teint-protection", nom:"Routine Teint & Protection", prix:"61€",    soins:["radiance-serum","lumiveil-cc-cream"] },
  { id:"rituel-luminescence",      nom:"Rituel Luminescence",        prix:"67,90€", soins:["luminescence-jour","luminescence-nuit"] },
  { id:"routine-eclat",            nom:"Routine Éclat",              prix:"96€",    soins:["radiance-serum","luminescence-jour","lumiveil-cc-cream"] },
  { id:"routine-equilibre",        nom:"Routine Équilibre",          prix:"90€",    soins:["lumibloom-niac-5","gelee-lumibloom","lumiveil-cc-cream"] },
  { id:"routine-regard",           nom:"Routine Regard",             prix:"57€",    soins:["radiance-eye-cream","PATCH"] }
];

// VISAGE — le soin qui répond à chaque besoin (1 seul soin par besoin)
var SOIN_PAR_BESOIN = {
  radiance:    "radiance-serum",
  sebum:       "lumibloom-niac-5",
  texture:     "lumibloom-niac-5",
  hydration:   "luminescence-jour",
  sensitivity: "gelee-lumibloom",
  barrier:     "gelee-lumibloom"
};
// VISAGE — duos particuliers (sinon : le soin du 1er besoin + celui du 2e)
var DUOS = {
  "radiance+sensitivity": ["radiance-serum", "luminescence-jour"],   // éclat + vraie hydratation derrière
  "radiance+barrier":     ["radiance-serum", "lumiveil-cc-cream"]
};
// Peau TRÈS sensible ou irritée (score de sensibilité à partir de ce chiffre) : pas de vitamine C
var SCORE_TRES_SENSIBLE = 4;
var DUO_TRES_SENSIBLE_ECLAT = ["gelee-lumibloom", "lumiveil-cc-cream"];
// Mention affichée sous Radiance C Serum quand la peau est sensible
var MENTION_PEAU_SENSIBLE = "Peau sensible : intégrez-le progressivement, un jour sur deux au début. En cas de picotements, espacez les applications, voire arrêtez.";
// VISAGE — peau équilibrée : un seul soin pour préserver cet équilibre
var SOIN_PEAU_EQUILIBREE = "luminescence-jour";
// VISAGE — le 2e besoin ne compte (texte + soin) que s'il atteint ce score
var SCORE_MIN_2E_BESOIN = 2;
// Ordre d'application des soins (du plus léger au plus enveloppant)
var ORDRE = ["radiance-serum","lumibloom-niac-5","gelee-lumibloom","luminescence-jour","luminescence-nuit","lumiveil-cc-cream","radiance-eye-cream"];

// REGARD — les signes proposés et les patchs qui y répondent
var SIGNES = [
  { k:"cernes",  t:"Des cernes",                         patch:"bright-glow-patch" },
  { k:"poches",  t:"Des poches, un regard gonflé",       patch:"bright-glow-decongestionnant" },
  { k:"ridules", t:"Des ridules",                        patch:"bright-glow-patch" },
  { k:"sec",     t:"Un contour sec ou inconfortable",    patch:"bright-glow-anti-fatigue" },
  { k:"fatigue", t:"Un regard fatigué",                  patch:"bright-glow-anti-fatigue" },
  { k:"terne",   t:"Un regard terne, qui manque d'éclat", patch:"bright-glow-decongestionnant" }
];
// REGARD — selon la fréquence : patchs seuls, crème seule, ou les deux (= Routine Regard)
var FREQUENCES = [
  { k:"passagers", t:"Passagers : après une nuit courte ou une période chargée", soins:["PATCH"] },
  { k:"legers",    t:"Présents au quotidien, mais légers",                       soins:["radiance-eye-cream"] },
  { k:"marques",   t:"Présents au quotidien et bien marqués",                    soins:["radiance-eye-cream","PATCH"] }
];

// ═══════════════════════════════════════════════════════════════════════

// Adresses : lues dans cart-engine.js (un seul endroit), avec une valeur de secours
function ebDiagSiteUrl(name, fallback){
  return (window.EB_SITES && window.EB_SITES[name]) || fallback;
}

const questions = [
  { intro:"Lorsque vous vous regardez dans le miroir...", q:"Comment décririez-vous l'éclat de votre peau ?",
    answers:[
      {t:"Lumineuse et uniforme", pts:{radiance:0}},
      {t:"Un peu terne par moments", pts:{radiance:1}},
      {t:"Fatiguée, manque d'éclat", pts:{radiance:2}},
      {t:"Irrégulière, avec des zones ternes", pts:{radiance:2, texture:1}}
    ]},
  { intro:"Au fil de la journée, sans retoucher votre peau...", q:"Comment se comporte-t-elle ?",
    answers:[
      {t:"Reste confortable et stable", pts:{}},
      {t:"Tiraille légèrement en fin de journée", pts:{hydration:1}},
      {t:"Brille sur la zone T (front, nez, menton)", pts:{sebum:1}},
      {t:"Devient franchement brillante partout", pts:{sebum:2}}
    ]},
  { intro:"En observant votre peau de près...", q:"Comment est le grain de peau et les pores ?",
    answers:[
      {t:"Fin et régulier, pores peu visibles", pts:{}},
      {t:"Quelques irrégularités par endroits", pts:{texture:1}},
      {t:"Pores dilatés, surtout zone T", pts:{texture:2, sebum:1}},
      {t:"Imperfections ou points noirs fréquents", pts:{texture:2, sebum:1}}
    ]},
  { intro:"Sans aucun soin appliqué...", q:"Comment se sent votre peau au naturel ?",
    answers:[
      {t:"Confortable, sans tiraillement", pts:{}},
      {t:"Un peu sèche par endroits", pts:{hydration:1}},
      {t:"Sèche et inconfortable", pts:{hydration:2, barrier:1}},
      {t:"Tiraille et réagit facilement", pts:{hydration:2, barrier:1, sensitivity:1}}
    ]},
  { intro:"Face au vent, au froid, à un nouveau soin...", q:"Comment réagit votre peau aux changements ?",
    answers:[
      {t:"Ne réagit presque jamais", pts:{}},
      {t:"Rougit ou tiraille parfois", pts:{sensitivity:1}},
      {t:"Réagit facilement (rougeurs, échauffement)", pts:{sensitivity:2, barrier:1}},
      {t:"Devient inconfortable au moindre changement", pts:{sensitivity:2, barrier:2}}
    ]},
  { intro:"Ce qui vous préoccupe le plus, aujourd'hui...", q:"Si vous deviez ne changer qu'une chose sur votre peau, ce serait :",
    answers:[
      {t:"Retrouver de l'éclat", pts:{radiance:2}},
      {t:"Réguler les brillances et affiner les pores", pts:{sebum:2, texture:1}},
      {t:"Apaiser et réparer une peau fragilisée", pts:{sensitivity:2, barrier:2}},
      {t:"Hydrater durablement", pts:{hydration:2}}
    ]}
];

const NEED_INFO = {
  radiance:{ label:"un manque d'éclat",
    text:"Votre teint peut paraître terne ou irrégulier. La peau perd en luminosité lorsqu'elle est ralentie ou en manque de stimulation.",
    needs:["Relancer l'éclat naturel","Uniformiser le teint","Stimuler la peau en douceur"] },
  sebum:{ label:"un excès de sébum",
    text:"Votre peau produit plus de sébum que nécessaire, ce qui peut se traduire par des brillances et des pores plus marqués.",
    needs:["Réguler la production de sébum","Matifier sans assécher","Affiner le grain de peau"] },
  hydration:{ label:"un manque d'hydratation",
    text:"Votre peau manque d'eau, ce qui entraîne tiraillements et inconfort au quotidien.",
    needs:["Retenir durablement l'hydratation","Réconforter la peau sans l'alourdir","Restaurer la souplesse"] },
  texture:{ label:"un grain de peau irrégulier",
    text:"Votre peau présente des irrégularités de surface : pores visibles, texture inégale ou petites imperfections.",
    needs:["Affiner le grain de peau","Resserrer l'apparence des pores","Unifier la surface de la peau"] },
  sensitivity:{ label:"une sensibilité marquée",
    text:"Votre peau réagit facilement aux changements extérieurs ou aux nouveaux soins — elle a besoin de douceur avant tout.",
    needs:["Apaiser les réactions cutanées","Renforcer la tolérance de la peau","Éviter la surcharge de soins"] },
  barrier:{ label:"une barrière cutanée fragilisée",
    text:"Votre barrière cutanée montre des signes de fragilité, ce qui explique inconfort, sensibilité ou déshydratation.",
    needs:["Restaurer la barrière cutanée","Protéger le microbiote de la peau","Retenir l'hydratation plus efficacement"] }
};

// ── Styles des nouveautés (choix multiples, résultat, regard, e-mail) ──
var css = document.createElement('style');
css.textContent = ''
  + '.eb-diag-acc-item.open .eb-diag-acc-body{max-height:4000px}'
  // Typographie unifiée du résultat (ces règles passent devant les styles de Carrd)
  + '#ebResultContent{font-family:Montserrat,sans-serif}'
  + '#ebResultContent .eb-diag-result-headline{font-size:15px !important;font-weight:700;letter-spacing:.06em;text-transform:uppercase;line-height:1.6 !important;margin:2px 0 20px}'
  + '#ebResultContent p{font-family:Montserrat,sans-serif;font-size:13.5px !important;font-weight:400;line-height:1.85 !important;margin:0 0 16px;opacity:.85;text-align:left;-webkit-hyphens:auto;hyphens:auto}'
  + '@media (min-width:600px){#ebResultContent p{text-align:justify}}'   // justifié sur ordinateur ; sur téléphone, aligné à gauche (sinon trous entre les mots)
  + '#ebResultContent .eb-diag-acc-body-inner p:last-child{margin-bottom:0}'
  + '#ebResultContent .eb-diag-result-needs-list li{font-size:13.5px !important;line-height:1.7 !important;margin-bottom:12px}'
  + '#ebResultContent .eb-diag-approach{padding:28px 30px}'
  + '#ebResultContent .eb-diag-approach h4{margin:0 0 14px !important;font-size:12.5px !important;font-weight:700;letter-spacing:.1em;text-transform:uppercase;line-height:1.5 !important}'
  + '#ebResultContent .eb-diag-approach p{font-style:italic;margin:0}'
  + '#ebResultContent .eb-diag-product-name{font-size:13.5px;letter-spacing:.05em;text-transform:uppercase;line-height:1.5}'
  + '#ebResultContent .eb-diag-formule{text-transform:none;letter-spacing:0}'
  + '#ebResultContent .eb-diag-product-why{font-size:13px;line-height:1.75}'
  + '#ebResultContent .eb-diag-gesture{font-size:13px;line-height:1.8}'
  + '#ebResultContent .eb-diag-mail p{text-align:left;opacity:.75;font-size:13px !important;line-height:1.7 !important;margin:0 0 18px}'
  + '#ebResultContent .eb-diag-mail .eb-diag-mail-mention{font-size:10.5px !important;line-height:1.6 !important;margin:12px 0 0}'
  + '#ebResultContent .eb-diag-mail-merci p{text-align:center;margin:0}'
  + '#ebResultContent .eb-diag-footnote{text-align:center;font-size:13px !important;line-height:1.9 !important}'
  + '.eb-diag-answer.eb-choisi{background:#fff;color:#000;border-color:#fff}'
  + '.eb-diag-answer.eb-multi{position:relative;padding-left:52px}'
  + '.eb-diag-answer.eb-multi:before{content:"";position:absolute;left:20px;top:50%;width:14px;height:14px;margin-top:-8px;border:1px solid currentColor}'
  + '.eb-diag-answer.eb-multi.eb-choisi:after{content:"";position:absolute;left:25px;top:50%;width:4px;height:8px;margin-top:-7px;border:solid #000;border-width:0 2px 2px 0;transform:rotate(45deg)}'
  + '.eb-diag-hint{font-size:12px;opacity:.55;margin:-18px 0 22px;letter-spacing:.02em}'
  + '.eb-diag-valider{margin-top:8px}'
  + '.eb-diag-valider[disabled]{opacity:.35;cursor:default;transform:none}'
  + '.eb-diag-prix{font-weight:400;opacity:.65;white-space:nowrap}'
  + '.eb-diag-formule{display:block;font-weight:400;font-size:12.5px;opacity:.75;margin-top:3px}'
  + '.eb-diag-routine-card{display:block;background:#fff;color:#000;text-decoration:none;padding:24px 22px;margin-bottom:22px;transition:transform .2s ease}'
  + '.eb-diag-routine-card:hover{transform:scale(1.02)}'
  + '.eb-diag-routine-tag{font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;opacity:.55;margin-bottom:8px}'
  + '.eb-diag-routine-nom{font-size:16px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;margin-bottom:6px}'
  + '.eb-diag-routine-txt{font-size:12.5px;line-height:1.7;opacity:.75}'
  + '.eb-diag-routine-cta{display:inline-block;margin-top:14px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;border-bottom:1px solid #000;padding-bottom:2px}'
  + '.eb-diag-sous{font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.5;margin:4px 0 14px}'
  + '.eb-diag-gesture a{color:#fff}'
  + '.eb-diag-alterner{font-size:12.5px;line-height:1.8;opacity:.65;margin:-4px 0 6px}'
  + '.eb-diag-alterner a{color:#fff}'
  + '.eb-diag-mail{margin-top:42px;padding:30px;background:#fff;color:#000}'
  + '.eb-diag-mail h4{margin:0 0 8px !important;font-size:13px;letter-spacing:.1em;text-transform:uppercase;font-weight:700}'
  + '.eb-diag-mail p{font-size:13px;line-height:1.7;margin:0 0 18px;opacity:.75}'
  + '.eb-diag-mail-champ{display:block;width:100%;box-sizing:border-box;height:50px;border:1px solid #000;background:#F6F4F0;padding:0 16px;font-family:Montserrat,sans-serif;font-size:16px;color:#000;border-radius:0;-webkit-appearance:none;outline:none;margin-bottom:14px}'
  + '.eb-diag-mail-case{display:flex;gap:10px;align-items:flex-start;font-size:12.5px;line-height:1.55;margin-bottom:18px;cursor:pointer}'
  + '.eb-diag-mail-case input{margin:2px 0 0;width:16px;height:16px;accent-color:#000;flex-shrink:0}'
  + '.eb-diag-mail-btn{display:block;width:100%;height:52px;border:0;background:#000;color:#fff;font-family:Montserrat,sans-serif;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;border-radius:0}'
  + '.eb-diag-mail-btn[disabled]{opacity:.5;cursor:default}'
  + '.eb-diag-mail-erreur{display:none;font-size:12px;color:#b3261e;margin:10px 0 0}'
  + '.eb-diag-mail-mention{font-size:10.5px !important;opacity:.55 !important;margin:12px 0 0 !important}'
  + '.eb-diag-mail-merci{display:none;text-align:center}'
  + '.eb-diag-mail.eb-envoye .eb-diag-mail-form{display:none}'
  + '.eb-diag-mail.eb-envoye .eb-diag-mail-merci{display:block}';
document.head.appendChild(css);

// ── État du diagnostic ──
// Étapes : 0 à 5 = visage ; "rq" = proposition regard ; "r1" signes ; "r2" priorité ; "r3" fréquence
let pile = [];              // étapes déjà vues (pour « Précédent »)
let etape = 0;
let reponses = [];          // réponse choisie à chaque question visage
let regard = null;          // { signes:[], prio:"", freq:"" } ou null si pas de focus regard
let scores = {};
let dernierResultat = null; // ce qui part dans l'e-mail

function ebShow(name){
  document.querySelectorAll('.eb-diag-screen').forEach(s=>s.classList.remove('active'));
  document.querySelector('[data-screen="'+name+'"]').classList.add('active');
}
function ebFormatRemaining(n){
  const totalSeconds = Math.max(n, 0) * 10;
  if(totalSeconds <= 10){ return "Dernière question"; }
  if(totalSeconds < 60){ return "Encore environ " + totalSeconds + " secondes"; }
  const minutes = Math.ceil(totalSeconds/60);
  return "Encore environ " + minutes + " minute" + (minutes>1?"s":"");
}
function restantes(){
  if(typeof etape === 'number') return (questions.length - etape);
  if(etape === 'rq') return 1;
  if(etape === 'r1') return 3;
  if(etape === 'r2') return 2;
  return 1;
}
function progression(){
  var total = questions.length + (regard ? 4 : 1);
  var fait = typeof etape === 'number' ? etape : ({rq:6, r1:7, r2:8, r3:9})[etape];
  document.getElementById('ebProgressBar').style.width = Math.min(8 + (fait/total)*92, 100) + '%';
}
function remonter(){ var ov = document.getElementById('ebDiagOverlay'); if(ov) ov.scrollTop = 0; }

function boutonReponse(texte, choisi, multi, action){
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'eb-diag-answer' + (multi ? ' eb-multi' : '') + (choisi ? ' eb-choisi' : '');
  btn.textContent = texte;
  btn.onclick = action;
  return btn;
}

function ebRender(){
  const wrap = document.getElementById('ebQAnswers');
  const intro = document.getElementById('ebQIntro');
  const titre = document.getElementById('ebQTitle');
  wrap.innerHTML = '';
  document.getElementById('ebCount').textContent = ebFormatRemaining(restantes());
  document.getElementById('ebBack').style.visibility = pile.length ? 'visible' : 'hidden';

  if(typeof etape === 'number'){
    const q = questions[etape];
    intro.textContent = q.intro; titre.textContent = q.q;
    q.answers.forEach(function(a, i){
      wrap.appendChild(boutonReponse(a.t, reponses[etape] === i, false, function(){ reponses[etape] = i; avancer(etape < questions.length - 1 ? etape + 1 : 'rq'); }));
    });
  }
  else if(etape === 'rq'){
    intro.textContent = "Pour aller plus loin...";
    titre.textContent = "Souhaitez-vous aussi faire le point sur votre regard ?";
    wrap.appendChild(boutonReponse("Oui, faire le point sur mon regard", false, false, function(){ regard = regard || { signes:[], prio:'', freq:'' }; avancer('r1'); }));
    wrap.appendChild(boutonReponse("Non, voir mon résultat", false, false, function(){ regard = null; terminer(); }));
  }
  else if(etape === 'r1'){
    intro.textContent = "Autour de vos yeux...";
    titre.textContent = "Qu'observez-vous ?";
    const hint = document.createElement('div'); hint.className = 'eb-diag-hint'; hint.textContent = "Plusieurs réponses possibles";
    wrap.appendChild(hint);
    const valider = document.createElement('button');
    valider.type = 'button'; valider.className = 'eb-diag-start-btn eb-diag-valider'; valider.textContent = 'Valider';
    function maj(){ valider.disabled = regard.signes.length === 0; }
    SIGNES.forEach(function(s){
      const b = boutonReponse(s.t, regard.signes.indexOf(s.k) !== -1, true, function(){
        const i = regard.signes.indexOf(s.k);
        if(i === -1) regard.signes.push(s.k); else regard.signes.splice(i, 1);
        b.classList.toggle('eb-choisi', i === -1);
        maj();
      });
      wrap.appendChild(b);
    });
    valider.onclick = function(){
      if(!regard.signes.length) return;
      // On garde l'ordre de la liste
      regard.signes = SIGNES.map(function(s){ return s.k; }).filter(function(k){ return regard.signes.indexOf(k) !== -1; });
      if(regard.signes.length > 1){ avancer('r2'); }
      else { regard.prio = regard.signes[0]; avancer('r3'); }
    };
    maj();
    wrap.appendChild(valider);
  }
  else if(etape === 'r2'){
    intro.textContent = "Parmi ce que vous avez remarqué...";
    titre.textContent = "Lequel vous gêne le plus ?";
    SIGNES.filter(function(s){ return regard.signes.indexOf(s.k) !== -1; }).forEach(function(s){
      wrap.appendChild(boutonReponse(s.t, regard.prio === s.k, false, function(){ regard.prio = s.k; avancer('r3'); }));
    });
  }
  else if(etape === 'r3'){
    intro.textContent = "Au fil des jours...";
    titre.textContent = "Ces signes sont plutôt :";
    FREQUENCES.forEach(function(f){
      wrap.appendChild(boutonReponse(f.t, regard.freq === f.k, false, function(){ regard.freq = f.k; terminer(); }));
    });
  }
  progression();
}
function avancer(suivante){ pile.push(etape); etape = suivante; ebRender(); remonter(); }

function ebDiagStart(){
  pile = []; etape = 0; reponses = []; regard = null;
  ebShow('questions');
  ebRender();
}
function ebDiagBack(){
  if(!pile.length) return;
  etape = pile.pop();
  if(etape === 'rq') regard = null;
  ebRender();
}
function calculerScores(){
  scores = {radiance:0, sebum:0, hydration:0, texture:0, sensitivity:0, barrier:0};
  reponses.forEach(function(i, q){
    if(i == null || !questions[q]) return;
    var pts = questions[q].answers[i].pts;
    Object.keys(pts).forEach(function(k){ scores[k] += pts[k]; });
  });
}
function terminer(){ calculerScores(); ebShowResult(false); }

function ebDiagAccToggle(headerEl){
  const item = headerEl.parentElement;
  const wasOpen = item.classList.contains('open');
  const parent = item.parentElement;
  parent.querySelectorAll('.eb-diag-acc-item').forEach(function(i){ i.classList.remove('open'); });
  if(!wasOpen){ item.classList.add('open'); }
}
window.ebDiagAccToggle = ebDiagAccToggle;

// ── Choix des soins ──
function prixDe(id, secours){
  var p = window.EB_PRODUITS && window.EB_PRODUITS[id];
  return String((p && p.prix) || secours || '').replace(/\s*€$/, ' €');
}
function routineQuiCorrespond(liste){
  var tri = liste.slice().sort().join('|');
  for(var i = 0; i < ROUTINES.length; i++){
    if(ROUTINES[i].soins.slice().sort().join('|') === tri) return ROUTINES[i];
  }
  return null;
}
function besoinsVisage(){
  const ranked = Object.keys(scores).sort((a,b)=>scores[b]-scores[a]);
  const top = [];
  if(scores[ranked[0]] > 0) top.push(ranked[0]);
  if(top.length && scores[ranked[1]] >= SCORE_MIN_2E_BESOIN) top.push(ranked[1]);
  return top;
}
function soinsVisage(top){
  if(!top.length) return [SOIN_PEAU_EQUILIBREE];
  var duo = DUOS[top.join('+')] || DUOS[top.slice().reverse().join('+')];
  if(top.indexOf('radiance') !== -1 && top.indexOf('sensitivity') !== -1 && scores.sensitivity >= SCORE_TRES_SENSIBLE) duo = DUO_TRES_SENSIBLE_ECLAT;
  var liste = duo ? duo.slice() : top.map(function(k){ return SOIN_PAR_BESOIN[k]; });
  liste = liste.filter(function(id, i){ return liste.indexOf(id) === i; }).slice(0, 3);
  return liste.sort(function(a, b){ return ORDRE.indexOf(a) - ORDRE.indexOf(b); });
}
function soinsRegard(){
  if(!regard || !regard.freq) return null;
  var signe = SIGNES.filter(function(s){ return s.k === regard.prio; })[0] || SIGNES[0];
  var patch = signe.patch;
  var freq = FREQUENCES.filter(function(f){ return f.k === regard.freq; })[0];
  var liste = freq.soins.map(function(id){ return id === 'PATCH' ? patch : id; });
  // Autre formule de patchs utile pour les autres signes cochés (seulement si des patchs sont conseillés)
  var autres = [];
  if(liste.indexOf(patch) !== -1){
    SIGNES.forEach(function(s){ if(regard.signes.indexOf(s.k) !== -1 && s.patch !== patch && autres.indexOf(s.patch) === -1) autres.push(s.patch); });
  }
  var routine = (liste.length === 2) ? ROUTINES.filter(function(r){ return r.id === 'routine-regard'; })[0] : null;
  return { soins: liste, patch: patch, autres: autres, routine: routine };
}

// ── Affichage ──
function lienFiche(id){ return ebDiagSiteUrl('bloom', 'https://bloom.elkhab.com/') + '?fiche=' + encodeURIComponent(id); }
function carteSoin(id){
  var s = SOINS[id] || { nom:id, why:'' };
  return '<a class="eb-diag-product" data-diag-fiche="'+id+'" href="'+lienFiche(id)+'" style="text-decoration:none;color:inherit;display:block">'
    + '<div class="eb-diag-product-name">'+s.nom+(s.formule ? '<span class="eb-diag-formule">'+s.formule+'</span>' : '')+'</div>'
    + '<div class="eb-diag-product-why">'+s.why+'</div>'
    + (id === 'radiance-serum' && scores.sensitivity > 0 ? '<div class="eb-diag-product-why" style="margin-top:10px;font-style:italic">'+MENTION_PEAU_SENSIBLE+'</div>' : '')
    + '<div class="eb-diag-product-why" style="margin-top:10px"><span class="eb-diag-prix">'+prixDe(id, s.prix)+'</span> &nbsp;→</div></a>';
}
function carteRoutine(r, texte){
  return '<a class="eb-diag-routine-card" data-diag-fiche="'+r.id+'" href="'+lienFiche(r.id)+'">'
    + '<div class="eb-diag-routine-tag">La routine ELKHA.B qui vous correspond</div>'
    + '<div class="eb-diag-routine-nom">'+r.nom+' · '+prixDe(r.id, r.prix)+'</div>'
    + '<div class="eb-diag-routine-txt">'+texte+'</div>'
    + '<span class="eb-diag-routine-cta">Découvrir la routine</span></a>';
}
function nomCourt(id){ var s = SOINS[id]; return s ? (s.formule ? s.nom + ' — ' + s.formule : s.nom) : id; }

// openRoutine = true : au retour d'une fiche produit, on rouvre directement "Routine recommandée"
function ebShowResult(openRoutine){
  const top = besoinsVisage();
  const visage = soinsVisage(top);
  const routineVisage = routineQuiCorrespond(visage);
  const yeux = soinsRegard();

  let revealHtml = '';
  let needsHtml = '';
  if(top.length === 0){
    revealHtml += '<div class="eb-diag-result-headline">Votre peau est équilibrée.</div>';
    revealHtml += '<p>Un bon équilibre est précieux, l\'objectif est de le préserver. Votre peau est globalement stable et confortable. Elle tolère bien les soins et ne réagit pas facilement.</p>';
    needsHtml += '<p>Votre peau ne présente pas de besoin particulier identifié aujourd\'hui. Il s\'agit simplement de préserver cet équilibre et de sublimer votre éclat naturel.</p>';
  } else {
    const headline = top.map(k=>NEED_INFO[k].label).join(' et ');
    revealHtml += '<div class="eb-diag-result-headline">Votre peau présente '+headline+'.</div>';
    top.forEach(k=>{ revealHtml += '<p>'+NEED_INFO[k].text+'</p>'; });
    needsHtml += '<ul class="eb-diag-result-needs-list">';
    const needsSet = [];
    top.forEach(k=>NEED_INFO[k].needs.forEach(n=>{ if(needsSet.indexOf(n)===-1) needsSet.push(n); }));
    needsSet.forEach(n=>needsHtml+='<li>'+n+'</li>');
    needsHtml += '</ul>';
  }

  // Visage : la routine si les soins en forment exactement une, sinon les soins un par un
  let routineHtml = '';
  if(yeux) routineHtml += '<div class="eb-diag-sous">Votre visage</div>';
  if(routineVisage){
    routineHtml += carteRoutine(routineVisage, 'Les ' + (['','','deux','trois'][visage.length] || visage.length) + ' soins dont votre peau a besoin, réunis dans une routine. Vous pouvez aussi les choisir un par un :');
  }
  visage.forEach(function(id){ routineHtml += carteSoin(id); });
  routineHtml += '<div class="eb-diag-gesture">Le geste à ne pas oublier : une protection solaire quotidienne, avec <a href="'+lienFiche('radiance-protect')+'" data-diag-fiche="radiance-protect">Radiance Protect SPF 50</a>.</div>';

  // Regard
  if(yeux){
    routineHtml += '<div class="eb-diag-sous" style="margin-top:36px">Votre regard</div>';
    if(yeux.routine){
      routineHtml += carteRoutine(yeux.routine, 'Radiance Eye Cream au quotidien, et les ' + SOINS[yeux.patch].formule.toLowerCase() + ' 1 à 2 fois par semaine. Formule à choisir dans la routine.');
    }
    yeux.soins.forEach(function(id){ routineHtml += carteSoin(id); });
    if(yeux.autres.length){
      routineHtml += '<div class="eb-diag-alterner">Vous pouvez aussi alterner avec ' + yeux.autres.map(function(id){ return '<a href="'+lienFiche(id)+'" data-diag-fiche="'+id+'">les '+SOINS[id].formule.toLowerCase()+'</a>'; }).join(' ou ') + '.</div>';
    }
  }

  dernierResultat = {
    besoins: top,
    soins: visage,
    routine: routineVisage ? routineVisage.id : '',
    sensible: scores.sensitivity > 0,
    regard: yeux ? { signes: regard.signes, prio: regard.prio, freq: regard.freq, soins: yeux.soins, autres: yeux.autres, routine: yeux.routine ? yeux.routine.id : '' } : null
  };

  let html = '';
  html += '<div class="eb-diag-result-eyebrow">Ce que révèle votre peau</div>';
  html += '<div class="eb-diag-acc" id="ebDiagResultAcc">';
  html += '  <div class="eb-diag-acc-item">';
  html += '    <div class="eb-diag-acc-header" onclick="ebDiagAccToggle(this)"><h4>Votre diagnostic</h4><span class="eb-diag-acc-icon">+</span></div>';
  html += '    <div class="eb-diag-acc-body"><div class="eb-diag-acc-body-inner">'+revealHtml+'</div></div>';
  html += '  </div>';
  html += '  <div class="eb-diag-acc-item">';
  html += '    <div class="eb-diag-acc-header" onclick="ebDiagAccToggle(this)"><h4>Les besoins de votre peau</h4><span class="eb-diag-acc-icon">+</span></div>';
  html += '    <div class="eb-diag-acc-body"><div class="eb-diag-acc-body-inner">'+needsHtml+'</div></div>';
  html += '  </div>';
  html += '  <div class="eb-diag-acc-item" id="ebDiagRoutineItem">';
  html += '    <div class="eb-diag-acc-header" onclick="ebDiagAccToggle(this)"><h4>'+'Vos soins recommandés'+'</h4><span class="eb-diag-acc-icon">+</span></div>';
  html += '    <div class="eb-diag-acc-body"><div class="eb-diag-acc-body-inner">'+routineHtml+'</div></div>';
  html += '  </div>';
  html += '</div>';

  html += '<div class="eb-diag-approach"><h4 style="margin-top:0">L\'approche ELKHA.B</h4><p>Chaque peau est écoutée avant d\'être traitée : on répare et on apaise ce qui doit l\'être, puis on révèle l\'éclat naturel — jamais l\'inverse.</p></div>';

  // Recevoir sa routine par e-mail
  var dejaCercle = /(?:^|;\s*)ebn_inscrite=/.test(document.cookie);
  html += '<div class="eb-diag-mail" id="ebDiagMail">'
    + '<div class="eb-diag-mail-form">'
    +   '<h4>Votre routine par e-mail</h4>'
    +   '<p>Gardez votre diagnostic et vos soins conseillés à portée de main.</p>'
    +   '<input class="eb-diag-mail-champ" id="ebDiagMailChamp" type="email" placeholder="Votre adresse e-mail" autocomplete="email">'
    +   (dejaCercle ? '' : '<label class="eb-diag-mail-case"><input type="checkbox" id="ebDiagMailCercle"><span>Je souhaite aussi rejoindre le cercle ELKHA.B : nouveautés en avant-première, conseils et avantages réservés.</span></label>')
    +   '<button type="button" class="eb-diag-mail-btn" id="ebDiagMailBtn">Recevoir ma routine</button>'
    +   '<div class="eb-diag-mail-erreur" id="ebDiagMailErreur">Merci d\'indiquer une adresse e-mail valide.</div>'
    +   '<p class="eb-diag-mail-mention">Votre adresse sert uniquement à vous envoyer votre routine' + (dejaCercle ? '' : ', et nos e-mails si vous rejoignez le cercle') + '.</p>'
    + '</div>'
    + '<div class="eb-diag-mail-merci"><h4>C\'est envoyé !</h4><p style="margin:0">Votre routine arrive dans votre boîte e-mail d\'ici quelques minutes. Pensez à regarder dans les courriers indésirables.</p></div>'
    + '</div>';

  html += '<div class="eb-diag-final">';
  html += '  <div class="eb-diag-footnote">Votre peau évolue avec le temps. Ce diagnostic reflète ses besoins aujourd\'hui. N\'hésitez pas à le refaire dans quelques mois si vos préoccupations changent.</div>';
  html += '  <a class="eb-diag-cta" href="'+ebDiagSiteUrl('bloom', 'https://bloom.elkhab.com/')+'">Voir tous nos soins</a>';
  html += '</div>';

  document.getElementById('ebResultContent').setAttribute('lang', 'fr');   // coupure des mots en français pour le texte justifié
  document.getElementById('ebResultContent').innerHTML = html;
  document.getElementById('ebProgressBar').style.width = '100%';
  ebShow('result');
  brancherMail();

  const overlay = document.getElementById('ebDiagOverlay');
  const routineItem = document.getElementById('ebDiagRoutineItem');
  if(openRoutine && routineItem){
    routineItem.classList.add('open');
    setTimeout(function(){ if(overlay){ overlay.scrollTop = Math.max(0, routineItem.offsetTop - 90); } }, 60);
  } else if(overlay){ overlay.scrollTop = 0; }
}

// ── Envoi de l'e-mail « Votre routine » ──
function prixAffiches(){
  var r = dernierResultat, ids = r.soins.concat(['radiance-protect']);
  if(r.routine) ids.push(r.routine);
  if(r.regard){ ids = ids.concat(r.regard.soins, r.regard.autres); if(r.regard.routine) ids.push(r.regard.routine); }
  var o = {};
  ids.forEach(function(id){
    var s = SOINS[id] || ROUTINES.filter(function(x){ return x.id === id; })[0] || {};
    o[id] = prixDe(id, s.prix);
  });
  return o;
}
function brancherMail(){
  var bloc = document.getElementById('ebDiagMail');
  var champ = document.getElementById('ebDiagMailChamp');
  var btn = document.getElementById('ebDiagMailBtn');
  var erreur = document.getElementById('ebDiagMailErreur');
  if(!bloc || !btn) return;
  function envoyer(){
    var email = champ.value.trim();
    var ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    erreur.textContent = 'Merci d\'indiquer une adresse e-mail valide.';
    erreur.style.display = ok ? 'none' : 'block';
    if(!ok || !dernierResultat) return;
    var caseCercle = document.getElementById('ebDiagMailCercle');
    var cercle = !!(caseCercle && caseCercle.checked);
    btn.disabled = true; btn.textContent = 'Envoi en cours…';
    var donnees = {
      type: 'diagnostic', email: email, cercle: cercle,
      resultat: dernierResultat,
      prix: prixAffiches(),
      site: window.EB_SITE_NAME || location.hostname, page: location.href, envoye_le: new Date().toISOString()
    };
    fetch(URL_SCRIPT, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(donnees) })
      .then(function(r){ return r.json(); })
      .then(function(rep){
        if(!rep || !rep.ok) throw new Error((rep && rep.raison) || 'erreur');
        if(cercle){ document.cookie = 'ebn_inscrite=1; max-age=' + (3650*86400) + '; path=/; domain=.elkhab.com; SameSite=Lax'; }
        bloc.classList.add('eb-envoye');
      })
      .catch(function(err){
        btn.disabled = false; btn.textContent = 'Recevoir ma routine';
        erreur.textContent = (err && err.message === 'limite')
          ? 'Vous avez déjà reçu votre routine deux fois aujourd\'hui. Pensez à regarder dans les courriers indésirables.'
          : 'L\'envoi n\'a pas abouti. Merci de réessayer dans un instant.';
        erreur.style.display = 'block';
      });
  }
  btn.addEventListener('click', envoyer);
  champ.addEventListener('keydown', function(e){ if(e.key === 'Enter'){ e.preventDefault(); envoyer(); } });
}

function ebDiagRestart(){ ebShow('intro'); document.getElementById('ebProgressBar').style.width='0%'; }
function ebDiagShowClose(show){
  var b = document.getElementById('ebDiagCloseBtn');
  if(b) b.classList.toggle('visible', !!show);
}
function ebDiagOpen(){
  document.getElementById('ebDiagOverlay').classList.add('open');
  ebDiagShowClose(true);
  ebShow('intro');
  const vid = document.querySelector('.eb-diag-intro-image video');
  if(vid){
    vid.play().catch(function(){});
    vid.onended = function(){ vid.currentTime = 0; vid.play().catch(function(){}); };
  }
}
function ebDiagOpenWithScores(scoresArr){
  const keys = ['radiance','sebum','hydration','texture','sensitivity','barrier'];
  scores = {};
  keys.forEach(function(k,i){ scores[k] = scoresArr[i] || 0; });
  regard = null;
  document.getElementById('ebDiagOverlay').classList.add('open');
  ebDiagShowClose(true);
  ebShowResult(true);
}
function ebDiagClose(){ document.getElementById('ebDiagOverlay').classList.remove('open'); ebDiagShowClose(false); }

window.ebDiagStart = ebDiagStart;
window.ebDiagBack = ebDiagBack;
window.ebDiagRestart = ebDiagRestart;
window.ebDiagOpen = ebDiagOpen;
window.ebDiagOpenWithScores = ebDiagOpenWithScores;
window.ebDiagClose = ebDiagClose;

// Clic sur un soin recommandé : le diagnostic se ferme et la fiche s'ouvre sur place.
// Quand la cliente ferme la fiche (×), elle retrouve son résultat, au même endroit.
var retourDiag = false, positionDiag = 0;
document.addEventListener('click', function(e){
  var a = e.target.closest && e.target.closest('[data-diag-fiche]');
  if(!a) return;
  var id = a.getAttribute('data-diag-fiche');
  if(window.EB_PRODUITS && window.EB_PRODUITS[id] && typeof window.ebFicheOpen === 'function'){
    e.preventDefault(); e.stopPropagation();
    var ov = document.getElementById('ebDiagOverlay');
    positionDiag = ov ? ov.scrollTop : 0;
    retourDiag = true;
    window.EB_FICHE_RETOUR = { label: 'Retour au diagnostic' };   // bouton affiché en haut de la fiche
    ebDiagClose();
    setTimeout(function(){ window.ebFicheOpen(id); surveillerFiche(); }, 350);
  }
}, true);
function surveillerFiche(){
  var fiche = document.querySelector('.eb-fp-overlay');
  if(!fiche || !window.MutationObserver) return;
  var obs = new MutationObserver(function(){
    if(fiche.classList.contains('open')) return;
    obs.disconnect();
    window.EB_FICHE_RETOUR = null;
    if(!retourDiag) return;
    retourDiag = false;
    var ov = document.getElementById('ebDiagOverlay');
    if(!ov) return;
    ov.classList.add('open');
    ebDiagShowClose(true);
    ebShow('result');
    setTimeout(function(){ ov.scrollTop = positionDiag; }, 60);
  });
  obs.observe(fiche, { attributes: true, attributeFilter: ['class'] });
}

})();


// Retour depuis une fiche produit : on rouvre le diagnostic avec les résultats de la cliente
(function(){
  const params = new URLSearchParams(window.location.search);
  if(params.get('openDiag') === '1'){
    const s = params.get('s');
    setTimeout(function(){
      if(s && typeof ebDiagOpenWithScores === 'function'){
        ebDiagOpenWithScores(s.split(',').map(Number));
      } else if(typeof ebDiagOpen === 'function'){
        ebDiagOpen();
      }
    }, 300);
  }
})();
