/* © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite. */
/* ═══════════════════════════════════════════════════════════════════════
   ELKHA.B — NOUVEAU MENU (menu-test.js) — VERSION DE TEST
   • Se charge par une ligne ajoutée à la fin de l'embed du menu (copies de travail)
   • Garde le panier, la recherche et le Skin ID existants : il ne change que l'apparence
   • Ordinateur : Bloom · Balance · Nos soins · Routines | logo | Skin ID · Journal · Leur expérience · Panier
   • Téléphone : MENU | logo | PANIER — liste qui descend, refermée d'un toucher sur la page
   ═══════════════════════════════════════════════════════════════════════ */
(function(){

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ✏️ RÉGLAGES — liens du menu                                          │
   └─────────────────────────────────────────────────────────────────────┘ */
var LIENS = {
  bloom:      "https://bloom.elkhab.com/",
  balance:    "https://balance.elkhab.com/",
  routines:   "",                          // page à venir
  journal:    "https://journal.elkhab.com/",
  experience: "https://experience.elkhab.com/",
  accueil:    "https://elkhab.com/"
};
// « Nos soins » : les pages par type et par besoin arriveront après le lancement ("" = pas encore de page)
// Page « Nos soins » (site de test pour l'instant ; au lancement : https://soins.elkhab.com/)
var PAGE_SOINS = "https://soins-balance-test.carrd.co/";
var PAR_TYPE = [
  ["Nettoyants & démaquillants",PAGE_SOINS+"?type=nettoyants"],["Lotions & exfoliants",PAGE_SOINS+"?type=lotions"],["Sérums",PAGE_SOINS+"?type=serums"],["Crèmes & gels",PAGE_SOINS+"?type=cremes"],
  ["Contour des yeux",PAGE_SOINS+"?type=yeux"],["Masques & patchs",PAGE_SOINS+"?type=masques"],["Protection & teint",PAGE_SOINS+"?type=protection"]
];
var PAR_BESOIN = [
  ["Peaux sensibles",""],["Hydratation",""],["Éclat",""],["Taches & teint unifié",""],
  ["Rides & fermeté",""],["Pores & imperfections",""],["Regard",""]
];

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ⛔ NE RIEN MODIFIER EN DESSOUS                                        │
   └─────────────────────────────────────────────────────────────────────┘ */
if(window.ebMenuTest) return; window.ebMenuTest = true;

var BLOOM_DEG = "linear-gradient(90deg,#efe5da,#e6cbbd,#d39b82,#eb895e,#6d222a)";
var BAL_DEG   = "linear-gradient(90deg,#ebecdb,#d9ddb7,#c3cc8f,#a6b965,#85a33a)";
var h = location.hostname;
var ICI = /soins/.test(h) ? "soins" : /bloom/.test(h) ? "bloom" : /balance/.test(h) ? "balance" : /journal/.test(h) ? "journal" : /experience/.test(h) ? "experience" : "";

var CSS = ""
+ ".eb-navbar{height:64px;padding:0 max(18px,env(safe-area-inset-left,0px)) 0 max(18px,env(safe-area-inset-right,0px))}"
+ "html body .eb-navbar.eb-scrolled,html body .eb-navbar.eb-menu-open,html body .eb-navbar.ebm-soins-ouvert{background:rgba(245,244,240,.88) !important;-webkit-backdrop-filter:blur(16px) saturate(1.1) !important;backdrop-filter:blur(16px) saturate(1.1) !important;box-shadow:0 1px 0 #e3ded4}"
/* logo : ELKHA.B fin et espacé, PARIS entre deux traits */
+ ".eb-navbar .eb-navbar-brand{font-weight:500 !important;font-size:14px !important;letter-spacing:.4em !important;padding-left:.42em;gap:0 !important;line-height:1}"
+ ".eb-navbar .eb-navbar-brand span{display:flex !important;align-items:center;gap:8px;margin:5px 0 0 -.4em !important;font-size:4.5px !important;letter-spacing:.6em !important;font-weight:500 !important;opacity:1 !important;padding-left:.6em}"
+ ".eb-navbar .eb-navbar-brand span:before,.eb-navbar .eb-navbar-brand span:after{content:'';display:block;width:12px;height:1px;background:#000;opacity:.7}"
/* textes du menu : fins, en capitales espacées */
+ ".ebm-t{font-family:'Montserrat',sans-serif;font-size:10px;font-weight:400;letter-spacing:.2em;text-transform:uppercase;color:#000;text-decoration:none;background:none;border:0;padding:6px 0;cursor:pointer;position:relative;white-space:nowrap}"
+ ".ebm-t:after{content:'';position:absolute;left:0;right:.2em;bottom:0;height:1px;background:#000;transform:scaleX(0);transform-origin:left;transition:transform .35s ease}"
+ ".ebm-t:hover:after,.ebm-t.ebm-ici:after,.ebm-t[aria-expanded='true']:after{transform:none}"
+ ".ebm-t.ebm-bloom:after{height:2px;background:" + BLOOM_DEG + "}"
+ ".ebm-t.ebm-balance:after{height:2px;background:" + BAL_DEG + "}"
+ ".ebm-g,.ebm-d{display:none;align-items:center;gap:24px}"
+ ".ebm-icone{width:18px;height:18px;cursor:pointer;display:flex}.ebm-icone svg{width:100%;height:100%}"
/* téléphone : MENU / PANIER en texte */
+ ".ebm-menu,.ebm-panier{font-family:'Montserrat',sans-serif;font-size:10px;font-weight:400;letter-spacing:.2em;text-transform:uppercase;color:#000;cursor:pointer;background:none;border:0;padding:8px 0}"
+ ".eb-navbar #ebBurger{width:24px !important;height:17px !important}.eb-navbar #ebBurger span{height:2.4px !important;background:#000 !important;border-radius:1px}"
+ ".eb-navbar #ebCartButton svg,.eb-navbar .ebm-mloupe svg,.ebm-icone svg{stroke-width:2.1 !important}"
/* liste du téléphone */
+ "html body .eb-navbar.eb-menu-open,html body .eb-navbar.ebm-soins-ouvert{box-shadow:none !important}"
+ "#ebOverlay.ebm-liste{top:64px !important;background:rgba(245,244,240,.88) !important;-webkit-backdrop-filter:blur(16px) saturate(1.1) !important;backdrop-filter:blur(16px) saturate(1.1) !important;padding:4px max(22px,env(safe-area-inset-left,0px)) 22px !important;max-height:calc(100dvh - 140px);overflow-y:auto;box-shadow:0 14px 24px rgba(40,30,20,.08);z-index:9999}"
+ ".ebm-l a,.ebm-l button.ebm-ouvre{display:flex !important;justify-content:space-between;align-items:center;width:100%;font-family:'Montserrat',sans-serif;font-size:12px !important;font-weight:400 !important;letter-spacing:.2em !important;text-transform:uppercase;color:#000;padding:17px 0 !important;border:0;border-bottom:1px solid #e6e1d7 !important;background:none;text-align:left;cursor:pointer;text-decoration:none}"
+ ".ebm-l a:hover{padding-left:0 !important;opacity:1 !important}"
+ ".ebm-l .ebm-fl{font-weight:300;letter-spacing:0;font-size:14px}"
+ ".ebm-sous{display:none;padding:4px 0 12px 14px;border-bottom:1px solid #e6e1d7}"
+ ".ebm-sous.ouvert{display:block}"
+ ".ebm-sous .ebm-k{font-family:'Montserrat',sans-serif;font-size:9px;letter-spacing:.28em;color:#8a8580;font-weight:600;margin:12px 0 4px;text-transform:uppercase}"
+ ".ebm-sous a{font-size:13px !important;font-weight:300 !important;letter-spacing:0 !important;text-transform:none !important;border:0 !important;padding:8px 0 !important}"
+ ".ebm-l .ebm-bloom-t{background-image:" + BLOOM_DEG + ";background-size:100% 2px;background-repeat:no-repeat;background-position:0 100%}"
/* voile invisible : un toucher sur la page referme le menu sans rien ouvrir dessous */
+ ".ebm-voile{position:fixed;inset:0;z-index:9996;background:transparent;display:none}"
+ ".ebm-voile.on{display:block}"
/* panneau « Nos soins » (ordinateur) */
+ ".ebm-soins{position:fixed;left:0;right:0;top:64px;z-index:9998;background:rgba(245,244,240,.88) !important;-webkit-backdrop-filter:blur(16px) saturate(1.1) !important;backdrop-filter:blur(16px) saturate(1.1) !important;border-bottom:0;box-shadow:0 18px 30px rgba(40,30,20,.08);display:none;font-family:'Montserrat',sans-serif}"
+ ".ebm-soins.on{display:block;animation:ebmIn .3s ease}"
+ "@keyframes ebmIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}"
+ ".ebm-soins-in{max-width:1180px;margin:0 auto;padding:30px 40px 34px;display:grid;grid-template-columns:1fr 1fr 1.1fr;gap:40px}"
+ ".ebm-soins h4{margin:0 0 12px;font-size:9.5px;letter-spacing:.28em;font-weight:600;color:#8a8580;text-transform:uppercase}"
+ ".ebm-soins a{display:block;font-size:14px;font-weight:300;padding:6px 0;color:#000;text-decoration:none}"
+ ".ebm-soins a:hover{opacity:.6}"
+ ".ebm-soins a.ebm-avenir,.ebm-sous a.ebm-avenir{cursor:default}"
/* panier en verre dépoli (niveau 2) : on devine le site derrière, le flou garde le texte lisible */
+ "html body .eb-cart-panel,html body #ebCartPanel{background:rgba(246,244,240,.5) !important;-webkit-backdrop-filter:blur(24px) saturate(1.1) !important;backdrop-filter:blur(24px) saturate(1.1) !important}"
+ "html body .eb-cart-backdrop{background:rgba(0,0,0,.12) !important}"
/* carte Skin ID (piste C) : petite, au centre de la place libre du panneau */
+ ".ebm-skin-zone{position:absolute;top:0;bottom:0;display:flex;align-items:center;justify-content:center}"
+ ".ebm-soins a.ebm-skin{position:relative;display:block;width:100%;max-width:280px;box-sizing:border-box;padding:18px 18px 16px;cursor:pointer;text-decoration:none;color:#111;border:1px solid #e4e1d8;background:radial-gradient(260px 180px at 100% 0%,rgba(230,203,189,.45),rgba(230,203,189,0) 70%),radial-gradient(260px 180px at 0% 100%,rgba(195,204,143,.35),rgba(195,204,143,0) 70%),#faf9f6;transition:transform .3s ease,box-shadow .3s ease}"
+ ".ebm-soins a.ebm-skin:hover{opacity:1;transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.06)}"
+ ".ebm-skin .ebm-sceau{position:absolute;top:14px;right:14px;padding:5px 10px 4px;border:1px solid #cbc5b6;outline:1px solid #e2ddd1;outline-offset:2px;background:rgba(255,255,255,.4);font-size:11px;font-weight:800;letter-spacing:.16em;line-height:1;color:#e4dfd3;text-shadow:0 1px 0 #fff,0 -1px 0 #b7b1a1}"
+ ".ebm-skin .ebm-sk{margin:2px 0 14px;font-size:8.5px;letter-spacing:.3em;font-weight:600;color:#8a8580;text-transform:uppercase}"
+ ".ebm-skin .ebm-code{display:block;font-size:17px;font-weight:300;letter-spacing:.14em;white-space:nowrap;color:#1f241c;margin:0 0 8px;transition:opacity .4s ease}"
+ ".ebm-skin .ebm-code b{font-weight:600}"
+ ".ebm-skin p{margin:0 0 12px;font-size:11.5px;font-weight:300;line-height:1.6;color:#4d4a44}"
+ ".ebm-skin .ebm-cta{display:inline-block;font-size:9px;letter-spacing:.22em;font-weight:600;border-bottom:1px solid #000;padding-bottom:3px;text-transform:uppercase}"
+ "@media (min-width:1000px){"
+ ".eb-navbar{padding:0 40px}"
+ ".ebm-g,.ebm-d{display:flex}"
+ ".eb-navbar #ebBurger,.ebm-mloupe{display:none !important}"
+ ".eb-navbar .eb-navbar-brand{font-size:22px !important}"
+ ".eb-navbar .eb-navbar-brand span{font-size:6.5px !important;margin-top:8px !important}"
+ ".eb-navbar .eb-navbar-brand span:before,.eb-navbar .eb-navbar-brand span:after{width:20px}"
+ "#ebOverlay{display:none !important}"
+ "}"
+ "@media (max-width:999px){.ebm-soins{display:none !important}}"
+ "@media (prefers-reduced-motion:reduce){.ebm-t:after,.ebm-soins.on{transition:none;animation:none}}";

function el(t,c,html){ var e=document.createElement(t); if(c) e.className=c; if(html!==undefined) e.innerHTML=html; return e; }
function esc(t){ var d=document.createElement('div'); d.textContent=t; return d.innerHTML; }
function lien(txt,href,cls){
  var a=el('a',cls||'',esc(txt));
  if(href){ a.href=href; } else { a.href='#'; a.className+=' ebm-avenir'; a.title='Page bientôt disponible'; a.addEventListener('click',function(e){ e.preventDefault(); }); }
  return a;
}
var LOUPE='<svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.5" y2="16.5"></line></svg>';

function construire(){
  var nav=document.querySelector('.eb-navbar'), ov=document.getElementById('ebOverlay'), burger=document.getElementById('ebBurger');
  if(!nav || !ov || !burger){ return false; }
  var st=document.createElement('style'); st.textContent=CSS; document.head.appendChild(st);

  var gauche=nav.children[0], droite=nav.children[2];
  // ── Téléphone : MENU à la place des trois traits (la loupe reste à côté)
  var bMenu=burger.cloneNode(true); burger.parentNode.replaceChild(bMenu, burger); burger=bMenu;
  bMenu.setAttribute('role','button'); bMenu.setAttribute('aria-label','Menu');
  var loupeTel=gauche.querySelector('[onclick*="ebSearchOpen"]'); if(loupeTel) loupeTel.classList.add('ebm-mloupe');

  // ── Ordinateur : liens à gauche
  var g=el('div','ebm-g');
  var aBloom=lien('Bloom',LIENS.bloom,'ebm-t ebm-bloom'+(ICI==='bloom'?' ebm-ici':''));
  var aBal=lien('Balance',LIENS.balance,'ebm-t ebm-balance'+(ICI==='balance'?' ebm-ici':''));
  var bSoins=el('button','ebm-t'+(ICI==='soins'?' ebm-ici':''),'Nos soins'); bSoins.type='button'; bSoins.setAttribute('aria-expanded','false');
  var aRout=lien('Routines',LIENS.routines,'ebm-t');
  [aBloom,aBal,bSoins,aRout].forEach(function(x){ g.appendChild(x); });
  gauche.appendChild(g);
  // ── Ordinateur : liens à droite (avant le panier)
  var d=el('div','ebm-d');
  var aSkin=lien('Skin ID','', 'ebm-t'); aSkin.classList.remove('ebm-avenir'); aSkin.removeAttribute('title');
  aSkin.addEventListener('click',function(e){ e.preventDefault(); if(typeof window.ebDiagOpen==='function') window.ebDiagOpen(); });
  var aJour=lien('Journal',LIENS.journal,'ebm-t'+(ICI==='journal'?' ebm-ici':''));
  var aExp=lien('Leur expérience',LIENS.experience,'ebm-t'+(ICI==='experience'?' ebm-ici':''));
  var loupe=el('div','ebm-icone',LOUPE); loupe.title='Rechercher';
  loupe.addEventListener('click',function(){ if(typeof window.ebSearchOpen==='function') window.ebSearchOpen(); });
  [loupe,aSkin,aJour,aExp].forEach(function(x){ d.appendChild(x); });
  droite.insertBefore(d, droite.firstChild);
  droite.style.gap='24px';

  // ── Panneau « Nos soins » (ordinateur)
  var p=el('div','ebm-soins'); var pin=el('div','ebm-soins-in');
  var c1=el('div','','<h4>Par type de soin</h4>'); PAR_TYPE.forEach(function(x){ c1.appendChild(lien(x[0],x[1])); });
  var c2=el('div','','<h4>Par besoin</h4>'); PAR_BESOIN.forEach(function(x){ c2.appendChild(lien(x[0],x[1])); });
  var c3=el('div','ebm-skin-zone');
  var carte=el('a','ebm-skin','<span class="ebm-sceau">E.B</span><p class="ebm-sk">Skin ID</p><span class="ebm-code"><b>BL</b> · N1 · DOUCEUR</span><p>Votre peau a un code. 2 minutes pour découvrir le vôtre et le rituel qui lui correspond.</p><span class="ebm-cta">Faire mon Skin ID</span>');
  carte.href='#'; carte.setAttribute('aria-label','Faire mon Skin ID');
  carte.addEventListener('click',function(e){ e.preventDefault(); fermerTout(); if(typeof window.ebDiagOpen==='function') window.ebDiagOpen(); });
  c3.appendChild(carte);
  var CODES=['<b>BL</b> · N1 · DOUCEUR','<b>BA</b> · N2/3 · RÉGÉNÉRATION','<b>B</b> · N2 · ÉCLAT','<b>BA</b> · N4 · CLARTÉ','<b>BL</b> · N1 · ÉQUILIBRE'], iCode=0, codeEl=carte.querySelector('.ebm-code');
  setInterval(function(){ if(!p.classList.contains('on')) return; codeEl.style.opacity=0; setTimeout(function(){ iCode=(iCode+1)%CODES.length; codeEl.innerHTML=CODES[iCode]; codeEl.style.opacity=1; },400); },2600);
  [c1,c2,c3].forEach(function(x){ pin.appendChild(x); }); p.appendChild(pin); document.body.appendChild(p);

  // ── Liste du téléphone (remplace l'ancien contenu du menu)
  ov.classList.add('ebm-liste'); ov.innerHTML='';
  var L=el('div','ebm-l');
  function ligne(txt,href,extra){ var a=lien(txt,href); a.innerHTML='<span'+(extra||'')+'>'+esc(txt)+'</span><span class="ebm-fl">›</span>'; return a; }
  L.appendChild(ligne('Bloom',LIENS.bloom));
  L.appendChild(ligne('Balance',LIENS.balance));
  var ouvre=el('button','ebm-ouvre','<span>Nos soins</span><span class="ebm-fl">+</span>'); ouvre.type='button';
  var sous=el('div','ebm-sous');
  sous.appendChild(el('div','ebm-k','Par type')); PAR_TYPE.forEach(function(x){ sous.appendChild(lien(x[0],x[1])); });
  sous.appendChild(el('div','ebm-k','Par besoin')); PAR_BESOIN.forEach(function(x){ sous.appendChild(lien(x[0],x[1])); });
  ouvre.addEventListener('click',function(e){ e.stopPropagation(); var o=sous.classList.toggle('ouvert'); ouvre.lastChild.textContent=o?'–':'+'; });
  L.appendChild(ouvre); L.appendChild(sous);
  L.appendChild(ligne('Routines',LIENS.routines));
  var lSkin=ligne('Skin ID',''); lSkin.classList.remove('ebm-avenir'); lSkin.removeAttribute('title');
  lSkin.addEventListener('click',function(){ if(typeof window.ebDiagOpen==='function') window.ebDiagOpen(); });
  L.appendChild(lSkin);
  L.appendChild(ligne('Journal',LIENS.journal));
  L.appendChild(ligne('Leur expérience',LIENS.experience));
  ov.appendChild(L);

  // ── Voile invisible (ferme sans déclencher ce qu'il y a dessous)
  var voile=el('div','ebm-voile'); document.body.appendChild(voile);
  function fermerTout(){
    ov.classList.remove('open'); nav.classList.remove('eb-menu-open'); burger.classList.remove('open');
    p.classList.remove('on'); nav.classList.remove('ebm-soins-ouvert'); bSoins.setAttribute('aria-expanded','false');
    voile.classList.remove('on');
  }
  voile.addEventListener('click',function(e){ e.preventDefault(); e.stopPropagation(); fermerTout(); });
  voile.addEventListener('touchmove',function(){ fermerTout(); },{passive:true});
  bMenu.addEventListener('click',function(e){
    e.stopPropagation();
    var o=!ov.classList.contains('open');
    fermerTout();
    if(o){ ov.classList.add('open'); nav.classList.add('eb-menu-open'); voile.classList.add('on'); }
  });
  bSoins.addEventListener('click',function(e){
    e.stopPropagation();
    var o=!p.classList.contains('on');
    fermerTout();
    if(o){ p.classList.add('on'); nav.classList.add('ebm-soins-ouvert'); bSoins.setAttribute('aria-expanded','true'); voile.classList.add('on'); placerCarte(); }
  });
  // Carte Skin ID : juste sous les liens de droite (Skin ID, Journal, Leur expérience), entre la loupe et le panier
  function placerCarte(){
    var r=d.getBoundingClientRect(), lw=Math.min(280, Math.max(220, r.width));
    c3.style.width=lw+'px';
    c3.style.left=Math.max(16, Math.min(window.innerWidth-lw-16, r.left + r.width/2 - lw/2))+'px';
    ajusterCode();
  }
  // Le code Skin ID tient toujours dans la carte : une seule taille, calculée sur le code le plus long
  function ajusterCode(){
    var garde=codeEl.innerHTML, fs=17;
    codeEl.style.fontSize=fs+'px';
    CODES.forEach(function(c){
      codeEl.innerHTML=c;
      while(codeEl.scrollWidth>codeEl.clientWidth-8 && fs>11){ fs-=.5; codeEl.style.fontSize=fs+'px'; }
    });
    codeEl.innerHTML=garde;
  }
  window.addEventListener('resize',function(){ if(p.classList.contains('on')) placerCarte(); });
  ov.addEventListener('click',function(e){ var a=e.target.closest && e.target.closest('a'); if(a && !a.classList.contains('ebm-avenir')) fermerTout(); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') fermerTout(); });
  // Dès que la cliente fait défiler la page (molette, pavé tactile, doigt), le menu remonte tout seul
  function ouvertQuelquePart(){ return ov.classList.contains('open') || p.classList.contains('on'); }
  voile.addEventListener('wheel',function(){ fermerTout(); },{passive:true});
  var yOuverture = 0;
  [bMenu,bSoins].forEach(function(b){ b.addEventListener('click',function(){ yOuverture = window.scrollY; }); });
  window.addEventListener('scroll',function(){ if(ouvertQuelquePart() && Math.abs(window.scrollY - yOuverture) > 8) fermerTout(); },{passive:true});
  return true;
}
(function attendre(n){ if(construire()) return; if(n>0) setTimeout(function(){ attendre(n-1); },200); })(40);
})();
