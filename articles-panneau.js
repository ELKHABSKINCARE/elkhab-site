/* © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite. */
/* ═══════════════════════════════════════════════════════════════════════
   ELKHA.B — ARTICLES DU JOURNAL EN PANNEAU (articles-panneau.js)
   Sur tous les sites (sauf le Journal lui-même), un lien vers un article
   du Journal ouvre l'article dans un panneau qui glisse par-dessus la page,
   sans changer de site : pas de rechargement, pas de saut, et en fermant
   on retrouve la page exactement où on était.
   Chargé automatiquement par menu-test.js (rien à ajouter dans Carrd).
   ═══════════════════════════════════════════════════════════════════════ */
(function(){
if(window.ebArticlesPanneau) return; window.ebArticlesPanneau = true;

var HOTES_JOURNAL = ['journal.elkhab.com', 'journal-test.carrd.co'];
var ATTENTE_MAX = 9000;
var DIAG = /[?&]articles=diag/.test(location.search);   // vérification : le panneau montre ce qu'il reçoit et ne repart jamais   // si l'article n'est pas prêt après 9 s : on y va normalement

function hoteJournal(){
  try { return new URL((window.EB_SITES && window.EB_SITES.journal) || 'https://journal.elkhab.com/').hostname; } catch(e){ return 'journal.elkhab.com'; }
}
function estJournal(h){ h = (h || '').toLowerCase(); return h === hoteJournal() || HOTES_JOURNAL.indexOf(h) !== -1; }
if(estJournal(location.hostname)) return;   // sur le Journal, les articles s'ouvrent déjà sur place

var css = document.createElement('style');
css.textContent = ''
+ '.eb-art{position:fixed;inset:0;z-index:99990;background:#f5f4f0;transform:translateX(100%);transition:transform .55s cubic-bezier(.65,0,.35,1);will-change:transform}'
+ '.eb-art.open{transform:translateX(0)}'
+ '.eb-art iframe{position:absolute;inset:0;width:100%;height:100%;border:0;background:#f5f4f0;opacity:0;transition:opacity .35s ease}'
+ '.eb-art.pret iframe{opacity:1}'
+ '.eb-art-charge{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Montserrat,sans-serif;color:#111;transition:opacity .3s ease;pointer-events:none}'
+ '.eb-art.pret .eb-art-charge{opacity:0}'
+ '.eb-art-charge>div{display:flex;flex-direction:column;align-items:center;animation:ebArtPulse 1.8s ease-in-out infinite}'
+ '@keyframes ebArtPulse{0%,100%{opacity:.35}50%{opacity:1}}'
+ '.eb-art-close{position:fixed;top:18px;right:18px;z-index:99991;width:42px;height:42px;border-radius:50%;border:0;background:#fff;color:#111;font-size:24px;line-height:42px;text-align:center;cursor:pointer;box-shadow:0 2px 14px rgba(0,0,0,.12);opacity:0;visibility:hidden;transition:opacity .3s ease .25s,visibility 0s linear .55s;padding:0;font-family:Arial,sans-serif}'
+ '.eb-art-close.visible{opacity:1;visibility:visible;transition:opacity .3s ease .25s,visibility 0s}'
+ 'html.eb-art-lock,html.eb-art-lock body{overflow:hidden !important}'
+ '@media (max-width:699px){.eb-art-close{top:max(14px,env(safe-area-inset-top));right:14px;width:38px;height:38px;line-height:38px;font-size:22px}}';
document.head.appendChild(css);

var panneau = null, croix = null, cadre = null, ouvert = false, minuteur = null, lienOrigine = '', histo = false;

function griffe(){
  return '<svg style="display:block;height:40px;width:auto" viewBox="18 7 72 90" aria-hidden="true"><g fill="currentColor" fill-rule="evenodd"><rect x="48" y="10" width="7" height="84"/><rect x="21" y="10" width="27" height="2.4"/><rect x="28" y="49.12" width="20" height="2.4"/><rect x="21" y="91.60" width="27" height="2.4"/><path d="M55 10H65A16.5 20.16 0 0 1 65 50.32H55ZM55 12.4H64.5A10.8 18.36 0 0 1 64.5 49.12H55Z"/><path d="M55 50.32H68A19 21.84 0 0 1 68 94H55ZM55 51.52H67.5A12.6 20.04 0 0 1 67.5 91.60H55Z"/></g></svg>'
    + '<i style="display:block;width:20px;height:1px;background:currentColor;opacity:.45;margin:13px 0 12px"></i><div style="font-size:16px;letter-spacing:.42em;padding-left:.42em">ELKHA.B</div>';
}
function preparer(){
  if(panneau) return;
  panneau = document.createElement('div'); panneau.className = 'eb-art'; panneau.setAttribute('role', 'dialog'); panneau.setAttribute('aria-label', 'Article du Journal');
  panneau.innerHTML = '<div class="eb-art-charge"><div>' + griffe() + '</div></div>';
  croix = document.createElement('button'); croix.type = 'button'; croix.className = 'eb-art-close'; croix.setAttribute('aria-label', 'Fermer'); croix.innerHTML = '&times;';
  croix.addEventListener('click', function(){ fermer(true); });
  document.body.appendChild(panneau); document.body.appendChild(croix);
}

function ouvrir(url){
  preparer();
  lienOrigine = url.toString();
  var u = new URL(url.toString());
  u.searchParams.set('cadre', '1');
  try { var c = sessionStorage.getItem('elkhab_cart_id'); if(c) u.searchParams.set('cart', c); } catch(e){}
  panneau.classList.remove('pret');
  if(cadre){ cadre.remove(); }
  cadre = document.createElement('iframe'); cadre.setAttribute('title', 'Article du Journal'); cadre.src = u.toString();
  // page chargée mais l'article ne se signale pas (affichage refusé dans un panneau…) : on y va normalement
  cadre.addEventListener('load', function(){ var c = cadre; setTimeout(function(){ if(ouvert && c === cadre && !panneau.classList.contains('pret')) secours(); }, 2000); });
  panneau.appendChild(cadre);
  ouvert = true;
  document.documentElement.classList.add('eb-art-lock');
  void panneau.offsetWidth;
  panneau.classList.add('open');
  croix.classList.add('visible');
  if(!histo){ try { history.pushState({ ebArticle: 1 }, ''); histo = true; } catch(e){} }
  clearTimeout(minuteur);
  // l'article ne répond pas : on y va normalement, plutôt que de laisser la cliente devant un panneau vide
  minuteur = setTimeout(function(){ if(ouvert && !panneau.classList.contains('pret')) secours(); }, ATTENTE_MAX);
}

// l'article ne peut pas s'afficher dans le panneau : on suit le lien normalement, avec l'adresse de retour
// (le panier ajoute le site et la position d'origine : la croix du Journal ramène ici)
var passer = false;
function secours(){
  if(!ouvert) return;
  if(DIAG){ panneau.classList.add('pret'); return; }
  ouvert = false; clearTimeout(minuteur);
  var a = document.createElement('a'); a.href = lienOrigine; a.style.display = 'none'; document.body.appendChild(a);
  passer = true; a.click(); passer = false; a.remove();
}

function fermer(viaCroix){
  if(!ouvert) return;
  ouvert = false; clearTimeout(minuteur);
  panneau.classList.remove('open');
  croix.classList.remove('visible');
  document.documentElement.classList.remove('eb-art-lock');
  setTimeout(function(){ if(!ouvert && cadre){ cadre.remove(); cadre = null; panneau.classList.remove('pret'); } }, 600);
  if(viaCroix && histo){ histo = false; try { history.back(); } catch(e){} }
  else histo = false;
}

// retour arrière du téléphone : ferme le panneau au lieu de quitter la page
window.addEventListener('popstate', function(){ if(ouvert){ histo = false; fermer(false); } });
document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && ouvert) fermer(true); });

// messages de l'article (dans le panneau)
window.addEventListener('message', function(e){
  if(!cadre || e.source !== cadre.contentWindow) return;
  var d = e.data || {};
  if(d.eb === 'article-pret'){ panneau.classList.add('pret'); clearTimeout(minuteur); }
  else if(d.eb === 'article-fermer'){ fermer(true); }
  else if(d.eb === 'article-lien' && d.href){
    // un lien de l'article vers un soin ou un autre site : on referme le panneau puis on le suit ici
    var href = String(d.href), fiche = null;
    try { fiche = new URL(href).searchParams.get('fiche'); } catch(err){}
    fermer(true);
    setTimeout(function(){
      if(fiche && typeof window.ebFicheOpen === 'function' && window.EB_PRODUITS && window.EB_PRODUITS[fiche]){ window.ebFicheOpen(fiche); return; }
      var a = document.createElement('a'); a.href = href; a.style.display = 'none'; document.body.appendChild(a); a.click(); a.remove();
    }, 450);
  }
});

// clic sur un lien vers un article du Journal (écouté avant le panier, qui sinon changerait de site)
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
window.ebArticleClose = function(){ fermer(true); };
})();
