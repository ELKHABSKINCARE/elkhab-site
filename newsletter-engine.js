/* ═══════════════════════════════════════════════════════════════════════
   ELKHA.B — NEWSLETTER « LE CERCLE ELKHA.B » (newsletter-engine.js)
   Un panneau beige remonte quand la cliente arrive au pied de page.
   • Sur ordinateur : uniquement sur la partie site (pas sur la grande image)
   • Fermé → ne revient pas avant 7 jours ; inscrite → plus jamais proposé
   • Jamais par-dessus une fiche, le panier, le diagnostic, un avis…
   • Les inscriptions arrivent dans le Google Sheet des collaborations,
     onglet « Newsletter » (créé tout seul à la première inscription)
   Chargé automatiquement par cart-engine.js (rien à coller dans Carrd).
   ───────────────────────────────────────────────────────────────────────
   ✏️ POUR MODIFIER LES TEXTES OU LES RÉGLAGES : PARTIE « RÉGLAGES »
   ═══════════════════════════════════════════════════════════════════════ */
(function(){

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ✏️ RÉGLAGES                                                          │
   └─────────────────────────────────────────────────────────────────────┘ */

// Sites où le panneau apparaît : "accueil", "bloom", "balance", "journal", "experience"
var SITES = ["accueil", "bloom", "balance", "journal", "experience"];

// Après fermeture avec la croix : nombre de jours avant de le proposer à nouveau
var JOURS_APRES_FERMETURE = 7;

var TEXTES = {
  tag:     "Newsletter",
  titre:   "Rejoignez le cercle ELKHA.B",
  texte:   "Nouveautés en avant-première, articles du Journal et avantages réservés aux membres du cercle.",
  champ:   "Votre adresse e-mail",
  bouton:  "Je m'inscris",
  mention: "En vous inscrivant, vous acceptez de recevoir nos e-mails. Désinscription en un clic.",
  lienConfidentialite: "https://elkhab.com/#politique-confidentialite",
  erreur:  "Merci d'indiquer une adresse e-mail valide.",
  erreurEnvoi: "Oups, l'inscription n'a pas pu aboutir. Merci de réessayer dans un instant.",
  merciTitre: "Bienvenue dans le cercle",
  merciTexte: "Merci ! Vous recevrez bientôt nos nouveautés en avant-première."
};

// Adresse du script Google (la même que pour les collaborations)
var URL_SCRIPT = "https://script.google.com/macros/s/AKfycbxQCXs8onhnmA1p_mbMHPWhlUF0x_sIxRiveilPYitjZExd70PZLilpMxflvT8ttTVa1Q/exec";

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ⛔ FIN DES RÉGLAGES — ne rien modifier en dessous                    │
   └─────────────────────────────────────────────────────────────────────┘ */

if(window.__ebNewsletter) return;
window.__ebNewsletter = true;

var site = (window.ebSiteFromHost ? window.ebSiteFromHost(location.hostname) : null);
var test = /[?&]newsletter=test/.test(location.search);   // ?newsletter=test : force l'affichage (pour vérifier)
if(!test && SITES.indexOf(site) === -1) return;

/* ─── Mémoire partagée entre tous les sites elkhab.com (cookie) ─── */
function lireCookie(nom){
  var m = document.cookie.match(new RegExp('(?:^|; )' + nom + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}
function ecrireCookie(nom, valeur, jours){
  var domaine = /(^|\.)elkhab\.com$/.test(location.hostname) ? '; domain=.elkhab.com' : '';
  document.cookie = nom + '=' + encodeURIComponent(valeur) + '; max-age=' + Math.round(jours * 86400) + '; path=/' + domaine + '; SameSite=Lax';
}
if(!test && (lireCookie('ebn_inscrite') || lireCookie('ebn_ferme'))) return;

function esc(t){ return String(t == null ? '' : t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

/* ─── Styles ─── */
var css = ''
+ '.ebn{position:fixed;left:0;right:0;bottom:0;z-index:9000;background:#EBE5DB;color:#000;font-family:"Montserrat",sans-serif;box-shadow:0 -12px 40px rgba(0,0,0,.10);transform:translateY(105%);visibility:hidden;transition:transform .6s cubic-bezier(.65,0,.35,1),visibility 0s linear .6s;-webkit-tap-highlight-color:transparent}'
+ '.ebn.ebn-ouvert{transform:translateY(0);visibility:visible;transition:transform .6s cubic-bezier(.65,0,.35,1),visibility 0s}'
+ '.ebn *{box-sizing:border-box}'
+ '.ebn-fermer{position:absolute;top:14px;right:16px;width:34px;height:34px;border-radius:50%;border:1px solid rgba(0,0,0,.2);background:transparent;font-size:18px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#000;padding:0;font-family:"Montserrat",sans-serif}'
+ '.ebn-fermer:hover{border-color:#000}'
+ '.ebn-in{max-width:1000px;margin:0 auto;padding:30px 24px 26px;display:grid;grid-template-columns:minmax(0,1fr);gap:18px}'
+ '.ebn-tag{font-size:9.5px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;opacity:.55;margin:0 0 8px}'
+ '.ebn-titre{font-size:clamp(12px,3.8vw,19px);font-weight:600;letter-spacing:.04em;text-transform:uppercase;margin:0 0 8px;line-height:1.3;white-space:nowrap}'
+ '.ebn-texte{font-size:13.5px;font-weight:300;line-height:1.65;margin:0}'
+ '.ebn-form{display:flex;width:100%}'
+ '.ebn-email{flex:1;min-width:0;height:50px;border:1px solid #000;border-right:0;background:#F6F4F0;padding:0 16px;font-family:"Montserrat",sans-serif;font-size:16px;color:#000;border-radius:0;-webkit-appearance:none;appearance:none;outline:none;margin:0}'
+ '.ebn-email::placeholder{color:rgba(0,0,0,.45)}'
+ '.ebn-email:focus{background:#fff}'
+ '.ebn-btn{height:50px;border:1px solid #000;background:#000;color:#fff;padding:0 22px;font-family:"Montserrat",sans-serif;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;white-space:nowrap;border-radius:0;margin:0;transition:opacity .2s ease}'
+ '.ebn-btn:hover{opacity:.85}'
+ '.ebn-btn[disabled]{opacity:.6;cursor:default}'
+ '.ebn-mention{font-size:10.5px;font-weight:300;line-height:1.5;opacity:.65;margin:10px 0 0}'
+ '.ebn-mention a{color:#000}'
+ '.ebn-erreur{display:none;font-size:11.5px;color:#b3261e;margin:8px 0 0}'
+ '.ebn-merci{display:none;text-align:center}'
+ '.ebn-merci .ebn-merci-titre{font-size:18px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin:0 0 6px}'
+ '.ebn-merci p{font-size:13.5px;font-weight:300;margin:0}'
+ '.ebn.ebn-fini .ebn-in{display:none}'
+ '.ebn.ebn-fini .ebn-merci{display:block;padding:34px 56px}'
+ '@media (min-width:900px){'
+   '.ebn-email{font-size:14px}'
+   '.ebn-in{grid-template-columns:minmax(0,1fr) minmax(0,440px);gap:48px;align-items:center;padding:34px 40px}'
+   '.ebn-titre{font-size:21px;letter-spacing:.05em}'
+   '.ebn.ebn-etroit .ebn-in{grid-template-columns:minmax(0,1fr);gap:16px;padding:30px 32px}'
+ '}';
var st = document.createElement('style');
st.textContent = css;
document.head.appendChild(st);

/* ─── Panneau ─── */
var panneau = document.createElement('div');
panneau.className = 'ebn';
panneau.setAttribute('role', 'dialog');
panneau.setAttribute('aria-label', 'Newsletter ELKHA.B');
panneau.innerHTML = ''
  + '<button type="button" class="ebn-fermer" aria-label="Fermer">×</button>'
  + '<div class="ebn-in">'
  +   '<div><p class="ebn-tag">' + esc(TEXTES.tag) + '</p><p class="ebn-titre">' + esc(TEXTES.titre) + '</p><p class="ebn-texte">' + esc(TEXTES.texte) + '</p></div>'
  +   '<div><div class="ebn-form"><input class="ebn-email" type="email" inputmode="email" autocomplete="email" placeholder="' + esc(TEXTES.champ) + '"><button class="ebn-btn" type="button">' + esc(TEXTES.bouton) + '</button></div>'
  +   '<p class="ebn-erreur"></p>'
  +   '<p class="ebn-mention">' + esc(TEXTES.mention) + ' <a href="' + esc(TEXTES.lienConfidentialite) + '">Politique de confidentialité</a></p></div>'
  + '</div>'
  + '<div class="ebn-merci"><p class="ebn-merci-titre">' + esc(TEXTES.merciTitre) + '</p><p>' + esc(TEXTES.merciTexte) + '</p></div>';

var champ, bouton, erreur, fini = false, ferme = false;

/* Sur ordinateur, le panneau prend la largeur de la partie site (pas l'image de côté) */
function placer(){
  if(window.innerWidth < 900){ panneau.style.left = '0'; panneau.style.width = '100%'; panneau.classList.remove('ebn-etroit'); return; }
  var zone = document.querySelector('.site-main') || document.querySelector('.site-wrapper');
  var r = zone ? zone.getBoundingClientRect() : null;
  if(r && r.width > 200 && r.width < window.innerWidth - 40){
    panneau.style.left = Math.round(r.left) + 'px';
    panneau.style.width = Math.round(r.width) + 'px';
    panneau.classList.toggle('ebn-etroit', r.width < 860);
  } else {
    panneau.style.left = '0'; panneau.style.width = '100%'; panneau.classList.remove('ebn-etroit');
  }
}

/* Une fiche, le panier, le diagnostic, un avis, une page légale… est ouvert ? */
function occupee(){
  var html = document.documentElement;
  if(html.style.overflow === 'hidden' || document.body.style.overflow === 'hidden') return true;
  if(/\b(eb-legal-lock|ebc-lock|ebx-bloque)\b/.test(html.className)) return true;
  return !!document.querySelector('.eb-fp-overlay.open, #ebCartPanel.open, #ebDiagOverlay.open, #ebSearchOverlay.open, #ebOverlay.open, .ebx-fond.ebx-ouvert');
}

function montrer(){
  if(ferme || occupee()) return;
  placer();
  panneau.classList.add('ebn-ouvert');
}
function cacher(){
  if(champ && document.activeElement === champ) return; // elle est en train d'écrire
  panneau.classList.remove('ebn-ouvert');
}

function inscrire(){
  var email = champ.value.trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){
    erreur.textContent = TEXTES.erreur; erreur.style.display = 'block'; return;
  }
  erreur.style.display = 'none';
  bouton.disabled = true;
  var donnees = { type: 'newsletter', email: email, site: site || location.hostname, page: location.href.split('#')[0], envoye_le: new Date().toISOString() };
  fetch(URL_SCRIPT, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(donnees) })
    .then(function(r){ return r.json(); })
    .then(function(rep){
      if(!rep || !rep.ok) throw new Error('refus');
      fini = true;
      ecrireCookie('ebn_inscrite', '1', 3650);
      panneau.classList.add('ebn-fini');
      setTimeout(function(){ panneau.classList.remove('ebn-ouvert'); ferme = true; }, 3500);
    })
    .catch(function(){
      bouton.disabled = false;
      erreur.textContent = TEXTES.erreurEnvoi; erreur.style.display = 'block';
    });
}

function demarrer(){
  document.body.appendChild(panneau);
  champ = panneau.querySelector('.ebn-email');
  bouton = panneau.querySelector('.ebn-btn');
  erreur = panneau.querySelector('.ebn-erreur');

  panneau.querySelector('.ebn-fermer').addEventListener('click', function(){
    ferme = true;
    panneau.classList.remove('ebn-ouvert');
    if(!fini && !test) ecrireCookie('ebn_ferme', '1', JOURS_APRES_FERMETURE);
  });
  bouton.addEventListener('click', inscrire);
  champ.addEventListener('keydown', function(e){ if(e.key === 'Enter'){ e.preventDefault(); inscrire(); } });
  window.addEventListener('resize', function(){ if(panneau.classList.contains('ebn-ouvert')) placer(); });

  // Il remonte quand le pied de page arrive à l'écran, et redescend si elle remonte dans la page
  var pieds = document.querySelectorAll('footer');
  var pied = pieds.length ? pieds[pieds.length - 1] : null;
  if(pied && 'IntersectionObserver' in window){
    new IntersectionObserver(function(entrees){
      entrees.forEach(function(e){ if(fini) return; if(e.isIntersecting) montrer(); else cacher(); });
    }, { threshold: 0.15 }).observe(pied);
  } else {
    window.addEventListener('scroll', function(){
      if(fini) return;
      var bas = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 250;
      if(bas) montrer(); else cacher();
    }, { passive: true });
  }
  // Si un panneau (fiche, panier…) s'ouvre pendant qu'il est visible, il s'efface
  setInterval(function(){ if(panneau.classList.contains('ebn-ouvert') && occupee()) panneau.classList.remove('ebn-ouvert'); }, 800);
}
if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', demarrer); } else { demarrer(); }

})();
