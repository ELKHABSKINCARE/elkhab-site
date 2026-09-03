(function(){
  var styleTag = document.createElement('style');
  styleTag.textContent = `
.eb-search-overlay{position:fixed;inset:0;background:rgba(255,255,255,.4);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);z-index:999997;display:flex;align-items:flex-start;justify-content:center;opacity:0;visibility:hidden;transition:opacity .35s ease;padding:100px 24px 24px}
.eb-search-overlay.open{opacity:1;visibility:visible}
.eb-search-panel{background:rgba(255,255,255,.6);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);width:100%;max-width:560px;max-height:75vh;overflow-y:auto;padding:28px 28px 36px;font-family:'Montserrat',sans-serif;color:#000;box-shadow:0 30px 80px rgba(0,0,0,.2)}
.eb-search-close{position:absolute;top:18px;right:20px;background:none;border:none;font-size:22px;cursor:pointer;color:#000;transition:transform .2s ease}
.eb-search-close:hover{transform:scale(1.15)}
.eb-search-input{width:100%;border:none;border-bottom:1.5px solid #000;background:transparent;font-family:'Montserrat',sans-serif;font-size:16px;padding:10px 4px;outline:none;color:#000}
.eb-search-input::placeholder{color:#000;opacity:.4}
.eb-search-results{margin-top:20px}
.eb-search-group-label{font-size:11px;letter-spacing:.1em;text-transform:uppercase;opacity:.5;margin:18px 0 8px}
.eb-search-item{display:block;text-decoration:none;color:#000;padding:10px 0;border-bottom:1px solid rgba(0,0,0,.08)}
.eb-search-item-name{font-weight:600;font-size:14px}
.eb-search-item-hint{font-size:12px;opacity:.55;margin-top:2px}
.eb-search-empty{font-size:13px;opacity:.5;margin-top:20px;text-align:center}
`;
  document.head.appendChild(styleTag);

  var container = document.createElement('div');
  container.innerHTML = `
<div class="eb-search-overlay" id="ebSearchOverlay">
  <div class="eb-search-panel" style="position:relative">
    <button class="eb-search-close" onclick="ebSearchClose()">&times;</button>
    <input type="text" class="eb-search-input" id="ebSearchInput" placeholder="Rechercher un soin, un ingrédient, un article..." oninput="ebSearchRun(this.value)">
    <div class="eb-search-results" id="ebSearchResults"></div>
  </div>
</div>`;
  document.body.appendChild(container);
})();

const EB_SOINS_BASE = "https://elkhab-soins.carrd.co/";
const EB_JOURNAL_BASE = "https://elkhab-journal.carrd.co/";

const EB_PRODUCTS = [
  {id:"radiance-serum", name:"Radiance C Serum", keywords:["vitamine c","eclat","teint","taches","antioxydant","serum"]},
  {id:"lumibloom-niac-5", name:"Lumi-Bloom Niacinamide 5", keywords:["niacinamide","sebum","pores","imperfections","teint","serum"]},
  {id:"gelee-lumibloom", name:"Gelée Lumi-Bloom", keywords:["prebiotique","microbiome","barriere cutanee","hydratation","gelee"]},
  {id:"radiance-protect", name:"Radiance Protect SPF 50", keywords:["spf","protection solaire","uv","soleil"]},
  {id:"luminescence-nuit", name:"Luminescence Nuit", keywords:["nuit","fermete","plancton marin","collagene","rebond"]},
  {id:"luminescence-jour", name:"Luminescence Jour", keywords:["jour","hydratation","acide hyaluronique","bisabolol"]},
  {id:"lumiveil-cc-cream", name:"Lumi-Veil CC Cream SPF 30", keywords:["cc creme","teint","spf","ceramides","beurre de cacao"]},
  {id:"rituel-luminescence", name:"Rituel Luminescence Jour & Nuit", keywords:["rituel","duo","jour et nuit","routine"]},
  {id:"radiance-eye-cream", name:"Radiance Eye Cream", keywords:["contour des yeux","cernes","poches","hyaluronique","regard"]},
  {id:"bright-glow-patch", name:"Lumi Eyes Bright & Glow", keywords:["patchs","contour des yeux","hydrogel","niacinamide","regard"]},
  {id:"routine-eclat", name:"Routine Éclat", keywords:["routine","eclat","vitamine c","glow","teint lumineux"]},
  {id:"routine-hydratation", name:"Routine Hydratation", keywords:["routine","hydratation","peau seche","deshydratee"]},
  {id:"routine-anti-age", name:"Routine Anti-âge", keywords:["routine","anti-age","fermete","rides","collagene"]},
  {id:"routine-equilibre", name:"Routine Équilibre", keywords:["routine","equilibre","sebum","pores","peau mixte"]},
  {id:"routine-teint-protection", name:"Routine Teint & Protection", keywords:["routine","teint","protection solaire","spf"]},
  {id:"routine-regard", name:"Routine Regard", keywords:["routine","regard","contour des yeux","cernes","poches"]}
];

