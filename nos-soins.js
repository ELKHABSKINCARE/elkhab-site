// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
// =====================================================================
// ELKHA.B — Page « Nos soins » : les soins Bloom et Balance réunis, rangés par type
// Le contenu (titres, textes, soins) est écrit dans les 2 embeds Carrd, pour que Google le lise.
// Ce fichier fait la mise en forme : un type à la fois (comme des pages), photos à l'échelle réelle,
// barres de texture, filtre Bloom / Balance, prix à jour et ouverture des fiches.
// =====================================================================
(function(){ if(document.getElementById('eb-montserrat')) return; var l = document.createElement('link'); l.id = 'eb-montserrat'; l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap'; document.head.appendChild(l); })();
(function(){
  if(window.ebNosSoins) return; window.ebNosSoins = true;

  // ───────────────────────────── RÉGLAGES ─────────────────────────────
  var REGLAGES = {
    espaceMenu: 64,          // hauteur du menu fixe : la bande des types se colle juste dessous
    fondSite: "#f5f4f0",     // couleur exacte du fond du site
    photoTelephoneHaut: "-10%",   // téléphone : remonte la photo de la bannière (les flacons au-dessus du texte, comme Balance)
    versionPhotos: 3,        // +1 si une photo remplacée dans Shopify ne se met pas à jour
    typeParDefaut: "nettoyants",
    // Types sans échelle de texture (pas de phrase « du plus léger au plus riche », pas de curseur sur le côté)
    typesSansEchelle: ["protection", "masques"],
    // Fond de la bande des types (calme, dans les beiges du site)
    bande: "linear-gradient(90deg,#f8f6f1,#e2d9ca 55%,#c9bca7)",
    // Barre de texture (du plus léger au plus riche)
    barreDebut: [240, 235, 226],   // même famille que la bande des types, en plus marqué
    barreFin:   [138, 118, 92],
    base: "https://elkhabskincare.github.io/elkhab-site/",
    fichiers: ["produits-data-test.js", "produits-balance-test.js", "avis-engine.js", "fiche-engine.js"]
  };
  // ── Photo de bannière propre à un type de soin (les types absents gardent la photo de l'embed)
  //    photo : le lien de la photo (photoTel : une autre photo pour le téléphone, facultatif)
  //    cadrage : la partie de la photo à garder visible (ordinateur, puis téléphone)
  //    fond : couleur du fond derrière la photo · telPlein + telHaut : sur téléphone, photo depuis le haut sur telHaut de l'écran
  //    sombreTel : sur téléphone, textes en blanc sur fond noir (photo foncée)
  var PHOTOS_TYPES = {
    nettoyants: { photo: REGLAGES.base + "nos-soins-nettoyants.webp", cadrage: "70% 50%", cadrageTel: "68% 50%",
                  alt: "Mousse d'un nettoyant visage doux ELKHA.B : démaquillants et nettoyants" },
    lotions:    { photo: REGLAGES.base + "nos-soins-lotions.webp", photoTel: REGLAGES.base + "nos-soins-lotions-tel.webp",
                  cadrage: "100% 50%", cadrageTel: "45% 50%", telPlein: true, telHaut: "100%",
                  alt: "Gouttes de lotion sur une surface claire : lotions toniques et exfoliants visage ELKHA.B" },
    serums:     { photo: REGLAGES.base + "nos-soins-serums.webp", photoTel: REGLAGES.base + "nos-soins-serums-tel.webp", fond: "#d9cab7",
                  cadrage: "60% 50%", cadrageTel: "50% 75%",
                  alt: "Goutte de sérum visage doré aux bulles fines ELKHA.B : sérums" },
    cremes:     { photo: REGLAGES.base + "nos-soins-cremes.webp", photoTel: REGLAGES.base + "nos-soins-cremes-tel.webp",
                  cadrage: "100% 50%", cadrageTel: "55% 50%",
                  alt: "Texture d'un gel et d'une crème hydratante ELKHA.B : crèmes et gels visage" },
    yeux:       { photo: REGLAGES.base + "nos-soins-yeux.webp", photoTel: REGLAGES.base + "nos-soins-yeux-tel.webp", fond: "#f2e5de",
                  cadrage: "100% 50%", cadrageTel: "87% 0%", telPlein: true, telHaut: "100%",
                  alt: "Contour des yeux ELKHA.B : touches de crème appliquées sous l'œil pour hydrater et défroisser le regard" },
    masques:    { photo: REGLAGES.base + "nos-soins-masques.webp", photoTel: REGLAGES.base + "nos-soins-masques-tel.webp", fond: "#c4b2a4",
                  cadrage: "100% 35%", cadrageTel: "64% 0%", telPlein: true, telHaut: "100%",
                  alt: "Patchs yeux ELKHA.B posés sous les yeux : masques et patchs visage" },
    sensibles:  { photo: REGLAGES.base + "nos-soins-sensibles.webp", photoTel: REGLAGES.base + "nos-soins-sensibles-tel.webp", fond: "#f4e4d3",
                  cadrage: "100% 50%", cadrageTel: "57% 0%", telPlein: true, telHaut: "100%",
                  alt: "Visages de femmes à la peau sensible, en lumière douce : soins pour peaux sensibles ELKHA.B" },
    protection: { photo: REGLAGES.base + "nos-soins-protection.webp", photoTel: REGLAGES.base + "nos-soins-protection-tel.webp",
                  cadrage: "100% 40%", cadrageTel: "73% 0%", telPlein: true, telHaut: "100%", sombreTel: true,
                  alt: "Femme au chapeau de paille au soleil couchant : protection solaire visage ELKHA.B" }
  };
  // ── NE RIEN MODIFIER EN DESSOUS ──────────────────────────────────────

  var root;
  (function attendre(n){
    root = document.getElementById('eb-ns');
    var suite = document.querySelectorAll('.eb-ns-suite .ens-s').length;
    // on attend que tous les embeds de la page soient lus (la suite des soins peut être répartie sur plusieurs embeds)
    if(root && ((suite && document.readyState !== 'loading') || document.readyState === 'complete' || n <= 0)) return demarrer();
    if(n > 0) setTimeout(function(){ attendre(n - 1); }, 100);
  })(40);

  function demarrer(){
  if(!root || root.getAttribute('data-pret')) return; root.setAttribute('data-pret', '1');
  // même moteur pour la page « Nos soins » (?type=) et la page « Vos besoins » (?besoin=) : réglages lus sur l'embed
  var PARAM = root.getAttribute('data-param') || 'type', LIBELLE = root.getAttribute('data-choix') || 'Type de soin';
  var DEFAUT = root.getAttribute('data-defaut') || REGLAGES.typeParDefaut;
  function esc(t){ var d = document.createElement('div'); d.textContent = t == null ? '' : String(t); return d.innerHTML; }
  function src(u, w){ if(!u) return ''; if(u.indexOf('cdn.shopify.com') < 0) return u; u = u.split('?')[0];   // l'ancien numéro « ?v= » de Shopify est retiré : on reçoit toujours la photo du jour
    return u + '?width=' + w + '&eb=' + REGLAGES.versionPhotos; }
  function brute(img){ return (img.getAttribute('data-src') || img.getAttribute('src') || '').replace(/([?&])width=\d+&?/, '$1').replace(/[?&]$/, ''); }

  // Les types du 2e embed rejoignent le 1er (une seule page pour la cliente)
  var zone = root.querySelector('.ens-zone') || root;
  document.querySelectorAll('.eb-ns-suite').forEach(function(su){ su.querySelectorAll('.ens-s').forEach(function(s){ zone.appendChild(s); }); su.style.display = 'none'; });

  function teinte(t){ var a = REGLAGES.barreDebut, b = REGLAGES.barreFin; return 'rgb(' + [0, 1, 2].map(function(i){ return Math.round(a[i] + (b[i] - a[i]) * t); }).join(',') + ')'; }
  // la bande reste claire longtemps et ne fonce vraiment qu'à la fin : les mots restent lisibles partout
  function tBande(x){ return x; }
  // texte noir ou clair : on garde celui qui se lit le mieux sur cette partie de la bande
  function sombre(t){
    var a = REGLAGES.barreDebut, b = REGLAGES.barreFin;
    var L = .2126 * Math.pow((a[0] + (b[0] - a[0]) * t) / 255, 2.2) + .7152 * Math.pow((a[1] + (b[1] - a[1]) * t) / 255, 2.2) + .0722 * Math.pow((a[2] + (b[2] - a[2]) * t) / 255, 2.2);
    return (L + .05) / .056 < 1.0 / (L + .05) * .98;
  }
  var CSS = ""
  + "#eb-ns{animation:none;opacity:0 !important;transition:opacity .3s ease}"
  + "#eb-ns.ens-vu{opacity:1 !important}"
  + "#eb-ns{font-family:'Montserrat',sans-serif;color:#111;max-width:none;margin:0 auto;padding:0 0 70px;text-align:center}"
  + "#eb-ns *{box-sizing:border-box}"
  + ".ens-hd{padding:72px 20px 0;max-width:760px;margin:0 auto}"
  + ".ens-k{font-size:9.5px;letter-spacing:.3em;color:#5f5a53;font-weight:600;margin:0 0 20px;text-transform:uppercase}"
  + "#eb-ns h1{font-size:30px;font-weight:600;letter-spacing:.02em;margin:0 0 22px;line-height:1.2}"
  + ".ens-in{font-size:13px;font-weight:400;line-height:1.75;color:#2a2723;margin:0 auto}"
  // la bande des types, en dégradé Bloom → Balance, collée sous le menu
  // Bannière : la photo à droite, le texte à gauche sur la couleur du mur de la photo (sans couture)
  // photo entière (pas de zoom), à droite ; à gauche, le dégradé reprend exactement les couleurs du bord de la photo
  + ".ens-ban{position:relative;height:clamp(560px,44vw,740px);display:flex;overflow:hidden;background:linear-gradient(180deg,rgb(229,198,188) 0%,rgb(213,179,167) 10%,rgb(213,180,165) 20%,rgb(212,178,166) 30%,rgb(210,178,165) 40%,rgb(209,177,164) 50%,rgb(206,172,160) 60%,rgb(219,192,182) 70%,rgb(221,192,180) 80%,rgb(209,178,164) 90%,rgb(191,161,150) 100%)}"
  + ".ens-bimg{position:absolute;right:0;top:0;height:100%;width:auto;max-width:none;aspect-ratio:1086 / 1448;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 30%);mask-image:linear-gradient(90deg,transparent 0,#000 30%)}"
  // deux calques de photo qui se fondent l'un dans l'autre (la nouvelle photo n'apparaît qu'une fois chargée)
  + ".ens-plein{position:absolute;inset:0;z-index:1;opacity:0;transition:opacity .6s ease;pointer-events:none}"
  + ".ens-cal{position:absolute;inset:0;opacity:0;transition:opacity .6s ease}"
  + ".ens-cal.ok{opacity:1}"
  + ".ens-cal img{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover}"
  + ".ens-ban.ens-avec-photos .ens-bimg{opacity:0}"
  + ".ens-ban.ens-avec-photos{background:" + REGLAGES.fondSite + "}"   // plus de fond rosé de l'ancienne photo : le beige du site en attendant la photo
  + ".ens-cal.portrait img{left:auto;right:0;width:auto;aspect-ratio:1086 / 1448;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 30%);mask-image:linear-gradient(90deg,transparent 0,#000 30%)}"
  + ".ens-ban.ens-photo .ens-plein{opacity:1}"
  + ".ens-ban.ens-direct .ens-plein,.ens-ban.ens-direct .ens-cal{transition:none}"
  + ".ens-ban.ens-photo .ens-bt{flex:0 0 48%;max-width:48%}"
  + ".ens-bt{position:relative;z-index:2;flex:1 1 auto;max-width:calc(100% - clamp(560px,44vw,740px) * .62);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:" + REGLAGES.espaceMenu + "px 5% 0}"
  // l'ancienne image de fond du site Carrd (la « tall box ») est retirée par le code
  + ".ens-psb:before,.ens-psa:after{display:none !important}.ens-sansfond{background-image:none !important}.ens-sanspad{padding-top:0 !important}.ens-cache{display:none !important}"
  // mêmes tailles d'écriture que la bannière et le titre de la page Balance (« LES SOINS » / « BALANCE »)
  + "#eb-ns .ens-bk{font-size:11px;letter-spacing:.5em;font-weight:500;color:#2a2723;margin:0 0 16px;padding-left:.5em;text-transform:uppercase;line-height:1.4}"
  + ".ens-bn{font-size:46px;letter-spacing:.38em;font-weight:400;line-height:1.2;margin:0;padding-left:.38em;color:#000;text-transform:uppercase;transition:opacity .35s ease,transform .35s ease}"
  + ".ens-bg{width:120px;height:2px;margin:22px auto 0;background:linear-gradient(90deg,#fbfaf7,#e9e3d9 55%,#8f8676)}"
  + ".ens-bm{font-size:15px;font-weight:400;line-height:1.65;color:#1f1d1a;max-width:520px;margin:24px auto 0;transition:opacity .35s ease,transform .35s ease}"
  + ".ens-ban.change .ens-bn,.ens-ban.change .ens-bm{opacity:0;transform:translateY(6px)}"

  + ".ens-bar{margin-top:64px !important}"
  // téléphone : exactement comme la bannière Balance — photo sur toute la hauteur, fondu beige en bas (sans voile en haut : la photo garde ses couleurs), texte posé dessus
  + "@media(max-width:699px){.ens-ban{display:block;height:100vh;height:100svh;min-height:660px;max-height:900px;background:" + REGLAGES.fondSite + "}"
  +   ".ens-bimg{position:absolute;left:0;top:"+REGLAGES.photoTelephoneHaut+";width:100%;height:100%;aspect-ratio:auto;object-fit:cover;object-position:50% 50%;-webkit-mask-image:linear-gradient(180deg,#000 82%,transparent 100%);mask-image:linear-gradient(180deg,#000 82%,transparent 100%)}"
  +   ".ens-ban:after{content:'';position:absolute;left:0;right:0;bottom:0;height:28%;z-index:1;background:linear-gradient(180deg,rgba(245,244,240,0) 0%,rgba(245,244,240,.45) 40%,rgba(245,244,240,.8) 72%,rgba(245,244,240,.96) 92%,#f5f4f0 100%);transition:opacity .6s ease}"
  +   ".ens-bt{position:absolute;left:0;right:0;bottom:4%;max-width:none;margin:0;padding:0 32px;z-index:2}"
  +   ".ens-cal img,.ens-cal.portrait img{left:0;right:auto;width:100%;aspect-ratio:auto;height:62%;-webkit-mask-image:linear-gradient(180deg,#000 75%,transparent 100%);mask-image:linear-gradient(180deg,#000 75%,transparent 100%)}"
  // (telPlein : sur téléphone, la photo part du haut et descend sur telHaut de l'écran, avec un fondu très léger en bas seulement)
  // (sombreTel : sur téléphone, photo foncée sur fond noir → textes clairs)
  +   ".ens-ban.ens-sombre .ens-bn,.ens-ban.ens-sombre .ens-bm{color:#fff}#eb-ns .ens-ban.ens-sombre .ens-bk{color:#e9e3d9}.ens-ban.ens-sombre .ens-bt{text-shadow:0 1px 10px rgba(0,0,0,.55)}.ens-ban.ens-sombre .ens-bg{background:linear-gradient(90deg,#8f8676,#e9e3d9 45%,#fbfaf7)}"
  +   ".ens-cal.tp img{height:var(--ens-telh,100%);-webkit-mask-image:linear-gradient(180deg,#000 90%,transparent 100%);mask-image:linear-gradient(180deg,#000 90%,transparent 100%)}.ens-ban.ens-telplein:after{opacity:0}"
  +   ".ens-ban.ens-photo .ens-bt{max-width:none}"
  +   "#eb-ns .ens-bk{font-size:9px;color:#2a2723;margin:0 0 11px}"
  +   ".ens-bn{font-size:24px;letter-spacing:.28em;padding-left:.28em;line-height:1.3}"
  +   ".ens-bg{width:84px;margin:15px auto 18px}"
  +   ".ens-bm{font-size:13px;line-height:1.6;max-width:320px;margin:0 auto}}"
  // le titre et le texte du type sont dans la bannière : dans la section, ils restent pour Google mais ne s'affichent pas en double
  + ".ens-s>h2,.ens-s>.ens-txt{position:absolute !important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}"
  + ".ens-bar{position:sticky;top:" + REGLAGES.espaceMenu + "px;z-index:50;margin:0;background:" + REGLAGES.bande + ";box-shadow:0 10px 24px rgba(40,30,20,.06)}"
  + ".ens-tabs{display:flex;flex-wrap:wrap;gap:12px 30px;justify-content:center;padding:17px 24px 15px;white-space:nowrap}"
  + ".ens-tabs::-webkit-scrollbar{display:none}"
  + ".ens-tabs a{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#111;opacity:.72;padding-bottom:5px;border-bottom:1px solid transparent;font-weight:500;text-decoration:none;flex:0 0 auto;transition:opacity .25s ease,border-color .25s ease}"
  + ".ens-tabs a.clair{color:#f5f4f0}"
  + ".ens-tabs a:hover{opacity:1}"
  + ".ens-tabs a.on{opacity:1;border-bottom-color:currentColor;font-weight:700}"
  + ".ens-tabs a.vide{opacity:.3;pointer-events:none}"
  + "@media(max-width:1250px){.ens-tabs{column-gap:22px}.ens-tabs a{letter-spacing:.12em}}"
  + ".ens-choix{display:none;width:100%;border:0;background:none;margin:0;padding:17px 18px;cursor:pointer;font-family:inherit;font-size:14px;font-weight:400;color:#111;text-align:center}"
  + ".ens-choix b{font-weight:600}.ens-choix i{font-style:normal;margin-left:10px;font-weight:400}"
  + ".ens-drop{display:none;position:absolute;left:0;right:0;top:100%;background:" + REGLAGES.fondSite + ";padding:6px 22px 18px;box-shadow:0 18px 30px rgba(0,0,0,.1);text-align:left}"
  + ".ens-drop a{display:flex;justify-content:space-between;padding:13px 0;border-bottom:1px solid rgba(0,0,0,.08);font-size:13px;font-weight:400;color:#111;text-decoration:none}"
  + ".ens-drop a.on{font-weight:600}.ens-drop a.vide{opacity:.3;pointer-events:none}"
  + ".ens-bar.ouvert .ens-drop{display:block}"
  + "@media(max-width:699px){.ens-tabs{display:none}.ens-choix{display:block}}"
  + ".ens-gm{display:flex;gap:18px;justify-content:center;margin:28px 0 0}"
  + ".ens-gm button{background:none;border:0;padding:0 0 3px;font-family:inherit;font-size:11px;font-weight:400;color:#5f5a53;cursor:pointer;border-bottom:1px solid transparent}"
  + ".ens-gm button.on{color:#111;font-weight:500;border-bottom-color:#111}"
  + ".ens-s{display:none;position:relative;padding:40px 24px 0;max-width:1130px;margin:0 auto}"
  + ".ens-s.on{display:block;animation:ensEntre .45s ease}"
  + "@keyframes ensEntre{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}"
  + "#eb-ns h2{font-size:26px;font-weight:600;letter-spacing:.02em;margin:0 0 12px}"
  + ".ens-txt{font-size:13px;font-weight:400;line-height:1.75;color:#2a2723;max-width:560px;margin:0 auto}"
  + ".ens-phr{font-size:13px;font-weight:400;color:#111;margin:0}"
  + ".ens-vide{display:none;font-size:13px;font-weight:400;color:#2a2723;margin:40px 0 0}"
  + ".ens-grid{--col:4;--gap:30px;display:flex;flex-wrap:wrap;justify-content:center;gap:44px var(--gap);margin:36px auto 0;max-width:1080px}"
  + ".ens-grid>.ens-c{flex:0 0 calc((100% - (var(--col) - 1) * var(--gap)) / var(--col));min-width:0}"
  + "@media(max-width:899px){.ens-grid{--col:3}}"
  + "@media(max-width:599px){.ens-gm{margin-top:22px}.ens-grid{--col:2;--gap:8px;row-gap:34px}.ens-s{padding:60px 10px 0}#eb-ns h1{font-size:25px}#eb-ns h2{font-size:22px}.ens-in,.ens-txt{font-size:12.5px}}"
  + ".ens-c{display:block;text-decoration:none;color:#111;cursor:pointer}"
  + ".ens-c.off{display:none}"
  + ".ens-ph{display:block;position:relative;aspect-ratio:3 / 4;overflow:hidden;max-width:300px;margin:0 auto}"
  + ".ens-ph img{color:transparent;display:block;position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:50% 93%;opacity:0;transition:opacity .6s ease,transform .4s ease}"
  + ".ens-ph img.pret{opacity:1}"
  // bords toujours fondus : même si un écran affiche le fond de la photo un rien différent du site, aucun cadre n'apparaît
  + ".ens-ph img.pret{-webkit-mask-image:linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent),linear-gradient(180deg,transparent,#000 6%,#000 95%,transparent);-webkit-mask-composite:source-in;mask-image:linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent),linear-gradient(180deg,transparent,#000 6%,#000 95%,transparent);mask-composite:intersect}"
  + ".ens-ph img.brut{opacity:1;-webkit-mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent),linear-gradient(transparent,#000 8%,#000 92%,transparent);-webkit-mask-composite:source-in;mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent),linear-gradient(transparent,#000 8%,#000 92%,transparent);mask-composite:intersect}"
  + ".ens-c:hover .ens-ph img{transform:translateY(-3px)}"
  + ".ens-g{font-size:8.5px;letter-spacing:.28em;font-weight:600;margin:10px 0 6px;text-transform:uppercase}"
  + ".ens-g.bloom{color:#c58b74}.ens-g.balance{color:#7d8f66}"
  + "#eb-ns h3{font-size:12px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;margin:0 0 6px;line-height:1.35}"
  + ".ens-a{font-size:11px;font-weight:400;color:#2a2723;margin:0 0 6px;line-height:1.5}"
  + ".ens-p{font-size:11px;font-weight:400;margin:0}"
  // Échelle de texture : fine barre en dégradé sur le bord droit, avec un curseur carré (comme Bloom et Balance)
  + ".ens-rail{position:fixed;right:0;width:30px;z-index:45;opacity:0;pointer-events:none;transition:opacity .4s ease;touch-action:none;cursor:pointer}"
  + ".ens-rail.vu{opacity:1;pointer-events:auto}"
  + ".ens-rail .g{position:absolute;right:10px;top:0;bottom:0;width:7px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.06)}"
  + ".ens-rail .c{position:absolute;right:5px;width:17px;height:17px;margin-top:-8.5px;border:1.5px solid #000;transition:top .35s ease}"
  + ".ens-rail.glisse .c{transition:none}"
  + ".ens-rail .lab{position:absolute;right:30px;margin-top:-22px;width:max-content;max-width:min(300px,calc(100vw - 70px));white-space:nowrap;padding:9px 13px;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);font-family:'Montserrat',sans-serif;font-size:11px;font-weight:400;letter-spacing:.18em;text-transform:uppercase;color:#000;opacity:0;transform:translateX(6px);transition:opacity .35s ease,transform .35s ease,top .35s ease;pointer-events:none}"
  + ".ens-rail .lab small{display:block;font-size:10.5px;font-weight:400;letter-spacing:.05em;line-height:1.5;text-transform:none;margin-top:4px;opacity:.85;white-space:normal}"
  + ".ens-rail.lb .lab{opacity:1;transform:none}"
  + ".ens-sep{flex:0 0 100%;display:flex;align-items:center;gap:12px;margin:-14px 0 -6px;font-size:10px;letter-spacing:.22em;text-transform:uppercase;font-weight:600;color:#111}"
  + ".ens-sep i{flex:1;height:4px;display:block}"
  + ".ens-sep span:empty{display:none}"
  // Le conseil ELKHA.B : dans le même dégradé que la bande des types
  + ".ens-cons{max-width:860px;margin:76px auto 0;padding:44px 52px 46px;background:" + REGLAGES.bande + ";text-align:center}"
  + ".ens-ck{font-size:9.5px;letter-spacing:.3em;font-weight:600;text-transform:uppercase;color:#4d4943;margin:0 0 14px}"
  + ".ens-cons h3{font-size:20px !important;letter-spacing:.02em !important;text-transform:none !important;font-weight:600 !important;margin:0 0 16px !important;line-height:1.35 !important}"
  + ".ens-cons p:last-child{font-size:14px;font-weight:400;line-height:1.8;color:#1f1d1a;margin:0}"
  // La carte du Journal : toute la carte mène à l'article
  + ".ens-jr{display:grid;grid-template-columns:1fr 1fr;max-width:860px;margin:44px auto 0;background:#ece5db;text-align:left;text-decoration:none;color:#111;transition:transform .35s ease,box-shadow .35s ease}"
  + ".ens-jr:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(40,30,20,.08)}"
  + ".ens-jph{display:block;position:relative;min-height:260px;overflow:hidden}"
  + ".ens-jph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .8s ease}"
  + ".ens-jr:hover .ens-jph img{transform:scale(1.03)}"
  + ".ens-jg{display:flex;flex-direction:column;justify-content:center;padding:40px 38px}"
  + ".ens-jk{font-size:9.5px;letter-spacing:.24em;font-weight:600;text-transform:uppercase;color:#4d4943;margin:0 0 12px}"
  + ".ens-jt{font-size:21px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;line-height:1.3;margin:0 0 10px}"
  + ".ens-ja{font-size:13.5px;font-weight:400;line-height:1.7;color:#1f1d1a;margin:0 0 22px}"
  + ".ens-jl{align-self:flex-start;font-size:10px;letter-spacing:.22em;font-weight:600;text-transform:uppercase;border-bottom:1px solid #111;padding-bottom:3px}"
  // Page « Vos besoins » : les routines qui correspondent (Bloom et Balance côte à côte) et le petit bloc Skin ID
  + ".ens-rts{max-width:860px;margin:76px auto 0}"
  + ".ens-rts>.ens-ck{text-align:center;margin-bottom:22px}"
  + ".ens-rtl{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px}"
  + ".ens-rc{display:flex;flex-direction:column;align-items:center;text-align:center;text-decoration:none;color:#111;padding:26px 22px 30px;background:" + REGLAGES.fondSite + ";border:1px solid #e3dccf;transition:transform .35s ease}"
  + ".ens-rc:hover{transform:translateY(-3px)}"
  + ".ens-rph{display:block;width:100%;max-width:300px;aspect-ratio:4 / 3;margin:0 0 18px}"
  + ".ens-rph img{width:100%;height:100%;object-fit:contain;display:block}"
  + ".ens-rc .ens-g{margin:0 0 6px}"
  + ".ens-rc h3{margin:0 0 8px !important}"
  + ".ens-rcs{font-size:12px;font-weight:400;line-height:1.6;color:#2a2723;margin:0 0 8px}"
  + ".ens-rc .ens-p{margin:0 0 16px}"
  + ".ens-rcl{font-size:10px;letter-spacing:.22em;font-weight:600;text-transform:uppercase;border-bottom:1px solid #111;padding-bottom:3px}"
  + ".ens-sk{max-width:560px;margin:80px auto 0;text-align:center}"
  + ".ens-sk h3{font-size:19px !important;letter-spacing:.02em !important;text-transform:none !important;font-weight:500 !important;margin:0 0 10px !important}"
  + ".ens-sk p:not(.ens-ck){font-size:13.5px;font-weight:400;line-height:1.7;color:#2a2723;margin:0 0 22px}"
  + ".ens-skb{display:inline-block;background:#111;color:#f5f4f0;font-size:10px;letter-spacing:.22em;font-weight:600;text-transform:uppercase;padding:15px 26px;text-decoration:none;cursor:pointer;border:0;font-family:inherit}"
  + "@media(max-width:699px){.ens-rts{margin-top:60px}.ens-rtl{gap:12px}.ens-rph{max-width:230px}.ens-sk{margin-top:60px;padding:0 14px}}"
  + "@media(max-width:699px){.ens-cons{margin-top:60px;padding:34px 24px 36px}.ens-cons h3{font-size:17px !important}.ens-cons p:last-child{font-size:13.5px}.ens-jr{grid-template-columns:1fr;margin-top:30px}.ens-jph{min-height:200px}.ens-jg{padding:28px 24px 30px}.ens-jt{font-size:18px}}";
  var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);

  var ban = root.querySelector('.ens-ban');
  // calque de la photo propre au type (posé au-dessus de la photo de l'embed, sous le texte)
  var plein = null, cals = [], calA = 0, nPhoto = 0;
  if(ban && Object.keys(PHOTOS_TYPES).length){
    plein = document.createElement('div'); plein.className = 'ens-plein';
    plein.innerHTML = '<div class="ens-cal"><img alt="" decoding="async"></div><div class="ens-cal"><img alt="" decoding="async"></div>';
    cals = [].slice.call(plein.children);
    var bt0 = ban.querySelector('.ens-bt'); ban.insertBefore(plein, bt0 || null);
    ban.classList.add('ens-avec-photos');
    // les autres photos se chargent en avance, discrètement, une fois la page prête
    window.addEventListener('load', function(){ var tel = window.innerWidth < 700; Object.keys(PHOTOS_TYPES).forEach(function(k){ var q = PHOTOS_TYPES[k], im = new Image(); im.decoding = 'async'; im.src = (tel && q.photoTel) || q.photo; }); });
  }
  function reglerCalque(cal, p, tel){
    var img = cal.firstChild;
    cal.classList.toggle('portrait', !!p.portrait);
    cal.classList.toggle('tp', !!p.telPlein);
    if(p.telHaut) cal.style.setProperty('--ens-telh', p.telHaut); else cal.style.removeProperty('--ens-telh');
    cal.style.background = tel ? (p.sombreTel ? '#111' : REGLAGES.fondSite) : (p.fond || REGLAGES.fondSite);
    img.style.objectPosition = tel ? (p.cadrageTel || p.cadrage || '50% 50%') : (p.cadrage || '50% 50%');
    img.alt = p.alt || '';
  }
  // change la photo du type : la nouvelle photo est chargée en coulisse, puis photo + textes changent ensemble
  function photoType(type, direct, pret, attente){
    pret = pret || function(){};
    if(!plein){ pret(); return; }
    var p = PHOTOS_TYPES[type], n = ++nPhoto, tel = window.innerWidth < 700;
    function appliquer(){
      ban.classList.toggle('ens-telplein', !!(p && p.telPlein));
      ban.classList.toggle('ens-sombre', !!(p && p.sombreTel));
      ban.classList.toggle('ens-photo', !!p);
    }
    if(!p){ cals.forEach(function(c){ c.classList.remove('ok'); }); appliquer(); pret(); return; }
    var url = (tel && p.photoTel) || p.photo, actif = cals[calA];
    if(actif.getAttribute('data-u') === url && actif.classList.contains('ok')){ reglerCalque(actif, p, tel); appliquer(); pret(); return; }
    var suivant = cals[1 - calA], img = suivant.firstChild, tMin = Date.now() + (attente || 0), fait = false;
    suivant.classList.remove('ok'); suivant.style.zIndex = 1; actif.style.zIndex = 2;
    reglerCalque(suivant, p, tel); suivant.setAttribute('data-u', url);
    function montrer(){
      if(fait || n !== nPhoto) return;
      var reste = tMin - Date.now(); if(reste > 0){ setTimeout(montrer, reste); return; }
      fait = true;
      if(direct){ ban.classList.add('ens-direct'); setTimeout(function(){ ban.classList.remove('ens-direct'); }, 60); }
      suivant.style.zIndex = 2; actif.style.zIndex = 1;
      suivant.classList.add('ok'); appliquer(); calA = cals.indexOf(suivant);
      setTimeout(function(){ if(cals[calA] !== actif) actif.classList.remove('ok'); }, 700);
      pret();
    }
    img.onload = function(){ if(img.decode) img.decode().then(montrer, montrer); else montrer(); };
    img.onerror = montrer;
    if(img.getAttribute('src') !== url) img.src = url; else if(img.complete && img.naturalWidth) img.onload();
    setTimeout(montrer, 1500);   // sécurité : si la photo tarde (réseau lent), on n'attend pas plus
  }
  // toute la page « Nos soins » prend la largeur de l'écran et se centre, quelle que soit la mise en page Carrd
  // glissement en cours d'une animation Carrd (apparition qui glisse) : on le retire des mesures, sinon la page se cale de travers
  function glissement(el){
    var x = 0, y = 0;
    for(var e = el.parentElement; e && e !== document.documentElement; e = e.parentElement){
      var t = getComputedStyle(e).transform, m = t && t !== 'none' && t.match(/matrix\(([^)]+)\)/);
      if(m){ var v = m[1].split(','); x += parseFloat(v[4]) || 0; y += parseFloat(v[5]) || 0; }
    }
    return { x: x, y: y };
  }
  function bordABord(){
    root.style.width = ''; root.style.marginLeft = ''; root.style.maxWidth = 'none';
    var g = root.getBoundingClientRect().left - glissement(root).x;
    root.style.width = document.documentElement.clientWidth + 'px'; root.style.marginLeft = (-g) + 'px';
  }
  bordABord(); setTimeout(bordABord, 400);

  // Carrd : on retire l'ancienne bannière en fond de site et l'espace qu'elle réservait, la bannière monte sous le menu
  function nettoyerFond(){
    var url = /url\(/, anc = [document.documentElement, document.body];
    for(var e = root.parentElement; e && e !== document.body; e = e.parentElement) anc.push(e);
    anc.forEach(function(el){
      ['::before', '::after'].forEach(function(ps, k){ var cs = getComputedStyle(el, ps); if(cs.content !== 'none' && url.test(cs.backgroundImage)) el.classList.add(k ? 'ens-psa' : 'ens-psb'); });
      if(url.test(getComputedStyle(el).backgroundImage)) el.classList.add('ens-sansfond');
      if(el !== document.documentElement && el !== document.body && parseFloat(getComputedStyle(el).paddingTop) > window.innerHeight * .12) el.classList.add('ens-sanspad');
    });
    // une grande image de fond posée à part (calque fixe de Carrd)
    document.querySelectorAll('body > *').forEach(function(el){
      if(el.contains(root) || el.id === 'eb-ns') return;
      var cs = getComputedStyle(el);
      if((cs.position === 'fixed' || cs.position === 'absolute') && url.test(cs.backgroundImage) && el.offsetWidth > window.innerWidth * .6) el.classList.add('ens-cache');
    });
    // mise en page Carrd « en deux colonnes » (contenu d'un côté, image de l'autre) : le contenu reprend toute la largeur
    var W = document.documentElement.clientWidth;
    for(var c = root.parentElement; c && c !== document.body; c = c.parentElement){
      var parent = c.parentElement; if(!parent) break;
      var autre = false;
      [].forEach.call(parent.children, function(f){
        if(f === c || /^(SCRIPT|STYLE|LINK|NOSCRIPT)$/.test(f.tagName) || f.classList.contains('ens-cache')) return;
        var vide = !f.textContent.trim() && !f.querySelector('img,video,iframe,svg,canvas');
        var r = f.getBoundingClientRect();
        if(vide && r.width > W * .2 && r.height > window.innerHeight * .3){ f.classList.add('ens-cache'); autre = true; }
      });
      if(autre){
        c.style.setProperty('width', '100%', 'important'); c.style.setProperty('max-width', 'none', 'important');
        c.style.setProperty('flex', '1 1 100%', 'important'); c.style.setProperty('margin-left', '0', 'important'); c.style.setProperty('margin-right', '0', 'important');
      }
    }
    // il reste un vide entre le menu et la bannière ? la bannière remonte
    if(!ban) return;
    var bloc = ban; bloc.style.marginTop = '';
    // la bannière monte tout en haut, derrière le menu transparent (comme sur les autres sites)
    var ecart = ban.getBoundingClientRect().top - glissement(ban).y + window.scrollY;
    if(ecart > 4 && ecart < window.innerHeight * .8 && !quelqueChoseAuDessus()) bloc.style.marginTop = (-ecart) + 'px';

  }
  function quelqueChoseAuDessus(){
    var tous = document.body.querySelectorAll('img, video, p, h1, h2, h3, a, button, iframe');
    for(var i = 0; i < tous.length; i++){
      var el = tous[i]; if(root.contains(el)) continue;
      if(!(el.compareDocumentPosition(root) & Node.DOCUMENT_POSITION_FOLLOWING)) continue;
      var cs = getComputedStyle(el); if(cs.position === 'fixed' || cs.display === 'none' || cs.visibility === 'hidden') continue;
      var f = el; while(f && f !== document.body){ if(getComputedStyle(f).position === 'fixed') break; f = f.parentElement; } if(f && f !== document.body) continue;
      var r = el.getBoundingClientRect(); if(r.width > 2 && r.height > 2 && r.bottom + window.scrollY <= ban.getBoundingClientRect().top + window.scrollY + 2) return true;
    }
    return false;
  }
  try { nettoyerFond(); } catch(err){}
  setTimeout(function(){ try { nettoyerFond(); bordABord(); } catch(err){} }, 500);
  window.addEventListener('load', function(){ try { nettoyerFond(); bordABord(); } catch(err){} });
  // à la fin d'une animation Carrd sur un bloc qui contient la page : on recale (bord à bord, sous le menu)
  ['animationend', 'transitionend'].forEach(function(ev){ document.addEventListener(ev, function(e){ var t = e.target; if(t && t.nodeType === 1 && t !== root && t.contains(root)){ try { nettoyerFond(); bordABord(); } catch(err){} } }, true); });
  var secs = [].slice.call(root.querySelectorAll('.ens-s'));
  secs.forEach(function(s){ s.querySelectorAll('.ens-c').forEach(function(c){ var im = c.querySelector('img'); if(im) im.setAttribute('data-g', c.getAttribute('data-gamme')); }); });

  // ── Prix toujours à jour (ceux des fiches, quand elles sont chargées) ──
  function majPrix(){
    var P = window.EB_PRODUITS || {};
    root.querySelectorAll('.ens-c,.ens-rc').forEach(function(c){
      var d = P[c.getAttribute('data-fiche')], el = c.querySelector('.ens-prix');
      if(d && d.prix && el) el.textContent = d.prix.replace(/\s*€/, ' €');
    });
  }

  // ── Barres de texture : sous chaque rangée, de plus en plus foncées ──
  function barres(){
    secs.forEach(function(s){
      var grid = s.querySelector('.ens-grid'); if(!grid) return;
      grid.querySelectorAll('.ens-sep').forEach(function(x){ x.remove(); });
      var cartes = [].filter.call(grid.querySelectorAll('.ens-c'), function(c){ return !c.classList.contains('off'); });
      s.setAttribute('data-n', cartes.length);
      var deb = s.getAttribute('data-debut'), fin = s.getAttribute('data-fin');
      if(REGLAGES.typesSansEchelle.indexOf(s.getAttribute('data-type')) > -1) deb = null;
      var phr = s.querySelector('.ens-phr'); if(phr) phr.style.display = (deb && cartes.length > 1) ? '' : 'none';
      // le filtre Bloom / Balance n'a de sens que si les deux gammes sont présentes dans ce type
      var gammes = {}; grid.querySelectorAll('.ens-c').forEach(function(c){ gammes[c.getAttribute('data-gamme')] = 1; });
      s.setAttribute('data-total', grid.querySelectorAll('.ens-c').length);
      s.setAttribute('data-gammes', Object.keys(gammes).length);
    });
    var sOn = root.querySelector('.ens-s.on') || document.getElementById('ens-' + actuel);
    var deux = !!(sOn && +sOn.getAttribute('data-gammes') > 1);
    root.querySelectorAll('.ens-gm').forEach(function(g){ g.style.display = deux ? '' : 'none'; });
    if(window.ebNsEchelle) window.ebNsEchelle();
    root.querySelectorAll('.ens-tabs a').forEach(function(a){
      var s = document.getElementById('ens-' + a.getAttribute('data-type'));
      a.classList.toggle('vide', !!(s && s.getAttribute('data-total') === '0'));
    });
  }

  // Titre du type : même taille que « BALANCE » ; un mot trop long pour la largeur (DÉMAQUILLANTS…) est réduit juste ce qu'il faut
  function ajusterTitre(){
    var bn = ban && ban.querySelector('.ens-bn'); if(!bn) return;
    bn.style.fontSize = '';
    var cs = getComputedStyle(bn), base = parseFloat(cs.fontSize);
    var pc = getComputedStyle(bn.parentNode), W = bn.parentNode.clientWidth - parseFloat(pc.paddingLeft) - parseFloat(pc.paddingRight) - parseFloat(cs.paddingLeft) - 2; if(W <= 0) return;
    var m = document.createElement('span'); m.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;left:0;top:0';
    bn.appendChild(m); var max = 0;
    bn.firstChild.textContent.split(/\s+/).forEach(function(w){ m.textContent = w; max = Math.max(max, m.getBoundingClientRect().width); });
    bn.removeChild(m);
    if(max > W) bn.style.fontSize = Math.max(18, Math.floor(base * W / max * 10) / 10) + 'px';
  }

  // ── Un type à la fois, comme une page à part ──
  var bar = root.querySelector('.ens-bar'), actuel = '';
  var choix = document.createElement('button'); choix.type = 'button'; choix.className = 'ens-choix'; choix.setAttribute('aria-expanded', 'false');
  var drop = document.createElement('div'); drop.className = 'ens-drop';
  root.querySelectorAll('.ens-tabs a').forEach(function(a){ var b = document.createElement('a'); b.href = a.getAttribute('href'); b.setAttribute('data-type', a.getAttribute('data-type')); b.textContent = a.textContent; drop.appendChild(b); });
  if(bar){ bar.appendChild(choix); bar.appendChild(drop); }
  function ouvrirListe(o){ bar.classList.toggle('ouvert', o); choix.setAttribute('aria-expanded', o ? 'true' : 'false'); var i = choix.querySelector('i'); if(i) i.textContent = o ? '−' : '+'; }
  choix.addEventListener('click', function(){ ouvrirListe(!bar.classList.contains('ouvert')); });
  document.addEventListener('click', function(e){ if(bar && !bar.contains(e.target)) ouvrirListe(false); });
  drop.addEventListener('click', function(e){ var a = e.target.closest('a'); if(!a) return; e.preventDefault(); ouvrirListe(false); var t = a.getAttribute('data-type'); afficher(t, true); try { history.replaceState(null, '', '?' + PARAM + '=' + t); } catch(err){} });
  // chaque onglet prend la couleur lisible sur sa partie de la bande (noir sur le clair, beige sur le foncé)
  function colorer(){
    if(!bar) return; root.querySelectorAll('.ens-tabs a').forEach(function(a){ a.classList.remove('clair'); }); choix.style.color = ''; return;   // bande claire : texte noir partout
 var W = bar.clientWidth || 1, nav = root.querySelector('.ens-tabs');
    root.querySelectorAll('.ens-tabs a').forEach(function(a){ var x = a.offsetLeft - (nav ? nav.scrollLeft : 0) + a.offsetWidth / 2; a.classList.toggle('clair', sombre(tBande(Math.max(0, Math.min(1, x / W))))); });
    if(sombre(tBande(.5))){ choix.style.color = REGLAGES.fondSite; } else choix.style.color = '';
  }
  var navT = root.querySelector('.ens-tabs'); if(navT) navT.addEventListener('scroll', colorer, { passive: true });
  // le filtre Bloom / Balance revient sur « Tout voir » (tout montrer)
  function filtreTout(){
    root.querySelectorAll('.ens-c.off').forEach(function(c){ c.classList.remove('off'); });
    var bs = root.querySelectorAll('.ens-gm button');
    bs.forEach(function(x){ x.classList.toggle('on', !x.getAttribute('data-g')); });
  }
  function afficher(type, defiler){
    var s = document.getElementById('ens-' + type);
    // nouveau type, ou plus aucun soin avec le filtre choisi : on repart de « Tout voir » (jamais de saut vers un autre type)
    if(s && (type !== actuel || s.getAttribute('data-n') === '0') && root.querySelector('.ens-c.off')){ filtreTout(); barres(); }
    if(!s || s.getAttribute('data-total') === '0'){ s = secs.filter(function(x){ return x.getAttribute('data-n') !== '0'; })[0]; if(!s) return; type = s.getAttribute('data-type'); }
    actuel = type;
    secs.forEach(function(x){ x.classList.toggle('on', x === s); });
    root.querySelectorAll('.ens-tabs a').forEach(function(a){
      var on = a.getAttribute('data-type') === type; a.classList.toggle('on', on);
      if(on){ var t = a.parentNode; if(t.scrollWidth > t.clientWidth) t.scrollTo({ left: a.offsetLeft - t.clientWidth / 2 + a.offsetWidth / 2, behavior: 'smooth' }); }
    });
    barres();
    var nomT = (root.querySelector('.ens-tabs a[data-type="' + type + '"]') || {}).textContent || '';
    if(ban){
      var bn = ban.querySelector('.ens-bn'), bm = ban.querySelector('.ens-bm'), txt = (s.querySelector('.ens-txt') || {}).textContent || '';
      var nouveau = bn && bn.textContent !== nomT, premier = bn && !bn.textContent;
      if(nouveau && !premier) ban.classList.add('change');   // les textes s'effacent pendant que la photo se prépare
      photoType(type, !defiler, function(){
        if(actuel !== type) return;
        if(nouveau){ bn.textContent = nomT; if(bm) bm.textContent = txt; }
        ajusterTitre(); ban.classList.remove('change');       // photo et textes arrivent ensemble
        root.classList.add('ens-vu');                          // à l'arrivée : la page apparaît avec sa photo déjà prête
      }, nouveau && !premier ? 350 : 0);
    } else { photoType(type, !defiler); }
    choix.innerHTML = esc(LIBELLE) + ' : <b>' + esc(nomT) + '</b><i>+</i>';
    drop.querySelectorAll('a').forEach(function(a){ a.classList.toggle('on', a.getAttribute('data-type') === type); var o = root.querySelector('.ens-tabs a[data-type="' + a.getAttribute('data-type') + '"]'); a.classList.toggle('vide', !!(o && o.classList.contains('vide'))); });
    colorer();
    s.querySelectorAll('.ens-ph img').forEach(function(im){ if(!im.getAttribute('data-vu')){ im.setAttribute('data-vu', '1'); retravailler(im); } });
    // nouveau type = comme une nouvelle page : on remonte en douceur jusqu'à la bannière, qui affiche le nouveau titre
    if(defiler){
      var haut = ban ? window.scrollY + ban.getBoundingClientRect().top - REGLAGES.espaceMenu : 0;
      if(Math.abs(window.scrollY - haut) > 4) window.scrollTo({ top: Math.max(0, haut), behavior: 'smooth' });
    }
  }
  root.querySelectorAll('.ens-tabs a').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault(); var t = a.getAttribute('data-type'); afficher(t, true);
      try { history.replaceState(null, '', '?' + PARAM + '=' + t); } catch(err){}
    });
  });

  // ── Filtre Tout voir / Bloom / Balance ──
  root.querySelectorAll('.ens-gm button').forEach(function(b){
    b.addEventListener('click', function(){
      var g = b.getAttribute('data-g');
      root.querySelectorAll('.ens-gm button').forEach(function(x){ x.classList.toggle('on', x === b); });
      root.querySelectorAll('.ens-c').forEach(function(c){ c.classList.toggle('off', !!g && c.getAttribute('data-gamme') !== g); });
      barres(); afficher(actuel, false);
    });
  });

  // ── Menu « Nos soins » : déjà sur cette page, « Sérums »… change de type sans recharger ──
  // (écouté sur la fenêtre, avant le panier : sinon le panier rechargeait toute la page pour y glisser ses informations)
  window.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href*="?' + PARAM + '="]'); if(!a || root.contains(a)) return;
    if(e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;   // nouvel onglet : on laisse faire
    try { var u = new URL(a.href, location.href); } catch(err){ return; }
    if(u.hostname !== location.hostname || u.pathname !== location.pathname) return;
    var t = u.searchParams.get(PARAM); if(!t || !document.getElementById('ens-' + t)) return;
    e.preventDefault();
    var voile = document.querySelector('.ebm-voile.on'); if(voile) voile.click();   // le menu se referme
    afficher(t, true);
    try { history.replaceState(null, '', '?' + PARAM + '=' + t); } catch(err){}
  }, true);

  // ── Bouton Skin ID ──
  root.addEventListener('click', function(e){
    var b = e.target.closest && e.target.closest('.ens-skb'); if(!b) return;
    if(typeof window.ebDiagOpen === 'function'){ e.preventDefault(); window.ebDiagOpen(); }
  });

  // ── Fiches : elles s'ouvrent ici même ──
  root.addEventListener('click', function(e){
    var c = e.target.closest && e.target.closest('.ens-c,.ens-rc'); if(!c) return;
    var id = c.getAttribute('data-fiche');
    if(typeof window.ebFicheOpen === 'function' && window.EB_PRODUITS && window.EB_PRODUITS[id]){ e.preventDefault(); window.ebFicheOpen(id); }
  });
  function charger(i){
    if(i >= REGLAGES.fichiers.length){ majPrix(); return; }
    var f = REGLAGES.fichiers[i];
    if(document.querySelector('script[src*="' + f + '"]')){ charger(i + 1); return; }
    // on garde les fiches déjà présentes (ex. Balance) : le fichier Bloom ne doit jamais les effacer
    var avant = window.EB_PRODUITS;
    var s = document.createElement('script'); s.src = REGLAGES.base + f;
    s.onload = s.onerror = function(){ var P = window.EB_PRODUITS; if(avant && P && avant !== P){ for(var k in avant){ if(!(k in P)) P[k] = avant[k]; } } if(i < 2) majPrix(); charger(i + 1); };
    document.body.appendChild(s);
  }
  charger(0);

  // ── Photos : fondues dans le fond du site, même échelle, même ligne de sol ──
  var FONDSITE = (function(c){ c = c.replace('#', ''); return [0, 2, 4].map(function(i){ return parseInt(c.substr(i, 2), 16); }); })(REGLAGES.fondSite);
  var CW = 600, CH = 800, SOL = CH * .93, PXCM = CH * .84 / 16;
  function couleur(c){ c = (c || '').replace('#', ''); return c.length === 6 ? [0, 2, 4].map(function(i){ return parseInt(c.substr(i, 2), 16); }) : null; }
  // Modèle du fond (polynôme de degré 3 en x et y, par couleur), mesuré sur les points de fond uniquement
  function aplanir(p, w, h, FOND){
    var pas = Math.max(4, Math.round(Math.min(w, h) / 90)), T = [], V = [[], [], []];
    function termes(u, v){ return [1, u, v, u * u, u * v, v * v, u * u * u, u * u * v, u * v * v, v * v * v]; }
    for(var y = 0; y < h; y += pas) for(var xx = 0; xx < w; xx += pas){
      var i = (y * w + xx) * 4;
      if(Math.max(Math.abs(p[i] - FOND[0]), Math.abs(p[i + 1] - FOND[1]), Math.abs(p[i + 2] - FOND[2])) > 16) continue;   // flacon, ombre : ignorés
      T.push(termes(xx / w * 2 - 1, y / h * 2 - 1)); V[0].push(p[i]); V[1].push(p[i + 1]); V[2].push(p[i + 2]);
    }
    if(T.length < 60) return;
    var n = 10, coefs = [];
    for(var c = 0; c < 3; c++){
      var A = [], k, j, l;
      for(k = 0; k < n; k++){ A.push(new Array(n + 1).fill(0)); }
      for(var t = 0; t < T.length; t++){ var r = T[t]; for(k = 0; k < n; k++){ for(j = 0; j < n; j++) A[k][j] += r[k] * r[j]; A[k][n] += r[k] * V[c][t]; } }
      for(k = 0; k < n; k++) A[k][k] += 1e-6;
      for(k = 0; k < n; k++){   // élimination de Gauss
        var piv = k; for(j = k + 1; j < n; j++) if(Math.abs(A[j][k]) > Math.abs(A[piv][k])) piv = j;
        var tmp = A[k]; A[k] = A[piv]; A[piv] = tmp; if(Math.abs(A[k][k]) < 1e-12) return;
        for(j = k + 1; j < n; j++){ var f = A[j][k] / A[k][k]; for(l = k; l <= n; l++) A[j][l] -= f * A[k][l]; }
      }
      var x0 = new Array(n).fill(0);
      for(k = n - 1; k >= 0; k--){ var sm = A[k][n]; for(j = k + 1; j < n; j++) sm -= A[k][j] * x0[j]; x0[k] = sm / A[k][k]; }
      coefs.push(x0);
    }
    for(var y2 = 0; y2 < h; y2++){
      var v2 = y2 / h * 2 - 1;
      for(var x2 = 0; x2 < w; x2++){
        var tt = termes(x2 / w * 2 - 1, v2), i2 = (y2 * w + x2) * 4;
        for(var c2 = 0; c2 < 3; c2++){
          var fond = 0, cf = coefs[c2]; for(var q = 0; q < n; q++) fond += cf[q] * tt[q];
          if(fond > 40) p[i2 + c2] = Math.max(0, Math.min(255, p[i2 + c2] * FOND[c2] / fond));
        }
      }
    }
  }
  function retravailler(img){
    var s = { hauteur: parseFloat(img.getAttribute('data-h')) || 0 }, url = src(brute(img), 700), bloom = img.getAttribute('data-g') === 'bloom';
    var FOND = couleur(img.getAttribute('data-fond')) || FONDSITE;
    var secours = setTimeout(function(){ img.classList.add('brut'); }, 12000);
    fetch(url, { mode: 'cors' }).then(function(r){ if(!r.ok) throw 0; return r.blob(); })
    .then(function(b){ return createImageBitmap(b); })
    .then(function(bmp){
      var w = bmp.width, h = bmp.height, c = document.createElement('canvas'); c.width = w; c.height = h;
      var x = c.getContext('2d'); x.drawImage(bmp, 0, 0);
      var d = x.getImageData(0, 0, w, h), p = d.data, i, k;
      // 1. couleur du fond de la photo (bords du haut et des côtés)
      var ech = [[], [], []];
      function prendre(px, py){ var j = (py * w + px) * 4; ech[0].push(p[j]); ech[1].push(p[j + 1]); ech[2].push(p[j + 2]); }
      for(k = 0; k < w; k += 4){ prendre(k, 2); prendre(k, 5); }
      for(k = 0; k < h / 4; k += 4){ prendre(2, k | 0); prendre(w - 3, k | 0); }
      var F = ech.map(function(a, n){ a.sort(function(u, v){ return u - v; }); return FOND[n] / (a[a.length >> 1] || 255); });
      // 2. le fond de la photo devient exactement celui du site
      for(i = 0; i < p.length; i += 4){ p[i] = Math.min(255, p[i] * F[0]); p[i + 1] = Math.min(255, p[i + 1] * F[1]); p[i + 2] = Math.min(255, p[i + 2] * F[2]); }
      // 2 bis. fond uniforme : les photos de studio ont souvent un halo plus clair ou un dégradé derrière le flacon.
      //        On mesure ce fond partout (hors flacon et ombre), on le modélise, puis on le ramène partout au beige exact du site.
      aplanir(p, w, h, FOND);
      x.putImageData(d, 0, 0);
      // 3. repérer le soin (colonnes hautes ; l'ombre au sol, plate, est ignorée)
      var col = new Uint32Array(w), dif = new Uint8Array(w * h);
      for(var y = 0; y < h; y++) for(var xx = 0; xx < w; xx++){
        i = (y * w + xx) * 4;
        if(Math.max(Math.abs(p[i] - FOND[0]), Math.abs(p[i + 1] - FOND[1]), Math.abs(p[i + 2] - FOND[2])) > 10){ dif[y * w + xx] = 1; col[xx]++; }
      }
      var x0 = -1, x1 = -1;
      // le flacon = les colonnes nettement différentes du fond (une ombre douce n'est pas prise pour le flacon)
      var fort = new Uint32Array(w);
      for(var y3 = 0; y3 < h; y3++) for(var x3 = 0; x3 < w; x3++){ i = (y3 * w + x3) * 4; if(Math.max(Math.abs(p[i] - FOND[0]), Math.abs(p[i + 1] - FOND[1]), Math.abs(p[i + 2] - FOND[2])) > 40) fort[x3]++; }
      for(xx = 0; xx < w; xx++) if(fort[xx] > h * .08){ if(x0 < 0) x0 = xx; x1 = xx; }
      if(x0 < 0 || x1 - x0 < w * .1){ x0 = x1 = -1; for(xx = 0; xx < w; xx++) if(col[xx] > h * .12){ if(x0 < 0) x0 = xx; x1 = xx; } }
      var y0 = -1, y1 = -1;
      if(x0 >= 0 && x1 - x0 > w * .1){
        var seuil = Math.max(2, (x1 - x0) * .04);
        for(y = 0; y < h; y++){ var n = 0; for(xx = x0; xx <= x1; xx++) n += dif[y * w + xx]; if(n >= seuil){ if(y0 < 0) y0 = y; y1 = y; } }
        // le pied du soin = dernière ligne vraiment pleine (le reflet sous le flacon ne compte pas)
        if(y0 >= 0){
          var yb = y1, plein = (x1 - x0) * .5;
          while(yb > y0){ var m = 0; for(xx = x0; xx <= x1; xx++) m += dif[yb * w + xx]; if(m >= plein) break; yb--; }
          if(y1 - yb > (y1 - y0) * .03) y1 = yb;
        }
      }
      // 4. bords fondus (l'ombre s'efface doucement au lieu d'être coupée)
      x.globalCompositeOperation = 'destination-in';
      //    seulement AUTOUR du flacon : le flacon lui-même n'est jamais rendu transparent (pas de halo blanc sur ses bords)
      var fg = .14, fd = .86, fh = .08, fb = .92;
      if(x0 >= 0){ var mg = (x1 - x0) * .1 + 4; fg = Math.min(.14, Math.max(0, (x0 - mg) / w)); fd = Math.max(.86, Math.min(1, (x1 + mg) / w)); }
      if(y0 >= 0){ fh = Math.min(.08, Math.max(0, (y0 - 3) / h)); fb = Math.max(.92, Math.min(1, (y1 + 3) / h)); }
      // photos Bloom (cadrées serré, fond moins régulier) : bords toujours fondus, comme sur la page Bloom
      // les ombres touchent parfois le bord de la photo : on fond le plus loin possible, jusqu'au flacon
      if(true){   // toutes les photos : l'ombre s'efface progressivement jusqu'au flacon, jamais coupée net
        var mb = x0 >= 0 ? (x1 - x0) * .06 + 4 : 0;
        fg = x0 >= 0 ? Math.min(.45, Math.max(.02, (x0 - mb) / w)) : .14;
        fd = x0 >= 0 ? Math.max(.55, Math.min(.98, (x1 + mb) / w)) : .86;
        fh = y0 >= 0 ? Math.min(.3, Math.max(.02, (y0 - 6) / h)) : .08;
        fb = y1 >= 0 ? Math.min(1, Math.max((y1 + 3) / h, .9, Math.min(.97, (y1 + (h - y1) * .25) / h))) : .92;
      }
      var g = x.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, fg > .001 ? 'rgba(0,0,0,0)' : '#000'); g.addColorStop(fg, '#000'); g.addColorStop(fd, '#000'); g.addColorStop(1, fd < .999 ? 'rgba(0,0,0,0)' : '#000');
      x.fillStyle = g; x.fillRect(0, 0, w, h);
      g = x.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, fh > .001 ? 'rgba(0,0,0,0)' : '#000'); g.addColorStop(fh, '#000'); g.addColorStop(fb, '#000'); g.addColorStop(1, fb < .999 ? 'rgba(0,0,0,0)' : '#000');
      x.fillStyle = g; x.fillRect(0, 0, w, h);
      // 5. cadre commun : même échelle (hauteur réelle), même ligne de sol
      var o = document.createElement('canvas'); o.width = CW; o.height = CH;
      var ox = o.getContext('2d');   // fond transparent : la photo se fond dans la page
      var sc, dx, dy;
      if(y0 >= 0 && s.hauteur && (y1 - y0) > h * .2){
        sc = s.hauteur * PXCM / (y1 - y0);
        if((x1 - x0) * sc > CW * .8) sc = CW * .8 / (x1 - x0);
        dx = CW / 2 - (x0 + x1) / 2 * sc; dy = SOL - y1 * sc;
      } else { sc = Math.min(CW / w, CH / h); dx = (CW - w * sc) / 2; dy = CH - h * sc; }
      ox.drawImage(c, dx, dy, w * sc, h * sc);
      o.toBlob(function(b){
        clearTimeout(secours);
        if(!b){ img.classList.add('brut'); return; }
        img.onload = function(){ img.classList.add('pret'); };
        img.src = URL.createObjectURL(b);
      }, 'image/png');
    })
    .catch(function(){ clearTimeout(secours); img.classList.add('brut'); });
  }


  // ── Pour Google : la liste des soins (nom, photo, prix, marque) ──
  try {
    var items = [].map.call(root.querySelectorAll('.ens-c'), function(c, i){
      var im = c.querySelector('img'), sec = c.closest('.ens-s'), prixTxt = (c.querySelector('.ens-prix') || {}).textContent || '';
      return { "@type": "ListItem", position: i + 1, item: { "@type": "Product", name: c.querySelector('h3').textContent, description: im ? im.alt : '', image: im ? brute(im) : '', category: sec ? sec.querySelector('h2').textContent : '', brand: { "@type": "Brand", name: "ELKHA.B" }, url: c.href,
        offers: { "@type": "Offer", price: prixTxt.replace(/[^0-9,]/g, '').replace(',', '.'), priceCurrency: "EUR", availability: "https://schema.org/InStock", url: c.href } } };
    });
    var ld = document.createElement('script'); ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", name: root.getAttribute("data-liste") || "Nos soins ELKHA.B", itemListElement: items });
    document.head.appendChild(ld);
  } catch(err){}

  // ── L'échelle de texture : suit la lecture, rangée par rangée, et emmène à la rangée choisie ──
  var rail = document.createElement('div'); rail.className = 'ens-rail'; rail.setAttribute('aria-hidden', 'true');
  rail.innerHTML = '<i class="g" style="background:linear-gradient(180deg,' + teinte(0) + ',' + teinte(1) + ')"></i><i class="c"></i><div class="lab"></div>';
  document.body.appendChild(rail);
  var curseur = rail.querySelector('.c'), lab = rail.querySelector('.lab');
  var HAUT_RAIL = 220, rangs = [], rActuel = -1, minuterie = null, glisse = false, secR = null;
  // les rangées de la page affichée : les vignettes visibles, regroupées par ligne
  function lireRangs(){
    rangs = []; secR = root.querySelector('.ens-s.on');
    if(!secR || !secR.getAttribute('data-debut') || REGLAGES.typesSansEchelle.indexOf(secR.getAttribute('data-type')) > -1) return;
    var cartes = [].filter.call(secR.querySelectorAll('.ens-grid .ens-c'), function(c){ return !c.classList.contains('off') && c.offsetParent; });
    var haut = null;
    cartes.forEach(function(c){ var t = c.offsetTop; if(haut === null || Math.abs(t - haut) > 20){ rangs.push([]); haut = t; } rangs[rangs.length - 1].push(c); });
    if(rangs.length < 2) rangs = [];
  }
  function noms(r){ return rangs[r].map(function(c){ var h = c.querySelector('h3'); return h ? h.textContent.trim() : ''; }).filter(Boolean).join(' · '); }
  function placer(r, montrer){
    var n = rangs.length, t = n > 1 ? r / (n - 1) : 0, pos = ((r + .5) / n * 100) + '%';
    curseur.style.top = pos; lab.style.top = pos;
    var col = teinte(t).replace('rgb(', 'rgba(').replace(')', ',.92)');
    lab.style.background = col; lab.style.color = sombre(t) ? REGLAGES.fondSite : '#111';
    var mot = r === 0 ? secR.getAttribute('data-debut') : r === n - 1 ? secR.getAttribute('data-fin') : '';
    lab.innerHTML = mot ? esc(mot) + '<small>' + esc(noms(r)) + '</small>' : '<small style="margin:0">' + esc(noms(r)) + '</small>';
    if(montrer){ rail.classList.add('lb'); clearTimeout(minuterie); if(!glisse) minuterie = setTimeout(function(){ rail.classList.remove('lb'); }, 2000); }
  }
  function suivre(){
    if(!rangs.length){ rail.classList.remove('vu'); return; }
    var barre = bar ? bar.getBoundingClientRect().bottom : REGLAGES.espaceMenu;
    rail.style.top = (Math.max(REGLAGES.espaceMenu, barre) + 16) + 'px'; rail.style.height = HAUT_RAIL + 'px';
    var rb = root.getBoundingClientRect(); rail.style.left = (rb.right - 30 - (window.innerWidth >= 900 ? 18 : 0)) + 'px'; rail.style.right = 'auto';
    var debut = rangs[0][0].getBoundingClientRect().top < window.innerHeight * .55;
    var der = rangs[rangs.length - 1][0].getBoundingClientRect();
    var visible = debut && der.bottom > barre + 40 && !(bar && bar.classList.contains('ouvert'));
    rail.classList.toggle('vu', visible);
    if(glisse) return;
    var ligne = window.innerHeight * .45, r = 0;
    rangs.forEach(function(g, k){ if(g[0].getBoundingClientRect().top < ligne) r = k; });
    if(r !== rActuel){ var avant = rActuel; rActuel = r; placer(r, visible && avant !== -1); }
  }
  window.ebNsEchelle = function(){ lireRangs(); rActuel = -1; rail.classList.remove('lb'); suivre(); };
  function rangSous(y){ var b = rail.getBoundingClientRect(), t = Math.min(1, Math.max(0, (y - b.top) / b.height)); return Math.min(rangs.length - 1, Math.floor(t * rangs.length)); }
  rail.addEventListener('pointerdown', function(e){
    if(!rangs.length) return;
    glisse = true; rail.classList.add('glisse'); try { rail.setPointerCapture(e.pointerId); } catch(err){}
    rActuel = rangSous(e.clientY); placer(rActuel, true); e.preventDefault();
  });
  rail.addEventListener('pointermove', function(e){ if(!glisse) return; var r = rangSous(e.clientY); if(r !== rActuel){ rActuel = r; placer(r, true); } });
  function lacher(){
    if(!glisse) return; glisse = false; rail.classList.remove('glisse');
    var c = rangs[rActuel] && rangs[rActuel][0];
    if(c){ var barre = bar ? bar.offsetHeight : 0; window.scrollTo({ top: window.scrollY + c.getBoundingClientRect().top - REGLAGES.espaceMenu - barre - 20, behavior: 'smooth' }); }
    clearTimeout(minuterie); minuterie = setTimeout(function(){ rail.classList.remove('lb'); }, 2000);
  }
  rail.addEventListener('pointerup', lacher); rail.addEventListener('pointercancel', lacher);
  window.addEventListener('scroll', suivre, { passive: true });
  window.addEventListener('resize', function(){ lireRangs(); suivre(); });
  window.addEventListener('load', function(){ lireRangs(); suivre(); });

  // ── Démarrage ──
  majPrix(); barres();
  var demande = (location.search.match(new RegExp('[?&]' + PARAM + '=([a-z-]+)')) || [])[1];
  afficher(demande || DEFAUT, false);
  if(!ban) root.classList.add('ens-vu');
  setTimeout(function(){ root.classList.add('ens-vu'); }, 1600);   // sécurité : la page s'affiche toujours
  var largeur = window.innerWidth;
  window.addEventListener('resize', function(){ colorer(); bordABord(); ajusterTitre(); if(window.innerWidth !== largeur){ largeur = window.innerWidth; barres(); } });
  ajusterTitre(); setTimeout(ajusterTitre, 500); if(document.fonts && document.fonts.ready) document.fonts.ready.then(ajusterTitre);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(colorer);
  }
})();
