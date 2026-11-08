/* © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite. */
/* ═══════════════════════════════════════════════════════════════════════
   ELKHA.B — ARTICLES DU JOURNAL : ARRIVÉE EN GLISSÉ (articles-panneau.js)
   Sur tous les sites (sauf le Journal lui-même), un lien vers un article du Journal :
   1. fait glisser un panneau beige ELKHA.B par-dessus la page (griffe qui pulse) ;
   2. ouvre l'article sur le Journal, qui reste caché sous le même beige jusqu'à ce que
      l'article soit en place (rien ne saute) ;
   3. la croix de l'article revient en arrière : la page d'origine réapparaît exactement
      où elle était, et le panneau beige repart en glissant.
   (Carrd interdit d'afficher une page Carrd à l'intérieur d'une autre : l'article ne peut
    pas s'ouvrir dans un cadre, d'où ce passage en glissé.)
   Chargé automatiquement par menu-test.js (rien à ajouter dans Carrd).
   ═══════════════════════════════════════════════════════════════════════ */
(function(){
if(window.ebArticlesPanneau) return; window.ebArticlesPanneau = true;

var HOTES_JOURNAL = ['journal.elkhab.com', 'journal-test.carrd.co'];

function hoteJournal(){
  try { return new URL((window.EB_SITES && window.EB_SITES.journal) || 'https://journal.elkhab.com/').hostname; } catch(e){ return 'journal.elkhab.com'; }
}
function estJournal(h){ h = (h || '').toLowerCase(); return h === hoteJournal() || HOTES_JOURNAL.indexOf(h) !== -1; }
if(estJournal(location.hostname)) return;   // sur le Journal, les articles s'ouvrent déjà sur place

var css = document.createElement('style');
css.textContent = ''
+ '.eb-art{position:fixed;inset:0;z-index:2147483640;background:#f5f4f0;transform:translateX(100%);transition:transform .55s cubic-bezier(.65,0,.35,1);will-change:transform;pointer-events:none}'
+ '.eb-art.open{transform:translateX(0);pointer-events:auto}'
+ '.eb-art-charge{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Montserrat,sans-serif;color:#111;transition:opacity .25s ease}'
+ '.eb-art.part .eb-art-charge{opacity:0}'
+ '.eb-art-charge>div{display:flex;flex-direction:column;align-items:center;animation:ebArtPulse 1.8s ease-in-out infinite}'
+ '@keyframes ebArtPulse{0%,100%{opacity:.35}50%{opacity:1}}';
document.head.appendChild(css);

var panneau = null;
function griffe(){
  return '<svg style="display:block;height:40px;width:auto" viewBox="18 7 72 90" aria-hidden="true"><g fill="currentColor" fill-rule="evenodd"><rect x="48" y="10" width="7" height="84"/><rect x="21" y="10" width="27" height="2.4"/><rect x="28" y="49.12" width="20" height="2.4"/><rect x="21" y="91.60" width="27" height="2.4"/><path d="M55 10H65A16.5 20.16 0 0 1 65 50.32H55ZM55 12.4H64.5A10.8 18.36 0 0 1 64.5 49.12H55Z"/><path d="M55 50.32H68A19 21.84 0 0 1 68 94H55ZM55 51.52H67.5A12.6 20.04 0 0 1 67.5 91.60H55Z"/></g></svg>'
    + '<i style="display:block;width:20px;height:1px;background:currentColor;opacity:.45;margin:13px 0 12px"></i><div style="font-size:16px;letter-spacing:.42em;padding-left:.42em">ELKHA.B</div>';
}
function preparer(){
  if(panneau) return panneau;
  panneau = document.createElement('div'); panneau.className = 'eb-art'; panneau.setAttribute('aria-hidden', 'true');
  panneau.innerHTML = '<div class="eb-art-charge"><div>' + griffe() + '</div></div>';
  document.body.appendChild(panneau);
  return panneau;
}

// on suit le lien normalement (le panier y ajoute le site et la position d'origine)
var passer = false;
function suivre(href){
  var a = document.createElement('a'); a.href = href; a.style.display = 'none'; document.body.appendChild(a);
  passer = true; a.click(); passer = false; a.remove();
}

var enCours = false;
function ouvrir(url){
  if(enCours) return; enCours = true;
  var p = preparer();
  p.classList.remove('part', 'sans-glisse');
  void p.offsetWidth;
  p.classList.add('open');
  // le panneau a fini de glisser : la griffe s'efface (le Journal arrive sur le même beige), puis on part
  setTimeout(function(){ p.classList.add('part'); }, 520);
  setTimeout(function(){ enCours = false; suivre(url.toString()); }, 760);
}

// retour depuis l'article : la page réapparaît telle qu'on l'a laissée, le panneau repart en glissant
function repartir(){
  var p = preparer();
  p.classList.add('part');
  requestAnimationFrame(function(){ requestAnimationFrame(function(){ p.classList.remove('open'); }); });
}
window.addEventListener('pageshow', function(e){
  enCours = false;
  if(e.persisted && panneau && panneau.classList.contains('open')) repartir();
});
// (si le navigateur recharge la page au retour au lieu de la garder en mémoire, il la replace lui-même
//  à la bonne hauteur : on n'ajoute rien, un voile arrivé après coup ferait clignoter la page)

// clic sur un lien vers un article du Journal (écouté avant le panier, qui changerait de site tout de suite)
window.addEventListener('click', function(e){
  if(passer) return;
  if(e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  var a = e.target.closest && e.target.closest('a[href]'); if(!a) return;
  if(a.target && a.target !== '_self') return;
  var url; try { url = new URL(a.getAttribute('href'), location.href); } catch(err){ return; }
  if(!estJournal(url.hostname)) return;
  if(!/^#article-/.test(url.hash)) return;
  e.preventDefault(); e.stopPropagation();
  ouvrir(url);
}, true);

window.ebArticleOpen = function(id){
  var j = (window.EB_SITES && window.EB_SITES.journal) || 'https://journal.elkhab.com/';
  ouvrir(new URL(j + '#' + id));
};
})();
