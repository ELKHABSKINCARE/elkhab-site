/* ═══════════════════════════════════════════════════════════════════════
   ELKHA.B — ESPACE AMBASSADRICE / COLLABORATIONS (collab-engine.js)
   Un lien vers « #collaboration » (ou l'adresse …/?collab=1) ouvre le panneau :
   accueil → code personnel → espace ambassadrice (récapitulatif, contenus,
   accord à lire en entier, formulaire) → confirmation.
   Chargé automatiquement par cart-engine.js.
   ═══════════════════════════════════════════════════════════════════════ */
(function(){
if(window.ebCollabCharge) return;
window.ebCollabCharge = true;

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ✏️ RÉGLAGES                                                          │
   └─────────────────────────────────────────────────────────────────────┘ */

// Adresse du script Google (Apps Script) du Google Sheet « ELKHA.B — Collaborations »
// (si on la vide : MODE TEST, seul le code LKB-TEST-01 fonctionne et rien n'est enregistré)
var URL_SCRIPT = "https://script.google.com/macros/s/AKfycbxQCXs8onhnmA1p_mbMHPWhlUF0x_sIxRiveilPYitjZExd70PZLilpMxflvT8ttTVa1Q/exec";

var TIKTOK = "https://www.tiktok.com/@elkha.b";
var BANNIERE = "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_000000002aac81f4b0c844adde3b8458.png?v=1790842458&width=1200";

// Version de l'accord : à changer si tu modifies le texte de l'accord
var VERSION_ACCORD = "Accord de collaboration ELKHA.B — version du 7 octobre 2026";

// CONTENUS ATTENDUS (obligatoire: true / false)
var CONTENUS = [
  { titre: "Vidéo découverte & unboxing", delai: "sous 48h", obligatoire: true,
    texte: "Une vidéo présentant la réception du produit, avec un unboxing naturel et authentique. Nous souhaitons une présentation face caméra, dans laquelle vous découvrez le soin, partagez vos premières impressions et présentez le produit à votre communauté." },
  { titre: "Vidéo d'application", delai: "sous 7 jours", obligatoire: true,
    texte: "Une vidéo face caméra intégrant le produit dans votre routine de soin. Nous souhaitons mettre en avant la texture, l'application, les sensations sur la peau, le parfum ainsi que votre ressenti lors de la première utilisation, en toute authenticité." },
  { titre: "Vidéo retour d'expérience", delai: "sous 14 jours", obligatoire: true,
    texte: "Après une période d'utilisation, une vidéo face caméra présentant votre retour d'expérience sincère. Nous souhaitons connaître votre avis sur le produit, les résultats observés, ce que vous avez particulièrement apprécié, ainsi que votre recommandation auprès de votre communauté, en toute transparence." },
  { titre: "Vidéo retour d'expérience après 2 mois", delai: "", obligatoire: false,
    texte: "Une vidéo face caméra relatant les changements constatés après cette période d'utilisation, ou tout autre contenu selon votre créativité et vos idées, si vous souhaitez aller plus loin avec ELKHA.B." }
];

// ACCORD DE COLLABORATION (# = titre de partie ; chaque autre ligne = un paragraphe)
var ACCORD = `
# Bienvenue
Merci pour votre intérêt envers ELKHA.B.
Cet accord a pour objectif de définir simplement le cadre de notre collaboration afin que chaque partie connaisse ses engagements et puisse avancer en toute transparence.
# Participation de l'ambassadrice
Dans le cadre de cette collaboration, l'ambassadrice s'engage à réaliser les contenus obligatoires présentés dans son espace ambassadrice, dans les délais indiqués. Un contenu complémentaire, facultatif, peut être réalisé selon sa créativité et ses idées.
# Engagement ELKHA.B
ELKHA.B s'engage à fournir les produits convenus dans le cadre de cette collaboration.
ELKHA.B s'engage à respecter la liberté d'expression de l'ambassadrice concernant son expérience réelle d'utilisation des produits.
ELKHA.B s'engage à préserver l'image, la réputation et la vie privée de l'ambassadrice dans le cadre de cette collaboration.
Les données personnelles communiquées par l'ambassadrice (coordonnées, adresse de livraison, informations de contact) sont utilisées uniquement dans le cadre de la collaboration et ne seront ni cédées ni transmises à des tiers sans son consentement.
ELKHA.B s'engage à utiliser les contenus réalisés par l'ambassadrice de manière respectueuse et conforme aux autorisations accordées dans le présent document.
# Engagements de l'ambassadrice
L'ambassadrice confirme sa participation volontaire à cette collaboration.
Elle s'engage à réaliser les contenus définis dans le présent accord ou, en cas d'impossibilité, à en informer ELKHA.B dans les meilleurs délais.
L'authenticité, la transparence et les retours réels d'utilisation constituent les fondements de toute collaboration avec ELKHA.B.
Les produits sont envoyés dans le cadre exclusif de cette collaboration et ne constituent pas un cadeau sans contrepartie.
# Informations
En cas de non-réalisation des contenus convenus et en l'absence de toute communication ou justification raisonnable, ELKHA.B se réserve le droit d'engager toute démarche qu'elle jugera nécessaire afin de préserver ses intérêts.
Le non-respect des engagements pris dans le cadre de cette collaboration pourra entraîner la suspension immédiate de toute collaboration présente ou future avec ELKHA.B.
# Réutilisation des contenus
Dans le cadre de la présente collaboration, l'ambassadrice autorise ELKHA.B à partager, republier, reproduire et utiliser les contenus réalisés pour la marque sur les réseaux sociaux, son site internet, ses supports de communication ainsi que dans le cadre de ses actions promotionnelles et commerciales.
# Organisation de la collaboration
Afin de garantir une bonne organisation des collaborations, le formulaire de participation doit nous être retourné dans un délai de 24 heures suivant sa réception. À défaut de réponse dans ce délai, ELKHA.B pourra attribuer la collaboration à un autre profil.
# Merci
Chez ELKHA.B, nous croyons aux collaborations fondées sur l'authenticité, le respect mutuel et l'expérience réelle des produits.
Merci de faire partie de cette aventure.
`;

// CONFIRMATIONS (toutes obligatoires)
var CONFIRMATIONS = [
  "J'ai lu l'intégralité de l'accord de collaboration ELKHA.B ci-dessus et j'en accepte les termes.",
  "J'autorise ELKHA.B à partager, republier, reproduire et utiliser les contenus réalisés dans le cadre de cette collaboration sur ses réseaux sociaux, son site internet, ses supports de communication ainsi que dans le cadre de ses actions promotionnelles et commerciales.",
  "Je confirme ma participation volontaire à cette collaboration et je m'engage à réaliser les contenus obligatoires dans les délais indiqués."
];

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ⛔ NE RIEN MODIFIER EN DESSOUS                                        │
   └─────────────────────────────────────────────────────────────────────┘ */

var QUESTIONS_CHOIX = [
  { cle: "abonnee", label: "Abonnée ELKHA.B", multi: false, options: ["Oui", "Non"] },
  { cle: "contenus", label: "Type de contenus réalisés sur les réseaux sociaux", multi: true, options: ["Skincare", "Lifestyle", "Makeup", "Bien-être", "UGC", "Mode", "Autre"] },
  { cle: "peau", label: "Type de peau", multi: false, options: ["Normale", "Sèche", "Grasse", "Mixte", "Sensible", "Je ne sais pas"] },
  { cle: "priorites", label: "Priorités de peau", multi: true, options: ["Manque d'éclat", "Déshydratation", "Excès de sébum", "Teint irrégulier", "Taches pigmentaires", "Rougeurs / sensibilités", "Boutons", "Pores visibles", "Premiers signes de l'âge", "Pas de préoccupation particulière", "Autre"] }
];
var CHAMPS = [
  { cle: "nom", label: "Nom", type: "text", requis: true, demi: true, auto: "family-name" },
  { cle: "prenom", label: "Prénom", type: "text", requis: true, demi: true, auto: "given-name" },
  { cle: "pseudo", label: "Pseudo Instagram / TikTok", type: "text", requis: true },
  { cle: "email", label: "E-mail", type: "email", requis: true, auto: "email" },
  { cle: "telephone", label: "Téléphone portable", type: "tel", requis: true, auto: "tel" },
  { cle: "adresse", label: "Adresse de livraison", type: "text", requis: true, auto: "address-line1" },
  { cle: "complement", label: "Complément d'adresse", type: "text", requis: false, auto: "address-line2" },
  { cle: "cp", label: "Code postal", type: "text", requis: true, demi: true, auto: "postal-code" },
  { cle: "ville", label: "Ville", type: "text", requis: true, demi: true, auto: "address-level2" },
  { cle: "pays", label: "Pays", type: "text", requis: true, valeur: "France", auto: "country-name" }
];

var css = ""
+ ".ebc{position:fixed;inset:0;background:#141414;color:#fff;z-index:99999;transform:translateX(-100%);visibility:hidden;transition:transform .5s cubic-bezier(.65,0,.35,1),visibility 0s linear .5s;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;font-family:'Montserrat',sans-serif;-webkit-tap-highlight-color:transparent}"
+ ".ebc.open{transform:none;visibility:visible;transition:transform .5s cubic-bezier(.65,0,.35,1),visibility 0s}"
+ ".ebc *{box-sizing:border-box}"
+ ".ebc-in{max-width:560px;margin:0 auto;padding:76px 24px 80px}"
+ ".ebc-banner{display:block;width:100%;height:auto;margin:0 0 34px}"
+ ".ebc-tag{display:block;text-align:center;font-size:10.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;opacity:.5;margin:0 0 12px}"
+ ".ebc-titre{font-size:21px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;text-align:center;margin:0 0 18px;line-height:1.35}"
+ ".ebc-intro{font-size:13.5px;font-weight:300;line-height:1.85;text-align:center;opacity:.8;margin:0 0 30px}"
+ ".ebc-btn{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;background:#fff;color:#000 !important;border:none;padding:18px;font-family:'Montserrat',sans-serif;font-size:12.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;text-decoration:none !important;cursor:pointer;transition:transform .2s ease,opacity .2s ease}"
+ ".ebc-btn:hover{transform:scale(1.02)}.ebc-btn[disabled]{opacity:.35;cursor:not-allowed;transform:none}"
+ ".ebc-btn-ligne{background:none;color:#fff !important;border:1px solid rgba(255,255,255,.45)}"
+ ".ebc-sep{display:flex;align-items:center;gap:14px;margin:42px 0 26px;font-size:10.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;opacity:.6}"
+ ".ebc-sep:before,.ebc-sep:after{content:'';flex:1;height:1px;background:rgba(255,255,255,.25)}"
+ ".ebc-code{display:flex;gap:10px}"
+ ".ebc-code input{flex:1;min-width:0;text-transform:uppercase;letter-spacing:.12em;text-align:center}"
+ ".ebc-code .ebc-btn{width:auto;padding:0 22px;flex-shrink:0}"
+ ".ebc input[type=text],.ebc input[type=email],.ebc input[type=tel],.ebc textarea{width:100%;background:transparent;border:none;border-bottom:1px solid rgba(255,255,255,.35);border-radius:0;color:#fff;font-family:'Montserrat',sans-serif;font-size:15px;font-weight:400;padding:12px 2px;outline:none;transition:border-color .2s ease;-webkit-appearance:none}"
+ ".ebc input:focus,.ebc textarea:focus{border-bottom-color:#fff}"
+ ".ebc textarea{min-height:90px;resize:vertical;border:1px solid rgba(255,255,255,.3);padding:12px}"
+ ".ebc-err{font-size:13px;line-height:1.6;color:#ff8a80;margin:14px 0 0;min-height:1px}"
+ ".ebc-bloc{border:1px solid rgba(255,255,255,.18);padding:24px 22px;margin:0 0 22px}"
+ ".ebc-h{font-size:11.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;margin:0 0 16px}"
+ ".ebc-p{font-size:13.5px;font-weight:300;line-height:1.8;opacity:.85;margin:0 0 10px}"
+ ".ebc-kv{display:flex;justify-content:space-between;gap:16px;padding:10px 0;border-top:1px solid rgba(255,255,255,.12);font-size:13px}"
+ ".ebc-kv > span:first-child{opacity:.55;font-size:10.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;padding-top:2px}"
+ ".ebc-kv > span:last-child{text-align:right;font-weight:600;line-height:1.6}"
+ ".ebc-produit{display:block}"
+ "@media (max-width:600px){.ebc-kv{flex-direction:column;gap:6px}.ebc-kv > span:last-child{text-align:left}}"
+ ".ebc-valeur{font-size:11.5px;line-height:1.7;opacity:.7;margin:12px 0 0;padding:12px 14px;border-left:2px solid rgba(255,255,255,.5);background:rgba(255,255,255,.04)}"
+ ".ebc-video{display:grid;grid-template-columns:42px 1fr;gap:4px 12px;padding:18px 0;border-top:1px solid rgba(255,255,255,.12)}"
+ ".ebc-num{font-size:22px;font-weight:200;opacity:.6;line-height:1.1}"
+ ".ebc-video-t{font-size:13.5px;font-weight:600;line-height:1.4}"
+ ".ebc-badge{display:inline-block;margin:6px 8px 0 0;padding:4px 9px;border:1px solid rgba(255,255,255,.4);font-size:9.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase}"
+ ".ebc-badge.plein{background:#fff;color:#000;border-color:#fff}"
+ ".ebc-video .ebc-p{grid-column:2;margin:6px 0 0;font-size:12.5px}"
+ ".ebc-accord{max-height:340px;overflow-y:auto;border:1px solid rgba(255,255,255,.25);padding:20px 18px;background:rgba(255,255,255,.03);overscroll-behavior:contain}"
+ ".ebc-accord h4{font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;margin:22px 0 10px}.ebc-accord h4:first-child{margin-top:0}"
+ ".ebc-accord p{font-size:13px;font-weight:300;line-height:1.8;opacity:.85;margin:0 0 8px}"
+ ".ebc-accord-fin{font-size:11px;letter-spacing:.06em;opacity:.5;margin:18px 0 0;text-align:center}"
+ ".ebc-lu{display:flex;align-items:center;gap:8px;font-size:12px;line-height:1.5;margin:12px 0 0;opacity:.75}"
+ ".ebc-lu.ok{opacity:1;color:#b9f6ca}"
+ ".ebc-q{margin:26px 0 0}.ebc-q:first-child{margin-top:0}"
+ ".ebc-ql{display:block;font-size:10.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;opacity:.7;margin:0 0 12px}"
+ ".ebc-pills{display:flex;flex-wrap:wrap;gap:8px}"
+ ".ebc-pill{background:none;border:1px solid rgba(255,255,255,.4);border-radius:999px;color:#fff;padding:9px 15px;font-family:'Montserrat',sans-serif;font-size:12px;font-weight:500;cursor:pointer;transition:background .2s ease,color .2s ease,transform .15s ease}"
+ ".ebc-pill:active{transform:scale(.96)}.ebc-pill.on{background:#fff;color:#000;border-color:#fff}"
+ ".ebc-champs{display:flex;flex-wrap:wrap;gap:0 18px}.ebc-champ{flex:1 1 100%;margin:0 0 18px}.ebc-champ.demi{flex:1 1 calc(50% - 9px)}"
+ ".ebc-champ label{display:block;font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;opacity:.6}"
+ ".ebc-check{display:flex;gap:12px;align-items:flex-start;margin:0 0 16px;cursor:pointer;font-size:12.5px;font-weight:300;line-height:1.7}"
+ ".ebc-check input{appearance:none;-webkit-appearance:none;width:20px;height:20px;flex-shrink:0;border:1px solid rgba(255,255,255,.6);margin:2px 0 0;cursor:pointer;display:grid;place-content:center}"
+ ".ebc-check input:checked{background:#fff}.ebc-check input:checked:after{content:'✓';color:#000;font-size:13px;font-weight:700}"
+ ".ebc-check input:disabled{opacity:.3;cursor:not-allowed}.ebc-check.bloque{opacity:.45;cursor:not-allowed}"
+ ".ebc-sign{border:1px solid #fff;padding:26px 22px;margin:0 0 22px;background:rgba(255,255,255,.04);transition:border-color .3s ease,box-shadow .3s ease}"
+ ".ebc-sign input#ebcSignature{border:1px solid rgba(255,255,255,.55);background:rgba(255,255,255,.06);padding:16px;font-size:18px;font-weight:500;letter-spacing:.02em;text-align:center;margin:6px 0 0}"
+ ".ebc-sign input#ebcSignature:focus{border-color:#fff}"
+ ".ebc-sign-titre{font-size:22px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#fff;text-align:center;margin:0 0 14px}"
+ ".ebc-sign .ebc-p{text-align:center;opacity:.95}"
+ ".ebc-sign{border-width:2px}"
+ ".ebc-sign-note{font-size:11.5px;line-height:1.6;opacity:.55;margin:12px 0 0;text-align:center}"
+ ".ebc-sign.alerte{border-color:#ff8a80;box-shadow:0 0 0 3px rgba(255,138,128,.25)}"
+ ".ebc-etat{display:flex;align-items:center;justify-content:center;gap:10px;font-size:13px;line-height:1.6;margin:16px 0 0;min-height:21px;opacity:.9}"
+ ".ebc-spin{display:inline-block;width:18px;height:18px;border:2px solid rgba(0,0,0,.2);border-top-color:#000;border-radius:50%;animation:ebcTourne .8s linear infinite;vertical-align:middle}"
+ ".ebc-spin.petit{width:14px;height:14px;border-color:rgba(255,255,255,.25);border-top-color:#fff}"
+ ".ebc-ok{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:#b9f6ca;color:#000;font-size:12px;font-weight:700}"
+ "@keyframes ebcTourne{to{transform:rotate(360deg)}}"
+ ".ebc-code input:disabled{opacity:.5}"
+ ".ebc-note{font-size:11.5px;line-height:1.7;text-align:center;opacity:.5;margin:14px 0 0}"
+ ".ebc-merci{text-align:center;padding:20px 0}"
+ ".ebc-close{position:fixed;top:20px;right:20px;z-index:100000;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.35);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.5);display:none;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:20px;font-weight:300;line-height:1;color:#000;cursor:pointer;padding:0;transition:transform .2s ease}"
+ ".ebc-close.visible{display:flex}.ebc-close:hover{transform:scale(1.1)}"
+ "html.ebc-lock,html.ebc-lock body{overflow:hidden !important}"
+ "@keyframes ebcFade{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}"
+ ".ebc-ecran{animation:ebcFade .5s ease both}";

var panneau, boite, croix, ouvert = false, session = null;

function esc(t){ var d = document.createElement('div'); d.textContent = t == null ? '' : String(t); return d.innerHTML; }
function nb(t){ return esc(t).replace(/ ([?!:;»])/g, '&nbsp;$1').replace(/« /g, '«&nbsp;'); }
function $(sel){ return boite.querySelector(sel); }

function preparer(){
  if(panneau) return;
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  panneau = document.createElement('div');
  panneau.className = 'ebc';
  panneau.setAttribute('role', 'dialog');
  panneau.innerHTML = '<div class="ebc-in"></div>';
  boite = panneau.firstChild;
  croix = document.createElement('button');
  croix.type = 'button'; croix.className = 'ebc-close'; croix.setAttribute('aria-label', 'Fermer'); croix.innerHTML = '&times;';
  croix.addEventListener('click', function(){ fermer(true); });
  document.body.appendChild(panneau);
  document.body.appendChild(croix);
}

function ouvrir(depuisLien){
  preparer();
  if(!session) ecranAccueil();
  if(!ouvert && depuisLien){ try { history.pushState({ ebCollab: 1 }, ''); } catch(e){} }
  ouvert = true;
  void panneau.offsetWidth;
  panneau.classList.add('open');
  croix.classList.add('visible');
  document.documentElement.classList.add('ebc-lock');
}
function fermer(viaCroix){
  if(!ouvert) return;
  ouvert = false;
  panneau.classList.remove('open');
  croix.classList.remove('visible');
  document.documentElement.classList.remove('ebc-lock');
  if(location.hash === '#collaboration'){ try { history.replaceState(null, '', location.pathname + location.search); } catch(e){} }
  else if(viaCroix && history.state && history.state.ebCollab){ try { history.back(); } catch(e){} }
}

/* ─── 1. ACCUEIL ─── */
function ecranAccueil(){
  boite.innerHTML = '<div class="ebc-ecran">'
    + '<img class="ebc-banner" src="' + BANNIERE + '" alt="ELKHA.B Paris">'
    + '<span class="ebc-tag">Collaborations</span>'
    + '<h2 class="ebc-titre">Devenir ambassadrice ELKHA.B</h2>'
    + '<p class="ebc-intro">Vous créez du contenu autour du soin, de la beauté ou du bien-être, et l\'univers ELKHA.B vous ressemble&nbsp;? Écrivez-nous en message privé sur TikTok&nbsp;: présentez-vous et parlez-nous de votre peau. Si votre profil correspond à nos collaborations, nous vous transmettrons un code personnel pour accéder à votre espace ambassadrice.</p>'
    + '<a class="ebc-btn" href="' + TIKTOK + '" target="_blank" rel="noopener">Nous écrire sur TikTok</a>'
    + '<div class="ebc-sep">Vous avez reçu un code&nbsp;?</div>'
    + '<div class="ebc-code"><input type="text" id="ebcCode" placeholder="LKB-PRÉNOM-01" autocomplete="off" autocapitalize="characters" spellcheck="false"><button type="button" class="ebc-btn" id="ebcGo">Accéder</button></div>'
    + '<p class="ebc-etat" id="ebcEtat"></p>'
    + '<p class="ebc-err" id="ebcErrCode"></p>'
    + '</div>';
  panneau.scrollTop = 0;
  var input = $('#ebcCode');
  $('#ebcGo').addEventListener('click', verifierCode);
  input.addEventListener('keydown', function(e){ if(e.key === 'Enter') verifierCode(); });
}

function verifierCode(){
  var code = ($('#ebcCode').value || '').trim().toUpperCase().replace(/\s+/g, '');
  var err = $('#ebcErrCode'), btn = $('#ebcGo');
  err.textContent = '';
  if(!code){ err.textContent = 'Merci de saisir votre code personnel.'; return; }
  var etat = $('#ebcEtat');
  btn.disabled = true; btn.innerHTML = '<span class="ebc-spin"></span>';
  $('#ebcCode').disabled = true;
  etat.innerHTML = '<span class="ebc-spin petit"></span> Vérification de votre code…';
  demanderCode(code).then(function(r){
    btn.disabled = false; btn.textContent = 'Accéder'; $('#ebcCode').disabled = false; etat.innerHTML = '';
    if(r && r.ok){
      etat.innerHTML = '<span class="ebc-ok">✓</span> Code validé — ouverture de votre espace…';
      btn.disabled = true;
      session = { code: code, infos: r, ouvertA: new Date().toISOString() };
      setTimeout(ecranEspace, 900);
      return;
    }
    if(r && r.raison === 'utilise'){ err.textContent = 'Ce code a déjà été utilisé. Si vous pensez qu\'il s\'agit d\'une erreur, écrivez-nous sur TikTok.'; return; }
    err.textContent = 'Ce code n\'est pas reconnu. Vérifiez-le, ou écrivez-nous sur TikTok.';
  }).catch(function(){
    btn.disabled = false; btn.textContent = 'Accéder'; $('#ebcCode').disabled = false; etat.innerHTML = '';
    err.textContent = 'Connexion impossible pour le moment. Merci de réessayer dans quelques instants.';
  });
}

function demanderCode(code){
  if(!URL_SCRIPT){
    return new Promise(function(res){ setTimeout(function(){
      res(code === 'LKB-TEST-01'
        ? { ok: true, prenom: 'Sarah', gamme: 'Bloom', produits: ['Radiance C Serum – 34,90 €', 'Radiance Eye Cream – 28,90 €'] }
        : { ok: false, raison: 'inconnu' });
    }, 500); });
  }
  return fetch(URL_SCRIPT + '?action=code&code=' + encodeURIComponent(code)).then(function(r){ return r.json(); });
}

/* ─── 2. ESPACE AMBASSADRICE ─── */
var lecture = { debut: null, fin: null, luEntier: false };

function ecranEspace(){
  var i = session.infos;
  var produits = (i.produits || []).map(function(p){ return '<span class="ebc-produit">' + esc(p).replace(/ (€|\()/g, '&nbsp;$1').replace(/(\d) (\d)/g, '$1&nbsp;$2') + '</span>'; }).join('');
  var html = '<div class="ebc-ecran">'
    + '<img class="ebc-banner" src="' + BANNIERE + '" alt="ELKHA.B Paris">'
    + '<span class="ebc-tag">Espace ambassadrice</span>'
    + '<h2 class="ebc-titre">Bonjour' + (i.prenom ? ' ' + esc(i.prenom) : '') + '</h2>'
    + '<p class="ebc-intro">Merci de compléter ce formulaire après avoir lu l\'accord de collaboration ELKHA.B. Il confirme les modalités de notre collaboration et nous permettra de préparer l\'envoi de votre colis. Les informations recueillies sont utilisées exclusivement dans le cadre de la collaboration.</p>'

    + '<div class="ebc-bloc"><h3 class="ebc-h">Récapitulatif de collaboration</h3>'
    + '<p class="ebc-p">Le contenu réalisé devra rester en accord avec l\'univers ELKHA.B&nbsp;: une approche naturelle, lumineuse, authentique et centrée sur la mise en valeur de la peau et de l\'expérience produit.</p>'
    + '<p class="ebc-p">Les contenus publiés devront mentionner et identifier le compte ELKHA.B.</p>'
    + (i.gamme ? '<div class="ebc-kv"><span>Gamme</span><span>' + esc(i.gamme) + '</span></div>' : '')
    + (produits ? '<div class="ebc-kv"><span>Votre colis</span><span>' + produits + '</span></div>'
      + '<p class="ebc-valeur">Les soins sont envoyés <strong>sans frais pour vous</strong> dans le cadre de la collaboration&nbsp;: aucun paiement ne vous sera demandé. Les prix indiqués correspondent uniquement à la <strong>valeur des produits envoyés</strong>.</p>' : '')
    + '</div>'

    + '<div class="ebc-bloc"><h3 class="ebc-h">Contenus et délais attendus</h3>'
    + '<p class="ebc-p">Chez ELKHA.B, nous privilégions des contenus spontanés, authentiques et incarnés. Plus qu\'une simple présentation produit, nous souhaitons partager une véritable expérience de soin avec votre communauté.</p>';
  CONTENUS.forEach(function(c, n){
    html += '<div class="ebc-video"><span class="ebc-num">0' + (n + 1) + '</span><div>'
      + '<div class="ebc-video-t">' + esc(c.titre) + '</div>'
      + '<span class="ebc-badge' + (c.obligatoire ? ' plein' : '') + '">' + (c.obligatoire ? 'Obligatoire' : 'Facultatif') + '</span>'
      + (c.delai ? '<span class="ebc-badge">' + esc(c.delai) + '</span>' : '')
      + '</div><p class="ebc-p">' + nb(c.texte) + '</p></div>';
  });
  html += '</div>'

    + '<div class="ebc-bloc"><h3 class="ebc-h">Accord de collaboration</h3>'
    + '<p class="ebc-p">Merci de lire l\'accord en entier&nbsp;: faites-le défiler jusqu\'en bas pour pouvoir l\'accepter.</p>'
    + '<div class="ebc-accord" id="ebcAccord">' + accordHTML() + '<p class="ebc-accord-fin">— ' + esc(VERSION_ACCORD) + ' —</p></div>'
    + '<p class="ebc-lu" id="ebcLu">↓ Faites défiler l\'accord jusqu\'à la fin</p>'
    + '</div>'

    + '<div class="ebc-bloc"><h3 class="ebc-h">Votre profil</h3>';
  QUESTIONS_CHOIX.forEach(function(q){
    html += '<div class="ebc-q" data-q="' + q.cle + '" data-multi="' + (q.multi ? 1 : 0) + '"><span class="ebc-ql">' + esc(q.label) + (q.multi ? ' · plusieurs choix possibles' : '') + '</span><div class="ebc-pills">'
      + q.options.map(function(o){ return '<button type="button" class="ebc-pill" data-v="' + esc(o) + '">' + esc(o) + '</button>'; }).join('')
      + '</div></div>';
  });
  html += '</div>'

    + '<div class="ebc-bloc"><h3 class="ebc-h">Informations de contact</h3><div class="ebc-champs">';
  CHAMPS.forEach(function(c){
    html += '<div class="ebc-champ' + (c.demi ? ' demi' : '') + '"><label for="ebcF_' + c.cle + '">' + esc(c.label) + (c.requis ? '' : ' (facultatif)') + '</label>'
      + '<input type="' + c.type + '" id="ebcF_' + c.cle + '" data-champ="' + c.cle + '"' + (c.auto ? ' autocomplete="' + c.auto + '"' : '') + (c.valeur ? ' value="' + esc(c.valeur) + '"' : '') + '></div>';
  });
  html += '</div></div>'

    + '<div class="ebc-bloc"><h3 class="ebc-h">Confirmation de participation</h3>';
  CONFIRMATIONS.forEach(function(t, n){
    html += '<label class="ebc-check' + (n === 0 ? ' bloque' : '') + '" id="ebcCheckL' + n + '"><input type="checkbox" id="ebcCheck' + n + '"' + (n === 0 ? ' disabled' : '') + '><span>' + nb(t) + '</span></label>';
  });
  html += '<div class="ebc-q"><span class="ebc-ql">Informations complémentaires (facultatif)</span><textarea id="ebcInfos" placeholder="Souhaitez-vous nous transmettre une information complémentaire concernant cette collaboration ?"></textarea></div>'
    + '</div>'

    + '<div class="ebc-sign" id="ebcSignBloc">'
    + '<h3 class="ebc-sign-titre">✍&nbsp; Signature</h3>'
    + '<p class="ebc-p">Pour signer l\'accord de collaboration, saisissez vos <strong>prénom et nom</strong> ci-dessous, tels qu\'indiqués dans vos informations de contact.</p>'
    + '<input type="text" id="ebcSignature" autocomplete="name" placeholder="Prénom Nom">'
    + '<p class="ebc-sign-note">En signant, vous confirmez avoir lu et accepté l\'accord de collaboration ELKHA.B.</p>'
    + '</div>'

    + '<p class="ebc-err" id="ebcErr"></p>'
    + '<button type="button" class="ebc-btn" id="ebcEnvoyer">Confirmer ma participation</button>'
    + '<p class="ebc-note">Merci de confirmer votre participation dans les 24 heures suivant la réception de votre code. Un récapitulatif, accompagné de l\'accord de collaboration, vous sera envoyé par e-mail.</p>'
    + '</div>';
  boite.innerHTML = html;
  panneau.scrollTop = 0;

  // Pilules
  Array.prototype.forEach.call(boite.querySelectorAll('.ebc-q[data-q]'), function(q){
    q.addEventListener('click', function(e){
      var p = e.target.closest('.ebc-pill'); if(!p) return;
      if(q.getAttribute('data-multi') !== '1'){ Array.prototype.forEach.call(q.querySelectorAll('.ebc-pill'), function(x){ if(x !== p) x.classList.remove('on'); }); }
      p.classList.toggle('on');
    });
  });

  // Lecture de l'accord : la case 1 ne se débloque qu'une fois l'accord lu jusqu'en bas
  lecture = { debut: new Date().toISOString(), fin: null, luEntier: false, t0: Date.now(), duree: 0 };
  var acc = $('#ebcAccord');
  function verifierLecture(){
    if(lecture.luEntier) return;
    if(acc.scrollTop + acc.clientHeight >= acc.scrollHeight - 6){
      lecture.luEntier = true;
      lecture.fin = new Date().toISOString();
      lecture.duree = Math.round((Date.now() - lecture.t0) / 1000);
      var lu = $('#ebcLu'); lu.textContent = '✓ Accord lu en entier'; lu.classList.add('ok');
      $('#ebcCheck0').disabled = false; $('#ebcCheckL0').classList.remove('bloque');
    }
  }
  acc.addEventListener('scroll', verifierLecture, { passive: true });
  setTimeout(verifierLecture, 400);

  $('#ebcEnvoyer').addEventListener('click', envoyer);
}

function accordHTML(){
  var h = '';
  ACCORD.split('\n').forEach(function(l){
    l = l.trim(); if(!l) return;
    if(l.indexOf('# ') === 0) h += '<h4>' + esc(l.slice(2)) + '</h4>';
    else h += '<p>' + nb(l) + '</p>';
  });
  return h;
}
function texteAccord(){
  return VERSION_ACCORD + '\n\n' + ACCORD.split('\n').map(function(l){ l = l.trim(); return l.indexOf('# ') === 0 ? '\n' + l.slice(2).toUpperCase() : l; }).join('\n').trim();
}

/* ─── 3. ENVOI ─── */
function envoyer(){
  var err = $('#ebcErr'); err.textContent = '';
  setTimeout(function(){ if(err.textContent) err.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 30);
  var d = { action: 'participation', code: session.code };
  var manque = [];
  QUESTIONS_CHOIX.forEach(function(q){
    var v = Array.prototype.map.call(boite.querySelectorAll('.ebc-q[data-q="' + q.cle + '"] .ebc-pill.on'), function(p){ return p.getAttribute('data-v'); });
    d[q.cle] = v.join(', ');
    if(!v.length) manque.push(q.label);
  });
  CHAMPS.forEach(function(c){
    var v = ($('#ebcF_' + c.cle).value || '').trim();
    d[c.cle] = v;
    if(c.requis && !v) manque.push(c.label);
  });
  if(d.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)){ err.textContent = 'L\'adresse e-mail ne semble pas valide.'; return; }
  if(manque.length){ err.textContent = 'Merci de compléter : ' + manque.join(', ') + '.'; return; }
  if(!lecture.luEntier){ err.textContent = 'Merci de lire l\'accord de collaboration en entier (faites-le défiler jusqu\'en bas).'; return; }
  for(var n = 0; n < CONFIRMATIONS.length; n++){
    if(!$('#ebcCheck' + n).checked){ err.textContent = 'Merci de cocher les trois cases de confirmation.'; return; }
  }
  var sig = ($('#ebcSignature').value || '').trim();
  var norm = function(t){ return (t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z]/g, ''); };
  if(!sig || norm(sig).indexOf(norm(d.prenom)) === -1 || norm(sig).indexOf(norm(d.nom)) === -1){
    err.textContent = 'Pour signer, saisissez vos prénom et nom dans le cadre « Signature ».';
    var bloc = $('#ebcSignBloc'); bloc.classList.add('alerte');
    setTimeout(function(){ bloc.scrollIntoView({ behavior: 'smooth', block: 'center' }); $('#ebcSignature').focus({ preventScroll: true }); }, 60);
    $('#ebcSignature').addEventListener('input', function(){ bloc.classList.remove('alerte'); }, { once: true });
    return;
  }
  d.infos = ($('#ebcInfos').value || '').trim();
  d.signature = sig;
  d.confirmations = CONFIRMATIONS.join(' | ');
  d.contenus_json = JSON.stringify(CONTENUS);
  d.contenus_attendus = CONTENUS.map(function(c, n){ return '0' + (n + 1) + ' — ' + c.titre + (c.delai ? ' (' + c.delai + ')' : '') + ' — ' + (c.obligatoire ? 'OBLIGATOIRE' : 'FACULTATIF'); }).join('\n');
  d.produits = (session.infos.produits || []).join(' / ');
  d.gamme = session.infos.gamme || '';
  d.accord_version = VERSION_ACCORD;
  d.accord_texte = texteAccord();
  d.accord_ouvert_le = lecture.debut;
  d.accord_lu_en_entier_le = lecture.fin;
  d.accord_temps_lecture_s = lecture.duree;
  d.espace_ouvert_le = session.ouvertA;
  d.envoye_le = new Date().toISOString();
  d.navigateur = navigator.userAgent;
  d.page = location.href;

  var btn = $('#ebcEnvoyer'); btn.disabled = true; btn.textContent = 'Envoi en cours…';
  var envoi = URL_SCRIPT
    ? fetch(URL_SCRIPT, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(d) }).then(function(r){ return r.json(); })
    : new Promise(function(res){ console.log('ELKHA.B collaboration (mode test) — données qui seraient enregistrées :', d); setTimeout(function(){ res({ ok: true }); }, 700); });
  envoi.then(function(r){
    if(r && r.ok){ ecranMerci(d.prenom); return; }
    btn.disabled = false; btn.textContent = 'Confirmer ma participation';
    err.textContent = (r && r.raison === 'utilise') ? 'Ce code a déjà été utilisé.' : 'Un souci est survenu. Merci de réessayer.';
  }).catch(function(){
    btn.disabled = false; btn.textContent = 'Confirmer ma participation';
    err.textContent = 'Connexion impossible pour le moment. Merci de réessayer dans quelques instants.';
  });
}

function ecranMerci(prenom){
  session = null;
  boite.innerHTML = '<div class="ebc-ecran ebc-merci">'
    + '<img class="ebc-banner" src="' + BANNIERE + '" alt="ELKHA.B Paris">'
    + '<span class="ebc-tag">Participation confirmée</span>'
    + '<h2 class="ebc-titre">Merci ' + esc(prenom) + '</h2>'
    + '<p class="ebc-intro">Votre participation est bien enregistrée. Un e-mail récapitulatif, accompagné de l\'accord de collaboration, vient de vous être envoyé. Votre colis sera préparé très prochainement.</p>'
    + '<p class="ebc-intro" style="font-style:italic;opacity:.6">Authenticité · Transparence · Expérience réelle</p>'
    + '</div>';
  panneau.scrollTop = 0;
}

/* ─── DÉCLENCHEURS ─── */
window.addEventListener('popstate', function(){ if(ouvert) fermer(false); });
document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && ouvert) fermer(true); });
window.addEventListener('click', function(e){
  if(e.button !== 0 || e.metaKey || e.ctrlKey) return;
  var a = e.target.closest && e.target.closest('a[href*="#collaboration"], [data-collaboration]');
  if(!a) return;
  if(a.tagName === 'A'){
    var url; try { url = new URL(a.getAttribute('href'), location.href); } catch(err){ return; }
    if(url.hash !== '#collaboration') return;
    if(!/(^|\.)elkhab\.com$/i.test(url.hostname) && url.hostname !== location.hostname) return;
  }
  e.preventDefault(); e.stopPropagation();
  ouvrir(true);
}, true);
function verifierAdresse(){
  if(location.hash === '#collaboration' || /[?&]collab=1/.test(location.search)){ if(!ouvert) ouvrir(false); }
}
if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', verifierAdresse); } else { verifierAdresse(); }
window.addEventListener('hashchange', verifierAdresse);

window.ebCollabOpen = function(){ ouvrir(true); };
window.ebCollabClose = function(){ fermer(true); };
})();
