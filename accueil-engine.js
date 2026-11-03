// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
// =====================================================================
// ELKHA.B — Page d'accueil
// Le contenu (titres, textes, photos) est écrit dans l'embed Carrd, pour que Google le lise.
// Ce fichier fait la mise en forme et les animations (photos de la bannière en fondu…).
// =====================================================================
(function(){ if(document.getElementById('eb-montserrat')) return; var l = document.createElement('link'); l.id = 'eb-montserrat'; l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap'; document.head.appendChild(l); })();
(function(){
  if(window.ebAccueil) return; window.ebAccueil = true;

  // ───────────────────────────── RÉGLAGES ─────────────────────────────
  var REGLAGES = {
    espaceMenu: 64,          // hauteur du menu fixe
    fondSite: "#f5f4f0",     // couleur exacte du fond du site
    dureePhoto: 5.5,         // secondes d'affichage de chaque photo de la bannière
    dureeFondu: 1.6,         // secondes du fondu entre deux photos
    versionPhotos: 1         // +1 si une photo remplacée dans Shopify ne se met pas à jour
  };
  // ── NE RIEN MODIFIER EN DESSOUS ──────────────────────────────────────
  var F = REGLAGES.fondSite, FR = '245,244,240';
  var CSS = ""
  + "#eb-acc{font-family:'Montserrat',sans-serif;color:#111;text-align:center;width:100%;-webkit-tap-highlight-color:transparent}"
  + "html,body{overflow-x:clip}"
  // la page reste cachée le temps que sa mise en forme arrive (pas de grandes photos en vrac au chargement)
  + "html #eb-acc.eba-pret,html #eb-acc.eba-pret>*{opacity:1;animation:none;transition:opacity .45s ease}html .eb-acc-suite{display:none}"
  + "#eb-acc *{box-sizing:border-box}#eb-acc a{color:inherit;text-decoration:none}"
  + "#eb-acc h1,#eb-acc h2,#eb-acc h3,#eb-acc p{margin:0;font-family:'Montserrat',sans-serif}"
  // ── 1. Bannière : photos en fondu, texte à gauche sur un voile du fond du site
  + ".eba-ban{position:relative;height:clamp(600px,100svh,860px);overflow:hidden;background:" + F + "}"
  + ".eba-slides img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.06);transition:opacity " + REGLAGES.dureeFondu + "s ease,transform " + (REGLAGES.dureePhoto + REGLAGES.dureeFondu * 2) + "s linear}"
  + ".eba-slides img.on{opacity:1;transform:scale(1)}"
  + ".eba-ban:after{content:'';position:absolute;z-index:1;top:0;bottom:0;left:0;width:56%;background:linear-gradient(90deg,rgba(" + FR + ",.8) 0%,rgba(" + FR + ",.62) 40%,rgba(" + FR + ",.22) 74%,rgba(" + FR + ",0) 100%);pointer-events:none}"
  + ".eba-ban:before{content:'';position:absolute;z-index:1;left:0;right:0;top:0;height:120px;background:linear-gradient(180deg,rgba(" + FR + ",.4),rgba(" + FR + ",0));pointer-events:none}"
  + ".eba-bt{position:absolute;z-index:2;left:0;top:0;bottom:0;width:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:" + REGLAGES.espaceMenu + "px 4% 0 6%}"
  + "#eb-acc .eba-bk{display:block;font-size:11px;letter-spacing:.5em;font-weight:500;color:#2a2723;margin:0 0 18px;padding-left:.5em;text-transform:uppercase;line-height:1.4}"
  + "#eb-acc .eba-bn{display:block;font-size:46px;letter-spacing:.34em;font-weight:400;line-height:1.25;padding-left:.34em;color:#000;text-transform:uppercase}"
  + ".eba-nw{white-space:nowrap}"
  + ".eba-bg{display:block;width:120px;height:2px;margin:24px auto 0;background:linear-gradient(90deg,#fbfaf7,#e9e3d9 55%,#8f8676)}"
  + "#eb-acc .eba-bm{font-size:15px;font-weight:400;line-height:1.65;color:#1f1d1a;max-width:420px;margin:24px auto 0}"
  + ".eba-btn{margin-top:34px;background:#111;color:" + F + ";border:0;font-family:'Montserrat',sans-serif;font-size:10.5px;letter-spacing:.24em;font-weight:600;text-transform:uppercase;padding:17px 30px;cursor:pointer;transition:background .3s ease}"
  + ".eba-btn:hover{background:#3a3631}"
  // petits traits : la photo affichée
  + ".eba-pts{position:absolute;z-index:2;left:0;width:50%;bottom:34px;display:flex;gap:8px;justify-content:center;padding-left:2%}"
  + ".eba-pts i{display:block;width:26px;height:2px;background:rgba(17,17,17,.18);overflow:hidden;cursor:pointer;position:relative}"
  + ".eba-pts i:after{content:'';position:absolute;inset:0;background:#111;transform:scaleX(0);transform-origin:left}"
  + ".eba-pts i.on:after{animation:ebaTrait " + REGLAGES.dureePhoto + "s linear forwards}"
  + ".eba-pts i.vu:after{transform:scaleX(1)}"
  + "@keyframes ebaTrait{to{transform:scaleX(1)}}"
  // ── 2. Les deux univers
  + ".eba-sec{padding:96px 22px 0;max-width:1180px;margin:0 auto}"
  + "#eb-acc .eba-k{font-size:10px;letter-spacing:.42em;font-weight:500;color:#2a2723;text-transform:uppercase;margin:0 0 14px;padding-left:.42em}"
  + "#eb-acc .eba-t{font-size:30px;letter-spacing:.3em;font-weight:400;text-transform:uppercase;padding-left:.3em;line-height:1.25;color:#000}"
  + ".eba-g{display:block;width:84px;height:2px;margin:18px auto 0;background:linear-gradient(90deg,#fbfaf7,#e9e3d9 55%,#8f8676)}"
  + ".eba-gam{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:1000px;margin:40px auto 0}"
  + ".eba-gc{display:flex;flex-direction:column;cursor:pointer}"
  + ".eba-ph{display:block;aspect-ratio:1 / 1;overflow:hidden;background:#ece8e1}"
  + ".eba-ph img{display:block;width:100%;height:100%;object-fit:cover;transition:transform 1.2s ease}"
  + ".eba-gc:hover .eba-ph img{transform:scale(1.035)}"
  + ".eba-bd{flex:1;display:flex;flex-direction:column;align-items:center;padding:28px 22px 30px}"
  + ".eba-bloom .eba-bd{background:linear-gradient(180deg,#f7ede6,#eedcd2)}"
  + ".eba-balance .eba-bd{background:linear-gradient(180deg,#eff0e2,#e1e5c9)}"
  + "#eb-acc .eba-nm{font-size:22px;letter-spacing:.34em;padding-left:.34em;font-weight:400;text-transform:uppercase;color:#000}"
  + ".eba-ln{display:block;width:56px;height:2px;margin:14px auto}"
  + ".eba-bloom .eba-ln{background:linear-gradient(90deg,#efe5da,#e6cbbd,#d39b82,#eb895e,#6d222a)}"
  + ".eba-balance .eba-ln{background:linear-gradient(90deg,#ebecdb,#d9ddb7,#c3cc8f,#a6b965,#85a33a)}"
  + ".eba-p{display:block;font-size:13.5px;font-weight:400;line-height:1.65;color:#2a2723;max-width:340px;margin:0 0 18px}"
  + ".eba-lien{display:inline-block;margin-top:auto;font-size:10px;letter-spacing:.24em;font-weight:600;text-transform:uppercase;border-bottom:1px solid #111;padding-bottom:4px}"
  // ── 3. À la une : la nouveauté mise en avant
  + ".eba-une{display:grid;grid-template-columns:1fr 1fr;align-items:stretch;max-width:960px;margin:40px auto 0;text-align:left}"
  + ".eba-uph{display:block;position:relative;aspect-ratio:1 / 1;overflow:hidden}"
  + ".eba-uph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 50%;transition:transform 1.2s ease}"
  + ".eba-une:hover .eba-uph img{transform:scale(1.025)}"
  + ".eba-utx{display:flex;flex-direction:column;justify-content:center;padding:44px 52px;background:linear-gradient(180deg,#eff0e2,#e1e5c9)}"
  + ".eba-ug{font-size:9px;letter-spacing:.3em;font-weight:600;text-transform:uppercase;color:#5d7046}"
  + "#eb-acc .eba-un{font-size:24px;letter-spacing:.2em;font-weight:400;text-transform:uppercase;color:#000;margin:12px 0 10px;line-height:1.3}"
  + ".eba-ua{font-size:12px;font-weight:500;color:#2a2723;line-height:1.55}"
  + ".eba-up{font-size:13.5px;font-weight:400;line-height:1.75;color:#2a2723;margin:18px 0 0}"
  + ".eba-uprix{font-size:13px;font-weight:500;margin:20px 0 0}"
  + ".eba-ubtn{align-self:flex-start;margin-top:26px}"
  // la photo des produits se fond dans le fond du site (bords adoucis), le texte est sur la carte sauge
  + ".eba-uph{-webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent),linear-gradient(180deg,transparent,#000 8%,#000 92%,transparent);-webkit-mask-composite:source-in;mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent),linear-gradient(180deg,transparent,#000 8%,#000 92%,transparent);mask-composite:intersect}"
  + "@media (max-width:699px){.eba-une{grid-template-columns:1fr;margin-top:30px}.eba-uph{aspect-ratio:1 / 1}.eba-utx{padding:28px 24px 32px;text-align:center;align-items:center}#eb-acc .eba-un{font-size:19px}.eba-up{font-size:12.5px}.eba-ubtn{align-self:center}}"
  // ── 5. Par où commencer : les besoins
  + "#eb-acc .eba-st2{font-size:13.5px;font-weight:400;line-height:1.7;color:#2a2723;max-width:520px;margin:20px auto 0}"
  + ".eba-bes{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;max-width:1100px;margin:38px auto 0}"
  + ".eba-bes a{display:flex;align-items:center;justify-content:center;min-height:118px;padding:20px 12px;background:linear-gradient(90deg,#f8f6f1,#e2d9ca 55%,#c9bca7);background-size:240% 100%;background-position:0 0;font-size:11px;letter-spacing:.18em;line-height:1.55;font-weight:500;text-transform:uppercase;color:#111;transition:background-position .6s ease}"
  + ".eba-bes a:hover{background-position:100% 0}"
  + ".eba-tout{display:inline-block;margin-top:30px;font-size:10px;letter-spacing:.24em;font-weight:600;text-transform:uppercase;border-bottom:1px solid #111;padding-bottom:4px}"
  // ── 6. Les soins phares : à l'échelle réelle, posés sur la même ligne
  + ".eba-rang{display:grid;grid-auto-flow:column;grid-auto-columns:calc((100% - 4 * 22px) / 5);gap:22px;max-width:1120px;margin:40px auto 0;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch}"
  + ".eba-rang::-webkit-scrollbar{display:none}"
  + ".eba-pc{display:block;scroll-snap-align:start;text-align:center;color:#111}"
  + ".eba-pph{display:block;position:relative;aspect-ratio:3 / 4;overflow:hidden;max-width:300px;margin:0 auto}"
  + ".eba-pph img{color:transparent;display:block;position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:50% 93%;opacity:0;transition:opacity .6s ease,transform .4s ease}"
  + ".eba-pph img.pret{opacity:1}"
  + ".eba-pph img.brut{opacity:1;-webkit-mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent),linear-gradient(transparent,#000 8%,#000 92%,transparent);-webkit-mask-composite:source-in;mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent),linear-gradient(transparent,#000 8%,#000 92%,transparent);mask-composite:intersect}"
  + ".eba-pc:hover .eba-pph img{transform:translateY(-3px)}"
  + ".eba-pg{font-size:8.5px;letter-spacing:.28em;font-weight:600;margin:10px 0 6px;text-transform:uppercase}"
  + ".eba-pg.bloom{color:#c58b74}.eba-pg.balance{color:#7d8f66}"
  + "#eb-acc .eba-pn{font-size:12px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;margin:0 0 6px;line-height:1.35}"
  + ".eba-pa{display:block;font-size:11px;font-weight:400;color:#2a2723;margin:0 0 6px;line-height:1.5}"
  + ".eba-pp{display:block;font-size:11px;font-weight:400}"
  // ── 7. Les routines
  + ".eba-rout{grid-auto-columns:calc((100% - 2 * 22px) / 3.25)}"
  + ".eba-rc{display:flex;flex-direction:column;scroll-snap-align:start;text-align:center;color:#111;border:1px solid #e3dccf;background:#f7f5f1}"
  + ".eba-rph{display:block;aspect-ratio:4 / 4.4;overflow:hidden}"
  + ".eba-rph img{display:block;width:100%;height:100%;object-fit:cover;object-position:50% 72%;transition:transform 1.2s ease}"
  + ".eba-rc:hover .eba-rph img{transform:scale(1.03)}"
  + ".eba-rbd{display:flex;flex-direction:column;align-items:center;flex:1;padding:4px 18px 24px}"
  + ".eba-rln{display:block;width:44px;height:2px;margin:12px auto 0}"
  + ".eba-rc.bloom .eba-rln{background:linear-gradient(90deg,#efe5da,#e6cbbd,#d39b82,#eb895e,#6d222a)}.eba-rc.balance .eba-rln{background:linear-gradient(90deg,#ebecdb,#d9ddb7,#c3cc8f,#a6b965,#85a33a)}"
  + ".eba-rc .eba-pp{margin-top:auto;padding-top:8px;font-size:12px;font-weight:500}"
  + ".eba-fl{display:flex;justify-content:center;gap:10px;margin-top:22px}"
  + ".eba-fl button{width:38px;height:38px;border:1px solid #cfc6b8;background:transparent;font-size:16px;line-height:1;cursor:pointer;color:#111;font-family:'Montserrat',sans-serif}"
  + ".eba-fl button:disabled{opacity:.3;cursor:default}"
  + "@media (max-width:899px){.eba-bes{grid-template-columns:repeat(3,1fr)}}"
  + "@media (max-width:699px){.eba-bes{grid-template-columns:1fr 1fr;gap:8px;margin-top:28px}.eba-bes a{min-height:86px;font-size:10px;letter-spacing:.14em;padding:16px 8px}"
  +   ".eba-rang{grid-auto-columns:44%;gap:10px;margin:28px -16px 0;padding:0 16px;scroll-padding:0 16px}"
  +   ".eba-rout{grid-auto-columns:76%}.eba-fl{display:none}}"
  // ── 8. Elles ont choisi ELKHA.B : photos des clientes, toutes au même cadrage
  + ".eba-ugc{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;max-width:1120px;margin:40px auto 0}"
  + ".eba-uc{display:block;position:relative;aspect-ratio:9 / 16;overflow:hidden;background:#ece8e1}"
  + ".eba-uc img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform-origin:50% 0}"
  // ── 9. L'histoire
  + ".eba-hi{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;max-width:1080px;margin:0 auto;text-align:left}"
  + ".eba-hph{display:block;aspect-ratio:4 / 5;overflow:hidden}.eba-hph img{display:block;width:100%;height:100%;object-fit:cover}"
  + "#eb-acc .eba-tg{font-size:24px;letter-spacing:.2em;padding:0}.eba-gg{margin:18px 0 0}"
  + "#eb-acc .eba-htx .eba-k{padding:0}"
  + "#eb-acc .eba-hp{font-size:14px;font-weight:400;line-height:1.8;color:#2a2723;margin:20px 0 0;max-width:460px}"
  // ── 10. La philosophie
  + ".eba-eng{display:flex;justify-content:center;flex-wrap:wrap;gap:8px 22px;margin:34px 0 0;padding:26px 18px;background:linear-gradient(90deg,#f8f6f1,#e2d9ca 55%,#c9bca7);font-size:10.5px;letter-spacing:.3em;font-weight:500;text-transform:uppercase;color:#111}"
  + ".eba-eng span+span:before{content:'·';margin-right:22px;color:#8f8676}"
  // ── 11. Le Journal : les cartes du nouveau Journal (beige, monogramme embossé)
  + ".eba-jr{grid-auto-columns:calc((100% - 2 * 22px) / 3)}"
  + ".eba-jc{display:flex;flex-direction:column;scroll-snap-align:start;text-align:left;color:#111;background:#ece5db}"
  + ".eba-jph{display:block;aspect-ratio:4 / 5;overflow:hidden}.eba-jph img{display:block;width:100%;height:100%;object-fit:cover;transition:transform 1.2s ease}"
  + ".eba-jc:hover .eba-jph img{transform:scale(1.03)}"
  + ".eba-jb{position:relative;display:block;flex:1;padding:20px 22px 24px}"
  + ".eba-jk{display:block;font-size:9px;letter-spacing:.24em;font-weight:600;color:#6f685d;text-transform:uppercase}"
  + "#eb-acc .eba-jt{font-size:15px;letter-spacing:.08em;text-transform:uppercase;font-weight:600;margin:9px 0 6px;padding-right:44px}"
  + ".eba-jq{display:block;font-size:12.5px;font-weight:400;color:#2a2723;line-height:1.6}"
  + ".eba-mono{position:absolute;top:18px;right:18px;font-size:13px;font-weight:800;letter-spacing:.08em;color:transparent;background-image:linear-gradient(180deg,#fbf9f5,#e9dfd0 55%,#d9cbb6);-webkit-background-clip:text;background-clip:text;filter:drop-shadow(1px 1px 0 rgba(110,85,60,.25)) drop-shadow(-1px -1px 0 rgba(255,255,255,.8))}"
  + "@media (max-width:699px){.eba-ugc{grid-template-columns:1fr 1fr;gap:8px;margin-top:28px}.eba-hi{grid-template-columns:1fr;gap:28px;text-align:center}.eba-gg{margin:18px auto 0}#eb-acc .eba-hp{font-size:13.5px;margin:18px auto 0}#eb-acc .eba-tg{font-size:19px;letter-spacing:.16em}.eba-eng{font-size:9.5px;letter-spacing:.22em;gap:8px 14px}.eba-eng span+span:before{margin-right:14px}.eba-jr{grid-auto-columns:76%}}"
  + ".eba-psb:before,.eba-psa:after{display:none !important}.eba-sansfond{background-image:none !important}.eba-sanspad{padding-top:0 !important}.eba-cache{display:none !important}"
  // ── 4. Skin ID : la seule bande sombre de la page, avec la carte qui attend son code
  + ".eba-sid{position:relative;overflow:hidden;margin-top:110px;background:radial-gradient(700px 420px at 92% 10%,rgba(230,203,189,.18),rgba(230,203,189,0) 70%),radial-gradient(700px 420px at 30% 110%,rgba(195,204,143,.13),rgba(195,204,143,0) 70%),#1b1a17;color:" + F + "}"
  + ".eba-sin{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:40px;max-width:1240px;margin:0 auto;padding:110px 6%;text-align:left}"
  + "#eb-acc .eba-sid .eba-k{color:#cfc8bb;margin:0 0 22px;padding:0}"
  + "#eb-acc .eba-sh{font-size:40px;font-weight:300;letter-spacing:.04em;line-height:1.2;color:" + F + "}"
  + "#eb-acc .eba-sh b{font-weight:600}"
  + ".eba-sg{display:block;width:84px;height:2px;margin:26px 0 0;background:linear-gradient(90deg,#3a3732,#cfc8bb)}"
  + "#eb-acc .eba-sp{font-size:14.5px;font-weight:300;line-height:1.75;color:#e6e1d8;max-width:440px;margin:24px 0 0}"
  + ".eba-sbtn{display:inline-block;margin-top:34px;background:" + F + ";color:#111;border:0;font-family:'Montserrat',sans-serif;font-size:10.5px;letter-spacing:.24em;font-weight:600;text-transform:uppercase;padding:17px 30px;cursor:pointer;transition:background .3s ease}"
  + ".eba-sbtn:hover{background:#e6e1d8}"
  + "#eb-acc .eba-sr{font-size:10.5px;font-weight:300;letter-spacing:.06em;color:#a9a294;margin:16px 0 0}"
  // la carte
  + ".eba-carte{position:relative;display:block;width:min(470px,100%);aspect-ratio:700 / 442;margin:0 auto;border-radius:18px;overflow:hidden;color:#111;cursor:pointer;background:linear-gradient(135deg,#f6efe9 0%,#efe9df 50%,#e3e8da 100%);box-shadow:0 30px 60px rgba(0,0,0,.45),0 0 0 1px rgba(255,255,255,.25) inset;transform:rotate(-4deg);animation:ebaFlotte 7s ease-in-out infinite;transition:box-shadow .4s ease}"
  + ".eba-carte:hover{box-shadow:0 36px 70px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.3) inset}"
  + "@keyframes ebaFlotte{0%,100%{transform:rotate(-4deg) translateY(0)}50%{transform:rotate(-3deg) translateY(-8px)}}"
  + ".eba-carte:before{content:'';position:absolute;inset:0;background:repeating-radial-gradient(ellipse at 50% -30%,rgba(140,120,110,0) 0 10px,rgba(140,120,110,.10) 10px 11px);opacity:.6}"
  + ".eba-carte:after{content:'';position:absolute;inset:0;background:linear-gradient(115deg,rgba(255,255,255,0) 30%,rgba(255,255,255,.45) 45%,rgba(255,255,255,0) 60%);transform:translateX(-100%);animation:ebaReflet 7s ease-in-out infinite}"
  + "@keyframes ebaReflet{0%,60%{transform:translateX(-100%)}85%,100%{transform:translateX(100%)}}"
  + ".eba-csk{position:absolute;left:7%;top:12%;font-size:clamp(20px,3vw,38px);line-height:1.02;font-weight:300}"
  + ".eba-csk b{display:block;font-weight:800;font-size:1.55em;letter-spacing:-.02em}"
  + ".eba-ct{position:absolute;left:34%;top:20%;font-size:clamp(7px,.8vw,11px);letter-spacing:.3em;font-weight:600;color:#7a746a}"
  + ".eba-cc{position:absolute;left:34%;top:30%;font-size:clamp(28px,3.7vw,52px);font-weight:800;letter-spacing:.02em;color:#1a1916;white-space:nowrap;transition:opacity .35s ease}"
  + ".eba-cc i{font-style:normal;color:#c9c1b3}"
  + ".eba-cf{position:absolute;left:34%;top:56%;font-size:clamp(9px,1.05vw,15px);letter-spacing:.3em;font-weight:600}"
  + ".eba-cl{position:absolute;left:7%;bottom:11%;font-size:clamp(7px,.75vw,10.5px);letter-spacing:.24em;font-weight:600;color:#9b4a46}"
  + ".eba-cl:before{content:'';display:inline-block;width:8px;height:8px;border-radius:50%;background:#c9a39b;margin-right:10px;box-shadow:0 0 0 4px rgba(201,163,155,.3);animation:ebaPouls 1.8s ease-in-out infinite}"
  + "@keyframes ebaPouls{50%{box-shadow:0 0 0 7px rgba(201,163,155,.05)}}"
  + ".eba-cv{position:absolute;right:3%;top:6%;bottom:6%;writing-mode:vertical-rl;font-size:clamp(30px,4.2vw,58px);font-weight:800;letter-spacing:.06em;color:rgba(255,255,255,.55);text-shadow:0 1px 0 rgba(0,0,0,.06)}"
  + "@media (max-width:699px){.eba-sid{margin-top:84px}.eba-sin{grid-template-columns:1fr;padding:64px 26px 70px;gap:44px;text-align:center}.eba-sg{margin:22px auto 0}#eb-acc .eba-sp{margin:20px auto 0;font-size:13.5px}#eb-acc .eba-sh{font-size:28px}.eba-carte{width:92%}.eba-csk{font-size:7vw}.eba-ct{font-size:2vw}.eba-cc{font-size:9vw}.eba-cf{font-size:2.6vw}.eba-cl{font-size:2vw}.eba-cv{font-size:10vw}}"

  // essais de fond pour la bande Skin ID (fond clair : textes foncés, carte avec une ombre douce, sans reflet)
  + ".eba-sid.v-clair .eba-carte:after{display:none}"
  + ".eba-sid.v-clair .eba-carte{box-shadow:0 26px 50px rgba(90,70,50,.18),0 0 0 1px rgba(255,255,255,.6) inset}"
  + "#eb-acc .eba-sid.v-clair .eba-k{color:#5f5a53}#eb-acc .eba-sid.v-clair .eba-sh{color:#111}#eb-acc .eba-sid.v-clair .eba-sp{color:#2a2723;font-weight:400}#eb-acc .eba-sid.v-clair .eba-sr{color:#7a746a}"
  + ".eba-sid.v-clair .eba-sg{background:linear-gradient(90deg,#fbfaf7,#e9e3d9 55%,#8f8676)}"
  + ".eba-sid.v-clair .eba-sbtn{background:#111;color:" + F + "}.eba-sid.v-clair .eba-sbtn:hover{background:#3a3631}"
  + ".eba-sid.v-beige{background:linear-gradient(90deg,#f8f6f1,#e2d9ca 55%,#c9bca7)}"
  + ".eba-sid.v-peau{background:radial-gradient(700px 460px at 90% 0%,rgba(230,203,189,.55),rgba(230,203,189,0) 70%),radial-gradient(700px 460px at 10% 100%,rgba(195,204,143,.32),rgba(195,204,143,0) 70%),linear-gradient(135deg,#f6efe9,#efe9df 55%,#ebeee2)}"
  + ".eba-sid.v-taupe{background:radial-gradient(700px 420px at 92% 10%,rgba(246,239,233,.25),rgba(246,239,233,0) 70%),linear-gradient(135deg,#b9ab9a,#a39482)}"
  + ".eba-sid.v-taupe .eba-carte:after{display:none}#eb-acc .eba-sid.v-taupe .eba-k{color:#f1ebe2}#eb-acc .eba-sid.v-taupe .eba-sp{color:#fbf8f3;font-weight:400}#eb-acc .eba-sid.v-taupe .eba-sr{color:#efe8de}"
  + ".eba-sid.v-taupe .eba-carte{box-shadow:0 26px 50px rgba(60,45,30,.28)}"
  + "@media (prefers-reduced-motion:reduce){.eba-carte,.eba-carte:after,.eba-cl:before{animation:none}}"
  // apparition douce des blocs quand on descend
  + ".eba-entre{opacity:0;transform:translateY(18px);transition:opacity .9s ease,transform .9s ease}.eba-entre.vu{opacity:1;transform:none}"
  // ── Téléphone
  + "@media (max-width:699px){"
  +   ".eba-ban{height:calc(100svh - 0px);min-height:640px;max-height:900px}"
  +   ".eba-ban:after{top:auto;right:0;width:auto;height:52%;background:linear-gradient(180deg,rgba(" + FR + ",0) 0%,rgba(" + FR + ",.4) 32%,rgba(" + FR + ",.8) 62%,rgba(" + FR + ",.94) 86%," + F + " 100%)}"
  +   ".eba-bt{top:auto;bottom:70px;width:auto;right:0;padding:0 28px;justify-content:flex-end}"
  +   "#eb-acc .eba-bk{font-size:9px;letter-spacing:.42em;padding-left:.42em;margin:0 0 12px}"
  +   "#eb-acc .eba-bn{font-size:25px;letter-spacing:.26em;padding-left:.26em;line-height:1.3}"
  +   ".eba-bg{width:84px;margin:16px auto 0}"
  +   "#eb-acc .eba-bm{font-size:13.5px;max-width:300px;margin:16px auto 0}"
  +   ".eba-btn{margin-top:24px;padding:15px 22px;font-size:9.5px;letter-spacing:.2em}"
  +   ".eba-pts{width:auto;right:0;bottom:30px;padding:0}"
  +   ".eba-sec{padding:72px 16px 0}"
  +   "#eb-acc .eba-t{font-size:22px;letter-spacing:.26em;padding-left:.26em}"
  +   ".eba-gam{gap:10px;margin-top:30px}"
  +   ".eba-ph{aspect-ratio:3 / 4}"
  +   ".eba-bd{padding:20px 10px 22px}"
  +   "#eb-acc .eba-nm{font-size:15px;letter-spacing:.3em;padding-left:.3em}"
  +   ".eba-ln{width:44px;margin:11px auto}"
  +   ".eba-p{font-size:12px;line-height:1.55;margin:0 0 14px}"
  +   ".eba-lien{font-size:9px;letter-spacing:.2em}"
  + "}"
  + "@media (prefers-reduced-motion:reduce){.eba-slides img{transition:opacity .8s ease;transform:none !important}.eba-entre{opacity:1;transform:none}}";

  var st = document.createElement('style'); st.id = 'eb-accueil-css'; st.textContent = CSS; document.head.appendChild(st);

  // la page est écrite dans 2 embeds Carrd (un embed est limité en longueur) : on attend les deux
  (function attendre(n){
    var root = document.getElementById('eb-acc'), suite = document.querySelector('.eb-acc-suite');
    if(root && (suite || document.readyState === 'complete' || n <= 0)) return demarrer(root);
    if(n > 0) setTimeout(function(){ attendre(n - 1); }, 100);
  })(60);

  function demarrer(root){
    if(root.getAttribute('data-pret')) return; root.setAttribute('data-pret', '1');
    // la suite de la page (2e embed) rejoint la première partie
    document.querySelectorAll('.eb-acc-suite').forEach(function(su){ while(su.firstChild) root.appendChild(su.firstChild); su.style.display = 'none'; });
    var tel = window.matchMedia('(max-width:699px)');
    var ban = root.querySelector('.eba-ban');
  // toute la page d'accueil prend la largeur de l'écran et se centre, quelle que soit la mise en page Carrd
  function bordABord(){
    root.style.width = ''; root.style.marginLeft = ''; root.style.maxWidth = 'none';
    var g = root.getBoundingClientRect().left;
    root.style.width = document.documentElement.clientWidth + 'px'; root.style.marginLeft = (-g) + 'px';
  }
  bordABord(); setTimeout(bordABord, 400);

  // Carrd : on retire l'ancienne bannière en fond de site et l'espace qu'elle réservait, la bannière monte sous le menu
  function nettoyerFond(){
    var url = /url\(/, anc = [document.documentElement, document.body];
    for(var e = root.parentElement; e && e !== document.body; e = e.parentElement) anc.push(e);
    anc.forEach(function(el){
      ['::before', '::after'].forEach(function(ps, k){ var cs = getComputedStyle(el, ps); if(cs.content !== 'none' && url.test(cs.backgroundImage)) el.classList.add(k ? 'eba-psa' : 'eba-psb'); });
      if(url.test(getComputedStyle(el).backgroundImage)) el.classList.add('eba-sansfond');
      if(el !== document.documentElement && el !== document.body && parseFloat(getComputedStyle(el).paddingTop) > window.innerHeight * .12) el.classList.add('eba-sanspad');
    });
    // une grande image de fond posée à part (calque fixe de Carrd)
    document.querySelectorAll('body > *').forEach(function(el){
      if(el.contains(root) || el.id === 'eb-acc') return;
      var cs = getComputedStyle(el);
      if((cs.position === 'fixed' || cs.position === 'absolute') && url.test(cs.backgroundImage) && el.offsetWidth > window.innerWidth * .6) el.classList.add('eba-cache');
    });
    // mise en page Carrd « en deux colonnes » (contenu d'un côté, image de l'autre) : le contenu reprend toute la largeur
    var W = document.documentElement.clientWidth;
    for(var c = root.parentElement; c && c !== document.body; c = c.parentElement){
      var parent = c.parentElement; if(!parent) break;
      var autre = false;
      [].forEach.call(parent.children, function(f){
        if(f === c || /^(SCRIPT|STYLE|LINK|NOSCRIPT)$/.test(f.tagName) || f.classList.contains('eba-cache')) return;
        var vide = !f.textContent.trim() && !f.querySelector('img,video,iframe,svg,canvas');
        var r = f.getBoundingClientRect();
        if(vide && r.width > W * .2 && r.height > window.innerHeight * .3){ f.classList.add('eba-cache'); autre = true; }
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
    var ecart = ban.getBoundingClientRect().top + window.scrollY;
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


    // cadrage de chaque photo (ordinateur / téléphone), réglé dans l'embed
    function cadrer(){
      root.querySelectorAll('img[data-pos]').forEach(function(im){
        im.style.objectPosition = (tel.matches && im.getAttribute('data-pos-tel')) || im.getAttribute('data-pos');
      });
    }
    root.querySelectorAll('img[data-zoom]').forEach(function(im){ var z = parseFloat(im.getAttribute('data-zoom')) || 1; if(z !== 1) im.style.transform = 'scale(' + z + ')'; });
    cadrer(); if(tel.addEventListener) tel.addEventListener('change', cadrer);
    // bande Skin ID : fond dégradé beige (choisi le 3 nov.)
    var bandeSid = root.querySelector('.eba-sid'); if(bandeSid) bandeSid.classList.add('v-clair', 'v-beige');
    requestAnimationFrame(function(){ root.classList.add('eba-pret'); });

    // ── Bannière : une photo après l'autre, en fondu
    if(ban){
      var photos = [].slice.call(ban.querySelectorAll('.eba-slides img')), pts = ban.querySelector('.eba-pts'), i = 0, minut = null;
      var traits = photos.map(function(p, k){ var t = document.createElement('i'); t.addEventListener('click', function(){ montrer(k); }); if(pts) pts.appendChild(t); return t; });
      function montrer(k){
        i = (k + photos.length) % photos.length;
        photos.forEach(function(p, n){ p.classList.toggle('on', n === i); });
        traits.forEach(function(t, n){ t.classList.remove('on'); t.classList.toggle('vu', n < i); void t.offsetWidth; });
        traits[i].classList.add('on');
        clearTimeout(minut); minut = setTimeout(function(){ montrer(i + 1); }, REGLAGES.dureePhoto * 1000);
      }
      if(photos.length > 1) montrer(0); else if(pts) pts.style.display = 'none';
      // la bannière se met en pause quand on ne la voit plus
      if('IntersectionObserver' in window){
        new IntersectionObserver(function(e){ if(e[0].isIntersecting){ if(!minut && photos.length > 1) montrer(i); } else { clearTimeout(minut); minut = null; } }).observe(ban);
      }
      var bouton = ban.querySelector('.eba-btn');
      if(bouton) bouton.addEventListener('click', function(){
        var cible = document.getElementById('eba-' + bouton.getAttribute('data-vers')); if(!cible) return;
        window.scrollTo({ top: window.scrollY + cible.getBoundingClientRect().top - REGLAGES.espaceMenu + 10, behavior: 'smooth' });
      });
    }

    // ── Soins phares : photos fondues dans le fond du site, à la taille réelle, sur la même ligne
  function src(u, w){ if(!u) return ''; if(u.indexOf('cdn.shopify.com') < 0) return u; u = u.split('?')[0];   // l'ancien numéro « ?v= » de Shopify est retiré : on reçoit toujours la photo du jour
    return u + '?width=' + w + '&eb=' + REGLAGES.versionPhotos; }
  function brute(img){ return (img.getAttribute('data-src') || img.getAttribute('src') || '').replace(/([?&])width=\d+&?/, '$1').replace(/[?&]$/, ''); }
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
  
    root.querySelectorAll('.eba-pph img[data-h]').forEach(retravailler);
    // flèches des rangées qui défilent (routines sur ordinateur)
    root.querySelectorAll('.eba-fl').forEach(function(fl){
      var r = fl.previousElementSibling, g = fl.querySelector('[data-s="-1"]'), d = fl.querySelector('[data-s="1"]');
      function maj(){ g.disabled = r.scrollLeft < 4; d.disabled = r.scrollLeft + r.clientWidth > r.scrollWidth - 4; }
      [g, d].forEach(function(b){ b.addEventListener('click', function(){ var c = r.querySelector('a'); r.scrollBy({ left: (+b.getAttribute('data-s')) * (c ? c.offsetWidth + 22 : 300), behavior: 'smooth' }); }); });
      r.addEventListener('scroll', maj, { passive: true }); window.addEventListener('resize', maj); maj();
    });

    // ── Skin ID : le code de la carte change sans cesse, le vrai reste une surprise pour la fin du diagnostic
    var cc = root.querySelector('.eba-cc');
    if(cc){
      var CODES = ['B<i>·</i>N<i>?</i>', 'BL<i>·</i>N<i>?</i>', 'BA<i>·</i>N<i>?</i>', '<i>?</i><i>·</i>N<i>?</i>'], ic = 0;
      setInterval(function(){ cc.style.opacity = 0; setTimeout(function(){ ic = (ic + 1) % CODES.length; cc.innerHTML = CODES[ic]; cc.style.opacity = 1; }, 350); }, 2200);
    }

    // ── Pour Google : la marque et le site (nom, logo, réseaux)
    try {
      if(!document.getElementById('eb-acc-ld')){
        var ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.id = 'eb-acc-ld';
        ld.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": [
          { "@type": "Organization", "name": "ELKHA.B", "url": "https://elkhab.com/", "description": "Soins visage vegan et naturels, formulations certifiées COSMOS Natural. Deux gammes : Bloom et Balance.", "sameAs": ["https://www.tiktok.com/@elkha.b"] },
          { "@type": "WebSite", "name": "ELKHA.B", "url": "https://elkhab.com/", "inLanguage": "fr-FR" }
        ] });
        document.head.appendChild(ld);
      }
    } catch(err){}

    // ── Apparition douce des sections quand la cliente descend
    var blocs = root.querySelectorAll('.eba-sec>.eba-k,.eba-sec>.eba-t,.eba-gc,.eba-une,.eba-sin>div,.eba-bes,.eba-rang,.eba-ugc,.eba-hi');
    if('IntersectionObserver' in window){
      var obs = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('vu'); obs.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
      blocs.forEach(function(b, n){ b.classList.add('eba-entre'); if(b.classList.contains('eba-gc')) b.style.transitionDelay = (n % 2 ? .15 : 0) + 's'; obs.observe(b); });
    }
  }
})();
