/* ═══════════════════════════════════════════════════════════════════════
   ELKHA.B — LES CONSEILS ELKHA.B (conseils-engine.js)
   Diaporama à 4 onglets : on glisse au doigt (téléphone) ou on clique
   (onglets et flèches sur ordinateur). Rien d'automatique.
   Dans Carrd, chaque embed des conseils (téléphone ET ordinateur) contient :
     <div class="eb-conseils-mois"></div>
     <script src="https://elkhabskincare.github.io/elkhab-site/conseils-engine.js"></script>
   ───────────────────────────────────────────────────────────────────────
   ✏️ POUR CHANGER LES CONSEILS (tous les mois ou deux mois),
      ON NE TOUCHE QU'À LA PARTIE « RÉGLAGES »
   ═══════════════════════════════════════════════════════════════════════ */
(function(){

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ✏️ RÉGLAGES                                                          │
   └─────────────────────────────────────────────────────────────────────┘ */

// Un bloc { } par conseil, dans l'ordre des onglets (4 conseillés).
//   onglet : le mot court affiché dans l'onglet
//   titre  : le titre du panneau
//   texte  : le conseil, entre les accents graves ` `
//   plus   : « Le petit plus ELKHA.B », entre les accents graves ` `
//   Mettre un passage en gras : <strong>passage</strong>
//   Faire un lien vers une fiche : <a data-fiche="identifiant-du-soin">texte du lien</a>
var CONSEILS = [

  { onglet: "L'ordre",
    titre:  "Du plus léger au plus enveloppant",
    texte:  `Votre routine se construit comme une superposition de voiles : d'abord les textures les plus fluides, puis les plus riches. Chaque couche prépare la suivante, et la crème vient tout sceller en douceur.`,
    plus:   `Le matin, la protection solaire signe votre routine. C'est le dernier geste, celui qui garde votre peau protégée et préservée toute la journée.` },

  { onglet: "Le duo",
    titre:  "Vitamine C et niacinamide, le duo éclat",
    texte:  `On les a longtemps opposées, et pourtant elles s'entendent très bien. La vitamine C réveille l'éclat, la niacinamide affine le grain de peau.`,
    plus:   `Peau sensible ? Offrez la vitamine C à votre matin et la niacinamide à votre soir. Chacune a son moment, et votre peau en profite deux fois.` },

  { onglet: "La saison",
    titre:  "L'automne, saison du cocooning",
    texte:  `L'air fraîchit, le chauffage se rallume : votre peau a soif, même si elle ne le montre pas toujours. C'est le moment de lui offrir une hydratation plus généreuse, en couches.`,
    plus:   `Déposez votre sérum sur une peau encore légèrement humide, juste après le nettoyage. Il glisse mieux et l'hydratation tient plus longtemps. Et même sous un ciel gris, gardez votre protection solaire.` },

  { onglet: "Le rituel",
    titre:  "Un nouvel actif ? Prenez votre temps",
    texte:  `Une peau qui découvre un actif a besoin de l'apprivoiser. Faites d'abord un petit test de 24 heures derrière l'oreille, commencez deux à trois soirs par semaine, puis laissez votre peau vous guider.`,
    plus:   `Un seul nouveau soin à la fois, et surtout, <strong>N'OUBLIEZ PAS L'HYDRATATION</strong>. Profitez de <a data-fiche="routine-hydratation">nos soins pensés pour l'hydratation</a>.` }

];

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ⛔ FIN DES RÉGLAGES — ne rien modifier en dessous                    │
   └─────────────────────────────────────────────────────────────────────┘ */

function esc(t){ return String(t == null ? '' : t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function num(i){ return (i < 9 ? '0' : '') + (i + 1); }

if(!document.getElementById('eb-cm-style')){
  var css = ''
  + '.eb-cm{width:100%;max-width:720px;margin:0 auto;font-family:"Montserrat",sans-serif;color:#000;text-align:left;-webkit-tap-highlight-color:transparent}'
  + '.eb-cm *{box-sizing:border-box}'
  /* Onglets */
  + '.eb-cm-onglets{display:flex;justify-content:center;gap:6px;overflow-x:auto;scrollbar-width:none;margin:0 0 26px;padding:0 4px}'
  + '.eb-cm-onglets::-webkit-scrollbar{display:none}'
  + '.eb-cm-onglet{flex:0 0 auto;background:none;border:0;border-bottom:1px solid rgba(0,0,0,.15);padding:10px 10px 9px;margin:0;font-family:"Montserrat",sans-serif;font-size:10.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#000;opacity:.45;cursor:pointer;transition:opacity .3s ease,border-color .3s ease;white-space:nowrap}'
  + '.eb-cm-onglet span{font-weight:400;margin-right:6px}'
  + '.eb-cm-onglet.on{opacity:1;border-bottom-color:#000}'
  /* Panneaux : défilement natif du navigateur, aimanté panneau par panneau */
  + '.eb-cm-piste{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;overscroll-behavior-x:contain}'
  + '.eb-cm-piste::-webkit-scrollbar{display:none}'
  + '.eb-cm-panneau{flex:0 0 100%;scroll-snap-align:start;scroll-snap-stop:always;padding:0 26px}'
  + '.eb-cm-tag{font-size:9.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;opacity:.5;margin:0 0 10px}'
  + '.eb-cm-titre{font-size:19px;font-weight:600;letter-spacing:.04em;line-height:1.35;margin:0 0 14px}'
  + '.eb-cm-texte{font-size:14.5px;font-weight:300;line-height:1.75;margin:0 0 20px}'
  + '.eb-cm-plus{background:rgba(255,255,255,.5);padding:16px 18px;font-size:13.5px;font-weight:300;line-height:1.7}'
  + '.eb-cm-plus-tag{display:block;font-size:9.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;margin-bottom:6px}'
  + '.eb-cm-plus strong,.eb-cm-texte strong{font-weight:600}'
  + '.eb-cm a{color:#000;text-decoration:underline;text-underline-offset:3px;cursor:pointer}'
  /* Flèches + compteur */
  + '.eb-cm-nav{display:flex;align-items:center;justify-content:center;gap:16px;margin-top:22px}'
  + '.eb-cm-fleche{width:38px;height:38px;border-radius:50%;border:1px solid rgba(0,0,0,.25);background:none;color:#000;font-size:15px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:opacity .3s ease,border-color .3s ease}'
  + '.eb-cm-fleche:hover{border-color:#000}'
  + '.eb-cm-fleche:disabled{opacity:.25;cursor:default}'
  + '.eb-cm-compteur{font-size:11px;font-weight:600;letter-spacing:.16em;min-width:54px;text-align:center}'
  + '.eb-cm-glisser{display:none;text-align:center;font-size:10px;letter-spacing:.16em;text-transform:uppercase;opacity:.45;margin-top:16px}'
  /* Téléphone : pleine largeur de l'écran, flèches remplacées par « glisser » */
  + '@media (max-width:899px){'
  +   '.eb-cm{width:100vw;max-width:100vw;margin-left:calc(50% - 50vw)}'
  +   '.eb-cm-onglets{justify-content:flex-start;padding:0 16px;gap:2px}'
  +   '.eb-cm-onglet{padding:10px 8px 9px;font-size:10px;letter-spacing:.1em}'
  +   '.eb-cm-panneau{padding:0 22px}'
  +   '.eb-cm-titre{font-size:17px}'
  +   '.eb-cm-texte{font-size:14px}'
  +   '.eb-cm-nav{display:none}'
  +   '.eb-cm-glisser{display:block}'
  + '}';
  var st = document.createElement('style');
  st.id = 'eb-cm-style';
  st.textContent = css;
  document.head.appendChild(st);
}

function construire(zone){
  var h = '<div class="eb-cm"><div class="eb-cm-onglets" role="tablist">';
  CONSEILS.forEach(function(c, i){
    h += '<button type="button" class="eb-cm-onglet' + (i === 0 ? ' on' : '') + '" data-i="' + i + '" role="tab"><span>' + num(i) + '</span>' + esc(c.onglet) + '</button>';
  });
  h += '</div><div class="eb-cm-piste">';
  CONSEILS.forEach(function(c, i){
    h += '<div class="eb-cm-panneau" role="tabpanel">'
       +   '<p class="eb-cm-tag">Conseil ' + num(i) + '</p>'
       +   '<h3 class="eb-cm-titre">' + esc(c.titre) + '</h3>'
       +   '<p class="eb-cm-texte">' + c.texte + '</p>'
       +   (c.plus ? '<div class="eb-cm-plus"><span class="eb-cm-plus-tag">Le petit plus ELKHA.B</span>' + c.plus + '</div>' : '')
       + '</div>';
  });
  h += '</div>'
     + '<div class="eb-cm-nav"><button type="button" class="eb-cm-fleche" data-sens="-1" aria-label="Conseil précédent">&larr;</button>'
     + '<span class="eb-cm-compteur">01 / ' + num(CONSEILS.length - 1) + '</span>'
     + '<button type="button" class="eb-cm-fleche" data-sens="1" aria-label="Conseil suivant">&rarr;</button></div>'
     + '<div class="eb-cm-glisser">Glissez pour le conseil suivant &rarr;</div>'
     + '</div>';
  zone.innerHTML = h;

  var piste = zone.querySelector('.eb-cm-piste');
  var onglets = zone.querySelectorAll('.eb-cm-onglet');
  var compteur = zone.querySelector('.eb-cm-compteur');
  var fleches = zone.querySelectorAll('.eb-cm-fleche');
  var actuel = 0;

  function marquer(i){
    actuel = i;
    for(var k = 0; k < onglets.length; k++) onglets[k].classList.toggle('on', k === i);
    compteur.textContent = num(i) + ' / ' + num(CONSEILS.length - 1);
    fleches[0].disabled = (i === 0);
    fleches[1].disabled = (i === CONSEILS.length - 1);
    var o = onglets[i];
    var bar = o.parentNode;
    if(o.offsetLeft < bar.scrollLeft || o.offsetLeft + o.offsetWidth > bar.scrollLeft + bar.clientWidth){
      bar.scrollLeft = o.offsetLeft - 16;
    }
  }
  function aller(i){
    i = Math.max(0, Math.min(CONSEILS.length - 1, i));
    marquer(i);
    var x = i * piste.clientWidth;
    try { piste.scrollTo({ left: x, behavior: 'smooth' }); } catch(e){ piste.scrollLeft = x; }
  }

  zone.addEventListener('click', function(e){
    var o = e.target.closest('.eb-cm-onglet');
    if(o){ aller(+o.getAttribute('data-i')); return; }
    var f = e.target.closest('.eb-cm-fleche');
    if(f){ aller(actuel + (+f.getAttribute('data-sens'))); }
  });
  // Quand la cliente glisse au doigt, l'onglet suit
  var attente;
  piste.addEventListener('scroll', function(){
    clearTimeout(attente);
    attente = setTimeout(function(){
      var i = Math.round(piste.scrollLeft / piste.clientWidth);
      if(i !== actuel) marquer(i);
    }, 80);
  }, { passive: true });
  marquer(0);
}

function demarrer(){
  document.querySelectorAll('.eb-conseils-mois').forEach(function(zone){
    if(zone.getAttribute('data-pret')) return;
    zone.setAttribute('data-pret', '1');
    construire(zone);
  });
}
if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', demarrer); } else { demarrer(); }

})();
