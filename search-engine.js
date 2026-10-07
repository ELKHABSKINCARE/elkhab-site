/* ═══════════════════════════════════════════════════════════════════════
   ELKHA.B — RECHERCHE DU SITE (search-engine.js)
   Trouve : soins, routines, articles du Journal, diagnostic, collaborations,
   Leur expérience, réseaux sociaux, pages légales, livraison, contact…
   ───────────────────────────────────────────────────────────────────────
   ✏️ Les soins sont lus automatiquement dans produits-data.js (un nouveau
      soin apparaît tout seul). Ici, on ajoute seulement des MOTS-CLÉS.
   ═══════════════════════════════════════════════════════════════════════ */
(function(){
  var styleTag = document.createElement('style');
  styleTag.textContent = `
.eb-search-overlay{position:fixed;inset:0;background:rgba(255,255,255,.4);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);z-index:999997;display:flex;align-items:flex-start;justify-content:center;opacity:0;visibility:hidden;transition:opacity .35s ease;padding:100px 24px 24px}
.eb-search-overlay.open{opacity:1;visibility:visible}
.eb-search-panel{background:rgba(255,255,255,.6);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);width:100%;max-width:560px;max-height:75vh;overflow-y:auto;padding:28px 28px 36px;font-family:'Montserrat',sans-serif;color:#000;box-shadow:0 30px 80px rgba(0,0,0,.2)}
.eb-search-close{position:absolute;top:18px;right:20px;background:none;border:none;font-size:22px;cursor:pointer;color:#000;transition:transform .2s ease}
.eb-search-close:hover{transform:scale(1.15)}
.eb-search-input{width:100%;border:none;border-bottom:1.5px solid #000;background:transparent;font-family:'Montserrat',sans-serif;font-size:16px;padding:10px 4px;outline:none;color:#000;border-radius:0;-webkit-appearance:none}
.eb-search-input::placeholder{color:#000;opacity:.4}
.eb-search-results{margin-top:20px}
.eb-search-group-label{font-size:11px;letter-spacing:.1em;text-transform:uppercase;opacity:.5;margin:18px 0 8px}
.eb-search-item{display:block;text-decoration:none;color:#000;padding:10px 0;border-bottom:1px solid rgba(0,0,0,.08);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:opacity .2s ease}
.eb-search-item:hover{opacity:.6}
.eb-search-item-name{font-weight:600;font-size:14px}
.eb-search-item-hint{font-size:12px;opacity:.55;margin-top:2px;line-height:1.5}
.eb-search-empty{font-size:13px;opacity:.5;margin-top:20px;text-align:center;line-height:1.7}
.eb-search-sugg{display:flex;flex-wrap:wrap;gap:8px;margin-top:4px}
.eb-search-chip{background:none;border:1px solid rgba(0,0,0,.35);border-radius:999px;padding:7px 13px;font-family:'Montserrat',sans-serif;font-size:12px;color:#000;cursor:pointer;transition:background .2s ease,color .2s ease}
.eb-search-chip:hover{background:#000;color:#fff}
`;
  document.head.appendChild(styleTag);

  var container = document.createElement('div');
  container.innerHTML = `
<div class="eb-search-overlay" id="ebSearchOverlay">
  <div class="eb-search-panel" style="position:relative">
    <button class="eb-search-close" onclick="ebSearchClose()">&times;</button>
    <input type="text" class="eb-search-input" id="ebSearchInput" placeholder="Rechercher un soin, un ingrédient, un article…" oninput="ebSearchRun(this.value)" autocomplete="off">
    <div class="eb-search-results" id="ebSearchResults"></div>
  </div>
</div>`;
  document.body.appendChild(container);
  document.getElementById('ebSearchOverlay').addEventListener('click', function(e){ if(e.target === this) ebSearchClose(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') ebSearchClose(); });
})();

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ✏️ MOTS-CLÉS DES SOINS (le nom et les actifs sont déjà pris en compte) │
   └─────────────────────────────────────────────────────────────────────┘ */
var EB_MOTS_SOINS = {
  "radiance-serum": ["vitamine c","eclat","teint","taches","antioxydant","serum","glow","bloom"],
  "luminescence-jour": ["creme","jour","hydratation","acide hyaluronique","bisabolol","apaisant","bloom"],
  "gelee-lumibloom": ["prebiotique","microbiome","barriere cutanee","hydratation","gelee","bloom"],
  "lumiveil-cc-cream": ["cc creme","cc cream","teint","spf","spf 30","fond de teint","teinte","ceramides","beurre de cacao","bloom"],
  "lumibloom-niac-5": ["niacinamide","sebum","pores","imperfections","boutons","peau grasse","teint","serum","bloom"],
  "luminescence-nuit": ["creme","nuit","fermete","plancton marin","collagene","rebond","anti-age","bloom"],
  "rituel-luminescence": ["rituel","duo","jour et nuit","coffret","routine","bloom"],
  "radiance-protect": ["spf","spf 50","protection solaire","uv","soleil","stick","teinte","bloom"],
  "radiance-eye-cream": ["contour des yeux","yeux","cernes","poches","hyaluronique","regard","bloom"],
  "bright-glow-patch": ["patch","patchs","contour des yeux","yeux","hydrogel","niacinamide","eclaircissant","lissant","regard","lumi eyes"],
  "bright-glow-decongestionnant": ["patch","patchs","contour des yeux","yeux","hydrogel","cafeine","vitamine c","poches","decongestionnant","eclat","regard","lumi eyes"],
  "bright-glow-anti-fatigue": ["patch","patchs","contour des yeux","yeux","hydrogel","antioxydants","fatigue","anti-fatigue","cernes","regard","lumi eyes"],
  "routine-eclat": ["routine","eclat","vitamine c","glow","teint lumineux"],
  "routine-hydratation": ["routine","hydratation","peau seche","deshydratee"],
  "routine-anti-age": ["routine","anti-age","fermete","rides","collagene"],
  "routine-equilibre": ["routine","equilibre","sebum","pores","peau mixte","peau grasse"],
  "routine-teint-protection": ["routine","teint","protection solaire","spf"],
  "routine-regard": ["routine","regard","contour des yeux","cernes","poches","patchs"]
};

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ✏️ ARTICLES DU JOURNAL (à compléter à chaque nouvel article)          │
   └─────────────────────────────────────────────────────────────────────┘ */
var EB_ARTICLES = [
  {id:"article-peau-deshydratee", name:"Peau sèche ou déshydratée", hint:"Comment faire la différence ?", keywords:["peau seche","deshydratee","hydratation","tiraille","difference","besoins de la peau"]},
  {id:"article-vitaminec", name:"Vitamine C", hint:"Pourquoi est-elle devenue incontournable en skincare ?", keywords:["vitamine c","eclat","antioxydant","teint","actif","actifs"]},
  {id:"article-niacinamide", name:"Niacinamide", hint:"Pourquoi tout le monde en parle ?", keywords:["niacinamide","sebum","pores","imperfections","actif","actifs"]},
  {id:"article-acide-hyaluronique", name:"Acide hyaluronique", hint:"Hydrate-t-il vraiment ?", keywords:["acide hyaluronique","hyaluronique","hydratation","repulpant","actif","actifs"]},
  {id:"article-peau-qui-tiraille", name:"Peau qui tiraille", hint:"Manque de nutrition ou d'hydratation ?", keywords:["tiraille","nutrition","hydratation","inconfort","peau seche","besoins de la peau"]},
  {id:"article-teint-terne", name:"Teint terne", hint:"Pourquoi la peau perd son éclat ?", keywords:["teint terne","eclat","fatigue","pollution","besoins de la peau"]},
  {id:"article-naturel-synthetique", name:"Naturel ou synthétique", hint:"Qu'est-ce qui est vraiment mieux pour votre peau ?", keywords:["naturel","synthetique","bio","chimique","ingredients","composition","clean"]},
  {id:"article-routine-matin", name:"Routine du matin", hint:"Dans quel ordre appliquer ses soins ?", keywords:["routine","matin","ordre","application","etapes"]},
  {id:"produits-routine", name:"Moins, mais mieux", hint:"Faut-il vraiment autant de produits dans sa routine ?", keywords:["routine","minimalisme","simplifier","produits","combien"]}
];

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ✏️ PAGES, SERVICES ET INFORMATIONS                                    │
   └─────────────────────────────────────────────────────────────────────┘ */
var EB_PAGES = [
  {groupe:"Services", name:"Diagnostic de peau", hint:"2 minutes pour écouter votre peau", action:"diagnostic",
   keywords:["diagnostic","test","quiz","type de peau","quelle routine","conseil","conseils","quel soin"]},
  {groupe:"Leur expérience", name:"Leur expérience", hint:"Les vidéos et retours de nos ambassadrices", lien:"experience",
   keywords:["experience","avis","temoignage","temoignages","video","videos","retours","ambassadrice","ambassadrices","resultats","avant apres"]},
  {groupe:"Leur expérience", name:"Devenir ambassadrice", hint:"Collaborations et espace ambassadrice", action:"collaboration",
   keywords:["collaboration","collaborations","collab","ambassadrice","influenceuse","influenceur","createur","creatrice","ugc","partenariat","code","tiktok"]},
  {groupe:"Leur expérience", name:"ELKHA.B sur TikTok", hint:"@elkha.b", url:"https://www.tiktok.com/@elkha.b",
   keywords:["tiktok","reseaux","reseaux sociaux","video","suivre"]},
  {groupe:"Leur expérience", name:"ELKHA.B sur Instagram", hint:"@elkhab.skincare", url:"https://www.instagram.com/elkhab.skincare/",
   keywords:["instagram","insta","reseaux","reseaux sociaux","suivre"]},
  {groupe:"Gammes", name:"Bloom", hint:"La gamme éclat", lien:"bloom", keywords:["bloom","gamme","eclat","soins","boutique","produits"]},
  {groupe:"Gammes", name:"Balance", hint:"La gamme renouvellement cellulaire", lien:"balance", keywords:["balance","gamme","renouvellement","cellulaire","bidens pilosa","retinol"]},
  {groupe:"Gammes", name:"Le Journal", hint:"Articles, actifs et routines", lien:"journal", keywords:["journal","articles","blog","conseils","actifs"]},
  {groupe:"Informations", name:"Livraison & Retours", hint:"Délais, frais de livraison, retours et remboursements", legal:"livraison-retours",
   keywords:["livraison","expedition","delai","delais","colis","frais de port","retour","retours","remboursement","retractation","suivi","fedex","pays","livraison offerte","65"]},
  {groupe:"Informations", name:"Contact", hint:"Une question ? Écrivez-nous", lien:"accueil", hash:"contact",
   keywords:["contact","contacter","question","aide","service client","email","mail","formulaire","sav"]},
  {groupe:"Informations", name:"Conditions générales de vente", hint:"CGV", legal:"cgv",
   keywords:["cgv","conditions","vente","paiement","commande","prix","garantie"]},
  {groupe:"Informations", name:"Mentions légales", legal:"mentions-legales", keywords:["mentions","legales","editeur","siret","hebergeur"]},
  {groupe:"Informations", name:"Politique de confidentialité", legal:"politique-confidentialite", keywords:["confidentialite","donnees","rgpd","vie privee","donnees personnelles"]},
  {groupe:"Informations", name:"Politique de cookies", legal:"politique-cookies", keywords:["cookies","cookie","traceurs"]}
];

var EB_SUGGESTIONS = ["Vitamine C", "Diagnostic", "Contour des yeux", "Routine", "Livraison", "Collaboration"];

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ⛔ NE RIEN MODIFIER EN DESSOUS                                        │
   └─────────────────────────────────────────────────────────────────────┘ */

// Liste des soins de secours (si le catalogue des fiches n'est pas chargé)
var EB_SOINS_SECOURS = {
  "radiance-serum":"Radiance C Serum","luminescence-jour":"Luminescence Jour","gelee-lumibloom":"Gelée Lumi-Bloom",
  "lumiveil-cc-cream":"Lumi-Veil CC Cream SPF 30","lumibloom-niac-5":"Lumi-Bloom Niacinamide 5","luminescence-nuit":"Luminescence Nuit",
  "rituel-luminescence":"Rituel Luminescence Jour & Nuit","radiance-protect":"Radiance Protect SPF 50","radiance-eye-cream":"Radiance Eye Cream",
  "bright-glow-patch":"Lumi Eyes Bright & Glow","bright-glow-decongestionnant":"Lumi Eyes Bright & Glow Décongestionnant",
  "bright-glow-anti-fatigue":"Lumi Eyes Bright & Glow Anti-fatigue","routine-eclat":"Routine Éclat","routine-hydratation":"Routine Hydratation",
  "routine-anti-age":"Routine Anti-âge","routine-equilibre":"Routine Équilibre","routine-teint-protection":"Routine Teint & Protection","routine-regard":"Routine Regard"
};

function ebSearchNormalize(str){
  return String(str || '').toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[’']/g," ").replace(/[^a-z0-9& ]+/g," ").replace(/\s+/g," ").trim();
}
function ebSearchEscape(str){
  var div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}
function ebSearchSite(cle){
  return (window.EB_SITES && window.EB_SITES[cle]) || ({accueil:"https://elkhab.com/",bloom:"https://bloom.elkhab.com/",balance:"https://balance.elkhab.com/",journal:"https://journal.elkhab.com/",experience:"https://experience.elkhab.com/"})[cle];
}

// Construit la liste des soins à partir du catalogue des fiches
function ebSearchSoins(){
  var liste = [], vus = {};
  var cat = window.EB_PRODUITS || {};
  Object.keys(cat).forEach(function(id){
    var p = cat[id] || {};
    if(!p.nom) return;
    vus[id] = 1;
    liste.push({ id: id, name: p.nom, hint: p.sousTitre || '', routine: id.indexOf('routine-') === 0,
      keywords: (EB_MOTS_SOINS[id] || []).concat([p.sousTitre || '', (p.details || []).join(' ')]) });
  });
  Object.keys(EB_SOINS_SECOURS).forEach(function(id){
    if(vus[id]) return;
    liste.push({ id: id, name: EB_SOINS_SECOURS[id], hint: '', routine: id.indexOf('routine-') === 0, keywords: EB_MOTS_SOINS[id] || [] });
  });
  return liste;
}

// Score : tous les mots tapés doivent être trouvés ; le nom compte plus que les mots-clés
function ebSearchScore(item, mots){
  var nom = ebSearchNormalize(item.name);
  var tout = nom + ' ' + ebSearchNormalize(item.hint) + ' ' + ebSearchNormalize((item.keywords || []).join(' | '));
  var score = 0;
  for(var i = 0; i < mots.length; i++){
    var m = mots[i];
    if(tout.indexOf(m) === -1){
      // tolérance au pluriel / singulier
      var alt = m.slice(-1) === 's' ? m.slice(0, -1) : m + 's';
      if(m.length < 4 || tout.indexOf(alt) === -1) return 0;
    }
    score += nom.indexOf(m) === 0 ? 6 : (nom.indexOf(m) !== -1 ? 4 : 1);
  }
  return score;
}

function ebSearchItemHTML(r, cle){
  return '<a class="eb-search-item" href="#" data-k="' + cle + '"><div class="eb-search-item-name">' + ebSearchEscape(r.name) + '</div>'
    + (r.hint ? '<div class="eb-search-item-hint">' + ebSearchEscape(r.hint) + '</div>' : '') + '</a>';
}

var EB_SEARCH_ACTIONS = {};

function ebSearchSuggestions(){
  return '<div class="eb-search-group-label">Suggestions</div><div class="eb-search-sugg">'
    + EB_SUGGESTIONS.map(function(s){ return '<button type="button" class="eb-search-chip" data-s="' + ebSearchEscape(s) + '">' + ebSearchEscape(s) + '</button>'; }).join('')
    + '</div>';
}

function ebSearchRun(query){
  var resultsEl = document.getElementById('ebSearchResults');
  var q = ebSearchNormalize(query);
  EB_SEARCH_ACTIONS = {};
  if(q.length < 2){ resultsEl.innerHTML = ebSearchSuggestions(); return; }
  var mots = q.split(' ').filter(function(m){ return m.length > 1 || /\d/.test(m); });
  if(!mots.length){ resultsEl.innerHTML = ebSearchSuggestions(); return; }

  var soins = ebSearchSoins();
  var groupes = [
    { label: "Soins", items: soins.filter(function(s){ return !s.routine; }).map(function(s){ return { r: s, type: 'fiche' }; }) },
    { label: "Routines", items: soins.filter(function(s){ return s.routine; }).map(function(s){ return { r: s, type: 'fiche' }; }) },
    { label: "Journal", items: EB_ARTICLES.map(function(a){ return { r: a, type: 'article' }; }) }
  ];
  var parGroupe = {};
  EB_PAGES.forEach(function(p){
    if(!parGroupe[p.groupe]){ parGroupe[p.groupe] = { label: p.groupe, items: [] }; groupes.push(parGroupe[p.groupe]); }
    parGroupe[p.groupe].items.push({ r: p, type: 'page' });
  });

  var html = '', n = 0;
  groupes.forEach(function(g){
    var trouves = g.items.map(function(it){ return { it: it, s: ebSearchScore(it.r, mots) }; })
      .filter(function(x){ return x.s > 0; })
      .sort(function(a, b){ return b.s - a.s; });
    if(!trouves.length) return;
    html += '<div class="eb-search-group-label">' + ebSearchEscape(g.label) + '</div>';
    trouves.forEach(function(x){
      var cle = 'r' + (n++);
      EB_SEARCH_ACTIONS[cle] = x.it;
      html += ebSearchItemHTML(x.it.r, cle);
    });
  });

  if(!html){
    resultsEl.innerHTML = '<div class="eb-search-empty">Aucun résultat pour « ' + ebSearchEscape(query) + ' ».<br>Essayez un actif, un besoin de peau ou le nom d\'un soin.</div>' + ebSearchSuggestions();
    return;
  }
  resultsEl.innerHTML = html;
}

// Ouvre le bon résultat : panneau sur place quand c'est possible, sinon la bonne page
function ebSearchOuvrir(it){
  var r = it.r;
  ebSearchClose();
  setTimeout(function(){
    if(it.type === 'fiche'){
      if(window.EB_PRODUITS && window.EB_PRODUITS[r.id] && typeof window.ebFicheOpen === 'function'){ window.ebFicheOpen(r.id); }
      else { ebSearchAller(ebSearchSite('bloom') + '?fiche=' + encodeURIComponent(r.id)); }
      return;
    }
    if(it.type === 'article'){
      var j = ebSearchSite('journal');
      if(location.hostname === new URL(j).hostname){ location.hash = '#' + r.id; }
      else { ebSearchAller(j + '#' + r.id); }
      return;
    }
    if(r.action === 'diagnostic' && typeof window.ebDiagOpen === 'function'){ window.ebDiagOpen(); return; }
    if(r.action === 'collaboration'){
      if(typeof window.ebCollabOpen === 'function'){ window.ebCollabOpen(); }
      else { ebSearchAller(ebSearchSite('experience') + '#collaboration'); }
      return;
    }
    if(r.legal){
      if(typeof window.ebLegalOpen === 'function' && window.ebLegalOpen(r.legal)) return;
      ebSearchAller(ebSearchSite('accueil') + '#' + r.legal);
      return;
    }
    if(r.url){ window.open(r.url, '_blank', 'noopener'); return; }
    if(r.lien){
      var base = ebSearchSite(r.lien);
      if(r.hash && location.hostname === new URL(base).hostname){ location.hash = '#' + r.hash; return; }
      ebSearchAller(base + (r.hash ? '#' + r.hash : ''));
    }
  }, 150);
}

// Passe par un vrai lien pour que le panier suive la cliente d'un site à l'autre
function ebSearchAller(url){
  var a = document.createElement('a');
  a.href = url;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  setTimeout(function(){ a.remove(); }, 500);
}

document.addEventListener('click', function(e){
  var res = document.getElementById('ebSearchResults');
  if(!res || !res.contains(e.target)) return;
  var chip = e.target.closest('.eb-search-chip');
  if(chip){
    var input = document.getElementById('ebSearchInput');
    input.value = chip.getAttribute('data-s');
    ebSearchRun(input.value);
    input.focus();
    return;
  }
  var item = e.target.closest('.eb-search-item');
  if(!item) return;
  e.preventDefault();
  var it = EB_SEARCH_ACTIONS[item.getAttribute('data-k')];
  if(it) ebSearchOuvrir(it);
});

function ebSearchOpen(){
  document.getElementById('ebSearchOverlay').classList.add('open');
  document.getElementById('ebSearchResults').innerHTML = ebSearchSuggestions();
  setTimeout(function(){ document.getElementById('ebSearchInput').focus(); }, 100);
}
function ebSearchClose(){
  var o = document.getElementById('ebSearchOverlay');
  if(!o || !o.classList.contains('open')) return;
  o.classList.remove('open');
  document.getElementById('ebSearchInput').value = '';
  document.getElementById('ebSearchResults').innerHTML = '';
}
// Compatibilité avec l'ancienne version
function ebSearchFiche(id){
  ebSearchClose();
  setTimeout(function(){ if(typeof window.ebFicheOpen === 'function') window.ebFicheOpen(id); }, 150);
  return false;
}
window.ebSearchFiche = ebSearchFiche;
window.ebSearchOpen = ebSearchOpen;
window.ebSearchClose = ebSearchClose;
window.ebSearchRun = ebSearchRun;
