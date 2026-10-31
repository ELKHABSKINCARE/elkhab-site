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
var PAR_TYPE = [
  ["Nettoyants & démaquillants",""],["Lotions & exfoliants",""],["Sérums",""],["Crèmes & gels",""],
  ["Contour des yeux",""],["Masques & patchs",""],["Protection & teint",""]
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
var ICI = /bloom/.test(h) ? "bloom" : /balance/.test(h) ? "balance" : /journal/.test(h) ? "journal" : /experience/.test(h) ? "experience" : "";

var CSS = ""
+ ".eb-navbar{height:64px;padding:0 max(18px,env(safe-area-inset-left,0px)) 0 max(18px,env(safe-area-inset-right,0px))}"
+ ".eb-navbar.eb-scrolled,.eb-navbar.eb-menu-open,.eb-navbar.ebm-soins-ouvert{background:rgba(245,244,240,.94) !important;-webkit-backdrop-filter:blur(16px) saturate(1.1) !important;backdrop-filter:blur(16px) saturate(1.1) !important;box-shadow:0 1px 0 #e3ded4}"
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
+ "#ebOverlay.ebm-liste{top:64px !important;background:rgba(245,244,240,.78) !important;-webkit-backdrop-filter:blur(16px) saturate(1.1) !important;backdrop-filter:blur(16px) saturate(1.1) !important;padding:4px max(22px,env(safe-area-inset-left,0px)) 22px !important;max-height:calc(100dvh - 140px);overflow-y:auto;box-shadow:0 14px 24px rgba(40,30,20,.08);z-index:9999}"
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
+ ".ebm-soins{position:fixed;left:0;right:0;top:64px;z-index:9998;background:rgba(245,244,240,.8) !important;-webkit-backdrop-filter:blur(16px) saturate(1.1) !important;backdrop-filter:blur(16px) saturate(1.1) !important;border-bottom:1px solid #e3ded4;box-shadow:0 18px 30px rgba(40,30,20,.08);display:none;font-family:'Montserrat',sans-serif}"
+ ".ebm-soins.on{display:block;animation:ebmIn .3s ease}"
+ "@keyframes ebmIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}"
+ ".ebm-soins-in{max-width:1180px;margin:0 auto;padding:30px 40px 34px;display:grid;grid-template-columns:1fr 1fr 1.1fr;gap:40px}"
+ ".ebm-soins h4{margin:0 0 12px;font-size:9.5px;letter-spacing:.28em;font-weight:600;color:#8a8580;text-transform:uppercase}"
+ ".ebm-soins a{display:block;font-size:14px;font-weight:300;padding:6px 0;color:#000;text-decoration:none}"
+ ".ebm-soins a:hover{opacity:.6}"
+ ".ebm-soins a.ebm-avenir,.ebm-sous a.ebm-avenir{cursor:default}"
+ ".ebm-tout{background:rgba(236,234,227,.7);display:flex;flex-direction:column;justify-content:flex-end;padding:22px}"
+ ".ebm-tout p{margin:0 0 10px;font-size:12.5px;font-weight:300;line-height:1.6;color:#4d4a44}"
+ ".ebm-tout span{font-size:9.5px;letter-spacing:.22em;font-weight:600;border-bottom:1px solid #000;align-self:flex-start;padding-bottom:3px;text-transform:uppercase}"
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
  var bSoins=el('button','ebm-t','Nos soins'); bSoins.type='button'; bSoins.setAttribute('aria-expanded','false');
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
  var c3=el('div','ebm-tout','<p>Les deux gammes réunies sur une seule page, rangées par type de soin.</p><span>Voir tous les soins</span>');
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
    if(o){ p.classList.add('on'); nav.classList.add('ebm-soins-ouvert'); bSoins.setAttribute('aria-expanded','true'); voile.classList.add('on'); }
  });
  ov.addEventListener('click',function(e){ var a=e.target.closest && e.target.closest('a'); if(a && !a.classList.contains('ebm-avenir')) fermerTout(); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') fermerTout(); });
  return true;
}
(function attendre(n){ if(construire()) return; if(n>0) setTimeout(function(){ attendre(n-1); },200); })(40);
})();
