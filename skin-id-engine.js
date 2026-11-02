/* © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite. */
/* ═══════════════════════════════════════════════════════════════════════
   ELKHA.B — SKIN ID sur le site (skin-id-engine.js)
   • Le Skin ID s'ouvre par-dessus la page, en plein écran (le questionnaire est dans skin-id/index.html)
   • Il s'ouvre depuis : le menu (Skin ID), un lien « #skin-id », un élément data-skin-id,
     ou une adresse avec ?skinid
   • Il utilise le vrai panier du site et ouvre les vraies fiches produits
   • Fermé puis rouvert, il reprend là où la cliente s'était arrêtée
   ═══════════════════════════════════════════════════════════════════════ */
(function(){
  if(window.ebSkinIdOpen) return;

  /* ┌─────────────────────────────────────────────────────────────────────┐
     │ ✏️ RÉGLAGES                                                         │
     └─────────────────────────────────────────────────────────────────────┘ */
  var REGLAGES = {
    page: 'https://elkhabskincare.github.io/elkhab-site/skin-id/index.html',
    version: 2,   // à augmenter quand la page du Skin ID change (le navigateur reprend la nouvelle version)
    // fiches : fichiers à charger si la page n'a pas déjà la fiche demandée
    donneesBloom: 'https://elkhabskincare.github.io/elkhab-site/produits-data-test.js',
    donneesBalance: 'https://elkhabskincare.github.io/elkhab-site/produits-balance-test.js',
    moteurFiches: 'https://elkhabskincare.github.io/elkhab-site/fiche-engine.js'
  };
  var ORIGINE = new URL(REGLAGES.page, location.href).origin;
  var BALANCE = ['hydra-balance','calm-balance-jour','calm-balance-nuit','ceramide-night-restore','cellular-reveal','cellular-eye-restore','cellular-renew','active-lift','age-lift','eye-lift','bakuchiol-elixir','bright-control','spot-control','glyco-balance','aha-balance-peel','bha-balance'];

  var css = ''
    + '#eb-sid{position:fixed;inset:0;z-index:99980;background:#141414;opacity:0;visibility:hidden;transition:opacity .45s ease,visibility 0s linear .45s}'
    + '#eb-sid.on{opacity:1;visibility:visible;transition:opacity .45s ease}'
    + '#eb-sid iframe{position:absolute;inset:0;width:100%;height:100%;border:0;display:block;background:#141414;opacity:0;transition:opacity .5s ease}'
    + '#eb-sid.pret iframe{opacity:1}'
    + '#eb-sid .eb-sid-att{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#f6f4f0;font-family:Montserrat,sans-serif;pointer-events:none;transition:opacity .4s}'
    + '#eb-sid.pret .eb-sid-att{opacity:0}'
    + '#eb-sid .eb-sid-att b{font-size:30px;font-weight:800;letter-spacing:.18em;padding-left:.18em}'
    + '#eb-sid .eb-sid-att i{display:block;width:120px;height:1px;background:rgba(246,244,240,.18);position:relative;overflow:hidden}'
    + '#eb-sid .eb-sid-att i:after{content:"";position:absolute;top:0;left:-40%;width:40%;height:1px;background:#e9a9a6;animation:ebSidCharge 1.2s ease-in-out infinite}'
    + '@keyframes ebSidCharge{to{left:100%}}'
    + '#eb-sid .eb-sid-x{position:absolute;top:19px;right:16px;width:38px;height:38px;border-radius:50%;border:1px solid rgba(246,244,240,.28);background:rgba(20,20,20,.55);color:#f6f4f0;font-size:20px;line-height:1;cursor:pointer;transition:opacity .3s}'
    + '#eb-sid.pret .eb-sid-x{opacity:0;pointer-events:none}'
    + 'html.eb-sid-ouvert,html.eb-sid-ouvert body{overflow:hidden!important}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var boite = null, cadre = null, pret = false;
  function creer(){
    if(boite) return;
    boite = document.createElement('div'); boite.id = 'eb-sid';
    boite.setAttribute('role', 'dialog'); boite.setAttribute('aria-modal', 'true'); boite.setAttribute('aria-label', 'Skin ID ELKHA.B');
    boite.innerHTML = '<div class="eb-sid-att" aria-hidden="true"><b>SKIN ID</b><i></i></div><button type="button" class="eb-sid-x" aria-label="Fermer le Skin ID">&times;</button>';
    cadre = document.createElement('iframe');
    cadre.title = 'Skin ID ELKHA.B';
    cadre.addEventListener('load', ouvrirCanal);
    cadre.src = REGLAGES.page + '?v=' + REGLAGES.version;
    boite.appendChild(cadre);
    boite.querySelector('.eb-sid-x').addEventListener('click', fermer);
    document.body.appendChild(boite);
  }
  function ouvrir(){
    creer();
    if(typeof window.ebFicheClose === 'function'){ try{ window.ebFicheClose(); }catch(e){} }
    document.documentElement.classList.add('eb-sid-ouvert');
    void boite.offsetWidth; boite.classList.add('on');
    setTimeout(function(){ try{ cadre.focus(); }catch(e){} }, 300);
  }
  function fermer(){
    if(!boite) return;
    boite.classList.remove('on');
    document.documentElement.classList.remove('eb-sid-ouvert');
  }

  // ── Fiches : la vraie fiche du site s'ouvre par-dessus le Skin ID
  function charger(url, fait){
    var s = document.createElement('script'); s.src = url; s.async = true;
    s.onload = fait; s.onerror = fait; document.head.appendChild(s);
  }
  function fiche(id){
    function ouvre(){ if(typeof window.ebFicheOpen === 'function' && window.EB_PRODUITS && window.EB_PRODUITS[id]) window.ebFicheOpen(id); }
    function avecMoteur(){ if(typeof window.ebFicheOpen === 'function') ouvre(); else charger(REGLAGES.moteurFiches + '?v=' + REGLAGES.version, ouvre); }
    if(window.EB_PRODUITS && window.EB_PRODUITS[id]) return avecMoteur();
    var avant = window.EB_PRODUITS || {};
    if(BALANCE.indexOf(id) >= 0) charger(REGLAGES.donneesBalance, avecMoteur);   // s'ajoute aux fiches déjà présentes
    else charger(REGLAGES.donneesBloom, function(){                                // remplace la liste : on remet ce qui était là
      window.EB_PRODUITS = Object.assign({}, window.EB_PRODUITS || {}, avant); avecMoteur(); });
  }

  // ── Panier : les soins du rituel, un par un, dans le panier du site
  function panier(liste, rep){
    if(typeof window.ebCartAddItem !== 'function'){ rep(false); return; }
    var ok = true, k = 0;
    (function suivant(){
      if(k >= liste.length){ rep(ok); return; }
      window.ebCartAddItem(liste[k++], 1).then(function(c){ if(!c) ok = false; suivant(); }, function(){ ok = false; suivant(); });
    })();
  }

  // ── Échanges avec le Skin ID : un canal privé (aucun message envoyé à la page elle-même)
  var canal = null;
  function recevoir(ev){
    var d = ev.data || {}; if(d.eb !== 'skin-id') return;
    if(d.type === 'pret'){ pret = true; boite.classList.add('pret'); }
    else if(d.type === 'fermer') fermer();
    else if(d.type === 'fiche' && d.id) fiche(String(d.id));
    else if(d.type === 'panier' && d.variantes) panier(d.variantes.map(String), function(ok){
      if(canal) canal.postMessage({ eb: 'skin-id', type: 'panier-ok', id: d.id, ok: ok });
    });
  }
  function ouvrirCanal(){
    if(!window.MessageChannel || !cadre.contentWindow) return;
    var ch = new MessageChannel(); canal = ch.port1; canal.onmessage = recevoir;
    cadre.contentWindow.postMessage({ eb: 'skin-id', type: 'canal' }, ORIGINE, [ch.port2]);
  }

  // ── Ouvertures : liens « #skin-id », éléments data-skin-id, adresse ?skinid
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href$="#skin-id"],a[href$="#skinid"],[data-skin-id]');
    if(!a) return;
    e.preventDefault(); ouvrir();
  }, true);
  // préchargement discret dès que la cliente s'approche d'un accès au Skin ID
  document.addEventListener('pointerover', function(e){
    if(e.target.closest && e.target.closest('a[href$="#skin-id"],[data-skin-id],.ebm-skin')) creer();
  }, { passive: true });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && boite && boite.classList.contains('on')) fermer(); });

  window.ebSkinIdOpen = ouvrir;
  window.ebSkinIdClose = fermer;
  window.ebDiagOpen = ouvrir;   // l'ancien diagnostic est remplacé par le Skin ID
  window.addEventListener('load', function(){ window.ebDiagOpen = ouvrir; });
  if(/[?&]skinid\b/.test(location.search) || /^#skin-?id$/.test(location.hash)){
    if(document.body) ouvrir(); else document.addEventListener('DOMContentLoaded', ouvrir);
  }
})();
