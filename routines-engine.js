// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
// =====================================================================
// ELKHA.B — Page « Routines » : une carte par routine, qu'on retourne pour découvrir son rituel
// Embed Carrd :  <div id="eb-routines"> … </div>
//                <script defer src="https://elkhabskincare.github.io/elkhab-site/routines-engine.js"></script>
// Les routines (nom, prix, photo, soins, étapes) viennent de produits-data-test.js et produits-balance-test.js :
// une routine modifiée là-bas l'est aussi ici.
//
// MODE D'EMPLOI
// - Pour changer l'ordre des cartes : déplacer les lignes dans ROUTINES (la première ligne = la première carte).
// - Pour changer la petite phrase d'une carte : modifier le texte entre guillemets après « pour: ».
// - Pour changer les besoins d'une routine : modifier la liste après « besoins: » (voir les noms dans BESOINS).
// - Ne pas supprimer les guillemets, les virgules ni les accolades { } [ ].
// =====================================================================
(function(){
  if(window.ebRoutinesPret) return; window.ebRoutinesPret = true;

  // ───────────────────────────── RÉGLAGES ─────────────────────────────
  var BESOINS = [
    { id: "eclat",         nom: "Éclat" },
    { id: "hydratation",   nom: "Hydratation" },
    { id: "fermete",       nom: "Fermeté" },
    { id: "taches",        nom: "Taches" },
    { id: "apaisement",    nom: "Apaisement" },
    { id: "imperfections", nom: "Imperfections" },
    { id: "regard",        nom: "Regard" }
  ];
  var ROUTINES = [
    { id: "routine-apaisante",        pour: "Pour les peaux sensibles qui rougissent et tiraillent",  besoins: ["apaisement", "hydratation"] },
    { id: "routine-eclat",            pour: "Pour un teint lumineux, dès le nettoyage",               besoins: ["eclat"] },
    { id: "routine-essentielle",      pour: "Les premiers signes de l'âge, en quelques gestes",       besoins: ["fermete"] },
    { id: "routine-hydratation",      pour: "Pour une peau désaltérée et confortable",                besoins: ["hydratation"] },
    { id: "routine-anti-taches",      pour: "Pour unifier le teint et atténuer les taches",           besoins: ["taches"] },
    { id: "routine-teint-protection", pour: "Pour un teint unifié, protégé chaque jour",              besoins: ["eclat"] },
    { id: "routine-anti-age-balance", pour: "Rides, ridules et fermeté, regard compris",              besoins: ["fermete", "regard"] },
    { id: "routine-anti-age",         pour: "Pour une peau plus ferme, protégée le jour",             besoins: ["fermete"] },
    { id: "routine-renouvellement",   pour: "Pour les rides installées et le grain de peau",          besoins: ["fermete"] },
    { id: "routine-equilibre",        pour: "Pour les peaux mixtes et les imperfections",             besoins: ["imperfections"] },
    { id: "routine-regard",           pour: "Pour un regard reposé et lumineux",                      besoins: ["regard"] }
  ];
  // Les coffrets « Édition limitée » : affichés tout en haut, avant les routines (même mode d'emploi que ROUTINES)
  var COFFRETS = [
    { id: "coffret-temps-suspendu",   pour: "Rides, ridules et fermeté, regard compris",              besoins: ["fermete", "regard"] },
    { id: "coffret-rituel-de-minuit", pour: "Le rituel du soir complet, regard compris",              besoins: ["fermete", "regard"] },
    { id: "coffret-nouvelle-aube",    pour: "Pour une peau neuve : exfolier, lisser, repulper",       besoins: ["eclat", "fermete", "hydratation"] },
    { id: "coffret-lumiere-dhiver",   pour: "Pour un teint lumineux et unifié tout l'hiver",          besoins: ["eclat", "taches"] }
  ];
  var EDITION = {
    surtitre: "Édition limitée",
    titre: "Les coffrets des fêtes",
    texte: "Nos rituels réunis dans un écrin à offrir, en quantité limitée."
  };
  var REGLAGES = {
    // le rappel du Skin ID se place après cette carte (0 = pas de rappel)
    skinIdApres: 6,
    skinIdTitre: "Vous hésitez entre deux routines ?",
    skinIdTexte: "Le Skin ID analyse votre peau en quelques questions et vous indique la routine qui lui correspond.",
    // l'économie s'affiche au dos de la carte quand elle atteint au moins ce montant (en euros)
    economieMini: 3,
    // le texte « La routine juste pour votre peau » se place après cette carte, comme une respiration (0 = en bas de page)
    respirationApres: 3,
    // la bande vidéo à gauche des routines (laisser "" pour ne pas en mettre)
    video: "https://cdn.shopify.com/videos/c/o/v/75987c1af93f418486a16e6b5ed2ba6e.mp4",
    // cadrage de la vidéo dans la bande : "gauche-droite haut-bas" (50% = centre)
    cadrageOrdi: "50% 40%",
    cadrageTel: "50% 40%"
  };
  // ─────────────────────────── FIN DES RÉGLAGES ───────────────────────────

  // les cartes sont toutes beige : la couleur vient des flacons ; la gamme est écrite en taupe
  var NEUTRE = { k: "#8a8173", deg: "linear-gradient(90deg,#efe9df,#cfc6b8 55%,#8f8676)" };
  var COUL = { bloom: NEUTRE, balance: NEUTRE };

  var CSS = ""
  + "#eb-routines{font-family:'Montserrat',sans-serif;color:#111;max-width:1080px;margin:0 auto;padding:64px 0 40px}"
  + "#eb-routines *{box-sizing:border-box}"
  + ".ebr-h{text-align:center;margin:0 0 28px}"
  + "#eb-routines .ebr-h h2{font-family:'Montserrat',sans-serif;font-weight:400;font-size:30px;letter-spacing:.32em;padding-left:.32em;text-transform:uppercase;margin:0 0 14px;color:#111;line-height:1.2}"
  + ".ebr-ln{width:90px;height:2px;margin:0 auto 18px;background:linear-gradient(90deg,#fbfaf7,#e9e3d9 55%,#8f8676)}"
  + "#eb-routines .ebr-h p{font-size:14px;color:#2a2723;margin:0;line-height:1.6}"
  // besoins
  + ".ebr-f{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin:0 0 44px}"
  + ".ebr-f button{font-family:'Montserrat',sans-serif;font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;border:1px solid #cfc6b8;background:transparent;color:#111;padding:10px 16px;cursor:pointer;transition:background .25s ease,color .25s ease,border-color .25s ease}"
  + ".ebr-f button.on{background:#111;color:#fff;border-color:#111}"
  // grille
  + ".ebr-g{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:30px;align-items:stretch;text-align:left}"
  + ".ebr-c{position:relative;perspective:1600px}"
  + ".ebr-c[hidden],.ebr-sid[hidden],.ebr-intro[hidden]{display:none}"
  + ".ebr-c{display:flex;flex-direction:column}.ebr-in{display:grid;flex:1}"
  + ".ebr-fa{grid-area:1/1;position:relative;border-radius:20px;padding:24px 24px 22px;display:flex;flex-direction:column;background:linear-gradient(180deg,#f9f7f2 0%,#f4f0e8 55%,#ede6db 100%);box-shadow:0 22px 44px -30px rgba(70,55,35,.38),inset 0 1px 0 rgba(255,255,255,.85);backface-visibility:hidden}"
  + ".ebr-dos{visibility:hidden}"
  + ".ebr-c.vue .ebr-dos{visibility:visible;animation:ebrTourne .5s ease}"
  + ".ebr-c.vue .ebr-rec{visibility:hidden}"
  + ".ebr-c.revue .ebr-rec{animation:ebrTourne .5s ease}"
  + "@keyframes ebrTourne{from{transform:rotateY(-90deg)}to{transform:none}}"
  + ".ebr-rec{cursor:pointer}"
  + ".ebr-top{display:flex;justify-content:space-between;align-items:flex-start}"
  + ".ebr-code{font-size:9px;letter-spacing:.3em;color:#7a7368;padding-top:6px;text-transform:uppercase}"
  // monogramme embossé
  + ".ebr-mono{width:40px;height:50px;flex:none;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:2px;box-shadow:inset 1px 1px 0 rgba(90,70,50,.30),inset -1px -1px 0 rgba(255,255,255,.9),1px 1px 0 rgba(255,255,255,.9),-1px -1px 0 rgba(90,70,50,.18)}"
  + ".ebr-mono span,.ebr-mono small{color:transparent;background-image:linear-gradient(180deg,rgba(255,255,255,.85),rgba(255,255,255,.35) 55%,rgba(0,0,0,.04));-webkit-background-clip:text;background-clip:text;filter:drop-shadow(1px 1px 0 rgba(90,70,50,.38)) drop-shadow(-1px -1px 0 rgba(255,255,255,.95))}"
  + ".ebr-mono span{font-size:17px;font-weight:300;line-height:1}.ebr-mono b{font-weight:800}"
  + ".ebr-mono small{font-size:4px;font-weight:700;letter-spacing:.5em;padding-left:.5em;margin-top:4px}"
  // recto
  + ".ebr-ph{aspect-ratio:1/1;margin:16px 0 18px;border-radius:12px;overflow:hidden;background:#f5f4f0}"
  + ".ebr-ph img{color:transparent;width:100%;height:100%;object-fit:cover;object-position:var(--pos,50% 54%);transform:scale(var(--z,.9));display:block;transition:transform .8s ease}"
  + ".ebr-rec:hover .ebr-ph img{transform:scale(calc(var(--z,.9) * 1.045))}"
  + ".ebr-k{font-size:9.5px;letter-spacing:.32em;font-weight:500;text-transform:uppercase}"
  + "#eb-routines h3.ebr-n{font-family:'Montserrat',sans-serif;font-size:14px;letter-spacing:.14em;text-transform:uppercase;font-weight:600;margin:8px 0 6px;line-height:1.35;color:#111}"
  + ".ebr-n .nb{white-space:nowrap}"
  + ".ebr-gl{height:2px;width:56px;margin:2px 0 12px}"
  + ".ebr-pied{font-size:9.5px;letter-spacing:.24em;text-transform:uppercase;color:#7a7368;margin-top:auto;display:flex;justify-content:space-between;align-items:center;padding-top:6px}"
  + ".ebr-pied b{font-weight:600;color:#111;letter-spacing:.1em;font-size:11px}"
  // verso
  + ".ebr-pour{font-size:12.5px;font-style:italic;color:#4a453e;margin:2px 0 6px;line-height:1.5}"
  + ".ebr-mos{display:grid;grid-template-columns:1fr;gap:0}"
  + ".ebr-mo h4{font-family:'Montserrat',sans-serif;font-size:9.5px;letter-spacing:.3em;text-transform:uppercase;margin:16px 0 8px;font-weight:600;color:#6b655c}"
  + ".ebr-mo ol{margin:0;padding:0;list-style:none;counter-reset:e}"
  + ".ebr-mo li{counter-increment:e;font-size:12.5px;line-height:1.5;padding:5px 0 5px 26px;position:relative;border-top:1px solid rgba(0,0,0,.08)}"
  + ".ebr-mo li:before{content:counter(e,decimal-leading-zero);position:absolute;left:0;top:6px;font-size:9.5px;color:#8a8478}"
  + ".ebr-achat{margin-top:auto;padding-top:20px}"
  + ".ebr-btn span:last-child{white-space:nowrap}"
  + ".ebr-btn{width:100%;display:flex;justify-content:space-between;align-items:center;gap:10px;background:#111;color:#fff;border:0;padding:14px 18px;font-family:'Montserrat',sans-serif;font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;cursor:pointer;text-align:left}"
  + ".ebr-eco{font-size:11px;color:#4a453e;text-align:center;margin:8px 0 0}"
  + ".ebr-eco s{opacity:.6}"
  + ".ebr-liens{display:flex;justify-content:space-between;margin-top:12px}"
  + ".ebr-liens button{font-family:'Montserrat',sans-serif;background:none;border:0;padding:4px 0;cursor:pointer;font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:#6b655c;text-decoration:underline;text-underline-offset:3px}"
  // section « Édition limitée » (coffrets), au-dessus des routines
  + ".ebr-ed{margin:0 0 56px}"
  + ".ebr-ed-h{text-align:center;margin:0 0 30px}"
  + ".ebr-ed-k{font-size:9.5px;letter-spacing:.34em;text-transform:uppercase;color:#8a8173;margin:0 0 14px}"
  + "#eb-routines .ebr-ed-h h2{font-family:'Montserrat',sans-serif;font-size:22px;letter-spacing:.06em;font-weight:300;margin:0;color:#111;line-height:1.3;text-transform:none}"
  + ".ebr-ed-h i{display:block;width:70px;height:1px;margin:18px auto 0;background:linear-gradient(90deg,#f5f4f0,#cfc6b8 50%,#8f8676)}"
  + "#eb-routines .ebr-ed-h p{font-size:13.5px;line-height:1.7;color:#2a2723;margin:16px auto 0;max-width:520px}"
  + ".ebr-ed[hidden]{display:none}"
  + "@media (min-width:900px){.ebr-ged{grid-template-columns:repeat(2,minmax(0,1fr));max-width:720px;margin:0 auto}}"
  + ".ebr-av>.ebr-ed{max-width:1080px;margin-left:auto;margin-right:auto}"
  // rappel Skin ID
  // rappel Skin ID : posé directement sur le fond du site, entre deux rangées de cartes (effet de profondeur)
  + ".ebr-sid{grid-column:1/-1;display:flex;flex-direction:column;align-items:center;text-align:center;gap:0;padding:46px 20px 50px}"
  + ".ebr-sid-k{font-size:9.5px;letter-spacing:.34em;text-transform:uppercase;color:#8a8173;margin:0 0 14px}"
  + "#eb-routines .ebr-sid h3{font-family:'Montserrat',sans-serif;font-size:22px;letter-spacing:.06em;font-weight:300;margin:0;color:#111;line-height:1.3}"
  + ".ebr-sid i{display:block;width:70px;height:1px;margin:18px auto 0;background:linear-gradient(90deg,#f5f4f0,#cfc6b8 50%,#8f8676)}"
  + "#eb-routines .ebr-sid p{font-size:13.5px;line-height:1.7;color:#2a2723;margin:16px 0 0;max-width:520px}"
  + ".ebr-sid button{margin-top:24px;flex:none;font-family:'Montserrat',sans-serif;background:#111;color:#fff;border:0;padding:15px 22px;font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;cursor:pointer}"
  // texte de présentation (écrit dans Carrd, lisible par Google)
  + ".ebr-intro{max-width:720px;margin:70px auto 0;text-align:center}"
  + "#eb-routines .ebr-intro h2{font-family:'Montserrat',sans-serif;font-size:13px;letter-spacing:.3em;text-transform:uppercase;font-weight:600;margin:0 0 16px;color:#111}"
  + "#eb-routines .ebr-intro p{font-size:13px;line-height:1.75;color:#2a2723;margin:0 0 12px}"
  // … placé entre les cartes : une respiration, le titre au-dessus, les deux paragraphes côte à côte
  + ".ebr-g>.ebr-intro{grid-column:1/-1;max-width:none;margin:0;padding:44px 0 46px;display:grid;grid-template-columns:1fr 1fr;column-gap:46px;text-align:left}"
  + "#eb-routines .ebr-g>.ebr-intro h2{grid-column:1/-1;text-align:center;font-size:22px;letter-spacing:.06em;text-transform:none;font-weight:300;margin:0}"
  + ".ebr-g>.ebr-intro:after{content:'';grid-row:2;grid-column:1/-1;display:block;width:70px;height:1px;margin:18px auto 26px;background:linear-gradient(90deg,#f5f4f0,#cfc6b8 50%,#8f8676)}"
  + "#eb-routines .ebr-g>.ebr-intro p{grid-row:3;font-size:13.5px;line-height:1.85;margin:0}"
  // la bande vidéo : une longue règle étroite, détachée du bord, qui reste en place pendant que les cartes défilent
  + "#eb-routines.ebr-av{position:relative;box-sizing:border-box;max-width:none;width:100vw;padding-left:236px;padding-right:48px}"
  + ".ebr-av>.ebr-g,.ebr-av>.ebr-f,.ebr-av>.ebr-h{max-width:1080px;margin-left:auto;margin-right:auto}"
  + ".ebr-av>.ebr-f{margin-bottom:44px}"
  + ".ebr-bande{position:absolute;left:44px;top:0;bottom:0;width:136px;pointer-events:none}"
  + ".ebr-bande-in{position:absolute;left:0;right:0;top:0;height:calc(100vh - 100px);overflow:hidden;border-radius:3px;background:#e7ddd1;box-shadow:0 24px 40px -26px rgba(70,55,35,.45)}"
  + ".ebr-bande video{display:block;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .8s ease}"
  + ".ebr-bande video.ok{opacity:1}"
  + ".ebr-vide{grid-column:1/-1;text-align:center;font-size:13px;color:#4a453e;padding:30px 0}"
  // téléphone : deux cartes par rangée ; la carte retournée prend toute la largeur
  + "@media (max-width:899px){"
  +   "#eb-routines{padding:44px 16px 30px}"
  +   "#eb-routines .ebr-h h2{font-size:20px;letter-spacing:.26em;padding-left:.26em}"
  +   "#eb-routines .ebr-h p{font-size:12.5px}"
  +   ".ebr-f{gap:6px;margin-bottom:28px}.ebr-f button{font-size:8.5px;padding:8px 10px}"
  +   ".ebr-g{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;grid-auto-flow:row dense}"
  +   ".ebr-fa{padding:13px;border-radius:14px}"
  +   ".ebr-code{font-size:6.5px;padding-top:4px}"
  +   ".ebr-mono{width:28px;height:35px}.ebr-mono span{font-size:12px}.ebr-mono small{font-size:3px;margin-top:3px}"
  +   ".ebr-ph{margin:10px 0;border-radius:9px}"
  +   ".ebr-k{font-size:7px;letter-spacing:.2em}#eb-routines h3.ebr-n{font-size:9.5px;letter-spacing:.1em;margin:5px 0 4px}.ebr-gl{width:36px;margin:2px 0 8px}"
  +   ".ebr-pied{font-size:6.5px;letter-spacing:.18em}.ebr-pied b{font-size:9.5px}"
  // avec la bande vidéo : une seule carte par rangée, un peu plus grande
  +   "#eb-routines.ebr-av{padding-left:calc(10px + 15vw + 14px);padding-right:14px}"
  +   ".ebr-bande{left:10px;width:15vw}"
  +   ".ebr-bande-in{height:calc(100vh - 100px);height:calc(100svh - 100px);border-radius:2px}"
  +   "#eb-routines.ebr-av .ebr-h h2{font-size:17px;letter-spacing:.2em;padding-left:.2em}"
  +   ".ebr-av .ebr-f{gap:5px;margin-bottom:24px}"
  +   ".ebr-av .ebr-g{grid-template-columns:1fr;gap:16px}"
  +   ".ebr-av .ebr-fa{padding:16px 16px 14px}"
  +   ".ebr-av .ebr-code{font-size:7.5px}.ebr-av .ebr-mono{width:34px;height:42px}.ebr-av .ebr-mono span{font-size:14px}.ebr-av .ebr-mono small{font-size:3.4px}"
  +   ".ebr-av .ebr-k{font-size:8px;letter-spacing:.26em}#eb-routines.ebr-av h3.ebr-n{font-size:12px;letter-spacing:.12em}.ebr-av .ebr-gl{width:44px}"
  +   ".ebr-av .ebr-pied{font-size:7.5px}.ebr-av .ebr-pied b{font-size:10.5px}"
  +   ".ebr-c.vue{grid-column:1/-1}"
  +   ".ebr-c.vue .ebr-rec{display:none}"
  +   ".ebr-c.vue .ebr-fa{padding:18px}"
  +   ".ebr-c.vue .ebr-code{font-size:8px}.ebr-c.vue .ebr-mono{width:36px;height:45px}.ebr-c.vue .ebr-mono span{font-size:15px}.ebr-c.vue .ebr-mono small{font-size:3.6px}"
  +   ".ebr-c.vue .ebr-k{font-size:8.5px}#eb-routines .ebr-c.vue h3.ebr-n{font-size:13px}"
  +   ".ebr-c.vue .ebr-mos{grid-template-columns:1fr 1fr;column-gap:14px}"
  +   ".ebr-dos{display:none}.ebr-c.vue .ebr-dos{display:flex}"
  +   ".ebr-sid-k{font-size:8px;letter-spacing:.22em}"
  +   ".ebr-sid{padding:30px 6px 34px}#eb-routines .ebr-sid h3{font-size:17px}#eb-routines .ebr-sid p{font-size:12.5px}.ebr-sid button{margin-top:18px;padding:13px 18px;font-size:9.5px}"
  +   ".ebr-g>.ebr-intro{grid-template-columns:1fr;padding:28px 4px 30px;text-align:center}"
  +   "#eb-routines .ebr-g>.ebr-intro h2{font-size:17px}"
  +   "#eb-routines .ebr-g>.ebr-intro p{grid-row:auto;font-size:12.5px;line-height:1.8;margin:0 0 10px}"
  +   ".ebr-intro{margin-top:50px}"
  + "}"
  + "@media (prefers-reduced-motion:reduce){.ebr-c .ebr-fa{animation:none!important}}";

  function esc(t){ return String(t == null ? '' : t).replace(/[&<>"]/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function nombre(p){ var m = String(p || '').replace(',', '.').match(/[\d.]+/); return m ? parseFloat(m[0]) : 0; }
  function euros(n){ var s = (Math.round(n * 100) / 100).toFixed(2).replace('.', ','); return s.replace(/,00$/, '') + ' €'; }
  function photo(u, w){ if(!u) return ''; if(u.indexOf('cdn.shopify.com') < 0) return u; return u + (u.indexOf('?') < 0 ? '?' : '&') + 'width=' + w; }
  function insecable(nom){ return esc(nom).replace(/(\S+-\S+)/g, '<span class="nb">$1</span>').replace(/ &amp; /g, '&nbsp;&amp; '); }
  var MONO = '<div class="ebr-mono" aria-hidden="true"><span><b>E</b>.B</span><small>PARIS</small></div>';

  // les étapes regroupées par moment (le matin d'abord, puis le soir, puis le reste)
  function moments(P, r){
    var ro = r.routine || {}, inclus = {}, ordre = [], groupes = {};
    (ro.soins || []).forEach(function(s){ inclus[s] = 1; });
    (ro.etapes || []).forEach(function(e){
      var nom = '';
      if(e.selonChoix && r.variantes){ nom = r.variantes.map(function(v){ return v.fiche && P[v.fiche] ? P[v.fiche].nom : ''; }).filter(Boolean).join(' ou '); }
      else if(e.soin){ if(!inclus[e.soin] || !P[e.soin]) return; nom = P[e.soin].nom; }
      else if(e.titre){ nom = e.titre; }
      if(!nom) return;
      var m = e.moment || ro.moment || 'Au quotidien';
      if(!groupes[m]){ groupes[m] = []; ordre.push(m); }
      if(groupes[m].indexOf(nom) < 0) groupes[m].push(nom);
    });
    function rang(m){ m = m.toLowerCase(); return /matin|quotidien/.test(m) ? 0 : /^le soir$/.test(m) ? 1 : 2; }
    ordre.sort(function(a, b){ return rang(a) - rang(b); });
    return ordre.map(function(m){ return '<div class="ebr-mo"><h4>' + esc(m) + '</h4><ol>' + groupes[m].map(function(n){ return '<li>' + esc(n) + '</li>'; }).join('') + '</ol></div>'; }).join('');
  }

  function carte(P, cfg, n){
    var r = P[cfg.id], g = r.gamme === 'balance' ? 'balance' : 'bloom', c = COUL[g], ro = r.routine || {};
    var nb = (ro.soins || []).length, prix = nombre(r.prix);
    var somme = (ro.soins || []).reduce(function(t, s){ return t + (P[s] ? nombre(P[s].prix) : 0); }, 0);
    var eco = somme - prix >= REGLAGES.economieMini ? '<p class="ebr-eco">Au lieu de <s>' + euros(somme) + '</s> pour les soins achetés séparément</p>' : '';
    var img = r.media && r.media.images && r.media.images[0];
    var code = (r.coffret ? 'Coffret · ' : 'Routine · ') + (n < 10 ? '0' : '') + n;
    var gamme = r.gammeLabel || (g === 'bloom' ? 'Bloom' : 'Balance');
    var achat = r.variantId
      ? '<button type="button" class="ebr-btn eb-cart-add-btn" data-variant-id="' + esc(r.variantId) + '"><span>' + (r.coffret ? 'Ajouter le coffret' : 'Ajouter la routine') + '</span><span>' + euros(prix) + '</span></button>'
      : '<button type="button" class="ebr-btn" data-fiche="' + esc(cfg.id) + '"><span>' + esc(r.choixLabel ? 'Choisir ' + r.choixLabel.replace(/^Choisissez\s+/i, '').replace(/^Votre\s+/i, 'votre ') : 'Choisir ma version') + '</span><span>' + euros(prix) + '</span></button>';
    return '<article class="ebr-c ' + g + '" data-b="' + esc(cfg.besoins.join(' ')) + '" data-id="' + esc(cfg.id) + '"><div class="ebr-in">'
      + '<div class="ebr-fa ebr-rec" role="button" tabindex="0" aria-label="Retourner la carte ' + esc(r.nom) + ' pour découvrir son rituel">'
      +   '<div class="ebr-top"><span class="ebr-code">' + code + '</span>' + MONO + '</div>'
      +   '<div class="ebr-ph"><img' + (r.carte ? ' style="' + (r.carte.position ? '--pos:' + esc(r.carte.position) + ';' : '') + (r.carte.zoom ? '--z:' + esc(r.carte.zoom) : '') + '"' : '') + ' src="' + esc(photo(img, 700)) + '" alt=""' + esc(r.nom + ' ' + gamme + ' ELKHA.B : ' + (r.sousTitre || '')) + '" loading="lazy" decoding="async"></div>'
      +   '<div class="ebr-k" style="color:' + c.k + '">' + gamme + ' · ' + nb + ' soins</div>'
      +   '<h3 class="ebr-n">' + insecable(r.nom) + '</h3><div class="ebr-gl" style="background:' + c.deg + '"></div>'
      +   '<div class="ebr-pied"><span>Retourner</span><b>' + euros(prix) + '</b></div>'
      + '</div>'
      + '<div class="ebr-fa ebr-dos" aria-hidden="true">'
      +   '<div class="ebr-top"><span class="ebr-code">' + code + ' — Votre rituel</span>' + MONO + '</div>'
      +   '<div class="ebr-k" style="color:' + c.k + ';margin-top:14px">' + gamme + '</div>'
      +   '<h3 class="ebr-n">' + insecable(r.nom) + '</h3>'
      +   '<p class="ebr-pour">' + esc(cfg.pour) + '</p>'
      +   '<div class="ebr-mos">' + moments(P, r) + '</div>'
      +   '<div class="ebr-achat">' + achat + eco
      +   '<div class="ebr-liens"><button type="button" class="ebr-retour">Retourner</button><button type="button" data-fiche="' + esc(cfg.id) + '">' + (r.coffret ? 'Voir le coffret en détail' : 'Voir la routine en détail') + '</button></div></div>'
      + '</div>'
      + '</div></article>';
  }

  function construire(){
    var root = document.getElementById('eb-routines'), P = window.EB_PRODUITS;
    if(!root || !P || !P['routine-apaisante'] || !P['routine-eclat']) return false;
    if(root.getAttribute('data-ok')) return true; root.setAttribute('data-ok', '1');
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);

    var titre = root.querySelector('.ebr-h'), intro = root.querySelector('.ebr-intro');
    var liste = ROUTINES.filter(function(x){ return P[x.id]; });
    var coffrets = COFFRETS.filter(function(x){ return P[x.id]; });
    var ed = '';
    if(coffrets.length){
      ed = '<section class="ebr-ed" aria-label="' + esc(EDITION.titre) + '"><div class="ebr-ed-h"><p class="ebr-ed-k">' + esc(EDITION.surtitre) + '</p><h2>' + esc(EDITION.titre) + '</h2><i></i>' + (EDITION.texte ? '<p>' + esc(EDITION.texte) + '</p>' : '') + '</div>'
        + '<div class="ebr-g ebr-ged">' + coffrets.map(function(x, i){ return carte(P, x, i + 1); }).join('') + '</div></section>';
    }
    var h = '', n = 0;
    liste.forEach(function(x){
      n++; h += carte(P, x, n);
      if(REGLAGES.skinIdApres && n === REGLAGES.skinIdApres){
        h += '<aside class="ebr-sid"><p class="ebr-sid-k">Skin ID · le diagnostic ELKHA.B</p><h3>' + esc(REGLAGES.skinIdTitre) + '</h3><i></i><p>' + esc(REGLAGES.skinIdTexte) + '</p><button type="button" class="ebr-sid-b">Faire mon Skin ID</button></aside>';
      }
    });
    var f = '<div class="ebr-f" role="group" aria-label="Choisir un besoin"><button type="button" class="on" data-id="">Toutes</button>'
      + BESOINS.filter(function(b){ return liste.concat(coffrets).some(function(x){ return x.besoins.indexOf(b.id) >= 0; }); })
               .map(function(b){ return '<button type="button" data-id="' + b.id + '">' + esc(b.nom) + '</button>'; }).join('') + '</div>';
    root.innerHTML = '';
    if(titre) root.appendChild(titre);
    root.insertAdjacentHTML('beforeend', f + ed + '<div class="ebr-g">' + h + '</div>');
    if(intro){
      var apres = REGLAGES.respirationApres && root.querySelectorAll('.ebr-g:not(.ebr-ged) > .ebr-c')[REGLAGES.respirationApres - 1];
      if(apres) apres.parentNode.insertBefore(intro, apres.nextSibling); else root.appendChild(intro);
    }
    // la bande vidéo
    if(REGLAGES.video){
      root.classList.add('ebr-av');
      root.insertAdjacentHTML('afterbegin', '<div class="ebr-bande" aria-hidden="true"><div class="ebr-bande-in"><video muted autoplay loop playsinline webkit-playsinline preload="none" disablepictureinpicture></video></div></div>');
      var vid = root.querySelector('.ebr-bande video');
      vid.muted = true;
      function cadre(){ vid.style.objectPosition = tel() ? REGLAGES.cadrageTel : REGLAGES.cadrageOrdi; }
      // la bande et les cartes vont d'un bord à l'autre de l'écran, quel que soit l'écran
      function cale(){ root.style.marginLeft = ''; var l = root.getBoundingClientRect().left; if(Math.abs(l) > .5) root.style.marginLeft = (parseFloat(getComputedStyle(root).marginLeft) - l) + 'px'; cadre(); }
      cale(); addEventListener('resize', cale); addEventListener('load', cale);
      // la règle accompagne la cliente tout le long des routines : elle se fige à l'écran (comme un cadre)
      // et c'est la page qui glisse ; elle ne reprend sa place qu'au début et à la fin des routines
      var bande = root.querySelector('.ebr-bande'), fen = root.querySelector('.ebr-bande-in'), etat = '';
      function suivre(force){
        var r = bande.getBoundingClientRect(), h = fen.offsetHeight, haut = 76;
        var e = r.top >= haut ? 'haut' : (r.bottom - h <= haut ? 'bas' : 'fixe');
        if(e === etat && !force) return; etat = e;
        var st = fen.style;
        if(e === 'fixe'){ st.position = 'fixed'; st.top = haut + 'px'; st.bottom = 'auto'; st.left = r.left + 'px'; st.width = r.width + 'px'; }
        else { st.position = 'absolute'; st.left = '0'; st.width = ''; if(e === 'haut'){ st.top = '0'; st.bottom = 'auto'; } else { st.top = 'auto'; st.bottom = '0'; } }
      }
      addEventListener('scroll', function(){ suivre(false); }, { passive: true });
      addEventListener('resize', function(){ suivre(true); }); addEventListener('load', function(){ suivre(true); });
      suivre(true);
      // la vidéo ne se charge qu'à l'approche des routines, pour garder la page rapide
      function montrer(){ vid.classList.add('ok'); }
      function jouer(){ var p = vid.play(); if(p && p.catch) p.catch(function(){ ['touchstart', 'scroll', 'click'].forEach(function(ev){ addEventListener(ev, function relance(){ removeEventListener(ev, relance); vid.play().catch(function(){}); }, { passive: true }); }); }); }
      function lancer(){ if(vid.getAttribute('src')) return; vid.addEventListener('loadeddata', montrer); vid.addEventListener('playing', montrer); vid.setAttribute('src', REGLAGES.video); vid.load(); jouer(); }
      if('IntersectionObserver' in window){ new IntersectionObserver(function(es, o){ if(es.some(function(e){ return e.isIntersecting; })){ lancer(); o.disconnect(); } }, { rootMargin: '600px 0px' }).observe(root); } else lancer();
    }

    // Google : la liste des routines avec leur prix
    try {
      var ld = { "@context": "https://schema.org", "@type": "ItemList", "name": "Routines soin visage ELKHA.B", "itemListElement": coffrets.concat(liste).map(function(x, i){
        var r = P[x.id], img = r.media && r.media.images && r.media.images[0];
        return { "@type": "ListItem", "position": i + 1, "item": { "@type": "Product", "name": r.nom, "brand": { "@type": "Brand", "name": "ELKHA.B" }, "description": x.pour, "image": img || undefined,
          "offers": { "@type": "Offer", "price": nombre(r.prix).toFixed(2), "priceCurrency": "EUR", "availability": "https://schema.org/InStock" } } };
      }) };
      var s = document.createElement('script'); s.type = 'application/ld+json'; s.textContent = JSON.stringify(ld); document.head.appendChild(s);
    } catch(e){}

    var grille = root;   // les clics des cartes (coffrets et routines)
    function tel(){ return window.innerWidth < 900; }
    function retourner(c, voir){
      var d = c.querySelector('.ebr-dos'), r = c.querySelector('.ebr-rec');
      if(voir){
        if(tel()) root.querySelectorAll('.ebr-c.vue').forEach(function(o){ if(o !== c) retourner(o, false); });
        c.classList.remove('revue'); c.classList.add('vue'); d.removeAttribute('aria-hidden'); r.setAttribute('aria-hidden', 'true');
        if(tel()) setTimeout(function(){ var t = c.getBoundingClientRect().top; if(t < 70 || t > window.innerHeight * .5) window.scrollTo({ top: window.scrollY + t - 80, behavior: 'smooth' }); }, 60);
      } else {
        c.classList.remove('vue'); c.classList.add('revue'); d.setAttribute('aria-hidden', 'true'); r.removeAttribute('aria-hidden');
        setTimeout(function(){ c.classList.remove('revue'); }, 520);
      }
    }
    grille.addEventListener('click', function(e){
      var c = e.target.closest('.ebr-c'); if(!c) return;
      if(e.target.closest('.ebr-rec')){ retourner(c, true); return; }
      if(e.target.closest('.ebr-retour')){ retourner(c, false); return; }
    });
    grille.addEventListener('keydown', function(e){
      var r = e.target.closest && e.target.closest('.ebr-rec');
      if(r && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); retourner(r.closest('.ebr-c'), true); }
    });
    var sid = root.querySelector('.ebr-sid-b');
    if(sid) sid.addEventListener('click', function(){ if(typeof window.ebSkinIdOpen === 'function') window.ebSkinIdOpen(); else if(typeof window.ebDiagOpen === 'function') window.ebDiagOpen(); });

    // besoins : on ne garde que les routines qui y répondent (et l'adresse garde le choix : ?besoin=taches)
    var boutons = root.querySelectorAll('.ebr-f button');
    function filtrer(id, garderAdresse){
      boutons.forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-id') === id); });
      root.querySelectorAll('.ebr-c').forEach(function(c){ c.hidden = !!id && (' ' + c.getAttribute('data-b') + ' ').indexOf(' ' + id + ' ') < 0; if(c.hidden && c.classList.contains('vue')) retourner(c, false); });
      if(sid) sid.closest('.ebr-sid').hidden = !!id;
      var sec = root.querySelector('.ebr-ed'); if(sec) sec.hidden = !sec.querySelector('.ebr-c:not([hidden])');
      var resp = root.querySelector('.ebr-g > .ebr-intro'); if(resp) resp.hidden = !!id;
      if(!garderAdresse){ try { var u = new URL(location.href); if(id) u.searchParams.set('besoin', id); else u.searchParams.delete('besoin'); history.replaceState(null, '', u); } catch(e){} }
    }
    boutons.forEach(function(b){ b.addEventListener('click', function(){ filtrer(b.getAttribute('data-id'), false); }); });
    try { var dep = new URL(location.href).searchParams.get('besoin'); if(dep && BESOINS.some(function(b){ return b.id === dep; })) filtrer(dep, true); } catch(e){}
    return true;
  }
  (function attendre(k){ if(construire()) return; if(k > 0) setTimeout(function(){ attendre(k - 1); }, 150); })(60);
})();
