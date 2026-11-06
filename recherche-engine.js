// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
/* ═══════════════════════════════════════════════════════════════════════
   ELKHA.B — RECHERCHE DU SITE, nouvelle version (recherche-engine.js)
   • Chargée par menu-test.js : elle remplace l'ancienne recherche (search-engine.js) sur les nouveaux sites
   • Même panneau que le panier : il glisse depuis la droite, fond beige voilé
   • En haut, la griffe ELKHA.B · PARIS (comme sur les pages rituel)
   • Trouve les soins Bloom et Balance, les routines, les coffrets, le Journal, le Skin ID,
     les pages d'information… ; un clic ouvre la fiche sur place
   • Pas de prix dans la recherche : la cliente les découvre sur la fiche
   ═══════════════════════════════════════════════════════════════════════ */
(function(){
  if(window.ebRechercheV2) return; window.ebRechercheV2 = true;

  var BASE = 'https://elkhabskincare.github.io/elkhab-site/';
  var FICHIERS = ['produits-data-test.js', 'produits-balance-test.js', 'avis-engine.js', 'fiche-engine.js'];
  var SKIN_ID_ENGINE = BASE + 'skin-id-engine.js?v=7';

  /* ┌─────────────────────────────────────────────────────────────────┐
     │ ✏️ MOTS-CLÉS DES SOINS (le nom et le sous-titre comptent déjà)   │
     └─────────────────────────────────────────────────────────────────┘ */
  var MOTS = {
    // Bloom
    "radiance-serum": ["vitamine c","eclat","teint","taches","antioxydant","serum","glow"],
    "luminescence-jour": ["creme","jour","hydratation","acide hyaluronique","bisabolol"],
    "luminescence-nuit": ["creme","nuit","fermete","plancton marin","collagene","anti-age"],
    "luminescence-boost": ["serum","collagene","fermete","booster","raffermissant","rides","anti-age","nuit"],
    "lumi-pure": ["masque","argile","purifiant","points noirs","pores","sebum","brillance","peau grasse","peau mixte"],
    "milky-bloom": ["demaquillant","nettoyant","huile","lait","peau sensible","peau seche"],
    "radiance-cleanser": ["nettoyant","gel","sebum","peau grasse","peau mixte"],
    "gelee-lumibloom": ["prebiotique","microbiome","barriere cutanee","hydratation","gelee"],
    "lumiveil-cc-cream": ["cc creme","cc cream","teint","spf","spf 30","fond de teint","teinte","ceramides","stick","maquillage"],
    "lumibloom-niac-5": ["niacinamide","sebum","pores","imperfections","boutons","peau grasse","serum"],
    "lumibloom-arbutin": ["arbutine","alpha arbutine","taches","taches pigmentaires","anti-taches","teint","serum"],
    "rituel-luminescence": ["rituel","duo","jour et nuit","routine"],
    "radiance-protect": ["spf","spf 50","protection solaire","uv","soleil","stick","teinte"],
    "radiance-eye-cream": ["contour des yeux","yeux","cernes","poches","regard"],
    "bright-glow-patch": ["patch","patchs","contour des yeux","yeux","niacinamide","regard","lumi eyes"],
    "bright-glow-decongestionnant": ["patch","patchs","contour des yeux","yeux","cafeine","vitamine c","poches","regard","lumi eyes"],
    "bright-glow-anti-fatigue": ["patch","patchs","contour des yeux","yeux","antioxydants","fatigue","cernes","regard","lumi eyes"],
    // Balance
    "calm-balance-jour": ["creme","jour","apaisante","peau sensible","rougeurs","aloe vera","sans parfum","reactive"],
    "calm-balance-nuit": ["creme","nuit","apaisante","peau sensible","rougeurs","sans parfum","reactive"],
    "hydra-balance": ["gel","hydratant","acide hyaluronique","repulpant","deshydratee","hydratation"],
    "fusion-balance": ["demaquillant","biphase","yeux","waterproof","maquillage","nettoyant","sans parfum"],
    "ceramide-night-restore": ["ceramides","karite","barriere cutanee","nuit","reparatrice","creme","peau seche"],
    "cellular-reveal": ["serum","rides","ridules","alternative au retinol","retinol","bidens pilosa","anti-age","lissant"],
    "cellular-eye-restore": ["contour des yeux","yeux","ridules","pattes d oie","cernes","retinol","anti-age","regard"],
    "cellular-renew": ["creme","rides","regenerante","alternative au retinol","retinol","anti-age"],
    "active-lift": ["serum","peptides","fermete","rides","raffermissant","repulpant","anti-age","lift"],
    "age-lift": ["creme","peptides","liftante","fermete","rides","anti-age","lift"],
    "eye-lift": ["contour des yeux","yeux","peptides","vitamine c","vitamine e","paupieres","liftante","regard","lift"],
    "bakuchiol-elixir": ["bakuchiol","huile","elixir","retinol vegetal","retinol","rides","fermete","anti-age"],
    "spot-control": ["taches","acide kojique","kojique","vitamine c","hyperpigmentation","anti-taches","serum"],
    "bright-control": ["taches","anti-taches","correctrice","teint","unifier","creme","hyperpigmentation"],
    "bha-balance": ["bha","acide salicylique","pores","points noirs","imperfections","sebum","boutons","lotion","peau grasse"],
    "glyco-balance": ["aha","acide glycolique","exfoliant","peau neuve","eclat","grain de peau","lotion"],
    "aha-balance-peel": ["aha","acide lactique","peeling","exfoliant","grain de peau","eclat"],
    // Coffrets des fêtes
    "coffret-temps-suspendu": ["coffret","cadeau","noel","fetes","peptides","rides","fermete","lift"],
    "coffret-rituel-de-minuit": ["coffret","cadeau","noel","fetes","soir","nuit","demaquillant"],
    "coffret-nouvelle-aube": ["coffret","cadeau","noel","fetes","peau neuve","exfoliant","acide lactique"],
    "coffret-lumiere-dhiver": ["coffret","cadeau","noel","fetes","eclat","vitamine c","taches"]
  };
  var BALANCE = ['hydra-balance','calm-balance-jour','calm-balance-nuit','ceramide-night-restore','cellular-reveal','cellular-eye-restore','cellular-renew','active-lift','age-lift','eye-lift','bakuchiol-elixir','bright-control','spot-control','glyco-balance','aha-balance-peel','bha-balance','fusion-balance'];

  /* ✏️ ARTICLES DU JOURNAL (à compléter à chaque nouvel article) */
  var ARTICLES = [
    {id:"article-peau-deshydratee", name:"Peau sèche ou déshydratée", hint:"Comment faire la différence ?", keywords:["peau seche","deshydratee","hydratation","tiraille"]},
    {id:"article-vitaminec", name:"Vitamine C", hint:"Pourquoi est-elle devenue incontournable en skincare ?", keywords:["vitamine c","eclat","antioxydant","teint","actif"]},
    {id:"article-niacinamide", name:"Niacinamide", hint:"Pourquoi tout le monde en parle ?", keywords:["niacinamide","sebum","pores","imperfections","actif"]},
    {id:"article-bakuchiol", name:"Bakuchiol", hint:"Le secret végétal d'une peau plus lisse et plus ferme", keywords:["bakuchiol","retinol","rides","fermete","actif"]},
    {id:"article-acide-hyaluronique", name:"Acide hyaluronique", hint:"Hydrate-t-il vraiment ?", keywords:["acide hyaluronique","hyaluronique","hydratation","repulpant","actif"]},
    {id:"article-peau-qui-tiraille", name:"Peau qui tiraille", hint:"Manque de nutrition ou d'hydratation ?", keywords:["tiraille","nutrition","hydratation","inconfort","peau seche"]},
    {id:"article-teint-terne", name:"Teint terne", hint:"Pourquoi la peau perd son éclat ?", keywords:["teint terne","eclat","fatigue","pollution"]},
    {id:"article-naturel-synthetique", name:"Naturel ou synthétique", hint:"Qu'est-ce qui est vraiment mieux pour votre peau ?", keywords:["naturel","synthetique","bio","chimique","ingredients","composition"]},
    {id:"article-routine-matin", name:"Routine du matin", hint:"Dans quel ordre appliquer ses soins ?", keywords:["routine","matin","ordre","application","etapes"]}
  ];

  /* ✏️ PAGES, SERVICES ET INFORMATIONS */
  var PAGES = [
    {groupe:"Services", name:"Skin ID", hint:"Quelques questions, et nous composons votre rituel", action:"skinid",
     keywords:["skin id","diagnostic","test","quiz","type de peau","quelle routine","conseil","quel soin","rituel"]},
    {groupe:"Services", name:"Nos soins", hint:"Tous les soins, rangés par type", lien:"soins", keywords:["soins","catalogue","tous les soins","boutique","produits","nos soins"]},
    {groupe:"Services", name:"Vos besoins", hint:"Les soins, rangés par besoin de la peau", lien:"besoins", keywords:["besoins","besoin","probleme de peau","peau"]},
    {groupe:"Services", name:"Routines et coffrets", hint:"Les routines et les coffrets des fêtes", lien:"routines", keywords:["routines","routine","coffrets","coffret","cadeau","noel","fetes"]},
    {groupe:"Leur expérience", name:"Leur expérience", hint:"Les vidéos et retours de nos ambassadrices", lien:"experience",
     keywords:["experience","avis","temoignage","temoignages","video","videos","retours","ambassadrice","resultats","avant apres"]},
    {groupe:"Leur expérience", name:"Devenir ambassadrice", hint:"Collaborations et espace ambassadrice", action:"collaboration",
     keywords:["collaboration","collaborations","collab","ambassadrice","influenceuse","createur","creatrice","ugc","partenariat","code","tiktok"]},
    {groupe:"Leur expérience", name:"ELKHA.B sur TikTok", hint:"@elkha.b", url:"https://www.tiktok.com/@elkha.b", keywords:["tiktok","reseaux","reseaux sociaux","suivre"]},
    {groupe:"Leur expérience", name:"ELKHA.B sur Instagram", hint:"@elkhab.skincare", url:"https://www.instagram.com/elkhab.skincare/", keywords:["instagram","insta","reseaux","reseaux sociaux","suivre"]},
    {groupe:"Gammes", name:"Bloom", hint:"La gamme éclat", lien:"bloom", keywords:["bloom","gamme","eclat"]},
    {groupe:"Gammes", name:"Balance", hint:"La gamme renouvellement cellulaire", lien:"balance", keywords:["balance","gamme","renouvellement","cellulaire","anti-age"]},
    {groupe:"Gammes", name:"Le Journal", hint:"Articles, actifs et routines", lien:"journal", keywords:["journal","articles","blog","conseils","actifs"]},
    {groupe:"Informations", name:"Livraison & retours", hint:"Délais, frais de livraison, retours et remboursements", legal:"livraison-retours",
     keywords:["livraison","expedition","delai","delais","colis","frais de port","retour","retours","remboursement","retractation","suivi","livraison offerte"]},
    {groupe:"Informations", name:"Contact", hint:"Une question ? Écrivez-nous", lien:"accueil", hash:"contact", keywords:["contact","contacter","question","aide","service client","email","mail"]},
    {groupe:"Informations", name:"Conditions générales de vente", hint:"CGV", legal:"cgv", keywords:["cgv","conditions","vente","paiement","commande","garantie"]},
    {groupe:"Informations", name:"Mentions légales", legal:"mentions-legales", keywords:["mentions","legales","editeur","siret","hebergeur"]},
    {groupe:"Informations", name:"Politique de confidentialité", legal:"politique-confidentialite", keywords:["confidentialite","donnees","rgpd","vie privee"]},
    {groupe:"Informations", name:"Politique de cookies", legal:"politique-cookies", keywords:["cookies","cookie","traceurs"]}
  ];

  var SUGGESTIONS = ["Taches", "Rides", "Contour des yeux", "Peau sensible", "Coffrets", "Livraison"];

  /* ⛔ NE RIEN MODIFIER EN DESSOUS ─────────────────────────────────────── */

  var GRIFFE = '<svg viewBox="18 7 72 90" aria-hidden="true"><g fill="currentColor" fill-rule="evenodd"><rect x="48" y="10" width="7" height="84"/><rect x="21" y="10" width="27" height="2.4"/><rect x="28" y="49.12" width="20" height="2.4"/><rect x="21" y="91.60" width="27" height="2.4"/><path d="M55 10H65A16.5 20.16 0 0 1 65 50.32H55ZM55 12.4H64.5A10.8 18.36 0 0 1 64.5 49.12H55Z"/><path d="M55 50.32H68A19 21.84 0 0 1 68 94H55ZM55 51.52H67.5A12.6 20.04 0 0 1 67.5 91.60H55Z"/></g></svg>';
  var LOUPE = '<svg viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>';

  var CSS = ''
  // même panneau que le panier : glisse depuis la droite, fond beige voilé, voile léger derrière
  + '.ebrech-fond{position:fixed;inset:0;z-index:999997;background:rgba(0,0,0,.12);opacity:0;visibility:hidden;transition:opacity .3s ease,visibility 0s linear .3s}'
  + '.ebrech-fond.open{opacity:1;visibility:visible;transition:opacity .3s ease}'
  + '.ebrech{position:fixed;top:0;right:0;width:min(420px,92vw);height:100vh;height:100dvh;z-index:999998;box-sizing:border-box;padding:26px 22px 0;display:flex;flex-direction:column;'
  +   'font-family:Montserrat,sans-serif;color:#111;-webkit-font-smoothing:antialiased;background:rgba(246,244,240,.5);-webkit-backdrop-filter:blur(24px) saturate(1.1);backdrop-filter:blur(24px) saturate(1.1);'
  +   'transform:translateX(105%);transition:transform .3s ease}'
  + '.ebrech.open{transform:translateX(0)}'
  + '.ebrech *{box-sizing:border-box}'
  // en-tête : la griffe ELKHA.B · PARIS, la croix comme celle du panier
  + '.ebrech-tete{position:relative;display:flex;flex-direction:column;align-items:center;padding:4px 0 20px;border-bottom:1px solid #e5e5e5}'
  + '.ebrech-tete svg{display:block;height:30px;width:auto}'
  + '.ebrech-tete i{display:block;width:18px;height:1px;background:currentColor;opacity:.45;margin:10px 0 9px}'
  + '.ebrech-logo{font-size:13px;letter-spacing:.42em;padding-left:.42em}'
  + '.ebrech-paris{display:flex;align-items:center;gap:7px;margin-top:4px;font-size:5.5px;letter-spacing:.6em;padding-left:.6em;color:#555}.ebrech-paris b{display:block;width:12px;height:1px;background:#555;opacity:.7}'
  + '.ebrech-x{position:absolute;top:-4px;right:0;border:0;background:none;font-size:28px;line-height:1;cursor:pointer;padding:0;color:#111;font-family:inherit}'
  // le champ
  + '.ebrech-k{font-size:9px;letter-spacing:.32em;color:#6b665e;font-weight:600;text-transform:uppercase;margin:24px 0 10px}'
  + '.ebrech-champ{display:flex;align-items:center;gap:12px;border-bottom:1px solid #111;padding-bottom:10px}'
  + '.ebrech-champ svg{width:18px;height:18px;flex:none}'
  + '.ebrech-champ input{flex:1;min-width:0;border:0;background:transparent;outline:none;font-family:inherit;font-size:20px;font-weight:300;letter-spacing:.01em;color:#111;padding:0;border-radius:0}'
  + '.ebrech-champ input::placeholder{color:#111;opacity:.35}'
  // les résultats défilent sous le champ
  + '.ebrech-res{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;margin:0 -22px;padding:0 22px 30px}'
  + '.ebrech-sugg{display:flex;flex-wrap:wrap;gap:8px 18px;margin-top:16px}'
  + '.ebrech-sugg button{border:0;background:none;padding:0 0 3px;font-family:inherit;font-size:12px;color:#111;border-bottom:1px solid rgba(0,0,0,.25);cursor:pointer}'
  + '.ebrech-g{font-size:9px;letter-spacing:.32em;color:#6b665e;font-weight:600;text-transform:uppercase;margin:28px 0 2px;display:flex;align-items:center;gap:12px}.ebrech-g:after{content:"";flex:1;height:1px;background:rgba(0,0,0,.1)}'
  + '.ebrech-p{display:flex;align-items:center;gap:14px;width:100%;padding:12px 0;border:0;border-bottom:1px solid rgba(0,0,0,.08);background:none;text-align:left;font-family:inherit;color:#111;cursor:pointer;-webkit-tap-highlight-color:transparent}'
  + '.ebrech-p:hover .ebrech-n{text-decoration:underline;text-underline-offset:3px}'
  + '.ebrech-ph{flex:none;width:60px;height:60px;border-radius:10px;overflow:hidden;background:#f5f4f0}'
  + '.ebrech-ph img{width:100%;height:100%;object-fit:cover;object-position:50% 54%;transform:scale(.9);display:block;color:transparent}'
  + '.ebrech-t{flex:1;min-width:0}'
  + '.ebrech-gm{display:block;font-size:8px;letter-spacing:.3em;font-weight:600;text-transform:uppercase;color:#6b665e}.ebrech-gm.bl{color:#a65a63}.ebrech-gm.ba{color:#5f7149}'
  + '.ebrech-n{display:block;font-size:14px;font-weight:600;margin-top:3px;letter-spacing:.01em}'
  + '.ebrech-s{display:block;font-size:11.5px;color:#5f5a53;margin-top:3px;line-height:1.45}'
  + '.ebrech-a{display:block;width:100%;padding:12px 0;border:0;border-bottom:1px solid rgba(0,0,0,.08);background:none;text-align:left;font-family:inherit;color:#111;cursor:pointer}'
  + '.ebrech-a b{display:block;font-size:13.5px;font-weight:600}.ebrech-a span{display:block;font-size:11.5px;color:#5f5a53;margin-top:2px;line-height:1.45}'
  + '.ebrech-a:hover b{text-decoration:underline;text-underline-offset:3px}'
  + '.ebrech-vide{font-size:12.5px;line-height:1.7;color:#5f5a53;margin:26px 0 0}'
  // l'encart Skin ID
  + '.ebrech-sk{margin-top:30px;background:#111;color:#f5f4f0;padding:20px}'
  + '.ebrech-sk b{display:block;font-size:9.5px;letter-spacing:.3em}.ebrech-sk p{margin:8px 0 14px;font-size:12px;line-height:1.6;color:rgba(245,244,240,.8)}'
  + '.ebrech-sk button{border:1px solid #f5f4f0;background:none;color:#f5f4f0;font-family:inherit;font-size:9.5px;letter-spacing:.24em;font-weight:600;text-transform:uppercase;padding:11px 16px;cursor:pointer}'
  + 'html.ebrech-ouvert,html.ebrech-ouvert body{overflow:hidden}';

  var fond, panneau, champ, zone, ACTIONS = {};

  function esc(t){ var d = document.createElement('div'); d.textContent = t == null ? '' : String(t); return d.innerHTML; }
  function norm(s){ return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’']/g, ' ').replace(/[^a-z0-9& ]+/g, ' ').replace(/\s+/g, ' ').trim(); }
  function site(cle){
    return (window.EB_SITES && window.EB_SITES[cle]) || ({ accueil: 'https://elkhab.com/', bloom: 'https://bloom.elkhab.com/', balance: 'https://balance.elkhab.com/', journal: 'https://journal.elkhab.com/',
      experience: 'https://experience.elkhab.com/', soins: 'https://soins.elkhab.com/', besoins: 'https://besoins.elkhab.com/', routines: 'https://routines.elkhab.com/' })[cle];
  }
  function photo(u){ if(!u) return ''; if(u.indexOf('cdn.shopify.com') < 0) return u; return u.split('?')[0] + '?width=160'; }

  // les fiches (catalogue + moteur) : chargées une seule fois, si la page ne les a pas déjà
  var pret = false, enCours = false, aPres = [];
  function chargerFiches(fin){
    if(pret){ fin && fin(); return; }
    if(fin) aPres.push(fin);
    if(enCours) return; enCours = true;
    (function suivant(i){
      if(i >= FICHIERS.length){ pret = true; enCours = false; var l = aPres.splice(0); l.forEach(function(f){ f(); }); return; }
      if(document.querySelector('script[src*="' + FICHIERS[i] + '"]')){
        // déjà dans la page : on attend juste qu'il soit lu
        var essais = 0; (function att(){ if(window.EB_PRODUITS || ++essais > 40) suivant(i + 1); else setTimeout(att, 100); })();
        return;
      }
      var s = document.createElement('script'); s.src = BASE + FICHIERS[i]; s.onload = s.onerror = function(){ suivant(i + 1); }; document.body.appendChild(s);
    })(0);
  }

  function soins(){
    var cat = window.EB_PRODUITS || {}, liste = [];
    Object.keys(cat).forEach(function(id){
      var p = cat[id] || {}; if(!p.nom) return;
      var type = id.indexOf('coffret-') === 0 ? 'coffret' : (id.indexOf('routine-') === 0 || id === 'rituel-luminescence' ? 'routine' : 'soin');
      var gamme = BALANCE.indexOf(id) >= 0 ? 'ba' : 'bl';
      liste.push({ id: id, name: p.nom, hint: String(p.sousTitre || '').split('\n')[0], type: type, gamme: gamme,
        img: p.media && (p.media.miniature || (p.media.images && p.media.images[type === 'coffret' ? 2 : 0]) || p.media.image) || '',
        keywords: (MOTS[id] || []).concat([p.sousTitre || '']) });
    });
    return liste;
  }
  function score(item, mots){
    var nom = norm(item.name), tout = nom + ' ' + norm(item.hint) + ' ' + norm((item.keywords || []).join(' | ')), s = 0;
    for(var i = 0; i < mots.length; i++){
      var m = mots[i];
      if(tout.indexOf(m) === -1){ var alt = m.slice(-1) === 's' ? m.slice(0, -1) : m + 's'; if(m.length < 4 || tout.indexOf(alt) === -1) return 0; }
      s += nom.indexOf(m) === 0 ? 6 : (nom.indexOf(m) !== -1 ? 4 : 1);
    }
    return s;
  }

  function skinIdHTML(){
    return '<div class="ebrech-sk"><b>SKIN ID</b><p>Pas sûre de ce qu\'il faut à votre peau ? Quelques questions, et nous composons votre rituel.</p><button type="button" data-skin>Faire mon Skin ID</button></div>';
  }
  function suggestionsHTML(){
    return '<div class="ebrech-sugg">' + SUGGESTIONS.map(function(s){ return '<button type="button" data-s="' + esc(s) + '">' + esc(s) + '</button>'; }).join('') + '</div>';
  }
  function produitHTML(r, cle){
    var gm = r.type === 'coffret' ? '<span class="ebrech-gm ' + r.gamme + '">Coffret des fêtes</span>'
      : r.type === 'routine' ? '<span class="ebrech-gm ' + r.gamme + '">Routine ' + (r.gamme === 'ba' ? 'Balance' : 'Bloom') + '</span>'
      : '<span class="ebrech-gm ' + r.gamme + '">' + (r.gamme === 'ba' ? 'Balance' : 'Bloom') + '</span>';
    return '<button type="button" class="ebrech-p" data-k="' + cle + '"><span class="ebrech-ph">' + (r.img ? '<img src="' + esc(photo(r.img)) + '" alt="" loading="lazy" onerror="this.style.visibility=\'hidden\'">' : '') + '</span>'
      + '<span class="ebrech-t">' + gm + '<span class="ebrech-n">' + esc(r.name) + '</span>' + (r.hint ? '<span class="ebrech-s">' + esc(r.hint) + '</span>' : '') + '</span></button>';
  }
  function texteHTML(r, cle){
    return '<button type="button" class="ebrech-a" data-k="' + cle + '"><b>' + esc(r.name) + '</b>' + (r.hint ? '<span>' + esc(r.hint) + '</span>' : '') + '</button>';
  }

  function chercher(valeur){
    if(!zone) return;
    var q = norm(valeur); ACTIONS = {};
    if(q.length < 2){ zone.innerHTML = suggestionsHTML() + skinIdHTML(); return; }
    // une lettre seule reste attachée au mot d'avant : « vitamine c » cherche « vitamine c », pas toutes les vitamines
    if(/^vitamines?$/.test(q)) q = 'vitamine c';   // « vitamine » seule : la vitamine C, la plus recherchée
    var mots = []; q.split(' ').forEach(function(m){ if(m.length > 1 || /\d/.test(m)) mots.push(m); else if(mots.length) mots[mots.length - 1] += ' ' + m; });
    if(!mots.length){ zone.innerHTML = suggestionsHTML() + skinIdHTML(); return; }
    var S = soins();
    var groupes = [
      { label: 'Soins', items: S.filter(function(s){ return s.type === 'soin'; }), type: 'fiche' },
      { label: 'Coffrets & routines', items: S.filter(function(s){ return s.type !== 'soin'; }), type: 'fiche' },
      { label: 'Le Journal', items: ARTICLES, type: 'article' }
    ];
    var parG = {};
    PAGES.forEach(function(p){ if(!parG[p.groupe]){ parG[p.groupe] = { label: p.groupe, items: [], type: 'page' }; groupes.push(parG[p.groupe]); } parG[p.groupe].items.push(p); });
    var html = '', n = 0;
    groupes.forEach(function(g){
      var tr = g.items.map(function(r){ return { r: r, s: score(r, mots) }; }).filter(function(x){ return x.s > 0; }).sort(function(a, b){ return b.s - a.s; });
      if(!tr.length) return;
      html += '<div class="ebrech-g">' + esc(g.label) + ' · ' + tr.length + '</div>';
      tr.forEach(function(x){ var cle = 'r' + (n++); ACTIONS[cle] = { r: x.r, type: g.type }; html += g.type === 'fiche' ? produitHTML(x.r, cle) : texteHTML(x.r, cle); });
    });
    if(!html){
      zone.innerHTML = '<p class="ebrech-vide">Aucun résultat pour « ' + esc(valeur) + ' ». Essayez un actif, un besoin de peau ou le nom d\'un soin.</p>' + suggestionsHTML() + skinIdHTML();
      return;
    }
    zone.innerHTML = html + skinIdHTML();
  }

  function aller(url){ var a = document.createElement('a'); a.href = url; a.style.display = 'none'; document.body.appendChild(a); a.click(); setTimeout(function(){ a.remove(); }, 500); }
  function skinId(){
    if(typeof window.ebSkinIdOpen === 'function'){ window.ebSkinIdOpen(); return; }
    var s = document.createElement('script'); s.src = SKIN_ID_ENGINE; s.onload = function(){ if(typeof window.ebSkinIdOpen === 'function') window.ebSkinIdOpen(); }; document.head.appendChild(s);
  }
  function ouvrirResultat(it){
    var r = it.r;
    fermer();
    setTimeout(function(){
      if(it.type === 'fiche'){
        chargerFiches(function(){
          if(typeof window.ebFicheOpen === 'function' && window.EB_PRODUITS && window.EB_PRODUITS[r.id]) window.ebFicheOpen(r.id);
          else aller(site(r.type === 'soin' ? (r.gamme === 'ba' ? 'balance' : 'bloom') : 'routines') + '?fiche=' + encodeURIComponent(r.id));
        });
        return;
      }
      if(it.type === 'article'){ var j = site('journal'); if(location.hostname === new URL(j).hostname) location.hash = '#' + r.id; else aller(j + '#' + r.id); return; }
      if(r.action === 'skinid'){ skinId(); return; }
      if(r.action === 'collaboration'){ if(typeof window.ebCollabOpen === 'function') window.ebCollabOpen(); else aller(site('experience') + '#collaboration'); return; }
      if(r.legal){ if(typeof window.ebLegalOpen === 'function' && window.ebLegalOpen(r.legal)) return; aller(site('accueil') + '#' + r.legal); return; }
      if(r.url){ window.open(r.url, '_blank', 'noopener'); return; }
      if(r.lien){ var b = site(r.lien); if(r.hash && location.hostname === new URL(b).hostname){ location.hash = '#' + r.hash; return; } aller(b + (r.hash ? '#' + r.hash : '')); }
    }, 320);
  }

  function construire(){
    if(panneau) return;
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    fond = document.createElement('div'); fond.className = 'ebrech-fond';
    panneau = document.createElement('div'); panneau.className = 'ebrech'; panneau.setAttribute('role', 'dialog'); panneau.setAttribute('aria-label', 'Rechercher sur ELKHA.B');
    panneau.innerHTML = '<div class="ebrech-tete">' + GRIFFE + '<i></i><div class="ebrech-logo">ELKHA.B</div><div class="ebrech-paris"><b></b>PARIS<b></b></div>'
      + '<button type="button" class="ebrech-x" aria-label="Fermer la recherche">&times;</button></div>'
      + '<p class="ebrech-k">Rechercher</p>'
      + '<label class="ebrech-champ">' + LOUPE + '<input type="text" inputmode="search" placeholder="Soin, actif, besoin…" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search"></label>'
      + '<div class="ebrech-res"></div>';
    document.body.appendChild(fond); document.body.appendChild(panneau);
    champ = panneau.querySelector('input'); zone = panneau.querySelector('.ebrech-res');
    champ.addEventListener('input', function(){ chercher(champ.value); });
    champ.addEventListener('keydown', function(e){ if(e.key === 'Enter'){ var p = zone.querySelector('[data-k]'); if(p){ e.preventDefault(); p.click(); } } });
    panneau.querySelector('.ebrech-x').addEventListener('click', fermer);
    fond.addEventListener('click', fermer);
    zone.addEventListener('click', function(e){
      var s = e.target.closest('[data-s]'); if(s){ champ.value = s.getAttribute('data-s'); chercher(champ.value); champ.focus(); return; }
      if(e.target.closest('[data-skin]')){ fermer(); setTimeout(skinId, 320); return; }
      var k = e.target.closest('[data-k]'); if(k && ACTIONS[k.getAttribute('data-k')]) ouvrirResultat(ACTIONS[k.getAttribute('data-k')]);
    });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && panneau.classList.contains('open')) fermer(); });
  }
  function ouvrir(){
    construire();
    chercher(champ.value);
    chargerFiches(function(){ if(panneau.classList.contains('open')) chercher(champ.value); });
    document.documentElement.classList.add('ebrech-ouvert');
    fond.classList.add('open'); panneau.classList.add('open');
    setTimeout(function(){ champ.focus(); }, 320);
  }
  function fermer(){
    if(!panneau || !panneau.classList.contains('open')) return;
    panneau.classList.remove('open'); fond.classList.remove('open');
    document.documentElement.classList.remove('ebrech-ouvert');
    champ.blur();
  }

  // remplace l'ancienne recherche partout (loupe du menu, liens « ebSearchOpen() » posés dans Carrd)
  window.ebSearchOpen = ouvrir;
  window.ebSearchClose = fermer;
  window.ebSearchRun = function(v){ construire(); champ.value = v || ''; chercher(champ.value); };
  window.ebSearchFiche = function(id){ fermer(); chargerFiches(function(){ if(typeof window.ebFicheOpen === 'function') window.ebFicheOpen(id); }); return false; };
  // si l'ancienne recherche se charge après celle-ci, elle ne reprend pas la main
  var MIENNES = { ebSearchOpen: window.ebSearchOpen, ebSearchClose: window.ebSearchClose, ebSearchRun: window.ebSearchRun, ebSearchFiche: window.ebSearchFiche };
  function garder(){ for(var k in MIENNES) if(window[k] !== MIENNES[k]) window[k] = MIENNES[k]; var vieux = document.getElementById('ebSearchOverlay'); if(vieux) vieux.style.display = 'none'; }
  garder(); window.addEventListener('load', garder); var t = 0, iv = setInterval(function(){ garder(); if(++t > 20) clearInterval(iv); }, 500);
})();