const EB_ARTICLES = [
  {id:"article-peau-deshydratee", name:"Peau sèche ou déshydratée ?", keywords:["peau seche","deshydratee","hydratation","tiraille","difference"]},
  {id:"produits-routine", name:"Faut-il vraiment autant de produits dans sa routine ?", keywords:["routine","minimalisme","simplifier","produits"]},
  {id:"article-vitaminec", name:"Vitamine C", keywords:["vitamine c","eclat","antioxydant","teint","skincare"]},
  {id:"article-niacinamide", name:"Niacinamide", keywords:["niacinamide","sebum","pores","imperfections"]},
  {id:"article-peau-qui-tiraille", name:"Peau qui tiraille", keywords:["tiraille","nutrition","hydratation","inconfort"]},
  {id:"article-teint-terne", name:"Teint terne", keywords:["teint terne","eclat","fatigue","pollution"]}
];

function ebSearchNormalize(str){
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
}

function ebSearchMatch(item, query){
  const q = ebSearchNormalize(query);
  if(ebSearchNormalize(item.name).includes(q)) return true;
  return item.keywords.some(function(k){ return ebSearchNormalize(k).includes(q); });
}

function ebSearchRun(query){
  const resultsEl = document.getElementById('ebSearchResults');
  if(!query || query.trim().length < 2){
    resultsEl.innerHTML = '';
    return;
  }
  const matchedProducts = EB_PRODUCTS.filter(function(p){ return ebSearchMatch(p, query); });
  const matchedArticles = EB_ARTICLES.filter(function(a){ return ebSearchMatch(a, query); });

  if(matchedProducts.length === 0 && matchedArticles.length === 0){
    resultsEl.innerHTML = '<div class="eb-search-empty">Aucun résultat pour « '+query+' »</div>';
    return;
  }

  let html = '';
  if(matchedProducts.length > 0){
    html += '<div class="eb-search-group-label">Soins</div>';
    matchedProducts.forEach(function(p){
      html += '<a class="eb-search-item" href="'+EB_SOINS_BASE+'#'+p.id+'"><div class="eb-search-item-name">'+p.name+'</div></a>';
    });
  }
  if(matchedArticles.length > 0){
    html += '<div class="eb-search-group-label">Journal</div>';
    matchedArticles.forEach(function(a){
      html += '<a class="eb-search-item" href="'+EB_JOURNAL_BASE+'#'+a.id+'"><div class="eb-search-item-name">'+a.name+'</div></a>';
    });
  }
  resultsEl.innerHTML = html;
}

function ebSearchOpen(){
  document.getElementById('ebSearchOverlay').classList.add('open');
  setTimeout(function(){ document.getElementById('ebSearchInput').focus(); }, 100);
}
function ebSearchClose(){
  document.getElementById('ebSearchOverlay').classList.remove('open');
  document.getElementById('ebSearchInput').value = '';
  document.getElementById('ebSearchResults').innerHTML = '';
}

window.ebSearchOpen = ebSearchOpen;
window.ebSearchClose = ebSearchClose;
window.ebSearchRun = ebSearchRun;
